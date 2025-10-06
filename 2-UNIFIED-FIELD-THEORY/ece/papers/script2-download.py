#!/usr/bin/env python3
"""
Usage:
    python download_pdfs.py urls.txt

- urls.txt: a text file with ONE PDF URL per line (relative path allowed).
- Downloads go to ./pdfs/ (created if missing).
- Shows a console progress indicator per file.
"""

import os
import sys
import time
import math
import errno
import string
import random
from urllib.parse import urlsplit, unquote
from urllib.request import Request, urlopen
from urllib.error import URLError, HTTPError

CHUNK_SIZE = 64 * 1024  # 64 KB
TIMEOUT = 30            # seconds
RETRIES = 2             # number of retries per URL (in addition to first try)
USER_AGENT = "Mozilla/5.0 (compatible; PDFDownloader/1.0)"

def safe_filename_from_url(url: str) -> str:
    """
    Derive a safe filename from a URL, ensuring it ends with .pdf and
    contains only filesystem-safe characters.
    """
    path = urlsplit(url).path
    name = os.path.basename(path) or "download.pdf"
    name = unquote(name)

    # Strip query fragments from basename if any slipped in
    for sep in ('?', '#'):
        if sep in name:
            name = name.split(sep, 1)[0]

    # Ensure .pdf extension
    if not name.lower().endswith(".pdf"):
        name += ".pdf"

    # Sanitize: allow letters, digits, a few symbols; replace others with '_'
    allowed = f"-_.() {string.ascii_letters}{string.digits}"
    name = "".join(c if c in allowed else "_" for c in name).strip()

    # Avoid empty names
    if not name or name == ".pdf":
        name = f"file_{random.randrange(10**6):06d}.pdf"

    return name

def uniquify_path(path: str) -> str:
    """
    If path exists, append a numeric suffix before the extension.
    """
    if not os.path.exists(path):
        return path
    root, ext = os.path.splitext(path)
    n = 1
    while True:
        candidate = f"{root} ({n}){ext}"
        if not os.path.exists(candidate):
            return candidate
        n += 1

def human_size(n: int) -> str:
    units = ["B", "KB", "MB", "GB", "TB"]
    if n <= 0:
        return "0 B"
    i = min(int(math.log(n, 1024)), len(units) - 1)
    return f"{n / (1024 ** i):.1f} {units[i]}"

def progress_bar(bytes_done, total_bytes, width=40):
    if total_bytes and total_bytes > 0:
        frac = min(1.0, bytes_done / total_bytes)
        filled = int(frac * width)
        bar = "#" * filled + "-" * (width - filled)
        pct = int(frac * 100)
        return f"[{bar}] {pct:3d}% {human_size(bytes_done)}/{human_size(total_bytes)}"
    else:
        # Unknown total size
        dots = (bytes_done // (256 * 1024)) % (width + 1)
        bar = "." * dots
        return f"[{bar:<{width}}] {human_size(bytes_done)} / ?"

def download_with_progress(url: str, dest_path: str) -> None:
    req = Request(url, headers={"User-Agent": USER_AGENT})
    with urlopen(req, timeout=TIMEOUT) as resp:
        total = resp.length  # None if unknown
        downloaded = 0

        # Prepare tmp file write
        tmp_path = dest_path + ".part"
        with open(tmp_path, "wb") as f:
            start = time.time()
            while True:
                chunk = resp.read(CHUNK_SIZE)
                if not chunk:
                    break
                f.write(chunk)
                downloaded += len(chunk)
                # Print progress line
                sys.stdout.write("\r" + progress_bar(downloaded, total))
                sys.stdout.flush()

        # Finish line
        duration = max(time.time() - start, 1e-6)
        sys.stdout.write(f"\r{progress_bar(downloaded, total)}  ({human_size(int(downloaded/duration))}/s)\n")
        sys.stdout.flush()

    # Move tmp into place
    os.replace(tmp_path, dest_path)

def ensure_dir(path: str):
    try:
        os.makedirs(path, exist_ok=True)
    except OSError as e:
        if e.errno != errno.EEXIST:
            raise

def main():
    if len(sys.argv) != 2:
        print("Usage: python download_pdfs.py <relative_path_to_url_list>")
        sys.exit(1)

    list_path = sys.argv[1]
    if not os.path.isfile(list_path):
        print(f"Error: file not found: {list_path}")
        sys.exit(1)

    out_dir = os.path.join(".", "pdfs")
    ensure_dir(out_dir)

    with open(list_path, "r", encoding="utf-8", errors="ignore") as f:
        urls = [line.strip() for line in f if line.strip() and not line.strip().startswith("#")]

    if not urls:
        print("No URLs found in input file.")
        sys.exit(0)

    print(f"Found {len(urls)} URL(s). Downloading to {out_dir}/\n")

    for idx, url in enumerate(urls, 1):
        print(f"[{idx}/{len(urls)}] {url}")
        filename = safe_filename_from_url(url)
        dest = uniquify_path(os.path.join(out_dir, filename))

        attempts_left = 1 + RETRIES
        last_err = None
        while attempts_left > 0:
            try:
                download_with_progress(url, dest)
                print(f"Saved: {dest}\n")
                break
            except (HTTPError, URLError, TimeoutError, OSError) as e:
                last_err = e
                attempts_left -= 1
                if attempts_left > 0:
                    print(f"\nRetrying... ({RETRIES - attempts_left + 1}/{RETRIES})")
                    time.sleep(1.0)
                else:
                    print(f"\nFailed to download: {url}\n  Error: {e}\n")

    print("All done.")

if __name__ == "__main__":
    main()
