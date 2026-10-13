import type { CaseStudy } from '../../../../src/contract/types';

// Syllabus core 3.3. Every figure is taken from the public source named in the facts and in src, with its year.
// Figures marked "own calculation" were computed from the source figures; the rounding follows the source.
export const cases: CaseStudy[] = [
  {
    id: 'core-3-3-case-peru-anchoveta',
    subject: 'geo',
    title: {
      en: 'Peru anchoveta: catch limits after the 1972–73 collapse',
      ru: 'Перуанская анчоуста: лимиты улова после краха 1972–1973 годов',
    },
    place: 'Peru, Pacific coast (anchoveta fishery)',
    scale: 'national',
    years: '1970–2008',
    lat: -9.07,
    lng: -78.59,
    facts: {
      en: 'FAO reports that Peruvian anchoveta catches peaked at 13.1 million tonnes in 1970 and 11.2 million tonnes in 1971, above the recommended ceiling of 8 to 9 million tonnes a year. The catch fell to 1.7 million tonnes in 1973 and to 94,000 tonnes in 1984 (FAO Fisheries Circular No. 920, 1997). Own calculation: a fall of 87.0% between 1970 and 1973. FAO judges that heavy fishing played a major role in the collapse, that the 1972–73 El Niño was a primary cause of recruitment failure, and that weak management did not cut fishing pressure enough (same source). By 1970 about one third of Peru’s export earnings came from fish products (Wikipedia, 1972 Peruvian anchoveta crisis, citing contemporary sources). In 2008 Peru passed a law setting maximum catch limits per vessel (LMCE), which assigns each vessel a share of the total catch (Wikipedia, Peruvian anchoveta).',
      ru: 'FAO сообщает, что уловы перуанской анчоусты достигли пика 13,1 млн тонн в 1970 году и 11,2 млн тонн в 1971 году, что выше рекомендованного предела 8–9 млн тонн в год. Затем улов упал до 1,7 млн тонн в 1973 году и до 94 000 тонн в 1984 году (FAO, Fisheries Circular No. 920, 1997). Собственный расчёт: снижение на 87,0% между 1970 и 1973 годами. FAO считает, что интенсивный промысел сыграл большую роль в крахе, что Эль-Ниньо 1972–1973 годов стало главной причиной провала пополнения, а слабое управление недостаточно сократило промысловое давление (там же). К 1970 году примерно треть экспортных доходов Перу приходилась на рыбную продукцию (Википедия, «1972 Peruvian anchoveta crisis», со ссылкой на источники того времени). В 2008 году Перу приняло закон, устанавливающий максимальные лимиты улова на судно (LMCE), который закрепляет за каждым судном долю общего улова (Википедия, «Peruvian anchoveta»).',
    },
    usedFor: ['core-3-3-resource-stewardship'],
    src: [
      {
        kind: 'web',
        title: 'FAO, Review of the state of world fishery resources: marine fisheries, FAO Fisheries Circular No. 920 (Rome, 1997), Peru section',
        url: 'https://www.fao.org/4/w4248e/w4248e30.htm',
      },
      {
        kind: 'web',
        title: 'Wikipedia, 1972 Peruvian anchoveta crisis (export share in 1970)',
        url: 'https://en.wikipedia.org/wiki/1972_Peruvian_anchoveta_crisis',
      },
      {
        kind: 'web',
        title: 'Wikipedia, Peruvian anchoveta (2008 maximum catch limit per vessel law)',
        url: 'https://en.wikipedia.org/wiki/Peruvian_anchoveta',
      },
    ],
  },
  {
    id: 'core-3-3-case-bhutan-forest',
    subject: 'geo',
    title: {
      en: 'Bhutan: a constitutional minimum for forest cover',
      ru: 'Бутан: конституционный минимум лесного покрова',
    },
    place: 'Bhutan (national)',
    scale: 'national',
    years: '2008–2023',
    lat: 27.47,
    lng: 89.64,
    facts: {
      en: 'Article 5(3) of Bhutan’s 2008 Constitution requires that a minimum of 60% of the country’s total land is kept under forest cover “for all time” (Constitution of Bhutan 2008, Article 5). The National Forest Inventory Report 2023, based on fieldwork in 2021–2022, reports forest cover of 69.7% of total land area (Department of Forests and Park Services, 31 July 2023). Own calculation from the 2023 inventory: 9.7 percentage points above the constitutional minimum. The same 2023 report gives a growing stock of 759 million cubic metres, a decrease of 20% since the previous inventory in 2015 (same source). Article 5(1) makes every Bhutanese a trustee of the country’s natural resources for present and future generations.',
      ru: 'Статья 5(3) Конституции Бутана 2008 года требует, чтобы не менее 60% общей площади страны оставалось покрытым лесом «на все времена» (Конституция Бутана 2008 года, статья 5). Доклад о национальной лесной инвентаризации 2023 года, основанный на полевых работах 2021–2022 годов, приводит лесной покров 69,7% общей площади суши (Департамент лесов и парков, 31 июля 2023 года). Собственный расчёт по данным инвентаризации 2023 года: на 9,7 процентного пункта выше конституционного минимума. Тот же доклад 2023 года приводит запас древесины 759 млн кубических метров, снижение на 20% с предыдущей инвентаризации 2015 года (там же). Статья 5(1) делает каждого гражданина Бутана доверенным управляющим природных ресурсов страны для нынешних и будущих поколений.',
    },
    usedFor: ['core-3-3-resource-stewardship'],
    src: [
      {
        kind: 'web',
        title: 'Constitute Project, Constitution of Bhutan 2008 (Article 5, Environment)',
        url: 'https://www.constituteproject.org/constitution/Bhutan_2008',
      },
      {
        kind: 'web',
        title: 'Department of Forests and Park Services, Bhutan’s forest cover and the National Forest Inventory Report 2023 (31 July 2023)',
        url: 'https://www.dofps.gov.bt/bhutans-forest-covered-decreased-but-carbon-sequestration-capacity-increased-in-last-six-years-national-forest-inventory-report-2023/',
      },
    ],
  },
  {
    id: 'core-3-3-case-cape-town',
    subject: 'geo',
    title: {
      en: 'Cape Town: cutting urban water demand during the 2017–2018 drought',
      ru: 'Кейптаун: сокращение городского спроса на воду во время засухи 2017–2018 годов',
    },
    place: 'Cape Town, South Africa',
    scale: 'local',
    years: '2017–2018',
    lat: -33.92,
    lng: 18.42,
    facts: {
      en: 'On 16 November 2017 the City of Cape Town said that consumption had to fall to 500 million litres a day collectively, which it put plainly as no more than 87 litres per person a day; otherwise municipal supply would run out about March 2018 (City of Cape Town, Day Zero statement, 16 November 2017). After residents cut their use, the City moved Day Zero to 13 May 2018 (same source). As of 16 November 2017, its first-phase projects were four desalination plants, two aquifer schemes and a water recycling scheme; the Molteno Reservoir and the Atlantis Aquifer were already adding 2 million and 5 million litres a day (same source). The City also raised water tariffs for residents who used large amounts of water (Wikipedia, Cape Town water crisis, citing City sources).',
      ru: '16 ноября 2017 года городские власти Кейптауна заявили, что потребление нужно снизить до 500 млн литров в день совокупно, или, проще говоря, не более 87 литров на человека в день; иначе подача муниципальной воды прекратилась бы примерно в марте 2018 года (городские власти Кейптауна, заявление «Day Zero», 16 ноября 2017 года). После того как жители сократили потребление, городские власти перенесли «День Ноль» (Day Zero) на 13 мая 2018 года (там же). По состоянию на 16 ноября 2017 года первую очередь составляли семь проектов: четыре опреснительные установки, два проекта по водоносным горизонтам и проект переработки воды; из водохранилища Молтено и водоносного горизонта Атлантис уже поступало 2 млн и 5 млн литров в день соответственно (там же). Городские власти также повысили тарифы для жителей, которые используют большие объёмы воды (Википедия, «Cape Town water crisis», со ссылкой на городские источники).',
    },
    usedFor: ['core-3-3-resource-stewardship'],
    src: [
      {
        kind: 'web',
        title: 'City of Cape Town, “Day Zero: when is it, what is it, and how can we avoid it?” (16 November 2017)',
        url: 'https://www.capetown.gov.za/Media-and-news/Day%20Zero%20when%20is%20it,%20what%20is%20it,%20and%20how%20can%20we%20avoid%20it',
      },
      {
        kind: 'web',
        title: 'Wikipedia, Cape Town water crisis (tariffs for high users)',
        url: 'https://en.wikipedia.org/wiki/Cape_Town_water_crisis',
      },
    ],
  },
];
