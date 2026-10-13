import type { TopicMeta } from '../../../src/contract/types';
import { EXAMPLE_SIM, EXAMPLE_SUBJECT } from '../ids';

const topic: TopicMeta = {
  id: 'example-topic',
  subject: EXAMPLE_SUBJECT,
  code: 'EX.1',
  title: { en: 'Example topic: demand and elasticity', ru: 'Пример темы: спрос и эластичность' },
  papers: ['P1'],
  order: 1,
  minutes: 25,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can define demand and state the law of demand', ru: 'Могу определить спрос и сформулировать закон спроса' },
    { en: 'I can calculate price elasticity of demand', ru: 'Могу рассчитать ценовую эластичность спроса' },
    { en: 'I can explain why elasticity matters for revenue', ru: 'Могу объяснить, почему эластичность важна для выручки' },
  ],
  termIds: ['demand', 'supply'],
  formulaIds: ['ped'],
  sims: [EXAMPLE_SIM],
  questionIds: ['example-q1', 'example-q2'],
  caseIds: ['example-case'],
  sources: [{ kind: 'own', title: 'Example content for authors (not a textbook)' }],
};

export default topic;
