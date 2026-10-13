import type { SourceRef, Term } from '../../../../src/contract/types';

// Sources: the textbook (chapter and page) for terms it defines; the subject guide (section 1.2) for economic-agent and prediction.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';
const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 1.2' };

export const terms: Term[] = [
  {
    id: 'economic-model',
    term: { en: 'economic model', ru: 'экономическая модель (economic model)' },
    def: {
      en: 'A simplified representation of an economic situation that keeps only its essential features, built from assumptions and relationships between variables, used to explain behaviour and make predictions.',
      ru: 'Упрощённое представление экономической ситуации, которое сохраняет только её существенные черты и построено на допущениях и связях между переменными; оно объясняет поведение и позволяет делать прогнозы.',
    },
    example: {
      en: 'A model of the bread market assumes 1,000 buyers who each buy 2 loaves a week at 6 AED per loaf, and it ignores differences in taste.',
      ru: 'Модель рынка хлеба предполагает 1 000 покупателей, каждый из которых покупает 2 буханки в неделю по 6 AED, и не учитывает различия во вкусах.',
    },
    pitfall: {
      en: 'A model is not a full description of reality. It is useful when its assumptions are reasonable and its predictions match evidence.',
      ru: 'Модель не описывает реальность полностью. Она полезна, когда её допущения разумны, а прогнозы совпадают с данными.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'glossary, p. 653' },
  },
  {
    id: 'assumption',
    term: { en: 'assumption', ru: 'допущение (assumption)' },
    def: {
      en: 'A simplifying statement taken as given in a model, such as consumers being rational, on which the conclusions of the model depend.',
      ru: 'Упрощающее утверждение, которое в модели принимается как данное, например что потребители рациональны; от него зависят выводы модели.',
    },
    example: {
      en: 'A model assumes that all 1,000 petrol buyers in a city have the same income of 8,000 AED per month; its predictions hold only if this is close to reality.',
      ru: 'Модель предполагает, что все 1 000 покупателей бензина в городе имеют одинаковый доход 8 000 AED в месяц; её прогнозы верны, только если это близко к реальности.',
    },
    pitfall: {
      en: 'An assumption is not automatically false, but a conclusion is reliable only when the assumption holds in the case being studied.',
      ru: 'Допущение не обязательно ложно, но вывод надёжен только тогда, когда допущение выполняется в изучаемом случае.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.4, p. 25' },
  },
  {
    id: 'ceteris-paribus',
    term: { en: 'ceteris paribus', ru: 'при прочих равных условиях (ceteris paribus)' },
    def: {
      en: 'Other things being equal: the effect of one change is studied while all other relevant variables are held constant.',
      ru: 'При прочих равных условиях: эффект одного изменения изучается, пока все остальные значимые переменные остаются неизменными.',
    },
    example: {
      en: 'When the price of a 1 litre bottle of water rises from 2 AED to 3 AED, the model holds income and tastes constant, so any drop in purchases is due to price.',
      ru: 'Когда цена бутылки воды объёмом 1 литр растёт с 2 AED до 3 AED, модель считает доход и вкусы неизменными, поэтому любое падение покупок объясняется ценой.',
    },
    pitfall: {
      en: 'Ceteris paribus is a modelling device. In real life several things change at once, so an isolated effect is only an approximation.',
      ru: 'Условие «при прочих равных» — это приём моделирования. В реальности одновременно меняется несколько факторов, поэтому изолированный эффект — лишь приближение.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.4, p. 25' },
  },
  {
    id: 'positive-statement',
    term: { en: 'positive statement', ru: 'позитивное утверждение (positive statement)' },
    def: {
      en: 'A statement about what is, was or will be, which can be tested against evidence and shown to be true or false.',
      ru: 'Утверждение о том, что есть, что было или что будет, которое можно проверить по данным и признать верным или неверным.',
    },
    example: {
      en: 'A 1 AED rise in the price of a litre of petrol will reduce petrol sales by 5% within a year.',
      ru: 'Рост цены литра бензина на 1 AED снизит продажи бензина на 5% в течение года.',
    },
    pitfall: {
      en: 'Positive means testable, not correct. A positive statement can turn out to be false when the data are checked.',
      ru: 'Позитивное значит проверяемое, а не верное. Позитивное утверждение может оказаться ложным при проверке данными.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.3, p. 23' },
  },
  {
    id: 'normative-statement',
    term: { en: 'normative statement', ru: 'нормативное утверждение (normative statement)' },
    def: {
      en: 'A statement that rests on a personal view of what should or should not happen, so evidence alone cannot prove it true or false.',
      ru: 'Утверждение, основанное на оценочных суждениях о том, что должно произойти; одними данными его нельзя доказать или опровергнуть.',
    },
    example: {
      en: 'The government should cut the petrol price by 1 AED per litre to help low-income families.',
      ru: 'Правительство должно снизить цену бензина на 1 AED за литр, чтобы помочь семьям с низким доходом.',
    },
    pitfall: {
      en: 'A statement is not normative just because it contains numbers or matters a lot. It is normative when it rests on a value judgement about what should happen.',
      ru: 'Утверждение не становится нормативным только из-за чисел или важности темы. Оно нормативно, когда опирается на оценочное суждение о том, что должно произойти.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.4, p. 23' },
  },
  {
    id: 'microeconomics',
    term: { en: 'microeconomics', ru: 'микроэкономика (microeconomics)' },
    def: {
      en: 'The study of individual economic agents, such as households and firms, and of how they behave in specific markets.',
      ru: 'Изучение отдельных экономических агентов, таких как домохозяйства и фирмы, и того, как они ведут себя на отдельных рынках.',
    },
    example: {
      en: 'Studying how a 10% rise in taxi fares changes the number of taxi trips made by commuters in Dubai is microeconomics.',
      ru: 'Изучение того, как рост тарифов на такси на 10% меняет число поездок пассажиров в Дубае, относится к микроэкономике.',
    },
    pitfall: {
      en: 'Micro does not mean small. A study of the pricing of one large firm is still microeconomics because it looks at one firm and its market.',
      ru: 'Микро не значит маленький. Изучение ценообразования одной крупной фирмы остаётся микроэкономикой, потому что рассматривает одну фирму и её рынок.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.1, p. 3' },
  },
  {
    id: 'macroeconomics',
    term: { en: 'macroeconomics', ru: 'макроэкономика (macroeconomics)' },
    def: {
      en: 'The study of the economy as a whole, using aggregate variables such as GDP, the inflation rate, the unemployment rate and the balance of payments.',
      ru: 'Изучение экономики в целом с помощью агрегированных показателей, таких как ВВП, темп инфляции, уровень безработицы и платёжный баланс.',
    },
    example: {
      en: 'Studying why GDP grows by 3% in a year while the inflation rate is 2% is macroeconomics, because it looks at the whole economy.',
      ru: 'Изучение того, почему ВВП растёт на 3% за год при темпе инфляции 2%, относится к макроэкономике, так как рассматривает экономику в целом.',
    },
    pitfall: {
      en: 'Macroeconomics is not simply the sum of many microeconomic studies, because the whole economy can behave differently from its parts.',
      ru: 'Макроэкономика — это не простая сумма множества микроисследований, потому что экономика в целом может вести себя иначе, чем её части.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2'],
    src: { kind: 'textbook', title: book, locator: 'ch. 1.1, p. 3' },
  },
  {
    id: 'economic-agent',
    term: { en: 'economic agent', ru: 'экономический агент (economic agent)' },
    def: {
      en: 'An individual or group that makes economic decisions, such as a household, a firm, the government or the rest of the world.',
      ru: 'Отдельное лицо или группа людей, принимающие экономические решения: домохозяйство, фирма, правительство или остальной мир.',
    },
    example: {
      en: 'A bakery (a firm) sells bread to households and pays a 10% tax on its profit to the government.',
      ru: 'Пекарня (фирма) продаёт хлеб домохозяйствам и платит правительству налог 10% с прибыли.',
    },
    pitfall: {
      en: 'Economic agents are the decision makers, not the goods they trade. Bread is not an agent; the bakery is.',
      ru: 'Экономические агенты — это те, кто принимает решения, а не товары, которыми они торгуют. Хлеб не является агентом, а пекарня является.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2'],
    src,
  },
  {
    id: 'prediction',
    term: { en: 'prediction', ru: 'прогноз (prediction)' },
    def: {
      en: 'A testable statement about what will happen to an outcome, derived from the assumptions and relationships of a model.',
      ru: 'Проверяемое утверждение о том, что произойдёт с результатом, выведенное из допущений и связей модели.',
    },
    example: {
      en: 'A model predicts that a 10% rise in petrol prices will cut petrol sales by 2% within a year; sales data showing no fall would challenge the model.',
      ru: 'Модель прогнозирует, что рост цен на бензин на 10% сократит продажи бензина на 2% в течение года; данные без снижения продаж поставили бы модель под сомнение.',
    },
    pitfall: {
      en: 'A prediction is not a guarantee. A model can stay useful when some predictions fail, if it explains most cases and the failures are understood.',
      ru: 'Прогноз — не гарантия. Модель может оставаться полезной, даже когда некоторые прогнозы не сбываются, если она объясняет большинство случаев и причины сбоев понятны.',
    },
    syllabus: '1.2',
    papers: ['P1', 'P2'],
    src,
  },
];
