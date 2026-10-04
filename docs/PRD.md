# Justiway: Product Requirements Document (PRD)

Status: Draft v0.1 · Owner: Cynthia · Last updated: 2026-10-03

## 1. Summary

Justiway Travel & Tours is a women-only tour company website (Lagos, Nigeria). It doubles as an applied AI/ML project: the site is the product shell, and the differentiator is a machine learning component that turns traveller reviews into **safety insight for women**.

## 2. Problem

- Women often plan trips around fear (unsafe hotels, drivers, areas) and have no reliable, structured way to judge safety.
- Generic review sites give star ratings, which hide safety-specific issues. A 4-star hotel can still have repeated harassment reports buried in the text.
- Travel agencies promise "safe" trips but rarely show evidence.

## 3. Goals

| # | Goal | How we know |
|---|------|-------------|
| G1 | Position Justiway as a women-first tour brand | Site copy, tours and Safety Promise page (done, v0) |
| G2 | Detect safety-relevant themes in review text with an ML model | Macro-F1 above the baseline on a held-out test set (see SPEC) |
| G3 | Show model output to users in a useful, honest way | A destination page with a safety-theme summary and caveats |
| G4 | Produce a portfolio and coursework-grade ML project | Reproducible notebooks, experiment log, error analysis, model card |

## 4. Non-goals (for now)

- Visa, study-abroad and immigration services (removed).
- A chatbot (explicitly out of scope).
- Accounts, payments, live booking, travel-buddy matching (later phases).
- A single numeric "safety score" presented as fact. v1 shows themes and evidence, not a verdict (see Risks).

## 5. Users

- **Primary:** Nigerian women (and wider African diaspora) aged roughly 22 to 45 considering group or solo travel who want reassurance before booking.
- **Secondary:** Justiway staff who want to vet partners (hotels, drivers) using review evidence.
- **Evaluator:** Course leader and future employers reviewing the ML work.

## 6. Scope and phases

**Phase 1: Site foundation (done)**
Women-first positioning, hero, tour packages, Safety Promise page, removal of visa and study pages.

**Phase 2: ML core (main deliverable)**
Review dataset, labelling, baseline and fine-tuned classifiers, evaluation, error analysis.

**Phase 3: Product integration**
FastAPI inference service, Next.js integration, destination safety-insight view.

**Phase 4: Stretch**
Package recommender (content-based), traveller review submission, accounts.

## 7. Functional requirements

| ID | Requirement | Phase | Priority |
|----|-------------|-------|----------|
| F1 | Site presents women-only tours and the Safety Promise | 1 | Must |
| F2 | Dataset of reviews with multi-label safety-theme annotations | 2 | Must |
| F3 | Baseline model (TF-IDF + logistic regression) | 2 | Must |
| F4 | Fine-tuned transformer model compared against the baseline | 2 | Must |
| F5 | Evaluation report: per-label precision, recall, F1; error analysis | 2 | Must |
| F6 | API: given review text, return themes with confidence | 3 | Must |
| F7 | UI: per destination or partner, show theme counts and example snippets | 3 | Should |
| F8 | Content-based package recommender using text embeddings | 4 | Could |
| F9 | Users submit post-trip reviews; model tags them | 4 | Could |

## 8. Non-functional requirements

- **Honesty:** Every insight shows its source, sample size and a "last updated" date. Never imply a place is "safe".
- **Privacy:** No personal data in the dataset. Strip names and contact details. Don't republish raw scraped reviews beyond short quoted snippets, and check each source's terms.
- **Reproducibility:** Fixed seeds, pinned dependencies, a documented train/validation/test split.
- **Performance:** Inference under about 1 second per review on CPU for the demo.
- **Accessibility and mobile:** Keep the existing responsive layout.

## 9. Success metrics

**ML (primary)**
- Macro-F1 on the held-out test set beats the TF-IDF baseline by a meaningful margin, and any gap is explained.
- Inter-annotator agreement (Cohen's kappa) reported on a double-labelled sample.

**Product (secondary, if launched)**
- Tours page to contact-form conversion.
- Share of visitors who open the Safety Promise or a destination insight.

## 10. Risks

| Risk | Impact | Mitigation |
|------|--------|-----------|
| Too little labelled data | Weak or unstable models | Start with about 1,500 labelled reviews, use cross-validation, report variance, consider weak labels clearly marked as such |
| Label subjectivity ("what counts as harassment?") | Noisy labels | Written labelling guide, double-label a sample, report kappa |
| Scraping and licence issues | Legal or ethical problems | Prefer public datasets with clear licences; document sources; respect terms |
| Model misleads users about safety | Real-world harm | Show evidence and caveats, no single score, human review of any partner vetting |
| Scope creep into the site | ML work doesn't get done | The ML deliverables in Phase 2 come before any new site features |
| Safety Promise claims aren't backed by operations | Reputational harm | Verify every claim on the page before launch |

## 11. Open questions

1. Which dataset sources are allowed and available for hotel, tour and transport reviews?
2. Does the course specify a required technique, assessment format or deadline?
3. Will Justiway operate real tours soon, or is this a concept for the coursework?
4. Who can help double-label a sample of reviews for agreement scoring?
