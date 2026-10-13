import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-14-graph-basics',
  subject: 'math',
  code: '3.14',
  title: { en: 'Graph theory: basic definitions', ru: 'Теория графов: основные понятия (Graph theory: basic definitions)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 39,
  minutes: 40,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can describe a graph by its vertices, edges and adjacent vertices, and find the degree of each vertex',
      ru: 'Могу описать граф вершинами, рёбрами и смежными вершинами и найти степень каждой вершины',
    },
    {
      en: 'I can use the sum of the degrees to find the number of edges, and recognise complete graphs and trees',
      ru: 'Могу с помощью суммы степеней найти число рёбер и узнать полный граф и дерево',
    },
    {
      en: 'I can find the in-degrees and out-degrees of a directed graph, and find a subgraph after vertices are removed',
      ru: 'Могу найти полустепени захода и исхода ориентированного графа и выделить подграф после удаления вершин',
    },
  ],
  termIds: ['graph-vertex-degree', 'graph-complete', 'graph-tree', 'graph-in-out-degree'],
  formulaIds: ['graph-handshaking', 'graph-complete-edges', 'graph-directed-degrees', 'graph-tree-edges'],
  questionIds: ['q-3-14-01', 'q-3-14-02', 'q-3-14-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 3.14',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
