import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '2-4-key-features',
  subject: 'math',
  code: '2.4',
  title: { en: 'Key features of graphs', ru: 'Ключевые точки графиков (Key features of graphs)' },
  papers: ['P1', 'P2', 'P3'],
  order: 19,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can find the intercepts of a graph and the asymptotes of a rational function',
      ru: 'Могу найти точки пересечения графика с осями и асимптоты рациональной функции',
    },
    {
      en: 'I can find maximum and minimum points, and points of intersection of two graphs, with technology',
      ru: 'Могу найти точки максимума и минимума и точки пересечения двух графиков с помощью калькулятора',
    },
    {
      en: 'I can interpret each key feature in the context of the model and check that it lies in the domain',
      ru: 'Могу объяснить каждую ключевую точку в контексте модели и проверить, что она входит в область определения',
    },
  ],
  termIds: [
    'key-feature-x-intercept',
    'key-feature-asymptote',
    'key-feature-turning-point',
    'key-feature-intersection-point',
  ],
  formulaIds: [
    'key-feature-vertical-asymptote',
    'key-feature-horizontal-asymptote',
    'key-feature-intersection-condition',
  ],
  sims: [],
  questionIds: ['q-2-4-01', 'q-2-4-02', 'q-2-4-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 2.4',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
