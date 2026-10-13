import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-14-matrices',
  subject: 'math',
  code: '1.14',
  title: { en: 'Matrices', ru: 'Матрицы (Matrices)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 14,
  minutes: 50,
  priority: 2,
  inMockScope: 'no',
  outcomes: [
    {
      en: 'I can add, subtract and multiply matrices and scale them, and state the order of a product before I multiply',
      ru: 'Могу складывать, вычитать и умножать матрицы, в том числе на число, и заранее определить порядок произведения',
    },
    {
      en: 'I can find the determinant and the inverse of a 2 × 2 matrix by hand, and use technology for larger matrices',
      ru: 'Могу вручную найти определитель и обратную матрицу для матрицы 2 × 2, а для больших матриц использовать технологии',
    },
    {
      en: 'I can solve a linear system Ax = b with an inverse matrix, and say when there is no unique solution',
      ru: 'Могу решить систему Ax = b с помощью обратной матрицы и объяснить, когда единственного решения нет',
    },
  ],
  termIds: ['matrix-order', 'determinant-2x2', 'inverse-matrix', 'identity-matrix'],
  formulaIds: ['det-2x2-formula', 'inverse-2x2-formula', 'linear-system-solution', 'matrix-product-entry'],
  sims: [],
  questionIds: ['q-1-14-01', 'q-1-14-02', 'q-1-14-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.14',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
