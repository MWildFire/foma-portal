import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-14-01',
    subject: 'math',
    topicIds: ['3-14-graph-basics'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A complete graph has 45 edges. Find the number of vertices of the graph.',
      ru: 'Полный граф имеет 45 рёбер. Найдите число вершин этого графа.',
    },
    markscheme: {
      en: 'M1: a complete graph on n vertices has n(n - 1)/2 edges. M1: n(n - 1)/2 = 45, so n² - n - 90 = 0 (or test values: n = 9 gives 36 edges, n = 10 gives 45). A1: n = 10 (reject n = -9).',
      ru: 'M1: полный граф на n вершинах имеет n(n − 1)/2 рёбер. M1: n(n − 1)/2 = 45, то есть n² − n − 90 = 0 (или перебор: n = 9 даёт 36 рёбер, n = 10 даёт 45). A1: n = 10 (значение −9 отбрасываем).',
    },
    answer: '10',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-14-02',
    subject: 'math',
    topicIds: ['3-14-graph-basics'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A directed graph has vertices P, Q, R and S. Each arc goes from one vertex to another, and there is at most one arc in each direction between two vertices. The out-degrees of P, Q, R and S are 2, 1, 3 and 2. The in-degrees of P, Q and R are 1, 3 and 2. Find the in-degree of S.',
      ru: 'Ориентированный граф имеет вершины P, Q, R и S. Каждая дуга ведёт из одной вершины в другую, и между двумя вершинами не более одной дуги в каждом направлении. Полустепени исхода вершин P, Q, R и S равны 2, 1, 3 и 2. Полустепени захода вершин P, Q и R равны 1, 3 и 2. Найдите полустепень захода вершины S.',
    },
    markscheme: {
      en: 'M1: the number of arcs is the sum of the out-degrees, 2 + 1 + 3 + 2 = 8. M1: the sum of the in-degrees is also 8, so the in-degree of S is 8 - (1 + 3 + 2). A1: in-degree of S = 2.',
      ru: 'M1: число дуг равно сумме полустепеней исхода: 2 + 1 + 3 + 2 = 8. M1: сумма полустепеней захода тоже равна 8, поэтому полустепень захода S равна 8 − (1 + 3 + 2). A1: полустепень захода S = 2.',
    },
    answer: '2',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-14-03',
    subject: 'math',
    topicIds: ['3-14-graph-basics'],
    paper: 'P2',
    marks: 14,
    command: 'Write down, Find',
    prompt: {
      en: 'Six rooms, A, B, C, D, E and F, are joined by doors. Each door joins two different rooms, and each pair of rooms has at most one door between them. The doors join the rooms as follows: A–B, A–C, B–C, B–D, C–E, D–E, D–F, E–F. This network is the graph G.\n\n(a) Write down the degree of room D, and find the sum of the degrees of the six rooms. [3]\n\n(b) Hence find the number of doors in G. [2]\n\n(c) Find the number of pairs of rooms that are not joined by a door. [3]\n\n(d) Room F and all of its doors are removed, which leaves a subgraph H of G. Find the number of doors in H. [3]\n\n(e) Show that G is not a tree. [3]',
      ru: 'Шесть комнат, A, B, C, D, E и F, соединены дверями. Каждая дверь соединяет две разные комнаты, и между любыми двумя комнатами не более одной двери. Двери соединяют комнаты так: A–B, A–C, B–C, B–D, C–E, D–E, D–F, E–F. Эта схема — граф G.\n\n(a) Запишите степень комнаты D и найдите сумму степеней всех шести комнат. [3]\n\n(b) Отсюда найдите число дверей в G. [2]\n\n(c) Найдите число пар комнат, которые не соединены дверью. [3]\n\n(d) Комната F и все её двери удаляются; остаётся подграф H графа G. Найдите число дверей в H. [3]\n\n(e) Покажите, что G не является деревом. [3]',
    },
    markscheme: {
      en: '(a) A1: deg(D) = 3 (doors BD, DE and DF). M1: sum of the degrees 2 + 3 + 3 + 3 + 3 + 2 = 16. A1: 16.\n(b) M1: the number of doors is half the sum of the degrees. A1: 16 ÷ 2 = 8 doors.\n(c) M1: there are 6 × 5 ÷ 2 = 15 pairs of rooms. M1: 8 pairs are joined by a door (part (b)). A1: 15 − 8 = 7 pairs are not joined.\n(d) M1: removing F removes its two doors, DF and EF. A1: H has 8 − 2 = 6 doors (AB, AC, BC, BD, CE, DE). R1: every door of H joins two rooms of H, so H is a subgraph of G.\n(e) M1: a tree on 6 rooms has 6 − 1 = 5 doors. R1: G has 8 doors, more than a tree allows; it also contains the cycle A–B–C–A. A1: so G is not a tree.',
      ru: '(a) A1: deg(D) = 3 (двери BD, DE и DF). M1: сумма степеней 2 + 3 + 3 + 3 + 3 + 2 = 16. A1: 16.\n(b) M1: число дверей равно половине суммы степеней. A1: 16 ÷ 2 = 8 дверей.\n(c) M1: пар комнат 6 × 5 ÷ 2 = 15. M1: пар, соединённых дверью, 8 (из пункта (b)). A1: 15 − 8 = 7 пар не соединены дверью.\n(d) M1: удаление F убирает две её двери, DF и EF. A1: в H 8 − 2 = 6 дверей (AB, AC, BC, BD, CE, DE). R1: каждая дверь H соединяет две комнаты из H, значит H — подграф G.\n(e) M1: дерево на 6 комнатах имеет 6 − 1 = 5 дверей. R1: в G 8 дверей, больше, чем у дерева; кроме того, G содержит цикл A–B–C–A. A1: поэтому G не является деревом.',
    },
    answer: '3; 16; 8; 7; 6',
    origin: 'original',
    minutes: 14,
  },
];
