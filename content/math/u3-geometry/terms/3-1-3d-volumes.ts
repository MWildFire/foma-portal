import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'distance-between-points-3d',
    term: { en: 'distance between two points in 3D', ru: 'расстояние между двумя точками в 3D (distance between two points in 3D)' },
    def: {
      en: 'The length of the straight segment joining two points with coordinates $(x_1, y_1, z_1)$ and $(x_2, y_2, z_2)$. On perpendicular Cartesian axes with one common length unit, apply Pythagoras twice: square the three coordinate differences, add them, and take the square root.',
      ru: 'Длина прямого отрезка, соединяющего две точки с координатами $(x_1, y_1, z_1)$ и $(x_2, y_2, z_2)$. На перпендикулярных декартовых осях с общей единицей длины дважды применяют теорему Пифагора: квадраты трёх разностей координат складываются, и из суммы извлекается квадратный корень.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 3.1, p. 85' },
    pitfall: {
      en: 'The square root of the sum is essential. Without it you have the squared distance.',
      ru: 'Квадратный корень из суммы обязателен: без него получится квадрат расстояния.',
    },
  },
  {
    id: 'right-pyramid',
    term: { en: 'right pyramid', ru: 'прямая пирамида (right pyramid)' },
    def: {
      en: 'A pyramid whose apex lies directly above the centre of its base, so the perpendicular height meets the base at its centre.',
      ru: 'Пирамида, у которой вершина находится прямо над центром основания, поэтому перпендикулярная высота опускается в центр основания.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.3, p. 33' },
    pitfall: {
      en: 'The slant height of a face is longer than the perpendicular height. Do not put it into the volume formula.',
      ru: 'Высота боковой грани (апофема в правильной пирамиде) длиннее перпендикулярной высоты, и подставлять её в формулу объёма нельзя.',
    },
  },
  {
    id: 'right-cone',
    term: { en: 'right cone', ru: 'прямой конус (right cone)' },
    def: {
      en: 'A cone whose apex lies directly above the centre of its circular base. Its slant height $l$, base radius $r$ and perpendicular height $h$ satisfy $l^2 = r^2 + h^2$.',
      ru: 'Конус, у которого вершина находится над центром круглого основания. Образующая $l$, радиус основания $r$ и перпендикулярная высота $h$ связаны соотношением $l^2 = r^2 + h^2$.',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.3, p. 33' },
  },
  {
    id: 'angle-between-line-and-plane',
    term: { en: 'angle between a line and a plane', ru: 'угол между прямой и плоскостью (angle between a line and a plane)' },
    def: {
      en: 'For an oblique line, the acute angle with its orthogonal projection onto the plane. A line parallel to or contained in the plane has angle 0°; a perpendicular line has angle 90° (its projection is a point).',
      ru: 'Для наклонной прямой — острый угол с ортогональной проекцией на плоскость. Для прямой, параллельной плоскости или лежащей в ней, угол равен 0°; для перпендикулярной — 90° (её проекция является точкой).',
    },
    syllabus: '3.1',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 1.3, p. 34' },
    pitfall: {
      en: 'Measure the angle with the projection, not with an edge of the solid that happens to touch the plane.',
      ru: 'Угол измеряется с проекцией, а не с ребром тела, которое случайно касается плоскости.',
    },
  },
];
