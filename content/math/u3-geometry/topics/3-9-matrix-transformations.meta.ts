import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-9-matrix-transformations',
  subject: 'math',
  code: '3.9',
  title: { en: 'Geometric transformations with matrices', ru: 'Геометрические преобразования с помощью матриц' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 34,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can write the 2 × 2 matrix of a reflection, stretch, enlargement or rotation and use it to find the image of a point',
      ru: 'Могу записать матрицу 2 × 2 для отражения, растяжения, гомотетии или поворота и найти образ точки',
    },
    {
      en: 'I can combine two transformations by matrix multiplication in the correct order',
      ru: 'Могу объединить два преобразования перемножением матриц в правильном порядке',
    },
    {
      en: 'I can use the determinant to find the area scale factor and to decide whether a transformation can be undone',
      ru: 'Могу с помощью определителя найти коэффициент изменения площади и выяснить, можно ли отменить преобразование',
    },
  ],
  termIds: ['transform-matrix', 'transform-determinant', 'transform-singular', 'transform-composite'],
  formulaIds: ['transform-image-point', 'transform-det-2x2', 'transform-area-scale', 'transform-rotation-matrix'],
  sims: ['math.matrix-transform-lab'],
  questionIds: ['q-3-9-01', 'q-3-9-02', 'q-3-9-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 3.9',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
