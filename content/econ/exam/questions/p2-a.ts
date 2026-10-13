import type { Question } from '../../../../src/contract/types';

// P2 data response sets 1 to 3 (EX-2a). Parts (a) to (f) are worth 25 marks, part (g) 15 marks.
// The calculations quoted in the markscheme are checked by scripts/econ-checks/exam-p2-a.json (expect_in).
export const questions: Question[] = [
  {
    id: 'p2-set-01',
    subject: 'econ',
    topicIds: ['competitive-market-equilibrium', 'government-taxes-subsidies-price-controls'],
    paper: 'P2',
    marks: 40,
    command: 'Discuss',
    stimulus: {
      en: `**Rice in the city of Verdal (illustrative data)**

Verdal is a city of 1.2 million people. Rice is a staple food, so most households buy it every week, and few of them cut back when the price rises. Rice is grown in the surrounding region and reaches the city through wholesalers.

In the spring the wholesale price of rice rose sharply. The city council responded by setting a maximum price, a price ceiling, of AED 5.00 per kg in all shops. Within a month many shops ran out of rice. Wholesalers said that AED 5.00 did not cover the cost of bringing rice from the farms, so they sent fewer sacks to the city. Some shoppers now pay more in unofficial markets.

The federal government is considering an indirect tax on rice: a specific tax of AED 1.00 per kg, paid by wholesalers. The finance ministry says the tax would raise revenue for food support programmes. Consumer groups warn that higher prices would hurt the poorest households most.

Economists at the regional university model the rice market before any tax. Demand is Qd = 540 - 40P and supply is Qs = 60 + 40P, where P is the price in AED per kg and Q is the quantity in thousand kg per week. At the current equilibrium, their estimate of the price elasticity of demand is 0.8 (in absolute terms), and their estimate of the price elasticity of supply is also 0.8.

Table 1 lists the quantities at each price paid by consumers. In each line, the third quantity is the quantity supplied after the AED 1.00 tax. Quantities are in thousand kg per week.

- At AED 4.50 per kg paid by consumers: quantity demanded 360; quantity supplied before the tax 240; quantity supplied after the tax 200
- At AED 5.00 per kg paid by consumers: quantity demanded 340; quantity supplied before the tax 260; quantity supplied after the tax 220
- At AED 5.50 per kg paid by consumers: quantity demanded 320; quantity supplied before the tax 280; quantity supplied after the tax 240
- At AED 6.00 per kg paid by consumers: quantity demanded 300; quantity supplied before the tax 300; quantity supplied after the tax 260
- At AED 6.50 per kg paid by consumers: quantity demanded 280; quantity supplied before the tax 320; quantity supplied after the tax 280
- At AED 7.00 per kg paid by consumers: quantity demanded 260; quantity supplied before the tax 340; quantity supplied after the tax 300

All figures are illustrative data.`,
      ru: `**Рис в городе Вердал (иллюстративные данные)**

Вердал — город с 1,2 млн жителей. Рис — базовый продукт питания, поэтому большинство домохозяйств покупает его каждую неделю, и лишь немногие сокращают покупки, когда цена растёт. Рис выращивают в окрестностях региона, и через оптовых торговцев он поступает в город.

Весной оптовая цена риса резко выросла. Городской совет ответил установлением максимальной цены (price ceiling) в 5,00 AED за кг во всех магазинах. Уже через месяц во многих магазинах закончился рис. Оптовики заявили, что 5,00 AED не покрывают стоимость доставки риса с полей, поэтому они стали отправлять в город меньше мешков. Часть покупателей теперь платит больше на неофициальных рынках.

Федеральное правительство рассматривает косвенный налог (indirect tax) на рис: налог на единицу (specific tax) в размере 1,00 AED за кг, который платят оптовики. Министерство финансов говорит, что налог принесёт доход для программ поддержки питания. Группы потребителей предупреждают, что более высокие цены сильнее всего ударят по самым бедным домохозяйствам.

Экономисты местного университета моделируют рынок риса до введения налога. Спрос задаётся уравнением Qd = 540 - 40P, предложение — уравнением Qs = 60 + 40P, где P — цена в AED за кг, а Q — количество в тысячах кг в неделю. В текущем равновесии их оценка ценовой эластичности спроса (price elasticity of demand) равна 0,8 (по абсолютной величине), а ценовой эластичности предложения (price elasticity of supply) — также 0,8.

Таблица 1 приводит величины при каждой цене, которую платят потребители. В каждой строке третья величина — это величина предложения после налога в 1,00 AED за кг. Все величины даны в тыс. кг в неделю.

- При цене 4,50 AED за кг, которую платят потребители: величина спроса 360; величина предложения до налога 240; величина предложения после налога 200
- При цене 5,00 AED за кг, которую платят потребители: величина спроса 340; величина предложения до налога 260; величина предложения после налога 220
- При цене 5,50 AED за кг, которую платят потребители: величина спроса 320; величина предложения до налога 280; величина предложения после налога 240
- При цене 6,00 AED за кг, которую платят потребители: величина спроса 300; величина предложения до налога 300; величина предложения после налога 260
- При цене 6,50 AED за кг, которую платят потребители: величина спроса 280; величина предложения до налога 320; величина предложения после налога 280
- При цене 7,00 AED за кг, которую платят потребители: величина спроса 260; величина предложения до налога 340; величина предложения после налога 300

Все данные — иллюстративные.`,
    },
    prompt: {
      en: `Use the article and Table 1.

(a) Define the terms indirect tax and price ceiling. [2 marks]

(b) Calculate (i) the equilibrium price and quantity of rice before the tax, using the demand and supply equations in the article; (ii) the tax revenue collected by the government at the new equilibrium after the AED 1.00 per kg tax. [4 marks]

(c) Draw a labelled demand and supply diagram to show the effect of the AED 1.00 per kg tax on the market for rice. Label the price paid by consumers, the price received by sellers, the equilibrium before and after the tax, and the tax revenue. [6 marks]

(d) Show, on a diagram of the rice market before the tax, the effect of the maximum price of AED 5.00 per kg on the quantity demanded, the quantity supplied and the size of the shortage. [4 marks]

(e) Explain how the burden of the tax is shared between consumers and sellers in this market. [4 marks]

(f) Explain one further effect of the maximum price on the rice market, other than the shortage. [5 marks]

(g) Discuss whether the federal government should introduce the tax on rice, rather than relying on the maximum price, to raise revenue and keep rice affordable for low-income households. [15 marks]`,
      ru: `Используйте статью и таблицу 1.

(a) Дайте определения терминов: косвенный налог (indirect tax) и максимальная цена (price ceiling). [2 балла]

(b) Рассчитайте: (i) равновесную цену и количество риса до налога, используя уравнения спроса и предложения из статьи; (ii) сумму налоговых поступлений государства при новом равновесии после налога 1,00 AED за кг. [4 балла]

(c) Нарисуйте подписанную диаграмму спроса и предложения, показывающую действие налога 1,00 AED за кг на рынок риса. Подпишите цену, которую платят потребители, цену, которую получают продавцы, равновесие до и после налога и сумму налоговых поступлений. [6 баллов]

(d) Покажите на диаграмме рынка риса до налога действие максимальной цены 5,00 AED за кг на величину спроса, величину предложения и размер дефицита. [4 балла]

(e) Объясните, как бремя налога делится между потребителями и продавцами на этом рынке. [4 балла]

(f) Объясните один дополнительный эффект максимальной цены на рынке риса, помимо дефицита. [5 баллов]

(g) Обсудите, должно ли федеральное правительство ввести налог на рис вместо опоры на максимальную цену, чтобы получить доход и сохранить доступность риса для домохозяйств с низкими доходами. [15 баллов]`,
    },
    markscheme: {
      en: `(a) [2 marks]

1 mark: an indirect tax is a tax on spending on goods and services, paid by sellers, which raises their costs and shifts the supply curve to the left (upwards).

1 mark: a price ceiling is a legal maximum price set below the equilibrium price, which creates excess demand (a shortage).

(b) [4 marks]

1 mark: equilibrium before the tax, where Qd = Qs: 540 - 40P = 60 + 40P.

1 mark: P = 6.00 AED per kg and Q = 540 - 40 x 6.00 = 300 thousand kg per week.

1 mark: after the tax the new equilibrium is where the quantity demanded equals the quantity supplied after the tax: 280 thousand kg per week, at a price paid by consumers of AED 6.50 per kg (Table 1).

1 mark: tax revenue = tax per unit x quantity = 1.00 x 280 = 280, so the government collects AED 280 thousand per week.

(c) [6 marks]

1 mark: both axes labelled: price (AED per kg) on the vertical axis and quantity (thousand kg per week) on the horizontal axis.

1 mark: demand (D) downward sloping and supply (S) upward sloping, meeting at E0 with P = 6.00 and Q = 300.

1 mark: the tax shifts supply upwards (to the left) by AED 1.00 per kg, labelled S1 (supply after the tax).

1 mark: the new equilibrium E1 is labelled, with the price paid by consumers Pc = 6.50 and the quantity Q1 = 280.

1 mark: the price received by sellers Pp = 5.50 is marked on the vertical axis, and the gap between Pc and Pp equals the tax.

1 mark: the tax revenue rectangle (1.00 x 280 = 280) is shaded and labelled, and the deadweight loss triangle between Q = 280 and Q = 300 is labelled.

(d) [4 marks]

1 mark: a maximum price of AED 5.00 is drawn as a horizontal line below the equilibrium price of AED 6.00.

1 mark: at P = 5.00 the quantity demanded rises to 340 thousand kg per week and the quantity supplied falls to 260 (Table 1).

1 mark: the shortage = 340 - 260 = 80 thousand kg per week, shown as the horizontal gap at the maximum price.

1 mark: the diagram labels the price ceiling, the shortage and the excess demand, and the answer notes that the ceiling leads to rationing and unofficial markets.

(e) [4 marks]

1 mark: consumers pay more: the price paid rises from AED 6.00 to AED 6.50 per kg (Table 1).

1 mark: sellers receive less: the price received falls to AED 5.50 per kg, so sellers also pay part of the tax.

1 mark: the tax burden depends on relative elasticities: the side that is less elastic (less able to change its quantity) pays the larger share.

1 mark: with a price elasticity of demand of 0.8 and a price elasticity of supply of 0.8 (equally elastic), the burden is shared equally between consumers and sellers.

(f) [5 marks]

1 mark: a black or unofficial market develops in which rice is sold above the maximum price, because buyers compete for scarce stock.

1 mark: scarce rice is rationed by queues, hoarding or favouritism, so it does not go to the people who value it most.

1 mark: the quality of rice may fall, because sellers cannot raise the price to pay for higher quality.

1 mark: in the long run wholesalers may cut supply to the city or leave the market, so the shortage can grow over time.

1 mark: a link to the article: shoppers pay more in unofficial markets, so the ceiling does not protect households from high prices.

(g) [15 marks]

- Knowledge (up to 3 marks): correct use of indirect tax, price ceiling, tax incidence, deadweight loss and tax revenue.
- Application (up to 4 marks): uses Table 1 and the article (AED 1.00 tax, AED 5.00 ceiling, equilibrium at AED 6.00 and 300, revenue of AED 280 thousand per week, elasticities of 0.8).
- Analysis (up to 4 marks): a clear chain of reasoning: the tax raises the price paid and lowers the quantity, the revenue depends on the elasticities, and because poorer households spend a larger share of income on rice the tax is regressive; the ceiling causes a shortage, rationing and unofficial markets.
- Evaluation (up to 4 marks): weighs the two policies, considers alternatives (targeted cash transfers or subsidies), time lags, administrative costs and the effect on wholesalers' supply, and reaches a justified conclusion.

Specific points for this answer:
- The tax raises AED 280 thousand per week, which can fund targeted food support; the ceiling raises no revenue.
- Demand is inelastic (0.8), so the quantity falls only modestly (from 300 to 280) and the revenue is reliable, but the burden falls on poorer households.
- The tax creates a deadweight loss; a targeted cash transfer would support low-income households without distorting the market.
- The ceiling causes a weekly shortage of 80 thousand kg and unofficial markets; in the long run supply may fall further.
- Conclusion: a justified judgement, for example the tax is better for revenue, but it should be combined with targeted support for the poorest households.`,
      ru: `(a) [2 балла]

1 балл: косвенный налог (indirect tax) — налог на расходы на товары и услуги, который платят продавцы; он повышает их издержки и сдвигает кривую предложения влево (вверх).

1 балл: максимальная цена (price ceiling) — законодательно установленный верхний предел цены, который ставится ниже равновесной цены и создаёт избыточный спрос (дефицит).

(b) [4 балла]

1 балл: равновесие до налога, где Qd = Qs: 540 - 40P = 60 + 40P.

1 балл: P = 6,00 AED за кг и Q = 540 - 40 x 6,00 = 300 тыс. кг в неделю.

1 балл: после налога новое равновесие там, где величина спроса равна величине предложения после налога: 280 тыс. кг в неделю при цене, которую платят потребители, 6,50 AED за кг (таблица 1).

1 балл: налоговые поступления = налог на единицу x количество = 1,00 x 280 = 280, то есть государство получает 280 тыс. AED в неделю.

(c) [6 баллов]

1 балл: обе оси подписаны: цена (AED за кг) по вертикали и количество (тыс. кг в неделю) по горизонтали.

1 балл: спрос (D) убывает, предложение (S) возрастает; они пересекаются в точке E0 при P = 6,00 и Q = 300.

1 балл: налог сдвигает предложение вверх (влево) на 1,00 AED за кг; новая кривая подписана как S1 (предложение после налога).

1 балл: новое равновесие E1 подписано: цена, которую платят потребители, Pc = 6,50, и количество Q1 = 280.

1 балл: цена, которую получают продавцы, Pp = 5,50, отмечена на вертикальной оси; разрыв между Pc и Pp равен налогу.

1 балл: прямоугольник налоговых поступлений (1,00 x 280 = 280) заштрихован и подписан; треугольник чистых потерь общества (deadweight loss) между Q = 280 и Q = 300 подписан.

(d) [4 балла]

1 балл: максимальная цена 5,00 AED проведена горизонтальной линией ниже равновесной цены 6,00 AED.

1 балл: при P = 5,00 величина спроса растёт до 340 тыс. кг в неделю, а величина предложения падает до 260 (таблица 1).

1 балл: дефицит = 340 - 260 = 80 тыс. кг в неделю, показан горизонтальным отрезком при максимальной цене.

1 балл: на диаграмме подписаны максимальная цена, дефицит и избыточный спрос; в ответе указано, что ограничение ведёт к нормированию и неофициальным рынкам.

(e) [4 балла]

1 балл: потребители платят больше: цена, которую они платят, растёт с 6,00 до 6,50 AED за кг (таблица 1).

1 балл: продавцы получают меньше: цена, которую они получают, падает до 5,50 AED за кг, поэтому и продавцы несут часть налога.

1 балл: налоговое бремя (tax incidence) зависит от относительной эластичности: сторона, которая менее эластична (менее способна изменить величину), несёт большую долю.

1 балл: при ценовой эластичности спроса 0,8 и ценовой эластичности предложения 0,8 (одинаково эластичны) бремя делится поровну между потребителями и продавцами.

(f) [5 баллов]

1 балл: возникает чёрный (неофициальный) рынок, на котором рис продают выше максимальной цены, потому что покупатели конкурируют за дефицитный товар.

1 балл: дефицитный рис распределяется очередями, скупкой или предпочтениями, поэтому он не достаётся тем, кто ценит его больше всего.

1 балл: качество риса может снизиться, потому что продавцы не могут поднять цену, чтобы покрыть расходы на более качественный товар.

1 балл: в долгосрочном периоде оптовики могут сократить поставки в город или уйти с рынка, поэтому дефицит может расти со временем.

1 балл: связь со статьёй: покупатели платят больше на неофициальных рынках, поэтому максимальная цена не защищает домохозяйства от высоких цен.

(g) [15 баллов]

- Знание и понимание (knowledge, до 3 баллов): правильное использование косвенного налога, максимальной цены, налогового бремени, чистых потерь общества и налоговых поступлений.
- Применение (application, до 4 баллов): использование таблицы 1 и статьи (налог 1,00 AED, максимальная цена 5,00 AED, равновесие 6,00 AED и 300, поступления 280 тыс. AED в неделю, эластичности 0,8).
- Анализ (analysis, до 4 баллов): связная цепочка рассуждений: налог повышает цену для покупателей и снижает величину, поступления зависят от эластичностей, а поскольку бедные домохозяйства тратят на рис большую долю дохода, налог регрессивен; максимальная цена создаёт дефицит, нормирование и неофициальные рынки.
- Оценка (evaluation, до 4 баллов): взвешивает обе меры, рассматривает альтернативы (адресные денежные выплаты или субсидии), временные лаги, административные издержки и влияние на поставки оптовиков, и делает обоснованный вывод.

Конкретные аргументы:
- Налог приносит 280 тыс. AED в неделю, которые можно направить на адресную продовольственную поддержку; максимальная цена доходов не приносит.
- Спрос неэластичен (0,8), поэтому величина спроса падает лишь умеренно (с 300 до 280), поступления надёжны, но бремя ложится на бедные домохозяйства.
- Налог создаёт чистые потери общества; адресные денежные выплаты поддержали бы домохозяйства с низкими доходами без искажения рынка.
- Максимальная цена создаёт недельный дефицит 80 тыс. кг и неофициальные рынки; в долгосрочном периоде предложение может сократиться ещё сильнее.
- Вывод: обоснованное суждение, например налог лучше для доходов, но его следует сочетать с адресной поддержкой самых бедных домохозяйств.`,
    },
    origin: 'original',
    minutes: 105,
  },
  {
    id: 'p2-set-02',
    subject: 'econ',
    topicIds: ['externalities', 'common-pool-resources'],
    paper: 'P2',
    marks: 40,
    command: 'Discuss',
    stimulus: {
      en: `**Pollution and fish in Halvik Bay (illustrative data)**

Halvik Bay is a small port town on the coast. Its largest employer is a fertiliser plant on the north shore, which produces nitrogen fertiliser for farmers across the region. Its waste water flows into the bay. Environmental scientists estimate that this pollution imposes an external cost of AED 40 per tonne of fertiliser produced, paid by fishers, hotel owners and households through damage to fish stocks, beaches and health.

The plant pays for its wages, gas and equipment, but not for the damage to others. Its managers therefore compare the price of fertiliser with their private costs when they decide how much to produce. The damage to others does not appear in its accounts, so its decisions ignore it.

The fish in the bay are a common pool resource. Any licensed boat may fish there, and no boat can be kept out. The catch fell from 9 thousand tonnes in 2019 to 5 thousand tonnes in 2025, while the number of boats rose. Fishers say the stock is now far smaller than it was a decade ago. Each new boat reduces the catch of the others, but no single fisher has a reason to hold back.

The regional government is considering two policies: a charge on the plant equal to the external cost, or a quota that limits the total catch in the bay. The list below gives the equations of the fertiliser market. P is the price in AED per tonne and Q is the quantity in thousand tonnes per year.

- Marginal private benefit (demand): Qd = 200 - 0.5P
- Marginal private cost (supply): Qs = 40 + 0.5P
- Marginal social cost (marginal private cost plus AED 40 per tonne): Qs = 20 + 0.5P

All figures are illustrative data.`,
      ru: `**Загрязнение и рыба в бухте Халвик (иллюстративные данные)**

Бухта Халвик — небольшой портовый город на побережье. Крупнейший работодатель здесь — завод по производству удобрений на северном берегу; он выпускает азотные удобрения для фермеров региона. Его сточные воды попадают в бухту. Экологи оценивают, что это загрязнение создаёт внешние издержки (external cost) в размере 40 AED за тонну произведённых удобрений. Их несут рыбаки, владельцы гостиниц и домохозяйства: через ущерб запасам рыбы, пляжам и здоровью.

Завод платит за зарплаты, газ и оборудование, но не платит за ущерб другим. Поэтому руководство сравнивает цену удобрений со своими частными издержками, когда решает, сколько производить. Ущерб другим не отражается в его отчётности, поэтому решения завода его не учитывают.

Рыба в бухте — общий ресурс (common pool resource). Любая лицензированная лодка может там ловить рыбу, и никакую лодку нельзя не пустить. Улов упал с 9 тыс. тонн в 2019 году до 5 тыс. тонн в 2025 году, а число лодок выросло. Рыбаки говорят, что запас сейчас намного меньше, чем десять лет назад. Каждая новая лодка уменьшает улов остальных, но ни у одного рыбака нет причины отказаться от лова.

Региональное правительство рассматривает две меры: плату с завода, равную внешним издержкам, или квоту, которая ограничивает общий улов в бухте. В списке ниже приведены уравнения рынка удобрений. P — цена в AED за тонну, Q — количество в тысячах тонн в год.

- Предельные частные выгоды (спрос, marginal private benefit): Qd = 200 - 0,5P
- Предельные частные издержки (предложение, marginal private cost): Qs = 40 + 0,5P
- Предельные общественные издержки (marginal social cost), то есть предельные частные издержки плюс 40 AED за тонну: Qs = 20 + 0,5P

Все данные — иллюстративные.`,
    },
    prompt: {
      en: `Use the article and the data.

(a) Define the terms negative externality and common pool resource. [2 marks]

(b) Calculate (i) the market price and output of fertiliser, where marginal private benefit equals marginal private cost; (ii) the socially optimal price and output, where marginal private benefit equals marginal social cost. [4 marks]

(c) Draw a labelled diagram of the fertiliser market showing the marginal private benefit, the marginal private cost, the marginal social cost, the market output, the socially optimal output and the welfare loss. [6 marks]

(d) Show, on your diagram, the effect of a charge of AED 40 per tonne on the plant, equal to the external cost. [4 marks]

(e) Explain why the plant produces more fertiliser than the socially optimal output. [4 marks]

(f) Explain how open access to the fish stock in the bay leads to overfishing. [5 marks]

(g) Discuss whether a charge on the plant equal to the external cost, or a quota on the catch in the bay, would be the more effective way to correct the market failures in Halvik Bay. [15 marks]`,
      ru: `Используйте статью и данные.

(a) Дайте определения терминов: отрицательный внешний эффект (negative externality) и общий ресурс (common pool resource). [2 балла]

(b) Рассчитайте: (i) рыночную цену и объём производства удобрений, где предельные частные выгоды равны предельным частным издержкам; (ii) социально оптимальные цену и объём, где предельные частные выгоды равны предельным общественным издержкам. [4 балла]

(c) Нарисуйте подписанную диаграмму рынка удобрений, на которой показаны предельные частные выгоды, предельные частные издержки, предельные общественные издержки, рыночный объём, социально оптимальный объём и чистые потери общества (deadweight loss). [6 баллов]

(d) Покажите на диаграмме действие платы в 40 AED за тонну, которую платит завод и которая равна внешним издержкам. [4 балла]

(e) Объясните, почему завод производит больше удобрений, чем социально оптимальный объём. [4 балла]

(f) Объясните, как открытый доступ к запасу рыбы в бухте ведёт к чрезмерному лову (overfishing). [5 баллов]

(g) Обсудите, будет ли плата с завода, равная внешним издержкам, или квота на улов в бухте более эффективным способом исправить провалы рынка в бухте Халвик. [15 баллов]`,
    },
    markscheme: {
      en: `(a) [2 marks]

1 mark: a negative externality is a cost imposed on third parties outside a transaction, which the producer does not pay, so the marginal social cost is above the marginal private cost.

1 mark: a common pool resource is rivalrous (one user's catch reduces what is left for others) and non-excludable (no user can be kept out), so it tends to be overused under open access.

(b) [4 marks]

1 mark: market equilibrium: 200 - 0.5P = 40 + 0.5P, so P = 160 AED per tonne.

1 mark: market output Q = 200 - 0.5 x 160 = 120 thousand tonnes per year.

1 mark: socially optimal equilibrium: 200 - 0.5P = 20 + 0.5P, so P = 180 AED per tonne (the marginal social benefit at the optimum).

1 mark: socially optimal output Q = 200 - 0.5 x 180 = 110 thousand tonnes per year, below the market output of 120.

(c) [6 marks]

1 mark: both axes labelled: price (AED per tonne) on the vertical axis and quantity (thousand tonnes per year) on the horizontal axis.

1 mark: marginal private benefit (MPB, demand) downward sloping and marginal private cost (MPC, supply) upward sloping, meeting at the market equilibrium (P = 160, Q = 120).

1 mark: marginal social cost (MSC) drawn above MPC by the external cost of AED 40 per tonne (the vertical gap).

1 mark: MSC crosses MPB at the socially optimal equilibrium (P = 180, Q = 110), which is labelled.

1 mark: the welfare loss (deadweight loss) triangle between Q = 110 and Q = 120 is shaded and labelled, showing the overproduction.

1 mark: all curves labelled (MPB, MPC, MSC) and the market and optimal points marked.

(d) [4 marks]

1 mark: the charge of AED 40 per tonne shifts the MPC curve upwards by AED 40, so the new supply curve is the MSC curve.

1 mark: the new equilibrium is at the socially optimal output of 110 thousand tonnes (down from 120).

1 mark: the price paid by buyers rises to AED 180 per tonne (from 160), so part of the external cost is passed on to buyers.

1 mark: the overproduction and the welfare loss disappear, because the producer now pays the external cost and the market is efficient.

(e) [4 marks]

1 mark: the plant chooses output where its marginal private benefit equals its marginal private cost (MPB = MPC), so it ignores the external cost of AED 40 per tonne.

1 mark: at the market output, marginal social cost is above marginal private benefit, so the last tonnes cost society more than buyers value them.

1 mark: the market output of 120 thousand tonnes exceeds the socially optimal output of 110, so too many resources are used to make fertiliser.

1 mark: the extra output between 110 and 120 creates a welfare loss (deadweight loss), because the cost to society is greater than the benefit.

(f) [5 marks]

1 mark: the fish stock is a common pool resource: rivalrous (each boat's catch reduces the stock for others) and non-excludable (any licensed boat may fish).

1 mark: each fisher takes the full private benefit of its own catch but ignores the cost it imposes on the other fishers, which is the tragedy of the commons.

1 mark: because there is no limit or property right, boats enter until the total catch exceeds the sustainable level (open-access overfishing).

1 mark: the stock falls over time, so the catch (9 thousand tonnes in 2019, 5 thousand tonnes in 2025) and the incomes of fishers fall in the long run.

1 mark: the plant's pollution adds to the damage to the stock, so a quota alone may not restore the bay, because both problems act at the same time.

(g) [15 marks]

- Knowledge (up to 3 marks): correct use of negative externality, marginal social cost, common pool resource, welfare loss, charge (Pigouvian tax) and quota.
- Application (up to 4 marks): uses the equations and figures in the article (external cost of AED 40, market output of 120, optimum of 110, fall in the catch from 9 to 5 thousand tonnes).
- Analysis (up to 4 marks): explains the mechanisms: the charge raises the plant's private cost to the social cost, so output falls and the price rises, while the quota limits the catch directly and gives fishers a reason to conserve the stock.
- Evaluation (up to 4 marks): compares the policies: the charge targets the source of the damage and raises revenue, but the external cost is hard to measure and the plant may pass costs to farmers, cut jobs or move away; the quota addresses overfishing but not pollution and needs enforcement; tradable quotas or property rights may be more efficient; fairness for fishers and plant workers; a justified conclusion.

Specific points for this answer:
- A charge of AED 40 per tonne moves the external cost onto the plant: output falls from 120 to 110 thousand tonnes and the welfare loss is removed.
- The charge raises revenue that could fund clean-up or compensation for fishers, but the estimate of AED 40 may be uncertain.
- The plant may pass part of the charge onto farmers (depending on the elasticities) or cut jobs in the town.
- A quota limits the catch and can restore the stock, but it does not stop the pollution that damages the stock; it needs monitoring and enforcement.
- Conclusion: a justified judgement, for example a combined policy: the charge on the plant as the main correction, plus a catch quota or tradable permits for the fishers.`,
      ru: `(a) [2 балла]

1 балл: отрицательный внешний эффект (negative externality) — издержки, которые возлагаются на третьих лиц вне сделки и которые производитель не платит; поэтому предельные общественные издержки выше предельных частных.

1 балл: общий ресурс (common pool resource) — конкурентный в потреблении (улов одного уменьшает то, что остаётся другим) и неисключаемый (никого нельзя не допустить); поэтому при открытом доступе он склонен к чрезмерному использованию.

(b) [4 балла]

1 балл: рыночное равновесие: 200 - 0,5P = 40 + 0,5P, откуда P = 160 AED за тонну.

1 балл: рыночный объём Q = 200 - 0,5 x 160 = 120 тыс. тонн в год.

1 балл: социально оптимальное равновесие: 200 - 0,5P = 20 + 0,5P, откуда P = 180 AED за тонну (предельные общественные выгоды в оптимуме).

1 балл: социально оптимальный объём Q = 200 - 0,5 x 180 = 110 тыс. тонн в год, меньше рыночного объёма 120.

(c) [6 баллов]

1 балл: обе оси подписаны: цена (AED за тонну) по вертикали и количество (тыс. тонн в год) по горизонтали.

1 балл: предельные частные выгоды (MPB, спрос) убывают, предельные частные издержки (MPC, предложение) возрастают; они пересекаются в рыночном равновесии (P = 160, Q = 120).

1 балл: предельные общественные издержки (MSC) проведены выше MPC на величину внешних издержек 40 AED за тонну (вертикальный разрыв).

1 балл: MSC пересекает MPB в социально оптимальном равновесии (P = 180, Q = 110), точка подписана.

1 балл: треугольник чистых потерь общества (deadweight loss) между Q = 110 и Q = 120 заштрихован и подписан, он показывает перепроизводство.

1 балл: все кривые подписаны (MPB, MPC, MSC), отмечены рыночная и оптимальная точки.

(d) [4 балла]

1 балл: плата 40 AED за тонну сдвигает кривую MPC вверх на 40 AED, и новая кривая предложения совпадает с MSC.

1 балл: новое равновесие — социально оптимальный объём 110 тыс. тонн (вместо 120).

1 балл: цена, которую платят покупатели, растёт до 180 AED за тонну (с 160), поэтому часть внешних издержек переносится на покупателей.

1 балл: перепроизводство и чистые потери общества исчезают, потому что производитель теперь платит внешние издержки, и рынок становится эффективным.

(e) [4 балла]

1 балл: завод выбирает объём, при котором предельные частные выгоды равны предельным частным издержкам (MPB = MPC), и поэтому не учитывает внешние издержки 40 AED за тонну.

1 балл: при рыночном объёме предельные общественные издержки выше предельных частных выгод, поэтому последние тонны обходятся обществу дороже, чем их ценят покупатели.

1 балл: рыночный объём 120 тыс. тонн превышает оптимальный 110, поэтому на производство удобрений уходит слишком много ресурсов.

1 балл: дополнительный выпуск между 110 и 120 создаёт чистые потери общества (deadweight loss), так как издержки для общества больше выгод.

(f) [5 баллов]

1 балл: запас рыбы — общий ресурс: конкурентный в потреблении (улов каждой лодки уменьшает запас для других) и неисключаемый (любая лицензированная лодка может ловить рыбу).

1 балл: каждый рыбак получает всю частную выгоду от своего улова, но не учитывает издержки, которые он создаёт для других рыбаков, — это трагедия общин (tragedy of the commons).

1 балл: так как ограничений и прав собственности нет, лодки входят в промысел, пока общий улов не превысит устойчивый уровень (перелов при открытом доступе).

1 балл: запас со временем сокращается, поэтому улов (9 тыс. тонн в 2019 году и 5 тыс. тонн в 2025 году) и доходы рыбаков падают в долгосрочном периоде.

1 балл: загрязнение завода добавляет ущерба запасу, поэтому одна квота может не восстановить бухту, ведь обе проблемы действуют одновременно.

(g) [15 баллов]

- Знание и понимание (knowledge, до 3 баллов): правильное использование отрицательного внешнего эффекта, предельных общественных издержек, общего ресурса, чистых потерь общества, платы (налог Пигу, Pigouvian tax) и квоты.
- Применение (application, до 4 баллов): использование уравнений и данных статьи (внешние издержки 40 AED, рыночный объём 120, оптимум 110, падение улова с 9 до 5 тыс. тонн).
- Анализ (analysis, до 4 баллов): механизмы: плата повышает частные издержки завода до общественных, поэтому объём падает, а цена растёт; квота ограничивает улов напрямую и даёт рыбакам причину беречь запас.
- Оценка (evaluation, до 4 баллов): сравнение мер: плата бьёт по источнику ущерба и приносит доходы, но внешние издержки трудно измерить, а завод может переложить издержки на фермеров, сократить рабочие места или уехать; квота решает проблему перелова, но не загрязнение, и требует контроля; торгуемые квоты или права собственности могут быть эффективнее; справедливость для рыбаков и работников завода; обоснованный вывод.

Конкретные аргументы:
- Плата 40 AED за тонну переносит внешние издержки на завод: объём падает с 120 до 110 тыс. тонн, и чистые потери устраняются.
- Плата приносит доходы, которые можно направить на очистку или компенсации рыбакам, но оценка 40 AED может быть неточной.
- Завод может переложить часть платы на фермеров (это зависит от эластичностей) или сократить рабочие места в городе.
- Квота ограничивает улов и может восстановить запас, но не останавливает загрязнение, которое сокращает запас; нужны мониторинг и контроль.
- Вывод: обоснованное суждение, например комбинированная политика: плата с завода как основная мера и квота или торгуемые разрешения для рыбаков.`,
    },
    origin: 'original',
    minutes: 105,
  },
  {
    id: 'p2-set-03',
    subject: 'econ',
    topicIds: ['ad-as-model-and-business-cycle', 'multiplier'],
    paper: 'P2',
    marks: 40,
    command: 'Discuss',
    stimulus: {
      en: `**Kestria: a fall in investment (illustrative data)**

Kestria is a small open economy. Its real GDP is at its potential, full-employment level of AED 1000 billion. Over the last three years firms have built new factories and warehouses, unemployment has been low and inflation has been close to 2%. The central bank has kept interest rates unchanged for two years.

Business surveys now show a sharp fall in confidence. Firms expect to cut investment by AED 20 billion next year and to postpone new projects. Several large builders have already cancelled projects, and bank lending to firms has slowed. Economists expect firms to respond to lower demand by reducing output and jobs rather than cutting prices, at least in the short run.

Households and firms do not spend all extra income in Kestria. For each extra AED 1 of income, part leaks out as savings, taxes and imports. Economists stress that the size of these leakages depends on how much households save and how much they import. Imports matter especially in a small open economy like Kestria. The list below gives their estimates.

- Potential output (full-employment real GDP): AED 1000 billion
- Marginal propensity to save (MPS): 0.2 per AED 1 of extra income
- Marginal propensity to tax (MPT): 0.1 per AED 1 of extra income
- Marginal propensity to import (MPM): 0.1 per AED 1 of extra income
- Total leakages (MPS + MPT + MPM): 0.4 per AED 1 of extra income
- Expected fall in investment: AED 20 billion
- Proposed rise in government spending: AED 20 billion

The government is considering a rise in its own spending of AED 20 billion on roads and rail. Supporters say that the rise would restore output to its potential level quickly. Critics say that the budget is already in deficit and that extra borrowing would raise national debt. The decision will be taken next month.

All figures are illustrative data.`,
      ru: `**Кестрия: падение инвестиций (иллюстративные данные)**

Кестрия — небольшая открытая экономика. Её реальный ВВП (real GDP) находится на уровне потенциального выпуска при полной занятости — 1000 млрд AED. За последние три года фирмы построили новые заводы и склады, безработица была низкой, а инфляция — около 2%. Центральный банк два года не менял процентные ставки.

Опросы бизнеса показывают резкое падение доверия. Фирмы ожидают сократить инвестиции на 20 млрд AED в следующем году и отложить новые проекты. Несколько крупных строительных компаний уже отменили проекты, а банковское кредитование фирм замедлилось. Экономисты ожидают, что при снижении спроса фирмы будут сокращать выпуск и рабочие места, а не цены, по крайней мере в краткосрочном периоде.

Домохозяйства и фирмы в Кестрии тратят не все дополнительные доходы. На каждый дополнительный 1 AED дохода часть утекает в виде сбережений, налогов и импорта. Экономисты подчёркивают, что размер этих утечек зависит от того, сколько домохозяйства сберегают и сколько импортируют. Импорт особенно важен для небольшой открытой экономики, такой как Кестрия. В списке ниже приведены их оценки.

- Потенциальный выпуск (реальный ВВП при полной занятости): 1000 млрд AED
- Предельная склонность к сбережению (marginal propensity to save, MPS): 0,2 на каждый 1 AED дополнительного дохода
- Предельная склонность к налогообложению (marginal propensity to tax, MPT): 0,1 на каждый 1 AED дополнительного дохода
- Предельная склонность к импорту (marginal propensity to import, MPM): 0,1 на каждый 1 AED дополнительного дохода
- Всего утечки (MPS + MPT + MPM): 0,4 на каждый 1 AED дополнительного дохода
- Ожидаемое падение инвестиций: 20 млрд AED
- Предлагаемый рост государственных расходов: 20 млрд AED

Правительство рассматривает увеличение собственных расходов на 20 млрд AED на дороги и железные дороги. Сторонники говорят, что такой рост быстро вернёт выпуск к потенциальному уровню. Критики указывают, что бюджет уже в дефиците и что дополнительные заимствования повысят государственный долг. Решение будет принято в следующем месяце.

Все данные — иллюстративные.`,
    },
    prompt: {
      en: `Use the article and the data.

(a) Define the terms aggregate demand and multiplier. [2 marks]

(b) Calculate (i) the value of the multiplier; (ii) the change in national income caused by the expected fall in investment of AED 20 billion. [4 marks]

(c) Draw an aggregate demand and aggregate supply diagram to show the economy at its potential output and the effect of the fall in investment. Label the axes, the curves, the equilibrium points and the negative output gap. [6 marks]

(d) Show, on your diagram, the effect of the proposed rise in government spending of AED 20 billion. [4 marks]

(e) Explain why the fall in investment leaves the price level unchanged in the short run. [4 marks]

(f) Explain one effect of the fall in investment on the long-run aggregate supply of Kestria. [5 marks]

(g) Discuss the case for expansionary fiscal policy as a response to the fall in investment. [15 marks]`,
      ru: `Используйте статью и данные.

(a) Дайте определения терминов: совокупный спрос (aggregate demand) и мультипликатор (multiplier). [2 балла]

(b) Рассчитайте: (i) значение мультипликатора; (ii) изменение национального дохода, вызванное ожидаемым падением инвестиций на 20 млрд AED. [4 балла]

(c) Нарисуйте диаграмму совокупного спроса и совокупного предложения (aggregate supply), показывающую экономику на уровне потенциального выпуска и действие падения инвестиций. Подпишите оси, кривые, точки равновесия и отрицательный разрыв выпуска (negative output gap). [6 баллов]

(d) Покажите на диаграмме действие предлагаемого роста государственных расходов на 20 млрд AED. [4 балла]

(e) Объясните, почему падение инвестиций не меняет уровень цен в краткосрочном периоде. [4 балла]

(f) Объясните один эффект падения инвестиций для долгосрочного совокупного предложения Кестрии. [5 баллов]

(g) Обсудите доводы в пользу экспансионистской фискальной политики (fiscal policy) как ответа на падение инвестиций. [15 баллов]`,
    },
    markscheme: {
      en: `(a) [2 marks]

1 mark: aggregate demand is the total planned spending on domestic goods and services at each price level: AD = C + I + G + (X - M).

1 mark: the multiplier is the ratio of the total change in national income to the initial change in an injection, k = 1 / (MPS + MPT + MPM).

(b) [4 marks]

1 mark: multiplier k = 1 / (MPS + MPT + MPM) = 1 / (0.2 + 0.1 + 0.1) = 1 / 0.4.

1 mark: k = 2.5.

1 mark: change in national income = k x change in investment = 2.5 x (-20) = -50.

1 mark: national income falls by AED 50 billion, which is more than the initial fall in investment of AED 20 billion, because of the multiplier process (rounds of spending).

(c) [6 marks]

1 mark: both axes labelled: average price level (PL) on the vertical axis and real output (Y) on the horizontal axis.

1 mark: long-run aggregate supply (LRAS) drawn as a vertical line at potential output, which is the full-employment level.

1 mark: aggregate supply (AS) drawn horizontal (Keynesian) below full employment, so the initial equilibrium E1 is at potential output at the price level P1.

1 mark: the fall in investment shifts aggregate demand to the left (from AD1 to AD2), because investment is a component of AD.

1 mark: the new equilibrium E2 is at a lower real output and the same price level P1; the fall in output of AED 50 billion (from (b)) is a negative output gap between E2 and potential output.

1 mark: all curves labelled (AD1, AD2, AS, LRAS) and points marked (E1, E2), with the negative output gap shown.

(d) [4 marks]

1 mark: government spending (G) is a component of AD, so the rise in G shifts AD to the right, from AD2 back to AD1.

1 mark: the size of the rightward shift equals the multiplier times the change in spending: 2.5 x 20 = 50.

1 mark: a shift of 50 returns AD to its original position (AD1), so real output returns to potential output, the negative output gap is closed and the price level stays at P1.

1 mark: the diagram shows the rightward shift, the equilibrium back at potential output and the output gap closed.

(e) [4 marks]

1 mark: investment is a component of aggregate demand (AD = C + I + G + (X - M)), so a fall in investment shifts AD to the left.

1 mark: below full employment firms have spare capacity, so they cut output and employment rather than prices; the AS curve is horizontal (Keynesian) in this range.

1 mark: the multiplier process means the fall in income is 2.5 times the fall in investment, so output falls by AED 50 billion at a constant price level.

1 mark: prices and wages adjust slowly downwards (downward stickiness), so the price level stays at P1 in the short run as the economy moves along the horizontal AS curve.

(f) [5 marks]

1 mark: investment adds to the capital stock (machines, factories, infrastructure), so lower investment slows the growth of the capital stock.

1 mark: a smaller capital stock reduces the productive capacity of the economy in the future.

1 mark: much new technology enters the economy through investment, so lower investment slows innovation and productivity growth.

1 mark: the LRAS shifts to the right more slowly, so potential output in the future is lower than it would have been.

1 mark: lower potential output means lower long-run living standards and a lower sustainable growth rate for Kestria.

(g) [15 marks]

- Knowledge (up to 3 marks): correct use of aggregate demand, multiplier, output gap, fiscal policy, crowding out, LRAS and time lags.
- Application (up to 4 marks): uses the figures in the article and the data (multiplier 2.5, fall of AED 50 billion in national income, rise in spending of AED 20 billion, potential output of AED 1000 billion).
- Analysis (up to 4 marks): explains the case: the rise in G shifts AD to the right, the multiplier closes the negative output gap and cyclical unemployment falls; public investment in roads and rail may raise productivity and LRAS; the case is stronger when there is spare capacity and prices are stable.
- Evaluation (up to 4 marks): weighs the arguments: time lags before roads and rail are built; the multiplier may be smaller because 0.1 of income leaks into imports; crowding out and rising government debt; the economy may recover automatically; monetary and supply-side policies as alternatives; a justified conclusion.

Specific points for this answer:
- The gap of AED 50 billion is closed exactly by a rise of AED 20 billion (multiplier 2.5), so output returns to potential and cyclical unemployment falls.
- Fiscal policy acts directly on AD and addresses the cause: confidence has fallen and firms have postponed investment.
- Public investment in roads and rail can raise productivity and the LRAS, so the case for policy is stronger than a simple boost to demand.
- Against: time lags (planning and building take years), so the spending may arrive when the economy is already recovering and may add to inflation.
- Against: the budget deficit and national debt; crowding out is small with spare capacity, but borrowing may raise interest rates later.
- Against: leakages into imports (MPM 0.1) reduce the domestic effect; the multiplier is only an estimate.
- Conclusion: a justified judgement, for example expansionary fiscal policy has a strong case as a temporary measure if the debt is sustainable, with its timing coordinated with the central bank.`,
      ru: `(a) [2 балла]

1 балл: совокупный спрос (aggregate demand) — общие планируемые расходы на отечественные товары и услуги при каждом уровне цен: AD = C + I + G + (X - M).

1 балл: мультипликатор (multiplier) — отношение общего изменения национального дохода к первоначальному изменению инъекции (injection): k = 1 / (MPS + MPT + MPM).

(b) [4 балла]

1 балл: мультипликатор k = 1 / (MPS + MPT + MPM) = 1 / (0,2 + 0,1 + 0,1) = 1 / 0,4.

1 балл: k = 2,5.

1 балл: изменение национального дохода = k x изменение инвестиций = 2,5 x (-20) = -50.

1 балл: национальный доход падает на 50 млрд AED, что больше первоначального падения инвестиций на 20 млрд AED, из-за процесса мультипликатора (раунды расходов).

(c) [6 баллов]

1 балл: обе оси подписаны: уровень цен (average price level, PL) — по вертикали, реальный выпуск (Y) — по горизонтали.

1 балл: долгосрочное совокупное предложение (LRAS) проведено вертикально на уровне потенциального выпуска (полная занятость).

1 балл: совокупное предложение (AS) проведено горизонтально (кейнсианский участок) ниже полной занятости, поэтому исходное равновесие E1 находится на уровне потенциального выпуска при уровне цен P1.

1 балл: падение инвестиций сдвигает совокупный спрос влево (с AD1 на AD2), так как инвестиции — компонент AD.

1 балл: новое равновесие E2 — при более низком реальном выпуске и том же уровне цен P1; падение выпуска на 50 млрд AED (из (b)) — отрицательный разрыв выпуска (negative output gap) между E2 и потенциальным выпуском.

1 балл: все кривые (AD1, AD2, AS, LRAS) и точки (E1, E2) подписаны, отрицательный разрыв выпуска показан.

(d) [4 балла]

1 балл: государственные расходы (G) — компонент AD, поэтому рост G сдвигает AD вправо, с AD2 обратно к AD1.

1 балл: величина сдвига равна мультипликатору, умноженному на изменение расходов: 2,5 x 20 = 50.

1 балл: сдвиг на 50 возвращает AD в исходное положение (AD1), реальный выпуск возвращается к потенциальному, отрицательный разрыв выпуска закрыт, уровень цен остаётся P1.

1 балл: на диаграмме показаны сдвиг AD вправо, равновесие на уровне потенциального выпуска и закрытый разрыв выпуска.

(e) [4 балла]

1 балл: инвестиции — компонент совокупного спроса (AD = C + I + G + (X - M)), поэтому падение инвестиций сдвигает AD влево.

1 балл: при неполной занятости у фирм есть избыточные мощности, поэтому они сокращают выпуск и занятость, а не цены; кривая AS горизонтальна (кейнсианская) в этом диапазоне.

1 балл: процесс мультипликатора означает, что падение дохода в 2,5 раза больше падения инвестиций, поэтому выпуск падает на 50 млрд AED при постоянном уровне цен.

1 балл: цены и зарплаты медленно снижаются (жёсткость цен вниз), поэтому уровень цен остаётся P1 в краткосрочном периоде, а экономика движется вдоль горизонтальной кривой AS.

(f) [5 баллов]

1 балл: инвестиции увеличивают капитальный запас (станки, заводы, инфраструктура), поэтому их падение замедляет рост капитального запаса.

1 балл: меньший капитальный запас снижает производственный потенциал экономики в будущем.

1 балл: значительная часть новых технологий внедряется через инвестиции, поэтому падение инвестиций замедляет инновации и рост производительности.

1 балл: кривая LRAS сдвигается вправо медленнее, поэтому потенциальный выпуск в будущем ниже, чем был бы без падения инвестиций.

1 балл: более низкий потенциальный выпуск означает более низкий уровень жизни в долгосрочном периоде и более низкие устойчивые темпы роста Кестрии.

(g) [15 баллов]

- Знание и понимание (knowledge, до 3 баллов): правильное использование совокупного спроса, мультипликатора, разрыва выпуска, фискальной политики, вытеснения (crowding out), LRAS и временных лагов.
- Применение (application, до 4 баллов): использование данных статьи и приведённых данных (мультипликатор 2,5, падение дохода на 50 млрд AED, рост расходов на 20 млрд AED, потенциальный выпуск 1000 млрд AED).
- Анализ (analysis, до 4 баллов): доводы: рост G сдвигает AD вправо, мультипликатор закрывает отрицательный разрыв выпуска, циклическая безработица снижается; государственные инвестиции в дороги и железные дороги могут повысить производительность и LRAS; довод сильнее, когда есть избыточные мощности и цены стабильны.
- Оценка (evaluation, до 4 баллов): взвешивание доводов: временные лаги до строительства дорог и железных дорог; мультипликатор может быть меньше, так как 0,1 дохода уходит на импорт; вытеснение и рост государственного долга; экономика может восстановиться сама (автоматические стабилизаторы); денежная политика и политика предложения (supply-side policies) как альтернативы; обоснованный вывод.

Конкретные аргументы:
- Разрыв 50 млрд AED точно закрывается ростом расходов на 20 млрд AED (мультипликатор 2,5), поэтому выпуск возвращается к потенциальному уровню, а циклическая безработица снижается.
- Фискальная политика действует напрямую на AD и устраняет причину: доверие упало, фирмы отложили инвестиции.
- Государственные инвестиции в дороги и железные дороги могут повысить производительность и LRAS, поэтому довод сильнее простого стимулирования спроса.
- Против: временные лаги (планирование и строительство занимают годы), поэтому расходы могут прийти, когда экономика уже восстанавливается, и подстегнуть инфляцию.
- Против: бюджетный дефицит и государственный долг; вытеснение мало при избыточных мощностях, но заимствования могут позже повысить процентные ставки.
- Против: утечки на импорт (MPM 0,1) снижают внутренний эффект; мультипликатор — лишь оценка.
- Вывод: обоснованное суждение, например экспансионистская фискальная политика имеет сильный довод как временная мера, если долг устойчив, а её сроки согласованы с центральным банком.`,
    },
    origin: 'original',
    minutes: 105,
  },
];
