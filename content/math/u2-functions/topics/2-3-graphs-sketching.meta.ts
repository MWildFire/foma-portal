import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '2-3-graphs-sketching',
  subject: 'math',
  code: '2.3',
  title: { en: 'Graphs of functions and sketching', ru: 'Графики функций и эскизы' },
  papers: ['P1', 'P2', 'P3'],
  order: 18,
  minutes: 35,
  priority: 1,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can identify the key features of the graph of y = f(x) and label them on a sketch',
      ru: 'Могу определить ключевые точки графика y = f(x) и отметить их на эскизе',
    },
    {
      en: 'I can sketch a graph from a formula or a context, using the domain given by the context',
      ru: 'Могу построить эскиз графика по формуле или по контексту, учитывая область определения из условия',
    },
    {
      en: 'I can transfer a graph by a translation and form the sum or difference of two functions',
      ru: 'Могу перенести график сдвигом и построить график суммы или разности двух функций',
    },
  ],
  termIds: ['graph-points-of-function', 'sketch-key-features', 'translating-graph-vector', 'graph-sum-difference'],
  formulaIds: ['quadratic-vertex-x-coordinate', 'graph-sum-function', 'graph-difference-function'],
  questionIds: ['q-2-3-01', 'q-2-3-02', 'q-2-3-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 2.3',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
