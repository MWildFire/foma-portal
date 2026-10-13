import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 3.16',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'eulerian-circuit',
    term: { en: 'Eulerian circuit', ru: 'эйлеров цикл (Eulerian circuit)' },
    def: {
      en: 'A closed trail that uses every edge of a connected graph exactly once. A connected graph has one if and only if every vertex has even degree.',
      ru: 'Замкнутая цепь, которая проходит каждое ребро связного графа ровно один раз. Такой цикл есть тогда и только тогда, когда степени всех вершин чётные.',
    },
    syllabus: '3.16',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'An open Eulerian trail (not closed) needs exactly two odd vertices: it starts at one of them and ends at the other.',
      ru: 'Незамкнутая эйлерова цепь возможна, когда ровно две вершины имеют нечётную степень: она начинается в одной из них и заканчивается в другой.',
    },
  },
  {
    id: 'minimum-spanning-tree',
    term: { en: 'minimum spanning tree', ru: 'минимальное остовное дерево (minimum spanning tree)' },
    def: {
      en: 'A spanning tree, which connects every vertex with no cycles, whose total edge weight is as small as possible. The Kruskal and Prim algorithms both find one.',
      ru: 'Остовное дерево, которое соединяет все вершины без циклов и имеет наименьшую возможную сумму весов рёбер. Найти его можно алгоритмами Крускала и Прима.',
    },
    syllabus: '3.16',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    sim: 'math.mst-lab',
  },
  {
    id: 'chinese-postman-problem',
    term: { en: 'Chinese postman problem', ru: 'задача китайского почтальона (Chinese postman problem)' },
    def: {
      en: 'Find a closed route of least total weight that traverses every edge at least once. The odd vertices are paired, and the shortest routes between each pair are repeated.',
      ru: 'Найти замкнутый маршрут наименьшего суммарного веса, который проходит каждое ребро хотя бы один раз. Нечётные вершины попарно объединяют, и кратчайшие маршруты между парами проходят ещё раз.',
    },
    syllabus: '3.16',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The repeated length is the sum of shortest-route lengths, which can be less than the direct edge between two odd vertices.',
      ru: 'Добавляется сумма длин кратчайших маршрутов, которая может быть меньше длины прямого ребра между двумя нечётными вершинами.',
    },
    sim: 'math.route-lab',
  },
  {
    id: 'travelling-salesman-problem',
    term: { en: 'travelling salesman problem', ru: 'задача коммивояжёра (travelling salesman problem)' },
    def: {
      en: 'Find the Hamiltonian cycle of least total weight in a complete weighted graph. A nearest-neighbour tour gives an upper bound, and the deleted-vertex method gives a lower bound.',
      ru: 'Найти гамильтонов цикл наименьшего суммарного веса в полном взвешенном графе. Маршрут ближайшего соседа даёт верхнюю оценку, а метод удаления вершины даёт нижнюю оценку.',
    },
    syllabus: '3.16',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    sim: 'math.route-lab',
  },
];
