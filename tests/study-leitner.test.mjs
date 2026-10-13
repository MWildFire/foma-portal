import test from 'node:test';
import assert from 'node:assert/strict';
import { ANSWERS, BOXES, INTERVAL_DAYS, NEW_PER_SESSION, addDays, clampBox, deckKeyAction, deckStats, dueQueue, isDue, nextBox, review, sessionView, termKey } from '../src/lib/leitner.ts';
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

test('a scheduled card is due on its day or later; a future card is not', () => {
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

test('deck stats count the cards that are due, the new cards, the cards in each box and the next day', () => {
  assert.deepEqual(deckStats('geo', IDS, PROGRESS, TODAY), {
    total: 6,
    due: 2, // a and b; the new cards e and f are not due, they are new
    fresh: 2,
    boxes: [1, 1, 1, 1],
    nextDue: '2026-10-14',
  });
});

test('deck stats of an empty pack and of a fresh student', () => {
  assert.deepEqual(deckStats('geo', [], {}, TODAY), { total: 0, due: 0, fresh: 0, boxes: [0, 0, 0, 0], nextDue: null });
  assert.deepEqual(deckStats('geo', ['a', 'b'], {}, TODAY), { total: 2, due: 0, fresh: 2, boxes: [0, 0, 0, 0], nextDue: null });
});

test('deck stats count a repeated id once and clamp a stored box', () => {
  const stats = deckStats('geo', ['a', 'a', 'b'], { 'geo/a': { box: 9, due: '2026-10-20' }, 'geo/b': { box: 0, due: '2026-10-20' } }, TODAY);
  assert.equal(stats.total, 2);
  assert.deepEqual(stats.boxes, [1, 0, 0, 1]);
  assert.equal(stats.due, 0);
  assert.equal(stats.nextDue, '2026-10-20');
});

test('the queue holds the due cards (longest overdue first), then new cards in pack order', () => {
  const items = IDS.map(id => ({ id }));
  assert.deepEqual(dueQueue('geo', items, PROGRESS, TODAY).map(item => item.id), ['a', 'b', 'e', 'f']);
});

test('a session takes at most 10 new cards, however many terms are new; all due cards always come', () => {
  assert.equal(NEW_PER_SESSION, 10);
  const items = Array.from({ length: 214 }, (_, index) => ({ id: `t${index}` }));
  assert.equal(dueQueue('geo', items, {}, TODAY).length, 10);
  assert.deepEqual(dueQueue('geo', items, {}, TODAY).map(item => item.id), items.slice(0, 10).map(item => item.id));
  assert.equal(dueQueue('geo', items, {}, TODAY, { newLimit: 25 }).length, 25);
  assert.equal(dueQueue('geo', items, {}, TODAY, { newLimit: 0 }).length, 0);
  assert.equal(dueQueue('geo', items, {}, TODAY, { newLimit: -3 }).length, 0);
  const progress = Object.fromEntries(items.slice(0, 15).map(item => [`geo/${item.id}`, { box: 1, due: '2026-10-01' }]));
  const queue = dueQueue('geo', items, progress, TODAY).map(item => item.id);
  assert.equal(queue.length, 15 + 10, 'every due card plus 10 new ones');
  assert.deepEqual(queue.slice(0, 15), items.slice(0, 15).map(item => item.id));
  assert.equal(queue[15], 't15');
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

test('a second batch leaves out the cards of the session before it counts the 10 new ones, even if a save failed', () => {
  const items = Array.from({ length: 40 }, (_, index) => ({ id: `t${String(index).padStart(2, '0')}` }));
  const first = dueQueue('geo', items, {}, TODAY);
  assert.deepEqual(first.map(item => item.id), items.slice(0, 10).map(item => item.id));
  // Normal case: the ten cards were answered and are scheduled for later.
  const saved = Object.fromEntries(first.map(item => [`geo/${item.id}`, { box: 1, due: '2026-10-14' }]));
  const have = new Set(first.map(item => item.id));
  assert.deepEqual(dueQueue('geo', items, saved, TODAY, { exclude: have }).map(item => item.id), items.slice(10, 20).map(item => item.id));
  // Storage blocked: nothing was kept, so the ten cards still look new. They must not eat the limit.
  assert.deepEqual(dueQueue('geo', items, {}, TODAY, { exclude: have }).map(item => item.id), items.slice(10, 20).map(item => item.id));
  // A due card that is not in the session yet comes too.
  const withDue = { ...saved, 'geo/t35': { box: 2, due: '2026-10-01' } };
  assert.deepEqual(dueQueue('geo', items, withDue, TODAY, { exclude: have }).map(item => item.id), ['t35', ...items.slice(10, 20).map(item => item.id)]);
  assert.deepEqual(dueQueue('geo', items, {}, TODAY, { exclude: new Set(items.map(item => item.id)) }), []);
});

test('the session view gives the current card, the position and the total', () => {
  const byId = new Map(['a', 'b', 'c', 'd'].map(id => [id, { id }]));
  const view = (session, answered) => {
    const { queue, current, total, position } = sessionView(session, answered, byId);
    return { queue: queue.map(item => item.id), current: current?.id, total, position };
  };
  assert.deepEqual(view(['a', 'b', 'c'], []), { queue: ['a', 'b', 'c'], current: 'a', total: 3, position: 1 });
  assert.deepEqual(view(['a', 'b', 'c'], ['a']), { queue: ['b', 'c'], current: 'b', total: 3, position: 2 });
  assert.deepEqual(view(['a', 'b', 'c'], ['a', 'b', 'c']), { queue: [], current: undefined, total: 3, position: 3 });
  // "More new cards": the session grows, the old answers stay, the count goes on.
  assert.deepEqual(view(['a', 'b', 'c', 'd'], ['a', 'b', 'c']), { queue: ['d'], current: 'd', total: 4, position: 4 });
  assert.deepEqual(view([], []), { queue: [], current: undefined, total: 0, position: 0 });
  assert.deepEqual(view(['zz', 'a'], []).queue, ['a'], 'an id that is not in the pack is skipped');
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
  assert.equal(deckKeyAction({ key: ' ' }, SHOWN), null, 'once the definition is shown, Space is left to the browser (it scrolls)');
});

test('Space on a button, link or field is left to the browser', () => {
  assert.equal(deckKeyAction({ key: ' ' }, { ...PLAIN, onControl: true }), null);
  assert.equal(deckKeyAction({ key: ' ' }, { ...PLAIN, onControl: true, onTextField: true }), null);
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
