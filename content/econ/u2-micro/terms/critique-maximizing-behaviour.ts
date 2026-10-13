import type { SourceRef, Term } from '../../../../src/contract/types';

// Sources: the textbook, with a page locator for each term it defines; the IB subject guide (2020) for loss aversion and present bias, which the book does not define.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';
const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.4' };

export const terms: Term[] = [
  {
    id: 'utility-maximization',
    term: { en: 'utility maximization', ru: 'максимизация полезности (utility maximization)' },
    def: {
      en: 'The assumption that consumers choose the affordable combination of goods that gives them the highest total utility, or satisfaction.',
      ru: 'Допущение, что потребители выбирают доступный набор товаров, который даёт им наибольшую общую полезность, то есть удовлетворение.',
    },
    example: {
      en: 'With AED 100 to spend, a consumer buys 4 burgers at AED 15 and 4 drinks at AED 10, because no other affordable mix gives more utility.',
      ru: 'Имея 100 AED, потребитель покупает 4 бургера по 15 AED и 4 напитка по 10 AED, потому что ни один другой доступный набор не даёт большей полезности.',
    },
    pitfall: {
      en: 'Maximizing utility means the best affordable choice, not buying as much as possible.',
      ru: 'Максимизация полезности означает лучший доступный выбор, а не покупку как можно большего количества.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.6, p. 73' },
  },
  {
    id: 'profit-maximization',
    term: { en: 'profit maximization', ru: 'максимизация прибыли (profit maximization)' },
    def: {
      en: 'The assumption that firms choose the output and price that make total revenue minus total cost as large as possible.',
      ru: 'Допущение, что фирмы выбирают объём и цену, при которых разница между общей выручкой и общими издержками максимальна.',
    },
    example: {
      en: 'A bakery with total revenue of AED 2400 and total cost of AED 1800 earns AED 600 profit; a profit-maximizing firm would reject any plan that earns less.',
      ru: 'Пекарня с общей выручкой 2400 AED и общими издержками 1800 AED получает прибыль 600 AED; фирма, максимизирующая прибыль, отвергнет любой план с меньшей прибылью.',
    },
    pitfall: {
      en: 'Profit is revenue minus cost, so a firm can have high revenue and still make a loss.',
      ru: 'Прибыль — это выручка минус издержки, поэтому у фирмы может быть высокая выручка и всё же убыток.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.6, p. 79' },
  },
  {
    id: 'bounded-rationality',
    term: { en: 'bounded rationality', ru: 'ограниченная рациональность (bounded rationality)' },
    def: {
      en: 'The idea that decisions are limited by incomplete information, limited time and limited ability to process it, and that searching for information is itself costly, so people choose reasonable rather than perfectly optimal options.',
      ru: 'Идея, что решения ограничены неполной информацией, нехваткой времени и ограниченной способностью её обрабатывать, а поиск информации сам по себе затратен, поэтому люди выбирают разумные, а не идеально оптимальные варианты.',
    },
    example: {
      en: 'A shopper compares 3 of the 30 phone plans on offer, because checking all 30 would take too long.',
      ru: 'Покупатель сравнивает 3 из 30 тарифов на телефон, потому что проверка всех 30 заняла бы слишком много времени.',
    },
    pitfall: {
      en: 'Bounded rationality does not mean people are foolish; good decisions are costly to make.',
      ru: 'Ограниченная рациональность не означает глупость: качественные решения требуют затрат.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.6, p. 74' },
  },
  {
    id: 'satisficing',
    term: { en: 'satisficing', ru: 'удовлетворительный выбор (satisficing)' },
    def: {
      en: 'Choosing the first option that meets a minimum acceptable target on several objectives, rather than searching for the best possible option on any one of them.',
      ru: 'Выбор первого варианта, который достигает минимально приемлемой цели сразу по нескольким целям, а не поиск наилучшего возможного варианта по какой-либо одной из них.',
    },
    example: {
      en: 'A manager accepts the first supplier that delivers within 5 days at AED 500 or less per unit, without comparing the other 10 suppliers.',
      ru: 'Менеджер принимает первого поставщика, который доставляет за 5 дней и не дороже 500 AED за единицу, не сравнивая остальные 10 поставщиков.',
    },
    pitfall: {
      en: 'Satisficing is a sensible response when searching is costly, not laziness.',
      ru: 'Удовлетворительный выбор — разумная реакция, когда поиск дорог, а не леность.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.6, p. 81' },
  },
  {
    id: 'anchoring-bias',
    term: { en: 'anchoring bias', ru: 'эффект якорения (anchoring bias)' },
    def: {
      en: 'The tendency to rely too heavily on the first piece of information seen, the anchor, even when it is irrelevant, when making a judgement or a decision.',
      ru: 'Склонность слишком сильно опираться на первую полученную информацию, то есть на якорь, даже если она не относится к делу, при суждении или решении.',
    },
    example: {
      en: 'A jacket shown with a crossed-out price of AED 800 and a sale price of AED 400 looks cheap, even when similar jackets sell for AED 300 elsewhere.',
      ru: 'Куртка с зачёркнутой ценой 800 AED и ценой со скидкой 400 AED кажется дешёвой, даже если такие же куртки продаются в другом месте за 300 AED.',
    },
    pitfall: {
      en: 'Anchoring affects how a price is judged, not the true value of the product.',
      ru: 'Якорение влияет на то, как оценивают цену, а не на истинную ценность товара.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.6, p. 73' },
  },
  {
    id: 'loss-aversion',
    term: { en: 'loss aversion', ru: 'неприятие потерь (loss aversion)' },
    def: {
      en: 'The tendency to feel the pain of losing a sum more strongly than the pleasure of gaining the same sum.',
      ru: 'Склонность сильнее переживать потерю суммы, чем радоваться выигрышу такой же суммы.',
    },
    example: {
      en: 'Many people refuse a fair bet that wins AED 100 or loses AED 100 with equal chance, because losing AED 100 feels worse than winning it feels good.',
      ru: 'Многие отказываются от честной ставки, которая с равной вероятностью приносит 100 AED или отнимает 100 AED, потому что потеря 100 AED ощущается сильнее, чем радость от выигрыша.',
    },
    pitfall: {
      en: 'Loss aversion is a bias in how outcomes are valued, not a rule that people never take risks.',
      ru: 'Неприятие потерь — это искажение в оценке исходов, а не правило, по которому люди никогда не рискуют.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'present-bias',
    term: { en: 'present bias', ru: 'предпочтение настоящего (present bias)' },
    def: {
      en: 'The tendency to value immediate rewards much more than later rewards, even when waiting would give a better outcome, so people often delay saving.',
      ru: 'Склонность гораздо сильнее ценить немедленные выгоды, чем поздние, даже когда ожидание дало бы лучший результат; из-за этого люди часто откладывают сбережения.',
    },
    example: {
      en: 'A student spends AED 300 on a weekend trip now, although the same money was planned to pay a tuition fee in 3 months.',
      ru: 'Студент тратит 300 AED на поездку на выходные сейчас, хотя эти деньги планировались на оплату обучения через 3 месяца.',
    },
    pitfall: {
      en: 'Present bias is not a dislike of saving; it is the extra weight given to rewards that arrive now, compared with the same rewards later.',
      ru: 'Предпочтение настоящего — не нелюбовь к сбережениям, а дополнительный вес, который придают наградам, полученным сейчас, по сравнению с теми же наградами позже.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'managerial-objectives',
    term: { en: 'managerial objectives', ru: 'управленческие цели (managerial objectives)' },
    def: {
      en: 'The goals managers pursue in addition to or instead of profit, such as sales revenue, growth, market share or the survival of the firm.',
      ru: 'Цели, которые менеджеры преследуют помимо прибыли или вместо неё: выручка от продаж, рост, доля рынка или выживание фирмы.',
    },
    example: {
      en: 'The manager of a 12-shop chain cuts prices to take market share from rivals, although profit falls in the short run.',
      ru: 'Управляющий сетью из 12 магазинов снижает цены, чтобы отобрать долю рынка у конкурентов, хотя прибыль в краткосрочном периоде падает.',
    },
    pitfall: {
      en: 'Objectives can change over time: a firm may pursue growth first and profit later.',
      ru: 'Цели могут меняться со временем: фирма сначала может стремиться к росту, а затем к прибыли.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.6, p. 79' },
  },
  {
    id: 'altruism',
    term: { en: 'altruism', ru: 'альтруизм (altruism)' },
    def: {
      en: 'Concern for the welfare of other people that leads a person to sacrifice part of their own utility in order to help them.',
      ru: 'Забота о благополучии других людей, из-за которой человек жертвует частью собственной полезности, чтобы помочь им.',
    },
    example: {
      en: 'A household gives AED 500 a year to a food bank, so it has AED 500 less to spend on its own goods.',
      ru: 'Семья отдаёт 500 AED в год продовольственному банку, поэтому на собственные покупки у неё остаётся на 500 AED меньше.',
    },
    pitfall: {
      en: 'Altruism is a source of utility, so giving money away is not irrational just because it reduces own consumption.',
      ru: 'Альтруизм — источник полезности, поэтому отдать деньги не иррационально только потому, что это уменьшает собственное потребление.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'nudge',
    term: { en: 'nudge', ru: 'подталкивание (nudge)' },
    def: {
      en: 'A change in how choices are presented, such as making one option the default, that steers people in a predictable way towards a better outcome, without financial incentives or sanctions and without limiting choice.',
      ru: 'Изменение способа подачи выбора, например когда один вариант становится вариантом по умолчанию; это предсказуемым образом подталкивает людей к лучшему результату без финансовых стимулов и санкций и без ограничения выбора.',
    },
    example: {
      en: 'A pension plan enrols new employees automatically at 5% of salary and lets them opt out, which makes saving the easy choice.',
      ru: 'Пенсионный план автоматически подключает новых сотрудников к отчислениям в размере 5% зарплаты и позволяет отказаться, поэтому сбережения становятся простым выбором.',
    },
    pitfall: {
      en: 'A nudge keeps all options open; a ban or a large tax changes the choice set and is not a nudge.',
      ru: 'Подталкивание оставляет все варианты открытыми; запрет или крупный налог меняют набор возможностей и не являются подталкиванием.',
    },
    syllabus: '2.4',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 2.6, p. 75' },
  },
];
