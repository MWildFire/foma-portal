import type { Term } from '../../../../src/contract/types';

// Sources: the textbook, with a chapter and page for each term. Definitions are in our own words.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';

export const terms: Term[] = [
  {
    id: 'indirect-tax',
    term: { en: 'indirect tax', ru: 'косвенный налог (indirect tax)' },
    def: {
      en: 'A tax on spending, charged on goods or services: sellers pay it to the government, but part or all of it is passed on to buyers through a higher price.',
      ru: 'Налог на расходы, взимаемый с товаров или услуг: продавцы платят его государству, но часть или весь налог переносится на покупателей через более высокую цену.',
    },
    example: {
      en: 'A tax of AED 0.50 per can of drink, paid by the producer, raises the shelf price, so buyers pay part of the tax.',
      ru: 'Налог 0,50 AED за банку напитка, уплачиваемый производителем, повышает цену на полке, поэтому покупатели платят часть налога.',
    },
    pitfall: {
      en: 'The seller hands the tax to government, but that does not mean the seller bears the whole burden: buyers may pay most of it.',
      ru: 'Продавец перечисляет налог государству, но это не значит, что он несёт всё бремя: покупатели могут платить большую часть.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 4.3, p. 127' },
  },
  {
    id: 'specific-tax',
    term: { en: 'specific tax', ru: 'налог на единицу (specific tax)' },
    def: {
      en: 'A flat sum of tax levied on every unit of a good that is sold, for example AED 2 per litre; it shifts the supply curve vertically upwards by that amount.',
      ru: 'Фиксированная сумма налога на единицу проданного товара, например 2 AED за литр; налог сдвигает кривую предложения вертикально вверх на эту сумму.',
    },
    example: {
      en: 'A tax of AED 0.20 per bottle of water moves the supply curve up by AED 0.20 at every quantity.',
      ru: 'Налог 0,20 AED за бутылку воды сдвигает кривую предложения вверх на 0,20 AED при каждом количестве.',
    },
    pitfall: {
      en: 'A specific tax is the same amount at every price; do not confuse it with a percentage tax, whose amount grows with the price.',
      ru: 'Налог на единицу одинаков при любой цене; не путайте его с процентным налогом, сумма которого растёт вместе с ценой.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 4.3, p. 128' },
    sim: 'econ.specific-tax',
  },
  {
    id: 'ad-valorem-tax',
    term: { en: 'ad valorem tax', ru: 'адвалорный налог (ad valorem tax)' },
    def: {
      en: 'A tax charged as a percentage of the price of a good, so the amount per unit rises as the price rises; the supply curve shifts up by more at higher prices.',
      ru: 'Налог, взимаемый в процентах от цены товара, поэтому сумма налога на единицу растёт вместе с ценой; кривая предложения сдвигается вверх на всё большую величину при более высоких ценах.',
    },
    example: {
      en: 'A 10% ad valorem tax adds AED 2 per unit to a good priced at AED 20, but AED 5 per unit to a good priced at AED 50.',
      ru: 'Адвалорный налог 10% добавляет 2 AED за единицу к товару ценой 20 AED, но 5 AED за единицу к товару ценой 50 AED.',
    },
    pitfall: {
      en: 'Check the wording: a fixed amount per unit means a specific tax, while a percentage of the price means an ad valorem tax.',
      ru: 'Проверяйте формулировку: сумма «за единицу» означает налог на единицу, а процент от цены означает адвалорный налог.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 4.3, p. 128' },
    sim: 'econ.ad-valorem-tax',
  },
  {
    id: 'tax-incidence',
    term: { en: 'tax incidence', ru: 'налоговое бремя (tax incidence)' },
    def: {
      en: 'The division of the burden of a tax between buyers and sellers, measured by the share each side pays through a higher price or a lower price received.',
      ru: 'Распределение налогового бремени между покупателями и продавцами: доля налога, которую каждая сторона платит через более высокую цену для покупателей или более низкую цену, полученную продавцами.',
    },
    example: {
      en: 'An AED 2 tax raises the price paid by buyers by AED 1.50 and lowers the price received by sellers by AED 0.50, so buyers bear 75% of the tax.',
      ru: 'Налог 2 AED повышает цену, которую платят покупатели, на 1,50 AED, а цену, которую получают продавцы, снижает на 0,50 AED; покупатели несут 75% налога.',
    },
    pitfall: {
      en: 'Incidence is about who ends up paying, not about who sends the money to government.',
      ru: 'Налоговое бремя — это то, кто в итоге платит, а не то, кто переводит деньги государству.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 4.3, p. 133' },
    sim: 'econ.tax-incidence',
  },
  {
    id: 'deadweight-loss',
    term: { en: 'deadweight loss', ru: 'чистые потери общества (deadweight loss)' },
    def: {
      en: 'The loss of total surplus, consumer plus producer, that nobody receives because resources are misallocated; for example, a tax reduces the quantity traded below the efficient level.',
      ru: 'Потеря общего излишка (потребительского плюс производительского), которую никто не получает, потому что ресурсы распределены неэффективно; например, налог сокращает объём сделок ниже эффективного уровня.',
    },
    example: {
      en: 'A tax of AED 4 per unit cuts the quantity from 40 to 30 units; the deadweight loss is 1/2 x 10 x 4 = AED 20.',
      ru: 'Налог 4 AED за единицу сокращает объём с 40 до 30 единиц; чистые потери общества равны 1/2 x 10 x 4 = 20 AED.',
    },
    pitfall: {
      en: 'Deadweight loss is not tax revenue: government receives the revenue, and the deadweight loss is extra loss on top of it.',
      ru: 'Чистые потери общества — это не налоговые поступления: государство получает поступления, а чистые потери — дополнительная потеря сверх них.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 4.2, p. 117' },
    sim: 'econ.specific-tax',
  },
  {
    id: 'subsidy',
    term: { en: 'subsidy', ru: 'субсидия (subsidy)' },
    def: {
      en: 'A payment by government per unit of a good, to producers or consumers, that lowers the cost of supply or the price paid, so more is produced and consumed.',
      ru: 'Платёж государства за единицу товара производителям или потребителям, который снижает издержки производства или цену для покупателя, поэтому производится и потребляется больше.',
    },
    example: {
      en: 'A subsidy of AED 0.25 per loaf paid on 800 loaves costs the government AED 200.',
      ru: 'Субсидия 0,25 AED за буханку, выплачиваемая на 800 буханок, обходится государству в 200 AED.',
    },
    pitfall: {
      en: 'After a subsidy the price paid by consumers and the price received by producers differ; the gap between them is the subsidy per unit.',
      ru: 'После субсидии цена, которую платят потребители, и цена, которую получают производители, различаются; разница между ними равна субсидии на единицу.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 4.4, p. 134' },
    sim: 'econ.subsidy',
  },
  {
    id: 'price-ceiling',
    term: { en: 'maximum price (price ceiling)', ru: 'максимальная цена (maximum price, price ceiling)' },
    def: {
      en: 'A legal maximum price, placed beneath the equilibrium price; quantity demanded exceeds quantity supplied, so a shortage (excess demand) appears.',
      ru: 'Законодательно установленная максимальная цена ниже равновесной; величина спроса превышает величину предложения, поэтому возникает дефицит (избыточный спрос).',
    },
    example: {
      en: 'A maximum price of AED 8 when the equilibrium price is AED 9 leaves quantity demanded at 240 and quantity supplied at 200, a shortage of 40 units.',
      ru: 'Максимальная цена 8 AED при равновесной цене 9 AED оставляет величину спроса 240, а величину предложения 200: дефицит 40 единиц.',
    },
    pitfall: {
      en: 'A maximum price set above the equilibrium price has no effect, because the market already trades below it.',
      ru: 'Максимальная цена, установленная выше равновесной, не действует: рынок уже торгует ниже неё.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 4.2, p. 115' },
    sim: 'econ.price-ceiling',
  },
  {
    id: 'price-floor',
    term: { en: 'minimum price (price floor)', ru: 'минимальная цена (minimum price, price floor)' },
    def: {
      en: 'A legal minimum price set above the equilibrium price; quantity supplied exceeds quantity demanded, so a surplus (excess supply) appears.',
      ru: 'Законодательно установленная минимальная цена выше равновесной; величина предложения превышает величину спроса, поэтому возникает избыток (избыточное предложение).',
    },
    example: {
      en: 'A minimum price of AED 10 when the equilibrium price is AED 9 leaves quantity supplied at 240 and quantity demanded at 200, a surplus of 40 units.',
      ru: 'Минимальная цена 10 AED при равновесной цене 9 AED оставляет величину предложения 240, а величину спроса 200: избыток 40 единиц.',
    },
    pitfall: {
      en: 'A minimum price set below the equilibrium price has no effect, because the market already trades above it.',
      ru: 'Минимальная цена, установленная ниже равновесной, не действует: рынок уже торгует выше неё.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 4.2, p. 121' },
    sim: 'econ.price-floor',
  },
  {
    id: 'merit-good',
    term: { en: 'merit good', ru: 'мериторное благо (merit good)' },
    def: {
      en: 'A good that the free market underprovides, because consumers underestimate its benefits or it has positive externalities; government may subsidise or provide it.',
      ru: 'Благо, которое свободный рынок предоставляет в недостаточном объёме: потребители недооценивают его пользу или у него есть положительные внешние эффекты; государство может субсидировать его или обеспечивать его предоставление.',
    },
    example: {
      en: 'Vaccination and education are merit goods: a subsidy lowers their price, so more people use them.',
      ru: 'Вакцинация и образование — мериторные блага: субсидия снижает их цену, поэтому ими пользуется больше людей.',
    },
    pitfall: {
      en: 'A merit good is not a public good: it can be sold privately, but the free market still supplies too little of it.',
      ru: 'Мериторное благо — не общественное благо: его можно продавать частным образом, но свободный рынок всё равно производит его слишком мало.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 6.2, p. 179' },
  },
  {
    id: 'demerit-good',
    term: { en: 'demerit good', ru: 'демеритное благо (demerit good)' },
    def: {
      en: 'A good that the free market overprovides, because consumers underestimate its harm or it has negative externalities; government may tax or regulate it.',
      ru: 'Благо, которое свободный рынок предоставляет в избытке: потребители недооценивают его вред или у него есть отрицательные внешние эффекты; государство может облагать его налогом или регулировать.',
    },
    example: {
      en: 'Cigarettes and sugary drinks are demerit goods; an excise duty on them raises their price and reduces consumption.',
      ru: 'Сигареты и сладкие напитки — демеритные блага; акцизный налог на них повышает цену и снижает потребление.',
    },
    pitfall: {
      en: 'A tax on a demerit good can be regressive, because low-income buyers spend a larger share of their income on it.',
      ru: 'Налог на демеритное благо может быть регрессивным: покупатели с низким доходом тратят на него большую долю своего дохода.',
    },
    syllabus: '2.7',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 5.4, p. 166' },
  },
];
