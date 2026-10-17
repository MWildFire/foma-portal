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

test('external past-paper availability does not replace or duplicate the four concrete activities',()=>{
 const plain=planWith('2026-10-15',[]);
 assert.deepEqual(planWith('2026-10-15',REFS),plain);
 assert.deepEqual(planWith('2026-10-15',REFS,quotas,['geo/geo-p2-m24']),plain);
 for(const d of plain.days)assert.equal(d.blocks.length,4);
});
