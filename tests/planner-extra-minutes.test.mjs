// Extra-time minutes in the planner (src/planner/calendar.ts): whole minutes without binary noise, and a paper the
// schedule marks "no extra time" keeps its printed length in the plan, even with extra time on.
import test from 'node:test';
import assert from 'node:assert/strict';
import { extendedMinutes, timedEntryMinutes } from '../src/planner/calendar.ts';

const withFactor = factor => ({ papers: [], accessMinutes: {}, access: { extraTime: factor } });

test('extra time rounds up to the whole minute without float noise: 50 at 10% is 55, not 56; 100 is 110, not 111', () => {
  assert.equal(extendedMinutes(withFactor(0.1), 50), 55);
  assert.equal(extendedMinutes(withFactor(0.1), 100), 110);
});

test('a quarter more time rounds a fraction up: 75 is 94 and 30 is 38', () => {
  assert.equal(extendedMinutes(withFactor(0.25), 75), 94);
  assert.equal(extendedMinutes(withFactor(0.25), 30), 38);
});

test('the school table wins over the rounding when it has the length', () => {
  const exams = { papers: [], accessMinutes: { '75': 94 }, access: { extraTime: 0.25 } };
  assert.equal(extendedMinutes(exams, 75), 94);
});

test('a paper marked "no extra time" keeps its printed length in the plan, with extra time on', () => {
  const exams = {
    papers: [{ id: 'fr-p1-listening', subject: 'fr', paper: 'P1', part: 'listening', minutes: 45, date: '2026-11-03', start: '09:00' }],
    accessMinutes: { '45': 56 },
    access: { extraTime: 0.25, noExtraTime: ['fr-p1-listening'] },
  };
  assert.equal(timedEntryMinutes(exams, { subject: 'fr', paper: 'P1', part: 'listening', minutes: 45 }, true), 45);
  assert.equal(timedEntryMinutes(exams, { subject: 'eng', paper: 'P2', minutes: 45 }, true), 56);
  assert.equal(timedEntryMinutes(exams, { subject: 'eng', paper: 'P2', minutes: 45 }, false), 45);
});
