import type { CaseStudy } from '../../../../src/contract/types';

// Option A, A.1 cases. Status (R01, 14.10.2026, S3): the Amazon seasonality method was rechecked against Nature Communications 2020.
// Mekong (Nature Sustainability 2025) was checked for the r2 review. UAE (Scientific Reports 2026), Rhine (KNMI, Dutch-language source) and the MRC land area were not rechecked in R01.
export const cases: CaseStudy[] = [
  {
    id: 'a-rhine-basin',
    subject: 'geo',
    title: { en: 'Rhine: a river fed by Alpine snow and rain', ru: 'Рейн: река, которую питают альпийский снег и дожди' },
    place: 'Rhine basin, from the Alps to the North Sea (gauge at Lobith, Netherlands)',
    scale: 'regional',
    years: '1926–1995',
    lat: 51.85,
    lng: 6.12,
    facts: {
      en: 'The Rhine is 1,232.7 km long (CHR, 2015), and its international river basin district covers about 200,000 km². At Lobith, on the Dutch–German border, discharge peaked at 12,060 m³/s in January 1995, a flood with a return period of about 55 years. The highest discharge recorded there is 12,600 m³/s, in 1926. KNMI notes that higher temperatures in the Alps mean less temporary storage of precipitation as snow.',
      ru: 'Длина Рейна — 1 232,7 км (CHR, 2015), а международный район речного бассейна занимает около 200 000 км². У Лобита на границе Нидерландов и Германии расход достиг пика 12 060 м³/с в январе 1995 года; такой паводок повторяется примерно раз в 55 лет. Самый высокий зафиксированный там расход — 12 600 м³/с в 1926 году. KNMI отмечает, что более высокие температуры в Альпах означают меньшее временное накопление осадков в виде снега.',
    },
    usedFor: ['a1-drainage-basins'],
    src: [
      {
        kind: 'web',
        title: 'Undine information platform: Rhine basin (length 1,232.7 km, CHR 2015; river basin district about 200,000 km²)',
        url: 'https://undine.bafg.de/rhein/rheingebiet_en.html',
      },
      {
        kind: 'web',
        title: 'KNMI, Hoogwater Rijn en Maas 1995 (in Dutch; Lobith peak 12,060 m³/s; record 12,600 m³/s in 1926)',
        url: 'https://www.knmi.nl/over-het-knmi/nieuws/hoogwater-rijn-en-maas-1995',
      },
    ],
  },
  {
    id: 'a-mekong-basin',
    subject: 'geo',
    title: { en: 'Mekong: a monsoon river and the Tonle Sap flood pulse', ru: 'Меконг: муссонная река и паводковый импульс озера Тонлесап' },
    place: 'Mekong basin, with Tonle Sap lake in Cambodia',
    scale: 'regional',
    years: '1998–2018',
    lat: 12.8,
    lng: 104.0,
    facts: {
      en: 'The Mekong River Commission gives the basin a land area of 795,000 km² (Mekong River Commission, archived website, 2005–2009). Most of the rain in the Lower Mekong basin falls in the wet season, which typically runs from mid-May to October (Nature Sustainability, 2025). In the flood season the river pushes water back into Tonle Sap, and the lake’s surface grows from about 2,210 km² to about 13,260 km² (Nature Sustainability, 2025), roughly six times as large by our calculation. Quan et al. (2025, abstract and model scenarios) estimate about 47% less reverse flow under medium-flow conditions when comparing the riverbed in 1998 with the lower bed in 2018. This is a modelled effect of riverbed lowering associated with sand extraction and upstream sediment trapping, not a direct measurement of a 47% fall in every year.',
      ru: 'Комиссия по реке Меконг (MRC) указывает площадь бассейна 795 000 км² (архивный сайт Комиссии по реке Меконг, 2005–2009). В нижнем бассейне Меконга большая часть дождевых осадков выпадает в сезон дождей, который обычно длится с середины мая до октября (Nature Sustainability, 2025). В сезон паводка река направляет воду обратно в озеро Тонлесап, и его поверхность растёт примерно от 2 210 км² до 13 260 км² (Nature Sustainability, 2025), то есть примерно в шесть раз больше по нашему расчёту. По модели Quan и соавторов (2025, аннотация и сценарии), при среднем расходе обратный сток уменьшается примерно на 47%, если сравнить русло 1998 года с пониженным руслом 2018 года. Это расчёт эффекта понижения русла, связанного с добычей песка и задержкой наносов выше по течению, а не прямое измерение падения на 47% в каждом году.',
    },
    usedFor: ['a1-drainage-basins'],
    src: [
      {
        kind: 'web',
        title: 'Mekong River Commission, About the Mekong: the land and its resources (archived page)',
        url: 'https://archive.iwlearn.net/mrcmekong.org/about_mekong/about_mekong.htm',
      },
      {
        kind: 'web',
        title: 'Nature Sustainability (2025): Sand-mining-driven reduction in Tonle Sap Lake’s critical flood pulse (abstract: modelled 47% for medium flows; 2,210 and 13,260 km²: main text)',
        url: 'https://www.nature.com/articles/s41893-025-01677-8',
      },
    ],
  },
  {
    id: 'a-amazon-basin',
    subject: 'geo',
    title: { en: 'Amazon: a basin fed by rain across the year', ru: 'Амазонка: бассейн, который питают дожди в течение всего года' },
    place: 'Amazon basin, South America (discharge measured at Óbidos, Brazil)',
    scale: 'regional',
    years: '1979–2018',
    lat: -1.92,
    lng: -55.51,
    facts: {
      en: 'The Amazon basin receives about 2,000 mm of precipitation a year and supplies about 17% of the freshwater that the world’s rivers deliver to the oceans (Nature Communications, 2020). Over 1979–2018 the mean seasonality of Amazon river discharge at Óbidos, measured as the difference between the highest and lowest monthly values in a year, was about 140,000 m³/s. The study’s basin is the catchment upstream of Óbidos, not the whole basin that drains to the mouth.',
      ru: 'Бассейн Амазонки получает около 2 000 мм осадков в год и даёт около 17% пресной воды, которую мировые реки доставляют в океаны (Nature Communications, 2020). За 1979–2018 годы средняя сезонность речного стока Амазонки на станции Обидос (Óbidos), измеренная как разница между самым высоким и самым низким месячными значениями в году, составляла около 140 000 м³/с. Бассейн в исследовании — это водосбор выше Обидоса, а не весь бассейн, стекающий к устью.',
    },
    usedFor: ['a1-drainage-basins'],
    src: [
      {
        kind: 'web',
        title: 'Nature Communications (2020): Amplified seasonal cycle in hydroclimate over the Amazon river basin and its plume region',
        url: 'https://www.ncbi.nlm.nih.gov/pmc/articles/PMC7463004/',
      },
    ],
  },
  {
    id: 'a-uae-wadi-floods-2024',
    subject: 'geo',
    title: { en: 'UAE, 16 April 2024: a storm over dry wadi catchments', ru: 'ОАЭ, 16 апреля 2024 года: ливень над сухими водосборами вади' },
    place: 'UAE: Khatm al-Shakla (Al Ain), Kalba, Al Marmoom and Dubai International Airport',
    scale: 'national',
    years: '2024',
    lat: 23.4,
    lng: 53.8,
    facts: {
      en: 'On 16 April 2024 Khatm al-Shakla in Al Ain recorded 254.8 mm of rain in 24 hours, according to National Center of Meteorology (NCM) station data, and Kalba recorded 233.3 mm in the same storm. Dubai International Airport recorded about 144 mm in one day. Across the UAE, rain averages about 100 mm a year, so the 24-hour total at Khatm al-Shakla was more than twice that annual average. The storm caused widespread flash flooding.',
      ru: '16 апреля 2024 года на станции Хатм аль-Шакла (Khatm al-Shakla) в Эль-Айне выпало 254,8 мм осадков за 24 часа по данным Национального центра метеорологии (NCM). В Калбе за тот же ливень — 233,3 мм, а в международном аэропорту Дубая за один день — около 144 мм. Средние годовые осадки по стране — около 100 мм, поэтому суточный итог в Хатм аль-Шакле более чем вдвое превысил среднегодовой показатель. Этот ливень вызвал массовые стремительные паводки (flash flooding).',
    },
    usedFor: ['a1-drainage-basins'],
    src: [
      {
        kind: 'web',
        title: 'Scientific Reports (2026): An extreme rainfall event over the UAE in April 2024 (NCM station data)',
        url: 'https://pmc.ncbi.nlm.nih.gov/articles/PMC13365373/',
      },
      {
        kind: 'web',
        title: 'ECMWF Newsletter 180 (2024): Unprecedented rainfall in the United Arab Emirates',
        url: 'https://www.ecmwf.int/en/newsletter/180/news/unprecedented-rainfall-united-arab-emirates',
      },
    ],
  },
];
