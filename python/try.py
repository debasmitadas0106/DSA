import argparse

def main():
    parser = argparse.ArgumentParser(description="Data Migration Tool")

    parser.add_argument("--load-statuses", action="store_true", help="This is a test")
    parser.add_argument("--load-courts", action="store_true")
    parser.add_argument("--limit", type=int, default=100)

    args = parser.parse_args()

    if args.load_statuses:
        print("Loading statuses...")

    if args.load_courts:
        print("Loading courts...")

    print("Limit:", args.limit)

if __name__ == "__main__":
    main()