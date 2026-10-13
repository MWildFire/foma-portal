import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-15-01',
    subject: 'math',
    topicIds: ['3-15-adjacency-walks'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A simple graph has vertices P, Q, R and S. Its adjacency matrix, with rows and columns in the order P, Q, R, S, is\n\n$$\\begin{pmatrix} 0 & 1 & 1 & 0 \\\\ 1 & 0 & 1 & 1 \\\\ 1 & 1 & 0 & 1 \\\\ 0 & 1 & 1 & 0 \\end{pmatrix}$$\n\nFind the number of walks of length 3 from Q to S.',
      ru: 'Простой граф имеет вершины P, Q, R и S. Его матрица смежности, со строками и столбцами в порядке P, Q, R, S, равна\n\n$$\\begin{pmatrix} 0 & 1 & 1 & 0 \\\\ 1 & 0 & 1 & 1 \\\\ 1 & 1 & 0 & 1 \\\\ 0 & 1 & 1 & 0 \\end{pmatrix}$$\n\nНайдите число маршрутов длины 3 из Q в S.',
    },
    markscheme: {
      en: 'M1: uses the adjacency matrix and its cube (a matrix power), or lists the walks. M1: reads the entry in row Q, column S. A1: 5. The five walks are Q-P-Q-S, Q-R-Q-S, Q-S-Q-S, Q-P-R-S and Q-S-R-S.',
      ru: 'M1: использует матрицу смежности и её куб (степень матрицы) или перечисляет маршруты. M1: берёт элемент в строке Q и столбце S. A1: 5. Пять маршрутов: Q-P-Q-S, Q-R-Q-S, Q-S-Q-S, Q-P-R-S и Q-S-R-S.',
    },
    answer: '5',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-15-02',
    subject: 'math',
    topicIds: ['3-15-adjacency-walks'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A directed graph has vertices X, Y and Z, with arcs from X to Y, from Y to X, from Y to Z and from Z to X. Find the number of walks of length at most 3 from Y to X.',
      ru: 'Ориентированный граф имеет вершины X, Y и Z, с дугами из X в Y, из Y в X, из Y в Z и из Z в X. Найдите число маршрутов длины не более 3 из Y в X.',
    },
    markscheme: {
      en: 'M1: counts the walks of length 1, 2 and 3, from the matrix powers of the adjacency matrix or by listing. M1: the walks from Y to X are Y-X (length 1), Y-Z-X (length 2) and Y-X-Y-X (length 3). A1: 1 + 1 + 1 = 3.',
      ru: 'M1: считает маршруты длины 1, 2 и 3 (по степеням матрицы смежности или перечислением). M1: маршруты из Y в X: Y-X (длина 1), Y-Z-X (длина 2) и Y-X-Y-X (длина 3). A1: 1 + 1 + 1 = 3.',
    },
    answer: '3',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-15-03',
    subject: 'math',
    topicIds: ['3-15-adjacency-walks'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A drone moves between five depots, A, B, C, D and E. One-way roads form a directed graph with arcs from A to B, from A to C, from B to D, from C to B, from C to E, from D to A, from D to E and from E to A. Every depot can be reached from every other depot. The travel time along each road, in minutes, is: A to B 4, A to C 2, B to D 3, C to B 5, C to E 6, D to A 2, D to E 1 and E to A 3. At each depot the drone chooses one of the roads leaving that depot, each with equal probability.\n\n(a) Find the total travel time of the walk A to C to E to A. [2]\n\n(b) Find the number of walks of length 3 from A to D. [3]\n\n(c) Find the number of walks of length at most 4 from A to B. [3]\n\n(d) The drone starts at depot A. Find the probability that after 2 steps it is at depot E, giving your answer correct to 3 decimal places. [3]\n\n(e) The drone starts at depot A. Find the probability that after 3 steps it is at depot A, giving your answer correct to 3 decimal places. [3]',
      ru: 'Дрон перемещается между пятью пунктами: A, B, C, D и E. Односторонние дороги образуют ориентированный граф с дугами из A в B, из A в C, из B в D, из C в B, из C в E, из D в A, из D в E и из E в A. Из любого пункта можно попасть в любой другой. Время в пути по каждой дороге, в минутах: A → B 4, A → C 2, B → D 3, C → B 5, C → E 6, D → A 2, D → E 1 и E → A 3. В каждом пункте дрон выбирает одну из выходящих дорог, все с равной вероятностью.\n\n(a) Найдите общее время в пути (в минутах) по маршруту A → C → E → A. [2]\n\n(b) Найдите число маршрутов длины 3 из A в D. [3]\n\n(c) Найдите число маршрутов длины не более 4 из A в B. [3]\n\n(d) Дрон стартует в пункте A. Найдите вероятность того, что через 2 шага он окажется в пункте E. Ответ дайте с точностью до 3 знаков после запятой. [3]\n\n(e) Дрон стартует в пункте A. Найдите вероятность того, что через 3 шага он снова окажется в пункте A. Ответ дайте с точностью до 3 знаков после запятой. [3]',
    },
    markscheme: {
      en: '(a) M1: adds the times of the arcs A to C (2), C to E (6) and E to A (3). A1: 2 + 6 + 3 = 11 minutes.\n(b) M1: the adjacency matrix, and the entry in row A, column D of its cube. A1: 1, since the only walk is A to C to B to D.\n(c) M1: the entries in row A, column B of the matrix, its square, its cube and its fourth power: 1, 1, 0 and 2. A1: 1 + 1 + 0 + 2 = 4.\n(d) M1: transition matrix: each row of the adjacency matrix divided by its row sum (the number of roads leaving that depot). M1: the only walk of length 2 from A to E is A to C to E, with probability 1/2 × 1/2. A1: 0.250.\n(e) M1: the walks A to B to D to A and A to C to E to A, with probabilities 1/2 × 1 × 1/2 = 1/4 and 1/2 × 1/2 × 1 = 1/4. A1: total 1/2, so 0.500.',
      ru: '(a) M1: складывает времена по дугам A → C (2), C → E (6) и E → A (3). A1: 2 + 6 + 3 = 11 минут.\n(b) M1: матрица смежности и элемент в строке A и столбце D её куба. A1: 1, так как единственный маршрут — A → C → B → D.\n(c) M1: элементы в строке A и столбце B матрицы, её квадрата, куба и четвёртой степени: 1, 1, 0 и 2. A1: 1 + 1 + 0 + 2 = 4.\n(d) M1: матрица переходов: каждая строка матрицы смежности делится на сумму строки (число дорог, выходящих из пункта). M1: единственный маршрут длины 2 из A в E — A → C → E, его вероятность 1/2 × 1/2. A1: 0,250.\n(e) M1: маршруты A → B → D → A и A → C → E → A с вероятностями 1/2 × 1 × 1/2 = 1/4 и 1/2 × 1/2 × 1 = 1/4. A1: сумма 1/2, поэтому 0,500.',
    },
    answer: '11; 1; 4; 0.250; 0.500',
    origin: 'original',
    minutes: 14,
  },
];
