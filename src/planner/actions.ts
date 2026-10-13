// Changes to the progress store made from the plan. All functions return a new state and never touch their input.
import type { SubjectId } from '../contract/types.ts';
import type { GlobalState, PlanBlock, Rag, Weekday } from './types.ts';
import type { Interval } from './queue.ts';
// The .ts extensions are what Node's test runner needs; tsconfig.json does not allow them for value imports, hence the ignores.
// @ts-ignore TS5097
import { parseBlockId } from './blocks.ts';
// @ts-ignore TS5097
import { addInterval, isCovered } from './queue.ts';
// @ts-ignore TS5097
import { MAX_DAILY_LOAD } from './loads.ts';

const topicKeyOf = (block: PlanBlock): string | null =>
  block.kind === 'topic' && block.subject && block.topicId ? `${block.subject}/${block.topicId}` : null;

// True when the finished slices in `blocks` cover every minute of the topic.
function topicCovered(blocks: Record<string, string>, subject: SubjectId, topicId: string, total: number): boolean {
  let covered: Interval[] = [];
  for (const id of Object.keys(blocks)) {
    const parsed = parseBlockId(id);
    if (parsed && parsed.kind === 'topic' && parsed.subject === subject && parsed.topicId === topicId) {
      covered = addInterval(covered, parsed.start, parsed.start + parsed.len);
    }
  }
  return isCovered(covered, total);
}

// "Done" on the Today page: blocks[<id>] = today. When that finishes a topic, the topic is marked done too, so the
// subject page and the report count it.
export function markBlockDone(state: GlobalState, block: PlanBlock, today: string): GlobalState {
  const blocks = { ...state.blocks, [block.id]: today };
  const topics = { ...state.topics };
  const key = topicKeyOf(block);
  if (key && block.subject && block.topicId && block.totalMinutes && !topics[key]?.done
      && topicCovered(blocks, block.subject, block.topicId, block.totalMinutes)) {
    topics[key] = { ...topics[key], done: today };
  }
  return { ...state, blocks, topics };
}

// Undo. The topic loses the done date only if this block was what set it (same date) and the topic is no longer covered.
export function unmarkBlockDone(state: GlobalState, block: PlanBlock, today: string): GlobalState {
  const blocks = { ...state.blocks };
  delete blocks[block.id];
  const topics = { ...state.topics };
  const key = topicKeyOf(block);
  if (key && block.subject && block.topicId) {
    const entry = topics[key];
    const stillCovered = block.totalMinutes ? topicCovered(blocks, block.subject, block.topicId, block.totalMinutes) : false;
    if (entry?.done !== undefined && entry.done === (block.doneOn ?? today) && !stillCovered) {
      const { done: _done, ...rest } = entry;
      if (Object.keys(rest).length > 0) topics[key] = rest;
      else delete topics[key];
    }
  }
  return { ...state, blocks, topics };
}

// Confidence after a topic: topics["<subject>/<topic>"].rag. `null` clears it.
export function setTopicRag(state: GlobalState, subject: SubjectId, topicId: string, rag: Rag | null): GlobalState {
  const key = `${subject}/${topicId}`;
  const entry = { ...state.topics[key] };
  if (rag === null) delete entry.rag;
  else entry.rag = rag;
  const topics = { ...state.topics };
  if (Object.keys(entry).length > 0) topics[key] = entry;
  else delete topics[key];
  return { ...state, topics };
}

// The study load of one weekday, in minutes; `null` removes the override. A number equal to the usual load is kept
// as an override too: without one, each day keeps the minutes of data/plan-quotas.json, and some days there differ
// from the usual load (Fri 30 Oct and Sun 25 Oct have 240), so "120 on Fridays" must really mean 120 on every Friday.
export function setDailyLoad(state: GlobalState, day: Weekday, minutes: number | null): GlobalState {
  const dailyLoadMinutes = { ...state.settings.dailyLoadMinutes };
  if (minutes === null || !Number.isFinite(minutes)) delete dailyLoadMinutes[day];
  else dailyLoadMinutes[day] = Math.min(MAX_DAILY_LOAD, Math.max(0, Math.round(minutes)));
  return { ...state, settings: { ...state.settings, dailyLoadMinutes } };
}

export function setAccessArrangement(state: GlobalState, key: 'extraTime' | 'separateRoom', value: boolean): GlobalState {
  return { ...state, settings: { ...state.settings, accessArrangements: { ...state.settings.accessArrangements, [key]: value } } };
}
