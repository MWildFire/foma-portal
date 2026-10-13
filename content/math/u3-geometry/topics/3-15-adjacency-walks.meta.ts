import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-15-adjacency-walks',
  subject: 'math',
  code: '3.15',
  title: { en: 'Adjacency matrices and walks', ru: 'Матрицы смежности и маршруты' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 40,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can write the adjacency matrix of a graph or a directed graph from its edges or arcs',
      ru: 'Могу записать матрицу смежности графа или ориентированного графа по его рёбрам или дугам',
    },
    {
      en: 'I can count the walks of length k between two vertices, and the walks of length at most k, using matrix powers',
      ru: 'Могу посчитать маршруты длины k между двумя вершинами и маршруты длины не более k, используя степени матрицы',
    },
    {
      en: 'I can build the transition matrix of a strongly connected graph and use its powers for probabilities after n steps',
      ru: 'Могу построить матрицу переходов сильно связного графа и использовать её степени для вероятностей через n шагов',
    },
  ],
  termIds: ['adjacency-matrix', 'graph-walk', 'walk-count-matrix-power', 'transition-matrix-graph'],
  formulaIds: ['walk-count-power', 'walk-count-at-most-k', 'walk-transition-matrix', 'walk-n-step-probability'],
  sims: ['math.adjacency-lab'],
  questionIds: ['q-3-15-01', 'q-3-15-02', 'q-3-15-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 3.15',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
