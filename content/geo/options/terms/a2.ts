import type { Term } from '../../../../src/contract/types';

// Option A, A.2: definitions in our own words, aligned with the key elements of the programme (guide 2017).
// Locators point to the ThinkIB eBook section of this unit (section level; page locators come from the S1 map).
const SRC = { kind: 'thinkib' as const, title: 'Option A: Floods and Flood Mitigation (page 43867)', locator: 'Flood Mitigation Strategies; Flood Prediction; Hydrographs and Floods' };

export const terms: Term[] = [
  {
    id: 'a-flash-flood',
    term: { en: 'flash flood', ru: 'внезапное наводнение (flash flood)' },
    def: {
      en: 'A flood that rises within hours of very heavy rain, usually in small, steep or built-up catchments, which leaves little time to warn people.',
      ru: 'Наводнение, которое поднимается в течение нескольких часов после очень сильного дождя, обычно в небольших, крутых или застроенных водосборах, где на предупреждение людей остаётся мало времени.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Boscastle, Cornwall (England), 16 August 2004: up to 200 mm of rain fell in about five hours (HR Wallingford for the Environment Agency, 2005).',
      ru: 'Боскасл, Корнуолл (Англия), 16 августа 2004 года: до 200 мм осадков выпало примерно за пять часов (HR Wallingford для Environment Agency, 2005).',
    },
  },
  {
    id: 'a-river-flood',
    term: { en: 'river (fluvial) flood', ru: 'речное наводнение (fluvial flood)' },
    def: {
      en: 'A flood that happens when a river rises above the top of its banks and spreads over the floodplain, usually after long or heavy rain or snowmelt upstream.',
      ru: 'Наводнение, которое возникает, когда река поднимается выше берегов и разливается по пойме, обычно после длительных или сильных дождей либо таяния снега выше по течению.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'The IJssel, Waal, Lower Rhine and Lek in the Netherlands received measures at 34 locations between 2006 and 2019 to give rivers more room (Rijkswaterstaat).',
      ru: 'На реках IJssel, Waal, Lower Rhine и Lek в Нидерландах в 2006–2019 годах провели меры на 34 участках, чтобы дать рекам больше места (Rijkswaterstaat).',
    },
  },
  {
    id: 'a-coastal-flood',
    term: { en: 'coastal flood', ru: 'прибрежное наводнение (coastal flood)' },
    def: {
      en: 'Flooding of low-lying land by the sea, caused by high tides, storm surges and large waves, often made worse by strong winds blowing onshore.',
      ru: 'Затопление низменной суши морем из-за высоких приливов, штормовых нагонов и крупных волн, часто усиленное сильным ветром, который дует с моря на берег.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'A third of the Netherlands is situated below sea level, so coastal flood risk is a national concern (Delta Programme).',
      ru: 'Треть территории Нидерландов расположена ниже уровня моря, поэтому риск прибрежных наводнений — задача всей страны (Delta Programme).',
    },
  },
  {
    id: 'a-storm-surge',
    term: { en: 'storm surge', ru: 'штормовой нагон (storm surge)' },
    def: {
      en: 'A temporary rise in sea level above the predicted tide, caused by low air pressure and strong winds that push water towards the coast during a storm.',
      ru: 'Временный подъём уровня моря выше прогнозируемого прилива, вызванный низким атмосферным давлением и сильным ветром, который гонит воду к берегу во время шторма.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A storm surge adds to the tide and the waves, so the water level can be much higher than the tide alone would produce.',
      ru: 'Штормовой нагон добавляется к приливу и волнам, поэтому уровень воды может быть намного выше того, что дал бы один прилив.',
    },
  },
  {
    id: 'a-saturated-soil',
    term: { en: 'saturated soil', ru: 'почва, насыщенная водой (saturated soil)' },
    def: {
      en: 'Soil whose pore spaces are full of water, so it cannot absorb more rain. Further rain then runs off the surface, and even a moderate storm can cause a flood.',
      ru: 'Почва, в порах которой полностью есть вода, поэтому она не может впитать больше дождя. Дальнейший дождь стекает по поверхности, и даже умеренный шторм может вызвать наводнение.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'a-impermeable-surface',
    term: { en: 'impermeable surface', ru: 'непроницаемая поверхность (impermeable surface)' },
    def: {
      en: 'A surface, such as tarmac, concrete or a roof, that water cannot soak into. Rain on these surfaces becomes surface runoff almost at once.',
      ru: 'Поверхность, например асфальт, бетон или крыша, в которую вода не может впитаться. Дождь на таких поверхностях почти сразу становится поверхностным стоком.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'Roads, car parks and roofs in a built-up area send most of the rain straight into drains and rivers.',
      ru: 'Дороги, стоянки и крыши в застроенном районе отправляют большую часть дождя прямо в дренажные системы и реки.',
    },
  },
  {
    id: 'a-surface-runoff',
    term: { en: 'surface runoff', ru: 'поверхностный сток (surface runoff)' },
    def: {
      en: 'Rainwater that flows over the ground into streams, drains and rivers because the surface cannot absorb it, for example because the soil is saturated or the ground is sealed.',
      ru: 'Дождевая вода, которая течёт по земле в ручьи, дренажные системы и реки, потому что поверхность не может её впитать, например из-за насыщенной водой почвы или запечатанного покрытия.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'a-floodplain',
    term: { en: 'floodplain', ru: 'пойма (floodplain)' },
    def: {
      en: 'The flat land beside a river, built up from sediment left by earlier floods, which is covered with water when the river overflows its banks.',
      ru: 'Ровная земля вдоль реки, сложенная наносами от прежних паводков, которая уходит под воду, когда река выходит из берегов.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'In Deventer on the IJssel, channels were dug to improve the flow of the river at high water (Rijkswaterstaat).',
      ru: 'В Девентере на реке IJssel прокопали каналы, чтобы улучшить сток реки в период высокой воды (Rijkswaterstaat).',
    },
  },
  {
    id: 'a-channelisation',
    term: { en: 'channelisation', ru: 'спрямление и углубление русла (channelisation)' },
    def: {
      en: 'Changing a river channel by straightening, deepening, widening or lining it, so that water moves downstream faster and the channel can carry more discharge.',
      ru: 'Изменение русла реки путём спрямления, углубления, расширения или облицовки, чтобы вода быстрее двигалась вниз по течению и русло пропускало больший расход.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Channelisation can move the flood downstream, so towns further along the river may face a larger flood.',
      ru: 'Спрямление может переместить паводок вниз по течению, поэтому города дальше по реке могут столкнуться с более крупным наводнением.',
    },
  },
  {
    id: 'a-levee',
    term: { en: 'levee', ru: 'дамба обвалования (levee)' },
    def: {
      en: 'A raised bank or wall beside a river or the sea that holds floodwater inside the channel. Also called an embankment, or a dike in the Netherlands.',
      ru: 'Поднятый берег или стена вдоль реки или моря, которые удерживают паводковую воду внутри русла. Также называется насыпью, а в Нидерландах — дейком (dike).',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'a-flood-relief-channel',
    term: { en: 'flood relief channel', ru: 'разгрузочный канал (flood relief channel)' },
    def: {
      en: 'An artificial channel built to carry part of a river’s flood flow around a town or a sensitive area, which lowers water levels in the main channel.',
      ru: 'Искусственный канал, построенный для отвода части паводкового расхода реки в обход города или уязвимого участка, что снижает уровень воды в основном русле.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    example: {
      en: 'The Reevediep flood channel, opened in early 2019, completed the Dutch Room for the River programme (Rijkswaterstaat).',
      ru: 'Разгрузочный канал Reevediep, открытый в начале 2019 года, завершил нидерландскую программу Room for the River (Rijkswaterstaat).',
    },
  },
  {
    id: 'a-flood-storage',
    term: { en: 'flood storage', ru: 'аккумуляция паводковых вод (flood storage)' },
    def: {
      en: 'Land or reservoirs that hold back part of a flood for a time and release it slowly, which lowers the peak further downstream. Storage can be natural, such as a floodplain, or engineered, such as a reservoir.',
      ru: 'Территории или водохранилища, которые на время задерживают часть паводка и медленно выпускают её, снижая пик ниже по течению. Аккумуляция может быть естественной, например пойма, или искусственной, например водохранилище.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'a-hard-engineering',
    term: { en: 'hard engineering', ru: 'жёсткие инженерные меры (hard engineering)' },
    def: {
      en: 'Flood management that uses concrete, steel and earth structures to control the flow of water, such as dams, levees, flood walls, barriers and channel modification.',
      ru: 'Управление паводками с помощью бетонных, стальных и земляных сооружений, которые регулируют течение воды: плотин, дамб, защитных стен, барьеров и изменения русла.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Hard engineering protects against the flood it was designed for. A larger flood can overtop or breach it, and it can shift the risk elsewhere.',
      ru: 'Жёсткие меры защищают от паводка, на который рассчитаны. Более крупный паводок может перелить через них или прорвать их, а риск может переместиться на другие территории.',
    },
  },
  {
    id: 'a-soft-engineering',
    term: { en: 'soft engineering', ru: 'мягкие инженерные меры (soft engineering)' },
    def: {
      en: 'Flood management that works with natural processes and people’s behaviour rather than relying mainly on large structures. Examples include afforestation, floodplain zoning, building design, insurance and preparedness.',
      ru: 'Управление паводками, которое опирается на природные процессы и поведение людей, а не в первую очередь на крупные сооружения. Примеры: облесение, зонирование пойм, проектирование зданий, страхование и подготовка.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Soft engineering still needs planning, funding and enforcement. Its effect on the largest floods is often limited, and many measures take years to show results.',
      ru: 'Мягким мерам тоже нужны планирование, финансирование и контроль. Их эффект на самые крупные паводки часто ограничен, а многие меры дают результат лишь через годы.',
    },
  },
  {
    id: 'a-floodplain-zoning',
    term: { en: 'floodplain zoning', ru: 'зонирование пойм (floodplain zoning)' },
    def: {
      en: 'A planning control that decides where building is allowed according to flood risk. High-risk zones are kept open or built only to strict standards.',
      ru: 'Градостроительный инструмент, который определяет, где можно строить с учётом риска наводнений. Зоны высокого риска оставляют открытыми или допускают застройку только по строгим стандартам.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'a-flood-warning',
    term: { en: 'flood prediction and warning', ru: 'прогноз и предупреждение о наводнениях (flood prediction and warning)' },
    def: {
      en: 'Systems that use rainfall and river-level data, forecasts and monitoring to predict a flood and warn people in time to move possessions, evacuate or prepare.',
      ru: 'Системы, которые используют данные об осадках и уровнях рек, прогнозы и наблюдения, чтобы заранее предсказать наводнение и вовремя предупредить людей: они успевают перенести имущество, эвакуироваться или подготовиться.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'A warning helps only if people understand it and know what to do. A flash flood can leave very little time between the warning and the water.',
      ru: 'Предупреждение помогает, только если люди его понимают и знают, что делать. При внезапном наводнении между предупреждением и подходом воды может пройти очень мало времени.',
    },
  },
  {
    id: 'a-flood-mitigation',
    term: { en: 'flood mitigation', ru: 'смягчение последствий наводнений (flood mitigation)' },
    def: {
      en: 'Measures that reduce the size or the chance of a flood, such as a dam, a levee, a relief channel or flood storage upstream. Compare with adaptation.',
      ru: 'Меры, которые уменьшают размер или вероятность наводнения: плотина, дамба обвалования, разгрузочный канал или аккумуляция воды выше по течению. Сравните с адаптацией.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
  },
  {
    id: 'a-flood-adaptation',
    term: { en: 'flood adaptation', ru: 'адаптация к наводнениям (flood adaptation)' },
    def: {
      en: 'Changes that help people and places live with flood risk, such as raised floors, flood-resistant materials, insurance, evacuation plans and careful land-use planning.',
      ru: 'Изменения, которые помогают людям и территориям жить с риском наводнений: приподнятые полы, устойчивые к воде материалы, страхование, планы эвакуации и продуманное планирование землепользования.',
    },
    syllabus: 'A.2',
    papers: ['P1'],
    src: SRC,
    pitfall: {
      en: 'Adaptation does not make the flood smaller. Raised floors and insurance reduce the harm, not the water level.',
      ru: 'Адаптация не уменьшает сам паводок. Приподнятые полы и страхование уменьшают ущерб, но не уровень воды.',
    },
  },
];
