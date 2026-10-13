import type { ComponentType } from 'react';
import type { CaseStudy, Formula, L, Lang, PaperGuide, PastPaperRef, Question, SimId, SubjectId, SyllabusItem, Term, TopicMeta } from './types';

// Subject folder metadata: content/<s>/meta.ts
export interface SubjectMeta { id: SubjectId; title: L; level: string; color: string; }

export type SimComponent = ComponentType<{ lang: Lang }>;

// Compiled MDX topic body (default export is the component).
export type TopicBodyModule = { default: ComponentType<Record<string, unknown>> };
export type TopicBodyLoader = () => Promise<TopicBodyModule>;
export interface TopicBodyLoaders { en?: TopicBodyLoader; ru?: TopicBodyLoader }

// Everything one subject folder contributes, collected by content/<s>/index.ts.
export interface SubjectPack {
  meta: SubjectMeta;
  syllabus: SyllabusItem[];
  topics: TopicMeta[];                            // sorted by order
  topicBodies: Record<string, TopicBodyLoaders>;  // key = topic id
  terms: Term[];
  formulas: Formula[];
  questions: Question[];
  cases: CaseStudy[];
  papers: PaperGuide[];
  pastPapers: PastPaperRef[];                     // content/<s>/**/pastpapers.ts; links and own guides only
  sims: Partial<Record<SimId, () => Promise<{ default: SimComponent }>>>;
}
