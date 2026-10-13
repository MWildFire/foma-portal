// Past IB papers in the plan (PLAN.md §5, step 7). Pure helpers: the planner passes the papers in and gets links and
// question slices out. The contract type PastPaperRef is only read here.
import type { PaperId, PastPaperRef, SubjectId } from '../contract/types.ts';
import type { PastPaperLink } from './types.ts';

// Decision of [redacted] for Geography: from this day on, at least half of the Geography quota of each day goes to past
// papers (sections and questions). On the two days of the Geography papers the same share goes to full papers.
export const GEO_PAST_FROM = '2026-10-15';
export const GEO_FULL_PAPER_DAYS: readonly string[] = ['2026-10-24', '2026-10-25'];
export const PAST_SHARE = 0.5;

// 'M24' is May 2024 and 'N23' is November 2023; a later session has a bigger number. Anything else sorts last.
export function sessionRank(session: string): number {
  const match = /^([MN])(\d{2})$/.exec(session.trim().toUpperCase());
  if (!match) return Number.NEGATIVE_INFINITY;
  return (2000 + Number(match[2])) * 2 + (match[1] === 'N' ? 1 : 0);
}

// The most recent session first. On the same session the core paper (P2) comes before P1 and P3, then the id decides,
// so the order is the same on every run.
const PAPER_ORDER: Record<string, number> = { P2: 0, P1: 1, P3: 2 };
export function recentFirst(refs: readonly PastPaperRef[]): PastPaperRef[] {
  return [...refs].sort((a, b) => sessionRank(b.session) - sessionRank(a.session)
    || (PAPER_ORDER[a.paper] ?? 3) - (PAPER_ORDER[b.paper] ?? 3)
    || (a.id < b.id ? -1 : a.id > b.id ? 1 : 0));
}

// The past papers of one subject and paper number, the most recent session first. Parts are kept in the list.
export function pastPool(refs: readonly PastPaperRef[], subject: SubjectId, paper: PaperId): PastPaperRef[] {
  return recentFirst(refs.filter(ref => ref.subject === subject && ref.paper === paper));
}

// The student's progress on past papers (state.pastPapers, by `${subject}/${id}`): a paper marked solved has a date.
export type PastProgress = Readonly<Record<string, { solved?: string }>> | undefined;

export const isSolved = (progress: PastProgress, subject: SubjectId, id: string): boolean =>
  typeof progress?.[`${subject}/${id}`]?.solved === 'string';

// Unsolved papers first, each group the most recent first: the planner picks from the top, so a paper the student
// has solved comes up only when nothing else is left.
export function unsolvedFirst(refs: readonly PastPaperRef[], progress: PastProgress): PastPaperRef[] {
  const sorted = recentFirst(refs);
  return [
    ...sorted.filter(ref => !isSolved(progress, ref.subject, ref.id)),
    ...sorted.filter(ref => isSolved(progress, ref.subject, ref.id)),
  ];
}

export function linkOf(ref: PastPaperRef): PastPaperLink {
  return { id: ref.id, session: ref.session, paper: ref.paper, ...(ref.part ? { part: ref.part } : {}) };
}

// Minutes per mark of a paper: its printed time spread over its marks (a question is worth its marks in minutes).
export function minutesPerMark(ref: PastPaperRef): number {
  return ref.marks > 0 && ref.minutes > 0 ? ref.minutes / ref.marks : 1;
}

// The question ids that fill `minutes` of practice, taken in order from item `from` on. At least one item is taken
// while items are left. `next` is the index of the first item not taken.
export function itemsFrom(ref: PastPaperRef, from: number, minutes: number): { ids: string[]; next: number } {
  const per = minutesPerMark(ref);
  const ids: string[] = [];
  let spent = 0;
  let index = from;
  while (index < ref.items.length && spent < minutes) {
    const item = ref.items[index];
    ids.push(item.q);
    spent += Math.max(1, item.marks) * per;
    index += 1;
  }
  return { ids, next: index };
}
