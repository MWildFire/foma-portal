import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-equity-and-market-failure-01',
    subject: 'econ',
    topicIds: ['equity-and-market-failure'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'Person A earns AED 50000 a year and pays AED 5000 in income tax. Person B earns AED 150000 a year and pays AED 45000 in income tax. Calculate the average tax rate of Person B, as a decimal to two decimal places, and state whether the tax is progressive.',
      ru: 'Человек A зарабатывает 50000 AED в год и платит 5000 AED подоходного налога. Человек B зарабатывает 150000 AED в год и платит 45000 AED подоходного налога. Рассчитайте среднюю ставку налога человека B в виде десятичной дроби с двумя знаками после запятой и укажите, является ли налог прогрессивным.',
    },
    markscheme: {
      en: '1 mark: average tax rate = tax paid / income; Person A: 5000 / 50000 = 0.10. 1 mark: Person B: 45000 / 150000 = 0.30, or 30%. 1 mark: the average rate rises from 0.10 to 0.30 as income rises, so the tax is progressive.',
      ru: '1 балл: средняя ставка налога = уплаченный налог / доход; человек A: 5000 / 50000 = 0,10. 1 балл: человек B: 45000 / 150000 = 0,30, или 30%. 1 балл: средняя ставка растёт с 0,10 до 0,30 по мере роста дохода, значит, налог прогрессивен.',
    },
    answer: '0.30',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-equity-and-market-failure-02',
    subject: 'econ',
    topicIds: ['equity-and-market-failure'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why a progressive income tax may reduce efficiency.',
      ru: 'Объясните, почему прогрессивный подоходный налог может снижать эффективность.',
    },
    markscheme: {
      en: '1 mark: a higher marginal tax rate reduces the reward from working or investing an extra unit of income. 1 mark: people may work fewer hours or choose less demanding, lower-paid jobs. 1 mark: some high earners may move income or wealth abroad or into tax-avoiding forms, which reduces tax revenue and the resources available. 1 mark: weaker incentives reduce the supply of labour and capital, so output may be lower than it would otherwise be.',
      ru: '1 балл: более высокая предельная ставка снижает награду за работу или инвестиции дополнительного дохода. 1 балл: люди могут работать меньше часов или выбирать менее сложную и хуже оплачиваемую работу. 1 балл: часть высокодоходных людей может переводить доход или капитал за границу либо уходить в схемы ухода от налога, что сокращает налоговые поступления и доступные ресурсы. 1 балл: слабые стимулы снижают предложение труда и капитала, поэтому выпуск может оказаться ниже, чем был бы иначе.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-equity-and-market-failure-03',
    subject: 'econ',
    topicIds: ['equity-and-market-failure'],
    paper: 'P1',
    marks: 4,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between a progressive tax and a regressive tax, using an example of each.',
      ru: 'Проведите различие между прогрессивным и регрессивным налогом, приведя по одному примеру каждого.',
    },
    markscheme: {
      en: '1 mark: a progressive tax has an average tax rate that rises as income rises. 1 mark: a regressive tax has an average tax rate that falls as income rises. 1 mark: an example of a progressive tax, such as income tax with rising bands. 1 mark: an example of a regressive tax, such as a flat sales tax on necessities, which takes a larger share of income from low earners.',
      ru: '1 балл: у прогрессивного налога средняя ставка растёт по мере роста дохода. 1 балл: у регрессивного налога средняя ставка падает по мере роста дохода. 1 балл: пример прогрессивного налога, например подоходный налог с растущими ставками по шкале. 1 балл: пример регрессивного налога, например плоский налог с продаж на товары первой необходимости, который забирает большую долю дохода у малообеспеченных.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-equity-and-market-failure-04',
    subject: 'econ',
    topicIds: ['equity-and-market-failure'],
    paper: 'P1',
    marks: 8,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the view that governments should always prioritise equity over efficiency when they design taxes and transfers.',
      ru: 'Оцените утверждение, что государство всегда должно ставить справедливость выше эффективности при разработке налогов и трансфертов.',
    },
    markscheme: {
      en: '1 mark: defines equity and efficiency and identifies the equity-efficiency trade-off. 1 mark: explains that markets can produce unequal outcomes, from differences in skills, wealth, luck, market power and discrimination. 1 mark: explains how progressive taxes and transfers reduce inequality, in line with vertical equity. 1 mark: explains the efficiency cost: incentive effects, such as less work, saving or investment, can reduce output. 1 mark: explains that some equity measures also raise efficiency, for example education and health spending that raise productivity. 1 mark: evaluates the value judgement: whether equity should come first depends on what society regards as fair and on the size of the efficiency loss. 1 mark: evaluates the design: policies with small disincentives, such as well-targeted transfers, can reduce inequality with little loss of efficiency. 1 mark: reaches a justified conclusion, for example that equity should not always come first; the balance depends on the size of the effects and on what society values.',
      ru: '1 балл: определяет справедливость и эффективность и выделяет компромисс между ними. 1 балл: объясняет, что рынки дают неравные результаты из-за различий в навыках, богатстве, везении, рыночной власти и дискриминации. 1 балл: объясняет, как прогрессивные налоги и трансферты уменьшают неравенство в духе вертикальной справедливости. 1 балл: объясняет издержки для эффективности: стимулы, например меньше работы, сбережений или инвестиций, могут снизить выпуск. 1 балл: объясняет, что некоторые меры справедливости также повышают эффективность, например расходы на образование и здравоохранение, которые повышают производительность. 1 балл: оценивает ценностное суждение: должна ли справедливость идти первой, зависит от того, что общество считает справедливым, и от размера потерь эффективности. 1 балл: оценивает конструкцию политики: меры с небольшими стимульными издержками, например адресные трансферты, могут уменьшить неравенство при небольшой потере эффективности. 1 балл: делает обоснованный вывод, например что справедливость не всегда должна идти первой; баланс зависит от размера эффектов и от ценностей общества.',
    },
    origin: 'original',
    minutes: 8,
  },
];
