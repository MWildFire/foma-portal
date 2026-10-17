// node --test tests/math-diagram-unit-circle.test.mjs
// Checks the tangent in the unit-circle lab (topics 3-7 and 3-8): tan 120 degrees is -1.732, and a tangent line that
// leaves the frame is cut on the edge, on the same line through the centre, instead of being clamped to another value.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { CENTRE, RADIUS, SIZE, tangentOf, tangentSegment } from '../src/sims/math/unit-circle-logic.ts';

const radians = degrees => (degrees * Math.PI) / 180;

test('tan 120 degrees is -1.732, and the frame label shows it as -1.73', () => {
  const tan = tangentOf(radians(120));
  assert.equal(tan.toFixed(3), '-1.732');
  assert.equal(tan.toFixed(2), '-1.73');
});

test('tan is undefined at 90 and 270 degrees', () => {
  assert.equal(tangentOf(radians(90)), null);
  assert.equal(tangentOf(radians(270)), null);
});

test('a tangent inside the frame ends at its true height', () => {
  const seg = tangentSegment(1); // 45 degrees
  assert.equal(seg.cut, false);
  assert.equal(seg.x, CENTRE + RADIUS);
  assert.equal(seg.y, CENTRE - RADIUS);
});

test('a tangent outside the frame is cut on the edge, on the tangent line', () => {
  for (const tan of [tangentOf(radians(120)), -5, 2, 4]) {
    const seg = tangentSegment(tan);
    assert.equal(seg.cut, true, `tan = ${tan}`);
    assert.ok(seg.y === 0 || seg.y === SIZE, `tan = ${tan}: the end is not on the frame edge`);
    assert.ok(seg.x >= 0 && seg.x <= SIZE, `tan = ${tan}: x is outside the frame`);
    assert.ok(Math.abs((seg.y - CENTRE) + tan * (seg.x - CENTRE)) < 1e-9, `tan = ${tan}: the end is off the tangent line`);
  }
});

// A radian slider can approach an axis without reaching it. Rounded display values
// must not turn a finite tangent into an undefined mathematical value.
test('near-axis angles retain their finite tangent', () => {
  for (const theta of [1.57, 4.71, Math.acos(0.0004)]) {
    const actual = tangentOf(theta);
    assert.notEqual(actual, null);
    assert.ok(Math.abs(actual - Math.tan(theta)) < 1e-8);
  }
});
