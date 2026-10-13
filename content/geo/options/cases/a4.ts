import type { CaseStudy } from '../../../../src/contract/types';

// Option A, A.4 cases. Every figure below was checked against the page named in src (WebSearch, WebFetch or a direct
// read of the page or PDF, 13.10.2026). Figures from search snippets only are not used here.
export const cases: CaseStudy[] = [
  {
    id: 'a-uae-desalination',
    subject: 'geo',
    title: { en: 'UAE: desalination and reuse in an arid state', ru: 'ОАЭ: опреснение и повторное использование воды в засушливой стране' },
    place: 'UAE',
    scale: 'national',
    years: '2025–2036',
    lat: 25.2048,
    lng: 55.2708,
    facts: {
      en: 'In 2025 the UAE Ministry of Energy and Infrastructure said that non-conventional water (desalinated seawater and treated wastewater) provides 53% of the country’s water supply, with a total capacity of over 3 million cubic metres a day. The same statement says that 73% of treated wastewater is reused to irrigate landscapes in the country’s cities. The UAE Water Security Strategy 2036 aims to cut total water demand by 21% and to raise the reuse of treated water to 95%. FAO’s AQUASTAT profile states that irrigation in the UAE is completely based on groundwater, so the aquifers carry the main risk.',
      ru: 'В 2025 году Министерство энергетики и инфраструктуры ОАЭ сообщило, что нетрадиционные источники воды (опреснённая морская вода и очищенные сточные воды) дают 53% водоснабжения страны при общей мощности более 3 млн кубометров в сутки. В том же сообщении сказано, что 73% очищенных сточных вод повторно используются для полива ландшафтов в городах страны. Стратегия водной безопасности ОАЭ до 2036 года ставит цель снизить общий спрос на воду на 21% и повысить повторное использование очищенной воды до 95%. По страновому профилю FAO AQUASTAT орошение в ОАЭ полностью основано на подземных водах, поэтому главный риск несут водоносные горизонты.',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'UAE Ministry of Energy and Infrastructure: “Water Security is a National Priority for the UAE” (23 March 2025)',
        url: 'https://www.moei.gov.ae/en/media-center/news/23/3/2025/water-security-is-a-national-priority-for-the-uae',
      },
      {
        kind: 'web',
        title: 'The UAE Water Security Strategy 2036 (UAE Government portal)',
        url: 'https://u.ae/en/about-the-uae/strategies-initiatives-and-awards/strategies-plans-and-visions/environment-and-energy/the-uae-water-security-strategy-2036',
      },
      {
        kind: 'web',
        title: 'FAO AQUASTAT: United Arab Emirates, irrigation by country',
        url: 'https://www.fao.org/aquastat/en/geospatial-information/global-maps-irrigated-areas/irrigation-by-country/country/ARE',
      },
    ],
  },
  {
    id: 'a-singapore-four-taps',
    subject: 'geo',
    title: { en: 'Singapore: the four national taps and NEWater', ru: 'Сингапур: «четыре национальных крана» (Four National Taps) и NEWater' },
    place: 'Singapore',
    scale: 'national',
    years: '1962–2065',
    lat: 1.3521,
    lng: 103.8198,
    facts: {
      en: 'Singapore’s water comes from four “national taps”: local catchment water, imported water, NEWater (reclaimed wastewater) and desalinated water (PUB). The 1962 Johor River Water Agreement with Malaysia lets Singapore draw up to 250 million gallons of raw water a day, and it expires in 2061 (Singapore Ministry of Sustainability and the Environment, 2025). The fifth desalination plant, Jurong Island, opened in 2022. PUB projects that total water demand could almost double by 2065, with the non-domestic sector accounting for about 60%, and that NEWater and desalination will meet most of that demand.',
      ru: 'Вода Сингапура поступает из «четырёх национальных кранов» (Four National Taps): местного стока, импортной воды, NEWater (очищенных сточных вод) и опреснённой воды (PUB). По соглашению о реке Джохор 1962 года с Малайзией Сингапур может забирать до 250 млн галлонов сырой воды в сутки; соглашение истекает в 2061 году (Министерство устойчивого развития и окружающей среды Сингапура, 2025). Пятый опреснительный завод, Jurong Island, открыт в 2022 году. PUB прогнозирует, что общий спрос на воду может почти удвоиться к 2065 году, при этом на непромышленный сектор придётся около 60% спроса, а NEWater и опреснение покроют большую его часть.',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'PUB, Singapore’s National Water Agency: Singapore’s Water Loop',
        url: 'https://www.pub.gov.sg/public/waterloop',
      },
      {
        kind: 'web',
        title: 'Singapore Ministry of Sustainability and the Environment: written reply on the water agreement (February 2025)',
        url: 'https://www.mse.gov.sg/latest-news/written-reply-to-parliamentary-question-on-water-agreement-feb2025/',
      },
      {
        kind: 'web',
        title: 'PUB news release: Singapore NEWater journey (September 2024)',
        url: 'https://www.pub.gov.sg/Resources/News-Room/PressReleases/2024/09/Singapore-NEWater-journey',
      },
    ],
  },
  {
    id: 'a-gerd-nile',
    subject: 'geo',
    title: { en: 'Grand Ethiopian Renaissance Dam: the dispute over the Nile', ru: 'Великая эфиопская плотина возрождения (GERD): спор о Ниле' },
    place: 'Blue Nile, Ethiopia (downstream: Sudan and Egypt)',
    scale: 'regional',
    years: '1959–2025',
    lat: 11.2,
    lng: 35.1,
    facts: {
      en: 'The Grand Ethiopian Renaissance Dam on the Blue Nile was inaugurated on 9 September 2025, with an installed capacity of 5,150 MW (Tractebel, 2025). Its reservoir is designed to hold about 74 billion cubic metres (UN News, 2020). Talks in 2020 centred on how fast the reservoir fills and what effect this would have on water supplies in Sudan and Egypt downstream. Egypt’s allocation under the 1959 Nile Waters Agreement is 55.5 km³ a year, and FAO’s AQUASTAT profile calls the Nile Egypt’s main water source. Ethiopia was not a party to the 1959 agreement and disputes its legitimacy.',
      ru: 'Великая эфиопская плотина возрождения (GERD) на Голубом Ниле открыта 9 сентября 2025 года; её установленная мощность — 5 150 МВт (Tractebel, 2025). Водохранилище рассчитано примерно на 74 млрд кубометров (UN News, 2020). На переговорах в 2020 году обсуждали, как быстро заполняется водохранилище и как это скажется на водоснабжении Судана и Египта ниже по течению. Квота Египта по Соглашению о водах Нила 1959 года составляет 55,5 км³ в год, а в профиле FAO AQUASTAT Нил назван главным источником воды Египта. Эфиопия не была стороной соглашения 1959 года и оспаривает его законность.',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'Tractebel: Africa’s largest hydropower scheme inaugurated in Ethiopia (17 September 2025)',
        url: 'https://tractebel-engie.com/en/news/africas-largest-hydropower-scheme-inaugurated-in-ethiopia-doubling-national-power-capacity/',
      },
      {
        kind: 'web',
        title: 'UN News: Guterres encourages Member States to reach agreement over Ethiopian Nile dam project (May 2020)',
        url: 'https://news.un.org/en/story/2020/05/1064452',
      },
      {
        kind: 'web',
        title: 'FAO AQUASTAT: Egypt country profile',
        url: 'https://www.fao.org/fileadmin/user_upload/aquastat/pdf_files/EGY_egypt_cp.pdf',
      },
    ],
  },
  {
    id: 'a-indus-treaty',
    subject: 'geo',
    title: { en: 'Indus Waters Treaty: an agreement under strain', ru: 'Договор о водах Инда: соглашение под давлением' },
    place: 'Indus basin, India and Pakistan (signed in Karachi)',
    scale: 'regional',
    years: '1960–2026',
    lat: 24.86,
    lng: 67.01,
    facts: {
      en: 'The Indus Waters Treaty was signed in Karachi on 19 September 1960 by India and Pakistan, with the International Bank for Reconstruction and Development (World Bank) as a party. The eastern rivers (Ravi, Beas and Sutlej) are for India’s unrestricted use. The western rivers (Indus, Jhelum and Chenab) are for Pakistan’s unrestricted use, and India may use them only in limited ways and may store water on them only as the annexes allow. On 23 April 2025 India announced that it was holding the treaty in abeyance, after the Pahalgam attack that killed 26 people. In March 2026 the Indian government said the treaty would remain in abeyance until Pakistan ends its support for cross-border terrorism.',
      ru: 'Договор о водах Инда был подписан в Карачи 19 сентября 1960 года Индией и Пакистаном; Международный банк реконструкции и развития (Всемирный банк) выступил стороной договора. Восточные реки (Рави, Беас и Сатледж) предназначены для неограниченного использования Индией. Западные реки (Инд, Джелам и Ченаб) — для неограниченного использования Пакистаном, а Индия может использовать их лишь ограниченно и строить на них хранилища только в пределах приложений к договору. 23 апреля 2025 года Индия объявила о приостановке действия договора после теракта в Пахалгаме, в котором погибли 26 человек. В марте 2026 года правительство Индии заявило, что договор останется в приостановке, пока Пакистан не прекратит поддерживать трансграничный терроризм.',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'Treaty text: UN Treaty Series, registration no. 6032 (volume 419)',
        url: 'https://treaties.un.org/doc/Publication/UNTS/Volume%20419/volume-419-I-6032-English.pdf',
      },
      {
        kind: 'web',
        title: 'PTI report, Deccan Herald: India issues notification on holding Indus Water Treaty in abeyance (25 April 2025)',
        url: 'https://www.deccanherald.com/amp/story/india%2Findia-issues-notification-on-holding-indus-water-treaty-in-abeyance-3510066',
      },
      {
        kind: 'web',
        title: 'All India Radio (Akashvani News): India says Indus Waters Treaty to remain in abeyance (March 2026)',
        url: 'https://www.newsonair.gov.in/india-says-indus-waters-treaty-to-remain-in-abeyance-until-pakistan-ends-support-to-terrorism',
      },
    ],
  },
  {
    id: 'a-snwtp-china',
    subject: 'geo',
    title: { en: 'South-North Water Transfer Project, China', ru: 'Проект переброски воды «Юг — Север» (South-North Water Transfer Project), Китай' },
    place: 'China: from Hubei (Danjiangkou) to northern China',
    scale: 'national',
    years: '2014–2024',
    lat: 32.5,
    lng: 111.5,
    facts: {
      en: 'The middle and eastern routes of China’s South-North Water Diversion Project began operating in late 2014. Over the following ten years they moved more than 76.7 billion cubic metres of water to northern China, and annual transfers rose from over 2 billion to 10 billion cubic metres. More than 185 million people have directly benefited, according to China’s State Council Information Office (12 December 2024).',
      ru: 'Средний и восточный маршруты Проекта переброски воды с юга на север в Китае начали работать в конце 2014 года. За последующие десять лет они перебросили на север страны более 76,7 млрд кубометров воды, а годовой объём переброски вырос с более чем 2 до 10 млрд кубометров. По данным Информационного бюро Государственного совета КНР (12 декабря 2024 года), более 185 млн человек получили прямую выгоду.',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'China’s State Council Information Office: China’s mega water diversion project benefits over 185 million people (12 December 2024)',
        url: 'https://english.www.gov.cn/news/202412/12/content_WS675a78afc6d0868f4e8ede24.html',
      },
    ],
  },
  {
    id: 'a-ogallala-aquifer',
    subject: 'geo',
    title: { en: 'High Plains (Ogallala) aquifer: a groundwater store that is being drawn down', ru: 'Высокие равнины (Огаллала): запасы подземной воды, которые сокращаются' },
    place: 'High Plains (Ogallala) aquifer, USA: parts of eight states',
    scale: 'regional',
    years: '1950–2015',
    lat: 39.0,
    lng: -101.5,
    facts: {
      en: 'The High Plains aquifer underlies 111.8 million acres (about 175,000 square miles) in parts of eight states: Colorado, Kansas, Nebraska, New Mexico, Oklahoma, South Dakota, Texas and Wyoming. Water-level declines began soon after substantial irrigation with groundwater started, about 1950. By 2015 the area-weighted average water level had fallen by 15.8 feet since predevelopment (about 1950), while individual wells ranged from a rise of 84 feet to a decline of 234 feet. Recoverable water in storage was about 2.91 billion acre-feet in 2015: a loss of about 273.2 million acre-feet since predevelopment, including 10.7 million acre-feet between 2013 and 2015 (USGS, 2017).',
      ru: 'Водоносный горизонт High Plains залегает под 111,8 млн акров (около 175 000 квадратных миль) в восьми штатах: Колорадо, Канзас, Небраска, Нью-Мексико, Оклахома, Южная Дакота, Техас и Вайоминг. Падение уровня воды началось вскоре после того, как около 1950 года начали широко использовать подземную воду для орошения. К 2015 году средний по площади уровень воды понизился на 15,8 фута по сравнению с уровнем до массового использования (около 1950 года), а по отдельным скважинам изменения шли от подъёма на 84 фута до падения на 234 фута. Запасы извлекаемой воды составляли около 2,91 млрд акр-футов в 2015 году: потеря около 273,2 млн акр-футов с 1950 года, в том числе 10,7 млн акр-футов за 2013–2015 годы (USGS, 2017).',
    },
    usedFor: ['a4-water-management'],
    src: [
      {
        kind: 'web',
        title: 'USGS Scientific Investigations Report 2017–5040 (McGuire, 2017): Water-level and recoverable water in storage changes, High Plains aquifer, predevelopment to 2015 and 2013–15',
        url: 'https://pubs.usgs.gov/publication/sir20175040',
      },
    ],
  },
];
