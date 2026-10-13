import type { SourceRef, Term } from '../../../../src/contract/types';

// Sources: the textbook (chapter and page) for terms it defines; the subject guide (section 2.5) for percentage-change.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';
const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.5' };

export const terms: Term[] = [
  {
    id: 'elasticity',
    term: { en: 'elasticity', ru: 'эластичность (elasticity)' },
    def: {
      en: "The responsiveness of one variable to a change in another, measured as the ratio of the first variable's % change to the second's % change.",
      ru: 'Чувствительность одной величины к изменению другой, измеряемая как процентное изменение первой, делённое на процентное изменение второй.',
    },
    example: {
      en: 'A 10% price rise that cuts quantity demanded by 20% gives an elasticity of -20 / 10 = -2.00.',
      ru: 'Рост цены на 10%, который снижает величину спроса на 20%, даёт эластичность -20 / 10 = -2,00.',
    },
    pitfall: {
      en: 'Elasticity is a ratio of percentage changes, so it has no units.',
      ru: 'Эластичность — это отношение процентных изменений, поэтому у неё нет единиц измерения.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3, p. 84' },
  },
  {
    id: 'price-elasticity-of-demand',
    term: { en: 'price elasticity of demand', ru: 'ценовая эластичность спроса (price elasticity of demand)' },
    def: {
      en: 'How strongly quantity demanded reacts to a change in price, measured as the ratio of the % change in quantity demanded to the % change in price.',
      ru: 'Чувствительность величины спроса к изменению цены: процентное изменение величины спроса, делённое на процентное изменение цены.',
    },
    example: {
      en: 'The price of bread rises 10% and the quantity demanded falls 5%, so PED = -5 / 10 = -0.50.',
      ru: 'Цена хлеба выросла на 10%, величина спроса упала на 5%, поэтому PED = -5 / 10 = -0,50.',
    },
    pitfall: {
      en: 'The slope is the change in quantity per unit of price, while elasticity uses percentage changes, so the two are not the same.',
      ru: 'Наклон и эластичность не совпадают: наклон — это изменение количества на единицу цены, а эластичность использует процентные изменения.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.1, p. 85' },
  },
  {
    id: 'elastic-demand',
    term: { en: 'elastic demand', ru: 'эластичный спрос (elastic demand)' },
    def: {
      en: 'Demand whose PED has an absolute size above 1, so quantity demanded changes by a larger percentage than price.',
      ru: 'Спрос, у которого модуль PED больше 1, поэтому величина спроса меняется на больший процент, чем цена.',
    },
    example: {
      en: 'PED = -2.00: a 10% price rise cuts quantity demanded by 20%, so total revenue falls.',
      ru: 'PED = -2,00: рост цены на 10% сокращает величину спроса на 20%, поэтому общая выручка падает.',
    },
    pitfall: {
      en: 'Elastic is a comparison of two percentage changes, not a judgement about how expensive the good is.',
      ru: 'Эластичность — это сравнение двух процентных изменений, а не оценка того, насколько дорог товар.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.1, p. 87' },
    sim: 'econ.ped-linear',
  },
  {
    id: 'inelastic-demand',
    term: { en: 'inelastic demand', ru: 'неэластичный спрос (inelastic demand)' },
    def: {
      en: 'Demand whose PED has an absolute size below 1, so quantity demanded changes by a smaller percentage than price.',
      ru: 'Спрос, у которого модуль PED меньше 1, поэтому величина спроса меняется на меньший процент, чем цена.',
    },
    example: {
      en: 'PED = -0.20: a 25% price rise cuts quantity demanded by only 5%, so total revenue rises.',
      ru: 'PED = -0,20: рост цены на 25% снижает величину спроса лишь на 5%, поэтому общая выручка растёт.',
    },
    pitfall: {
      en: 'The same good can be inelastic in one market and elastic in another, because elasticity depends on the market and the time period.',
      ru: 'Один и тот же товар может быть неэластичным на одном рынке и эластичным на другом, потому что эластичность зависит от рынка и периода времени.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.1, p. 87' },
    sim: 'econ.ped-linear',
  },
  {
    id: 'unit-elastic-demand',
    term: { en: 'unit elastic demand', ru: 'спрос с единичной эластичностью (unit elastic demand)' },
    def: {
      en: 'Demand whose PED has an absolute size of exactly 1, so quantity demanded moves by the same percentage as price.',
      ru: 'Спрос, у которого модуль PED равен 1, поэтому процентное изменение величины спроса равно процентному изменению цены.',
    },
    example: {
      en: 'PED = -1.00 at the midpoint of the straight-line demand curve Q = 24 - 2P, where P = 6 and Q = 12.',
      ru: 'PED = -1,00 в середине прямой кривой спроса Q = 24 - 2P, где P = 6 и Q = 12.',
    },
    pitfall: {
      en: 'Only an absolute value of exactly 1 counts: 0.98 is inelastic and 1.02 is elastic, even though they look alike.',
      ru: 'Единичная эластичность — только модуль ровно 1: значение 0,98 означает неэластичный спрос, а 1,02 — эластичный, хотя они выглядят похоже.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.1, p. 87' },
    sim: 'econ.ped-linear',
  },
  {
    id: 'total-revenue',
    term: { en: 'total revenue', ru: 'общая выручка (total revenue)' },
    def: {
      en: 'The money a firm receives from selling its output: the price multiplied by the quantity sold.',
      ru: 'Денежная сумма, которую фирма получает от продажи своей продукции: цена, умноженная на проданное количество.',
    },
    example: {
      en: 'At AED 3.50 a pie and 120 pies sold, total revenue is AED 420.00.',
      ru: 'При цене 3,50 AED за пирог и продаже 120 пирогов общая выручка составляет 420,00 AED.',
    },
    pitfall: {
      en: 'Total revenue is not profit: profit also subtracts total cost.',
      ru: 'Общая выручка — это не прибыль: прибыль ещё вычитает общие издержки.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.1, p. 92' },
    sim: 'econ.ped-linear',
  },
  {
    id: 'percentage-change',
    term: { en: 'percentage change', ru: 'процентное изменение (percentage change)' },
    def: {
      en: 'The change in a value as a percentage of its original value: (new value - original value) / original value x 100.',
      ru: 'Изменение величины в процентах от её исходного значения: (новое значение - исходное значение) / исходное значение x 100.',
    },
    example: {
      en: 'A price rise from AED 4.00 to AED 5.00 is (5.00 - 4.00) / 4.00 x 100 = +25%.',
      ru: 'Рост цены с 4,00 AED до 5,00 AED: (5,00 - 4,00) / 4,00 x 100 = +25%.',
    },
    pitfall: {
      en: 'The base is the original value, not the new value: a rise from 4 to 5 is +25%, but a fall from 5 to 4 is -20%.',
      ru: 'База расчёта — исходное значение, а не новое: рост с 4 до 5 даёт +25%, а падение с 5 до 4 даёт -20%.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'necessity-good',
    term: { en: 'necessity good', ru: 'товар первой необходимости (necessity good)' },
    def: {
      en: 'A good that people buy even when prices rise or incomes fall, so its demand is relatively unresponsive: PED is inelastic and YED is between 0 and 1.',
      ru: 'Товар, который люди покупают даже при росте цен или падении доходов; спрос на него мало реагирует, поэтому PED неэластичен, а YED между 0 и 1.',
    },
    example: {
      en: 'Basic bread: a 10% price rise cuts quantity demanded by only 3%, so PED = -3 / 10 = -0.30.',
      ru: 'Базовый хлеб: рост цены на 10% сокращает величину спроса лишь на 3%, поэтому PED = -3 / 10 = -0,30.',
    },
    pitfall: {
      en: 'A necessity is not the same as an inferior good: a necessity has a YED between 0 and 1, while an inferior good has a negative YED.',
      ru: 'Товар первой необходимости — не то же самое, что товар низшей категории: у первого YED между 0 и 1, а у второго YED отрицательна.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3, p. 99' },
  },
  {
    id: 'luxury-good',
    term: { en: 'luxury good', ru: 'товар роскоши (luxury good)' },
    def: {
      en: 'A good whose demand rises by a larger percentage than income, so its YED is above 1; such goods usually have elastic demand.',
      ru: 'Товар, спрос на который растёт быстрее дохода, поэтому его YED выше 1; такие товары обычно имеют эластичный спрос.',
    },
    example: {
      en: 'Holidays abroad: when income rises 10%, demand rises 25%, so YED = 25 / 10 = 2.50.',
      ru: 'Зарубежные поездки: при росте дохода на 10% спрос растёт на 25%, поэтому YED = 25 / 10 = 2,50.',
    },
    pitfall: {
      en: 'A luxury good is defined by its response to income, not by its price.',
      ru: 'Товар роскоши определяется реакцией спроса на доход, а не ценой.',
    },
    syllabus: '2.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3, p. 99' },
  },
];
