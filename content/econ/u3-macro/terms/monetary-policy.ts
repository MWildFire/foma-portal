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
      en: 'A central bank with a 2% inflation target raises its policy rate when prices rise faster than that target.',
      ru: 'Центральный банк с целью по инфляции 2% повышает ключевую ставку, когда цены растут быстрее этой цели.',
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
      en: 'The interest rate the central bank charges commercial banks on its loans (the minimum lending rate, also called the discount or base rate), which becomes the benchmark for the rates banks charge and pay.',
      ru: 'Процентная ставка, по которой центральный банк выдаёт кредиты коммерческим банкам (минимальная ставка кредитования, также называемая учётной или базовой ставкой); от неё ориентируются ставки, по которым банки выдают кредиты и платят по вкладам.',
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
      en: 'The central bank buys bonds worth 1000 million AED, paying banks with new money, so the money supply rises and interest rates fall.',
      ru: 'Центральный банк покупает облигации на 1000 млн AED и платит банкам новыми деньгами, поэтому денежная масса растёт, а ставки падают.',
    },
    pitfall: {
      en: 'Buying bonds pushes bond prices up and bond yields down; the two always move in opposite directions.',
      ru: 'Покупка облигаций повышает их цену и снижает доходность; эти величины всегда движутся в противоположных направлениях.',
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
      en: 'The central bank buys assets worth 50 billion AED, lowering long-term interest rates and raising asset prices.',
      ru: 'Центральный банк покупает активы на 50 млрд AED, снижая долгосрочные ставки и повышая цены активов.',
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
      en: 'A 0.5 percentage point cut in the policy rate lowers loan rates, raises investment by 4% and shifts AD to the right.',
      ru: 'Снижение ключевой ставки на 0,5 процентного пункта снижает ставки по кредитам, повышает инвестиции на 4% и сдвигает AD вправо.',
    },
    pitfall: {
      en: 'The mechanism works through several channels at once: interest rates are only the first, and the exchange rate and asset prices also matter.',
      ru: 'Механизм работает сразу по нескольким каналам: процентные ставки — лишь первый из них, важны также обменный курс и цены активов.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    sim: 'econ.monetary-policy',
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.5' },
  },
  {
    id: 'expansionary-monetary-policy',
    term: { en: 'expansionary monetary policy', ru: 'экспансионистская монетарная политика (expansionary monetary policy)' },
    def: {
      en: 'Central bank action to increase the money supply and lower interest rates, so that aggregate demand, output and employment rise.',
      ru: 'Действия центрального банка по увеличению денежной массы и снижению процентных ставок, чтобы выросли совокупный спрос, выпуск и занятость.',
    },
    example: {
      en: 'Cutting the policy rate from 8.0% to 7.5% shifts AD to the right and raises real GDP in the short run.',
      ru: 'Снижение ключевой ставки с 8,0% до 7,5% сдвигает AD вправо и повышает реальный ВВП в краткосрочном периоде.',
    },
    pitfall: {
      en: 'Expansionary policy raises the price level as well as output in the short run; output is not the only effect.',
      ru: 'Экспансионистская политика в краткосрочном периоде повышает и уровень цен, и выпуск; рост выпуска — не единственный эффект.',
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
      en: 'Central bank action to reduce the money supply and raise interest rates, so that aggregate demand and inflation fall.',
      ru: 'Действия центрального банка по сокращению денежной массы и повышению процентных ставок, чтобы снизились совокупный спрос и инфляция.',
    },
    example: {
      en: 'Raising the policy rate from 7.0% to 7.5% makes borrowing dearer, so AD shifts left and inflation falls.',
      ru: 'Повышение ключевой ставки с 7,0% до 7,5% делает заимствования дороже, поэтому AD сдвигается влево, а инфляция снижается.',
    },
    pitfall: {
      en: 'Contractionary policy lowers inflation but also lowers output; it is a trade-off, not a free gain.',
      ru: 'Рестриктивная политика снижает инфляцию, но и выпуск; это компромисс, а не бесплатный выигрыш.',
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
      en: 'A situation in which interest rates are near zero, so further cuts do little to raise spending because people and banks prefer to hold cash.',
      ru: 'Ситуация, когда процентные ставки близки к нулю, поэтому дальнейшее снижение мало повышает расходы, потому что люди и банки предпочитают держать наличные.',
    },
    example: {
      en: 'With the policy rate at 0.1%, a further cut to 0.05% hardly changes borrowing, as banks hold back lending.',
      ru: 'При ключевой ставке 0,1% дальнейшее снижение до 0,05% почти не меняет заимствования, так как банки придерживают кредиты.',
    },
    pitfall: {
      en: 'A liquidity trap is not a shortage of money: the money exists but is not spent or lent.',
      ru: 'Ловушка ликвидности — это не нехватка денег: деньги есть, но их не тратят и не кредитуют.',
    },
    syllabus: '3.5',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.5' },
  },
];
