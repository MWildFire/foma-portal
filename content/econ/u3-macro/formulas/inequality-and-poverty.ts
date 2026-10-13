import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'gini',
    tex: 'G = \\dfrac{A}{A + B}',
    name: { en: 'Gini coefficient', ru: 'Коэффициент Джини' },
    meaning: {
      en: 'Area A (between the line of equality and the Lorenz curve) divided by the total area under the line of equality, A + B. It ranges from 0 (perfect equality) to 1 (perfect inequality).',
      ru: 'Площадь A (между линией равенства и кривой Лоренца), делённая на общую площадь под линией равенства, A + B. Значения от 0 (полное равенство) до 1 (полное неравенство).',
    },
    when: {
      en: 'Any question that gives the areas of a Lorenz curve, or asks for the Gini coefficient before and after a policy.',
      ru: 'Любой вопрос, в котором даны площади на кривой Лоренца или нужно найти коэффициент Джини до и после политики.',
    },
    syllabus: '3.4',
    units: 'ratio (0 to 1)',
    example: {
      en: 'With A = 1000 and B = 4000, G = 1000 / 5000 = 0.20.',
      ru: 'При A = 1000 и B = 4000 коэффициент G = 1000 / 5000 = 0,20.',
    },
  },
];
