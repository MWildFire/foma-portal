import type { CaseStudy } from '../../../../src/contract/types';

// Core 2.2 cases. Every figure below was read from the source named in the text (checked in this session):
// Bangladesh from the World Bank press releases of 31 October 2022 and 13 September 2021 and the World Bank WDI API (2024);
// Tuvalu from the UNDP Tuvalu Coastal Adaptation Project document (2016), the Australian High Commission in Tuvalu (2026),
// the Devpolicy Centre (November 2023) and the World Bank WDI API (2024); Australia from the Royal Commission into
// National Natural Disaster Arrangements final report (2020) and the World Bank WDI API (2024).
const TOPIC = ['core-2-2-consequences-climate-change'];

export const cases: CaseStudy[] = [
  {
    id: 'core-2-2-case-bangladesh',
    subject: 'geo',
    title: { en: 'Bangladesh: coastal floods, salt water and migration', ru: 'Бангладеш: прибрежные наводнения, солёная вода и миграция' },
    place: 'Coastal Bangladesh (Khulna area)',
    scale: 'national',
    years: '2022–2050',
    lat: 22.83,
    lng: 89.55,
    facts: {
      en: 'World Bank (2022), Bangladesh Country Climate and Development Report, press release of 31 October 2022: tropical cyclones cost Bangladesh about USD 1 billion a year on average; by 2050 a third of agricultural GDP could be lost and 13 million people could become internal climate migrants; in a severe flood GDP could fall by as much as 9%. World Bank Groundswell report (13 September 2021): South Asia, which includes Bangladesh, could see about 40 million internal climate migrants by 2050. World Bank WDI (2024): Bangladesh had 173.6 million people on 130,170 km² of land. Salt water moves up the coastal rivers in the dry season and reduces fresh water for drinking and farming; no national salinity area is quoted here because no verified figure was found for this case.',
      ru: 'Всемирный банк (2022), Country Climate and Development Report для Бангладеш, пресс-релиз от 31 октября 2022 года: тропические циклоны обходятся Бангладеш в среднем примерно в 1 млрд долларов США в год; к 2050 году может быть потеряна треть ВВП сельского хозяйства, а 13 млн человек могут стать внутренними климатическими мигрантами; при сильном наводнении ВВП может сократиться на величину до 9%. Доклад Groundswell Всемирного банка (13 сентября 2021 года): в Южной Азии, куда входит Бангладеш, к 2050 году может быть около 40 млн внутренних климатических мигрантов. Всемирный банк, WDI (2024): в Бангладеш жило 173,6 млн человек на территории 130 170 км². В сухой сезон солёная вода поднимается по прибрежным рекам и сокращает запасы пресной воды для питья и земледелия; площадь засоления здесь не приводится, так как для этого случая не найдено проверенной цифры.',
    },
    usedFor: TOPIC,
    src: [
      {
        kind: 'web',
        title: 'World Bank, press release "Urgent climate action crucial for Bangladesh to sustain strong growth" (31 October 2022)',
        url: 'https://www.worldbank.org/en/news/press-release/2022/10/31/urgent-climate-action-crucial-for-bangladesh-to-sustain-strong-growth',
      },
      {
        kind: 'web',
        title: 'World Bank, press release "Climate Change Could Force 216 Million People to Migrate Within Their Own Countries by 2050" (13 September 2021)',
        url: 'https://www.worldbank.org/en/news/press-release/2021/09/13/climate-change-could-force-216-million-people-to-migrate-within-their-own-countries-by-2050',
      },
      {
        kind: 'web',
        title: 'World Bank, World Development Indicators, population (SP.POP.TOTL) and land area (AG.LND.TOTL.K2) for Bangladesh, 2024',
        url: 'https://api.worldbank.org/v2/country/BGD/indicator/SP.POP.TOTL?format=json',
      },
    ],
  },
  {
    id: 'core-2-2-case-tuvalu',
    subject: 'geo',
    title: { en: 'Tuvalu: a low atoll state and sea-level rise', ru: 'Тувалу: низменное атолловое государство и подъём уровня моря' },
    place: 'Funafuti atoll, Tuvalu',
    scale: 'national',
    years: '2016–2026',
    lat: -8.517,
    lng: 179.2,
    facts: {
      en: 'UNDP (2016), Tuvalu Coastal Adaptation Project, project document (section II): the total land area is 26 km², the average elevation is 1.83 m, and Funafuti atoll, where the capital is, is home to about half of the population. The project is financed by a Green Climate Fund grant of USD 36.0 million within a total cost of USD 38.9 million (para. 122). World Bank WDI (2024): Tuvalu had 9,646 people and a land area of 26 km². Australian High Commission in Tuvalu (2026): under the Falepili Union, the Falepili Mobility Pathway offers up to 280 visa places in the 2026–27 round, the second program year. The Falepili Union was announced in November 2023 (Devpolicy Centre, November 2023).',
      ru: 'UNDP (2016), документ проекта Tuvalu Coastal Adaptation Project (раздел II): общая площадь суши 26 км², средняя высота 1,83 м; около половины населения живёт на атолле Фунафути, где находится столица. Проект финансируется грантом Зелёного климатического фонда на 36,0 млн долларов США при общей стоимости 38,9 млн долларов США (пункт 122). Всемирный банк, WDI (2024): в Тувалу жило 9 646 человек, площадь суши составляла 26 км². Австралийская высокая комиссия на Тувалу (2026): в рамках соглашения Falepili Union программа Falepili Mobility Pathway предлагает до 280 виз в раунде 2026–2027 годов, втором году программы. Соглашение было объявлено в ноябре 2023 года (Devpolicy Centre, ноябрь 2023).',
    },
    usedFor: TOPIC,
    src: [
      {
        kind: 'web',
        title: 'UNDP, Tuvalu Coastal Adaptation Project, GCF project document (2016), section II and para. 122',
        url: 'https://www.undp.org/sites/g/files/zskgke326/files/migration/pacific/5c6f1a9f1b85558d2815083ad2d275c6322c84a574571dff3803a196e298c92f.pdf',
      },
      {
        kind: 'web',
        title: 'Australian High Commission in Tuvalu, "The Falepili Mobility Pathway visa ballot reopens for Tuvaluans" (2026)',
        url: 'https://tuvalu.highcommission.gov.au/fnfu/2604.html',
      },
      {
        kind: 'web',
        title: 'Devpolicy Centre, "Australia-Tuvalu deal brings a visa-free Pacific closer" (November 2023)',
        url: 'https://devpolicy.org/australia-tuvalu-deal-brings-a-visa-free-pacific-closer-20231114/',
      },
      {
        kind: 'web',
        title: 'World Bank, World Development Indicators, population (SP.POP.TOTL) and land area (AG.LND.TOTL.K2) for Tuvalu, 2024',
        url: 'https://api.worldbank.org/v2/country/TUV/indicator/SP.POP.TOTL?format=json',
      },
    ],
  },
  {
    id: 'core-2-2-case-australia',
    subject: 'geo',
    title: { en: 'Australia 2019–2020: heat, drought and bushfires', ru: 'Австралия, 2019–2020: жара, засуха и лесные пожары' },
    place: 'Eastern Australia (map point: Canberra)',
    scale: 'national',
    years: '2019–2020',
    lat: -35.29306,
    lng: 149.12694,
    facts: {
      en: 'Royal Commission into National Natural Disaster Arrangements, final report (published 28 October 2020), opening overview and section 4.23: over 24 million hectares were burnt; the national burnt-area data ranged from 24.3 million hectares (the sum of state and territory data, about 243,000 km²) to 33.8 million hectares (the Australian Government dataset). The fires killed 33 people (the Commission notes that smoke may have caused many more deaths), destroyed over 3,000 homes and killed or displaced nearly three billion animals; national financial impacts were estimated at more than AUD 10 billion. The Commission states that the fires started in Australia’s hottest and driest year on record. World Bank WDI (2024): Australia’s land area is 7,688,287 km², so 24.3 million hectares is about 3.2% of it.',
      ru: 'Королевская комиссия по национальным природным катастрофам, итоговый доклад (опубликован 28 октября 2020 года), вводная часть и раздел 4.23: сгорело более 24 млн гектаров; национальные данные о площади пожаров варьировались от 24,3 млн гектаров (сумма данных штатов и территорий, около 243 000 км²) до 33,8 млн гектаров (набор данных правительства Австралии). Пожары погубили 33 человека (Комиссия отмечает, что дым мог стать причиной гораздо большего числа смертей), уничтожили более 3 000 домов и убили или вытеснили почти три миллиарда животных; оценка национального финансового ущерба превысила 10 млрд австралийских долларов (AUD). Комиссия указывает, что пожары начались в самый жаркий и самый засушливый год за всю историю наблюдений в Австралии. Всемирный банк, WDI (2024): площадь суши Австралии составляет 7 688 287 км², поэтому 24,3 млн гектаров составляют примерно 3,2% этой площади.',
    },
    usedFor: TOPIC,
    src: [
      {
        kind: 'web',
        title: 'Royal Commission into National Natural Disaster Arrangements, Report (published 28 October 2020), opening overview and section 4.23',
        url: 'https://oia.pmc.gov.au/sites/default/files/posts/2022/11/Royal%20Commission%20into%20National%20Natural%20Disaster%20Arrangements%20-%20Report%20%20%5Baccessible%5D.pdf',
      },
      {
        kind: 'web',
        title: 'World Bank, World Development Indicators, land area (AG.LND.TOTL.K2) for Australia, 2024',
        url: 'https://api.worldbank.org/v2/country/AUS/indicator/AG.LND.TOTL.K2?format=json',
      },
    ],
  },
];
