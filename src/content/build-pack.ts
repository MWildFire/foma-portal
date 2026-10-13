import type { CaseStudy, Formula, Lang, PaperGuide, Question, SimId, SyllabusItem, Term, TopicMeta } from '../contract/types';
import type { SimComponent, SubjectMeta, SubjectPack, TopicBodyLoader, TopicBodyLoaders } from '../contract/pack';

// Raw module maps from the import.meta.glob calls in content/<s>/index.ts.
export interface RawModules {
  syllabus: Record<string, { syllabus: SyllabusItem[] }>;
  topicMeta: Record<string, { default: TopicMeta }>;
  topicBody: Record<string, TopicBodyLoader>;
  terms: Record<string, { terms: Term[] }>;
  formulas: Record<string, { formulas: Formula[] }>;
  questions: Record<string, { questions: Question[] }>;
  cases: Record<string, { cases: CaseStudy[] }>;
  papers: Record<string, { papers: PaperGuide[] }>;
  sims: Record<string, () => Promise<{ default: SimComponent }>>;
}

const collect = <M, T>(modules: Record<string, M>, pick: (module: M) => T[]): T[] => Object.values(modules).flatMap(pick);

export function buildPack(meta: SubjectMeta, raw: RawModules): SubjectPack {
  const topicBodies: Record<string, TopicBodyLoaders> = {};
  for (const [path, load] of Object.entries(raw.topicBody)) {
    const match = /\/([^/]+)\.(en|ru)\.mdx$/.exec(path);
    if (!match) continue;
    const [, topicId, lang] = match;
    const entry = topicBodies[topicId] ?? {};
    entry[lang as Lang] = load;
    topicBodies[topicId] = entry;
  }

  // Simulations live in src/sims/<subject>/<name>.tsx and get the id '<subject>.<name>'.
  const sims: SubjectPack['sims'] = {};
  const simPattern = new RegExp(`/sims/${meta.id}/([^/]+)\\.tsx$`);
  for (const [path, load] of Object.entries(raw.sims)) {
    const match = simPattern.exec(path);
    if (match) sims[`${meta.id}.${match[1]}` as SimId] = load;
  }

  return {
    meta,
    syllabus: collect(raw.syllabus, m => m.syllabus),
    topics: Object.values(raw.topicMeta).map(m => m.default).sort((a, b) => a.order - b.order),
    topicBodies,
    terms: collect(raw.terms, m => m.terms),
    formulas: collect(raw.formulas, m => m.formulas),
    questions: collect(raw.questions, m => m.questions),
    cases: collect(raw.cases, m => m.cases),
    papers: collect(raw.papers, m => m.papers),
    sims,
  };
}
