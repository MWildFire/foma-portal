import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'vector-equation-of-line',
    term: { en: 'vector equation of a line', ru: 'векторное уравнение прямой (vector equation of a line)' },
    def: {
      en: 'The formula r = a + λb that gives the position vector r of every point on a line. Here a is the position vector of a known point on the line, b is a direction vector and λ is a real parameter.',
      ru: 'Формула r = a + λb, которая задаёт вектор положения r любой точки прямой. Здесь a — вектор положения известной точки прямой, b — направляющий вектор, λ — действительный параметр.',
    },
    syllabus: '3.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.6, p. 119' },
  },
  {
    id: 'direction-vector-of-line',
    term: { en: 'direction vector', ru: 'направляющий вектор (direction vector)' },
    def: {
      en: 'A non-zero vector parallel to a line. Any non-zero multiple of it is also a direction vector of the same line.',
      ru: 'Ненулевой вектор, параллельный прямой. Любой ненулевой кратный ему вектор тоже является направляющим вектором той же прямой.',
    },
    syllabus: '3.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.6, p. 119' },
    pitfall: {
      en: 'A direction vector fixes the slant of the line, not a point on it. The point a must be given separately.',
      ru: 'Направляющий вектор задаёт наклон прямой, но не точку на ней. Точку a нужно задать отдельно.',
    },
  },
  {
    id: 'vector-line-parameter',
    term: { en: 'parameter λ', ru: 'параметр λ (parameter λ)' },
    def: {
      en: 'The real number that selects a point on the line. At λ = 0 the point is a, and each increase of λ by 1 moves the point by b.',
      ru: 'Действительное число, которое выбирает точку на прямой. При λ = 0 точка совпадает с a, а увеличение λ на 1 сдвигает точку на вектор b.',
    },
    syllabus: '3.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.6, p. 119' },
  },
];
