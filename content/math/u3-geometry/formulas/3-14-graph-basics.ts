import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'graph-handshaking',
    tex: '\\sum_{v}\\deg(v)=2\\,|E|',
    name: { en: 'Sum of degrees (handshaking result)', ru: 'Сумма степеней (лемма о рукопожатиях)' },
    meaning: {
      en: 'The sum of the degrees of all vertices equals twice the number of edges, because every edge has two ends.',
      ru: 'Сумма степеней всех вершин равна удвоенному числу рёбер, потому что у каждого ребра два конца.',
    },
    when: {
      en: 'Finding the number of edges from a list of degrees, or checking whether a list of degrees is possible.',
      ru: 'Поиск числа рёбер по списку степеней или проверка, возможен ли такой список степеней.',
    },
    syllabus: '3.14',
    inBooklet: false,
    example: {
      en: 'The degrees 2, 3, 3, 3 and 1 have sum 12, so the graph has 6 edges.',
      ru: 'Степени 2, 3, 3, 3 и 1 дают в сумме 12, значит, рёбер 6.',
    },
  },
  {
    id: 'graph-complete-edges',
    tex: '|E(K_n)|=\\dfrac{n(n-1)}{2}',
    name: { en: 'Edges of a complete graph', ru: 'Число рёбер полного графа' },
    meaning: {
      en: 'A complete graph on n vertices has one edge for each pair of vertices, so n(n - 1)/2 edges.',
      ru: 'Полный граф на n вершинах имеет по одному ребру на каждую пару вершин, то есть n(n − 1)/2 рёбер.',
    },
    when: {
      en: 'Counting edges when every pair of vertices is joined, or finding the number of vertices from the number of edges.',
      ru: 'Подсчёт рёбер, когда соединена каждая пара вершин, или поиск числа вершин по числу рёбер.',
    },
    syllabus: '3.14',
    inBooklet: false,
    example: {
      en: 'A complete graph on 10 vertices has 45 edges.',
      ru: 'Полный граф на 10 вершинах имеет 45 рёбер.',
    },
  },
  {
    id: 'graph-directed-degrees',
    tex: '\\sum_{v}\\deg^{+}(v)=\\sum_{v}\\deg^{-}(v)=|E|',
    name: { en: 'Totals of out-degrees and in-degrees', ru: 'Суммы полустепеней исхода и захода' },
    meaning: {
      en: 'In a directed graph the total of the out-degrees and the total of the in-degrees are both equal to the number of arcs.',
      ru: 'В ориентированном графе сумма полустепеней исхода и сумма полустепеней захода равны числу дуг.',
    },
    when: {
      en: 'Checking the in-degrees and out-degrees of a directed graph, or finding a missing in-degree.',
      ru: 'Проверка полустепеней ориентированного графа или поиск недостающей полустепени захода.',
    },
    syllabus: '3.14',
    inBooklet: false,
    example: {
      en: 'If the out-degrees are 2, 1, 3 and 2, the graph has 8 arcs.',
      ru: 'Если полустепени исхода равны 2, 1, 3 и 2, то дуг 8.',
    },
  },
  {
    id: 'graph-tree-edges',
    tex: '|E|=|V|-1',
    name: { en: 'Edges of a tree', ru: 'Число рёбер дерева' },
    meaning: {
      en: 'A tree with V vertices has exactly V - 1 edges.',
      ru: 'Дерево с V вершинами имеет ровно V − 1 ребро.',
    },
    when: {
      en: 'Testing whether a connected graph is a tree: a tree has one edge fewer than it has vertices.',
      ru: 'Проверка, является ли связный граф деревом: у дерева на одно ребро меньше, чем вершин.',
    },
    syllabus: '3.14',
    inBooklet: false,
    example: {
      en: 'A tree on 7 vertices has 6 edges.',
      ru: 'Дерево на 7 вершинах имеет 6 рёбер.',
    },
  },
];
