import type { Question } from '../../../../src/contract/types';

// Option A, A.2: original questions in the style of Paper 1. Structured questions carry 10 marks in total,
// extended questions 10 marks each with a plan, a markband and a model answer. Numbers in stimuli are illustrative.
export const questions: Question[] = [
  {
    id: 'a2-sq1',
    subject: 'geo',
    topicIds: ['a2-flooding'],
    paper: 'P1',
    marks: 10,
    command: 'Describe',
    stimulus: {
      en: 'Illustrative data (not real). A storm brings rain to two catchments of similar size, with the storm centre at 10:00 in both. Discharge at the outlet of each catchment (cubic metres per second):\n\nRural catchment: 10:00 = 3; 12:00 = 6; 14:00 = 11; 16:00 = 18 (peak); 18:00 = 9.\n\nUrban catchment: 10:00 = 4; 10:30 = 15; 11:00 = 36 (peak); 12:00 = 22; 13:00 = 10.',
      ru: 'Условные данные (не реальные). Шторм приносит дождь на два водосбора сходного размера; центр ливня в обоих случаях приходится на 10:00. Расход на выходе из каждого водосбора (м³/с):\n\nСельский водосбор: 10:00 = 3; 12:00 = 6; 14:00 = 11; 16:00 = 18 (пик); 18:00 = 9.\n\nГородской водосбор: 10:00 = 4; 10:30 = 15; 11:00 = 36 (пик); 12:00 = 22; 13:00 = 10.',
    },
    prompt: {
      en: '(a) Describe the shape of the urban catchment hydrograph between 10:00 and 13:00. Use figures from the data. (3 marks)\n\n(b) Calculate the percentage increase in peak discharge in the urban catchment compared with the rural catchment. Show your working and give your answer as a percentage. (2 marks)\n\n(c) Explain why the urban catchment has a shorter lag time and a higher peak discharge than the rural catchment. (5 marks)',
      ru: '(a) Опишите форму гидрографа городского водосбора между 10:00 и 13:00. Используйте цифры из данных. (3 балла)\n\n(b) Рассчитайте процентное увеличение пикового расхода в городском водосборе по сравнению с сельским. Покажите ход расчёта и дайте ответ в процентах. (2 балла)\n\n(c) Объясните, почему у городского водосбора время запаздывания короче, а пиковый расход выше, чем у сельского. (5 баллов)',
    },
    markscheme: {
      en: '(a) 3 marks: 1 mark for a steep rising limb (4 to 36 m³/s between 10:00 and 11:00); 1 mark for identifying the peak of 36 m³/s at 11:00; 1 mark for a falling limb down to 10 m³/s by 13:00. Accept any accurate figure from the data.\n\n(b) 2 marks: 1 mark for the method, (36 − 18) ÷ 18 × 100; 1 mark for 100% (the peak doubles).\n\n(c) 5 marks: up to 2 marks for each of two developed reasons, each identified and explained; 1 mark for linking the reasons to the shape of the hydrograph (a steeper rising limb and an earlier peak). Reasons: impermeable surfaces (roads, car parks, roofs) reduce infiltration, so more rain becomes surface runoff; drains, gutters and sewers move the water quickly, so it arrives sooner; less vegetation and soil storage means less water is held back, so a larger volume reaches the river at once.',
      ru: '(a) 3 балла: 1 балл за резко растущую восходящую ветвь (с 4 до 36 м³/с между 10:00 и 11:00); 1 балл за указание пика 36 м³/с в 11:00; 1 балл за нисходящую ветвь до 10 м³/с к 13:00. Принимается любая верная цифра из данных.\n\n(b) 2 балла: 1 балл за метод, (36 − 18) ÷ 18 × 100; 1 балл за ответ 100% (пик удваивается).\n\n(c) 5 баллов: до 2 баллов за каждую из двух развитых причин, каждая названа и объяснена; 1 балл за связь причин с формой гидрографа (более крутая восходящая ветвь и более ранний пик). Причины: непроницаемые поверхности (дороги, стоянки, крыши) снижают инфильтрацию, поэтому больше дождя становится поверхностным стоком; дренажные системы, водостоки и канализация быстро отводят воду, поэтому она приходит раньше; меньше растительности и почвенного хранения означает, что меньше воды задерживается, поэтому в реку сразу поступает больший объём.',
    },
    model: {
      en: '(a) Between 10:00 and 11:00 the discharge rises steeply from 4 to 36 m³/s, which is the peak. It then falls to 22 m³/s at 12:00 and to 10 m³/s by 13:00.\n\n(b) (36 − 18) ÷ 18 × 100 = 100%, so the peak discharge doubles.\n\n(c) The urban catchment is covered by impermeable surfaces such as roads, car parks and roofs, so less rain infiltrates and more becomes surface runoff. Drains, gutters and sewers carry this water quickly to the river, so the lag time is about one hour and the rising limb is steep. Because little water is held in soil or vegetation, a large volume reaches the river at once, which produces an early and high peak of 36 m³/s. The rural catchment has more infiltration and vegetation storage, so its water arrives slowly and its peak is lower, at 18 m³/s at 16:00.',
      ru: '(a) Между 10:00 и 11:00 расход резко растёт с 4 до 36 м³/с — это пик. Затем он падает до 22 м³/с в 12:00 и до 10 м³/с к 13:00.\n\n(b) (36 − 18) ÷ 18 × 100 = 100%, то есть пиковый расход удваивается.\n\n(c) Городской водосбор покрыт непроницаемыми поверхностями — дорогами, стоянками и крышами, поэтому меньше дождя впитывается и больше стекает по поверхности. Дренажные системы, водостоки и канализация быстро направляют эту воду в реку, поэтому время запаздывания составляет около часа, а восходящая ветвь крутая. Так как почва и растительность почти не задерживают воду, в реку сразу поступает большой объём, что даёт ранний и высокий пик 36 м³/с. У сельского водосбора больше инфильтрации и задержки растительностью, поэтому вода приходит медленно, а пик ниже: 18 м³/с в 16:00.',
    },
    answer: '100',
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a2-sq2',
    subject: 'geo',
    topicIds: ['a2-flooding'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    stimulus: {
      en: 'Illustrative data (not real). A storm drops 50 mm of rain on four land-use zones in one day. Surface runoff recorded in each zone: forest 8 mm; farmland 15 mm; suburbs 27 mm; city centre 40 mm.',
      ru: 'Условные данные (не реальные). За один день шторм приносит 50 мм осадков на четыре зоны с разным землепользованием. Поверхностный сток, зафиксированный в каждой зоне: лес — 8 мм; сельскохозяйственные угодья — 15 мм; пригород — 27 мм; центр города — 40 мм.',
    },
    prompt: {
      en: '(a) Calculate the percentage of the rainfall that became surface runoff in the city centre. Show your working. (2 marks)\n\n(b) Explain two human causes of the increase in surface runoff from the forest to the city centre. (4 marks)\n\n(c) Explain one soft engineering measure that could reduce surface runoff in the city centre, and one limitation of that measure. (4 marks)',
      ru: '(a) Рассчитайте, какая доля осадков стала поверхностным стоком в центре города. Покажите ход расчёта. (2 балла)\n\n(b) Объясните две антропогенные причины роста поверхностного стока от леса к центру города. (4 балла)\n\n(c) Объясните одну мягкую инженерную меру, которая может снизить поверхностный сток в центре города, и одно ограничение этой меры. (4 балла)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for the method, 40 ÷ 50 × 100; 1 mark for 80%.\n\n(b) 4 marks: up to 2 marks for each cause, 1 mark to identify it and 1 mark to explain how it increases runoff. Accept, for example: impermeable surfaces (roads, roofs, car parks) that stop infiltration; drainage networks (gutters and sewers) that move water quickly; removal of trees and vegetation that would otherwise intercept rain and hold water in the soil; building on floodplains or channelising streams.\n\n(c) 4 marks: up to 2 marks for the measure (1 mark to identify it, 1 mark to explain how it reduces runoff, for example green roofs, permeable paving or rain gardens); 1 mark for a limitation (for example cost, lack of space in a dense centre, or maintenance); 1 mark for linking the limitation to the city centre.',
      ru: '(a) 2 балла: 1 балл за метод, 40 ÷ 50 × 100; 1 балл за ответ 80%.\n\n(b) 4 балла: до 2 баллов за каждую причину, 1 балл за её название и 1 балл за объяснение, как она увеличивает сток. Засчитываются, например: непроницаемые поверхности (дороги, крыши, стоянки), которые не дают воде впитываться; дренажные сети (водостоки и канализация), которые быстро отводят воду; вырубка деревьев и растительности, которые иначе перехватывали бы дождь и удерживали воду в почве; застройка пойм или спрямление ручьёв.\n\n(c) 4 балла: до 2 баллов за меру (1 балл за её название и 1 балл за объяснение, как она снижает сток, например зелёные крыши, проницаемое покрытие или дождевые сады); 1 балл за ограничение (например, стоимость, нехватка места в плотном центре или обслуживание); 1 балл за связь ограничения с центром города.',
    },
    model: {
      en: '(a) 40 ÷ 50 × 100 = 80%, so 80% of the rainfall in the city centre became surface runoff.\n\n(b) First, impermeable surfaces such as roads, car parks and roofs cover much of the city, so rain cannot soak into the ground and runs off at once. Second, the drainage network of gutters, drains and sewers moves that water quickly into rivers, which raises the peak flow and shortens the lag time. Forest, by contrast, intercepts rain on its leaves and lets water infiltrate through litter and soil, so only 16% of the rain (8 mm of 50 mm) became runoff.\n\n(c) Green roofs can hold rainwater and release it slowly, which reduces runoff from buildings. A limitation is cost: retrofitting existing buildings in a dense city centre is expensive and needs maintenance, and there is little space for new features.',
      ru: '(a) 40 ÷ 50 × 100 = 80%, то есть 80% осадков в центре города стали поверхностным стоком.\n\n(b) Во-первых, непроницаемые поверхности — дороги, стоянки и крыши — занимают большую часть города, поэтому дождь не уходит в грунт и сразу стекает. Во-вторых, дренажная сеть из водостоков и канализации быстро направляет эту воду в реки, что повышает пиковый расход и сокращает время запаздывания. Лес, напротив, перехватывает дождь листвой и пропускает воду через подстилку и почву, поэтому в сток превратилось только 16% осадков (8 мм из 50 мм).\n\n(c) Зелёные крыши могут удерживать дождевую воду и медленно её отдавать, что снижает сток с застроенных участков. Ограничение здесь — стоимость: переоборудование существующих зданий в плотном центре дорого и требует обслуживания, а места для новых решений мало.',
    },
    answer: '80',
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a2-sq3',
    subject: 'geo',
    topicIds: ['a2-flooding'],
    paper: 'P1',
    marks: 10,
    command: 'Suggest',
    prompt: {
      en: '(a) Define the term hard engineering. (2 marks)\n\n(b) Describe two hard engineering measures that could reduce flood risk on a river floodplain. (3 marks)\n\n(c) Suggest one soft engineering strategy for a city on a floodplain in a country with limited funding. Justify your choice. (5 marks)',
      ru: '(a) Дайте определение термину «жёсткие инженерные меры» (hard engineering). (2 балла)\n\n(b) Опишите две жёсткие инженерные меры, которые могут снизить риск наводнений на пойме реки. (3 балла)\n\n(c) Предложите одну мягкую инженерную стратегию для города на пойме в стране с ограниченным финансированием. Обоснуйте свой выбор. (5 баллов)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for structures built from concrete, steel or earth that control the flow of water; 1 mark for an example, such as a dam, levee, flood wall or barrier.\n\n(b) 3 marks: 1 mark for each of two measures described (for example, a levee raised along the river; a flood relief channel taking water around the town; a channel deepened or lined), and 1 mark for explaining how one of them lowers flood levels or protects the floodplain.\n\n(c) 5 marks: up to 2 marks for the strategy identified and explained (for example, floodplain zoning that keeps new housing out of the high-risk zone); up to 2 marks for a justification linked to the funding context (low cost compared with major structures, and a quicker start); 1 mark for an evaluation, such as a limitation for a city where housing on the floodplain already exists, or weak enforcement.',
      ru: '(a) 2 балла: 1 балл за сооружения из бетона, стали или грунта, которые регулируют течение воды; 1 балл за пример, например плотина, дамба обвалования, защитная стена или барьер.\n\n(b) 3 балла: по 1 баллу за каждую из двух описанных мер (например, дамба обвалования, поднятая вдоль реки; разгрузочный канал, отводящий воду в обход города; углублённое или облицованное русло) и 1 балл за объяснение, как одна из них снижает уровень воды или защищает пойму.\n\n(c) 5 баллов: до 2 баллов за стратегию, названную и объяснённую (например, зонирование пойм, которое не допускает нового жилья в зоне высокого риска); до 2 баллов за обоснование, связанное с финансовым контекстом (низкая стоимость по сравнению с крупными сооружениями и быстрый старт); 1 балл за оценку, например ограничение для города, где жильё на пойме уже построено, или слабый контроль исполнения.',
    },
    model: {
      en: '(a) Hard engineering is flood management that uses concrete, steel and earth structures to control the flow of water, such as dams, levees or flood walls.\n\n(b) A levee is a raised embankment along the river that holds floodwater inside the channel, so the water does not spread over the floodplain. A flood relief channel is an artificial channel that carries part of the river’s flood flow around a town, which lowers the water level in the main channel and reduces the risk for the town.\n\n(c) Floodplain zoning is a soft strategy in which planners decide where building is allowed according to flood risk. It keeps new housing out of the high-risk zone, so fewer people and buildings are exposed, and it is inexpensive compared with large structures. Its limitation is that it does nothing for existing housing already on the floodplain, so in a city with limited funding, enforcement and the relocation or adaptation of those homes are still needed.',
      ru: '(a) Жёсткие инженерные меры — это управление паводками с помощью бетонных, стальных и земляных сооружений, которые регулируют течение воды, например плотин, дамб или защитных стен.\n\n(b) Дамба обвалования — это поднятый вдоль реки вал, который удерживает паводковую воду внутри русла, поэтому она не разливается по пойме. Разгрузочный канал — это искусственный канал, который отводит часть паводкового расхода реки в обход города; это снижает уровень воды в основном русле и уменьшает риск для города.\n\n(c) Зонирование пойм — мягкая стратегия, при которой планировщики определяют, где можно строить, в зависимости от риска наводнений. Оно не допускает нового жилья в зоне высокого риска, поэтому меньше людей и зданий оказываются под угрозой, и оно недорого по сравнению с крупными сооружениями. Его ограничение в том, что оно ничего не делает для уже существующего жилья на пойме, поэтому в городе с ограниченным финансированием всё равно нужны контроль, переселение или адаптация этих домов.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a2-eq1',
    subject: 'geo',
    topicIds: ['a2-flooding'],
    paper: 'P1',
    marks: 10,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the use of hard engineering to reduce flood risk in one named river basin or coastal area.',
      ru: 'Оцените использование жёстких инженерных мер для снижения риска наводнений в одном названном речном бассейне или прибрежной зоне.',
    },
    hints: [
  {
    "en": "Name the Dutch river system and identify the actual measure, rather than treating the whole programme as one flood wall.",
    "ru": "Назови речную систему Нидерландов и конкретную меру; не считай всю программу одной защитной стеной."
  },
  {
    "en": "Explain how side channels or relocated dikes alter conveyance and space for water. Separate the mechanism from programme-wide reported outcomes.",
    "ru": "Объясни, как боковые протоки или перенос дамб меняют пропускную способность и пространство для воды. Отличай механизм от итогов всей программы."
  },
  {
    "en": "Evaluate land requirements, relocation, lifetime management, design limits and possible effects elsewhere. Avoid assuming every scheme transfers risk downstream.",
    "ru": "Оцени потребность в земле, переселение, обслуживание, расчётные пределы и возможное влияние на другие участки. Не считай перенос риска вниз неизбежным."
  },
  {
    "en": "Reach a basin-specific judgement with residual risk and complementary measures.",
    "ru": "Сформулируй вывод для этого бассейна, учитывая остаточный риск и дополнительные меры."
  }
],
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Use the named basin or coast requested. Identify the actual engineering measure, then evaluate outcomes, design limits, costs and interaction with other measures; integrated-programme results do not isolate one structure.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Разбери запрошенный названный бассейн или берег. Укажи конкретную инженерную меру, оцени результат, расчётные пределы, затраты и сочетание с другими мерами; эффект программы не равен эффекту одного сооружения.",
    },
    model: {
  "en": "Hard engineering changes water movement through constructed works such as dikes, barriers or relief channels. In the Dutch river system, such measures can reduce high-water levels or prevent inundation, but effectiveness must be judged against a design event, costs and effects elsewhere in the system.\n\nRijkswaterstaat reports that Room for the River operated at 34 locations in 2006–2019, cost €2.3 billion and improved safety for around four million people. Its methods included relocating dikes, adding side channels and lowering floodplains. A side channel can provide additional conveyance, while a relocated dike gives high flows more room. These mechanisms are relevant to hard engineering, but the figures describe an integrated programme that also restored space for the river. They do not establish the benefit of a single wall or prove that conventional embankments alone produced the outcome.\n\nThe programme illustrates both opportunity and constraint. Making room can reduce high-water pressure while improving spatial quality, yet requires land and can involve relocation. Structures and channels require management; their performance depends on the flow and the condition of the wider system. An intervention that accelerates conveyance might change downstream peaks, but that is a possibility requiring hydraulic assessment, not an inevitable outcome of every project.\n\nHard engineering is therefore valuable where a specified design and location address a demonstrated hazard and the benefits justify lifetime costs and impacts. The Dutch case supports coordinated basin management rather than an unconditional verdict for or against structures. Residual risk remains, so warnings, preparedness and land-use decisions still matter even after a scheme is completed.",
  "ru": "Жёсткие инженерные меры изменяют движение воды с помощью сооружений: дамб, барьеров или разгрузочных каналов. В речной системе Нидерландов они способны снизить высокий уровень воды или предотвратить затопление, но эффективность нужно оценивать относительно расчётного события, затрат и последствий для других участков.\n\nПо данным Rijkswaterstaat, программа Room for the River охватила 34 участка в 2006–2019 годах, стоила 2,3 млрд евро и повысила безопасность примерно четырёх миллионов человек. Применялись перенос дамб, боковые протоки и понижение поймы. Дополнительная протока может увеличить пропускную способность, а перенос дамбы освобождает место для высокой воды. Эти механизмы связаны с инженерными работами, но приведённые итоги относятся ко всей комплексной программе, возвращавшей пространство реке. Они не измеряют пользу отдельной стены и не доказывают результат одних традиционных дамб.\n\nПрограмма показывает возможности и ограничения. Пространство для реки может уменьшить подпор при высокой воде и улучшить среду, но требует земли и иногда переселения. Сооружения и русла нуждаются в управлении; результат зависит от расхода и состояния всей системы. Ускорение прохождения воды способно изменить пик ниже по течению, однако это проверяемая гидравлическая возможность, а не обязательное следствие любого проекта.\n\nИтак, инженерные меры полезны, когда конкретный проект решает установленную проблему, а выгоды оправдывают затраты за весь срок службы и побочные последствия. Нидерландский пример поддерживает согласованное управление бассейном, а не безусловное одобрение или отрицание сооружений. Остаточный риск сохраняется, поэтому предупреждение, подготовка и регулирование застройки важны и после завершения работ."
},
    origin: 'original',
    minutes: 30,
  },
  {
    id: 'a2-eq2',
    subject: 'geo',
    topicIds: ['a2-flooding'],
    paper: 'P1',
    marks: 10,
    command: 'To what extent',
    prompt: {
      en: 'To what extent can soft engineering reduce flood risk in a city that is already built up?',
      ru: 'В какой степени мягкие инженерные меры могут снизить риск наводнений в городе, который уже застроен?',
    },
    hints: [
  {
    "en": "Separate changes in hazard, exposure, vulnerability and financial recovery. Insurance does not prevent physical damage.",
    "ru": "Раздели изменение опасности, подверженности, уязвимости и финансовое восстановление. Страхование не предотвращает физический ущерб."
  },
  {
    "en": "Use Boscastle: the 2014 Environment Agency account names community plans and warning alongside channel works. Explain the warning mechanism and its conditions.",
    "ru": "Используй Боскасл: в сообщении Environment Agency 2014 года названы общественные планы и предупреждение наряду с русловыми работами. Объясни механизм предупреждения и условия его действия."
  },
  {
    "en": "Assess available land, storage, catchment scale and existing buildings. Do not infer an urban strategy’s effect from a national disaster total.",
    "ru": "Оцени доступную землю, ёмкость, масштаб бассейна и существующие здания. Не выводи эффект городской стратегии из национального итога катастрофы."
  },
  {
    "en": "Judge achievable risk reduction for a specified event; integrated outcomes do not isolate one component.",
    "ru": "Оцени достижимое снижение риска для определённого события; итог комплекса мер не измеряет отдельный компонент."
  }
],
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Assess existing development, available space and implementation. Distinguish reducing hazard or exposure from transferring financial loss; compare residual risk and complementary measures.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Оцени существующую застройку, доступное пространство и реализацию. Различай снижение опасности или подверженности и перенос финансовых потерь; сравни остаточный риск и дополняющие меры.",
    },
    model: {
  "en": "Soft approaches seek to reduce flood consequences through land use, preparedness and working with storage and infiltration, rather than relying only on barriers. In a built-up city they can change future exposure and how people respond, although existing buildings and competing land uses constrain some options.\n\nBoscastle provides a concrete example of using preparedness alongside physical works. The Environment Agency’s 2014 account describes community flood plans and a warning service as well as channel and bridge changes. A warning can give people time to avoid a dangerous route or move possessions if it arrives, is understood and can be acted on. It does not lower the water level itself. Similarly, insurance can spread financial loss and support recovery; payment after a flood does not remove exposure or reverse physical damage. These measures act through different pathways and should not be counted as the same reduction.\n\nPlanning can prevent additional development in hazardous locations or require more resilient layouts. Existing settlement makes relocation difficult, but does not make every change impossible. Available parks, upstream storage and changes to paved areas can be assessed for their effect on runoff; the scale must match the relevant catchment and event. A city’s actual storage volume and routing matter more than a general label of soft engineering.\n\nThe Boscastle account cannot isolate what share of protection came from warnings rather than channel works. It supports coordination, not proof that soft approaches are always insufficient. Their achievable effect depends on warning lead time, access, land and the hazard. A justified strategy compares the remaining risk and costs of specific combinations instead of assuming that every large flood requires the same engineering response.",
  "ru": "Мягкие подходы снижают последствия наводнений через землепользование, подготовку, накопление и впитывание воды, а не только с помощью барьеров. В застроенном городе они способны изменить будущую подверженность и действия людей, хотя существующие здания и конкуренция за землю ограничивают часть решений.\n\nБоскасл даёт конкретный пример сочетания подготовки с физическими работами. В сообщении Environment Agency 2014 года наряду с изменением русла и мостов описаны общественные планы действий и служба предупреждения. Предупреждение может дать время избежать опасного маршрута или перенести вещи, если оно дошло, понятно и люди способны действовать. Само по себе оно не снижает уровень воды. Страхование распределяет финансовые потери и помогает восстановлению; выплата после паводка не устраняет подверженность и не отменяет физический ущерб. Это разные механизмы, и их нельзя считать одним и тем же снижением риска.\n\nПланирование может ограничить новую застройку опасных участков или потребовать более устойчивой планировки. Существующие поселения затрудняют переселение, но не исключают любых изменений. Можно оценить, как парки, запасы выше по течению и изменение покрытий повлияют на сток; масштаб должен соответствовать бассейну и событию. Реальная ёмкость и пути движения воды важнее общего названия «мягкие меры».\n\nСообщение о Боскасле не выделяет долю защиты от предупреждений отдельно от русловых работ. Оно поддерживает согласование мер, но не доказывает, что мягких подходов всегда недостаточно. Результат зависит от времени предупреждения, доступности действий, земли и характера паводка. Обоснованная стратегия сравнивает остаточный риск и затраты конкретных сочетаний, а не требует одного инженерного решения для любого крупного наводнения."
},
    origin: 'original',
    minutes: 30,
  },
];
