import type { Question } from '../../../../src/contract/types';

// Syllabus core 3.1. Original questions in IB Geography SL Paper 2 style. Figures checked against the sources in the cases and the topic meta.
const topicIds = ['core-3-1-consumption-trends'];

export const questions: Question[] = [
  {
    id: 'core-3-1-a1',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'Outline two drivers of the growth in global consumption of resources since 1970.',
      ru: 'Кратко опишите два фактора роста мирового потребления ресурсов с 1970 года.',
    },
    markscheme: {
      en: '1 mark each, maximum 2: population growth, for example the world had nearly 8.2 billion people in mid-2024 and is projected to peak at about 10.3 billion in the mid-2080s (UN DESA, World Population Prospects 2024); rising affluence, for example energy use per person rose by 19.0% between 2000 and 2024 (World Bank); technological change that creates new demand, for example lithium-ion batteries are the leading global use of cobalt (USGS, 2026). Accept any two drivers with a valid example and a link to resource use.',
      ru: 'По 1 баллу за каждый фактор, максимум 2: рост населения, например в середине 2024 года в мире было почти 8,2 млрд человек, а по прогнозу пик составит около 10,3 млрд в середине 2080-х годов (ООН, World Population Prospects 2024); рост благосостояния, например потребление энергии на человека выросло на 19,0% в 2000–2024 годах (Всемирный банк); технологические изменения, которые создают новый спрос, например литий-ионные батареи — ведущее мировое применение кобальта (USGS, 2026). Засчитываются любые два фактора с верным примером и связью с использованием ресурсов.',
    },
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'core-3-1-a2',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'The UN International Resource Panel reports that global material extraction rose from 30 billion tonnes in 1970 to an estimated 106.6 billion tonnes in 2024. Calculate the percentage increase in global material extraction over this period. Show your working.',
      ru: 'Международная группа по ресурсам ООН (IRP) сообщает, что мировая добыча материалов выросла с 30 млрд тонн в 1970 году до оценочных 106,6 млрд тонн в 2024 году. Рассчитайте процентный рост мировой добычи материалов за этот период. Покажите ход решения.',
    },
    markscheme: {
      en: '1 mark: increase = 106.6 − 30 = 76.6 billion tonnes; 1 mark: percentage increase = 76.6 ÷ 30 × 100 = 255.3% (accept 255%); 1 mark: the 2024 value is 3.55 times the 1970 value (106.6 ÷ 30), so extraction has more than tripled (IRP, Global Resources Outlook 2024). Accept any correct working with units.',
      ru: '1 балл: прирост = 106,6 − 30 = 76,6 млрд тонн; 1 балл: процентный прирост = 76,6 ÷ 30 × 100 = 255,3% (засчитывается 255%); 1 балл: значение 2024 года в 3,55 раза больше значения 1970 года (106,6 ÷ 30), то есть добыча более чем утроилась (IRP, Global Resources Outlook 2024). Засчитывается любой верный ход решения с единицами.',
    },
    answer: '255.3%',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'core-3-1-a3',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'Global Footprint Network reports that Earth Overshoot Day 2026 fell on 30 July. Calculate the day of the year for 30 July 2026, counting 1 January as day 1 (2026 is not a leap year). Then calculate the number of Earths of demand that this date implies, using the ratio of 365 days to that day number, and state what the result means for the planet’s biocapacity.',
      ru: 'Global Footprint Network сообщает, что День перерасхода ресурсов Земли (Earth Overshoot Day) в 2026 году пришёлся на 30 июля. Рассчитайте номер этого дня в году, считая 1 января первым днём (2026 год не високосный). Затем рассчитайте, сколько «Земель» потребления подразумевает эта дата, используя отношение 365 дней к номеру дня, и объясните, что полученный результат означает для биоёмкости планеты.',
    },
    markscheme: {
      en: '1 mark: day 211 (31 + 28 + 31 + 30 + 31 + 30 + 30); 1 mark: 365 ÷ 211 = 1.73 Earths, so the footprint is 1.73 times the biocapacity; 1 mark: meaning: demand in 2026 equals 1.73 years of the planet’s regeneration, so the footprint is larger than the biocapacity (ecological overshoot); 1 mark: limitation: GFN has complete data only to 2023, and its 2024 and 2025 figures are partly estimated, so the date is an estimate (Global Footprint Network, June 2026). Accept 211 ÷ 365 = 0.58 as a route if it is explained.',
      ru: '1 балл: 211-й день (31 + 28 + 31 + 30 + 31 + 30 + 30); 1 балл: 365 ÷ 211 = 1,73 «Земли», то есть экологический след в 1,73 раза больше биоёмкости; 1 балл: смысл: спрос в 2026 году равен 1,73 года восстановления планеты, поэтому экологический след больше биоёмкости (экологический перерасход); 1 балл: ограничение: GFN располагает полными данными только до 2023 года, а данные за 2024 и 2025 годы частично оценочные, поэтому дата является оценкой (Global Footprint Network, июнь 2026). Засчитывается 211 ÷ 365 = 0,58 как способ решения, если он объяснён.',
    },
    answer: '1.73',
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'core-3-1-a4',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain the difference between a resource and a reserve. Use cobalt in the Democratic Republic of the Congo (DRC) as an example.',
      ru: 'Объясните разницу между ресурсом и запасом. Используйте в качестве примера кобальт в Демократической Республике Конго (ДРК).',
    },
    markscheme: {
      en: '1 mark: a resource is a concentration of a natural material that may be extracted now or in the future, whether or not it is yet proven; 1 mark: a reserve is the part of a known resource that can be extracted economically and technically at present; 1 mark: reserves change with prices, technology and law, so a reserve can grow without any new discovery; 1 mark: example with data: USGS puts DRC cobalt reserves at 6,000,000 tonnes against mine output of 230,000 tonnes in 2025, which would last about 26 years at that rate if output stayed the same (6,000,000 ÷ 230,000 = 26.1) (USGS, 2026).',
      ru: '1 балл: ресурс — скопление природного материала, который может быть извлечён сейчас или в будущем, подтверждён он или нет; 1 балл: запас — часть известного ресурса, которую можно экономически выгодно и технически извлечь в настоящее время; 1 балл: запасы меняются с ценами, технологиями и законами, поэтому запас может вырасти без новых открытий; 1 балл: пример с данными: USGS оценивает запасы кобальта в ДРК в 6 000 000 тонн при добыче 230 000 тонн в 2025 году; при сохранении такой добычи этого хватит примерно на 26 лет (6 000 000 ÷ 230 000 = 26,1) (USGS, 2026).',
    },
    answer: '26.1',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'core-3-1-a5',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'Explain how the cobalt export quotas that the DRC introduced in October 2025 could affect the resource security of battery manufacturers that import cobalt.',
      ru: 'Объясните, как экспортные квоты на кобальт, которые ДРК ввела в октябре 2025 года, могут повлиять на ресурсную безопасность производителей батарей, импортирующих кобальт.',
    },
    markscheme: {
      en: '1 mark: the quotas cap how much cobalt can leave the country (18,125 tonnes for the rest of 2025 and up to 96,600 tonnes a year in 2026 and 2027, USGS 2026), so supply to importers is limited; 1 mark: limited and uncertain supply raises prices and encourages importers to hold stocks, and USGS says that uncertainty after the 2025 ban likely contributed to a sharp rise in estimated US imports and industry stocks; 1 mark: dependence on one producer: the DRC mined an estimated 73% of world cobalt in 2025 (USGS, 2026), so decisions by one government can disrupt supply for importers.',
      ru: '1 балл: квоты ограничивают объём кобальта, который может покинуть страну (18 125 тонн на остаток 2025 года и до 96 600 тонн в год в 2026 и 2027 годах, USGS, 2026), поэтому поставки импортёрам ограничены; 1 балл: ограниченные и непредсказуемые поставки повышают цены и подталкивают импортёров создавать запасы, а USGS считает, что неопределённость после запрета 2025 года, вероятно, способствовала резкому росту оценок импорта и запасов в США; 1 балл: зависимость от одной страны: ДРК добыла около 73% мирового кобальта в 2025 году (USGS, 2026), поэтому решения одного правительства могут нарушить поставки импортёрам.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'core-3-1-b1',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'B',
    marks: 10,
    command: 'Using the infographic',
    stimulus: {
      en: 'Figure 1 (infographic) shows energy use per person, in kilograms of oil equivalent, for high-income, middle-income and low-income country groups in 2000 and 2024. Source: World Bank, World Development Indicators, indicator EG.USE.PCAP.KG.OE (data to 2024).',
      ru: 'Рисунок 1 (инфографика) показывает потребление энергии на человека в килограммах нефтяного эквивалента для групп стран с высоким, средним и низким доходом в 2000 и 2024 годах. Источник: Всемирный банк, World Development Indicators, индикатор EG.USE.PCAP.KG.OE (данные до 2024 года).',
    },
    prompt: {
      en: '(a) Using the infographic, describe the change in energy use per person for each of the three income groups between 2000 and 2024. [3]\n\n(b) Calculate the percentage change in energy use per person for middle-income countries between 2000 and 2024. Also calculate how many times greater energy use per person was in high-income countries than in low-income countries in 2024. Show your working. [3]\n\n(c) Evaluate the claim that rising affluence is the main reason why energy use per person has grown in middle-income countries. [4]',
      ru: '(a) Используя инфографику, опишите изменение потребления энергии на человека для каждой из трёх групп стран по доходу между 2000 и 2024 годами. [3]\n\n(b) Рассчитайте процентное изменение потребления энергии на человека в странах со средним доходом между 2000 и 2024 годами. Также рассчитайте, во сколько раз потребление энергии на человека в странах с высоким доходом было выше, чем в странах с низким доходом, в 2024 году. Покажите ход решения. [3]\n\n(c) Оцените утверждение, что рост благосостояния — главная причина роста потребления энергии на человека в странах со средним доходом. [4]',
    },
    markscheme: {
      en: '(a) 1 mark each, maximum 3: high income fell from 4,873 to 4,454 kg of oil equivalent per person (a fall of 8.6%); middle income rose from 759 to 1,438 kg (a rise of 89.5%, close to a doubling); low income fell from 398 to 362 kg (a fall of 9.0%). (b) 1 mark: change = 1,438 − 759 = 679 kg; 1 mark: 679 ÷ 759 × 100 = 89.5% (accept 89% to 90%); 1 mark: 4,454 ÷ 362 = 12.3 times (accept 12). (c) 1 mark each, maximum 4: evidence for the claim: middle-income use per person rose by 679 kg between 2000 and 2024, consistent with rising incomes, industry and transport; evidence against or limitation: high-income use fell while affluence rose, so affluence does not always raise use (efficiency, services and the shift of production); another driver: resource-intensive production has moved to middle-income countries (IRP, Global Resources Outlook 2024); limitation: World Bank income groups are reviewed each year, so group membership can change; judgement linked to the evidence: affluence is a strong driver for middle-income countries, but not the only one.',
      ru: '(a) По 1 баллу за каждую группу, максимум 3: группа с высоким доходом снизилась с 4 873 до 4 454 кг нефтяного эквивалента на человека (снижение на 8,6%); группа со средним доходом выросла с 759 до 1 438 кг (рост на 89,5%, почти вдвое); группа с низким доходом снизилась с 398 до 362 кг (снижение на 9,0%). (b) 1 балл: изменение = 1 438 − 759 = 679 кг; 1 балл: 679 ÷ 759 × 100 = 89,5% (засчитываются 89–90%); 1 балл: 4 454 ÷ 362 = 12,3 раза (засчитывается 12). (c) По 1 баллу за каждый пункт, максимум 4: довод в пользу утверждения: потребление на человека в странах со средним доходом выросло на 679 кг за 2000–2024 годы, что согласуется с ростом доходов, промышленности и транспорта; довод против или ограничение: потребление в странах с высоким доходом снизилось, пока благосостояние росло, поэтому благосостояние не всегда повышает потребление (эффективность, сфера услуг, перенос производства); другой фактор: ресурсоёмкое производство переместилось в страны со средним доходом (IRP, Global Resources Outlook 2024); ограничение данных: группы стран по доходу Всемирного банка пересматриваются каждый год, поэтому состав групп может меняться; суждение, связанное с данными: благосостояние — сильный фактор для стран со средним доходом, но не единственный.',
    },
    origin: 'original',
    minutes: 12,
  },
];
