import type { CaseStudy } from '../../../../src/contract/types';

// G.4 cases. R03 verified Nobis (2003), printed p. 703, from the rendered WIT PDF and OCR. Other cases retain their earlier source checks.
export const cases: CaseStudy[] = [
  {
    id: 'g-curitiba-brt',
    subject: 'geo',
    title: { en: 'Curitiba: bus rapid transit', ru: 'Куритиба: скоростной автобусный транзит (BRT)' },
    place: 'Curitiba, Paraná, Brazil',
    scale: 'local',
    years: '1974–2020',
    lat: -25.4284,
    lng: -49.2733,
    facts: {
      "en": "Curitiba’s municipal account of 22 September 2014 dates the Expresso system to 22 September 1974. In 2014 its eight Expresso/BRT lines carried about 600,000 passenger journeys per day; the wider integrated network carried 2.3 million. Separately, URBS records 710,589 weekday passenger journeys for urban public transport in 2020. These aggregates cover different services and geographic extents: do not calculate a like-for-like BRT decline between them.",
      "ru": "Муниципальный материал Куритибы от 22 сентября 2014 года датирует запуск Expresso 22 сентября 1974 года. В 2014 году восемь линий Expresso/BRT перевозили около 600 000 пассажиров в день, а более широкая интегрированная сеть — 2,3 млн. Отдельно URBS указывает 710 589 пассажирских поездок в будний день для городского общественного транспорта в 2020 году. Это разные транспортные и территориальные совокупности: по ним нельзя рассчитывать сопоставимое падение спроса на BRT."
    },
    usedFor: ['g4-sustainable-cities'],
    src: [
      { kind: 'web', title: 'Prefeitura de Curitiba, 22 Sep 2014: opening and Expresso versus integrated-network passenger counts, opening three paragraphs', url: 'https://www.curitiba.pr.gov.br/noticias/sistema-de-expresso-comecou-com-20-onibus/34196' },
      { kind: 'web', title: 'URBS em números, Transporte Coletivo Urbano (2020): weekday passenger journeys, first table', url: 'https://www.urbs.curitiba.pr.gov.br/portal/portal-da-transparencia/institucional/urbs-em-numeros/' },
    ],
  },
  {
    id: 'g-copenhagen-cycling',
    subject: 'geo',
    title: { en: 'Copenhagen: cycling as everyday transport', ru: 'Копенгаген: велосипед как повседневный транспорт' },
    place: 'Copenhagen, Denmark',
    scale: 'local',
    years: '2020–2023',
    lat: 55.6761,
    lng: 12.5683,
    facts: {
      en: 'In 2023, 27% of all trips in Copenhagen were made by bicycle and 45% of trips to work or study, against a target of 50% by 2025 (DTU Transport Survey 2023). The work and study share fell to 34% in 2021 and recovered to 43% in 2022 (the 2024 report changed how trips are counted, so this series is only indicative). Fewer total commutes alone would not explain a fall in this share; a different modal composition would be needed. Meanwhile, the cycle superhighways in the municipality grew from 35 km in 2020 to 64 km in 2023.',
      ru: 'В 2023 году на велосипеде совершалось 27% всех поездок в Копенгагене и 45% поездок на работу или учёбу при цели 50% к 2025 году (опрос DTU 2023). Доля поездок на работу или учёбу упала до 34% в 2021 году и выросла до 43% в 2022 году (в отчёте за 2024 год изменён способ учёта поездок, поэтому ряд можно сравнивать лишь ориентировочно). Само уменьшение общего числа поездок не объясняет падение доли: нужно изменение модального состава. При этом протяжённость велосипедных супермагистралей в муниципалитете выросла с 35 км в 2020 году до 64 км в 2023 году.',
    },
    usedFor: ['g4-sustainable-cities'],
    src: [
      {
        kind: 'web',
        title: 'City of Copenhagen: "Status på cykelbyen" (cycling status report, Danish; Tables 1 and 2)',
        url: 'https://byudvikling.kk.dk/sites/default/files/2026-06/Status%20p%C3%A5%20cykelbyen.pdf',
      },
    ],
  },
  {
    id: 'g-vauban-freiburg',
    subject: 'geo',
    title: { en: 'Vauban, Freiburg: a car-reduced district', ru: 'Вобан, Фрайбург: район с ограниченным движением автомобилей' },
    place: 'Vauban, Freiburg im Breisgau, Germany',
    scale: 'local',
    years: '1998–2003',
    lat: 47.97583,
    lng: 7.82472,
    facts: {
      en: 'In the part of Vauban where parking on private property is banned, a 2003 study by Nobis found about 400 households living without a private car. That was more than 40% of all households in that part of the district (Nobis, 2003, p. 703).',
      ru: 'В той части района Вобан, где запрещено строить парковки на частной земле, по исследованию Nobis (2003, с. 703) около 400 домохозяйств жили без личного автомобиля. Это более 40% всех домохозяйств этой части района.',
    },
    usedFor: ['g4-sustainable-cities'],
    src: [
      { kind: 'web', title: 'City of Freiburg, Quartier Vauban', url: 'https://www.freiburg.de/pb/208732.html?fontZoom=L', locator: 'Verkehrskonzept: car-reduced district, not wholly car-free; former military site' },
      {
        kind: 'web',
        title: 'C. Nobis (2003): The impact of car-free housing districts on mobility behaviour – case study, WIT Transactions on Ecology and the Environment, vol. 67, p. 703 (open PDF, WIT Press)',
        url: 'https://witpress.com/Secure/elibrary/papers/SPD03/SPD03066FU.pdf',
      },
    ],
  },
  {
    id: 'g-masdar-city',
    subject: 'geo',
    title: { en: 'Masdar City: a planned eco-city', ru: 'Масдар-Сити: плановый эко-город' },
    place: 'Masdar City, Abu Dhabi, UAE',
    scale: 'local',
    years: '2015–2024',
    lat: 24.42917,
    lng: 54.61833,
    facts: {
      en: 'Masdar City is a planned, sustainable urban development in Abu Dhabi. Masdar City’s 2024 ESG report describes its aim of creating a community of residents and businesses committed to sustainable living, records 1,257 registered companies at year-end 2024 (p. 98), and lists six innovation clusters: life sciences, energy, artificial intelligence, agritech, mobility and space technology. Separately, AP’s8December 2023 report gives a 50,000-person plan and an estimated 15,000 living/working there, one-third residents (about 5,000); this is a dated press estimate, not the ESG report’s population measure. The International Renewable Energy Agency (IRENA) moved its headquarters to Masdar City in March 2015.',
      ru: 'Масдар-Сити — спланированный устойчивый городской проект в Абу-Даби. В ESG-отчёте города за 2024 год описана его задача — создать сообщество жителей и предприятий, которые живут устойчиво; указано 1 257 зарегистрированных компаний на конец 2024 года (с. 98) и шесть инновационных кластеров: науки о жизни, энергетика, искусственный интеллект, агротех, мобильность и космические технологии. Отдельно репортаж AP от 8 декабря 2023 приводит план 50 000 человек и оценку 15 000 живущих/работающих, из них треть жителей (около 5 000); это датированная оценка прессы, не показатель населения из ESG-отчёта. Международное агентство по возобновляемой энергетике (IRENA) в марте 2015 года переехало в новую штаб-квартиру в Масдар-Сити.',
    },
    usedFor: ['g4-sustainable-cities'],
    src: [
      {kind: 'web', title: 'Jamey Keaten,Associated Press,8 December 2023 (original report syndicated by WDIV): planned capacity and population-estimate paragraphs;not official census', url: 'https://www.clickondetroit.com/business/2023/12/08/on-sidelines-of-cop28-emirati-green-city-falls-short-of-ambitions-but-still-delivers-lessons/'},
      {
        kind: 'web',
        title: 'Masdar City: ESG Report 2024: p. 98 registered companies at year-end; p. 25 six clusters; official 2024 metrics separate from AP2023 estimates',
        url: 'https://masdarcity.ae/docs/default-source/pdf-to-download/masdar-city-esg-report-2024---en.pdf',
      },
      {
        kind: 'web',
        title: 'IRENA: fact sheet, IRENA Headquarters in Masdar City (2015)',
        url: 'https://www.irena.org/-/media/Files/IRENA/Agency/Factsheet/IRENA_Headquarters_Factsheet.pdf',
      },
    ],
  },
];
