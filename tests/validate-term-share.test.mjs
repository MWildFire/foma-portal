import test from 'node:test';
import assert from 'node:assert/strict';
import { isTextbookLevel } from '../scripts/lib/stats.ts';

test('a ThinkIB source with a locator is textbook level for geo and French B, and not for the others', () => {
  const src = { kind: 'thinkib', locator: 'ThinkIB eBook, Option A › A.2 › Flood hydrographs' };
  assert.equal(isTextbookLevel(src, 'geo'), true);
  assert.equal(isTextbookLevel(src, 'fr'), true);
  assert.equal(isTextbookLevel(src, 'math'), false);
});

test('a ThinkIB source without a locator, or with a blank one, is not textbook level', () => {
  assert.equal(isTextbookLevel({ kind: 'thinkib' }, 'geo'), false);
  assert.equal(isTextbookLevel({ kind: 'thinkib', locator: '   ' }, 'geo'), false);
});

test('a textbook and an IB guide count in every subject; own and web sources never count', () => {
  for (const subject of ['geo', 'math', 'cs']) {
    assert.equal(isTextbookLevel({ kind: 'textbook', locator: 'ch. 2, p. 3' }, subject), true);
    assert.equal(isTextbookLevel({ kind: 'ib-guide' }, subject), true);
    assert.equal(isTextbookLevel({ kind: 'own' }, subject), false);
    assert.equal(isTextbookLevel({ kind: 'web' }, subject), false);
  }
});
