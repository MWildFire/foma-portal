import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-14-separation-variables',
  subject: 'math',
  code: '5.14',
  title: { en: 'Differential equations: modelling and separation of variables', ru: 'Дифференциальные уравнения: модель и разделение переменных (Differential equations: modelling and separation of variables)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 74,
  minutes: 50,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can set up a first-order differential equation from a description of a rate of change in context',
      ru: 'Могу составить дифференциальное уравнение первого порядка по описанию скорости изменения в контексте',
    },
    {
      en: 'I can solve dy/dx = f(x)g(y) by separation of variables and use an initial condition to find the constant',
      ru: 'Могу решить dy/dx = f(x)g(y) разделением переменных и найти постоянную по начальному условию',
    },
    {
      en: 'I can interpret a solution: its limit, the time to reach a given level and the range in which the model is valid',
      ru: 'Могу интерпретировать решение: предел, время достижения заданного уровня и границы применимости модели',
    },
  ],
  termIds: ['de-first-order-equation', 'de-separation-of-variables', 'de-initial-condition'],
  formulaIds: ['de-separated-form', 'de-log-integral', 'de-relaxation-solution'],
  questionIds: ['q-5-14-01', 'q-5-14-02', 'q-5-14-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 5.14',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
