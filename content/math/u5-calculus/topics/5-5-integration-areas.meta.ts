import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-5-integration-areas',
  subject: 'math',
  code: '5.5',
  title: { en: 'Integration and areas under curves', ru: 'Интегрирование и площади под кривыми (Integration and areas under curves)' },
  papers: ['P1', 'P2', 'P3'],
  order: 65,
  minutes: 40,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can integrate a sum of power terms and add the constant of integration',
      ru: 'Могу проинтегрировать сумму степенных членов и добавить постоянную интегрирования',
    },
    {
      en: 'I can find the constant of integration from a boundary condition and use the curve it defines',
      ru: 'Могу найти постоянную интегрирования по граничному условию и использовать кривую, которую она определяет',
    },
    {
      en: 'I can evaluate a definite integral with technology and read it as the area under a curve above the x-axis',
      ru: 'Могу вычислить определённый интеграл с помощью технологий и истолковать его как площадь под кривой над осью x',
    },
  ],
  termIds: ['indefinite-integral', 'boundary-condition', 'definite-integral-as-area'],
  formulaIds: ['integral-power-term', 'definite-integral-evaluation', 'area-integral-x-axis', 'constant-from-boundary'],
  questionIds: ['q-5-5-01', 'q-5-5-02', 'q-5-5-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 5.5',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
