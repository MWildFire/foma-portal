// Past papers in the plan (PLAN.md §5, step 7). The papers are fixtures: data/ has no past papers yet, so the rules are
// checked on a few PastPaperRef objects of the same shape the content will have.
import test from 'node:test';
import assert from 'node:assert/strict';
import { buildPlan } from '../src/planner/plan.ts';
import { itemsFrom, linkOf, pastPool, recentFirst, sessionRank } from '../src/planner/past.ts';
import { blocksOf, dayOf, emptyState, exams, makeSubjects, minutesOf, quotas } from './planner-fixtures.mjs';

const questions = (n, marksEach) => Array.from({ length: n }, (_, index) => ({ q: `q${index + 1}`, marks: marksEach, topicIds: ['topic'] }));
const paper = (id, subject, paperId, session, minutes, marks) => ({
  id, subject, paper: paperId, session, level: 'SL', files: [], minutes, marks, items: questions(8, marks / 8),
});

// Eight questions to a paper. Geography P2 is 75 minutes for 40 marks, so a question is 9.375 minutes.
const REFS = [
  paper('geo-p2-m24', 'geo', 'P2', 'M24', 75, 40),
  paper('geo-p2-n23', 'geo', 'P2', 'N23', 75, 40),
  paper('geo-p1-m24', 'geo', 'P1', 'M24', 90, 40),
  paper('math-p2-m24', 'math', 'P2', 'M24', 120, 80),
  paper('math-p2-n23', 'math', 'P2', 'N23', 120, 80),
];

// `solved` lists the past papers the student has marked solved, as state.pastPapers keys ('math/math-p2-m24').
const planWith = (today, pastPapers, quotasFile = quotas, solved = []) => {
  const state = { ...emptyState(), pastPapers: Object.fromEntries(solved.map(key => [key, { solved: '2026-10-01' }])) };
  return buildPlan({ today, exams, quotas: quotasFile, subjects: makeSubjects(), state, pastPapers });
};
const past = (day, subject) => minutesOf(blocksOf(day, subject).filter(block => block.pastPaper));

test('the most recent session comes first: May 2024 before November 2023, an unknown session last', () => {
  assert.ok(sessionRank('M24') > sessionRank('N23'));
  assert.ok(sessionRank('N23') > sessionRank('M23'));
  assert.ok(sessionRank('M25') > sessionRank('N24'));
  assert.equal(sessionRank('TZ1'), Number.NEGATIVE_INFINITY);
  assert.deepEqual(pastPool(REFS, 'geo', 'P2').map(ref => ref.id), ['geo-p2-m24', 'geo-p2-n23']);
  // The same session: the core paper (P2) first, then the id.
  assert.deepEqual(recentFirst(REFS).slice(0, 3).map(ref => ref.id), ['geo-p2-m24', 'math-p2-m24', 'geo-p1-m24']);
  assert.deepEqual(linkOf(REFS[2]), { id: 'geo-p1-m24', session: 'M24', paper: 'P1' });
});

test('a block takes questions in order until its minutes are used, by marks', () => {
  const geo = REFS[0];
  assert.deepEqual(itemsFrom(geo, 0, 25), { ids: ['q1', 'q2', 'q3'], next: 3 });
  assert.deepEqual(itemsFrom(geo, 3, 25), { ids: ['q4', 'q5', 'q6'], next: 6 });
  assert.deepEqual(itemsFrom(geo, 7, 25), { ids: ['q8'], next: 8 }, 'the last question, and no more');
  assert.deepEqual(itemsFrom(geo, 8, 25), { ids: [], next: 8 }, 'nothing left');
});

test('a timed sitting gets the most recent past paper of its subject and paper, the next sitting the next one', () => {
  // A second Maths P2 sitting on 22 Oct, before the one of 24 Oct: the earlier sitting takes the most recent paper.
  const twice = {
    ...quotas,
    days: quotas.days.map(day => (day.date === '2026-10-22'
      ? { ...day, timed: [...day.timed, { subject: 'math', paper: 'P2', minutes: 120 }] }
      : day)),
  };
  const result = planWith('2026-10-14', REFS, twice);
  const firstSitting = blocksOf(dayOf(result, '2026-10-22'), 'math').find(block => block.kind === 'timed');
  const secondSitting = blocksOf(dayOf(result, '2026-10-24'), 'math').find(block => block.kind === 'timed');
  assert.equal(firstSitting.pastPaper.id, 'math-p2-m24');
  assert.equal(secondSitting.pastPaper.id, 'math-p2-n23');
  assert.equal(dayOf(result, '2026-10-24').blocks.find(block => block.kind === 'timed' && block.subject === 'geo').pastPaper.id, 'geo-p2-m24');
});

test('when no past paper of the subject and paper is free, the sitting has no link', () => {
  const twice = {
    ...quotas,
    days: quotas.days.map(day => (day.date === '2026-10-22'
      ? { ...day, timed: [...day.timed, { subject: 'math', paper: 'P2', minutes: 120 }] }
      : day)),
  };
  const result = buildPlan({ today: '2026-10-14', exams, quotas: twice, subjects: makeSubjects(), state: emptyState(), pastPapers: [REFS[3]] });
  assert.equal(blocksOf(dayOf(result, '2026-10-22'), 'math').find(block => block.kind === 'timed').pastPaper.id, 'math-p2-m24');
  const later = blocksOf(dayOf(result, '2026-10-24'), 'math').find(block => block.kind === 'timed');
  assert.equal(later.pastPaper, undefined);
  assert.equal('pastPaper' in later, false, 'no key at all, so the block looks as it did before');
});

test('without past papers there are no links, and the plan is the one the planner made before', () => {
  const plain = buildPlan({ today: '2026-10-14', exams, quotas, subjects: makeSubjects(), state: emptyState() });
  assert.deepEqual(planWith('2026-10-14', []), plain);
  assert.ok(plain.days.flatMap(day => day.blocks).every(block => block.pastPaper === undefined));
});

test('from 15 Oct at least half of the Geography quota is past papers; before it and in other subjects there is none', () => {
  const result = planWith('2026-10-14', REFS);
  assert.equal(past(dayOf(result, '2026-10-14'), 'geo'), 0, 'nothing before 15 Oct');
  const day = dayOf(result, '2026-10-15');                      // Geography quota 50
  assert.ok(past(day, 'geo') >= 25, `${past(day, 'geo')} minutes on past papers`);
  for (const block of day.blocks.filter(item => item.pastPaper)) {
    assert.equal(block.kind, 'practice');
    assert.ok(block.pastItems.length > 0, 'sections and questions, not an empty block');
  }
  assert.equal(past(day, 'math'), 0, 'the rule is for Geography');
});

test('the practice goes on through the questions of a past paper from one day to the next', () => {
  const result = planWith('2026-10-14', REFS);
  const first = blocksOf(dayOf(result, '2026-10-15'), 'geo').find(block => block.pastPaper);
  const second = blocksOf(dayOf(result, '2026-10-16'), 'geo').find(block => block.pastPaper);
  assert.equal(first.pastPaper.id, 'geo-p2-m24', 'the most recent Geography paper');
  assert.deepEqual(first.pastItems, ['q1', 'q2', 'q3']);
  assert.equal(second.pastPaper.id, 'geo-p2-m24');
  assert.deepEqual(second.pastItems, ['q4', 'q5']); // 16 Oct now reserves 60 minutes for the economics diagnostic.
  assert.equal(second.minutes, 15);
});

test('a paper marked solved waits behind the unsolved ones; when all are solved the most recent comes back', () => {
  const twice = {
    ...quotas,
    days: quotas.days.map(day => (day.date === '2026-10-22'
      ? { ...day, timed: [...day.timed, { subject: 'math', paper: 'P2', minutes: 120 }] }
      : day)),
  };
  // Maths P2 May 2024 is solved: the first sitting takes November 2023, the second one falls back to the solved paper.
  const oneSolved = planWith('2026-10-14', REFS, twice, ['math/math-p2-m24']);
  assert.equal(blocksOf(dayOf(oneSolved, '2026-10-22'), 'math').find(block => block.kind === 'timed').pastPaper.id, 'math-p2-n23');
  assert.equal(blocksOf(dayOf(oneSolved, '2026-10-24'), 'math').find(block => block.kind === 'timed').pastPaper.id, 'math-p2-m24');
  // Both solved: the most recent one again.
  const allSolved = planWith('2026-10-14', REFS, twice, ['math/math-p2-m24', 'math/math-p2-n23']);
  assert.equal(blocksOf(dayOf(allSolved, '2026-10-22'), 'math').find(block => block.kind === 'timed').pastPaper.id, 'math-p2-m24');
});

test('the Geography practice starts with an unsolved paper', () => {
  // geo-p2-m24 is solved: the first practice block works on the unsolved Geography paper of the same session (P1).
  const result = planWith('2026-10-14', REFS, quotas, ['geo/geo-p2-m24']);
  const first = blocksOf(dayOf(result, '2026-10-15'), 'geo').find(block => block.pastPaper);
  assert.equal(first.pastPaper.id, 'geo-p1-m24');
});

test('on 24 and 25 Oct the share is full papers: the timed Geography papers count, the rest is a whole paper', () => {
  const result = planWith('2026-10-14', REFS);
  const day24 = dayOf(result, '2026-10-24');                   // quota 105: the timed P2 (75) is already the half
  assert.equal(blocksOf(day24, 'geo').filter(block => block.kind === 'practice' && block.pastPaper).length, 0);
  assert.equal(past(day24, 'geo'), 75);
  const day25 = dayOf(result, '2026-10-25');                   // quota 120: the timed P1 (45) is 15 short of the half
  const extra = blocksOf(day25, 'geo').filter(block => block.kind === 'practice' && block.pastPaper);
  assert.equal(extra.length, 1);
  assert.equal(extra[0].minutes, 15);
  assert.equal(extra[0].pastItems.length, 8, 'the whole paper, not a section');
  assert.equal(past(day25, 'geo'), 45 + 15);
});
