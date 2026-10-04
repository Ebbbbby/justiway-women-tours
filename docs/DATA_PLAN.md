# Justiway: Data & Labelling Plan

Status: Draft v0.1 · Companion to [SPEC.md](SPEC.md)

## 1. Purpose

Describe where the review data comes from, how it is labelled, and how label quality is measured. For a project like this, the dataset is the hardest and most valuable part. Decisions here are what a course leader will probe first.

## 2. Sources (to confirm)

Use sources in this order of preference, and record each one in the table below.

1. **Public datasets with a clear licence** (hotel, tour or travel review datasets on Kaggle or Hugging Face). Check each licence before use.
2. **Your own collection**, only where the site's terms allow it. Don't scrape sources that prohibit it.
3. **Synthetic or augmented examples** (written by you, or LLM-generated and then hand-checked). These are acceptable for rare themes **if clearly flagged** with `source = synthetic` and never mixed into the test set.

| Source | Licence / terms | Size | Used for | Notes |
|--------|-----------------|------|----------|-------|
| _TBD_ | _TBD_ | _TBD_ | train / val / test | |

**Rule:** the test set contains only real, hand-labelled reviews, never synthetic ones.

## 3. Selection

Most reviews say nothing about safety, so a random sample gives very few positives. To fix that:

- Keyword-filter a candidate pool (for example: *safe, unsafe, harass, followed, driver, taxi, lock, night, alone, scared, uncomfortable*) to **find** candidates for labelling.
- Also include a random sample of unfiltered reviews, so the model sees realistic negatives (`none`).
- Record how each review was selected (`selection = keyword | random`). Report this honestly, because it affects how results generalise.

## 4. Labelling guide

Multi-label. Apply every theme that clearly applies. Use `none` only when no other label applies. If you are unsure, pick the most conservative option and note it in `notes`.

| Label | Apply when | Example | Do not apply when |
|-------|-----------|---------|-------------------|
| `harassment` | Unwanted comments, messages, touching, following or pressure from staff, guides, drivers or guests | "The receptionist kept asking me to join him for drinks" | Generic rudeness with no unwanted personal attention |
| `transport_safety` | Safety of transfers, taxis or vehicles | "Driver was speeding and the car had no seatbelts" | Late pick-up with no safety angle |
| `accommodation_security` | Locks, lighting, entrances, isolation, intrusion, front-desk security | "The room door didn't lock properly" | Cleanliness or noise issues |
| `night_safety` | Safety after dark or in specific areas or times | "Wouldn't walk back alone after 9pm" | Mentions of night with no safety concern |
| `felt_safe` | Explicit positive statement about safety or security | "As a solo woman I felt completely safe here" | Generic praise ("lovely hotel") |
| `staff_conduct` | Respect, professionalism or disrespect of staff and guides, not harassment | "The guide was dismissive of our concerns" | Service speed |
| `none` | No safety-relevant content | "Great breakfast, comfy beds" | Any other label applies |

Rules of thumb:
- Label what the **review says**, not what you assume. Don't infer safety issues that aren't stated.
- Judge the reviewer's experience, not the place's reputation.
- Negated statements count by meaning ("never felt unsafe" is `felt_safe`).

## 5. Annotation file format

CSV at `ml/data/labelled/reviews_labelled.csv`:

| Column | Description |
|--------|-------------|
| `id` | Stable unique ID |
| `text` | Cleaned review text (no personal data) |
| `source` | Dataset name or `synthetic` |
| `selection` | `keyword` or `random` |
| `harassment` … `none` | 0 or 1 per label |
| `annotator` | `A` (you) or `B` (second annotator) |
| `notes` | Edge cases and uncertainty |

## 6. Quality control

- **Second annotator:** have a friend or classmate independently label a random sample of at least 200 reviews using this guide.
- **Agreement:** compute Cohen's kappa per label. Report it. If kappa is low (below about 0.6) for a label, tighten the guide, discuss disagreements, relabel and re-measure.
- **Adjudication:** resolve disagreements by discussion and record the final label.
- **Spot checks:** re-label 5% of your own items a week later to measure your own consistency.

## 7. Cleaning

- Remove duplicates and near-duplicates (important to avoid leakage across splits).
- Strip names, phone numbers, emails and URLs.
- Keep English only for v1.
- Don't remove "noisy" text such as emojis and typos. The model must cope with real reviews.

## 8. Splits

- Split **after** deduplication.
- Stratify across labels (iterative stratification) and, where possible, group by hotel or venue so reviews of the same place don't appear in both train and test.
- Freeze the test set. Don't tune on it.

## 9. Ethics and limits

- Reviews are personal accounts. Don't publish raw reviews in the repo or demo beyond short snippets, and check each licence.
- The dataset reflects who writes reviews (often tourists, often English-speaking), so it under-represents many voices. State this in the model card.
- Selection by keyword biases the data toward explicit safety language. State this too.
- The model flags **themes in text**. It does not measure how safe a place is.

## 10. Deliverables from this stage

- [ ] Source table filled in with licences
- [ ] At least 1,500 labelled reviews (target 3,000)
- [ ] 200+ double-labelled reviews with kappa per label
- [ ] Frozen train / validation / test split files
- [ ] A short data statement: sources, selection, known biases
