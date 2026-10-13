import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-10-vectors',
  subject: 'math',
  code: '3.10',
  title: { en: 'Vectors', ru: 'Векторы (Vectors)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 35,
  minutes: 40,
  priority: 2,
  inMockScope: 'yes',
  outcomes: [
    {
      en: 'I can write a vector in component and unit-vector form and find its magnitude',
      ru: 'Могу записать вектор координатами и в виде i, j, k и найти его длину',
    },
    {
      en: 'I can find the vector between two points and the position vector of a midpoint',
      ru: 'Могу найти вектор между двумя точками и радиус-вектор середины отрезка',
    },
    {
      en: 'I can rescale a vector and find a unit vector in a given direction',
      ru: 'Могу умножить вектор на число и найти единичный вектор в заданном направлении',
    },
  ],
  termIds: ['vector-magnitude-direction', 'position-vector-from-origin', 'unit-vector-in-direction'],
  formulaIds: ['vector-length-3d', 'vector-ab-points', 'unit-vector-normalise', 'midpoint-position-vector'],
  questionIds: ['q-3-10-01', 'q-3-10-02', 'q-3-10-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 3.10',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
