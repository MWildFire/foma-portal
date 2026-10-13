import type { SourceRef, Term } from '../../../../src/contract/types';

const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.8' };

export const terms: Term[] = [
  {
    id: 'economic-development',
    term: { en: 'economic development', ru: 'экономическое развитие (economic development)' },
    def: {
      en: 'A broader improvement in living standards, including health, education, income distribution and freedom of choice, not just a rise in output.',
      ru: 'Более широкое улучшение уровня жизни, включая здоровье, образование, распределение доходов и свободу выбора, а не только рост выпуска.',
    },
    example: {
      en: 'Real output rises by 4% a year, but life expectancy and school enrolment stay flat: growth without development.',
      ru: 'Реальный выпуск растёт на 4% в год, но ожидаемая продолжительность жизни и охват школой не меняются: рост без развития.',
    },
    pitfall: {
      en: 'Economic growth is a rise in real output; development is wider. Growth can happen without development when the gains go to a few people.',
      ru: 'Экономический рост — это рост реального выпуска, а развитие шире. Рост может идти без развития, если выгоды достаются немногим.',
    },
    syllabus: '4.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'gross-national-income',
    term: { en: 'gross national income (GNI)', ru: 'валовой национальный доход (ВНД, gross national income)' },
    def: {
      en: 'The total income earned by the residents of a country, wherever they earn it: GDP plus net income received from abroad.',
      ru: 'Совокупный доход резидентов страны, где бы они его ни получали: ВВП плюс чистый доход, полученный из-за границы.',
    },
    example: {
      en: 'A country with GDP of USD 30000 million and net income from abroad of USD 1500 million has a GNI of USD 31500 million.',
      ru: 'У страны ВВП 30000 млн USD и чистый доход из-за границы 1500 млн USD, поэтому ВНД составляет 31500 млн USD.',
    },
    pitfall: {
      en: 'GDP counts output produced inside the borders; GNI counts income earned by residents, so the two can differ.',
      ru: 'ВВП учитывает выпуск внутри границ страны, а ВНД — доход резидентов, поэтому эти показатели могут различаться.',
    },
    syllabus: '4.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'gni-per-capita',
    term: { en: 'GNI per capita', ru: 'валовой национальный доход на душу населения (GNI per capita)' },
    def: {
      en: 'Gross national income divided by the population: the average income per person. It is used to compare living standards, usually after conversion into a common currency.',
      ru: 'Валовой национальный доход, делённый на численность населения: средний доход одного человека. Используется для сравнения уровня жизни, обычно после пересчёта в общую валюту.',
    },
    example: {
      en: 'GNI of USD 45000 million shared by 3.1 million people gives a GNI per capita of about USD 14516.',
      ru: 'ВНД 45000 млн USD при 3,1 млн человек даёт ВНД на душу населения примерно 14516 USD.',
    },
    pitfall: {
      en: 'The average hides distribution: a high GNI per capita can coexist with very unequal incomes and widespread poverty.',
      ru: 'Среднее значение скрывает распределение: высокий ВНД на душу населения может сочетаться с очень неравными доходами и широкой бедностью.',
    },
    syllabus: '4.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'purchasing-power-parity',
    term: { en: 'purchasing power parity (PPP)', ru: 'паритет покупательной способности (purchasing power parity, PPP)' },
    def: {
      en: 'An exchange rate at which the same basket of goods and services costs the same in two countries. PPP conversion shows living standards more closely than market exchange rates.',
      ru: 'Обменный курс, при котором один и тот же набор товаров и услуг стоит одинаково в двух странах. Пересчёт по PPP точнее показывает уровень жизни, чем рыночные курсы.',
    },
    example: {
      en: 'If a basket costs AED 90 in country X and USD 25 in the USA, the PPP exchange rate is 3.6 AED per USD.',
      ru: 'Если набор стоит 90 AED в стране X и 25 USD в США, курс PPP составляет 3,6 AED за USD.',
    },
    pitfall: {
      en: 'PPP rates are used to compare living standards, not for trade or currency transactions, which use market rates.',
      ru: 'Курсы PPP применяют для сравнения уровня жизни, а не для торговли и валютных операций, где действуют рыночные курсы.',
    },
    syllabus: '4.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'international-dollar',
    term: { en: 'international dollar', ru: 'международный доллар (international dollar)' },
    def: {
      en: 'A notional unit with the same purchasing power in the USA as one USD, used to compare incomes between countries on a PPP basis.',
      ru: 'Условная единица с такой же покупательной способностью в США, как у одного доллара США; используется для сравнения доходов стран на основе PPP.',
    },
    example: {
      en: 'An income of 14516 international dollars buys what 14516 USD would buy in the USA.',
      ru: 'Доход в 14516 международных долларов позволяет купить то, что в США купили бы за 14516 USD.',
    },
    pitfall: {
      en: 'An international dollar is not spendable money; it is a unit for comparing purchasing power across countries.',
      ru: 'Международный доллар — не реальные деньги для расчётов; это единица для сравнения покупательной способности стран.',
    },
    syllabus: '4.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'human-development-index',
    term: { en: 'Human Development Index (HDI)', ru: 'индекс развития человеческого потенциала (Human Development Index, HDI)' },
    def: {
      en: 'A composite index from 0 to 1 that combines life expectancy at birth, education (years of schooling) and GNI per capita at PPP to measure development.',
      ru: 'Составной индекс от 0 до 1, который объединяет ожидаемую продолжительность жизни при рождении, образование (годы обучения) и ВНД на душу населения по PPP.',
    },
    example: {
      en: 'An HDI of 0.750 falls in the high band, which runs from 0.700 to 0.799.',
      ru: 'HDI 0,750 относится к группе высокого развития, которая охватывает значения от 0,700 до 0,799.',
    },
    pitfall: {
      en: 'The HDI is not a measure of happiness or freedom; it covers health, education and income, and the basic index does not show inequality within a country.',
      ru: 'HDI — не мера счастья или свободы: он охватывает здоровье, образование и доход, а базовый индекс не показывает неравенство внутри страны.',
    },
    syllabus: '4.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'life-expectancy-at-birth',
    term: { en: 'life expectancy at birth', ru: 'ожидаемая продолжительность жизни при рождении (life expectancy at birth)' },
    def: {
      en: 'The average number of years a newborn can expect to live if current age-specific death rates continue unchanged.',
      ru: 'Среднее число лет, которое проживёт новорождённый, если нынешние возрастные показатели смертности сохранятся.',
    },
    example: {
      en: 'A life expectancy at birth of 72 years means a child born today can expect to live 72 years if current death rates continue.',
      ru: 'Ожидаемая продолжительность жизни при рождении 72 года означает, что ребёнок, родившийся сегодня, в среднем проживёт 72 года при сохранении нынешней смертности.',
    },
    pitfall: {
      en: 'It is an average for a whole cohort, not the age at which people die; many people live longer and some die young.',
      ru: 'Это среднее значение для целого поколения, а не возраст смерти людей: многие живут дольше, а некоторые умирают раньше.',
    },
    syllabus: '4.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'mean-years-of-schooling',
    term: { en: 'mean years of schooling', ru: 'среднее количество лет обучения (mean years of schooling)' },
    def: {
      en: 'The average number of years of formal education completed by adults aged 25 and over. It is one of the two education indicators in the HDI.',
      ru: 'Среднее число лет формального образования у взрослых в возрасте 25 лет и старше. Это один из двух показателей образования в HDI.',
    },
    example: {
      en: 'A mean of 8.0 years of schooling means the average adult aged 25 or over has completed 8 years of education.',
      ru: 'Среднее значение 8,0 года означает, что средний взрослый в возрасте 25 лет и старше получил 8 лет образования.',
    },
    pitfall: {
      en: 'It measures attainment, not learning: a child can attend school for years and still learn very little.',
      ru: 'Показатель отражает уровень образования, а не знания: ребёнок может годами ходить в школу и почти ничему не научиться.',
    },
    syllabus: '4.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
];
