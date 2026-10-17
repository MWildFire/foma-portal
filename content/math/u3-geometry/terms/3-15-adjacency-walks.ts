import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 15.2, p. 699' },
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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 15.1, p. 692' },
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
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 15.2, p. 702' },
  },
  {
    id: 'transition-matrix-graph',
    term: { en: 'transition matrix of a strongly connected graph', ru: 'матрица переходов сильно связного графа (transition matrix of a strongly connected graph)' },
    def: {
      en: 'Here a random walk chooses each outgoing arc with equal probability. With $a_{ij}$ counting arcs from $i$ to $j$, row $i$ of the row transition matrix $R$ contains the probabilities of leaving $i$; every row sums to 1. Parallel arcs to the same destination contribute separately. The booklet uses the column transition matrix $T=R^{\\mathsf T}$.',
      ru: 'Здесь случайное блуждание выбирает каждую исходящую дугу с равной вероятностью. Если $a_{ij}$ — число дуг из $i$ в $j$, строка $i$ строковой матрицы переходов $R$ содержит вероятности выхода из $i$; сумма каждой строки равна 1. Параллельные дуги в одну вершину учитываются отдельно. В книжке используется столбцовая матрица переходов $T=R^{\\mathsf T}$.',
    },
    syllabus: '3.15',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 15.2, p. 704' },
    pitfall: {
      en: 'Divide row $i$ of $A$ by its row sum (the out-degree of $i$), not by a column sum or the total arc count. A row state evolves as $q_n=q_0R^n$; a column state evolves as $s_n=(R^{\\mathsf T})^n s_0$.',
      ru: 'Делите строку $i$ матрицы $A$ на сумму этой строки (полустепень исхода $i$), а не на сумму столбца или общее число дуг. Для состояния-строки $q_n=q_0R^n$, для состояния-столбца $s_n=(R^{\\mathsf T})^n s_0$.',
    },
  },
];
