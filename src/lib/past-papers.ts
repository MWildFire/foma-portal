import type { PaperId, PastPaperRef } from '../contract/types';

// Pure helpers for the past-papers page: session order, grouping and self-scoring.

const SESSION = /^([MN])(\d{2})$/;   // May or November, two-digit year: M24, N23

// Newest first: November 2024 after May 2024, 2024 after 2023. Unknown sessions sort last.
export function sessionRank(session: string): number {
  const match = SESSION.exec(session);
  if (!match) return Number.NEGATIVE_INFINITY;
  return (2000 + Number(match[2])) * 2 + (match[1] === 'N' ? 1 : 0);
}

// The month and year a session was held in (May or November), for labels such as "May 2024".
export function sessionDate(session: string): { year: number; monthIndex: number } | null {
  const match = SESSION.exec(session);
  if (!match) return null;
  return { year: 2000 + Number(match[2]), monthIndex: match[1] === 'M' ? 4 : 10 };
}

const PAPER_ORDER: PaperId[] = ['P1', 'P2', 'P3'];

// Papers grouped by paper (P1, P2, P3), each group newest session first, then by id.
export function groupPastPapers(refs: PastPaperRef[]): { paper: PaperId; refs: PastPaperRef[] }[] {
  return PAPER_ORDER
    .map(paper => ({
      paper,
      refs: refs
        .filter(ref => ref.paper === paper)
        .sort((a, b) => sessionRank(b.session) - sessionRank(a.session) || a.id.localeCompare(b.id)),
    }))
    .filter(group => group.refs.length > 0);
}

// The marks a student gave themselves, summed over the items that have a score. Items without a score count as 0.
export function selfScore(ref: PastPaperRef, scores: Record<string, number> | undefined): { earned: number; total: number } {
  const earned = ref.items.reduce((sum, _item, index) => {
    const score = scores?.[String(index)];
    return sum + (typeof score === 'number' ? score : 0);
  }, 0);
  return { earned, total: ref.marks };
}

// A score is a whole number of marks from 0 to the item's marks; anything else is clamped or dropped.
export function clampScore(value: number, marks: number): number {
  if (!Number.isFinite(value)) return 0;
  return Math.min(marks, Math.max(0, Math.round(value)));
}
