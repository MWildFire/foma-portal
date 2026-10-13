import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'segment-midpoint-formula',
    tex: '\\left(\\dfrac{x_1+x_2}{2},\\ \\dfrac{y_1+y_2}{2}\\right)',
    name: { en: 'Midpoint of a segment', ru: 'Середина отрезка' },
    meaning: {
      en: 'The point halfway between (x1, y1) and (x2, y2): the average of the x-coordinates and the average of the y-coordinates.',
      ru: 'Точка посередине между (x1; y1) и (x2; y2): среднее арифметическое абсцисс и среднее арифметическое ординат.',
    },
    when: {
      en: 'Any perpendicular bisector passes through the midpoint of its segment, so find the midpoint first.',
      ru: 'Любой серединный перпендикуляр проходит через середину своего отрезка, поэтому её находят первой.',
    },
    syllabus: '3.5',
    inBooklet: false,
    example: {
      en: 'A(2, 1) and B(8, 5) give the midpoint (5, 3).',
      ru: 'Для A(2; 1) и B(8; 5) середина — (5; 3).',
    },
  },
  {
    id: 'perpendicular-gradient-formula',
    tex: 'm_{\\perp}=-\\dfrac{1}{m}=-\\dfrac{x_2-x_1}{y_2-y_1}',
    name: { en: 'Gradient of the perpendicular bisector', ru: 'Угловой коэффициент серединного перпендикуляра' },
    meaning: {
      en: 'If the segment has gradient m, its perpendicular bisector has gradient minus 1 over m, where m = (y2 - y1)/(x2 - x1).',
      ru: 'Если у отрезка угловой коэффициент m, у серединного перпендикуляра он равен минус 1/m, где m = (y2 - y1)/(x2 - x1).',
    },
    when: {
      en: 'The segment is not horizontal, so m is not zero. A horizontal segment has a vertical bisector, and a vertical segment has a horizontal one.',
      ru: 'Отрезок не горизонтален, так что m не равно нулю. Горизонтальный отрезок имеет вертикальный серединный перпендикуляр, а вертикальный — горизонтальный.',
    },
    syllabus: '3.5',
    inBooklet: false,
    example: {
      en: 'A(2, 1) and B(8, 5): the segment has gradient 2/3, so the bisector has gradient -3/2.',
      ru: 'Для A(2; 1) и B(8; 5) у отрезка угловой коэффициент 2/3, поэтому у перпендикуляра он равен -3/2.',
    },
  },
  {
    id: 'perpendicular-bisector-equation-formula',
    tex: '(x_2-x_1)\\,x+(y_2-y_1)\\,y=\\dfrac{x_2^{2}+y_2^{2}-x_1^{2}-y_1^{2}}{2}',
    name: { en: 'Perpendicular bisector of a segment (general form)', ru: 'Серединный перпендикуляр отрезка (общий вид)' },
    meaning: {
      en: 'Every point (x, y) on the perpendicular bisector of the segment from (x1, y1) to (x2, y2) satisfies this equation. It comes from setting the distances to the two ends equal.',
      ru: 'Каждая точка (x; y) серединного перпендикуляра отрезка от (x1; y1) до (x2; y2) удовлетворяет этому уравнению. Оно получается из равенства расстояний до концов отрезка.',
    },
    when: {
      en: 'Any segment, including horizontal and vertical ones, because it never divides by a gradient.',
      ru: 'Любой отрезок, в том числе горизонтальный и вертикальный, потому что здесь не делят на угловой коэффициент.',
    },
    syllabus: '3.5',
    inBooklet: false,
    example: {
      en: 'A(2, 1) and B(8, 5): 6x + 4y = 42, which simplifies to 3x + 2y = 21.',
      ru: 'Для A(2; 1) и B(8; 5): 6x + 4y = 42, что упрощается до 3x + 2y = 21.',
    },
  },
];
