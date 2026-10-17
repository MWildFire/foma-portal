import type { Term } from '../../../../src/contract/types';

// Original definitions. The Geography guide sets curricular scope; it is not a glossary for every term.
// Institutional/academic passages below support the definitions; no unread ThinkIB chapter is claimed as verified.
const srcAgeing = { kind: 'web' as const, title: 'IUSSP / Population Analysis for Policies and Programmes, Glossary', url: 'https://papp.iussp.org/sessions/glossary/glossary.html', locator: 'Population ageing; Replacement level fertility; Population momentum' };
const srcAgeRatio = { kind: 'web' as const, title: 'World Bank, WDI metadata: Age dependency ratio (SP.POP.DPND)', url: 'https://databank.worldbank.org/metadataglossary/world-development-indicators/series/SP.POP.DPND', locator: 'Definition, methodology and age-composition limitation' };
const srcBirthPolicy = { kind: 'web' as const, title: 'UNFPA / Florence Bauer, The Real Fertility Crisis (11 July 2025)', url: 'https://albania.unfpa.org/en/news/real-fertility-crisis-why-people-arent-having-families-they-desire', locator: 'Government incentives, economic/career constraints, housing, childcare and parental leave paragraphs' };
const srcGuide = { kind: 'ib-guide' as const, title: 'Geography guide (2017), core 1.3, section 3 “Challenges and opportunities”', locator: 'p. 43' };
const DEPENDENCY_SIM = 'geo.core-dependency-ratio' as const;

export const terms: Term[] = [
  {
    id: 'core-ageing-population',
    term: { en: 'ageing population', ru: 'старение населения (ageing population)' },
    def: {
      en: 'A population in which the share of people aged 65 and over is rising, usually because birth rates have fallen and life expectancy has risen.',
      ru: 'Процесс роста доли людей в возрасте 65 лет и старше в населении, обычно связанный со снижением рождаемости и увеличением продолжительности жизни.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: srcAgeing,
    pitfall: {
      en: 'Ageing describes the age structure. A population can age while its total size stays the same or even grows.',
      ru: 'Старение — это изменение возрастной структуры. Население может стареть, даже если его общая численность остаётся прежней или растёт.',
    },
  },
  {
    id: 'core-working-age-population',
    term: { en: 'working-age population', ru: 'население трудоспособного возраста (working-age population)' },
    def: {
      en: 'People aged 15 to 64 in the age classification used here. This is not the number employed or the labour force; age limits in employment law and statistics can differ.',
      ru: 'Люди в возрасте от 15 до 64 лет в принятой здесь возрастной классификации. Это не число занятых и не рабочая сила; законодательство и статистика труда могут использовать другие возрастные границы.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: srcAgeRatio,
    pitfall: {
      en: 'Age does not determine labour-force status. A student or carer may be employed or unemployed; a person neither employed nor meeting the job-search and availability criteria is outside the labour force.',
      ru: 'Возраст не определяет принадлежность к рабочей силе. Учащийся или человек, ухаживающий за близкими, может быть занятым или безработным. Вне рабочей силы находятся те, кто не занят и не соответствует критериям поиска работы и готовности приступить к ней.',
    },
  },
  {
    id: 'core-total-dependency-ratio',
    term: { en: 'total dependency ratio', ru: 'общий коэффициент демографической нагрузки (total dependency ratio)' },
    def: {
      en: 'The number of people aged 0 to 14 plus people aged 65 and over, for every 100 people aged 15 to 64.',
      ru: 'Число людей в возрасте 0–14 лет и людей в возрасте 65 лет и старше на каждые 100 человек в возрасте 15–64 года.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: srcAgeRatio,
    sim: DEPENDENCY_SIM,
    pitfall: {
      en: 'Divide by the 15 to 64 group only, never by the whole population.',
      ru: 'Делите только на население в возрасте 15–64 лет, а не на всё население.',
    },
  },
  {
    id: 'core-child-dependency-ratio',
    term: { en: 'child dependency ratio', ru: 'коэффициент демографической нагрузки детьми (child dependency ratio)' },
    def: {
      en: 'The number of people aged 0 to 14 for every 100 people aged 15 to 64.',
      ru: 'Число людей в возрасте 0–14 лет на каждые 100 человек в возрасте 15–64 года.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: srcAgeRatio,
    sim: DEPENDENCY_SIM,
  },
  {
    id: 'core-old-age-dependency-ratio',
    term: { en: 'old-age dependency ratio', ru: 'коэффициент демографической нагрузки пожилыми (old-age dependency ratio)' },
    def: {
      en: 'The number of people aged 65 and over for every 100 people aged 15 to 64.',
      ru: 'Число людей в возрасте 65 лет и старше на каждые 100 человек в возрасте 15–64 года.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: srcAgeRatio,
    sim: DEPENDENCY_SIM,
    pitfall: {
      en: 'It counts age groups only, so it does not show how many older people are working or who pays their pensions.',
      ru: 'Показатель учитывает только возраст, поэтому он не показывает, сколько пожилых людей работает и кто платит их пенсии.',
    },
  },
  {
    id: 'core-youth-bulge',
    term: { en: 'youth bulge', ru: 'демографическая волна молодёжи (youth bulge)' },
    def: {
      en: 'An unusually large young-adult share of a population. Ages 15–24 are often used, but definitions vary. Earlier high fertility and improved survival can create a large cohort; migration also affects its size.',
      ru: 'Необычно высокая доля молодёжи в населении — «молодёжный бугор». Часто используют возраст 15–24 года, но границы различаются. Многочисленная когорта может сформироваться при прежней высокой рождаемости и улучшении выживаемости; на её размер влияет и миграция.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: { kind: 'web', title: 'UNFPA, ICDP/15 Arab States Regional Review (2010), Youth and Working Age Population', url: 'https://arabstates.unfpa.org/sites/default/files/pub-pdf/2010-ICPD%4015RegionalReport-EN_0.pdf', locator: 'p. 35, youth cohorts and working-age population paragraphs' },
    pitfall: {
      en: 'This describes age structure, not necessarily high birth rates today. Compare like-width age bands or annual-cohort sizes; a ten-year group need not exceed every differently sized neighbouring group.',
      ru: 'Это характеристика возрастной структуры, а не обязательно высокой рождаемости сегодня. Сопоставляйте группы одинаковой ширины или численность одного года возраста: десятилетняя группа не обязана быть больше всех соседних групп другой ширины.',
    },
  },
  {
    id: 'core-demographic-dividend',
    term: { en: 'demographic dividend', ru: 'демографический дивиденд (demographic dividend)' },
    def: {
      en: 'The potential for faster economic growth when the working-age share of the population rises because fertility has fallen, provided young people gain education and jobs.',
      ru: 'Потенциал более быстрого экономического роста, который возникает, когда доля населения трудоспособного возраста растёт из-за снижения рождаемости, при условии что молодые люди получают образование и работу.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: { kind: 'web', title: 'UNFPA, Demographic dividend', url: 'https://www.unfpa.org/demographic-dividend', locator: 'Necessary investments: finite window and economic growth potential; What it takes' },
    pitfall: {
      en: 'The favourable age-structure window is temporary, and growth is not automatic. Do not infer that accumulated skills or savings disappear when that window closes.',
      ru: 'Благоприятное окно возрастной структуры ограничено во времени, а рост не возникает автоматически. Закрытие этого окна не означает исчезновения накопленных навыков или сбережений.',
    },
  },
  {
    id: 'core-replacement-level-fertility',
    term: { en: 'replacement-level fertility', ru: 'уровень рождаемости, обеспечивающий замещение поколений (replacement-level fertility)' },
    def: {
      en: 'The average number of children per woman needed, over the long run, for the population to replace itself; about 2.1 in countries with low death rates.',
      ru: 'Среднее число детей на одну женщину, необходимое в долгосрочной перспективе для замещения поколений; около 2,1 в странах с низкой смертностью.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: srcAgeing,
    pitfall: {
      en: 'It is not the same as the actual total fertility rate, and the calculation assumes no net migration.',
      ru: 'Это не фактический суммарный коэффициент рождаемости, а расчёт предполагает отсутствие чистой миграции.',
    },
  },
  {
    id: 'core-pronatalist-policy',
    term: { en: 'pronatalist policy', ru: 'пронаталистская политика (pronatalist policy)' },
    def: {
      en: 'A government policy that tries to raise the birth rate, using incentives such as cash payments, tax relief, parental leave, or help with childcare and housing.',
      ru: 'Государственная политика, которая стремится повысить рождаемость с помощью стимулов: денежных выплат, налоговых льгот, отпусков по уходу за ребёнком, помощи с детскими садами и жильём.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: srcBirthPolicy,
    pitfall: {
      en: 'Incentives can bring births forward rather than add children, so the long-run effect may be much smaller than the short-run rise.',
      ru: 'Стимулы могут сдвигать рождения на более ранние сроки, а не добавлять детей, поэтому долгосрочный эффект может быть намного меньше краткосрочного роста.',
    },
  },
  {
    id: 'core-antinatalist-policy',
    term: { en: 'antinatalist policy', ru: 'антинаталистская политика (antinatalist policy)' },
    def: {
      en: 'A government policy that tries to lower the birth rate, for example through family planning programmes, limits on the number of children, or penalties for larger families.',
      ru: 'Государственная политика, которая стремится снизить рождаемость, например через программы планирования семьи, ограничения числа детей или штрафы для многодетных семей.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: { kind: 'web', title: 'China health authority, historical family-planning restrictions', url: 'https://www.nhc.gov.cn/zwgk/jianyi/201801/a0f5e8be51154fd3974555da883809f3.shtml', locator: 'Historical one-child norm and rural exceptions; case example, not a claim all family planning is coercive' },
    pitfall: {
      en: 'Fertility was already falling before China’s one-child limit began in 1980, so the whole fall cannot be attributed to the one-child restrictions.',
      ru: 'Рождаемость в Китае уже снижалась до введения ограничения «одного ребёнка» в 1980 году, поэтому всё снижение нельзя приписывать ограничениям «одного ребёнка».',
    },
  },
  {
    id: 'core-brain-gain',
    term: { en: 'brain gain', ru: 'приток квалифицированных кадров (brain gain)' },
    def: {
      en: 'An increase in skills and knowledge available to a country through migration: the destination may gain skilled immigrants, and the origin may gain when migrants return with new expertise or share knowledge through diaspora networks.',
      ru: 'Увеличение доступных стране знаний и квалификации благодаря миграции. Принимающая страна может получить квалифицированных иммигрантов, а страна происхождения — новые знания вернувшихся мигрантов или обмен знаниями через связи диаспоры.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: { kind: 'web', title: 'ILO, Glossary of Skills and Labour Migration', url: 'https://www.ilo.org/resource/glossary-skills-and-labour-migration', locator: 'B: Brain drain, Brain gain and Brain waste' },
    pitfall: {
      en: 'Distinguish the origin and destination. Return is one possible channel, not a requirement for the destination to gain skills; recognition and use of migrants’ skills also matter.',
      ru: 'Различайте страну происхождения и принимающую страну. Возвращение — один из возможных каналов; принимающая страна может получить кадры без него. Важны также признание и использование квалификации мигрантов.',
    },
  },
  {
    id: 'core-diaspora',
    term: { en: 'diaspora', ru: 'диаспора (diaspora)' },
    def: {
      en: 'Migrants and their descendants living outside their country of origin or ancestry who retain a shared identity and connections with that homeland and with one another.',
      ru: 'Мигранты и их потомки, живущие за пределами страны своего происхождения или исторической родины и сохраняющие общую идентичность, связи с ней и друг с другом.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: { kind: 'web', title: 'IOM, diaspora definition and discussion', url: 'https://www.iom.int/sites/g/files/tmzbdl2616/files/inline-files/pub2023-043-r-diaspora-transnational-identities1.pdf', locator: 'Definition passage and footnote 43; definitions vary by context' },
  },
  {
    id: 'core-silver-economy',
    term: { en: 'silver economy', ru: 'серебряная экономика (silver economy)' },
    def: {
      en: 'Economic activity serving older consumers: for example health and care services, housing, leisure, finance and technology. The European Commission’s 2018 study uses ages 50 and over; age boundaries vary by definition.',
      ru: 'Экономическая деятельность, ориентированная на старших потребителей: например медицина и уход, жильё, досуг, финансы и технологии. В исследовании Еврокомиссии 2018 года используется граница 50 лет; в разных определениях она может отличаться.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: { kind: 'web', title: 'European Commission, The Silver Economy (2018)', url: 'https://publications.europa.eu/resource/cellar/a9efa929-3ec7-11e8-b5fe-01aa75ed71a1.0001.01/DOC_1', locator: 'Printed p. 6, definition and footnote 1' },
    pitfall: {
      en: 'A 50+ market definition is not the 65+ group in a dependency ratio. Demand and business opportunities depend on incomes, needs and access; population ageing alone does not guarantee sales or jobs.',
      ru: 'Рыночная группа 50+ не равна группе 65+ в коэффициенте демографической нагрузки. Спрос и возможности бизнеса зависят от доходов, потребностей и доступности услуг; само старение населения не гарантирует продажи и рабочие места.',
    },
  },
  {
    id: 'core-pay-as-you-go-pension',
    term: { en: 'pay-as-you-go pension', ru: 'распределительная пенсионная система (pay-as-you-go pension)' },
    def: {
      en: 'A pension system that pays current pensions from current contributions or taxes, rather than mainly from assets accumulated in advance.',
      ru: 'Пенсионная система, в которой текущие пенсии выплачиваются из текущих взносов или налогов, а не главным образом из заранее накопленных средств.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: { kind: 'web', title: 'OECD, Pension Markets in Focus 2024, Annex A', url: 'https://www.oecd.org/en/publications/pension-markets-in-focus-2024_b11473d3-en/full-report/component-8.html', locator: 'Annex A, paragraphs on current contributions/public budgets, PAYG reserves and mixed financing' },
    pitfall: {
      en: 'Age ratios are not contributor-to-pensioner ratios. If contributors fall relative to pensioners, financing can come under pressure unless earnings, employment, contribution rates, benefits, retirement rules or tax transfers offset it.',
      ru: 'Возрастной коэффициент не равен соотношению плательщиков взносов и пенсионеров. Если второе ухудшается, финансирование испытывает давление, если это не компенсируют заработки, занятость, взносы, выплаты, условия выхода на пенсию или трансферты из налогов.',
    },
  },
  {
    id: 'core-long-term-care',
    term: { en: 'long-term care', ru: 'долговременный уход (long-term care)' },
    def: {
      en: 'Help with everyday tasks, such as washing, dressing or eating, for people who cannot manage alone over a long period, often because of old age, dementia or disability.',
      ru: 'Помощь в повседневных делах, таких как мытьё, одевание или приём пищи, для людей, которые долго не могут справляться самостоятельно, часто из-за старости, деменции или инвалидности.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: { kind: 'web', title: 'WHO Europe, Long-term care (1 December 2022)', url: 'https://www.who.int/europe/news-room/questions-and-answers/item/long-term-care', locator: 'What is long-term care?; Who needs long-term care?' },
    pitfall: {
      en: 'Long-term care supports daily functioning and can combine social and medical help at home, in the community, in residential settings or in hospital. It is not a synonym for acute hospital treatment alone.',
      ru: 'Долговременный уход поддерживает повседневную самостоятельность и может сочетать социальную и медицинскую помощь — дома, в сообществе, в учреждении или больнице. Это не синоним помощи только при острых состояниях в стационаре.',
    },
  },
  {
    id: 'core-sex-ratio',
    term: { en: 'sex ratio', ru: 'соотношение полов (sex ratio)' },
    def: {
      en: 'The number of males for every 100 females in a population or in a group, such as births. The sex ratio at birth is the number of boys born for every 100 girls.',
      ru: 'Число мужчин на каждые 100 женщин в населении или в группе, например среди родившихся. Соотношение полов при рождении — число мальчиков на 100 девочек.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: srcGuide,
    pitfall: {
      en: 'Do not confuse the sex ratio at birth with the sex ratio of the whole population, which also depends on mortality and migration.',
      ru: 'Не путайте соотношение полов при рождении с соотношением полов во всём населении: во всём населении оно зависит также от смертности и миграции.',
    },
  },
  {
    id: 'core-gender-equality-policy',
    term: { en: 'gender equality policy', ru: 'политика гендерного равенства (gender equality policy)' },
    def: {
      en: 'Laws and programmes that aim to give women and men equal rights, opportunities and treatment, for example in education, work and political life.',
      ru: 'Законы и программы, которые направлены на равные права, возможности и условия для женщин и мужчин, например в образовании, работе и политической жизни.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: srcGuide,
  },
  {
    id: 'core-anti-trafficking-policy',
    term: { en: 'anti-trafficking policy', ru: 'политика борьбы с торговлей людьми (anti-trafficking policy)' },
    def: {
      en: 'Laws and programmes that prevent trafficking in people, prosecute traffickers and protect and support the victims.',
      ru: 'Законы и программы, которые предотвращают торговлю людьми, преследуют торговцев и защищают пострадавших и помогают им.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: srcGuide,
    pitfall: {
      en: 'A count of detected victims depends on detection, reporting and coverage as well as trafficking. It is neither total prevalence nor, by itself, evidence that a policy works.',
      ru: 'Число выявленных пострадавших зависит от выявления, учёта и охвата данных, а также от самой торговли людьми. Это не полная распространённость явления и само по себе не доказательство эффективности политики.',
    },
  },
];
