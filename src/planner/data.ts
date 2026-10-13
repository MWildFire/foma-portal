// App-only loader: the two JSON files, and the planner's view of the subjects. The pure planner modules never import
// this file (Node's test runner cannot load JSON or import.meta.glob).
import examsJson from '../../data/exams.json';
import quotasJson from '../../data/plan-quotas.json';
import { listSubjects, loadSubjects } from '../content/registry';
import type { SubjectPack } from '../contract/pack';
import type { PastPaperRef } from '../contract/types';
import { parseExams, parseQuotas } from './calendar';
import type { ExamsFile, PlannerSubject, QuotasFile } from './types';

export const EXAMS: ExamsFile = parseExams(examsJson);
export const QUOTAS: QuotasFile = parseQuotas(quotasJson);

// What the planner reads from the content: every subject's topics and terms, and every subject's past papers.
export interface PlannerContent {
  subjects: PlannerSubject[];
  pastPapers: PastPaperRef[];
}

let loaded: PlannerContent | undefined;
let loading: Promise<PlannerContent> | undefined;

// The planner's content once it has been loaded; undefined before that.
export function getPlannerContent(): PlannerContent | undefined {
  return loaded;
}

// Loads the planner's content once. The example subject is not planned, so its pack is not loaded here.
export function loadPlannerContent(): Promise<PlannerContent> {
  if (loaded) return Promise.resolve(loaded);
  if (!loading) {
    loading = loadSubjects(listSubjects().map(meta => meta.id)).then(packs => {
      loaded = toPlannerContent(packs);
      return loaded;
    });
  }
  return loading;
}

function toPlannerContent(packs: SubjectPack[]): PlannerContent {
  return {
    subjects: packs.map(pack => ({
      id: pack.meta.id,
      termIds: pack.terms.map(term => term.id),
      topics: pack.topics.map(topic => ({
        id: topic.id,
        subject: topic.subject,
        title: topic.title,
        order: topic.order,
        minutes: topic.minutes,
        priority: topic.priority,
        inMockScope: topic.inMockScope,
        papers: topic.papers,
        termIds: topic.termIds,
        questionCount: topic.questionIds.length,
        links: topic.links ?? [],
        ready: { en: Boolean(pack.topicBodies[topic.id]?.en), ru: Boolean(pack.topicBodies[topic.id]?.ru) },
      })),
    })),
    pastPapers: packs.flatMap(pack => pack.pastPapers),
  };
}
