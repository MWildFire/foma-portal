import test from 'node:test';
import assert from 'node:assert/strict';
import { USES, interceptsOf, rentOf, winnerAt, zonesOf } from '../src/sims/geo/opt-g-bidrent-logic.ts';
test('illustrative default envelope follows commercial, industrial, housing, farming', () => {
  const bids=interceptsOf(1,50);
  assert.deepEqual(USES,['commercial','industry','housing','farming']);
  assert.deepEqual([0,3,6,9].map(x=>winnerAt(x,bids,1)),USES);
  assert.deepEqual(zonesOf(bids,1).map(z=>z.use),USES);
  for (const [a,b,x] of [['commercial','industry',2],['industry','housing',4.5],['housing','farming',8]]) {
    assert.equal(rentOf(a,x,bids,1),rentOf(b,x,bids,1));
  }
});
test('all controls preserve nonnegative declining bids and winners are maximal', () => {
  for (const demand of [.5,1,1.5]) for(const access of [0,50,100]) for(const transport of [.5,1,2]) {
    const bids=interceptsOf(demand,access);
    for(let x=0;x<=10;x+=.25) {
      const values=USES.map(u=>rentOf(u,x,bids,transport));
      const winner=winnerAt(x,bids,transport);
      assert.ok(values.every(v=>v>=0 && v<=650));
      assert.equal(winner===null?0:rentOf(winner,x,bids,transport),Math.max(...values));
      for(const u of USES) assert.ok(rentOf(u,x+.25,bids,transport)<=rentOf(u,x,bids,transport));
    }
  }
});
