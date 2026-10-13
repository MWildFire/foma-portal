import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '1-15-eigen-2x2',
  subject: 'math',
  code: '1.15',
  title: { en: 'Eigenvalues and eigenvectors of 2 × 2 matrices', ru: 'Собственные значения и векторы матриц 2 × 2 (Eigenvalues and eigenvectors of 2 × 2 matrices)' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 15,
  minutes: 50,
  priority: 2,
  inMockScope: 'no',
  outcomes: [
    {
      en: 'I can write the characteristic equation of a 2 × 2 matrix and find its eigenvalues',
      ru: 'Могу записать характеристическое уравнение матрицы 2 × 2 и найти её собственные значения',
    },
    {
      en: 'I can find an eigenvector for each eigenvalue and check it by multiplying',
      ru: 'Могу найти собственный вектор для каждого собственного значения и проверить его умножением',
    },
    {
      en: 'I can diagonalise a matrix with distinct real eigenvalues and use A^n = PD^nP^(-1) to find its powers',
      ru: 'Могу диагонализовать матрицу с различными вещественными собственными значениями и находить её степени через A^n = PD^nP^(-1)',
    },
  ],
  termIds: ['characteristic-polynomial-2x2', 'eigenvalue-2x2', 'eigenvector-2x2', 'diagonalisation-2x2'],
  formulaIds: ['char-poly-2x2', 'eigenvalues-2x2-formula', 'eigen-equation', 'matrix-power-diagonal'],
  sims: ['math.eigen-2x2-lab'],
  questionIds: ['q-1-15-01', 'q-1-15-02', 'q-1-15-03'],
  sources: [
    {
      kind: 'web',
      title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
      locator: 'sub-topic 1.15',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
