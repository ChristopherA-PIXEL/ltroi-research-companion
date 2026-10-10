# Temporary Vercel QA preview — not a scientific release

**Status: standalone Vercel research QA instance READY at https://ltroi-synthetic-mobile-ac89mb9t2-aceaaronchristopher-6447.vercel.app ; author reports 9/9 Galaxy S25 Ultra checks PASS (10 October 2026). This is a separate, isolated Vercel project, deployed by direct static-file upload, not by GitHub linking.** The Vercel preview is solely a phone/browser smoke test for the exact approved v0.2 synthetic calculator. Do not enable production domains or deploy the frozen empirical PDF and original ZIP.

## Reference instructions for future Git-linked deployment (not the method used for current QA site)

1. Connect Vercel to the account and import the GitHub repo `ChristopherA-PIXEL/ltroi-research-companion`.
2. Set **Framework Preset: Other**, repository **Root Directory: /**, Build Command **none**, Output Directory **qa-site** (also specified by `vercel.json` in the root).
3. Choose the `qa/vercel-synthetic-v2.3` branch for the QA deployment. Keep the app disconnected from Brilliance Bridge public commerce/payment infrastructure.
4. Open the resulting **Preview Deployment URL**, not a guessed hostname. Depending on Vercel plan and team settings, preview access may be public to anyone who has the URL. `noindex` is not authentication. Set Vercel deployment protection if sensitive material is ever introduced.
5. Check `/robots.txt`, index content, browser console, network calls, and result reproducibility. Confirm no email capture, cookie consent, analytics, tracking scripts or external source-derived dataset.
6. Delete the Vercel project/preview after QA, or explicitly retain a controlled versioned research demo only when authorised.

## Samsung Galaxy S25 Ultra — hands-on review

Use current Chrome and Samsung Internet, portrait and landscape. Include 100%, 150% and 200% font sizes, Android accessibility larger text (where available), and both light/dark device themes.

- Open the provided preview URL and verify the interface loads without an error or horizontal page overflow. The chart panel may scroll horizontally within its own region; the entire page should not.
- Move each slider to both endpoints and an intermediate position; the *value*, EAB curves, action decision and annual ledger should visibly update and remain numerically finite.
- Test tap targets for reset, export/download, methodology note and feedback-note export. Confirm that sticky address/navigation bars and software keyboard do not obscure controls, and no buttons overlap.
- Reset and check defaults: Cohort A EAC £875.55; B £1,236.94; B replacement at end of year 8.
- Change discount to 0%; inspect all chart labels and dynamic results. Rotate the device and return to portrait; verify no clipped chart labels or accidental double taps.
- Verify the calculator uses no email capture or remote feedback submission. The network panel should show only the static page and standard host interactions; no extra third-party scripts.
- Check visible focus, contrast and screen reader labels with TalkBack. These mobile/manual checks cannot be certified from the code alone.

Record browser/app versions, CSS viewport dimensions, date, screenshots, failures, corrected commit SHA, and whether the same URL was retested after fixes. Do not mark the mobile gate passed solely because CI succeeds.
## Recorded actual-device result — 10 October 2026
The author tested Chrome and Samsung Internet on a Galaxy S25 Ultra and reported PASS for readability, portrait and landscape layout, slider updates, correct reset totals, Cohort B's year-eight replacement, downloads, larger text and TalkBack. No independent browser/automated WCAG audit is asserted. Keep the test as user-reported acceptance rather than asserting that the deprecated Git-linked instructions above were completed.
