import test from 'node:test';
import assert from 'node:assert/strict';
import { lastExamDate, sittingPapers } from '../src/planner/calendar.ts';
import { parseBlockId } from '../src/planner/blocks.ts';
import { addDays } from '../src/planner/dates.ts';
import { buildPlan } from '../src/planner/plan.ts';
import {
  allDates, blocksOf, dayOf, emptyState, exams, makeSubjects, makeTopics, minutesOf, plan, quotas, study, SUBJECTS,
} from './planner-fixtures.mjs';

const TODAYS = ['2026-10-14', '2026-10-17', '2026-10-21', '2026-10-24', '2026-10-27', '2026-10-30', '2026-11-02'];

test('the plan runs from today to the last exam and marks today', () => {
  const result = plan('2026-10-14');
  assert.equal(result.firstDate, '2026-10-14');
  assert.equal(result.lastDate, '2026-11-05');
  assert.equal(result.days.length, 23);
  assert.equal(result.days[0].date, '2026-10-14');
  assert.equal(result.days.at(-1).date, '2026-11-05');
  assert.deepEqual(result.days.filter(d => d.isToday).map(d => d.date), ['2026-10-14']);
  assert.equal(dayOf(result, '2026-10-26').kind, 'exam');
  assert.equal(dayOf(result, '2026-10-14').kind, 'study');
  assert.equal(dayOf(result, '2026-10-14').weekday, 'wed');
  assert.deepEqual(dayOf(result, '2026-10-14').focus, quotas.days.find(day => day.date === '2026-10-14').focus);
});

test('before the plan starts the first plan day leads; after the last exam nothing is left', () => {
  const early = plan('2026-10-10');
  assert.equal(early.days[0].date, '2026-10-14');
  assert.equal(early.days.some(d => d.isToday), false);
  assert.equal(early.debt.length, 0);

  const finalDay = plan('2026-11-05');
  assert.deepEqual(allDates(finalDay), ['2026-11-05']);
  assert.equal(finalDay.days[0].blocks.length, 0);
  assert.deepEqual(finalDay.activeSubjects, []);

  const after = plan('2026-11-06');
  assert.deepEqual(after.days, []);
  assert.deepEqual(after.activeSubjects, []);
});

test('the blocks of every day add up to its capacity within 15%', () => {
  for (const today of TODAYS) {
    for (const day of plan(today).days) {
      if (day.blocks.length === 0) continue;
      const slack = 0.15 * day.capacity;
      assert.ok(Math.abs(day.minutes - day.capacity) <= slack, `${today}: ${day.date} has ${day.minutes} min for capacity ${day.capacity}`);
      assert.equal(day.minutes, minutesOf(day.blocks), `${day.date}: day.minutes is the sum of its blocks`);
    }
  }
  // With the quotas as written the sum is exact.
  for (const day of plan('2026-10-14').days.filter(d => d.blocks.length > 0)) {
    assert.equal(day.minutes, day.capacity, day.date);
  }
});

test('no blocks are planned for a subject on or after its last exam', () => {
  for (const today of TODAYS) {
    const result = plan(today);
    for (const day of result.days) {
      for (const block of day.blocks) {
        if (!block.subject) continue;
        assert.ok(day.date < lastExamDate(exams, block.subject), `${day.date}: ${block.subject} block ${block.id} is on or after its last exam`);
      }
    }
  }
  const result = plan('2026-10-14');
  assert.ok(blocksOf(dayOf(result, '2026-10-26'), 'geo').length > 0, 'geo still has its eve on 26 Oct');
  assert.equal(blocksOf(dayOf(result, '2026-10-27'), 'geo').length, 0);
  assert.equal(blocksOf(dayOf(result, '2026-10-27'), 'math').length, 0);
  assert.equal(blocksOf(dayOf(result, '2026-10-29'), 'eng').length, 0);
  assert.equal(result.days.filter(d => d.date > '2026-11-03').flatMap(d => blocksOf(d, 'econ')).length, 0);
  assert.deepEqual(plan('2026-10-28').activeSubjects.sort(), ['cs', 'econ', 'eng']);
});

test('the day before an exam holds only that paper, with no new material', () => {
  for (const today of TODAYS) {
    const result = plan(today);
    for (const exam of exams.papers) {
      const eve = result.days.find(d => d.date === addDays(exam.date, -1));
      if (!eve) continue;
      const sitting = sittingPapers(exams, exam.subject, exam.date);
      for (const block of blocksOf(eve, exam.subject)) {
        assert.ok(block.kind === 'paper' || block.kind === 'timed', `${eve.date}: ${block.kind} block ${block.id} before ${exam.id}`);
        if (block.kind === 'timed') assert.ok(sitting.some(p => p.paper === block.paper), `${eve.date}: timed ${block.paper} is not sitting on ${exam.date}`);
        if (block.kind === 'paper') assert.ok(sitting.some(p => p.id === block.examId), `${eve.date}: ${block.examId} is not sitting on ${exam.date}`);
      }
    }
  }
});

test('eve of the first papers: only the Geography P1 and Maths P1 papers', () => {
  const day = dayOf(plan('2026-10-14'), '2026-10-25');
  assert.deepEqual([...new Set(day.blocks.map(b => b.subject).filter(Boolean))].sort(), ['geo', 'math']);
  const timed = day.blocks.filter(b => b.kind === 'timed').map(b => [b.subject, b.paper, b.minutes]);
  assert.deepEqual(timed, [['geo', 'P1', 45], ['math', 'P1', 60]]);
  assert.ok(day.blocks.every(b => ['recall', 'timed', 'paper'].includes(b.kind)));
  assert.deepEqual(day.eveOf.map(p => p.id), ['math-p1', 'geo-p1']);
  assert.equal(day.minutes, 240);
});

test('a timed essay planned for the eve of other papers moves to the eve of its own paper', () => {
  const result = plan('2026-10-14');
  const nov1 = dayOf(result, '2026-11-01');
  assert.equal(blocksOf(nov1, 'econ').some(b => b.kind === 'timed'), false);
  assert.deepEqual(blocksOf(nov1, 'econ').map(b => b.examId).sort(), ['econ-p2', 'econ-p3']);
  assert.equal(minutesOf(blocksOf(nov1, 'econ')), 150);
  assert.ok(blocksOf(nov1, 'cs').some(b => b.kind === 'topic'), 'CS has no exam on 2 Nov, so it keeps its regular work');
  const nov2 = blocksOf(dayOf(result, '2026-11-02'), 'econ');
  assert.deepEqual(nov2.map(b => [b.kind, b.paper, b.status, b.movedFrom]), [['timed', 'P1', 'moved', '2026-11-01']]);
});

test('the first day fills each quota in order: slices of the queue, and maths with the diagnostic set', () => {
  const day = dayOf(plan('2026-10-14'), '2026-10-14');
  assert.equal(day.blocks[0].kind, 'recall');
  assert.equal(day.blocks[0].id, 'r:2026-10-14');
  assert.equal(day.blocks[0].minutes, 15);
  assert.equal(day.recall.minutes, 15);
  assert.deepEqual(blocksOf(day, 'geo').map(b => b.id), [
    't:geo/geo-t1@0+25', 't:geo/geo-t2@0+25', 't:geo/geo-t2@25+10',
  ]);
  // The timed diagnostic takes the whole maths quota of the day (45 minutes), so no maths slice is planned here.
  assert.deepEqual(blocksOf(day, 'math').map(b => b.minutes), [45]);
  assert.equal(blocksOf(day, 'math')[0].route, '/s/math/practice?set=diagnostic');
  assert.deepEqual(blocksOf(day, 'eng').map(b => b.minutes), [25, 5]);
  assert.deepEqual(day.blocks.map(b => b.subject), [null, 'geo', 'geo', 'geo', 'math', 'eng', 'eng']);
  const first = blocksOf(day, 'geo')[0];
  assert.equal(first.status, 'planned');
  assert.equal(first.route, '/s/geo/t/geo-t1');
  assert.equal(first.topicId, 'geo-t1');
  assert.deepEqual(first.title, { en: 'geo topic 1', ru: 'geo тема 1' });
  assert.equal(first.last, true);
  assert.equal(blocksOf(day, 'geo')[1].last, false);
  assert.equal(blocksOf(day, 'geo')[2].last, false);
});

test('the next day continues where the queue stopped', () => {
  const state = study('2026-10-14', '2026-10-14');
  const day = dayOf(plan('2026-10-15', { state }), '2026-10-15');
  assert.deepEqual(blocksOf(day, 'geo').map(b => b.id), [
    't:geo/geo-t2@35+5', 't:geo/geo-t3@0+25', 't:geo/geo-t3@25+20',
  ]);
  assert.equal(blocksOf(day, 'geo')[0].last, true);
  assert.equal(blocksOf(day, 'geo').every(b => b.status === 'planned'), true);
});

test('queue order: in-scope first, then priority, then order', () => {
  const base = makeTopics('geo', 1)[0];
  const topic = (id, priority, order, inMockScope) => ({ ...base, id, priority, order, inMockScope, minutes: 25 });
  const topics = [
    topic('A', 2, 1, 'yes'),
    topic('B', 1, 5, 'yes'),
    topic('C', 1, 2, 'unknown'),
    topic('D', 1, 1, 'no'),     // out of the mock scope: never planned before the last exam
    topic('E', 3, 0, 'yes'),
  ];
  const result = plan('2026-10-14', { subjects: [{ id: 'geo', topics, termIds: null }] });
  assert.deepEqual(blocksOf(dayOf(result, '2026-10-14'), 'geo').map(b => b.id), ['t:geo/B@0+25', 't:geo/A@0+25', 't:geo/E@0+10']);
  const order = result.days.flatMap(d => blocksOf(d, 'geo')).filter(b => b.kind === 'topic').map(b => b.topicId);
  assert.deepEqual([...new Set(order)], ['B', 'A', 'E', 'C']);
});

test('a topic without an MDX body carries its links so the student can start anyway', () => {
  const geo = makeTopics('geo', 6);
  geo[0].ready = { en: true, ru: false };
  geo[0].links = [];
  const subjects = [{ id: 'geo', topics: geo, termIds: null }];
  const blocks = blocksOf(dayOf(plan('2026-10-14', { subjects }), '2026-10-14'), 'geo');
  assert.deepEqual(blocks[0].ready, { en: true, ru: false });
  assert.equal(blocks[0].route, '/s/geo/t/geo-t1');
  assert.deepEqual(blocks[1].ready, { en: false, ru: false });
  assert.deepEqual(blocks[1].links, [{ title: 'ThinkIB 2', url: 'https://example.org/geo/2' }]);
});

test('subjects with no topics yet still get free study blocks so the day is full', () => {
  for (const subjects of [[], SUBJECTS.map(id => ({ id, topics: [], termIds: [] }))]) {
    const result = plan('2026-10-14', { subjects });
    for (const day of result.days.filter(d => d.blocks.length > 0)) assert.equal(day.minutes, day.capacity, day.date);
    const geo = blocksOf(dayOf(result, '2026-10-14'), 'geo');
    assert.deepEqual(geo.map(b => [b.kind, b.minutes, b.route]), [['study', 25, '/s/geo'], ['study', 25, '/s/geo'], ['study', 10, '/s/geo']]);
    assert.equal(parseBlockId(geo[0].id).kind, 'study');
  }
});

test('once topics are studied, practice follows and red topics come first', () => {
  const subjects = [{ id: 'geo', topics: makeTopics('geo', 2).map(t => ({ ...t, minutes: 25 })), termIds: null }];
  const state = study('2026-10-14', '2026-10-14', { subjects });
  state.topics['geo/geo-t2'] = { rag: 'red' };
  state.topics['geo/geo-t1'] = { rag: 'green' };
  const day = dayOf(plan('2026-10-15', { state, subjects }), '2026-10-15');
  assert.deepEqual(blocksOf(day, 'geo').map(b => [b.id, b.kind, b.rag]), [
    ['p:geo/geo-t2#1+25', 'practice', 'red'],
    ['p:geo/geo-t1#1+25', 'practice', 'green'],
  ]);
  assert.equal(blocksOf(day, 'geo')[0].route, '/s/geo/practice?topic=geo-t2');
});

test('practice rounds get new ids each time', () => {
  const subjects = [{ id: 'geo', topics: makeTopics('geo', 1).map(t => ({ ...t, minutes: 25 })), termIds: null }];
  const state = study('2026-10-14', '2026-10-16', { subjects });
  const ids = Object.keys(state.blocks).filter(id => id.startsWith('p:geo/geo-t1#'));
  assert.ok(ids.length >= 2, 'practice happened on several days');
  assert.equal(new Set(ids).size, ids.length);
});

test('timed sets come after first pass and practice in the subject’s blocks', () => {
  const day = dayOf(plan('2026-10-14'), '2026-10-24');
  const math = blocksOf(day, 'math');
  assert.equal(math.at(-1).kind, 'timed');
  assert.equal(math.at(-1).minutes, 120);
  assert.deepEqual([...new Set(math.slice(0, -1).map(b => b.kind))], ['topic']);
  assert.equal(minutesOf(math.slice(0, -1)), 30, 'the quota of 150 minus the 120-minute paper is regular work');
  assert.equal(math.at(-1).note, 'full paper + 30 min review');
  assert.equal(math.at(-1).route, '/s/math/paper/P2');
  assert.equal(math.at(-1).id, 'm:2026-10-24/math/P2');
  assert.equal(day.blocks.at(-1).kind, 'timed');
  assert.equal(day.minutes, 270);
});

test('every block id is unique across the whole plan and understood by the id parser', () => {
  for (const today of ['2026-10-14', '2026-10-20']) {
    const ids = plan(today).days.flatMap(d => d.blocks.map(b => b.id));
    assert.equal(new Set(ids).size, ids.length, `duplicate ids in the plan from ${today}`);
    for (const id of ids) assert.notEqual(parseBlockId(id), null, id);
  }
});

test('the planner is deterministic and leaves its input alone', () => {
  const state = study('2026-10-14', '2026-10-15');
  state.topics['geo/geo-t5'] = { rag: 'red' };
  const snapshot = structuredClone(state);
  const subjects = makeSubjects();
  const input = { today: '2026-10-16', exams, quotas, subjects, state };
  const first = buildPlan(input);
  const second = buildPlan(input);
  assert.deepEqual(first, second);
  assert.deepEqual(state, snapshot);
  assert.deepEqual(subjects, makeSubjects());
});

test('recall belongs to today and skips days without recall time', () => {
  const result = plan('2026-10-25');
  assert.ok(result.days[0].recall);
  assert.equal(result.days[1].recall, null);
  const exam = dayOf(plan('2026-10-14'), '2026-10-26');
  assert.equal(exam.blocks.some(b => b.kind === 'recall'), false, 'no recall time on 26 Oct');
  const withRecall = dayOf(plan('2026-10-14'), '2026-10-27');
  assert.equal(withRecall.blocks[0].kind, 'recall');
});

test('garbage in the progress store does not break the plan', () => {
  const state = emptyState();
  state.blocks = { nonsense: '2026-10-14', 't:geo/does-not-exist@0+25': '2026-10-14', 'r:2026-10-14': '2026-10-14' };
  state.topics = { 'geo/geo-t1': {}, 'bogus/entry': { rag: 'red' } };
  state.terms = { 'geo/x': { box: 1, due: 'someday' } };
  const result = plan('2026-10-14', { state });
  assert.equal(result.days[0].blocks[0].status, 'done'); // recall was ticked
  assert.equal(result.days[0].blocks.length > 5, true);
});
