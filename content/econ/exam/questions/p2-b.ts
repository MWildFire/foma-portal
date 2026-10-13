import type { Question } from '../../../../src/contract/types';

// EX-2b: P2 data response sets 04 to 06 (Economics HL school mock, 105 minutes, 40 marks).
// Parts (a) to (f) are worth 25 marks; part (g) is worth 15 marks with the command term "Discuss".
// The data is written as bold-labelled lists, because the Markdown reader used by the portal has no table block.
// Every calculation quoted in a markscheme has a check in scripts/econ-checks/exam-p2-b.json (expect_in).

export const questions: Question[] = [
  {
    id: 'p2-set-04',
    subject: 'econ',
    topicIds: ['price-elasticity-of-demand', 'income-and-cross-elasticity'],
    paper: 'P2',
    marks: 40,
    command: 'Discuss',
    stimulus: {
      en: `Nara Fresh is a family-owned juice company in a large Gulf city. Its best-selling product is a premium cold-pressed orange juice, sold in one-litre bottles in supermarkets. Many families buy it for its taste and for its locally grown oranges. Its main rival, Sol Juice, sells a similar orange juice in one-litre bottles, and shoppers can choose either brand from the same shelf.

In March, Nara Fresh raised its price from AED 10 to AED 12 per litre. The managers expected sales to fall, but they did not know by how much. The price rise was not caused by higher costs. Nara Fresh makes each litre at a constant cost of AED 5, so its profit depends on both the price it sets and the quantity it sells.

When Nara Fresh raised its price, Sol Juice was still selling at AED 10. Later, Sol Juice raised its own price, and some shoppers switched to Nara Fresh. Loyal customers, however, have little reason to change brands, so the switch was small. The managers expect the switch to grow over time, because new juice brands are entering the market and shoppers are becoming more used to trying them.

The sales director warns that the company must balance short-term profit against the risk of losing customers to rivals. Before deciding whether to cut or raise the price again, the board asks for an analysis of the company's data. A rise in revenue does not always mean a rise in profit, so the board wants to see both.

Table 1: weekly demand and costs for Nara Fresh juice, with Sol Juice's price fixed at AED 10. Quantities are in thousand litres per week; revenue and cost are in AED thousand per week.

- **Price AED 8:** quantity demanded 460; total revenue 3680; total cost 2300
- **Price AED 10:** quantity demanded 400; total revenue 4000; total cost 2000
- **Price AED 12:** quantity demanded 340; total revenue 4080; total cost 1700
- **Price AED 14:** quantity demanded 280; total revenue 3920; total cost 1400

Table 2: demand for Nara Fresh juice at AED 12, when Sol Juice changes its price. Quantities are in thousand litres per week.

- **Sol Juice at AED 10:** Nara Fresh quantity demanded 340
- **Sol Juice at AED 12:** Nara Fresh quantity demanded 374

Note: all figures are illustrative data invented for this exercise. Nara Fresh, Sol Juice and the city are fictional.`,
      ru: `Nara Fresh — семейная компания по производству соков в большом городе в регионе Персидского залива. Её самый продаваемый товар — премиальный апельсиновый сок холодного отжима в бутылках по один литр, который продаётся в супермаркетах. Многие семьи покупают его за вкус и за местные апельсины. Главный конкурент, Sol Juice, продаёт похожий апельсиновый сок в бутылках по один литр, и покупатели могут выбрать любой из брендов на одной полке.

В марте Nara Fresh повысила цену с 10 AED до 12 AED за литр. Руководители ожидали падения продаж, но не знали, насколько оно будет большим. Рост цены не был вызван ростом издержек. Nara Fresh производит каждый литр при постоянных издержках 5 AED, поэтому её прибыль зависит и от установленной цены, и от проданного количества.

Когда Nara Fresh повысила цену, Sol Juice продолжала продавать свой сок по 10 AED. Позднее Sol Juice повысила собственную цену, и часть покупателей перешла к Nara Fresh. Однако лояльные покупатели имеют мало причин менять бренд, поэтому переход был небольшим. Руководители ожидают, что переход будет расти со временем: на рынок выходят новые марки соков, и покупатели всё чаще пробуют их.

Финансовый директор предупреждает, что компания должна соотносить краткосрочную прибыль с риском потерять покупателей в пользу конкурентов. Прежде чем решать, снижать или повышать цену снова, совет директоров просит проанализировать данные компании. Рост выручки не всегда означает рост прибыли, поэтому совет хочет видеть и то и другое.

Таблица 1: еженедельный спрос и издержки на сок Nara Fresh при цене Sol Juice, зафиксированной на уровне 10 AED. Величина спроса — в тыс. литров в неделю; общая выручка (total revenue) и общие издержки (total cost) — в тыс. AED в неделю.

- **Цена 8 AED:** величина спроса 460; общая выручка 3680; общие издержки 2300
- **Цена 10 AED:** величина спроса 400; общая выручка 4000; общие издержки 2000
- **Цена 12 AED:** величина спроса 340; общая выручка 4080; общие издержки 1700
- **Цена 14 AED:** величина спроса 280; общая выручка 3920; общие издержки 1400

Таблица 2: спрос на сок Nara Fresh при цене 12 AED в зависимости от цены Sol Juice. Величина спроса — в тыс. литров в неделю.

- **Цена Sol Juice 10 AED:** величина спроса на сок Nara Fresh 340
- **Цена Sol Juice 12 AED:** величина спроса на сок Nara Fresh 374

Примечание: все цифры — иллюстративные данные (illustrative data), выдуманные для этого задания. Nara Fresh, Sol Juice и город вымышленные.`,
    },
    prompt: {
      en: `(a) Define the terms "price elasticity of demand" and "substitute goods". Give one pair of substitute goods from the stimulus. [3 marks]
(b) Calculate the price elasticity of demand (PED) for Nara Fresh juice when its price rises from AED 10 to AED 12, using Table 1. Show your working, state whether demand is elastic or inelastic, and give your answer to two decimal places. [4 marks]
(c) Draw a demand diagram for Nara Fresh juice using the data in Table 1. Label both axes, the demand curve (D), the prices AED 10 and AED 12 with their quantities, and the total revenue at each price. Explain, using your diagram, why total revenue rises. [6 marks]
(d) Show, on a second demand diagram, the effect on the demand for Nara Fresh juice of Sol Juice raising its price from AED 10 to AED 12. Use Table 2 and label the quantity demanded at AED 12 before and after the change. [4 marks]
(e) Explain what the cross-price elasticity of demand (XED) between Nara Fresh juice and Sol Juice shows, using Table 2. [4 marks]
(f) Explain why the price elasticity of demand for Nara Fresh juice may be higher in the long run than in the short run. [4 marks]
(g) Discuss whether Nara Fresh should cut or raise its price from AED 12. Use the data in Tables 1 and 2 and the article in your answer, and evaluate your conclusion. [15 marks]`,
      ru: `(a) Дайте определения терминов «ценовая эластичность спроса» (price elasticity of demand) и «товары-заменители» (substitute goods). Приведите одну пару товаров-заменителей из текста. [3 балла]
(b) Рассчитайте ценовую эластичность спроса (PED) на сок Nara Fresh при повышении цены с 10 AED до 12 AED, используя таблицу 1. Покажите ход решения, укажите, эластичный или неэластичный спрос, и дайте ответ с точностью до двух знаков после запятой. [4 балла]
(c) Нарисуйте диаграмму спроса на сок Nara Fresh по данным таблицы 1. Подпишите обе оси, кривую спроса (D), цены 10 AED и 12 AED с соответствующими количествами и общую выручку при каждой цене. Объясните по диаграмме, почему общая выручка растёт. [6 баллов]
(d) Покажите на второй диаграмме спроса влияние на спрос на сок Nara Fresh того, что Sol Juice повышает цену с 10 AED до 12 AED. Используйте таблицу 2 и подпишите величину спроса при цене 12 AED до и после изменения. [4 балла]
(e) Объясните, что показывает перекрёстная эластичность спроса (cross-price elasticity of demand, XED) между соком Nara Fresh и соком Sol Juice, используя таблицу 2. [4 балла]
(f) Объясните, почему ценовая эластичность спроса на сок Nara Fresh может быть выше в долгосрочном периоде, чем в краткосрочном. [4 балла]
(g) Обсудите, следует ли Nara Fresh снизить или повысить цену с 12 AED. Используйте данные таблиц 1 и 2 и текст статьи в ответе и оцените свой вывод. [15 баллов]`,
    },
    markscheme: {
      en: `(a) [3 marks]
1 mark: price elasticity of demand (PED) measures how responsive the quantity demanded is to a change in price: the percentage change in quantity demanded divided by the percentage change in price.
1 mark: substitute goods are goods that can be used in place of each other, so a rise in the price of one increases the demand for the other.
1 mark: a valid pair from the stimulus, for example Nara Fresh juice and Sol Juice (orange juice).

(b) [4 marks]
1 mark: % change in quantity demanded = (340 - 400) / 400 x 100 = -15%.
1 mark: % change in price = (12 - 10) / 10 x 100 = 20%.
1 mark: PED = -15 / 20 = -0.75 (the minus sign may be dropped: 0.75).
1 mark: the value is below 1 (0.75), so demand is inelastic over this range of prices.

(c) [6 marks]
1 mark: both axes labelled: price (AED per litre) on the vertical axis and quantity demanded (thousand litres per week) on the horizontal axis.
1 mark: a downward-sloping demand curve D.
1 mark: the prices AED 10 and AED 12 marked on the price axis, with the quantities 400 and 340 marked on the quantity axis.
1 mark: total revenue shown as a rectangle at each price: 4000 at AED 10 (10 x 400) and 4080 at AED 12 (12 x 340).
1 mark: the gain on the units still sold at the higher price is larger than the revenue lost on the units no longer sold.
1 mark: demand is inelastic over this range, so the price rise raises total revenue from 4000 to 4080.

(d) [4 marks]
1 mark: a second demand diagram with price on the vertical axis and quantity on the horizontal axis; the original demand curve is D1.
1 mark: Sol Juice's price rise changes the price of a substitute, which is a non-price determinant of demand.
1 mark: the demand curve shifts to the right (D1 to D2): an increase in demand, not a movement along the curve.
1 mark: at AED 12 the quantity demanded rises from 340 to 374 thousand litres per week, marked on the diagram.

(e) [4 marks]
1 mark: XED = % change in quantity demanded of Nara Fresh juice / % change in price of Sol Juice.
1 mark: % change in quantity demanded = (374 - 340) / 340 x 100 = 10%; % change in price of Sol Juice = (12 - 10) / 10 x 100 = 20%.
1 mark: XED = 10 / 20 = +0.5.
1 mark: the XED is positive, so the two juices are substitutes; the value (0.5) is small, so they are only weak substitutes and Sol Juice's price has only a small effect on Nara Fresh's sales.

(f) [4 marks]
1 mark: demand is more elastic in the long run because consumers have more time to find and try alternatives.
1 mark: new juice brands entering the market give shoppers more substitutes for Nara Fresh juice.
1 mark: habits change over time, so shoppers become more willing to switch brands when the price rises.
1 mark: the demand curve is flatter in the long run, so a price rise loses a larger share of sales and the revenue gain from the rise is smaller.

(g) [15 marks]
Generic bands:
- Knowledge and understanding (up to 3 marks): accurate use of PED, XED, total revenue and profit.
- Application (up to 3 marks): uses the figures in Tables 1 and 2 and the cost of AED 5 per litre.
- Analysis (up to 4 marks): links the price change to quantity, revenue and profit; explains the role of elasticity and substitutes.
- Evaluation (up to 5 marks): weighs both options, judges how large and how time-dependent the effects are, names the limits of the data, and reaches a justified conclusion.

Specific points:
- Between AED 10 and AED 12 demand is inelastic, so revenue rises from 4000 to 4080.
- Between AED 12 and AED 14 demand is elastic (the quantity falls proportionally more than the price rises), so revenue falls from 4080 to 3920 and sales fall from 340 to 280.
- With a constant cost of AED 5 per litre, profit is higher at AED 14 (3920 - 1400 = 2520) than at AED 12 (4080 - 1700 = 2380), so profit can rise even when revenue falls. Among the prices in Table 1, AED 14 gives the highest profit.
- A cut to AED 10 raises sales to 400, but lowers revenue to 4000 and profit to 2000 (4000 - 2000); it may start a price war with Sol Juice and damage the premium image.
- Over time demand is likely to become more elastic as new brands enter, so a rise may lose more customers later than the short-run figures suggest.
- An XED of 0.5 means Sol Juice's price changes have a small effect on Nara Fresh, so the risk of losing customers to Sol is limited; but if Sol cuts its price, Nara Fresh's sales will fall.
- The data are illustrative and assume constant costs; the company needs information on fixed costs, marketing and retailers' reactions before deciding.
- Justified conclusion: a moderate rise (for example to about AED 14) looks most profitable on these figures, but a trial in some stores, a close watch of Sol Juice's response and non-price methods (quality, branding) reduce the risk; the data do not support a cut.`,
      ru: `(a) [3 балла]
1 балл: ценовая эластичность спроса (PED) показывает, насколько величина спроса реагирует на изменение цены: это процентное изменение величины спроса, делённое на процентное изменение цены.
1 балл: товары-заменители — товары, которые можно использовать вместо друг друга, поэтому рост цены одного увеличивает спрос на другой.
1 балл: верная пара из текста, например сок Nara Fresh и сок Sol Juice (апельсиновый сок).

(b) [4 балла]
1 балл: процентное изменение величины спроса = (340 - 400) / 400 x 100 = -15%.
1 балл: процентное изменение цены = (12 - 10) / 10 x 100 = 20%.
1 балл: PED = -15 / 20 = -0,75 (знак минус можно опустить: 0,75).
1 балл: абсолютное значение PED меньше 1 (0,75), поэтому спрос неэластичен на этом участке цен.

(c) [6 баллов]
1 балл: обе оси подписаны: цена (AED за литр) по вертикальной оси и величина спроса (тыс. литров в неделю) по горизонтальной.
1 балл: кривая спроса D идёт вниз.
1 балл: цены 10 AED и 12 AED отмечены на оси цен, количества 400 и 340 отмечены на оси количества.
1 балл: общая выручка показана прямоугольником при каждой цене: 4000 при цене 10 AED (10 x 400) и 4080 при цене 12 AED (12 x 340).
1 балл: прирост выручки на единицах, которые продолжают покупать по более высокой цене, больше, чем потеря выручки от единиц, которые перестали покупать.
1 балл: вывод: спрос неэластичен на этом участке, поэтому рост цены увеличивает общую выручку с 4000 до 4080.

(d) [4 балла]
1 балл: вторая диаграмма спроса с ценой по вертикальной оси и величиной спроса по горизонтальной; исходная кривая спроса обозначена D1.
1 балл: повышение цены Sol Juice — это изменение цены товара-заменителя, то есть неценовой фактор спроса.
1 балл: кривая спроса сдвигается вправо (от D1 к D2): это рост спроса, а не движение вдоль кривой.
1 балл: при цене 12 AED величина спроса растёт с 340 до 374 тыс. литров в неделю; это отмечено на диаграмме.

(e) [4 балла]
1 балл: XED = процентное изменение величины спроса на сок Nara Fresh / процентное изменение цены Sol Juice.
1 балл: процентное изменение величины спроса = (374 - 340) / 340 x 100 = 10%; процентное изменение цены Sol Juice = (12 - 10) / 10 x 100 = 20%.
1 балл: XED = 10 / 20 = +0,5.
1 балл: XED положителен, значит соки — товары-заменители; значение мало (0,5), значит это лишь слабые заменители, и цена Sol Juice слабо влияет на продажи Nara Fresh.

(f) [4 балла]
1 балл: в долгосрочном периоде спрос более эластичен, потому что у потребителей больше времени найти и попробовать альтернативы.
1 балл: новые марки соков, выходящие на рынок, дают покупателям больше товаров-заменителей для сока Nara Fresh.
1 балл: привычки меняются со временем, поэтому покупатели охотнее переходят к другому бренду при росте цены.
1 балл: кривая спроса в долгосрочном периоде становится более пологой, поэтому повышение цены теряет большую долю продаж, а прирост выручки от него меньше.

(g) [15 баллов]
Общие уровни (generic bands):
- Знание и понимание (knowledge and understanding), до 3 баллов: верное использование PED, XED, общей выручки и прибыли.
- Применение (application), до 3 баллов: использование данных таблиц 1 и 2 и издержек 5 AED за литр.
- Анализ (analysis), до 4 баллов: связь изменения цены с количеством, выручкой и прибылью; роль эластичности и товаров-заменителей.
- Оценка (evaluation), до 5 баллов: сравнение вариантов, оценка величины и временной зависимости эффектов, ограничения данных и обоснованный вывод.

Конкретные аргументы:
- Между 10 AED и 12 AED спрос неэластичен, поэтому выручка растёт с 4000 до 4080.
- Между 12 AED и 14 AED спрос эластичен: величина спроса падает пропорционально сильнее, чем растёт цена, поэтому выручка падает с 4080 до 3920, а продажи — со 340 до 280.
- При издержках 5 AED за литр прибыль при 14 AED (3920 - 1400 = 2520) выше, чем при 12 AED (4080 - 1700 = 2380), поэтому прибыль может расти, даже когда выручка падает. Среди цен таблицы 1 наибольшая прибыль — при 14 AED.
- Снижение до 10 AED увеличивает продажи до 400, но снижает выручку до 4000 и прибыль до 2000 (4000 - 2000); возможна ценовая война с Sol Juice, а премиальный образ бренда пострадает.
- В долгосрочном периоде спрос, вероятно, станет более эластичным по мере выхода новых брендов, поэтому повышение может потерять больше покупателей позже, чем показывают краткосрочные данные.
- XED 0,5 означает, что изменения цены Sol Juice слабо влияют на Nara Fresh, поэтому риск потерять покупателей к Sol ограничен; но если Sol снизит цену, продажи Nara Fresh упадут.
- Данные иллюстративные и предполагают постоянные издержки; перед решением нужны сведения о постоянных издержках, маркетинге и реакции розничных сетей.
- Обоснованный вывод: умеренное повышение (например, примерно до 14 AED) выглядит наиболее прибыльным по этим данным, но пробное повышение в отдельных магазинах, внимательное наблюдение за реакцией Sol Juice и неценовые методы (качество, бренд) снижают риск; данные не поддерживают снижение цены.`,
    },
    origin: 'original',
    minutes: 105,
  },
  {
    id: 'p2-set-05',
    subject: 'econ',
    topicIds: ['monopoly-and-natural-monopoly', 'oligopoly-and-monopolistic-competition'],
    paper: 'P2',
    marks: 40,
    command: 'Discuss',
    stimulus: {
      en: `Marina Fibre is the only company that offers fibre-optic internet in the Harbour District, a new area of a fictional city. The company laid its cables and built its street cabinets over three years. Its fixed costs are AED 3000 thousand per month, whatever the number of subscribers. Each extra subscriber adds AED 30 per month to the company's costs, for equipment and service.

Analysts note that building a fibre network is very expensive, but running it is cheap once it is in place. This is one reason why each district usually has only one fibre network. A second network would mean digging the same streets again and paying a second set of fixed costs. The rival firms Dune Net and Coastal Net studied entry into the district and decided not to build their own networks, because two networks would cost far more per subscriber than one. The regulator has granted the only licence for the district to Marina Fibre.

Dune Net and Coastal Net have now talked about building one joint network. Analysts warn that if the two firms run a joint network, they may agree on a high price instead of competing for subscribers.

Marina Fibre sets one monthly price for all its subscribers. Many residents say that the price is too high. The regulator is considering a maximum monthly price of AED 70 and has asked the company how a lower price would affect its investment in the network.

The company's managers reply that a lower price would reduce profit and the money available for repairs and new cables. Some residents answer that the company already earns high profits while many households cannot afford fast internet.

Table 1: monthly demand and costs for Marina Fibre. Quantities are in thousand subscribers; revenue and cost are in AED thousand per month.

- **Price AED 60:** quantity demanded 300; total revenue 18000; total cost 12000
- **Price AED 70:** quantity demanded 250; total revenue 17500; total cost 10500
- **Price AED 80:** quantity demanded 200; total revenue 16000; total cost 9000
- **Price AED 90:** quantity demanded 150; total revenue 13500; total cost 7500
- **Price AED 100:** quantity demanded 100; total revenue 10000; total cost 6000

Note: all figures are illustrative data invented for this exercise. The companies, the district and the regulator are fictional.`,
      ru: `Marina Fibre — единственная компания, которая предоставляет волоконно-оптический интернет в районе Harbour District, новом районе вымышленного города. Компания проложила кабели и построила уличные шкафы за три года. Её постоянные издержки (fixed costs) составляют 3000 тыс. AED в месяц, каким бы ни было число абонентов. Каждый новый абонент добавляет 30 AED в месяц к издержкам компании на оборудование и обслуживание.

Аналитики отмечают, что построить волоконную сеть очень дорого, а эксплуатировать её дёшево, когда она уже создана. Поэтому в каждом районе обычно есть только одна волоконная сеть. Вторая сеть означала бы повторную прокладку тех же улиц и вторые постоянные издержки. Конкуренты Dune Net и Coastal Net изучали возможность входа в район и решили не строить собственные сети, потому что две сети стоили бы намного дороже в расчёте на одного абонента, чем одна. Регулятор выдал единственную лицензию на район компании Marina Fibre.

Dune Net и Coastal Net теперь обсуждают создание одной общей сети. Аналитики предупреждают, что если две фирмы будут управлять общей сетью, они могут договориться о высокой цене вместо того, чтобы конкурировать за абонентов.

Marina Fibre устанавливает одну месячную цену для всех абонентов. Многие жители считают цену слишком высокой. Регулятор рассматривает максимальную месячную цену 70 AED и попросил компанию объяснить, как более низкая цена повлияет на инвестиции в сеть.

Руководство компании отвечает, что более низкая цена снизит прибыль и деньги на ремонт и новые кабели. Некоторые жители возражают, что компания уже получает высокую прибыль, в то время как многие семьи не могут позволить себе быстрый интернет.

Таблица 1: ежемесячный спрос и издержки Marina Fibre. Абоненты — в тыс.; общая выручка (total revenue) и общие издержки (total cost) — в тыс. AED в месяц.

- **Цена 60 AED:** величина спроса 300; общая выручка 18000; общие издержки 12000
- **Цена 70 AED:** величина спроса 250; общая выручка 17500; общие издержки 10500
- **Цена 80 AED:** величина спроса 200; общая выручка 16000; общие издержки 9000
- **Цена 90 AED:** величина спроса 150; общая выручка 13500; общие издержки 7500
- **Цена 100 AED:** величина спроса 100; общая выручка 10000; общие издержки 6000

Примечание: все цифры — иллюстративные данные (illustrative data), выдуманные для этого задания. Компании, район и регулятор вымышленные.`,
    },
    prompt: {
      en: `(a) Define the terms "natural monopoly" and "supernormal profit". Give one barrier to entry that protects Marina Fibre from competition, using the stimulus. [3 marks]
(b) Calculate Marina Fibre's profit at a price of AED 60 per month and at a price of AED 80 per month, using Table 1. Profit is total revenue minus total cost. Show your working. [4 marks]
(c) Draw a diagram of Marina Fibre as an unregulated monopolist. Include the demand curve (D), the marginal revenue curve (MR), the marginal cost curve (MC) and the average total cost curve (ATC). Mark the profit-maximising price and output, shade the supernormal profit, and mark the output at which price equals marginal cost. [6 marks]
(d) Show, on your diagram from part (c), the effect of a maximum price of AED 70 per month set by the regulator. State the new output and the new profit. [4 marks]
(e) Explain why the market for fibre-optic internet in the Harbour District is a natural monopoly, using the cost data in the stimulus. [4 marks]
(f) Explain why Marina Fibre's price is above its marginal cost, and what this means for allocative efficiency. [4 marks]
(g) Discuss whether the government should regulate the market power of Marina Fibre and, if so, which form of regulation is best. Use the data in the stimulus and evaluate your conclusion. [15 marks]`,
      ru: `(a) Дайте определения терминов «естественная монополия» (natural monopoly) и «сверхнормальная прибыль» (supernormal profit). Приведите один барьер для входа на рынок (barrier to entry), который защищает Marina Fibre от конкуренции, опираясь на текст. [3 балла]
(b) Рассчитайте прибыль Marina Fibre при цене 60 AED в месяц и при цене 80 AED в месяц, используя таблицу 1. Прибыль равна общей выручке минус общие издержки. Покажите ход решения. [4 балла]
(c) Нарисуйте диаграмму Marina Fibre как монополиста без регулирования. Включите кривую спроса (D), кривую предельного дохода (marginal revenue, MR), кривую предельных издержек (MC) и кривую средних общих издержек (ATC). Отметьте цену и объём, при которых прибыль максимальна, заштрихуйте сверхнормальную прибыль и отметьте объём, при котором цена равна предельным издержкам. [6 баллов]
(d) Покажите на своей диаграмме из части (c) действие максимальной цены 70 AED в месяц, установленной регулятором. Укажите новый объём выпуска и новую прибыль. [4 балла]
(e) Объясните, почему рынок волоконно-оптического интернета в районе Harbour District является естественной монополией, используя данные об издержках из текста. [4 балла]
(f) Объясните, почему цена Marina Fibre выше её предельных издержек, и что это означает для аллокативной эффективности (allocative efficiency). [4 балла]
(g) Обсудите, должно ли государство регулировать рыночную власть (market power) Marina Fibre и, если да, то какая форма регулирования лучше всего. Используйте данные текста и оцените свой вывод. [15 баллов]`,
    },
    markscheme: {
      en: `(a) [3 marks]
1 mark: a natural monopoly is a market in which one firm can supply the whole market at a lower average cost than two or more firms, because of large fixed costs.
1 mark: supernormal profit is profit above normal profit, that is, total revenue above the total opportunity cost of all the factors of production.
1 mark: a valid barrier to entry from the stimulus: the high fixed costs of a second network (the streets must be dug again), or the single licence granted by the regulator.

(b) [4 marks]
1 mark: total revenue at AED 60 = 60 x 300 = 18000; total cost = 12000 (Table 1).
1 mark: profit at AED 60 = 18000 - 12000 = 6000 (AED thousand per month).
1 mark: total revenue at AED 80 = 80 x 200 = 16000; total cost = 9000 (Table 1).
1 mark: profit at AED 80 = 16000 - 9000 = 7000 (AED thousand per month).

(c) [6 marks]
1 mark: both axes labelled: price (AED per month) on the vertical axis and quantity (thousand subscribers per month) on the horizontal axis.
1 mark: a downward-sloping demand curve D, with the MR curve below it, and a horizontal MC curve at AED 30.
1 mark: an ATC curve that falls as output rises and lies above MC at every output.
1 mark: profit is maximised where MR = MC; the price is read from the demand curve above that output and lies between AED 70 and AED 80 (Table 1 gives a profit of 7000 at both prices).
1 mark: supernormal profit shaded as the rectangle between the price and the ATC at the chosen output.
1 mark: the output at which price equals marginal cost (AED 30) is larger than the monopoly output; the monopolist restricts output and charges a higher price than the efficient level.

(d) [4 marks]
1 mark: the maximum price of AED 70 is a horizontal line that cuts the demand curve; the firm's marginal revenue equals AED 70 up to that output.
1 mark: marginal revenue is now above MC up to the point where demand meets the price of AED 70, so the firm expands its output.
1 mark: the new output is 250 thousand subscribers (Table 1 at AED 70), more than the monopoly output, which lies between 200 and 250; the price falls to AED 70.
1 mark: the new profit = 17500 - 10500 = 7000 (AED thousand per month): slightly below the unregulated maximum, but still supernormal.

(e) [4 marks]
1 mark: the network's fixed costs (AED 3000 thousand per month) are very large and do not change with the number of subscribers.
1 mark: marginal cost is constant at AED 30 per subscriber, so average total cost falls as the number of subscribers rises, because the fixed costs are spread over more subscribers.
1 mark: one network can serve the whole market at a lower average cost than two networks, each of which would have to pay the fixed costs.
1 mark: the market is therefore a natural monopoly: a second firm would raise the cost per subscriber and is unlikely to be efficient, so the market tends to stay with one firm.

(f) [4 marks]
1 mark: the firm maximises profit where MR = MC; with a downward-sloping demand curve, MR is below the price, so the price is above MC.
1 mark: the monopolist restricts output (serves fewer subscribers than at a price equal to MC) to keep the price high.
1 mark: allocative efficiency requires price equal to marginal cost; the monopolist is therefore allocatively inefficient.
1 mark: some consumers who would pay more than the cost of serving them go without the service, so a deadweight loss (welfare loss) arises.

(g) [15 marks]
Generic bands:
- Knowledge and understanding (up to 3 marks): accurate use of natural monopoly, MR = MC, allocative efficiency and regulation.
- Application (up to 3 marks): uses the cost data, Table 1 and the proposed maximum price of AED 70.
- Analysis (up to 4 marks): explains how each form of regulation changes price, output, profit and investment.
- Evaluation (up to 5 marks): compares the options, names the limits (information, costs, investment, equity, collusion) and reaches a justified conclusion.

Specific points:
- Maximum price (AED 70): output rises to 250 and the price falls, so consumers gain; profit falls but stays positive, so investment can continue.
- Marginal cost pricing (AED 30): efficient in theory, but average total cost is above AED 30 at every output, so the firm would make a loss and need a subsidy from taxpayers.
- Average cost pricing: the firm earns normal profit; output is higher than the monopoly output but lower than the efficient output.
- Break-up: unsuitable for a natural monopoly, because two networks would duplicate the fixed costs and raise the cost per subscriber.
- Public ownership: removes the drive for supernormal profit, but may reduce efficiency and investment, and needs public funds.
- Open access or a competitive licence: other providers can use the network, or the licence is awarded by tender for a fixed period; this limits market power while keeping one network.
- Collusion: if Dune Net and Coastal Net run a joint network, they could fix a high price, so competition policy is needed as well as price regulation.
- Evaluation: the regulator lacks reliable cost information and the firm may overstate its costs; regulatory capture is possible; prices that are too low reduce investment and service quality; low-income households may still be excluded.
- Justified conclusion: regulation is justified because the market is a natural monopoly; a maximum price below the monopoly price, with regular reviews of costs and a competitive licence, is the most practical option, while a break-up would raise costs.`,
      ru: `(a) [3 балла]
1 балл: естественная монополия (natural monopoly) — рынок, на котором одна фирма может обслужить весь рынок при более низких средних издержках, чем две или более фирм, из-за больших постоянных издержек.
1 балл: сверхнормальная прибыль (supernormal profit) — прибыль сверх нормальной прибыли, то есть общая выручка выше полных альтернативных издержек всех факторов производства.
1 балл: верный барьер для входа из текста: высокие постоянные издержки второй сети (улицы нужно прокладывать заново) или единственная лицензия, выданная регулятором.

(b) [4 балла]
1 балл: общая выручка при 60 AED = 60 x 300 = 18000; общие издержки = 12000 (таблица 1).
1 балл: прибыль при 60 AED = 18000 - 12000 = 6000 (тыс. AED в месяц).
1 балл: общая выручка при 80 AED = 80 x 200 = 16000; общие издержки = 9000 (таблица 1).
1 балл: прибыль при 80 AED = 16000 - 9000 = 7000 (тыс. AED в месяц).

(c) [6 баллов]
1 балл: обе оси подписаны: цена (AED в месяц) по вертикальной оси и количество (тыс. абонентов в месяц) по горизонтальной.
1 балл: кривая спроса D идёт вниз, кривая предельного дохода MR лежит под ней, кривая предельных издержек MC горизонтальна на уровне 30 AED.
1 балл: кривая ATC снижается при росте выпуска и лежит выше MC при любом объёме.
1 балл: прибыль максимальна там, где MR = MC; цена берётся по кривой спроса над этим объёмом и лежит между 70 AED и 80 AED (в таблице 1 прибыль при обеих ценах равна 7000).
1 балл: сверхнормальная прибыль заштрихована как прямоугольник между ценой и ATC при выбранном объёме.
1 балл: объём, при котором цена равна предельным издержкам (30 AED), больше монопольного объёма; монополист ограничивает выпуск и назначает цену выше эффективного уровня.

(d) [4 балла]
1 балл: максимальная цена 70 AED — горизонтальная линия, которая пересекает кривую спроса; предельный доход фирмы равен 70 AED до этого объёма.
1 балл: предельный доход выше MC до точки, где спрос встречается с ценой 70 AED, поэтому фирма расширяет выпуск.
1 балл: новый объём — 250 тыс. абонентов (таблица 1, цена 70 AED), больше монопольного объёма, который лежит между 200 и 250; цена снижается до 70 AED.
1 балл: новая прибыль = 17500 - 10500 = 7000 (тыс. AED в месяц): немного ниже максимума без регулирования, но всё ещё сверхнормальная.

(e) [4 балла]
1 балл: постоянные издержки сети (3000 тыс. AED в месяц) очень велики и не меняются с числом абонентов.
1 балл: предельные издержки постоянны (30 AED на абонента), поэтому средние общие издержки снижаются по мере роста числа абонентов: постоянные издержки распределяются на большее число абонентов.
1 балл: одна сеть может обслужить весь рынок при более низких средних издержках, чем две сети, каждая из которых должна нести постоянные издержки.
1 балл: поэтому рынок — естественная монополия: вторая фирма повысит издержки на абонента и вряд ли будет эффективной, поэтому рынок остаётся у одной фирмы.

(f) [4 балла]
1 балл: фирма максимизирует прибыль там, где MR = MC; при нисходящей кривой спроса MR ниже цены, поэтому цена выше MC.
1 балл: монополист ограничивает выпуск (обслуживает меньше абонентов, чем при цене, равной MC), чтобы поддерживать высокую цену.
1 балл: аллокативная эффективность требует, чтобы цена была равна предельным издержкам; монополист поэтому аллокативно неэффективен.
1 балл: часть потребителей, которые готовы платить больше, чем стоит их обслуживание, остаются без услуги; возникают чистые потери общества (deadweight loss).

(g) [15 баллов]
Общие уровни (generic bands):
- Знание и понимание (knowledge and understanding), до 3 баллов: точное использование понятий естественной монополии, MR = MC, аллокативной эффективности и регулирования.
- Применение (application), до 3 баллов: использование данных об издержках, таблицы 1 и предложенной максимальной цены 70 AED.
- Анализ (analysis), до 4 баллов: объяснение влияния каждой формы регулирования на цену, объём, прибыль и инвестиции.
- Оценка (evaluation), до 5 баллов: сравнение вариантов, ограничения (информация, издержки, инвестиции, справедливость, сговор) и обоснованный вывод.

Конкретные аргументы:
- Максимальная цена 70 AED: объём растёт до 250, цена снижается, потребители выигрывают; прибыль падает, но остаётся положительной, поэтому инвестиции могут продолжаться.
- Ценообразование по предельным издержкам (30 AED): эффективно в теории, но средние общие издержки выше 30 AED при любом объёме, поэтому фирма понесёт убытки и нуждается в субсидии из налогов.
- Ценообразование по средним издержкам: фирма получает нормальную прибыль; объём больше монопольного, но меньше эффективного.
- Разделение компании: не подходит для естественной монополии, потому что две сети дублируют постоянные издержки и повышают издержки на абонента.
- Государственная собственность: устраняет стремление к сверхнормальной прибыли, но может снизить эффективность и инвестиции и требует государственных средств.
- Открытый доступ или конкурсная лицензия: другие поставщики могут пользоваться сетью, или лицензия выдаётся по тендеру на определённый срок; это ограничивает рыночную власть при сохранении одной сети.
- Сговор: если Dune Net и Coastal Net будут управлять общей сетью, они могут зафиксировать высокую цену, поэтому нужна политика конкуренции, а не только регулирование цен.
- Оценка: у регулятора нет надёжной информации об издержках, а фирма может их завышать; возможен захват регулятора (regulatory capture); слишком низкие цены снижают инвестиции и качество услуг; семьи с низкими доходами могут остаться без доступа.
- Обоснованный вывод: регулирование оправдано, потому что рынок — естественная монополия; максимальная цена ниже монопольной, с регулярным пересмотром издержек и конкурсной лицензией, — самый практичный вариант, а разделение повысит издержки.`,
    },
    origin: 'original',
    minutes: 105,
  },
  {
    id: 'p2-set-06',
    subject: 'econ',
    topicIds: ['trade-protection', 'exchange-rates'],
    paper: 'P2',
    marks: 40,
    command: 'Discuss',
    stimulus: {
      en: `Keldia is a fictional middle-income country with a large construction sector. Its currency, the kel (KEL), lost value against the US dollar this year. One US dollar now buys KEL 4.8, compared with KEL 4.0 before. Steel is traded in dollars on world markets at USD 300 per tonne, so the kel price of imported steel rose from KEL 1200 to KEL 1440 per tonne. The change came from the exchange rate, not from the world price of steel.

The government responded by placing a tariff of KEL 200 per tonne on steel imports. Domestic steel producers welcomed the measure. They say it protects jobs and a strategic industry. Builders complain that their costs have risen sharply, and some warn that housing projects will be delayed. Steel makes up a large share of the cost of building homes and offices in Keldia.

Table 1 shows the steel market after the tariff was introduced. The domestic price with the tariff is the world price plus the tariff. Imports are the quantity demanded minus the quantity supplied by domestic producers. All figures are annual and use the new exchange rate.

Trade economists are divided. Some argue that steel is essential for defence and infrastructure. Others point out that consumers pay higher prices, that trading partners may retaliate with their own tariffs, and that Keldia's steel exporters may gain from the weaker kel, because their prices in dollars are now lower. The government plans to use the tariff revenue to fund training for steelworkers.

Table 1: steel market in Keldia per year. Prices are in KEL per tonne; quantities are in thousand tonnes.

- **Price 1440 KEL (world price, no tariff):** quantity demanded 360; domestic supply 120; imports 240
- **Price 1640 KEL (world price plus tariff):** quantity demanded 320; domestic supply 170; imports 150

Note: all figures are illustrative data invented for this exercise. Keldia and the kel are fictional.`,
      ru: `Келдия — вымышленная страна со средним уровнем дохода и крупным строительным сектором. Её валюта, кел (KEL), в этом году подешевела по отношению к доллару США. Сейчас один доллар США покупает 4.8 KEL, раньше — 4.0 KEL. Сталь торгуется в долларах на мировых рынках по цене 300 USD за тонну, поэтому цена импортной стали в келах выросла с 1200 KEL до 1440 KEL за тонну. Изменение вызвано обменным курсом (exchange rate), а не мировой ценой стали.

Правительство ответило тарифом 200 KEL за тонну на импорт стали. Производители отечественной стали приветствовали эту меру: по их словам, она защищает рабочие места и стратегическую отрасль. Строители жалуются, что их издержки резко выросли, а некоторые предупреждают о задержках жилищных проектов. Сталь составляет большую долю издержек строительства жилья и офисов в Келдии.

Таблица 1 показывает рынок стали после введения тарифа. Внутренняя цена с тарифом равна мировой цене плюс тариф. Импорт — это величина спроса минус величина предложения отечественных производителей. Все цифры — годовые и рассчитаны по новому обменному курсу.

Экономисты в области торговли расходятся во мнениях. Одни считают сталь необходимой для обороны и инфраструктуры. Другие указывают, что потребители платят более высокие цены, что торговые партнёры могут ответить собственными тарифами и что экспортёры стали из Келдии могут выиграть от слабого кела, потому что их цены в долларах теперь ниже. Правительство планирует направить доход от тарифа на обучение сталеваров.

Таблица 1: рынок стали в Келдии в год. Цены — в KEL за тонну; количество — в тыс. тонн.

- **Цена 1440 KEL (мировая цена, без тарифа):** величина спроса 360; предложение отечественных производителей 120; импорт 240
- **Цена 1640 KEL (мировая цена плюс тариф):** величина спроса 320; предложение отечественных производителей 170; импорт 150

Примечание: все цифры — иллюстративные данные (illustrative data), выдуманные для этого задания. Келдия и кел вымышленные.`,
    },
    prompt: {
      en: `(a) Define the terms "tariff" and "depreciation". Give one reason why the depreciation of the kel raises the price of imported steel. [3 marks]
(b) Calculate the revenue the government collects from the tariff on steel imports, using Table 1 and the tariff of KEL 200 per tonne. Show your working and give your answer in KEL thousand. [4 marks]
(c) Draw a tariff diagram for the steel market in Keldia. Include the domestic demand curve (D), the domestic supply curve (S), the world price of KEL 1440 (before the tariff) and the price with the tariff of KEL 1640. Label the quantity imported with the tariff, shade the government's tariff revenue, and show the two deadweight loss triangles. [6 marks]
(d) Show, on a separate diagram, the effect of the depreciation (before the tariff) on the price of imported steel, the quantity imported and the quantity supplied by domestic producers. Use the figures from the stimulus. [4 marks]
(e) Explain how the tariff changes the surplus of consumers and the surplus of producers in the steel market, and the revenue of the government. [4 marks]
(f) Explain how the depreciation of the kel affects Keldia's exports of steel and its current account balance. [4 marks]
(g) Discuss whether trade protection, such as the steel tariff, improves the welfare of Keldia. Use the data in the stimulus and evaluate your conclusion. [15 marks]`,
      ru: `(a) Дайте определения терминов «тариф» (tariff) и «удешевление валюты» (depreciation). Приведите одну причину, по которой удешевление кела повышает цену импортной стали. [3 балла]
(b) Рассчитайте доход правительства от тарифа на импорт стали, используя таблицу 1 и тариф 200 KEL за тонну. Покажите ход решения и дайте ответ в тыс. KEL. [4 балла]
(c) Нарисуйте диаграмму тарифа на рынке стали в Келдии. Включите кривую внутреннего спроса (D), кривую внутреннего предложения (S), мировую цену без тарифа 1440 KEL и цену с тарифом 1640 KEL. Подпишите объём импорта с тарифом, заштрихуйте доход правительства от тарифа и покажите два треугольника чистых потерь общества (deadweight loss). [6 баллов]
(d) Покажите на отдельной диаграмме влияние удешевления кела (до введения тарифа) на цену импортной стали, объём импорта и объём предложения отечественных производителей. Используйте данные текста. [4 балла]
(e) Объясните, как тариф меняет излишек потребителей (consumer surplus) и излишек производителей (producer surplus) на рынке стали, а также доход правительства. [4 балла]
(f) Объясните, как удешевление кела влияет на экспорт стали Келдии и сальдо счёта текущих операций (current account balance). [4 балла]
(g) Обсудите, улучшает ли торговая защита (trade protection), например тариф на сталь, благосостояние Келдии. Используйте данные текста и оцените свой вывод. [15 баллов]`,
    },
    markscheme: {
      en: `(a) [3 marks]
1 mark: a tariff is a tax on imports; it raises the price of the imported good and so reduces the quantity demanded.
1 mark: depreciation is a fall in the value of a currency against other currencies, so one unit of the currency buys less foreign currency.
1 mark: steel is priced in US dollars, so after the depreciation each dollar costs more kel and the kel price of imported steel rises (for example USD 300 x 4.8 = KEL 1440, compared with USD 300 x 4.0 = KEL 1200).

(b) [4 marks]
1 mark: imports after the tariff are 150 thousand tonnes (Table 1, at KEL 1640).
1 mark: tariff revenue = tariff per tonne x quantity imported.
1 mark: tariff revenue = 200 x 150 = 30000 (KEL thousand per year).
1 mark: this is KEL 30 million per year (30000 thousand KEL).

(c) [6 marks]
1 mark: both axes labelled: price (KEL per tonne) on the vertical axis and quantity (thousand tonnes per year) on the horizontal axis.
1 mark: domestic demand D falls as price rises and domestic supply S rises as price rises; both curves are drawn correctly.
1 mark: the world price line at KEL 1440 and the tariff price line at KEL 1640 are labelled.
1 mark: at KEL 1640 the domestic supply of 170, the quantity demanded of 320 and the imports of 150 (the horizontal gap) are marked.
1 mark: the tariff revenue is shaded as a rectangle: 200 x 150 = 30000.
1 mark: two deadweight loss triangles: one for production (between 120 and 170 on the supply curve, between the world price line and S) and one for consumption (between 320 and 360 on the demand curve, between D and the tariff price line).

(d) [4 marks]
1 mark: the depreciation raises the kel price of dollar-priced imports, so the world supply line for imports shifts up from KEL 1200 to KEL 1440 (USD 300 x 4.0 = KEL 1200 and USD 300 x 4.8 = KEL 1440).
1 mark: the price of imported steel rises and quantity demanded falls; this is a movement along the demand curve, not a shift of it.
1 mark: domestic producers supply more at the higher price: a movement along the domestic supply curve.
1 mark: the quantity imported falls, because domestic supply rises and demand falls, so the gap between them narrows.

(e) [4 marks]
1 mark: the tariff raises the domestic price from KEL 1440 to KEL 1640 (the world price plus the tariff).
1 mark: consumers buy less (320 instead of 360) and lose consumer surplus, because they pay more for the units they still buy and stop buying others.
1 mark: domestic producers sell more (170 instead of 120) and gain producer surplus.
1 mark: the government collects tariff revenue of 30000 KEL thousand on the 150 thousand tonnes still imported; this is a transfer from consumers to the government.

(f) [4 marks]
1 mark: the depreciation makes Keldia's steel cheaper in dollars, so its exports become more price competitive on world markets.
1 mark: export volumes rise if the demand for exports is elastic, which increases export revenue.
1 mark: imports cost more in kel; in the short run the import bill may rise because demand for imports is inelastic, so the current account can worsen (the J-curve effect).
1 mark: in the longer run the volume effects grow and the current account balance improves (the J-curve); the tariff reduces imports further.

(g) [15 marks]
Generic bands:
- Knowledge and understanding (up to 3 marks): accurate use of tariff, consumer and producer surplus, deadweight loss and depreciation.
- Application (up to 3 marks): uses Table 1 (imports fall from 240 to 150 thousand tonnes; tariff revenue 30000 KEL thousand) and the rise in the world price in kel from 1200 to 1440.
- Analysis (up to 4 marks): explains the transfers, the deadweight losses and the effects on jobs, prices and retaliation.
- Evaluation (up to 5 marks): weighs the gains and losses, tests the strategic and jobs arguments, and reaches a justified conclusion.

Specific points:
- Producers gain surplus (domestic supply rises from 120 to 170 thousand tonnes) and the government gains 30000 KEL thousand of revenue; consumers lose more than producers and the government gain together, and the difference is the deadweight loss.
- Deadweight loss: domestic steel is produced at a higher cost than the world price (production inefficiency), and consumers give up units worth more than the world price (consumption loss). In the standard model the tariff lowers welfare.
- The tariff is a transfer from consumers to producers and the government, so welfare improves only if these gains outweigh the losses, for example because of external benefits or strategic reasons.
- Strategic and security arguments: steel is needed for defence and infrastructure, so domestic capacity may be worth more than its market price, but a tariff may not be the cheapest way to secure it.
- Jobs: protection saves jobs in steel, but construction and other steel-using industries may lose jobs; the net effect on employment is unclear.
- The depreciation alone has already raised the kel price of imports from 1200 to 1440; the tariff adds 200 more, so the protection is large and construction costs rise.
- Retaliation: trading partners may put tariffs on Keldia's other exports, which harms other exporters.
- Dynamic effects: protection reduces the incentive for domestic producers to become more efficient; the infant-industry argument is weak for an established steel industry.
- Justified conclusion: the tariff is unlikely to raise overall welfare; targeted support for steelworkers' training or for strategic capacity may reach the same aims at a lower cost.`,
      ru: `(a) [3 балла]
1 балл: тариф (tariff) — налог на импорт; он повышает цену импортного товара и поэтому снижает величину спроса на него.
1 балл: удешевление валюты (depreciation) — снижение стоимости валюты по отношению к другим валютам, поэтому одна единица валюты покупает меньше иностранной валюты.
1 балл: сталь торгуется в долларах, поэтому после удешевления за каждый доллар платят больше келов, и цена импортной стали в келах растёт (например, 300 USD x 4.8 = 1440 KEL против 300 USD x 4.0 = 1200 KEL).

(b) [4 балла]
1 балл: импорт после введения тарифа — 150 тыс. тонн (таблица 1, цена 1640 KEL).
1 балл: доход от тарифа = тариф за тонну x объём импорта.
1 балл: доход от тарифа = 200 x 150 = 30000 (тыс. KEL в год).
1 балл: это 30 млн KEL в год (30000 тыс. KEL).

(c) [6 баллов]
1 балл: обе оси подписаны: цена (KEL за тонну) по вертикальной оси и количество (тыс. тонн в год) по горизонтальной.
1 балл: внутренний спрос D снижается при росте цены, внутреннее предложение S растёт при росте цены; кривые построены верно.
1 балл: линии мировой цены 1440 KEL и цены с тарифом 1640 KEL подписаны.
1 балл: при цене 1640 KEL отмечены предложение 170, величина спроса 320 и импорт 150 (горизонтальный разрыв).
1 балл: доход от тарифа показан заштрихованным прямоугольником: 200 x 150 = 30000.
1 балл: два треугольника чистых потерь общества (deadweight loss): один для производства (между объёмами 120 и 170 на кривой S, между линией мировой цены и S) и один для потребления (между объёмами 320 и 360 на кривой D, между D и линией цены с тарифом).

(d) [4 балла]
1 балл: удешевление кела повышает цену импорта в келах, поэтому линия предложения импорта сдвигается вверх с 1200 KEL до 1440 KEL (300 USD x 4.0 = 1200 KEL и 300 USD x 4.8 = 1440 KEL).
1 балл: цена импортной стали растёт, величина спроса падает; это движение вдоль кривой спроса, а не её сдвиг.
1 балл: отечественные производители предлагают больше при более высокой цене: движение вдоль кривой внутреннего предложения.
1 балл: объём импорта снижается, потому что внутреннее предложение растёт, а спрос падает, и разрыв между ними сокращается.

(e) [4 балла]
1 балл: тариф повышает внутреннюю цену с 1440 KEL до 1640 KEL (мировая цена плюс тариф).
1 балл: потребители покупают меньше (320 вместо 360) и теряют излишек потребителя, потому что платят больше за оставшиеся единицы и отказываются от части покупок.
1 балл: отечественные производители продают больше (170 вместо 120) и получают излишек производителя.
1 балл: правительство получает доход 30000 тыс. KEL от 150 тыс. тонн импорта; это перевод от потребителей к государству.

(f) [4 балла]
1 балл: удешевление кела делает сталь Келдии дешевле в долларах, поэтому её экспорт становится конкурентоспособнее на мировых рынках.
1 балл: объём экспорта растёт, если спрос на экспорт эластичен, а выручка от экспорта увеличивается.
1 балл: импорт в келах дорожает; в краткосрочном периоде стоимость импорта может вырасти, так как спрос на импорт неэластичен, и сальдо счёта текущих операций (current account balance) может ухудшиться (эффект J-кривой, J-curve).
1 балл: в долгосрочном периоде объёмный эффект усиливается, и сальдо счёта текущих операций улучшается (J-кривая); тариф дополнительно сокращает импорт.

(g) [15 баллов]
Общие уровни (generic bands):
- Знание и понимание (knowledge and understanding), до 3 баллов: точное использование понятий тарифа, излишков потребителя и производителя, чистых потерь общества и удешевления валюты.
- Применение (application), до 3 баллов: использование таблицы 1 (импорт снижается с 240 до 150 тыс. тонн; доход от тарифа 30000 тыс. KEL) и роста мировой цены в келах с 1200 до 1440.
- Анализ (analysis), до 4 баллов: объяснение перераспределения, чистых потерь и влияния на рабочие места, цены и ответные меры.
- Оценка (evaluation), до 5 баллов: взвешивание выигрышей и потерь, проверка аргументов о стратегической отрасли и занятости, обоснованный вывод.

Конкретные аргументы:
- Производители получают излишек (внутреннее предложение растёт с 120 до 170 тыс. тонн), правительство получает доход 30000 тыс. KEL; потребители теряют больше, чем производители и правительство выигрывают вместе, и разница составляет чистые потери общества.
- Чистые потери общества: отечественная сталь производится дороже мировой цены (неэффективность производства), а потребители отказываются от единиц, ценность которых выше мировой цены. В стандартной модели тариф снижает благосостояние.
- Тариф — перевод от потребителей к производителям и государству, поэтому благосостояние растёт только если эти выигрыши перевешивают потери, например из-за внешних выгод или стратегических соображений.
- Стратегические и оборонные аргументы: сталь нужна для обороны и инфраструктуры, поэтому внутренние мощности могут стоить больше своей рыночной цены; но тариф может быть не самым дешёвым способом их сохранить.
- Рабочие места: защита сохраняет рабочие места в металлургии, но строительство и другие отрасли, использующие сталь, могут терять рабочие места; чистый эффект на занятость неясен.
- Одно только удешевление кела уже подняло цену импорта с 1200 до 1440 KEL; тариф добавляет 200 KEL сверху, поэтому защита велика, а стоимость строительства растёт.
- Ответные меры: торговые партнёры могут ввести тарифы на другие экспорты Келдии, что навредит другим экспортёрам.
- Динамика: защита снижает стимулы отечественных производителей становиться эффективнее; аргумент о защите молодой отрасли слаб для зрелой металлургии.
- Обоснованный вывод: тариф вряд ли повысит благосостояние в целом; адресная поддержка обучения сталеваров или стратегических мощностей может достичь тех же целей при меньших издержках.`,
    },
    origin: 'original',
    minutes: 105,
  },
];
