import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'income-inequality',
    term: { en: 'income inequality', ru: 'неравенство доходов (income inequality)' },
    def: {
      en: 'The unequal distribution of income, a flow earned over a period, among households or individuals in an economy.',
      ru: 'Неравномерное распределение дохода, то есть потока, полученного за период, между домохозяйствами или людьми в экономике.',
    },
    example: {
      en: 'The top 10% of households earn 30% of total income, while the bottom 10% earn 2%.',
      ru: 'Верхние 10% домохозяйств получают 30% всего дохода, а нижние 10% — 2%.',
    },
    pitfall: {
      en: 'Income is a flow measured per year; do not confuse it with wealth, which is a stock of assets at a point in time.',
      ru: 'Доход — это поток за год; не путайте его с богатством, которое является запасом активов на определённый момент времени.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.4' },
  },
  {
    id: 'wealth-inequality',
    term: { en: 'wealth inequality', ru: 'неравенство богатства (wealth inequality)' },
    def: {
      en: 'The unequal distribution of wealth, a stock of assets such as property, savings and financial investments, at a point in time.',
      ru: 'Неравномерное распределение богатства, то есть запаса активов, таких как недвижимость, сбережения и финансовые инвестиции, на определённый момент времени.',
    },
    example: {
      en: 'A household owns a flat worth 500000 AED and savings of 50000 AED, so its wealth is 550000 AED.',
      ru: 'Домохозяйство владеет квартирой стоимостью 500000 AED и сбережениями 50000 AED, поэтому его богатство равно 550000 AED.',
    },
    pitfall: {
      en: 'Wealth is usually more unequal than income, because it is passed on through inheritance and grows as savings compound.',
      ru: 'Богатство обычно распределено неравномернее дохода, потому что его передают по наследству, а сбережения растут со временем.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.4' },
  },
  {
    id: 'lorenz-curve',
    term: { en: 'Lorenz curve', ru: 'кривая Лоренца (Lorenz curve)' },
    def: {
      en: 'A graph of the cumulative percentage of income against the cumulative percentage of the population, ranked from poorest to richest.',
      ru: 'График накопленной доли дохода против накопленной доли населения, ранжированного от самых бедных к самым богатым.',
    },
    example: {
      en: 'The poorest 20% of the population receives 5% of income, so the curve passes through the point (20, 5).',
      ru: 'Самые бедные 20% населения получают 5% дохода, поэтому кривая проходит через точку (20; 5).',
    },
    pitfall: {
      en: 'The Lorenz curve is not a histogram of incomes: each point shows cumulative shares, so the curve always ends at (100, 100).',
      ru: 'Кривая Лоренца — не гистограмма доходов: точки показывают накопленные доли, поэтому кривая всегда заканчивается в точке (100; 100).',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.lorenz',
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.4' },
  },
  {
    id: 'line-of-equality',
    term: { en: 'line of equality', ru: 'линия равенства (line of equality)' },
    def: {
      en: 'The 45 degree line on a Lorenz diagram, where each share of the population receives the same share of income.',
      ru: 'Прямая под углом 45 градусов на диаграмме Лоренца, на которой каждая доля населения получает такую же долю дохода.',
    },
    example: {
      en: 'If the bottom 50% of people receive 50% of income, the Lorenz curve touches the line of equality at that point.',
      ru: 'Если нижние 50% людей получают 50% дохода, кривая Лоренца касается линии равенства в этой точке.',
    },
    pitfall: {
      en: 'Equal income does not mean equal wealth; the line of equality is about shares of income only.',
      ru: 'Равный доход не означает равного богатства; линия равенства относится только к долям дохода.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.lorenz',
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.4' },
  },
  {
    id: 'gini-coefficient',
    term: { en: 'Gini coefficient', ru: 'коэффициент Джини (Gini coefficient)' },
    def: {
      en: 'A measure of income inequality from 0 to 1, equal to area A divided by the sum of areas A and B on the Lorenz diagram.',
      ru: 'Мера неравенства доходов от 0 до 1, равная площади A, делённой на сумму площадей A и B на диаграмме Лоренца.',
    },
    example: {
      en: 'With A = 1000 and B = 4000, G = 1000 / 5000 = 0.20.',
      ru: 'При A = 1000 и B = 4000 коэффициент G = 1000 / 5000 = 0,20.',
    },
    pitfall: {
      en: 'The Gini is a ratio between 0 and 1, not a percentage: 0.40 shows more inequality than 0.20.',
      ru: 'Коэффициент Джини — это отношение от 0 до 1, а не процент: 0,40 означает большее неравенство, чем 0,20.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.lorenz',
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.4' },
  },
  {
    id: 'absolute-poverty',
    term: { en: 'absolute poverty', ru: 'абсолютная бедность (absolute poverty)' },
    def: {
      en: 'A situation in which income is too low to buy the basic necessities of life, such as food, shelter, clothing and safe water.',
      ru: 'Ситуация, когда доход слишком низок, чтобы купить минимально необходимое: еду, жильё, одежду и безопасную воду.',
    },
    example: {
      en: 'A family earning 1500 AED a month cannot afford enough food, rent and water for a fixed basket of necessities, so it is in absolute poverty.',
      ru: 'Семья, зарабатывающая 1500 AED в месяц, не может позволить себе достаточно еды, жилья и воды для фиксированного набора необходимого, поэтому живёт в абсолютной бедности.',
    },
    pitfall: {
      en: 'Absolute poverty uses a fixed standard of living, so it does not fall just because average incomes rise.',
      ru: 'Абсолютная бедность определяется по фиксированному уровню жизни, поэтому она не снижается лишь потому, что средние доходы растут.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.4' },
  },
  {
    id: 'relative-poverty',
    term: { en: 'relative poverty', ru: 'относительная бедность (relative poverty)' },
    def: {
      en: 'A situation in which household income is well below the typical income in its society, for example below half the median income.',
      ru: 'Ситуация, когда доход домохозяйства заметно ниже типичного дохода в обществе, например ниже половины медианного дохода.',
    },
    example: {
      en: 'If median income is 6000 AED a month, a household earning less than 3000 AED is in relative poverty.',
      ru: 'Если медианный доход составляет 6000 AED в месяц, домохозяйство с доходом менее 3000 AED находится в относительной бедности.',
    },
    pitfall: {
      en: 'Relative poverty can rise even when everyone has a higher income, if the incomes of the poorest grow more slowly than the median.',
      ru: 'Относительная бедность может расти даже при росте доходов у всех, если доходы беднейших растут медленнее медианы.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.4' },
  },
  {
    id: 'human-capital',
    term: { en: 'human capital', ru: 'человеческий капитал (human capital)' },
    def: {
      en: 'The skills, knowledge and health of workers, which raise their productivity and their ability to earn income.',
      ru: 'Навыки, знания и здоровье работников, которые повышают их производительность и способность зарабатывать доход.',
    },
    example: {
      en: 'Illustratively, one extra year of schooling raises a worker pay by 8%, which reduces inequality over time.',
      ru: 'Условно говоря, ещё один год обучения повышает оплату работника на 8%, что со временем снижает неравенство.',
    },
    pitfall: {
      en: 'Human capital is built slowly through education and health, so its effect on inequality takes years to show.',
      ru: 'Человеческий капитал формируется медленно, через образование и здоровье, поэтому его влияние на неравенство проявляется годами.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.4' },
  },
  {
    id: 'transfer-payments',
    term: { en: 'transfer payments', ru: 'трансфертные платежи (transfer payments)' },
    def: {
      en: 'Payments by government to households without a good or service in return, such as benefits, pensions and child allowances.',
      ru: 'Выплаты государства домохозяйствам без встречного товара или услуги, например пособия, пенсии и детские выплаты.',
    },
    example: {
      en: 'A monthly child allowance of 500 AED paid to a low-income family is a transfer payment that raises its income.',
      ru: 'Ежемесячное пособие на ребёнка в 500 AED, выплачиваемое семье с низким доходом, — трансфертный платёж, который повышает её доход.',
    },
    pitfall: {
      en: 'Transfers are not government spending on goods and services; they redistribute income and are not counted in GDP.',
      ru: 'Трансферты — это не государственные закупки товаров и услуг; они перераспределяют доход и не входят в ВВП.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.4' },
  },
  {
    id: 'minimum-wage',
    term: { en: 'minimum wage', ru: 'минимальная заработная плата (minimum wage)' },
    def: {
      en: 'A legal floor on the hourly or monthly pay that employers may offer to workers, set by government.',
      ru: 'Законодательно установленный нижний предел оплаты труда (почасовой или месячной), который работодатели не вправе снижать.',
    },
    example: {
      en: 'A minimum wage of 25 AED an hour means that no employer may pay a worker less than 25 AED per hour.',
      ru: 'Минимальная оплата 25 AED в час означает, что ни один работодатель не может платить работнику меньше 25 AED в час.',
    },
    pitfall: {
      en: 'A minimum wage raises pay for those who keep their jobs, but it may increase unemployment if it is set above the market wage.',
      ru: 'Минимальная зарплата повышает оплату тем, кто сохраняет работу, но может увеличить безработицу, если установлена выше рыночной ставки.',
    },
    syllabus: '3.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.4' },
  },
];
