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
      en: 'Urbanisation is an increase in the urban share; it can occur even when total population falls.',
      ru: 'Урбанизация — рост городской доли населения; она возможна и при сокращении общей численности населения.',
    },
  },
  {
    id: 'core-urban-growth',
    term: { en: 'urban growth', ru: 'рост городского населения (urban growth)' },
    def: {
      en: 'An increase in the number of urban residents. Natural change, net migration and reclassification or boundary changes can affect that number.',
      ru: 'Увеличение числа городских жителей. На него влияют естественное движение, чистая миграция, изменение границ и переклассификация поселений.',
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
      en: 'A residential area with insecure tenure over land or housing, often with gaps in formal services and housing that may not meet planning or building rules. It can include informal rental housing, not only squatting.',
      ru: 'Жилой район с незащищёнными правами на землю или жильё, часто с недостатком официальных услуг и застройкой, которая может не соответствовать градостроительным нормам. Он может включать неформальную аренду, а не только самозахват.',
    },
    syllabus: 'core-1.2',
    papers: ['P2'],
    src: { kind: 'web', title: 'UN-Habitat, SDG indicator 11.1.1 metadata (2021-12-20)', url: 'https://unstats.un.org/sdgs/metadata/files/Metadata-11-01-01.pdf', locator: 'pp. 5–6, Informal Settlements: insecure tenure, informal rental, services and planning' },
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
      en: 'Population movement from large urban centres towards smaller settlements and rural areas. Distinguish this wider deconcentration from simply moving within a city to its expanding suburbs.',
      ru: 'Переселение из крупных городских центров в меньшие поселения и сельскую местность. Такое рассредоточение нужно отличать от простого переезда внутри растущей городской зоны в её пригороды.',
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
      en: 'A decrease in the number of rural residents. It can result from net out-migration, natural decrease or both; changes in settlement classification can also alter the recorded rural total.',
      ru: 'Снижение численности сельских жителей. Причинами могут быть миграционный отток, естественная убыль или их сочетание; изменение статуса поселений тоже может менять учитываемую численность сельского населения.',
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
