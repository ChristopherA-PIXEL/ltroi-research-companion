# Approval ZIP → GitHub review-branch reconciliation

Source: `LTROI_v2.3_Synthetic_Only_Approval_Candidate.zip` supplied by the author. The ZIP has 16 members, CRC checks passed and its 15 SHA-256 manifest entries match. This record describes a *review-branch* reconciliation only, not a public release.

## Exact matches (Git blob SHA)

| ZIP file | GitHub path | Approved Git blob SHA |
| --- | --- | --- |
| `app/index.html` | `docs/v2.3/index.html` | `f4af21f4ed72ef88ddd2b5d258672b70895c780e` |
| `app/model.js` | `docs/v2.3/model.js` | `eeb98f4d8409806d4387904935ddb694931c1f69` |
| `app/test_model.cjs` | `docs/v2.3/test_model.cjs` | `7587be9adb8a8422ae06e423c4543f095d9c89ed` |
| `outreach/LinkedIn_Caption_SYNTHETIC_ONLY_CANDIDATE.md` | same in repository | `20a73b5800b8b9b41d2fe707d38ef36ca257f749` |

The author-approved v0.2 HTML has an embedded JavaScript model. The earlier private PR reconstructed an external-module v0.1 layout; this review branch now carries the exact approved v0.2 bytes. `model.js` and the four-test suite likewise use the exact candidate versions. UI wording, mobile chart scroll, text sizes and reset handling therefore agree with author approval.

## Deliberately adapted or retained outside the site tree

| ZIP file | Disposition and reason |
| --- | --- |
| `README.md` | Replaced by repository README; the original predates the owner's 10 October licence approval and repository confirmation. |
| `app/README.md` | Rewritten as `docs/v2.3/README.md` to remove stale pre-authorisation statements and describe reproducibility and private review accurately. |
| `RIGHTS_AND_DEPLOYMENT_REVIEW.md` | Retained in approval ZIP/Notion as historical rights and permission audit; current public-scope statement is `RIGHTS_AND_RELEASE_GATE.md` and `CONTENT_LICENSE.md`. |
| `QA_AND_CHANGELOG.md` | Retained as dated provenance, not re-issued as evidence of testing this exact Git commit. |
| `SHA256SUMS.txt` | Applies to the original ZIP members, not the differently structured GitHub tree; use per-file Git blob hashes above for committed files. |
| `browser_test.py` | Historical script contains a hard-coded `/data/ltroi_dissemination/...` path. Not copied verbatim into the runtime; browser re-test is still required. |
| `browser_test_results.json` | Prior Chromium results retained for evidence only; current container blocks Chromium navigation. |
| `model_test_results.txt` | Prior test log retained; GitHub CI generates independent results. |
| `preservation_audit.json` | Historical source-to-ZIP evidence; retained unchanged in author package. |
| `PERMISSION_REQUEST_UNSENT.md` | Internal third-party rights correspondence, intentionally excluded from repository. |
| `outreach/LTROI_Actuarial_Forum_Post_DRAFT.md` | Non-executable outreach draft, held in author package for separate editorial/publication approval. |
| `outreach/LTROI_Carousel_SYNTHETIC_ONLY_CANDIDATE.pdf` | Original synthetic-only 7-page PDF remains byte-for-byte preserved in author ZIP, but not automatically added to the web/code branch. This is a separate LinkedIn publication asset, not necessary to operate the app. |

## Reconciliation checks

- Original synthetic v0.2 model and tests: 4/4 tests pass locally and on the previous GitHub Node 18/20/22 matrix.
- New `check_ui.cjs` checks embedded script syntax and equivalence with standalone model to prevent recurrence of the original reset-handler parse failure.
- No WSG/Car Dealer tables, source-derived figures, full paper PDF or empirical data were introduced.
- The original research PDF and ZIP are not modified; `main` remains unchanged.
- Deployment, public repo conversion, tag, DOI and publishing remain separate approval actions.

This comparison checks equality and code execution, not scientific empirical calibration, legal rights clearance or a completed browser accessibility audit.
