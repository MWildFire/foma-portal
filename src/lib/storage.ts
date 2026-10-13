// Local progress for one browser (localStorage). Unknown or malformed data is dropped, never thrown.
export const STORAGE_KEY = 'foma-portal-v1';
export const UPDATE_EVENT = 'foma-portal-state-update';
// 2: extra time is on unless a version-2 save switched it off. Version 1 saves wrote the old default (off) back on every
// save, so normalizeState turns extra time on for them once (decision 5: +25% on all of Fома's exams).
export const STORAGE_SCHEMA_VERSION = 2;

export type Rag = 'red' | 'amber' | 'green';
export type Rating = 'right' | 'partial' | 'wrong';
export type Weekday = 'mon' | 'tue' | 'wed' | 'thu' | 'fri' | 'sat' | 'sun';
export const WEEKDAYS: Weekday[] = ['mon', 'tue', 'wed', 'thu', 'fri', 'sat', 'sun'];

export interface TopicProgress {
  done?: string;     // ISO date when the topic was marked done
  rag?: Rag;         // confidence after the topic
}

export interface TermProgress {
  box: number;       // Leitner box 1–4 (review intervals 1, 2, 4, 7 days)
  due: string;       // YYYY-MM-DD
}

export interface QuestionProgress {
  rating: Rating;    // self-check after seeing the markscheme
  at: string;        // ISO date
}

export interface PastPaperProgress {
  solved?: string;                  // ISO date when the paper was marked solved
  scores?: Record<string, number>;  // marks the student gave each item, by its index in the paper: '0', '1', …
}

// The exam room [redacted] sits in: ACC2 (access arrangements), the main hall, or not known yet (the school has not said).
export type AccessRoom = 'ACC2' | 'SpHal2' | 'unknown';

export interface GlobalState {
  version: typeof STORAGE_SCHEMA_VERSION;
  topics: Record<string, TopicProgress>;       // key: `${subject}/${topicId}`
  terms: Record<string, TermProgress>;         // key: `${subject}/${termId}`
  questions: Record<string, QuestionProgress>; // key: `${subject}/${questionId}`
  pastPapers: Record<string, PastPaperProgress>; // key: `${subject}/${pastPaperId}`
  blocks: Record<string, string>;              // plan block id -> ISO date when done
  settings: {
    accessArrangements: { extraTime: boolean; separateRoom: boolean; room: AccessRoom };
    dailyLoadMinutes: Partial<Record<Weekday, number>>;   // overrides of the default load; absent = default
  };
}

export function emptyState(): GlobalState {
  return {
    version: STORAGE_SCHEMA_VERSION,
    topics: {},
    terms: {},
    questions: {},
    pastPapers: {},
    blocks: {},
    settings: {
      accessArrangements: { extraTime: true, separateRoom: false, room: 'unknown' },
      dailyLoadMinutes: {},
    },
  };
}

const isRecord = (value: unknown): value is Record<string, unknown> =>
  typeof value === 'object' && value !== null && !Array.isArray(value);

const isRag = (value: unknown): value is Rag => value === 'red' || value === 'amber' || value === 'green';
const isRating = (value: unknown): value is Rating => value === 'right' || value === 'partial' || value === 'wrong';
const isWeekday = (value: string): value is Weekday => (WEEKDAYS as string[]).includes(value);

function mapRecord<T>(raw: unknown, pick: (value: unknown) => T | null): Record<string, T> {
  const out: Record<string, T> = {};
  if (!isRecord(raw)) return out;
  for (const [key, value] of Object.entries(raw)) {
    const item = pick(value);
    if (item !== null) out[key] = item;
  }
  return out;
}

function topicOf(value: unknown): TopicProgress | null {
  if (!isRecord(value)) return null;
  const out: TopicProgress = {};
  if (typeof value.done === 'string') out.done = value.done;
  if (isRag(value.rag)) out.rag = value.rag;
  return out;
}

function termOf(value: unknown): TermProgress | null {
  if (!isRecord(value) || typeof value.due !== 'string' || !Number.isFinite(value.box)) return null;
  return { box: Math.min(4, Math.max(1, Math.round(value.box as number))), due: value.due };
}

function questionOf(value: unknown): QuestionProgress | null {
  if (!isRecord(value) || !isRating(value.rating) || typeof value.at !== 'string') return null;
  return { rating: value.rating, at: value.at };
}

function pastPaperOf(value: unknown): PastPaperProgress | null {
  if (!isRecord(value)) return null;
  const out: PastPaperProgress = {};
  if (typeof value.solved === 'string') out.solved = value.solved;
  if (isRecord(value.scores)) {
    const scores: Record<string, number> = {};
    for (const [item, score] of Object.entries(value.scores)) {
      if (typeof score === 'number' && Number.isFinite(score) && score >= 0) scores[item] = Math.round(score);
    }
    out.scores = scores;
  }
  return out;
}

function loadOf(raw: unknown): Partial<Record<Weekday, number>> {
  const out: Partial<Record<Weekday, number>> = {};
  if (!isRecord(raw)) return out;
  for (const [day, minutes] of Object.entries(raw)) {
    if (isWeekday(day) && typeof minutes === 'number' && Number.isFinite(minutes)) {
      out[day] = Math.min(600, Math.max(0, Math.round(minutes)));
    }
  }
  return out;
}

export function normalizeState(raw: unknown): GlobalState {
  const state = emptyState();
  if (!isRecord(raw)) return state;
  state.topics = mapRecord(raw.topics, topicOf);
  state.terms = mapRecord(raw.terms, termOf);
  state.questions = mapRecord(raw.questions, questionOf);
  state.pastPapers = mapRecord(raw.pastPapers, pastPaperOf);
  state.blocks = mapRecord(raw.blocks, value => (typeof value === 'string' ? value : null));
  const settings = isRecord(raw.settings) ? raw.settings : {};
  // Extra time is on unless it was switched off. The room is the saved one; an old save with only the separateRoom
  // flag means ACC2 when the flag is true, and not known otherwise.
  const access: Record<string, unknown> = isRecord(settings.accessArrangements) ? settings.accessArrangements : {};
  const room: AccessRoom = access.room === 'ACC2' || access.room === 'SpHal2' || access.room === 'unknown'
    ? access.room
    : access.separateRoom === true ? 'ACC2' : 'unknown';
  const extraTime = raw.version === STORAGE_SCHEMA_VERSION ? access.extraTime !== false : true;
  state.settings.accessArrangements = { extraTime, separateRoom: room === 'ACC2', room };
  state.settings.dailyLoadMinutes = loadOf(settings.dailyLoadMinutes);
  return state;
}

export function loadState(): GlobalState {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    return raw ? normalizeState(JSON.parse(raw)) : emptyState();
  } catch {
    return emptyState();
  }
}

export function saveState(state: GlobalState): void {
  try {
    window.localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
    window.dispatchEvent(new Event(UPDATE_EVENT));
  } catch {
    // Storage can be blocked (private window, full quota). The app keeps working without saving.
  }
}

// True when this browser lets the page write localStorage. Blocked or full storage returns false.
export function storageAvailable(): boolean {
  try {
    window.localStorage.setItem('__foma_probe__', '1');
    window.localStorage.removeItem('__foma_probe__');
    return true;
  } catch {
    return false;
  }
}
