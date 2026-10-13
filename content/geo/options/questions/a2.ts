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
      en: 'Illustrative data (not real). A storm brings rain to two catchments of similar size, with the rainfall peak at 10:00 in both. Discharge at the outlet of each catchment (cubic metres per second):\n\nRural catchment: 10:00 = 3; 12:00 = 6; 14:00 = 11; 16:00 = 18 (peak); 18:00 = 9.\n\nUrban catchment: 10:00 = 4; 10:30 = 15; 11:00 = 36 (peak); 12:00 = 22; 13:00 = 10.',
      ru: 'Условные данные (не реальные). Шторм приносит дождь на два водосбора сходного размера; пик осадков в обоих случаях приходится на 10:00. Расход на выходе из каждого водосбора (м³/с):\n\nСельский водосбор: 10:00 = 3; 12:00 = 6; 14:00 = 11; 16:00 = 18 (пик); 18:00 = 9.\n\nГородской водосбор: 10:00 = 4; 10:30 = 15; 11:00 = 36 (пик); 12:00 = 22; 13:00 = 10.',
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
        en: 'Plan: define hard engineering, name the river basin or coastal area and state the flood problem it faces, such as a river that overflows or a low coast.',
        ru: 'План: определите жёсткие инженерные меры, назовите речной бассейн или прибрежную зону и опишите проблему наводнений, например река, которая выходит из берегов, или низкий берег.',
      },
      {
        en: 'Strengths: structures give direct protection up to a set design standard and can protect many people. The Dutch Room for the River programme improved safety for around 4 million people at 34 locations (Rijkswaterstaat).',
        ru: 'Сильные стороны: сооружения дают прямую защиту до расчётного уровня и могут защитить многих людей. Нидерландская программа Room for the River повысила безопасность примерно для 4 млн человек на 34 участках (Rijkswaterstaat).',
      },
      {
        en: 'Weaknesses: cost (€2.3 billion for Room for the River), maintenance, the risk of overtopping, damage to habitats and the transfer of risk downstream.',
        ru: 'Слабые стороны: стоимость (2,3 млрд евро у Room for the River), обслуживание, риск перелива через сооружения, ущерб местообитаниям и перенос риска вниз по течению.',
      },
      {
        en: 'Judgement (top band): weigh the benefits against the costs and say under which conditions hard engineering works best, for example when combined with planning and warnings.',
        ru: 'Вывод (высший уровень): взвесьте выгоды и издержки и укажите, при каких условиях жёсткие меры работают лучше всего, например в сочетании с планированием и предупреждениями.',
      },
    ],
    markscheme: {
      en: 'Level 1 (1–3 marks): describes a hard engineering measure or lists its features, with no link to a river basin and no judgement.\n\nLevel 2 (4–6 marks): explains at least one benefit and one limitation of hard engineering, with limited or no case evidence.\n\nLevel 3 (7–8 marks): evaluates benefits and costs using a named case with a figure and a date, with some judgement.\n\nLevel 4 (9–10 marks): sustained evaluation that weighs costs, benefits and side effects, uses dated evidence, and reaches a supported judgement about when hard engineering works best.',
      ru: 'Уровень 1 (1–3 балла): описывает жёсткую меру или перечисляет её признаки, без связи с речным бассейном и без вывода.\n\nУровень 2 (4–6 баллов): объясняет минимум одну выгоду и одну слабую сторону жёстких мер, с ограниченным или отсутствующим кейсом.\n\nУровень 3 (7–8 баллов): оценивает выгоды и издержки на примере названного кейса с цифрой и датой, с некоторым выводом.\n\nУровень 4 (9–10 баллов): последовательная оценка, которая взвешивает издержки, выгоды и побочные эффекты, опирается на данные с датами и приходит к обоснованному выводу о том, когда жёсткие меры работают лучше всего.',
    },
    model: {
      en: 'Hard engineering can reduce flood risk effectively, but its value depends on design, cost and how it is combined with other measures. In the Netherlands, the Room for the River programme changed river channels and floodplains at 34 locations between 2006 and 2019, at a cost of €2.3 billion, and improved safety for around 4 million people (Rijkswaterstaat). The Reevediep flood channel, opened in early 2019, shows how a relief channel can lower water levels in the main river. However, the costs are high, the structures need maintenance, and changing one stretch of river can move the flood to other places. Hard engineering also works best as part of a wider plan, such as the national use of dikes, dunes and storm surge barriers. Overall, it reduces risk well for the design standard it was built for, but it cannot remove risk completely.',
      ru: 'Жёсткие инженерные меры могут эффективно снижать риск наводнений, но их ценность зависит от проекта, стоимости и того, как они сочетаются с другими мерами. В Нидерландах программа Room for the River с 2006 по 2019 год изменила русла рек и поймы на 34 участках, потратив 2,3 млрд евро, и повысила безопасность примерно для 4 млн человек (Rijkswaterstaat). Разгрузочный канал Reevediep, открытый в начале 2019 года, показывает, как канал может снизить уровень воды в главной реке. Однако меры дорогие, сооружения требуют обслуживания, а изменение одного участка реки может переместить паводок на другие территории. Жёсткие меры также лучше всего работают как часть более широкого плана, например национальной системы из дамб, дюн и штормовых барьеров. В целом они хорошо снижают риск для расчётного уровня, на который рассчитаны, но полностью устранить риск не могут.',
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
        en: 'Plan: define soft engineering and describe an already built-up city, where most of the land is in use and cannot easily be changed.',
        ru: 'План: определите мягкие меры и опишите уже застроенный город, где большая часть земли уже используется и её трудно изменить.',
      },
      {
        en: 'For: zoning and building design limit the risk of new development; insurance and preparedness reduce losses and speed recovery; afforestation and flood storage can slow water in smaller floods.',
        ru: 'За: зонирование и проектирование зданий ограничивают риск новой застройки; страхование и подготовка уменьшают потери и ускоряют восстановление; облесение и аккумуляция воды могут замедлить воду при небольших паводках.',
      },
      {
        en: 'Against: existing homes on the floodplain cannot easily be moved; soft measures often have a limited effect on the largest floods; many measures need funding, enforcement and years to show results.',
        ru: 'Против: существующие дома на пойме нелегко переселить; мягкие меры часто слабо влияют на самые крупные паводки; многим мерам нужны финансирование, контроль и годы, чтобы дать результат.',
      },
      {
        en: 'Judgement (top band): give a view on how far soft measures reduce risk in built-up cities, and what they need in order to work, for example hard measures for the largest floods or a combined strategy.',
        ru: 'Вывод (высший уровень): дайте оценку того, насколько мягкие меры снижают риск в застроенных городах и что им нужно для работы, например жёсткие меры для самых крупных паводков или комбинированная стратегия.',
      },
    ],
    markscheme: {
      en: 'Level 1 (1–3 marks): describes soft engineering measures or lists features of a built-up city, with no judgement.\n\nLevel 2 (4–6 marks): explains at least one way soft measures reduce risk and one limit, with limited case evidence.\n\nLevel 3 (7–8 marks): compares the strengths and limits of soft measures in a built-up city, using at least one case with a figure and a date.\n\nLevel 4 (9–10 marks): sustained judgement on how far soft measures reduce risk, weighing scale, funding and existing development, with dated evidence and a view on what else is needed.',
      ru: 'Уровень 1 (1–3 балла): описывает мягкие меры или перечисляет признаки застроенного города, без вывода.\n\nУровень 2 (4–6 баллов): объясняет минимум один способ, которым мягкие меры снижают риск, и одно ограничение, с ограниченным количеством примеров.\n\nУровень 3 (7–8 баллов): сравнивает сильные стороны и ограничения мягких мер в застроенном городе, опираясь минимум на один кейс с цифрой и датой.\n\nУровень 4 (9–10 баллов): последовательный вывод о том, насколько мягкие меры снижают риск, с учётом масштаба, финансирования и уже существующей застройки, с данными с датами и мнением о том, что ещё нужно.',
    },
    model: {
      en: 'Soft engineering can reduce flood risk in a built-up city, but on its own only to a limited extent. Floodplain zoning and building design can stop new development from adding to the risk, and insurance and preparedness reduce losses and help people recover. Afforestation and flood storage can slow water in smaller floods. However, most homes and roads in a built-up city already stand where they are, so zoning cannot move them, and many soft measures have little effect on the largest floods. For example, the 2022 floods in Pakistan affected 33 million people and killed more than 1,730, with damage and losses above USD 30 billion (World Bank, 2022). This shows how heavy the human cost can be for poorer communities when a flood of this scale arrives. Soft measures are therefore most effective when combined with hard measures for the largest floods, rather than as a complete solution on their own.',
      ru: 'Мягкие инженерные меры могут снизить риск наводнений в застроенном городе, но сами по себе — лишь в ограниченной степени. Зонирование пойм и проектирование зданий не дают новой застройке увеличивать риск, а страхование и подготовка уменьшают потери и помогают людям восстановиться. Облесение и аккумуляция воды могут замедлить воду при небольших паводках. Однако большинство домов и дорог в застроенном городе уже стоит там, где стоит, поэтому зонирование не может их переместить, а многие мягкие меры слабо влияют на самые крупные паводки. Например, паводки 2022 года в Пакистане затронули 33 млн человек, унесли более 1730 жизней, а ущерб и потери превысили 30 млрд долларов США (Всемирный банк, 2022). Это показывает, каким тяжёлым может быть вред для бедных сообществ, когда приходит паводок такого масштаба. Поэтому мягкие меры наиболее эффективны в сочетании с жёсткими мерами для самых крупных паводков, а не как полное решение сами по себе.',
    },
    origin: 'original',
    minutes: 30,
  },
];
