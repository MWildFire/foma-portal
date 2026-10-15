import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: "mock-hl-negative-consumption",
    subject: "econ",
    topicIds: [
      "externalities"
    ],
    paper: "P3",
    marks: 2,
    command: "Calculate",
    prompt: {
      en: "In an illustrative market with a negative consumption externality, the gap between market and optimal output is 4 thousand units; the relevant marginal external benefit or cost at market output is AED 6 per unit. Curves are linear. Calculate the welfare loss in AED thousand.",
      ru: "В условном рынке с отрицательным внешним эффектом потребления разрыв между рыночным и оптимальным выпуском равен 4 тыс. единиц; соответствующая предельная внешняя выгода или издержки при рыночном выпуске — 6 AED на единицу. Кривые линейны. Рассчитайте потери благосостояния в тыс. AED."
    },
    markscheme: {
      en: "1 mark: triangle area = 0.5 × 4 × 6. 1 mark: AED 12 thousand. This is the gain forgone between the market and the social optimum.",
      ru: "1 балл: площадь треугольника = 0,5 × 4 × 6. 1 балл: 12 тыс. AED. Это упущенная выгода между рыночным исходом и общественным оптимумом."
    },
    origin: "original",
    minutes: 4,
    answer: "12"
  },
  {
    id: "mock-hl-positive-production",
    subject: "econ",
    topicIds: [
      "externalities"
    ],
    paper: "P3",
    marks: 2,
    command: "Calculate",
    prompt: {
      en: "In an illustrative market with a positive production externality, the gap between market and optimal output is 5 thousand units; the relevant marginal external benefit or cost at market output is AED 8 per unit. Curves are linear. Calculate the welfare loss in AED thousand.",
      ru: "В условном рынке с положительным внешним эффектом производства разрыв между рыночным и оптимальным выпуском равен 5 тыс. единиц; соответствующая предельная внешняя выгода или издержки при рыночном выпуске — 8 AED на единицу. Кривые линейны. Рассчитайте потери благосостояния в тыс. AED."
    },
    markscheme: {
      en: "1 mark: triangle area = 0.5 × 5 × 8. 1 mark: AED 20 thousand. This is the gain forgone between the market and the social optimum.",
      ru: "1 балл: площадь треугольника = 0,5 × 5 × 8. 1 балл: 20 тыс. AED. Это упущенная выгода между рыночным исходом и общественным оптимумом."
    },
    origin: "original",
    minutes: 4,
    answer: "20"
  },
  {
    id: "mock-hl-positive-consumption",
    subject: "econ",
    topicIds: [
      "externalities"
    ],
    paper: "P3",
    marks: 2,
    command: "Calculate",
    prompt: {
      en: "In an illustrative market with a positive consumption externality, the gap between market and optimal output is 6 thousand units; the relevant marginal external benefit or cost at market output is AED 4 per unit. Curves are linear. Calculate the welfare loss in AED thousand.",
      ru: "В условном рынке с положительным внешним эффектом потребления разрыв между рыночным и оптимальным выпуском равен 6 тыс. единиц; соответствующая предельная внешняя выгода или издержки при рыночном выпуске — 4 AED на единицу. Кривые линейны. Рассчитайте потери благосостояния в тыс. AED."
    },
    markscheme: {
      en: "1 mark: triangle area = 0.5 × 6 × 4. 1 mark: AED 12 thousand. This is the gain forgone between the market and the social optimum.",
      ru: "1 балл: площадь треугольника = 0,5 × 6 × 4. 1 балл: 12 тыс. AED. Это упущенная выгода между рыночным исходом и общественным оптимумом."
    },
    origin: "original",
    minutes: 4,
    answer: "12"
  },
  {
    id: "mock-hl-lorenz",
    subject: "econ",
    topicIds: [
      "inequality-and-poverty"
    ],
    paper: "P3",
    marks: 4,
    command: "Construct",
    prompt: {
      en: "Income shares of five equal-sized groups, ordered from poorest to richest, are 5%, 10%, 15%, 25% and 45% (illustrative). Construct a Lorenz curve and the equality line.",
      ru: "Доли дохода пяти одинаковых по численности групп от беднейшей к богатейшей: 5%, 10%, 15%, 25% и 45% (условные данные). Постройте кривую Лоренца и линию равенства."
    },
    markscheme: {
      en: "1 mark: cumulative population 0, 20, 40, 60, 80, 100 on the horizontal axis. 1 mark: cumulative income 0, 5, 15, 30, 55, 100 on the vertical axis. 1 mark: join (0,0), (20,5), (40,15), (60,30), (80,55), (100,100). 1 mark: equality line from (0,0) to (100,100); both axes labelled in percentages.",
      ru: "1 балл: накопленная доля населения 0, 20, 40, 60, 80, 100 на горизонтальной оси. 1 балл: накопленная доля дохода 0, 5, 15, 30, 55, 100 на вертикальной. 1 балл: соединены точки (0;0), (20;5), (40;15), (60;30), (80;55), (100;100). 1 балл: линия равенства от (0;0) до (100;100), обе оси подписаны в процентах."
    },
    origin: "original",
    minutes: 8
  },
  {
    id: "mock-hl-indirect-tax",
    subject: "econ",
    topicIds: [
      "inequality-and-poverty"
    ],
    paper: "P3",
    marks: 2,
    command: "Calculate",
    prompt: {
      en: "An illustrative purchase costs AED 105 including a 5% indirect tax charged on the pre-tax price. Calculate the amount of tax included in the expenditure.",
      ru: "Условная покупка стоит 105 AED, включая косвенный налог 5% от цены без налога. Рассчитайте сумму налога в расходах."
    },
    markscheme: {
      en: "1 mark: pre-tax price = 105 / 1.05 = 100. 1 mark: tax = 105 − 100 = AED 5. Do not calculate 5% of the tax-inclusive price.",
      ru: "1 балл: цена без налога = 105 / 1,05 = 100. 1 балл: налог = 105 − 100 = 5 AED. Нельзя брать 5% от цены с налогом."
    },
    origin: "original",
    minutes: 4,
    answer: "5"
  },
  {
    id: "mock-hl-tax-rates",
    subject: "econ",
    topicIds: [
      "inequality-and-poverty"
    ],
    paper: "P3",
    marks: 6,
    command: "Calculate",
    prompt: {
      en: "A person earns AED 50000. The first AED 20000 is tax-free; the next AED 20000 is taxed at 10%; the remaining AED 10000 is taxed at 20% (illustrative system). Calculate total income tax and the average tax rate. State the marginal rate on an additional AED of income.",
      ru: "Человек получает 50000 AED. Первые 20000 AED не облагаются; следующие 20000 AED облагаются по 10%; оставшиеся 10000 AED — по 20% (условная система). Рассчитайте общую сумму подоходного налога и среднюю ставку. Назовите предельную ставку на дополнительный AED дохода."
    },
    markscheme: {
      en: "2 marks: tax = 20000 × 0.10 + 10000 × 0.20 = 2000 + 2000 = AED 4000. 2 marks: average rate = 4000/50000 × 100 = 8%. 2 marks: marginal rate = 20%, applied only to the additional income.",
      ru: "2 балла: налог = 20000 × 0,10 + 10000 × 0,20 = 2000 + 2000 = 4000 AED. 2 балла: средняя ставка = 4000/50000 × 100 = 8%. 2 балла: предельная ставка = 20%, применяется только к дополнительному доходу."
    },
    origin: "original",
    minutes: 12
  }
];
