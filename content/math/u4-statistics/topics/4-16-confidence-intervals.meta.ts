import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-16-confidence-intervals',
  subject: 'math',
  code: '4.16',
  title: { en: 'Confidence intervals for a normal mean', ru: 'Доверительные интервалы для среднего нормальной совокупности' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 57,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can choose a z or a t interval for the mean of a normal population, depending on whether σ is known',
      ru: 'Могу выбрать z- или t-интервал для среднего нормальной совокупности в зависимости от того, известна ли σ',
    },
    {
      en: 'I can calculate a confidence interval for μ with technology and round its end points correctly',
      ru: 'Могу найти доверительный интервал для μ с помощью технологий и правильно округлить его концы',
    },
    {
      en: 'I can interpret a confidence interval in context, using the correct wording about confidence and the population mean',
      ru: 'Могу интерпретировать доверительный интервал в контексте, правильно формулируя уверенность и среднее генеральной совокупности',
    },
  ],
  termIds: ['confidence-interval-mean', 'confidence-level', 'margin-of-error', 't-distribution-df'],
  formulaIds: ['ci-mean-z-known-sigma', 'ci-mean-t-unknown-sigma', 'sample-size-margin-error'],
  questionIds: ['q-4-16-01', 'q-4-16-02', 'q-4-16-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 4.16',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
