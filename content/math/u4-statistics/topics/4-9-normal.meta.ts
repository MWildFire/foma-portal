import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '4-9-normal',
  subject: 'math',
  code: '4.9',
  title: { en: 'Normal distribution', ru: 'Нормальное распределение (Normal distribution)' },
  papers: ['P1', 'P2', 'P3'],
  order: 50,
  minutes: 45,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can describe the normal curve and its properties and sketch a labelled diagram',
      ru: 'Могу описать нормальную кривую и её свойства и сделать подписанный эскиз',
    },
    {
      en: 'I can calculate normal probabilities by standardising or with the GDC',
      ru: 'Могу вычислить вероятности нормального распределения стандартизацией или на калькуляторе',
    },
    {
      en: 'I can solve inverse normal problems and find the value x for a given probability',
      ru: 'Могу решать обратные задачи и находить значение x по заданной вероятности',
    },
  ],
  termIds: ['normal-bell-curve', 'normal-standardised-score', 'normal-inverse-calculation'],
  formulaIds: ['normal-standardisation-formula', 'normal-density-formula', 'normal-inverse-formula'],
  sims: ['math.normal-lab'],
  questionIds: ['q-4-9-01', 'q-4-9-02', 'q-4-9-03', 'r06-normal-poisson'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 4.9',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
