import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-10-second-derivative',
  subject: 'math',
  code: '5.10',
  title: { en: 'The second derivative', ru: 'Вторая производная' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 70,
  minutes: 35,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can find f\'\'(x) by differentiating f\'(x) and evaluate it at a given point',
      ru: 'Могу найти f\'\'(x), продифференцировав f\'(x), и вычислить её в заданной точке',
    },
    {
      en: 'I can classify a stationary point as a local maximum or minimum from the sign of f\'\'',
      ru: 'Могу определить по знаку f\'\' локальный максимум или минимум в стационарной точке',
    },
    {
      en: 'I can explain why f\'\'(a) = 0 does not decide the type of a stationary point',
      ru: 'Могу объяснить, почему f\'\'(a) = 0 не определяет тип стационарной точки',
    },
  ],
  termIds: ['second-derivative', 'second-derivative-test', 'concavity'],
  formulaIds: ['second-derivative-notation', 'second-derivative-test-rule', 'second-derivative-power'],
  sims: [],
  questionIds: ['q-5-10-01', 'q-5-10-02', 'q-5-10-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 5.10',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
