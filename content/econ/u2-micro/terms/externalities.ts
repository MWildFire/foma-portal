import type { Term } from '../../../../src/contract/types';

// Externalities (IB DP Economics section 2.8). Definitions are in our own words; the source is the textbook, with a page locator for each term.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'externality',
    term: { en: 'externality', ru: 'внешний эффект (externality)' },
    def: {
      en: 'A cost or benefit of an economic activity that falls on third parties who are not part of the transaction and is not reflected in the market price.',
      ru: 'Издержка или выгода от экономической деятельности, которая ложится на третьих лиц, не участвующих в сделке, и не отражается в рыночной цене.',
    },
    example: {
      en: 'A factory emits smoke that costs nearby residents AED 6 per tonne of output, a cost the factory does not pay.',
      ru: 'Завод выбрасывает дым, который наносит соседним жителям ущерб 6 AED за каждую тонну продукции, и завод этот ущерб не оплачивает.',
    },
    pitfall: {
      en: "An externality falls on third parties. The firm's own costs are private costs, not externalities.",
      ru: 'Внешний эффект падает на третьих лиц. Собственные издержки фирмы — это частные издержки, а не внешний эффект.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 5.2, p. 148' },
    sim: 'econ.externality-negative-production',
  },
  {
    id: 'external-cost',
    term: { en: 'external cost', ru: 'внешние издержки (external cost)' },
    def: {
      en: 'A cost imposed on third parties by production or consumption, so that the social cost is greater than the private cost.',
      ru: 'Издержки, которые производство или потребление переносит на третьих лиц; общественные издержки при этом больше частных.',
    },
    example: {
      en: "Every tonne of the factory's output imposes AED 6 of external cost on nearby residents.",
      ru: 'Каждая тонна продукции завода создаёт для соседних жителей внешние издержки 6 AED.',
    },
    pitfall: {
      en: 'External cost is paid by others, not by the producer, which is why the market price is too low compared with the true cost.',
      ru: 'Внешние издержки платят не производители, а другие люди, поэтому рыночная цена занижена по сравнению с реальными издержками.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 5.2, p. 148' },
  },
  {
    id: 'external-benefit',
    term: { en: 'external benefit', ru: 'внешняя выгода (external benefit)' },
    def: {
      en: 'A benefit that a production or consumption decision gives to third parties who do not pay for it, so the social benefit exceeds the private benefit.',
      ru: 'Выгода, которую решение о производстве или потреблении приносит третьим лицам, не платящим за неё; общественная выгода при этом больше частной.',
    },
    example: {
      en: "Each vaccine dose lowers other people's illness costs by AED 4, a benefit the buyer does not pay for.",
      ru: 'Каждая доза вакцины снижает расходы других людей на лечение на 4 AED, но покупатель за эту выгоду не платит.',
    },
    pitfall: {
      en: 'An external benefit is a benefit to others, not to the buyer, so the buyer tends to consume too little.',
      ru: 'Внешняя выгода — это выгода для других, а не для покупателя, поэтому покупатель склонен потреблять слишком мало.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 5.2, p. 148' },
  },
  {
    id: 'marginal-private-cost',
    term: { en: 'marginal private cost (MPC)', ru: 'предельные частные издержки (marginal private cost, MPC)' },
    def: {
      en: 'The extra cost to the producer of making one more unit. The market supply curve shows MPC, which excludes any external cost.',
      ru: 'Дополнительные издержки производителя на выпуск ещё одной единицы. Рыночная кривая предложения отражает MPC, то есть не включает внешних издержек.',
    },
    example: {
      en: "At 16 tonnes of output, the factory's private cost of one more tonne is AED 12.",
      ru: 'При выпуске 16 тонн дополнительная тонна обходится заводу в 12 AED.',
    },
    pitfall: {
      en: 'MPC is not the social cost: it leaves out the costs that fall on other people.',
      ru: 'MPC — не общественные издержки: в нём нет затрат, которые ложатся на других людей.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 5.2, p. 149' },
  },
  {
    id: 'marginal-social-cost',
    term: { en: 'marginal social cost (MSC)', ru: 'предельные общественные издержки (marginal social cost, MSC)' },
    def: {
      en: 'The total cost to society of one more unit, equal to the marginal private cost plus the external cost of that unit.',
      ru: 'Совокупные издержки общества на ещё одну единицу: предельные частные издержки плюс внешние издержки этой единицы.',
    },
    example: {
      en: 'At 16 tonnes, one more tonne costs society AED 18: AED 12 of private cost plus AED 6 of external cost.',
      ru: 'При 16 тоннах ещё одна тонна обходится обществу в 18 AED: 12 AED частных издержек и 6 AED внешних.',
    },
    pitfall: {
      en: 'Only the social curves include the external effect; the market price is still set by MPC and MPB, which is why the market ignores it.',
      ru: 'Только общественные кривые включают внешний эффект; рыночная цена по-прежнему задаётся MPC и MPB, поэтому рынок его игнорирует.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 5.2, p. 149' },
    sim: 'econ.externality-negative-production',
  },
  {
    id: 'marginal-private-benefit',
    term: { en: 'marginal private benefit (MPB)', ru: 'предельная частная выгода (marginal private benefit, MPB)' },
    def: {
      en: 'The extra benefit to the consumer of one more unit. The demand curve shows MPB, which excludes any external benefit or cost.',
      ru: 'Дополнительная выгода потребителя от ещё одной единицы. Кривая спроса отражает MPB, которая не учитывает внешней выгоды и внешних издержек.',
    },
    example: {
      en: "A buyer's private benefit from the 16th tonne is AED 12, so the buyer will pay no more than that.",
      ru: 'Частная выгода покупателя от 16-й тонны составляет 12 AED, поэтому он заплатит за неё не больше.',
    },
    pitfall: {
      en: 'MPB is the value of one more unit, not the total value of all units, which is the area under the demand curve.',
      ru: 'MPB — это ценность одной дополнительной единицы, а не общая ценность всех единиц, которая равна площади под кривой спроса.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 5.2, p. 149' },
  },
  {
    id: 'marginal-social-benefit',
    term: { en: 'marginal social benefit (MSB)', ru: 'предельная общественная выгода (marginal social benefit, MSB)' },
    def: {
      en: 'The total benefit to society of one more unit, equal to the marginal private benefit plus the external benefit of that unit.',
      ru: 'Совокупная выгода общества от ещё одной единицы: предельная частная выгода плюс внешняя выгода этой единицы.',
    },
    example: {
      en: 'For one vaccine dose, the private benefit is AED 11 and the external benefit AED 4, so the social benefit is AED 15.',
      ru: 'Для одной дозы вакцины частная выгода равна 11 AED, внешняя — 4 AED, поэтому общественная выгода составляет 15 AED.',
    },
    pitfall: {
      en: 'For a positive consumption externality, MSB is above MPB, so the market quantity is too low, not too high.',
      ru: 'При позитивном внешнем эффекте в потреблении MSB выше MPB, поэтому рыночный объём слишком мал, а не велик.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 5.2, p. 149' },
    sim: 'econ.externality-positive-consumption',
  },
  {
    id: 'pigouvian-tax',
    term: { en: 'Pigouvian tax', ru: 'налог Пигу (Pigouvian tax)' },
    def: {
      en: 'An indirect tax whose size matches the external cost on each unit, so that the producer or consumer pays for the external cost and the market quantity moves to the social optimum.',
      ru: 'Косвенный налог, равный внешним издержкам на единицу: производитель или потребитель платит за внешний эффект, и рыночный объём сдвигается к общественному оптимуму.',
    },
    example: {
      en: "A tax of AED 6 per tonne moves the factory's output from 16 tonnes to the optimum of 10 tonnes.",
      ru: 'Налог 6 AED за тонну снижает выпуск завода с 16 тонн до оптимальных 10 тонн.',
    },
    pitfall: {
      en: 'A Pigouvian tax changes the price signal; it does not remove the external effect, and it works only when set at the size of the external cost.',
      ru: 'Налог Пигу меняет ценовой сигнал, но не устраняет внешний эффект полностью и работает, только если его размер равен внешним издержкам.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 5.3, p. 153' },
    sim: 'econ.externality-negative-production',
  },
  {
    id: 'tradable-permits',
    term: { en: 'tradable permits', ru: 'торгуемые разрешения (tradable permits)' },
    def: {
      en: 'A government sets a cap on total emissions or use and issues permits for it; firms can buy and sell permits, so the cap is met at the lowest cost.',
      ru: 'Государство задаёт предельный объём выбросов или использования ресурса и выпускает разрешения на него; фирмы покупают и продают их, поэтому лимит достигается с наименьшими издержками.',
    },
    example: {
      en: 'A cap of 800 tonnes is split into permits; a firm that cuts its emissions cheaply sells a spare permit for AED 30 per tonne.',
      ru: 'Лимит 800 тонн делится на разрешения; фирма, которая дешёво сокращает выбросы, продаёт лишнее разрешение за 30 AED за тонну.',
    },
    pitfall: {
      en: 'Permits fix the quantity and let the market set the price; a tax does the reverse, fixing the price and letting the quantity change.',
      ru: 'Разрешения фиксируют объём, а цену определяет рынок; налог делает наоборот: фиксирует цену, а объём меняется.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 5.3, p. 154' },
  },
  {
    id: 'property-rights',
    term: { en: 'property rights', ru: 'права собственности (property rights)' },
    def: {
      en: 'The legal rules that set who owns a resource and whether the owner may use or sell it; secure rights reduce the risk of investing in that resource.',
      ru: 'Законные правила, которые определяют, кому принадлежит ресурс и может ли владелец его использовать или продавать; надёжные права снижают риск инвестиций в этот ресурс.',
    },
    example: {
      en: 'A farmer who can prove ownership of a plot can use it as collateral for a bank loan to buy irrigation equipment, while a farmer with no legal title to the same plot is less likely to get that loan.',
      ru: 'Фермер, который может доказать право собственности на участок, может заложить этот участок как обеспечение банковского кредита на покупку оборудования для орошения, а фермер без законного правоустанавливающего документа на тот же участок с меньшей вероятностью получит этот кредит.',
    },
    pitfall: {
      en: 'Titled property rights are not the same as land rights: in many developing countries land is regulated by custom or communal ownership, which involves no titles.',
      ru: 'Права собственности, подтверждённые документами, — не то же, что права на землю: во многих развивающихся странах землю регулируют обычаи или общинная собственность, которые не требуют документов.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 19.3, p. 585' },
  },
];
