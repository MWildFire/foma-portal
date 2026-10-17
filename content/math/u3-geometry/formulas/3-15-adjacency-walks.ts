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
    tex: 'r_{ij}=\\dfrac{a_{ij}}{\\sum_{l}a_{il}}',
    name: { en: 'Transition matrix of a strongly connected digraph', ru: 'Матрица переходов сильно связного ориентированного графа (Transition matrix of a strongly connected digraph)' },
    meaning: {
      en: 'The entry r_ij of the row transition matrix R is the probability of moving from i to j when each outgoing arc is equally likely. The denominator is the row sum of A, the out-degree of i. Parallel arcs are counted separately, so distinct destinations need not be equally likely.',
      ru: 'Элемент r_ij строковой матрицы переходов R — вероятность перейти из i в j при равновероятном выборе каждой исходящей дуги. Знаменатель — сумма строки A, полустепень исхода i. Параллельные дуги учитываются отдельно, поэтому разные вершины назначения не обязаны быть равновероятны.',
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
    tex: 'P(X_{n}=j\\mid X_{0}=i)=\\left(R^{n}\\right)_{ij}',
    name: { en: 'Probability after n steps', ru: 'Вероятность через n шагов (Probability after n steps)' },
    meaning: {
      en: 'Starting at vertex i, the probability of being at vertex j after n steps is the entry in row i, column j of R^n, where R is the row transition matrix.',
      ru: 'Если начать в вершине i, вероятность оказаться в вершине j через n шагов равна элементу в строке i и столбце j матрицы R^n, где R — строковая матрица переходов.',
    },
    when: {
      en: 'For this row convention, $q_n=q_0R^n$. With column states use $s_n=(R^{\\mathsf T})^n s_0$. The booklet formula $T^n s_0=s_n$ (page 10) uses $T=R^{\\mathsf T}$, not $R$; starting at $i$ gives the probability at $j$ in entry $(j,i)$ of $T^n$.',
      ru: 'Для этой строковой записи $q_n=q_0R^n$. Для состояний-столбцов используйте $s_n=(R^{\\mathsf T})^n s_0$. Формула книжки $T^n s_0=s_n$ (стр. 10) использует $T=R^{\\mathsf T}$, а не $R$; при старте в $i$ вероятность оказаться в $j$ — элемент $(j,i)$ матрицы $T^n$.',
    },
    syllabus: '3.15',
    inBooklet: false,
    example: {
      en: 'Starting at vertex A, the probability of being at E after two steps is the entry in row A, column E of R squared.',
      ru: 'Если начать в вершине A, вероятность оказаться в E через два шага равна элементу в строке A и столбце E матрицы R в квадрате.',
    },
  },
];
