from pathlib import Path
import tempfile,unittest,sys,csv
sys.path.insert(0,str(Path(__file__).resolve().parents[1]/'tools'))
from ccbp_local import FIELDS,compute
class LocalCCBP(unittest.TestCase):
 def test_synthetic_only(self):
  d=dict.fromkeys(FIELDS,'')
  d.update(cohort_label='Hypothetical X',source_owner='synthetic test fixture',source_url='https://example.org/test',publication_date='2026-10-10',claim_population='hypothetical warranties',claim_observation_start='2025-01-01',claim_observation_end='2025-12-31',severity_observation_start='2025-01-01',severity_observation_end='2025-12-31',claim_rate_percent='20',claim_rate_definition='claim_events_per_policy',mean_covered_claim_gbp='500')
  with tempfile.TemporaryDirectory() as t:
   p=Path(t)/'in.csv';o=Path(t)/'out.csv'
   with p.open('w',newline='') as f:w=csv.DictWriter(f,fieldnames=FIELDS);w.writeheader();w.writerow(d)
   self.assertEqual(compute(p,o),1)
   with o.open() as f:self.assertEqual(next(csv.DictReader(f))['ccbp_gbp_descriptive'],'100.00')
   d['severity_observation_end']='2025-11-30'
   with p.open('w',newline='') as f:w=csv.DictWriter(f,fieldnames=FIELDS);w.writeheader();w.writerow(d)
   with self.assertRaisesRegex(ValueError,'observation windows differ'):compute(p,o)
