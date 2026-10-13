import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-11-vector-line',
  subject: 'math',
  code: '3.11',
  title: { en: 'Vector equation of a line', ru: 'Векторное уравнение прямой (Vector equation of a line)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 36,
  minutes: 35,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can write the vector equation of a line in two or three dimensions from a point and a direction',
      ru: 'Могу записать векторное уравнение прямой на плоскости и в пространстве по точке и направлению',
    },
    {
      en: 'I can find a direction vector from two points and test whether a given point lies on the line',
      ru: 'Могу найти направляющий вектор по двум точкам и проверить, лежит ли данная точка на прямой',
    },
    {
      en: 'I can decide whether two lines are parallel, meet or are skew, using a separate parameter for each line',
      ru: 'Могу определить, параллельны ли две прямые, пересекаются ли они или скрещиваются, используя отдельный параметр для каждой прямой',
    },
  ],
  termIds: ['vector-equation-of-line', 'direction-vector-of-line', 'vector-line-parameter'],
  formulaIds: ['vector-line-form', 'vector-line-components', 'vector-line-two-points'],
  sims: [],
  questionIds: ['q-3-11-01', 'q-3-11-02', 'q-3-11-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 3.11',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
