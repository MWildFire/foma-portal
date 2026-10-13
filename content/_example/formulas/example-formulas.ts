import type { Formula } from '../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'ped',
    tex: '\\text{PED} = \\dfrac{\\%\\Delta Q_d}{\\%\\Delta P}',
    name: { en: 'Price elasticity of demand (PED)', ru: 'Ценовая эластичность спроса (PED)' },
    meaning: {
      en: 'Percentage change in quantity demanded divided by the percentage change in price.',
      ru: 'Процентное изменение величины спроса, делённое на процентное изменение цены.',
    },
    when: {
      en: 'Any question about how responsive demand is to a change in price.',
      ru: 'Любой вопрос о том, насколько спрос реагирует на изменение цены.',
    },
    syllabus: 'EX.1',
    inBooklet: true,
    units: 'dimensionless',
    example: {
      en: 'Price rises 10%, quantity falls 20%: PED = -20 / 10 = -2, so demand is elastic.',
      ru: 'Цена выросла на 10%, спрос упал на 20%: PED = -20 / 10 = -2, спрос эластичный.',
    },
  },
];
