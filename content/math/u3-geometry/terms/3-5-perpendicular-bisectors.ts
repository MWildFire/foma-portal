import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'web' as const,
  title: 'IB Mathematics AI, first assessment 2021: public summary, not checked against the official guide',
  locator: 'sub-topic 3.5',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

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
    src: source,
    pitfall: {
      en: 'Use the negative reciprocal -1/m of the segment gradient, not m itself: a line through the midpoint with gradient m lies along the segment.',
      ru: 'Берите отрицательную обратную величину -1/m, а не m: прямая через середину с угловым коэффициентом m совпадает с самим отрезком.',
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
    src: source,
  },
  {
    id: 'circumcentre-of-triangle',
    term: { en: 'circumcentre of a triangle', ru: 'центр описанной окружности треугольника (circumcentre)' },
    def: {
      en: 'The point where the three perpendicular bisectors of a triangle meet. It is equally far from the three vertices, so it is the centre of the circle through them.',
      ru: 'Точка пересечения трёх серединных перпендикуляров треугольника. Она равноудалена от трёх вершин и является центром окружности, проходящей через них.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'Two bisectors are enough to locate it. The third bisector should pass through the same point, which makes a useful check.',
      ru: 'Для нахождения точки достаточно двух перпендикуляров. Третий должен проходить через ту же точку, что является хорошей проверкой.',
    },
  },
];
