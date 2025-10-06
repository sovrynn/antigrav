import os

def find_mp4_files(directory):
    """Recursively search for all .mp4 files starting from the given directory."""
    for root, _, files in os.walk(directory):
        for file in files:
            if file.lower().endswith('.mp4'):
                print(os.path.join(root, file))

if __name__ == "__main__":
    start_dir = input("Enter the directory to search: ").strip()
    if not os.path.isdir(start_dir):
        print("Invalid directory. Please try again.")
    else:
        print(f"Searching for .mp4 files in: {start_dir}\n")
        find_mp4_files(start_dir)
