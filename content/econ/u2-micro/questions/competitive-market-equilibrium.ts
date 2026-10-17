import type { Question } from '../../../../src/contract/types';

// Competitive market equilibrium questions. Calculations 01 to 04 are checked by
// scripts/econ-checks/competitive-market-equilibrium.json (all numbers in the checks are written in the prompts).
export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-competitive-market-equilibrium-01',
    subject: 'econ',
    topicIds: ['competitive-market-equilibrium'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'In a competitive market, demand is Qd = 100 - 4P and supply is Qs = 10 + 3P, where Q is in thousand units per week and P is in AED per unit. Calculate the equilibrium price. Give your answer to two decimal places.',
      ru: 'На конкурентном рынке спрос задан уравнением Qd = 100 - 4P, а предложение — уравнением Qs = 10 + 3P, где Q — тыс. единиц в неделю, а P — цена в AED за единицу. Рассчитайте равновесную цену. Дайте ответ с двумя знаками после запятой.',
    },
    markscheme: {
      en: '1 mark: equilibrium condition Qd = Qs, so 100 - 4P = 10 + 3P. 1 mark: rearranged to 90 = 7P. 1 mark: P = 90 / 7 = 12.86 AED per unit, to two decimal places.',
      ru: '1 балл: условие равновесия Qd = Qs, то есть 100 - 4P = 10 + 3P. 1 балл: преобразовано к виду 90 = 7P. 1 балл: P = 90 / 7 = 12,86 AED за единицу, с двумя знаками после запятой.',
    },
    answer: '12.86',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-competitive-market-equilibrium-02',
    subject: 'econ',
    topicIds: ['competitive-market-equilibrium'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'Demand is Qd = 100 - 4P and supply is Qs = 10 + 3P, where Q is in thousand units per week and P is in AED per unit. The price is AED 12.50 per unit. Calculate the excess demand (shortage) at this price, in thousand units. Give your answer to one decimal place.',
      ru: 'Спрос задан уравнением Qd = 100 - 4P, предложение — уравнением Qs = 10 + 3P, где Q — тыс. единиц в неделю, а P — цена в AED за единицу. Цена равна 12,50 AED за единицу. Рассчитайте избыточный спрос (дефицит) при этой цене в тыс. единиц. Дайте ответ с одним знаком после запятой.',
    },
    markscheme: {
      en: '1 mark: Qd = 100 - 4 x 12.50 = 50 thousand units. 1 mark: Qs = 10 + 3 x 12.50 = 47.5 thousand units. 1 mark: excess demand = 50 - 47.5 = 2.5 thousand units, a shortage, because AED 12.50 is below the equilibrium price of AED 12.86.',
      ru: '1 балл: Qd = 100 - 4 x 12,50 = 50 тыс. единиц. 1 балл: Qs = 10 + 3 x 12,50 = 47,5 тыс. единиц. 1 балл: избыточный спрос = 50 - 47,5 = 2,5 тыс. единиц, то есть дефицит, так как цена 12,50 AED ниже равновесной цены 12,86 AED.',
    },
    answer: '2.5',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-competitive-market-equilibrium-03',
    subject: 'econ',
    topicIds: ['competitive-market-equilibrium'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'The consumer surplus in a market is shown as a triangle. The highest price consumers would pay is AED 20.00 and the equilibrium price is AED 6.50, so the height of the triangle is AED 13.50. The base of the triangle is the equilibrium quantity of 25 units. Calculate the consumer surplus in AED. Give your answer to two decimal places.',
      ru: 'Излишек потребителя на рынке изображён треугольником. Максимальная цена, которую готовы заплатить потребители, равна 20,00 AED, равновесная цена равна 6,50 AED, поэтому высота треугольника равна 13,50 AED. Основание треугольника — равновесное количество, 25 единиц. Рассчитайте излишек потребителя в AED. Дайте ответ с двумя знаками после запятой.',
    },
    markscheme: {
      en: '1 mark: area = 1/2 x base x height, with base = 25 units and height = AED 13.50. 1 mark: consumer surplus = 1/2 x 25 x 13.50 = AED 168.75.',
      ru: '1 балл: площадь = 1/2 x основание x высота, основание 25 единиц, высота 13,50 AED. 1 балл: излишек потребителя = 1/2 x 25 x 13,50 = 168,75 AED.',
    },
    answer: '168.75',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'econ-competitive-market-equilibrium-04',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['competitive-market-equilibrium'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'A firm in a perfectly competitive market sells 500 units at the market price of AED 12.40 per unit. Its total cost of producing these 500 units is AED 5487.50. Calculate the short-run profit of the firm in AED. Give your answer to two decimal places.',
      ru: 'Фирма на совершенно конкурентном рынке продаёт 500 единиц по рыночной цене 12,40 AED за единицу. Её общие издержки на производство этих 500 единиц равны 5487,50 AED. Рассчитайте краткосрочную прибыль фирмы в AED. Дайте ответ с двумя знаками после запятой.',
    },
    markscheme: {
      en: '1 mark: total revenue = 12.40 x 500 = AED 6200.00. 1 mark: profit = total revenue - total cost = 6200.00 - 5487.50 = AED 712.50, a supernormal profit because the price is above average total cost.',
      ru: '1 балл: общая выручка = 12,40 x 500 = 6200,00 AED. 1 балл: прибыль = общая выручка - общие издержки = 6200,00 - 5487,50 = 712,50 AED, это сверхнормальная прибыль, так как цена выше средних общих издержек.',
    },
    answer: '712.50',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'econ-competitive-market-equilibrium-05',
    subject: 'econ',
    topicIds: ['competitive-market-equilibrium'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Demand for a normal good increases. Using a diagram with price on the vertical axis and quantity on the horizontal axis, explain the effect of this increase in demand on the equilibrium price and the equilibrium quantity in a competitive market.',
      ru: 'Спрос на нормальное благо (normal good) возрастает. Используя диаграмму, на которой цена откладывается по вертикальной оси, а количество по горизонтальной, объясните, как это увеличение спроса повлияет на равновесную цену и равновесное количество на конкурентном рынке.',
    },
    markscheme: {
      en: '1 mark: demand shifts right (D1 to D2), so at the original price quantity demanded is greater than quantity supplied (excess demand). 1 mark: the price rises, which increases quantity supplied as a movement along the supply curve. 1 mark: the new equilibrium has a higher price and a higher quantity (P2 > P1 and Q2 > Q1). 1 mark: a labelled diagram with D1, D2, S, P1, P2, Q1 and Q2, with arrows showing the shift and the adjustment.',
      ru: '1 балл: спрос сдвигается вправо (D1 к D2), поэтому при прежней цене величина спроса больше величины предложения (избыточный спрос). 1 балл: цена растёт, и величина предложения увеличивается вдоль кривой предложения. 1 балл: новое равновесие с более высокой ценой и большим количеством (P2 > P1 и Q2 > Q1). 1 балл: подписанная диаграмма с D1, D2, S, P1, P2, Q1 и Q2 и стрелками, показывающими сдвиг и корректировку.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'econ-competitive-market-equilibrium-06',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['competitive-market-equilibrium'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why, in the long run, a firm in a perfectly competitive market earns only normal profit.',
      ru: 'Объясните, почему в долгосрочном периоде фирма на совершенно конкурентном рынке получает только нормальную прибыль.',
    },
    markscheme: {
      en: '1 mark: supernormal profit in the short run attracts new firms, because entry is free. 1 mark: entry shifts market supply to the right, so the price falls. 1 mark: the price keeps falling until it equals the minimum average total cost, so supernormal profit disappears. 1 mark: total revenue equals total cost, including opportunity cost, so the firm earns normal profit; losses would instead cause firms to exit.',
      ru: '1 балл: сверхнормальная прибыль в краткосрочном периоде привлекает новые фирмы, так как вход свободный. 1 балл: вход сдвигает рыночное предложение вправо, и цена падает. 1 балл: цена падает до минимума средних общих издержек, и сверхнормальная прибыль исчезает. 1 балл: выручка равна общим издержкам, включая альтернативные издержки, поэтому фирма получает нормальную прибыль; убытки привели бы к выходу фирм.',
    },
    origin: 'original',
    minutes: 5,
  },
];
