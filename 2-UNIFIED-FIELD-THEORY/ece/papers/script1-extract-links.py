#!/usr/bin/env python3
"""
Usage:
    python extract_links.py path/to/snippet.html

Reads a (relative) text/HTML snippet file, extracts only the FIRST <a href="...">
link from within each <li> ... </li> element, and writes them to output.txt (one per line).
"""

import sys
from html.parser import HTMLParser

class FirstLinkInLIExtractor(HTMLParser):
    def __init__(self):
        super().__init__(convert_charrefs=True)
        self.links = []
        self.in_li = False
        self.captured_in_this_li = False

    def handle_starttag(self, tag, attrs):
        tag = tag.lower()
        if tag == "li":
            self.in_li = True
            self.captured_in_this_li = False
        elif tag == "a" and self.in_li and not self.captured_in_this_li:
            for k, v in attrs:
                if k.lower() == "href" and v is not None:
                    self.links.append(v.strip())
                    self.captured_in_this_li = True
                    break

    def handle_endtag(self, tag):
        if tag.lower() == "li":
            self.in_li = False
            self.captured_in_this_li = False

def main():
    if len(sys.argv) != 2:
        print("Usage: python extract_links.py <relative_path_to_html_snippet>")
        sys.exit(1)

    input_path = sys.argv[1]

    try:
        with open(input_path, "r", encoding="utf-8", errors="ignore") as f:
            content = f.read()
    except FileNotFoundError:
        print(f"Error: file not found: {input_path}")
        sys.exit(1)

    parser = FirstLinkInLIExtractor()
    parser.feed(content)

    with open("output.txt", "w", encoding="utf-8") as out:
        for url in parser.links:
            out.write(url + "\n")

    print(f"Extracted {len(parser.links)} link(s) to output.txt")

if __name__ == "__main__":
    main()
