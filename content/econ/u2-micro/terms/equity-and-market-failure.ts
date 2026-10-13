import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'equity',
    term: { en: 'equity', ru: 'справедливость (equity)' },
    def: {
      en: 'Fairness in the distribution of income, wealth and opportunities, judged by what people receive rather than only by how efficiently resources are used.',
      ru: 'Справедливость в распределении доходов, богатства и возможностей, которая оценивается по тому, что получают люди, а не только по эффективности использования ресурсов.',
    },
    example: {
      en: 'A market may give one household AED 300000 a year and another AED 30000, both for legal work, which raises questions of equity.',
      ru: 'Рынок может дать одному домохозяйству 300000 AED в год, а другому 30000 AED за законную работу, и это ставит вопрос о справедливости.',
    },
    pitfall: {
      en: 'Equity is a normative judgement about fairness; an efficient outcome can still be very unequal.',
      ru: 'Справедливость — нормативное суждение о честности распределения; эффективный исход может быть очень неравным.',
    },
    syllabus: '2.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.12' },
  },
  {
    id: 'equity-efficiency-trade-off',
    term: { en: 'equity-efficiency trade-off', ru: 'компромисс между справедливостью и эффективностью (equity-efficiency trade-off)' },
    def: {
      en: 'The conflict in which a policy that makes outcomes fairer, such as a progressive tax or a transfer, can reduce efficiency, for example by weakening incentives to work, save or invest.',
      ru: 'Конфликт, при котором политика, делающая исходы справедливее (например, прогрессивный налог или трансферт), может снизить эффективность, ослабляя стимулы работать, копить или инвестировать.',
    },
    example: {
      en: 'Raising the top tax rate from 20% to 40% on incomes above AED 500000 may reduce hours worked by high earners, so output falls slightly.',
      ru: 'Повышение верхней ставки налога с 20% до 40% на доходы выше 500000 AED может сократить рабочее время высокооплачиваемых работников, и выпуск немного упадёт.',
    },
    pitfall: {
      en: 'The trade-off is not always present: policies such as education spending can improve both equity and efficiency.',
      ru: 'Компромисс есть не всегда: например, расходы на образование могут улучшать и справедливость, и эффективность.',
    },
    syllabus: '2.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.12' },
  },
  {
    id: 'horizontal-equity',
    term: { en: 'horizontal equity', ru: 'горизонтальная справедливость (horizontal equity)' },
    def: {
      en: 'The principle that people in similar circumstances, such as similar incomes, should be treated in the same way, for example by paying the same tax.',
      ru: 'Принцип, по которому люди в одинаковом положении, например с одинаковым доходом, должны обращаться одинаково, например платить одинаковый налог.',
    },
    example: {
      en: 'Two employees who each earn AED 10000 a month should pay the same income tax, so that neither is treated more favourably.',
      ru: 'Два сотрудника, которые зарабатывают по 10000 AED в месяц, должны платить одинаковый подоходный налог, чтобы никто не получал преимущества.',
    },
    pitfall: {
      en: 'Horizontal equity does not say that the rich should pay more; that is a question of vertical equity.',
      ru: 'Горизонтальная справедливость не требует, чтобы богатые платили больше; это вопрос вертикальной справедливости.',
    },
    syllabus: '2.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.12' },
  },
  {
    id: 'vertical-equity',
    term: { en: 'vertical equity', ru: 'вертикальная справедливость (vertical equity)' },
    def: {
      en: 'The principle that people in different circumstances, such as different incomes, should be treated differently, so that those with a greater ability to pay contribute more.',
      ru: 'Принцип, по которому люди в разном положении, например с разными доходами, должны обращаться по-разному: те, кто может платить больше, вносят больший вклад.',
    },
    example: {
      en: 'A person earning AED 150000 a year pays a higher average tax rate than one earning AED 50000, because the tax schedule is progressive.',
      ru: 'Человек с доходом 150000 AED в год платит более высокую среднюю ставку налога, чем человек с доходом 50000 AED, потому что шкала налога прогрессивна.',
    },
    pitfall: {
      en: 'Vertical equity is about different treatment for different ability to pay, not about any difference in treatment.',
      ru: 'Вертикальная справедливость — это разное обращение с людьми с разной платёжеспособностью, а не любое различие в обращении.',
    },
    syllabus: '2.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.12' },
  },
  {
    id: 'progressive-tax',
    term: { en: 'progressive tax', ru: 'прогрессивный налог (progressive tax)' },
    def: {
      en: 'A tax whose average tax rate rises as income rises, so people with higher incomes pay a larger share of their income in tax.',
      ru: 'Налог, при котором средняя ставка растёт по мере роста дохода, поэтому люди с более высокими доходами платят большую долю своего дохода в виде налога.',
    },
    example: {
      en: 'A tax of 10% on the first AED 100000 of income and 30% on the rest gives an average rate of 10% at AED 100000 and 20% at AED 200000.',
      ru: 'Налог 10% с первых 100000 AED дохода и 30% с остального даёт среднюю ставку 10% при доходе 100000 AED и 20% при доходе 200000 AED.',
    },
    pitfall: {
      en: 'A progressive tax can have a low top rate; what matters is that the average rate rises with income.',
      ru: 'Прогрессивный налог может иметь низкую верхнюю ставку; важно, что средняя ставка растёт с доходом.',
    },
    syllabus: '2.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.12' },
  },
  {
    id: 'proportional-tax',
    term: { en: 'proportional tax', ru: 'пропорциональный налог (proportional tax)' },
    def: {
      en: 'A tax that takes the same percentage of income at every income level, so the average tax rate stays constant as income rises.',
      ru: 'Налог, который забирает одинаковый процент дохода на любом уровне дохода, поэтому средняя ставка не меняется при росте дохода.',
    },
    example: {
      en: 'A flat income tax of 15% takes AED 15000 from someone earning AED 100000 and AED 45000 from someone earning AED 300000.',
      ru: 'Плоский налог 15% забирает 15000 AED у человека с доходом 100000 AED и 45000 AED у человека с доходом 300000 AED.',
    },
    pitfall: {
      en: 'A proportional tax takes a constant share of income, not a constant amount; the amount paid still rises with income.',
      ru: 'Пропорциональный налог забирает постоянную долю дохода, а не постоянную сумму; уплачиваемая сумма всё равно растёт с доходом.',
    },
    syllabus: '2.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.12' },
  },
  {
    id: 'regressive-tax',
    term: { en: 'regressive tax', ru: 'регрессивный налог (regressive tax)' },
    def: {
      en: 'A tax that takes a larger share of income from low earners than from high earners, so the average tax rate falls as income rises.',
      ru: 'Налог, который забирает большую долю дохода у низкооплачиваемых, чем у высокооплачиваемых, поэтому средняя ставка падает с ростом дохода.',
    },
    example: {
      en: 'A 5% sales tax on food takes a larger share of income from a household earning AED 4000 a month, which spends most of it on food, than from one earning AED 40000 a month.',
      ru: 'Налог с продаж 5% на продукты забирает большую долю дохода у семьи с доходом 4000 AED в месяц, которая тратит на продукты большую часть дохода, чем у семьи с доходом 40000 AED в месяц.',
    },
    pitfall: {
      en: 'A tax with the same rate for everyone is not automatically regressive; it is regressive only if the share of income paid falls as income rises.',
      ru: 'Налог с одинаковой ставкой для всех не обязательно регрессивен; он регрессивен, только если доля дохода, уплачиваемая в налог, падает с ростом дохода.',
    },
    syllabus: '2.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.12' },
  },
  {
    id: 'average-tax-rate',
    term: { en: 'average tax rate', ru: 'средняя ставка налога (average tax rate)' },
    def: {
      en: 'Total tax paid divided by income, usually written as a percentage or decimal; it is the basis for judging whether a tax is progressive, proportional or regressive.',
      ru: 'Общая уплаченная сумма налога, делённая на доход; выражается в процентах или десятичной дроби и служит основой для вывода о том, прогрессивный, пропорциональный или регрессивный налог.',
    },
    example: {
      en: 'A person who earns AED 150000 and pays AED 45000 in tax has an average tax rate of 0.30, or 30%.',
      ru: 'Человек, который зарабатывает 150000 AED и платит 45000 AED налога, имеет среднюю ставку 0,30, или 30%.',
    },
    pitfall: {
      en: 'The average tax rate is not the marginal tax rate, which is the share of the last extra unit of income paid in tax.',
      ru: 'Средняя ставка налога — не то же, что предельная ставка, то есть доля налога с последней дополнительной единицы дохода.',
    },
    syllabus: '2.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.12' },
  },
  {
    id: 'transfer-payment',
    term: { en: 'transfer payment', ru: 'трансферт (transfer payment)' },
    def: {
      en: 'A payment from government to households, such as pensions or unemployment benefit, for which no good or service is produced in return.',
      ru: 'Платёж от государства домохозяйствам, например пенсия или пособие по безработице, за который не производится никакого товара или услуги взамен.',
    },
    example: {
      en: 'A worker who loses a job receives an unemployment benefit of AED 3000 a month, which supports spending while the worker looks for a new job.',
      ru: 'Работник, потерявший место, получает пособие по безработице 3000 AED в месяц, которое поддерживает расходы, пока работник ищет новую работу.',
    },
    pitfall: {
      en: 'Transfers are not spending on goods or services, so they are not part of GDP when paid; they change who has the income.',
      ru: 'Трансферты — это не покупка товаров и услуг, поэтому при выплате они не входят в ВВП; меняется только то, у кого есть доход.',
    },
    syllabus: '2.12',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.12' },
  },
];
