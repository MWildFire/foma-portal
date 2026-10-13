import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '2-8-transformations',
  subject: 'math',
  code: '2.8',
  title: { en: 'Transformations of graphs', ru: 'Преобразования графиков (Transformations of graphs)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 23,
  minutes: 40,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can describe a transformation of a graph: translations, reflections and stretches, with their scale factors',
      ru: 'Могу описать преобразование графика: сдвиги, отражения и растяжения, с их коэффициентами',
    },
    {
      en: 'I can find the image of a point under a combined transformation using the image rule',
      ru: 'Могу найти образ точки при составном преобразовании, пользуясь правилом образа',
    },
    {
      en: 'I can write the equation of a transformed graph and check it with a key point such as a maximum',
      ru: 'Могу записать уравнение преобразованного графика и проверить его по ключевой точке, например по максимуму',
    },
  ],
  termIds: ['function-graph-translation', 'function-graph-reflection', 'function-graph-stretch', 'function-graph-image-point'],
  formulaIds: ['function-graph-general-form', 'function-graph-image-rule', 'function-graph-reflection-rules'],
  sims: ['math.transformations-lab'],
  questionIds: ['q-2-8-01', 'q-2-8-02', 'q-2-8-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 2.8',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
