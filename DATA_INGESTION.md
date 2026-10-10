# Local empirical CCBP ingestion — no third-party datasets distributed

The public repository contains **no WSG/Car Dealer model claim rows**, images or source-derived numerical ranking. `data/CCBP_INPUT_TEMPLATE.csv` has a header only, not real observations or a manufactured example.

To calculate a **descriptive** Covered-Claim Burden Proxy (CCBP), independently obtain compatible claim frequency and mean covered-claim severity information, populate the template **locally**, and use standard Python 3.10+:

```sh
python tools/ccbp_local.py --input /private/path/local_provider_rows.csv --output /private/path/ccbp_screen.csv
```

The script validates that the claim-rate and severity windows match and checks the definition of reported claim rate. A claim event count per policy and the fraction of policies with >=1 claim are **not** interchangeable. Repeated claims, coverage period, vehicle generation, mileage, exclusions and ownership recoveries may remain unidentified. The CCBP is not annualised and cannot be substituted for ten-year LTROI, vehicle reliability, parts expenditure, warranty premium or a repair invoice. Any local input or output with third-party figures remains subject to that source's rights and licence terms and should not be committed or uploaded without a valid redistribution basis.

The included `data/simulation_parameters.json` and `data/synthetic_cohort_AB_annual.csv` are independently generated from the original approved v0.2 synthetic model. They describe hypothetical restricted-TCO scenario calculations and **not actual UK vehicle cohorts**.

Provenance: author-approved LTROI v0.2 static model, October 2026; real discount 3.5%, 10-year horizon, hypothetical age-zero entry. Scenario outputs are deterministic conditional on stated assumptions.