import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'scalar-product',
    term: { en: 'scalar product', ru: 'скалярное произведение (scalar product)' },
    def: {
      en: 'For vectors v and w at angle θ, the number v·w = |v||w| cos θ. In components it is v1 w1 + v2 w2 + v3 w3, and it is zero when the vectors are perpendicular.',
      ru: 'Для векторов v и w с углом θ число v·w = |v||w| cos θ. В координатах оно равно v1 w1 + v2 w2 + v3 w3 и равно нулю, если векторы перпендикулярны.',
    },
    syllabus: '3.13',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.5, p. 114' },
    pitfall: {
      en: 'The scalar product is a number, not a vector. A negative value means the angle between the vectors is obtuse.',
      ru: 'Скалярное произведение — число, а не вектор. Отрицательное значение означает, что угол между векторами тупой.',
    },
    sim: 'math.vector-lab',
  },
  {
    id: 'vector-product',
    term: { en: 'vector product', ru: 'векторное произведение (vector product)' },
    def: {
      en: 'The vector v × w, perpendicular to both v and w, with magnitude |v||w| sin θ. This magnitude equals the area of the parallelogram with sides v and w.',
      ru: 'Вектор v × w, перпендикулярный и v, и w, с длиной |v||w| sin θ. Эта длина равна площади параллелограмма со сторонами v и w.',
    },
    syllabus: '3.13',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.5, p. 116' },
    pitfall: {
      en: 'Swapping the order changes the sign: w × v = -(v × w). The triangle with sides v and w has half the area.',
      ru: 'Перестановка множителей меняет знак: w × v = -(v × w). Треугольник со сторонами v и w имеет вдвое меньшую площадь.',
    },
  },
  {
    id: 'acute-angle-between-lines',
    term: { en: 'acute angle between two lines', ru: 'острый угол между двумя прямыми (acute angle between two lines)' },
    def: {
      en: 'The smaller of the two angles where two lines cross. It is found from the direction vectors with cos φ = |b1·b2| / (|b1||b2|), so the angle is always acute.',
      ru: 'Меньший из двух углов, которые образуют пересекающиеся прямые. Находится по направляющим векторам: cos φ = |b1·b2| / (|b1||b2|), поэтому угол всегда острый.',
    },
    syllabus: '3.13',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.6, p. 120' },
    pitfall: {
      en: 'The scalar product of the direction vectors can be negative. Take its absolute value before dividing.',
      ru: 'Скалярное произведение направляющих векторов может быть отрицательным. Возьмите его модуль перед делением.',
    },
  },
];
