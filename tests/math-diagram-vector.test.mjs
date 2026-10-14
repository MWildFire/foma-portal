// node --test tests/math-diagram-vector.test.mjs
// Checks the scale of the vector panel in the vector lab (topics 3-12 and 3-13): the panel grows when a + b is long,
// so that no arrow leaves the frame.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { PANEL, RANGE, panelReach, pixelsPerUnit, tipPixel } from '../src/sims/math/vector-logic.ts';

// SVG position of the arrow end at (x, y) when the panel is scaled for the given reach.
function tipOf(x, y, reach) {
  const scale = pixelsPerUnit(reach);
  return [tipPixel(x, scale), tipPixel(-y, scale)];
}

const inside = ([px, py]) => px >= 0 && px <= PANEL && py >= 0 && py <= PANEL;

test('the default panel shows -6 to 6 on each axis', () => {
  assert.equal(RANGE, 6);
  assert.equal(panelReach([2, 1, -1, 2, 1, 3]), 6);
});

test('with a + b = (8, 0) the arrow end stays inside the panel', () => {
  const a = [4, 1];
  const b = [4, -1];
  const sum = [a[0] + b[0], a[1] + b[1]];
  const reach = panelReach([...a, ...b, ...sum]);
  assert.equal(reach, 8);
  assert.ok(inside(tipOf(sum[0], sum[1], reach)), 'the arrow a + b leaves the panel');
  assert.ok(inside(tipOf(a[0], a[1], reach)), 'the arrow a leaves the panel');
  assert.ok(inside(tipOf(b[0], b[1], reach)), 'the arrow b leaves the panel');
});

test('a sum of (-8, -8) is inside the panel too', () => {
  const reach = panelReach([-4, -4, -4, -4, -8, -8]);
  assert.ok(inside(tipOf(-8, -8, reach)));
});
