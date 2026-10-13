import type { Question } from '../../../../src/contract/types';

// Demand questions. The calculation (econ-demand-01) is checked by scripts/econ-checks/demand.json.
export const questions: Question[] = [
  {
    id: 'econ-demand-01',
    subject: 'econ',
    topicIds: ['demand'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'The demand for a normal good at a price of AED 5 per unit rises from 400 to 460 units per week after the incomes of consumers increase. Calculate the percentage change in demand at this price. Use the formula (new - old) / old x 100 and give your answer to one decimal place.',
      ru: 'Спрос на нормальное благо (normal good) при цене 5 AED за единицу вырос с 400 до 460 единиц в неделю после роста доходов потребителей. Рассчитайте процентное изменение спроса при этой цене. Используйте формулу (новое - старое) / старое x 100 и дайте ответ с одним знаком после запятой.',
    },
    markscheme: {
      en: '1 mark: change in demand = 460 - 400 = 60 units per week. 1 mark: % change = 60 / 400 x 100 = 15.0%.',
      ru: '1 балл: изменение спроса = 460 - 400 = 60 единиц в неделю. 1 балл: процентное изменение = 60 / 400 x 100 = 15,0%.',
    },
    answer: '15.0',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-demand-02',
    subject: 'econ',
    topicIds: ['demand'],
    paper: 'P1',
    marks: 3,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between a movement along the demand curve and a shift of the demand curve. Give one cause of each.',
      ru: 'Различите движение вдоль кривой спроса (movement along the demand curve) и сдвиг кривой спроса (shift of the demand curve). Укажите по одной причине для каждого случая.',
    },
    markscheme: {
      en: '1 mark: a movement along the curve is a change in quantity demanded caused only by a change in the price of the good itself. 1 mark: a shift is a change in demand caused by a non-price determinant, so the whole curve moves right or left. 1 mark: a correct cause for each, for example a fall in the price of the good itself for a movement, and a rise in income for a normal good for a shift.',
      ru: '1 балл: движение вдоль кривой — изменение величины спроса, вызванное только изменением цены самого товара. 1 балл: сдвиг — изменение спроса под влиянием неценового фактора; вся кривая сдвигается вправо или влево. 1 балл: верная причина для каждого случая, например падение цены самого товара для движения и рост дохода для нормального блага для сдвига.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-demand-03',
    subject: 'econ',
    topicIds: ['demand'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how a fall in the price of a complementary good affects the demand for a good. Use a demand diagram in your answer.',
      ru: 'Объясните, как падение цены товара-дополнителя (complementary good) влияет на спрос на данный товар. Используйте диаграмму спроса в ответе.',
    },
    markscheme: {
      en: '1 mark: the two goods are used together, so a fall in the price of the complement makes buying them together cheaper. 1 mark: demand for the good rises at each price. 1 mark: the demand curve shifts right (D1 to D2), which is a change in demand, not a movement along the curve. 1 mark: a labelled demand diagram with price on the vertical axis, quantity on the horizontal axis, D1 and D2, and a larger quantity at the original price.',
      ru: '1 балл: блага используются вместе, поэтому падение цены дополнителя делает совместную покупку дешевле. 1 балл: спрос на данный товар растёт при каждой цене. 1 балл: кривая спроса сдвигается вправо (D1 к D2): это изменение спроса, а не движение вдоль кривой. 1 балл: подписанная диаграмма спроса: цена по вертикальной оси, количество по горизонтальной, кривые D1 и D2, большее количество при прежней цене.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'econ-demand-04',
    subject: 'econ',
    topicIds: ['demand'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain two reasons why the demand curve for a good usually slopes downwards.',
      ru: 'Объясните две причины, по которым кривая спроса на товар обычно идёт вниз.',
    },
    markscheme: {
      en: '1 mark: a first valid reason, for example the substitution effect (a lower price makes the good cheaper than its alternatives). 1 mark: development of the first reason (buyers switch towards the cheaper good). 1 mark: a second valid reason, for example the income effect or diminishing marginal utility. 1 mark: development of the second reason (buyers can afford more, or each extra unit gives less extra satisfaction).',
      ru: '1 балл: первая верная причина, например эффект замены (substitution effect): более низкая цена делает товар дешевле его аналогов. 1 балл: развитие первой причины: покупатели переходят к более дешёвому товару. 1 балл: вторая верная причина, например эффект дохода (income effect) или убывающая предельная полезность (diminishing marginal utility). 1 балл: развитие второй причины: покупатели могут позволить себе больше, а каждая следующая единица приносит меньше дополнительного удовлетворения.',
    },
    origin: 'original',
    minutes: 6,
  },
];
