import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '5-12-revolution-volumes',
  subject: 'math',
  code: '5.12',
  title: { en: 'Areas and volumes of revolution', ru: 'Площади и объёмы тел вращения' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 72,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can find the area between a curve and the x-axis or the y-axis for a given interval',
      ru: 'Могу найти площадь между кривой и осью x или осью y на заданном отрезке',
    },
    {
      en: 'I can find the volume of revolution about the x-axis by the disc method',
      ru: 'Могу найти объём тела вращения вокруг оси x методом дисков',
    },
    {
      en: 'I can write a curve as x in terms of y and find the volume of revolution about the y-axis',
      ru: 'Могу выразить кривую как x через y и найти объём тела вращения вокруг оси y',
    },
  ],
  termIds: ['solid-of-revolution', 'disc-method-volume', 'area-integral-y-axis'],
  formulaIds: ['revolution-area-x-axis', 'revolution-volume-x-axis', 'revolution-volume-y-axis', 'revolution-area-y-axis'],
  sims: ['math.revolution-lab'],
  questionIds: ['q-5-12-01', 'q-5-12-02', 'q-5-12-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 5.12',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
