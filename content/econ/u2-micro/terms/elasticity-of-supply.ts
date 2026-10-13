import type { Term } from '../../../../src/contract/types';

// Sources: the textbook, with a page locator for each term.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'price-elasticity-of-supply',
    term: { en: 'price elasticity of supply (PES)', ru: 'ценовая эластичность предложения (price elasticity of supply, PES)' },
    def: {
      en: 'How strongly quantity supplied responds to a change in price, measured along a given supply curve: (% change in quantity supplied) / (% change in price). It is positive for a normal supply curve.',
      ru: 'Чувствительность величины предложения к изменению цены, измеряемая вдоль заданной кривой предложения: процентное изменение величины предложения, делённое на процентное изменение цены. Для обычной кривой предложения значение положительное.',
    },
    example: {
      en: 'A 4% rise in price that raises quantity supplied by 8% gives PES = 8 / 4 = 2.0.',
      ru: 'Рост цены на 4%, который увеличивает величину предложения на 8%, даёт PES = 8 / 4 = 2,0.',
    },
    pitfall: {
      en: 'PES is not the slope of the supply curve: the slope depends on the units used, while PES uses percentage changes and has no units.',
      ru: 'PES — это не наклон кривой предложения: наклон зависит от единиц измерения, а PES считается в процентах и единиц не имеет.',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.3, p. 104' },
    sim: 'econ.pes',
  },
  {
    id: 'elastic-supply',
    term: { en: 'elastic supply', ru: 'эластичное предложение (elastic supply)' },
    def: {
      en: 'Supply for which PES is greater than 1, so quantity supplied changes by a larger percentage than price.',
      ru: 'Предложение, у которого PES больше 1, поэтому величина предложения меняется на больший процент, чем цена.',
    },
    example: {
      en: 'A 10% rise in price that raises quantity supplied by 25% gives PES = 2.5, so supply is elastic.',
      ru: 'Рост цены на 10%, который увеличивает величину предложения на 25%, даёт PES = 2,5: предложение эластичное.',
    },
    pitfall: {
      en: 'Elastic is about percentage changes, not units: a large change in quantity can still be inelastic if the price changes by a larger percentage.',
      ru: 'Эластичность — это про процентные изменения, а не про единицы: большое изменение величины предложения может быть неэластичным, если цена меняется в процентах ещё сильнее.',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.3, p. 105' },
    sim: 'econ.pes',
  },
  {
    id: 'inelastic-supply',
    term: { en: 'inelastic supply', ru: 'неэластичное предложение (inelastic supply)' },
    def: {
      en: 'Supply for which PES is less than 1 but above zero, so quantity supplied changes by a smaller percentage than price.',
      ru: 'Предложение, у которого PES меньше 1, но больше нуля, поэтому величина предложения меняется на меньший процент, чем цена.',
    },
    example: {
      en: 'A 20% rise in price that lifts quantity supplied by only 4% gives PES = 4 / 20 = 0.20, so supply is inelastic.',
      ru: 'Рост цены на 20%, который увеличивает величину предложения лишь на 4%, даёт PES = 4 / 20 = 0,20: предложение неэластичное.',
    },
    pitfall: {
      en: 'Inelastic does not mean fixed: quantity still rises, just by a smaller percentage than the price. Only a vertical supply curve has zero response.',
      ru: 'Неэластичное не значит фиксированное: величина всё равно растёт, но на меньший процент, чем цена. Нулевой отклик есть только у вертикальной кривой предложения.',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.3, p. 105' },
  },
  {
    id: 'unit-elastic-supply',
    term: { en: 'unit elastic supply', ru: 'предложение с единичной эластичностью (unit elastic supply)' },
    def: {
      en: 'Supply for which PES is exactly 1, so quantity supplied changes by the same percentage as price; a straight supply line through the origin has this value.',
      ru: 'Предложение, у которого PES равен ровно 1, поэтому величина предложения меняется на тот же процент, что и цена; прямая линия предложения через начало координат имеет такое значение.',
    },
    example: {
      en: 'A 10% rise in price raises quantity supplied by 10%, so PES = 10 / 10 = 1.00.',
      ru: 'Рост цены на 10% увеличивает величину предложения на 10%, поэтому PES = 10 / 10 = 1,00.',
    },
    pitfall: {
      en: 'Unit elastic is not a 45-degree line: the slope depends on units, while PES = 1 only means that the percentage changes in price and quantity are equal.',
      ru: 'Единичная эластичность — это не прямая под углом 45 градусов: наклон зависит от единиц, а PES = 1 означает лишь, что процентные изменения цены и величины предложения равны.',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.3, p. 105' },
    sim: 'econ.pes',
  },
  {
    id: 'perfectly-elastic-supply',
    term: { en: 'perfectly elastic supply', ru: 'абсолютно эластичное предложение (perfectly elastic supply)' },
    def: {
      en: 'Supply for which PES is infinite: producers supply any quantity at one price, so the supply curve is horizontal.',
      ru: 'Предложение, у которого PES бесконечна: производители готовы поставить любое количество по одной цене, поэтому кривая предложения горизонтальна.',
    },
    example: {
      en: 'A small firm that can sell any quantity at the market price of AED 20 faces a horizontal supply curve at AED 20.',
      ru: 'Небольшая фирма, которая может продать любое количество по рыночной цене 20 AED, сталкивается с горизонтальной кривой предложения на уровне 20 AED.',
    },
    pitfall: {
      en: 'Perfectly elastic does not mean an infinite quantity at every price: the curve is horizontal at one price, and at any lower price nothing is supplied.',
      ru: 'Абсолютно эластичное предложение не означает бесконечный объём при любой цене: кривая горизонтальна на одном уровне цены, а при более низкой цене ничего не поставляется.',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.3, p. 105' },
    sim: 'econ.pes',
  },
  {
    id: 'perfectly-inelastic-supply',
    term: { en: 'perfectly inelastic supply', ru: 'абсолютно неэластичное предложение (perfectly inelastic supply)' },
    def: {
      en: 'Supply for which PES is zero: quantity supplied does not change whatever the price, so the supply curve is vertical.',
      ru: 'Предложение, у которого PES равна нулю: величина предложения не меняется при любой цене, поэтому кривая предложения вертикальна.',
    },
    example: {
      en: 'The supply of one original painting by an artist who has died is fixed at one work, however high the price.',
      ru: 'Предложение одной оригинальной картины умершего художника фиксировано: это одна работа, какой бы высокой ни была цена.',
    },
    pitfall: {
      en: 'Do not confuse the two limits: perfectly inelastic supply is vertical (PES = 0, quantity fixed), while perfectly elastic supply is horizontal (PES = infinity, price fixed).',
      ru: 'Не путайте два предела: абсолютно неэластичное предложение вертикально (PES = 0, величина фиксирована), а абсолютно эластичное — горизонтально (PES = ∞, цена фиксирована).',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.3, p. 105' },
    sim: 'econ.pes',
  },
  {
    id: 'factor-mobility',
    term: { en: 'mobility of factors of production', ru: 'мобильность факторов производства (mobility of factors of production)' },
    def: {
      en: 'How easily and quickly land, labour and capital can move from producing one good to producing another; high mobility makes supply more elastic.',
      ru: 'Насколько легко и быстро земля, труд и капитал могут перейти от производства одного товара к производству другого; высокая мобильность делает предложение более эластичным.',
    },
    example: {
      en: 'Farmland that can switch between wheat and barley lets producers respond quickly when the price of wheat rises.',
      ru: 'Пахотная земля, которую можно переключать между пшеницей и ячменём, позволяет производителям быстро реагировать на рост цены пшеницы.',
    },
    pitfall: {
      en: 'Mobility here means moving resources between products, not migration between countries: the question is how easily the same inputs can make a different good.',
      ru: 'Здесь мобильность означает переход ресурсов от одного товара к другому, а не миграцию между странами: важно, насколько легко те же ресурсы можно использовать для другого товара.',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3.3, p. 107' },
  },
  {
    id: 'spare-capacity',
    term: { en: 'spare capacity', ru: 'избыточные производственные мощности (spare capacity)' },
    def: {
      en: 'Unused productive capacity, such as idle machines or unstaffed shifts, that lets a firm raise output quickly when the price rises.',
      ru: 'Неиспользуемые производственные мощности, например простаивающие станки или незанятые смены, которые позволяют фирме быстро увеличить выпуск при росте цены.',
    },
    example: {
      en: 'A bakery that runs only one shift a day can add a second shift quickly when the price of bread rises, so its supply is elastic.',
      ru: 'Пекарня, которая работает одну смену в день, может быстро добавить вторую смену при росте цены хлеба, поэтому её предложение эластично.',
    },
    pitfall: {
      en: 'Spare capacity is machines and shifts that already exist but are not used, not spare stock of finished goods; it lets supply respond quickly, mainly in the short run.',
      ru: 'Избыточные мощности — это уже имеющиеся, но незагруженные станки и смены, а не запасы готовой продукции; они помогают предложению быстро реагировать, в основном в краткосрочном периоде.',
    },
    syllabus: '2.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 9.4, p. 287' },
  },
];
