import type { PaperId, PastPaperRef } from '../contract/types';

// Pure helpers for the past-papers page: session order and labels, grouping and self-scoring.

const SESSION = /^([MN])(\d{2})$/;   // May or November, two-digit year: M24, N23
const SPECIMEN = /^SPEC(\d{2})$/;    // Specimen paper, named by its exam year: SPEC27

// Newest first. Each year has three slots, May, November and its specimen, so November 2024 sorts after May 2024,
// 2024 after 2023, and a specimen after the November of its year. Unknown sessions sort last.
export function sessionRank(session: string): number {
  const match = SESSION.exec(session);
  if (match) return (2000 + Number(match[2])) * 3 + (match[1] === 'N' ? 1 : 0);
  const specimen = SPECIMEN.exec(session);
  if (specimen) return (2000 + Number(specimen[1])) * 3 + 2;
  return Number.NEGATIVE_INFINITY;
}

// The month and year a session was held in (May or November), for labels such as "May 2024".
export function sessionDate(session: string): { year: number; monthIndex: number } | null {
  const match = SESSION.exec(session);
  if (!match) return null;
  return { year: 2000 + Number(match[2]), monthIndex: match[1] === 'M' ? 4 : 10 };
}

// The heading of a session: "May 2024" or "November 2024" in the reader's language, "Specimen 2027" for a specimen
// (Russian readers also see the English name in brackets), and the code itself for any other session code.
export function sessionLabel(session: string, lang: string): string {
  const specimen = SPECIMEN.exec(session);
  if (specimen) {
    const year = 2000 + Number(specimen[1]);
    return lang.startsWith('ru') ? `Образец ${year} (Specimen ${year})` : `Specimen ${year}`;
  }
  const date = sessionDate(session);
  if (!date) return session;
  return new Intl.DateTimeFormat(lang, { month: 'long', year: 'numeric', timeZone: 'UTC' }).format(new Date(Date.UTC(date.year, date.monthIndex, 1)));
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
