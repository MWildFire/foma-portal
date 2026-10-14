import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'char-poly-2x2',
    tex: '\\det(A-\\lambda I)=\\lambda^{2}-(a+d)\\lambda+(ad-bc)=0',
    name: { en: 'Characteristic equation of a 2 × 2 matrix', ru: 'Характеристическое уравнение матрицы 2 × 2 (Characteristic equation of a 2 × 2 matrix)' },
    meaning: {
      en: 'The coefficient of lambda is minus the trace a + d, and the constant term is the determinant ad - bc.',
      ru: 'Коэффициент при lambda равен минус следу матрицы a + d, а свободный член равен определителю ad − bc.',
    },
    when: {
      en: 'Finding the eigenvalues of a 2 × 2 matrix.',
      ru: 'Нахождение собственных значений матрицы 2 × 2.',
    },
    syllabus: '1.15',
    inBooklet: false,
    example: {
      en: 'For A = [[4, 2], [1, 3]]: trace 7 and determinant 10, so lambda^2 - 7 lambda + 10 = 0 and lambda = 5 or 2.',
      ru: 'Для A = [[4, 2], [1, 3]]: след 7 и определитель 10, поэтому λ² − 7λ + 10 = 0 и λ = 5 или λ = 2.',
    },
  },
  {
    id: 'eigenvalues-2x2-formula',
    tex: '\\lambda=\\dfrac{(a+d)\\pm\\sqrt{(a+d)^{2}-4(ad-bc)}}{2}',
    name: { en: 'Eigenvalues of a 2 × 2 matrix', ru: 'Собственные значения матрицы 2 × 2 (Eigenvalues of a 2 × 2 matrix)' },
    meaning: {
      en: 'The two roots of the characteristic equation, from the quadratic formula. The expression under the square root is the discriminant.',
      ru: 'Два корня характеристического уравнения, найденные по формуле корней квадратного уравнения. Выражение под корнем — дискриминант.',
    },
    when: {
      en: 'Solving the characteristic equation. A positive discriminant gives two distinct real eigenvalues.',
      ru: 'Решение характеристического уравнения. Положительный дискриминант даёт два различных вещественных собственных значения.',
    },
    syllabus: '1.15',
    inBooklet: false,
  },
  {
    id: 'eigen-equation',
    tex: 'A\\mathbf{v}=\\lambda\\mathbf{v},\\quad \\mathbf{v}\\neq\\mathbf{0}',
    name: { en: 'Eigenvalue equation', ru: 'Уравнение на собственные значения (Eigenvalue equation)' },
    meaning: {
      en: 'The matrix A maps the non-zero vector v to a multiple of itself, with factor lambda.',
      ru: 'Матрица A переводит ненулевой вектор v в его кратное с множителем λ.',
    },
    when: {
      en: 'Checking whether a vector is an eigenvector, or finding the eigenvector for a known eigenvalue.',
      ru: 'Проверка, является ли вектор собственным, или поиск собственного вектора для известного собственного значения.',
    },
    syllabus: '1.15',
    inBooklet: false,
  },
  {
    id: 'matrix-power-diagonal',
    tex: 'A^{n}=PD^{n}P^{-1},\\quad D^{n}=\\begin{pmatrix}\\lambda_1^{n} & 0\\\\ 0 & \\lambda_2^{n}\\end{pmatrix}',
    name: { en: 'Power of a diagonalisable matrix', ru: 'Степень диагонализуемой матрицы (Power of a diagonalisable matrix)' },
    meaning: {
      en: 'Raise each eigenvalue to the power n to get D^n, then multiply by P on the left and by P^(-1) on the right.',
      ru: 'Возведите каждое собственное значение в степень n, получите D^n, затем умножьте слева на P и справа на P^(-1).',
    },
    when: {
      en: 'Finding A^n for a large n, for example after n steps of a model.',
      ru: 'Нахождение $A^n$ при большом n, например после n шагов модели.',
    },
    syllabus: '1.15',
    inBooklet: true,
  },
];
