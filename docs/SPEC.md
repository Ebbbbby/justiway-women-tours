# Justiway: Technical Specification (SPEC)

Status: Draft v0.1 · Companion to [PRD.md](PRD.md)

## 1. Overview

Two parts: the existing **Next.js 15 web app** (frontend) and a new **Python ML service** (FastAPI) that classifies safety themes in review text.

```
┌────────────────────┐   HTTPS/JSON    ┌─────────────────────────┐
│ Next.js app        │ ──────────────▶ │ FastAPI ML service      │
│ (src/app, Tailwind)│  /api/insights  │ ml/service/             │
│ route handler      │ ◀────────────── │  loads trained model    │
└────────────────────┘                 └─────────────────────────┘
                                                  ▲
                                   trained offline │ ml/notebooks, ml/src
                                                  │
                                         ┌────────┴────────┐
                                         │ data/ (versioned │
                                         │ processed splits)│
                                         └─────────────────┘
```

The model is trained offline and loaded by the service at start-up. The website never trains anything.

## 2. Repository layout (target)

```
justiwaytravelandtours/
├── src/                  # Next.js app (existing)
├── docs/                 # PRD, SPEC, DATA_PLAN, ROADMAP
└── ml/
    ├── data/
    │   ├── raw/          # untouched source data (git-ignored if large or licensed)
    │   ├── labelled/     # hand-labelled CSVs (committed)
    │   └── processed/    # train/val/test splits
    ├── notebooks/        # 01_eda, 02_baseline, 03_transformer, 04_error_analysis
    ├── src/              # reusable code: preprocessing, train, evaluate
    ├── service/          # FastAPI app
    ├── models/           # saved weights (git-ignored; documented download)
    ├── reports/          # figures, metrics.json, model_card.md
    ├── requirements.txt
    └── README.md
```

## 3. ML problem definition

- **Task:** multi-label text classification. A review can mention several themes at once.
- **Input:** a review (string, in English for v1).
- **Output:** for each theme, a probability and a binary prediction at a tuned threshold.
- **Themes (v1 taxonomy):**

| Label | Meaning (short) |
|-------|-----------------|
| `harassment` | Unwanted comments, touching, stalking, or pressure from staff, guides, drivers or other guests |
| `transport_safety` | Safety of drivers, taxis, transfers or vehicles (reckless driving, unlicensed, fear) |
| `accommodation_security` | Locks, entrances, lighting, isolation, break-ins, front-desk response |
| `night_safety` | Safety after dark or in specific areas or times |
| `felt_safe` | Explicit positive safety statements (felt secure, well looked after) |
| `staff_conduct` | Respectful or disrespectful behaviour of staff or guides (non-harassment) |
| `none` | No safety-relevant content |

Full definitions and examples live in [DATA_PLAN.md](DATA_PLAN.md). `none` is mutually exclusive with the other labels.

## 4. Data

- Target: about 1,500 to 3,000 labelled reviews, with at least about 80 positive examples per theme where possible.
- Sources, labelling procedure, splits and ethics: see [DATA_PLAN.md](DATA_PLAN.md).
- Split: stratified (iterative stratification for multi-label), 70 / 15 / 15 train / validation / test. The **test set is touched once**, at the end.
- Raw data and any licensed content stay out of git. Only labels and review IDs are committed unless the licence permits redistribution.

## 5. Models

| Stage | Model | Purpose |
|-------|-------|---------|
| Baseline | TF-IDF (word 1 to 2 grams) + one-vs-rest Logistic Regression | The number every other model must beat |
| Improved | `distilbert-base-uncased` fine-tuned with a multi-label head (BCE loss) | Contextual understanding |
| Optional | Sentence embeddings + logistic regression | Cheap middle ground, helps explain where the gains come from |
| Optional | Zero-shot LLM labels as an *additional* comparison | Shows when a trained model beats prompting, and by how much |

Rules: fixed random seeds, class-weighting or threshold tuning for imbalance, thresholds tuned per label on the validation set only.

## 6. Evaluation

- **Primary metric:** macro-F1 on the test set.
- **Also report:** per-label precision, recall and F1; micro-F1; confusion or co-occurrence analysis; PR curves per label.
- **Uncertainty:** 5-fold cross-validation on train+val for variance; bootstrap confidence intervals on test.
- **Label quality:** Cohen's kappa on a double-labelled sample (target: at least 200 reviews).
- **Error analysis (required deliverable):** review at least 50 misclassified examples, group them (sarcasm, negation, implicit safety, label noise) and record findings in `reports/error_analysis.md`.
- **Experiment log:** every run recorded (data version, model, hyper-parameters, metrics). A markdown table is fine; MLflow is optional.

## 7. Inference service

**Stack:** Python 3.11, FastAPI, Uvicorn, PyTorch, Hugging Face Transformers, scikit-learn.

**Endpoints**

`GET /health` → `{ "status": "ok", "model_version": "..." }`

`POST /classify`
```json
// request
{ "text": "The driver kept asking where I was staying and wouldn't stop messaging me." }
// response
{
  "model_version": "distilbert-v1",
  "labels": [
    { "label": "harassment", "probability": 0.91, "predicted": true },
    { "label": "transport_safety", "probability": 0.64, "predicted": true },
    { "label": "felt_safe", "probability": 0.02, "predicted": false }
  ]
}
```

`POST /classify/batch` takes `{ "texts": [...] }` (max 50) and returns a list of the same shape.

Validation: reject empty text and text over 2,000 characters; return 422 with a clear message.

## 8. Web integration

- A Next.js route handler at `src/app/api/insights/route.ts` proxies to the ML service (service URL in an env var, never hard-coded).
- Destination page section "What travellers say about safety": theme counts, share of reviews mentioning each theme, 2 to 3 example snippets, sample size, "last updated" date, and a standing caveat.
- No single numeric safety score in v1.
- Graceful failure: if the ML service is down, the section is hidden, not broken.

## 9. Security and privacy

- No personal data in the dataset. Strip names, phone numbers and emails during preprocessing.
- Contact form keys stay in environment variables (existing SendGrid key stays out of git).
- Rate-limit the public insight endpoint if the service is ever exposed.
- Any user-submitted reviews (Phase 4) need explicit consent and moderation.

## 10. Testing

- **ML:** unit tests for preprocessing, a smoke test that the service loads a model and returns the schema, and a regression test pinning minimum test-set metrics.
- **Web:** `next lint` and `next build` must pass (currently passing).

## 11. Deployment (when needed)

- Frontend: Vercel or similar.
- ML service: a small container on a free or low-cost host. CPU inference is sufficient for DistilBERT at demo scale.
- For coursework, a local demo plus a recorded walkthrough is acceptable.

## 12. Definition of done (Phase 2)

- [ ] Labelled dataset with a labelling guide and a reported kappa
- [ ] Baseline and transformer trained, with metrics in `reports/metrics.json`
- [ ] Error analysis written up
- [ ] Model card (`reports/model_card.md`) covering intended use, data, metrics, limits
- [ ] Notebooks run top to bottom from a clean environment
