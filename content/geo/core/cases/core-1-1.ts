import type { CaseStudy, SourceRef } from '../../../../src/contract/types';

// Topic core-1.1. Every figure names its year and source in the text. Coordinates are the approximate country centres
// (Wikipedia country infobox). Figures checked on 13 Oct 2026 against the files listed in `src`.
const sources: SourceRef[] = [
  {
    kind: 'web',
    title: 'UN DESA Population Division, World Population Prospects 2024, Demographic Indicators, Medium variant (CSV)',
    url: 'https://population.un.org/wpp/assets/Excel%20Files/1_Indicator%20(Standard)/CSV_FILES/WPP2024_Demographic_Indicators_Medium.csv.gz',
  },
  {
    kind: 'web',
    title: 'UNDP, Human Development Report 2025, HDI and composite indices time series (CSV)',
    url: 'https://hdr.undp.org/sites/default/files/2025_HDR/HDR25_Composite_indices_complete_time_series.csv',
  },
  {
    kind: 'web',
    title: 'World Bank, GNI per capita, Atlas method (current US$), indicator NY.GNP.PCAP.CD',
    url: 'https://data.worldbank.org/indicator/NY.GNP.PCAP.CD',
  },
];

export const cases: CaseStudy[] = [
  {
    id: 'core-1-1-case-niger',
    subject: 'geo',
    title: {
      en: 'Niger: high birth rates and rapid natural increase (stage 2)',
      ru: 'Нигер: высокая рождаемость и быстрый естественный прирост (стадия 2)',
    },
    place: 'Niger',
    scale: 'national',
    years: '1950–2023',
    lat: 16.0,
    lng: 8.0,
    facts: {
      en: 'In 2023 (UN WPP 2024) the crude birth rate was 41.9 and the crude death rate 8.9 per 1000, so natural increase was 33.0 per 1000, about 3.3% a year. The total fertility rate was 6.1 children per woman in 2023, against 7.6 in 1950 (UN WPP 2024), and the median age was 15.2 years (UN WPP 2024). The HDI was 0.419 in 2023 (UNDP, Human Development Report 2025), and GNI per capita was USD 750 in 2025 (World Bank, Atlas method).',
      ru: 'В 2023 году (UN WPP 2024) общий коэффициент рождаемости составил 41,9, а смертности — 8,9 на 1000 человек, поэтому естественный прирост равнялся 33,0 на 1000, то есть около 3,3% в год. Суммарный коэффициент рождаемости был 6,1 ребёнка на женщину в 2023 году против 7,6 в 1950 году (UN WPP 2024), медианный возраст — 15,2 года (UN WPP 2024). ИРЧП был 0,419 в 2023 году (UNDP, Human Development Report 2025), а ВНД на душу населения — 750 USD в 2025 году (Всемирный банк, метод Атлас).',
    },
    usedFor: ['core-1-1-population-development'],
    src: sources,
  },
  {
    id: 'core-1-1-case-japan',
    subject: 'geo',
    title: {
      en: 'Japan: natural decrease and an ageing population (stage 5)',
      ru: 'Япония: естественная убыль и стареющее население (стадия 5)',
    },
    place: 'Japan',
    scale: 'national',
    years: '1950–2023',
    lat: 36.0,
    lng: 138.0,
    facts: {
      en: 'In 2023 (UN WPP 2024) the crude birth rate was 6.0 and the crude death rate 12.3 per 1000, so natural change was negative, a natural decrease of about 6 per 1000 a year. The total fertility rate was 1.2 children per woman in 2023, against 3.6 in 1950 (UN WPP 2024), and the median age was 49.0 years (UN WPP 2024). The HDI was 0.925 in 2023 (UNDP, Human Development Report 2025), and GNI per capita was USD 38,340 in 2025 (World Bank, Atlas method).',
      ru: 'В 2023 году (UN WPP 2024) общий коэффициент рождаемости составил 6,0, а смертности — 12,3 на 1000 человек, поэтому естественный прирост был отрицательным: естественная убыль около 6 на 1000 в год. Суммарный коэффициент рождаемости был 1,2 ребёнка на женщину в 2023 году против 3,6 в 1950 году (UN WPP 2024), медианный возраст — 49,0 года (UN WPP 2024). ИРЧП был 0,925 в 2023 году (UNDP, Human Development Report 2025), а ВНД на душу населения — 38 340 USD в 2025 году (Всемирный банк, метод Атлас).',
    },
    usedFor: ['core-1-1-population-development'],
    src: sources,
  },
  {
    id: 'core-1-1-case-bangladesh',
    subject: 'geo',
    title: {
      en: 'Bangladesh: a rapid fall in fertility (stage 3)',
      ru: 'Бангладеш: быстрое снижение рождаемости (стадия 3)',
    },
    place: 'Bangladesh',
    scale: 'national',
    years: '1975–2023',
    lat: 24.0,
    lng: 90.0,
    facts: {
      en: 'The total fertility rate fell from 6.7 children per woman in 1975 to 4.5 in 1990 and 2.2 in 2023 (UN WPP 2024). Over the same period the crude birth rate fell from 47.2 to 20.4 per 1000 and the crude death rate from 16.6 to 5.0 per 1000 (UN WPP 2024). Life expectancy at birth rose from 50.6 to 74.7 years (UN WPP 2024). The HDI was 0.685 in 2023 (UNDP, Human Development Report 2025), and GNI per capita was USD 2,840 in 2025 (World Bank, Atlas method). Family planning programmes, wider contraceptive use and rising schooling for girls are the usual explanations for the fall.',
      ru: 'Суммарный коэффициент рождаемости снизился с 6,7 ребёнка на женщину в 1975 году до 4,5 в 1990 году и 2,2 в 2023 году (UN WPP 2024). За тот же период общий коэффициент рождаемости снизился с 47,2 до 20,4 на 1000 человек, а смертности — с 16,6 до 5,0 на 1000 (UN WPP 2024). Ожидаемая продолжительность жизни при рождении выросла с 50,6 до 74,7 года (UN WPP 2024). ИРЧП был 0,685 в 2023 году (UNDP, Human Development Report 2025), а ВНД на душу населения — 2 840 USD в 2025 году (Всемирный банк, метод Атлас). Обычно это снижение объясняют программами планирования семьи, более широким использованием контрацепции и ростом образования девочек.',
    },
    usedFor: ['core-1-1-population-development'],
    src: sources,
  },
];
