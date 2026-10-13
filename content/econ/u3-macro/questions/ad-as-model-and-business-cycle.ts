import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-ad-as-model-and-business-cycle-01',
    subject: 'econ',
    topicIds: ['ad-as-model-and-business-cycle'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'The potential output of an economy is AED 500 bn and its actual real GDP is AED 470 bn. Calculate the output gap as a percentage of potential output. Give your answer to one decimal place and state whether the gap is inflationary or deflationary.',
      ru: 'Потенциальный выпуск экономики равен 500 млрд AED, а её фактический реальный ВВП составляет 470 млрд AED. Рассчитайте разрыв выпуска в процентах от потенциального выпуска. Ответ дайте с одним знаком после запятой и укажите, инфляционный это разрыв или дефляционный.',
    },
    markscheme: {
      en: '1 mark: output gap = actual - potential = 470 - 500 = -30 (AED bn). 1 mark: output gap % = -30 / 500 x 100. 1 mark: -6.0%; the gap is negative, so it is a deflationary (recessionary) gap.',
      ru: '1 балл: разрыв выпуска = фактический - потенциальный = 470 - 500 = -30 (млрд AED). 1 балл: разрыв в % = -30 / 500 x 100. 1 балл: -6,0%; разрыв отрицательный, значит он дефляционный (рецессионный).',
    },
    answer: '-6.0',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-ad-as-model-and-business-cycle-02',
    subject: 'econ',
    topicIds: ['ad-as-model-and-business-cycle'],
    paper: 'P2',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'An economy has a deflationary gap of AED 30 bn in real GDP. The government spending multiplier is 2.5. Assume the price level does not change and there is no crowding out. Calculate the increase in government spending needed to close the gap. Give your answer in AED bn to one decimal place.',
      ru: 'В экономике дефляционный разрыв составляет 30 млрд AED реального ВВП. Мультипликатор государственных расходов равен 2,5. Предположите, что уровень цен не меняется и эффекта вытеснения (crowding out) нет. Рассчитайте, на сколько нужно увеличить государственные расходы, чтобы закрыть разрыв. Ответ дайте в млрд AED с одним знаком после запятой.',
    },
    markscheme: {
      en: '1 mark: the change in real GDP needed is the gap, AED 30 bn. 1 mark: change in real GDP = multiplier x change in government spending, so change in spending = 30 / 2.5. 1 mark: the increase in government spending = AED 12.0 bn.',
      ru: '1 балл: нужное изменение реального ВВП равно разрыву, 30 млрд AED. 1 балл: изменение ВВП = мультипликатор x изменение государственных расходов, значит изменение расходов = 30 / 2,5. 1 балл: рост государственных расходов = 12,0 млрд AED.',
    },
    answer: '12.0',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-ad-as-model-and-business-cycle-03',
    subject: 'econ',
    topicIds: ['ad-as-model-and-business-cycle'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why the aggregate demand curve slopes downwards.',
      ru: 'Объясните, почему кривая совокупного спроса (aggregate demand, AD) имеет отрицательный наклон.',
    },
    markscheme: {
      en: '1 mark: a lower price level increases the real value of wealth, so consumption rises (wealth effect). 1 mark: a lower price level reduces the demand for money and interest rates, which raises investment and consumption (interest rate effect). 1 mark: lower domestic prices make exports cheaper and imports dearer, so net exports rise (international trade effect). 1 mark: at a lower price level the real output demanded is higher.',
      ru: '1 балл: более низкий уровень цен увеличивает реальную стоимость богатства, поэтому потребление растёт (эффект богатства). 1 балл: более низкий уровень цен снижает спрос на деньги и процентные ставки, что повышает инвестиции и потребление (эффект процентной ставки). 1 балл: более низкие внутренние цены делают экспорт дешевле, а импорт дороже, поэтому чистый экспорт растёт (эффект международной торговли). 1 балл: при более низком уровне цен спрос на реальный выпуск выше.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-ad-as-model-and-business-cycle-04',
    subject: 'econ',
    topicIds: ['ad-as-model-and-business-cycle'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'A rise in the world price of oil increases the costs of firms in an economy that imports most of its energy. Explain the effect of this supply-side shock on the short-run aggregate supply curve, the price level and real output.',
      ru: 'Рост мировой цены на нефть увеличивает издержки фирм в экономике, которая импортирует большую часть энергии. Объясните, как этот шок предложения влияет на кривую краткосрочного совокупного предложения (short-run aggregate supply, SRAS), уровень цен и реальный выпуск.',
    },
    markscheme: {
      en: '1 mark: higher costs of production shift SRAS to the left. 1 mark: at the original price level firms supply less, so equilibrium real output falls. 1 mark: the price level rises (cost-push inflation). 1 mark: the economy may face stagflation (higher prices with lower output), and the output gap becomes deflationary.',
      ru: '1 балл: более высокие издержки производства сдвигают SRAS влево. 1 балл: при прежнем уровне цен фирмы предлагают меньше, поэтому равновесный реальный выпуск падает. 1 балл: уровень цен растёт (инфляция издержек, cost-push inflation). 1 балл: возможна стагфляция (рост цен при падении выпуска), а разрыв выпуска становится дефляционным.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-ad-as-model-and-business-cycle-05',
    subject: 'econ',
    topicIds: ['ad-as-model-and-business-cycle'],
    paper: 'P2',
    marks: 4,
    command: 'Draw',
    prompt: {
      en: 'Draw an AD/AS diagram for an economy in a deflationary gap, with the short-run equilibrium below potential output. Label the axes (price level and real GDP), AD, SRAS, LRAS, the equilibrium point and potential output, and show the gap.',
      ru: 'Нарисуйте диаграмму AD/AS для экономики в дефляционном разрыве, при котором краткосрочное равновесие находится ниже потенциального выпуска. Подпишите оси (уровень цен и реальный ВВП), AD, SRAS, LRAS, точку равновесия и потенциальный выпуск, а также покажите разрыв.',
    },
    markscheme: {
      en: '1 mark: correctly labelled axes (vertical: price level; horizontal: real GDP). 1 mark: downward-sloping AD and upward-sloping SRAS crossing at the equilibrium. 1 mark: vertical LRAS at potential output, with the equilibrium to the left of it. 1 mark: the gap between equilibrium output and potential output labelled as a deflationary gap.',
      ru: '1 балл: правильно подписаны оси (по вертикали уровень цен; по горизонтали реальный ВВП). 1 балл: нисходящая кривая AD и восходящая SRAS пересекаются в точке равновесия. 1 балл: вертикальная LRAS на уровне потенциального выпуска, а равновесие левее неё. 1 балл: разрыв между равновесным и потенциальным выпуском подписан как дефляционный разрыв.',
    },
    origin: 'original',
    minutes: 5,
  },
];
