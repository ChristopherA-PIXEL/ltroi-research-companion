/* LTROI v2.3 digital companion, illustrative synthetic deterministic model.
   Standard-library-independent pure functions; NOT empirical vehicle estimates.
   The displayed index is EAC of a restricted service-continuity TCO, not core LTROI.
*/
(function(root, factory) {
  const api = factory();
  if (typeof module !== 'undefined' && module.exports) module.exports = api;
  else root.LTROI = api;
})(typeof globalThis !== 'undefined' ? globalThis : this, function() {
  'use strict';
  const DEFAULTS = Object.freeze({
    discount: 0.035, purchase: 3000, residualHalfLife: 8,
    aBeta: 1.4, aTheta: 10, aFixed: 600, aParts: 150, aLabourHours: 1,
    aLabourRate: 60, aAncillary: 20, aDowntime: 0,
    bBeta: 2.5, bTheta: 5, bStart: 6, bBaseline: 0.03,
    bFixed: 800, bParts: 300, bLabourHours: 2, bLabourRate: 70,
    bAncillary: 50, bDowntimeDays: 3, bSubCost: 30,
    partsMultiplier: 1, faultYear: 8, repairQuote: 4000,
    repairDowntime: 180, damagedSalvage: 300,
    replacementPrice: 3000, transactionCost: 150, replacementDowntime: 90
  });
  function validate(p) {
    for(const [k, v] of Object.entries(p)) {
      if(typeof v !== 'number' || !Number.isFinite(v)) throw new Error('Non-finite input: '+k);
    }
    if(p.discount < 0 || p.discount > 0.5) throw new Error('Discount rate outside supported 0–50% domain');
    for (const k of ['aBeta','aTheta','bBeta','bTheta','residualHalfLife']) {
      if (p[k] <= 0) throw new Error(k+' must be positive');
    }
    for (const k of ['aFixed','aParts','aLabourHours','aLabourRate','aAncillary','aDowntime',
      'bFixed','bParts','bLabourHours','bLabourRate','bAncillary','bDowntimeDays','bSubCost',
      'bBaseline','partsMultiplier','purchase','repairQuote','repairDowntime','damagedSalvage',
      'replacementPrice','transactionCost','replacementDowntime']) {
      if (p[k] < 0) throw new Error(k+' must not be negative');
    }
    if(!Number.isInteger(p.faultYear) || p.faultYear < 1) throw new Error('fault year invalid');
    return p;
  }
  function normalize(input={}) {return validate({...DEFAULTS,...input});}
  function severity(c,p) {
    return c==='A' ? p.aParts*p.partsMultiplier+p.aLabourHours*p.aLabourRate+p.aAncillary+p.aDowntime
      : p.bParts*p.partsMultiplier+p.bLabourHours*p.bLabourRate+p.bAncillary+p.bDowntimeDays*p.bSubCost;
  }
  function events(c,age,p) {
    if(c==='A') return Math.pow((age+1)/p.aTheta,p.aBeta)-Math.pow(age/p.aTheta,p.aBeta);
    const q = (x)=> Math.pow(Math.max(x-p.bStart,0)/p.bTheta,p.bBeta);
    return p.bBaseline+q(age+1)-q(age);
  }
  function resale(age,p) {return p.purchase*Math.pow(2,-age/p.residualHalfLife);}
  function annuity(h,p) {const d=1/(1+p.discount);let s=0;for(let t=1;t<=h;t++) s+=Math.pow(d,t);return s;}
  // Backward induction, with end-year c_t valued at t (same timing as manuscript).
  function solve(c,h,input={}) {
    const p=normalize(input);
    if(!Number.isInteger(h)||h<1||h>30) throw new Error('Horizon must be an integer from 1 to 30');
    const d=1/(1+p.discount);const cache=new Map();const actions={};
    const key=(t,a)=>t+'|'+a;
    function dp(t,age) {
      if(t===h+1) return -resale(age,p);
      const k=key(t,age);if(cache.has(k))return cache.get(k);
      const run=(c==='A'?p.aFixed:p.bFixed)+events(c,age,p)*severity(c,p);
      let next;
      if(c==='B' && t===p.faultYear){
        const repair=p.repairQuote+p.repairDowntime+dp(t+1,age+1);
        const replacement=p.replacementPrice-p.damagedSalvage+p.transactionCost+p.replacementDowntime+dp(t+1,0);
        const action=repair<=replacement?'repair':'replace';
        actions[t]={action,repairContinuation:repair,replacementContinuation:replacement};
        next=action==='repair'?repair:replacement;
      } else next=dp(t+1,age+1);
      const result=d*(run+next);cache.set(k,result);return result;
    }
    const pv=p.purchase+dp(1,0);let age=0;let npv=p.purchase;
    const rows=[];
    for(let t=1;t<=h;t++){
      const n=events(c,age,p);const routine=n*severity(c,p);
      let action='keep',decisionCost=0;
      if(c==='B' && t===p.faultYear) {
        action=actions[t].action;
        decisionCost=action==='repair'?p.repairQuote+p.repairDowntime:
          p.replacementPrice-p.damagedSalvage+p.transactionCost+p.replacementDowntime;
      }
      const annual=(c==='A'?p.aFixed:p.bFixed)+routine+decisionCost;
      rows.push({cohort:c,year:t,ageStart:age,events:n,routine,decisionCost,annual,action});
      npv+=Math.pow(d,t)*annual;
      age=action==='replace'?0:age+1;
    }
    const terminal=resale(age,p);npv-=Math.pow(d,h)*terminal;
    const delta=Math.abs(pv-npv);
    if(delta>1e-7)throw new Error('Forward / backward mismatch: '+delta);
    const a=annuity(h,p);
    return {cohort:c,h,pv,eac:pv/a,scenarioIndex:10000/(pv/a),annuity:a,
      terminal,decision:actions[p.faultYear]||null,rows,forwardBackwardDelta:delta};
  }
  function compare(input={},h=10) {const p=normalize(input);return {a:solve('A',h,p),b:solve('B',h,p),p};}
  return {DEFAULTS,normalize,events,severity,resale,annuity,solve,compare};
});
