// node --test tests/cs-diagram-uml.test.mjs
// Checks the box layout of the UML builder (topics b3-1 and b3-2): on a narrow screen (one column) every box and
// every relation line stays inside the 270-unit drawing, which is 270 px wide and fits a 390 px phone.
import { test } from 'node:test';
import assert from 'node:assert/strict';
import { BOX_W, NARROW_W, WIDE_W, edge, layoutBoxes } from '../src/sims/cs/uml-builder-logic.ts';

// Class sizes: attribute and method counts vary, so that the rows have different heights.
const sizes = (n) => Array.from({ length: n }, (_, i) => ({ attrs: i % 3, methods: (2 * i) % 4 }));

test('the two-column drawing is 560 units wide, as before, and the one-column drawing is 270 units wide', () => {
  assert.equal(WIDE_W, 560);
  assert.equal(NARROW_W, 270);
  assert.equal(BOX_W, 230);
});

test('one column: every box lies inside the drawing for 1 to 8 classes', () => {
  for (let n = 1; n <= 8; n++) {
    for (const b of layoutBoxes(sizes(n), 1)) {
      assert.ok(b.x >= 0 && b.x + b.w <= NARROW_W, `n = ${n}: box at x = ${b.x} leaves the drawing`);
    }
  }
});

test('one column: boxes are stacked without overlap', () => {
  const boxes = layoutBoxes(sizes(8), 1);
  for (let i = 1; i < boxes.length; i++) {
    assert.ok(boxes[i].y >= boxes[i - 1].y + boxes[i - 1].h, `box ${i} overlaps box ${i - 1}`);
  }
});

test('one column: a relation between two boxes is vertical, so its diamond or triangle stays inside the boxes', () => {
  const [a, b] = layoutBoxes(sizes(2), 1);
  const [x] = edge(a, b.x + b.w / 2, b.y + b.h / 2);
  assert.equal(x, a.x + a.w / 2);
});

test('two columns: every box lies inside the 560-unit drawing for 1 to 8 classes', () => {
  for (let n = 1; n <= 8; n++) {
    for (const b of layoutBoxes(sizes(n), 2)) {
      assert.ok(b.x >= 0 && b.x + b.w <= WIDE_W, `n = ${n}: box at x = ${b.x} leaves the drawing`);
    }
  }
});
