import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'det-2x2-formula',
    tex: 'A=\\begin{pmatrix}a & b\\\\ c & d\\end{pmatrix},\\quad \\det A=ad-bc',
    name: { en: 'Determinant of a 2 × 2 matrix', ru: 'Определитель матрицы 2 × 2 (Determinant of a 2 × 2 matrix)' },
    meaning: {
      en: 'The product of the leading diagonal minus the product of the other diagonal.',
      ru: 'Произведение элементов главной диагонали минус произведение элементов побочной диагонали.',
    },
    when: {
      en: 'Deciding whether a 2 × 2 matrix has an inverse, and finding that inverse by hand.',
      ru: 'Проверка, существует ли обратная матрица для матрицы 2 × 2, и её вычисление вручную.',
    },
    syllabus: '1.14',
    inBooklet: false,
    example: {
      en: 'For A = [[2, 1], [1, 1]]: det A = 2 x 1 - 1 x 1 = 1, so A has an inverse.',
      ru: 'Для A = [[2, 1], [1, 1]]: det A = 2 × 1 − 1 × 1 = 1, значит обратная матрица существует.',
    },
  },
  {
    id: 'inverse-2x2-formula',
    tex: 'A^{-1}=\\dfrac{1}{ad-bc}\\begin{pmatrix}d & -b\\\\ -c & a\\end{pmatrix},\\quad ad-bc\\neq 0',
    name: { en: 'Inverse of a 2 × 2 matrix', ru: 'Обратная матрица для матрицы 2 × 2 (Inverse of a 2 × 2 matrix)' },
    meaning: {
      en: 'Swap a and d, change the signs of b and c, then multiply by 1 over the determinant.',
      ru: 'Поменять местами a и d, сменить знаки у b и c, затем умножить на 1 / определитель.',
    },
    when: {
      en: 'Finding the inverse of a 2 × 2 matrix when its determinant is not zero.',
      ru: 'Нахождение обратной матрицы 2 × 2, если её определитель не равен нулю.',
    },
    syllabus: '1.14',
    inBooklet: false,
    example: {
      en: 'For A = [[2, 1], [1, 1]], det A = 1, so A^(-1) = [[1, -1], [-1, 2]].',
      ru: 'Для A = [[2, 1], [1, 1]] определитель равен 1, поэтому A^(-1) = [[1, -1], [-1, 2]].',
    },
  },
  {
    id: 'linear-system-solution',
    tex: 'A\\mathbf{x}=\\mathbf{b}\\quad\\Rightarrow\\quad \\mathbf{x}=A^{-1}\\mathbf{b}',
    name: { en: 'Solution of a linear system with an inverse', ru: 'Решение линейной системы с помощью обратной матрицы (Solution of a linear system with an inverse)' },
    meaning: {
      en: 'If A has an inverse, the system Ax = b has exactly one solution, x = A^(-1) b.',
      ru: 'Если у A есть обратная матрица, система Ax = b имеет ровно одно решение x = A^(-1) b.',
    },
    when: {
      en: 'Solving a system of linear equations written in matrix form when the determinant is not zero.',
      ru: 'Решение системы линейных уравнений в матричной записи при ненулевом определителе.',
    },
    syllabus: '1.14',
    inBooklet: false,
  },
  {
    id: 'matrix-product-entry',
    tex: 'c_{ij}=\\sum_{k=1}^{n} a_{ik}\\,b_{kj}',
    name: { en: 'Element of a matrix product', ru: 'Элемент произведения матриц (Element of a matrix product)' },
    meaning: {
      en: 'Element (i, j) of AB is row i of A multiplied by column j of B. If A is m × n and B is n × p, then AB is m × p.',
      ru: 'Элемент (i, j) матрицы AB равен произведению строки i матрицы A на столбец j матрицы B. Если A имеет размер m × n, а B — n × p, то AB имеет размер m × p.',
    },
    when: {
      en: 'Multiplying two matrices. The product is defined only when the number of columns of the first equals the number of rows of the second.',
      ru: 'Умножение двух матриц. Произведение определено, только если число столбцов первой матрицы равно числу строк второй.',
    },
    syllabus: '1.14',
    inBooklet: false,
    example: {
      en: 'For A = [[2, 1], [1, 1]] and B = [[1, 0], [-2, 3]], element (1, 2) of AB is 2 x 0 + 1 x 3 = 3.',
      ru: 'Для A = [[2, 1], [1, 1]] и B = [[1, 0], [-2, 3]] элемент (1, 2) матрицы AB равен 2 × 0 + 1 × 3 = 3.',
    },
  },
];
