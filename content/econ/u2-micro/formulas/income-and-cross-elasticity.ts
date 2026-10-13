import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'yed',
    tex: '\\text{YED} = \\dfrac{\\%\\Delta Q_d}{\\%\\Delta Y}',
    name: { en: 'Income elasticity of demand (YED)', ru: 'Доходная эластичность спроса (YED)' },
    meaning: {
      en: 'The percentage change in quantity demanded divided by the percentage change in income. Positive for normal goods, negative for inferior goods.',
      ru: 'Процентное изменение величины спроса, делённое на процентное изменение дохода. Положительна для нормальных благ, отрицательна для товаров низшей категории.',
    },
    when: {
      en: 'Any question about how demand responds to a change in income.',
      ru: 'Любой вопрос о том, как спрос реагирует на изменение дохода.',
    },
    syllabus: '2.5',
    units: 'dimensionless',
    example: {
      en: 'Income rises 25% and quantity demanded rises 50%: YED = 50 / 25 = 2.00, a luxury good.',
      ru: 'Доход вырос на 25%, величина спроса выросла на 50%: YED = 50 / 25 = 2,00, товар роскоши.',
    },
  },
  {
    id: 'xed',
    tex: '\\text{XED} = \\dfrac{\\%\\Delta Q_{dA}}{\\%\\Delta P_B}',
    name: { en: 'Cross-price elasticity of demand (XED)', ru: 'Перекрёстная эластичность спроса (XED)' },
    meaning: {
      en: 'The percentage change in quantity demanded of good A divided by the percentage change in the price of good B. Positive for substitutes, negative for complements.',
      ru: 'Процентное изменение величины спроса на товар A, делённое на процентное изменение цены товара B. Положительна для товаров-заменителей, отрицательна для товаров-дополнителей.',
    },
    when: {
      en: 'Any question about how demand for one good responds to the price of another good.',
      ru: 'Любой вопрос о том, как спрос на один товар реагирует на цену другого товара.',
    },
    syllabus: '2.5',
    units: 'dimensionless',
    example: {
      en: 'The price of B rises 10% and the quantity of A rises 4%: XED = 4 / 10 = 0.40, so the goods are substitutes.',
      ru: 'Цена B выросла на 10%, величина спроса на A выросла на 4%: XED = 4 / 10 = 0,40, товары — заменители.',
    },
  },
];
