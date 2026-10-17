import type { Term } from '../../../../src/contract/types';
import { BOOK_TITLE } from '../../book';

export const terms: Term[] = [
  {
    id: 'radian-measure',
    term: { en: 'radian', ru: 'радиан (radian)' },
    def: {
      en: 'The angle at the centre of a circle that is subtended by an arc whose length equals the radius. A full turn is $2\\pi$ radians.',
      ru: 'Угол в центре окружности, который опирается на дугу, длина которой равна радиусу. Полный оборот равен $2\\pi$ радиан.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.1, p. 340' },
    pitfall: {
      en: 'The same numerical input can give different trigonometric values in degree and radian modes. Check the mode before every trigonometric calculation.',
      ru: 'Один числовой аргумент может давать разные тригонометрические значения в градусном и радианном режимах. Проверяйте режим перед каждым тригонометрическим расчётом.',
    },
    sim: 'math.unit-circle-lab',
  },
  {
    id: 'arc-length-in-radians',
    term: { en: 'arc length with a radian angle', ru: 'длина дуги при угле в радианах (arc length with a radian angle)' },
    def: {
      en: 'For a circle of radius $r$ and a central angle $\\theta$ in radians, for a nonnegative angle the arc length is $L = r\\theta$.',
      ru: 'Для окружности радиуса $r$ и центрального угла $\\theta$ в радианах для неотрицательного угла длина дуги равна $L = r\\theta$.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.1, p. 341' },
  },
  {
    id: 'sector-area-in-radians',
    term: { en: 'sector area with a radian angle', ru: 'площадь сектора при угле в радианах (sector area with a radian angle)' },
    def: {
      en: 'For a circle of radius $r$ and a central angle $\\theta$ in radians, for $0 \\le \\theta \\le 2\\pi$, the sector area is $A = \\tfrac{1}{2}r^{2}\\theta$.',
      ru: 'Для окружности радиуса $r$ и центрального угла $\\theta$ в радианах при $0 \\le \\theta \\le 2\\pi$ площадь сектора равна $A = \\tfrac{1}{2}r^{2}\\theta$.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: BOOK_TITLE, locator: 'ch. 8.1, p. 341' },
  },
];
