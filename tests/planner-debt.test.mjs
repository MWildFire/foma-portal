import test from 'node:test';
import assert from 'node:assert/strict';
import {
  blocksOf, dayOf, emptyState, minutesOf, plan, study, sum,
} from './planner-fixtures.mjs';

const movedMinutes = day => minutesOf(day.blocks.filter(b => b.status === 'moved'));

test('past days are frozen: they are not returned and finished work is never planned again', () => {
  const state = study('2026-10-14', '2026-10-15');
  const result = plan('2026-10-16', { state });
  assert.equal(result.days[0].date, '2026-10-16');
  const doneIds = new Set(Object.keys(state.blocks));
  for (const day of result.days) {
    for (const block of day.blocks) assert.equal(doneIds.has(block.id), false, `${block.id} was done on an earlier day`);
  }
  assert.deepEqual(result.debt, []);
  assert.deepEqual(result.unplaced, []);
  for (const block of result.days[0].blocks) assert.equal(block.status, 'planned');
});

test('unfinished work moves to the nearest day with that subject’s quota', () => {
  // French has quota on 15 Oct (35 min), 18 Oct, 20 Oct, 22 Oct and 27 Oct. Everything is done except the French.
  const state = study('2026-10-14', '2026-10-15', { finish: block => block.subject !== 'fr' });
  const result = plan('2026-10-16', { state });
  assert.deepEqual(result.debt, [{ subject: 'fr', minutes: 35 }]);

  const frDays = result.days.filter(day => blocksOf(day, 'fr').length > 0).map(day => day.date);
  assert.deepEqual(frDays.slice(0, 2), ['2026-10-18', '2026-10-20'], 'no French before its next quota day');
  const first = dayOf(result, '2026-10-18');
  assert.equal(minutesOf(blocksOf(first, 'fr')), 45 + 35, 'the quota plus the moved 35 minutes');
  assert.equal(movedMinutes(first) >= 35, true);
  assert.equal(first.moved, 35, 'the day says exactly how much moved onto it');
  assert.ok(blocksOf(first, 'fr').some(b => b.status === 'moved'));
  assert.ok(blocksOf(first, 'geo').every(b => b.status === 'planned'), 'other subjects have no debt');
  assert.deepEqual(result.unplaced, []);
  for (const day of result.days.filter(d => d.date < '2026-10-18')) {
    assert.equal(movedMinutes(day), 0, day.date);
    assert.equal(day.moved, 0, day.date);
  }
});

test('a day may exceed its capacity by at most 15% when it takes over moved work', () => {
  // Nothing done for six days: a lot of debt.
  const result = plan('2026-10-20');
  assert.ok(result.debt.length > 0);
  for (const day of result.days) {
    if (day.blocks.length === 0) continue;
    assert.ok(day.minutes <= Math.floor(1.15 * day.capacity), `${day.date}: ${day.minutes} > 115% of ${day.capacity}`);
    assert.ok(day.minutes >= day.capacity, `${day.date}: moved work only adds minutes`);
    assert.ok(day.moved >= day.minutes - day.capacity, `${day.date}: every minute over capacity is moved work`);
    assert.ok(day.moved <= movedMinutes(day), `${day.date}: the blocks marked "moved" hold all of the moved minutes`);
  }
  assert.ok(sum(result.days.map(d => movedMinutes(d))) > 0);
  assert.ok(result.days[0].minutes > result.days[0].capacity, 'today takes as much as the 15% allows');
});

test('debt that cannot fit before a subject’s last exam is reported, not lost silently', () => {
  const result = plan('2026-10-24');
  const unplaced = Object.fromEntries(result.unplaced.map(u => [u.subject, u.minutes]));
  assert.ok(unplaced.geo > 0 || unplaced.math > 0, 'a week of missed work cannot all be placed');
});

test('partly finished days leave only the missing subjects as debt', () => {
  const state = study('2026-10-14', '2026-10-14', { finish: block => block.subject === 'geo' || block.kind === 'recall' });
  const result = plan('2026-10-15', { state });
  assert.deepEqual(result.debt, [{ subject: 'eng', minutes: 30 }]);
  // Maths today is the diagnostic, a timed set: it is not debt but moves to the next day as a timed block.
  assert.ok(blocksOf(result.days[0], 'math').some(b => b.kind === 'timed' && b.status === 'moved'));
  // English has no quota until 17 Oct, so it waits.
  assert.equal(blocksOf(result.days[0], 'eng').length, 0);
  assert.ok(blocksOf(dayOf(result, '2026-10-17'), 'eng').some(b => b.status === 'moved'));
});

test('finishing only part of a subject leaves the rest as debt', () => {
  let count = 0;
  const state = study('2026-10-14', '2026-10-14', { finish: block => block.subject !== 'geo' || count++ === 0 });
  const result = plan('2026-10-15', { state });
  assert.deepEqual(result.debt, [{ subject: 'geo', minutes: 35 }]); // 60 planned, the first 25-minute block done
});

test('work done early or beyond the plan does not create debt', () => {
  const state = study('2026-10-14', '2026-10-14');
  state.blocks['t:geo/geo-t9@0+25'] = '2026-10-14';
  state.blocks['t:geo/geo-t10@0+25'] = '2026-10-14';
  assert.deepEqual(plan('2026-10-15', { state }).debt, []);
});

test('work done today stays in today’s list, marked done, and the rest of the list does not change', () => {
  const before = plan('2026-10-14').days[0];
  const state = emptyState();
  const first = blocksOf(before, 'geo')[0];
  state.blocks[first.id] = '2026-10-14';
  const after = plan('2026-10-14', { state }).days[0];
  assert.deepEqual(after.blocks.map(b => b.id), before.blocks.map(b => b.id));
  assert.equal(after.blocks.find(b => b.id === first.id).status, 'done');
  assert.equal(after.blocks.find(b => b.id === first.id).doneOn, '2026-10-14');
  assert.equal(after.doneMinutes, 25);
  assert.equal(after.minutes, before.minutes);
  assert.equal(after.blocks.filter(b => b.status === 'done').length, 1);
});

test('finishing every block of today leaves the day complete and tomorrow’s plan untouched', () => {
  const tomorrowBefore = plan('2026-10-14').days[1].blocks.map(b => b.id);
  const state = study('2026-10-14', '2026-10-14');
  const result = plan('2026-10-14', { state });
  assert.ok(result.days[0].blocks.every(b => b.status === 'done'));
  assert.equal(result.days[0].doneMinutes, result.days[0].minutes);
  assert.deepEqual(result.days[1].blocks.map(b => b.id), tomorrowBefore);
});

test('a topic marked done on its own page counts as today’s block', () => {
  const before = blocksOf(plan('2026-10-14').days[0], 'geo');
  const state = emptyState();
  state.topics['geo/geo-t1'] = { done: '2026-10-14' };
  const day = plan('2026-10-14', { state }).days[0];
  const geo = blocksOf(day, 'geo');
  assert.deepEqual(geo.map(b => b.id), before.map(b => b.id));
  assert.equal(geo[0].status, 'done');
  assert.equal(minutesOf(geo), 60);
});

test('a topic finished on an earlier day leaves the first-pass queue', () => {
  const state = emptyState();
  state.topics['geo/geo-t1'] = { done: '2026-10-13' };
  const geo = blocksOf(plan('2026-10-14', { state }).days[0], 'geo');
  assert.deepEqual(geo.map(b => b.id), ['t:geo/geo-t2@0+25', 't:geo/geo-t2@25+15', 't:geo/geo-t3@0+20']);
});

test('a missed timed paper moves to a later day that has room for it', () => {
  // Everything but the timed papers of 23 Oct is done.
  const state = study('2026-10-14', '2026-10-23', { finish: block => block.kind !== 'timed' });
  const result = plan('2026-10-24', { state });
  // English P1 (45 min) fits the English evening of 28 Oct, the eve of both English papers.
  const eng = blocksOf(dayOf(result, '2026-10-28'), 'eng');
  const moved = eng.find(b => b.kind === 'timed');
  assert.deepEqual([moved.id, moved.status, moved.movedFrom, moved.paper, moved.minutes], ['m:2026-10-23/eng/P1', 'moved', '2026-10-23', 'P1', 45]);
  assert.equal(minutesOf(eng), 105, 'the paper takes the place of regular work, the day stays as long as planned');
  assert.equal(dayOf(result, '2026-10-28').moved, 45, 'the moved paper counts as moved work on its new day');
  // Maths P3 (45 min) finds no day with enough regular maths work before the last maths paper.
  assert.deepEqual(result.unplaced.map(u => [u.subject, u.timed.map(t => `${t.paper}@${t.from}`)]), [['math', ['P3@2026-10-23']]]);
  // A moved timed paper is never put on the eve of a different paper.
  for (const date of ['2026-10-25']) {
    assert.ok(blocksOf(dayOf(result, date), 'math').every(b => b.paper === 'P1' || b.kind === 'paper'));
  }
});

test('moved first-pass work never lands on the eve of the subject’s exam', () => {
  const result = plan('2026-10-25');
  const day = result.days[0];
  assert.ok(result.debt.length > 0);
  for (const subject of ['geo', 'math']) {
    assert.ok(blocksOf(day, subject).every(b => b.kind === 'timed' || b.kind === 'paper'), subject);
  }
});

test('the debt of a subject whose exam is over is dropped', () => {
  const state = study('2026-10-14', '2026-10-14');
  const result = plan('2026-10-28', { state });
  assert.ok(!result.debt.some(d => ['geo', 'math', 'fr'].includes(d.subject)), 'finished subjects owe nothing');
  assert.ok(result.activeSubjects.every(s => ['cs', 'econ', 'eng'].includes(s)));
});

test('studying exactly to plan from day to day keeps everything on schedule', () => {
  const state = study('2026-10-14', '2026-10-27');
  const result = plan('2026-10-28', { state });
  assert.deepEqual(result.debt, []);
  assert.deepEqual(result.unplaced, []);
  assert.ok(result.days[0].blocks.every(b => b.status !== 'moved'));
  // No topic is ever taught twice: slice ids are unique in the progress store.
  const slices = Object.keys(state.blocks).filter(id => id.startsWith('t:'));
  assert.equal(new Set(slices).size, slices.length);
  const covered = new Map();
  for (const id of slices) {
    const [, subject, topic, start, len] = /^t:(\w+)\/([\w-]+)@(\d+)\+(\d+)$/.exec(id);
    const key = `${subject}/${topic}`;
    const ranges = covered.get(key) ?? [];
    ranges.push([Number(start), Number(start) + Number(len)]);
    covered.set(key, ranges);
  }
  for (const [key, ranges] of covered) {
    ranges.sort((a, b) => a[0] - b[0]);
    for (let i = 1; i < ranges.length; i++) assert.equal(ranges[i][0], ranges[i - 1][1], `${key}: slices are contiguous`);
  }
});

test('a timed paper whose exam is over is dropped, not reported as unplaced', () => {
  // Geography P1 timed practice on 25 Oct was skipped; the paper itself is sat on 26 Oct, so it is too late to move it.
  const state = study('2026-10-14', '2026-10-25', { finish: block => block.id !== 'm:2026-10-25/geo/P1' });
  const result = plan('2026-10-26', { state });
  assert.deepEqual(result.unplaced, []);
  assert.ok(!result.days.some(d => d.blocks.some(b => b.id === 'm:2026-10-25/geo/P1')));
});

test('moved work is shared fairly between the subjects that owe time', () => {
  // Nothing done on 14 Oct: Geo, Maths and English owe 60, 45 and 30 minutes. On 15 Oct only Geo and Maths have quota.
  const state = study('2026-10-14', '2026-10-14', { finish: block => block.kind === 'recall' });
  const result = plan('2026-10-15', { state });
  const day = result.days[0];
  const extra = subject => minutesOf(blocksOf(day, subject).filter(b => b.status === 'moved'));
  assert.equal(day.minutes <= Math.floor(1.15 * day.capacity), true);
  // The 22 spare minutes round down to 20: ten each for Geo and Maths, none for French (no debt).
  assert.ok(extra('geo') > 0 && extra('math') > 0);
  assert.equal(Math.abs(blocksOf(day, 'geo').length - blocksOf(day, 'math').length) <= 2, true);
  assert.equal(extra('fr'), 0);
  assert.equal(minutesOf(blocksOf(day, 'geo')) - 50, minutesOf(blocksOf(day, 'math')) - 50);
});

test('a topic finished on its own page before the plan started is not taught again', () => {
  const state = emptyState();
  state.topics['geo/geo-t1'] = { done: '2026-10-13' };
  const result = plan('2026-10-13', { state });
  assert.equal(result.days[0].date, '2026-10-14');
  assert.equal(blocksOf(result.days[0], 'geo')[0].topicId, 'geo-t2');
});

test('the recall of today counts the cards that are due', () => {
  const state = emptyState();
  state.terms['fr/fr-term-1a'] = { box: 1, due: '2026-10-14' };
  state.terms['fr/fr-term-2a'] = { box: 2, due: '2026-10-13' };
  state.terms['geo/geo-term-1a'] = { box: 1, due: '2026-10-20' };
  const recall = plan('2026-10-14', { state }).days[0].recall;
  assert.deepEqual(recall.subjects.map(s => [s.subject, s.due]), [['fr', 2]]);
  assert.equal(recall.dueTotal, 2);
});
