// Shared mock scope for planning and lists; no storage writes.
import type { Question, TopicMeta } from '../contract/types.ts';
import type { ExamsFile, PlannerSubject } from '../planner/types.ts';
import { lastExamDate } from '../planner/calendar.ts';
type ScopedTopic = Pick<TopicMeta, 'id' | 'inMockScope'>;
export function filterMockTopics<T extends ScopedTopic>(topics: readonly T[], showOutside = false): T[] {
 return topics.filter(t => showOutside || t.inMockScope !== 'no');
}
export function questionInMock(question: Pick<Question,'topicIds'|'inMockScope'>, topics: readonly ScopedTopic[]): boolean {
 return question.inMockScope !== 'no' && !question.topicIds.some(id => topics.some(t => t.id === id && t.inMockScope === 'no'));
}
export function filterMockSets<T extends {questionIds: readonly string[]}>(sets: readonly T[], questions: readonly Question[], topics: readonly ScopedTopic[], showOutside=false): T[] {
 if(showOutside) return [...sets];
 const excluded = new Set(questions.filter(q=>!questionInMock(q,topics)).map(q=>q.id));
 // Missing IDs stay visible in the set's explicit missing-content warning; known excluded questions block the set.
 return sets.filter(s=>!s.questionIds.some(id=>excluded.has(id)));
}
export function mockSubjects(subjects: PlannerSubject[], exams: ExamsFile, date: string): PlannerSubject[] {
 return subjects.map(s=>{
  const last=lastExamDate(exams,s.id);
  if(last && date>last) return s;
  const topics=filterMockTopics(s.topics);
  const allowed=new Set(topics.flatMap(t=>t.termIds));
  const excluded=new Set(s.topics.filter(t=>t.inMockScope==='no').flatMap(t=>t.termIds).filter(id=>!allowed.has(id)));
  return {...s,topics,termIds:s.termIds?.filter(id=>!excluded.has(id)) ?? [...allowed]};
 });
}

export function filterMockResources<T extends {id:string}>(resources: readonly T[], topics: readonly (ScopedTopic & {termIds?:string[];formulaIds?:string[]})[], field:'termIds'|'formulaIds',showOutside=false):T[]{
 if(showOutside)return [...resources];
 const allowed=new Set(topics.filter(t=>t.inMockScope!=='no').flatMap(t=>t[field]??[]));
 const excluded=new Set(topics.filter(t=>t.inMockScope==='no').flatMap(t=>t[field]??[]).filter(id=>!allowed.has(id)));
 return resources.filter(item=>!excluded.has(item.id));
}
