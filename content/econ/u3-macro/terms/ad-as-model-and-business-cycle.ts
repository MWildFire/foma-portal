import type { Term } from '../../../../src/contract/types';

// Definitions are in our own words. Terms the textbook defines (Tragakes, Economics for the IB Diploma:
// Coursebook) carry a textbook locator: chapter, section and printed page. Terms the book does not define
// keep the IB DP Economics subject guide (2020) as their source.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'aggregate-demand',
    term: { en: 'aggregate demand (AD)', ru: 'совокупный спрос (aggregate demand, AD)' },
    def: {
      en: 'The total amount of real GDP (output) that buyers in the economy plan to buy at each price level, ceteris paribus: consumption, investment, government spending and net exports.',
      ru: 'Общий объём реального ВВП (выпуска), который покупатели в экономике планируют купить при каждом уровне цен, при прочих равных условиях: потребление, инвестиции, государственные расходы и чистый экспорт.',
    },
    example: {
      en: 'At a price level of 110, households, firms, government and foreign buyers plan to spend AED 800 bn on domestic output.',
      ru: 'При уровне цен 110 домохозяйства, фирмы, государство и иностранные покупатели планируют потратить 800 млрд AED на отечественный выпуск.',
    },
    pitfall: {
      en: 'AD is planned spending on domestic output, not all spending: imports are removed through net exports.',
      ru: 'AD — это запланированные расходы на отечественный выпуск, а не все расходы: импорт вычитается через чистый экспорт.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 9.1, p. 272' },
    sim: 'econ.ad-as',
  },
  {
    id: 'net-exports',
    term: { en: 'net exports (X - M)', ru: 'чистый экспорт (net exports, X - M)' },
    def: {
      en: 'Exports minus imports: foreign spending on domestic output minus domestic spending on foreign output.',
      ru: 'Экспорт минус импорт: расходы иностранцев на отечественный выпуск минус расходы внутри страны на зарубежный выпуск.',
    },
    example: {
      en: 'Exports of AED 300 bn and imports of AED 250 bn give net exports of AED 50 bn.',
      ru: 'Экспорт 300 млрд AED и импорт 250 млрд AED дают чистый экспорт 50 млрд AED.',
    },
    pitfall: {
      en: 'Net exports can be negative; a negative value reduces aggregate demand.',
      ru: 'Чистый экспорт может быть отрицательным; отрицательное значение уменьшает совокупный спрос.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.2, p. 251' },
  },
  {
    id: 'short-run-aggregate-supply',
    term: { en: 'short-run aggregate supply (SRAS)', ru: 'краткосрочное совокупное предложение (short-run aggregate supply, SRAS)' },
    def: {
      en: 'The total output firms supply at each price level when some wages and input prices are sticky, so the curve slopes upwards.',
      ru: 'Общий выпуск, который фирмы предлагают при каждом уровне цен, когда часть зарплат и цен ресурсов негибка, поэтому кривая идёт вверх.',
    },
    example: {
      en: 'If the price level rises from 100 to 110 while wages stay fixed, firms raise output because their profit per unit increases.',
      ru: 'Если уровень цен растёт со 100 до 110, а зарплаты остаются прежними, фирмы увеличивают выпуск, потому что их прибыль на единицу продукции растёт.',
    },
    pitfall: {
      en: 'A change in the price level moves the economy along SRAS; a change in costs shifts the curve.',
      ru: 'Изменение уровня цен двигает экономику вдоль SRAS, а изменение издержек сдвигает кривую.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 9.2, p. 277' },
    sim: 'econ.ad-as',
  },
  {
    id: 'long-run-aggregate-supply',
    term: { en: 'long-run aggregate supply (LRAS)', ru: 'долгосрочное совокупное предложение (long-run aggregate supply, LRAS)' },
    def: {
      en: 'In the long run, the real output that the economy produces at full employment, its potential GDP, shown as a vertical line that does not depend on the price level.',
      ru: 'В долгосрочном периоде — реальный выпуск, который экономика производит при полной занятости, то есть потенциальный ВВП; изображается вертикальной линией, не зависящей от уровня цен.',
    },
    example: {
      en: 'An economy with potential output of AED 800 bn keeps its LRAS at AED 800 bn even if the price level doubles.',
      ru: 'Экономика с потенциальным выпуском 800 млрд AED сохраняет LRAS на уровне 800 млрд AED, даже если уровень цен удвоится.',
    },
    pitfall: {
      en: 'Potential GDP is not the same as actual real GDP: an economy can produce below or above it, and real GDP equals potential GDP only at full employment.',
      ru: 'Потенциальный ВВП — не то же, что фактический реальный ВВП: экономика может производить ниже или выше него, а реальный ВВП равен потенциальному только при полной занятости.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 9.3, p. 281' },
    sim: 'econ.ad-as',
  },
  {
    id: 'potential-output',
    term: { en: 'potential output', ru: 'потенциальный выпуск (potential output)' },
    def: {
      en: 'The maximum sustainable level of real output at full employment (unemployment at its natural rate); the level traced by the long-run growth trend (the LRAS curve).',
      ru: 'Максимальный устойчивый уровень реального выпуска при полной занятости (безработица на естественном уровне); выпуск, который задаёт долгосрочный тренд роста (кривая LRAS).',
    },
    example: {
      en: 'If potential output is AED 600 bn and actual real GDP is AED 580 bn, output is AED 20 bn below potential.',
      ru: 'Если потенциальный выпуск равен 600 млрд AED, а фактический реальный ВВП 580 млрд AED, выпуск на 20 млрд AED ниже потенциального.',
    },
    pitfall: {
      en: 'Potential output is not the highest output ever recorded; it is the sustainable output at full employment.',
      ru: 'Потенциальный выпуск — это не максимальный когда-либо достигнутый выпуск, а устойчивый выпуск при полной занятости.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.4, p. 263' },
  },
  {
    id: 'macroeconomic-equilibrium',
    term: { en: 'macroeconomic equilibrium', ru: 'макроэкономическое равновесие (macroeconomic equilibrium)' },
    def: {
      en: 'The price level and real output at which aggregate demand equals short-run aggregate supply.',
      ru: 'Уровень цен и реальный выпуск, при которых совокупный спрос равен краткосрочному совокупному предложению.',
    },
    example: {
      en: 'AD and SRAS cross at a price level of 110 and a real output of AED 480 bn.',
      ru: 'AD и SRAS пересекаются при уровне цен 110 и реальном выпуске 480 млрд AED.',
    },
    pitfall: {
      en: 'Equilibrium in the AD/AS model can be below potential output; it does not have to be at full employment.',
      ru: 'Равновесие в модели AD/AS может быть ниже потенциального выпуска; оно не обязано быть при полной занятости.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 9.2, p. 279' },
    sim: 'econ.ad-as',
  },
  {
    id: 'output-gap',
    term: { en: 'output gap', ru: 'разрыв выпуска (output gap)' },
    def: {
      en: 'The difference between actual real GDP and potential GDP (actual minus potential). Positive means above potential; negative means below.',
      ru: 'Разница между фактическим реальным ВВП и потенциальным ВВП (фактический минус потенциальный). Положительный знак означает выше потенциала, отрицательный ниже.',
    },
    example: {
      en: 'Actual real GDP of AED 420 bn and potential output of AED 400 bn give an output gap of +5.0%.',
      ru: 'Фактический реальный ВВП 420 млрд AED и потенциальный выпуск 400 млрд AED дают разрыв выпуска +5,0%.',
    },
    pitfall: {
      en: 'An output gap of zero does not mean zero unemployment; it means output equals potential output.',
      ru: 'Нулевой разрыв выпуска не означает нулевую безработицу; он означает, что выпуск равен потенциальному.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.4, p. 261' },
    sim: 'econ.output-gap',
  },
  {
    id: 'inflationary-gap',
    term: { en: 'inflationary gap', ru: 'инфляционный разрыв (inflationary gap)' },
    def: {
      en: 'A positive output gap: actual output is above potential (unemployment below its natural rate) due to excess aggregate demand, so wages and prices rise until SRAS shifts left.',
      ru: 'Положительный разрыв выпуска: фактический выпуск выше потенциального (безработица ниже естественного уровня) из-за избыточного совокупного спроса, поэтому зарплаты и цены растут, пока SRAS не сдвинется влево.',
    },
    example: {
      en: 'With potential output of AED 400 bn and actual output of AED 420 bn, the economy has an inflationary gap of AED 20 bn.',
      ru: 'При потенциальном выпуске 400 млрд AED и фактическом 420 млрд AED экономика имеет инфляционный разрыв 20 млрд AED.',
    },
    pitfall: {
      en: 'An inflationary gap is temporary: wages rise, SRAS shifts left and output returns to potential.',
      ru: 'Инфляционный разрыв временный: зарплаты растут, SRAS сдвигается влево, и выпуск возвращается к потенциальному.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 9.3, p. 283' },
    sim: 'econ.output-gap',
  },
  {
    id: 'deflationary-gap',
    term: { en: 'deflationary gap', ru: 'дефляционный разрыв (deflationary gap)' },
    def: {
      en: 'A negative output gap: actual output is below potential (unemployment above its natural rate) due to insufficient aggregate demand, putting downward pressure on inflation without necessarily making inflation negative.',
      ru: 'Отрицательный разрыв выпуска: фактический выпуск ниже потенциального (безработица выше естественного уровня) из-за недостаточного совокупного спроса; это понижательное давление на инфляцию, а не обязательное падение наблюдаемого уровня цен.',
    },
    example: {
      en: 'With potential output of AED 600 bn and actual output of AED 580 bn, the economy has a deflationary gap of AED 20 bn.',
      ru: 'При потенциальном выпуске 600 млрд AED и фактическом 580 млрд AED экономика имеет дефляционный разрыв 20 млрд AED.',
    },
    pitfall: {
      en: 'A deflationary gap is not the same as deflation, which means falling prices; it is output below potential, which may come with low inflation.',
      ru: 'Дефляционный разрыв — это не дефляция, то есть падение цен; это выпуск ниже потенциала, который может сопровождаться низкой инфляцией.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 9.3, p. 282' },
    sim: 'econ.output-gap',
  },
  {
    id: 'business-cycle',
    term: { en: 'business cycle', ru: 'деловой цикл (business cycle)' },
    def: {
      en: 'Irregular up-and-down movements in real GDP around its long-term trend: alternating periods of expansion and contraction, through boom, peak, recession and recovery.',
      ru: 'Нерегулярные колебания реального ВВП вокруг долгосрочного тренда: чередующиеся периоды расширения и сжатия — подъём, пик, рецессия и восстановление.',
    },
    example: {
      en: 'Expansion and contraction describe output changes; the output gap compares actual with potential output. Output can contract while remaining above potential, or expand while still below it.',
      ru: 'Подъём и спад описывают изменение выпуска, а разрыв — его отличие от потенциала. Выпуск может сокращаться, оставаясь выше потенциального, или расти, всё ещё не достигая его.',
    },
    pitfall: {
      en: 'A recession is not any fall in GDP; a common rule is two consecutive quarters of falling real GDP.',
      ru: 'Рецессия — это не любое падение ВВП; распространённое правило: два квартала подряд падения реального ВВП.',
    },
    syllabus: '3.2',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 8.4, p. 260' },
  },
];
