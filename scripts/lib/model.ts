// The validator's view of the content contract (PLAN.md section 2).
//
// These types are declared here instead of imported from src/contract on purpose: tsconfig.node.json is a composite
// project that only lists scripts/ and vite.config.ts, and TypeScript rejects imports that leave that file list.
// Content is also untrusted input for a validator, so almost every field is optional and the rules read it defensively.

export type Lang = 'en' | 'ru';
export const LANGS: Lang[] = ['en', 'ru'];

export interface LText { en: string; ru: string }

export interface SourceRef { kind?: string; title?: string; locator?: string; url?: string }

export interface SyllabusItem { code: string; title?: LText; papers?: string[] }

export interface TopicMeta {
  id: string;
  subject: string;
  code: string;
  title?: LText;
  inMockScope?: string;
  termIds?: string[];
  formulaIds?: string[];
  sims?: string[];
  questionIds?: string[];
  caseIds?: string[];
  sources?: SourceRef[];
}

export interface Term { id: string; term?: LText; def?: LText; syllabus?: string; src?: SourceRef; sim?: string }

export interface Formula { id: string; tex?: string; syllabus?: string }

export interface Question {
  id: string;
  subject: string;
  topicIds?: string[];
  marks?: number;
  minutes?: number;
  markscheme?: LText;
}

export interface CaseStudy { id: string; usedFor?: string[]; src?: SourceRef[] }

export interface TimedSet { id: string; questionIds?: string[]; minutes?: number }

export interface PaperGuide {
  subject: string;
  paper: string;
  part?: string;
  minutes?: number;
  timedSets?: TimedSet[];
}

// A past paper the portal links to (PastPaperRef in src/contract/types.ts). Read defensively, like the rest.
export interface PastPaperRef {
  id: string;
  subject?: string;
  paper?: string;
  part?: string;
  session?: string;
  level?: string;
  files?: { kind?: string; url?: string }[];
  minutes?: number;
  marks?: number;
  items?: { q?: string; marks?: number; topicIds?: string[] }[];
  guide?: LText;
}

export interface SubjectMeta { id: string }

// What content/<s>/index.ts produces (SubjectPack in src/contract/pack.ts), reduced to what the rules read.
export interface Pack {
  meta: SubjectMeta;
  syllabus: SyllabusItem[];
  topics: TopicMeta[];
  terms: Term[];
  formulas: Formula[];
  questions: Question[];
  cases: CaseStudy[];
  papers: PaperGuide[];
  pastPapers: PastPaperRef[];
}

export type Collection = 'syllabus' | 'topics' | 'terms' | 'formulas' | 'questions' | 'cases' | 'papers' | 'pastPapers';
const COLLECTIONS: Collection[] = ['syllabus', 'topics', 'terms', 'formulas', 'questions', 'cases', 'papers', 'pastPapers'];

export function hasOwn(object: object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(object, key);
}

export function isRecord(value: unknown): value is Record<string, unknown> {
  return typeof value === 'object' && value !== null && !Array.isArray(value);
}

// `undefined` and non-arrays read as an empty list, so a half-written item never crashes a rule.
export function list<T>(value: T[] | undefined | null): T[] {
  return Array.isArray(value) ? value : [];
}

export function textOf(value: unknown): string {
  return typeof value === 'string' ? value : '';
}

export interface NormalizedPack {
  pack: Pack;
  // Entries that were not objects (for example `undefined` from a file that does not export `terms`).
  dropped: { collection: Collection; count: number }[];
}

// Turns the default export of content/<s>/index.ts into a Pack that is safe to iterate.
export function normalizePack(raw: unknown): NormalizedPack | null {
  if (!isRecord(raw) || !isRecord(raw.meta)) return null;
  const dropped: NormalizedPack['dropped'] = [];
  const clean: Record<string, unknown[]> = {};
  COLLECTIONS.forEach(name => {
    const entries = Array.isArray(raw[name]) ? (raw[name] as unknown[]) : [];
    const kept = entries.filter(isRecord);
    if (kept.length !== entries.length) dropped.push({ collection: name, count: entries.length - kept.length });
    clean[name] = kept;
  });
  const pack = { meta: raw.meta, ...clean } as unknown as Pack;
  return { pack, dropped };
}
