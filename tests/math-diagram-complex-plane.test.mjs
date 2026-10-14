// node --test tests/math-diagram-complex-plane.test.mjs
// Checks the argument used by the complex-plane lab (topics 1-12 and 1-13): radians, principal value in (-pi, pi].
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { principalArgument } from '../src/sims/math/complex-plane-logic.ts';

test('arg(2 + 3i) is 0.9828 rad, which is 56.3 degrees', () => {
  const theta = principalArgument(2, 3);
  assert.equal(theta.toFixed(4), '0.9828');
  assert.equal(((theta * 180) / Math.PI).toFixed(1), '56.3');
});

test('the principal argument lies in (-pi, pi], so the negative real axis gives pi', () => {
  assert.equal(principalArgument(-2, 0), Math.PI);
  assert.equal(principalArgument(-1, -0), Math.PI);
  assert.equal(principalArgument(0, -2), -Math.PI / 2);
  for (let a = -4; a <= 4; a += 0.5) {
    for (let b = -4; b <= 4; b += 0.5) {
      if (a === 0 && b === 0) continue;
      const theta = principalArgument(a, b);
      assert.ok(theta > -Math.PI && theta <= Math.PI, `arg(${a} + ${b}i) = ${theta}`);
    }
  }
});
