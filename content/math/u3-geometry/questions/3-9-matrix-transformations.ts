import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-3-9-01',
    subject: 'math',
    topicIds: ['3-9-matrix-transformations'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The point P(4, 1) is rotated anticlockwise through 60° about the origin O to give the point P′. Find the coordinates of P′, giving each coordinate correct to 3 decimal places.',
      ru: 'Точка P(4, 1) поворачивается против часовой стрелки на 60° вокруг начала координат O и переходит в точку P′. Найдите координаты P′, каждую с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: rotation matrix with cos 60° = 0.5 and sin 60° = 0.866, so the rows are (0.5, −0.866) and (0.866, 0.5). M1: multiply by (4, 1): x′ = 4(0.5) − 0.866(1) = 1.134 and y′ = 4(0.866) + 1(0.5) = 3.964. A1: P′(1.134, 3.964).',
      ru: 'M1: матрица поворота с cos 60° = 0,5 и sin 60° = 0,866, то есть строки (0,5; −0,866) и (0,866; 0,5). M1: умножение на (4, 1): x′ = 4(0,5) − 0,866(1) = 1,134 и y′ = 4(0,866) + 1(0,5) = 3,964. A1: P′(1,134; 3,964).',
    },
    answer: '1.134; 3.964',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-3-9-02',
    subject: 'math',
    topicIds: ['3-9-matrix-transformations'],
    paper: 'P1',
    marks: 4,
    command: 'Find, Hence',
    prompt: {
      en: 'The transformation of the plane with matrix A = [[3, −1], [2, 2]] maps a region R of area 4 square units onto a region R′. Find det A and hence the area of R′.',
      ru: 'Преобразование плоскости с матрицей A = [[3, −1], [2, 2]] переводит область R площадью 4 квадратные единицы в область R′. Найдите det A и с его помощью площадь R′.',
    },
    markscheme: {
      en: 'M1: det A = 3(2) − (−1)(2). A1: det A = 8. M1: area of R′ = |det A| × 4. A1: 32 square units.',
      ru: 'M1: det A = 3(2) − (−1)(2). A1: det A = 8. M1: площадь R′ = |det A| × 4. A1: 32 квадратные единицы.',
    },
    answer: '8; 32',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-3-9-03',
    subject: 'math',
    topicIds: ['3-9-matrix-transformations'],
    paper: 'P2',
    marks: 14,
    command: 'Write down, Show that',
    prompt: {
      en: 'A transformation T of the plane is the composition of two transformations: first a rotation R through 90° anticlockwise about the origin O, then a stretch S with scale factor 3 parallel to the y-axis.\n\n(a) Write down the matrices of R and S, and show that the matrix of T is M = [[0, −1], [3, 0]]. [3]\n\n(b) Find the image of the point P(2, 5) under T. [2]\n\n(c) The unit square with vertices O(0, 0), A(1, 0), B(1, 1) and C(0, 1) is transformed by T. Find the area of its image. [2]\n\n(d) Find the coordinates of the point Q such that T(Q) = (6, −9). [3]\n\n(e) A second transformation U has matrix N = [[k, 1], [2, 1]], where k is a constant. Find the values of k for which the image of the unit square under U has area 5 square units. [4]',
      ru: 'Преобразование T плоскости является композицией двух преобразований: сначала поворот R на 90° против часовой стрелки вокруг начала координат O, затем растяжение S с коэффициентом 3 вдоль оси y.\n\n(a) Запишите матрицы R и S и покажите, что матрица T равна M = [[0, −1], [3, 0]]. [3]\n\n(b) Найдите образ точки P(2, 5) при преобразовании T. [2]\n\n(c) Единичный квадрат с вершинами O(0, 0), A(1, 0), B(1, 1) и C(0, 1) переводится преобразованием T. Найдите площадь его образа. [2]\n\n(d) Найдите координаты точки Q, для которой T(Q) = (6, −9). [3]\n\n(e) Второе преобразование U имеет матрицу N = [[k, 1], [2, 1]], где k — постоянная. Найдите значения k, при которых образ единичного квадрата при U имеет площадь 5 квадратных единиц. [4]',
    },
    markscheme: {
      en: '(a) M1: R = [[0, −1], [1, 0]] and S = [[1, 0], [0, 3]]. M1: the matrix of T is S R, since R acts first. A1: S R = [[0, −1], [3, 0]] (AG).\n(b) M1: M(2, 5) = (0(2) + (−1)(5), 3(2) + 0(5)). A1: image (−5, 6).\n(c) M1: area of image = |det M| × 1. A1: |det M| = |0 × 0 − (−1)(3)| = 3.\n(d) M1: M(x, y) = (6, −9) gives −y = 6 and 3x = −9 (or use the inverse matrix). A1: x = −3 and y = −6, so Q(−3, −6).\n(e) M1: det N = k − 2. M1: |k − 2| = 5. A1: k = −3 or k = 7.',
      ru: '(a) M1: R = [[0, −1], [1, 0]] и S = [[1, 0], [0, 3]]. M1: матрица T равна S R, так как первым действует R. A1: S R = [[0, −1], [3, 0]] (AG).\n(b) M1: M(2, 5) = (0(2) + (−1)(5), 3(2) + 0(5)). A1: образ (−5, 6).\n(c) M1: площадь образа = |det M| × 1. A1: |det M| = |0 × 0 − (−1)(3)| = 3.\n(d) M1: M(x, y) = (6, −9) даёт −y = 6 и 3x = −9 (или используйте обратную матрицу). A1: x = −3 и y = −6, то есть Q(−3, −6).\n(e) M1: det N = k − 2. M1: |k − 2| = 5. A1: k = −3 или k = 7.',
    },
    answer: '-5; 6; 3; -3; -6; -3; 7',
    origin: 'original',
    minutes: 14,
  },
];
