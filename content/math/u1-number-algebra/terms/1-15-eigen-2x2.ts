import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 1.15',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'characteristic-polynomial-2x2',
    term: { en: 'characteristic equation of a 2 × 2 matrix', ru: 'характеристическое уравнение матрицы 2 × 2 (characteristic equation of a 2 × 2 matrix)' },
    def: {
      en: 'The equation $\\det(A - \\lambda I) = 0$. For a $2 \\times 2$ matrix it reads $\\lambda^2 - (a+d)\\lambda + (ad - bc) = 0$, and its roots are the eigenvalues.',
      ru: 'Уравнение $\\det(A - \\lambda I) = 0$. Для матрицы $2 \\times 2$ оно имеет вид $\\lambda^2 - (a+d)\\lambda + (ad - bc) = 0$, а его корни — собственные значения.',
    },
    syllabus: '1.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The constant term is $\\det A$, and the coefficient of $\\lambda$ is minus the trace. Keep the signs.',
      ru: 'Свободный член равен $\\det A$, а коэффициент при $\\lambda$ равен минус следу матрицы. Следите за знаками.',
    },
  },
  {
    id: 'eigenvalue-2x2',
    term: { en: 'eigenvalue of a 2 × 2 matrix', ru: 'собственное значение (eigenvalue of a 2 × 2 matrix)' },
    def: {
      en: 'A number $\\lambda$ for which $A\\mathbf{v} = \\lambda\\mathbf{v}$ has a non-zero solution $\\mathbf{v}$. For a $2 \\times 2$ matrix it is a root of the characteristic equation.',
      ru: 'Число $\\lambda$, для которого уравнение $A\\mathbf{v} = \\lambda\\mathbf{v}$ имеет ненулевое решение $\\mathbf{v}$. Для матрицы $2 \\times 2$ это корень характеристического уравнения.',
    },
    syllabus: '1.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'A negative discriminant gives complex eigenvalues, and then there are no real eigenvectors.',
      ru: 'Отрицательный дискриминант даёт комплексные собственные значения, и тогда вещественных собственных векторов нет.',
    },
    sim: 'math.eigen-2x2-lab',
  },
  {
    id: 'eigenvector-2x2',
    term: { en: 'eigenvector of a 2 × 2 matrix', ru: 'собственный вектор (eigenvector of a 2 × 2 matrix)' },
    def: {
      en: 'A non-zero vector $\\mathbf{v}$ with $A\\mathbf{v} = \\lambda\\mathbf{v}$. The matrix only stretches or shrinks it, and any non-zero multiple of $\\mathbf{v}$ is also an eigenvector.',
      ru: 'Ненулевой вектор $\\mathbf{v}$, для которого $A\\mathbf{v} = \\lambda\\mathbf{v}$. Матрица лишь растягивает или сжимает его, а любое ненулевое кратное $\\mathbf{v}$ тоже является собственным вектором.',
    },
    syllabus: '1.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'diagonalisation-2x2',
    term: { en: 'diagonalisation of a 2 × 2 matrix', ru: 'диагонализация матрицы 2 × 2 (diagonalisation of a 2 × 2 matrix)' },
    def: {
      en: 'Writing $A = PDP^{-1}$, where $D$ is diagonal with the eigenvalues on its diagonal and the columns of $P$ are eigenvectors. In this topic it is possible when there are two distinct real eigenvalues.',
      ru: 'Запись $A = PDP^{-1}$, где $D$ — диагональная матрица с собственными значениями на диагонали, а столбцы $P$ — собственные векторы. В этом разделе она возможна при двух различных вещественных собственных значениях.',
    },
    syllabus: '1.15',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Keep the order consistent: the first column of $P$ must be the eigenvector for the first diagonal entry of $D$.',
      ru: 'Сохраняйте порядок: первый столбец $P$ должен быть собственным вектором для первого диагонального элемента $D$.',
    },
  },
];
