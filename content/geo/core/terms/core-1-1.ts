import type { Term } from '../../../../src/contract/types';

// Topic core-1.1 (population and economic development). Definitions are our own wording of the key elements of the
// Geography guide (2017) core 1.1; no textbook locator is available yet (no PACK), so the source kind is 'own'.
const own = { kind: 'own' as const, title: 'Geography guide (2017), core 1.1' };

export const terms: Term[] = [
  {
    id: 'core-natural-increase',
    term: { en: 'natural increase', ru: 'естественный прирост (natural increase)' },
    def: {
      en: 'The difference between births and deaths in a population over a period, usually given per 1000 people. Migration is excluded; a negative value is a natural decrease.',
      ru: 'Разница между числом рождений и числом смертей в населении за период, обычно на 1000 человек. Миграция не учитывается; отрицательное значение означает естественную убыль.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'Natural increase is not the total population change: migration also changes the size of a population.',
      ru: 'Естественный прирост — это не общее изменение населения: размер населения меняет и миграция.',
    },
    example: {
      en: 'Niger, 2023: 41.9 births minus 8.9 deaths per 1000 gives 33.0 per 1000 (UN WPP 2024).',
      ru: 'Нигер, 2023: 41,9 рождений минус 8,9 смертей на 1000 человек дают 33,0 на 1000 (UN WPP 2024).',
    },
  },
  {
    id: 'core-crude-birth-rate',
    term: { en: 'crude birth rate (CBR)', ru: 'общий коэффициент рождаемости (crude birth rate)' },
    def: {
      en: 'The number of live births in one year for every 1000 people in the population at the middle of that year.',
      ru: 'Число живорождений за один год на 1000 человек населения на середину этого года.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'It divides by the whole population, not by women of childbearing age; that is why it is called crude.',
      ru: 'Делится на всё население, а не на женщин репродуктивного возраста; поэтому коэффициент назван «общим».',
    },
  },
  {
    id: 'core-crude-death-rate',
    term: { en: 'crude death rate (CDR)', ru: 'общий коэффициент смертности (crude death rate)' },
    def: {
      en: 'The number of deaths in one year for every 1000 people in the population at the middle of that year.',
      ru: 'Число смертей за один год на 1000 человек населения на середину этого года.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'A low crude death rate does not always mean a young population: an ageing population can have a higher rate even with good health care.',
      ru: 'Низкий общий коэффициент смертности не всегда означает молодое население: у стареющего населения он может быть выше даже при хорошей медицине.',
    },
  },
  {
    id: 'core-total-fertility-rate',
    term: { en: 'total fertility rate (TFR)', ru: 'суммарный коэффициент рождаемости (total fertility rate)' },
    def: {
      en: 'The average number of children a woman would have over her lifetime if she experienced the age-specific birth rates of a given year throughout her childbearing years (about 15 to 49).',
      ru: 'Среднее число детей, которое родила бы женщина за жизнь, если бы в течение репродуктивного возраста (примерно 15–49 лет) она испытывала возрастные коэффициенты рождаемости данного года.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'TFR is a rate per woman, not a count of births, and it is not the average family size of the women alive today.',
      ru: 'TFR — это показатель на одну женщину, а не число рождений, и это не средний размер семьи нынешних женщин.',
    },
  },
  {
    id: 'core-demographic-transition-model',
    term: { en: 'demographic transition model (DTM)', ru: 'модель демографического перехода (demographic transition model)' },
    def: {
      en: 'A model in which a country’s birth and death rates fall from high levels to low levels over five stages as it develops, with a period of rapid natural increase in between.',
      ru: 'Модель, по которой рождаемость и смертность страны снижаются с высокого уровня до низкого в пять стадий по мере развития, а между ними возникает период быстрого естественного прироста.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'The model describes a general pattern: countries move through the stages at different speeds, and not every country follows it exactly.',
      ru: 'Модель описывает общую закономерность: страны проходят стадии с разной скоростью, и не каждая следует ей точно.',
    },
    sim: 'geo.core-demographic-transition',
  },
  {
    id: 'core-population-pyramid',
    term: { en: 'population pyramid', ru: 'возрастно-половая пирамида (population pyramid)' },
    def: {
      en: 'A pair of bar charts, one for males and one for females, showing each sex’s share of the population in each age group. Its shape reflects past birth rates, death rates and migration.',
      ru: 'Пара столбчатых диаграмм, для мужчин и для женщин, которые показывают долю каждого пола в каждой возрастной группе. Её форма отражает прошлую рождаемость, смертность и миграцию.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'Read the bars from the base upwards: a wide base means many children, not many old people.',
      ru: 'Читайте столбцы снизу вверх: широкое основание означает много детей, а не много пожилых людей.',
    },
    sim: 'geo.core-population-pyramid',
  },
  {
    id: 'core-dependency-ratio',
    term: { en: 'dependency ratio', ru: 'коэффициент демографической нагрузки (dependency ratio)' },
    def: {
      en: 'The number of dependants, people under 15 and over 64, for every 100 people of working age (15 to 64).',
      ru: 'Число иждивенцев, то есть людей младше 15 и старше 64 лет, на каждые 100 человек трудоспособного возраста (15–64 года).',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'The ratio counts both ends of the age range: a high figure can come from many children or from many older people.',
      ru: 'В коэффициенте учитываются обе крайние возрастные группы: высокое значение может быть вызвано как большим числом детей, так и большим числом пожилых людей.',
    },
  },
  {
    id: 'core-infant-mortality-rate',
    term: { en: 'infant mortality rate', ru: 'младенческая смертность (infant mortality rate)' },
    def: {
      en: 'The number of deaths of children under one year old in a year for every 1000 live births in that year.',
      ru: 'Число смертей детей в возрасте до одного года за год на 1000 живорождений за тот же год.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'The base is live births, not the total population.',
      ru: 'Базой служат живорождения, а не всё население.',
    },
  },
  {
    id: 'core-life-expectancy',
    term: { en: 'life expectancy at birth', ru: 'ожидаемая продолжительность жизни при рождении (life expectancy at birth)' },
    def: {
      en: 'The average number of years a newborn baby would live if the age-specific death rates of a given year stayed the same throughout life.',
      ru: 'Среднее число лет, которое прожил бы новорождённый, если бы возрастные коэффициенты смертности данного года оставались неизменными на протяжении всей жизни.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
  },
  {
    id: 'core-human-development-index',
    term: { en: 'Human Development Index (HDI)', ru: 'индекс развития человеческого потенциала (ИРЧП, Human Development Index)' },
    def: {
      en: 'A score from 0 to 1 that combines life expectancy at birth, years of schooling and gross national income per capita, measuring average achievement in health, education and living standards.',
      ru: 'Показатель от 0 до 1, который объединяет ожидаемую продолжительность жизни при рождении, годы обучения и валовой национальный доход на душу населения; отражает средние достижения в здоровье, образовании и уровне жизни.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'The HDI is an average for the whole country, so it hides differences between regions and social groups.',
      ru: 'ИРЧП — среднее значение по всей стране, поэтому он скрывает различия между регионами и социальными группами.',
    },
  },
  {
    id: 'core-gni-per-capita',
    term: { en: 'GNI per capita', ru: 'валовой национальный доход на душу населения (GNI per capita)' },
    def: {
      en: 'Gross national income divided by the population: the total income of a country’s residents, including income earned abroad, per person.',
      ru: 'Валовой национальный доход, делённый на численность населения: совокупный доход резидентов страны, включая доход, полученный за границей, в расчёте на одного человека.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'GNI counts the income of a country’s residents wherever they work; GDP counts the output produced inside its borders.',
      ru: 'ВНД учитывает доходы резидентов страны независимо от места работы; ВВП учитывает производство внутри её границ.',
    },
    example: {
      en: 'Niger, 2025: USD 750 per person; Japan, 2025: USD 38,340 (World Bank, Atlas method).',
      ru: 'Нигер, 2025: 750 USD на человека; Япония, 2025: 38 340 USD (Всемирный банк, метод Атлас).',
    },
  },
  {
    id: 'core-malthus-theory',
    term: { en: 'Malthusian theory', ru: 'теория Мальтуса (Malthusian theory)' },
    def: {
      en: 'Thomas Malthus (1798) argued that population grows geometrically while food supply grows arithmetically, so growth would be checked by famine, disease and war unless people limited their numbers.',
      ru: 'Томас Мальтус (1798) утверждал, что население растёт в геометрической прогрессии, а производство продовольствия — в арифметической, поэтому рост будет ограничен голодом, болезнями и войнами, если люди не сократят численность.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'Malthus argued that growth would be checked; he did not say that every society would starve.',
      ru: 'Мальтус утверждал, что рост будет ограничен; он не говорил, что каждое общество обречено на голод.',
    },
    sim: 'geo.core-malthus-boserup',
  },
  {
    id: 'core-boserup-theory',
    term: { en: 'Boserup theory', ru: 'теория Бозеруп (Boserup theory)' },
    def: {
      en: 'Ester Boserup (1965) argued that population growth creates pressure on food supply, which pushes farmers to intensify production and adopt new techniques, so food output rises with population.',
      ru: 'Эстер Бозеруп (1965) утверждала, что рост населения создаёт давление на продовольственное обеспечение, которое побуждает фермеров интенсифицировать производство и внедрять новые методы; поэтому производство продовольствия растёт вместе с населением.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'Boserup is about how farmers respond to population pressure; she did not claim that food supply always keeps up.',
      ru: 'Бозеруп говорит о том, как фермеры реагируют на давление населения; она не утверждала, что производство продовольствия всегда успевает за ростом.',
    },
    sim: 'geo.core-malthus-boserup',
  },
  {
    id: 'core-positive-preventive-checks',
    term: { en: 'positive and preventive checks', ru: 'положительные и превентивные сдерживающие факторы (positive and preventive checks)' },
    def: {
      en: 'Malthus’s two ways of limiting population: positive checks raise the death rate (famine, disease, war); preventive checks lower the birth rate (for example, later marriage or restraint).',
      ru: 'Два способа ограничения численности населения по Мальтусу: положительные сдерживающие факторы повышают смертность (голод, болезни, война); превентивные снижают рождаемость (например, позднее вступление в брак или воздержание).',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'Preventive checks are chosen by people, such as marrying later; positive checks are imposed by crisis.',
      ru: 'Превентивные факторы выбирают сами люди, например позже вступают в брак; положительные навязывает кризис.',
    },
  },
  {
    id: 'core-carrying-capacity',
    term: { en: 'carrying capacity', ru: 'несущая способность (carrying capacity)' },
    def: {
      en: 'The largest population an area can support indefinitely with its available resources, without long-term damage to those resources.',
      ru: 'Наибольшая численность населения, которую территория может поддерживать неограниченно долго имеющимися ресурсами, без долгосрочного ущерба для этих ресурсов.',
    },
    syllabus: 'core-1.1',
    papers: ['P2'],
    src: own,
    pitfall: {
      en: 'Carrying capacity depends on technology and trade as well as on land, so it is not a fixed number.',
      ru: 'Несущая способность зависит от технологий и торговли, а не только от земли, поэтому это не фиксированное число.',
    },
  },
];
