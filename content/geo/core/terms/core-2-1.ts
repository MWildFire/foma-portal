import type { SourceRef, Term } from '../../../../src/contract/types';

// Syllabus core 2.1 (causes of global climate change). Definitions are in our own words, from the Geography guide (2017), core 2.1.
// The ThinkIB eBook has no page numbers, so the locator names the eBook sections that cover the subtopic.
const src: SourceRef = { kind: 'thinkib', title: 'ThinkIB Geography eBook', locator: 'Paper 2 › Unit 2 › 4a–4e' };

export const terms: Term[] = [
  {
    id: 'core-greenhouse-effect',
    term: { en: 'greenhouse effect', ru: 'парниковый эффект (greenhouse effect)' },
    def: {
      en: 'The natural process in which greenhouse gases absorb part of the long-wave (infrared) radiation that the Earth’s surface emits and re-emit some of it back towards the surface, keeping the surface warmer than it would otherwise be.',
      ru: 'Естественный процесс, при котором парниковые газы поглощают часть длинноволнового (инфракрасного) излучения, испускаемого земной поверхностью, и часть этого излучения переизлучают обратно к поверхности, поддерживая её температуру выше, чем без этого.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'The greenhouse effect is natural and necessary for life; the problem is the enhanced greenhouse effect caused by human emissions.',
      ru: 'Парниковый эффект естествен и необходим для жизни; проблема — усиленный парниковый эффект, вызванный выбросами человека.',
    },
    sim: 'geo.core-greenhouse-effect',
  },
  {
    id: 'core-enhanced-greenhouse-effect',
    term: { en: 'enhanced greenhouse effect', ru: 'усиленный парниковый эффект (enhanced greenhouse effect)' },
    def: {
      en: 'The strengthening of the natural greenhouse effect by human emissions of greenhouse gases, which trap more outgoing radiation and raise the average temperature of the lower atmosphere and the surface.',
      ru: 'Усиление естественного парникового эффекта выбросами парниковых газов от деятельности человека: газы задерживают больше уходящего излучения, и растёт средняя температура нижней атмосферы и поверхности.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'The enhanced effect is the extra warming from human additions, not the whole greenhouse effect.',
      ru: 'Усиленный эффект — это дополнительное потепление от добавок человека, а не весь парниковый эффект.',
    },
  },
  {
    id: 'core-greenhouse-gas',
    term: { en: 'greenhouse gas', ru: 'парниковый газ (greenhouse gas)' },
    def: {
      en: 'A gas, such as carbon dioxide, methane, nitrous oxide or water vapour, that absorbs infrared radiation and re-emits it, so it adds to the greenhouse effect.',
      ru: 'Газ, например углекислый газ, метан, закись азота или водяной пар, который поглощает инфракрасное излучение и переизлучает его, усиливая парниковый эффект.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Water vapour is a greenhouse gas that responds to temperature; people do not add it directly the way they add CO₂, so it is treated as a feedback.',
      ru: 'Водяной пар — парниковый газ, который реагирует на температуру; человек не добавляет его напрямую так, как CO₂, поэтому его рассматривают как обратную связь.',
    },
  },
  {
    id: 'core-radiative-forcing',
    term: { en: 'radiative forcing', ru: 'радиационное воздействие (radiative forcing)' },
    def: {
      en: 'The change in the energy balance at the top of the atmosphere caused by a driver such as a rise in greenhouse gas concentrations, measured in watts per square metre (W m⁻²); a positive value means that more energy is retained and the climate warms.',
      ru: 'Изменение энергетического баланса на верхней границе атмосферы, вызванное фактором, например ростом концентрации парниковых газов; измеряется в ваттах на квадратный метр (Вт м⁻²); положительное значение означает, что энергии задерживается больше и климат теплеет.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Radiative forcing is a change in energy, not in temperature; the temperature response also depends on feedbacks.',
      ru: 'Радиационное воздействие — это изменение энергии, а не температуры; температурный отклик зависит и от обратных связей.',
    },
  },
  {
    id: 'core-albedo',
    term: { en: 'albedo', ru: 'альбедо (albedo)' },
    def: {
      en: 'The share of incoming solar radiation that a surface reflects back to space; light surfaces such as snow and ice have a high albedo, and dark surfaces such as open ocean have a low one.',
      ru: 'Доля приходящего солнечного излучения, которую поверхность отражает обратно в космос; светлые поверхности, например снег и лёд, имеют высокое альбедо, а тёмные, например открытая вода, — низкое.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Albedo describes reflection, not absorption; a fall in albedo means that more of the incoming energy is absorbed.',
      ru: 'Альбедо описывает отражение, а не поглощение; падение альбедо означает, что поглощается больше приходящей энергии.',
    },
  },
  {
    id: 'core-milankovitch-cycles',
    term: { en: 'Milankovitch cycles', ru: 'циклы Миланковича (Milankovitch cycles)' },
    def: {
      en: 'Long, regular changes in Earth’s orbit and axis: eccentricity (a cycle of about 90,000 to 100,000 years), the tilt of the axis or obliquity (about 40,000 years) and precession. Together they change how much solar energy reaches each latitude and season over tens of thousands of years.',
      ru: 'Долгопериодические регулярные изменения орбиты Земли и наклона её оси: эксцентриситет (цикл около 90 000–100 000 лет), наклон земной оси, или обликвитет (около 40 000 лет), и прецессия. Вместе они меняют количество солнечной энергии, поступающей на каждую широту и в каждый сезон, на протяжении десятков тысяч лет.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Milankovitch cycles act over tens of thousands of years, so they cannot explain warming that has happened since 1850.',
      ru: 'Циклы Миланковича действуют на протяжении десятков тысяч лет, поэтому они не объясняют потепление, произошедшее после 1850 года.',
    },
  },
  {
    id: 'core-solar-output',
    term: { en: 'solar output', ru: 'выход солнечной энергии (solar output)' },
    def: {
      en: 'The energy the Sun emits. It varies by about 0.1% over the 11-year solar cycle, so changes in solar output are a natural driver of climate.',
      ru: 'Энергия, которую излучает Солнце. Она меняется примерно на 0,1% за 11-летний солнечный цикл, поэтому изменения солнечного излучения — естественный фактор климата.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Judge a natural driver by its size and timing: the 11-year cycle repeats and does not build into a steady trend.',
      ru: 'Фактор оценивают по величине и по времени: 11-летний цикл повторяется и не превращается в устойчивый тренд.',
    },
  },
  {
    id: 'core-volcanic-aerosols',
    term: { en: 'volcanic aerosols', ru: 'вулканические аэрозоли (volcanic aerosols)' },
    def: {
      en: 'Fine sulphate particles formed from sulphur dioxide that large eruptions inject into the stratosphere; they reflect sunlight and cool the surface for a few years.',
      ru: 'Мелкие сульфатные частицы, образующиеся из диоксида серы, который мощные извержения выбрасывают в стратосферу; они отражают солнечный свет и охлаждают поверхность на несколько лет.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Volcanic cooling is temporary: after the 1991 eruption of Mount Pinatubo, global temperatures fell by about 0.5 °C from 1991 to 1993 (USGS).',
      ru: 'Охлаждение от вулканов временное: после извержения Пинатубо в 1991 году глобальная температура упала примерно на 0,5 °C в 1991–1993 годах (USGS).',
    },
  },
  {
    id: 'core-carbon-cycle',
    term: { en: 'carbon cycle', ru: 'углеродный цикл (carbon cycle)' },
    def: {
      en: 'The movement of carbon between stores in the atmosphere, oceans, land (plants and soils), rocks and fossil fuels, through flows such as photosynthesis, respiration, ocean exchange, volcanic outgassing and the burning of fossil fuels.',
      ru: 'Перемещение углерода между запасами в атмосфере, океанах, на суше (растения и почвы), в горных породах и ископаемом топливе по потокам: фотосинтез, дыхание, обмен с океаном, вулканические выбросы и сжигание ископаемого топлива.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'The cycle has large natural flows in both directions; human emissions add carbon that was stored in fossil fuels underground, so the atmospheric store grows.',
      ru: 'В цикле есть крупные естественные потоки в обоих направлениях; выбросы человека добавляют углерод, который был запасён в ископаемом топливе под землёй, и запас в атмосфере растёт.',
    },
    sim: 'geo.core-carbon-cycle',
  },
  {
    id: 'core-carbon-store',
    term: { en: 'carbon store', ru: 'запас углерода (carbon store)' },
    def: {
      en: 'A reservoir where carbon is held, such as the atmosphere, the oceans, living things and soils, rocks, or fossil fuels; stores differ in size and in how quickly carbon leaves them.',
      ru: 'Резервуар, где задерживается углерод, например атмосфера, океаны, живые организмы и почвы, горные породы или ископаемое топливо; запасы различаются по размеру и по скорости, с которой из них уходит углерод.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A store is not a flow: the atmosphere is a store of CO₂, while the rate at which carbon moves into or out of it is a flux.',
      ru: 'Запас — это не поток: атмосфера — это запас CO₂, а скорость, с которой углерод поступает в неё или уходит из неё, — это поток.',
    },
  },
  {
    id: 'core-carbon-flux',
    term: { en: 'carbon flux', ru: 'поток углерода (carbon flux)' },
    def: {
      en: 'The transfer of carbon from one store to another per unit of time, measured in gigatonnes of carbon per year (GtC/yr); a flux can be natural, such as photosynthesis, or human, such as the burning of fossil fuels.',
      ru: 'Перенос углерода из одного запаса в другой за единицу времени, измеряемый в гигатоннах углерода в год (GtC/yr); поток может быть естественным, например фотосинтез, или антропогенным, например сжигание ископаемого топлива.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'GtC (carbon) and GtCO₂ (carbon dioxide) differ by a factor of 3.664; do not mix them in one answer.',
      ru: 'GtC (углерод) и GtCO₂ (диоксид углерода) различаются в 3,664 раза; их нельзя смешивать в одном ответе.',
    },
  },
  {
    id: 'core-carbon-sink',
    term: { en: 'carbon sink', ru: 'сток углерода (carbon sink)' },
    def: {
      en: 'A store that takes up more carbon from the atmosphere than it releases, such as the oceans, forests and soils; sinks slow the rise of atmospheric CO₂.',
      ru: 'Запас, который поглощает из атмосферы больше углерода, чем выделяет, например океаны, леса и почвы; стоки замедляют рост концентрации CO₂ в атмосфере.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A sink can weaken or turn into a source: forest fires release carbon that was stored in trees.',
      ru: 'Сток может ослабнуть или стать источником: лесные пожары выделяют углерод, запасённый в деревьях.',
    },
  },
  {
    id: 'core-positive-feedback',
    term: { en: 'positive feedback', ru: 'положительная обратная связь (positive feedback)' },
    def: {
      en: 'A process in which a change sets off a response that adds to the original change, so the effect is amplified; for example, melting ice lowers albedo, the surface absorbs more sunlight and more ice melts.',
      ru: 'Процесс, в котором изменение запускает отклик, усиливающий исходное изменение; например, таяние льда снижает альбедо, поверхность поглощает больше солнечного света и тает ещё больше льда.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Positive means amplifying, not beneficial: a positive feedback makes climate change larger.',
      ru: 'Положительная означает усиливающая, а не полезная: положительная обратная связь делает изменение климата сильнее.',
    },
  },
  {
    id: 'core-negative-feedback',
    term: { en: 'negative feedback', ru: 'отрицательная обратная связь (negative feedback)' },
    def: {
      en: 'A process in which a change sets off a response that reduces the original change, so the system tends towards balance; for example, a warmer Earth radiates more energy to space, and faster plant growth takes up more CO₂.',
      ru: 'Процесс, в котором изменение запускает отклик, уменьшающий исходное изменение, так что система стремится к равновесию; например, более тёплая Земля излучает больше энергии в космос, а более быстрый рост растений поглощает больше CO₂.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Negative feedback slows a change but does not reverse it unless the response is larger than the original driver.',
      ru: 'Отрицательная обратная связь замедляет изменение, но не останавливает его, если отклик не сильнее исходного воздействия.',
    },
  },
  {
    id: 'core-ice-core',
    term: { en: 'ice core', ru: 'ледяной керн (ice core)' },
    def: {
      en: 'A cylinder of ice drilled from an ice sheet or glacier; air bubbles trapped in the ice record past atmospheric CO₂ and methane, and the isotopes in the ice record past temperature.',
      ru: 'Цилиндр льда, извлечённый бурением из ледникового покрова или ледника; пузырьки воздуха, заключённые во льду, сохраняют данные о прошлых концентрациях CO₂ и метана, а изотопы льда отражают прошлые температуры.',
    },
    syllabus: 'core-2.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'The air in the bubbles is younger than the ice around it, because air is trapped only after the snow has compacted.',
      ru: 'Воздух в пузырьках моложе окружающего льда: воздух замыкается в лёд только после уплотнения снега.',
    },
  },
];
