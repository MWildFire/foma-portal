import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 1.14',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'matrix-order',
    term: { en: 'order of a matrix', ru: 'порядок матрицы (order of a matrix)' },
    def: {
      en: 'The size of a matrix, given as rows by columns: an $m \\times n$ matrix has $m$ rows and $n$ columns. The element $a_{ij}$ is in row $i$ and column $j$.',
      ru: 'Размер матрицы, записанный как строки на столбцы: матрица $m \\times n$ имеет $m$ строк и $n$ столбцов. Элемент $a_{ij}$ стоит в строке $i$ и столбце $j$.',
    },
    syllabus: '1.14',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Rows come first: a 2 × 3 matrix has 2 rows and 3 columns.',
      ru: 'Сначала строки: матрица 2 × 3 имеет 2 строки и 3 столбца.',
    },
  },
  {
    id: 'determinant-2x2',
    term: { en: 'determinant of a 2 × 2 matrix', ru: 'определитель матрицы 2 × 2 (determinant of a 2 × 2 matrix)' },
    def: {
      en: 'For $A=\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the number $\\det A = ad - bc$. It is zero exactly when $A$ has no inverse.',
      ru: 'Для $A=\\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ число $\\det A = ad - bc$. Оно равно нулю тогда и только тогда, когда у $A$ нет обратной матрицы.',
    },
    syllabus: '1.14',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Subtract the product bc from ad. Do not add it.',
      ru: 'Из произведения ad вычитается произведение bc, а не прибавляется.',
    },
  },
  {
    id: 'inverse-matrix',
    term: { en: 'inverse matrix', ru: 'обратная матрица (inverse matrix)' },
    def: {
      en: 'The matrix $A^{-1}$ with $AA^{-1} = A^{-1}A = I$. It exists only when $\\det A \\neq 0$; a matrix with zero determinant is called singular.',
      ru: 'Матрица $A^{-1}$, для которой $AA^{-1} = A^{-1}A = I$. Она существует только при $\\det A \\neq 0$; матрица с нулевым определителем называется вырожденной (singular).',
    },
    syllabus: '1.14',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Check the determinant first. If it is zero there is no inverse, and the factor $\\dfrac{1}{ad-bc}$ cannot be used.',
      ru: 'Сначала проверьте определитель. Если он равен нулю, обратной матрицы нет, и множитель $\\dfrac{1}{ad-bc}$ применять нельзя.',
    },
  },
  {
    id: 'identity-matrix',
    term: { en: 'identity matrix', ru: 'единичная матрица (identity matrix)' },
    def: {
      en: 'The square matrix with 1 on the leading diagonal and 0 everywhere else. For any matrix $A$ of a suitable order, $AI = IA = A$.',
      ru: 'Квадратная матрица с единицами на главной диагонали и нулями на остальных местах. Для любой матрицы $A$ подходящего порядка $AI = IA = A$.',
    },
    syllabus: '1.14',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
