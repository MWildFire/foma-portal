import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '2-10-log-linearisation',
  subject: 'math',
  code: '2.10',
  title: {
    en: 'Logarithmic linearisation: log-log and semi-log graphs',
    ru: 'Линеаризация логарифмами: графики log-log и semi-log',
  },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 25,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can scale very large or small numbers with logarithms and state their order of magnitude',
      ru: 'Могу с помощью логарифмов перевести очень большие или очень маленькие числа в удобный масштаб и назвать их порядок величины',
    },
    {
      en: 'I can linearise power and exponential models by taking logarithms and fit a best-fit line to the transformed data',
      ru: 'Могу линеаризовать степенные и показательные модели логарифмированием и провести прямую наилучшего приближения по преобразованным данным',
    },
    {
      en: 'I can interpret the gradient and intercept of a log-log or semi-log graph and decide which model the data follow',
      ru: 'Могу интерпретировать угловой коэффициент и отрезок графика log-log или полулогарифмического графика и решить, какой модели следуют данные',
    },
  ],
  termIds: ['log-log-graph', 'semi-log-graph', 'linearisation', 'order-of-magnitude'],
  formulaIds: ['log-power-linear', 'log-exponential-linear', 'log-laws-linearisation'],
  sims: ['math.logistic-loglog-lab'],
  questionIds: ['q-2-10-01', 'q-2-10-02', 'q-2-10-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 2.10',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
