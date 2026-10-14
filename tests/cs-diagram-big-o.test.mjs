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

test('the exponential curve leaves the top between n = 8 and n = 9 and ends on the top edge', () => {
  const { d, clipX } = curve(f('o2n'));
  assert.ok(clipX >= xAt(8) && clipX <= xAt(9), `clip at x = ${clipX}`);
  assert.ok(d.endsWith(`${clipX},${Y0}`), 'the path does not end on the top edge');
});

test('the O(n²) curve leaves the top between n = 17 and n = 18', () => {
  const { clipX } = curve(f('on2'));
  assert.ok(clipX >= xAt(17) && clipX <= xAt(18), `clip at x = ${clipX}`);
});

test('only O(n²) and O(2ⁿ) leave the top within n = 1..50', () => {
  const clipped = CLASSES.filter((c) => curve(c.f).clipX !== null).map((c) => c.id);
  assert.deepEqual(clipped, ['on2', 'o2n']);
});

test('the y-axis runs from 0 to YMAX in even steps, and its top is at the top edge of the chart', () => {
  assert.equal(Y_TICKS[0], 0);
  assert.equal(Y_TICKS.at(-1), YMAX);
  const steps = Y_TICKS.slice(1).map((v, i) => v - Y_TICKS[i]);
  assert.ok(steps.every((s) => s === steps[0]), 'the ticks are not evenly spaced');
  assert.equal(yAt(0), Y1);
  assert.equal(yAt(YMAX), Y0);
});

test('at n = 50 the linear curve rises clearly above the axis, and O(1) and O(log n) are still apart', () => {
  const lift = (v) => Y1 - yAt(v); // height above the axis, in SVG units
  assert.ok(lift(f('on')(NMAX)) >= 30, `O(n) at n = 50 rises only ${lift(f('on')(NMAX)).toFixed(1)} units`);
  const gap = yAt(1) - yAt(f('olog')(NMAX)); // SVG y grows downwards, so O(log n) is the higher point
  assert.ok(gap >= 2, `O(1) and O(log n) at n = 50 are only ${gap.toFixed(1)} units apart`);
});

test('the table values for n = 10, 100 and 1000 are unchanged', () => {
  assert.equal(ops(CLASSES[1], 10), 3); // log2 10 = 3.32
  assert.equal(ops(CLASSES[3], 100), 664); // 100 log2 100 = 664.4
  assert.equal(ops(CLASSES[4], 1000), 1000000);
  assert.equal(ops(CLASSES[5], 10), 1024);
});
