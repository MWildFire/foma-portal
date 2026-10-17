import type { Question } from '../../../../src/contract/types';

// Syllabus core 3.2. Original questions in IB Geography SL Paper 2 style. Figures are checked against the sources in the cases and the topic meta;
// the arithmetic in the markschemes was checked by a script (FAO annual values, FAO FRA 2025, World Bank indicators).
const topicIds = ['core-3-2-impacts-consumption'];

export const questions: Question[] = [
  {
    id: 'core-3-2-a2',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'The FAO’s Global Forest Resources Assessment 2025 reports that deforestation was 17.6 million hectares a year in 1990–2000 and 10.9 million hectares a year in 2015–2025 (FAO, Global Forest Resources Assessment 2025). Calculate the fall in the annual rate, in million hectares per year, and the percentage fall. Show your working.',
      ru: 'По данным Глобальной оценки лесных ресурсов 2025 (ФАО), обезлесение составляло 17,6 млн га в год в 1990–2000 годах и 10,9 млн га в год в 2015–2025 годах (ФАО, Global Forest Resources Assessment 2025). Рассчитайте снижение годовых темпов в млн га в год и процентное снижение. Покажите ход решения.',
    },
    markscheme: {
      en: '1 mark: fall = 17.6 − 10.9 = 6.7 million hectares per year; 1 mark: percentage fall = 6.7 ÷ 17.6 × 100 = 38.1% (accept 38%); 1 mark: working shown, with units (million hectares per year, %) and the answer to one decimal place.',
      ru: '1 балл: снижение = 17,6 − 10,9 = 6,7 млн га в год; 1 балл: процентное снижение = 6,7 ÷ 17,6 × 100 = 38,1% (засчитывается 38%); 1 балл: ход решения с единицами (млн га в год, %) и ответ с одним знаком после запятой.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'core-3-2-a3',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how a fall in water availability in a river basin can affect both food production and electricity supply.',
      ru: 'Объясните, как сокращение доступной воды в речном бассейне может повлиять и на производство продовольствия, и на снабжение электроэнергией.',
    },
    markscheme: {
      en: '1 mark each, maximum 4: (1) agriculture takes most freshwater (71.0% of world withdrawals in 2022, World Bank data based on FAO AQUASTAT), so less irrigation water lowers crop yields; (2) lower harvests raise food prices, which reduces access for poorer households; (3) hydropower depends on river flow, and it gave 14.5% of world electricity in 2023 (World Bank), so less water means less generation; (4) thermal power plants need cooling water, so low river flows can force them to cut output. Accept a named link, such as energy used to pump irrigation water.',
      ru: 'По 1 баллу за каждый пункт, максимум 4: (1) сельское хозяйство забирает большую часть пресной воды (71,0% мирового забора в 2022 году, данные Всемирного банка на основе FAO AQUASTAT), поэтому меньше воды для орошения снижает урожаи; (2) меньшие урожаи повышают цены на продовольствие и ограничивают доступ бедных домохозяйств; (3) гидроэнергетика зависит от речного стока, а в 2023 году она дала 14,5% мирового производства электроэнергии (Всемирный банк), поэтому меньше воды означает меньше выработки; (4) тепловым электростанциям нужна вода для охлаждения, поэтому низкий сток может вынудить их сократить выработку. Засчитывается названная связь, например энергия, нужная для перекачки воды на орошение.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'core-3-2-a4',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how a high dependence on imported natural gas can create resource insecurity for a country. Refer to the European Union, where Russian gas supplied 45% of EU gas imports in 2021 and 12% in 2025.',
      ru: 'Объясните, как высокая зависимость страны от импортного природного газа может создать ресурсную небезопасность (resource insecurity). Используйте пример Европейского союза: российский газ давал 45% газового импорта ЕС в 2021 году и 12% в 2025 году.',
    },
    markscheme: {
      en: '1 mark each, maximum 4: (1) a high share of imports leaves the country exposed to a supply shock, such as a cut in pipeline gas or a political decision by the exporter; (2) a sudden cut raises prices sharply, which hurts households and industry; (3) data: Russian LNG and pipeline gas supplied 45% of EU gas imports in 2021 and 12% in 2025 (European Commission, REPowerEU, 4 years on); (4) evaluation: diversification reduced the share, and so the insecurity, but it took several years, new supply routes and money.',
      ru: 'По 1 баллу за каждый пункт, максимум 4: (1) высокая доля импорта делает страну уязвимой перед шоком предложения, например сокращением поставок по трубопроводу или политическим решением экспортёра; (2) резкое сокращение поставок поднимает цены, что бьёт по домохозяйствам и промышленности; (3) данные: российский сжиженный газ и газ по трубопроводам давали 45% газового импорта ЕС в 2021 году и 12% в 2025 году (Европейская комиссия, REPowerEU, «4 года спустя»); (4) оценка: диверсификация сократила долю и, значит, небезопасность, но заняла несколько лет, потребовала новых маршрутов поставок и средств.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'core-3-2-a5',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 6,
    command: 'Examine',
    prompt: {
      en: 'Examine the impacts of oil extraction on the environment and people of one named community. Use a named example with figures.',
      ru: 'Рассмотрите последствия добычи нефти для окружающей среды и населения одного названного сообщества. Используйте названный пример с цифрами.',
    },
    markscheme: {
      en: 'Maximum 6 marks, 1 mark each: (1) a named example, Ogoniland in Rivers State, Nigeria; (2) water pollution: families in Nisisioken Ogale drank well water with benzene over 900 times the WHO guideline (UNEP, 2012); (3) scale: UNEP’s 2011 assessment tested water from 142 groundwater monitoring wells and soil from 780 boreholes; (4) health: benzene is a known carcinogen, so contaminated water is a health risk; (5) livelihoods: if the land and water used for farming and fishing are damaged, local incomes and food supplies are affected; (6) response and judgement: UNEP estimated that clean-up could take 25 to 30 years and proposed USD 1 billion for the first five years, so the harm will last unless the clean-up is funded and carried out.',
      ru: 'Максимум 6 баллов, по 1 баллу за каждый пункт: (1) назван пример: Огонилэнд, штат Риверс, Нигерия; (2) загрязнение воды: семьи в Нисисиокен-Огале пили колодезную воду с бензолом выше рекомендаций ВОЗ более чем в 900 раз (ЮНЕП, 2012); (3) масштаб: оценка ЮНЕП 2011 года проверила воду из 142 мониторинговых колодцев и почву из 780 скважин; (4) здоровье: бензол — известный канцероген, поэтому загрязнённая вода создаёт риск для здоровья; (5) средства к существованию: если повреждены земля и вода, которые используют для земледелия и рыболовства, снижаются доходы и продовольственное обеспечение местных жителей; (6) реакция и суждение: ЮНЕП оценила, что очистка может занять 25–30 лет, и предложила 1 млрд USD на первые пять лет, поэтому вред сохранится, пока очистка не будет профинансирована и проведена.',
    },
    origin: 'original',
    minutes: 8,
  },
{
  "id": "core-3-2-a6",
  "subject": "geo",
  "topicIds": [
    "core-3-2-impacts-consumption"
  ],
  "paper": "P2",
  "section": "A",
  "marks": 8,
  "command": "Explain",
  "prompt": {
    "en": "Use the linked India/SouthAfrica comparison and EEA2023 textile account supplied below. (a) Explain one contrasting water–food–energy risk pathway in each country and one condition affecting household/farm access.[4] (b) EEA reports46% by weight of EU used-textile exports went to Africa in2019. Explain why this is not a46% dumping rate,and distinguish reuse,recycling and disposal.[4]",
    "ru": "Используй приведённые ниже сравнение Индии/ЮАР и сведения ЕАОС2023 о текстиле. (a) Объясни по одной контрастной цепочке риска вода–пища–энергия для каждой страны и условие доступа семей/ферм.[4] (b) По ЕАОС46% массы экспортированного из ЕС подержанного текстиля направлялось в Африку в2019году. Объясни,почему это не46% выброшенного на свалку,и различи повторное использование,переработку и удаление.[4]"
  },
  "markscheme": {
    "en": "(a) Up to2 per country for a developed resource chain with access qualification:India groundwater pumping buffers rainfall shortfalls but needs power and sustainable abstraction;falling aquifers/credit or unreliable supply constrain access. SouthAfrica drought-exposed supplies and unequal irrigation/services affect crops;water-cooled generation can compete for limited water. Do not infer all regions are identical or attribute a single drought without separate evidence. (b)1:46% describes an export destination share,not final fate;1:reuse keeps an item serving its function;1:recycling processes material,possibly downcycling into rags;1:disposal is landfill/burning,whose actual share cannot be recovered from the export share alone. Accept other grounded causal chains. Sources:IPCC 2022 WGIII 17.3.3.2/WGII ch.4;IEA India 2021 andSouth Africa 2019;EEA2023 receiving-country/fate sections.",
    "ru": "(a) До2баллов на страну за развитую связь ресурсов с условием доступа:Индия — насосное орошение страхует от нехватки осадков,но требует энергии и устойчивого водозабора;падение уровня вод,кредит и ненадёжность снабжения ограничивают доступ. ЮАР — засуха и неравный доступ к орошению/услугам влияют на урожай;станции с водяным охлаждением могут конкурировать за воду. Нельзя считать все регионы одинаковыми или приписывать причину отдельной засухе без дополнительных доказательств. (b)1:46% — доля направления экспорта,не итоговая судьба;1:повторное использование сохраняет функцию вещи;1:переработка меняет материал,например в ветошь;1:удаление — захоронение/сжигание,его долю нельзя вычислить из направления экспорта. Допустимы другие обоснованные цепочки. Источники:IPCC 2022 WGIII 17.3.3.2/WGIIгл4;МЭА Индия 2021/ЮАР 2019;ЕАОС2023,получатели и дальнейшее обращение."
  },
  "origin": "original",
  "minutes": 10,
  "stimulus": {
    "en": "India:IPCC 2022 describes extensive groundwater irrigation with aquifer depletion;irrigation needs power and finance. SouthAfrica:the2015–2017 drought/CapeTown crisis illustrates variable supplies;access to irrigation affects adaptation. The IEA India 2021/South Africa 2019 outlooks describe coal-dependent grids;water-cooled plants compete for water,while wind/PV need little operational water. EEA2023,2019 data:46% of EU used-textile exports by weight went to Africa;final reuse/recycling/disposal is uncertain.",
    "ru": "Индия:IPCC 2022 описывает широкое насосное орошение и истощение вод;для полива нужны энергия и финансирование. ЮАР:засуха2015–2017 и кризис Кейптауна показывают изменчивость снабжения;доступ к орошению влияет на адаптацию. Обзоры МЭА Индия 2021/ЮАР 2019 описывают угольную зависимость;водяное охлаждение конкурирует за воду,ветер/PV требуют мало воды при работе. ЕАОС2023 по данным2019:46% массы экспорта подержанного текстиля ЕС шло в Африку;итоговое повторное использование/переработка/удаление неопределённы."
  }
},
];
