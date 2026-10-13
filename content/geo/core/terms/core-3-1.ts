import type { SourceRef, Term } from '../../../../src/contract/types';

// Syllabus core 3.1 (global trends in consumption). Definitions are in our own words, from the Geography guide (2017), core 3.1.
// No textbook is available yet, so the source has no locator (PLAN.md section 7).
const src: SourceRef = { kind: 'own', title: 'Author wording, Geography guide (2017) core 3.1; textbook locator pending' };

export const terms: Term[] = [
  {
    id: 'core-natural-resource',
    term: { en: 'natural resource', ru: 'природный ресурс (natural resource)' },
    def: {
      en: 'A material, substance or energy source from the natural environment that people use or value, such as water, soil, minerals, forests, fish or fossil fuels.',
      ru: 'Материал, вещество или источник энергии из природной среды, которые люди используют или ценят, например вода, почва, полезные ископаемые, леса, рыба или ископаемое топливо.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Something becomes a resource through human use and value: a river or a rock is not a resource until people can and do use it.',
      ru: 'Объект становится ресурсом благодаря использованию и ценности для людей: река или порода не становится ресурсом, пока люди не могут и не используют её.',
    },
  },
  {
    id: 'core-renewable-resource',
    term: { en: 'renewable resource', ru: 'возобновляемый ресурс (renewable resource)' },
    def: {
      en: 'A resource that natural processes replace on a human timescale, provided it is not used faster than it regenerates, such as solar energy, wind or timber from well-managed forests.',
      ru: 'Ресурс, который природные процессы восстанавливают в человеческом масштабе времени при условии, что его не используют быстрее, чем он восстанавливается, например солнечная энергия, энергия ветра или древесина из хорошо управляемых лесов.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Renewable does not mean unlimited: groundwater and fish stocks are renewable only while use stays within the rate of natural recovery.',
      ru: 'Возобновляемый не значит неограниченный: грунтовые воды и рыбные запасы возобновляемы, только пока использование остаётся в пределах скорости природного восстановления.',
    },
  },
  {
    id: 'core-non-renewable-resource',
    term: { en: 'non-renewable resource', ru: 'невозобновляемый ресурс (non-renewable resource)' },
    def: {
      en: 'A resource that forms too slowly to be replaced on a human timescale, so its stock falls as it is used, such as coal, oil, natural gas or metal ores.',
      ru: 'Ресурс, который образуется слишком медленно, чтобы восполниться в человеческом масштабе времени, поэтому его запас уменьшается по мере использования, например уголь, нефть, природный газ или металлические руды.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-reserve',
    term: { en: 'reserve', ru: 'запас (reserve)' },
    def: {
      en: 'The part of a known resource that can be extracted economically and technically at present, given current prices, technology and legal conditions.',
      ru: 'Часть известного ресурса, которую можно экономически выгодно и технически извлечь в настоящее время при действующих ценах, технологиях и правовых условиях.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'A reserve is not all the resource in the ground. Reserves can rise when prices rise or new methods are found, so a higher reserve figure does not always mean a new discovery.',
      ru: 'Запас — это не весь ресурс в недрах. Запасы могут расти при росте цен или появлении новых методов, поэтому большая цифра запасов не всегда означает новое открытие.',
    },
  },
  {
    id: 'core-resource-security',
    term: { en: 'resource security', ru: 'ресурсная безопасность (resource security)' },
    def: {
      en: 'The reliable access of a population to enough food, water and energy at a price it can afford, including the ability to withstand disruption to supplies.',
      ru: 'Надёжный доступ населения к достаточному количеству продовольствия, воды и энергии по доступной цене, включая способность выдерживать перебои поставок.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-energy-security',
    term: { en: 'energy security', ru: 'энергетическая безопасность (energy security)' },
    def: {
      en: 'Reliable access to energy supplies at an affordable price, including a country’s ability to cope with disruption to its imports or its domestic production.',
      ru: 'Надёжный доступ к поставкам энергии по доступной цене, включая способность страны справляться с перебоями импорта или внутреннего производства.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-undernourishment',
    term: { en: 'prevalence of undernourishment', ru: 'распространённость недоедания (prevalence of undernourishment)' },
    def: {
      en: 'The share of a population whose habitual food intake is too low to provide the energy that people need for an active and healthy life.',
      ru: 'Доля населения, обычное потребление пищи которого слишком мало для энергии, необходимой для активной и здоровой жизни.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'Prevalence is a share, not a count. When a question asks for a number of people, give the count: 673 million in 2024 (FAO, SOFI 2025).',
      ru: 'Распространённость — это доля, а не число. Если вопрос просит число людей, приведите его: 673 миллиона в 2024 году (FAO, SOFI 2025).',
    },
  },
  {
    id: 'core-ecological-footprint',
    term: { en: 'ecological footprint', ru: 'экологический след (ecological footprint)' },
    def: {
      en: 'The area of productive land and sea that a population needs to supply the resources it consumes and to absorb its waste, measured in global hectares.',
      ru: 'Площадь продуктивной суши и моря, которая нужна населению, чтобы обеспечить потребляемые им ресурсы и поглотить его отходы; измеряется в глобальных гектарах.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'The footprint is not only carbon. Carbon is one of six components; the others are cropland, grazing land, forest products, fishing grounds and built-up land.',
      ru: 'Экологический след — это не только углерод. Углерод — один из шести компонентов; остальные: пашня, пастбища, лесная продукция, рыбопромысловые угодья и застроенные территории.',
    },
    sim: 'geo.core-ecological-footprint',
  },
  {
    id: 'core-biocapacity',
    term: { en: 'biocapacity', ru: 'биоёмкость (biocapacity)' },
    def: {
      en: 'The capacity of the ecosystems in a given area to produce the biological materials that people use and to absorb waste, measured in global hectares for one year.',
      ru: 'Способность экосистем данной территории производить биологические материалы, которые используют люди, и поглощать отходы; измеряется в глобальных гектарах за один год.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-ecological-overshoot',
    term: { en: 'ecological overshoot', ru: 'экологический перерасход (ecological overshoot)' },
    def: {
      en: 'The situation in which a population’s ecological footprint is larger than the biocapacity available in the same year, so that demand exceeds what ecosystems can regenerate.',
      ru: 'Ситуация, при которой экологический след населения больше биоёмкости в тот же год, то есть спрос превышает то, что экосистемы способны восстановить.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-global-hectare',
    term: { en: 'global hectare (gha)', ru: 'глобальный гектар (global hectare, gha)' },
    def: {
      en: 'A standard unit for ecological footprint and biocapacity: one hectare of land or water with the world average productivity in a given year.',
      ru: 'Стандартная единица экологического следа и биоёмкости: гектар суши или воды со средней по миру продуктивностью в данном году.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-ipat-identity',
    term: { en: 'IPAT identity', ru: 'тождество IPAT (IPAT identity)' },
    def: {
      en: 'A simple model in which environmental impact equals population multiplied by affluence (consumption per person) multiplied by technology (impact per unit of consumption).',
      ru: 'Простая модель, в которой воздействие на окружающую среду равно населению, умноженному на благосостояние (потребление на человека), и умноженному на технологию (воздействие на единицу потребления).',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'IPAT is an identity, not a forecast. It shows how the three factors multiply together, but it does not say which factor will change most.',
      ru: 'IPAT — это тождество, а не прогноз. Оно показывает, как три фактора перемножаются, но не говорит, какой из них изменится сильнее всего.',
    },
  },
  {
    id: 'core-affluence',
    term: { en: 'affluence', ru: 'благосостояние (affluence)' },
    def: {
      en: 'The income and material wealth of a person or group, which determine how much energy, food, water and goods they use.',
      ru: 'Доход и материальное богатство человека или группы, которые определяют, сколько энергии, продовольствия, воды и товаров они используют.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
  },
  {
    id: 'core-material-footprint',
    term: { en: 'material footprint', ru: 'материальный след (material footprint)' },
    def: {
      en: 'The total quantity of raw materials extracted worldwide to meet a country’s final demand, including the materials embodied in its imported goods.',
      ru: 'Общий объём сырьевых материалов, добытых в мире для удовлетворения конечного спроса страны, включая материалы, заключённые в импортируемых товарах.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
    pitfall: {
      en: 'The material footprint counts materials used abroad to make imports, so it can be much larger than the materials a country extracts at home.',
      ru: 'Материальный след учитывает материалы, использованные за рубежом для производства импорта, поэтому он может быть значительно больше добычи внутри страны.',
    },
  },
  {
    id: 'core-resource-productivity',
    term: { en: 'resource productivity', ru: 'продуктивность ресурсов (resource productivity)' },
    def: {
      en: 'The economic output, such as GDP, produced for each unit of resource used, for example per tonne of materials. Higher resource productivity means less resource use for the same output.',
      ru: 'Экономический выпуск, например ВВП, создаваемый на единицу использованного ресурса, например на тонну материалов. Более высокая продуктивность ресурсов означает меньшее использование ресурсов при том же выпуске.',
    },
    syllabus: 'core-3.1',
    papers: ['P2'],
    src,
  },
];
