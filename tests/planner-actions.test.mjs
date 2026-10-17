import test from 'node:test';
import assert from 'node:assert/strict';
import { markBlockDone, setTopicRag, unmarkBlockDone } from '../src/planner/actions.ts';
import { blocksOf, dayOf, emptyState, plan } from './planner-fixtures.mjs';

const TODAY = '2026-10-14';
const slice=(topicId,start,minutes,totalMinutes,state=emptyState())=>({
 id:`t:geo/${topicId}@${start}+${minutes}`,kind:'topic',subject:'geo',topicId,start,minutes,totalMinutes,last:start+minutes===totalMinutes,date:TODAY,route:'/s/geo',
 status:state.blocks[`t:geo/${topicId}@${start}+${minutes}`]||state.topics[`geo/${topicId}`]?.done?'done':'planned',doneOn:state.blocks[`t:geo/${topicId}@${start}+${minutes}`]??state.topics[`geo/${topicId}`]?.done,
});
const geoBlocks=(state=emptyState())=>[slice('geo-t1',0,25,25,state),slice('geo-t2',0,25,40,state),slice('geo-t2',25,10,40,state)];
const topicOf = minutes => ({
  id: 'geo-t1', subject: 'geo', title: { en: 'T1', ru: 'Т1' }, order: 1, minutes, priority: 1, inMockScope: 'yes',
  papers: ['P1'], termIds: [], questionCount: 0, links: [], ready: { en: false, ru: false },
});

test('marking a block done writes blocks[<id>] with today’s date and leaves the input alone', () => {
  const state = emptyState();
  const block = geoBlocks()[1]; // geo-t2, minutes 0-25 of 40: not the end of the topic
  const next = markBlockDone(state, block, TODAY);
  assert.equal(next.blocks[block.id], TODAY);
  assert.deepEqual(state.blocks, {});
  assert.deepEqual(next.topics, {}, 'a partly covered topic is not marked done');
});

test('a topic is marked done when its last open minutes are finished', () => {
  const [t1, t2a, t2b] = geoBlocks();   // geo-t1 (25), geo-t2 0-25 and 25-35 of 40
  let state = markBlockDone(emptyState(), t1, TODAY);
  assert.deepEqual(state.topics['geo/geo-t1'], { done: TODAY }, 'a one-slice topic is done with its slice');
  state = markBlockDone(state, t2b, TODAY);
  state = markBlockDone(state, t2a, TODAY);
  assert.equal(state.topics['geo/geo-t2'], undefined, 'minutes 35-40 of geo-t2 are still open');
});

test('slices may be finished in any order; the topic is done once every minute is covered', () => {
  const subjects = [{ id: 'geo', topics: [topicOf(40)], termIds: null }];
  const slices = [slice('geo-t1',0,25,40),slice('geo-t1',25,15,40)];
  assert.deepEqual(slices.map(b => [b.start, b.minutes]), [[0, 25], [25, 15]]);
  let state = markBlockDone(emptyState(), slices[1], TODAY);
  assert.equal(state.topics['geo/geo-t1'], undefined);
  state = markBlockDone(state, slices[0], TODAY);
  assert.deepEqual(state.topics['geo/geo-t1'], { done: TODAY });
});

test('an existing done date on the topic is kept', () => {
  const state = emptyState();
  state.topics['geo/geo-t1'] = { done: '2026-10-10', rag: 'amber' };
  const next = markBlockDone(state, geoBlocks()[0], TODAY);
  assert.deepEqual(next.topics['geo/geo-t1'], { done: '2026-10-10', rag: 'amber' });
});

test('undo removes the block and the topic’s done date that it set', () => {
  let state = markBlockDone(emptyState(), geoBlocks()[0], TODAY);
  assert.deepEqual(state.topics['geo/geo-t1'], { done: TODAY });
  const done = geoBlocks(state)[0];
  assert.equal(done.status, 'done');
  state = unmarkBlockDone(state, done, TODAY);
  assert.deepEqual(state.blocks, {});
  assert.equal(state.topics['geo/geo-t1'], undefined);
});

test('undo keeps the rag and a done date set on another day', () => {
  let state = emptyState();
  state.topics['geo/geo-t1'] = { done: '2026-10-10', rag: 'red' };
  state.blocks['t:geo/geo-t1@0+25'] = TODAY;
  state = unmarkBlockDone(state, { ...geoBlocks()[0], status: 'done', doneOn: TODAY }, TODAY);
  assert.deepEqual(state.topics['geo/geo-t1'], { done: '2026-10-10', rag: 'red' });
  assert.deepEqual(state.blocks, {});

  state = emptyState();
  state.topics['geo/geo-t1'] = { done: TODAY, rag: 'green' };
  state.blocks['t:geo/geo-t1@0+25'] = TODAY;
  state = unmarkBlockDone(state, { ...geoBlocks()[0], status: 'done', doneOn: TODAY }, TODAY);
  assert.deepEqual(state.topics['geo/geo-t1'], { rag: 'green' }, 'only the done date goes');
});

test('a topic marked done on its own page can be undone from the day’s list', () => {
  const state = emptyState();
  state.topics['geo/geo-t1'] = { done: TODAY };
  const block = geoBlocks(state)[0];
  assert.equal(block.status, 'done');
  const next = unmarkBlockDone(state, block, TODAY);
  assert.equal(next.topics['geo/geo-t1'], undefined);
  assert.equal(geoBlocks(next)[0].status, 'planned');
});

test('rag is written to topics["<subject>/<topic>"].rag and can be cleared', () => {
  let state = setTopicRag(emptyState(), 'geo', 'geo-t1', 'amber');
  assert.deepEqual(state.topics['geo/geo-t1'], { rag: 'amber' });
  state = setTopicRag(state, 'geo', 'geo-t1', 'red');
  assert.equal(state.topics['geo/geo-t1'].rag, 'red');
  state = { ...state, topics: { 'geo/geo-t1': { rag: 'red', done: TODAY } } };
  state = setTopicRag(state, 'geo', 'geo-t1', null);
  assert.deepEqual(state.topics['geo/geo-t1'], { done: TODAY });
  assert.equal(setTopicRag(setTopicRag(emptyState(), 'geo', 'x', 'red'), 'geo', 'x', null).topics['geo/x'], undefined);
});

test('daily practice activities are done marks, not whole-topic completion', () => {
  const day = dayOf(plan('2026-10-24'), '2026-10-24');
  const timed = day.blocks[0];
  const recall = day.blocks[1];
  let state = markBlockDone(emptyState(), recall, '2026-10-24');
  state = markBlockDone(state, timed, '2026-10-24');
  assert.deepEqual(state.blocks, { [recall.id]: '2026-10-24', [timed.id]: '2026-10-24' });
  assert.deepEqual(state.topics, {});
  const after = dayOf(plan('2026-10-24', { state }), '2026-10-24');
  assert.equal(after.blocks.filter(b => b.status === 'done').length, 2);
});
