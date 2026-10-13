import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'voronoi-nearest-site-rule',
    tex: 'd(P,S_i)\\le d(P,S_j)\\quad \\text{for every } j\\ne i',
    name: { en: 'Point in the cell of a site', ru: 'Точка в ячейке опорного пункта' },
    meaning: {
      en: 'The point P belongs to the cell of site S_i when its distance to S_i is no more than its distance to every other site S_j.',
      ru: 'Точка P относится к ячейке пункта S_i, если её расстояние до S_i не больше расстояния до любого другого пункта S_j.',
    },
    when: {
      en: 'Deciding which site a point belongs to, or which site is nearest to it.',
      ru: 'Определение, к какому пункту относится точка, или какой пункт ближайший к ней.',
    },
    syllabus: '3.6',
    inBooklet: false,
    example: {
      en: 'P(5, 4) with sites A(1, 1), B(7, 2), C(4, 8): the distance to B, 2.83, is the smallest, so P is in the cell of B.',
      ru: 'P(5; 4) и пункты A(1; 1), B(7; 2), C(4; 8): расстояние до B, 2,83, наименьшее, значит P лежит в ячейке B.',
    },
  },
  {
    id: 'site-distance-formula',
    tex: 'd(P,S)=\\sqrt{(x-a)^{2}+(y-b)^{2}}',
    name: { en: 'Distance from a point to a site', ru: 'Расстояние от точки до пункта' },
    meaning: {
      en: 'The straight-line distance from the point P(x, y) to the site S(a, b).',
      ru: 'Прямое расстояние от точки P(x; y) до пункта S(a; b).',
    },
    when: {
      en: 'Comparing distances to sites, or finding the radius of a Voronoi vertex.',
      ru: 'Сравнение расстояний до пунктов или нахождение радиуса вершины диаграммы.',
    },
    syllabus: '3.6',
    inBooklet: false,
    example: {
      en: 'P(5, 4) and B(7, 2): d = sqrt((5-7)^2 + (4-2)^2) = sqrt(8) = 2.83.',
      ru: 'P(5; 4) и B(7; 2): d = √((5−7)² + (4−2)²) = √8 = 2,83.',
    },
  },
  {
    id: 'voronoi-edge-equation',
    tex: '(x_2-x_1)\\,x+(y_2-y_1)\\,y=\\dfrac{x_2^{2}+y_2^{2}-x_1^{2}-y_1^{2}}{2}',
    name: { en: 'Edge between two sites', ru: 'Ребро между двумя пунктами' },
    meaning: {
      en: 'The Voronoi edge between sites (x1, y1) and (x2, y2) lies on this line, which is the perpendicular bisector of the segment joining them.',
      ru: 'Ребро диаграммы между пунктами (x1; y1) и (x2; y2) лежит на этой прямой — серединном перпендикуляре отрезка, соединяющего их.',
    },
    when: {
      en: 'Finding the equation of an edge, or of a vertex as the meeting point of two edges.',
      ru: 'Нахождение уравнения ребра или вершины как точки пересечения двух рёбер.',
    },
    syllabus: '3.6',
    inBooklet: false,
    example: {
      en: 'Sites A(2, 1) and B(8, 5): 6x + 4y = 42, which simplifies to 3x + 2y = 21.',
      ru: 'Пункты A(2; 1) и B(8; 5): 6x + 4y = 42, что упрощается до 3x + 2y = 21.',
    },
  },
  {
    id: 'nearest-neighbour-estimate',
    tex: '\\hat{f}(P)=f(S_k),\\quad d(P,S_k)=\\min_{i}\\, d(P,S_i)',
    name: { en: 'Nearest-neighbour estimate', ru: 'Оценка по ближайшему соседу' },
    meaning: {
      en: 'The estimated value at P is the measured value f(S_k) at the site S_k nearest to P.',
      ru: 'Оценочное значение в точке P равно измеренному значению f(S_k) в ближайшем к P пункте S_k.',
    },
    when: {
      en: 'Estimating a quantity, such as temperature or rainfall, at a point between measuring stations.',
      ru: 'Оценка величины (температуры, осадков) в точке между измерительными станциями.',
    },
    syllabus: '3.6',
    inBooklet: false,
    example: {
      en: 'Stations at (0, 0), (5, 0) and (2, 6) read 10, 14 and 8. At Q(3, 2) the nearest station is (5, 0), so the estimate is 14.',
      ru: 'Станции в точках (0; 0), (5; 0) и (2; 6) показывают 10, 14 и 8. В точке Q(3; 2) ближайшая станция — (5; 0), значит оценка равна 14.',
    },
  },
];
