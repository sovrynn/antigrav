#!/usr/bin/env python3
import argparse
import subprocess
import sys

def parse_args():
    p = argparse.ArgumentParser(
        description="Batch-download YouTube URLs listed in a file via yt-dlp"
    )
    p.add_argument(
        "input_file",
        help="Path to a text file containing one YouTube link per line"
    )
    return p.parse_args()

def read_urls(path):
    """Read non-empty, stripped lines from the given file."""
    urls = []
    with open(path, "r", encoding="utf-8") as f:
        for line in f:
            url = line.strip()
            if url:
                urls.append(url)
    return urls

def main():
    args = parse_args()
    try:
        urls = read_urls(args.input_file)
    except FileNotFoundError:
        print(f"Error: file not found: {args.input_file}", file=sys.stderr)
        sys.exit(1)

    total = len(urls)
    if total == 0:
        print("No URLs found in the input file.", file=sys.stderr)
        sys.exit(1)

    for idx, url in enumerate(urls, start=1):
        print(f"\n[{idx}/{total}] Downloading: {url}\n")
        # Call yt-dlp; output goes straight to your terminal
        result = subprocess.run(
            ["yt-dlp", url],
            stdout=sys.stdout,
            stderr=sys.stderr
        )
        if result.returncode != 0:
            print(f"⚠️ yt-dlp failed for {url} (exit code {result.returncode})", file=sys.stderr)

if __name__ == "__main__":
    main()
