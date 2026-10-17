import type { Question } from '../../../../src/contract/types';

// Option A, A.1: original questions in the style of Paper 1. Structured questions carry 10 marks in total,
// extended questions 10 marks each with a plan, a markband and a model answer.
export const questions: Question[] = [
  {
    id: 'a1-sq1',
    subject: 'geo',
    topicIds: ['a1-drainage-basins'],
    paper: 'P1',
    marks: 10,
    command: 'Describe',
    stimulus: {
      en: 'Annual water balance of an illustrative drainage basin (illustrative data): precipitation 920 mm; discharge 410 mm; evapotranspiration 530 mm.',
      ru: 'Годовой водный баланс условного речного бассейна (условные данные): осадки 920 мм; сток 410 мм; эвапотранспирация 530 мм.',
    },
    prompt: {
      en: '(a) Calculate the change in storage (ΔS) for the year. Show your working. (2 marks)\n\n(b) Calculate the percentage of the year’s precipitation that left the basin as discharge. Show your working. (2 marks)\n\n(c) Describe the sequence of flows by which rain that soaks into the soil reaches the river channel. (4 marks)\n\n(d) Explain why a single storm can still cause a sharp rise in discharge, even when the annual water balance is close to zero. (2 marks)',
      ru: '(a) Рассчитайте изменение запасов воды (ΔS) за год. Покажите ход расчёта. (2 балла)\n\n(b) Рассчитайте, какой процент годовых осадков ушёл из бассейна со стоком. Покажите ход расчёта. (2 балла)\n\n(c) Опишите последовательность потоков, по которым дождевая вода, впитавшаяся в почву, попадает в русло реки. (4 балла)\n\n(d) Объясните, почему один ливень может вызвать резкий подъём расхода, даже если годовой водный баланс близок к нулю. (2 балла)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for the method ΔS = P − Q − E = 920 − 410 − 530; 1 mark for −20 mm, meaning that storage fell by 20 mm. Accept the opposite sign only if the answer states the sign convention used.\n\n(b) 2 marks: 1 mark for the method (410 ÷ 920) × 100; 1 mark for 44.6% (accept 44.5% to 44.6%).\n\n(c) 4 marks: 1 mark for each correct step in the sequence, up to 4 marks, for example: infiltration into the soil; throughflow sideways above the water table, or percolation down to the water table; groundwater flow or throughflow into the channel; channel flow to the outlet.\n\n(d) 2 marks: 1 mark for identifying quick flows (overland flow, or throughflow on wet soil) that carry storm rain to the channel within hours; 1 mark for explaining that the annual balance averages out the storm, because the change in storage over the year is small compared with the rainfall.',
      ru: '(a) 2 балла: 1 балл за метод ΔS = P − Q − E = 920 − 410 − 530; 1 балл за −20 мм, то есть запасы уменьшились на 20 мм. Противоположный знак засчитывается, только если в ответе названо принятое правило знаков.\n\n(b) 2 балла: 1 балл за метод (410 ÷ 920) × 100; 1 балл за 44,6% (засчитываются 44,5%–44,6%).\n\n(c) 4 балла: по 1 баллу за каждый правильный шаг последовательности, максимум 4 балла. Например: инфильтрация в почву; почвенный сток вбок над уровнем грунтовых вод или перколяция вниз до уровня грунтовых вод; подземный сток или почвенный сток, поступающий в русло; русловой сток к замыкающему створу.\n\n(d) 2 балла: 1 балл за указание на быстрые потоки (поверхностный сток или почвенный сток по влажной почве), которые доставляют воду ливня в русло за часы; 1 балл за объяснение, что годовой баланс сглаживает ливень, потому что изменение запасов за год мало по сравнению с осадками.',
    },
    model: {
      en: '(a) ΔS = P − Q − E = 920 − 410 − 530 = −20 mm. Storage fell by 20 mm over the year.\n(b) (410 ÷ 920) × 100 = 44.6%. About 45% of the year’s rain left the basin as discharge.\n(c) Rain infiltrates into the soil. Part of it percolates down to the water table and reaches the river slowly as groundwater flow. Another part moves sideways through the soil as throughflow, which is faster. Both reach the channel, and channel flow carries the water to the outlet.\n(d) A storm can raise overland flow and throughflow within hours, so discharge rises sharply above its average. The annual balance hides this, because the change in storage over the year (−20 mm) is small compared with the rainfall (920 mm).',
      ru: '(a) ΔS = P − Q − E = 920 − 410 − 530 = −20 мм. За год запасы уменьшились на 20 мм.\n(b) (410 ÷ 920) × 100 = 44,6%. Около 45% годовых осадков ушло из бассейна со стоком.\n(c) Дождевая вода впитывается в почву. Часть её просачивается вниз до уровня грунтовых вод и медленно доходит до реки как подземный сток. Другая часть движется вбок через почву как почвенный сток, который быстрее. Оба потока доходят до русла, а русловой сток несёт воду к выходу.\n(d) Ливень может за часы поднять поверхностный и почвенный сток, и расход резко вырастает над средним уровнем. Годовой баланс это скрывает, потому что изменение запасов за год (−20 мм) мало по сравнению с осадками (920 мм).',
    },
    answer: '-20 mm; 44.6%',
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a1-sq2',
    subject: 'geo',
    topicIds: ['a1-drainage-basins'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    stimulus: {
      en: 'Storm hydrograph for an illustrative drainage basin of 40 km² after one storm (illustrative data). The storm centre is at 08:00. Discharge is 2.5 m³/s before the storm, begins to rise at 09:00 and peaks at 17.5 m³/s at 14:00. By 20:00 it has fallen to 6.0 m³/s.',
      ru: 'Гидрограф паводка для условного речного бассейна площадью 40 км² после одного ливня (условные данные). Центр ливня приходится на 08:00. До ливня расход составлял 2,5 м³/с; в 09:00 он начинает расти и достигает пика 17,5 м³/с в 14:00. К 20:00 расход снизился до 6,0 м³/с.',
    },
    prompt: {
      en: '(a) Calculate the lag time between the storm centre and the peak of discharge. (1 mark)\n\n(b) Calculate the percentage increase in discharge from the pre-storm value to the peak. Show your working. (2 marks)\n\n(c) Explain why the falling limb is longer than the rising limb in this basin. Refer to at least two stores or flows. (4 marks)\n\n(d) Suggest how a more elongated basin shape would change the peak discharge and the lag time. (3 marks)',
      ru: '(a) Рассчитайте время запаздывания между центром ливня и пиком расхода. (1 балл)\n\n(b) Рассчитайте процентное увеличение расхода от значения до ливня до пикового значения. Покажите ход расчёта. (2 балла)\n\n(c) Объясните, почему нисходящая ветвь в этом бассейне длиннее восходящей. Сошлитесь как минимум на два запаса воды или потока. (4 балла)\n\n(d) Предложите, как более вытянутая форма бассейна изменила бы пиковый расход и время запаздывания. (3 балла)',
    },
    markscheme: {
      en: '(a) 1 mark: 6 hours (from 08:00 to 14:00). Accept 6 h.\n\n(b) 2 marks: 1 mark for the method (17.5 − 2.5) ÷ 2.5 × 100; 1 mark for 600%. Accept "seven times the pre-storm discharge" as the same result.\n\n(c) 4 marks: up to 2 marks for each developed reason. For example: throughflow in the soil and groundwater keep feeding the river slowly after the rain stops (identify it, then explain why this lengthens the recession); water stored in the soil and rock drains slowly, so discharge falls gradually. Do not credit a reason that only restates the data.\n\n(d) 3 marks: 1 mark for water arriving from different parts of the basin at different times; 1 mark for a lower peak discharge, because the arrivals are spread out; 1 mark for a longer lag time, because water from the far end takes longer to reach the outlet.',
      ru: '(a) 1 балл: 6 часов (с 08:00 до 14:00). Засчитывается 6 ч.\n\n(b) 2 балла: 1 балл за метод (17,5 − 2,5) ÷ 2,5 × 100; 1 балл за 600%. Засчитывается и ответ «в семь раз больше расхода до ливня» как тот же результат.\n\n(c) 4 балла: до 2 баллов за каждую развитую причину. Например: почвенный сток и подземные воды продолжают медленно питать реку после дождя (назвать и объяснить, почему это удлиняет спад); вода, накопленная в почве и породе, стекает медленно, поэтому расход снижается постепенно. Причина, которая только повторяет данные, не засчитывается.\n\n(d) 3 балла: 1 балл за то, что вода из разных частей бассейна приходит в разное время; 1 балл за более низкий пиковый расход, потому что приход воды растянут; 1 балл за более длинное время запаздывания, потому что вода из дальней части доходит до выхода дольше.',
    },
    model: {
      en: '(a) Lag time = 14:00 − 08:00 = 6 hours.\n(b) Increase = (17.5 − 2.5) ÷ 2.5 × 100 = 600%. The peak is seven times the pre-storm discharge.\n(c) The rising limb is short because overland flow and throughflow reach the channel quickly after the rain. The falling limb is longer because part of the water comes from slower stores: throughflow keeps draining from the soil, and groundwater keeps feeding the channel. As a result, discharge at 20:00 (6.0 m³/s) is still well above the pre-storm base flow of 2.5 m³/s.\n(d) In an elongated basin, water from the upper and lower parts reaches the outlet at different times. The arrivals are spread out, so the peak discharge is lower and flatter, and the lag time tends to be longer.',
      ru: '(a) Время запаздывания = 14:00 − 08:00 = 6 часов.\n(b) Увеличение = (17,5 − 2,5) ÷ 2,5 × 100 = 600%. Пик в семь раз больше расхода до ливня.\n(c) Восходящая ветвь короткая, потому что поверхностный и почвенный сток быстро доставляют воду в русло после дождя. Нисходящая ветвь длиннее, потому что часть воды приходит из более медленных запасов: почвенный сток продолжает стекать из почвы, а подземные воды продолжают питать русло. Поэтому в 20:00 расход (6,0 м³/с) всё ещё заметно выше базисного стока до ливня (2,5 м³/с).\n(d) В вытянутом бассейне вода из верхней и нижней частей доходит до выхода в разное время. Приход воды растянут, поэтому пиковый расход ниже и пологее, а время запаздывания обычно больше.',
    },
    answer: '6 hours; 600%',
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a1-sq3',
    subject: 'geo',
    topicIds: ['a1-drainage-basins'],
    paper: 'P1',
    marks: 10,
    command: 'Describe',
    stimulus: {
      en: 'Illustrative data for one river (illustrative data): at point A, near the source, gradient 1:20, discharge 2 m³/s, largest particle 300 mm. At point B, in the middle course, gradient 1:200, discharge 25 m³/s, largest particle 80 mm. At point C, near the mouth, gradient 1:2,000, discharge 180 m³/s, largest particle 2 mm.',
      ru: 'Условные данные для одной реки: в точке A, у истока, уклон 1:20, расход 2 м³/с, крупнейшая частица 300 мм. В точке B, на среднем течении, уклон 1:200, расход 25 м³/с, крупнейшая частица 80 мм. В точке C, у устья, уклон 1:2 000, расход 180 м³/с, крупнейшая частица 2 мм.',
    },
    prompt: {
      en: '(a) Define the term long profile. (2 marks)\n\n(b) Describe how the gradient, the discharge and the largest particle size change from point A to point C. Use the data. (3 marks)\n\n(c) Explain why the largest particle size is smaller at point C than at point A. (3 marks)\n\n(d) Suggest how a rise in discharge at point C, after heavy rain, could change the river’s erosion and deposition. (2 marks)',
      ru: '(a) Дайте определение термину «продольный профиль» (long profile). (2 балла)\n\n(b) Опишите, как меняются уклон, расход и размер крупнейших частиц от точки A к точке C. Используйте данные. (3 балла)\n\n(c) Объясните, почему размер крупнейших частиц в точке C меньше, чем в точке A. (3 балла)\n\n(d) Предложите, как рост расхода в точке C после сильного дождя может изменить эрозию и отложение наносов в реке. (2 балла)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for a graph of river bed height (or elevation) against distance from source to mouth; 1 mark for stating that it is a profile along the river.\n\n(b) 3 marks: 1 mark for the gradient falling from steep (1:20) to very gentle (1:2,000); 1 mark for discharge rising from 2 to 180 m³/s; 1 mark for the largest particle falling from 300 mm to 2 mm. Credit the use of the figures.\n\n(c) 3 marks: 1 mark for attrition (collisions make particles smaller and rounder downstream); 1 mark for selective transport/deposition: coarser material may be deposited along the route while finer material travels farther; 1 mark for qualifying the inference: particle size and gradient alone do not determine velocity or competence. Cross-sectional area, roughness, depth and flow conditions are needed; accept other supported explanations, including differences in sediment supply.\n\n(d) 2 marks: 1 mark for explaining that greater discharge can increase depth, bed shear stress and sediment transport/erosion; velocity may rise if cross-sectional area does not rise proportionally (Q = Av), but is not guaranteed; 1 mark for deposition on the floodplain or at the mouth, where the water spreads out and slows.',
      ru: '(a) 2 балла: 1 балл за график высоты русла (или высоты над уровнем моря) в зависимости от расстояния от истока до устья; 1 балл за то, что это профиль вдоль реки.\n\n(b) 3 балла: 1 балл за уклон, который падает от крутого (1:20) до очень пологого (1:2 000); 1 балл за рост расхода от 2 до 180 м³/с; 1 балл за уменьшение крупнейшей частицы от 300 до 2 мм. Засчитывается использование цифр.\n\n(c) 3 балла: 1 балл за истирание (столкновения делают частицы мельче и окатаннее по течению); 1 балл за избирательный перенос и отложение: часть крупных наносов может отлагаться по пути, а мелкие перемещаться дальше; 1 балл за границы вывода: по размеру частиц и уклону нельзя определить скорость и транспортирующую способность. Нужны площадь сечения, шероховатость, глубина и условия потока; засчитываются другие обоснованные причины, включая различия в поступлении наносов.\n\n(d) 2 балла: 1 балл за объяснение: больший расход может повысить глубину, касательное напряжение у дна и перенос наносов/эрозию; скорость может вырасти, если площадь сечения не увеличится пропорционально (Q = Av), но это не гарантировано; 1 балл за отложение на пойме или в устье, где вода растекается и замедляется.',
    },
    model: {
      en: '(a) A long profile is a graph of the river bed’s height above sea level against distance from the source to the mouth.\n(b) From A to C the gradient falls from 1:20 to 1:2,000; this shows a gentler bed slope, not a measured fall in velocity. Discharge rises from 2 to 180 m³/s as tributaries add water. The largest particle falls from 300 mm to 2 mm.\n(c) Particles collide over a long distance and are reduced in size and rounded by attrition. Selective deposition can leave coarser material upstream while finer particles travel farther. This is a plausible mechanism, not a unique conclusion from the table: sediment supply also matters. The data give no cross-sectional area or measured velocity, so neither slower downstream flow nor lower competence follows from gradient alone.\n(d) A higher discharge can increase depth and shear stress, enabling greater erosion and sediment transport. Whether mean velocity rises depends on the change in cross-sectional area (Q = Av); the table does not determine that change. Where the water spreads over the floodplain it slows down and deposits fine silt.',
      ru: '(a) Продольный профиль — это график высоты русла над уровнем моря в зависимости от расстояния от истока до устья.\n(b) От точки A к точке C уклон падает с 1:20 до 1:2 000: русло становится более пологим, но это не измерение уменьшения скорости. Расход растёт с 2 до 180 м³/с, потому что притоки добавляют воду. Крупнейшая частица уменьшается с 300 до 2 мм.\n(c) На длинном пути частицы сталкиваются и истираются, становясь мельче и окатаннее. Избирательное отложение может оставлять крупные наносы выше по течению, тогда как мелкие перемещаются дальше. Это возможный механизм, а не единственный вывод из таблицы: важен и состав поступающих наносов. Нет площади сечения и измерений скорости, поэтому меньшая скорость или транспортирующая способность не следуют только из уменьшения уклона.\n(d) Больший расход может увеличить глубину и касательное напряжение, усиливая эрозию и перенос наносов. Изменение средней скорости зависит от площади сечения (Q = Av); таблица не задаёт её изменения. Там, где вода разливается по пойме, она замедляется и откладывает мелкий ил.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a1-eq1',
    subject: 'geo',
    topicIds: ['a1-drainage-basins'],
    paper: 'P1',
    marks: 10,
    command: 'Examine',
    prompt: {
      en: 'Examine how the characteristics of a drainage basin affect the shape of a storm hydrograph.',
      ru: 'Исследуйте, как характеристики речного бассейна влияют на форму паводкового гидрографа.',
    },
    hints: [
  {
    "en": "Define the hydrograph at an outlet; compare the same rainfall event and initial wetness.",
    "ru": "Определи гидрограф в створе; сравни одинаковые осадки и начальную влажность."
  },
  {
    "en": "Connect each basin feature to storage or travel time, then to peak, lag or recession. Explain at least one interaction.",
    "ru": "Свяжи каждое свойство с запасами или временем движения, затем с пиком, запаздыванием или спадом. Объясни взаимодействие факторов."
  },
  {
    "en": "Test a counterexample: permeable but saturated soil, or a moving storm over an elongated basin. A tendency is not a guarantee.",
    "ru": "Проверь контрпример: проницаемая, но насыщенная почва или движущийся ливень над вытянутым бассейном. Тенденция не равна гарантии."
  },
  {
    "en": "Draw and annotate a conditional comparison, clearly labelled hypothetical. Justify a conclusion without inventing a named wadi observation.",
    "ru": "Нарисуй условное сравнение с пояснениями и обозначь данные как учебные. Обоснуй вывод, не придумывая наблюдений за конкретным вади."
  }
],
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Relate infiltration, storage and routing to the hydrograph under stated rainfall and antecedent conditions; distinguish other-things-equal tendencies from guarantees.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Свяжи инфильтрацию, запасы и движение воды с гидрографом при указанных осадках и начальной влажности; отличай условные тенденции от гарантированного результата.",
    },
    model: {
  "en": "A storm hydrograph records discharge through time at a particular outlet. Basin characteristics affect how rainfall is stored and routed, so they can alter the rising limb, peak, lag and recession. Comparisons must hold rainfall and initial wetness reasonably constant: a larger storm can outweigh a difference in land cover.\n\nWhere rainfall exceeds infiltration capacity, overland flow can deliver water rapidly to channels. Connected paved surfaces and efficient drains can therefore shorten lag and increase the peak. Permeable material and available soil storage can delay delivery through infiltration, percolation and groundwater flow. Yet permeable soil that is already saturated has little remaining storage; permeability alone does not guarantee a low peak. Steeper connected flow paths and a dense channel network can shorten travel times, but roughness, channel storage and obstructions also matter.\n\nBasin shape affects the range of travel times. Under a broadly distributed storm, a compact basin can concentrate arrivals more than an elongated basin of comparable size. This is a tendency, not simultaneous arrival from every point: a moving storm and tributary routing can change the result. Vegetation can intercept rainfall and alter infiltration, but its effect depends on cover, season and storm magnitude.\n\nThe key interaction is therefore between rainfall, available storage and connectivity to the channel. An annotated comparison of two otherwise similar hypothetical basins can demonstrate the mechanisms, but it is not evidence about every desert wadi. Without event rainfall, antecedent moisture and outlet records, no single basin characteristic can be ranked as universally dominant.",
  "ru": "Паводковый гидрограф показывает изменение расхода во времени в определённом створе. Свойства бассейна влияют на накопление и движение воды, поэтому могут менять подъём, пик, запаздывание и спад. При сравнении нужно учитывать осадки и начальную влажность: более сильный ливень может перевесить различие в растительном покрове.\n\nЕсли интенсивность дождя превышает способность почвы впитывать воду, поверхностный сток быстро доставляет её к руслу. Соединённые водостоками покрытия могут сократить запаздывание и увеличить пик. Проницаемый грунт и свободная ёмкость почвы способны задержать воду благодаря инфильтрации, просачиванию вглубь и подземному стоку. Но у уже насыщенной почвы мало свободной ёмкости: одна проницаемость не гарантирует низкий пик. Крутые связанные пути стока и густая речная сеть могут сократить время движения, однако важны также шероховатость, русловые запасы и препятствия.\n\nФорма бассейна влияет на разброс времени добегания. При относительно равномерном дожде компактный бассейн может сильнее сосредоточить приход воды, чем вытянутый бассейн сходной площади. Это тенденция, а не одновременное поступление из каждой точки: движение ливня и прохождение воды по притокам меняют результат. Растительность задерживает часть осадков и влияет на впитывание, но эффект зависит от покрова, сезона и силы ливня.\n\nИтак, решающее значение имеет взаимодействие осадков, свободной ёмкости и связи участков с руслом. Схема двух условных сходных бассейнов объясняет механизм, но не доказывает свойства всех пустынных вади. Без наблюдений за дождём, начальной влажностью и расходом нельзя объявить один фактор главным для любого бассейна."
},
    origin: 'original',
    minutes: 30,
  },
  {
    id: 'a1-eq2',
    subject: 'geo',
    topicIds: ['a1-drainage-basins'],
    paper: 'P1',
    marks: 10,
    command: 'To what extent',
    prompt: {
      en: 'To what extent is the regime of a river determined by climate rather than by the characteristics of its drainage basin?',
      ru: 'В какой степени режим реки определяется климатом, а не характеристиками её речного бассейна?',
    },
    hints: [
  {
    "en": "Distinguish seasonal regime from an individual storm hydrograph.",
    "ru": "Отличи сезонный режим от гидрографа отдельного ливня."
  },
  {
    "en": "Use the Lower Mekong–Tonle Sap system: seasonal rainfall, relative water levels, reverse flow and dry-season release.",
    "ru": "Разбери систему нижний Меконг — Тонлесап: сезонные дожди, соотношение уровней, обратный сток и отдачу воды в сухой сезон."
  },
  {
    "en": "The 47% estimate is the study’s medium-flow 1998–2018 model comparison. Include sand mining and upstream sediment trapping; do not make it a universal climate attribution.",
    "ru": "Оценка 47% относится к модельному сравнению 1998–2018 годов при средней водности. Укажи добычу песка и задержание наносов выше по течению; не превращай результат во всеобщее объяснение климатом."
  },
  {
    "en": "Judge the interaction for a specified outlet and period; a different basin can have different controls.",
    "ru": "Оцени взаимодействие для определённого створа и периода; в другом бассейне соотношение факторов может быть иным."
  }
],
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Distinguish a seasonal river regime from one storm response. Evaluate climate, storage, channel change and human regulation without assuming one cause explains every basin.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Отличай сезонный режим от отклика на один ливень. Оцени климат, запасы, изменение русла и регулирование, не приписывая одной причине все бассейны.",
    },
    model: {
  "en": "A river regime is the seasonal pattern of discharge, rather than the hydrograph of one storm. Climate supplies the seasonal inputs: rainfall timing and the storage and melting of snow can create recurring differences between months. Basin storage and human changes then modify the timing and size of the resulting flows.\n\nQuan and colleagues’ 2025 Tonle Sap study describes the Lower Mekong wet season as typically mid-May to October, with river levels generally peaking around September. This supports a strong climatic explanation of seasonality. During the flood season, the relative water levels create reverse flow towards Tonle Sap; the lake subsequently returns water downstream during the dry season. The same rainfall input therefore passes through a lake–river storage system, rather than appearing immediately at the outlet.\n\nThe study’s modelling attributes a substantial change in this connection to riverbed lowering driven by sand mining and upstream sediment trapping. For medium-flow conditions, estimated reverse flow was 47% lower in 2018 than in 1998. That is a modelled comparison under specified flows, not an observation that climate ceased to matter or a forecast already realised. It shows how channel geometry can alter the seasonal redistribution of water.\n\nClimate is consequently a strong explanation of the recurring wet-season input in this basin, while storage and channel change explain why an unchanged seasonal label cannot predict an unchanged discharge pattern. Their relative importance depends on the outlet, time period and quantity being explained. A climate-versus-basin answer is strongest when it examines their interaction, rather than claiming that one always determines the entire regime.",
  "ru": "Речной режим — сезонная картина расхода, а не гидрограф одного ливня. Климат задаёт сезонные поступления: сроки дождей, накопление и таяние снега создают повторяющиеся различия между месяцами. Запасы бассейна и деятельность человека затем меняют сроки и объём стока.\n\nВ исследовании Куана и соавторов о Тонлесапе 2025 года влажный сезон нижнего Меконга описан как период обычно с середины мая по октябрь, а максимум уровня — примерно в сентябре. Это веский довод в пользу климатического объяснения сезонности. В паводковый сезон соотношение уровней создаёт обратное течение к Тонлесапу; в сухой сезон озеро возвращает воду вниз по течению. Значит, дождевая вода проходит через систему озёрных и речных запасов, а не сразу появляется в замыкающем створе.\n\nМоделирование в этой работе связывает существенное изменение связи озера с рекой с понижением русла из-за добычи песка и задержания наносов выше по течению. При условиях средней водности расчётный обратный сток в 2018 году был на 47% меньше, чем в 1998 году. Это модельное сравнение при заданной водности, а не доказательство того, что климат перестал влиять, и не уже сбывшийся прогноз. Оно показывает, как геометрия русла меняет сезонное перераспределение воды.\n\nИтак, климат хорошо объясняет повторяющийся влажный сезон этого бассейна, а запасы и изменение русла — почему тот же сезонный тип не гарантирует прежнего расхода. Соотношение факторов зависит от створа, периода и показателя. Убедительный ответ разбирает их взаимодействие, а не объявляет один фактор неизменной причиной всего режима."
},
    origin: 'original',
    minutes: 30,
  },
];
