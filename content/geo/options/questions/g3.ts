import type { Question } from '../../../../src/contract/types';

// Option G.3 questions. All are original, written in the style of Paper 1 (IB Geography, Option G).
// Structured questions: 10 marks, parts (a) to (c) with marks in square brackets; the markscheme sums to 10.
// Extended questions: 10 marks, levels-based markscheme, hints as a plan and markband check, model answer 90 to 130 words.
export const questions: Question[] = [
  {
    id: 'g3-sq1',
    subject: 'geo',
    topicIds: ['g3-urban-stress'],
    paper: 'P1',
    marks: 10,
    command: 'Describe',
    stimulus: {
      en: 'On 26 July 2005 Mumbai, India, recorded 944 mm of rain in 24 hours. Roads and railway lines flooded, and many people were stranded and had to walk long distances home.',
      ru: '26 июля 2005 года в Мумбаи (Индия) выпало 944 мм осадков за 24 часа. Дороги и железнодорожные пути затопило, многие люди застряли и были вынуждены идти домой пешком на большие расстояния.',
    },
    prompt: {
      en: '(a) Describe the rainfall that caused the flood. [2]\n\n(b) Explain how impermeable surfaces and the drainage system increase the risk of urban flooding. [4]\n\n(c) Suggest two social factors that increase the vulnerability of people living in low-lying informal settlements. [4]',
      ru: '(a) Опишите ливень, который вызвал наводнение. [2]\n\n(b) Объясните, как водонепроницаемые поверхности и система дренажа повышают риск городского наводнения. [4]\n\n(c) Предложите два социальных фактора, которые повышают уязвимость людей, живущих в низинных неформальных районах. [4]',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for the extreme amount, 944 mm in 24 hours. 1 mark for a second point that links the rain to the flooding, for example: the rain fell in one day, faster than the drains could remove the water, so roads and railway lines flooded.\n\n(b) 4 marks, 1 per developed point: 1 mark: impermeable surfaces (concrete, asphalt, roofs) stop water soaking in, so more water runs off. 1 mark: the runoff reaches the drains quickly, so the peak flow is higher. 1 mark: drains that are too small, blocked or overloaded cannot remove the water. 1 mark: loss of natural drainage (open land, wetlands) or building on low-lying land adds to the flood, if linked to the flooding.\n\n(c) 4 marks, 2 per factor (1 for naming it, 1 for developing it). Examples: poverty, so households cannot pay to repair or move and losses are greater; homes built from weak materials on flood-prone land; limited access to warnings, transport or insurance; dependence on daily wages, so one missed day of work causes hardship. Accept any two factors with a developed link.',
      ru: '(a) 2 балла: 1 балл за экстремальное количество осадков — 944 мм за 24 часа. 1 балл за второй пункт, связанный с наводнением, например: дождь выпал за одни сутки, быстрее, чем дренаж мог отвести воду, и затопило дороги и железнодорожные пути.\n\n(b) 4 балла, по 1 баллу за каждый развитый пункт: 1 балл: водонепроницаемые поверхности (бетон, асфальт, крыши) не пропускают воду, поэтому больше воды стекает по поверхности. 1 балл: сток быстро попадает в ливневую канализацию, поэтому пиковый расход выше. 1 балл: ливневые стоки слишком малы, забиты или перегружены, и вода не уходит. 1 балл: потеря естественного дренажа (открытых участков, болот) или застройка низин усиливают наводнение, если это связано с затоплением.\n\n(c) 4 балла, по 2 балла за фактор (1 за название, 1 за объяснение). Примеры: бедность — нет денег на ремонт или переезд, поэтому потери больше; жильё из слабых материалов на подверженной паводкам земле; ограниченный доступ к предупреждениям, транспорту или страховке; зависимость от ежедневного заработка, поэтому один пропущенный рабочий день ведёт к нехватке денег. Засчитывается любой из двух факторов с развитой связью.',
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
        en: 'Plan the answer: two or three points for the view (exposure to flooding and heat in low-lying or informal areas; weak housing and drainage; less protection and fewer services), then two or three points against (traffic pollution and heat reach all income groups; wealthy districts can be congested and polluted; wealth buys protection).',
        ru: 'Составьте план: два-три довода за утверждение (подверженность наводнениям и жаре в низинах и неформальных районах; слабое жильё и дренаж; меньше защиты и услуг), затем два-три довода против (загрязнение транспортом и жара касаются всех групп доходов; в богатых районах тоже бывают заторы и загрязнение; деньги покупают защиту).',
      },
      {
        en: 'Use evidence: name at least one case with its year and a figure, for example Mumbai 2005 (944 mm in 24 hours; the low-lying Dharavi area and the Bandra-Kurla business district both flooded) or Kibera (170,070 in the 2009 census).',
        ru: 'Используйте примеры: назовите хотя бы один кейс с годом и цифрой, например Мумбаи 2005 (944 мм за 24 часа; низинный район Дхарави и деловой район Бандра-Курла были затоплены) или Кибера (170 070 человек по переписи 2009 года).',
      },
      {
        en: 'Use the terms correctly: exposure means being in the path of a hazard; vulnerability means how badly people are likely to be harmed; urban inequality is the gap between groups.',
        ru: 'Используйте термины точно: подверженность — нахождение на пути опасности; уязвимость — насколько сильно люди могут пострадать; городское неравенство — разрыв между группами.',
      },
      {
        en: 'Judgement: the top band needs a conclusion that depends on the type of stress. Floods and sanitation support the view more strongly than air pollution and heat, which affect every income group.',
        ru: 'Суждение: для высшего уровня нужен вывод, который зависит от типа нагрузки. Наводнения и санитария поддерживают утверждение сильнее, чем загрязнение воздуха и жара, которые касаются всех групп доходов.',
      },
      {
        en: 'Markband: Level 3 (7–10): both sides argued with evidence and a reasoned judgement. Level 2 (4–6): one side argued well, or both sides briefly. Level 1 (1–3): description only.',
        ru: 'Чек-лист markband: уровень 3 (7–10) — обе стороны с примерами и обоснованным суждением; уровень 2 (4–6) — одна сторона хорошо или обе кратко; уровень 1 (1–3) — только описание.',
      },
    ],
    markscheme: {
      en: 'Level 3 (7–10 marks): both sides of the view are argued with developed reasons and named evidence, and the answer reaches a reasoned judgement on the view. Level 2 (4–6 marks): one side is argued well with evidence, or both sides are argued briefly, with a limited judgement. Level 1 (1–3 marks): description of urban stress without reference to the view, or a list of problems without argument.\n\nPoints that can be credited. For the view: poor housing and drainage in low-lying or informal areas; less protection and fewer services; people who cannot afford to move or repair their homes. Against the view: traffic pollution and heat affect all income groups; wealthy central districts can be congested and polluted; wealth buys insurance, air conditioning and better housing. Evidence: a named case with a year and a figure. Judgement: depends on the type of stress and the conditions.',
      ru: 'Уровень 3 (7–10 баллов): обе стороны утверждения разобраны с развитыми доводами и конкретными примерами, в ответе дано обоснованное суждение. Уровень 2 (4–6 баллов): одна сторона разобрана хорошо или обе кратко, суждение ограничено. Уровень 1 (1–3 балла): описание городской нагрузки без связи с утверждением или перечень проблем без аргументов.\n\nПункты, которые засчитываются. За утверждение: плохое жильё и дренаж в низинах и неформальных районах; меньше защиты и услуг; люди не могут переехать или отремонтировать дом. Против: загрязнение транспортом и жара затрагивают все группы доходов; в богатых центральных районах тоже бывают заторы и загрязнение; деньги покупают страховку, кондиционирование и лучшее жильё. Пример: назван кейс с годом и цифрой. Суждение: зависит от типа нагрузки и условий.',
    },
    model: {
      en: 'The view is largely supported, but it needs qualifying. Low-income residents often occupy the most exposed land. In Mumbai in 2005, low-lying areas such as Dharavi, a large informal settlement, were waterlogged, and households in weak housing had little capacity to recover. However, wealth is not a complete protection. The Bandra-Kurla business district also flooded in 2005, and traffic pollution and heat in dense central areas affect people in every income group. Wealth does buy insurance, air conditioning, private water supplies and better housing, which reduce the impact of hazards. The evidence suggests that vulnerability depends more on income and access to services than on location alone, so the view holds for many urban stresses, though not all of them.',
      ru: 'Утверждение в целом подтверждается, но его нужно уточнить. Бедные жители часто живут на самых подверженных опасности участках: в Мумбаи в 2005 году затопило низинные районы, например Дхарави, крупное неформальное поселение, а семьи в ветхом жилье почти не имели возможности восстановиться. Однако богатство не даёт полной защиты. Деловой район Бандра-Курла тоже затопило в 2005 году, а загрязнение транспортом и жара в плотных центральных районах затрагивают людей всех групп доходов. Деньги действительно покупают страховку, кондиционирование, собственную воду и лучшее жильё, и это снижает влияние опасностей. Данные указывают, что уязвимость зависит от дохода и доступа к услугам больше, чем от места проживания, поэтому утверждение справедливо для многих городских нагрузок, но не для всех.',
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
        en: 'Define the terms in one sentence each: a hazard is the event; vulnerability is how likely people and property are to be harmed; risk combines the hazard with exposure and vulnerability.',
        ru: 'Дайте определения в одном предложении: опасность — событие; уязвимость — насколько вероятно, что людям и имуществу будет нанесён ущерб; риск — сочетание опасности с подверженностью и уязвимостью.',
      },
      {
        en: 'For the claim: the same 944 mm of rain in 24 hours harmed low-lying and poorly drained areas more than protected districts, so vulnerability decides who loses homes and income.',
        ru: 'За утверждение: одни и те же 944 мм за 24 часа нанесли больший ущерб низинным и плохо дренируемым районам, чем защищённым; уязвимость решает, кто теряет жильё и доход.',
      },
      {
        en: 'Against the claim: an extreme hazard overwhelms drainage and protection. 944 mm in 24 hours is far beyond what most urban drainage is designed to remove.',
        ru: 'Против утверждения: экстремальная опасность перегружает дренаж и защиту; 944 мм за 24 часа намного превышают то, на что рассчитан большинство городских дренажей.',
      },
      {
        en: 'Judgement with conditions: the claim holds for moderate or frequent hazards, where drainage, warnings and income make a large difference; for extreme events both the hazard and the vulnerability must be reduced.',
        ru: 'Суждение с условиями: утверждение работает для умеренных или частых опасностей, где дренаж, предупреждения и доход многое меняют; при экстремальных событиях нужно снижать и опасность, и уязвимость.',
      },
      {
        en: 'Markband: Level 3 (7–10): the extent is judged with evidence on both sides and clear conditions. Level 2 (4–6): one side argued well. Level 1 (1–3): definitions only.',
        ru: 'Чек-лист markband: уровень 3 (7–10) — степень оценена с примерами с обеих сторон и ясными условиями; уровень 2 (4–6) — одна сторона разобрана хорошо; уровень 1 (1–3) — только определения.',
      },
    ],
    markscheme: {
      en: 'Level 3 (7–10 marks): the extent is judged with developed evidence on both sides, and the answer states the conditions under which vulnerability matters more than the hazard. Level 2 (4–6 marks): one side is argued well, or both sides briefly, with a limited judgement. Level 1 (1–3 marks): definitions only, or a description of floods without reference to the question.\n\nPoints that can be credited. For vulnerability: poorly drained and low-lying areas suffer most; poverty limits recovery; warnings and insurance reduce losses. Against: extreme rainfall exceeds drainage capacity almost everywhere; the hazard sets the upper limit of damage; high-magnitude events cause harm in wealthy areas too. Judgement: the answer links the extent to the type of hazard and to the possibility of reducing both the hazard and the vulnerability.',
      ru: 'Уровень 3 (7–10 баллов): степень влияния оценена с развитыми доводами по обеим сторонам, и ответ указывает условия, при которых уязвимость важнее опасности. Уровень 2 (4–6 баллов): одна сторона разобрана хорошо или обе кратко, суждение ограничено. Уровень 1 (1–3 балла): только определения или описание наводнения без связи с вопросом.\n\nПункты, которые засчитываются. За уязвимость: низинные и плохо дренируемые районы страдают сильнее всего; бедность ограничивает восстановление; предупреждения и страховка уменьшают потери. Против: экстремальные осадки превышают пропускную способность дренажа почти везде; опасность задаёт верхний предел ущерба; сильные события наносят вред и богатым районам. Суждение: ответ связывает степень влияния с типом опасности и с возможностью снижать и опасность, и уязвимость.',
    },
    model: {
      en: 'The claim is partly valid. Risk combines a hazard with the vulnerability of people and property, and vulnerability explains much of the variation in harm within a city. In Mumbai in 2005 the flood waters reached low-lying pockets such as Dharavi, where weak housing and poor drainage increased losses, while better protected areas recovered faster. However, the hazard cannot be ignored. Rainfall of 944 mm in 24 hours is far beyond what most urban drainage is designed to remove, so even well-built areas were affected. The claim holds for moderate or frequent hazards, where drainage, warnings and income make a large difference. For extreme events, reducing the hazard as well as vulnerability is essential. On balance, vulnerability is the more controllable factor, but the claim overstates its dominance.',
      ru: 'Утверждение справедливо лишь частично. Риск сочетает опасность с уязвимостью людей и имущества, и уязвимость объясняет большую часть различий в ущербе внутри города. В Мумбаи в 2005 году вода затопила низинные участки, например Дхарави, где слабое жильё и плохой дренаж увеличили потери, а лучше защищённые районы восстанавливались быстрее. Однако опасность нельзя сбрасывать со счетов. 944 мм осадков за 24 часа намного превышают то, на что рассчитан большинство городских дренажей, поэтому пострадали даже хорошо построенные районы. Утверждение работает для умеренных или частых опасностей, где дренаж, предупреждения и доход многое меняют. При экстремальных событиях необходимо снижать и опасность, и уязвимость. В итоге уязвимость — более управляемый фактор, но утверждение переоценивает её доминирование.',
    },
    origin: 'original',
    minutes: 30,
  },
];
