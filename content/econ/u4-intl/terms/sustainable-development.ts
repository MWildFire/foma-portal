import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'sustainable-development',
    term: { en: 'sustainable development', ru: 'устойчивое развитие (sustainable development)' },
    def: {
      en: 'Development that satisfies current needs without limiting the options of future generations, balancing economic, social and environmental goals.',
      ru: 'Развитие, которое удовлетворяет текущие потребности, не ограничивая возможности будущих поколений, и сбалансировано по экономическим, социальным и экологическим целям.',
    },
    syllabus: '4.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.7' },
    example: {
      en: 'A fishery that caps its catch at 10% of the stock each year keeps the stock for future catches while still giving jobs to local crews.',
      ru: 'Рыбный промысел, который ограничивает вылов 10% запаса в год, сохраняет запас для будущих уловов и при этом даёт работу местным командам.',
    },
    pitfall: {
      en: 'Sustainable development is not the same as environmental protection: all three dimensions must be considered together.',
      ru: 'Устойчивое развитие — не то же самое, что защита окружающей среды: все три измерения нужно учитывать вместе.',
    },
  },
  {
    id: 'natural-capital',
    term: { en: 'natural capital', ru: 'природный капитал (natural capital)' },
    def: {
      en: 'The stock of natural resources and ecosystems, such as forests, fish stocks, clean air and soil, that yields goods and services over time.',
      ru: 'Запас природных ресурсов и экосистем, таких как леса, рыбные запасы, чистый воздух и почва, который на протяжении времени даёт людям блага и услуги.',
    },
    syllabus: '4.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.7' },
    example: {
      en: 'A fishery that takes 150 tonnes from a stock that regrows only 100 tonnes a year is running down its natural capital by 50 tonnes a year.',
      ru: 'Рыбный промысел, который вылавливает 150 тонн из запаса, восстанавливающегося только на 100 тонн в год, сокращает природный капитал на 50 тонн в год.',
    },
    pitfall: {
      en: 'Natural capital is a stock and the yield it gives is a flow; using more than the regeneration rate depletes the stock.',
      ru: 'Природный капитал — это запас, а отдача от него — поток; использование больше, чем восстанавливается, истощает запас.',
    },
  },
  {
    id: 'intergenerational-equity',
    term: { en: 'intergenerational equity', ru: 'межпоколенческая справедливость (intergenerational equity)' },
    def: {
      en: 'Fairness between generations: the present should not leave future generations with less natural capital or fewer opportunities than it had.',
      ru: 'Справедливость между поколениями: нынешнее поколение не должно оставлять будущим поколениям меньше природного капитала или возможностей, чем получило само.',
    },
    syllabus: '4.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.7' },
    example: {
      en: 'Spending today and leaving the bill for 30 years of future taxpayers raises a question of intergenerational equity.',
      ru: 'Траты сегодня при переносе счёта на следующие 30 лет будущих налогоплательщиков ставят вопрос межпоколенческой справедливости.',
    },
    pitfall: {
      en: 'Intergenerational equity concerns people who cannot vote or pay today, so it is not the same as equal incomes today.',
      ru: 'Межпоколенческая справедливость касается людей, которые пока не могут голосовать и платить, поэтому это не то же, что равные доходы сегодня.',
    },
  },
  {
    id: 'carbon-tax',
    term: { en: 'carbon tax', ru: 'углеродный налог (carbon tax)' },
    def: {
      en: 'A tax levied per unit of carbon dioxide emitted, or on the carbon content of fuel, so that polluters pay the external cost of their emissions.',
      ru: 'Налог, который взимается за каждую единицу выброшенного углекислого газа или за углеродное содержание топлива, чтобы загрязнители платили за внешние издержки своих выбросов.',
    },
    syllabus: '4.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.7' },
    example: {
      en: 'A tax of AED 50 per tonne of CO2 (hypothetical) raises the cost of coal power per unit, so firms cut emissions or switch fuels.',
      ru: 'Налог AED 50 за тонну CO2 (гипотетически) повышает издержки угольной энергетики за каждую единицу, поэтому фирмы сокращают выбросы или меняют топливо.',
    },
    pitfall: {
      en: 'A carbon tax raises the price of emitting; it is not a tax on profit or on the total output of a firm.',
      ru: 'Углеродный налог повышает цену выбросов; это не налог на прибыль и не налог на общий выпуск фирмы.',
    },
  },
  {
    id: 'emissions-trading-scheme',
    term: { en: 'emissions trading scheme', ru: 'система торговли квотами на выбросы (emissions trading scheme)' },
    def: {
      en: 'A cap-and-trade application of tradable permits: the government sets a limit on total emissions, and firms can buy and sell the permits within that limit.',
      ru: 'Применение торгуемых разрешений по схеме «ограничение и торговля» (cap-and-trade): государство задаёт предел общих выбросов, а фирмы могут покупать и продавать разрешения в пределах этого лимита.',
    },
    syllabus: '4.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.7' },
    example: {
      en: 'If the cap allows 100 permits and a firm needs only 80, it can sell its 20 spare permits to a firm that needs more.',
      ru: 'Если лимит даёт 100 разрешений, а фирме нужно 80, она может продать 20 лишних разрешений фирме, которой их не хватает.',
    },
    pitfall: {
      en: 'The cap fixes the quantity of emissions and the market sets the permit price; a carbon tax does the opposite.',
      ru: 'Лимит фиксирует объём выбросов, а рынок задаёт цену разрешений; углеродный налог работает наоборот.',
    },
  },
  {
    id: 'renewable-energy-subsidy',
    term: { en: 'renewable energy subsidy', ru: 'субсидия на возобновляемую энергию (renewable energy subsidy)' },
    def: {
      en: 'A payment or tax concession that lowers the cost of producing or using renewable energy, such as solar or wind power, to encourage its use.',
      ru: 'Выплата или налоговая льгота, которая снижает издержки производства или использования возобновляемой энергии, например солнечной или ветровой, чтобы стимулировать её применение.',
    },
    syllabus: '4.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.7' },
    example: {
      en: 'A feed-in tariff of AED 0.20 per kWh (hypothetical) pays solar producers more than the market price, so more solar capacity is built.',
      ru: 'Фиксированный тариф AED 0,20 за кВт·ч (гипотетически) платит солнечным производителям больше рыночной цены, поэтому строится больше солнечных мощностей.',
    },
    pitfall: {
      en: 'A subsidy corrects under-provision caused by external benefits, but it costs taxpayers money.',
      ru: 'Субсидия исправляет недопроизводство, вызванное внешними выгодами, но стоит налогоплательщикам денег.',
    },
  },
  {
    id: 'carbon-leakage',
    term: { en: 'carbon leakage', ru: 'утечка углерода (carbon leakage)' },
    def: {
      en: 'The shift of production and its emissions to countries with weaker climate policies, which reduces the global benefit of a national carbon policy.',
      ru: 'Перенос производства и связанных с ним выбросов в страны со слабой климатической политикой, что снижает мировой эффект национальной углеродной политики.',
    },
    syllabus: '4.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.7' },
    example: {
      en: 'A steel plant that moves 2 million tonnes of production abroad to avoid a carbon price cuts national emissions while global emissions stay the same or rise.',
      ru: 'Сталелитейный завод, который переносит производство на 2 млн тонн за границу, чтобы не платить за углерод, сокращает национальные выбросы, а мировые остаются прежними или растут.',
    },
    pitfall: {
      en: 'Carbon leakage concerns global emissions; a fall in national emissions alone does not show that the policy works.',
      ru: 'Утечка углерода касается мировых выбросов; снижение национальных выбросов само по себе не доказывает, что политика работает.',
    },
  },
  {
    id: 'command-and-control-regulation',
    term: { en: 'command-and-control regulation', ru: 'прямое регулирование (command-and-control regulation)' },
    def: {
      en: 'Legal limits, standards or bans on pollution or resource use, enforced by inspection and penalties rather than through prices.',
      ru: 'Законодательные ограничения, стандарты или запреты на загрязнение и использование ресурсов, которые обеспечиваются проверками и штрафами, а не через цены.',
    },
    syllabus: '4.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.7' },
    example: {
      en: 'A law that caps sulphur in fuel at 0.5% and fines a firm AED 100,000 for each breach is a command-and-control policy.',
      ru: 'Закон, который ограничивает содержание серы в топливе 0,5% и штрафует фирму на AED 100 000 за каждое нарушение, — это прямое регулирование.',
    },
    pitfall: {
      en: 'Regulation gives certainty about the result but may not find the cheapest way to cut pollution, unlike a carbon tax.',
      ru: 'Регулирование даёт уверенность в результате, но не обязательно находит самый дешёвый способ сократить загрязнение, в отличие от углеродного налога.',
    },
  },
];
