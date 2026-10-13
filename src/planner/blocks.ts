// Block ids. They are the keys of `state.blocks`, so they must survive recalculation of the plan.
// Ids that carry minutes ("+25") also let the planner count finished work without a lookup table.
//
//   r:<date>                                recall of the day
//   t:<subject>/<topic>@<start>+<len>       first-pass slice: minutes [start, start+len) of the topic
//   p:<subject>/<topic>#<n>+<len>           n-th practice round of a studied topic
//   s:<subject>/<date>#<n>+<len>            free study session (subject without topics yet)
//   e:<date>/<examId>                       preparation for an exam paper on the eve of its day
//   m:<date>/<subject>/<paper>[:<set>]      timed paper, or a timed set of that paper; <date> is the day the quotas file planned it
import type { PaperId, SubjectId } from '../contract/types.ts';

export type ParsedBlockId =
  | { kind: 'recall'; date: string }
  | { kind: 'topic'; subject: SubjectId; topicId: string; start: number; len: number }
  | { kind: 'practice'; subject: SubjectId; topicId: string; seq: number; len: number }
  | { kind: 'study'; subject: SubjectId; date: string; seq: number; len: number }
  | { kind: 'paper'; date: string; examId: string }
  | { kind: 'timed'; date: string; subject: SubjectId; paper: PaperId; set?: string };

export const recallBlockId = (date: string): string => `r:${date}`;
export const topicBlockId = (subject: SubjectId, topicId: string, start: number, len: number): string =>
  `t:${subject}/${topicId}@${start}+${len}`;
export const practiceBlockId = (subject: SubjectId, topicId: string, seq: number, len: number): string =>
  `p:${subject}/${topicId}#${seq}+${len}`;
export const studyBlockId = (subject: SubjectId, date: string, seq: number, len: number): string =>
  `s:${subject}/${date}#${seq}+${len}`;
export const paperBlockId = (date: string, examId: string): string => `e:${date}/${examId}`;
export const timedBlockId = (date: string, subject: SubjectId, paper: PaperId, set?: string): string =>
  `m:${date}/${subject}/${paper}${set ? `:${set}` : ''}`;

const SUBJECT = '(geo|math|econ|cs|eng|fr)';
const NAME = '([A-Za-z0-9._-]+)';
const DATE = '(\\d{4}-\\d{2}-\\d{2})';
const PATTERNS = {
  recall: new RegExp(`^r:${DATE}$`),
  topic: new RegExp(`^t:${SUBJECT}/${NAME}@(\\d+)\\+(\\d+)$`),
  practice: new RegExp(`^p:${SUBJECT}/${NAME}#(\\d+)\\+(\\d+)$`),
  study: new RegExp(`^s:${SUBJECT}/${DATE}#(\\d+)\\+(\\d+)$`),
  paper: new RegExp(`^e:${DATE}/${NAME}$`),
  timed: new RegExp(`^m:${DATE}/${SUBJECT}/(P[123])(?::([A-Za-z0-9._-]+))?$`),
};

export function parseBlockId(id: string): ParsedBlockId | null {
  let m: RegExpExecArray | null;
  if ((m = PATTERNS.recall.exec(id))) return { kind: 'recall', date: m[1] };
  if ((m = PATTERNS.topic.exec(id))) return { kind: 'topic', subject: m[1] as SubjectId, topicId: m[2], start: Number(m[3]), len: Number(m[4]) };
  if ((m = PATTERNS.practice.exec(id))) return { kind: 'practice', subject: m[1] as SubjectId, topicId: m[2], seq: Number(m[3]), len: Number(m[4]) };
  if ((m = PATTERNS.study.exec(id))) return { kind: 'study', subject: m[1] as SubjectId, date: m[2], seq: Number(m[3]), len: Number(m[4]) };
  if ((m = PATTERNS.paper.exec(id))) return { kind: 'paper', date: m[1], examId: m[2] };
  if ((m = PATTERNS.timed.exec(id))) return { kind: 'timed', date: m[1], subject: m[2] as SubjectId, paper: m[3] as PaperId, ...(m[4] ? { set: m[4] } : {}) };
  return null;
}
