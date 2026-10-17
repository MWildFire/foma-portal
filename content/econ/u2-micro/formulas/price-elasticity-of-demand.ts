import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'pct-change',
    tex: '\\%\\Delta X = \\dfrac{X_2 - X_1}{X_1} \\times 100',
    name: { en: 'Percentage change', ru: 'Процентное изменение (percentage change)' },
    meaning: {
      en: 'The change in a value as a percentage of its original value: X1 is the original value and X2 is the new value.',
      ru: 'Изменение величины в процентах от её исходного значения: X1 — исходное значение, X2 — новое.',
    },
    when: {
      en: 'Requires a nonzero original value. State the reference value; percentage points are a different measure.',
      ru: 'Исходное значение должно быть ненулевым. Укажи базу сравнения; процентные пункты — другая мера.',
    },
    syllabus: '2.5',
    units: '%',
    example: {
      en: 'A price rise from 4.00 to 5.00: (5.00 - 4.00) / 4.00 x 100 = +25%.',
      ru: 'Рост цены с 4,00 до 5,00: (5,00 - 4,00) / 4,00 x 100 = +25%.',
    },
  },
  {
    id: 'ped',
    tex: '\\text{PED} = \\dfrac{\\%\\Delta Q_d}{\\%\\Delta P}',
    name: { en: 'Price elasticity of demand (PED)', ru: 'Ценовая эластичность спроса (PED)' },
    meaning: {
      en: 'The percentage change in quantity demanded divided by the percentage change in price. It is negative for a normal demand curve.',
      ru: 'Процентное изменение величины спроса, делённое на процентное изменение цены. Для обычной кривой спроса оно отрицательно.',
    },
    when: {
      en: 'Any question about how much quantity demanded responds to a change in price.',
      ru: 'Любой вопрос о том, насколько величина спроса реагирует на изменение цены.',
    },
    syllabus: '2.5',
    units: 'dimensionless',
    example: {
      en: 'Price rises 10%, quantity falls 20%: PED = -20 / 10 = -2.00, so demand is elastic.',
      ru: 'Цена выросла на 10%, величина спроса упала на 20%: PED = -20 / 10 = -2,00, спрос эластичный.',
    },
  },
  {
    id: 'total-revenue',
    tex: 'TR = P \\times Q',
    name: { en: 'Total revenue (TR)', ru: 'Общая выручка (TR)' },
    meaning: {
      en: 'The price of a good multiplied by the quantity sold.',
      ru: 'Цена товара, умноженная на проданное количество.',
    },
    when: {
      en: 'Any question about how a price change affects a firm revenue.',
      ru: 'Любой вопрос о том, как изменение цены влияет на выручку фирмы.',
    },
    syllabus: '2.5',
    units: 'AED',
    example: {
      en: 'A price of 3.50 AED and 120 pies sold: TR = 3.50 x 120 = 420.00 AED.',
      ru: 'Цена 3,50 AED и продано 120 пирогов: TR = 3,50 x 120 = 420,00 AED.',
    },
  },
];
