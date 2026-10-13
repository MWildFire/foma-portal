import type { L, PaperId } from '../../contract/types';

// Search, filter and order for the glossary list. Pure functions: this file may import types only (the unit tests
// run it as plain TypeScript, without a bundler).

interface TermLike {
  id: string;
  term: L;
  def: L;
  syllabus: string;
  papers: readonly PaperId[];
}

export interface TermFilters {
  /** Words typed in the search box. Every word must be found, in any order. */
  query: string;
  paper: PaperId | '';
}

export const NO_TERM_FILTERS: TermFilters = { query: '', paper: '' };

// Lower case, "ё" read as "е", spaces collapsed: "  Спрос  " finds "спрос", and "всё" finds "все".
export function normalizeSearch(value: string): string {
  return value.toLowerCase().replace(/ё/g, 'е').replace(/\s+/g, ' ').trim();
}

const haystack = (term: TermLike): string =>
  normalizeSearch([term.term.en, term.term.ru, term.def.en, term.def.ru, term.syllabus].join(' '));

export function filterTerms<T extends TermLike>(terms: readonly T[], filters: TermFilters): T[] {
  const words = normalizeSearch(filters.query).split(' ').filter(Boolean);
  return terms.filter(term => {
    if (filters.paper && !term.papers.includes(filters.paper)) return false;
    if (words.length === 0) return true;
    const text = haystack(term);
    return words.every(word => text.includes(word));
  });
}

// The English terms A-Z, because the exam is in English. The same term goes by id.
export function sortTerms<T extends TermLike>(terms: readonly T[]): T[] {
  return [...terms].sort((a, b) =>
    a.term.en.localeCompare(b.term.en, 'en', { sensitivity: 'base' }) || a.id.localeCompare(b.id, 'en'));
}

// Papers that some term belongs to, in P1, P2, P3 order.
export function termPapers(terms: readonly TermLike[]): PaperId[] {
  const all: PaperId[] = ['P1', 'P2', 'P3'];
  return all.filter(paper => terms.some(term => term.papers.includes(paper)));
}
