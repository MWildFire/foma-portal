import test from 'node:test';
import assert from 'node:assert/strict';
import {
  NO_FILTERS,
  WARN_SECONDS,
  allowedMinutes,
  createTimer,
  extraMinutes,
  filterOptions,
  filterQuestions,
  filtersFromParams,
  findTimedSet,
  formatClock,
  hasFilters,
  isWarning,
  listTimedSets,
  pauseTimer,
  questionsOfSet,
  rateQuestion,
  ratingCounts,
  ratingKey,
  resetTimer,
  sanitizeFilters,
  secondsLeft,
  splitRedo,
  startTimer,
  tickTimer,
  withFilter,
  withoutFilters,
  wrongIds,
} from '../src/lib/practice.ts';
import { normalizeState } from '../src/lib/storage.ts';

const q = (id, paper, topicIds, command) => ({ id, paper, topicIds, command });
const QUESTIONS = [
  q('q1', 'P1', ['t1'], 'Explain'),
  q('q2', 'P1', ['t1', 't2'], 'Calculate'),
  q('q3', 'P2', ['t2'], 'explain'),
  q('q4', 'P2', ['t3'], 'Evaluate'),
  q('q5', 'P3', ['t3'], ' Calculate '),
];

// ---- filters

test('filters are read from the address; unknown papers are ignored and commands are case-insensitive', () => {
  const read = search => filtersFromParams(new URLSearchParams(search));
  assert.deepEqual(read(''), NO_FILTERS);
  assert.deepEqual(read('paper=P2&topic=t3&command=Explain'), { paper: 'P2', topic: 't3', command: 'explain' });
  assert.deepEqual(read('paper=P9&topic=%20&command='), NO_FILTERS);
  assert.deepEqual(read('paper=p1'), NO_FILTERS);
});

test('changing one filter keeps the other parameters, and an empty value removes it', () => {
  const start = new URLSearchParams('set=mock-1&paper=P1');
  assert.equal(withFilter(start, 'topic', 't2').toString(), 'set=mock-1&paper=P1&topic=t2');
  assert.equal(withFilter(start, 'paper', '').toString(), 'set=mock-1');
  assert.equal(start.toString(), 'set=mock-1&paper=P1', 'the original is not changed');
  assert.equal(withoutFilters(new URLSearchParams('set=a&paper=P1&topic=t1&command=explain')).toString(), 'set=a');
});

test('hasFilters tells whether anything is chosen', () => {
  assert.equal(hasFilters(NO_FILTERS), false);
  assert.equal(hasFilters({ ...NO_FILTERS, topic: 't1' }), true);
});

test('questions are filtered by paper, topic and command term, together', () => {
  const ids = filters => filterQuestions(QUESTIONS, { ...NO_FILTERS, ...filters }).map(item => item.id);
  assert.deepEqual(ids({}), ['q1', 'q2', 'q3', 'q4', 'q5']);
  assert.deepEqual(ids({ paper: 'P1' }), ['q1', 'q2']);
  assert.deepEqual(ids({ topic: 't2' }), ['q2', 'q3']);
  assert.deepEqual(ids({ command: 'explain' }), ['q1', 'q3']);
  assert.deepEqual(ids({ command: 'calculate' }), ['q2', 'q5']);
  assert.deepEqual(ids({ paper: 'P1', topic: 't1', command: 'calculate' }), ['q2']);
  assert.deepEqual(ids({ paper: 'P3', topic: 't1' }), []);
  assert.deepEqual(filterQuestions([], { ...NO_FILTERS, paper: 'P1' }), []);
});

test('filter options list only what the questions have: papers in order, topics in teaching order, commands A-Z', () => {
  const options = filterOptions(QUESTIONS, ['t3', 't1', 't2']);
  assert.deepEqual(options.papers, [{ value: 'P1', count: 2 }, { value: 'P2', count: 2 }, { value: 'P3', count: 1 }]);
  assert.deepEqual(options.topics, [{ value: 't3', count: 2 }, { value: 't1', count: 2 }, { value: 't2', count: 2 }]);
  assert.deepEqual(options.commands, [
    { value: 'calculate', label: 'Calculate', count: 2 },
    { value: 'evaluate', label: 'Evaluate', count: 1 },
    { value: 'explain', label: 'Explain', count: 2 },
  ]);
});

test('topics that the pack does not list go last; an empty list gives empty options', () => {
  const options = filterOptions([q('a', 'P1', ['zz', 't1'], 'Define')], ['t1']);
  assert.deepEqual(options.topics.map(item => item.value), ['t1', 'zz']);
  assert.deepEqual(filterOptions([]), { papers: [], topics: [], commands: [] });
});

test('sanitizeFilters drops a value that no question has', () => {
  const options = filterOptions(QUESTIONS, ['t1', 't2', 't3']);
  assert.deepEqual(sanitizeFilters({ paper: 'P2', topic: 't9', command: 'define' }, options), { paper: 'P2', topic: '', command: '' });
  assert.deepEqual(sanitizeFilters({ paper: 'P1', topic: 't1', command: 'explain' }, options), { paper: 'P1', topic: 't1', command: 'explain' });
  assert.deepEqual(sanitizeFilters({ paper: 'P1', topic: 't1', command: 'explain' }, filterOptions([])), NO_FILTERS);
});

// ---- timed sets

const L = en => ({ en, ru: `${en} (ru)` });
const GUIDES = [
  { paper: 'P2', title: L('Paper 2'), timedSets: [{ id: 'p2-a', title: L('P2 A'), questionIds: ['q3', 'q4'], minutes: 45 }] },
  { paper: 'P1', part: 'A', title: L('Paper 1 A'), timedSets: [{ id: 'p1-a', title: L('P1 A'), questionIds: ['q1', 'q2'], minutes: 30 }] },
  { paper: 'P1', part: 'B', title: L('Paper 1 B'), timedSets: [{ id: 'p1-b', title: L('P1 B'), questionIds: ['q9'], minutes: 20 }, { id: 'p1-c', title: L('P1 C'), questionIds: [], minutes: 10 }] },
  { paper: 'P3', title: L('Paper 3'), timedSets: [] },
];

test('timed sets are listed across the papers of the subject: P1, P2, P3, guide order kept', () => {
  assert.deepEqual(listTimedSets(GUIDES).map(set => [set.id, set.paper, set.part]), [
    ['p1-a', 'P1', 'A'],
    ['p1-b', 'P1', 'B'],
    ['p1-c', 'P1', 'B'],
    ['p2-a', 'P2', undefined],
  ]);
  assert.deepEqual(listTimedSets([]), []);
});

test('?set=<id> finds the set in any paper; an unknown or empty id finds nothing', () => {
  assert.equal(findTimedSet(GUIDES, 'p2-a')?.minutes, 45);
  assert.equal(findTimedSet(GUIDES, 'p1-b')?.paper, 'P1');
  assert.equal(findTimedSet(GUIDES, 'nope'), undefined);
  assert.equal(findTimedSet(GUIDES, ''), undefined);
});

test('the questions of a set come in the order of the set; missing ids are reported once', () => {
  const result = questionsOfSet({ questionIds: ['q4', 'q9', 'q1', 'q4', 'q9'] }, QUESTIONS);
  assert.deepEqual(result.found.map(item => item.id), ['q4', 'q1']);
  assert.deepEqual(result.missing, ['q9']);
  assert.deepEqual(questionsOfSet({ questionIds: [] }, QUESTIONS), { found: [], missing: [] });
});

// ---- extra time and the clock

test('extra time is 25% on top, rounded up to a whole minute', () => {
  assert.equal(allowedMinutes(45, false), 45);
  assert.equal(allowedMinutes(45, true), 57);
  assert.equal(allowedMinutes(60, true), 75);
  assert.equal(allowedMinutes(75, true), 94);
  assert.equal(allowedMinutes(20, true), 25);
  assert.equal(extraMinutes(45, true), 12);
  assert.equal(extraMinutes(45, false), 0);
  assert.equal(allowedMinutes(0, true), 0);
  assert.equal(allowedMinutes(Number.NaN, true), 0);
});

test('the clock shows minutes and seconds; minutes are not wrapped into hours', () => {
  assert.equal(formatClock(0), '00:00');
  assert.equal(formatClock(75), '01:15');
  assert.equal(formatClock(3420), '57:00');
  assert.equal(formatClock(6300), '105:00');
  assert.equal(formatClock(59.2), '01:00');
  assert.equal(formatClock(-5), '00:00');
});

const T0 = 1_000_000;

test('a new timer is idle with the full time', () => {
  const timer = createTimer(57);
  assert.deepEqual(timer, { status: 'idle', totalMs: 57 * 60_000, remainingMs: 57 * 60_000, endsAt: null });
  assert.equal(secondsLeft(timer), 3420);
  assert.equal(isWarning(timer), false);
});

test('starting sets the end moment; ticking counts down by the second only', () => {
  const started = startTimer(createTimer(10), T0);
  assert.equal(started.status, 'running');
  assert.equal(started.endsAt, T0 + 600_000);
  assert.equal(tickTimer(started, T0 + 100), started, 'same display second: same object');
  const later = tickTimer(started, T0 + 1_500);
  assert.notEqual(later, started);
  assert.equal(secondsLeft(later), 599);
  assert.equal(later.status, 'running');
});

test('the clock rounds up: 00:01 stays until the last moment, then it is done', () => {
  let timer = startTimer(createTimer(1), T0);
  timer = tickTimer(timer, T0 + 59_001);
  assert.equal(secondsLeft(timer), 1);
  assert.equal(timer.status, 'running');
  timer = tickTimer(timer, T0 + 60_000);
  assert.equal(timer.status, 'done');
  assert.equal(secondsLeft(timer), 0);
  assert.equal(timer.endsAt, null);
  assert.equal(tickTimer(timer, T0 + 99_000), timer, 'a finished timer does not change');
});

test('a sleeping phone is fine: the next tick uses the end moment, not the number of ticks', () => {
  const started = startTimer(createTimer(30), T0);
  const back = tickTimer(started, T0 + 20 * 60_000);
  assert.equal(secondsLeft(back), 10 * 60);
  assert.equal(tickTimer(started, T0 + 31 * 60_000).status, 'done');
});

test('pause keeps the time left and resume continues from it', () => {
  const started = startTimer(createTimer(10), T0);
  const paused = pauseTimer(started, T0 + 90_000);
  assert.equal(paused.status, 'paused');
  assert.equal(paused.remainingMs, 510_000);
  assert.equal(paused.endsAt, null);
  assert.equal(tickTimer(paused, T0 + 999_999), paused, 'a paused timer does not move');
  const resumed = startTimer(paused, T0 + 500_000);
  assert.equal(resumed.status, 'running');
  assert.equal(resumed.endsAt, T0 + 500_000 + 510_000);
  assert.equal(pauseTimer(createTimer(10), T0).status, 'idle', 'pause does nothing before the start');
  assert.equal(startTimer(resumed, T0), resumed, 'start does nothing while running');
});

test('pausing after the end moment finishes the timer', () => {
  const started = startTimer(createTimer(1), T0);
  assert.equal(pauseTimer(started, T0 + 61_000).status, 'done');
});

test('start over returns to idle with the full time', () => {
  const running = startTimer(createTimer(10), T0);
  assert.deepEqual(resetTimer(running), createTimer(10));
  const done = tickTimer(running, T0 + 700_000);
  assert.deepEqual(resetTimer(done), createTimer(10));
});

test('a zero-minute timer finishes at once', () => {
  assert.equal(startTimer(createTimer(0), T0).status, 'done');
});

test('the warning covers the last five minutes of a running or paused clock', () => {
  const at = left => ({ status: 'running', totalMs: 3_600_000, remainingMs: left * 1000, endsAt: T0 + left * 1000 });
  assert.equal(WARN_SECONDS, 300);
  assert.equal(isWarning(at(301)), false);
  assert.equal(isWarning(at(300)), true);
  assert.equal(isWarning(at(1)), true);
  assert.equal(isWarning(at(0)), false, 'at zero the clock is over, not warning');
  assert.equal(isWarning({ ...at(120), status: 'paused', endsAt: null }), true);
  assert.equal(isWarning({ ...at(120), status: 'idle', endsAt: null }), false);
  assert.equal(isWarning({ ...at(0), status: 'done', endsAt: null }), false);
});

// ---- ratings and the mistake log

test('the rating key is subject/questionId', () => {
  assert.equal(ratingKey('econ', 'q7'), 'econ/q7');
});

const PROGRESS = {
  'geo/q1': { rating: 'wrong', at: '2026-10-12' },
  'geo/q2': { rating: 'right', at: '2026-10-12' },
  'geo/q3': { rating: 'partial', at: '2026-10-12' },
  'geo/q5': { rating: 'wrong', at: '2026-10-11' },
  'geo/gone': { rating: 'wrong', at: '2026-10-01' }, // not in the pack
  'math/q4': { rating: 'wrong', at: '2026-10-01' }, // another subject
};

test('rating counts cover the questions of the pack only', () => {
  assert.deepEqual(ratingCounts('geo', QUESTIONS, PROGRESS), { total: 5, right: 1, partial: 1, wrong: 2, unrated: 1 });
  assert.deepEqual(ratingCounts('geo', [], PROGRESS), { total: 0, right: 0, partial: 0, wrong: 0, unrated: 0 });
  assert.deepEqual(ratingCounts('geo', [{ id: 'q1' }, { id: 'q1' }], PROGRESS), { total: 1, right: 0, partial: 0, wrong: 1, unrated: 0 });
});

test('questions rated wrong are listed first as "to redo", the rest keep their order', () => {
  const redo = wrongIds('geo', QUESTIONS, PROGRESS);
  assert.deepEqual([...redo].sort(), ['q1', 'q5']);
  const parts = splitRedo(QUESTIONS, redo);
  assert.deepEqual(parts.redo.map(item => item.id), ['q1', 'q5']);
  assert.deepEqual(parts.rest.map(item => item.id), ['q2', 'q3', 'q4']);
  assert.deepEqual(splitRedo([], new Set()), { redo: [], rest: [] });
  assert.deepEqual(splitRedo(QUESTIONS, new Set()).rest.length, 5);
});

test('a self-rating is written as questions["<subject>/<id>"] = { rating, at }, and the storage keeps it', () => {
  const before = { 'geo/q1': { rating: 'wrong', at: '2026-10-12' } };
  const after = rateQuestion(before, ratingKey('geo', 'q1'), 'right', '2026-10-13');
  assert.deepEqual(after, { 'geo/q1': { rating: 'right', at: '2026-10-13' } });
  assert.deepEqual(before, { 'geo/q1': { rating: 'wrong', at: '2026-10-12' } }, 'the original is not changed');
  const added = rateQuestion(before, 'geo/q2', 'partial', '2026-10-13');
  assert.deepEqual(Object.keys(added).sort(), ['geo/q1', 'geo/q2']);
  assert.deepEqual(normalizeState({ questions: added }).questions, added);
});
