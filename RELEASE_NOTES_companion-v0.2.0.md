# LTROI Synthetic Research Companion — v0.2.0

**Prepared release tag:** `companion-v0.2.0`  
**Release type:** software / synthetic-only research demonstration  
**Author:** Aaron Christopher · Brilliance Bridge (research affiliation)  
**Status:** release notes prepared; **publish only after Zenodo GitHub activation is verified**. Do not claim a DOI before archival confirmation.

## Overview

An original interactive companion illustrating the actuarial–economic LTROI methodology with two **hypothetical** cohorts. It lets a reader vary failure-intensity parameters, parts expenditure and the real discount rate, inspect the dynamic equivalent annual burden, and compare repair/replacement choices using a finite-horizon recursion.

**This is not a league table of UK cars, a calibrated real-world failure forecast, an insurer rating, or a measured model-cohort LTROI.** The calculator's displayed equivalised burden includes synthetic purchase, replacement and residual cash flows and is therefore a *restricted TCO-extension/service-continuity demonstration*, not the restricted core LTROI.

## Included in GitHub's source archive

- `docs/v2.3/index.html` — self-contained browser interface, no server or data connection required
- `docs/v2.3/model.js` — inspectable, original numerical model
- `docs/v2.3/test_model.cjs` and `docs/v2.3/check_ui.cjs` — deterministic model checks and inline-script consistency validation
- `data/simulation_parameters.json` — declared defaults
- `data/synthetic_cohort_AB_annual.csv` — **20 synthetic observations (10 for each hypothetical cohort)**
- `data/CCBP_INPUT_TEMPLATE.csv` — column headers only, with **no empirical observations**
- `tools/ccbp_local.py`, `tests/test_ccbp.py` and `DATA_INGESTION.md` — local, standard-library Python CCBP screening interface and a synthetic test
- `citation.bib` for the separate working-paper methodology, `CITATION.cff` for this software, plus the scoped licence and reconciliation records

GitHub will also include the repository's other tracked **synthetic-only** QA configuration and explanatory/outreach text. See the exact immutable tag's tree for the authoritative file inventory.

## Reproduce the default demonstration

Use the local browser HTML without any internet connection. For automated checks, from the source archive root:

```sh
node --test docs/v2.3/test_model.cjs
node docs/v2.3/check_ui.cjs
python -m unittest discover -s tests -p 'test_ccbp.py'
```

The synthetic defaults are a **ten-year** horizon, entry age zero and **3.5% real discounting**. They yield:

| Synthetic test | Present value | Equivalent annual cost |
| --- | ---: | ---: |
| Cohort A | £7,281.60 | £875.55 |
| Cohort B | £10,287.13 | £1,236.94 |

Under an explicitly imposed end-of-year-eight fault, Cohort B selects **replacement**. These amounts are input-conditional deterministic results and **not observed repair, tax or insurance expenses**.

The local Python tool computes only a descriptive CCBP when **users independently provide compatible, legally sourced claim-rate and covered-severity inputs on their own devices**. It does not infer a ten-year ownership burden. The full methodological `simulate_v23.py` reproduction environment and its empirical dataset are **not** part of this software release.

## QA evidence and limits

- Approved v0.2 HTML and standalone numerical model matched the author-approved ZIP at Git object level
- Automated checks passed on Node 18/20/22; Python ingestion tests passed in GitHub Actions
- The author reported **9/9 PASS** on a Samsung Galaxy S25 Ultra using Chrome and Samsung Internet, including responsiveness, reset values, exports, increased text size and TalkBack
- A separate **non-commercial research QA** instance is available at https://ltroi-synthetic-mobile-ac89mb9t2-aceaaronchristopher-6447.vercel.app. It does not collect emails, analytics or transmit feedback through the page
- No independent all-device WCAG conformity certification, insurer/fleet-data fitting, claim-exposure identification or external peer review is asserted

## Rights and distribution

**MIT:** code owned and authorised by the author.  
**CC BY 4.0:** original explanatory prose and original synthetic-only charts/diagrams.  
**All rights reserved:** Brilliance Bridge name, logos, trade dress and trademarks.  
**No grant:** any third-party provider warranty measurements, protected data compilations, source-derived charts or original empirical research archive. Attribution or a generic fair-dealing claim is not redistribution clearance.

**Intentionally excluded:** `ltroi_claim_burden_ranking.csv`, provider-specific JSON/rate–severity tables, warranty-derived figures, original empirical manuscript PDF and the original full reproducibility ZIP. Do not upload them as GitHub Release attachments.

## Citation and archival verification

Please cite this **software companion** using `CITATION.cff`; cite the independently circulating framework manuscript separately using `citation.bib`. The two resources must not share a DOI unless Zenodo explicitly provides an appropriate shared scholarly record, which is **not** presumed.

**Zenodo prerelease gate:** Author verifies GitHub is linked and `ChristopherA-PIXEL/ltroi-research-companion` is toggled **ON** in Zenodo. After that verification, create the tag `companion-v0.2.0` against the validated `main` SHA, publish the GitHub software release using these notes, then inspect Zenodo's record, files, licence, title and actual assigned DOI. An existing tag without a published release does not demonstrate Zenodo ingestion.

**DOI:** not assigned at preparation time. Do not add an invented or placeholder DOI to `CITATION.cff`, a paper, LinkedIn or SSRN.

**Future work:** empirical model-cohort validation and the rights-safe full-paper deposit remain separate research and publication tracks.
