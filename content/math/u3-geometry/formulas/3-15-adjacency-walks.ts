import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'walk-count-power',
    tex: 'w^{(k)}_{ij}=\\left(A^{k}\\right)_{ij}',
    name: { en: 'Walks of length k between two vertices', ru: 'Маршруты длины k между двумя вершинами (Walks of length k between two vertices)' },
    meaning: {
      en: 'The number of walks of length k from vertex i to vertex j is the entry in row i, column j of the matrix power A^k.',
      ru: 'Число маршрутов длины k из вершины i в вершину j равно элементу в строке i и столбце j степени матрицы A^k.',
    },
    when: {
      en: 'Counting the walks of one given length between two named vertices, for example with a matrix power.',
      ru: 'Подсчёт маршрутов одной заданной длины между двумя вершинами, например с помощью степени матрицы.',
    },
    syllabus: '3.15',
    inBooklet: false,
    example: {
      en: 'For the worked example graph, the entry in row A, column D of the cube of the adjacency matrix is 2.',
      ru: 'Для графа из разбора примера элемент в строке A и столбце D куба матрицы смежности равен 2.',
    },
  },
  {
    id: 'walk-count-at-most-k',
    tex: '\\sum_{r=1}^{k}\\left(A^{r}\\right)_{ij}',
    name: { en: 'Walks of length at most k', ru: 'Маршруты длины не более k (Walks of length at most k)' },
    meaning: {
      en: 'The number of walks of length at most k from vertex i to vertex j: add the entries in row i, column j of A, A^2, up to A^k.',
      ru: 'Число маршрутов длины не более k из вершины i в вершину j: сложите элементы в строке i и столбце j матриц A, A^2, и так далее до A^k.',
    },
    when: {
      en: 'A question asks for walks up to a given length rather than walks of one exact length.',
      ru: 'В задании спрашивают маршруты до заданной длины, а не маршруты ровно одной заданной длины.',
    },
    syllabus: '3.15',
    inBooklet: false,
    example: {
      en: 'For the worked example graph, the walks of length at most 3 from A to D number 0 + 2 + 2 = 4.',
      ru: 'Для графа из разбора примера маршрутов длины не более 3 из A в D: 0 + 2 + 2 = 4.',
    },
  },
  {
    id: 'walk-transition-matrix',
    tex: 'p_{ij}=\\dfrac{a_{ij}}{\\sum_{l}a_{il}}',
    name: { en: 'Transition matrix of a strongly connected digraph', ru: 'Матрица переходов сильно связного ориентированного графа (Transition matrix of a strongly connected digraph)' },
    meaning: {
      en: 'The probability of moving from vertex i to vertex j in one step, when every arc leaving i is equally likely. The denominator is the row sum of A, which is the out-degree of vertex i.',
      ru: 'Вероятность перейти из вершины i в вершину j за один шаг, если каждая дуга, выходящая из i, равновероятна. Знаменатель — сумма строки матрицы A, то есть полустепень исхода вершины i.',
    },
    when: {
      en: 'A random walk on a strongly connected directed graph, in which each step chooses an outgoing arc at random.',
      ru: 'Случайное блуждание по сильно связному ориентированному графу, в котором каждый шаг выбирает исходящую дугу наугад.',
    },
    syllabus: '3.15',
    inBooklet: false,
  },
  {
    id: 'walk-n-step-probability',
    tex: 'P(X_{n}=j\\mid X_{0}=i)=\\left(T^{n}\\right)_{ij}',
    name: { en: 'Probability after n steps', ru: 'Вероятность через n шагов (Probability after n steps)' },
    meaning: {
      en: 'Starting at vertex i, the probability of being at vertex j after n steps is the entry in row i, column j of T^n, where T is the transition matrix.',
      ru: 'Если начать в вершине i, вероятность оказаться в вершине j через n шагов равна элементу в строке i и столбце j матрицы T^n, где T — матрица переходов.',
    },
    when: {
      en: 'Finding the probability of a position after several steps of a random walk on a graph. The booklet gives $T^{n}s_0 = s_n$ for a state vector (page 10); a single entry of $T^{n}$ needs a vertex vector as $s_0$.',
      ru: 'Поиск вероятности положения после нескольких шагов случайного блуждания по графу. В книжке есть $T^{n}s_0 = s_n$ для вектора состояния (стр. 10); отдельный элемент $T^{n}$ получается, если взять вектор вершины как $s_0$.',
    },
    syllabus: '3.15',
    inBooklet: false,
    example: {
      en: 'Starting at vertex A, the probability of being at E after two steps is the entry in row A, column E of T squared.',
      ru: 'Если начать в вершине A, вероятность оказаться в E через два шага равна элементу в строке A и столбце E матрицы T в квадрате.',
    },
  },
];
