import type { SourceRef, Term } from '../../../../src/contract/types';

// Syllabus core 2.3 (responding to global climate change). Definitions are in our own words, following the IPCC AR6
// and SROCC glossaries and the Geography guide (2017), core 2.3. The ThinkIB eBook has no page numbers, so the locator
// names chapter 6 of Unit 2 (sections 6a–6g).
const src: SourceRef = { kind: 'thinkib', title: 'ThinkIB Geography eBook', locator: 'Paper 2 › Unit 2 › ch. 6 (6a–6g)' };

export const terms: Term[] = [
  {
    id: 'core-mitigation',
    term: { en: 'mitigation', ru: 'смягчение последствий изменения климата (mitigation)' },
    def: {
      en: 'Any human action that cuts greenhouse gas emissions or strengthens the natural sinks that absorb them, so that less warming takes place.',
      ru: 'Любое действие человека, которое сокращает выбросы парниковых газов или усиливает природные поглотители, забирающие их из атмосферы, чтобы потепление было меньше.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Mitigation acts on the cause (emissions). Adaptation acts on the effects. Do not put a measure in the wrong category.',
      ru: 'Смягчение действует на причину (выбросы), а адаптация на последствия. Не относите меру не к той категории.',
    },
  },
  {
    id: 'core-adaptation',
    term: { en: 'adaptation', ru: 'адаптация (adaptation)' },
    def: {
      en: 'Adjusting human or natural systems to the actual or expected climate and its effects, to reduce harm or make use of new opportunities.',
      ru: 'Приспособление человеческих и природных систем к фактическому или ожидаемому климату и его последствиям, чтобы уменьшить ущерб или воспользоваться новыми возможностями.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Adaptation reduces the impacts of warming that is already under way or unavoidable. It does not stop the warming.',
      ru: 'Адаптация уменьшает последствия уже идущего или неизбежного потепления, но не останавливает его.',
    },
  },
  {
    id: 'core-renewable-energy',
    term: { en: 'renewable energy', ru: 'возобновляемая энергия (renewable energy)' },
    def: {
      en: 'Energy from natural sources such as sunlight, wind, flowing water, geothermal heat or biomass, which is replenished at least as fast as it is used.',
      ru: 'Энергия из природных источников, таких как солнечный свет, ветер, текущая вода, геотермальное тепло или биомасса, которая восполняется не медленнее, чем расходуется.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Renewable does not always mean low-carbon: biomass can release CO2, and wind and solar output varies with the weather.',
      ru: 'Возобновляемая не всегда значит низкоуглеродная: биомасса может давать CO2, а выработка ветра и солнца меняется с погодой.',
    },
  },
  {
    id: 'core-energy-efficiency',
    term: { en: 'energy efficiency', ru: 'энергоэффективность (energy efficiency)' },
    def: {
      en: 'Getting the same useful output, such as light, heat, transport or manufactured goods, from less energy input, so that less fuel is burned and fewer emissions are produced.',
      ru: 'Получение того же полезного результата (света, тепла, перевозок, продукции) при меньшем количестве энергии, поэтому сжигается меньше топлива и выбрасывается меньше газов.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Efficiency is useful output per unit of energy input. It is not the same as spending less money.',
      ru: 'Энергоэффективность — это полезный результат на единицу затраченной энергии. Это не то же самое, что экономия денег.',
    },
  },
  {
    id: 'core-carbon-pricing',
    term: { en: 'carbon pricing', ru: 'ценообразование на выбросы углерода (carbon pricing)' },
    def: {
      en: 'A policy that attaches a cost to greenhouse gas emissions, usually through a carbon tax on fuels or through an emissions trading scheme, so that emitters pay for the damage they cause.',
      ru: 'Политика, которая назначает стоимость выбросам парниковых газов, обычно через налог на топливо или через систему торговли квотами, чтобы за наносимый ущерб платили те, кто выбрасывает газы.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A carbon tax fixes the price and lets the quantity of emissions vary. An emissions trading scheme fixes the quantity and lets the price vary.',
      ru: 'Налог фиксирует цену, а объём выбросов меняется. Торговля квотами фиксирует объём, а цена меняется.',
    },
  },
  {
    id: 'core-emissions-trading',
    term: { en: 'emissions trading', ru: 'торговля квотами на выбросы (emissions trading)' },
    def: {
      en: 'A cap-and-trade scheme in which the government sets a limit on total emissions, issues allowances up to that limit, and firms buy and sell them, so that cuts happen where they cost least.',
      ru: 'Схема «ограничение и торговля»: государство устанавливает предел общих выбросов и выдаёт квоты в пределах этого предела, а предприятия покупают и продают их, поэтому сокращения происходят там, где они обходятся дешевле всего.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'The cap decides the environmental result. The allowance price is set by the market and can rise or fall.',
      ru: 'Предел определяет экологический результат. Цену квоты задаёт рынок, и она может расти или падать.',
    },
  },
  {
    id: 'core-afforestation',
    term: { en: 'afforestation', ru: 'облесение (afforestation)' },
    def: {
      en: 'Establishing forest by planting or deliberate seeding on land previously classified as non-forest (FAO FRA terminology). Growing trees remove CO2 and accumulate carbon.',
      ru: 'Создание леса посадкой или целенаправленным посевом на земле, которая до этого не относилась к лесу (терминология ФАО FRA). Растущие деревья поглощают CO2 и накапливают углерод.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src: {"kind": "web", "title": "FAO FRA 2015 Terms and Definitions, pp.5–6; Kyoto decision 16/CMP.1 annex 1(b) is a separate accounting domain; IPCC AR6 WGIII 7.4.5.3 for wood-product carbon", "url": "https://www.fao.org/4/ap862e/ap862e00.pdf"},
    pitfall: {
      en: 'FAO distinguishes reforestation on land still classified as forest. The 50-year non-forest threshold belongs specifically to Kyoto accounting (decision 16/CMP.1, annex 1(b)). Carbon can persist in deadwood, soil and harvested wood products; burning and decay can release it. Forest permanence and competition for land still matter.',
      ru: 'В терминологии ФАО лесовосстановление происходит на земле, которая продолжает относиться к лесу. Порог 50 лет без леса относится именно к киотскому учёту (решение 16/CMP.1, приложение 1(b)). Углерод может сохраняться в мёртвой древесине, почве и изделиях, а при горении и разложении — высвобождаться. Долговременная сохранность и конкуренция за землю остаются важны.',
    },
  },
  {
    id: 'core-carbon-capture-and-storage',
    term: { en: 'carbon capture and storage (CCS)', ru: 'улавливание и хранение углерода (carbon capture and storage, CCS)' },
    def: {
      en: 'Technology that separates carbon dioxide from flue gases at large industrial or power plants, compresses and transports it, and stores it underground, isolated from the atmosphere for the long term.',
      ru: 'Технология, которая отделяет углекислый газ от дымовых газов крупных заводов или электростанций, сжимает и транспортирует его и хранит под землёй, изолируя от атмосферы на длительный срок.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'CCS captures CO2 at point sources. Taking CO2 out of ordinary air is direct air capture, a form of carbon dioxide removal.',
      ru: 'CCS улавливает CO2 на крупных точечных источниках. Извлечение CO2 из обычного воздуха — это прямой захват из воздуха, один из способов удаления углекислого газа.',
    },
  },
  {
    id: 'core-flood-defence',
    term: { en: 'flood defence', ru: 'защита от наводнений (flood defence)' },
    def: {
      en: 'A structure or measure, such as a dyke, storm surge barrier, dam, sluice or raised ground, that keeps floodwater out of an area or holds it back, reducing how often and how deep flooding occurs.',
      ru: 'Сооружение или мера, например дамба, штормовой барьер, плотина, шлюз или поднятый грунт, которые не пускают паводковую воду на территорию или сдерживают её, уменьшая частоту и глубину затоплений.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A defence lowers the probability of flooding but does not remove the risk. It can be overtopped or fail, which leaves residual risk.',
      ru: 'Защита снижает вероятность наводнения, но не устраняет риск. Сооружение может быть перелито или отказать, и остаётся остаточный риск.',
    },
  },
  {
    id: 'core-early-warning-system',
    term: { en: 'early warning system', ru: 'система раннего предупреждения (early warning system)' },
    def: {
      en: 'The technical and institutional capacity to forecast a hazard and send timely, understandable warnings to people at risk, so that they can act before it arrives.',
      ru: 'Технические и институциональные возможности прогнозировать опасное явление и своевременно передавать понятные предупреждения людям в зоне риска, чтобы они успели действовать до его прихода.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A forecast is not yet a system. Warnings help only when people understand them, trust them and know what to do and where to go.',
      ru: 'Прогноз — ещё не система. Предупреждения помогают, только если люди понимают их, доверяют им и знают, что делать и куда идти.',
    },
  },
  {
    id: 'core-nature-based-solutions',
    term: { en: 'nature-based solutions', ru: 'решения на основе природы (nature-based solutions)' },
    def: {
      en: 'Actions that protect, manage or restore natural or modified ecosystems to address a societal challenge, such as flood risk or heat, while also benefiting people and biodiversity.',
      ru: 'Действия по защите, управлению или восстановлению природных или изменённых экосистем для решения общественной задачи, например риска наводнений или жары, которые одновременно приносят пользу людям и биоразнообразию.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Nature-based solutions still need design and upkeep, for example mangrove planting or wetland restoration, and alone they may not cope with very severe storms.',
      ru: 'Решения на основе природы тоже требуют проектирования и ухода, например посадки мангровых лесов или восстановления болот, и в одиночку могут не справиться с очень сильными штормами.',
    },
  },
  {
    id: 'core-managed-retreat',
    term: { en: 'managed retreat', ru: 'планируемое переселение (managed retreat)' },
    def: {
      en: 'The planned relocation of people, homes and infrastructure away from places where a climate hazard, such as coastal flooding or erosion, is too severe or too costly to defend.',
      ru: 'Плановое переселение людей, жилья и инфраструктуры из мест, где климатическая опасность, например затопление побережья или эрозия, слишком сильна или слишком дорога для защиты.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Managed retreat is planned, with consultation and compensation. Forced eviction without these is a different process, and it raises equity concerns.',
      ru: 'Планируемое переселение проводится заранее, с консультациями и компенсацией. Принудительное выселение без этого — другой процесс, и он вызывает вопросы справедливости.',
    },
  },
  {
    id: 'core-nationally-determined-contribution',
    term: { en: 'nationally determined contribution (NDC)', ru: 'национально определяемый вклад (nationally determined contribution, NDC)' },
    def: {
      en: 'A country’s own plan under the Paris Agreement for cutting emissions and adapting to climate change. Each country must submit successive NDCs, updated every five years, and each one must go further than the last.',
      ru: 'Собственный план страны по Парижскому соглашению по сокращению выбросов и адаптации к изменению климата. Каждая страна обязана представлять последовательные вклады, обновляя их каждые пять лет, причём каждый следующий должен идти дальше предыдущего.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Each country sets the target inside its own NDC, so NDCs differ in size. The agreement requires countries to submit and update them, not to reach one common target.',
      ru: 'Цель внутри НДК устанавливает каждая страна, поэтому вклады различаются по размеру. Соглашение обязывает подавать и обновлять их, но не требует одной общей цели.',
    },
  },
  {
    id: 'core-loss-and-damage',
    term: { en: 'loss and damage', ru: 'потери и ущерб (loss and damage)' },
    def: {
      en: 'Harm from climate change that remains after mitigation and adaptation have been done, such as destroyed homes, lost livelihoods or lost land, and the political question of who should pay for it.',
      ru: 'Вред от изменения климата, который остаётся после смягчения и адаптации, например разрушенные дома, утраченные средства к существованию или потерянная земля, и политический вопрос о том, кто должен за него платить.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Loss and damage is residual harm. It is not the same as the cost of adaptation projects, although the two are linked in negotiations.',
      ru: 'Потери и ущерб — это остаточный вред. Это не то же самое, что стоимость проектов адаптации, хотя на переговорах они связаны.',
    },
  },
  {
    id: 'core-common-but-differentiated-responsibilities',
    term: { en: 'common but differentiated responsibilities', ru: 'общая, но дифференцированная ответственность (common but differentiated responsibilities)' },
    def: {
      en: 'The principle that all countries share responsibility for tackling climate change, but that countries differ in their historic emissions and capabilities, so richer countries should act first, do more and support others.',
      ru: 'Принцип, по которому все страны несут общую ответственность за борьбу с изменением климата, но различаются по историческим выбросам и возможностям, поэтому богатые страны должны действовать первыми, делать больше и поддерживать остальных.',
    },
    syllabus: 'core-2.3',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'The principle does not divide responsibility equally. It links responsibility to historic emissions and capability, which is why it is contested in negotiations.',
      ru: 'Принцип не делит ответственность поровну. Он связывает её с историческими выбросами и возможностями, поэтому на переговорах его оспаривают.',
    },
  },
  {
    id: "core-carbon-offset",
    term: {
      en: "carbon offset",
      ru: "компенсация выбросов (carbon offset)"
    },
    def: {
      en: "A claimed reduction or removal outside the emitting activity, credited to compensate for emissions. It differs from an allowance that permits emissions inside a cap.",
      ru: "Заявленное сокращение или удаление парниковых газов за пределами самой деятельности, засчитываемое в компенсацию выбросов. Отличается от квоты, разрешающей выброс внутри лимита."
    },
    syllabus: "core-2.3",
    papers: [
      "P2"
    ],
    src: {
      kind: "web",
      title: "UN, Integrity Matters (2022), value-chain reductions and carbon credits",
      url: "https://www.un.org/en/climatechange/high-level-expert-group"
    },
    pitfall: {
      en: "Check additionality, durable storage, leakage and double counting; purchasing a credit does not itself eliminate the buyer’s gross emissions.",
      ru: "Проверяйте дополнительность, сохранность углерода, перенос выбросов и двойной учёт; сама покупка кредита не устраняет фактические выбросы покупателя."
    }
  },
];
