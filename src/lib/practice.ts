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

// The options of the three selects must always include the chosen value. If the address asks for a paper, topic or
// command term that no question has (a hand-typed address, a link to a topic without questions), the select shows it
// with a count of 0 and the page says that nothing matches, instead of quietly showing every question.
export function withChosen(options: FilterOptions, filters: PracticeFilters): FilterOptions {
  const papers = filters.paper && !options.papers.some(item => item.value === filters.paper)
    ? PAPER_IDS.flatMap(paper => (paper === filters.paper ? [{ value: paper, count: 0 }] : options.papers.filter(item => item.value === paper)))
    : options.papers;
  const topics = filters.topic && !options.topics.some(item => item.value === filters.topic)
    ? [...options.topics, { value: filters.topic, count: 0 }]
    : options.topics;
  const commands = filters.command && !options.commands.some(item => item.value === filters.command)
    ? [...options.commands, { value: filters.command, label: filters.command, count: 0 }].sort((a, b) => a.label.localeCompare(b.label, 'en'))
    : options.commands;
  return { papers, topics, commands };
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
// A running countdown survives a reload (a phone that discards a background tab, a pulled-down page). It is saved
// when it starts, pauses or ends, as the moment it ends, and read again when the page opens.

/** A saved countdown that is running or paused is forgotten after this long. */
export const TIMER_KEEP_MS = 8 * 60 * 60 * 1000;
/** A countdown that has ended is shown as "Time is up" for this long (a reload right after the end), then forgotten,
 *  so a paper started tomorrow does not open as finished. */
export const DONE_KEEP_MS = 15 * 60 * 1000;

// One saved countdown per timed set.
export function timerStorageKey(subject: string, setId: string): string {
  return `foma-portal-timer-v1:${subject}/${setId}`;
}

// What is worth saving about a countdown: its state and its end moment. Two countdowns with the same signature need
// no second write, so a countdown just read from storage is not written back (that would renew its time to live).
export function timerSignature(timer: TimerState): string {
  return `${timer.status}|${timer.endsAt}`;
}

// Leaving a timed set, or choosing another one, is a decision to stop that paper: the key of the countdown to forget,
// or null when the student stays on the same set (or was not in a set).
export function timerKeyToForget(subject: string, activeSetId: string, nextSetId: string): string | null {
  return activeSetId && activeSetId !== nextSetId ? timerStorageKey(subject, activeSetId) : null;
}

export function timerToStored(timer: TimerState, now: number): string {
  return JSON.stringify({ status: timer.status, totalMs: timer.totalMs, remainingMs: timer.remainingMs, endsAt: timer.endsAt, savedAt: now });
}

const finite = (value: unknown): value is number => typeof value === 'number' && Number.isFinite(value);

// The countdown to continue with, or null when there is nothing usable: no value, damaged text, another length of
// time (the set or the extra-time setting changed), too old, or numbers that make no sense. A countdown that was
// running goes on from its end moment, and is over if that moment has passed.
export function timerFromStored(raw: string | null | undefined, totalMs: number, now: number): TimerState | null {
  if (!raw) return null;
  let data: unknown;
  try {
    data = JSON.parse(raw);
  } catch {
    return null;
  }
  if (typeof data !== 'object' || data === null) return null;
  const saved = data as Record<string, unknown>;
  if (saved.status !== 'running' && saved.status !== 'paused' && saved.status !== 'done') return null;
  if (!finite(saved.totalMs) || saved.totalMs !== totalMs || !finite(saved.savedAt)) return null;
  if (now - saved.savedAt > TIMER_KEEP_MS || saved.savedAt - now > 5 * 60_000) return null;
  if (saved.status === 'done') {
    return now - saved.savedAt <= DONE_KEEP_MS ? { status: 'done', totalMs, remainingMs: 0, endsAt: null } : null;
  }
  if (!finite(saved.remainingMs) || saved.remainingMs < 0 || saved.remainingMs > totalMs) return null;
  if (saved.status === 'paused') return { status: 'paused', totalMs, remainingMs: saved.remainingMs, endsAt: null };
  if (!finite(saved.endsAt) || saved.endsAt - now > totalMs + 1000) return null;
  const left = saved.endsAt - now;
  if (left <= 0) return -left <= DONE_KEEP_MS ? { status: 'done', totalMs, remainingMs: 0, endsAt: null } : null;
  return { status: 'running', totalMs, remainingMs: left, endsAt: saved.endsAt };
}

// ---------------------------------------------------------------------------------------------------------------
// Ratings and the mistake log

// The "to redo" list is worked out again when this changes: the subject, the filters, or the timed set (going into or
// out of timed mode). A rating given in between does not change it, so the cards stay where they are.
export function redoSnapshotKey(subject: string, filters: PracticeFilters, activeSetId: string): string {
  return [subject, filters.paper, filters.topic, filters.command, activeSetId].join('|');
}

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
