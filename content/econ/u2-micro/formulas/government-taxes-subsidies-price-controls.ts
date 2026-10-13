import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'tax-revenue',
    tex: 'T = t \\times Q',
    name: { en: 'Tax revenue', ru: 'Налоговые поступления (tax revenue)' },
    meaning: {
      en: 'The tax per unit multiplied by the quantity sold after the tax: the money the government receives from a specific tax.',
      ru: 'Налог на единицу, умноженный на величину продаж после введения налога: сумма, которую государство получает от налога на единицу.',
    },
    when: {
      en: 'Any question about how much money a specific tax raises for the government.',
      ru: 'Любой вопрос о том, какую сумму получает государство от налога на единицу.',
    },
    syllabus: '2.7',
    units: 'AED',
    example: {
      en: 'A tax of AED 1.50 per unit with 800 units sold after the tax: T = 1.50 x 800 = AED 1200.',
      ru: 'Налог 1,50 AED за единицу при 800 проданных единицах после налога: T = 1,50 x 800 = 1200 AED.',
    },
  },
  {
    id: 'deadweight-loss',
    tex: '\\text{DWL} = \\tfrac{1}{2} \\times \\Delta Q \\times t',
    name: { en: 'Deadweight loss of a tax', ru: 'Чистые потери общества от налога (deadweight loss)' },
    meaning: {
      en: 'Half the fall in quantity traded multiplied by the tax per unit t: the area of the triangle between the supply and demand curves.',
      ru: 'Половина падения объёма сделок, умноженная на налог на единицу t: площадь треугольника между кривыми спроса и предложения.',
    },
    when: {
      en: 'Any question about the welfare loss caused by a specific tax when the quantity traded falls.',
      ru: 'Любой вопрос о потере благосостояния из-за налога на единицу, когда объём сделок падает.',
    },
    syllabus: '2.7',
    units: 'AED',
    example: {
      en: 'A fall of 10 units with a tax of AED 4 per unit: DWL = 1/2 x 10 x 4 = AED 20.',
      ru: 'Падение на 10 единиц при налоге 4 AED за единицу: DWL = 1/2 x 10 x 4 = 20 AED.',
    },
  },
];
