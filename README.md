# LTROI Research Companion — synthetic-only review

Author: **Aaron Christopher**. Status: **private review branch**, not a deployed web service, a peer-reviewed forecast or a released paper.

This repository contains an interactive, *hypothetical* calculation companion for the LTROI v2.3 actuarial–economic working-paper methodology. The original frozen research PDF and its external warranty-derived tables are intentionally **excluded**.

## View / reproduce

Serve `docs/v2.3/` as a static site or open `docs/v2.3/index.html` locally in a browser. All code runs locally with no account, analytics, API, email capture or server-side feedback. The feedback function only downloads a note to the local device.

Run with Node.js 18+ (no third-party packages):
```sh
node --test docs/v2.3/test_model.cjs
```

Baseline: A discounted cost £7,281.60, EAC £875.55; B discounted cost £10,287.13, EAC £1,236.94. Under a deliberately imposed year-eight fault, B chooses replacement. Figures are synthetic **restricted TCO-extension scenario** results, not empirically fitted model-cohort LTROI values.

## Release boundaries

See [CONTENT_LICENSE.md](CONTENT_LICENSE.md) and [RIGHTS_AND_RELEASE_GATE.md](RIGHTS_AND_RELEASE_GATE.md). The MIT grant covers author-owned original code; CC BY 4.0 covers author-owned original explanatory prose and synthetic diagrams; Brilliance Bridge branding/trademarks are reserved. Third-party warranty data and figures are excluded.

No GitHub Pages deployment, DOI, publication or `v2.3.0` tag has been created by this review branch. The model's source paper and reproducibility package are preserved outside this repository pending the separate rights gate.
