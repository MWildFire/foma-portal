import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'perpendicular-bisector',
    term: { en: 'perpendicular bisector', ru: 'серединный перпендикуляр (perpendicular bisector)' },
    def: {
      en: 'The line through the midpoint of a segment, at right angles to it. Every point on it is the same distance from the two ends of the segment.',
      ru: 'Прямая, проходящая через середину отрезка под прямым углом к нему. Каждая её точка одинаково удалена от концов отрезка.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.2, p. 93' },
    pitfall: {
      en: 'For finite nonzero segment gradient m, use -1/m. A horizontal segment has a vertical bisector and a vertical segment a horizontal bisector.',
      ru: 'При конечном ненулевом угловом коэффициенте m используйте -1/m. У горизонтального отрезка перпендикуляр вертикален, у вертикального — горизонтален.',
    },
  },
  {
    id: 'midpoint-of-segment',
    term: { en: 'midpoint of a segment', ru: 'середина отрезка (midpoint of a segment)' },
    def: {
      en: 'The point halfway along a segment. Its coordinates are the averages of the coordinates of the two ends.',
      ru: 'Точка, лежащая посередине отрезка. Её координаты — средние арифметические координат концов отрезка.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.1, p. 85' },
  },
  {
    id: 'circumcentre-of-triangle',
    term: { en: 'circumcentre of a triangle', ru: 'центр описанной окружности треугольника (circumcentre of a triangle)' },
    def: {
      en: 'The point where the three perpendicular bisectors of a triangle meet. It is equally far from the three vertices, so it is the centre of the circle through them.',
      ru: 'Точка пересечения трёх серединных перпендикуляров треугольника. Она равноудалена от трёх вершин и является центром окружности, проходящей через них.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.2, p. 95' },
    pitfall: {
      en: 'Two bisectors are enough to locate it. The third bisector should pass through the same point, which makes a useful check.',
      ru: 'Для нахождения точки достаточно двух перпендикуляров. Третий должен проходить через ту же точку, что является хорошей проверкой.',
    },
  },
];
