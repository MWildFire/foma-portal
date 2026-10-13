import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'asymmetric-information',
    term: { en: 'asymmetric information', ru: 'асимметричная информация (asymmetric information)' },
    def: {
      en: 'A situation in which one party to a transaction knows more than the other about quality, risk or behaviour, so the market may fail to allocate resources efficiently.',
      ru: 'Ситуация, в которой одна сторона сделки знает о качестве, риске или поведении больше, чем другая, поэтому рынок может не распределять ресурсы эффективно.',
    },
    example: {
      en: 'A used-car seller knows that a car needs AED 6000 of repairs, but the buyer cannot see this and pays AED 30000 for it.',
      ru: 'Продавец подержанного автомобиля знает, что машине нужен ремонт на 6000 AED, но покупатель этого не видит и платит за неё 30000 AED.',
    },
    pitfall: {
      en: 'Asymmetric information is not the same as no information: both sides may know something, but one side knows more or knows it better.',
      ru: 'Асимметричная информация — это не отсутствие информации: у обеих сторон может быть какое-то знание, но одна знает больше или точнее.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.10' },
  },
  {
    id: 'adverse-selection',
    term: { en: 'adverse selection', ru: 'неблагоприятный отбор (adverse selection)' },
    def: {
      en: 'A pre-contract problem: the less-informed party cannot tell quality or risk apart, so the market ends up with a disproportionate share of poor-quality goods or high-risk buyers.',
      ru: 'Проблема до заключения сделки: менее информированная сторона не может отличить качество или риск, поэтому на рынке растёт доля плохих товаров или покупателей с высоким риском.',
    },
    example: {
      en: "If an insurer charges AED 500 a month to everyone, healthy customers may leave, so the insurer's claims per customer rise and it must raise the premium again.",
      ru: 'Если страховая компания берёт со всех 500 AED в месяц, здоровые клиенты могут уйти, поэтому выплаты на одного клиента растут и страховщику приходится снова поднимать премию.',
    },
    pitfall: {
      en: 'Adverse selection happens before the deal and comes from hidden characteristics; moral hazard happens after the deal and comes from hidden actions.',
      ru: 'Неблагоприятный отбор возникает до сделки и связан со скрытыми характеристиками; моральный риск возникает после сделки и связан со скрытыми действиями.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.10' },
  },
  {
    id: 'moral-hazard',
    term: { en: 'moral hazard', ru: 'моральный риск (moral hazard)' },
    def: {
      en: 'After a deal, a party changes its behaviour because it does not bear the full cost of its actions, and the other party cannot observe or control this behaviour.',
      ru: 'После заключения сделки одна сторона меняет поведение, потому что не несёт полной цены своих действий, а другая сторона не может наблюдать за этим поведением или контролировать его.',
    },
    example: {
      en: "After buying full insurance worth AED 80000 on his car, a driver parks it less carefully, so the insurer's claims rise.",
      ru: 'Водитель, застраховавший машину на 80000 AED по полной программе, паркует её небрежнее, поэтому выплаты страховщика растут.',
    },
    pitfall: {
      en: 'Moral hazard is about hidden actions after the deal, not about dishonest people.',
      ru: 'Моральный риск связан со скрытыми действиями после сделки, а не с нечестностью людей.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.10' },
  },
  {
    id: 'principal-agent-problem',
    term: { en: 'principal-agent problem', ru: 'проблема принципала и агента (principal-agent problem)' },
    def: {
      en: "A conflict that arises when an agent acts on behalf of a principal but has different objectives or more information, so the agent may not act in the principal's best interest.",
      ru: 'Конфликт, возникающий, когда агент действует от имени принципала, но имеет другие цели или больше информации, и поэтому может действовать не в интересах принципала.',
    },
    example: {
      en: 'A shareholder hires a manager to run the firm, but the manager may spend AED 150000 of company funds on a luxury car that the shareholder would not pay for.',
      ru: 'Акционер нанимает управляющего, но тот может потратить 150000 AED компании на дорогой автомобиль, который акционер сам не стал бы оплачивать.',
    },
    pitfall: {
      en: 'A principal-agent problem is a relationship; moral hazard is one behaviour that can arise inside it.',
      ru: 'Проблема принципала и агента — это отношения; моральный риск — одно из поведений, которое может возникнуть внутри них.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.10' },
  },
  {
    id: 'signalling',
    term: { en: 'signalling', ru: 'сигнализация (signalling)' },
    def: {
      en: 'An action by the better-informed party, such as a warranty, a degree or a certificate, that reveals private information about its quality or risk to the other party.',
      ru: 'Действие более информированной стороны, например гарантия, диплом или сертификат, которое раскрывает другой стороне скрытую информацию о её качестве или риске.',
    },
    example: {
      en: 'A dealer who offers a 12-month warranty on a used car signals that the car is good, because a faulty car would cost the dealer too much to repair under it.',
      ru: 'Дилер, который даёт гарантию на 12 месяцев на подержанный автомобиль, сигнализирует, что машина хорошая: неисправная машина обошлась бы ему слишком дорого по этой гарантии.',
    },
    pitfall: {
      en: 'A signal must be costly to fake; a free promise of quality is not a credible signal.',
      ru: 'Сигнал должен быть дорогим для подделки; бесплатное обещание качества не является убедительным сигналом.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.10' },
  },
  {
    id: 'screening',
    term: { en: 'screening', ru: 'скрининг (screening)' },
    def: {
      en: "An action by the less-informed party, such as a test, a questionnaire or a medical check, that collects information about the other party's quality or risk before a deal.",
      ru: 'Действие менее информированной стороны, например тест, анкета или медицинский осмотр, которое собирает сведения о качестве или риске другой стороны до сделки.',
    },
    example: {
      en: 'An insurer asks for a medical check before selling a policy with an annual premium of AED 4000, so it can price the risk of each applicant.',
      ru: 'Страховщик просит пройти медосмотр перед продажей полиса с годовой премией 4000 AED, чтобы оценить риск каждого заявителя.',
    },
    pitfall: {
      en: 'Screening is done by the less-informed party; signalling is done by the better-informed party.',
      ru: 'Скрининг проводит менее информированная сторона, а сигнализацию подаёт более информированная.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.10' },
  },
  {
    id: 'market-for-lemons',
    term: { en: 'market for lemons', ru: 'рынок «лимонов» (market for lemons)' },
    def: {
      en: 'A market in which buyers cannot tell good products from poor ones, so they pay only an average price, sellers of good products leave, and the quality and quantity traded fall.',
      ru: 'Рынок, на котором покупатели не могут отличить хорошие товары от плохих, поэтому платят только среднюю цену, продавцы хороших товаров уходят, а качество и объём сделок падают.',
    },
    example: {
      en: 'If buyers pay an average AED 30000 for used cars, owners of good cars worth AED 40000 withdraw them, so the quantity traded falls.',
      ru: 'Если покупатели платят в среднем 30000 AED за подержанные машины, владельцы хороших машин стоимостью 40000 AED уберут их с рынка, и объём сделок упадёт.',
    },
    pitfall: {
      en: 'The lemons problem reduces the quantity and quality traded; it does not mean that every used car is faulty.',
      ru: 'Проблема «лимонов» сокращает объём и качество сделок, но не означает, что каждая подержанная машина неисправна.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.10' },
    sim: 'econ.asymmetric-info',
  },
  {
    id: 'mandatory-disclosure',
    term: { en: 'mandatory disclosure', ru: 'обязательное раскрытие информации (mandatory disclosure)' },
    def: {
      en: 'A legal requirement for sellers or firms to publish specified information, such as product safety data, ingredients or financial results, so that buyers can make better-informed choices.',
      ru: 'Законодательное требование к продавцам или фирмам публиковать определённую информацию, например данные о безопасности товара, состав или финансовые результаты, чтобы покупатели могли выбирать осознаннее.',
    },
    example: {
      en: 'A food company must print the sugar content, in grams per 100 grams, on every label, so that buyers can compare two drinks before they buy.',
      ru: 'Производитель обязан печатать на каждой этикетке содержание сахара (в граммах на 100 граммов), чтобы покупатели могли сравнить два напитка до покупки.',
    },
    pitfall: {
      en: 'Disclosure helps only if buyers can understand and use the information; a long contract is not the same as useful information.',
      ru: 'Раскрытие помогает, только если покупатели могут понять и использовать информацию; длинный договор — это не то же, что полезная информация.',
    },
    syllabus: '2.10',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.10' },
  },
];
