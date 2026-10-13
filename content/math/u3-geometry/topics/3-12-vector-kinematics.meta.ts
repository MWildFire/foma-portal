import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-12-vector-kinematics',
  subject: 'math',
  code: '3.12',
  title: { en: 'Vectors in kinematics', ru: 'Векторы в кинематике (Vectors in kinematics)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 37,
  minutes: 40,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can write the position of an object moving with constant velocity in two or three dimensions as r = r0 + tv',
      ru: 'Могу записать положение объекта, движущегося с постоянной скоростью на плоскости или в пространстве, как r = r0 + tv',
    },
    {
      en: 'I can find a velocity vector by differentiating each component and calculate the speed as its magnitude',
      ru: 'Могу найти вектор скорости, продифференцировав каждую компоненту, и вычислить скорость как его длину',
    },
    {
      en: 'I can test whether two moving objects collide and find when the speed of an object is at its minimum',
      ru: 'Могу проверить, столкнутся ли два движущихся объекта, и найти момент, когда скорость объекта минимальна',
    },
  ],
  termIds: ['kinematics-position-vector', 'kinematics-velocity-vector', 'kinematics-speed'],
  formulaIds: ['kinematics-constant-velocity', 'kinematics-velocity-derivative', 'kinematics-speed-magnitude'],
  sims: ['math.vector-lab'],
  questionIds: ['q-3-12-01', 'q-3-12-02', 'q-3-12-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 3.12',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
