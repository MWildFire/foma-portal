import type { Assignment, CaseStudy, Formula, Lang, ListeningTrack, PaperGuide, PastPaperRef, Question, SimId, SyllabusItem, Term, TopicMeta } from '../contract/types';
import type { SimComponent, SubjectMeta, SubjectPack, TopicBodyLoader, TopicBodyLoaders, TopicIndex } from '../contract/pack';

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
  pastPapers: Record<string, { pastPapers: PastPaperRef[] }>;
  assignments: Record<string, { assignments: Assignment[] }>;
  listening: Record<string, { track: ListeningTrack }>;
  sims: Record<string, () => Promise<{ default: SimComponent }>>;
}

// Raw module maps from the import.meta.glob calls in content/<s>/topic-index.ts. Only the paths of the bodies are read.
export interface RawTopicIndex {
  topicMeta: Record<string, { default: TopicMeta }>;
  pastPapers: Record<string, { pastPapers: PastPaperRef[] }>;
  topicBody: Record<string, unknown>;
}

// The topic id and the language of an MDX body, from its file name: <topic>.<en|ru>.mdx.
const BODY_FILE = /\/([^/]+)\.(en|ru)\.mdx$/;

const collect = <M, T>(modules: Record<string, M>, pick: (module: M) => T[]): T[] => Object.values(modules).flatMap(pick);

const sortedTopics = (modules: Record<string, { default: TopicMeta }>): TopicMeta[] =>
  Object.values(modules).map(m => m.default).sort((a, b) => a.order - b.order);

// Simulations live in src/sims/<subject>/<name>.tsx and get the id '<subject>.<name>'.
export function simsForSubject(subject: string, modules: Record<string, () => Promise<{ default: SimComponent }>>): SubjectPack['sims'] {
  const sims: SubjectPack['sims'] = {};
  const simPattern = new RegExp(`/sims/${subject}/([^/]+)\\.tsx$`);
  for (const [path, load] of Object.entries(modules)) {
    const match = simPattern.exec(path);
    if (match) sims[`${subject}.${match[1]}` as SimId] = load;
  }
  return sims;
}

export function buildPack(meta: SubjectMeta, raw: RawModules): SubjectPack {
  const topicBodies: Record<string, TopicBodyLoaders> = {};
  for (const [path, load] of Object.entries(raw.topicBody)) {
    const match = BODY_FILE.exec(path);
    if (!match) continue;
    const [, topicId, lang] = match;
    const entry = topicBodies[topicId] ?? {};
    entry[lang as Lang] = load;
    topicBodies[topicId] = entry;
  }

  return {
    meta,
    syllabus: collect(raw.syllabus, m => m.syllabus),
    topics: sortedTopics(raw.topicMeta),
    topicBodies,
    terms: collect(raw.terms, m => m.terms),
    formulas: collect(raw.formulas, m => m.formulas),
    questions: collect(raw.questions, m => m.questions),
    cases: collect(raw.cases, m => m.cases),
    papers: collect(raw.papers, m => m.papers),
    pastPapers: collect(raw.pastPapers, m => m.pastPapers),
    assignments: collect(raw.assignments, m => m.assignments),
    // Only the id, the audio and the questions reach the pack: the script of the recording stays in its content file.
    listening: Object.values(raw.listening).map(module => ({ id: module.track.id, audio: module.track.audio, questionIds: module.track.questionIds })),
    sims: simsForSubject(meta.id, raw.sims),
  };
}

export function buildTopicIndex(raw: RawTopicIndex): TopicIndex {
  const bodies: TopicIndex['bodies'] = {};
  for (const path of Object.keys(raw.topicBody)) {
    const match = BODY_FILE.exec(path);
    if (!match) continue;
    const [, topicId, lang] = match;
    const entry = bodies[topicId] ?? { en: false, ru: false };
    entry[lang as Lang] = true;
    bodies[topicId] = entry;
  }
  return {
    topics: sortedTopics(raw.topicMeta),
    pastPapers: collect(raw.pastPapers, m => m.pastPapers),
    bodies,
  };
}
