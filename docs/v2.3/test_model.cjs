const assert = require('node:assert/strict');
const { test } = require('node:test');
const model = require('./model.js');
const close = (a,b,eps=.011) => assert.ok(Math.abs(a-b)<eps, a+' vs '+b);
test('frozen ten-year synthetic benchmark',()=>{
 const {a,b}=model.compare();
 close(a.pv,7281.60);close(a.eac,875.55);close(a.scenarioIndex,11.42);
 close(b.pv,10287.13);close(b.eac,1236.94);close(b.scenarioIndex,8.08);
 close(a.terminal,1261.3446);close(b.terminal,2522.6892);
 assert.equal(b.decision.action,'replace');close(b.rows[7].decisionCost,2940);
 assert.ok(a.forwardBackwardDelta<1e-8&&b.forwardBackwardDelta<1e-8);
 close(a.rows.reduce((s,x)=>s+x.events,0),1,1e-8);
});
test('zero real discount boundary',()=>{
 const {a,b}=model.compare({discount:0});
 close(a.annuity,10,1e-10);close(b.annuity,10,1e-10);
});
test('increasing parts multiplier raises both equivalent annual costs',()=>{
 const base=model.compare(), higher=model.compare({partsMultiplier:1.5});
 assert.ok(higher.a.eac>base.a.eac);assert.ok(higher.b.eac>base.b.eac);
});
test('parameter constraints',()=>{
 assert.throws(()=>model.compare({bTheta:0}));
 assert.throws(()=>model.compare({discount:-.1}));
});
