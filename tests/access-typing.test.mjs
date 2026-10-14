// The typing reminder (access arrangement: typing): which papers get it, from the same schedule file as the other access tests.
import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { TYPING_PAPERS, typingReminderFor } from '../src/planner/access.ts';
import { parseExams } from '../src/planner/calendar.ts';

const exams = parseExams(JSON.parse(readFileSync(new URL('../data/exams.json', import.meta.url), 'utf8')));

test('the essay papers remind the student to type: English P1 and P2, geography P1 and P2, economics P1 to P3', () => {
  assert.equal(typingReminderFor('eng', 'P2'), true);
  assert.equal(typingReminderFor('eng', 'P1'), true);
  assert.equal(typingReminderFor('geo', 'P1'), true);
  assert.equal(typingReminderFor('geo', 'P2'), true);
  assert.equal(typingReminderFor('econ', 'P1'), true);
  assert.equal(typingReminderFor('econ', 'P3'), true);
});

test('the other papers get no typing reminder: maths, computer science and French', () => {
  assert.equal(typingReminderFor('math', 'P1'), false);
  assert.equal(typingReminderFor('cs', 'P1'), false);
  assert.equal(typingReminderFor('fr', 'P1'), false);
});

test('every reminder paper is in the school schedule, so the reminder never shows for a paper [redacted] does not sit', () => {
  assert.equal(TYPING_PAPERS.length, 7);
  for (const item of TYPING_PAPERS) {
    assert.ok(exams.papers.some(exam => exam.subject === item.subject && exam.paper === item.paper), `${item.subject} ${item.paper}`);
  }
});
