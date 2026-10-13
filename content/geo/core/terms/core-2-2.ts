import type { Term } from '../../../../src/contract/types';

// Core 2.2 (consequences of global climate change). Definitions are written in our own words from the key elements
// of the subtopic, in line with the Geography guide (2017). The ThinkIB eBook has no page numbers, so the locator
// names the eBook sections that cover the subtopic.
const src = { kind: 'thinkib' as const, title: 'ThinkIB Geography eBook', locator: 'Paper 2 › Unit 2 › 5a–5g' };

export const terms: Term[] = [
  {
    id: 'core-sea-level-rise',
    term: { en: 'sea-level rise', ru: 'подъём уровня моря (sea-level rise)' },
    def: {
      en: 'An increase in global mean sea level, caused mainly by the expansion of warming seawater and by the melting of glaciers and ice sheets on land.',
      ru: 'Рост среднего глобального уровня моря, вызванный в основном расширением нагревающейся морской воды и таянием ледников и ледяных щитов на суше.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Sea-level rise is a global average. The change at one coast can be larger or smaller because the land sinks or rises and because of ocean currents.',
      ru: 'Подъём уровня моря — это среднее значение по всей планете. Изменение у конкретного берега может быть больше или меньше из-за оседания или поднятия суши и океанических течений.',
    },
  },
  {
    id: 'core-ice-loss',
    term: { en: 'ice loss', ru: 'потеря наземного льда (ice loss)' },
    def: {
      en: 'The melting and breaking off of land ice from mountain glaciers and from the Greenland and Antarctic ice sheets, which adds water to the oceans and changes the freshwater supply of rivers.',
      ru: 'Таяние и откалывание наземного льда — горных ледников и ледяных щитов Гренландии и Антарктиды, — которое добавляет воду в океаны и меняет сток пресной воды в реках.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Sea ice already floats in the sea, so its melting barely changes sea level. The rise comes from land ice.',
      ru: 'Морской лёд уже плавает в море, поэтому его таяние почти не меняет уровень моря. Подъём вызывает наземный лёд.',
    },
  },
  {
    id: 'core-heatwave',
    term: { en: 'heatwave', ru: 'тепловая волна (heatwave)' },
    def: {
      en: 'A period of unusually hot weather, well above the normal temperatures for the place and season, lasting several days or longer and putting stress on people, crops and infrastructure.',
      ru: 'Период необычно жаркой погоды, значительно выше обычных для места и сезона температур, длящийся несколько дней или дольше и создающий нагрузку на людей, посевы и инфраструктуру.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A heatwave is measured against local normal temperatures, so 35 °C can be normal in one place and extreme in another.',
      ru: 'Тепловая волна определяется относительно местной нормы, поэтому 35 °C могут быть обычной погодой в одном месте и экстремальной — в другом.',
    },
  },
  {
    id: 'core-drought',
    term: { en: 'drought', ru: 'засуха (drought)' },
    def: {
      en: 'A prolonged period of much less rainfall than normal, which lowers soil moisture, river flow and water supply, and leads to crop failure or a higher risk of wildfire.',
      ru: 'Длительный период значительно меньших, чем обычно, осадков, который снижает влажность почвы, сток рек и водоснабжение и приводит к неурожаю или росту риска лесных пожаров.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Drought is a shortage of water measured against the local normal. A naturally dry place is not in drought just because it is dry.',
      ru: 'Засуха — это нехватка воды относительно местной нормы. Природно сухое место не находится в засухе только потому, что оно сухое.',
    },
  },
  {
    id: 'core-flash-flood',
    term: { en: 'flash flood', ru: 'внезапное наводнение (flash flood)' },
    def: {
      en: 'A sudden flood that develops within a few hours of intense rainfall, often on steep slopes or in built-up areas, leaving little time for warning or evacuation.',
      ru: 'Внезапное наводнение, которое возникает в течение нескольких часов после интенсивных осадков, часто на крутых склонах или в застроенных районах и оставляет мало времени на предупреждение и эвакуацию.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'The cause is heavy rain, but a flash flood is defined by its speed. A slow river flood after a distant storm is not a flash flood.',
      ru: 'Причина — сильный дождь, но внезапное наводнение определяется скоростью. Медленный речной паводок после далёкого шторма — это не внезапное наводнение.',
    },
  },
  {
    id: 'core-ocean-acidification',
    term: { en: 'ocean acidification', ru: 'подкисление океана (ocean acidification)' },
    def: {
      en: 'The fall in ocean pH as the sea absorbs extra carbon dioxide from the atmosphere, which makes it harder for corals and shellfish to build carbonate shells and skeletons.',
      ru: 'Снижение pH океана по мере того, как море поглощает дополнительный углекислый газ из атмосферы; из-за этого кораллам и моллюскам труднее строить карбонатные раковины и скелеты.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Acidification means pH falls, but seawater stays alkaline (pH above 7). It is a change in degree, not a change into acid.',
      ru: 'Подкисление означает падение pH, но морская вода остаётся щелочной (pH выше 7). Это изменение степени, а не превращение в кислоту.',
    },
  },
  {
    id: 'core-biome-shift',
    term: { en: 'biome shift', ru: 'смещение биомов (biome shift)' },
    def: {
      en: 'The movement of ecosystem boundaries and species ranges, usually towards the poles or to higher altitudes, as temperature and rainfall patterns change.',
      ru: 'Смещение границ экосистем и ареалов видов, обычно к полюсам или на большие высоты, по мере изменения температуры и режимов осадков.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A shift in range is not the same as extinction. Species may move, but not fast enough, or not at all if no suitable habitat exists.',
      ru: 'Смещение ареала — это не то же самое, что вымирание. Виды могут переместиться, но не успеть или не сделать этого, если подходящей среды обитания нет.',
    },
  },
  {
    id: 'core-tipping-point',
    term: { en: 'tipping point', ru: 'точка необратимости (tipping point)' },
    def: {
      en: 'A critical threshold beyond which part of the climate or ecosystem system reorganises abruptly, often irreversibly, so that a small further change in conditions brings a large response.',
      ru: 'Критический порог, за которым часть климатической или экосистемной системы резко и часто необратимо перестраивается, так что небольшое дальнейшее изменение условий вызывает большой отклик.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A tipping point is a threshold in the system, not a fixed year on the calendar, and scientists cannot always say exactly where it lies.',
      ru: 'Точка необратимости — это порог в системе, а не фиксированный год в календаре, и учёные не всегда могут точно сказать, где он находится.',
    },
  },
  {
    id: 'core-food-security',
    term: { en: 'food security', ru: 'продовольственная безопасность (food security)' },
    def: {
      en: 'A situation in which all people have physical and economic access to enough safe and nutritious food to meet their dietary needs for an active and healthy life.',
      ru: 'Ситуация, при которой все люди имеют физический и экономический доступ к достаточному количеству безопасной и питательной пищи, чтобы удовлетворять свои пищевые потребности для активной и здоровой жизни.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Food security is about access and use as well as supply. A country can produce enough food and still have households that cannot afford it.',
      ru: 'Продовольственная безопасность — это доступ к пище и её использование, а не только производство. Страна может производить достаточно еды, а домохозяйства всё равно не смогут её купить.',
    },
  },
  {
    id: 'core-water-security',
    term: { en: 'water security', ru: 'водная безопасность (water security)' },
    def: {
      en: 'Access to enough water of acceptable quality for health, livelihoods and production, together with an acceptable level of water-related risk, such as floods and droughts.',
      ru: 'Доступ к достаточному количеству воды приемлемого качества для здоровья, средств к существованию и производства при приемлемом уровне водных рисков, таких как наводнения и засухи.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Water security is not the same as having a lot of water. Salty or polluted water can make a supply insecure even when it is plentiful.',
      ru: 'Водная безопасность — это не просто большой объём воды. Солёная или загрязнённая вода делает запасы небезопасными, даже если их много.',
    },
  },
  {
    id: 'core-salinity-intrusion',
    term: { en: 'salinity intrusion (saltwater intrusion)', ru: 'проникновение солёной воды (salinity intrusion)' },
    def: {
      en: 'The movement of salt water inland into rivers, soils and freshwater aquifers, often caused by sea-level rise, storm surges and low river flow, which reduces the water and land available for drinking and farming.',
      ru: 'Продвижение солёной воды вглубь суши в реки, почвы и пресноводные водоносные горизонты; его часто вызывают подъём уровня моря, штормовые нагоны и низкий сток рек, что сокращает воду и землю для питья и земледелия.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Salt water can move inland in the dry season, when river flow is low, not only during floods.',
      ru: 'Солёная вода может продвигаться вглубь суши в сухой сезон, когда сток рек низкий, а не только во время наводнений.',
    },
  },
  {
    id: 'core-displacement',
    term: { en: 'displacement', ru: 'вынужденное перемещение (displacement)' },
    def: {
      en: 'The forced movement of people from their homes because of sudden hazards or slow environmental change, such as floods, storms, drought or sea-level rise. It can happen inside a country or across a border.',
      ru: 'Вынужденное переселение людей из их домов из-за внезапных опасностей или медленных изменений окружающей среды, таких как наводнения, штормы, засуха или подъём уровня моря. Оно может происходить внутри страны или через границу.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Displacement is forced, unlike voluntary migration for work or study. People who leave before a disaster can still count as displaced.',
      ru: 'Вынужденное перемещение происходит против воли людей, в отличие от добровольной миграции ради работы или учёбы. Люди, уехавшие до катастрофы, тоже могут считаться перемещёнными.',
    },
  },
  {
    id: 'core-vulnerability',
    term: { en: 'vulnerability', ru: 'уязвимость (vulnerability)' },
    def: {
      en: 'The degree to which a person, community or place is likely to be harmed by a hazard, depending on how exposed it is, how sensitive it is to the hazard and how little it can cope with or recover from it.',
      ru: 'Степень, в которой человек, сообщество или место может пострадать от опасности; она зависит от подверженности, чувствительности к опасности и ограниченной способности справиться с ней и восстановиться.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Vulnerability is not the same as exposure. A place can be exposed to a flood but have low vulnerability if it is well protected and its people can cope.',
      ru: 'Уязвимость — это не то же самое, что подверженность. Место может находиться в зоне наводнения, но иметь низкую уязвимость, если оно хорошо защищено и люди способны справиться.',
    },
  },
  {
    id: 'core-resilience',
    term: { en: 'resilience', ru: 'устойчивость (resilience)' },
    def: {
      en: 'The ability of a community, place or system to absorb a shock or stress, keep its essential functions and recover, or reorganise, without losing its basic character.',
      ru: 'Способность сообщества, места или системы выдерживать удар или нагрузку, сохранять основные функции и восстанавливаться или перестраиваться, не теряя своего основного характера.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Resilience is about absorbing a shock and recovering. It is not the same as being protected from the hazard in the first place.',
      ru: 'Устойчивость — это способность выдержать удар и восстановиться. Это не то же самое, что защищённость от опасности изначально.',
    },
  },
  {
    id: 'core-adaptive-capacity',
    term: { en: 'adaptive capacity', ru: 'адаптационный потенциал (adaptive capacity)' },
    def: {
      en: 'The ability of a community or country to adjust to climate change, reduce possible damage, take advantage of opportunities and cope with the consequences. It depends on wealth, institutions, technology, information and social networks.',
      ru: 'Способность сообщества или страны приспосабливаться к изменению климата, уменьшать возможный ущерб, использовать возможности и справляться с последствиями. Он зависит от богатства, институтов, технологий, информации и социальных связей.',
    },
    syllabus: 'core-2.2',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Adaptive capacity is a potential, not an action. A rich country can have high capacity and still act slowly.',
      ru: 'Адаптационный потенциал — это возможность, а не действие. Богатая страна может обладать высоким потенциалом и всё же действовать медленно.',
    },
  },
];
