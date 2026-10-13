import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-14-linear-transformations',
  subject: 'math',
  code: '4.14',
  title: { en: 'Linear transformations of random variables', ru: 'Линейные преобразования случайных величин (Linear transformations of random variables)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 55,
  minutes: 40,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can transform a random variable as Y = aX + b and find the mean and the variance of Y',
      ru: 'Могу преобразовать случайную величину как Y = aX + b и найти среднее и дисперсию Y',
    },
    {
      en: 'I can find the mean of a linear combination of random variables, whether or not they are independent',
      ru: 'Могу найти среднее линейной комбинации случайных величин, независимо от того, независимы ли они',
    },
    {
      en: 'I can find the variance of a linear combination of independent variables and explain why the sample mean and the sample variance with divisor n − 1 are unbiased',
      ru: 'Могу найти дисперсию линейной комбинации независимых величин и объяснить, почему выборочное среднее и выборочная дисперсия с делителем n − 1 несмещённые',
    },
  ],
  termIds: ['linear-transformation-rv', 'expected-value-linear-combination', 'variance-linear-combination-independent', 'unbiased-estimator'],
  formulaIds: ['linear-transform-mean-variance', 'linear-combination-mean', 'linear-combination-variance', 'sample-variance-n-minus-1'],
  questionIds: ['q-4-14-01', 'q-4-14-02', 'q-4-14-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.14',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
