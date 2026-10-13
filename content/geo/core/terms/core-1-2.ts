import type { Term } from '../../../../src/contract/types';

// Core 1.2 (changing populations and places). Definitions are written in our own words from the key elements
// of the subtopic, in line with the Geography guide (2017). The ThinkIB eBook has no page numbers, so the locator
// names the eBook sections that cover the subtopic.
const src = { kind: 'thinkib' as const, title: 'ThinkIB Geography eBook', locator: 'Paper 2 › Unit 1 › 2a–2e' };

export const terms: Term[] = [
  {
    id: 'core-urbanisation',
    term: { en: 'urbanisation', ru: 'урбанизация (urbanisation)' },
    def: {
      en: 'The increase, over time, in the share of a country’s population that lives in urban areas.',
      ru: 'Рост со временем доли населения страны, которая живёт в городских районах.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Urbanisation is a share, so it can rise even when the total population falls.',
      ru: 'Урбанизация — это доля, поэтому она может расти, даже если общая численность населения падает.',
    },
  },
  {
    id: 'core-urban-growth',
    term: { en: 'urban growth', ru: 'рост городского населения (urban growth)' },
    def: {
      en: 'The absolute increase in the number of people living in towns and cities, from natural increase and migration.',
      ru: 'Абсолютное увеличение числа людей, живущих в городах, за счёт естественного прироста и миграции.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Urban growth is a number of people; urbanisation is a share of the population.',
      ru: 'Городской рост — это число людей, а урбанизация — доля населения.',
    },
  },
  {
    id: 'core-megacity',
    term: { en: 'megacity', ru: 'мегаполис (megacity)' },
    def: {
      en: 'An urban area with 10 million or more inhabitants.',
      ru: 'Городская агломерация с населением 10 миллионов человек и более.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A megacity is defined by population size, not by wealth or by being a capital.',
      ru: 'Мегаполис определяется численностью населения, а не богатством и не статусом столицы.',
    },
  },
  {
    id: 'core-informal-settlement',
    term: { en: 'informal settlement', ru: 'неформальное поселение (informal settlement)' },
    def: {
      en: 'Housing built on land that residents do not legally own or rent, often without secure tenure and with poor access to water, sanitation and electricity.',
      ru: 'Жильё, построенное на земле, которую жители юридически не владеют и не арендуют, часто без надёжных прав на землю и с плохим доступом к воде, канализации и электричеству.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-rural-urban-migration',
    term: { en: 'rural–urban migration', ru: 'миграция из сельской местности в город (rural–urban migration)' },
    def: {
      en: 'The movement of people from the countryside to towns and cities, usually to find work, services or better living conditions.',
      ru: 'Переселение людей из сельской местности в города, обычно в поисках работы, услуг или лучших условий жизни.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-push-factor',
    term: { en: 'push factor', ru: 'фактор выталкивания (push factor)' },
    def: {
      en: 'A condition in the place of origin that makes people want to leave, such as low incomes, shortage of land, drought or conflict.',
      ru: 'Условие в месте выезда, которое заставляет людей хотеть уехать, например низкие доходы, нехватка земли, засуха или конфликт.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A push factor belongs to the place of origin; do not describe it as an attraction of the destination.',
      ru: 'Фактор выталкивания относится к месту выезда; не описывайте его как притяжение места назначения.',
    },
    sim: 'geo.core-push-pull',
  },
  {
    id: 'core-pull-factor',
    term: { en: 'pull factor', ru: 'фактор притяжения (pull factor)' },
    def: {
      en: 'A condition in the destination that attracts migrants, such as jobs, higher wages, schools, hospitals or housing.',
      ru: 'Условие в месте назначения, которое привлекает мигрантов, например работа, более высокие зарплаты, школы, больницы или жильё.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
    sim: 'geo.core-push-pull',
  },
  {
    id: 'core-intervening-obstacle',
    term: { en: 'intervening obstacle', ru: 'промежуточный барьер (intervening obstacle)' },
    def: {
      en: 'A barrier between origin and destination that makes migration harder or less likely, such as distance, the cost of travel, border controls, language or legal restrictions.',
      ru: 'Барьер между местом выезда и местом назначения, который затрудняет миграцию или делает её менее вероятной, например расстояние, стоимость проезда, пограничный контроль, язык или правовые ограничения.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-counter-urbanisation',
    term: { en: 'counter-urbanisation', ru: 'контрурбанизация (counter-urbanisation)' },
    def: {
      en: 'The movement of people from large cities to smaller towns and rural areas, often within commuting distance of the city.',
      ru: 'Переселение людей из крупных городов в небольшие города и сельскую местность, часто в пределах доступности для ежедневных поездок в город.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Counter-urbanisation is a movement out of cities; it is not the same as rural depopulation.',
      ru: 'Контрурбанизация — это переезд из городов; она не то же самое, что сельское обезлюдение.',
    },
  },
  {
    id: 'core-rural-depopulation',
    term: { en: 'rural depopulation', ru: 'сельское обезлюдение (rural depopulation)' },
    def: {
      en: 'A fall in the population of a rural area caused by out-migration and sometimes by natural decrease, when deaths exceed births.',
      ru: 'Снижение численности населения сельской местности из-за миграции за её пределы, а иногда из-за естественной убыли, когда смертей больше, чем рождений.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-international-migration',
    term: { en: 'international migration', ru: 'международная миграция (international migration)' },
    def: {
      en: 'The movement of people across national borders to live in another country.',
      ru: 'Переезд людей через государственные границы для жизни в другой стране.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-voluntary-migration',
    term: { en: 'voluntary migration', ru: 'добровольная миграция (voluntary migration)' },
    def: {
      en: 'Migration that the migrant chooses, usually for work, study, family reasons or a better lifestyle.',
      ru: 'Миграция, которую мигрант выбирает сам, обычно ради работы, учёбы, семьи или лучшего качества жизни.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-forced-migration',
    term: { en: 'forced migration', ru: 'вынужденная миграция (forced migration)' },
    def: {
      en: 'Migration in which people are compelled to leave, for example by armed conflict, persecution, natural disasters or environmental change; it includes refugees.',
      ru: 'Миграция, при которой людей вынуждают уехать, например из-за вооружённого конфликта, преследований, стихийных бедствий или изменения окружающей среды; включает беженцев.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-remittances',
    term: { en: 'remittances', ru: 'денежные переводы мигрантов (remittances)' },
    def: {
      en: 'Money that migrants send back to family or communities in their country of origin.',
      ru: 'Деньги, которые мигранты отправляют семьям или общинам в стране происхождения.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-brain-drain',
    term: { en: 'brain drain', ru: 'утечка мозгов (brain drain)' },
    def: {
      en: 'The emigration of highly skilled and educated people from a country, which reduces its supply of skilled labour.',
      ru: 'Эмиграция высококвалифицированных и образованных людей из страны, которая сокращает запас квалифицированной рабочей силы.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src,
  },
];
