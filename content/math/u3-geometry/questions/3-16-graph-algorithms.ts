import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-16-01',
    subject: 'math',
    topicIds: ['3-16-graph-algorithms'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A weighted graph G has the vertices A, B, C, D and E. Its edges and weights are AB = 12, AC = 8, AD = 9, AE = 1, BC = 7, BD = 11 and CE = 4. Use Kruskal’s algorithm to find a minimum spanning tree of G. Find its total weight.',
      ru: 'Взвешенный граф G имеет вершины A, B, C, D и E. Его рёбра и веса: AB = 12, AC = 8, AD = 9, AE = 1, BC = 7, BD = 11 и CE = 4. Используя алгоритм Крускала, найдите минимальное остовное дерево графа G. Найдите его суммарный вес.',
    },
    markscheme: {
      en: 'M1: edges in order of weight: AE 1 (accept), CE 4 (accept), BC 7 (accept), AC 8 (reject, it closes the cycle A–E–C–A). M1: AD 9 (accept), which completes the tree. A1: total weight 1 + 4 + 7 + 9 = 21.',
      ru: 'M1: рёбра в порядке возрастания веса: AE 1 (принять), CE 4 (принять), BC 7 (принять), AC 8 (отклонить: замыкает цикл A–E–C–A). M1: AD 9 (принять), после чего дерево полное. A1: суммарный вес 1 + 4 + 7 + 9 = 21.',
    },
    answer: '21',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-16-02',
    subject: 'math',
    topicIds: ['3-16-graph-algorithms'],
    paper: 'P1',
    marks: 3,
    command: 'Determine',
    prompt: {
      en: 'A postman must walk along every street of a network with the vertices A, B, C, D and E. The lengths in km are AB = 2, AC = 7, AD = 12, AE = 5, BC = 10, BE = 4 and CD = 11. He starts and finishes at the same vertex, walks each street at least once, and wants the total distance as small as possible. Determine this minimum total distance in km.',
      ru: 'Почтальон должен пройти по каждой улице сети с вершинами A, B, C, D и E. Длины в км: AB = 2, AC = 7, AD = 12, AE = 5, BC = 10, BE = 4 и CD = 11. Он начинает и заканчивает маршрут в одной вершине, проходит каждую улицу хотя бы один раз и хочет, чтобы общее расстояние было как можно меньше. Определите это наименьшее общее расстояние в км.',
    },
    markscheme: {
      en: 'M1: B and C are the only vertices of odd degree. M1: the shortest route from B to C is B–A–C, of length 2 + 7 = 9, which is shorter than the direct street BC = 10. A1: the streets total 51 km, so the minimum distance is 51 + 9 = 60 km.',
      ru: 'M1: B и C — единственные вершины нечётной степени. M1: кратчайший маршрут из B в C — B–A–C, длиной 2 + 7 = 9; он короче прямой улицы BC = 10. A1: все улицы вместе дают 51 км, поэтому наименьшее расстояние равно 51 + 9 = 60 км.',
    },
    answer: '60',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-16-03',
    subject: 'math',
    topicIds: ['3-16-graph-algorithms'],
    paper: 'P2',
    marks: 14,
    command: 'Show that, State',
    prompt: {
      en: 'Graph G has the vertices A, B, C, D and E and the edges AB = 3, AC = 10, AD = 5, BC = 1, BD = 11, BE = 9 and CD = 7. Graph H is complete on the same five vertices, with AB = 11, AC = 18, AD = 3, AE = 20, BC = 8, BD = 6, BE = 5, CD = 13, CE = 10 and DE = 4.\n\n(a) Show that G has exactly four vertices of odd degree, and state them. [2]\n\n(b) Find the minimum length of a closed route that traverses every edge of G at least once. [4]\n\n(c) Use the nearest neighbour algorithm, starting at A, to find an upper bound for the weight of a Hamiltonian cycle of H. [3]\n\n(d) Use the deleted vertex algorithm, deleting A, to find a lower bound for the weight of a Hamiltonian cycle of H. [3]\n\n(e) Explain whether the bounds in parts (c) and (d) determine the minimum weight of a Hamiltonian cycle of H exactly. [2]',
      ru: 'Граф G имеет вершины A, B, C, D и E и рёбра AB = 3, AC = 10, AD = 5, BC = 1, BD = 11, BE = 9 и CD = 7. Граф H — полный граф на тех же пяти вершинах с весами AB = 11, AC = 18, AD = 3, AE = 20, BC = 8, BD = 6, BE = 5, CD = 13, CE = 10 и DE = 4.\n\n(a) Покажите, что у графа G ровно четыре вершины нечётной степени, и назовите их. [2]\n\n(b) Найдите наименьшую длину замкнутого маршрута, который проходит каждое ребро графа G хотя бы один раз. [4]\n\n(c) Используя алгоритм ближайшего соседа и начиная с A, найдите верхнюю оценку веса гамильтонова цикла графа H. [3]\n\n(d) Используя метод удаления вершины с удалением A, найдите нижнюю оценку веса гамильтонова цикла графа H. [3]\n\n(e) Объясните, определяют ли оценки из частей (c) и (d) точно минимальный вес гамильтонова цикла графа H. [2]',
    },
    markscheme: {
      en: '(a) M1: the degrees are A 3, B 4, C 3, D 3 and E 1.\nR1: A, C, D and E have odd degree, so there are exactly four vertices of odd degree.\n(b) M1: the total weight of all edges is 46.\nM1: the shortest route from A to D is the direct edge 5; the shortest route from C to E is C–B–E, 1 + 9 = 10.\nM1: so AD + CE = 15; the other pairings give 19 and 21, so 15 is the least extra weight.\nA1: route length 46 + 15 = 61.\n(c) M1: nearest neighbour from A gives A–D 3, D–E 4, E–B 5, B–C 8, C–A 18.\nM1: add the weights of the cycle.\nA1: upper bound 3 + 4 + 5 + 8 + 18 = 38.\n(d) M1: deleting A, the minimum spanning tree of B, C, D and E uses DE 4, BE 5 and BC 8, total 17.\nM1: the two cheapest edges from A are AD 3 and AB 11.\nA1: the lower bound is 17 + 3 + 11 = 31.\n(e) R1: the bounds are 31 and 38, so they do not determine the minimum exactly.\nR1: the minimum weight lies between 31 and 38.',
      ru: '(a) M1: степени равны A 3, B 4, C 3, D 3 и E 1.\nR1: A, C, D и E имеют нечётную степень, значит, таких вершин ровно четыре.\n(b) M1: суммарный вес всех рёбер равен 46.\nM1: кратчайший маршрут из A в D — прямое ребро 5; кратчайший маршрут из C в E — C–B–E, 1 + 9 = 10.\nM1: значит, AD + CE = 15; другие разбиения дают 19 и 21, поэтому наименьшая добавка равна 15.\nA1: длина маршрута 46 + 15 = 61.\n(c) M1: ближайший сосед из A даёт A–D 3, D–E 4, E–B 5, B–C 8, C–A 18.\nM1: сложить веса цикла.\nA1: верхняя оценка 3 + 4 + 5 + 8 + 18 = 38.\n(d) M1: при удалении A минимальное остовное дерево вершин B, C, D и E использует DE 4, BE 5 и BC 8, сумма 17.\nM1: два самых дешёвых ребра из A — AD 3 и AB 11.\nA1: нижняя оценка равна 17 + 3 + 11 = 31.\n(e) R1: оценки равны 31 и 38, поэтому они не определяют минимум точно.\nR1: минимальный вес лежит между 31 и 38.',
    },
    answer: '61; 38; 31',
    origin: 'original',
    minutes: 14,
  },
];
