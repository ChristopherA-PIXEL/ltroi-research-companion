# LTROI Research Companion — synthetic-only v0.2

**Aaron Christopher | Brilliance Bridge (research affiliation)**  
**Status:** source repository is public; synthetic-only prototype under methodological evaluation, **not deployed as an operational fleet-pricing service**. Neither the full frozen working-paper PDF nor the empirical warranty-data reproducibility ZIP is currently distributed here.

This project explores a proposed long-term resilience and ownership index (LTROI) methodology through *two hypothetical vehicle cohorts*. The browser interface provides a restricted synthetic service-continuity total-cost-of-ownership (TCO) extension, not cohort-specific measured reliability or a complete owner-cost forecast. User changes in wear parameters, parts cost, downtime and discount rate do not constitute validated empirical parameter estimates.

## Reproduce the demonstration

Open `docs/v2.3/index.html` in a local browser or serve `docs/v2.3/` from a static local server. The approved v0.2 page embeds the numerical model for offline use, while `model.js` is available for independent examination. The companion does not transmit feedback, collect email addresses or include analytics; its feedback feature generates a local download. A web host may nevertheless retain ordinary access logs.

Run without third-party Node packages:

```bash
node --test docs/v2.3/test_model.cjs
node docs/v2.3/check_ui.cjs
```

Synthetic benchmark: Cohort A PV £7,281.60 / EAC £875.55; Cohort B PV £10,287.13 / EAC £1,236.94; Cohort B's imposed end-year-eight fault triggers replacement under the example's restricted decision policy. These numbers are **synthetic**, not observed UK used-car measurements or empirical LTROI scores.

## Citation and affiliation

Aaron Christopher, *Discounted Automotive Ownership Risk: An Actuarial–Economic Framework (LTROI v2.3)*, Research Methodology Working Paper, Brilliance Bridge, October 2026. This is the author's research affiliation; the working paper remains a research-circulation methodology, **not peer reviewed or institutionally validated**. Specifying an affiliation does not guarantee acceptance by SSRN or any research repository.

See [citation.bib](citation.bib) for a machine-readable reference. A Zenodo DOI has **not** been minted; neither the full empirical PDF nor the original evidence bundle has been made available here.

## License and Copyright

**Original software and code — MIT.** Original `model.js`, `docs/v2.3/index.html` source code (including the JavaScript/CSS implementation), `docs/v2.3/test_model.cjs`, UI/check scripts and author-owned `simulate_v23.py` code, **where included and authored/licensable by the rights holder**, are governed by [MIT LICENSE](LICENSE). Inclusion in this list does not imply an absent file is present in the repository.

**Original prose and synthetic diagrams — CC BY 4.0.** Original working-paper prose, original explanatory documentation and synthetic-only charts/diagrams authored and licensed by Aaron Christopher may be reproduced and adapted with attribution under [CC BY 4.0](https://creativecommons.org/licenses/by/4.0/). This grant applies to the author's copyrightable contributions, **not automatically to an assembled PDF or archive that also includes third-party material**.

**Brilliance Bridge branding — all rights reserved.** The Brilliance Bridge name, logos, trademarks, brand identifiers and trade dress are **excluded** from MIT and CC BY grants. No endorsement or trademark permission is implied.

**Third-party data — excluded; no licence granted.** Published aggregate warranty data and source-derived tables/figures credited to Warranty Solutions Group and/or *Car Dealer Magazine* (including material represented in `ltroi_claim_burden_ranking.csv` in the separately held archive) are **not included in this repository**, and are not licensed by this author. Any reproduction must be supported by appropriate permission or a separately assessed applicable legal exception. **Attribution or claiming "fair dealing/fair use" does not by itself establish redistribution rights.** The relevant copyright, database and contractual position has not been independently established.

See [CONTENT_LICENSE.md](CONTENT_LICENSE.md), [RIGHTS_AND_RELEASE_GATE.md](RIGHTS_AND_RELEASE_GATE.md) and [RECONCILIATION.md](RECONCILIATION.md) for the scoped licensing and audit trail. Historical/source files and full PDF remain outside publication pending the asset-specific rights decision.

## Release and verification status

The approved synthetic-only HTML/JS and test assets were reconciled byte-for-byte in [PR #2](https://github.com/ChristopherA-PIXEL/ltroi-research-companion/pull/2) and merged independently before this documentation update. GitHub Actions successfully exercised numerical and script checks on Node 18/20/22. Fresh desktop/mobile browser and accessibility verification remains **uncompleted in the current testing environment**, which blocks Chromium navigation. Reproduction is not independent empirical validation.

**No tag, published GitHub Release, live Pages URL or DOI is asserted by this README.** A future release must identify its exact files, permissions, immutable commit and separately verified Zenodo activation.
