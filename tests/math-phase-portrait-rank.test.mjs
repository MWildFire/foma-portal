import test from 'node:test';
import assert from 'node:assert/strict';
import {classifyPhasePortrait as classify} from '../src/sims/math/phase-portrait-logic.ts';

test('rank-zero equilibrium plane differs from rank-one equilibrium line',()=>{
 assert.equal(classify(0,0,0,0),'zero-system');
 for(const matrix of [[10,0,0,0],[0,10,0,0],[10,20,20,40],[0,0,10,0]])assert.equal(classify(...matrix),'degenerate');
});
test('rotation, saddle and attraction are classified using exact slider entries',()=>{
 assert.equal(classify(0,-10,10,0),'centre');
 assert.equal(classify(10,0,0,-10),'saddle');
 assert.equal(classify(-10,0,0,-20),'stable-node');
 assert.equal(classify(10,0,0,20),'unstable-node');
 assert.equal(classify(-10,20,-20,-10),'stable-spiral');
 assert.equal(classify(10,20,-20,10),'unstable-spiral');
});
