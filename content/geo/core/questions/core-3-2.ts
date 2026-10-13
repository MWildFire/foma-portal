import type { Question } from '../../../../src/contract/types';

// Syllabus core 3.2. Original questions in IB Geography SL Paper 2 style. Figures are checked against the sources in the cases and the topic meta;
// the arithmetic in the markschemes was checked by a script (FAO annual values, FAO FRA 2025, World Bank indicators).
const topicIds = ['core-3-2-impacts-consumption'];

export const questions: Question[] = [
  {
    id: 'core-3-2-a1',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'Outline two environmental impacts of groundwater depletion.',
      ru: 'Кратко опишите два экологических последствия истощения подземных вод (groundwater depletion).',
    },
    markscheme: {
      en: '1 mark each, maximum 2: any two environmental impacts with a brief outline, for example: (1) land subsidence, as the aquifer compacts when water is removed and the ground surface sinks; (2) saltwater intrusion into coastal aquifers when the pressure from fresh groundwater falls; (3) falling water tables reduce river base flow and wetlands, which harms the habitats that depend on them.',
      ru: 'По 1 баллу за каждое последствие, максимум 2: любые два экологических последствия с кратким пояснением, например: (1) оседание поверхности, когда водоносный горизонт уплотняется при откачке воды и земля проседает; (2) проникновение солёной воды в прибрежные водоносные горизонты, когда давление пресных подземных вод падает; (3) падение уровня грунтовых вод уменьшает подпитку рек и водно-болотных угодий, что вредит зависящим от них местам обитания.',
    },
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'core-3-2-a2',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'The FAO reports that deforestation was 17.6 million hectares a year in 1990–2000 and 10.9 million hectares a year in 2015–2025 (FAO, Global Forest Resources Assessment 2025). Calculate the fall in the annual rate, in million hectares per year, and the percentage fall. Show your working.',
      ru: 'По данным ФАО, обезлесение составляло 17,6 млн га в год в 1990–2000 годах и 10,9 млн га в год в 2015–2025 годах (ФАО, Global Forest Resources Assessment 2025). Рассчитайте снижение годовых темпов в млн га в год и процентное снижение. Покажите ход решения.',
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
    id: 'core-3-2-b1',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'B',
    marks: 10,
    command: 'Using the infographic',
    stimulus: {
      en: 'Figure 1 (infographic) shows the annual average FAO Food Price Index for 2019 to 2025, in index points (2014–2016 = 100). Source: FAO, Food Price Indices data (annual values), data release of 2 October 2026.',
      ru: 'Рисунок 1 (инфографика) показывает среднегодовой индекс цен на продовольствие ФАО (FAO Food Price Index) за 2019–2025 годы в пунктах (2014–2016 = 100). Источник: ФАО, данные индексов цен на продовольствие (годовые значения), выпуск от 2 октября 2026 года.',
    },
    prompt: {
      en: '(a) Using the infographic, describe the trend in the FAO Food Price Index from 2019 to 2025. [3]\n\n(b) Calculate the increase in the index, in index points and as a percentage, between 2020 and 2022. Show your working. [3]\n\n(c) Evaluate the impact of the rise in food prices between 2020 and 2022 on people in low-income households. [4]',
      ru: '(a) Используя инфографику, опишите динамику индекса цен на продовольствие ФАО с 2019 по 2025 год. [3]\n\n(b) Рассчитайте рост индекса в пунктах и в процентах между 2020 и 2022 годами. Покажите ход решения. [3]\n\n(c) Оцените влияние роста цен на продовольствие в 2020–2022 годах на людей из домохозяйств с низким доходом. [4]',
    },
    markscheme: {
      en: '(a) 1 mark each, maximum 3: (1) the index rose each year, from 94.9 in 2019 to 98.1 in 2020, 125.7 in 2021 and 144.5 in 2022; (2) it then fell to 124.5 in 2023 and 122.0 in 2024, a fall of 20.0 points in 2023; (3) it rose again to 127.2 in 2025, still 32.3 points above 2019. (b) 1 mark: difference = 144.5 − 98.1 = 46.4 index points; 1 mark: percentage increase = 46.4 ÷ 98.1 × 100 = 47.3%; 1 mark: working shown, units stated (index points and %) and the years 2020 and 2022 named. (c) 1 mark each, maximum 4: (1) a higher index raises the cost of staple foods, and low-income households spend a larger share of their income on food; (2) the data: the annual average was 47.3% higher in 2022 than in 2020, a rise over two years that cuts real incomes; (3) consequences: households reduce the quantity or quality of their food, borrow, or move to cheaper and less nutritious diets; (4) evaluation: the index is a global average of traded foods, local prices depend on currency, subsidies and local supply, and the index fell in 2023 and 2024, so the effect was temporary for some households and lasting for others; a clear judgement is needed.',
      ru: '(a) По 1 баллу за каждый пункт, максимум 3: (1) индекс рос каждый год: с 94,9 в 2019 году до 98,1 в 2020 году, 125,7 в 2021 году и 144,5 в 2022 году; (2) затем он снизился до 124,5 в 2023 году и 122,0 в 2024 году, падение на 20,0 пункта в 2023 году; (3) в 2025 году он снова вырос до 127,2, что всё ещё на 32,3 пункта выше уровня 2019 года. (b) 1 балл: разность = 144,5 − 98,1 = 46,4 пункта индекса; 1 балл: процентный рост = 46,4 ÷ 98,1 × 100 = 47,3%; 1 балл: ход решения, указаны единицы (пункты индекса и %) и годы 2020 и 2022. (c) По 1 баллу за каждый пункт, максимум 4: (1) более высокий индекс повышает стоимость основных продуктов питания, а домохозяйства с низким доходом тратят на еду большую долю дохода; (2) данные: среднегодовое значение в 2022 году было на 47,3% выше, чем в 2020 году, — рост за два года, который снижает реальные доходы; (3) последствия: домохозяйства сокращают количество или качество питания, берут в долг или переходят к более дешёвой и менее полезной еде; (4) оценка: индекс — глобальное среднее по торгуемым продуктам, местные цены зависят от валюты, субсидий и местного предложения, а индекс снизился в 2023 и 2024 годах, поэтому эффект был временным для одних домохозяйств и долгим для других; нужно чёткое суждение.',
    },
    origin: 'original',
    minutes: 12,
  },
];
