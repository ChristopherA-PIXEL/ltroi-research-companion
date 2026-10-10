# LTROI v2.3 companion — approved source v0.2

This folder contains the **exact byte-for-byte executable files** from the supplied synthetic-only v0.2 author-approval ZIP of 10 October 2026: `index.html`, `model.js` and `test_model.cjs`. The browser UI embeds the numerical model so `index.html` opens offline; the standalone `model.js` allows independent testing and inspection.

No external JavaScript, stylesheets, web fonts, API endpoint, analytics, email capture or transmitted feedback are used. The feedback feature creates a local text download.

Run in Node.js 18+:
```sh
node --test test_model.cjs
node check_ui.cjs
```

The four numerical tests cover the frozen ten-year synthetic default, zero-discount limit, parts-cost sensitivity and parameter constraints. `check_ui.cjs` independently checks syntax for both embedded scripts and verifies that the embedded and standalone models agree; this additional test was written during source reconciliation.

The interface reports the **restricted synthetic service-continuity TCO-extension annual equivalent cost** under assumed parameters, not a calibrated model-cohort LTROI score or UK car ranking. The author-approved default produces £875.55 for A and £1,236.94 for B. No claims about actual vehicle reliability follow.

**Deployment:** private review only; no current live address. Browser QA logs in the approval ZIP were generated previously; local Chromium is blocked by administrative policy in the current audit sandbox, so a complete live-host/accessibility audit remains open. Host logging could occur even though the app sends no requests.

Original code: MIT. Original prose and synthetic-only diagrams: CC BY 4.0. Brilliance Bridge branding/trademarks: all rights reserved. Third-party tables/figures and the frozen empirical paper are excluded from the released source; see repository root licensing and rights statements.
