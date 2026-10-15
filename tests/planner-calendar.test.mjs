import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import {
  eveExams, examEndMs, examStartMs, examsOn, lastExamDate, lastExamOverall, parseExams, parseQuotas, sittingPapers,
} from '../src/planner/calendar.ts';
import { dubaiEpoch } from '../src/planner/dates.ts';

const read = name => JSON.parse(readFileSync(new URL(`../data/${name}`, import.meta.url), 'utf8'));
const exams = parseExams(read('exams.json'));
const quotas = parseQuotas(read('plan-quotas.json'));

test('exam calendar is parsed from data/exams.json and sorted by date and start', () => {
  assert.equal(exams.papers.length, 15);
  const keys = exams.papers.map(p => `${p.date} ${p.start}`);
  assert.deepEqual(keys, [...keys].sort());
  const mathP1 = exams.papers.find(p => p.id === 'math-p1');
  assert.equal(mathP1.room, 'ACC2'); // the room stays exactly as written in the file
  assert.equal(exams.papers.find(p => p.id === 'fr-p2l').part, 'listening');
  assert.equal(exams.timezone, 'Asia/Dubai');
});

test('the last exam of each subject comes from the calendar', () => {
  const last = Object.fromEntries(['geo', 'math', 'econ', 'cs', 'eng', 'fr'].map(s => [s, lastExamDate(exams, s)]));
  assert.deepEqual(last, {
    geo: '2026-10-27', math: '2026-10-27', econ: '2026-11-03', cs: '2026-11-05', eng: '2026-10-29', fr: '2026-10-28',
  });
  assert.equal(lastExamOverall(exams), '2026-11-05');
  assert.equal(lastExamDate({ ...exams, papers: [] }, 'geo'), null);
});

test('exams are looked up by day, and the eve of an exam is the day before it', () => {
  assert.deepEqual(examsOn(exams, '2026-10-27').map(p => p.id), ['geo-p2', 'math-p3', 'math-p2']);
  assert.deepEqual(examsOn(exams, '2026-10-30'), []);
  assert.deepEqual(eveExams(exams, '2026-10-25').map(p => p.id), ['math-p1', 'geo-p1']);
  assert.deepEqual(sittingPapers(exams, 'math', '2026-10-27').map(p => p.paper), ['P3', 'P2']);
  assert.deepEqual(sittingPapers(exams, 'geo', '2026-10-27').map(p => p.paper), ['P2']);
});

test('schedule has typing and no legacy duration table',()=>{
 assert.deepEqual(exams.access,{room:'tbd',typing:true});
 assert.equal(exams.accessMinutes,undefined);
});

test('exam start and end are Dubai instants', () => {
  const geoP1 = exams.papers.find(p => p.id === 'geo-p1');
  assert.equal(examStartMs(geoP1), dubaiEpoch('2026-10-26', '13:30'));
  assert.equal(examEndMs(geoP1, exams, false), dubaiEpoch('2026-10-26', '15:00'));
  assert.equal(examEndMs(geoP1, exams, false), dubaiEpoch('2026-10-26', '13:30') + 90 * 60_000);
});

test('plan-quotas.json is parsed: one entry per day with the subjects in file order', () => {
  assert.equal(quotas.start, '2026-10-14');
  assert.equal(quotas.end, '2026-11-05');
  assert.equal(quotas.days.length, 22);
  const first = quotas.days[0];
  assert.deepEqual(first.subjectOrder, ['geo', 'math', 'eng']);
  assert.equal(first.quota.geo, 60);
  assert.equal(first.recall, 15);
  const day24 = quotas.days.find(d => d.date === '2026-10-24');
  assert.deepEqual(day24.timed.map(t => [t.subject, t.paper, t.minutes]), [['math', 'P2', 120], ['geo', 'P2', 75]]);
});

test('the planning data is internally consistent', () => {
  for (const day of quotas.days) {
    const sum = Object.values(day.quota).reduce((a, b) => a + b, 0);
    assert.equal(day.capacity, day.recall + sum, `${day.date}: capacity = recall + quotas`);
    assert.equal(day.examDay, examsOn(exams, day.date).length > 0, `${day.date}: examDay matches exams.json`);
    for (const subject of Object.keys(day.quota)) {
      const last = lastExamDate(exams, subject);
      assert.ok(!last || day.date < last, `${day.date}: ${subject} has quota on or after its last exam (${last})`);
    }
    for (const timed of day.timed) {
      const total = day.timed.filter(t => t.subject === timed.subject).reduce((a, t) => a + t.minutes, 0);
      assert.ok(total <= (day.quota[timed.subject] ?? 0), `${day.date}: timed ${timed.subject} fits the quota`);
    }
  }
});

test('malformed input is tolerated and bad rows are dropped', () => {
  const parsed = parseExams({
    papers: [
      { id: 'ok', subject: 'geo', paper: 'P1', title: 'Geo', date: '2026-10-26', start: '13:30', minutes: 90, room: 'SpHal2' },
      { id: 'bad-subject', subject: 'art', paper: 'P1', title: 'x', date: '2026-10-26', start: '10:00', minutes: 60, room: 'A' },
      { id: 'bad-date', subject: 'geo', paper: 'P1', title: 'x', date: '26/10/2026', start: '10:00', minutes: 60, room: 'A' },
      { id: 'bad-time', subject: 'geo', paper: 'P2', title: 'x', date: '2026-10-27', start: 'morning', minutes: 60, room: 'A' },
      null,
      'text',
    ],
  });
  assert.deepEqual(parsed.papers.map(p => p.id), ['ok']);
  assert.deepEqual(parseExams(null).papers, []);
  const empty = parseQuotas(undefined);
  assert.deepEqual(empty.days, []);
  const odd = parseQuotas({ start: '2026-10-14', end: '2026-10-15', days: [{ date: '2026-10-14', quota: { geo: 30, art: 50, math: -5 } }, { date: 'soon' }] });
  assert.equal(odd.days.length, 1);
  assert.deepEqual(odd.days[0].quota, { geo: 30 });
  assert.equal(odd.days[0].recall, 15); // falls back to recallMinutesDefault
  assert.equal(odd.days[0].capacity, 45); // recall + quotas when capacity is missing
});
