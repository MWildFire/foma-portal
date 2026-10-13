import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 3.9',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'transform-matrix',
    term: { en: 'transformation matrix', ru: 'матрица преобразования (transformation matrix)' },
    def: {
      en: 'A 2 × 2 matrix M that sends a point with position vector (x, y) to the point with position vector M(x, y), written as a column. The origin always maps to itself.',
      ru: 'Матрица 2 × 2, которая переводит точку с радиус-вектором (x, y) в точку с радиус-вектором M(x, y), записанным столбцом. Начало координат всегда переходит в себя.',
    },
    syllabus: '3.9',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'transform-determinant',
    term: { en: 'determinant of a transformation matrix', ru: 'определитель матрицы преобразования (determinant)' },
    def: {
      en: 'For $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$, the determinant is $\\det M = ad - bc$. Its absolute value is the factor by which the transformation multiplies areas.',
      ru: 'Для $M = \\begin{pmatrix} a & b \\\\ c & d \\end{pmatrix}$ определитель равен $\\det M = ad - bc$. Его модуль — коэффициент, на который преобразование умножает площади.',
    },
    pitfall: {
      en: 'The determinant can be negative, but an area scale factor is never negative. Take the absolute value for the area, and read the sign as a change of orientation.',
      ru: 'Определитель может быть отрицательным, а коэффициент изменения площади — нет. Для площади берите модуль, а знак означает смену ориентации.',
    },
    syllabus: '3.9',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    sim: 'math.matrix-transform-lab',
  },
  {
    id: 'transform-singular',
    term: { en: 'singular transformation', ru: 'вырожденное преобразование (singular transformation)' },
    def: {
      en: 'A transformation whose matrix has determinant 0. It squashes the plane onto a line or a point, so it has no inverse.',
      ru: 'Преобразование, у которого определитель матрицы равен 0. Оно сжимает плоскость в прямую или точку, поэтому обратного преобразования не существует.',
    },
    syllabus: '3.9',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'transform-composite',
    term: { en: 'composite transformation', ru: 'композиция преобразований (composite transformation)' },
    def: {
      en: 'The result of applying one transformation and then another. If $M_1$ acts first and $M_2$ second, the composite has matrix $M_2 M_1$, so the order of multiplication matters.',
      ru: 'Результат последовательного применения двух преобразований. Если сначала действует $M_1$, а затем $M_2$, матрица композиции равна $M_2 M_1$, поэтому порядок умножения важен.',
    },
    syllabus: '3.9',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
