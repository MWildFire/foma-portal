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
      en: 'The net marginal cost to society of one more unit. In a negative production externality MSC = MPC + MEC; a production benefit can instead put MSC below MPC.',
      ru: 'Чистые предельные издержки общества от ещё одной единицы. При отрицательном производственном эффекте MSC = MPC + MEC; внешняя выгода производства, напротив, может расположить MSC ниже MPC.',
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
      en: 'The net marginal benefit to society of one more unit. For positive consumption effects MSB = MPB + MEB; for negative consumption effects MSB = MPB − MEC.',
      ru: 'Чистая предельная выгода общества от ещё одной единицы. При положительном эффекте потребления MSB = MPB + MEB, при отрицательном — MSB = MPB − MEC.',
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
      en: 'A corrective tax set at the marginal external cost at the socially optimal quantity. In the standard competitive model it makes private incentives select that quantity; constant external cost permits a constant tax to align the entire curves.',
      ru: 'Корректирующий налог, установленный по предельным внешним издержкам при общественно оптимальном объёме. В стандартной конкурентной модели он направляет частный выбор к этому объёму; при постоянных внешних издержках постоянный налог совмещает кривые полностью.',
    },
    example: {
      en: "A tax of AED 6 per tonne moves the factory's output from 16 tonnes to the optimum of 10 tonnes.",
      ru: 'Налог 6 AED за тонну снижает выпуск завода с 16 тонн до оптимальных 10 тонн.',
    },
    pitfall: {
      en: 'A Pigouvian tax changes the price signal; it does not remove the external effect, and exact correction needs the relevant marginal external cost at the optimum. An imperfect tax may still reduce welfare loss; it is not automatically useless.',
      ru: 'Налог Пигу меняет ценовой сигнал, но не устраняет внешний эффект полностью и для точной корректировки нужна величина предельных внешних издержек при оптимуме. Неточно установленный налог всё же может уменьшить потери, а не обязательно бесполезен.',
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
      en: 'A government sets a cap on total emissions or use and issues permits for it; firms can trade permits. With competitive trading, effective enforcement and low transaction costs, trading can equalise marginal abatement costs and reduce the cost of meeting the cap.',
      ru: 'Государство задаёт предельный объём выбросов или использования ресурса и выпускает разрешения на него; фирмы могут торговать ими. При конкуренции, надёжном контроле и низких издержках сделок торговля может выравнивать предельные затраты сокращения выбросов и уменьшать стоимость соблюдения лимита.',
    },
    example: {
      en: 'A cap of 800 tonnes is split into permits; a firm that cuts its emissions cheaply sells a spare permit for AED 30 per tonne.',
      ru: 'Лимит 800 тонн делится на разрешения; фирма, которая дешёво сокращает выбросы, продаёт лишнее разрешение за 30 AED за тонну.',
    },
    pitfall: {
      en: 'Permits fix the quantity and let the market set the price; a tax fixes the charge per emissions unit, not the final goods price, and lets the emissions quantity respond.',
      ru: 'Разрешения фиксируют объём, а цену определяет рынок; налог фиксирует платёж за единицу выбросов, а не конечную цену товара, и позволяет объёму выбросов меняться.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 5.3, p. 154' },
  },
  {
    id: 'property-rights',
    term: { en: 'property rights', ru: 'права собственности (property rights)' },
    def: {
      en: 'Legally established permissions concerning who may own an asset, use it and transfer it to someone else.',
      ru: 'Установленные законом права, определяющие, кто может владеть имуществом, использовать его и передавать другому лицу.',
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
