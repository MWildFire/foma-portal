import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'p1-method',
  subject: 'fr',
  code: 'P1.method',
  title: { en: 'Writing (P1): the method and the timing', ru: 'Письмо (P1): метод и тайминг' },
  papers: ['P1'],
  order: 6,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can explain how Paper 1 is marked (criteria A, B and C)', ru: 'Могу объяснить, как оценивается P1 (критерии A, B и C)' },
    { en: 'I can choose one of the three tasks and say why', ru: 'Могу выбрать одно из трёх заданий и объяснить, почему' },
    { en: 'I can plan a text in about 10 minutes: ideas, tu or vous, layout', ru: 'Могу составить план текста примерно за 10 минут: содержание, tu или vous, структура' },
    { en: 'I can check my text in the last 10 minutes: accents, agreements, connectors, word count', ru: 'Могу проверить текст за последние 10 минут: акценты, согласование, связки, число слов' },
  ],
  termIds: [],
  questionIds: ['p1-method-q1', 'p1-method-q2'],
  sources: [
    { kind: 'ib-guide', title: 'IB Language B guide (2018)' },
    { kind: 'own', title: "Authors' French B material (2026)" },
  ],
};

export default topic;
