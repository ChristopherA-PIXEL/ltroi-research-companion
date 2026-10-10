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

**Deployment and mobile QA:** The approved v0.2 source is hosted in an isolated Vercel research-QA project at https://ltroi-synthetic-mobile-ac89mb9t2-aceaaronchristopher-6447.vercel.app. The author reported passing 9/9 functional checks on a Samsung Galaxy S25 Ultra in Chrome and Samsung Internet on 10 October 2026, including enlarged text and TalkBack. This is not an independent WCAG certification. Local Chromium testing remains blocked by administrative policy; Vercel may process routine host access logs. No analytics, email collection or remote feedback submission are coded into the calculator.

Original code: MIT. Original prose and synthetic-only diagrams: CC BY 4.0. Brilliance Bridge branding/trademarks: all rights reserved. Third-party tables/figures and the frozen empirical paper are excluded from the released source; see repository root licensing and rights statements.
