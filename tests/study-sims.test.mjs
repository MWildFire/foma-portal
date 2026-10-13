import test from 'node:test';
import assert from 'node:assert/strict';
import { collectSims, countSims, findSim, isFixturePack, wantsExample } from '../src/components/sims/catalog.ts';

const L = en => ({ en, ru: `${en} (ru)` });
const load = name => () => Promise.resolve({ default: () => name });
const topic = (id, code, sims) => ({ id, code, title: L(`Topic ${id}`), sims });

const ECON = {
  meta: { id: 'econ', title: L('Economics HL'), color: 'amber' },
  topics: [topic('elasticity', '2.4', ['econ.elasticity', 'econ.supply-demand']), topic('markets', '2.1', ['econ.supply-demand']), topic('plain', '1.1')],
  sims: { 'econ.supply-demand': load('sd'), 'econ.elasticity': load('el') },
};
const GEO = {
  meta: { id: 'geo', title: L('Geography SL'), color: 'teal' },
  topics: [topic('rivers', 'core-1', ['geo.river-basin'])],
  sims: { 'geo.river-basin': load('rb') },
};
const MATH = { meta: { id: 'math', title: L('Mathematics'), color: 'indigo' }, topics: [], sims: {} };
const EXAMPLE = {
  meta: { id: '_example', title: L('Example subject'), color: 'slate' },
  topics: [topic('example-topic', 'EX.1', ['_example.demo'])],
  sims: { '_example.demo': load('demo') },
};

test('the gallery lists the simulations of every subject, grouped by subject in the order of the packs', () => {
  const groups = collectSims([GEO, MATH, ECON], false);
  assert.deepEqual(groups.map(group => group.subject), ['geo', 'econ'], 'a subject without simulations is left out');
  assert.deepEqual(groups[1].sims.map(sim => sim.id), ['econ.elasticity', 'econ.supply-demand'], 'A-Z inside a subject');
  assert.equal(groups[1].color, 'amber');
  assert.equal(countSims(groups), 3);
});

test('each simulation links to the topics whose `sims` field includes it', () => {
  const groups = collectSims([ECON, GEO], false);
  const sd = findSim(groups, 'econ.supply-demand');
  assert.deepEqual(sd.topics.map(item => [item.subject, item.id, item.code]), [['econ', 'elasticity', '2.4'], ['econ', 'markets', '2.1']]);
  assert.deepEqual(findSim(groups, 'econ.elasticity').topics.map(item => item.id), ['elasticity']);
  assert.deepEqual(findSim(groups, 'geo.river-basin').topics.map(item => item.id), ['rivers']);
});

test('a simulation that no topic uses has an empty topic list', () => {
  const lonely = { ...GEO, topics: [], sims: { 'geo.lonely': load('x') } };
  assert.deepEqual(findSim(collectSims([lonely], false), 'geo.lonely').topics, []);
});

test('a topic of another subject can use a simulation too', () => {
  const geo = { ...GEO, topics: [...GEO.topics, topic('trade', 'x.1', ['econ.elasticity'])] };
  const found = findSim(collectSims([geo, ECON], false), 'econ.elasticity');
  assert.deepEqual(found.topics.map(item => `${item.subject}/${item.id}`), ['geo/trade', 'econ/elasticity']);
});

test('the example subject is hidden unless the address says ?include=example', () => {
  assert.deepEqual(collectSims([GEO, EXAMPLE], false).map(group => group.subject), ['geo']);
  assert.equal(findSim(collectSims([GEO, EXAMPLE], false), '_example.demo'), undefined);
  const withExample = collectSims([GEO, EXAMPLE], true);
  assert.deepEqual(withExample.map(group => group.subject), ['geo', '_example']);
  assert.equal(findSim(withExample, '_example.demo').topics[0].id, 'example-topic');
});

test('the include switch reads ?include=example, also in a list, and ignores everything else', () => {
  const read = search => wantsExample(new URLSearchParams(search));
  assert.equal(read('include=example'), true);
  assert.equal(read('include=Example'), true);
  assert.equal(read('include=foo,example'), true);
  assert.equal(read('include=examples'), false);
  assert.equal(read('include='), false);
  assert.equal(read(''), false);
  assert.equal(read('sim=_example.demo'), false);
  assert.equal(isFixturePack('_example'), true);
  assert.equal(isFixturePack('geo'), false);
});

test('no simulations anywhere gives an empty gallery, and unknown ids are not found', () => {
  assert.deepEqual(collectSims([], false), []);
  assert.deepEqual(collectSims([MATH, { ...ECON, sims: {} }], false), []);
  assert.equal(countSims([]), 0);
  assert.equal(findSim(collectSims([GEO], false), 'geo.nope'), undefined);
});

test('an entry that is not a loader function is ignored', () => {
  const broken = { ...GEO, sims: { 'geo.ok': load('ok'), 'geo.bad': undefined, 'geo.worse': 'text' } };
  assert.deepEqual(collectSims([broken], false)[0].sims.map(sim => sim.id), ['geo.ok']);
});
