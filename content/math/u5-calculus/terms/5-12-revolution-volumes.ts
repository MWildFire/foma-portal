import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'solid-of-revolution',
    term: { en: 'solid of revolution', ru: 'тело вращения (solid of revolution)' },
    def: {
      en: 'The three-dimensional solid formed when a plane region is rotated through 360 degrees about an axis, here the x-axis or the y-axis.',
      ru: 'Трёхмерное тело, которое образуется, когда плоская область поворачивается на 360 градусов вокруг оси, здесь оси x или оси y.',
    },
    syllabus: '5.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.3, p. 504' },
  },
  {
    id: 'disc-method-volume',
    term: { en: 'disc method', ru: 'метод дисков (disc method)' },
    def: {
      en: 'A way to find the volume of a solid of revolution by adding thin discs. Each disc has radius equal to the distance from the curve to the axis, so its volume is $\\pi$ times the radius squared times the thickness.',
      ru: 'Способ найти объём тела вращения, складывая тонкие диски. Радиус каждого диска равен расстоянию от кривой до оси, поэтому его объём равен $\\pi$, умноженному на квадрат радиуса и на толщину.',
    },
    syllabus: '5.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.3, p. 504' },
    pitfall: {
      en: 'The disc area is $\\pi y^2$, not $\\pi y$: square the radius before you multiply by $\\pi$ and the thickness.',
      ru: 'Площадь диска равна $\\pi y^2$, а не $\\pi y$: сначала возведите радиус в квадрат, затем умножьте на $\\pi$ и толщину.',
    },
    sim: 'math.revolution-lab',
  },
  {
    id: 'area-integral-y-axis',
    term: { en: 'area between a curve and the y-axis', ru: 'площадь между кривой и осью y (area between a curve and the y-axis)' },
    def: {
      en: 'For a curve written as $x = g(y)$, the area between the curve, the y-axis and the lines $y = c$ and $y = d$ is $\\int_c^d |x|\\,dy$. If $x \\ge 0$ on the whole interval, this is just $\\int_c^d x\\,dy$, and if $x \\le 0$ it is the absolute value of that integral.',
      ru: 'Для кривой, заданной как $x = g(y)$, площадь между кривой, осью y и прямыми $y = c$ и $y = d$ равна $\\int_c^d |x|\\,dy$. Если $x \\ge 0$ на всём промежутке, это просто $\\int_c^d x\\,dy$, а если $x \\le 0$, это модуль этого интеграла.',
    },
    syllabus: '5.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 11.3, p. 500' },
  },
];
