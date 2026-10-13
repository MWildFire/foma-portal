import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'cpi',
    tex: '\\text{CPI}_t = \\dfrac{\\text{cost of basket in year } t}{\\text{cost of basket in base year}} \\times 100',
    name: { en: 'Consumer price index (CPI)', ru: 'Индекс потребительских цен (CPI)' },
    meaning: {
      en: 'The cost of the basket in year t as a percentage of its cost in the base year, where the base year equals 100.',
      ru: 'Стоимость набора в году t в процентах от его стоимости в базовом году, где базовый год равен 100.',
    },
    when: {
      en: 'Any question that asks for a price index, or for the change in prices between two years.',
      ru: 'Любой вопрос об индексе цен или об изменении цен между двумя годами.',
    },
    syllabus: '3.3',
    units: 'index (base year = 100)',
    example: {
      en: 'A basket costs 800 AED in the base year and 880 AED later: CPI = 880 / 800 x 100 = 110.',
      ru: 'Набор стоит 800 AED в базовом году и 880 AED позже: ИПЦ = 880 / 800 x 100 = 110.',
    },
  },
  {
    id: 'inflation-rate',
    tex: '\\pi = \\dfrac{CPI_t - CPI_{t-1}}{CPI_{t-1}} \\times 100',
    name: { en: 'Inflation rate', ru: 'Темп инфляции' },
    meaning: {
      en: 'The percentage change in the CPI from the previous year to the current year. A negative value means deflation.',
      ru: 'Процентное изменение ИПЦ от предыдущего года к текущему. Отрицательное значение означает дефляцию.',
    },
    when: {
      en: 'Any question that asks for the rate of inflation or deflation from two CPI values.',
      ru: 'Любой вопрос о темпе инфляции или дефляции по двум значениям ИПЦ.',
    },
    syllabus: '3.3',
    units: '%',
    example: {
      en: 'The CPI rises from 110.0 to 113.3, so inflation = (113.3 - 110.0) / 110.0 x 100 = 3.0%.',
      ru: 'ИПЦ вырос с 110,0 до 113,3, поэтому инфляция = (113,3 - 110,0) / 110,0 x 100 = 3,0%.',
    },
  },
  {
    id: 'unemployment-rate',
    tex: 'u = \\dfrac{U}{L} \\times 100',
    name: { en: 'Unemployment rate', ru: 'Уровень безработицы' },
    meaning: {
      en: 'The number of unemployed people (U) as a percentage of the labour force (L), where the labour force is the employed plus the unemployed.',
      ru: 'Число безработных (U) в процентах от рабочей силы (L), где рабочая сила равна занятым плюс безработным.',
    },
    when: {
      en: 'Any question that asks for the unemployment rate from unemployment and labour force data.',
      ru: 'Любой вопрос об уровне безработицы по данным о безработных и рабочей силе.',
    },
    syllabus: '3.3',
    units: '%',
    example: {
      en: 'With 120 thousand unemployed in a labour force of 2000 thousand: u = 120 / 2000 x 100 = 6.0%.',
      ru: 'При 120 тыс. безработных и рабочей силе 2000 тыс.: u = 120 / 2000 x 100 = 6,0%.',
    },
  },
];
