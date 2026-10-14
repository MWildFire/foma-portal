import test from 'node:test';
import assert from 'node:assert/strict';
import {
  BANDS,
  CENTRE,
  GAP,
  MAX_BAR,
  WEIGHTS,
  barLength,
  bandForRow,
  femaleBarX,
  maleBarX,
  sharesOf,
} from '../src/sims/geo/core-population-pyramid-logic.ts';

// Rows are drawn from the top of the chart, so the labels read from the oldest band at the top to the youngest at the bottom.
test('age labels run from 80+ at the top to 0–9 at the bottom', () => {
  const shown = BANDS.map((_, row) => BANDS[bandForRow(row)]);
  assert.deepEqual(shown, [...BANDS].reverse());
  assert.equal(shown[0], '80+');
  assert.equal(shown[shown.length - 1], '0–9');
});

test('the bottom bar is the youngest band in every stage', () => {
  for (let stage = 0; stage < WEIGHTS.length; stage++) {
    const shares = sharesOf(stage);
    const bottom = shares[bandForRow(BANDS.length - 1)];
    assert.equal(bottom, shares[0], `stage ${stage + 1}`);
  }
});

test('male bars grow to the left of the centre and female bars to the right, outward from the gap', () => {
  for (const width of [0, 25, MAX_BAR]) {
    assert.equal(maleBarX(width) + width, CENTRE - GAP, 'male bar ends at the gap');
    assert.ok(maleBarX(width) < CENTRE, 'male bar lies on the left');
    assert.equal(femaleBarX(), CENTRE + GAP, 'female bar starts at the gap');
    assert.ok(femaleBarX() + width > CENTRE, 'female bar lies on the right');
  }
});

test('the largest band has the full bar length on the common scale', () => {
  const longest = Math.max(...WEIGHTS.flatMap((_, stage) => sharesOf(stage)));
  assert.equal(barLength(longest), MAX_BAR);
});

// The shapes must match the notes in the component: the base is wide in stages 1 and 2, narrow in stage 3, and the
// middle and older bands are wider than the base in stage 4, while the top is wider than the base in stage 5.
test('stage shapes match the notes: base first (index 0 is the youngest band)', () => {
  const [stage1, stage2, stage3, stage4, stage5] = WEIGHTS;
  assert.equal(Math.max(...stage1), stage1[0], 'stage 1: the base is the widest band');
  assert.equal(Math.max(...stage2), stage2[0], 'stage 2: the base is the widest band');
  assert.ok(stage3[0] < stage3[2], 'stage 3: the base is narrower than the young adult bands');
  assert.ok(stage4[3] > stage4[0] && stage4[5] > stage4[0], 'stage 4: middle and older bands are wider than the base');
  assert.ok(stage5[8] > stage5[0], 'stage 5: the top is wider than the base');
});
