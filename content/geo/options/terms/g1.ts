import type { Term } from '../../../../src/contract/types';

// Option G, G.1: definitions in our own words, aligned with the key elements of the programme (guide 2017).
// Locators point to the ThinkIB eBook section of this unit (section level; page locators come from the S1 map).
// Urbanisation carries syllabus G.2: the guide lists urbanization and natural increase under Changing urban systems.
// Model attributions (checked): Burgess 1925; Hoyt 1939; Harris and Ullman 1945 (Annals of the AAPSS, vol. 242); Griffin and Ford 1980 (Geographical Review).
const SRC = { kind: 'thinkib' as const, title: 'Option G: Urban Environments (pages 37517, 37523, 37524)', locator: 'The Variety of Urban Environments; The Characteristics of Urban Places; Economic Activity in Urban Places; guide p. 40' };
const SIM = 'geo.opt-g-models' as const;

export const terms: Term[] = [
  {
    id: 'g-megacity',
    term: { en: 'megacity', ru: 'мегаполис (megacity)' },
    def: {
      en: 'An urban agglomeration with more than 10 million inhabitants. Most megacities are in Asia, and most of them are in developing regions.',
      ru: 'Городская агломерация с населением более 10 млн человек. Больше всего мегаполисов в Азии, и большинство из них расположено в развивающихся регионах.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Lagos (Nigeria) is a megacity whose population is hard to count, so official estimates differ widely between sources (Mistra Urban Futures, 2018).',
      ru: 'Лагос (Нигерия) — мегаполис, население которого трудно подсчитать: официальные оценки сильно расходятся между источниками (Mistra Urban Futures, 2018).',
    },
    pitfall: {
      en: 'A megacity is defined by population size, not by wealth or political power.',
      ru: 'Мегаполис определяется численностью населения, а не богатством или политическим весом города.',
    },
  },
  {
    id: 'g-urbanisation',
    term: { en: 'urbanisation (urbanization)', ru: 'урбанизация (urbanisation)' },
    def: {
      en: 'The rise in the proportion of a population that lives in towns and cities, through rural-urban migration and natural increase within urban areas.',
      ru: 'Рост доли населения, которое живёт в городах и городских поселениях. Он происходит из-за миграции из сельской местности в города и естественного прироста внутри городов.',
    },
    syllabus: 'G.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Urbanisation is about the share of people living in towns. A city can grow in population while the country becomes no more urban.',
      ru: 'Урбанизация — это доля людей, живущих в городах. Город может расти по населению, а страна при этом не станет более урбанизированной.',
    },
  },
  {
    id: 'g-conurbation',
    term: { en: 'conurbation', ru: 'конурбация (conurbation)' },
    def: {
      en: 'A continuous built-up area formed when neighbouring towns and cities grow until their urban areas join together.',
      ru: 'Непрерывно застроенная территория, которая возникает, когда соседние города и посёлки разрастаются и их городские территории сливаются.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'The West Midlands in England is a conurbation built up around Birmingham.',
      ru: 'Уэст-Мидлендс в Англии — конурбация, сложившаяся вокруг Бирмингема.',
    },
  },
  {
    id: 'g-primate-city',
    term: { en: 'primate city', ru: 'главный город страны (primate city)' },
    def: {
      en: 'The largest city in a country. It is much bigger than the next largest city and dominates the economy, government and culture of the country.',
      ru: 'Крупнейший город страны, намного превосходящий по населению следующий по величине город и доминирующий в экономике, управлении и культуре страны.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Bangkok is far larger than any other Thai city and dominates the country’s economy.',
      ru: 'Бангкок намного крупнее любого другого города Таиланда и доминирует в экономике страны.',
    },
  },
  {
    id: 'g-central-business-district',
    term: { en: 'central business district (CBD)', ru: 'центральный деловой район (central business district, CBD)' },
    def: {
      en: 'The commercial and administrative core of a city, with offices, shops and services, the highest land values and the best access to public transport. Economic activities compete for sites by their distance from it: offices and high-order shops pay most for central sites, while industry moves out to cheaper land.',
      ru: 'Коммерческое и административное ядро города с офисами, магазинами и услугами; здесь самые высокие цены на землю и лучший доступ к общественному транспорту. Экономическая деятельность конкурирует за участки по расстоянию от него: офисы и дорогие магазины платят больше всего за центральные участки, а промышленность уходит на более дешёвую землю.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-concentric-zone-model',
    term: { en: 'concentric zone model', ru: 'модель концентрических зон (concentric zone model)' },
    def: {
      en: 'Burgess’s model (1925) of a city as rings of land use around the CBD: the zone in transition, working-class housing, better residential areas and the commuter zone.',
      ru: 'Модель Берджесса (1925): город как кольца разных видов застройки вокруг ЦДР — зона перехода, жильё рабочих, лучшие жилые районы и зона пригородов.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Burgess described Chicago. The rings are an idealised pattern, and real cities are distorted by transport routes and local geography.',
      ru: 'Берджесс описывал Чикаго. Кольца — идеализированная схема, а реальные города искажаются транспортными путями и рельефом.',
    },
    sim: SIM,
  },
  {
    id: 'g-sector-model',
    term: { en: 'sector model', ru: 'секторная модель (sector model)' },
    def: {
      en: 'Hoyt’s model (1939) in which land uses and housing classes develop as wedge-shaped sectors that spread outwards from the CBD along transport routes.',
      ru: 'Модель Хойта (1939): зоны разного назначения и разные классы жилья развиваются секторами-клиньями, которые тянутся от центра вдоль транспортных путей.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Hoyt’s sectors follow transport routes and rent levels, not rings. A wealthy sector keeps its direction as the city grows.',
      ru: 'Секторы Хойта следуют за транспортными путями и уровнем арендной платы, а не за кольцами. Богатый сектор сохраняет направление при росте города.',
    },
    sim: SIM,
  },
  {
    id: 'g-multiple-nuclei-model',
    term: { en: 'multiple nuclei model', ru: 'модель многоядерного города (multiple nuclei model)' },
    def: {
      en: 'Harris and Ullman’s model (1945) in which a city grows around several separate centres (nuclei), such as a CBD, industrial estates, residential suburbs, a university or an airport.',
      ru: 'Модель Харриса и Ульмана (1945): город растёт вокруг нескольких самостоятельных центров (ядер) — делового района, промзон, жилых пригородов, университета или аэропорта.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Each nucleus is a separate centre with its own land uses. A suburban shopping centre can be a nucleus even though it is not the CBD.',
      ru: 'Каждое ядро — самостоятельный центр со своими видами застройки. Торговый центр в пригороде может быть ядром, даже если он не является ЦДР.',
    },
    sim: SIM,
  },
  {
    id: 'g-latin-american-city-model',
    term: { en: 'Latin American city model', ru: 'модель латиноамериканского города (Latin American city model)' },
    def: {
      en: 'Griffin and Ford’s model (1980): a CBD, an elite residential sector along a commercial axis, rings of housing whose quality falls outwards, and informal settlements on the edge.',
      ru: 'Модель Гриффина и Форда (1980): деловой центр, элитный жилой сектор вдоль коммерческой оси, кольца жилья, качество которого падает к окраинам, и неформальные поселения на периферии.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    sim: SIM,
  },
  {
    id: 'g-informal-settlement',
    term: { en: 'informal settlement', ru: 'неформальное поселение (informal settlement)' },
    def: {
      en: 'Housing built without legal permission or planning approval, often on land the occupants do not own, and often without official water, sanitation or electricity services.',
      ru: 'Жильё, построенное без законного разрешения и градостроительного согласования, часто на земле, которая не принадлежит жильцам, и часто без официального водоснабжения, канализации и электричества.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Dharavi in Mumbai is one of the best-known informal settlements (see the Dharavi case).',
      ru: 'Дхарави в Мумбаи — одно из самых известных неформальных поселений (см. кейс Дхарави).',
    },
    pitfall: {
      en: 'Informal does not automatically mean temporary or of poor quality. Many informal settlements have stood for decades.',
      ru: 'Неформальное не значит временное или некачественное. Многие такие районы стоят десятилетиями.',
    },
  },
  {
    id: 'g-gated-community',
    term: { en: 'gated community', ru: 'закрытый жилой комплекс (gated community)' },
    def: {
      en: 'A residential area enclosed by walls or fences with controlled entry, usually for higher-income households who buy security and private services.',
      ru: 'Жилой район, огороженный стенами или забором с контролируемым въездом; обычно для семей с высоким доходом, которые покупают безопасность и частные услуги.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Gated communities often sit in the wealthy sectors of Latin American cities, close to informal settlements.',
      ru: 'Закрытые комплексы часто располагаются в богатых секторах латиноамериканских городов, рядом с неформальными поселениями.',
    },
  },
  {
    id: 'g-planned-city',
    term: { en: 'planned city', ru: 'спланированный город (planned city)' },
    def: {
      en: 'A city designed and built as a whole, usually from a master plan that fixes land-use zones, transport networks and public services before most residents arrive.',
      ru: 'Город, спроектированный и построенный целиком по генеральному плану; план задаёт зоны застройки, транспортные сети и общественные услуги до заселения большинства жителей.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Brasilia, the capital of Brazil, was designed as a whole around a master plan.',
      ru: 'Бразилиа, столица Бразилии, спроектирована целиком по генеральному плану.',
    },
  },
  {
    id: 'g-urban-hierarchy',
    term: { en: 'urban hierarchy', ru: 'городская иерархия (urban hierarchy)' },
    def: {
      en: 'The arrangement of settlements by size and function. Larger centres provide higher-order services to the smaller settlements around them, and small settlements are far more numerous than large ones.',
      ru: 'Упорядочивание поселений по размеру и функциям: крупные центры дают высокоуровневые услуги меньшим окрестным поселениям, а мелких поселений намного больше, чем крупных.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-rural-urban-fringe',
    term: { en: 'rural-urban fringe', ru: 'урбанизированная периферия (rural-urban fringe)' },
    def: {
      en: 'The transition zone between the built-up city and the countryside, where land uses are mixed, new housing spreads and commuters live alongside farmland.',
      ru: 'Переходная зона между застроенным городом и сельской местностью, где перемешаны виды землепользования, расширяется жильё и пригородные жители живут рядом с полями.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-zone-in-transition',
    term: { en: 'zone in transition', ru: 'зона перехода (zone in transition)' },
    def: {
      en: 'In Burgess’s model, the ring of older housing, factories and rented rooms between the CBD and the better residential areas, with high population turnover and low incomes.',
      ru: 'В модели Берджесса — кольцо старого жилья, фабрик и съёмных комнат между ЦДР и лучшими жилыми районами, для которого характерны частая смена жильцов и низкие доходы.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'g-site',
    term: { en: 'site', ru: 'местоположение города (site)' },
    def: {
      en: 'The physical ground on which a settlement is built: relief, a river crossing, a coast or a defensible hill. The site shaped where the first settlement grew and how easily the town could expand.',
      ru: 'Физические особенности участка, на котором построен город: рельеф, переправа через реку, побережье или защищённый холм. Они определили, где возникло первое поселение и насколько легко город мог расти.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Site describes the ground, not the role of the city. The role is the function (see urban function).',
      ru: 'Site описывает участок, а не роль города. Роль задаёт функция города (urban function).',
    },
  },
  {
    id: 'g-function',
    term: { en: 'urban function', ru: 'функция города (urban function)' },
    def: {
      en: 'The main economic activity that gives a town or city its role, such as port, manufacturing, administration, tourism or retail. Cities of similar size can have very different functions.',
      ru: 'Главная экономическая деятельность, которая задаёт роль города, например порт, промышленность, администрация, туризм или торговля. Города одинакового размера могут выполнять разные функции.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Function is the role of the place, not its size. A large city can have a narrow function, such as one major port.',
      ru: 'Функция — это роль места, а не его размер. Крупный город может иметь узкую функцию, например роль одного крупного порта.',
    },
  },
  {
    id: 'g-land-use',
    term: { en: 'land use', ru: 'использование земли (land use)' },
    def: {
      en: 'The purpose for which an area of urban land is used, such as housing, offices, shops, industry, transport or green space. The pattern of land uses forms the internal structure of a city.',
      ru: 'Назначение участка городской земли: жильё, офисы, магазины, промышленность, транспорт или зелёные зоны. Распределение видов использования земли формирует внутреннюю структуру города.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Land use is what the land is used for now. Land-use change (G.2) is how these uses change over time.',
      ru: 'Использование земли — это то, для чего земля служит сейчас. Изменение использования земли (G.2) — то, как эти виды меняются со временем.',
    },
  },
  {
    id: 'g-ethnicity',
    term: { en: 'ethnicity', ru: 'этническая принадлежность (ethnicity)' },
    def: {
      en: 'Shared ethnic identity can influence where households live. Groups may cluster in particular neighbourhoods through choice, language, family networks or discrimination, which shapes the residential pattern of a city.',
      ru: 'Общая этническая принадлежность может влиять на то, где живут семьи. Группы могут селиться вместе из-за выбора, языка, родственных связей или дискриминации, и это формирует рисунок жилых районов города.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Ethnic clustering is a pattern, not a cause on its own: income, planning decisions and discrimination also shape where people live.',
      ru: 'Этническая концентрация — это рисунок расселения, а не самостоятельная причина: доходы, решения планирования и дискриминация тоже определяют, где живут люди.',
    },
  },
  {
    id: 'g-informal-activity',
    term: { en: 'informal activity', ru: 'неформальная деятельность (informal activity)' },
    def: {
      en: 'Housing and economic activity that operates outside official planning, legal permission or registration, such as informal settlements and small unregistered workshops or traders.',
      ru: 'Жильё и экономическая деятельность вне официального планирования, законных разрешений или регистрации: например, неформальные поселения и небольшие незарегистрированные мастерские или торговцы.',
    },
    syllabus: 'G.1',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Informal does not only mean illegal: for many poorer households it is the main source of housing and income, so describe its scale and effects.',
      ru: 'Неформальное не значит только незаконное: для многих бедных семей это главный источник жилья и дохода, поэтому описывайте его масштаб и последствия.',
    },
  },
];
