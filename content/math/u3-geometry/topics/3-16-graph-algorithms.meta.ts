import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-16-graph-algorithms',
  subject: 'math',
  code: '3.16',
  title: {
    en: 'Graph algorithms: Euler, Hamilton, spanning trees, postman, travelling salesman',
    ru: 'Алгоритмы на графах: эйлеровы и гамильтоновы циклы, остовы, почтальон, коммивояжёр (Graph algorithms: Euler, Hamilton, spanning trees, postman, travelling salesman)',
  },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 41,
  minutes: 60,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can decide from the vertex degrees whether a graph has an Eulerian trail or circuit, and find a Hamiltonian cycle',
      ru: 'Могу по степеням вершин определить, есть ли у графа эйлерова цепь или цикл, и найти гамильтонов цикл',
    },
    {
      en: 'I can find a minimum spanning tree with the Kruskal and Prim algorithms and state its total weight',
      ru: 'Могу найти минимальное остовное дерево алгоритмами Крускала и Прима и указать его суммарный вес',
    },
    {
      en: 'I can find the length of a Chinese postman route with up to four odd vertices, and bound a travelling salesman tour with the nearest-neighbour and deleted-vertex methods',
      ru: 'Могу найти длину маршрута китайского почтальона при числе нечётных вершин до четырёх и оценить маршрут коммивояжёра методами ближайшего соседа и удаления вершины',
    },
  ],
  termIds: ['eulerian-circuit', 'minimum-spanning-tree', 'chinese-postman-problem', 'travelling-salesman-problem'],
  formulaIds: ['handshaking-degree-sum', 'spanning-tree-edge-count', 'postman-route-length', 'deleted-vertex-bound'],
  sims: ['math.mst-lab', 'math.route-lab'],
  questionIds: ['q-3-16-01', 'q-3-16-02', 'q-3-16-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 3.16',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
