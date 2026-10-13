import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'real-gdp',
    tex: '\\text{Real GDP} = \\dfrac{\\text{Nominal GDP}}{\\text{GDP deflator}} \\times 100',
    name: { en: 'Real GDP', ru: 'Реальный ВВП (real GDP)' },
    meaning: {
      en: 'Nominal GDP divided by the GDP deflator, times 100: GDP at the prices of the base year.',
      ru: 'Номинальный ВВП, делённый на дефлятор ВВП и умноженный на 100: ВВП в ценах базового года.',
    },
    when: {
      en: 'Comparing output between years, or calculating real growth.',
      ru: 'При сравнении выпуска между годами или при расчёте реального роста.',
    },
    syllabus: '3.1',
    units: 'AED bn',
    example: {
      en: 'Nominal GDP AED 1260 bn and deflator 105: real GDP = 1260 / 105 x 100 = AED 1200 bn.',
      ru: 'Номинальный ВВП 1260 млрд AED и дефлятор 105: реальный ВВП = 1260 / 105 x 100 = 1200 млрд AED.',
    },
  },
  {
    id: 'gdp-deflator',
    tex: '\\text{GDP deflator} = \\dfrac{\\text{Nominal GDP}}{\\text{Real GDP}} \\times 100',
    name: { en: 'GDP deflator', ru: 'Дефлятор ВВП (GDP deflator)' },
    meaning: {
      en: 'Nominal GDP divided by real GDP, times 100: a price index of all domestic output with the base year equal to 100.',
      ru: 'Номинальный ВВП, делённый на реальный ВВП, умноженный на 100: индекс цен всего внутреннего выпуска, в котором базовый год равен 100.',
    },
    when: {
      en: 'Measuring the average change in prices of all domestic output, or converting nominal GDP into real GDP.',
      ru: 'При измерении среднего изменения цен всего внутреннего выпуска или при переводе номинального ВВП в реальный.',
    },
    syllabus: '3.1',
    units: 'index (base year = 100)',
    example: {
      en: 'Nominal GDP AED 1260 bn and real GDP AED 1200 bn: deflator = 1260 / 1200 x 100 = 105.',
      ru: 'Номинальный ВВП 1260 млрд AED и реальный ВВП 1200 млрд AED: дефлятор = 1260 / 1200 x 100 = 105.',
    },
  },
  {
    id: 'gdp-expenditure',
    tex: 'Y = C + I + G + (X - M)',
    name: { en: 'GDP by the expenditure approach', ru: 'ВВП по расходному методу (expenditure approach)' },
    meaning: {
      en: 'The sum of consumption, investment, government spending and net exports: total spending on final goods and services produced in the country.',
      ru: 'Сумма потребления, инвестиций, государственных расходов и чистого экспорта: совокупные расходы на конечные товары и услуги, произведённые в стране.',
    },
    when: {
      en: 'Calculating GDP from spending data, or analysing the components of GDP.',
      ru: 'При расчёте ВВП по данным о расходах или при анализе компонентов ВВП.',
    },
    syllabus: '3.1',
    units: 'AED bn',
    example: {
      en: 'C = 500, I = 100, G = 200, X = 300, M = 250 (AED bn): Y = 500 + 100 + 200 + (300 - 250) = 850.',
      ru: 'C = 500, I = 100, G = 200, X = 300, M = 250 (млрд AED): Y = 500 + 100 + 200 + (300 - 250) = 850.',
    },
  },
];
