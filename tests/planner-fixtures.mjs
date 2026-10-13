// Shared helpers for tests/planner-*.test.mjs (not a test file itself).
import { readFileSync } from 'node:fs';
import { parseExams, parseQuotas } from '../src/planner/calendar.ts';
import { buildPlan } from '../src/planner/plan.ts';

const read = name => JSON.parse(readFileSync(new URL(`../data/${name}`, import.meta.url), 'utf8'));
export const exams = parseExams(read('exams.json'));
export const quotas = parseQuotas(read('plan-quotas.json'));
export const SUBJECTS = ['geo', 'math', 'econ', 'cs', 'eng', 'fr'];

export function emptyState() {
  return {
    version: 1, topics: {}, terms: {}, questions: {}, blocks: {},
    settings: { accessArrangements: { extraTime: false, separateRoom: false }, dailyLoadMinutes: {} },
  };
}

const MINUTES = [25, 40, 60, 30, 45];

// `count` topics for one subject. Topic i has order i, minutes cycling 25/40/60/30/45 and priority 1 for the
// first ten, 2 for the next ten, then 3, so the queue is simply t1, t2, t3, ...
export function makeTopics(subject, count, overrides = {}) {
  return Array.from({ length: count }, (_, index) => {
    const n = index + 1;
    return {
      id: `${subject}-t${n}`,
      subject,
      title: { en: `${subject} topic ${n}`, ru: `${subject} тема ${n}` },
      order: n,
      minutes: MINUTES[index % MINUTES.length],
      priority: Math.min(3, 1 + Math.floor(index / 10)),
      inMockScope: 'yes',
      papers: ['P1'],
      termIds: [`${subject}-term-${n}a`, `${subject}-term-${n}b`],
      questionCount: 3,
      links: [{ title: `ThinkIB ${n}`, url: `https://example.org/${subject}/${n}` }],
      ready: { en: false, ru: false },
      ...overrides,
    };
  });
}

// Every subject with enough topics to fill all quotas (about 60 hours of first pass in total).
export function makeSubjects(count = 40) {
  return SUBJECTS.map(id => ({ id, topics: makeTopics(id, count), termIds: null }));
}

export function plan(today, { state = emptyState(), subjects = makeSubjects(), examsFile = exams, quotasFile = quotas } = {}) {
  return buildPlan({ today, exams: examsFile, quotas: quotasFile, subjects, state });
}

export const dayOf = (result, date) => result.days.find(day => day.date === date);
export const blocksOf = (day, subject) => day.blocks.filter(block => block.subject === subject);
export const sum = list => list.reduce((a, b) => a + b, 0);
export const minutesOf = blocks => sum(blocks.map(block => block.minutes));

export function withSettings(state, { dailyLoadMinutes, accessArrangements } = {}) {
  const next = structuredClone(state);
  if (dailyLoadMinutes) next.settings.dailyLoadMinutes = dailyLoadMinutes;
  if (accessArrangements) next.settings.accessArrangements = { ...next.settings.accessArrangements, ...accessArrangements };
  return next;
}

// Plays the student: for every day from `from` to `to` (inclusive) the blocks of that day that pass `finish` are
// marked done on that day, exactly as the Today page does it. Returns the progress state afterwards.
export function study(from, to, { state = emptyState(), subjects = makeSubjects(), finish = () => true } = {}) {
  let current = structuredClone(state);
  for (let date = from; date <= to; date = nextDate(date)) {
    const day = plan(date, { state: current, subjects }).days.find(d => d.date === date);
    if (!day) continue;
    for (const block of day.blocks) if (block.status !== 'done' && finish(block, day)) current.blocks[block.id] = date;
  }
  return current;
}

export function nextDate(date) {
  const d = new Date(`${date}T12:00:00Z`);
  d.setUTCDate(d.getUTCDate() + 1);
  return d.toISOString().slice(0, 10);
}

export function allDates(result) {
  return result.days.map(day => day.date);
}
