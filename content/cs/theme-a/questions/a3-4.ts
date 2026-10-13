import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'a3-4-q01',
    subject: 'cs',
    topicIds: ['a3-4-alternative-databases'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Describe',
    prompt: {
      en: 'A chain of cafés keeps its sales in a data warehouse, organised as an OLAP cube with three dimensions: branch, product and month. A regional manager first wants to look at one branch, and then at two products in two branches at the same time. Describe the slice and dice operations that the manager could use for these two views.',
      ru: 'Сеть кофеен хранит продажи в хранилище данных, организованном как OLAP-куб с тремя измерениями: филиал, товар и месяц. Региональный менеджер сначала хочет посмотреть один филиал, а затем два товара в двух филиалах одновременно. Опишите операции slice и dice, которые он может использовать для этих двух представлений.',
    },
    markscheme: {
      en: '[1] Slice fixes one value on one dimension, here one branch, and shows the other dimensions (products and months) for that branch only. [1] Dice selects specific values on several dimensions at once, here two products in two branches, which gives a smaller sub-cube. [1] Each operation narrows the cube to a focused view that helps the manager compare trends or check specific sales (accept any correct example).',
      ru: '[1] Slice (срез) фиксирует одно значение по одному измерению, здесь один филиал, и показывает остальные измерения (товары и месяцы) только для этого филиала. [1] Dice (выборка) выбирает конкретные значения сразу по нескольким измерениям, здесь два товара в двух филиалах, и получается меньший фрагмент куба. [1] Каждая операция сужает куб до сфокусированного представления, которое помогает сравнивать тенденции или проверять конкретные продажи (принимается любой верный пример).',
    },
    origin: 'original',
  },
  {
    id: 'a3-4-q02',
    subject: 'cs',
    topicIds: ['a3-4-alternative-databases'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'A trading app stores current share prices in an in-memory database so that every price update is shown to users at once. Explain one benefit of this choice and one risk, giving the reason for each.',
      ru: 'Торговое приложение хранит текущие цены акций в базе данных в оперативной памяти, чтобы каждое обновление цены сразу показывалось пользователям. Объясните одно преимущество этого решения и один риск, указав причину для каждого из них.',
    },
    markscheme: {
      en: '[1] Benefit: the data is held in RAM, so reads and writes are faster than from backing storage, which suits real-time price updates. [1] Reason: the processor needs fewer read and write instructions, so updates are processed quickly. [1] Risk: if the system crashes, all the data held in RAM can be lost. [1] Reason or mitigation: the data is not protected by backing storage after a crash, so a backup copy or NVRAM is needed; NVRAM has a limited number of read and write cycles (accept any valid mitigation).',
      ru: '[1] Преимущество: данные хранятся в оперативной памяти, поэтому чтение и запись быстрее, чем с накопителя, что подходит для обновлений цен в реальном времени. [1] Причина: процессору нужно меньше команд чтения и записи, поэтому обновления обрабатываются быстро. [1] Риск: при сбое системы все данные, которые находятся в оперативной памяти, могут быть потеряны. [1] Причина или способ снизить риск: после сбоя данные не защищены накопителем, поэтому нужна резервная копия или энергонезависимая память NVRAM, у которой ограничено число циклов записи (принимается любой верный способ).',
    },
    origin: 'original',
  },
  {
    id: 'a3-4-q03',
    subject: 'cs',
    topicIds: ['a3-4-alternative-databases'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Suggest',
    prompt: {
      en: 'A supermarket has a data warehouse with a year of till records. It wants to find products that are often bought together and, separately, to predict how much each customer will spend next month. Suggest a suitable data mining technique for each task, giving a reason for each choice.',
      ru: 'В супермаркете есть хранилище данных с записями кассы за год. Нужно найти товары, которые часто покупают вместе, и отдельно предсказать, сколько каждый покупатель потратит в следующем месяце. Предложите подходящий метод интеллектуального анализа данных для каждой задачи и объясните выбор.',
    },
    markscheme: {
      en: '[1] Products bought together: association rule discovery, which finds rules of the form "if X, then Y is likely" in the transaction data. [1] Reason: it looks for items that appear together in purchases more often than chance would suggest. [1] Amount spent: regression, which predicts a continuous numerical value from other data about the customer. [1] Reason: the amount spent is a number on a continuous scale, not a category.',
      ru: '[1] Товары, которые покупают вместе: поиск ассоциативных правил, который выявляет правила вида «если X, то Y вероятно» в данных о покупках. [1] Причина: метод ищет товары, которые встречаются в одних и тех же покупках чаще, чем можно ожидать по случайности. [1] Сумма трат: регрессия, которая предсказывает непрерывное числовое значение по другим данным о покупателе. [1] Причина: сумма трат — это число на непрерывной шкале, а не категория.',
    },
    origin: 'original',
  },
];
