import os

def find_empty_files(root_dir):
    for dirpath, _, filenames in os.walk(root_dir):
        for file in filenames:
            filepath = os.path.join(dirpath, file)
            if os.path.isfile(filepath) and os.path.getsize(filepath) == 0:
                print(filepath)

if __name__ == "__main__":
    # Change '.' to the directory you want to start scanning from
    start_directory = "."
    find_empty_files(start_directory)
