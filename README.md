# LTROI Research Companion — synthetic-only v0.2

**Aaron Christopher | Brilliance Bridge (research affiliation)**  
**Published software:** [`companion-v0.2.0`](https://github.com/ChristopherA-PIXEL/ltroi-research-companion/releases/tag/companion-v0.2.0) — a synthetic-only research companion with permanent [software DOI **10.5281/zenodo.23279193**](https://doi.org/10.5281/zenodo.23279193). This is not an empirical reliability ranking or commercial pricing engine. The separate [Vercel research companion](https://ltroi-synthetic-mobile-ac89mb9t2-aceaaronchristopher-6447.vercel.app) is for non-commercial methods review. The frozen full working-paper PDF and provider-derived empirical ZIP are **not** published here.

This project explores a proposed long-term resilience and ownership index (LTROI) methodology through *two hypothetical vehicle cohorts*. The browser interface provides a restricted synthetic service-continuity total-cost-of-ownership (TCO) extension, not cohort-specific measured reliability or a complete owner-cost forecast. User changes in wear parameters, parts cost, downtime and discount rate do not constitute validated empirical parameter estimates.

## Reproduce the demonstration

Open `docs/v2.3/index.html` in a local browser or serve `docs/v2.3/` from a static local server. The approved v0.2 page embeds the numerical model for offline use, while `model.js` is available for independent examination. The companion does not transmit feedback, collect email addresses or include analytics; its feedback feature generates a local download. A web host may nevertheless retain ordinary access logs.

Run without third-party Node packages:

```bash
node --test docs/v2.3/test_model.cjs
node docs/v2.3/check_ui.cjs
python -m unittest discover -s tests -p 'test_ccbp.py'
```

Included synthetic-only evidence: [`simulation_parameters.json`](data/simulation_parameters.json), the [20-row synthetic A/B annual ledger](data/synthetic_cohort_AB_annual.csv), and a [header-only CCBP ingestion template](data/CCBP_INPUT_TEMPLATE.csv). To calculate a descriptive CCBP for source material **you obtain lawfully and retain locally**, see [DATA_INGESTION.md](DATA_INGESTION.md) and `tools/ccbp_local.py`. Nothing here distributes WSG/Car Dealer observations; the CCBP screen is not a ten-year LTROI estimate.

The separate manuscript's `simulate_v23.py` is **not included** in this synthetic-only companion. This release reproduces the browser model and its synthetic case, not every figure and empirical screen in the original paper.

Synthetic benchmark: Cohort A PV £7,281.60 / EAC £875.55; Cohort B PV £10,287.13 / EAC £1,236.94; Cohort B's imposed end-year-eight fault triggers replacement under the example's restricted decision policy. These numbers are **synthetic**, not observed UK used-car measurements or empirical LTROI scores.

## Citation and affiliation

Aaron Christopher, *Discounted Automotive Ownership Risk: An Actuarial–Economic Framework (LTROI v2.3)*, Research Methodology Working Paper, Brilliance Bridge, October 2026. This is the author's research affiliation; the working paper remains a research-circulation methodology, **not peer reviewed or institutionally validated**. Specifying an affiliation does not guarantee acceptance by SSRN or any research repository.

See [CITATION.cff](CITATION.cff) for this **software companion's** citation and [citation.bib](citation.bib) for the separate **v2.3 methodology working paper**. They are distinct objects. Cite any DOI only after its Zenodo record exists and the archived contents have been checked; a software DOI must not be presented as the DOI of the withheld full manuscript.

## License and Copyright

**Original software and code — MIT.** Original `model.js`, `docs/v2.3/index.html` source code (including the JavaScript/CSS implementation), `docs/v2.3/test_model.cjs`, UI/check scripts and author-owned `simulate_v23.py` code, **where included and authored/licensable by the rights holder**, are governed by [MIT LICENSE](LICENSE). Inclusion in this list does not imply an absent file is present in the repository.

**Original prose and synthetic diagrams — CC BY 4.0.** Original working-paper prose, original explanatory documentation and synthetic-only charts/diagrams authored and licensed by Aaron Christopher may be reproduced and adapted with attribution under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). This grant applies to the author's copyrightable contributions, **not automatically to an assembled PDF or archive that also includes third-party material**.

**Brilliance Bridge branding — all rights reserved.** The Brilliance Bridge name, logos, trademarks, brand identifiers and trade dress are **excluded** from MIT and CC BY grants. No endorsement or trademark permission is implied.

**Third-party data — excluded; no licence granted.** Published aggregate warranty data and source-derived tables/figures credited to Warranty Solutions Group and/or *Car Dealer Magazine* (including material represented in `ltroi_claim_burden_ranking.csv` in the separately held archive) are **not included in this repository**, and are not licensed by this author. Any reproduction must be supported by appropriate permission or a separately assessed applicable legal exception. **Attribution or claiming "fair dealing/fair use" does not by itself establish redistribution rights.** The relevant copyright, database and contractual position has not been independently established.

See [CONTENT_LICENSE.md](CONTENT_LICENSE.md), [RIGHTS_AND_RELEASE_GATE.md](RIGHTS_AND_RELEASE_GATE.md) and [RECONCILIATION.md](RECONCILIATION.md) for the scoped licensing and audit trail. Historical/source files and full PDF remain outside publication pending the asset-specific rights decision.

## v0.2.0 release scope and verification

**Release notes:** [RELEASE_NOTES_companion-v0.2.0.md](RELEASE_NOTES_companion-v0.2.0.md). The source archive generated by GitHub for this tag will include only tracked repository files, including the synthetic parameters, synthetic A/B ledger, blank ingestion template, local CCBP ingestion tool, calculator and tests. **Do not attach** the separately held full manuscript PDF, rights-uncleared source-derived CSV/JSON/figures or the original empirical reproducibility ZIP.

The approved companion code was reconciled byte-for-byte to the author's v0.2 ZIP in [PR #2](https://github.com/ChristopherA-PIXEL/ltroi-research-companion/pull/2). GitHub Actions reported successful Node 18/20/22 checks and Python ingestion checks on the repository. On 10 October 2026 the author reported **9/9 passes** on the Samsung Galaxy S25 Ultra in Chrome and Samsung Internet (readability, portrait/landscape, sliders, reset, year-eight replacement, downloads, enlarged text and TalkBack). This is author-performed device acceptance, not an independent WCAG certification, a cross-platform test suite or empirical scientific validation.

The isolated Vercel research QA site is **not** the Brilliance Bridge commercial site and has no email capture, analytics or transmitted feedback. Hosting account access controls and provider-side access logs are outside the page's local JavaScript claims.

**Archived software:** Version [`companion-v0.2.0`](https://github.com/ChristopherA-PIXEL/ltroi-research-companion/releases/tag/companion-v0.2.0) was published on 10 October 2026 with Zenodo software record [10.5281/zenodo.23279193](https://doi.org/10.5281/zenodo.23279193). This software DOI must not be cited as publication or independent empirical validation of the separately held full research manuscript. The original release tag is immutable for scientific referencing; post-release README corrections on `main` do not alter that archived tagged snapshot.

## Open request for methodological critique

This project **welcomes falsifiable peer criticism**, not unreviewed endorsements. Select the forum suited to your expertise:

- **[Actuarial methods (#6)](https://github.com/ChristopherA-PIXEL/ltroi-research-companion/issues/6):** discounted Bellman accounting, Poisson-thinned paid-claim assumptions, Bühlmann–Straub cohort credibility and identification.
- **[Reliability engineering (#7)](https://github.com/ChristopherA-PIXEL/ltroi-research-companion/issues/7):** recurrent repairs versus first failures, Weibull assumptions, virtual age, replacement/reset state and stochastic exposure.
- **[Fleet procurement (#8)](https://github.com/ChristopherA-PIXEL/ltroi-research-companion/issues/8):** distinct unusable days, recoveries, substitute vehicles, data availability and repair-versus-replace feasibility.

For a useful critique, include the **specific assumption or code line, a synthetic counterexample or reliable reference, the likely consequence, and a proposed test**. All participation is voluntary and public. Do not submit confidential fleet/customer information, individual personal data or proprietary warranty datasets. There is no web form, email capture, submitted-feedback analytics, or implied marketing contact consent. The paper's more general credibility and deductible models are theoretical proposals, **not implemented** in this published toy calculator.

Software DOI: **https://doi.org/10.5281/zenodo.23279193**.
