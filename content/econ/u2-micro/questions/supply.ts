import type { Question } from '../../../../src/contract/types';

// Supply questions. The calculation (econ-supply-01) is checked by scripts/econ-checks/supply.json.
export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-supply-01',
    subject: 'econ',
    topicIds: ['supply'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'A firm adopts a new technology that lowers its costs. At a price of AED 10 per unit, the quantity supplied rises from 1200 to 1500 units per week. Calculate the percentage change in supply at this price. Use the formula (new - old) / old x 100 and give your answer to one decimal place.',
      ru: 'Фирма внедряет новую технологию, которая снижает её издержки. При цене 10 AED за единицу величина предложения растёт с 1200 до 1500 единиц в неделю. Рассчитайте процентное изменение предложения при этой цене. Используйте формулу (новое - старое) / старое x 100 и дайте ответ с одним знаком после запятой.',
    },
    markscheme: {
      en: '1 mark: change in supply = 1500 - 1200 = 300 units per week. 1 mark: % change = 300 / 1200 x 100 = 25.0%.',
      ru: '1 балл: изменение предложения = 1500 - 1200 = 300 единиц в неделю. 1 балл: процентное изменение = 300 / 1200 x 100 = 25,0%.',
    },
    answer: '25.0',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-supply-02',
    subject: 'econ',
    topicIds: ['supply'],
    paper: 'P2',
    marks: 3,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between a movement along the supply curve and a shift of the supply curve. Give one cause of each.',
      ru: 'Различите движение вдоль кривой предложения (movement along the supply curve) и сдвиг кривой предложения (shift of the supply curve). Укажите по одной причине для каждого случая.',
    },
    markscheme: {
      en: '1 mark: a movement along the curve is a change in quantity supplied caused only by a change in the price of the good itself. 1 mark: a shift is a change in supply caused by a non-price determinant, so the whole curve moves left or right. 1 mark: a correct cause for each, for example a rise in the price of the good itself for a movement, and a rise in wage costs for a leftward shift.',
      ru: '1 балл: движение вдоль кривой — изменение величины предложения, вызванное только изменением цены самого товара. 1 балл: сдвиг — изменение предложения под влиянием неценового фактора; вся кривая сдвигается влево или вправо. 1 балл: верная причина для каждого случая, например рост цены самого товара для движения и рост зарплатных издержек для сдвига влево.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-supply-03',
    subject: 'econ',
    topicIds: ['supply'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how a rise in the price of barley affects the supply of wheat for a farmer who can grow either crop on the same land. Use a supply diagram in your answer.',
      ru: 'Объясните, как рост цены ячменя влияет на предложение пшеницы для фермера, который может вырастить любую из двух культур на одной и той же земле. Используйте диаграмму предложения в ответе.',
    },
    markscheme: {
      en: '1 mark: wheat and barley compete for the same land, so the farmer moves land to barley when the price of barley rises. 1 mark: the opportunity cost of growing wheat rises, so the farmer offers less wheat at each price. 1 mark: the supply curve of wheat shifts left (S1 to S2), which is a change in supply. 1 mark: a labelled supply diagram with price on the vertical axis, quantity on the horizontal axis and S1 and S2, showing less wheat supplied at the same price.',
      ru: '1 балл: пшеница и ячмень конкурируют за одну землю, поэтому при росте цены ячменя фермер переводит землю под ячмень. 1 балл: альтернативные издержки (opportunity cost) выращивания пшеницы растут, поэтому при каждой цене предлагается меньше пшеницы. 1 балл: кривая предложения пшеницы сдвигается влево (S1 к S2): это изменение предложения. 1 балл: подписанная диаграмма предложения: цена по вертикальной оси, количество по горизонтальной, кривые S1 и S2, при той же цене предлагается меньше.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'econ-supply-04',
    subject: 'econ',
    topicIds: ['supply'],
    paper: 'P2',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'Outline the law of supply and give one reason why it holds.',
      ru: 'Изложите закон предложения (law of supply) и приведите одну причину, по которой он действует.',
    },
    markscheme: {
      en: '1 mark: as the price of a good rises, the quantity supplied rises, ceteris paribus (a positive relationship). 1 mark: a valid reason, such as a higher price makes production more profitable, or the marginal cost of each extra unit rises, so a higher price is needed to supply more.',
      ru: '1 балл: при росте цены товара величина предложения растёт при прочих равных (положительная связь). 1 балл: верная причина, например более высокая цена делает производство выгоднее или предельные издержки (marginal cost) каждой дополнительной единицы растут, поэтому для большего выпуска нужна более высокая цена.',
    },
    origin: 'original',
    minutes: 3,
  },
];
