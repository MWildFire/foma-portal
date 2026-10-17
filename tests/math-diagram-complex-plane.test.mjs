// node --test tests/math-diagram-complex-plane.test.mjs
// Checks the argument used by the complex-plane lab (topics 1-12 and 1-13): radians, principal value in (-pi, pi].
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { ARGAND_SIZE, complexPointLabels, principalArgument } from '../src/sims/math/complex-plane-logic.ts';

test('arg(2 + 3i) is 0.9828 rad, which is 56.3 degrees', () => {
  const theta = principalArgument(2, 3);
  assert.equal(theta.toFixed(4), '0.9828');
  assert.equal(((theta * 180) / Math.PI).toFixed(1), '56.3');
});

test('all 289 slider pairs keep point names in the frame and separate, including zero and the top Im axis', () => {
  for (let a = -4; a <= 4; a += 0.5) for (let b = -4; b <= 4; b += 0.5) {
    const labels = complexPointLabels(a, b);
    assert.equal(labels.length, a === 0 && b === 0 ? 1 : 2);
    for (const { rect } of labels) {
      assert.ok(rect.left >= 3 && rect.right <= ARGAND_SIZE - 3 && rect.top >= 3 && rect.bottom <= ARGAND_SIZE - 3, `${a},${b}`);
      assert.ok(!(rect.left < 165 && rect.right > 144 && rect.top < 18 && rect.bottom > 0), `Im collision ${a},${b}`);
    }
    if (labels.length === 2) {
      const [u, v] = labels.map(l => l.rect);
      assert.ok(!(u.left < v.right && u.right > v.left && u.top < v.bottom && u.bottom > v.top), `point label collision ${a},${b}`);
    }
  }
  assert.equal(complexPointLabels(0, 0)[0].text, 'z = zw');
});

test('z=-1 has separate point names with the actual 16px browser text height', () => {
  const labels = complexPointLabels(-1, 0);
  const measured = labels.map(l => ({ left: l.anchor === 'start' ? l.x : l.x - 17, right: l.anchor === 'start' ? l.x + 17 : l.x, top: l.y - 13, bottom: l.y + 3 }));
  const [u, v] = measured;
  assert.ok(!(u.left < v.right && u.right > v.left && u.top < v.bottom && u.bottom > v.top));
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
