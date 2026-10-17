import type { Question } from '../../../../src/contract/types';

// Option G.3 questions. All are original, written in the style of Paper 1 (IB Geography, Option G).
// Structured questions: 10 marks, parts (a) to (c) with marks in square brackets; the markscheme sums to 10.
// Extended questions: 10 marks, levels-based markscheme, hints as a plan and markband check, developed model answer; no fixed word-count scoring rule.
export const questions: Question[] = [
  {
    id: 'g3-sq1',
    subject: 'geo',
    topicIds: ['g3-urban-stress'],
    paper: 'P1',
    marks: 10,
    command: 'Describe',
    stimulus: {
      en: 'At the Santacruz station in Mumbai, India, 944.2 mm of rain was recorded over the 24-hour observation period of 26–27 July 2005; this is a station total, not uniform citywide rainfall. Roads and railway lines flooded, and many people were stranded and had to walk long distances home.',
      ru: 'На станции Santacruz в Мумбаи (Индия) за 24-часовой период наблюдения 26–27 июля 2005 года зарегистрировано 944,2 мм осадков. Это значение станции, а не равномерный дождь по всему городу. Дороги и железнодорожные пути затопило, многие люди застряли и были вынуждены идти домой пешком на большие расстояния.',
    },
    prompt: {
      en: '(a) Describe the rainfall that caused the flood. [2]\n\n(b) Explain how impermeable surfaces and the drainage system increase the risk of urban flooding. [4]\n\n(c) Suggest two social factors that increase the vulnerability of people living in low-lying informal settlements. [4]',
      ru: '(a) Опишите ливень, который вызвал наводнение. [2]\n\n(b) Объясните, как водонепроницаемые поверхности и система дренажа повышают риск городского наводнения. [4]\n\n(c) Предложите два социальных фактора, которые повышают уязвимость людей, живущих в низинных неформальных районах. [4]',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for the extreme amount, 944.2 mm at Santacruz over 26–27 July 2005 (24 hours). 1 mark for a second point that links the rain to the flooding, for example: the rain fell in one day, faster than the drains could remove the water, so roads and railway lines flooded.\n\n(b) 4 marks, 1 per developed point: 1 mark: impermeable surfaces (concrete, asphalt, roofs) stop water soaking in, so more water runs off. 1 mark: the runoff reaches the drains quickly, so the peak flow is higher. 1 mark: drains that are too small, blocked or overloaded cannot remove the water. 1 mark: loss of natural drainage (open land, wetlands) or building on low-lying land adds to the flood, if linked to the flooding.\n\n(c) 4 marks, 2 per factor (1 for naming it, 1 for developing it). Examples: poverty, so households cannot pay to repair or move and losses are greater; homes built from weak materials on flood-prone land; limited access to warnings, transport or insurance; dependence on daily wages, so one missed day of work causes hardship. Accept any two factors with a developed link.',
      ru: '(a) 2 балла: 1 балл за экстремальное количество осадков — 944,2 мм на станции Santacruz за 26–27 июля 2005 года (24 часа). 1 балл за второй пункт, связанный с наводнением, например: дождь выпал за одни сутки, быстрее, чем дренаж мог отвести воду, и затопило дороги и железнодорожные пути.\n\n(b) 4 балла, по 1 баллу за каждый развитый пункт: 1 балл: водонепроницаемые поверхности (бетон, асфальт, крыши) не пропускают воду, поэтому больше воды стекает по поверхности. 1 балл: сток быстро попадает в ливневую канализацию, поэтому пиковый расход выше. 1 балл: ливневые стоки слишком малы, забиты или перегружены, и вода не уходит. 1 балл: потеря естественного дренажа (открытых участков, болот) или застройка низин усиливают наводнение, если это связано с затоплением.\n\n(c) 4 балла, по 2 балла за фактор (1 за название, 1 за объяснение). Примеры: бедность — нет денег на ремонт или переезд, поэтому потери больше; жильё из слабых материалов на подверженной паводкам земле; ограниченный доступ к предупреждениям, транспорту или страховке; зависимость от ежедневного заработка, поэтому один пропущенный рабочий день ведёт к нехватке денег. Засчитывается любой из двух факторов с развитой связью.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g3-sq2',
    subject: 'geo',
    topicIds: ['g3-urban-stress'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    stimulus: {
      en: 'Anthony Brazel (2007) reported that night-time low temperatures in Phoenix, Arizona, are 10 to 15 degrees Fahrenheit higher than in the rural areas around the city.',
      ru: 'Энтони Брейзел (2007) сообщил, что ночные минимальные температуры в Фениксе (Аризона) на 10–15 °F выше, чем в сельских районах вокруг города.',
    },
    prompt: {
      en: '(a) Describe how the urban heat island in Phoenix differs between the evening and the middle of the day. [2]\n\n(b) Explain how dark, dense building materials and the lack of vegetation cause the urban heat island. [4]\n\n(c) Suggest two ways a city could reduce the urban heat island, and explain how each one works. [4]',
      ru: '(a) Опишите, чем тепловой остров в Фениксе отличается вечером и в середине дня. [2]\n\n(b) Объясните, как тёмные плотные строительные материалы и отсутствие растительности создают тепловой остров. [4]\n\n(c) Предложите два способа, которыми город может уменьшить тепловой остров, и объясните, как работает каждый из них. [4]',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark: in the evening and at night the urban area is warmer than the rural surroundings, by 10 to 15 degrees Fahrenheit. 1 mark: during the day the urban core can be slightly cooler than the desert, because the highest daytime temperatures often occur in open desert and irrigated urban areas cool by evaporation.\n\n(b) 4 marks, 1 per developed point: 1 mark: dark surfaces such as asphalt have a low albedo, so they absorb more solar radiation. 1 mark: concrete and asphalt store heat during the day. 1 mark: the stored heat is released slowly after sunset, so night-time temperatures stay high. 1 mark: few trees and gardens mean less shade and less evaporative cooling. Accept dense buildings that trap heat and reduce wind, if developed.\n\n(c) 4 marks, 2 per action (1 for naming it, 1 for how it works). Examples: planting trees or green roofs (shade and evaporation cool the air); light-coloured, high-albedo roofs and pavements (more radiation is reflected); water features or irrigated parks (evaporative cooling); shading of streets by buildings and trees (less heat is absorbed). Accept any two actions with a clear mechanism.',
      ru: '(a) 2 балла: 1 балл: вечером и ночью городская территория теплее окружающей сельской местности на 10–15 °F. 1 балл: днём центр города может быть немного прохладнее пустыни, потому что самые высокие дневные температуры часто бывают в открытой пустыне, а полив и испарение в городе охлаждают воздух.\n\n(b) 4 балла, по 1 баллу за развитый пункт: 1 балл: тёмные поверхности, например асфальт, имеют низкое альбедо и поглощают больше солнечной радиации. 1 балл: бетон и асфальт накапливают тепло днём. 1 балл: накопленное тепло медленно отдаётся после заката, поэтому ночные температуры остаются высокими. 1 балл: мало деревьев и зелени означает меньше тени и меньше испарительного охлаждения. Засчитывается плотная застройка, которая задерживает тепло и снижает ветер, если это развито.\n\n(c) 4 балла, по 2 балла за меру (1 за название, 1 за механизм). Примеры: посадка деревьев и зелёные крыши (тень и испарение охлаждают воздух); светлые крыши и покрытия с высоким альбедо (отражается больше излучения); фонтаны или полив парков (испарительное охлаждение); затенение улиц зданиями и деревьями (меньше тепла поглощается). Засчитываются любые две меры с ясным механизмом.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g3-sq3',
    subject: 'geo',
    topicIds: ['g3-urban-stress'],
    paper: 'P1',
    marks: 10,
    command: 'Suggest',
    stimulus: {
      en: 'The 2009 Kenya census counted 170,070 people in the eight locations that make up Kibera, Nairobi, while some claims put the population at one million or more.',
      ru: 'Перепись населения Кении 2009 года насчитала 170 070 человек в восьми участках, из которых состоит Кибера в Найроби, а по некоторым утверждениям население составляет миллион и больше.',
    },
    prompt: {
      en: '(a) Describe two features of informal settlements that make residents more exposed to environmental hazards. [2]\n\n(b) Explain how a lack of income and high housing costs can keep households in urban poverty. [4]\n\n(c) Suggest two strategies that could reduce urban inequality in a settlement such as Kibera, and explain the likely impact of each. [4]',
      ru: '(a) Опишите две особенности неформальных поселений, которые делают жителей более подверженными опасностям окружающей среды. [2]\n\n(b) Объясните, как нехватка дохода и высокая стоимость жилья могут удерживать домохозяйства в городской бедности. [4]\n\n(c) Предложите две стратегии, которые могли бы уменьшить городское неравенство в таком поселении, как Кибера, и объясните вероятное влияние каждой. [4]',
    },
    markscheme: {
      en: '(a) 2 marks, 1 per described feature: for example houses built on steep, low-lying or flood-prone land; poor drainage and sanitation, so waste and water collect; overcrowded homes built from weak materials.\n\n(b) 4 marks, 1 per developed point: 1 mark: low incomes mean households cannot afford formal or good-quality housing. 1 mark: high rent takes a large share of income, leaving less for food, health and schooling. 1 mark: without savings or credit a household cannot recover from illness or job loss. 1 mark: poor health and missed work reduce income further, so the household stays in poverty.\n\n(c) 4 marks, 2 per strategy (1 for the strategy, 1 for its likely impact). Examples: upgrading water, sanitation and drainage (fewer waterborne diseases and less flooding); secure land tenure and affordable housing (households invest in their homes and face less risk of eviction); job training or microfinance (higher and steadier incomes). Accept any two developed strategies.',
      ru: '(a) 2 балла, по 1 баллу за каждую описанную особенность: например, дома на крутых, низинных или подверженных паводкам участках; плохой дренаж и санитария, из-за которых скапливаются отходы и вода; переполненное жильё из слабых материалов.\n\n(b) 4 балла, по 1 баллу за развитый пункт: 1 балл: низкий доход не позволяет домохозяйству снять качественное жильё. 1 балл: высокая аренда забирает большую часть дохода, и на еду, здоровье и учёбу остаётся меньше. 1 балл: без сбережений и кредита семья не может восстановиться после болезни или потери работы. 1 балл: плохое здоровье и пропущенная работа снижают доход ещё сильнее, и семья остаётся в бедности.\n\n(c) 4 балла, по 2 балла за стратегию (1 за стратегию, 1 за вероятное влияние). Примеры: модернизация водоснабжения, санитарии и дренажа (меньше заболеваний и меньше затоплений); гарантии владения землёй и доступное жильё (семьи вкладывают в дом и меньше рискуют быть выселенными); профессиональное обучение или микрофинансирование (выше и стабильнее доход). Засчитываются любые две развитые стратегии.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g3-eq1',
    subject: 'geo',
    topicIds: ['g3-urban-stress'],
    paper: 'P1',
    marks: 10,
    command: 'Discuss',
    prompt: {
      en: 'Discuss the view that the urban poor face greater environmental stress than wealthier residents of the same city. [10]',
      ru: 'Обсудите утверждение, что бедные городские жители испытывают большую экологическую нагрузку, чем более состоятельные жители того же города. [10]',
    },
    hints: [
  {
    "en": "Separate hazard or environmental stress, exposure, vulnerability and actual impacts.",
    "ru": "Раздели опасность или экологическую нагрузку, подверженность, уязвимость и фактические последствия."
  },
  {
    "en": "Use the IMD 2005 map: Santacruz 944.2 mm, Dharavi 493 mm, Colaba 73.4 mm. Do not assume the whole city received the same rain.",
    "ru": "Используй карту IMD 2005 года: Santacruz 944,2 мм, Дхарави 493 мм, Colaba 73,4 мм. Не предполагай одинаковый дождь во всём городе."
  },
  {
    "en": "IPCC 2022 supports disproportionate impacts on marginalised communities. Explain mechanisms and the limits of applying that general finding to each household.",
    "ru": "МГЭИК 2022 отмечает несоразмерные последствия для маргинализированных сообществ. Объясни механизмы и пределы применения общего вывода к каждой семье."
  },
  {
    "en": "A hazard affecting all income groups does not disprove unequal severity. Judge relative exposure and consequences with comparable evidence.",
    "ru": "Воздействие на все доходные группы не опровергает неравной тяжести последствий. Оцени относительную подверженность и вред по сопоставимым данным."
  }
],
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Compare groups within the same city and distinguish hazard, exposure, vulnerability and coping. Assess variation within income groups and the limits of available evidence.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Сравни группы внутри одного города, различая опасность, подверженность, уязвимость и возможности реагирования. Учитывай различия внутри доходных групп и ограничения данных.",
    },
    model: {
  "en": "Lower income can increase environmental harm through both exposure and vulnerability, but it does not fix either for every household. Exposure concerns people and assets in places that may be affected; vulnerability concerns their susceptibility and ability to cope. A comparison within one city should distinguish the stress encountered from the consequences for different groups.\n\nThe IPCC’s 2022 urban assessment reports disproportionate impacts on economically and socially marginalised communities with high confidence. Relevant mechanisms include constrained housing choices, inadequate services and limited resources for protection and recovery. This supports examining inequality; it does not prove that every poor district has greater exposure to every hazard. Income also interacts with age, health, work and access to services.\n\nMumbai’s 2005 rainfall illustrates a necessary caution. The IMD map for 26–27 July records 944.2 mm at Santacruz, 493 mm at Dharavi and 73.4 mm at Colaba. Rainfall was not uniform, so differences in neighbourhood harm cannot be attributed to income by assuming identical rainfall everywhere. These rainfall figures alone also do not measure losses or recovery. Household-level evidence about flooding, housing, services and losses is needed to separate mechanisms.\n\nThe fact that affluent residents can also face flooding, heat or pollution does not refute a claim about greater average harm among poorer residents. Access to safer housing or cooling can reduce consequences even where exposure is shared, but availability and reliability must be checked. Conversely, a particularly exposed wealthy site can experience serious damage.\n\nThe view is therefore supported as a general concern about unequal risk, rather than a universal ranking of neighbourhoods. A defensible city-specific judgement compares the same stress and period, accounts for spatial variation, and tests both service access and outcomes instead of treating income or location alone as decisive.",
  "ru": "Низкий доход может усиливать экологический вред через подверженность и уязвимость, но не определяет их для каждой семьи. Подверженность относится к людям и имуществу в местах возможного воздействия, уязвимость — к восприимчивости к вреду и способности справиться. Внутригородское сравнение должно различать саму нагрузку и последствия для групп.\n\nВ городской оценке МГЭИК 2022 года с высокой уверенностью отмечены несоразмерные последствия для экономически и социально маргинализированных сообществ. Важны ограниченный выбор жилья, недостаточные услуги и нехватка средств для защиты и восстановления. Это основание исследовать неравенство, а не доказательство большей подверженности каждого бедного района любой опасности. Доход взаимодействует с возрастом, здоровьем, работой и доступом к услугам.\n\nОсадки в Мумбаи 2005 года показывают необходимую осторожность. На карте IMD за 26–27 июля указаны 944,2 мм в Santacruz, 493 мм в Дхарави и 73,4 мм в Colaba. Дождь был неодинаковым: нельзя объяснить различие ущерба доходом, предположив одинаковые осадки повсюду. Сами эти показатели также не измеряют потери и восстановление. Чтобы разделить механизмы, нужны сведения о затоплении, жилье, услугах и ущербе конкретных семей.\n\nТо, что богатые жители тоже сталкиваются с наводнением, жарой или загрязнением, не опровергает утверждение о большем среднем вреде для бедных. Доступ к безопасному жилью или охлаждению может уменьшить последствия при общей подверженности, но наличие и надёжность защиты нужно проверять. И наоборот, особенно опасное местоположение богатого объекта может привести к серьёзному ущербу.\n\nИтак, мнение обоснованно как общая проблема неравного риска, но не как универсальный рейтинг районов. Вывод для города требует сравнить одну нагрузку за один период, учесть пространственные различия и проверить доступ к услугам вместе с последствиями, не объявляя доход или местоположение единственной причиной."
},
    origin: 'original',
    minutes: 30,
  },
  {
    id: 'g3-eq2',
    subject: 'geo',
    topicIds: ['g3-urban-stress'],
    paper: 'P1',
    marks: 10,
    command: 'To what extent',
    prompt: {
      en: 'To what extent does vulnerability, rather than the hazard itself, determine the flood risk in a city? [10]',
      ru: 'В какой степени уязвимость, а не сама опасность, определяет риск наводнения в городе? [10]',
    },
    hints: [
  {
    "en": "Define all three risk components and identify which one each proposed measure changes.",
    "ru": "Определи три составляющие риска и укажи, какую меняет каждая предложенная мера."
  },
  {
    "en": "Compare the actual station rainfall from the IMD map, not an invented uniform 944 mm event. Rainfall is not itself flood depth.",
    "ru": "Сравни реальные станционные осадки на карте IMD, а не выдуманное равномерное событие 944 мм. Осадки сами по себе не равны глубине затопления."
  },
  {
    "en": "Explain a same-inundation conditional comparison, clearly distinguished from observed household loss data.",
    "ru": "Объясни условное сравнение при одинаковом затоплении, отделив его от наблюдений за потерями семей."
  },
  {
    "en": "Use the IIT Bombay governance account without inventing a causal percentage or an automatic hazard-size threshold.",
    "ru": "Используй материал IIT Bombay об управлении, не придумывая причинный процент или автоматический порог силы опасности."
  }
],
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Examine interaction among flood hazard, exposure and vulnerability rather than treating risk as determined by only one. Explain how a named urban context changes the judgement.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Исследуй взаимодействие опасности, подверженности и уязвимости, а не выводи риск из одного фактора. Объясни, как конкретные городские условия меняют оценку.",
    },
    model: {
  "en": "Urban flood risk arises from the interaction of hazard, exposure and vulnerability. Hazard includes the probability and severity of inundation; exposure includes people and assets in affected places; vulnerability concerns susceptibility to harm and capacity to cope. They are not interchangeable, and no single factor creates the same risk under every condition.\n\nMumbai demonstrates why the hazard must be measured spatially. The IMD’s record of 26–27 July 2005 gives 944.2 mm of rainfall at Santacruz but 493 mm at Dharavi and 73.4 mm at Colaba. It is therefore incorrect to treat the event as identical rainfall across all neighbourhoods and attribute different consequences entirely to vulnerability. Even a rainfall map does not directly give flood depth: routing, drains, storage and water levels also influence inundation.\n\nVulnerability still matters. Under the same inundation depth, differences in building resistance, mobility, warning access and resources can change harm. These are conditional mechanisms, not measured comparisons between those three stations. Similarly, placing more people in an inundation zone changes exposure, while changing drainage can alter the local hazard. Calling all three “vulnerability” prevents a clear assessment of what an intervention changes.\n\nIIT Bombay’s research account identifies failures of coordination and attention to inequality among obstacles to flood-risk management. This helps explain why technical capacity or wealth alone does not guarantee effective protection. It does not provide a percentage share of the 2005 losses caused by governance.\n\nThe claim consequently captures the importance of social and institutional conditions but overstates them if it excludes the hazard. Planning should assess particular events and exposed populations, then compare how drainage, land use, warnings and support alter different risk components. The evidence supports interaction, rather than a universal conclusion that vulnerability outweighs rainfall or becomes irrelevant during extreme events.",
  "ru": "Риск городского наводнения возникает при взаимодействии опасности, подверженности и уязвимости. Опасность включает вероятность и силу затопления; подверженность — людей и имущество в затрагиваемых местах; уязвимость — восприимчивость к вреду и возможности справиться. Это разные составляющие, и один фактор не создаёт одинаковый риск при любых условиях.\n\nМумбаи показывает, почему опасность нужно измерять в пространстве. По данным IMD за 26–27 июля 2005 года, в Santacruz выпало 944,2 мм, в Дхарави — 493 мм, в Colaba — 73,4 мм. Поэтому неверно считать дождь одинаковым во всех районах и целиком приписывать различие последствий уязвимости. Даже карта осадков не даёт прямо глубину затопления: важны движение воды, дренаж, ёмкости и уровни.\n\nУязвимость всё же важна. При одной глубине затопления прочность зданий, мобильность, доступ к предупреждению и ресурсы способны изменить вред. Это условные механизмы, а не измеренное сравнение трёх указанных станций. Размещение большего числа людей в зоне затопления меняет подверженность, а изменение дренажа — местную опасность. Если называть всё уязвимостью, невозможно ясно оценить действие меры.\n\nВ сообщении об исследовании IIT Bombay среди препятствий управлению риском названы недостаток координации и внимания к неравенству. Это помогает понять, почему техника или богатство сами по себе не гарантируют защиту. Но материал не измеряет процент потерь 2005 года, вызванный управлением.\n\nИтак, утверждение отражает важность социальных и институциональных условий, но преувеличивает их роль, если исключает опасность. Планирование должно рассматривать конкретные события и подверженное население, затем сравнивать действие дренажа, землепользования, предупреждений и поддержки на разные составляющие риска. Данные подтверждают взаимодействие, а не универсальное превосходство уязвимости над осадками или исчезновение её роли при экстремальном событии."
},
    origin: 'original',
    minutes: 30,
  },
];
