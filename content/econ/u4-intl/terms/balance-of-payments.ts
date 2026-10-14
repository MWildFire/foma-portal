import type { Term } from '../../../../src/contract/types';

const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'balance-of-payments',
    term: { en: 'balance of payments', ru: 'платёжный баланс (balance of payments)' },
    def: {
      en: 'A record of all economic transactions between residents of a country and the rest of the world over a period, in which credits (inflows) always equal debits (outflows); it is split into the current, capital and financial accounts.',
      ru: 'Учёт всех экономических операций между резидентами страны и остальным миром за период, в котором кредиты (притоки) всегда равны дебетам (оттокам); он делится на счёт текущих операций, счёт капитала и финансовый счёт.',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 16, p. 509' },
    example: {
      en: 'Exports of AED 2 million by a UAE firm are recorded in the current account, and a foreign investor buying AED 5 million of shares is recorded in the financial account.',
      ru: 'Экспорт товаров на AED 2 млн учитывается в счёте текущих операций, а покупка иностранным инвестором акций на AED 5 млн — в финансовом счёте.',
    },
    pitfall: {
      en: 'The balance of payments records flows over a period, not a stock of debt or wealth at one moment.',
      ru: 'Платёжный баланс — это учёт потоков за период, а не запас долга или богатства на один момент.',
    },
  },
  {
    id: 'current-account',
    term: { en: 'current account', ru: 'счёт текущих операций (current account)' },
    def: {
      en: 'The part of the balance of payments that records trade in goods and services, net primary income (earnings on investment and work abroad) and net secondary income (transfers).',
      ru: 'Часть платёжного баланса, которая учитывает торговлю товарами и услугами, чистый первичный доход (доходы от инвестиций и работы за рубежом) и чистый вторичный доход (трансферты).',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 16, p. 512' },
    example: {
      en: 'Exports 420, imports 510, net primary income 35 and net secondary income -15 (AED million) give a current account of -70, a deficit of AED 70 million.',
      ru: 'Экспорт 420, импорт 510, чистый первичный доход 35 и чистый вторичный доход -15 (млн AED) дают сальдо -70, то есть дефицит AED 70 млн.',
    },
    pitfall: {
      en: 'Use net figures: income received from abroad minus income paid abroad, not the sum of gross flows.',
      ru: 'Используйте чистые величины: доходы, полученные из-за рубежа, минус доходы, выплаченные за рубеж, а не сумму валовых потоков.',
    },
    sim: 'econ.bop-accounts',
  },
  {
    id: 'capital-account',
    term: { en: 'capital account', ru: 'счёт капитала (capital account)' },
    def: {
      en: 'The part of the balance of payments that records capital transfers, such as debt forgiveness, and the acquisition or disposal of non-produced, non-financial assets, such as patents.',
      ru: 'Часть платёжного баланса, которая учитывает капитальные трансферты (например, списание долга) и приобретение или выбытие непроизведённых нефинансовых активов (например, патентов).',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 16, p. 512' },
    example: {
      en: 'When a government forgives a debt of AED 300 million owed by another government, the transfer is recorded in the capital account, which is usually small.',
      ru: 'Когда правительство списывает долг другого правительства на AED 300 млн, этот трансферт учитывается в счёте капитала, который обычно невелик.',
    },
    pitfall: {
      en: 'The capital account is not the financial account: investment and loans belong to the financial account.',
      ru: 'Счёт капитала — не то же самое, что финансовый счёт: инвестиции и кредиты относятся к финансовому счёту.',
    },
    sim: 'econ.bop-accounts',
  },
  {
    id: 'financial-account',
    term: { en: 'financial account', ru: 'финансовый счёт (financial account)' },
    def: {
      en: 'One of the three accounts of the balance of payments, alongside the current and capital accounts, that records direct and portfolio investment, official borrowing and reserve assets (official reserves).',
      ru: 'Один из трёх счетов платёжного баланса, наряду с текущим и капитальным, который учитывает прямые и портфельные инвестиции, официальные заимствования и резервные активы (официальные резервы).',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 16.4, p. 510' },
    example: {
      en: 'A German company buying a factory in Dubai for AED 50 million is an inflow of capital, shown as a positive entry in the UAE financial account.',
      ru: 'Немецкая компания, купившая завод в Дубае за AED 50 млн, создаёт приток капитала, который показан со знаком плюс в финансовом счёте ОАЭ.',
    },
    pitfall: {
      en: 'A capital inflow is a credit (plus sign) in the financial account, the same sign as an export in the current account.',
      ru: 'Приток капитала записывается со знаком плюс в финансовом счёте, так же как экспорт — в счёте текущих операций.',
    },
    sim: 'econ.bop-accounts',
  },
  {
    id: 'trade-balance',
    term: { en: 'trade balance', ru: 'торговый баланс (trade balance)' },
    def: {
      en: 'Exports of goods and services minus imports of goods and services over a period. A negative value is a trade deficit and a positive value a trade surplus.',
      ru: 'Стоимость экспорта товаров и услуг минус стоимость импорта товаров и услуг за период; отрицательное значение означает торговый дефицит, положительное — торговый профицит.',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 16, p. 511' },
    example: {
      en: 'Exports of AED 420 million and imports of AED 510 million give a trade deficit of AED 90 million.',
      ru: 'Экспорт AED 420 млн и импорт AED 510 млн дают торговый дефицит AED 90 млн.',
    },
    pitfall: {
      en: 'The trade balance is only the first part of the current account: income and transfers are added to it.',
      ru: 'Торговый баланс — лишь первая часть счёта текущих операций: к нему добавляются доходы и трансферты.',
    },
  },
  {
    id: 'terms-of-trade',
    term: { en: 'terms of trade', ru: 'условия торговли (terms of trade)' },
    def: {
      en: 'An index of the average export price relative to the average import price, with both indices on the same base year: export price index divided by import price index, times 100.',
      ru: 'Индекс средней цены экспорта относительно средней цены импорта при общем базовом годе: индекс цен экспорта, делённый на индекс цен импорта, умноженный на 100.',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.6' },
    example: {
      en: 'An export price index of 112 and an import price index of 96 give terms of trade of 116.7, so each unit of exports buys more imports than in the base year.',
      ru: 'Индекс цен экспорта 112 и индекс цен импорта 96 дают условия торговли 116,7: единица экспорта покупает больше импорта, чем в базовом году.',
    },
    pitfall: {
      en: 'A higher index means the same exports buy more imports; it does not show how much is traded.',
      ru: 'Более высокий индекс означает, что тот же экспорт покупает больше импорта; он не показывает, какой объём торговли происходит.',
    },
    sim: 'econ.terms-of-trade',
  },
  {
    id: 'j-curve',
    term: { en: 'J-curve', ru: 'J-кривая (J-curve)' },
    def: {
      en: 'The time path of the trade balance after a currency falls: it worsens at first, as import bills rise before volumes can change, then improves once export and import volumes adjust, if the Marshall-Lerner condition holds.',
      ru: 'Динамика торгового баланса после падения курса валюты: сначала баланс ухудшается, так как счета за импорт растут раньше, чем меняются объёмы, затем улучшается, когда объёмы экспорта и импорта подстраиваются, при условии выполнения условия Маршалла–Лернера.',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 17, p. 533' },
    example: {
      en: 'After a depreciation, a monthly trade deficit may widen from AED 90 million to AED 110 million in the first months and narrow to AED 60 million later (illustrative).',
      ru: 'После удешевления валюты месячный торговый дефицит может вырасти с AED 90 млн до AED 110 млн в первые месяцы и сократиться до AED 60 млн позже (иллюстративно).',
    },
    pitfall: {
      en: 'The J-curve describes a path over time, not a one-off change: a depreciation does not always improve the balance in the long run.',
      ru: 'J-кривая описывает путь во времени, а не разовое изменение: в долгом периоде удешевление не всегда улучшает баланс.',
    },
    sim: 'econ.j-curve',
  },
  {
    id: 'expenditure-switching-policy',
    term: { en: 'expenditure-switching policy', ru: 'политика переключения расходов (expenditure-switching policy)' },
    def: {
      en: 'A policy that shifts spending from imports to domestic goods and services, such as depreciation, tariffs or better non-price competitiveness.',
      ru: 'Политика, которая переводит расходы с импорта на отечественные товары и услуги: удешевление валюты, пошлины или улучшение неценовой конкурентоспособности.',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 17, p. 531' },
    example: {
      en: 'A 10% tariff on imported furniture makes it dearer, so households move part of their AED 20 million spending to local producers.',
      ru: 'Пошлина 10% на импортную мебель делает её дороже, поэтому домохозяйства переводят часть из AED 20 млн расходов местным производителям.',
    },
    pitfall: {
      en: 'Expenditure-switching policies change where demand goes, not how much is spent in total.',
      ru: 'Политика переключения меняет то, куда направлен спрос, но не общий объём расходов.',
    },
  },
  {
    id: 'expenditure-reducing-policy',
    term: { en: 'expenditure-reducing policy', ru: 'политика сокращения расходов (expenditure-reducing policy)' },
    def: {
      en: 'A policy that lowers total domestic spending, so that spending on imports falls too, such as contractionary fiscal or monetary policy.',
      ru: 'Политика, которая снижает совокупные расходы внутри страны, поэтому расходы на импорт тоже падают; например, сокращение госрасходов или ужесточение денежной политики.',
    },
    syllabus: '4.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 17, p. 531' },
    example: {
      en: 'Raising the policy interest rate by 1 percentage point cuts borrowing and spending, so imports fall, but output and jobs can fall too.',
      ru: 'Повышение ставки на 1 процентный пункт сокращает заимствования и расходы, поэтому импорт падает, но выпуск и рабочие места тоже могут сократиться.',
    },
    pitfall: {
      en: 'These policies lower imports by lowering incomes, so they carry a real cost in output and unemployment.',
      ru: 'Эти политики снижают импорт через снижение доходов, поэтому у них есть реальная цена в виде потерь выпуска и безработицы.',
    },
  },
];
