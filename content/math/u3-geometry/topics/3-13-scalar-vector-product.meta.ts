import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: '3-13-scalar-vector-product',
  subject: 'math',
  code: '3.13',
  title: { en: 'Scalar and vector products', ru: 'Скалярное и векторное произведения' },
  papers: ['P1', 'P2', 'P3'],
  hl: true,
  order: 38,
  minutes: 45,
  priority: 2,
  inMockScope: 'unknown',
  outcomes: [
    {
      en: 'I can calculate a scalar product from components, and from the magnitudes and the angle, and use it to find an angle',
      ru: 'Могу вычислить скалярное произведение по координатам, а также по длинам и углу, и найти угол между векторами',
    },
    {
      en: 'I can find the acute angle between two lines from their direction vectors',
      ru: 'Могу найти острый угол между двумя прямыми по их направляющим векторам',
    },
    {
      en: 'I can calculate a vector product and use its magnitude as the area of a parallelogram or a triangle',
      ru: 'Могу вычислить векторное произведение и использовать его длину как площадь параллелограмма или треугольника',
    },
  ],
  termIds: ['scalar-product', 'vector-product', 'acute-angle-between-lines'],
  formulaIds: ['scalar-product-angle', 'scalar-product-components', 'vector-product-magnitude', 'vector-product-components'],
  sims: ['math.vector-lab'],
  questionIds: ['q-3-13-01', 'q-3-13-02', 'q-3-13-03'],
  sources: [
    {
      kind: 'ib-guide',
      title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
      locator: 'sub-topic 3.13',
      url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
    },
  ],
};

export default topic;
