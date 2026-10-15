import type { Question } from '../../../../src/contract/types';

const infographicUrl = new URL('../topics/assets/core-2-2-infographic.svg?no-inline', import.meta.url).href;

// Core 2.2 (consequences of global climate change). Original questions in IB style. Figures come from the IPCC AR6
// WG1 Summary for Policymakers (sections A.1.7 and A.4.3), the World Bank (2021 and 2022), the World Bank WDI (2024),
// the WHO fact sheet on climate change and health (2023), the UNDP Tuvalu Coastal Adaptation Project document (2016)
// and the Royal Commission into National Natural Disaster Arrangements (2020). The calculations are checked by script.
const TOPIC = ['core-2-2-consequences-climate-change'];

export const questions: Question[] = [
  {
    id: 'core-2-2-a1',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'The World Bank (2022) estimates that 13 million people in Bangladesh could become internal climate migrants by 2050. The population of Bangladesh was 173,562,364 in 2024 (World Bank, World Development Indicators). Calculate 13 million as a percentage of the 2024 population. Give your answer to one decimal place.',
      ru: 'По оценке Всемирного банка (2022), к 2050 году 13 миллионов человек в Бангладеш могут стать внутренними климатическими мигрантами. Население Бангладеш составляло 173 562 364 человека в 2024 году (Всемирный банк, World Development Indicators). Рассчитайте 13 миллионов в процентах от населения 2024 года. Ответ дайте с одним знаком после запятой.',
    },
    markscheme: {
      en: '1 mark: method shown, for example (13,000,000 ÷ 173,562,364) × 100; 1 mark: 7.5% (7.49% rounds to 7.5%). Accept 7.49% if it is given to two decimal places. Because 13 million is a rounded projection, using the population rounded to 173.6 million also gives 7.5%.',
      ru: '1 балл: показан метод, например (13 000 000 ÷ 173 562 364) × 100; 1 балл: 7,5% (7,49% округляется до 7,5%). Принимается 7,49%, если дано с двумя знаками после запятой. Поскольку 13 миллионов — округлённый прогноз, при численности населения, округлённой до 173,6 млн, тоже получается 7,5%.',
    },
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'core-2-2-a2',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how drought can reduce food security for farming households in a low-income country.',
      ru: 'Объясните, как засуха может снизить продовольственную безопасность фермерских домохозяйств в стране с низким уровнем дохода.',
    },
    markscheme: {
      en: '1 mark: a named effect of drought on crops or livestock, for example lower yields or dead animals; 1 mark: development of that effect, for example less grain or milk is available to the household and to the market; 1 mark: a named effect on income, for example lower sales from the farm or the loss of savings; 1 mark: development, for example households cannot afford enough food, so they eat less or lower-quality food. Each point must be developed; credit named examples.',
      ru: '1 балл: назван эффект засухи для урожая или скота, например снижение урожайности или гибель животных; 1 балл: развитие этого эффекта, например в домохозяйстве и на рынке становится меньше зерна или молока; 1 балл: назван эффект для доходов, например падение продаж с фермы или потеря сбережений; 1 балл: развитие, например домохозяйства не могут купить достаточно еды, поэтому едят меньше или более бедную пищу. Каждый пункт нужно раскрыть; засчитываются названные примеры.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'core-2-2-a4',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why the impacts of the same flood can differ between two groups of people living in one country.',
      ru: 'Объясните, почему последствия одного и того же наводнения могут различаться у двух групп людей, живущих в одной стране.',
    },
    markscheme: {
      en: '1 mark: a named group, for example low-income households, older people, women or migrants; 1 mark: development, for example they live in cheaper houses on low ground or in informal settlements with a higher flood risk; 1 mark: a second, different reason, for example they have less money or insurance to repair their homes or to move; 1 mark: development, for example they receive fewer warnings or have less access to health care, so recovery takes longer. Each point must be developed; credit named examples.',
      ru: '1 балл: названа группа, например домохозяйства с низким доходом, пожилые люди, женщины или мигранты; 1 балл: развитие, например они живут в дешёвых домах на низких участках или в неформальных поселениях с большим риском наводнения; 1 балл: вторая, другая причина, например у них меньше денег или страховки для ремонта жилья или переезда; 1 балл: развитие, например они получают меньше предупреждений или хуже доступны медицинская помощь, поэтому восстановление занимает больше времени. Каждый пункт нужно раскрыть; засчитываются названные примеры.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'core-2-2-a5',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'A',
    marks: 6,
    command: 'Examine',
    prompt: {
      en: 'Examine why the impacts of climate change are uneven between countries. Refer to named examples.',
      ru: 'Рассмотрите, почему последствия изменения климата распределяются неравномерно между странами. Приведите названные примеры.',
    },
    markscheme: {
      en: 'Maximum 6 marks, one per developed point. 1 mark: exposure differs with geography, for example low-lying deltas and small islands such as Tuvalu (average elevation 1.83 m, GCF 2015) are exposed to sea-level rise; 1 mark: low-income countries and small island developing states face more severe health impacts although they contribute minimally to global emissions (WHO, 2023); 1 mark: in vulnerable regions the death rate from extreme weather in the last decade was 15 times higher than in less vulnerable regions (WHO, 2023, citing IPCC AR6); 1 mark: losses are a larger share of the economy in least developed countries and small island states (WMO, 2023), for example a severe flood could cut Bangladesh GDP by as much as 9% (World Bank, 2022); 1 mark: adaptive capacity differs, so richer countries can fund sea walls, insurance and early warning, while the Tuvalu Coastal Adaptation Project depends on a USD 36.0 million Green Climate Fund grant (UNDP, 2016); 1 mark: a supported judgement on how far the impacts are uneven.',
      ru: 'Максимум 6 баллов, по одному за каждый раскрытый пункт. 1 балл: подверженность различается из-за географии, например низменные дельты и малые острова, такие как Тувалу (средняя высота 1,83 м, GCF, 2015), подвержены подъёму уровня моря; 1 балл: малые островные развивающиеся государства и страны с низким доходом сталкиваются с более тяжёлыми последствиями для здоровья, хотя почти не влияют на глобальные выбросы (ВОЗ, 2023); 1 балл: в уязвимых регионах смертность от экстремальной погоды за последнее десятилетие была в 15 раз выше, чем в менее уязвимых (ВОЗ, 2023, со ссылкой на IPCC AR6); 1 балл: потери составляют большую долю экономики в наименее развитых странах и малых островных государствах (ВМО, 2023), например сильное наводнение может сократить ВВП Бангладеш на величину до 9% (Всемирный банк, 2022); 1 балл: адаптационный потенциал различается: богатые страны могут финансировать дамбы, страхование и раннее оповещение, а проект в Тувалу опирается на грант Зелёного климатического фонда на 36,0 млн долларов США (UNDP, 2016); 1 балл: обоснованное суждение о том, насколько неравномерны последствия.',
    },
    origin: 'original',
    minutes: 9,
  },
  {
    id: 'core-2-2-b1',
    subject: 'geo',
    topicIds: TOPIC,
    paper: 'P2',
    section: 'B',
    marks: 10,
    command: 'Using the infographic',
    stimulus: {
      en: 'Figure 1 (the infographic) shows the average rate of global mean sea-level rise, in millimetres per year, in three periods between 1901 and 2018, and the total rise over 1901–2018. Source: IPCC (2021), Climate Change 2021: The Physical Science Basis, Working Group I, Summary for Policymakers, section A.1.7.' + ' [Open infographic](' + infographicUrl + ')',
      ru: 'На рисунке 1 (инфографика) показана средняя скорость роста среднего глобального уровня моря в миллиметрах в год за три периода между 1901 и 2018 годами, а также общий подъём за 1901–2018 годы. Источник: IPCC (2021), Climate Change 2021: The Physical Science Basis, Working Group I, Summary for Policymakers, раздел A.1.7.' + ' [Открыть инфографику](' + infographicUrl + ')',
    },
    prompt: {
      en: '(a) Using Figure 1, describe the change in the average rate of global mean sea-level rise between 1901 and 2018. [2]\n(b) Calculate the percentage increase in the average rate of sea-level rise from 1901–1971 to 2006–2018, using the central values. Give your answer to one decimal place. [3]\n(c) Evaluate the extent to which faster sea-level rise threatens the water security of people living in low-lying river deltas. [5]',
      ru: '(a) По рисунку 1 опишите изменение средней скорости роста среднего глобального уровня моря между 1901 и 2018 годами. [2]\n(b) Рассчитайте процентное увеличение средней скорости подъёма уровня моря с 1901–1971 до 2006–2018 годов, используя центральные значения. Ответ дайте с одним знаком после запятой. [3]\n(c) Оцените, в какой мере более быстрый подъём уровня моря угрожает водной безопасности людей, живущих в низменных речных дельтах. [5]',
    },
    markscheme: {
      en: '(a) 1 mark: the rate rises in each period, from 1.3 mm per year (1901–1971) to 1.9 mm per year (1971–2006) and 3.7 mm per year (2006–2018); 1 mark: a supported quantified point, for example the total rise over 1901–2018 was 0.20 m, and the rate in 2006–2018 was almost three times the rate in 1901–1971 (2.8 times). (b) 1 mark: difference 3.7 − 1.3 = 2.4 mm per year; 1 mark: (2.4 ÷ 1.3) × 100 = 184.6%; 1 mark: the answer is given to one decimal place with its unit, or a valid comment that the rate nearly tripled. Accept 185% if it is rounded. (c) Up to 5 marks, one per developed point: 1 mark: a cause linked to the figure, for example the faster rise (3.7 mm per year in 2006–2018) raises sea levels in deltas; 1 mark: salt water moves inland through rivers and aquifers, especially in the dry season and during storm surges, which is salinity intrusion; 1 mark: a named example of a low-lying delta, for example the Ganges–Brahmaputra delta in Bangladesh, linked to the process; 1 mark: a consequence for people, for example less fresh water for drinking and irrigation, health problems and loss of farmland; 1 mark: a supported judgement, for example water security is more seriously threatened where dry-season river flow is low and where adaptation (dykes, rainwater storage, desalination) is limited, so the threat is serious but uneven.',
      ru: '(a) 1 балл: скорость растёт в каждом периоде: с 1,3 мм в год (1901–1971) до 1,9 мм в год (1971–2006) и 3,7 мм в год (2006–2018); 1 балл: подкреплённое количественное утверждение, например общий подъём за 1901–2018 годы составил 0,20 м, а скорость в 2006–2018 годах почти в три раза выше, чем в 1901–1971 годах (в 2,8 раза). (b) 1 балл: разность 3,7 − 1,3 = 2,4 мм в год; 1 балл: (2,4 ÷ 1,3) × 100 = 184,6%; 1 балл: ответ дан с одним знаком после запятой и с единицами измерения либо верно сказано, что скорость почти утроилась. Принимается 185%, если округлено. (c) До 5 баллов, по одному за каждый раскрытый пункт: 1 балл: причина, связанная с рисунком, например более быстрый подъём (3,7 мм в год в 2006–2018 годах) поднимает уровень моря в дельтах; 1 балл: солёная вода продвигается вглубь суши по рекам и водоносным горизонтам, особенно в сухой сезон и во время штормовых нагонов, — это проникновение солёной воды (salinity intrusion); 1 балл: назван пример низменной дельты, например дельта Ганга и Брахмапутры в Бангладеш, и связан с процессом; 1 балл: следствие для людей, например меньше пресной воды для питья и орошения, проблемы со здоровьем и потеря пахотных земель; 1 балл: обоснованное суждение, например водная безопасность сильнее находится под угрозой там, где сток рек низок в сухой сезон и где ограничены меры адаптации (дамбы, хранение дождевой воды, опреснение), поэтому угроза серьёзна, но распределена неравномерно.',
    },
    origin: 'original',
    minutes: 15,
  },
];
