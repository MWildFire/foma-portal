import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'text-article',
  subject: 'fr',
  code: 'P1.article',
  title: { en: 'Writing: article', ru: 'Письмо: статья (article)' },
  papers: ['P1'],
  order: 12,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can write a headline and a chapeau that present the subject in a few sentences', ru: 'Могу написать заголовок и вступление (chapeau), которые кратко представляют тему' },
    { en: 'I can describe a problem with examples and explain its causes and the people involved', ru: 'Могу описать проблему на примерах и объяснить её причины и тех, кто в ней участвует' },
    { en: 'I can quote an expert and attribute the words in a neutral way (selon, explique)', ru: 'Могу процитировать эксперта и передать его слова нейтрально (selon, explique)' },
    { en: 'I can keep a neutral third-person style with on and the passive', ru: 'Могу сохранять нейтральный стиль от третьего лица, используя on и страдательный залог' },
  ],
  termIds: [],
  questionIds: ['p1-article', 'p1-article-q1', 'p1-article-q2'],
  sources: [{ kind: 'own', title: "Authors' French B material (2026)" }],
};

export default topic;
