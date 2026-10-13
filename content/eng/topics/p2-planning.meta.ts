import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p2-planning',
  subject: 'eng',
  code: 'P2.PL',
  title: { en: 'Planning a comparison in 10 minutes', ru: 'Планирование сравнения за 10 минут' },
  papers: ['P2'],
  order: 11,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can decode a Paper 2 prompt: its command term and its key words', ru: 'Могу разобрать задание Paper 2: командное слово и ключевые слова' },
    { en: 'I can choose a pair of works that differ in the technique the prompt asks about', ru: 'Могу выбрать пару произведений, которые различаются приёмом, о котором спрашивает задание' },
    { en: 'I can write one thesis sentence that makes a claim about effect', ru: 'Могу написать один тезис, который утверждает что-то об эффекте' },
    { en: 'I can plan three comparison points, each a pair of techniques, and choose a structure', ru: 'Могу составить три пункта сравнения (каждый — пара приёмов) и выбрать структуру' },
    { en: 'I can keep the plan to 10 minutes and leave the rest of the paper for writing', ru: 'Могу уложить план в 10 минут и оставить остальное время на письмо' },
  ],
  termIds: ['narrator', 'focalisation', 'theme', 'juxtaposition', 'motif', 'tone'],
  sims: ['eng.p2-timer'],
  questionIds: ['p2-q01', 'p2-q02', 'p2-q03', 'p2-q04', 'p2-q05', 'chk-p2-planning-1', 'chk-p2-planning-2'],
  sources: [{ kind: 'own', title: 'Own wording' }],
};

export default topic;
