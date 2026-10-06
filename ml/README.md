# Justiway ML

Safety-theme classifier for travel reviews. See [../docs/PRD.md](../docs/PRD.md),
[../docs/SPEC.md](../docs/SPEC.md) and [../docs/DATA_PLAN.md](../docs/DATA_PLAN.md).

## Setup (Windows, from this folder)

```powershell
python -m venv .venv
.venv\Scripts\Activate.ps1
pip install -r requirements.txt
```

## Stage 1: feasibility test

```powershell
python src/feasibility.py --n 50000
```

Streams a shuffled sample of the Booking.com accommodation-reviews dataset
(no full download) and counts keyword hits per safety theme.

## Data

| Dataset | Licence | Use |
|---|---|---|
| [Booking-com/accommodation-reviews](https://huggingface.co/datasets/Booking-com/accommodation-reviews) | Non-commercial (verify on dataset card) | Main source |
| [Inside Airbnb](https://insideairbnb.com/get-the-data/) | CC BY 4.0 | Backup |

Raw data is git-ignored. Credit the sources in any report or write-up.
