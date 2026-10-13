import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'pes',
    tex: '\\text{PES} = \\dfrac{\\%\\Delta Q_s}{\\%\\Delta P}',
    name: { en: 'Price elasticity of supply (PES)', ru: 'Ценовая эластичность предложения (PES)' },
    meaning: {
      en: 'Percentage change in quantity supplied divided by the percentage change in price. The value is positive for an upward-sloping supply curve.',
      ru: 'Процентное изменение величины предложения, делённое на процентное изменение цены. Для кривой предложения, идущей вверх, значение положительное.',
    },
    when: {
      en: 'Any question about how responsive producers are to a change in the price of their good.',
      ru: 'Любой вопрос о том, насколько производители реагируют на изменение цены своего товара.',
    },
    syllabus: '2.6',
    units: 'no units (ratio)',
    example: {
      en: 'Price rises 10%, quantity supplied rises 3%: PES = 3 / 10 = 0.30, so supply is inelastic.',
      ru: 'Цена выросла на 10%, величина предложения выросла на 3%: PES = 3 / 10 = 0,30, предложение неэластичное.',
    },
  },
];
