import type { CaseStudy } from '../../../../src/contract/types';

// Syllabus core 2.1. Every figure is checked against the public source named in src (NOAA GML, IPCC AR6, NSIDC, Global Carbon Project, NASA, USGS).
// Figures marked "own check" were calculated from the downloaded file with a script; the rounding follows the file.
export const cases: CaseStudy[] = [
  {
    id: 'core-2-1-case-mauna-loa',
    subject: 'geo',
    title: { en: 'Mauna Loa Observatory: the direct CO₂ record since 1958', ru: 'Обсерватория Мауна-Лоа: прямые измерения CO₂ с 1958 года' },
    place: 'Mauna Loa, Hawaii, USA',
    scale: 'global',
    years: '1959–2025',
    lat: 19.5362,
    lng: -155.5763,
    facts: {
      en: 'Measurements began at Mauna Loa in March 1958, started by C. David Keeling of the Scripps Institution of Oceanography; NOAA has made its own measurements there since May 1974 (NOAA GML, Trends in atmospheric carbon dioxide). The annual mean CO₂ concentration was 316.91 ppm in 1960 and 427.35 ppm in 2025 (NOAA GML annual mean file, data to 2025): a rise of 110.44 ppm, or 34.8%. Between 2024 (424.61 ppm) and 2025, the annual mean rose by 2.74 ppm. Every annual mean from 1959 to 2025 is higher than the one before (own check of the same file).',
      ru: 'Измерения на Мауна-Лоа начались в марте 1958 года; их начал Ч. Д. Килинг (C. David Keeling) из Института океанографии Скриппса (Scripps Institution of Oceanography). NOAA ведёт собственные измерения там с мая 1974 года (NOAA GML, Trends in atmospheric carbon dioxide). Среднегодовая концентрация CO₂ составляла 316,91 ppm в 1960 году и 427,35 ppm в 2025 году (файл среднегодовых значений NOAA, данные до 2025 года): рост на 110,44 ppm, или на 34,8%. Между 2024 годом (424,61 ppm) и 2025 годом среднегодовое значение выросло на 2,74 ppm. Каждое среднегодовое значение с 1959 по 2025 год выше предыдущего (собственная проверка того же файла).',
    },
    usedFor: ['core-2-1-causes-climate-change'],
    src: [
      { kind: 'web', title: 'NOAA GML, Trends in atmospheric carbon dioxide (Mauna Loa)', url: 'https://gml.noaa.gov/ccgg/trends/' },
      { kind: 'web', title: 'NOAA GML, Mauna Loa annual mean CO2 (co2_annmean_mlo.txt, data to 2025)', url: 'https://gml.noaa.gov/webdata/ccgg/trends/co2/co2_annmean_mlo.txt' },
    ],
  },
  {
    id: 'core-2-1-case-arctic-sea-ice',
    subject: 'geo',
    title: {
      en: 'The Arctic Ocean: September sea-ice loss and the ice–albedo feedback',
      ru: 'Северный Ледовитый океан: сокращение летнего морского льда и обратная связь «лёд – альбедо»',
    },
    place: 'Arctic Ocean',
    scale: 'regional',
    years: '1979–2025',
    lat: 85.0,
    lng: 0.0,
    facts: {
      en: 'IPCC AR6 finds that Arctic sea-ice area in September fell by about 40% between 1979–1988 and 2010–2019, and by about 10% in March (WG1 Summary for Policymakers, A.1.5). The NSIDC Sea Ice Index, Version 4, gives a September average extent of 7.05 million km² in 1979 and 4.75 million km² in 2025, a fall of 32.6%. Averaged over the two periods, the NSIDC September values are 7.21 million km² for 1979–1988 and 4.65 million km² for 2010–2019, a fall of 35.5% (own calculation). The lowest September value in the NSIDC series is 3.57 million km², in 2012 (own check of the same file). Less ice means a lower albedo: the dark ocean absorbs more sunlight, which leads to more melting.',
      ru: 'IPCC AR6 установил, что площадь арктического морского льда в сентябре сократилась примерно на 40% между 1979–1988 и 2010–2019 годами, а в марте — примерно на 10% (WG1, Summary for Policymakers, A.1.5). По данным NSIDC Sea Ice Index, Version 4, среднее сентябрьское значение протяжённости льда составляло 7,05 млн км² в 1979 году и 4,75 млн км² в 2025 году, снижение на 32,6%. Средние значения за два периода по NSIDC: 7,21 млн км² для 1979–1988 годов и 4,65 млн км² для 2010–2019 годов, снижение на 35,5% (собственный расчёт). Самое низкое сентябрьское значение в ряду NSIDC — 3,57 млн км² в 2012 году (собственная проверка того же файла). Меньше льда — ниже альбедо: тёмная вода поглощает больше солнечного света, и это ведёт к дальнейшему таянию.',
    },
    usedFor: ['core-2-1-causes-climate-change'],
    src: [
      { kind: 'web', title: 'IPCC AR6 WG1, Summary for Policymakers (A.1.5)', url: 'https://www.ipcc.ch/report/ar6/wg1/chapter/summary-for-policymakers/' },
      { kind: 'web', title: 'NSIDC Sea Ice Index, Version 4 (G02135)', url: 'https://nsidc.org/data/g02135' },
      { kind: 'web', title: 'NSIDC monthly September Arctic sea-ice extent, Version 4 (N_09_extent_v4.0.csv)', url: 'https://noaadata.apps.nsidc.org/NOAA/G02135/north/monthly/data/N_09_extent_v4.0.csv' },
    ],
  },
  {
    id: 'core-2-1-case-china',
    subject: 'geo',
    title: { en: 'China: fossil CO₂ emissions and the share of the world total', ru: 'Китай: выбросы CO₂ от ископаемого топлива и доля в мировом итоге' },
    place: 'China',
    scale: 'national',
    years: '2000–2024',
    lat: 35.0,
    lng: 105.0,
    facts: {
      en: 'China’s fossil CO₂ emissions (territorial estimate) were 994 MtC in 2000 and 3,354 MtC in 2024 (Global Carbon Project, Global Carbon Budget 2025, national fossil emissions). The 2024 figure is 3.4 times the 2000 figure. China’s share of world fossil CO₂ emissions rose from 14.3% in 2000 (994 of 6,963 MtC) to 31.8% in 2024 (3,354 of 10,535 MtC). The GCP conversion factor is 1 MtC = 3.664 million tonnes of CO₂.',
      ru: 'Выбросы CO₂ от ископаемого топлива в Китае (территориальная оценка) составляли 994 МтC в 2000 году и 3 354 МтC в 2024 году (Global Carbon Project, Global Carbon Budget 2025, национальные выбросы от ископаемого топлива). Значение 2024 года в 3,4 раза больше значения 2000 года. Доля Китая в мировых выбросах CO₂ от ископаемого топлива выросла с 14,3% в 2000 году (994 из 6 963 МтC) до 31,8% в 2024 году (3 354 из 10 535 МтC). Коэффициент пересчёта GCP: 1 МтC = 3,664 миллиона тонн CO₂.',
    },
    usedFor: ['core-2-1-causes-climate-change'],
    src: [
      { kind: 'web', title: 'Global Carbon Project, Global Carbon Budget 2025: national fossil CO2 emissions (territorial)', url: 'https://openclimatedata.net/emissions/global-carbon-budget/2025/national-fossil/territorial-emissions' },
      { kind: 'web', title: 'Global Carbon Project, Global Carbon Budget 2025 national fossil data (CSV, MtC per year)', url: 'https://openclimatedata.github.io/global-carbon-budget/data/global-carbon-budget-2025-national-fossil-territorial-emissions.csv' },
      { kind: 'web', title: 'Global Carbon Project, news release on the Global Carbon Budget 2025 (13 November 2025)', url: 'https://cger.nies.go.jp/gcp/news/20251113.html' },
    ],
  },
];
