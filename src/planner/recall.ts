// Daily recall (PLAN.md §5, step 3): Leitner flashcards that are due, plus the key terms of red topics.
// French vocabulary and English devices come up more often: they get twice the share of a crowded recall.
import type { SubjectId } from '../contract/types.ts';
import type { GlobalState, PlannerSubject, RecallInfo, RecallSubject } from './types.ts';
// @ts-ignore TS5097
import { shareFairly } from './share.ts';

const ORDER: SubjectId[] = ['geo', 'math', 'econ', 'cs', 'eng', 'fr'];
export const RECALL_WEIGHT: Record<SubjectId, number> = { geo: 1, math: 1, econ: 1, cs: 1, eng: 2, fr: 2 };
// About half a minute per card.
export const CARDS_PER_MINUTE = 2;

const orderOf = (subject: SubjectId): number => ORDER.indexOf(subject);

// Shares `capacity` cards between subjects by weight (see shareFairly). Ties go to the subject that comes first in the usual order.
export function allocateCards(capacity: number, wants: { subject: SubjectId; cards: number }[]): Map<SubjectId, number> {
  const claims = [...wants]
    .sort((a, b) => orderOf(a.subject) - orderOf(b.subject))
    .map(want => ({ key: want.subject, wants: want.cards, weight: RECALL_WEIGHT[want.subject] }));
  const shares = shareFairly(capacity, claims);
  const result = new Map<SubjectId, number>();
  for (const want of wants) result.set(want.subject, shares.get(want.subject) ?? 0);
  return result;
}

interface RecallArgs {
  date: string;
  minutes: number;
  subjects: PlannerSubject[];
  active: SubjectId[];             // subjects whose last exam is still ahead
  state: GlobalState;
}

export function buildRecall({ date, minutes, subjects, active, state }: RecallArgs): RecallInfo {
  const activeSet = new Set<SubjectId>(active);
  const capacityCards = Math.max(0, Math.round(minutes * CARDS_PER_MINUTE));
  const rows: { subject: SubjectId; due: number; redTerms: number }[] = [];

  for (const subject of subjects) {
    if (!activeSet.has(subject.id)) continue;
    const known = subject.termIds ? new Set(subject.termIds) : null;
    const prefix = `${subject.id}/`;

    const dueIds = new Set<string>();
    for (const [key, progress] of Object.entries(state.terms)) {
      if (!key.startsWith(prefix)) continue;
      const termId = key.slice(prefix.length);
      if (known && !known.has(termId)) continue;
      if (progress.due <= date) dueIds.add(termId);
    }

    const redIds = new Set<string>();
    for (const topic of subject.topics) {
      if (state.topics[`${subject.id}/${topic.id}`]?.rag !== 'red') continue;
      for (const termId of topic.termIds) {
        if ((!known || known.has(termId)) && !dueIds.has(termId)) redIds.add(termId);
      }
    }

    if (dueIds.size + redIds.size > 0) rows.push({ subject: subject.id, due: dueIds.size, redTerms: redIds.size });
  }

  const shares = allocateCards(capacityCards, rows.map(row => ({ subject: row.subject, cards: row.due + row.redTerms })));
  const subjectsOut: RecallSubject[] = rows
    .map(row => ({ ...row, suggested: shares.get(row.subject) ?? 0 }))
    .sort((a, b) => RECALL_WEIGHT[b.subject] - RECALL_WEIGHT[a.subject] || orderOf(a.subject) - orderOf(b.subject));

  return {
    date,
    minutes,
    capacityCards,
    dueTotal: rows.reduce((sum, row) => sum + row.due, 0),
    redTotal: rows.reduce((sum, row) => sum + row.redTerms, 0),
    subjects: subjectsOut,
  };
}
