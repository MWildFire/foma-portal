import type { L, PaperId } from '../contract/types';
import type { QuestionProgress, Rating } from './storage';

// Rules of the practice page: filters (kept in the address), timed sets, the countdown, extra time and the
// mistake log. Pure functions only. This file may import types only (the unit tests run it as plain
// TypeScript, without a bundler).

export const PAPER_IDS: readonly PaperId[] = ['P1', 'P2', 'P3'];
const isPaperId = (value: unknown): value is PaperId => value === 'P1' || value === 'P2' || value === 'P3';

// ---------------------------------------------------------------------------------------------------------------
// Filters

export interface PracticeFilters {
  paper: PaperId | '';
  topic: string;
  /** Lower case, so "Explain" and "explain" are one command term. */
  command: string;
}

export const NO_FILTERS: PracticeFilters = { paper: '', topic: '', command: '' };

export const normalizeCommand = (value: string): string => value.trim().toLowerCase();

type ParamReader = { get(name: string): string | null };

// ?paper=P1&topic=<topic id>&command=explain. A value that does not mean anything is ignored.
export function filtersFromParams(params: ParamReader): PracticeFilters {
  const paper = params.get('paper');
  return {
    paper: isPaperId(paper) ? paper : '',
    topic: (params.get('topic') ?? '').trim(),
    command: normalizeCommand(params.get('command') ?? ''),
  };
}

// The same address with one filter changed. Other parameters (such as ?set=) stay. An empty value removes it.
export function withFilter(params: URLSearchParams, name: keyof PracticeFilters, value: string): URLSearchParams {
  const next = new URLSearchParams(params);
  if (value) next.set(name, value);
  else next.delete(name);
  return next;
}

export function withoutFilters(params: URLSearchParams): URLSearchParams {
  const next = new URLSearchParams(params);
  for (const name of Object.keys(NO_FILTERS)) next.delete(name);
  return next;
}

export function hasFilters(filters: PracticeFilters): boolean {
  return filters.paper !== '' || filters.topic !== '' || filters.command !== '';
}

interface QuestionLike {
  id: string;
  paper: string;
  topicIds: readonly string[];
  command: string;
}

export function filterQuestions<Q extends QuestionLike>(questions: readonly Q[], filters: PracticeFilters): Q[] {
  return questions.filter(question =>
    (!filters.paper || question.paper === filters.paper) &&
    (!filters.topic || question.topicIds.includes(filters.topic)) &&
    (!filters.command || normalizeCommand(question.command) === filters.command));
}

export interface FilterOptions {
  papers: { value: PaperId; count: number }[];
  topics: { value: string; count: number }[];
  commands: { value: string; label: string; count: number }[];
}

// What the three filters can offer for this subject: only values that some question has. Topics follow the
// teaching order (`topicOrder` is the list of topic ids of the pack); command terms are alphabetical.
export function filterOptions<Q extends QuestionLike>(questions: readonly Q[], topicOrder: readonly string[] = []): FilterOptions {
  const papers = new Map<PaperId, number>();
  const topics = new Map<string, number>();
  const commands = new Map<string, { label: string; count: number }>();
  for (const question of questions) {
    if (isPaperId(question.paper)) papers.set(question.paper, (papers.get(question.paper) ?? 0) + 1);
    for (const id of new Set(question.topicIds)) topics.set(id, (topics.get(id) ?? 0) + 1);
    const key = normalizeCommand(question.command);
    if (key) {
      const known = commands.get(key);
      commands.set(key, { label: known?.label ?? question.command.trim(), count: (known?.count ?? 0) + 1 });
    }
  }
  const rank = (id: string): number => {
    const index = topicOrder.indexOf(id);
    return index === -1 ? Number.MAX_SAFE_INTEGER : index;
  };
  return {
    papers: PAPER_IDS.filter(paper => papers.has(paper)).map(paper => ({ value: paper, count: papers.get(paper) ?? 0 })),
    topics: [...topics.entries()]
      .sort((a, b) => rank(a[0]) - rank(b[0]) || a[0].localeCompare(b[0], 'en'))
      .map(([value, count]) => ({ value, count })),
    commands: [...commands.entries()]
      .sort((a, b) => a[1].label.localeCompare(b[1].label, 'en'))
      .map(([value, info]) => ({ value, label: info.label, count: info.count })),
  };
}

// Drops filter values that no question has, so a stale address never shows an empty list with no way to see why.
export function sanitizeFilters(filters: PracticeFilters, options: FilterOptions): PracticeFilters {
  return {
    paper: options.papers.some(item => item.value === filters.paper) ? filters.paper : '',
    topic: options.topics.some(item => item.value === filters.topic) ? filters.topic : '',
    command: options.commands.some(item => item.value === filters.command) ? filters.command : '',
  };
}

// ---------------------------------------------------------------------------------------------------------------
// Timed sets

interface GuideLike {
  paper: string;
  part?: string;
  timedSets: readonly { id: string; title: L; questionIds: readonly string[]; minutes: number }[];
}

export interface TimedSetInfo {
  id: string;
  paper: PaperId;
  part?: string;
  title: L;
  questionIds: readonly string[];
  minutes: number;
}

// Every timed set of the subject, across its paper guides: P1 first, then P2 and P3; the guide order is kept.
export function listTimedSets(guides: readonly GuideLike[]): TimedSetInfo[] {
  const out: TimedSetInfo[] = [];
  for (const paper of PAPER_IDS) {
    for (const guide of guides) {
      if (guide.paper !== paper) continue;
      for (const set of guide.timedSets) {
        out.push({ id: set.id, paper, part: guide.part, title: set.title, questionIds: set.questionIds, minutes: set.minutes });
      }
    }
  }
  return out;
}

// ?set=<id>: the first set with this id, or undefined.
export function findTimedSet(guides: readonly GuideLike[], id: string): TimedSetInfo | undefined {
  return id ? listTimedSets(guides).find(set => set.id === id) : undefined;
}

// The questions of a set in the order of the set. An id that is not in the pack is reported, not skipped silently.
export function questionsOfSet<Q extends { id: string }>(set: { questionIds: readonly string[] }, questions: readonly Q[]): { found: Q[]; missing: string[] } {
  const byId = new Map<string, Q>();
  for (const question of questions) if (!byId.has(question.id)) byId.set(question.id, question);
  const found: Q[] = [];
  const missing: string[] = [];
  const seen = new Set<string>();
  for (const id of set.questionIds) {
    if (seen.has(id)) continue;
    seen.add(id);
    const question = byId.get(id);
    if (question) found.push(question);
    else missing.push(id);
  }
  return { found, missing };
}

// ---------------------------------------------------------------------------------------------------------------
// Time and extra time

export const EXTRA_TIME_FACTOR = 1.25;
/** The warning starts when this many seconds are left. */
export const WARN_SECONDS = 5 * 60;

// Access arrangements: extra time is 25% on top, rounded up to a whole minute.
export function allowedMinutes(minutes: number, extraTime: boolean): number {
  const base = Number.isFinite(minutes) && minutes > 0 ? minutes : 0;
  return extraTime ? Math.ceil(base * EXTRA_TIME_FACTOR) : base;
}

export function extraMinutes(minutes: number, extraTime: boolean): number {
  const base = Number.isFinite(minutes) && minutes > 0 ? minutes : 0;
  return allowedMinutes(base, extraTime) - base;
}

// 75 -> "01:15"; 3420 -> "57:00". Minutes are not wrapped into hours, so a 105-minute paper reads "105:00".
export function formatClock(totalSeconds: number): string {
  const seconds = Math.max(0, Math.ceil(Number.isFinite(totalSeconds) ? totalSeconds : 0));
  const minutes = Math.floor(seconds / 60);
  return `${String(minutes).padStart(2, '0')}:${String(seconds % 60).padStart(2, '0')}`;
}

// ---------------------------------------------------------------------------------------------------------------
// The countdown. It stores the moment it ends, not a count of ticks, so a phone that sleeps or a tab that is
// throttled still shows the right time when the student comes back.

export type TimerStatus = 'idle' | 'running' | 'paused' | 'done';

export interface TimerState {
  status: TimerStatus;
  totalMs: number;
  /** Time left when idle or paused; the value at the last tick when running. */
  remainingMs: number;
  /** The moment it ends (ms since 1970), only while running. */
  endsAt: number | null;
}

export function createTimer(minutes: number): TimerState {
  const totalMs = Math.max(0, Math.round(minutes * 60_000));
  return { status: 'idle', totalMs, remainingMs: totalMs, endsAt: null };
}

export function startTimer(timer: TimerState, now: number): TimerState {
  if (timer.status !== 'idle' && timer.status !== 'paused') return timer;
  if (timer.remainingMs <= 0) return { ...timer, status: 'done', remainingMs: 0, endsAt: null };
  return { ...timer, status: 'running', endsAt: now + timer.remainingMs };
}

export function pauseTimer(timer: TimerState, now: number): TimerState {
  if (timer.status !== 'running' || timer.endsAt === null) return timer;
  const remainingMs = Math.max(0, timer.endsAt - now);
  return { ...timer, status: remainingMs === 0 ? 'done' : 'paused', remainingMs, endsAt: null };
}

export function resetTimer(timer: TimerState): TimerState {
  return { status: 'idle', totalMs: timer.totalMs, remainingMs: timer.totalMs, endsAt: null };
}

// Called often while the clock runs. It returns the same object while the second on the display is the same, so
// the page redraws once per second, not on every call.
export function tickTimer(timer: TimerState, now: number): TimerState {
  if (timer.status !== 'running' || timer.endsAt === null) return timer;
  const remainingMs = Math.max(0, timer.endsAt - now);
  if (remainingMs === 0) return { ...timer, status: 'done', remainingMs: 0, endsAt: null };
  if (Math.ceil(remainingMs / 1000) === Math.ceil(timer.remainingMs / 1000)) return timer;
  return { ...timer, remainingMs };
}

// Whole seconds for the display. Rounded up, so the clock reads 00:01 until the last moment and 00:00 means over.
export function secondsLeft(timer: TimerState): number {
  return Math.ceil(Math.max(0, timer.remainingMs) / 1000);
}

// The last five minutes of a running or paused clock.
export function isWarning(timer: TimerState): boolean {
  if (timer.status !== 'running' && timer.status !== 'paused') return false;
  const left = secondsLeft(timer);
  return left > 0 && left <= WARN_SECONDS;
}

// ---------------------------------------------------------------------------------------------------------------
// Ratings and the mistake log

// The key in storage.questions.
export function ratingKey(subject: string, questionId: string): string {
  return `${subject}/${questionId}`;
}

type RatingMap = Record<string, { rating: Rating } | undefined>;

export interface RatingCounts {
  total: number;
  right: number;
  partial: number;
  wrong: number;
  /** Questions that were never rated. */
  unrated: number;
}

// Counts only the questions that exist in the pack, so a stale key in storage never shows up.
export function ratingCounts(subject: string, questions: readonly { id: string }[], progress: RatingMap): RatingCounts {
  const counts: RatingCounts = { total: 0, right: 0, partial: 0, wrong: 0, unrated: 0 };
  const seen = new Set<string>();
  for (const question of questions) {
    if (seen.has(question.id)) continue;
    seen.add(question.id);
    counts.total += 1;
    const rating = progress[ratingKey(subject, question.id)]?.rating;
    if (rating === 'right' || rating === 'partial' || rating === 'wrong') counts[rating] += 1;
    else counts.unrated += 1;
  }
  return counts;
}

// Ids of the questions the student rated wrong.
export function wrongIds(subject: string, questions: readonly { id: string }[], progress: RatingMap): Set<string> {
  const out = new Set<string>();
  for (const question of questions) {
    if (progress[ratingKey(subject, question.id)]?.rating === 'wrong') out.add(question.id);
  }
  return out;
}

// "To redo" first, then the rest; the order inside each part is the order of the list.
export function splitRedo<Q extends { id: string }>(questions: readonly Q[], redo: ReadonlySet<string>): { redo: Q[]; rest: Q[] } {
  const first: Q[] = [];
  const rest: Q[] = [];
  for (const question of questions) (redo.has(question.id) ? first : rest).push(question);
  return { redo: first, rest };
}

// storage.questions after a self-rating: questions["<subject>/<id>"] = { rating, at }.
export function rateQuestion(
  questions: Record<string, QuestionProgress>,
  key: string,
  rating: Rating,
  at: string,
): Record<string, QuestionProgress> {
  return { ...questions, [key]: { rating, at } };
}
