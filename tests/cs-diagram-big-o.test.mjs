// node --test tests/cs-diagram-big-o.test.mjs
// Checks the growth functions and the chart geometry of the big-O simulation (topic b2-4).
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CLASSES, NMAX, Y0, Y1, YMAX, Y_TICKS, curve, ops, xAt, yAt } from '../src/sims/cs/big-o-logic.ts';

const f = (id) => CLASSES.find((c) => c.id === id).f;

test('from n = 5 to 100 the growth order is strict: 1 < log n < n < n log n < n² < 2ⁿ', () => {
  for (let n = 5; n <= 100; n++) {
    const chain = [1, f('olog')(n), f('on')(n), f('onlogn')(n), f('on2')(n), f('o2n')(n)];
    for (let i = 1; i < chain.length; i++) {
      assert.ok(chain[i - 1] < chain[i], `n = ${n}: step ${i} is not strictly increasing`);
    }
  }
});

// For n = 2..4 the strict chain does not hold: log 2 = 1, and 2ⁿ is still at most n² (equal at n = 2 and n = 4).
// 2ⁿ passes n² at n = 5.
test('for n = 2..4 the chain holds in its weak form; 2ⁿ is above n² from n = 5 on', () => {
  for (let n = 2; n <= 4; n++) {
    assert.ok(1 <= f('olog')(n) && f('olog')(n) < n, `n = ${n}: log n is out of order`);
    assert.ok(n <= f('onlogn')(n) && f('onlogn')(n) <= f('on2')(n), `n = ${n}: n log n is out of order`);
    assert.ok(f('o2n')(n) <= f('on2')(n), `n = ${n}: 2ⁿ is above n²`);
  }
  assert.ok(f('o2n')(5) > f('on2')(5));
});

test('linear and logarithmic scales keep the small curves clear of the axis at n = 8 and 64', () => {
  for (const scale of ['linear', 'log']) {
    for (const n of [8, 64]) {
      assert.ok(Y1 - yAt(1, scale) >= 8, `${scale}: constant touches axis`);
      assert.ok(yAt(1, scale) - yAt(Math.log2(n), scale) >= 8, `${scale}: curves merge at n=${n}`);
    }
  }
  assert.ok(NMAX >= 64, 'both sample sizes must be visible');
});

test('linear ticks and geometry stay linear; logarithmic distances encode ratios', () => {
  assert.equal(Y_TICKS[0], 0);
  assert.equal(Y_TICKS.at(-1), YMAX);
  assert.equal(yAt(0), Y1);
  assert.equal(yAt(YMAX), Y0);
  assert.equal(yAt(5) - yAt(10), yAt(10) - yAt(15));
  assert.ok(Math.abs((yAt(1, 'log') - yAt(2, 'log')) - (yAt(2, 'log') - yAt(4, 'log'))) < 1e-10);
});

test('curves clip at the plotted range without out-of-frame coordinates in either scale', () => {
  for (const scale of ['linear', 'log']) {
    for (const cls of CLASSES) {
      const { d, clipX } = curve(cls.f, scale);
      assert.ok(!/NaN|Infinity/.test(d), `${scale} ${cls.id}`);
      for (const pt of d.slice(1).split(' L')) {
        const [x,y] = pt.split(',').map(Number);
        assert.ok(x >= xAt(1) && x <= xAt(NMAX));
        assert.ok(y >= Y0 - 1e-9 && y <= Y1 + 1e-9, `${scale} ${cls.id}: ${y}`);
      }
      if (clipX !== null) assert.ok(d.endsWith(`${clipX},${Y0}`));
    }
  }
  assert.deepEqual(CLASSES.filter(c => curve(c.f).clipX !== null).map(c => c.id), ['on', 'onlogn', 'on2', 'o2n']);
});

test('the table values for n = 10, 100 and 1000 are unchanged', () => {
  assert.equal(ops(CLASSES[1], 10), 3); // log2 10 = 3.32
  assert.equal(ops(CLASSES[3], 100), 664); // 100 log2 100 = 664.4
  assert.equal(ops(CLASSES[4], 1000), 1000000);
  assert.equal(ops(CLASSES[5], 10), 1024);
});
