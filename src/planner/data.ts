// App-only loader: the two JSON files and the subject packs, shaped for the planner.
// The pure planner modules never import this file (Node's test runner cannot load JSON or import.meta.glob).
import examsJson from '../../data/exams.json';
import quotasJson from '../../data/plan-quotas.json';
import { listSubjects } from '../content/registry';
import type { PastPaperRef } from '../contract/types';
import { parseExams, parseQuotas } from './calendar';
import type { ExamsFile, PlannerSubject, QuotasFile } from './types';

export const EXAMS: ExamsFile = parseExams(examsJson);
export const QUOTAS: QuotasFile = parseQuotas(quotasJson);

let cached: PlannerSubject[] | null = null;

// Every subject's past papers, for the links of the timed sittings and the Geography practice (none until the content has them).
export function plannerPastPapers(): PastPaperRef[] {
  return listSubjects().flatMap(pack => pack.pastPapers);
}

// What the planner needs from every subject pack. Packs are fixed at build time, so this is computed once.
export function plannerSubjects(): PlannerSubject[] {
  if (cached) return cached;
  cached = listSubjects().map(pack => ({
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
  }));
  return cached;
}
