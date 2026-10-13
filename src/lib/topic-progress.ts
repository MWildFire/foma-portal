import type { Rag } from './storage';

// Progress keys in localStorage are `${subject}/${id}` (see GlobalState in storage.ts).
export function topicKey(subject: string, topicId: string): string {
  return `${subject}/${topicId}`;
}

export function questionKey(subject: string, questionId: string): string {
  return `${subject}/${questionId}`;
}

export interface RagSplit { red: number; amber: number; green: number; unrated: number }
export interface SubjectProgress { total: number; done: number; rag: RagSplit }

type TopicRecord = { done?: string; rag?: Rag };
type TopicRecords = Record<string, TopicRecord | undefined>;

// Counts only the topics that exist in the pack, so a stale key in storage never pushes done above total.
export function subjectProgress(subject: string, topicIds: readonly string[], topics: TopicRecords): SubjectProgress {
  const rag: RagSplit = { red: 0, amber: 0, green: 0, unrated: 0 };
  const seen = new Set<string>();
  let done = 0;
  for (const id of topicIds) {
    if (seen.has(id)) continue;
    seen.add(id);
    const progress = topics[topicKey(subject, id)];
    if (progress?.done) done += 1;
    const value = progress?.rag;
    if (value === 'red' || value === 'amber' || value === 'green') rag[value] += 1;
    else rag.unrated += 1;
  }
  return { total: seen.size, done, rag };
}

export function percent(done: number, total: number): number {
  if (total <= 0) return 0;
  return Math.min(100, Math.max(0, Math.round((done / total) * 100)));
}

// Today's date in Dubai (UTC+4, no daylight saving) as YYYY-MM-DD. Progress dates use the student's calendar day.
export function dubaiDate(now: Date = new Date()): string {
  return new Date(now.getTime() + 4 * 60 * 60 * 1000).toISOString().slice(0, 10);
}

// "I finished this topic": sets the date, or clears it when the topic is already marked done.
export function toggleDone(record: TopicRecord | undefined, today: string): TopicRecord {
  const { done, ...rest } = record ?? {};
  return done ? rest : { ...rest, done: today };
}

// Confidence after a topic. Choosing the colour that is already set clears it.
export function chooseRag(record: TopicRecord | undefined, rag: Rag): TopicRecord {
  const { rag: current, ...rest } = record ?? {};
  return current === rag ? rest : { ...rest, rag };
}

// The date part of a stored value, so '2026-10-13T08:00:00Z' and '2026-10-13' both show as '2026-10-13'.
export function dateOnly(value: string): string {
  return /^\d{4}-\d{2}-\d{2}/.test(value) ? value.slice(0, 10) : value;
}
