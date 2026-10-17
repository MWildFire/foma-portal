import type { SourceRef, Term } from '../../../../src/contract/types';

// Actual textbook passages where specified; needs/wants use our working distinction rather than an unverified guide glossary attribution.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';
const src: SourceRef = { kind: 'own', title: 'Our working distinction between basic needs and other wants', locator: 'Context: Tragakes (2020), ch.1, p.5 discusses needs and wants; this wording is not a definition quoted from the IB guide.' };

export const terms: Term[] = [
  {
    id: 'scarcity',
    term: { en: 'scarcity', ru: 'ограниченность ресурсов (scarcity)' },
    def: {
      en: 'The condition in which resources are limited compared with unlimited wants, so every use of them involves a choice.',
      ru: 'Состояние, при котором ресурсы ограничены по сравнению с безграничными желаниями людей, поэтому приходится выбирать, как их использовать.',
    },
    example: {
      en: 'A household with a monthly budget of 8,000 AED faces wants that cost 9,500 AED, so it must choose which wants to satisfy.',
      ru: 'У домохозяйства месячный бюджет 8 000 AED, а желания стоят 9 500 AED, поэтому оно должно выбрать, какие желания удовлетворить.',
    },
    pitfall: {
      en: 'Scarcity is permanent and applies even to cheap goods; it is not the same as a high price or a temporary shortage.',
      ru: 'Ограниченность ресурсов постоянна и касается даже дешёвых товаров; это не то же самое, что высокая цена или временная нехватка товара.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.1, p. 6' },
  },
  {
    id: 'choice',
    term: { en: 'choice', ru: 'выбор (choice)' },
    def: {
      en: 'Selecting one option from the available alternatives. Because resources are scarce, every choice means giving something up.',
      ru: 'Выбор одного варианта из доступных альтернатив. Поскольку ресурсы ограничены, каждый выбор означает отказ от чего-то другого.',
    },
    example: {
      en: 'A city council with 10 million AED to spend can build a clinic or a park; choosing the clinic means the park is not built.',
      ru: 'Городской совет с 10 млн AED на расходы может построить поликлинику или парк; если выбрана поликлиника, парк не построят.',
    },
    pitfall: {
      en: 'A choice is not the same as a preference: people often pick the best affordable option, not the one they like most.',
      ru: 'Выбор — не то же самое, что предпочтение: люди часто выбирают лучший доступный вариант, а не тот, который нравится больше всего.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.1, p. 4' },
  },
  {
    id: 'opportunity-cost',
    term: { en: 'opportunity cost', ru: 'альтернативные издержки (opportunity cost)' },
    def: {
      en: 'The value of the option sacrificed when a choice is made, namely the next-best alternative.',
      ru: 'Стоимость следующей по выгодности альтернативы, от которой отказались при выборе.',
    },
    example: {
      en: 'A student with 4 free hours can study or work a paid shift at 50 AED per hour; studying 4 hours has an opportunity cost of 200 AED.',
      ru: 'У студента 4 свободных часа: он может учиться или отработать смену за 50 AED в час; учёба в течение 4 часов стоит 200 AED упущенного заработка.',
    },
    pitfall: {
      en: 'Opportunity cost is the forgone alternative, not the money paid. Studying costs no money here, but it still has an opportunity cost of 200 AED.',
      ru: 'Альтернативные издержки — это упущенная альтернатива, а не уплаченные деньги. Учёба здесь денег не требует, но её альтернативные издержки равны 200 AED.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.1, p. 8' },
  },
  {
    id: 'factors-of-production',
    term: { en: 'factors of production', ru: 'факторы производства (factors of production)' },
    def: {
      en: 'The inputs that go into making products and services: land (natural resources), labour (human effort), capital (produced goods such as machines) and enterprise (organising production and taking risks).',
      ru: 'Ресурсы, которые используются для производства товаров и услуг: земля (природные ресурсы), труд (человеческие усилия), капитал (произведённые средства производства, например станки) и предпринимательская способность (организация производства и принятие риска).',
    },
    example: {
      en: 'A bakery uses land (its shop site), labour (hours worked by bakers), capital (ovens worth 40,000 AED) and enterprise (the owner who takes the risk).',
      ru: 'Пекарня использует землю (место под магазин), труд (часы работы пекарей), капитал (печи стоимостью 40 000 AED) и предпринимательскую способность (владельца, который берёт на себя риск).',
    },
    pitfall: {
      en: 'Money is not a factor of production; it only pays for factors. In economics, capital means machines and buildings, not cash.',
      ru: 'Деньги не являются фактором производства: они лишь оплачивают факторы. В экономике капитал — это станки и здания, а не наличные.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.1, pp. 7–8' },
  },
  {
    id: 'needs',
    term: { en: 'needs', ru: 'базовые потребности (needs)' },
    def: {
      en: 'The basic requirements for survival and health, such as food, water, shelter and clothing.',
      ru: 'Базовые требования для выживания и здоровья, например пища, вода, жильё и одежда.',
    },
    example: {
      en: 'The monthly needs of a household may include rent of 4,000 AED and food of 1,500 AED.',
      ru: 'Ежемесячные потребности семьи могут включать аренду жилья за 4 000 AED и продукты на 1 500 AED.',
    },
    pitfall: {
      en: 'Basic needs can require different means in different contexts. Transport requirements depend on mobility, access and essential journeys; distance from a metro alone does not classify a car as a need or a want.',
      ru: 'Способы удовлетворить базовую потребность зависят от обстоятельств. Потребность в транспорте определяется мобильностью, доступностью и необходимыми поездками; одно расстояние до метро не определяет, необходим автомобиль или желателен.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2'],
    src,
  },
  {
    id: 'wants',
    term: { en: 'wants', ru: 'желания (wants)' },
    def: {
      en: 'Goods and services that people would like to have beyond their needs. Economics assumes that wants are unlimited.',
      ru: 'Товары и услуги, которые люди хотели бы иметь сверх своих потребностей. Экономика исходит из того, что желания безграничны.',
    },
    example: {
      en: 'A household with enough food may still want a second car costing 80,000 AED, a holiday and a new smartphone.',
      ru: 'Семья, у которой достаточно еды, всё равно может хотеть второй автомобиль стоимостью 80 000 AED, отпуск и новый смартфон.',
    },
    pitfall: {
      en: 'A want is not demand: demand requires the ability to pay as well as the desire to buy.',
      ru: 'Желание — ещё не спрос: спрос требует и желания, и возможности платить.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2'],
    src,
  },
  {
    id: 'economic-goods',
    term: { en: 'economic goods', ru: 'экономические блага (economic goods)' },
    def: {
      en: 'Goods and services that are scarce: producing or obtaining them uses resources and has an opportunity cost.',
      ru: 'Товары и услуги, которые ограничены: их производство или получение использует ресурсы и имеет альтернативные издержки.',
    },
    example: {
      en: 'Bread, petrol and hotel rooms are economic goods: each uses scarce resources and has an opportunity cost. A loaf might sell for 6 AED, but a zero price to the recipient would not make a resource-using good a free good.',
      ru: 'Хлеб, бензин и номера в гостиницах — экономические блага: каждое использует ограниченные ресурсы и имеет альтернативные издержки. Буханка может стоить 6 AED, но нулевая цена для получателя не превращает благо, на которое затрачены ресурсы, в свободное.',
    },
    pitfall: {
      en: 'A good is economic because it is scarce, not because it is expensive. Some economic goods are cheap.',
      ru: 'Благо является экономическим потому, что оно ограничено, а не потому, что дорого. Некоторые экономические блага стоят дёшево.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.1, p. 9' },
  },
  {
    id: 'free-goods',
    term: { en: 'free goods', ru: 'свободные блага (free goods)' },
    def: {
      en: 'Goods that are not scarce: there is enough for everyone who wants them, so their use has no opportunity cost.',
      ru: 'Блага, которых хватает всем, кто в них нуждается; поэтому их использование не имеет альтернативных издержек.',
    },
    example: {
      en: 'Air at an open beach is usually treated as a free good: one person breathing it costs 0 AED and does not reduce the supply for others.',
      ru: 'Воздух на открытом пляже обычно считают свободным благом: дыхание одного человека стоит 0 AED и не уменьшает запас для других.',
    },
    pitfall: {
      en: 'Very few goods are truly free. Clean air in a polluted city can be scarce, which makes it an economic good.',
      ru: 'Очень мало благ действительно свободны. Чистый воздух в загрязнённом городе может быть ограничен, и тогда он становится экономическим благом.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.1, p. 9' },
  },
  {
    id: 'production-possibility-curve',
    term: { en: 'production possibility curve (production possibilities curve, PPC)', ru: 'кривая производственных возможностей (production possibility curve, PPC)' },
    def: {
      en: 'A curve showing the maximum combinations of two goods that an economy can produce, given its resources and technology and using them fully and efficiently.',
      ru: 'Кривая, показывающая максимальные комбинации двух товаров, которые экономика может произвести при имеющихся ресурсах и технологии, полностью и эффективно их используя.',
    },
    example: {
      en: 'An economy can make 60 thousand units of consumer goods and 80 thousand units of capital goods a year at point A, or 80 and 60 thousand units at point B.',
      ru: 'Экономика может выпустить за год 60 тысяч единиц потребительских товаров и 80 тысяч единиц капитальных товаров (точка A) или 80 и 60 тысяч единиц (точка B).',
    },
    pitfall: {
      en: 'A point inside the curve is possible but inefficient; a point beyond the curve cannot be reached with current resources and technology.',
      ru: 'Точка внутри кривой достижима, но неэффективна; точка за пределами кривой недостижима при текущих ресурсах и технологии.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2'],
    sim: 'econ.ppc',
    src: { kind: 'textbook', title: book, locator: 'ch. 1.3, p. 16' },
  },
  {
    id: 'productive-efficiency',
    term: { en: 'productive efficiency', ru: 'производственная эффективность (productive efficiency)' },
    def: {
      en: 'Producing the maximum output possible from the available resources, using the fewest possible resources per unit (the lowest possible cost) with no idle resources, so more of one good means less of another.',
      ru: 'Выпуск максимально возможного объёма из имеющихся ресурсов с наименьшим расходом ресурсов на единицу (наименьшими возможными издержками) и без простоя: больше одного товара означает меньше другого.',
    },
    example: {
      en: 'If 10% of 50,000 workers are unemployed, 5,000 workers are idle and output lies inside the PPC, so the economy is not productively efficient.',
      ru: 'Если без работы находятся 10% из 50 000 работников, то 5 000 человек простаивают и выпуск лежит внутри кривой производственных возможностей, поэтому экономика не является производственно эффективной.',
    },
    pitfall: {
      en: 'Productive efficiency is about using resources without waste; it does not show whether society prefers the mix of goods on the curve.',
      ru: 'Производственная эффективность — это использование ресурсов без потерь; она не показывает, какое сочетание товаров на кривой предпочтительнее для общества.',
    },
    syllabus: '1.1',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.3, p. 16' },
  },
];
