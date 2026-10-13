import test from 'node:test';
import assert from 'node:assert/strict';
import { ANSWERS, BOXES, INTERVAL_DAYS, addDays, clampBox, deckKeyAction, deckStats, dueQueue, isDue, nextBox, review, termKey } from '../src/lib/leitner.ts';
import { normalizeState } from '../src/lib/storage.ts';

const TODAY = '2026-10-13';

test('the boxes are 1 to 4 with review intervals of 1, 2, 4 and 7 days', () => {
  assert.deepEqual([...BOXES], [1, 2, 3, 4]);
  assert.deepEqual(BOXES.map(box => INTERVAL_DAYS[box]), [1, 2, 4, 7]);
  assert.deepEqual([...ANSWERS], ['knew', 'unsure', 'missed']);
});

test('the key in storage is subject/termId', () => {
  assert.equal(termKey('econ', 'demand'), 'econ/demand');
});

test('addDays moves by calendar days across months, years and leap days', () => {
  assert.equal(addDays('2026-10-13', 1), '2026-10-14');
  assert.equal(addDays('2026-10-30', 2), '2026-11-01');
  assert.equal(addDays('2026-12-30', 7), '2027-01-06');
  assert.equal(addDays('2028-02-28', 1), '2028-02-29');
  assert.equal(addDays('2027-02-28', 1), '2027-03-01');
  assert.equal(addDays('2026-10-13', 0), '2026-10-13');
  assert.equal(addDays('2026-10-13', -13), '2026-09-30');
  assert.equal(addDays('2026-10-13T08:00:00Z', 1), '2026-10-14');
  assert.throws(() => addDays('tomorrow', 1), RangeError);
});

test('clampBox keeps stored numbers inside 1 to 4', () => {
  assert.equal(clampBox(undefined), 1);
  assert.equal(clampBox(null), 1);
  assert.equal(clampBox(Number.NaN), 1);
  assert.equal(clampBox(0), 1);
  assert.equal(clampBox(2.6), 3);
  assert.equal(clampBox(9), 4);
});

test('an answer moves the card: knew it goes up, unsure stays, did not know goes back to box 1', () => {
  const cases = [
    // [box before, answer, box after]
    [undefined, 'knew', 2],
    [undefined, 'unsure', 1],
    [undefined, 'missed', 1],
    [1, 'knew', 2],
    [1, 'unsure', 1],
    [1, 'missed', 1],
    [2, 'knew', 3],
    [2, 'unsure', 2],
    [2, 'missed', 1],
    [3, 'knew', 4],
    [3, 'unsure', 3],
    [3, 'missed', 1],
    [4, 'knew', 4],
    [4, 'unsure', 4],
    [4, 'missed', 1],
  ];
  for (const [before, answer, after] of cases) {
    assert.equal(nextBox(before, answer), after, `${before} + ${answer}`);
  }
});

test('review stores the new box and the day the card is due again', () => {
  assert.deepEqual(review(undefined, 'knew', TODAY), { box: 2, due: '2026-10-15' });
  assert.deepEqual(review(undefined, 'missed', TODAY), { box: 1, due: '2026-10-14' });
  assert.deepEqual(review({ box: 1, due: TODAY }, 'knew', TODAY), { box: 2, due: '2026-10-15' });
  assert.deepEqual(review({ box: 2, due: TODAY }, 'knew', TODAY), { box: 3, due: '2026-10-17' });
  assert.deepEqual(review({ box: 3, due: TODAY }, 'knew', TODAY), { box: 4, due: '2026-10-20' });
  assert.deepEqual(review({ box: 4, due: TODAY }, 'knew', TODAY), { box: 4, due: '2026-10-20' });
  assert.deepEqual(review({ box: 3, due: TODAY }, 'unsure', TODAY), { box: 3, due: '2026-10-17' });
  assert.deepEqual(review({ box: 4, due: TODAY }, 'missed', TODAY), { box: 1, due: '2026-10-14' });
});

test('what review writes is accepted by the storage normalizer unchanged', () => {
  const written = { 'geo/a': review(undefined, 'knew', TODAY), 'geo/b': review({ box: 4, due: TODAY }, 'missed', TODAY) };
  assert.deepEqual(normalizeState({ terms: written }).terms, written);
});

test('a new card and a card whose day has come are due; a future card is not', () => {
  assert.equal(isDue(undefined, TODAY), true);
  assert.equal(isDue({ box: 1, due: '2026-10-12' }, TODAY), true);
  assert.equal(isDue({ box: 1, due: '2026-10-13' }, TODAY), true);
  assert.equal(isDue({ box: 1, due: '2026-10-14' }, TODAY), false);
  assert.equal(isDue({ box: 2, due: '2026-10-14T08:00:00Z' }, TODAY), false);
});

test('a damaged date counts as due, so the card never disappears', () => {
  assert.equal(isDue({ box: 1, due: 'abc' }, TODAY), true);
  assert.equal(isDue({ box: 1, due: '' }, TODAY), true);
});

const IDS = ['a', 'b', 'c', 'd', 'e', 'f'];
const PROGRESS = {
  'geo/a': { box: 1, due: '2026-10-12' }, // due, one day late
  'geo/b': { box: 2, due: '2026-10-13' }, // due today
  'geo/c': { box: 3, due: '2026-10-16' }, // later
  'geo/d': { box: 4, due: '2026-10-14' }, // tomorrow
  // e and f are new
  'geo/gone': { box: 2, due: '2026-10-01' }, // not in the pack: ignored
  'math/a': { box: 4, due: '2026-10-01' }, // another subject: ignored
};

test('deck stats count due cards (new ones included), new cards, boxes and the next day', () => {
  assert.deepEqual(deckStats('geo', IDS, PROGRESS, TODAY), {
    total: 6,
    due: 4, // a, b, e, f
    fresh: 2,
    boxes: [1, 1, 1, 1],
    nextDue: '2026-10-14',
  });
});

test('deck stats of an empty pack and of a fresh student are all zeros or all new', () => {
  assert.deepEqual(deckStats('geo', [], {}, TODAY), { total: 0, due: 0, fresh: 0, boxes: [0, 0, 0, 0], nextDue: null });
  assert.deepEqual(deckStats('geo', ['a', 'b'], {}, TODAY), { total: 2, due: 2, fresh: 2, boxes: [0, 0, 0, 0], nextDue: null });
});

test('deck stats count a repeated id once and clamp a stored box', () => {
  const stats = deckStats('geo', ['a', 'a', 'b'], { 'geo/a': { box: 9, due: '2026-10-20' }, 'geo/b': { box: 0, due: '2026-10-20' } }, TODAY);
  assert.equal(stats.total, 2);
  assert.deepEqual(stats.boxes, [1, 0, 0, 1]);
  assert.equal(stats.due, 0);
  assert.equal(stats.nextDue, '2026-10-20');
});

test('the queue holds only due cards: longest overdue first, then new cards in pack order', () => {
  const items = IDS.map(id => ({ id }));
  assert.deepEqual(dueQueue('geo', items, PROGRESS, TODAY).map(item => item.id), ['a', 'b', 'e', 'f']);
});

test('on the same day weaker boxes come first, and equal cards keep the pack order', () => {
  const items = ['x', 'y', 'z', 'w'].map(id => ({ id }));
  const progress = {
    'geo/x': { box: 3, due: '2026-10-10' },
    'geo/y': { box: 1, due: '2026-10-10' },
    'geo/z': { box: 1, due: '2026-10-10' },
    'geo/w': { box: 4, due: '2026-10-01' },
  };
  assert.deepEqual(dueQueue('geo', items, progress, TODAY).map(item => item.id), ['w', 'y', 'z', 'x']);
});

test('the queue is empty when nothing is due, and for an empty pack', () => {
  const items = [{ id: 'a' }];
  assert.deepEqual(dueQueue('geo', items, { 'geo/a': { box: 2, due: '2026-10-20' } }, TODAY), []);
  assert.deepEqual(dueQueue('geo', [], {}, TODAY), []);
});

test('the queue skips a repeated id', () => {
  assert.deepEqual(dueQueue('geo', [{ id: 'a' }, { id: 'a' }], {}, TODAY).map(item => item.id), ['a']);
});

test('answering a card takes it out of the queue for today', () => {
  const items = [{ id: 'a' }, { id: 'b' }];
  const progress = { 'geo/a': review(undefined, 'missed', TODAY) };
  assert.deepEqual(dueQueue('geo', items, progress, TODAY).map(item => item.id), ['b']);
  assert.deepEqual(dueQueue('geo', items, progress, addDays(TODAY, 1)).map(item => item.id), ['a', 'b']);
});

// ---- the keyboard

const PLAIN = { revealed: false, onControl: false, onTextField: false };
const SHOWN = { ...PLAIN, revealed: true };

test('Space shows the definition, also when the browser reports only the key code', () => {
  assert.deepEqual(deckKeyAction({ key: ' ' }, PLAIN), { type: 'reveal' });
  assert.deepEqual(deckKeyAction({ key: 'Spacebar', code: 'Space' }, PLAIN), { type: 'reveal' });
  assert.deepEqual(deckKeyAction({ key: ' ' }, SHOWN), { type: 'reveal' }, 'harmless when it is already shown');
});

test('Space on a button, link or field is left to the browser', () => {
  assert.equal(deckKeyAction({ key: ' ' }, { ...PLAIN, onControl: true }), null);
  assert.equal(deckKeyAction({ key: ' ' }, { ...SHOWN, onControl: true, onTextField: true }), null);
});

test('the keys 1, 2 and 3 answer in the order of the buttons, once the definition is shown', () => {
  assert.deepEqual(deckKeyAction({ key: '1' }, SHOWN), { type: 'answer', answer: 'knew' });
  assert.deepEqual(deckKeyAction({ key: '2' }, SHOWN), { type: 'answer', answer: 'unsure' });
  assert.deepEqual(deckKeyAction({ key: '3' }, SHOWN), { type: 'answer', answer: 'missed' });
  assert.deepEqual([...ANSWERS], ['knew', 'unsure', 'missed']);
});

test('a number does nothing before the definition is shown, in a text box, or for other keys', () => {
  assert.equal(deckKeyAction({ key: '1' }, PLAIN), null);
  assert.equal(deckKeyAction({ key: '1' }, { ...SHOWN, onTextField: true }), null);
  for (const key of ['0', '4', '9', 'a', 'Enter', 'ArrowRight', 'Escape']) assert.equal(deckKeyAction({ key }, SHOWN), null, key);
  assert.deepEqual(deckKeyAction({ key: '1' }, { ...SHOWN, onControl: true }), { type: 'answer', answer: 'knew' }, 'a number on a focused button still answers');
});

test('a held key, a browser shortcut or an already handled key is ignored', () => {
  assert.equal(deckKeyAction({ key: '1', repeat: true }, SHOWN), null);
  assert.equal(deckKeyAction({ key: ' ', repeat: true }, PLAIN), null);
  assert.equal(deckKeyAction({ key: '1', ctrlKey: true }, SHOWN), null);
  assert.equal(deckKeyAction({ key: '1', metaKey: true }, SHOWN), null);
  assert.equal(deckKeyAction({ key: ' ', altKey: true }, PLAIN), null);
  assert.equal(deckKeyAction({ key: '2', defaultPrevented: true }, SHOWN), null);
});
