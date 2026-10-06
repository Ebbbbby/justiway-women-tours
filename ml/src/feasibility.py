"""Feasibility test: does the Booking.com dataset contain enough safety-related
reviews for each theme to make labelling worthwhile?

Usage (from the ml/ folder, venv active):
    python src/feasibility.py --n 50000

It streams a shuffled sample (no full download), counts keyword hits per theme,
prints a few short example snippets so you can sanity-check the patterns, and
saves the sample to data/raw/booking_sample.parquet (git-ignored).
"""
import argparse
import sys
from pathlib import Path

import pandas as pd
from datasets import load_dataset

sys.path.insert(0, str(Path(__file__).parent))
from themes import THEMES, find_themes  # noqa: E402

DATASET = "Booking-com/accommodation-reviews"
OUT = Path(__file__).resolve().parent.parent / "data" / "raw" / "booking_sample.parquet"


def main() -> None:
    ap = argparse.ArgumentParser()
    ap.add_argument("--n", type=int, default=50_000, help="reviews to sample")
    ap.add_argument("--seed", type=int, default=42)
    args = ap.parse_args()

    print(f"Streaming {args.n:,} shuffled reviews from {DATASET} ...")
    ds = load_dataset(DATASET, split="train", streaming=True)
    ds = ds.shuffle(seed=args.seed, buffer_size=20_000).take(args.n)
    df = pd.DataFrame(list(ds))
    print(f"Got {len(df):,} rows. Columns: {list(df.columns)}")

    for col in ("review_title", "review_positive", "review_negative"):
        if col not in df:
            df[col] = ""
        df[col] = df[col].fillna("").astype(str)
    df["text"] = (
        df["review_title"] + ". " + df["review_positive"] + " " + df["review_negative"]
    ).str.strip()
    df["themes"] = df["text"].map(find_themes)

    OUT.parent.mkdir(parents=True, exist_ok=True)
    df.to_parquet(OUT, index=False)
    print(f"Saved sample to {OUT}\n")

    n = len(df)
    print(f"{'theme':<24}{'hits':>8}{'% of sample':>14}   verdict (need ~100+)")
    for theme in THEMES:
        hits = int(df["themes"].map(lambda t, th=theme: th in t).sum())
        verdict = "OK" if hits >= 100 else "LOW - needs more data"
        print(f"{theme:<24}{hits:>8}{100 * hits / n:>13.2f}%   {verdict}")
    any_hit = int((df["themes"].map(len) > 0).sum())
    print(f"{'(any theme)':<24}{any_hit:>8}{100 * any_hit / n:>13.2f}%")

    print("\nSample snippets (first 160 chars) so you can sanity-check the patterns:")
    for theme in THEMES:
        rows = df[df["themes"].map(lambda t, th=theme: th in t)].head(3)
        print(f"\n[{theme}]")
        for text in rows["text"]:
            print("  -", text[:160].replace("\n", " "))


if __name__ == "__main__":
    main()
