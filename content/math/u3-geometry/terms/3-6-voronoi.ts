import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'voronoi-diagram',
    term: { en: 'Voronoi diagram', ru: 'диаграмма Вороного (Voronoi diagram)' },
    def: {
      en: 'A partition of the plane into cells, one for each site. The cell of a site holds the points that are nearer to that site than to any other site.',
      ru: 'Разбиение плоскости на ячейки, по одной на каждый опорный пункт (site). Ячейка пункта содержит точки, которые ближе к нему, чем к любому другому пункту.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.3, p. 96' },
    sim: 'math.voronoi-lab',
    pitfall: {
      en: 'A point on an edge is equally far from two sites, so it is not nearer to both. Say so when a question asks about points on an edge.',
      ru: 'Точка на ребре одинаково удалена от двух пунктов, поэтому она не ближе к обоим. Так и пишите, если вопрос касается точек на ребре.',
    },
  },
  {
    id: 'voronoi-edge',
    term: { en: 'Voronoi edge', ru: 'ребро диаграммы Вороного (Voronoi edge)' },
    def: {
      en: 'The boundary between the cells of two neighbouring sites. It lies on the perpendicular bisector of the segment joining those two sites.',
      ru: 'Граница между ячейками двух соседних пунктов. Она лежит на серединном перпендикуляре отрезка, соединяющего эти два пункта.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.3, p. 96' },
  },
  {
    id: 'voronoi-vertex',
    term: { en: 'Voronoi vertex', ru: 'вершина диаграммы Вороного (Voronoi vertex)' },
    def: {
      en: 'A point where three or more Voronoi edges meet. It is equally far from the three sites involved, so it is the circumcentre of the triangle they form.',
      ru: 'Точка, где сходятся три или более рёбер. Она одинаково удалена от трёх соответствующих пунктов и является центром описанной окружности треугольника, который они образуют.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.3, p. 100' },
  },
  {
    id: 'nearest-neighbour-interpolation',
    term: { en: 'nearest-neighbour interpolation', ru: 'интерполяция по ближайшему соседу (nearest-neighbour interpolation)' },
    def: {
      en: 'A way to estimate the value at a point by copying the value at the nearest site. Every point in a cell takes the value of the site that owns the cell.',
      ru: 'Способ оценить значение в точке, взяв значение в ближайшем пункте. Каждая точка ячейки получает значение пункта, которому принадлежит эта ячейка.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.3, p. 98' },
    pitfall: {
      en: 'The estimate is stepped, with jumps along the cell edges. It is not a smooth curve.',
      ru: 'Оценка ступенчатая, со скачками вдоль рёбер ячеек. Это не гладкая кривая.',
    },
  },
];
