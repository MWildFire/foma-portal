import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-1-limits-derivative',
  subject: 'math',
  code: '5.1',
  title: { en: 'Limits and the derivative', ru: 'Предел и производная (Limits and the derivative)' },
  papers: ['P1', 'P2', 'P3'],
  order: 61,
  minutes: 35,
  priority: 1,
  inMockScope: 'no',
  outcomes: [
    {
      en: 'I can explain the limit of a function, using a table of values and the idea of getting arbitrarily close',
      ru: 'Могу объяснить предел функции, опираясь на таблицу значений и идею сколь угодно близкого приближения',
    },
    {
      en: 'I can find the gradient of a chord and show that it approaches the gradient of the curve as the step gets smaller',
      ru: 'Могу найти градиент хорды и показать, что он приближается к градиенту кривой при уменьшении шага',
    },
    {
      en: 'I can read the derivative as a rate of change and give its units',
      ru: 'Могу читать производную как скорость изменения и указывать её единицы',
    },
  ],
  termIds: ['limit-of-function', 'derivative-gradient-function', 'derivative-rate-of-change'],
  formulaIds: ['derivative-limit-definition', 'chord-gradient'],
  sims: ['math.tangent-optimisation-lab'],
  questionIds: ['q-5-1-01', 'q-5-1-02', 'q-5-1-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 5.1',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
