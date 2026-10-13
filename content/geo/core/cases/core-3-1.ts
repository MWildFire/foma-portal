import type { CaseStudy } from '../../../../src/contract/types';

// Syllabus core 3.1. Every figure is taken from the source named in the text and in src; years are given in the text.
export const cases: CaseStudy[] = [
  {
    id: 'core-3-1-case-drc-cobalt',
    subject: 'geo',
    title: { en: 'Cobalt for batteries: the Democratic Republic of the Congo', ru: 'Кобальт для батарей: Демократическая Республика Конго' },
    place: 'Democratic Republic of the Congo',
    scale: 'national',
    years: '2024–2025',
    lat: -4.04,
    lng: 21.75,
    facts: {
      en: 'Cobalt mine output in the Democratic Republic of the Congo (DRC) rose from 226,000 tonnes in 2024 to an estimated 230,000 tonnes in 2025, about 73% of the world total in 2025 (USGS, Mineral Commodity Summaries 2026). Lithium-ion batteries are the leading global use of cobalt (USGS, 2026). In February 2025 the DRC temporarily banned cobalt exports; in October 2025 the ban was replaced by export quotas of 18,125 tonnes for the rest of 2025 and up to 96,600 tonnes a year in 2026 and 2027, including 9,600 tonnes for national strategic reserves (USGS, 2026). USGS puts DRC cobalt reserves at 6,000,000 tonnes (USGS, 2026).',
      ru: 'Добыча кобальта в Демократической Республике Конго (ДРК) выросла с 226 000 тонн в 2024 году до оценочных 230 000 тонн в 2025 году, то есть около 73% мирового объёма в 2025 году (USGS, Mineral Commodity Summaries 2026). Литий-ионные батареи — ведущее мировое применение кобальта (USGS, 2026). В феврале 2025 года ДРК временно запретила экспорт кобальта; в октябре 2025 года запрет заменили экспортными квотами: 18 125 тонн на остаток 2025 года и до 96 600 тонн в год в 2026 и 2027 годах, из них 9 600 тонн для национальных стратегических резервов (USGS, 2026). USGS оценивает запасы кобальта в ДРК в 6 000 000 тонн (USGS, 2026).',
    },
    usedFor: ['core-3-1-consumption-trends'],
    src: [
      { kind: 'web', title: 'USGS, Mineral Commodity Summaries 2026: Cobalt (February 2026)', url: 'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-cobalt.pdf' },
    ],
  },
  {
    id: 'core-3-1-case-brazil-soy',
    subject: 'geo',
    title: { en: 'Soy and the Amazon: Brazil', ru: 'Соя и Амазония: Бразилия' },
    place: 'Brazil',
    scale: 'national',
    years: '2000–2025',
    lat: -14.24,
    lng: -51.93,
    facts: {
      en: 'Brazil produced 144.5 million tonnes of soybeans in 2024, down from 152.1 million tonnes in 2023 (FAO data, via Our World in Data). INPE’s PRODES estimate for the Brazilian Legal Amazon is 5,796 km² of clearing from August 2024 to July 2025, 11.08% below the consolidated 6,518 km² for 2024 (INPE technical note, 15 October 2025). In Mato Grosso, a state where soy is grown, clearing rose by 25.06%, from 1,257 km² in 2024 to 1,572 km² in 2025 (INPE, 2025). Between 2000 and 2019, soybean area in the Brazilian Amazon rose more than tenfold, from 0.4 to 4.6 million hectares, and most soybean expansion in South America took place on pasture that had been cleared from natural vegetation for cattle (UMD GLAD, Song et al., 2021).',
      ru: 'Бразилия собрала 144,5 млн тонн сои в 2024 году против 152,1 млн тонн в 2023 году (данные FAO через Our World in Data). Оценка INPE по системе PRODES для Бразильской Легальной Амазонии — вырубка 5 796 км² с августа 2024 по июль 2025 года, на 11,08% меньше консолидированных 6 518 км² за 2024 год (техническая записка INPE от 15 октября 2025 года). В штате Мату-Гросу, где выращивают сою, вырубка выросла на 25,06%: с 1 257 км² в 2024 году до 1 572 км² в 2025 году (INPE, 2025). В 2000–2019 годах площадь под соей в бразильской Амазонии выросла более чем в десять раз: с 0,4 до 4,6 млн гектаров, а большая часть расширения посевов сои в Южной Америке пришлась на пастбища, созданные вырубкой естественной растительности для скота (UMD GLAD, Song et al., 2021).',
    },
    usedFor: ['core-3-1-consumption-trends'],
    src: [
      { kind: 'web', title: 'INPE, Estimativa de desmatamento na Amazônia Legal para 2025 (technical note, 15 October 2025)', url: 'https://www.gov.br/inpe/pt-br/assuntos/ultimas-noticias/20251015Nota_tcnica_EstimativaPRODES_2025.pdf' },
      { kind: 'web', title: 'Our World in Data, soybean production (FAO data)', url: 'https://ourworldindata.org/grapher/soybean-production' },
      { kind: 'web', title: 'UMD GLAD, Commodity Crop Mapping and Monitoring in South America (Song et al., 2021)', url: 'https://glad.geog.umd.edu/node/673' },
    ],
  },
  {
    id: 'core-3-1-case-indonesia-nickel',
    subject: 'geo',
    title: { en: 'Nickel and the processing rule: Indonesia', ru: 'Никель и правило переработки: Индонезия' },
    place: 'Indonesia',
    scale: 'national',
    years: '2019–2025',
    lat: -0.79,
    lng: 113.92,
    facts: {
      en: 'Indonesia’s nickel mine output rose from 2,310,000 tonnes in 2024 to an estimated 2,600,000 tonnes in 2025, an increase of about 13% (USGS, Mineral Commodity Summaries 2026). World nickel mine output was an estimated 3,900,000 tonnes in 2025 (USGS, 2026), so Indonesia’s share was about two-thirds (2,600,000 ÷ 3,900,000 = 66.7%, calculated from the rounded USGS world total). USGS gives Indonesia’s nickel reserves as 62,000,000 tonnes, against more than 140,000,000 tonnes for the world (USGS, 2026). In September 2019 Indonesia announced that its ban on raw nickel ore exports would start on 1 January 2020, so that the ore would be smelted and refined at home (Al Jazeera, 2 September 2019).',
      ru: 'Добыча никелевой руды в Индонезии выросла с 2 310 000 тонн в 2024 году до оценочных 2 600 000 тонн в 2025 году, то есть примерно на 13% (USGS, Mineral Commodity Summaries 2026). Мировая добыча никеля в 2025 году составила оценочно 3 900 000 тонн (USGS, 2026), поэтому доля Индонезии была около двух третей (2 600 000 ÷ 3 900 000 = 66,7%, расчёт по округлённому мировому итогу USGS). По данным USGS, запасы никеля в Индонезии составляют 62 000 000 тонн, а в мире — более 140 000 000 тонн (USGS, 2026). В сентябре 2019 года Индонезия объявила, что запрет на экспорт необработанной никелевой руды начнёт действовать с 1 января 2020 года, чтобы руду плавили и перерабатывали внутри страны (Al Jazeera, 2 сентября 2019 года).',
    },
    usedFor: ['core-3-1-consumption-trends'],
    src: [
      { kind: 'web', title: 'USGS, Mineral Commodity Summaries 2026: Nickel (February 2026)', url: 'https://pubs.usgs.gov/periodicals/mcs2026/mcs2026-nickel.pdf' },
      { kind: 'web', title: 'Al Jazeera, World’s biggest nickel ore maker bans exports from January 2020 (2 September 2019)', url: 'https://www.aljazeera.com/economy/2019/9/2/worlds-biggest-nickel-ore-maker-bans-exports-from-january-2020' },
    ],
  },
];
