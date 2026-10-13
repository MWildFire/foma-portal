import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 3.15',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'adjacency-matrix',
    term: { en: 'adjacency matrix', ru: 'матрица смежности (adjacency matrix)' },
    def: {
      en: 'A square table with one row and one column for each vertex. The entry in row $i$, column $j$ is the number of edges or arcs from vertex $i$ to vertex $j$, which is 1 or 0 for a simple graph.',
      ru: 'Квадратная таблица с одной строкой и одним столбцом на каждую вершину. Элемент в строке $i$ и столбце $j$ — число рёбер или дуг из вершины $i$ в вершину $j$; для простого графа это 1 или 0.',
    },
    syllabus: '3.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The matrix of an undirected graph is symmetric, but the matrix of a directed graph need not be. Keep the direction of each arc in mind when you fill in a row and a column.',
      ru: 'Матрица неориентированного графа симметрична, а матрица ориентированного графа может быть несимметричной. Следите за направлением каждой дуги при заполнении строки и столбца.',
    },
    sim: 'math.adjacency-lab',
  },
  {
    id: 'graph-walk',
    term: { en: 'walk', ru: 'маршрут (walk)' },
    def: {
      en: 'A sequence of vertices in which each consecutive pair is joined by an edge, or by an arc in the right direction. Its length is the number of edges used, and a walk may repeat vertices and edges.',
      ru: 'Последовательность вершин, в которой каждые две соседние вершины соединены ребром (или дугой в нужном направлении). Длина маршрута — число пройденных рёбер; маршрут может повторять вершины и рёбра.',
    },
    syllabus: '3.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A walk is not the same as a path. A path visits each vertex at most once, but a walk may go back along the same edge.',
      ru: 'Маршрут — не то же самое, что путь. Путь посещает каждую вершину не более одного раза, а маршрут может вернуться по тому же ребру.',
    },
  },
  {
    id: 'walk-count-matrix-power',
    term: { en: 'number of walks of length k', ru: 'число маршрутов длины k (number of walks of length k)' },
    def: {
      en: 'The number of walks of length $k$ from vertex $i$ to vertex $j$ is the entry in row $i$, column $j$ of the matrix power $A^{k}$, where $A$ is the adjacency matrix.',
      ru: 'Число маршрутов длины $k$ из вершины $i$ в вершину $j$ равно элементу в строке $i$ и столбце $j$ степени матрицы $A^{k}$, где $A$ — матрица смежности.',
    },
    syllabus: '3.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'transition-matrix-graph',
    term: { en: 'transition matrix of a strongly connected graph', ru: 'матрица переходов сильно связного графа (transition matrix of a strongly connected graph)' },
    def: {
      en: 'In a strongly connected directed graph, each step leaves a vertex along an arc chosen with equal probability. The matrix of one-step probabilities is found by dividing each row of the adjacency matrix by its row sum, so every row adds to 1.',
      ru: 'В сильно связном ориентированном графе на каждом шаге из вершины выходит дуга, выбранная с равной вероятностью. Матрица вероятностей за один шаг получается делением каждой строки матрицы смежности на сумму её элементов, поэтому каждая строка даёт в сумме 1.',
    },
    syllabus: '3.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Divide by the row sum (the out-degree), not by the total number of arcs. Every row of a transition matrix must add to 1.',
      ru: 'Делите на сумму строки (полустепень исхода), а не на общее число дуг. Каждая строка матрицы переходов должна давать в сумме 1.',
    },
  },
];
