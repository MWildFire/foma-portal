import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'ib-guide' as const,
  title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
  locator: 'sub-topic 3.7',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

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
    src: source,
    pitfall: {
      en: 'A calculator in degree mode gives a different value for the same number. Check the mode before every trigonometric calculation.',
      ru: 'Калькулятор в режиме градусов даёт другой результат для того же числа. Проверяйте режим перед каждым тригонометрическим расчётом.',
    },
    sim: 'math.unit-circle-lab',
  },
  {
    id: 'arc-length-in-radians',
    term: { en: 'arc length in radians', ru: 'длина дуги в радианах (arc length)' },
    def: {
      en: 'For a circle of radius $r$ and a central angle $\\theta$ in radians, the arc length is $s = r\\theta$.',
      ru: 'Для окружности радиуса $r$ и центрального угла $\\theta$ в радианах длина дуги равна $s = r\\theta$.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'sector-area-in-radians',
    term: { en: 'sector area in radians', ru: 'площадь сектора в радианах (sector area)' },
    def: {
      en: 'For a circle of radius $r$ and a central angle $\\theta$ in radians, the area of the sector is $A = \\tfrac{1}{2}r^{2}\\theta$.',
      ru: 'Для окружности радиуса $r$ и центрального угла $\\theta$ в радианах площадь сектора равна $A = \\tfrac{1}{2}r^{2}\\theta$.',
    },
    syllabus: '3.7',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
];
