// node --test tests/math-diagram-revolution.test.mjs
// Checks the numbers of the revolution lab (topic 5-12) against the exact integrals and the disc sum.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { areaBetween, discSum, volumeBetween } from '../src/sims/math/revolution-logic.ts';

test('area and volume on [0, 3] are 18 and pi times 129.6', () => {
  assert.ok(Math.abs(areaBetween(0, 3) - 18) < 1e-9);
  assert.ok(Math.abs(volumeBetween(0, 3) - Math.PI * 129.6) < 1e-9);
  assert.equal(volumeBetween(0, 3).toFixed(2), '407.15');
});

test('eight discs on [0, 3] give 407.16, and more discs bring the sum closer to the volume', () => {
  assert.equal(discSum(0, 3, 8).toFixed(2), '407.16');
  let previous = Infinity;
  for (const n of [2, 4, 8, 16, 40]) {
    const error = Math.abs(discSum(0, 3, n) - volumeBetween(0, 3));
    assert.ok(error < previous, `error does not fall at n = ${n}`);
    previous = error;
  }
});
