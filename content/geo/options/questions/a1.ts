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
      en: '(a) 2 marks: 1 mark for a graph of river bed height (or elevation) against distance from source to mouth; 1 mark for stating that it is a profile along the river.\n\n(b) 3 marks: 1 mark for the gradient falling from steep (1:20) to very gentle (1:2,000); 1 mark for discharge rising from 2 to 180 m³/s; 1 mark for the largest particle falling from 300 mm to 2 mm. Credit the use of the figures.\n\n(c) 3 marks: 1 mark for attrition (collisions make particles smaller and rounder downstream); 1 mark for the lower gradient and velocity at C, so the river has less energy and moves only small particles; 1 mark for linking this to the deposition of large particles upstream, where the flow slowed.\n\n(d) 2 marks: 1 mark for a rise in discharge increasing velocity and so erosion of the banks and bed and the transport of more load; 1 mark for deposition on the floodplain or at the mouth, where the water spreads out and slows.',
      ru: '(a) 2 балла: 1 балл за график высоты русла (или высоты над уровнем моря) в зависимости от расстояния от истока до устья; 1 балл за то, что это профиль вдоль реки.\n\n(b) 3 балла: 1 балл за уклон, который падает от крутого (1:20) до очень пологого (1:2 000); 1 балл за рост расхода от 2 до 180 м³/с; 1 балл за уменьшение крупнейшей частицы от 300 до 2 мм. Засчитывается использование цифр.\n\n(c) 3 балла: 1 балл за истирание (столкновения делают частицы мельче и окатаннее по течению); 1 балл за более пологий уклон и меньшую скорость в точке C, поэтому река имеет меньше энергии и переносит только мелкие частицы; 1 балл за связь с отложением крупных частиц выше по течению, где поток замедлился.\n\n(d) 2 балла: 1 балл за то, что рост расхода повышает скорость и поэтому размыв берегов и дна и перенос большего количества наносов; 1 балл за отложение на пойме или в устье, где вода растекается и замедляется.',
    },
    model: {
      en: '(a) A long profile is a graph of the river bed’s height above sea level against distance from the source to the mouth.\n(b) From A to C the gradient falls from 1:20 to 1:2,000, so the river loses steepness and energy. Discharge rises from 2 to 180 m³/s as tributaries add water. The largest particle falls from 300 mm to 2 mm.\n(c) Particles collide over a long distance and are reduced in size and rounded by attrition. At C the flow is slower, so the river can move only small particles; the large ones were dropped further upstream when the gradient fell.\n(d) A higher discharge at C raises the water’s velocity and energy, so the river erodes its banks and bed more and carries more load. Where the water spreads over the floodplain it slows down and deposits fine silt.',
      ru: '(a) Продольный профиль — это график высоты русла над уровнем моря в зависимости от расстояния от истока до устья.\n(b) От точки A к точке C уклон падает с 1:20 до 1:2 000, поэтому река теряет крутизну и энергию. Расход растёт с 2 до 180 м³/с, потому что притоки добавляют воду. Крупнейшая частица уменьшается с 300 до 2 мм.\n(c) На длинном пути частицы сталкиваются и истираются, становясь мельче и окатаннее. В точке C поток медленнее, поэтому река может переносить только мелкие частицы; крупные отложились выше по течению, когда уклон упал.\n(d) Более высокий расход в точке C повышает скорость и энергию воды, поэтому река сильнее размывает берега и дно и переносит больше наносов. Там, где вода разливается по пойме, она замедляется и откладывает мелкий ил.',
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
        en: 'Plan: define a storm hydrograph and name its features (rising limb, peak discharge, lag time, falling limb, base flow). Then take the characteristics one by one and say what each does to those features.',
        ru: 'План: дайте определение паводковому гидрографу и назовите его элементы (восходящая ветвь, пиковый расход, время запаздывания, нисходящая ветвь, базисный сток). Затем возьмите характеристики по одной и покажите, что каждая делает с этими элементами.',
      },
      {
        en: 'Relief and slope: steep slopes speed up overland flow, so the rising limb is steeper, the lag time is shorter and the peak is higher.',
        ru: 'Рельеф и уклон: крутые склоны ускоряют поверхностный сток, поэтому восходящая ветвь круче, время запаздывания короче, а пик выше.',
      },
      {
        en: 'Drainage density, rock and soil: many channels, impermeable rock or compacted soil move water quickly to the river and raise the peak. Permeable rock and deep soil store water, reduce overland flow and lengthen the falling limb.',
        ru: 'Густота речной сети, порода и почва: много русел и непроницаемая порода или уплотнённая почва быстро доставляют воду в реку и повышают пик. Проницаемая порода и глубокая почва накапливают воду, снижают поверхностный сток и удлиняют нисходящую ветвь.',
      },
      {
        en: 'Vegetation, land use, shape and size: forest slows runoff; urban surfaces make the peak sharper; a compact basin gives a high peak and an elongated one a flatter, later peak. Judgement: say which characteristic matters most for a named basin, such as a wadi catchment in the UAE, and note that rainfall intensity and wet soils also control the response.',
        ru: 'Растительность, землепользование, форма и размер: лес замедляет сток; городские поверхности делают пик резче; компактный бассейн даёт высокий пик, а вытянутый — более пологий и поздний. Вывод: укажите, какая характеристика важнее всего для названного бассейна, например водосбор вади в ОАЭ, и отметьте, что интенсивность дождя и влажность почвы тоже управляют реакцией.',
      },
    ],
    markscheme: {
      en: 'Level 1 (1–3 marks): names one or two characteristics, or describes a hydrograph in general terms, with no link to the shape of the graph.\n\nLevel 2 (4–6 marks): explains how at least two characteristics change the rising limb, the peak discharge or the lag time, using some terms.\n\nLevel 3 (7–8 marks): examines several characteristics, linking each to the shape of the hydrograph through stores, flows or the speed of delivery, and uses at least one named example.\n\nLevel 4 (9–10 marks): sustained examination of the characteristics and how they interact (for example, steep slopes with impermeable rock, or urban surfaces in a compact basin), with precise evidence and a balanced judgement of which matters most.',
      ru: 'Уровень 1 (1–3 балла): называет одну-две характеристики или описывает гидрограф в общих словах, без связи с формой графика.\n\nУровень 2 (4–6 баллов): объясняет, как минимум две характеристики меняют восходящую ветвь, пиковый расход или время запаздывания, с использованием терминов.\n\nУровень 3 (7–8 баллов): рассматривает несколько характеристик и связывает каждую с формой гидрографа через запасы, потоки или скорость доставки воды; приводит минимум один названный пример.\n\nУровень 4 (9–10 баллов): последовательное рассмотрение характеристик и их взаимодействия (например, крутые склоны с непроницаемой породой или городские поверхности в компактном бассейне), точные данные и взвешенный вывод о том, что важнее всего.',
    },
    model: {
      en: 'A storm hydrograph shows how discharge at the outlet changes after rain, and its shape depends on how quickly water reaches the river. Steep slopes and impermeable surfaces send water rapidly over the ground, so the rising limb is steep, the lag time is short and the peak discharge is high. In wadi catchments in the UAE, bare rock and crusted desert soils take in little water, so a storm can produce a sharp peak within hours. A high drainage density works in a similar way, because water travels only a short distance to a channel. Permeable rock and deep soils, by contrast, allow infiltration and percolation, which store water and release it slowly through throughflow and groundwater flow, lowering the peak and lengthening the falling limb. Vegetation intercepts rain and slows runoff, while urban surfaces do the reverse. A compact basin brings water from all parts at about the same time, but a long, narrow basin spreads the arrival of water and gives a flatter peak. On balance, the characteristics that control infiltration and the speed of overland flow matter most, and rainfall intensity acts on top of them.',
      ru: 'Паводковый гидрограф показывает, как расход на выходе из бассейна меняется после дождя, и его форма зависит от того, как быстро вода попадает в реку. Крутые склоны и непроницаемые поверхности гонят воду по земле быстро: восходящая ветвь становится крутой, время запаздывания коротким, а пиковый расход высоким. В водосборах вади в ОАЭ голая порода и уплотнённая корка пустынной почвы впитывают мало воды, поэтому ливень может дать резкий пик за несколько часов. Высокая густота речной сети действует похоже, потому что вода проходит до русла короткий путь. Проницаемые породы и глубокие почвы, напротив, позволяют инфильтрации и перколяции накапливать воду и медленно отдавать её через почвенный сток и подземный сток, снижая пик и удлиняя нисходящую ветвь. Растительность задерживает дождь и замедляет сток, а городские поверхности делают обратное. Компактный бассейн собирает воду со всех частей почти одновременно, а длинный и узкий растягивает её приход и даёт более пологий пик. В итоге сильнее всего форму гидрографа определяют характеристики, которые управляют инфильтрацией и скоростью поверхностного стока, а интенсивность дождя действует поверх них.',
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
        en: 'Plan: define river regime and name the types (nival, glacial, pluvial, equatorial, monsoon). Then set out the case for climate, the case for the basin, and a judgement on the extent.',
        ru: 'План: дайте определение речному режиму и назовите его типы (нивальный, ледниковый, плювиальный, экваториальный, муссонный). Затем изложите довод в пользу климата, довод в пользу бассейна и вывод о степени влияния.',
      },
      {
        en: 'Climate: the timing and amount of rain and snow set the regime. In the Lower Mekong basin, most annual rainfall falls in the wet season, typically from mid-May to October. In the Rhine, Alpine snow stores winter precipitation until spring and summer.',
        ru: 'Климат: сроки и количество дождя и снега задают режим. В нижнем бассейне Меконга большая часть годовых осадков выпадает в сезон дождей, обычно с середины мая по октябрь. В Рейне альпийский снег накапливает зимние осадки до весны и лета.',
      },
      {
        en: 'Basin characteristics: lakes, floodplains and groundwater act as stores that change the regime. Tonle Sap stores the flood water and returns freshwater downstream in the dry season. The Amazon basin lies on both sides of the equator, so its wet seasons do not all coincide.',
        ru: 'Характеристики бассейна: озёра, поймы и подземные воды работают как запасы, которые меняют режим. Озеро Тонлесап накапливает паводковую воду и возвращает пресную воду вниз по течению в сухой сезон. Бассейн Амазонки лежит по обе стороны экватора, поэтому сезоны дождей в его частях не совпадают.',
      },
      {
        en: 'Judgement: between 1998 and 2018 the reverse flow into Tonle Sap fell by about 47% in a medium-flow year. A 2025 study attributes the fall mainly to riverbed lowering from sand mining and questions earlier explanations such as climate change. Argue that climate sets the timing, but changes in the basin and the channel can alter the regime strongly.',
        ru: 'Вывод: с 1998 по 2018 год обратный сток в Тонлесап сократился примерно на 47% в год средней водности. Исследование 2025 года приписывает это главным образом понижению русла из-за добычи песка и ставит под сомнение более ранние объяснения, например через изменение климата. Аргументируйте, что климат задаёт сроки, но изменения в бассейне и русле могут сильно изменить режим.',
      },
    ],
    markscheme: {
      en: 'Level 1 (1–3 marks): describes a regime, or names climate and basin factors, without judgement.\n\nLevel 2 (4–6 marks): explains how climate sets the regime and how at least one basin characteristic modifies it, with limited evidence.\n\nLevel 3 (7–8 marks): evaluates both factors with at least two named examples that have figures and years, and reaches a partial judgement.\n\nLevel 4 (9–10 marks): sustained evaluation with precise, dated evidence (for example from the Mekong, the Rhine or the Amazon) that weighs the role of climate in setting timing against the role of stores and channel change, and reaches a supported judgement of the extent.',
      ru: 'Уровень 1 (1–3 балла): описывает режим или называет факторы климата и бассейна без оценки.\n\nУровень 2 (4–6 баллов): объясняет, как климат задаёт режим и как минимум одна характеристика бассейна его меняет, с ограниченными примерами.\n\nУровень 3 (7–8 баллов): оценивает оба фактора с помощью минимум двух названных примеров с цифрами и годами и приходит к частичному выводу.\n\nУровень 4 (9–10 баллов): последовательная оценка с точными датированными данными (например, из Меконга, Рейна или Амазонки), которая сопоставляет роль климата в задании сроков и роль запасов и изменений русла, и приходит к обоснованному выводу о степени влияния.',
    },
    model: {
      en: 'Climate sets the basic timing of a river’s regime. In the Lower Mekong basin, most of the rain falls between mid-May and October, and river levels peak around September, so the monsoon explains most of the seasonal pattern. The Rhine works on a similar logic at a larger scale: Alpine snow stores winter precipitation, so spring and summer flows depend on temperatures in the mountains. The basin then modifies the signal. Tonle Sap acts as a store that holds the flood and returns freshwater downstream in the dry season, and the hydraulic link between lake and river governs the reverse flow. Between 1998 and 2018 the reverse flow fell by about 47% in a medium-flow year; a 2025 study attributes this to riverbed lowering driven by sand mining and questions earlier explanations such as climate change. Climate therefore explains the broad pattern and timing of the regime, but the basin’s stores and channel determine how strongly it shows, and changes to the channel can alter it substantially. On balance, climate determines much of the regime, but not all of it.',
      ru: 'Климат задаёт основные сроки речного режима. В нижнем Меконге большая часть дождей выпадает с середины мая по октябрь, а уровень воды достигает пика около сентября, поэтому муссон объясняет большую часть сезонной картины. Рейн устроен похоже, только в большем масштабе: альпийский снег накапливает зимние осадки, поэтому весенний и летний сток зависит от температур в горах. Однако бассейн меняет этот сигнал. Тонлесап работает как запас: он удерживает паводковую воду и возвращает пресную воду вниз по течению в сухой сезон, а гидравлическая связь между озером и рекой определяет обратный сток. С 1998 по 2018 год обратный сток сократился примерно на 47% в год средней водности; исследование 2025 года связывает это снижение с понижением русла из-за добычи песка и ставит под сомнение более ранние объяснения, например через изменение климата. Значит, климат объясняет общую картину и сроки режима, но запасы бассейна и русло определяют, насколько сильно режим проявляется, а вмешательство в русло может изменить его существенно. В итоге климат определяет многое в режиме, но не всё.',
    },
    origin: 'original',
    minutes: 30,
  },
];
