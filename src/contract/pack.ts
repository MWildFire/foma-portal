import type { ComponentType } from 'react';
import type { Assignment, CaseStudy, Formula, L, Lang, ListeningTrack, PaperGuide, PastPaperRef, Question, SimId, SubjectId, SyllabusItem, Term, TopicMeta } from './types';

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
  assignments: Assignment[];                      // content/<s>/**/assignments.ts: the teacher's tasks with due dates
  listening: ListeningTrack[];                    // content/<s>/listening/*.ts: recordings and their questions (no script)
  sims: Partial<Record<SimId, () => Promise<{ default: SimComponent }>>>;
}

// content/<s>/topic-index.ts: the light part of a subject, read on the first screen by the planner and the simulation
// gallery. It holds the topic metadata, the past-paper links and which topic bodies exist, and nothing else.
export interface TopicIndex {
  topics: TopicMeta[];                                  // sorted by order
  pastPapers: PastPaperRef[];
  bodies: Record<string, { en: boolean; ru: boolean }>; // topic id -> the MDX bodies that exist
}
