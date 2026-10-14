import type { Term } from '../../../../src/contract/types';

// Sources: the textbook (chapter and page) for terms it defines; the subject guide (section 2.11) for excess-capacity and dominant-strategy.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'monopolistic-competition',
    term: { en: 'monopolistic competition', ru: 'монополистическая конкуренция (monopolistic competition)' },
    def: {
      en: 'A market with many firms selling differentiated products, free entry and some control over price, where in the long run each firm earns only normal profit.',
      ru: 'Рынок с большим числом фирм, продающих дифференцированные товары, со свободным входом и некоторым контролем над ценой; в долгосрочном периоде каждая фирма получает только нормальную прибыль.',
    },
    example: {
      en: 'Restaurants in a city each sell their own menu and brand at about AED 60 per guest, and new restaurants entering over time remove any supernormal profit.',
      ru: 'Рестораны в городе продают каждый своё меню и бренд примерно по 60 AED за гостя, а новые рестораны, приходящие со временем, убирают любую сверхнормальную прибыль.',
    },
    pitfall: {
      en: 'Monopolistic competition is not a monopoly: many firms compete, so each has a small share and close but not identical rivals.',
      ru: 'Монополистическая конкуренция — это не монополия: фирм много, у каждой небольшая доля, и есть близкие, но не идентичные конкуренты.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.5, p. 225–228' },
    sim: 'econ.monopolistic-competition',
  },
  {
    id: 'product-differentiation',
    term: { en: 'product differentiation', ru: 'дифференциация продукта (product differentiation)' },
    def: {
      en: "Making a good different from its rivals' goods through brand, design, quality, location or service, so that some buyers prefer it and it can have a downward-sloping demand curve.",
      ru: 'Отличие товара от товаров конкурентов за счёт бренда, дизайна, качества, места или сервиса; часть покупателей предпочитает его, и у фирмы появляется нисходящая кривая спроса.',
    },
    example: {
      en: 'Two coffee shops sell the same espresso for AED 12, but one offers a loyalty card and a quieter space, so it can charge AED 13 and keep its customers.',
      ru: 'Две кофейни продают один и тот же эспрессо за 12 AED, но одна даёт карту лояльности и тихий зал, поэтому может взять 13 AED и сохранить клиентов.',
    },
    pitfall: {
      en: 'Differentiation depends on how buyers perceive a product as well as on its physical features; a brand can differentiate a physically identical product.',
      ru: 'Дифференциация зависит от того, как покупатели воспринимают товар, а не только от его физических свойств: бренд может отличить физически одинаковый товар.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.1, p. 196' },
  },
  {
    id: 'excess-capacity',
    term: { en: 'excess capacity', ru: 'избыточные производственные мощности (excess capacity)' },
    def: {
      en: 'Output below the level at which average total cost is minimised, so a firm could produce more at a lower average cost but does not, because demand is limited.',
      ru: 'Выпуск ниже уровня, при котором средние общие издержки минимальны: фирма могла бы выпускать больше при меньших средних издержках, но не делает этого, потому что спрос ограничен.',
    },
    example: {
      en: 'A bakery whose average cost is lowest at 500 loaves a day produces only 350 loaves, because demand at its price is limited, so 150 loaves of capacity stay unused.',
      ru: 'Пекарня, у которой средние издержки минимальны при 500 буханках в день, выпускает только 350, потому что спрос при её цене ограничен; 150 буханок мощности простаивают.',
    },
    pitfall: {
      en: "Excess capacity is measured against the minimum point of average total cost, not against the firm's maximum physical output.",
      ru: 'Избыточные мощности измеряются относительно минимума средних общих издержек, а не максимального физического выпуска фирмы.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.11' },
  },
  {
    id: 'oligopoly',
    term: { en: 'oligopoly', ru: 'олигополия (oligopoly)' },
    def: {
      en: "A market dominated by a few large firms, with high barriers to entry, where each firm's decisions depend on how its rivals will react.",
      ru: 'Рынок, на котором доминирует несколько крупных фирм при высоких барьерах для входа; решения каждой фирмы зависят от того, как ответят конкуренты.',
    },
    example: {
      en: 'Three airlines serve a route at AED 800 return; when one cuts its fare to AED 700, the other two usually follow within days.',
      ru: 'Три авиакомпании работают на маршруте по 800 AED туда и обратно; когда одна снижает тариф до 700 AED, две другие обычно следуют за ней в течение нескольких дней.',
    },
    pitfall: {
      en: 'A few firms is necessary but not sufficient: oligopoly also needs interdependence, so the firms watch and react to each other.',
      ru: 'Немного фирм — необходимое, но недостаточное условие: нужна ещё и взаимозависимость, то есть фирмы следят за реакциями друг друга.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.6, p. 230' },
  },
  {
    id: 'interdependence',
    term: { en: 'interdependence', ru: 'взаимозависимость (interdependence)' },
    def: {
      en: "The situation in which economic decision-makers affect and rely on one another: a firm's profit depends on its rivals' decisions, so each firm must anticipate their reactions when choosing its price or output.",
      ru: 'Ситуация, в которой экономические субъекты, принимающие решения, влияют друг на друга и зависят друг от друга: прибыль фирмы зависит от решений её конкурентов, поэтому при выборе цены или выпуска каждая фирма должна предвидеть их реакцию.',
    },
    example: {
      en: 'If a petrol station cuts its price from AED 2.50 to AED 2.30 per litre, nearby stations must decide within days whether to match it, because their sales depend on the decision.',
      ru: 'Если АЗС снижает цену с 2,50 AED до 2,30 AED за литр, соседние станции в течение нескольких дней решают, следовать ли за ней, потому что от этого зависят их продажи.',
    },
    pitfall: {
      en: "Interdependence means anticipating rivals' reactions; it is not the same as collusion, which is an agreement to coordinate.",
      ru: 'Взаимозависимость означает предвидение реакций конкурентов; это не то же самое, что сговор, который предполагает договорённость о координации.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.1, p. 5' },
  },
  {
    id: 'collusion',
    term: { en: 'collusion', ru: 'сговор (collusion)' },
    def: {
      en: 'An agreement, explicit or tacit, between firms to fix prices, share markets or restrict output, so that they behave like a monopoly and share the higher joint profit.',
      ru: 'Соглашение между фирмами, явное или негласное, о фиксировании цен, разделе рынков или ограничении выпуска, при котором они действуют как монополия и делят более высокую совместную прибыль.',
    },
    example: {
      en: 'Five producers agree to cut output by 1 million barrels a day to lift the price, and each keeps a share of the higher joint profit.',
      ru: 'Пять производителей договариваются сократить добычу на 1 млн баррелей в день, чтобы поднять цену, и каждый получает долю более высокой совместной прибыли.',
    },
    pitfall: {
      en: 'Explicit collusion is illegal in many countries; tacit collusion, such as price leadership, is harder to prove.',
      ru: 'Явный сговор во многих странах запрещён; негласный сговор, например ценовое лидерство, доказать труднее.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.6, p. 231' },
  },
  {
    id: 'price-leadership',
    term: { en: 'price leadership', ru: 'ценовое лидерство (price leadership)' },
    def: {
      en: 'A form of tacit collusion in which one dominant firm sets the price and the other firms follow, usually to avoid a price war.',
      ru: 'Форма негласного сговора, при которой одна доминирующая фирма устанавливает цену, а остальные за ней следуют, обычно чтобы избежать ценовой войны.',
    },
    example: {
      en: 'The largest bank in a country raises its mortgage rate by 0.25 percentage points, and smaller banks follow within a week.',
      ru: 'Крупнейший банк страны повышает ставку по ипотеке на 0,25 процентного пункта, а более мелкие банки повторяют это в течение недели.',
    },
    pitfall: {
      en: 'Price leadership is not a cartel: there is no formal agreement; the leader simply sets the price that the others follow.',
      ru: 'Ценовое лидерство — это не картель: формального соглашения нет, лидер просто задаёт цену, которой следуют остальные.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.6, p. 234' },
  },
  {
    id: 'game-theory',
    term: { en: 'game theory', ru: 'теория игр (game theory)' },
    def: {
      en: "The study of strategic decisions in which each player's payoff depends on the choices of the others, shown in a payoff matrix that lists each player's payoff for every combination of choices.",
      ru: 'Изучение стратегических решений, в которых выигрыш каждого игрока зависит от выборов других; представляется в матрице выигрышей, где указан выигрыш каждого игрока при каждой комбинации выборов.',
    },
    example: {
      en: 'Two airlines decide whether to advertise; if only one advertises, it earns AED 4 million and the other earns AED 1 million.',
      ru: 'Две авиакомпании решают, давать ли рекламу; если рекламируется только одна, она получает 4 млн AED, а другая — 1 млн AED.',
    },
    pitfall: {
      en: 'A payoff matrix shows payoffs, not prices or quantities; read each cell as (payoff to the row player, payoff to the column player).',
      ru: 'Матрица выигрышей показывает выигрыши, а не цены или количества; читайте каждую ячейку как (выигрыш строки, выигрыш столбца).',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.6, p. 231' },
    sim: 'econ.oligopoly-game',
  },
  {
    id: 'dominant-strategy',
    term: { en: 'dominant strategy', ru: 'доминирующая стратегия (dominant strategy)' },
    def: {
      en: 'A strategy that gives a player a higher payoff than any alternative, whatever the other player chooses. If it exists, the player should always choose it.',
      ru: 'Стратегия, которая даёт игроку больший выигрыш, чем любая альтернатива, независимо от выбора другого игрока. Если она есть, игроку стоит выбирать её всегда.',
    },
    example: {
      en: 'For one airline, advertising earns AED 2 million if the rival advertises (against AED 1 million for staying silent) and AED 4 million if the rival stays silent (against AED 3 million), so advertising is its dominant strategy.',
      ru: 'Для одной авиакомпании реклама приносит 2 млн AED, если конкурент тоже рекламируется (против 1 млн AED при молчании), и 4 млн AED, если конкурент молчит (против 3 млн AED), поэтому реклама — её доминирующая стратегия.',
    },
    pitfall: {
      en: 'A dominant strategy is best for each player individually; it is not the same as the best joint outcome for all players.',
      ru: 'Доминирующая стратегия лучшая для каждого игрока в отдельности; это не то же, что лучший совместный результат для всех игроков.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.11' },
    sim: 'econ.oligopoly-game',
  },
  {
    id: 'nash-equilibrium',
    term: { en: 'Nash equilibrium', ru: 'равновесие Нэша (Nash equilibrium)' },
    def: {
      en: "An outcome in which each player's chosen strategy is its best response to the strategies of the others, so no player can gain by changing its choice alone.",
      ru: 'Исход, в котором стратегия каждого игрока является его лучшим ответом на стратегии остальных, поэтому ни один игрок не выиграет, изменив свой выбор в одиночку.',
    },
    example: {
      en: 'In the advertising game both airlines advertise and each earns AED 2 million; neither gains by stopping alone, because stopping would cut its profit to AED 1 million.',
      ru: 'В игре с рекламой обе авиакомпании рекламируются и получают по 2 млн AED; ни одна не выиграет, прекратив рекламу в одиночку, потому что её прибыль упадёт до 1 млн AED.',
    },
    pitfall: {
      en: 'A Nash equilibrium is stable, but it is not necessarily the best outcome for the players; in the advertising game both would earn more if neither advertised.',
      ru: 'Равновесие Нэша устойчиво, но не обязательно лучший исход для игроков; в игре с рекламой оба получили бы больше, если бы никто не рекламировался.',
    },
    syllabus: '2.11',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 7.6, p. 231' },
    sim: 'econ.oligopoly-game',
  },
];
