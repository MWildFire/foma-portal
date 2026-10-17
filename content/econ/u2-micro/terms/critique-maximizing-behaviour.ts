import type { SourceRef, Term } from '../../../../src/contract/types';

// Sources: actual textbook passages where stated. Supplementary definitions are ours; the guide's topic list is not a glossary source.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';
const src: SourceRef = { kind: 'own', title: 'Our supplementary behavioural explanations', locator: 'Not definitions quoted from the IB guide. Altruism context: Tragakes (2020), pp.74–75; loss aversion and present bias are retained supplementary library terms.' };

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
      en: 'The idea that decisions are limited by incomplete information, limited time and limited ability to process it, and that searching for information is itself costly, so people may settle for a satisfactory option without identifying the best feasible one.',
      ru: 'Идея, что решения ограничены неполной информацией, нехваткой времени и ограниченной способностью её обрабатывать, а поиск информации сам по себе затратен, поэтому люди могут остановиться на удовлетворительном варианте, не установив, какой доступный вариант лучший.',
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
      en: 'Aiming for a satisfactory level on several objectives at once, rather than the optimal or best result on any one of them.',
      ru: 'Стремление к удовлетворительному уровню сразу по нескольким целям, а не к оптимальному или наилучшему результату по какой-либо одной из них.',
    },
    example: {
      en: 'A manager picks a supplier that delivers within 5 days at AED 500 or less per unit, and does not look for the lowest price, because both targets are already met.',
      ru: 'Менеджер выбирает поставщика, который доставляет за 5 дней и не дороже 500 AED за единицу, и не ищет самую низкую цену, так как обе цели уже выполнены.',
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
      en: 'An anchor can affect perceived value without adding evidence about quality or the prices of comparable alternatives.',
      ru: 'Якорь может влиять на воспринимаемую ценность, не добавляя сведений о качестве или ценах сопоставимых альтернатив.',
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
      en: 'Illustrative valuation: gaining AED 100 feels like a benefit of 5 subjective points, while losing AED 100 feels like a loss of 9 points relative to the same reference. This asymmetry illustrates loss aversion; refusal of a fair bet alone could also reflect ordinary risk aversion.',
      ru: 'Условная оценка: выигрыш 100 AED даёт 5 субъективных баллов, а потеря 100 AED ощущается как потеря 9 баллов относительно одного ориентира. Асимметрия иллюстрирует неприятие потерь; сам отказ от ставки с нулевым средним выигрышем может объясняться и обычным неприятием риска.',
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
      en: 'Concern for other people’s welfare that can lead a person to give up money, time or own consumption to help them. If caring for others is part of their preferences, this need not reduce their total utility.',
      ru: 'Забота о благополучии других людей, ради которой человек может пожертвовать деньгами, временем или собственным потреблением. Если благополучие других входит в его предпочтения, общая полезность не обязана уменьшаться.',
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
      en: 'A change in how choices are presented, such as making one option the default, that steers people in a predictable way towards an intended outcome, without financial incentives or sanctions and without limiting choice.',
      ru: 'Изменение способа подачи выбора, например когда один вариант становится вариантом по умолчанию; это предсказуемым образом подталкивает людей к задуманному результату без финансовых стимулов и санкций и без ограничения выбора.',
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
