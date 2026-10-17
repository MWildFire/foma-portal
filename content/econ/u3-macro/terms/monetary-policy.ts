import type { Term } from '../../../../src/contract/types';

// Definitions are in our own words. Terms the textbook defines (Tragakes, Economics for the IB Diploma:
// Coursebook) carry a textbook locator: chapter, section and printed page. Terms the book does not define
// keep the IB DP Economics subject guide (2020) as their source.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'monetary-policy',
    term: { en: 'monetary policy', ru: 'монетарная политика (monetary policy)' },
    def: {
      en: 'Central bank actions that change the money supply, interest rates and credit to influence aggregate demand and reach macroeconomic objectives.',
      ru: 'Действия центрального банка, которые меняют денежную массу, процентные ставки и кредит, чтобы влиять на совокупный спрос и достигать макроэкономических целей.',
    },
    example: {
      en: 'A central bank cuts the policy rate from 3.0% to 2.5% to make borrowing cheaper and support spending.',
      ru: 'Центральный банк снижает ключевую ставку с 3,0% до 2,5%, чтобы удешевить заимствования и поддержать расходы.',
    },
    pitfall: {
      en: 'Monetary policy is run by the central bank, not by the government budget; the budget belongs to fiscal policy.',
      ru: 'Монетарную политику проводит центральный банк, а не государственный бюджет; бюджет относится к фискальной политике.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 13, p. 396' },
  },
  {
    id: 'central-bank',
    term: { en: 'central bank', ru: 'центральный банк (central bank)' },
    def: {
      en: 'The institution that manages the money supply and sets the policy interest rate, often independently of the government, and acts as banker to the government and to commercial banks.',
      ru: 'Учреждение, которое управляет денежной массой и устанавливает ключевую ставку, часто независимо от правительства, а также выступает банкиром правительства и коммерческих банков.',
    },
    example: {
      en: 'Illustrative response: a central bank with a 2% inflation target may raise its policy rate if its forecast shows persistent excess inflation. A temporary supply shock does not imply an automatic rate rise.',
      ru: 'Условная реакция: центральный банк с целью по инфляции 2% может повысить ключевую ставку, если прогноз указывает на устойчивое превышение цели. Временный шок предложения не означает автоматического повышения ставки.',
    },
    pitfall: {
      en: 'Commercial banks lend to households and firms; the central bank lends to commercial banks.',
      ru: 'Коммерческие банки кредитуют домохозяйства и фирмы; центральный банк кредитует коммерческие банки.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 13.2, p. 388' },
  },
  {
    id: 'policy-interest-rate',
    term: { en: 'policy interest rate', ru: 'ключевая ставка (policy interest rate)' },
    def: {
      en: 'The benchmark rate or operating-rate target chosen by the central bank. Depending on the framework, it can apply to lending, deposits or a target market rate; a minimum lending or discount rate is one textbook example, not a universal synonym.',
      ru: 'Ставка-ориентир или целевой операционный уровень ставки, устанавливаемый центральным банком. В разных системах он относится к кредитам, депозитам либо рыночной ставке; минимальная кредитная или учётная ставка — пример из учебника, а не универсальный синоним.',
    },
    example: {
      en: 'When the policy rate falls from 6.0% to 5.5%, a bank may cut its mortgage rate by a similar amount.',
      ru: 'Когда ключевая ставка снижается с 6,0% до 5,5%, банк может снизить ставку по ипотеке примерно на столько же.',
    },
    pitfall: {
      en: 'The policy rate is not the rate a household pays on a loan; banks add a margin for risk and costs.',
      ru: 'Ключевая ставка — не та ставка, которую домохозяйство платит по кредиту: банки добавляют маржу на риск и издержки.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.monetary-policy',
    src: { kind: 'textbook', title: book, locator: 'ch. 13, p. 393' },
  },
  {
    id: 'open-market-operations',
    term: { en: 'open market operations', ru: 'операции на открытом рынке (open market operations)' },
    def: {
      en: 'The central bank buying or selling government bonds in the financial market to change the money supply and the interest rate.',
      ru: 'Покупка или продажа центральным банком государственных облигаций на финансовом рынке для изменения денежной массы и процентной ставки.',
    },
    example: {
      en: 'In the illustrated money-market model, a bond purchase of AED 1000 million expands bank reserves and can lower the market rate. A purchase from a bank swaps its bonds for reserves; this alone does not automatically create the same amount of new customer deposits.',
      ru: 'В учебной модели денежного рынка покупка облигаций на 1000 млн AED увеличивает резервы банков и может снизить рыночную ставку. Покупка у банка меняет его облигации на резервы; сама по себе она не создаёт автоматически такую же сумму новых клиентских депозитов.',
    },
    pitfall: {
      en: 'For a fixed-payment bond with unchanged cash flows and maturity, a higher price implies a lower yield. An asset purchase can support prices, but other market news can offset that effect.',
      ru: 'Для облигации с неизменными платежами и сроком более высокая цена означает меньшую доходность. Покупка активов может поддержать цены, но другая рыночная информация способна перекрыть этот эффект.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 13, p. 392' },
  },
  {
    id: 'quantitative-easing',
    term: { en: 'quantitative easing', ru: 'количественное смягчение (quantitative easing)' },
    def: {
      en: 'Large-scale purchases of government bonds and other assets by the central bank, used when the policy interest rate is already close to zero.',
      ru: 'Крупномасштабные покупки государственных облигаций и других активов центральным банком, которые применяют, когда ключевая ставка уже близка к нулю.',
    },
    example: {
      en: 'Illustrative purchase: the central bank buys assets worth AED 50 billion, aiming to lower longer-term yields and support asset prices and spending. The size and success of the response depend on market conditions.',
      ru: 'Условный пример: центральный банк покупает активы на 50 млрд AED, стремясь снизить долгосрочную доходность, поддержать цены активов и расходы. Величина и успешность реакции зависят от рыночных условий.',
    },
    pitfall: {
      en: 'Quantitative easing is open market operations on a large scale, aimed at long-term rates, not only at the short-term policy rate.',
      ru: 'Количественное смягчение — это масштабные операции на открытом рынке, направленные на долгосрочные ставки, а не только на ключевую ставку.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 13, p. 393' },
  },
  {
    id: 'transmission-mechanism',
    term: { en: 'transmission mechanism', ru: 'трансмиссионный механизм (transmission mechanism)' },
    def: {
      en: 'The chain of effects through which a change in the policy interest rate passes to bank rates, spending, aggregate demand, output and prices.',
      ru: 'Цепочка последствий, по которой изменение ключевой ставки передаётся на банковские ставки, расходы, совокупный спрос, выпуск и цены.',
    },
    example: {
      en: 'Illustrative chain: a 0.5 percentage point policy-rate cut passes through to bank loan rates; if firms respond by undertaking more profitable projects, investment rises and AD shifts right. The rate cut alone does not establish a numerical investment response.',
      ru: 'Условная цепочка: снижение ключевой ставки на 0,5 процентного пункта передаётся на банковские кредитные ставки; если фирмы в ответ осуществляют больше рентабельных проектов, инвестиции растут и AD сдвигается вправо. По одному изменению ставки нельзя вычислить прирост инвестиций.',
    },
    pitfall: {
      en: 'The mechanism works through several channels at once: interest rates are only the first, and the exchange rate and asset prices also matter.',
      ru: 'Механизм работает сразу по нескольким каналам: процентные ставки — лишь первый из них, важны также обменный курс и цены активов.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.monetary-policy',
    src: { kind: 'web', title: 'Bank of England — Liquidity traps: how to avoid them and how to escape them', url: 'https://www.bankofengland.co.uk/-/media/boe/files/working-paper/2000/liquidity-traps-how-to-avoid-them-and-how-to-escape-them.pdf', locator: 'Working Paper 111, §1 Introduction, PDF pp.4–6: one-rate model, additional transmission channels and near-zero rates not sufficient' },
  },
  {
    id: 'expansionary-monetary-policy',
    term: { en: 'expansionary monetary policy', ru: 'экспансионистская монетарная политика (expansionary monetary policy)' },
    def: {
      en: 'Central bank action intended to stimulate aggregate demand, for example by lowering policy rates or purchasing assets. Output and employment effects depend on transmission and available capacity.',
      ru: 'Действия центрального банка для стимулирования совокупного спроса, например снижение ключевой ставки или покупка активов. Реакция выпуска и занятости зависит от передачи импульса и свободных мощностей.',
    },
    example: {
      en: 'In an illustrative economy with spare capacity and responsive spending, a rate cut from 8.0% to 7.5% shifts AD right and raises short-run real GDP.',
      ru: 'В условной экономике со свободными мощностями и реагирующими расходами снижение ставки с 8,0% до 7,5% сдвигает AD вправо и увеличивает краткосрочный реальный ВВП.',
    },
    pitfall: {
      en: 'Price and output effects depend on aggregate supply: with rising SRAS both can rise, while on a flat Keynesian segment output can rise without a price-level increase.',
      ru: 'Реакция цен и выпуска зависит от AS: при восходящей SRAS могут вырасти обе величины, а на плоском кейнсианском участке выпуск может увеличиться без повышения уровня цен.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.monetary-policy',
    src: { kind: 'textbook', title: book, locator: 'ch. 13, p. 395' },
  },
  {
    id: 'contractionary-monetary-policy',
    term: { en: 'contractionary monetary policy', ru: 'рестриктивная монетарная политика (contractionary monetary policy)' },
    def: {
      en: 'Central bank action intended to restrain aggregate demand and inflationary pressure, for example by raising policy rates or selling assets.',
      ru: 'Действия центрального банка для сдерживания совокупного спроса и инфляционного давления, например повышение ключевой ставки или продажа активов.',
    },
    example: {
      en: 'In an illustrative demand-driven inflation scenario, a rate rise from 7.0% to 7.5% passes through to borrowing costs, restrains spending and reduces inflationary pressure over time.',
      ru: 'В условном сценарии инфляции спроса рост ставки с 7,0% до 7,5% передаётся на стоимость кредита, сдерживает расходы и со временем ослабляет инфляционное давление.',
    },
    pitfall: {
      en: 'In the short-run AD/AS model with upward-sloping SRAS, restraining demand trades lower price pressure for lower output than otherwise; actual effects and lags depend on supply and expectations.',
      ru: 'В краткосрочной модели AD/AS с восходящей SRAS сдерживание спроса снижает ценовое давление ценой более низкого выпуска, чем иначе; фактическая реакция и лаги зависят от предложения и ожиданий.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.monetary-policy',
    src: { kind: 'textbook', title: book, locator: 'ch. 13, p. 395' },
  },
  {
    id: 'inflation-targeting',
    term: { en: 'inflation targeting', ru: 'таргетирование инфляции (inflation targeting)' },
    def: {
      en: 'A monetary policy framework in which the central bank publicly announces medium-term numerical inflation targets and makes an institutional commitment to achieve them.',
      ru: 'Режим монетарной политики, при котором центральный банк публично объявляет среднесрочные числовые цели по инфляции и берёт на себя институциональное обязательство их достигать.',
    },
    example: {
      en: 'A central bank announces a medium-term inflation target of 2%, measured by the CPI, with a tolerance of one percentage point either side, so inflation between 1% and 3% stays within the tolerance margin.',
      ru: 'Центральный банк публично объявляет среднесрочную цель по инфляции 2%, измеряемую по ИПЦ, с допуском в один процентный пункт в обе стороны: инфляция от 1% до 3% остаётся в пределах допуска.',
    },
    pitfall: {
      en: 'Inflation targeting does not mean ignoring output: many targeting regimes also consider growth and employment.',
      ru: 'Таргетирование инфляции не означает игнорирования выпуска: многие такие режимы учитывают также рост и занятость.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 13.2, p. 389' },
  },
  {
    id: 'liquidity-trap',
    term: { en: 'liquidity trap', ru: 'ловушка ликвидности (liquidity trap)' },
    def: {
      en: 'In the simplified Keynesian money-market model, a situation in which demand for money is highly interest-sensitive at a low rate, so extra money is willingly held rather than lowering that rate and stimulating spending. A low policy rate alone does not prove a liquidity trap.',
      ru: 'В упрощённой кейнсианской модели денежного рынка — ситуация, когда при низкой ставке спрос на деньги очень чувствителен к проценту: дополнительные деньги охотно держат, поэтому ставка не снижается и расходы не стимулируются. Одна низкая ключевая ставка ещё не доказывает ловушку ликвидности.',
    },
    example: {
      en: 'Illustrative one-rate model: an additional AED 100 million is held as liquid balances, while the market rate and planned spending remain unchanged. This demonstrates the assumed money-demand response; weak bank lending alone is not proof of this mechanism.',
      ru: 'Условный пример модели с одной ставкой: дополнительные 100 млн AED остаются в ликвидных остатках, а рыночная ставка и планируемые расходы не меняются. Так проявляется заданная реакция спроса на деньги; само по себе слабое кредитование банков ещё не доказывает этот механизм.',
    },
    pitfall: {
      en: 'Do not equate a liquidity trap with a credit shortage or any near-zero rate. Other transmission channels, including asset purchases and expectations, may still operate; limits depend on the model and circumstances.',
      ru: 'Не отождествляй ловушку ликвидности с нехваткой кредитов или любой ставкой около нуля. Другие каналы передачи, включая покупку активов и ожидания, могут сохраняться; ограничения зависят от модели и условий.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'web', title: 'Bank of England — Liquidity traps: how to avoid them and how to escape them', url: 'https://www.bankofengland.co.uk/-/media/boe/files/working-paper/2000/liquidity-traps-how-to-avoid-them-and-how-to-escape-them.pdf', locator: 'Working Paper 111, §1 Introduction, PDF pp.4–6: one-rate model, additional transmission channels and near-zero rates not sufficient' },
  },
];
