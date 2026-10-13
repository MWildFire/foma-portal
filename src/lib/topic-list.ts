// Pure helpers for the subject page and the paper page.

const PAPER_ORDER = ['P1', 'P2', 'P3'] as const;
export type PaperKey = (typeof PAPER_ORDER)[number];

export function isPaperKey(value: string | null | undefined): value is PaperKey {
  return value === 'P1' || value === 'P2' || value === 'P3';
}

// Topics in teaching order. The pack is already sorted by `order`; this keeps the list stable if it is not.
export function sortTopics<T extends { order: number; code: string }>(topics: readonly T[]): T[] {
  return [...topics].sort((a, b) => a.order - b.order || a.code.localeCompare(b.code, 'en', { numeric: true }));
}

// Papers that have at least one guide, in P1, P2, P3 order. A paper with several guides (parts) appears once.
export function papersWithGuides(guides: readonly { paper: string }[]): PaperKey[] {
  return PAPER_ORDER.filter(paper => guides.some(guide => guide.paper === paper));
}

export function guidesForPaper<T extends { paper: string }>(guides: readonly T[], paper: string): T[] {
  return guides.filter(guide => guide.paper === paper);
}

// Link target of a timed set on the practice page (built by the study tools): #/s/<subject>/practice?set=<id>.
export function timedSetSearch(setId: string): string {
  return `?set=${encodeURIComponent(setId)}`;
}
