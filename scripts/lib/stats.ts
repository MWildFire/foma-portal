import { list, type Pack, type SourceRef } from './model.ts';
import { formatPercent, type Coverage } from './syllabus-coverage.ts';

// Rule 11 (per-subject figures) and rule 13 (an empty subject is information, not a warning).

const TEXTBOOK_SHARE_TARGET = 70;   // percent of terms whose src is a textbook or an IB guide

// ThinkIB is the course text of Geography and French B: no printed book is used for them, and the eBook sections are the
// locators (round 4, decision 2). So for those subjects a ThinkIB source with a locator is textbook level. The other
// subjects have no such course text (their books are the textbooks, or the IB guide is cited).
const COURSE_TEXT_KINDS: Record<string, string[]> = { geo: ['thinkib'], fr: ['thinkib'] };

// True when a term's source is textbook level: a textbook, an IB guide, or the course text of its subject with a locator.
export function isTextbookLevel(src: SourceRef, subject: string): boolean {
  if (src.kind === 'textbook' || src.kind === 'ib-guide') return true;
  return src.kind !== undefined && (COURSE_TEXT_KINDS[subject] ?? []).includes(src.kind) && (src.locator ?? '').trim() !== '';
}

export interface SubjectStats {
  topics: number;
  codes: number;
  coveredCodes: number;
  coveragePercent: number | null;
  terms: number;
  termsFromBooks: number;
  termSharePercent: number | null;
  formulas: number;
  questions: number;
  cases: number;
  casesWithSource: number;
  papers: number;
  sims: number;
}

const percentOf = (part: number, whole: number): number | null => (whole === 0 ? null : (part / whole) * 100);

export function computeStats(pack: Pack, coverage: Coverage, simCount: number): SubjectStats {
  const termsFromBooks = pack.terms.filter(term => term.src && isTextbookLevel(term.src, pack.meta.id)).length;
  return {
    topics: pack.topics.length,
    codes: pack.syllabus.length,
    coveredCodes: coverage.covered,
    coveragePercent: coverage.percent,
    terms: pack.terms.length,
    termsFromBooks,
    termSharePercent: percentOf(termsFromBooks, pack.terms.length),
    formulas: pack.formulas.length,
    questions: pack.questions.length,
    cases: pack.cases.length,
    casesWithSource: pack.cases.filter(item => list(item.src).length > 0).length,
    papers: pack.papers.length,
    sims: simCount,
  };
}

// True when the subject has no content at all: only meta.ts and index.ts exist.
export function isEmptySubject(stats: SubjectStats, bodyFiles: number): boolean {
  return stats.topics + stats.codes + stats.terms + stats.formulas + stats.questions + stats.cases + stats.papers + stats.sims + bodyFiles === 0;
}

export function statsLine(stats: SubjectStats): string {
  const share = stats.termSharePercent === null ? 'n/a' : formatPercent(stats.termSharePercent);
  const covered = stats.codes === 0 ? '' : `, covered by a topic ${stats.coveredCodes} (${formatPercent(stats.coveragePercent)} of the codes in scope)`;
  return [
    `topics ${stats.topics}`,
    `syllabus codes ${stats.codes}${covered}`,
    `terms ${stats.terms}, from textbook or IB guide ${stats.termsFromBooks} (${share})`,
    `formulas ${stats.formulas}`,
    `questions ${stats.questions}`,
    `cases ${stats.cases}, with a source ${stats.casesWithSource} (${formatPercent(percentOf(stats.casesWithSource, stats.cases))})`,
    `paper guides ${stats.papers}`,
    `sims ${stats.sims}`,
  ].join(' | ');
}

export function statsWarnings(pack: Pack, stats: SubjectStats, checkTermShare: boolean): string[] {
  const warnings: string[] = [];
  if (checkTermShare && stats.termSharePercent !== null && stats.termSharePercent < TEXTBOOK_SHARE_TARGET) {
    warnings.push(`only ${formatPercent(stats.termSharePercent)} of terms (${stats.termsFromBooks} of ${stats.terms}) cite a textbook or an IB guide; the target is ${TEXTBOOK_SHARE_TARGET}% or more`);
  }
  if (stats.casesWithSource < stats.cases) {
    const bare = pack.cases.filter(item => list(item.src).length === 0).map(item => item.id);
    warnings.push(`${stats.cases - stats.casesWithSource} of ${stats.cases} cases have no source (${bare.join(', ')}); every case needs the place, the year and a source`);
  }
  if (stats.codes === 0 && stats.topics + stats.terms + stats.formulas > 0) {
    warnings.push('the subject has content but no syllabus codes: syllabus.ts is missing or empty, so code references were not checked and coverage cannot be computed');
  }
  return warnings;
}
