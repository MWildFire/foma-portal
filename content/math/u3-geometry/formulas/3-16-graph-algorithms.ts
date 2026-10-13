import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'handshaking-degree-sum',
    tex: '\\sum_{v}\\deg(v)=2\\,|E|',
    name: { en: 'Handshaking lemma', ru: 'Лемма о рукопожатиях (Handshaking lemma)' },
    meaning: {
      en: 'The degrees of all vertices add up to twice the number of edges, so the number of odd-degree vertices is even.',
      ru: 'Сумма степеней всех вершин равна удвоенному числу рёбер, поэтому число вершин нечётной степени чётно.',
    },
    when: {
      en: 'Checking the degrees before applying the Eulerian or postman conditions.',
      ru: 'Проверка степеней перед применением условий Эйлера или задачи почтальона.',
    },
    syllabus: '3.16',
    inBooklet: false,
    example: {
      en: 'Degrees 3, 4, 3, 3, 1 add up to 14, so the graph has 7 edges.',
      ru: 'Степени 3, 4, 3, 3, 1 дают в сумме 14, значит, у графа 7 рёбер.',
    },
  },
  {
    id: 'spanning-tree-edge-count',
    tex: '|E_{T}|=n-1',
    name: { en: 'Edges of a spanning tree', ru: 'Число рёбер остовного дерева (Edges of a spanning tree)' },
    meaning: {
      en: 'A spanning tree of a graph with n vertices has exactly n - 1 edges.',
      ru: 'Остовное дерево графа с n вершинами имеет ровно n - 1 ребро.',
    },
    when: {
      en: 'Knowing when to stop Kruskal or Prim: stop once n - 1 edges have been accepted.',
      ru: 'Понимание, когда остановить алгоритм Крускала или Прима: остановка после принятия n - 1 ребра.',
    },
    syllabus: '3.16',
    inBooklet: false,
  },
  {
    id: 'postman-route-length',
    tex: 'L=\\sum_{e}w(e)+\\min_{\\text{pairings}}\\sum_{i}d(u_i,v_i)',
    name: { en: 'Length of a Chinese postman route', ru: 'Длина маршрута китайского почтальона (Length of a Chinese postman route)' },
    meaning: {
      en: 'The total weight of all edges plus the least total of shortest-route lengths d(u_i, v_i) over the pairings of the odd vertices. The second term is zero when there are no odd vertices.',
      ru: 'Суммарный вес всех рёбер плюс наименьшая сумма длин кратчайших маршрутов d(u_i, v_i) по всем разбиениям нечётных вершин на пары. Второе слагаемое равно нулю, если нечётных вершин нет.',
    },
    when: {
      en: 'Finding the shortest closed route that traverses every edge at least once.',
      ru: 'Поиск самого короткого замкнутого маршрута, который проходит каждое ребро хотя бы один раз.',
    },
    syllabus: '3.16',
    inBooklet: false,
    example: {
      en: 'Graph P of the worked example: total weight 36 plus the repeated weight 10 gives 46.',
      ru: 'Граф P из разбора примера: суммарный вес 36 плюс повторный вес 10 дают 46.',
    },
  },
  {
    id: 'deleted-vertex-bound',
    tex: 'L=w\\bigl(\\text{MST}(G-v)\\bigr)+w_{1}+w_{2}',
    name: { en: 'Deleted-vertex lower bound', ru: 'Нижняя оценка удалением вершины (Deleted-vertex lower bound)' },
    meaning: {
      en: 'The weight of a minimum spanning tree of the graph without vertex v, plus the two least weights of edges from v. In a complete graph this is a lower bound for the travelling salesman minimum.',
      ru: 'Вес минимального остовного дерева графа без вершины v плюс два наименьших веса рёбер из v. В полном графе это нижняя оценка минимума задачи коммивояжёра.',
    },
    when: {
      en: 'Finding a lower bound for the weight of a Hamiltonian cycle of least weight.',
      ru: 'Поиск нижней оценки веса гамильтонова цикла наименьшего веса.',
    },
    syllabus: '3.16',
    inBooklet: false,
    example: {
      en: 'Complete graph K with vertex A deleted: tree 26 plus the edges 1 and 2 gives the lower bound 29.',
      ru: 'Полный граф K без вершины A: дерево 26 плюс рёбра 1 и 2 дают нижнюю оценку 29.',
    },
  },
];
