import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '2-6-modelling-process',
  subject: 'math',
  code: '2.6',
  title: { en: 'The modelling process', ru: 'Процесс моделирования (The modelling process)' },
  papers: ['P1', 'P2', 'P3'],
  order: 21,
  minutes: 35,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can choose an appropriate model and state its parameters for a given context',
      ru: 'Могу выбрать подходящую модель для заданного контекста и назвать её параметры',
    },
    {
      en: 'I can fit a model to data with technology and use it to make predictions',
      ru: 'Могу подогнать модель к данным с помощью калькулятора и использовать её для предсказаний',
    },
    {
      en: 'I can judge whether a model is appropriate and reasonable, and state its limitations',
      ru: 'Могу оценить, подходит ли модель и разумна ли она, и назвать её ограничения',
    },
  ],
  termIds: ['mathematical-model', 'least-squares-fit', 'model-residual', 'model-extrapolation'],
  formulaIds: ['model-residual-formula', 'model-least-squares-sum', 'model-regression-slope'],
  sims: [],
  questionIds: ['q-2-6-01', 'q-2-6-02', 'q-2-6-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 2.6',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
