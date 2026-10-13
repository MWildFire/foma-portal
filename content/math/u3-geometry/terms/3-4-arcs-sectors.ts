import type { Term } from '../../../../src/contract/types';

const source = {
  kind: 'ib-guide' as const,
  title: 'IB Mathematics: applications and interpretation guide (first assessment 2021)',
  locator: 'sub-topic 3.4',
  url: 'https://www.ibo.org/globalassets/new-structure/university-admission/pdfs/dp-mathematics-applications-and-interpretation-guide-en.pdf',
};

export const terms: Term[] = [
  {
    id: 'arc-of-circle',
    term: { en: 'arc of a circle', ru: 'дуга окружности (arc of a circle)' },
    def: {
      en: 'The part of the circumference of a circle between two of its points. For a central angle $\\theta$ in degrees, its length is the fraction $\\dfrac{\\theta}{360}$ of the whole circumference $2\\pi r$.',
      ru: 'Часть окружности между двумя её точками. Для центрального угла $\\theta$ в градусах её длина равна доле $\\dfrac{\\theta}{360}$ всей окружности $2\\pi r$.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'sector-of-circle',
    term: { en: 'sector of a circle', ru: 'сектор окружности (sector of a circle)' },
    def: {
      en: 'The region enclosed by two radii and the arc between their endpoints. For a central angle $\\theta$ in degrees, its area is the fraction $\\dfrac{\\theta}{360}$ of the whole area $\\pi r^{2}$.',
      ru: 'Область, ограниченная двумя радиусами и дугой между их концами. Для центрального угла $\\theta$ в градусах её площадь равна доле $\\dfrac{\\theta}{360}$ площади круга $\\pi r^{2}$.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
  },
  {
    id: 'central-angle',
    term: { en: 'central angle', ru: 'центральный угол (central angle)' },
    def: {
      en: 'The angle at the centre of a circle between two radii. It sets the fraction of the circle that an arc or a sector covers.',
      ru: 'Угол в центре окружности между двумя радиусами. Он задаёт, какую долю окружности занимают дуга или сектор.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    src: source,
    pitfall: {
      en: 'The angle at the circumference that stands on the same arc is half the central angle. Do not put it into the arc formula.',
      ru: 'Вписанный угол на ту же дугу вдвое меньше центрального. Его нельзя подставлять в формулу дуги.',
    },
  },
];
