// App-only loader: the two JSON files, and the planner's view of the subjects. The pure planner modules never import
// this file (Node's test runner cannot load JSON or import.meta.glob).
import examsJson from '../../data/exams.json';
import quotasJson from '../../data/plan-quotas.json';
import termIdsBySubject from 'virtual:term-ids';
import { listSubjects, loadTopicIndexes } from '../content/registry';
import type { TopicIndex } from '../contract/pack';
import type { PastPaperRef, SubjectId } from '../contract/types';
import { parseExams, parseQuotas } from './calendar';
import type { ExamsFile, PlannerSubject, QuotasFile } from './types';

export const EXAMS: ExamsFile = parseExams(examsJson);
export const QUOTAS: QuotasFile = parseQuotas(quotasJson);

// What the planner reads from the content: every subject's topics and term ids, and every subject's past papers.
// The topic indexes are read, not the subject packs: the terms and questions are not needed to plan a day.
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

// Loads the planner's content once. The example subject is not planned, so its index is not loaded here.
export function loadPlannerContent(): Promise<PlannerContent> {
  if (loaded) return Promise.resolve(loaded);
  if (!loading) {
    loading = loadTopicIndexes(listSubjects().map(meta => meta.id)).then(indexes => {
      loaded = toPlannerContent(indexes);
      return loaded;
    });
  }
  return loading;
}

function toPlannerContent(indexes: { id: SubjectId; index: TopicIndex }[]): PlannerContent {
  return {
    subjects: indexes.map(({ id, index }) => ({
      id,
      termIds: termIdsBySubject[id] ?? [],
      topics: index.topics.map(topic => ({
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
        ready: { en: Boolean(index.bodies[topic.id]?.en), ru: Boolean(index.bodies[topic.id]?.ru) },
      })),
    })),
    pastPapers: indexes.flatMap(({ index }) => index.pastPapers),
  };
}
