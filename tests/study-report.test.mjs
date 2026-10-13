import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import { join } from 'node:path';
import { RECENT_TOPICS, buildReport, summarizeSubject } from '../src/lib/report.ts';

// The report text comes from src/i18n/<lang>/report.json. A missing key throws, so a typo cannot pass.
const root = join(import.meta.dirname, '..', 'src', 'i18n');
function translator(lang) {
  const bundle = JSON.parse(readFileSync(join(root, lang, 'report.json'), 'utf8'));
  return (key, vars = {}) => {
    const value = key.split('.').reduce((node, part) => (node && typeof node === 'object' ? node[part] : undefined), bundle);
    assert.equal(typeof value, 'string', `report.json (${lang}) has no "${key}"`);
    return value.replace(/\{\{(\w+)\}\}/g, (_, name) => {
      assert.ok(name in vars, `"${key}" needs {{${name}}}`);
      return String(vars[name]);
    });
  };
}
const en = translator('en');
const ru = translator('ru');

const L = (en, ru = `${en} (ru)`) => ({ en, ru });
const topic = (id, order, title) => ({ id, order, title: L(title, `${title} RU`) });

const GEO = {
  meta: { id: 'geo', title: L('Geography SL', 'География SL') },
  topics: [
    topic('a', 1, 'Urban places'),
    topic('b', 2, 'Hazards'),
    topic('c', 3, 'Migration'),
    topic('d', 4, 'Rivers'),
    topic('e', 5, 'Climate'),
    topic('f', 6, 'Oceans'),
  ],
  questions: [{ id: 'q1' }, { id: 'q2' }, { id: 'q3' }, { id: 'q4' }],
  terms: [{ id: 't1' }, { id: 't2' }, { id: 't3' }, { id: 't4' }, { id: 't5' }],
};
const MATH = { meta: { id: 'math', title: L('Mathematics AI HL', 'Математика AI HL') }, topics: [], questions: [], terms: [] };

const STATE = {
  topics: {
    'geo/a': { done: '2026-10-10', rag: 'green' },
    'geo/b': { done: '2026-10-12', rag: 'amber' },
    'geo/c': { done: '2026-10-12', rag: 'red' },
    'geo/d': { done: '2026-10-11' },
    'geo/e': { rag: 'red' },
    'geo/gone': { done: '2026-10-13', rag: 'green' }, // not in the pack
    'math/x': { done: '2026-10-13', rag: 'green' },
  },
  terms: {
    'geo/t1': { box: 1, due: '2026-10-14' },
    'geo/t2': { box: 1, due: '2026-10-14' },
    'geo/t3': { box: 3, due: '2026-10-16' },
    'geo/t4': { box: 4, due: '2026-10-20' },
    'geo/gone': { box: 2, due: '2026-10-14' },
  },
  questions: {
    'geo/q1': { rating: 'right', at: '2026-10-12' },
    'geo/q2': { rating: 'wrong', at: '2026-10-12' },
    'geo/q3': { rating: 'partial', at: '2026-10-12' },
    'geo/gone': { rating: 'right', at: '2026-10-12' },
  },
};

test('a subject summary counts topics, RAG, ratings and boxes for the pack only', () => {
  const s = summarizeSubject(GEO, STATE, 'en');
  assert.deepEqual(s.topics, { done: 4, total: 6, red: 2, amber: 1, green: 1, unrated: 2 });
  assert.deepEqual(s.questions, { total: 4, rated: 3, right: 1, partial: 1, wrong: 1 });
  assert.deepEqual(s.cards, { total: 5, fresh: 1, boxes: [2, 0, 1, 1] });
  assert.equal(s.empty, false);
});

test('the three most recent topics come newest first; on the same day the later topic goes first', () => {
  assert.equal(RECENT_TOPICS, 3);
  // b and c on 12 Oct (c is later in the teaching order), d on 11 Oct, a on 10 Oct.
  assert.deepEqual(summarizeSubject(GEO, STATE, 'en').recent, ['Migration', 'Hazards', 'Rivers']);
  assert.deepEqual(summarizeSubject(GEO, STATE, 'ru').recent, ['Migration RU', 'Hazards RU', 'Rivers RU']);
});

test('fewer than three finished topics give a shorter list, and none give an empty one', () => {
  const one = summarizeSubject(GEO, { ...STATE, topics: { 'geo/f': { done: '2026-10-01' } } }, 'en');
  assert.deepEqual(one.recent, ['Oceans']);
  assert.deepEqual(summarizeSubject(GEO, { topics: {}, terms: {}, questions: {} }, 'en').recent, []);
});

test('an English report has the date, one block per subject and counts only', () => {
  const text = buildReport({ state: STATE, packs: [GEO, MATH], today: '2026-10-13', lang: 'en', t: en });
  assert.equal(text, [
    'Progress report',
    'Date: 2026-10-13 (Asia/Dubai)',
    '',
    'Geography SL',
    '- Topics done: 4 of 6',
    '- Confidence (RAG): red 2, amber 1, green 1, not rated 2',
    '- Questions rated: 3 of 4 (right 1, partial 1, wrong 1)',
    '- Flashcards by box: box 1: 2, box 2: 0, box 3: 1, box 4: 1; not started: 1',
    '- Latest topics done:',
    '  1. Migration',
    '  2. Hazards',
    '  3. Rivers',
    '',
    'Mathematics AI HL',
    '- No material in the portal for this subject yet.',
  ].join('\n'));
});

test('a Russian report uses Russian labels and Russian titles', () => {
  const text = buildReport({ state: STATE, packs: [GEO], today: '2026-10-13', lang: 'ru', t: ru });
  assert.equal(text, [
    'Отчёт о прогрессе',
    'Дата: 2026-10-13 (Asia/Dubai)',
    '',
    'География SL',
    '- Пройдено тем: 4 из 6',
    '- Уверенность (RAG): красный 2, жёлтый 1, зелёный 1, без оценки 2',
    '- Вопросов с оценкой: 3 из 4 (верно 1, частично 1, неверно 1)',
    '- Карточки по коробкам: коробка 1: 2, коробка 2: 0, коробка 3: 1, коробка 4: 1; не начаты: 1',
    '- Последние пройденные темы:',
    '  1. Migration RU',
    '  2. Hazards RU',
    '  3. Rivers RU',
  ].join('\n'));
});

test('a student who has not started gets zeros and "none yet"', () => {
  const text = buildReport({ state: { topics: {}, terms: {}, questions: {} }, packs: [GEO], today: '2026-10-13', lang: 'en', t: en });
  assert.match(text, /Topics done: 0 of 6/);
  assert.match(text, /Questions rated: 0 of 4 \(right 0, partial 0, wrong 0\)/);
  assert.match(text, /not started: 5/);
  assert.match(text, /Latest topics done: none yet/);
});

test('no packs still give a valid report, and an empty pack is one short line', () => {
  const empty = buildReport({ state: STATE, packs: [], today: '2026-10-13', lang: 'en', t: en });
  assert.equal(empty, 'Progress report\nDate: 2026-10-13 (Asia/Dubai)');
  const text = buildReport({ state: STATE, packs: [MATH], today: '2026-10-13', lang: 'en', t: en });
  assert.ok(text.endsWith('Mathematics AI HL\n- No material in the portal for this subject yet.'));
});

test('a repeated id counts once, and a missing title falls back to the other language or the id', () => {
  const pack = {
    meta: { id: 'geo', title: { en: '', ru: 'Только русский' } },
    topics: [{ id: 'a', order: 1, title: { en: '', ru: '' } }, { id: 'a', order: 1, title: L('Again') }],
    questions: [{ id: 'q1' }, { id: 'q1' }],
    terms: [{ id: 't1' }, { id: 't1' }],
  };
  const s = summarizeSubject(pack, { topics: { 'geo/a': { done: '2026-10-01' } }, terms: {}, questions: {} }, 'en');
  assert.equal(s.title, 'Только русский');
  assert.deepEqual([s.topics.total, s.questions.total, s.cards.total], [1, 1, 1]);
  assert.deepEqual(s.recent, ['a']);
});

test('the report holds only counts and topic titles: no settings, plan blocks, notes or dates of topics', () => {
  const noisy = {
    ...STATE,
    blocks: { 'geo-1': '2026-10-12' },
    settings: { accessArrangements: { extraTime: true, separateRoom: true }, dailyLoadMinutes: { sat: 270 } },
    notes: 'private diary text',
    name: 'Student Name',
  };
  const text = buildReport({ state: noisy, packs: [GEO, MATH], today: '2026-10-13', lang: 'en', t: en });
  for (const secret of ['private diary text', 'Student Name', 'extraTime', 'separateRoom', '270', 'geo-1', '[redacted]']) {
    assert.ok(!text.includes(secret), `the report must not contain "${secret}"`);
  }
  // Every line is a heading, a subject name, a bullet or a numbered topic title.
  for (const line of text.split('\n')) {
    assert.match(line, /^$|^Progress report$|^Date: \d{4}-\d{2}-\d{2} \(Asia\/Dubai\)$|^- |^ {2}\d\. |^(Geography SL|Mathematics AI HL)$/);
  }
  assert.ok(!/\d{4}-\d{2}-\d{2}/.test(text.split('\n').slice(2).join('\n')), 'only the report date is shown, not the dates of topics');
});

test('both languages have every text the report asks for', () => {
  for (const t of [en, ru]) {
    for (const key of ['heading', 'noMaterial', 'recent', 'recentNone']) t(`text.${key}`);
    t('text.date', { date: 'x' });
    t('text.topics', { done: 1, total: 2 });
    t('text.rag', { red: 1, amber: 1, green: 1, unrated: 1 });
    t('text.questions', { rated: 1, total: 2, right: 1, partial: 0, wrong: 0 });
    t('text.cards', { b1: 1, b2: 1, b3: 1, b4: 1, fresh: 1 });
  }
});
