# Justiway: Roadmap

Status: Draft v0.1 · Dates are targets, not promises. Adjust to your course deadlines.

Principle: **ML deliverables come before new website features.** The site already has enough to act as a demo shell.

## Phase 1: Site foundation ✅

- [x] Remove visa and study pages
- [x] Women-first hero, tour packages and copy
- [x] Safety Promise page
- [ ] Verify every Safety Promise claim against how Justiway really operates
- [ ] Replace package photos that don't fit (group1.jpg shows a mixed family)
- [ ] Replace placeholder testimonials with real ones, or remove them

## Phase 2: ML core (about 4 weeks)

**Week 1: Data**
- [ ] Choose sources and record licences ([DATA_PLAN.md](DATA_PLAN.md))
- [ ] Build the candidate pool (keyword + random)
- [ ] Set up the `ml/` folder, virtual environment and `requirements.txt`
- [ ] Label the first 300 reviews and refine the guide

**Week 2: Labels and baseline**
- [ ] Reach 1,500+ labelled reviews
- [ ] Recruit a second annotator; label 200+ reviews; compute kappa
- [ ] EDA notebook: label distribution, review length, co-occurrence
- [ ] Freeze splits
- [ ] Baseline: TF-IDF + logistic regression, with metrics

**Week 3: Improved model**
- [ ] Fine-tune DistilBERT (multi-label)
- [ ] Tune per-label thresholds on validation
- [ ] Record all runs in the experiment log
- [ ] Optional: sentence-embedding model and zero-shot LLM comparison

**Week 4: Evaluation and write-up**
- [ ] Final test-set evaluation (once)
- [ ] Error analysis on 50+ misclassifications
- [ ] Model card
- [ ] Slides: problem → data → method → results → limits

**Milestone: show your course leader here.** A notebook, a results table and a short deck is enough.

## Phase 3: Integration (about 2 weeks)

- [ ] FastAPI service with `/health`, `/classify`, `/classify/batch`
- [ ] Next.js route handler `/api/insights`
- [ ] Destination safety-insight section with caveats and sample sizes
- [ ] Smoke tests; README with run instructions
- [ ] Short recorded demo

## Phase 4: Stretch (only after Phase 2 is solid)

- [ ] Content-based package recommender (embeddings + similarity)
- [ ] Post-trip review submission, auto-tagged by the model
- [ ] Accounts and verification
- [ ] Travel-buddy matching

## Risks to the schedule

- Labelling takes longer than expected. Cap at 1,500 labels and be explicit about the limits.
- A second annotator is hard to find. Ask early.
- Perfectionism on the website. The site is done enough; protect time for the ML.

## Check-ins

- Show your course leader the **PRD and the data plan** early (end of Week 1) to confirm scope.
- Agree on assessment criteria and deadlines before Week 2.
