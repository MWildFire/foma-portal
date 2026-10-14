import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'graph-vertex-degree',
    term: { en: 'degree of a vertex', ru: 'степень вершины (degree of a vertex)' },
    def: {
      en: 'The number of edges that meet a vertex, written $\\deg(v)$. In a simple graph each edge adds 1 to the degree of each of its two end vertices.',
      ru: 'Число рёбер, инцидентных вершине, записывается $\\deg(v)$. В простом графе каждое ребро добавляет 1 к степени каждого из двух своих концов.',
    },
    syllabus: '3.14',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 15.1, p. 696' },
    pitfall: {
      en: 'Add the degrees of every vertex, including the vertices of degree 1. Leaving one out breaks the total.',
      ru: 'При сложении степеней учитывайте все вершины, включая вершины степени 1. Пропуск одной вершины нарушает сумму.',
    },
  },
  {
    id: 'graph-complete',
    term: { en: 'complete graph', ru: 'полный граф (complete graph)' },
    def: {
      en: 'A simple graph in which every pair of distinct vertices is joined by an edge. On $n$ vertices it is written $K_n$ and has $n(n - 1)/2$ edges.',
      ru: 'Простой граф, в котором каждая пара различных вершин соединена ребром. На $n$ вершинах он записывается $K_n$ и имеет $n(n - 1)/2$ рёбер.',
    },
    syllabus: '3.14',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 15.5, p. 720' },
  },
  {
    id: 'graph-tree',
    term: { en: 'tree', ru: 'дерево (tree)' },
    def: {
      en: 'A connected graph with no cycles. A tree with $n$ vertices has exactly $n - 1$ edges, and removing any one edge splits it into two parts.',
      ru: 'Связный граф без циклов. Дерево с $n$ вершинами имеет ровно $n - 1$ ребро, а удаление любого ребра разрывает его на две части.',
    },
    syllabus: '3.14',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 15.3, p. 708' },
    pitfall: {
      en: 'A graph with $n - 1$ edges that is not connected is not a tree. A tree needs both connection and no cycles.',
      ru: 'Граф с $n - 1$ рёбрами, который не связен, деревом не является. Нужны и связность, и отсутствие циклов.',
    },
  },
  {
    id: 'graph-in-out-degree',
    term: { en: 'in-degree and out-degree', ru: 'полустепень захода и полустепень исхода (in-degree and out-degree)' },
    def: {
      en: 'At a vertex of a directed graph, the in-degree counts the arcs that point into the vertex, and the out-degree counts the arcs that leave it.',
      ru: 'Для вершины ориентированного графа полустепень захода (in-degree) — число дуг, которые в неё входят, а полустепень исхода (out-degree) — число дуг, которые из неё выходят.',
    },
    syllabus: '3.14',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 15.1, p. 697' },
    pitfall: {
      en: 'The in-degree and out-degree of one vertex are not equal in general. Each arc is counted once in the total of the in-degrees and once in the total of the out-degrees.',
      ru: 'Полустепени захода и исхода одной вершины, вообще говоря, не равны. Каждая дуга учитывается один раз в сумме полустепеней захода и один раз в сумме полустепеней исхода.',
    },
  },
];
