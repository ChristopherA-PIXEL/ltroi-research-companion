#!/usr/bin/env python3
"""Local CCBP screen. User supplies all provider observations; no network."""
from __future__ import annotations
import csv, argparse
from datetime import date
from decimal import Decimal, InvalidOperation, ROUND_HALF_UP
from pathlib import Path
FIELDS=["cohort_label","source_owner","source_url","publication_date","claim_population","claim_observation_start","claim_observation_end","severity_observation_start","severity_observation_end","claim_rate_percent","claim_rate_definition","mean_covered_claim_gbp","warranty_exposure_count","warranty_followup_years","coverage_description"]
BASIS={'claim_events_per_policy','policies_with_at_least_one_claim'}
def compute(input_path: Path, output_path: Path):
    with input_path.open(newline='',encoding='utf-8-sig') as f:
        r=csv.DictReader(f)
        missing=set(FIELDS)-set(r.fieldnames or [])
        if missing: raise ValueError('Missing headers: '+', '.join(sorted(missing)))
        rows=list(r)
    if not rows: raise ValueError('Input template contains no rows; enter private independently sourced observations first')
    out=[]
    for i,row in enumerate(rows,2):
        row={k:(row.get(k) or '').strip() for k in FIELDS}
        required=['cohort_label','source_owner','source_url','publication_date','claim_population','claim_observation_start','claim_observation_end','severity_observation_start','severity_observation_end','claim_rate_percent','claim_rate_definition','mean_covered_claim_gbp']
        for k in required:
            if not row[k]:raise ValueError(f'Row {i}: missing {k}')
        if not row['source_url'].startswith(('http://','https://')):raise ValueError(f'Row {i}: source URL required')
        for k in ('publication_date','claim_observation_start','claim_observation_end','severity_observation_start','severity_observation_end'):
            date.fromisoformat(row[k])
        if (row['claim_observation_start'],row['claim_observation_end'])!=(row['severity_observation_start'],row['severity_observation_end']):
            raise ValueError(f'Row {i}: claim and severity observation windows differ')
        if row['claim_observation_end']<row['claim_observation_start']: raise ValueError(f'Row {i}: invalid observation window')
        if row['claim_rate_definition'] not in BASIS: raise ValueError(f'Row {i}: unknown claim-rate definition')
        try: p=Decimal(row['claim_rate_percent']);c=Decimal(row['mean_covered_claim_gbp'])
        except InvalidOperation as e:raise ValueError(f'Row {i}: rate and severity must be numeric') from e
        if p<0 or p>100 or c<0:raise ValueError(f'Row {i}: rate 0–100 and severity >=0 required')
        if row['warranty_exposure_count'] and (not row['warranty_exposure_count'].isdigit() or int(row['warranty_exposure_count'])==0):
            raise ValueError(f'Row {i}: invalid exposure count')
        row['ccbp_gbp_descriptive']=str((p*c/100).quantize(Decimal('0.01'),rounding=ROUND_HALF_UP))
        row['identification_note']='descriptive proxy; not annual or owner loss; '+('repeat claims unobserved' if row['claim_rate_definition']=='policies_with_at_least_one_claim' else 'policy follow-up exposure may be unobserved')
        out.append(row)
    with output_path.open('w',newline='',encoding='utf-8') as f:
        w=csv.DictWriter(f,fieldnames=FIELDS+['ccbp_gbp_descriptive','identification_note']);w.writeheader();w.writerows(out)
    return len(out)
if __name__=='__main__':
    a=argparse.ArgumentParser()
    a.add_argument('--input',required=True,type=Path);a.add_argument('--output',required=True,type=Path)
    x=a.parse_args()
    try: print('Computed',compute(x.input,x.output),'descriptive local CCBP rows (not annual or lifetime LTROI)')
    except ValueError as e:a.error(str(e))
