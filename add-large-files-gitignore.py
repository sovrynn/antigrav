#!/usr/bin/env python3
import os
import sys
import stat
import subprocess
import unicodedata
from pathlib import Path

THRESHOLD_BYTES = 100 * 1024 * 1024  # 100 MiB

def die(msg, code=1):
    print(f"ERROR: {msg}", file=sys.stderr)
    sys.exit(code)

def git_root():
    try:
        out = subprocess.check_output(
            ["git", "rev-parse", "--show-toplevel"],
            stderr=subprocess.STDOUT,
            text=True,
        ).strip()
        return Path(out)
    except subprocess.CalledProcessError as e:
        die("Not inside a Git repository (git rev-parse failed).")

def list_tracked_paths(repo_root: Path):
    """Return a set of tracked file paths relative to repo root, with '/' separators and NFC normalized."""
    try:
        out = subprocess.check_output(
            ["git", "-C", str(repo_root), "ls-files", "-z"],
            stderr=subprocess.STDOUT,
        )
    except subprocess.CalledProcessError:
        die("Failed to list tracked files via git ls-files.")
    paths = set()
    for raw in out.split(b"\x00"):
        if not raw:
            continue
        # Git paths are UTF-8 by convention.
        p = raw.decode("utf-8", errors="surrogateescape")
        # Normalize to NFC for consistent comparison and writing.
        p_nfc = unicodedata.normalize("NFC", p)
        # Use forward slashes (gitignore uses '/')
        paths.add(p_nfc.replace(os.sep, "/"))
    return paths

def escape_gitignore_component(ch: str) -> str:
    # Escape gitignore metacharacters so they match literally.
    if ch in ['\\', ' ', '#', '!', '[', ']', '?', '*']:
        return '\\' + ch
    if ch == '\t':
        return '\\t'
    return ch

def to_gitignore_literal_path(rel_path: str) -> str:
    """
    Convert a relative path (with OS separators) to a gitignore-anchored literal:
    - Leading '/' anchors to repo root.
    - Forward slashes as separators.
    - Escape special characters so the path is not treated as a pattern.
    - Write in UTF-8 NFC normalization.
    """
    # Normalize Unicode to NFC before escaping/writing
    rel_path = unicodedata.normalize("NFC", rel_path)
    rel_path = rel_path.replace(os.sep, "/")
    # Escape each character as needed
    escaped = "".join(escape_gitignore_component(c) for c in rel_path)
    # Ensure single leading slash to anchor at repo root
    if not escaped.startswith("/"):
        escaped = "/" + escaped
    return escaped

def is_regular_file(path: Path) -> bool:
    try:
        st = path.lstat()
    except OSError:
        return False
    # Exclude symlinks; only consider regular files
    if stat.S_ISLNK(st.st_mode):
        return False
    return stat.S_ISREG(st.st_mode)

def file_size(path: Path) -> int:
    try:
        return path.stat().st_size
    except OSError:
        return -1

def load_existing_gitignore_lines(gitignore_path: Path):
    if not gitignore_path.exists():
        return set(), []
    try:
        text = gitignore_path.read_text(encoding="utf-8", errors="replace")
    except Exception:
        # Fallback to binary read and decode best-effort
        text = gitignore_path.read_bytes().decode("utf-8", errors="replace")
    lines = text.splitlines()
    return set(lines), lines  # set for membership, list for possible future use

def append_lines(gitignore_path: Path, lines_to_add):
    """
    Append lines to .gitignore, ensuring that we *start on a new line*
    even if the existing file does not end with a newline.
    """
    if not lines_to_add:
        return

    gitignore_path.parent.mkdir(parents=True, exist_ok=True)

    need_leading_newline = False
    if gitignore_path.exists() and gitignore_path.stat().st_size > 0:
        # Peek last byte without loading entire file
        with gitignore_path.open("rb") as fb:
            try:
                fb.seek(-1, os.SEEK_END)
                last = fb.read(1)
                need_leading_newline = last != b"\n"
            except OSError:
                # In case seeking fails for some reason, be conservative
                need_leading_newline = True

    # newline='\n' makes sure we write LF consistently across platforms
    with gitignore_path.open("a", encoding="utf-8", newline="\n") as f:
        if need_leading_newline:
            f.write("\n")
        for line in lines_to_add:
            f.write(line)
            f.write("\n")

def main():
    repo_root = git_root()
    cwd = Path.cwd()

    try:
        cwd_rel = cwd.relative_to(repo_root)
    except ValueError:
        # If current dir is outside repo root (shouldn't happen if git_root worked), fall back to scanning repo root
        cwd_rel = Path(".")

    tracked = list_tracked_paths(repo_root)
    gitignore_path = repo_root / ".gitignore"
    existing_set, _ = load_existing_gitignore_lines(gitignore_path)

    candidates = []
    skipped_tracked = []
    skipped_unrepresentable = []

    # Skip .git by pruning dirs before descending
    for root, dirs, files in os.walk(cwd, topdown=True, followlinks=False):
        dirs[:] = [d for d in dirs if d != ".git"]

        root_path = Path(root)
        for name in files:
            p = root_path / name
            if not is_regular_file(p):
                continue

            sz = file_size(p)
            if sz < 0:
                continue
            if sz >= THRESHOLD_BYTES:
                # Compute repo-relative path with OS separators first
                rel_path = os.path.relpath(p, repo_root)
                # Newlines in a filename cannot be represented correctly in .gitignore
                if "\n" in rel_path or "\r" in rel_path:
                    skipped_unrepresentable.append((rel_path, sz))
                    continue

                rel_path_slash = rel_path.replace(os.sep, "/")
                # Skip if tracked (adding to .gitignore won't help)
                if rel_path_slash in tracked:
                    skipped_tracked.append((rel_path, sz))
                    continue

                literal = to_gitignore_literal_path(rel_path)
                if literal not in existing_set:
                    candidates.append((literal, rel_path, sz))

    if not candidates and not skipped_tracked and not skipped_unrepresentable:
        print("No qualifying files found (≥ 100 MiB) to add to .gitignore.")
        return

    lines_to_add = []
    if candidates:
        header = f"# Added by ignore_large_files.py — literal paths ≥ 100 MiB from {cwd} downward"
        if header not in existing_set:
            lines_to_add.append(header)
        for literal, rel_path, sz in sorted(candidates, key=lambda x: x[1].lower()):
            comment = f"# {rel_path} ({sz} bytes)"
            if comment not in existing_set:
                lines_to_add.append(comment)
            lines_to_add.append(literal)

        append_lines(gitignore_path, lines_to_add)

    # Report
    if candidates:
        print(f"Added {len([l for l in lines_to_add if not l.startswith('#')])} path(s) to {gitignore_path}.")
    else:
        print("No new .gitignore entries were needed (duplicates or none found).")

    if skipped_tracked:
        print("\nNote: The following large files are already tracked by Git and were NOT added:")
        for rel_path, sz in sorted(skipped_tracked, key=lambda x: x[0].lower())[:50]:
            print(f"  - {rel_path} ({sz} bytes)")
        if len(skipped_tracked) > 50:
            print(f"  ... and {len(skipped_tracked) - 50} more")

        print("  To stop tracking a large file, you can remove it from Git history or run:")
        print("    git rm --cached -- <path>   # then commit, and ensure it’s in .gitignore")

    if skipped_unrepresentable:
        print("\nWarning: Some large files have newlines in their names and cannot be represented in .gitignore:")
        for rel_path, sz in sorted(skipped_unrepresentable, key=lambda x: x[0].lower())[:50]:
            print(f"  - {rel_path!r} ({sz} bytes)")
        if len(skipped_unrepresentable) > 50:
            print(f"  ... and {len(skipped_unrepresentable) - 50} more")

if __name__ == "__main__":
    main()
