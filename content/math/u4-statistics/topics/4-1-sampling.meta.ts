import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-1-sampling',
  subject: 'math',
  code: '4.1',
  title: { en: 'Samples, data and sampling', ru: 'Выборки, данные и отбор (Samples, data and sampling)' },
  papers: ['P1', 'P2', 'P3'],
  order: 42,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can tell a population from a sample and explain why a random sample is needed',
      ru: 'Могу отличить генеральную совокупность от выборки и объяснить, зачем нужна случайная выборка',
    },
    {
      en: 'I can classify data as discrete or continuous and spot outliers and bias in a data set',
      ru: 'Могу отнести данные к дискретным или непрерывным и найти выбросы и смещение в наборе данных',
    },
    {
      en: 'I can judge which sampling technique is effective and state the limitations of a source',
      ru: 'Могу оценить, какой метод отбора эффективен, и назвать ограничения источника данных',
    },
  ],
  termIds: ['population-and-sample', 'random-sample-technique', 'selection-bias'],
  formulaIds: ['sample-mean-estimate', 'sample-proportion-estimate'],
  questionIds: ['q-4-1-01', 'q-4-1-02', 'q-4-1-03', 'r06-data-design'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.1',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
