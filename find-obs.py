import os
import re

def find_timestamped_videos(directory):
    """
    Recursively search for files matching the pattern:
    YYYY-MM-DD HH-MM-SS.mp4
    """
    # Regex pattern for filenames like 2025-09-06 01-22-38.mp4
    pattern = re.compile(r'^\d{4}-\d{2}-\d{2} \d{2}-\d{2}-\d{2}\.mp4$')

    for root, _, files in os.walk(directory):
        for file in files:
            if pattern.match(file):
                print(os.path.join(root, file))

if __name__ == "__main__":
    start_dir = input("Enter the directory to scan: ").strip()
    if not os.path.isdir(start_dir):
        print("Invalid directory. Please try again.")
    else:
        print(f"Scanning for timestamped .mp4 files in: {start_dir}\n")
        find_timestamped_videos(start_dir)
