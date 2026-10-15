import test from 'node:test';
import assert from 'node:assert/strict';
import { coverageShare } from '../src/sims/geo/opt-g-heat-logic.ts';
test('vegetation and built-up land never exceed the available surface together',()=>{
 for(let other=0;other<=100;other++) for(let wanted=0;wanted<=100;wanted++) {
  const v=coverageShare(wanted,other);
  assert.ok(v>=0 && v+other<=100);
  if(wanted+other<=100)assert.equal(v,wanted);
 }
});
