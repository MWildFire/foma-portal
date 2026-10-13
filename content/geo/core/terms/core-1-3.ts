import type { Term } from '../../../../src/contract/types';

// Core 1.3 (challenges and opportunities). Definitions are written in our own words from the key elements of the
// Geography guide (2017) core 1.3; no textbook locator yet (PACK.md for geo was not available).
const SRC = { kind: 'own' as const, title: 'Geography guide (2017), core 1.3' };
const DEPENDENCY_SIM = 'geo.core-dependency-ratio' as const;

export const terms: Term[] = [
  {
    id: 'core-ageing-population',
    term: { en: 'ageing population', ru: 'старение населения (ageing population)' },
    def: {
      en: 'A population in which the share of people aged 65 and over is rising, usually because birth rates have fallen and life expectancy has risen.',
      ru: 'Население, в котором доля людей в возрасте 65 лет и старше растёт, обычно потому что рождаемость снизилась, а продолжительность жизни увеличилась.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: SRC,
    pitfall: {
      en: 'Ageing describes the age structure. A population can age while its total size stays the same or even grows.',
      ru: 'Старение — это изменение возрастной структуры. Население может стареть, даже если его общая численность остаётся прежней или растёт.',
    },
  },
  {
    id: 'core-working-age-population',
    term: { en: 'working-age population', ru: 'население трудоспособного возраста (working-age population)' },
    def: {
      en: 'People aged 15 to 64, the group that is usually counted as able to work and to support dependants.',
      ru: 'Люди в возрасте от 15 до 64 лет — группа, которую обычно считают способной работать и содержать иждивенцев.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: SRC,
    pitfall: {
      en: 'The working-age group is not the same as the labour force, because some people aged 15 to 64 are students, carers or not seeking work.',
      ru: 'Население трудоспособного возраста — не то же самое, что рабочая сила: часть людей в возрасте 15–64 лет учится, ухаживает за детьми или не ищет работу.',
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
    src: SRC,
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
    src: SRC,
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
    src: SRC,
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
      en: 'A large share of young people, usually aged 15 to 24, in a population; it results from an earlier period of high birth rates and makes this age group bigger than the groups above and below it.',
      ru: 'Большая доля молодых людей, обычно в возрасте 15–24 лет, в населении; она возникает после прежнего периода высокой рождаемости и делает эту возрастную группу больше соседних групп.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: SRC,
    pitfall: {
      en: 'A youth bulge describes the age structure; it is not the same as a high birth rate today, and it can exist while birth rates are falling.',
      ru: 'Волна молодёжи описывает возрастную структуру; это не то же самое, что высокая рождаемость сегодня, и она может сохраняться при падающей рождаемости.',
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
    src: SRC,
    pitfall: {
      en: 'The dividend is temporary: it fades when the working-age share stops rising and the older share keeps growing.',
      ru: 'Дивиденд временный: он ослабевает, когда доля трудоспособного населения перестаёт расти, а доля пожилых продолжает расти.',
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
    src: SRC,
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
    src: SRC,
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
    src: SRC,
    pitfall: {
      en: 'Fertility was already falling before China’s one-child limit began in 1980, so the policy is only one of several causes of the fall.',
      ru: 'Рождаемость в Китае уже снижалась до введения ограничения «одного ребёнка» в 1980 году, поэтому политика — лишь одна из причин снижения.',
    },
  },
  {
    id: 'core-brain-gain',
    term: { en: 'brain gain', ru: 'приток мозгов (brain gain)' },
    def: {
      en: 'A benefit to a country when skilled people return, or when emigrants keep links that bring back skills, investment or knowledge.',
      ru: 'Выгода для страны, когда квалифицированные люди возвращаются или когда эмигранты сохраняют связи, которые приносят навыки, инвестиции и знания.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: SRC,
    pitfall: {
      en: 'Brain gain is not automatic: many skilled migrants never return, so the gain depends on policies and on links with the home country.',
      ru: 'Приток мозгов не возникает автоматически: многие квалифицированные мигранты так и не возвращаются, поэтому выгода зависит от политики и связей с родиной.',
    },
  },
  {
    id: 'core-diaspora',
    term: { en: 'diaspora', ru: 'диаспора (diaspora)' },
    def: {
      en: 'People who live outside their country of origin but keep social, economic or cultural links with it.',
      ru: 'Люди, которые живут за пределами страны происхождения, но сохраняют с ней социальные, экономические или культурные связи.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: SRC,
  },
  {
    id: 'core-silver-economy',
    term: { en: 'silver economy', ru: 'серебряная экономика (silver economy)' },
    def: {
      en: 'Economic activity that serves older people, such as health and care services, housing, leisure, financial products and technology for older people.',
      ru: 'Экономическая деятельность, которая обслуживает пожилых людей: медицинские и социальные услуги, жильё, досуг, финансовые продукты и технологии для пожилых людей.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: SRC,
    pitfall: {
      en: 'The silver economy is an opportunity for firms and workers, but older people with low incomes may not be able to spend.',
      ru: 'Серебряная экономика — возможность для фирм и работников, но пожилые люди с низкими доходами могут не иметь средств на покупки.',
    },
  },
  {
    id: 'core-pay-as-you-go-pension',
    term: { en: 'pay-as-you-go pension', ru: 'распределительная пенсионная система (pay-as-you-go pension)' },
    def: {
      en: 'A pension system in which the contributions of today’s workers pay the pensions of today’s retirees, rather than each person saving for their own pension.',
      ru: 'Пенсионная система, в которой взносы нынешних работников платят пенсии нынешним пенсионерам, а не каждый человек копит на собственную пенсию.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: SRC,
    pitfall: {
      en: 'Ageing lowers the number of contributors for each pensioner, so the system comes under pressure unless contributions rise, benefits fall or the retirement age rises.',
      ru: 'Старение снижает число плательщиков взносов на одного пенсионера, поэтому система испытывает давление, если взносы не растут, выплаты не снижаются или пенсионный возраст не повышается.',
    },
  },
  {
    id: 'core-long-term-care',
    term: { en: 'long-term care', ru: 'долгосрочный уход (long-term care)' },
    def: {
      en: 'Help with everyday tasks, such as washing, dressing or eating, for people who cannot manage alone over a long period, often because of old age, dementia or disability.',
      ru: 'Помощь в повседневных делах, таких как мытьё, одевание или приём пищи, для людей, которые долго не могут справляться самостоятельно, часто из-за старости, деменции или инвалидности.',
    },
    syllabus: 'core-1.3',
    papers: ['P2'],
    src: SRC,
    pitfall: {
      en: 'Long-term care is different from hospital treatment; it is usually given at home or in a care home.',
      ru: 'Долгосрочный уход отличается от больничного лечения; обычно его получают дома или в доме престарелых.',
    },
  },
];
