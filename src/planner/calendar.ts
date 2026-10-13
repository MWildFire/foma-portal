// Exam calendar and daily quotas: parsing of data/exams.json and data/plan-quotas.json, and lookups on them.
// Pure module: the JSON is passed in as a parameter (data.ts loads it for the app, tests read it from disk).
import type { PaperId, SubjectId } from '../contract/types.ts';
import type { ExamPaper, ExamsFile, QuotaDay, QuotasFile, TimedEntry } from './types.ts';
// The .ts extension is what Node's test runner needs; tsconfig.json does not allow it for value imports, hence the ignores.
// @ts-ignore TS5097
import { addDays, dubaiEpoch, isDate, parseClock } from './dates.ts';

export const SUBJECT_IDS: SubjectId[] = ['geo', 'math', 'econ', 'cs', 'eng', 'fr'];
const PAPER_IDS: PaperId[] = ['P1', 'P2', 'P3'];

// PLAN.md §5: on an exam day only the evening is available.
export const EXAM_EVENING_MINUTES = 60;
// Extra time for access arrangements is 25% on top of the sitting.
const EXTRA_TIME_FACTOR = 1.25;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
const isSubject = (value: unknown): value is SubjectId => (SUBJECT_IDS as unknown[]).includes(value);
const isPaper = (value: unknown): value is PaperId => (PAPER_IDS as unknown[]).includes(value);
const positive = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value > 0;
const text = (value: unknown, fallback = ''): string => (typeof value === 'string' ? value : fallback);

function examOf(raw: unknown, defaultRoom: string): ExamPaper | null {
  if (!isRecord(raw)) return null;
  if (!isSubject(raw.subject) || !isPaper(raw.paper) || !isDate(raw.date)) return null;
  if (typeof raw.start !== 'string' || parseClock(raw.start) === null || !positive(raw.minutes)) return null;
  const exam: ExamPaper = {
    id: text(raw.id, `${raw.subject}-${raw.paper}-${raw.date}`),
    subject: raw.subject,
    paper: raw.paper,
    title: text(raw.title, `${raw.subject} ${raw.paper}`),
    date: raw.date,
    start: raw.start,
    minutes: raw.minutes,
    room: text(raw.room, defaultRoom),
  };
  if (typeof raw.part === 'string') exam.part = raw.part;
  if (typeof raw.acc2Start === 'string' && parseClock(raw.acc2Start) !== null) exam.acc2Start = raw.acc2Start;
  if (typeof raw.note === 'string') exam.note = raw.note;
  return exam;
}

export function parseExams(raw: unknown): ExamsFile {
  const file = isRecord(raw) ? raw : {};
  const defaultRoom = text(file.defaultRoom);
  const papers = (Array.isArray(file.papers) ? file.papers : [])
    .map(item => examOf(item, defaultRoom))
    .filter((exam): exam is ExamPaper => exam !== null)
    .sort((a, b) => `${a.date} ${a.start} ${a.id}`.localeCompare(`${b.date} ${b.start} ${b.id}`));
  const accessMinutes: Record<string, number> = {};
  if (isRecord(file.accessMinutes)) {
    for (const [key, value] of Object.entries(file.accessMinutes)) if (positive(value)) accessMinutes[key] = value;
  }
  return { timezone: text(file.timezone, 'Asia/Dubai'), defaultRoom, papers, accessMinutes };
}

function timedOf(raw: unknown): TimedEntry | null {
  if (!isRecord(raw) || !isSubject(raw.subject) || !isPaper(raw.paper) || !positive(raw.minutes)) return null;
  const entry: TimedEntry = { subject: raw.subject, paper: raw.paper, minutes: raw.minutes };
  if (typeof raw.note === 'string') entry.note = raw.note;
  return entry;
}

function quotaDayOf(raw: unknown, recallDefault: number): QuotaDay | null {
  if (!isRecord(raw) || !isDate(raw.date)) return null;
  const quota: Partial<Record<SubjectId, number>> = {};
  const subjectOrder: SubjectId[] = [];
  if (isRecord(raw.quota)) {
    for (const [subject, minutes] of Object.entries(raw.quota)) {
      if (isSubject(subject) && positive(minutes)) {
        quota[subject] = minutes;
        subjectOrder.push(subject);
      }
    }
  }
  const timed = (Array.isArray(raw.timed) ? raw.timed : [])
    .map(timedOf)
    .filter((entry): entry is TimedEntry => entry !== null);
  const recall = typeof raw.recall === 'number' && Number.isFinite(raw.recall) && raw.recall >= 0 ? raw.recall : recallDefault;
  const sum = Object.values(quota).reduce((a, b) => a + (b ?? 0), 0);
  return {
    date: raw.date,
    capacity: positive(raw.capacity) ? raw.capacity : recall + sum,
    recall,
    examDay: raw.examDay === true,
    focus: text(raw.focus),
    quota,
    subjectOrder,
    timed,
  };
}

export function parseQuotas(raw: unknown): QuotasFile {
  const file = isRecord(raw) ? raw : {};
  const recallMinutesDefault = typeof file.recallMinutesDefault === 'number' && file.recallMinutesDefault >= 0 ? file.recallMinutesDefault : 15;
  const days = (Array.isArray(file.days) ? file.days : [])
    .map(item => quotaDayOf(item, recallMinutesDefault))
    .filter((day): day is QuotaDay => day !== null)
    .sort((a, b) => a.date.localeCompare(b.date));
  return {
    start: isDate(file.start) ? file.start : days[0]?.date ?? '',
    end: isDate(file.end) ? file.end : days.at(-1)?.date ?? '',
    recallMinutesDefault,
    unitMinutes: positive(file.unitMinutes) ? file.unitMinutes : 25,
    days,
  };
}

// ---------------------------------------------------------------------------------------------
// Lookups
// ---------------------------------------------------------------------------------------------

export function examsOn(exams: ExamsFile, date: string): ExamPaper[] {
  return exams.papers.filter(exam => exam.date === date);
}

// Exams that sit the day after `date`: the papers `date` is the eve of.
export function eveExams(exams: ExamsFile, date: string): ExamPaper[] {
  return examsOn(exams, addDays(date, 1));
}

export function sittingPapers(exams: ExamsFile, subject: SubjectId, date: string): ExamPaper[] {
  return examsOn(exams, date).filter(exam => exam.subject === subject);
}

export function lastExamDate(exams: ExamsFile, subject: SubjectId): string | null {
  let last: string | null = null;
  for (const exam of exams.papers) if (exam.subject === subject && (last === null || exam.date > last)) last = exam.date;
  return last;
}

export function lastExamOverall(exams: ExamsFile): string | null {
  let last: string | null = null;
  for (const exam of exams.papers) if (last === null || exam.date > last) last = exam.date;
  return last;
}

// A sitting's length with 25% extra time: the school's table first, plain arithmetic otherwise.
export function extendedMinutes(exams: ExamsFile, minutes: number): number {
  const fromTable = exams.accessMinutes[String(minutes)];
  return typeof fromTable === 'number' ? fromTable : Math.round(minutes * EXTRA_TIME_FACTOR);
}

// Start of the sitting in the main hall.
export function examStartMs(exam: ExamPaper): number {
  return dubaiEpoch(exam.date, exam.start);
}

export function examEndMs(exam: ExamPaper, exams: ExamsFile, extraTime: boolean): number {
  const length = extraTime ? extendedMinutes(exams, exam.minutes) : exam.minutes;
  return examStartMs(exam) + length * 60_000;
}
