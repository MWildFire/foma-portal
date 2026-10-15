// Exam calendar and daily quotas: parsing of data/exams.json and data/plan-quotas.json, and lookups on them.
// Pure module: the JSON is passed in as a parameter (data.ts loads it for the app, tests read it from disk).
import type { L, PaperId, SubjectId } from '../contract/types.ts';
import type { ExamPaper, ExamsFile, QuotaDay, QuotasFile, TimedEntry } from './types.ts';
// The .ts extension is what Node's test runner needs.
import { addDays, dubaiEpoch, isDate, parseClock } from './dates.ts';

export const SUBJECT_IDS: SubjectId[] = ['geo', 'math', 'econ', 'cs', 'eng', 'fr'];
const PAPER_IDS: PaperId[] = ['P1', 'P2', 'P3'];

// PLAN.md §5: on an exam day only the evening is available.
export const EXAM_EVENING_MINUTES = 60;

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);
const isSubject = (value: unknown): value is SubjectId => (SUBJECT_IDS as unknown[]).includes(value);
const isPaper = (value: unknown): value is PaperId => (PAPER_IDS as unknown[]).includes(value);
const positive = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value) && value > 0;
const text = (value: unknown, fallback = ''): string => (typeof value === 'string' ? value : fallback);
// A text in plan-quotas.json in both languages. A plain string is not accepted: it would show in one language only.
const localized = (value: unknown): L | null =>
  isRecord(value) && typeof value.en === 'string' && typeof value.ru === 'string' ? { en: value.en, ru: value.ru } : null;

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
  if (typeof raw.noteRu === 'string') exam.noteRu = raw.noteRu;
  return exam;
}

export function parseExams(raw: unknown): ExamsFile {
  const file = isRecord(raw) ? raw : {};
  const defaultRoom = text(file.defaultRoom);
  const papers = (Array.isArray(file.papers) ? file.papers : [])
    .map(item => examOf(item, defaultRoom))
    .filter((exam): exam is ExamPaper => exam !== null)
    .sort((a, b) => `${a.date} ${a.start} ${a.id}`.localeCompare(`${b.date} ${b.start} ${b.id}`));
  const rawAccess = isRecord(file.access) ? file.access : {};
  const access = { room: text(rawAccess.room, 'tbd'), typing: true };
  return { timezone: text(file.timezone, 'Asia/Dubai'), defaultRoom, papers, access };
}

function timedOf(raw: unknown): TimedEntry | null {
  if (!isRecord(raw) || !isSubject(raw.subject) || !isPaper(raw.paper) || !positive(raw.minutes)) return null;
  const entry: TimedEntry = { subject: raw.subject, paper: raw.paper, minutes: raw.minutes };
  if (typeof raw.part === 'string') entry.part = raw.part;
  if (typeof raw.set === 'string' && raw.set !== '') entry.set = raw.set;
  const title = localized(raw.title);
  if (title) entry.title = title;
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
    focus: localized(raw.focus),
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

// All durations are the printed minutes. Room selection changes only the start.
export function sittingMinutes(_exams: ExamsFile, exam: ExamPaper): number {
  return exam.minutes;
}

export function timedEntryMinutes(_exams: ExamsFile, entry: TimedEntry): number {
  return entry.minutes;
}

// The start time the student actually has: the separate room (ACC2) has its own start when the schedule gives one,
// otherwise everybody starts with the main hall.
export function examStartClock(exam: ExamPaper, separateRoom = false): string {
  return separateRoom && exam.acc2Start ? exam.acc2Start : exam.start;
}

export function examStartMs(exam: ExamPaper, separateRoom = false): number {
  return dubaiEpoch(exam.date, examStartClock(exam, separateRoom));
}

export function examEndMs(exam: ExamPaper, exams: ExamsFile, separateRoom = false): number {
  return examStartMs(exam, separateRoom) + sittingMinutes(exams, exam) * 60_000;
}
