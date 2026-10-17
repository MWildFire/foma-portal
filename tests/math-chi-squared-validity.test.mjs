import test from 'node:test';
import assert from 'node:assert/strict';
import {independenceTable} from '../src/sims/math/chi-squared-logic.ts';
test('original school-travel table matches independently calculated Pearson result',()=>{
 const x=independenceTable([[28,9,23],[22,6,32]]);
 assert.deepEqual(x.expected,[[25,7.5,27.5],[25,7.5,27.5]]);
 assert.ok(Math.abs(x.statistic-2.792727272727273)<1e-12);
 assert.equal(x.degreesOfFreedom,2);assert.equal(x.adequate,true);
});
test('zero observed cells remain valid when all expected counts are adequate',()=>{
 const x=independenceTable([[0,30,30],[30,0,30]]);
 assert.deepEqual(x.expected,[[15,15,30],[15,15,30]]);
 assert.equal(x.statistic,60);assert.equal(x.valid,true);assert.equal(x.adequate,true);
});
test('empty margins cannot be assigned a statistic or unchanged degrees of freedom',()=>{
 for(const input of [[[0,0,0],[0,0,0]],[[10,0,20],[20,0,10]],[[0,0,0],[10,20,30]]]){
  const x=independenceTable(input);assert.equal(x.statistic,null);assert.equal(x.degreesOfFreedom,null);assert.equal(x.adequate,false);
 }
});
test('positive but small expected counts do not justify the reference approximation',()=>{
 const x=independenceTable([[1,1,1],[1,1,1]]);assert.equal(x.statistic,0);assert.equal(x.valid,true);assert.equal(x.adequate,false);
});
