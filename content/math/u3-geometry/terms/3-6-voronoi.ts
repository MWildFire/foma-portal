import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'voronoi-diagram',
    term: { en: 'Voronoi diagram', ru: 'диаграмма Вороного (Voronoi diagram)' },
    def: {
      en: 'A partition of the plane into cells, one for each site. A closed cell holds points at least as close to its site as to any other; ties lie on shared boundaries.',
      ru: 'Разбиение плоскости на ячейки, по одной на каждый опорный пункт (site). Замкнутая ячейка содержит точки не дальше от своего пункта, чем от остальных; при равенстве расстояний точка лежит на общей границе.',
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
      en: 'The boundary between the cells of two neighbouring sites. It is the part of their perpendicular bisector where those two sites are no farther away than any other site.',
      ru: 'Граница между ячейками двух соседних пунктов. Это часть серединного перпендикуляра, где эти два пункта не дальше любого другого пункта.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.3, p. 96' },
  },
  {
    id: 'voronoi-vertex',
    term: { en: 'Voronoi vertex', ru: 'вершина диаграммы Вороного (Voronoi vertex)' },
    def: {
      en: 'A point where three or more Voronoi edges meet. It has three or more equally near sites and no closer site; for three noncollinear nearest sites it is their circumcentre.',
      ru: 'Точка, где сходятся три или более рёбер. Она равноудалена от трёх или более ближайших пунктов; более близкого пункта нет. Для трёх ближайших пунктов не на одной прямой это центр их описанной окружности.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.3, p. 100' },
  },
  {
    id: 'nearest-neighbour-interpolation',
    term: { en: 'nearest-neighbour interpolation', ru: 'интерполяция по ближайшему соседу (nearest-neighbour interpolation)' },
    def: {
      en: 'A way to estimate the value at a point by copying the value at the nearest site. Inside a cell, copy its site’s reading. At a shared boundary, a tie rule is needed if neighbouring readings differ and one prediction is required.',
      ru: 'Способ оценить значение в точке, взяв значение в ближайшем пункте. Внутри ячейки берут показание её пункта. На общей границе при разных показаниях соседей нужно правило выбора, если требуется один прогноз.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.3, p. 98' },
    pitfall: {
      en: 'The estimate is piecewise constant. Different readings can produce jumps at cell boundaries; equal readings need not. Specify a tie rule if one value is required.',
      ru: 'Оценка постоянна в каждой ячейке. Разные показания могут дать скачки на границе; одинаковые — не обязательно. Для единственного значения при равенстве расстояний укажите правило выбора.',
    },
  },
];
