import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-17-phase-portraits',
  subject: 'math',
  code: '5.17',
  title: { en: 'Phase portraits of coupled linear systems', ru: 'Фазовые портреты связанных линейных систем' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 77,
  minutes: 50,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can write a coupled linear system as a matrix and find its trace, determinant and eigenvalues',
      ru: 'Могу записать связанную линейную систему в матричном виде и найти её след, определитель и собственные значения',
    },
    {
      en: 'I can classify the equilibrium point at the origin as a node, saddle, spiral or centre, and state its stability',
      ru: 'Могу определить тип точки равновесия в начале координат (узел, седло, фокус или центр) и указать её устойчивость',
    },
    {
      en: 'I can sketch a phase portrait with the eigen-directions and the direction in which trajectories move',
      ru: 'Могу нарисовать фазовый портрет с собственными направлениями и указать, в какую сторону движутся траектории',
    },
  ],
  termIds: ['phase-plane-2d', 'equilibrium-point-2d', 'saddle-point-2d', 'centre-equilibrium-2d'],
  formulaIds: ['linear-system-2d', 'trace-determinant-2d', 'eigenvalues-trace-determinant'],
  sims: ['math.phase-portrait-lab'],
  questionIds: ['q-5-17-01', 'q-5-17-02', 'q-5-17-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 5.17',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
