import type { Question } from '../../../../src/contract/types';

// EX-1a: P1 essays 01 to 10 (Economics HL school mock, extended response, 25 marks).
// Part (a) is worth 10 marks (Explain) and part (b) 15 marks (Discuss). The markscheme has one line per mark.
// The five evaluation marks in part (b) follow the three bands: limited, appropriate, effective and balanced reasoning.
// Essays 01 and 02 have a full model answer. The essays need no calculations, so there are no check entries.

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'p1-essay-01',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['government-taxes-subsidies-price-controls', 'price-elasticity-of-demand'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how a specific tax on petrol affects the equilibrium price and the equilibrium quantity in the market for petrol. Use a diagram. [10 marks]\n' +
        '(b) Using a real-world example, discuss whether a government should introduce a specific tax on petrol in order to raise tax revenue. Refer to the price elasticity of demand (PED). [15 marks]',
      ru: '(a) Объясните, как удельный налог (specific tax) на бензин влияет на равновесную цену и равновесное количество на рынке бензина. Используйте диаграмму. [10 баллов]\n' +
        '(b) Используя пример из реальной жизни, обсудите, должно ли правительство ввести удельный налог на бензин, чтобы увеличить налоговые поступления. Опирайтесь на ценовую эластичность спроса (price elasticity of demand, PED). [15 баллов]',
    },
    hints: [
      {
        en: 'Definitions: a specific tax is a fixed amount per unit of the good; price elasticity of demand (PED) is the percentage change in quantity demanded divided by the percentage change in price; tax incidence is how the burden of a tax is shared between buyers and sellers.',
        ru: 'Определения: удельный налог (specific tax) — фиксированная сумма с каждой единицы товара; ценовая эластичность спроса (price elasticity of demand, PED) — процентное изменение величины спроса, делённое на процентное изменение цены; налоговое бремя (tax incidence) — то, как налог делится между покупателями и продавцами.',
      },
      {
        en: 'Diagram and explanation: demand (D) and supply (S1) cross at E1. The tax raises the cost of supply, so supply shifts upwards by the amount of the tax to S2. The new equilibrium E2 has a higher price paid by buyers, a lower price received by sellers and a smaller quantity. Tax revenue is the tax times the quantity sold, shown as a rectangle.',
        ru: 'Диаграмма и объяснение: спрос (D) и предложение (S1) пересекаются в точке E1. Налог повышает издержки предложения, поэтому предложение сдвигается вверх на величину налога до S2. Новое равновесие E2: цена для покупателей выше, цена для продавцов ниже, объём меньше. Налоговые поступления равны налогу, умноженному на проданное количество, и показаны прямоугольником.',
      },
      {
        en: 'Real-world example: a fuel duty on petrol in a country you have studied. In the short run few drivers can switch quickly to other transport, so demand is inelastic and buyers pay most of the tax. Compare with a tax on a good that has many close substitutes.',
        ru: 'Пример из реальной жизни: налог на топливо (бензин) в стране, которую вы изучали. В краткосрочном периоде немногие водители могут быстро перейти на другой транспорт, поэтому спрос неэластичен, и покупатели платят большую часть налога. Сравните с налогом на товар, у которого много близких заменителей.',
      },
      {
        en: 'Evaluation: short run versus long run (demand is inelastic in the short run and becomes more elastic as drivers switch to public transport or fuel-efficient cars, so revenue falls over time); stakeholders (government, drivers, low-income households, haulage firms); assumptions (the tax is passed on to buyers and the revenue is spent well); priorities (revenue, equity and the environment).',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (в краткосрочном периоде спрос неэластичен, а в долгосрочном становится более эластичным, так как водители переходят на общественный транспорт или экономичные автомобили, и выручка со временем падает); заинтересованные стороны (государство, водители, домохозяйства с низким доходом, транспортные компании); допущения (налог переложен на покупателей, доходы разумно расходуются); приоритеты (доходы бюджета, справедливость и экология).',
      },
    ],
    markscheme: {
      en: '(a) 1 mark: definition: a specific tax is a fixed amount of tax paid to the government for each unit of the good sold.\n' +
        '(a) 1 mark: the tax raises the costs of supply, so the supply curve shifts upwards by the amount of the tax.\n' +
        '(a) 1 mark: labelled diagram with price (P) on the vertical axis and quantity (Q) on the horizontal axis; demand D, original supply S1 and new supply S2; equilibria E1 and E2 marked.\n' +
        '(a) 1 mark: the market moves from E1 to E2 because the higher price reduces the quantity demanded; this is a movement along the demand curve, not a shift.\n' +
        '(a) 1 mark: the equilibrium quantity falls from Q1 to Q2.\n' +
        '(a) 1 mark: the price paid by buyers rises from P1 to Pc, so buyers bear part of the tax.\n' +
        '(a) 1 mark: the price received by sellers falls to Pp; the vertical gap between Pc and Pp equals the tax per unit.\n' +
        '(a) 1 mark: government tax revenue equals the tax times Q2, shown as the rectangle between Pc and Pp.\n' +
        '(a) 1 mark: because petrol demand is relatively inelastic, the price paid by buyers rises by more and the quantity falls by less than for a good with close substitutes.\n' +
        '(a) 1 mark: the explanation is linked to petrol: few close substitutes in the short run mean that the fall in quantity is small.\n' +
        '(b) 1 mark: definition: PED is the percentage change in quantity demanded divided by the percentage change in price; demand is inelastic when the value is less than 1 in absolute terms.\n' +
        '(b) 1 mark: petrol demand is inelastic in the short run: few close substitutes, a necessity for many households, and a small share of income for some.\n' +
        '(b) 1 mark: with inelastic demand the quantity falls by a smaller percentage than the price rises, so the tax reduces consumption only a little.\n' +
        '(b) 1 mark: tax revenue equals the tax times the quantity sold; with inelastic demand the quantity falls by less, so government tax revenue is higher.\n' +
        '(b) 1 mark: the extra revenue can fund public transport or other public spending, which is an advantage of a tax as a source of revenue.\n' +
        '(b) 1 mark: the tax is regressive for households with low incomes that spend a larger share of their income on fuel, which is an equity cost.\n' +
        '(b) 1 mark: the tax creates a deadweight loss: trades that buyers value above the cost of supply no longer happen, shown as a triangle between the demand and supply curves.\n' +
        '(b) 1 mark: if the tax corrects a negative externality of fuel use, such as pollution or congestion, it can improve efficiency when it is set at the level of the external cost.\n' +
        '(b) 1 mark: in the long run demand becomes more elastic as households buy fuel-efficient cars, use public transport or switch to electric vehicles, so the quantity falls more and revenue falls.\n' +
        '(b) 1 mark: the real-world example is specific and accurate (a named fuel tax in a named country) and is used to support the PED argument.\n' +
        '(b) 1 mark, limited reasoning: a clear judgement is stated on whether the government should introduce the tax to raise revenue.\n' +
        '(b) 1 mark, appropriate reasoning: the judgement is supported by a reason linked to the time period: revenue is likely to be higher in the short run, when demand is inelastic.\n' +
        '(b) 1 mark, appropriate reasoning: a second reason is linked to stakeholders: the effect on low-income households, haulage firms and the government budget.\n' +
        '(b) 1 mark, effective and balanced reasoning: both sides are weighed: the tax raises revenue and may reduce pollution, but it cuts consumption only a little and may be regressive.\n' +
        '(b) 1 mark, effective and balanced reasoning: the judgement depends on named conditions (the availability of substitutes, the use of the revenue, the level of the tax) and reaches a supported conclusion.',
      ru: '(a) 1 балл: определение: удельный налог — фиксированная сумма налога, которую уплачивают государству с каждой проданной единицы товара.\n' +
        '(a) 1 балл: налог повышает издержки предложения, поэтому кривая предложения сдвигается вверх на величину налога.\n' +
        '(a) 1 балл: диаграмма с подписанными осями: цена (P) по вертикали, количество (Q) по горизонтали; спрос D, исходное предложение S1 и новое предложение S2; отмечены равновесия E1 и E2.\n' +
        '(a) 1 балл: рынок переходит из E1 в E2, потому что более высокая цена сокращает величину спроса; это движение вдоль кривой спроса, а не её сдвиг.\n' +
        '(a) 1 балл: равновесное количество падает с Q1 до Q2.\n' +
        '(a) 1 балл: цена, которую платят покупатели, растёт с P1 до Pc, поэтому покупатели несут часть налога.\n' +
        '(a) 1 балл: цена, которую получают продавцы, падает до Pp; вертикальный разрыв между Pc и Pp равен налогу на единицу.\n' +
        '(a) 1 балл: налоговые поступления государства равны налогу, умноженному на Q2; на диаграмме это прямоугольник между Pc и Pp.\n' +
        '(a) 1 балл: спрос на бензин относительно неэластичен, поэтому цена для покупателей растёт сильнее, а количество падает слабее, чем у товара с близкими заменителями.\n' +
        '(a) 1 балл: объяснение связано с бензином: в краткосрочном периоде близких заменителей мало, поэтому падение объёма небольшое.\n' +
        '(b) 1 балл: определение: ценовая эластичность спроса (PED) — процентное изменение величины спроса, делённое на процентное изменение цены; спрос неэластичен, если значение по модулю меньше 1.\n' +
        '(b) 1 балл: спрос на бензин неэластичен в краткосрочном периоде: близких заменителей мало, топливо — предмет первой необходимости для многих домохозяйств, а для части людей расходы на него составляют небольшую долю дохода.\n' +
        '(b) 1 балл: при неэластичном спросе количество падает на меньший процент, чем растёт цена, поэтому налог лишь немного сокращает потребление.\n' +
        '(b) 1 балл: налоговые поступления равны налогу, умноженному на проданное количество; при неэластичном спросе количество падает меньше, поэтому доход государства растёт.\n' +
        '(b) 1 балл: дополнительные доходы можно направить на общественный транспорт или другие общественные расходы; это преимущество налога как источника доходов.\n' +
        '(b) 1 балл: налог регрессивен для домохозяйств с низкими доходами, которые тратят на топливо большую долю дохода; это издержки с точки зрения справедливости.\n' +
        '(b) 1 балл: налог создаёт чистые потери общества (deadweight loss): сделки, которые покупатели оценивают выше издержек производства, не совершаются; потери показаны треугольником между кривыми спроса и предложения.\n' +
        '(b) 1 балл: если налог исправляет отрицательный внешний эффект от использования топлива (загрязнение, заторы), он повышает эффективность при условии, что его величина равна внешним издержкам.\n' +
        '(b) 1 балл: в долгосрочном периоде спрос становится более эластичным: домохозяйства покупают экономичные автомобили, пользуются общественным транспортом или переходят на электромобили; поэтому количество падает сильнее, а налоговые поступления снижаются.\n' +
        '(b) 1 балл: пример из реальной жизни конкретен и точен (названный налог на топливо в названной стране) и используется для аргумента о ценовой эластичности спроса.\n' +
        '(b) 1 балл, ограниченное обоснование (limited reasoning): сформулировано ясное суждение о том, должно ли правительство вводить налог ради налоговых поступлений.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): суждение подкреплено доводом о временном периоде: в краткосрочном периоде, когда спрос неэластичен, поступления, скорее всего, будут выше.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): второй довод связан с заинтересованными сторонами: влияние на домохозяйства с низким доходом, транспортные компании и бюджет государства.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): взвешены обе стороны: налог увеличивает доходы и может снизить загрязнение, но сокращает потребление лишь немного и может быть регрессивным.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): суждение зависит от названных условий (наличие заменителей, использование доходов, уровень налога) и приводит к обоснованному выводу.',
    },
    model: {
      en: '(a) A specific tax is a fixed amount paid to the government on each unit of petrol sold. The tax raises the costs of sellers, so the supply curve shifts upwards by the amount of the tax. In the diagram, demand (D) and the original supply (S1) meet at the equilibrium E1, with price P1 and quantity Q1. After the tax, the new supply curve (S2) lies above S1 by the amount of the tax. The new equilibrium E2 has a higher price paid by buyers (Pc) and a lower price received by sellers (Pp). The quantity falls from Q1 to Q2 because buyers reduce their purchases along the demand curve. Tax revenue is the tax multiplied by Q2, shown as a rectangle between Pc and Pp.\n\n' +
        '(b) Price elasticity of demand (PED) measures how much quantity demanded responds to a change in price. Petrol has inelastic demand in the short run: there are few close substitutes, many households need to travel to work, and for some households fuel is a small share of income. Because demand is inelastic, the fall in quantity is small, so buyers pay most of the tax and the government collects a large revenue. This is a strong argument for the tax as a source of revenue.\n\n' +
        'However, the revenue depends on elasticity over time. In the long run, drivers buy fuel-efficient cars, use public transport or switch to electric vehicles, so demand becomes more elastic and revenue falls. The tax may also be regressive, because low-income households spend a larger share of their income on fuel. The tax creates a deadweight loss, since some trades that buyers value above the cost of supply no longer happen. If the tax corrects a negative externality such as pollution, it can improve efficiency.\n\n' +
        'On balance, the tax is a reasonable way to raise revenue in the short run, because petrol demand is inelastic. The government should not rely on it in the long run. It should use the revenue to support public transport and to compensate poorer households. The policy is most effective when the revenue is used well and the tax is set at a sensible level.',
      ru: '(a) Удельный налог (specific tax) — это фиксированная сумма, которую продавец платит государству с каждой единицы проданного бензина. Налог увеличивает издержки продавцов, поэтому кривая предложения сдвигается вверх на величину налога. На диаграмме спрос (D) и исходное предложение (S1) пересекаются в точке равновесия E1 с ценой P1 и количеством Q1. После введения налога новая кривая предложения (S2) лежит выше S1 на величину налога. В новом равновесии E2 цена, которую платят покупатели (Pc), выше, цена, которую получают продавцы (Pp), ниже, а разрыв между ними равен налогу. Количество падает с Q1 до Q2, потому что покупатели сокращают покупки вдоль кривой спроса. Налоговые поступления равны налогу, умноженному на Q2; на диаграмме это прямоугольник между Pc и Pp.\n\n' +
        '(b) Ценовая эластичность спроса (price elasticity of demand, PED) показывает, насколько сильно величина спроса реагирует на изменение цены. В краткосрочном периоде спрос на бензин неэластичен: близких заменителей мало, многим домохозяйствам нужно ездить на работу, а для части людей топливо составляет небольшую долю дохода. Поскольку спрос неэластичен, количество падает мало, поэтому покупатели платят большую часть налога, а государство получает значительные доходы. Это сильный аргумент в пользу налога как источника доходов бюджета, а дополнительные средства можно направить на общественный транспорт.\n\n' +
        'Однако доходы зависят от эластичности во времени. В долгосрочном периоде водители покупают экономичные автомобили, пользуются общественным транспортом или переходят на электромобили, поэтому спрос становится более эластичным, и доходы падают. Налог может быть регрессивным, так как домохозяйства с низким доходом тратят на топливо большую долю своего дохода. Кроме того, налог создаёт чистые потери общества (deadweight loss): сделки, которые покупатели оценивают выше издержек производства, не совершаются. Если налог исправляет отрицательный внешний эффект, например загрязнение, он может повысить эффективность.\n\n' +
        'В итоге налог — разумный способ получить доходы в краткосрочном периоде, потому что спрос на бензин неэластичен. Однако в долгосрочном периоде на него нельзя полагаться. Доходы следует направлять на общественный транспорт и на поддержку бедных домохозяйств, а правительству стоит оценивать, как изменится спрос после введения налога. Политика наиболее эффективна, если доходы расходуются разумно, а ставка налога выбрана обоснованно.',
    },
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-02',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['externalities', 'government-taxes-subsidies-price-controls'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain, using a diagram, why a factory that pollutes a nearby river produces more than the socially optimal output. [10 marks]\n' +
        '(b) Using a real-world example, discuss whether an indirect tax on the output of the factory is the best way for a government to correct the negative externality. [15 marks]',
      ru: '(a) Объясните с помощью диаграммы, почему завод, загрязняющий соседнюю реку, производит больше, чем оптимально для общества. [10 баллов]\n' +
        '(b) Используя пример из реальной жизни, обсудите, является ли косвенный налог (indirect tax) на продукцию завода лучшим способом, которым правительство может исправить отрицательный внешний эффект (negative externality). [15 баллов]',
    },
    hints: [
      {
        en: 'Definitions: a negative production externality is an external cost that production imposes on third parties; social cost equals private cost plus external cost (MSC = MPC + external cost); market failure is the misallocation of resources by the market; an indirect tax is a tax on the production or sale of a good.',
        ru: 'Определения: отрицательный внешний эффект производства (negative production externality) — внешние издержки, которые производство навязывает третьим лицам; общественные издержки равны частным издержкам плюс внешние издержки (MSC = MPC + внешние издержки); провал рынка (market failure) — неэффективное распределение ресурсов рынком; косвенный налог (indirect tax) — налог на производство или продажу товара.',
      },
      {
        en: 'Diagram: demand equals marginal private benefit and marginal social benefit (D = MPB = MSB); supply equals marginal private cost (S = MPC); MSC lies above MPC by the external cost; the market quantity Qm is where D meets MPC; the socially optimal quantity Qopt is where D meets MSC; shade the welfare loss triangle between Qopt and Qm.',
        ru: 'Диаграмма: спрос равен предельной частной и предельной общественной выгоде (D = MPB = MSB); предложение равно предельным частным издержкам (S = MPC); кривая предельных общественных издержек (MSC) лежит выше MPC на величину внешних издержек; рыночный объём Qm — точка пересечения D и MPC; оптимальный для общества объём Qopt — точка пересечения D и MSC; заштрихуйте треугольник потерь общества между Qopt и Qm.',
      },
      {
        en: 'Real-world example: a factory whose emissions harm local residents; the EU Emissions Trading System, a cap-and-trade scheme for emissions; or the UK Soft Drinks Industry Levy, a tax on a demerit good. Choose one, describe it in general terms and link it to the externality.',
        ru: 'Пример из реальной жизни: завод, выбросы которого вредят местным жителям; система торговли квотами на выбросы ЕС (EU Emissions Trading System), то есть схема «ограничение и торговля»; или британский налог на безалкогольные напитки (UK Soft Drinks Industry Levy), налог на вредный товар. Выберите один пример, опишите его в общих чертах и свяжите с внешним эффектом.',
      },
      {
        en: 'Evaluation: short run versus long run (firms pass the tax on to buyers, and output falls by little if demand is inelastic; in the long run firms adopt cleaner technology and the external cost falls); stakeholders (government, the firm, its workers, local residents, consumers); assumptions (the external cost can be measured accurately); alternatives (regulation, tradable permits, subsidies for clean technology); priorities (the environment against jobs and output).',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (фирма перекладывает налог на покупателей, и выпуск снижается мало, если спрос неэластичен; в долгосрочном периоде фирма переходит на более чистые технологии, и внешние издержки падают); заинтересованные стороны (государство, фирма, её работники, жители, потребители); допущения (внешние издержки можно точно измерить); альтернативы (регулирование, торгуемые разрешения, субсидии на чистые технологии); приоритеты (экология против рабочих мест и выпуска).',
      },
    ],
    markscheme: {
      en: '(a) 1 mark: definition: an externality is a cost or benefit of an activity that falls on third parties who are not part of the transaction.\n' +
        '(a) 1 mark: definition: social cost equals private cost plus the external cost, so MSC = MPC + external cost.\n' +
        '(a) 1 mark: the factory produces where its marginal private cost equals demand, and it ignores the pollution cost borne by others.\n' +
        '(a) 1 mark: labelled diagram with price (P) and quantity (Q) axes; D = MPB = MSB; S = MPC; MSC lies above S by the external cost.\n' +
        '(a) 1 mark: the market quantity Qm is where D meets MPC, and it is above the socially optimal quantity Qopt.\n' +
        '(a) 1 mark: the socially optimal quantity Qopt is where D meets MSC.\n' +
        '(a) 1 mark: the market over-produces, so resources are over-allocated to the good compared with the social optimum.\n' +
        '(a) 1 mark: the welfare loss (deadweight loss) is the triangle between MSC and demand, between Qopt and Qm.\n' +
        '(a) 1 mark: chain of analysis: no tax, the firm ignores the pollution cost, output is too high, so pollution and its external cost are too large.\n' +
        '(a) 1 mark: application: river pollution harms residents and fishing businesses downstream, so the welfare loss is borne by third parties.\n' +
        '(b) 1 mark: a tax equal to the external cost raises the costs of the firm and shifts its supply curve up towards MSC, so the market moves to Qopt.\n' +
        '(b) 1 mark: the indirect tax is paid by the firm, and the government gains revenue that can fund clean-up or support for residents.\n' +
        '(b) 1 mark: incentive effect: the tax encourages the firm to reduce pollution by adopting cleaner technology, which lowers the external cost in the long run.\n' +
        '(b) 1 mark: the tax is efficient only if it is set at the level of the external cost, which is hard to measure; a wrong level over- or under-corrects the market.\n' +
        '(b) 1 mark: if demand for the product is inelastic, the firm passes most of the tax to consumers and output falls by little, so the correction is weaker.\n' +
        '(b) 1 mark: regulation (an emission standard) guarantees a maximum level of pollution, but it may be hard to enforce and inefficient across firms.\n' +
        '(b) 1 mark: tradable permits (cap and trade, as in the EU Emissions Trading System) reach the target at the lowest total cost, because firms that can cut cheaply do so.\n' +
        '(b) 1 mark: subsidies for cleaner technology lower abatement costs, but they cost the government money and may not reduce output of the polluting good.\n' +
        '(b) 1 mark: equity: the tax may be regressive if the product is a necessity, and some workers may lose their jobs when the factory cuts output.\n' +
        '(b) 1 mark: the real-world example is specific and accurate and is used to show the effect on output, pollution or the choice of policy.\n' +
        '(b) 1 mark, limited reasoning: a clear judgement is stated on whether an indirect tax is the best way to correct the externality.\n' +
        '(b) 1 mark, appropriate reasoning: the judgement is supported by a time-period reason: in the short run the tax may reduce output only a little; in the long run technology can change.\n' +
        '(b) 1 mark, appropriate reasoning: a second reason is linked to stakeholders or to alternatives such as regulation or tradable permits.\n' +
        '(b) 1 mark, effective and balanced reasoning: both sides are weighed: the tax is flexible and raises revenue, but it needs accurate information and may hurt jobs and poorer households.\n' +
        '(b) 1 mark, effective and balanced reasoning: the judgement depends on named conditions (measurability of the external cost, the elasticity of demand, the availability of alternatives) and gives a reasoned conclusion.',
      ru: '(a) 1 балл: определение: внешний эффект — издержки или выгоды от деятельности, которые приходятся на третьих лиц, не участвующих в сделке.\n' +
        '(a) 1 балл: определение: общественные издержки равны частным издержкам плюс внешние издержки, то есть MSC = MPC + внешние издержки.\n' +
        '(a) 1 балл: завод производит там, где его предельные частные издержки равны спросу, и не учитывает издержки загрязнения, которые несут другие.\n' +
        '(a) 1 балл: диаграмма с подписанными осями цены (P) и количества (Q): спрос D = MPB = MSB, предложение S = MPC, а MSC лежит выше S на величину внешних издержек.\n' +
        '(a) 1 балл: рыночный объём Qm находится в точке пересечения D и MPC и больше оптимального для общества объёма Qopt.\n' +
        '(a) 1 балл: оптимальный для общества объём Qopt находится в точке пересечения D и MSC.\n' +
        '(a) 1 балл: рынок производит слишком много, поэтому ресурсы перераспределяются к этому товару сверх социально оптимального уровня.\n' +
        '(a) 1 балл: потери общества (deadweight loss) — треугольник между MSC и спросом между Qopt и Qm.\n' +
        '(a) 1 балл: цепочка рассуждений: налога нет, завод игнорирует издержки загрязнения, выпуск слишком велик, поэтому загрязнение и внешние издержки тоже слишком велики.\n' +
        '(a) 1 балл: применение: загрязнение реки вредит жителям и рыбакам ниже по течению, то есть потери несут третьи лица.\n' +
        '(b) 1 балл: налог, равный внешним издержкам, повышает издержки фирмы и сдвигает её кривую предложения вверх к MSC, поэтому рынок переходит к Qopt.\n' +
        '(b) 1 балл: косвенный налог платит фирма, а государство получает доход, который может пойти на очистку реки или поддержку жителей.\n' +
        '(b) 1 балл: эффект стимулирования: налог побуждает фирму сокращать загрязнение и переходить на более чистые технологии, что снижает внешние издержки в долгосрочном периоде.\n' +
        '(b) 1 балл: налог эффективен только при величине, равной внешним издержкам, которые трудно измерить; неверный уровень либо перекорректирует, либо недокорректирует рынок.\n' +
        '(b) 1 балл: если спрос на продукцию неэластичен, фирма перекладывает большую часть налога на покупателей, а выпуск падает мало, поэтому коррекция слабее.\n' +
        '(b) 1 балл: регулирование (стандарт выбросов) гарантирует максимальный уровень загрязнения, но его трудно контролировать, и оно может быть неэффективным между фирмами.\n' +
        '(b) 1 балл: торгуемые разрешения (схема «ограничение и торговля», как в системе торговли квотами на выбросы ЕС) достигают цели с наименьшими общими издержками, потому что фирмы с низкими издержками сокращают выбросы.\n' +
        '(b) 1 балл: субсидии на чистые технологии снижают издержки сокращения выбросов, но стоят государству денег и не обязательно сокращают выпуск загрязняющего товара.\n' +
        '(b) 1 балл: справедливость: налог может быть регрессивным, если товар относится к предметам первой необходимости, а часть работников может потерять работу при сокращении выпуска.\n' +
        '(b) 1 балл: пример из реальной жизни конкретен и точен и используется для показа эффекта на выпуск, загрязнение или выбор политики.\n' +
        '(b) 1 балл, ограниченное обоснование (limited reasoning): сформулировано ясное суждение о том, является ли косвенный налог лучшим способом исправить внешний эффект.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): суждение подкреплено доводом о временном периоде: в краткосрочном периоде налог может снизить выпуск лишь немного, а в долгосрочном технологии могут измениться.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): второй довод связан с заинтересованными сторонами или альтернативами, такими как регулирование или торгуемые разрешения.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): взвешены обе стороны: налог гибок и приносит доходы, но требует точной информации и может ударить по рабочим местам и бедным домохозяйствам.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): суждение зависит от названных условий (измеримость внешних издержек, эластичность спроса, наличие альтернатив) и приводит к обоснованному выводу.',
    },
    model: {
      en: '(a) An externality is a cost or benefit of an activity that falls on third parties who are not part of the transaction. A factory that pollutes a nearby river creates a negative production externality: residents and fishers bear the cost, but the firm does not pay it. The supply curve of the firm is its marginal private cost (MPC), so the firm produces where demand meets MPC. In the diagram, the market quantity is Qm. The marginal social cost (MSC) lies above MPC by the external cost. The socially optimal quantity Qopt is where demand, which is marginal social benefit, meets MSC. So too much is produced, and resources are over-allocated to the good. The welfare loss, or deadweight loss, is the triangle between MSC and demand, between Qopt and Qm.\n\n' +
        '(b) An indirect tax equal to the external cost is one way to correct the externality. The tax raises the costs of the firm, so its supply curve shifts up towards MSC, and the market moves to Qopt. The revenue can fund clean-up or support residents. Examples include the EU Emissions Trading System, which sets a cap on emissions, and the UK Soft Drinks Industry Levy, which taxes a demerit good. The tax gives firms an incentive to cut pollution and adopt cleaner technology, which lowers the external cost in the long run.\n\n' +
        'However, the tax has limits. The external cost is difficult to measure, so a tax set too high or too low over- or under-corrects the market. If demand for the product is inelastic, the firm passes most of the tax to consumers, and output falls only a little, so the correction is weaker. Regulation, such as an emission standard, guarantees a maximum level of pollution but may be costly to enforce. Tradable permits achieve the target at the lowest total cost, while subsidies for clean technology cost the government money. The tax may also be regressive if the product is a necessity, and workers may lose jobs if the factory cuts output.\n\n' +
        'On balance, an indirect tax is useful when the external cost can be estimated and firms can cut pollution without large job losses. The government should combine the tax with regulation or permits and with support for workers and affected communities.',
      ru: '(a) Внешний эффект (externality) — это издержки или выгоды от деятельности, которые ложатся на третьих лиц, не участвующих в сделке. Завод, загрязняющий соседнюю реку, создаёт отрицательный внешний эффект производства: страдают жители и рыбаки, но фирма не платит за эти издержки. Кривая предложения фирмы — это её предельные частные издержки (MPC), поэтому фирма производит там, где спрос пересекает MPC. На диаграмме рыночный объём Qm находится в точке пересечения спроса и MPC, при цене Pm. Предельные общественные издержки (MSC) лежат выше MPC на величину внешних издержек. Оптимальный для общества объём Qopt находится там, где спрос, отражающий предельную общественную выгоду (MSB), пересекает MSC. Поскольку Qm больше Qopt, товара производится слишком много, и ресурсы перераспределяются к нему. Потери общества (deadweight loss) — это треугольник между MSC и спросом между Qopt и Qm.\n\n' +
        '(b) Косвенный налог, равный внешним издержкам, — один из способов исправить внешний эффект. Налог повышает издержки фирмы, поэтому её кривая предложения сдвигается вверх к MSC, и рынок переходит к Qopt. Доходы можно направить на очистку реки или на поддержку жителей. Примерами служат система торговли квотами на выбросы ЕС (EU Emissions Trading System), которая устанавливает предел выбросов, и британский налог на безалкогольные напитки (UK Soft Drinks Industry Levy), который облагает вредный товар. Налог стимулирует фирмы сокращать загрязнение и внедрять более чистые технологии, что снижает внешние издержки в долгосрочном периоде.\n\n' +
        'Однако у налога есть ограничения. Внешние издержки трудно измерить, поэтому налог, установленный слишком высоко или слишком низко, перекорректирует или недокорректирует рынок. Если спрос на продукцию неэластичен, фирма перекладывает большую часть налога на потребителей, а выпуск падает мало, и коррекция слабее. Регулирование, например стандарт выбросов, гарантирует максимальный уровень загрязнения, но его может быть дорого контролировать. Торгуемые разрешения достигают цели с наименьшими общими издержками, а субсидии на чистые технологии стоят государству денег. Налог может быть регрессивным, если товар относится к предметам первой необходимости, а работники могут потерять работу, если фирма сократит выпуск.\n\n' +
        'В итоге косвенный налог — полезная политика, если внешние издержки можно оценить и фирмы могут сокращать загрязнение без больших потерь рабочих мест. Государству следует сочетать налог с регулированием или разрешениями, а также поддерживать работников и затронутые сообщества.',
    },
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-03',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['monopoly-and-natural-monopoly'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain, using a diagram, why a profit-maximising monopoly produces less output and charges a higher price than a firm in a perfectly competitive market. [10 marks]\n' +
        '(b) Using a real-world example, discuss whether a natural monopoly, such as a national water or electricity network, should be left in private hands or regulated by the government. [15 marks]',
      ru: '(a) Объясните с помощью диаграммы, почему монополия (monopoly), максимизирующая прибыль, выпускает меньше и назначает более высокую цену, чем фирма на рынке совершенной конкуренции (perfect competition). [10 баллов]\n' +
        '(b) Используя пример из реальной жизни, обсудите, следует ли оставить естественную монополию (natural monopoly), например национальную сеть водоснабжения или электроснабжения, в частных руках или её должно регулировать государство. [15 баллов]',
    },
    hints: [
      {
        en: 'Definitions: monopoly (a single seller with market power and barriers to entry); natural monopoly (long-run average cost falls over the whole relevant range of output, so one firm can supply the market at the lowest cost); marginal revenue (the extra revenue from selling one more unit); marginal cost (the extra cost of producing one more unit).',
        ru: 'Определения: монополия (monopoly) — единственный продавец с рыночной властью (market power) и барьерами для входа; естественная монополия (natural monopoly) — рынок, где долгосрочные средние издержки снижаются во всём релевантном диапазоне выпуска, поэтому одна фирма обслуживает рынок с наименьшими издержками; предельный доход (marginal revenue) — дополнительная выручка от продажи одной единицы; предельные издержки (marginal cost) — дополнительные издержки производства одной единицы.',
      },
      {
        en: 'Diagram: the demand curve D (AR) slopes downwards and MR lies below it; MC rises. The monopolist produces where MR = MC at Qm and sets the price on D at Pm. The competitive benchmark has P = MC at Qc and Pc. Shade the deadweight loss triangle between Qm and Qc.',
        ru: 'Диаграмма: кривая спроса D (AR) наклонена вниз, кривая MR лежит ниже неё; MC растёт. Монополист производит там, где MR = MC, объём Qm, и назначает цену по кривой D — Pm. Ориентир конкурентного рынка: P = MC, объём Qc и цена Pc. Заштрихуйте треугольник потерь общества между Qm и Qc.',
      },
      {
        en: 'Real-world example: a national water or electricity network, a rail network or a postal service. Name the network, explain why building a second network would be costly, and describe its regulation or ownership.',
        ru: 'Пример из реальной жизни: национальная сеть водоснабжения или электроснабжения, железнодорожная сеть или почтовая служба. Назовите сеть, объясните, почему строительство второй сети было бы дорогим, и опишите её регулирование или форму собственности.',
      },
      {
        en: 'Evaluation: short run versus long run (a monopoly may invest its profit, but without competition it has less pressure to cut costs or innovate); stakeholders (consumers, shareholders, government, workers); assumptions (economies of scale are real and the regulator knows the true costs); priorities (efficiency, equity and secure supply).',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (монополия может инвестировать прибыль, но без конкуренции у неё меньше стимулов снижать издержки и внедрять новшества); заинтересованные стороны (потребители, акционеры, государство, работники); допущения (экономия от масштаба действительно есть, а регулятор знает реальные издержки); приоритеты (эффективность, справедливость и надёжность поставок).',
      },
    ],
    markscheme: {
      en: '(a) 1 mark: definition: a monopoly is a single seller of a good with no close substitutes and high barriers to entry, so the firm faces the market demand curve.\n' +
        '(a) 1 mark: because the monopolist faces a downward-sloping demand curve, marginal revenue is below average revenue (price) at every output.\n' +
        '(a) 1 mark: profit is maximised where MR = MC, so the monopolist produces the output Qm.\n' +
        '(a) 1 mark: the monopolist sets the price from the demand curve at Qm, so the price Pm is above marginal cost.\n' +
        '(a) 1 mark: under perfect competition the firm is a price taker and produces where P = MC, so the competitive output Qc is larger and the price Pc is lower.\n' +
        '(a) 1 mark: labelled diagram with axes P and Q; demand D (AR), MR and MC; Pm and Qm for the monopolist; Pc and Qc for the competitive benchmark.\n' +
        '(a) 1 mark: the monopolist restricts output to raise the price, so consumers buy less and consumer surplus falls.\n' +
        '(a) 1 mark: the deadweight loss is the triangle between the demand curve and MC between Qm and Qc, showing allocative inefficiency.\n' +
        '(a) 1 mark: barriers to entry allow the monopolist to keep supernormal profit in the long run, because new firms cannot enter and compete it away.\n' +
        '(a) 1 mark: the chain of analysis is complete: restricted output, higher price, lower consumer surplus, and resources are underused.\n' +
        '(b) 1 mark: definition: a natural monopoly exists when economies of scale are so large that one firm can supply the whole market at the lowest average cost.\n' +
        '(b) 1 mark: diagram: the LRAC curve falls over the relevant range, so one large firm has lower costs than two or more firms would have; duplicate networks would be wasteful.\n' +
        '(b) 1 mark: under a private unregulated monopoly the firm restricts output and charges a price above MC, so consumers lose surplus and a deadweight loss arises.\n' +
        '(b) 1 mark: marginal cost pricing (P = MC) is allocatively efficient, but the price is below average cost, so the firm makes a loss and needs a subsidy.\n' +
        '(b) 1 mark: average cost pricing (P = AC) allows a normal profit, but output is still below the efficient level that marginal cost pricing would achieve.\n' +
        '(b) 1 mark: price regulation (for example a price cap) limits the price, but the regulator needs accurate cost information, which may be hard to obtain.\n' +
        '(b) 1 mark: public ownership lets the government control prices and investment and avoid the profit motive, but it may create X-inefficiency and weak incentives to cut costs.\n' +
        '(b) 1 mark: private ownership gives strong incentives for cost control and innovation, but the firm may set high prices and under-invest in ways that hurt poorer consumers.\n' +
        '(b) 1 mark: competition policy, such as breaking up the network, can introduce competition, but it may lose the economies of scale that make the monopoly efficient.\n' +
        '(b) 1 mark: the real-world example is specific and accurate (the network, its ownership or its regulation) and is used to support the argument.\n' +
        '(b) 1 mark, limited reasoning: a clear judgement is stated on whether the network should be in private hands or regulated by the government.\n' +
        '(b) 1 mark, appropriate reasoning: the judgement is supported by a time-period reason: in the short run regulation controls prices; in the long run regulation may not keep up with costs or innovation.\n' +
        '(b) 1 mark, appropriate reasoning: a second reason is linked to stakeholders, such as consumer prices and the government budget, and to the assumption that economies of scale are real.\n' +
        '(b) 1 mark, effective and balanced reasoning: both sides are weighed: private ownership may bring efficiency but high prices; public control may protect consumers but may lack incentives.\n' +
        '(b) 1 mark, effective and balanced reasoning: the judgement depends on named conditions (the size of the economies of scale, the quality of regulation, the ability of the regulator to measure costs) and gives a reasoned conclusion.',
      ru: '(a) 1 балл: определение: монополия — единственный продавец товара без близких заменителей и с высокими барьерами для входа; фирма сталкивается с рыночным спросом.\n' +
        '(a) 1 балл: поскольку монополист сталкивается с кривой спроса, наклонённой вниз, предельный доход (MR) ниже средней выручки (цены) при любом выпуске.\n' +
        '(a) 1 балл: прибыль максимальна там, где MR = MC; монополист производит объём Qm.\n' +
        '(a) 1 балл: монополист назначает цену по кривой спроса при Qm, поэтому цена Pm выше предельных издержек.\n' +
        '(a) 1 балл: при совершенной конкуренции фирма принимает цену и производит там, где P = MC; конкурентный объём Qc больше, а цена Pc ниже.\n' +
        '(a) 1 балл: диаграмма с подписанными осями P и Q; спрос D (AR), MR и MC; Pm и Qm для монополиста; Pc и Qc для конкурентного ориентира.\n' +
        '(a) 1 балл: монополист сокращает выпуск, чтобы поднять цену, поэтому потребители покупают меньше, а излишек потребителя (consumer surplus) падает.\n' +
        '(a) 1 балл: потери общества (deadweight loss) — треугольник между кривой спроса и MC между Qm и Qc; он показывает аллокативную неэффективность.\n' +
        '(a) 1 балл: барьеры для входа позволяют монополисту сохранять сверхнормальную прибыль в долгосрочном периоде, потому что новые фирмы не могут войти на рынок и устранить её.\n' +
        '(a) 1 балл: цепочка рассуждений завершена: сокращение выпуска, рост цены, падение излишка потребителей, ресурсы используются недостаточно.\n' +
        '(b) 1 балл: определение: естественная монополия возникает, когда экономия от масштаба настолько велика, что одна фирма может обслужить весь рынок с наименьшими средними издержками.\n' +
        '(b) 1 балл: диаграмма: кривая долгосрочных средних издержек (LRAC) снижается в релевантном диапазоне, поэтому одна крупная фирма имеет более низкие издержки, чем две или более; дублирование сетей расточительно.\n' +
        '(b) 1 балл: при частной нерегулируемой монополии фирма сокращает выпуск и назначает цену выше MC, поэтому потребители теряют излишек и возникают потери общества.\n' +
        '(b) 1 балл: ценообразование по предельным издержкам (P = MC) эффективно с точки зрения распределения, но цена ниже средних издержек, поэтому фирма несёт убыток и нуждается в субсидии.\n' +
        '(b) 1 балл: ценообразование по средним издержкам (P = AC) позволяет получить нормальную прибыль, но выпуск всё ещё ниже эффективного уровня, который дало бы ценообразование по MC.\n' +
        '(b) 1 балл: регулирование цен (например, ценовое ограничение сверху) ограничивает цену, но регулятору нужна точная информация о затратах, которую трудно получить.\n' +
        '(b) 1 балл: государственная собственность позволяет государству контролировать цены и инвестиции и уйти от мотива максимизации прибыли, но возможна X-неэффективность и слабые стимулы снижать издержки.\n' +
        '(b) 1 балл: частная собственность создаёт сильные стимулы к контролю издержек и инновациям, но фирма может назначать высокие цены и недоинвестировать в ущерб бедным потребителям.\n' +
        '(b) 1 балл: политика конкуренции, например разделение сети на части, может ввести конкуренцию, но может потерять экономию от масштаба, которая делает монополию эффективной.\n' +
        '(b) 1 балл: пример из реальной жизни конкретен и точен (сеть, её собственность или регулирование) и используется для подкрепления аргумента.\n' +
        '(b) 1 балл, ограниченное обоснование (limited reasoning): сформулировано ясное суждение о том, должна ли сеть находиться в частных руках или регулироваться государством.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): суждение подкреплено доводом о временном периоде: в краткосрочном периоде регулирование контролирует цены, а в долгосрочном может не успевать за издержками и инновациями.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): второй довод связан с заинтересованными сторонами (цены для потребителей, бюджет государства) и с допущением, что экономия от масштаба действительно есть.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): взвешены обе стороны: частная собственность может дать эффективность, но высокие цены; государственный контроль защищает потребителей, но может не давать стимулов.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): суждение зависит от названных условий (размер экономии от масштаба, качество регулирования, способность регулятора измерять издержки) и приводит к обоснованному выводу.',
    },
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-04',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['oligopoly-and-monopolistic-competition'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Using a payoff matrix for two firms, explain why firms in an oligopoly may collude to keep prices high, yet still have an incentive to cheat on the agreement. [10 marks]\n' +
        '(b) Using a real-world example, discuss whether competition authorities should prohibit all cartels between firms in an oligopoly. [15 marks]',
      ru: '(a) Используя матрицу выигрышей (payoff matrix) для двух фирм, объясните, почему фирмы в олигополии (oligopoly) могут договориться о сговоре, чтобы поддерживать высокие цены, но всё же имеют стимул нарушить соглашение. [10 баллов]\n' +
        '(b) Используя пример из реальной жизни, обсудите, должны ли органы по защите конкуренции запрещать все картели между фирмами в олигополии. [15 баллов]',
    },
    hints: [
      {
        en: 'Definitions: oligopoly (a market dominated by a few large, interdependent firms); collusion (firms agree to fix prices or output together); cartel (a formal collusive agreement); dominant strategy (the best choice whatever the rival does); Nash equilibrium (no firm gains by changing its strategy alone).',
        ru: 'Определения: олигополия (oligopoly) — рынок, на котором доминируют несколько крупных взаимозависимых фирм; сговор (collusion) — фирмы договариваются о ценах или выпуске; картель (cartel) — формальное соглашение о сговоре; доминирующая стратегия (dominant strategy) — лучший выбор при любом ответе соперника; равновесие Нэша (Nash equilibrium) — ни одна фирма не выигрывает, меняя стратегию в одиночку.',
      },
      {
        en: 'Diagram or table: a two by two payoff matrix in which each firm chooses a high or a low price; find the best response of each firm; the Nash equilibrium is the cell where both choose the low price; the joint profit is higher if both keep the high price, but that outcome is not stable; mark the prisoner dilemma structure.',
        ru: 'Диаграмма или таблица: матрица выигрышей 2 на 2, в которой каждая фирма выбирает высокую или низкую цену; найдите лучший ответ каждой фирмы; равновесие Нэша — клетка, где обе фирмы выбирают низкую цену; совместная прибыль выше, если обе сохраняют высокую цену, но этот исход неустойчив; отметьте структуру дилеммы заключённого (prisoner dilemma).',
      },
      {
        en: 'Real-world example: the OPEC+ production cuts from 2020, which show a cartel-like agreement on output, or a price-fixing case in a national market. Describe the market and the agreement in general terms and explain the effect on prices.',
        ru: 'Пример из реальной жизни: сокращения добычи странами ОПЕК+ начиная с 2020 года, которые показывают соглашение, похожее на картель, или дело о сговоре цен на национальном рынке. Опишите рынок и соглашение в общих чертах и объясните влияние на цены.',
      },
      {
        en: 'Evaluation: short run versus long run (a cartel may hold while members can monitor each other, but new entrants and substitutes erode it over time); stakeholders (consumers, cartel members, rival firms, government); assumptions (firms are rational and can monitor and punish cheating); priorities (consumer welfare against industry stability); alternatives (price leadership or tacit collusion, which are harder to prove).',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (картель может держаться, пока участники могут следить друг за другом, но новые участники и заменители со временем его размывают); заинтересованные стороны (потребители, участники картеля, конкуренты, государство); допущения (фирмы рациональны и могут контролировать и наказывать обман); приоритеты (благосостояние потребителей против стабильности отрасли); альтернативы (ценовое лидерство или негласный сговор, которые труднее доказать).',
      },
    ],
    markscheme: {
      en: '(a) 1 mark: definition: an oligopoly is a market with a few large firms whose decisions depend on the reactions of their rivals (interdependence).\n' +
        '(a) 1 mark: definition: collusion is an agreement between firms to fix prices or output, so that they act like a monopoly and raise joint profit.\n' +
        '(a) 1 mark: the payoff matrix shows that joint profit is highest when both firms keep the high price.\n' +
        '(a) 1 mark: each firm has an incentive to undercut the agreed high price, because a lower price wins a larger market share and extra profit.\n' +
        '(a) 1 mark: if one firm cuts its price while the other keeps the high price, the cheating firm gains and the profit of the other firm falls.\n' +
        '(a) 1 mark: working through the matrix, the low price gives each firm a higher payoff whatever the rival does, so the low price is a dominant strategy.\n' +
        '(a) 1 mark: the Nash equilibrium is the outcome where both firms choose the low price, and neither can gain by changing its choice alone.\n' +
        '(a) 1 mark: this is a prisoner dilemma: both firms are worse off than under the collusive agreement, yet the agreement is unstable.\n' +
        '(a) 1 mark: cartels are usually illegal, so firms cannot enforce the agreement in court, which increases the incentive to cheat.\n' +
        '(a) 1 mark: the explanation links the incentive to collude and the incentive to cheat, with a correct conclusion about the outcome.\n' +
        '(b) 1 mark: collusion behaves like a monopoly, with higher prices and lower output, which reduces consumer surplus and creates a deadweight loss.\n' +
        '(b) 1 mark: a cartel raises the profits of its members, and stable prices can reduce uncertainty for investment.\n' +
        '(b) 1 mark: consumers pay a higher price and buy less than in a competitive market, so they lose consumer surplus.\n' +
        '(b) 1 mark: a ban on cartels deters the most damaging behaviour and protects consumers, which is the purpose of competition policy.\n' +
        '(b) 1 mark: enforcement is costly: authorities need evidence, and fines and monitoring change the expected payoff from colluding or cheating.\n' +
        '(b) 1 mark: tacit collusion, such as price leadership, may continue without any formal agreement and is harder to prohibit.\n' +
        '(b) 1 mark: some cooperation, such as joint research or common standards, may be efficient, so a total ban may stop beneficial agreements.\n' +
        '(b) 1 mark: without collusion, price wars may reduce profits and lead to lower investment, quality and innovation in the industry.\n' +
        '(b) 1 mark: the balance between consumer welfare and firm stability depends on the size of the market and the number of firms.\n' +
        '(b) 1 mark: the real-world example is specific and accurate and is used to show the effect on prices and output.\n' +
        '(b) 1 mark, limited reasoning: a clear judgement is stated on whether all cartels should be prohibited.\n' +
        '(b) 1 mark, appropriate reasoning: the judgement is supported by a time-period reason: a cartel may hold for a while, but entry and substitutes erode it in the long run.\n' +
        '(b) 1 mark, appropriate reasoning: a second reason is linked to stakeholders or to alternatives, such as tacit collusion or cooperation on standards.\n' +
        '(b) 1 mark, effective and balanced reasoning: both sides are weighed: a ban protects consumers but may stop efficient cooperation, and tacit collusion may remain.\n' +
        '(b) 1 mark, effective and balanced reasoning: the judgement depends on named conditions (market structure, ease of monitoring, strength of enforcement) and gives a reasoned conclusion.',
      ru: '(a) 1 балл: определение: олигополия — рынок с несколькими крупными фирмами, решения которых зависят от реакции конкурентов (взаимозависимость).\n' +
        '(a) 1 балл: определение: сговор (collusion) — соглашение фирм о фиксации цен или выпуска, благодаря которому они действуют как монополия и повышают совместную прибыль.\n' +
        '(a) 1 балл: матрица выигрышей показывает, что совместная прибыль максимальна, когда обе фирмы сохраняют высокую цену.\n' +
        '(a) 1 балл: у каждой фирмы есть стимул снизить согласованную высокую цену, потому что низкая цена даёт большую долю рынка и дополнительную прибыль.\n' +
        '(a) 1 балл: если одна фирма снижает цену, а другая сохраняет высокую, фирма-обманщик выигрывает, а прибыль другой фирмы падает.\n' +
        '(a) 1 балл: при анализе матрицы низкая цена даёт каждой фирме более высокий выигрыш при любом ответе соперника, поэтому низкая цена — доминирующая стратегия (dominant strategy).\n' +
        '(a) 1 балл: равновесие Нэша (Nash equilibrium) — исход, при котором обе фирмы выбирают низкую цену и ни одна не может выиграть, изменив свой выбор в одиночку.\n' +
        '(a) 1 балл: это дилемма заключённого (prisoner dilemma): обе фирмы в равновесии хуже, чем при соглашении о сговоре, но соглашение неустойчиво.\n' +
        '(a) 1 балл: картели обычно незаконны, поэтому фирмы не могут добиться выполнения соглашения в суде, а это усиливает стимул обмануть.\n' +
        '(a) 1 балл: объяснение связывает стимул к сговору и стимул к обману и приводит к верному выводу об исходе.\n' +
        '(b) 1 балл: сговор ведёт себя как монополия: более высокие цены и меньший выпуск снижают излишек потребителя и создают потери общества.\n' +
        '(b) 1 балл: картель повышает прибыль участников, а стабильные цены могут снизить неопределённость для инвестиций.\n' +
        '(b) 1 балл: потребители платят более высокую цену и покупают меньше, чем на конкурентном рынке, поэтому теряют излишек.\n' +
        '(b) 1 балл: запрет картелей сдерживает самое вредное поведение и защищает потребителей; это цель политики конкуренции.\n' +
        '(b) 1 балл: соблюдение запрета дорого: органам нужны доказательства, а штрафы и мониторинг меняют ожидаемую выгоду от сговора или обмана.\n' +
        '(b) 1 балл: негласный сговор, например ценовое лидерство (price leadership), может продолжаться без формального соглашения, и его труднее запретить.\n' +
        '(b) 1 балл: некоторое сотрудничество, например совместные исследования или общие стандарты, может быть эффективным, поэтому полный запрет может остановить полезные соглашения.\n' +
        '(b) 1 балл: без сговора ценовые войны могут снизить прибыль и привести к меньшим инвестициям, качеству и инновациям в отрасли.\n' +
        '(b) 1 балл: баланс между благосостоянием потребителей и устойчивостью фирм зависит от размера рынка и числа фирм.\n' +
        '(b) 1 балл: пример из реальной жизни конкретен и точен и используется для показа влияния на цены и выпуск.\n' +
        '(b) 1 балл, ограниченное обоснование (limited reasoning): сформулировано ясное суждение о том, следует ли запрещать все картели.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): суждение подкреплено доводом о временном периоде: картель может держаться какое-то время, но вход новых фирм и заменители размывают его в долгосрочном периоде.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): второй довод связан с заинтересованными сторонами или альтернативами, например негласным сговором или сотрудничеством в стандартах.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): взвешены обе стороны: запрет защищает потребителей, но может остановить эффективное сотрудничество, а негласный сговор может сохраниться.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): суждение зависит от названных условий (структура рынка, простота контроля, сила правоприменения) и приводит к обоснованному выводу.',
    },
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-05',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['asymmetric-information'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how asymmetric information in the market for used cars can lead to adverse selection and a fall in the number of good-quality cars traded. [10 marks]\n' +
        '(b) Using a real-world example, discuss whether a government should intervene to reduce the market failure caused by asymmetric information. [15 marks]',
      ru: '(a) Объясните, как асимметричная информация (asymmetric information) на рынке подержанных автомобилей может привести к неблагоприятному отбору (adverse selection) и сокращению числа качественных автомобилей, продаваемых на рынке. [10 баллов]\n' +
        '(b) Используя пример из реальной жизни, обсудите, должно ли правительство вмешиваться, чтобы уменьшить провал рынка, вызванный асимметричной информацией. [15 баллов]',
    },
    hints: [
      {
        en: 'Definitions: asymmetric information (one party knows more about quality or risk than the other); adverse selection (the market attracts low-quality or high-risk goods because buyers cannot tell them apart); moral hazard (a party changes its behaviour after a contract because its actions are not observed); signalling (the informed party reveals its quality, for example through a warranty).',
        ru: 'Определения: асимметричная информация (asymmetric information) — одна сторона знает о качестве или риске больше, чем другая; неблагоприятный отбор (adverse selection) — на рынок приходят товары низкого качества или с высоким риском, потому что покупатели не могут их отличить; моральный риск (moral hazard) — сторона меняет поведение после заключения договора, так как её действия не наблюдаются; сигнализация (signalling) — информированная сторона раскрывает качество, например через гарантию.',
      },
      {
        en: 'Diagram: the supply of high-quality cars shifts to the left as owners withdraw from the market; the quantity traded falls below the symmetric-information quantity; the lost gains from trade that would have benefited both sides are shown as a triangle.',
        ru: 'Диаграмма: предложение качественных автомобилей сдвигается влево, так как владельцы уходят с рынка; объём сделок падает ниже уровня, который был бы при симметричной информации; потерянные выгоды от сделок, которые принесли бы пользу обеим сторонам, показаны треугольником.',
      },
      {
        en: 'Real-world example: the used-car market, car insurance (the insured person knows more about their own risk), or online markets with weak reviews. Describe the example in general terms and identify the information gap.',
        ru: 'Пример из реальной жизни: рынок подержанных автомобилей, автострахование (застрахованный лучше знает собственный риск) или онлайн-рынки со слабыми отзывами. Опишите пример в общих чертах и укажите разрыв в информации.',
      },
      {
        en: 'Evaluation: short run versus long run (sellers can signal quality with warranties and inspections, and reputation builds trust over time); stakeholders (buyers, honest sellers, insurers, government); assumptions (signals are credible and rules are enforced); priorities (efficiency and trust against the cost of regulation and freedom of choice); government solutions (mandatory disclosure, compulsory insurance, guarantees, regulation).',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (продавцы могут подавать сигналы качества через гарантии и проверки, а репутация со временем создаёт доверие); заинтересованные стороны (покупатели, добросовестные продавцы, страховщики, государство); допущения (сигналы достоверны, правила соблюдаются); приоритеты (эффективность и доверие против издержек регулирования и свободы выбора); меры государства (обязательное раскрытие информации, обязательное страхование, гарантии, регулирование).',
      },
    ],
    markscheme: {
      en: '(a) 1 mark: definition: asymmetric information exists when one party to a transaction knows more about the quality or the risk of the good than the other party.\n' +
        '(a) 1 mark: in the used-car market the seller knows the true condition of the car, but the buyer cannot judge its quality before buying.\n' +
        '(a) 1 mark: buyers are only willing to pay the average expected value of a used car, which is below the value of a high-quality car.\n' +
        '(a) 1 mark: owners of high-quality cars are not willing to sell at this lower price, so the supply of good-quality cars falls.\n' +
        '(a) 1 mark: definition: adverse selection is the situation in which the market is dominated by low-quality goods because buyers cannot distinguish quality.\n' +
        '(a) 1 mark: as the average quality falls, buyers offer even lower prices, so more good-quality sellers leave, and the market can shrink.\n' +
        '(a) 1 mark: labelled diagram: the supply of high-quality cars shifts left, and the equilibrium quantity traded is below the symmetric-information quantity.\n' +
        '(a) 1 mark: the market under-supplies quality, because trades that would benefit both buyers and sellers do not take place.\n' +
        '(a) 1 mark: the chain of analysis is complete: information gap, lower price offered, high-quality sellers leave, average quality falls, fewer trades.\n' +
        '(a) 1 mark: link to the example: buyers may rely on the price or a vehicle history check as a signal, which only partly reduces the problem.\n' +
        '(b) 1 mark: definition: moral hazard arises when a party changes its behaviour after a transaction because its actions are not observed, for example an insured driver takes more risks.\n' +
        '(b) 1 mark: mandatory disclosure, such as an official vehicle history report, reduces the information gap and raises trust in the market.\n' +
        '(b) 1 mark: compulsory insurance spreads risk across all drivers and avoids adverse selection, in which only high-risk people buy insurance.\n' +
        '(b) 1 mark: legal guarantees or warranties can signal quality and protect buyers, but they raise seller costs and may raise prices.\n' +
        '(b) 1 mark: regulation sets minimum quality standards, which removes the worst goods, but it may reduce choice and raise compliance costs.\n' +
        '(b) 1 mark: signalling by sellers (certified dealers, inspections, brands) lets high-quality sellers separate themselves; this is a market solution with costs.\n' +
        '(b) 1 mark: screening by buyers (independent inspection, testing) gives buyers information, but it takes time and money.\n' +
        '(b) 1 mark: the market failure is an efficiency loss: beneficial trades are missed, so resources are misallocated.\n' +
        '(b) 1 mark: equity effect: low-income buyers are more likely to buy poor-quality goods because they cannot afford a checked product.\n' +
        '(b) 1 mark: the real-world example is specific and accurate and is used to show the effect of the government intervention.\n' +
        '(b) 1 mark, limited reasoning: a clear judgement is stated on whether the government should intervene.\n' +
        '(b) 1 mark, appropriate reasoning: the judgement is supported by a time-period reason: rules such as mandatory disclosure act quickly, but trust and reputation build slowly.\n' +
        '(b) 1 mark, appropriate reasoning: a second reason is linked to stakeholders (honest sellers, buyers, insurers) and to the cost to the government of enforcing the rules.\n' +
        '(b) 1 mark, effective and balanced reasoning: both sides are weighed: intervention reduces adverse selection, but regulation may be costly and may reduce consumer choice.\n' +
        '(b) 1 mark, effective and balanced reasoning: the judgement depends on named conditions (the scale of the information gap, the capacity to enforce, the existence of private signals) and gives a reasoned conclusion.',
      ru: '(a) 1 балл: определение: асимметричная информация возникает, когда одна сторона сделки знает о качестве или риске товара больше, чем другая сторона.\n' +
        '(a) 1 балл: на рынке подержанных автомобилей продавец знает реальное состояние машины, но покупатель не может оценить её качество до покупки.\n' +
        '(a) 1 балл: покупатели готовы платить лишь средний ожидаемый уровень стоимости подержанного автомобиля, который ниже стоимости автомобиля высокого качества.\n' +
        '(a) 1 балл: владельцы качественных автомобилей не хотят продавать их по такой низкой цене, поэтому предложение качественных автомобилей падает.\n' +
        '(a) 1 балл: определение: неблагоприятный отбор (adverse selection) — ситуация, когда на рынке преобладают товары низкого качества, потому что покупатели не могут отличить качество.\n' +
        '(a) 1 балл: по мере снижения среднего качества покупатели предлагают ещё более низкие цены, поэтому продавцы качественных товаров уходят, и рынок может сжаться.\n' +
        '(a) 1 балл: диаграмма с подписанными осями: предложение качественных автомобилей сдвигается влево, а равновесный объём сделок ниже уровня при симметричной информации.\n' +
        '(a) 1 балл: рынок недопроизводит качество, потому что сделки, выгодные и покупателям, и продавцам, не совершаются.\n' +
        '(a) 1 балл: цепочка рассуждений завершена: информационный разрыв, низкая предлагаемая цена, уход качественных продавцов, падение среднего качества, меньше сделок.\n' +
        '(a) 1 балл: связь с примером: покупатели могут опираться на цену или проверку истории автомобиля как на сигнал, но это лишь отчасти уменьшает проблему.\n' +
        '(b) 1 балл: определение: моральный риск (moral hazard) возникает, когда сторона меняет поведение после сделки, потому что её действия не наблюдаются; например, застрахованный водитель рискует сильнее.\n' +
        '(b) 1 балл: обязательное раскрытие информации, например официальный отчёт об истории автомобиля, сокращает информационный разрыв и повышает доверие к рынку.\n' +
        '(b) 1 балл: обязательное страхование распределяет риск между всеми водителями и устраняет неблагоприятный отбор, при котором страхуются только люди с высоким риском.\n' +
        '(b) 1 балл: законные гарантии или гарантийные обязательства могут сигнализировать о качестве и защищать покупателей, но повышают издержки продавцов и могут поднять цены.\n' +
        '(b) 1 балл: регулирование устанавливает минимальные стандарты качества, что убирает худшие товары, но может сократить выбор и увеличить издержки соответствия.\n' +
        '(b) 1 балл: сигнализация со стороны продавцов (сертифицированные дилеры, проверки, бренды) позволяет продавцам высокого качества отделить себя от остальных; это рыночное решение с издержками.\n' +
        '(b) 1 балл: скрининг со стороны покупателей (независимая проверка, тестирование) даёт покупателям информацию, но требует времени и денег.\n' +
        '(b) 1 балл: провал рынка — это потеря эффективности: выгодные сделки не происходят, поэтому ресурсы распределяются неэффективно.\n' +
        '(b) 1 балл: эффект для справедливости: покупатели с низкими доходами чаще покупают товары низкого качества, потому что не могут позволить себе проверенный товар.\n' +
        '(b) 1 балл: пример из реальной жизни конкретен и точен и используется для показа эффекта вмешательства государства.\n' +
        '(b) 1 балл, ограниченное обоснование (limited reasoning): сформулировано ясное суждение о том, должно ли государство вмешиваться.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): суждение подкреплено доводом о временном периоде: правила, например обязательное раскрытие информации, действуют быстро, а доверие и репутация формируются медленно.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): второй довод связан с заинтересованными сторонами (честные продавцы, покупатели, страховщики) и с издержками государства на контроль исполнения правил.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): взвешены обе стороны: вмешательство снижает неблагоприятный отбор, но регулирование может быть дорогим и сократить выбор покупателей.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): суждение зависит от названных условий (масштаб информационного разрыва, возможности контроля, наличие частных сигналов) и приводит к обоснованному выводу.',
    },
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-06',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['public-goods', 'common-pool-resources'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain why a free market is likely to under-provide a public good, such as a flood defence system for a coastal city. [10 marks]\n' +
        '(b) Discuss whether the government should manage a common pool resource, such as a fish stock, through quotas, or whether private property rights would be a better solution. Use a real-world example. [15 marks]',
      ru: '(a) Объясните, почему свободный рынок, вероятно, недопроизводит общественное благо (public good), например систему защиты от наводнений для приморского города. [10 баллов]\n' +
        '(b) Обсудите, должно ли государство управлять общим ресурсом (common pool resource), например рыбным запасом, с помощью квот, или же права частной собственности станут лучшим решением. Используйте пример из реальной жизни. [15 баллов]',
    },
    hints: [
      {
        en: 'Definitions: public good (non-rivalrous and non-excludable); free rider (a person who uses a good without paying for it); common pool resource (rivalrous but non-excludable); open access (anyone can use the resource freely); tragedy of the commons (over-use of an open-access resource).',
        ru: 'Определения: общественное благо (public good) — неконкурентное и неисключаемое благо; безбилетник (free rider) — тот, кто пользуется благом, не платя за него; общий ресурс (common pool resource) — конкурентный, но неисключаемый ресурс; открытый доступ (open access) — любой может пользоваться ресурсом свободно; трагедия общих ресурсов (tragedy of the commons) — перерасход ресурса при открытом доступе.',
      },
      {
        en: 'Diagram for (a): the market demand for a public good is the vertical sum of individual demands; the efficient quantity is where this sum meets marginal cost; the free market provides less because free riders understate their demand. For (b): the open-access equilibrium is where total revenue equals total cost, which is larger than the socially optimal effort.',
        ru: 'Диаграмма для (a): рыночный спрос на общественное благо — вертикальная сумма индивидуальных спросов; эффективный объём находится там, где эта сумма пересекает предельные издержки; свободный рынок производит меньше, потому что безбилетники занижают свой спрос. Для (b): равновесие при открытом доступе находится там, где общая выручка равна общим издержкам; оно больше социально оптимального объёма усилий.',
      },
      {
        en: 'Real-world example: a flood defence or a national defence system (public goods); a fishery in a national zone or the Atlantic cod fishery (common pool resource). Show how the free-rider or open-access problem arises.',
        ru: 'Пример из реальной жизни: защита от наводнений или национальная оборона (общественные блага); рыболовство в национальной зоне или атлантическая треска (общий ресурс). Покажите, как возникает проблема безбилетника или открытого доступа.',
      },
      {
        en: 'Evaluation: short run versus long run (quotas can be enforced now, but illegal fishing and monitoring costs weaken them, and in the long run stocks may recover or collapse); stakeholders (fishers, consumers, government, future generations); assumptions (the government knows the sustainable catch and property rights can be enforced); priorities (income for fishers against the sustainability of stocks); the cost and information problems of government provision.',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (квоты можно ввести сейчас, но незаконный лов и издержки контроля их ослабляют; в долгосрочном периоде запасы могут восстановиться или истощиться); заинтересованные стороны (рыбаки, потребители, государство, будущие поколения); допущения (государство знает устойчивый объём улова, а права собственности можно защитить); приоритеты (доход рыбаков против устойчивости запасов); издержки и проблемы информации при государственном управлении.',
      },
    ],
    markscheme: {
      en: '(a) 1 mark: definition: a public good is non-rivalrous (the use by one person does not reduce what is left for others) and non-excludable (people cannot be prevented from using it).\n' +
        '(a) 1 mark: the free-rider problem: people can benefit from the good without paying, so they have no incentive to pay for it voluntarily.\n' +
        '(a) 1 mark: private firms cannot charge everyone who benefits, so they cannot make a profit from supplying the good, and they under-supply it or do not supply it.\n' +
        '(a) 1 mark: example: a flood defence system protects all homes in the area, and no household can be excluded from its benefits.\n' +
        '(a) 1 mark: the market demand for a public good is the vertical sum of the individual demand curves, not the horizontal sum used for private goods.\n' +
        '(a) 1 mark: labelled diagram: the sum of individual demands, the marginal cost curve, and the efficient quantity where the sum meets marginal cost.\n' +
        '(a) 1 mark: the market quantity is below the efficient quantity because individuals understate their true willingness to pay, which causes under-provision.\n' +
        '(a) 1 mark: the good cannot be sold to each person separately, so the price mechanism does not reveal how much people value it.\n' +
        '(a) 1 mark: the welfare loss from under-provision is the loss of benefits that would have exceeded the cost of provision.\n' +
        '(a) 1 mark: conclusion: the free market fails to provide the efficient quantity of a public good, which justifies government provision or funding.\n' +
        '(b) 1 mark: definition: a common pool resource is rivalrous (use reduces the amount left) but non-excludable (open access), so no one owns it.\n' +
        '(b) 1 mark: under open access each user ignores the cost of the reduced stock for others, so the resource is over-exploited.\n' +
        '(b) 1 mark: the open-access equilibrium is where total revenue equals total cost; this effort level is larger than the socially optimal effort that maximises profit.\n' +
        '(b) 1 mark: quotas limit the total catch, which can let the stock recover, but they need monitoring and enforcement, and fishers may cheat.\n' +
        '(b) 1 mark: private property rights, such as individual transferable quotas or fishing rights, give owners an incentive to conserve, because the future value of the stock belongs to them.\n' +
        '(b) 1 mark: tradable permits create a market for the right to catch, so the cheapest fishers reduce their catch, and the target is reached at the lowest cost.\n' +
        '(b) 1 mark: a tax on catch raises the cost of fishing and reduces effort, but the government must set the correct level, which is hard to know.\n' +
        '(b) 1 mark: government management involves information and cost problems, because the government may not know the sustainable level of catch.\n' +
        '(b) 1 mark: equity effect: quotas or property rights may concentrate the resource in a few hands and exclude small fishers.\n' +
        '(b) 1 mark: the real-world example is specific and accurate (for example the Atlantic cod collapse or a national quota scheme) and linked to over-exploitation.\n' +
        '(b) 1 mark, limited reasoning: a clear judgement is stated on whether the government or property rights should manage the resource.\n' +
        '(b) 1 mark, appropriate reasoning: the judgement is supported by a time-period reason: quotas may restrict catch now, while property rights protect the stock in the long run.\n' +
        '(b) 1 mark, appropriate reasoning: a second reason is linked to stakeholders: the income of fishers, the interests of consumers and future generations.\n' +
        '(b) 1 mark, effective and balanced reasoning: both sides are weighed: property rights give strong incentives but may concentrate income, and quotas may not be enforced.\n' +
        '(b) 1 mark, effective and balanced reasoning: the judgement depends on named conditions (enforceability of rights, quality of scientific data, scale of illegal fishing) and gives a reasoned conclusion.',
      ru: '(a) 1 балл: определение: общественное благо неконкурентно (использование одним человеком не уменьшает то, что остаётся другим) и неисключаемо (никого нельзя лишить доступа к нему).\n' +
        '(a) 1 балл: проблема безбилетника (free rider): люди могут пользоваться благом, не платя за него, поэтому у них нет стимула платить добровольно.\n' +
        '(a) 1 балл: частные фирмы не могут взимать плату со всех, кто получает выгоду, поэтому не могут получать прибыль от его предоставления и предлагают его недостаточно или не предлагают вовсе.\n' +
        '(a) 1 балл: пример: система защиты от наводнений защищает все дома в районе, и ни один дом нельзя исключить из её выгод.\n' +
        '(a) 1 балл: рыночный спрос на общественное благо — это вертикальная сумма индивидуальных спросов, а не горизонтальная сумма, как для частных благ.\n' +
        '(a) 1 балл: диаграмма с подписанными осями: сумма индивидуальных спросов, кривая предельных издержек и эффективный объём там, где сумма пересекает предельные издержки.\n' +
        '(a) 1 балл: рыночный объём ниже эффективного, потому что люди занижают свою истинную готовность платить, и это приводит к недопроизводству.\n' +
        '(a) 1 балл: благо нельзя продать каждому человеку по отдельности, поэтому рыночный механизм не выявляет, насколько люди его ценят.\n' +
        '(a) 1 балл: потери от недопроизводства — это утраченные выгоды, которые превысили бы издержки предоставления блага.\n' +
        '(a) 1 балл: вывод: свободный рынок не обеспечивает эффективный объём общественного блага, что оправдывает предоставление или финансирование блага государством.\n' +
        '(b) 1 балл: определение: общий ресурс (common pool resource) — конкурентный (использование уменьшает запас для других) и неисключаемый (открытый доступ) ресурс, которым никто не владеет.\n' +
        '(b) 1 балл: при открытом доступе каждый пользователь не учитывает издержки сокращения запаса для других, поэтому ресурс перерасходуется.\n' +
        '(b) 1 балл: равновесие при открытом доступе находится там, где общая выручка равна общим издержкам; это усилие больше социально оптимального, при котором максимальна прибыль.\n' +
        '(b) 1 балл: квоты ограничивают общий улов, что может дать запасам восстановиться, но требуют контроля и соблюдения, а рыбаки могут нарушать правила.\n' +
        '(b) 1 балл: права частной собственности, например индивидуальные передаваемые квоты или права на лов, стимулируют владельцев сохранять ресурс, потому что будущая ценность запаса принадлежит им.\n' +
        '(b) 1 балл: торгуемые разрешения создают рынок права на улов: самые дешёвые рыбаки сокращают улов, и цель достигается с наименьшими издержками.\n' +
        '(b) 1 балл: налог на улов повышает издержки лова и сокращает усилия, но государство должно установить правильный уровень налога, а его трудно определить.\n' +
        '(b) 1 балл: государственное управление связано с проблемами информации и издержек, поскольку государство может не знать устойчивого объёма улова.\n' +
        '(b) 1 балл: эффект для справедливости: квоты или права собственности могут сосредоточить ресурс в немногих руках и исключить мелких рыбаков.\n' +
        '(b) 1 балл: пример из реальной жизни конкретен и точен (например, коллапс запаса атлантической трески или национальная система квот) и связан с перерасходом ресурса.\n' +
        '(b) 1 балл, ограниченное обоснование (limited reasoning): сформулировано ясное суждение о том, должно ли государство или права собственности управлять ресурсом.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): суждение подкреплено доводом о временном периоде: квоты могут ограничить улов сейчас, а права собственности защищают запас в долгосрочном периоде.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): второй довод связан с заинтересованными сторонами: доходы рыбаков, интересы потребителей и будущие поколения.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): взвешены обе стороны: права собственности дают сильные стимулы, но могут сконцентрировать доход, а квоты могут не соблюдаться.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): суждение зависит от названных условий (возможность защиты прав, качество научных данных, масштаб незаконного лова) и приводит к обоснованному выводу.',
    },
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-07',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['competitive-market-equilibrium', 'government-taxes-subsidies-price-controls'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain, using a diagram, how a maximum price set below the equilibrium price affects the market for rented housing in a city. [10 marks]\n' +
        '(b) Discuss whether governments should use price controls, rather than other policies, to make essential goods and services affordable for low-income households. Use a real-world example. [15 marks]',
      ru: '(a) Используя диаграмму, объясните, как максимальная цена (maximum price), установленная ниже равновесной цены, влияет на рынок арендуемого жилья в городе. [10 баллов]\n' +
        '(b) Обсудите, должны ли правительства использовать регулирование цен (price controls), а не другие меры, чтобы сделать товары и услуги первой необходимости доступными для домохозяйств с низким доходом. Используйте пример из реальной жизни. [15 баллов]',
    },
    hints: [
      {
        en: 'Definitions: equilibrium (quantity demanded equals quantity supplied); maximum price or price ceiling (a legal upper limit on price); minimum price or price floor (a legal lower limit on price); shortage (quantity demanded is greater than quantity supplied at a price); surplus (quantity supplied is greater than quantity demanded); price controls (government limits on prices).',
        ru: 'Определения: равновесие (equilibrium) — величина спроса равна величине предложения; максимальная цена (maximum price, price ceiling) — законное ограничение цены сверху; минимальная цена (minimum price, price floor) — законное ограничение цены снизу; дефицит (shortage) — величина спроса выше величины предложения при данной цене; избыток (surplus) — величина предложения выше величины спроса; регулирование цен (price controls) — ограничения цен со стороны государства.',
      },
      {
        en: 'Diagram: demand D and supply S cross at the equilibrium E with price Pe and quantity Qe; draw a maximum price line Pmax below Pe; at Pmax the quantity demanded is greater than the quantity supplied, so the shortage is the horizontal gap; the quantity traded falls to the quantity supplied at Pmax; shade the deadweight loss triangle.',
        ru: 'Диаграмма: спрос D и предложение S пересекаются в точке равновесия E с ценой Pe и количеством Qe; проведите линию максимальной цены Pmax ниже Pe; при Pmax величина спроса больше величины предложения, поэтому дефицит — горизонтальный разрыв; объём сделок падает до величины предложения при Pmax; заштрихуйте треугольник потерь общества.',
      },
      {
        en: 'Real-world example: rent controls in a city, where landlords cut the supply of rented flats, or a minimum price for an agricultural product. Describe the market in general terms and state which group gains and which group loses.',
        ru: 'Пример из реальной жизни: ограничение арендной платы в городе, где арендодатели сокращают предложение квартир, или минимальная цена на сельскохозяйственный продукт. Опишите рынок в общих чертах и укажите, какая группа выигрывает, а какая проигрывает.',
      },
      {
        en: 'Evaluation: short run versus long run (the shortage appears at once, while supply falls and quality declines over time); stakeholders (tenants, landlords, new entrants, government); assumptions (the controlled price is enforced and supply responds to price); priorities (affordability against efficiency); alternatives (subsidies, social housing, cash transfers that keep the market price).',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (дефицит появляется сразу, а предложение падает и качество ухудшается со временем); заинтересованные стороны (арендаторы, арендодатели, новые участники рынка, государство); допущения (контролируемая цена соблюдается, предложение реагирует на цену); приоритеты (доступность против эффективности); альтернативы (субсидии, социальное жильё, денежные трансферты, которые сохраняют рыночную цену).',
      },
    ],
    markscheme: {
      en: '(a) 1 mark: definition: equilibrium is where quantity demanded equals quantity supplied; a maximum price (price ceiling) is a legal upper limit on the price.\n' +
        '(a) 1 mark: a maximum price set below the equilibrium price means quantity demanded is greater than quantity supplied, so there is a shortage.\n' +
        '(a) 1 mark: labelled diagram: demand D and supply S, equilibrium E at Pe and Qe, the maximum price Pmax below Pe, and the shortage between the two quantities at Pmax.\n' +
        '(a) 1 mark: the quantity traded falls to the quantity supplied at Pmax, which is less than the equilibrium quantity Qe.\n' +
        '(a) 1 mark: tenants who find a flat pay a lower rent, so their consumer surplus rises, but not every tenant can find housing.\n' +
        '(a) 1 mark: landlords receive a lower price, so producer surplus falls and some landlords supply fewer flats or leave the market.\n' +
        '(a) 1 mark: the shortage has to be rationed by queues, waiting lists or other criteria, so price no longer allocates the flats.\n' +
        '(a) 1 mark: the deadweight loss arises because some flats that tenants value above the cost of supply are not rented out.\n' +
        '(a) 1 mark: the price mechanism no longer clears the market, so the allocation of housing is inefficient.\n' +
        '(a) 1 mark: link to the city: lower rents help some tenants now, but the supply of new rented housing falls over time, which worsens the shortage.\n' +
        '(b) 1 mark: definition: price controls are government interventions in prices, either a maximum price (ceiling) or a minimum price (floor).\n' +
        '(b) 1 mark: a maximum price makes essential goods more affordable in the short run, which improves equity for low-income households.\n' +
        '(b) 1 mark: in the long run the shortage tends to grow, because suppliers reduce supply and maintenance, so the quality of the good falls.\n' +
        '(b) 1 mark: when the controlled price is below the market-clearing price, a black market may appear, with illegal sales at higher prices.\n' +
        '(b) 1 mark: direct provision or subsidies, such as social housing or a subsidy to producers, increase supply or reduce cost without distorting the market price.\n' +
        '(b) 1 mark: cash transfers or income support target households in need and keep the market price, so the shortage does not arise.\n' +
        '(b) 1 mark: the size of the shortage depends on the elasticities: when demand and supply are both elastic, a given ceiling creates a larger shortage.\n' +
        '(b) 1 mark: the deadweight loss from the shortage is the welfare loss from units that are not traded although buyers value them above the cost of supply.\n' +
        '(b) 1 mark: the government must enforce the controls, and enforcement costs and inefficiency arise.\n' +
        '(b) 1 mark: the real-world example is specific and accurate (for instance rent control in a city or a minimum price for a farm product) and is used to test the argument.\n' +
        '(b) 1 mark, limited reasoning: a clear judgement is stated on whether price controls should be preferred to other policies.\n' +
        '(b) 1 mark, appropriate reasoning: the judgement is supported by a time-period reason: the controls help now, but the shortage and falling quality appear over time.\n' +
        '(b) 1 mark, appropriate reasoning: a second reason is linked to stakeholders: the tenants who gain, the landlords who lose, and the government that bears enforcement costs.\n' +
        '(b) 1 mark, effective and balanced reasoning: both sides are weighed: controls protect affordability but create shortages, and cash transfers may achieve the aim with fewer distortions.\n' +
        '(b) 1 mark, effective and balanced reasoning: the judgement depends on named conditions (the elasticity of supply, the availability of alternative policies, the quality of enforcement) and gives a reasoned conclusion.',
      ru: '(a) 1 балл: определение: равновесие — состояние, при котором величина спроса равна величине предложения; максимальная цена (maximum price, price ceiling) — законное ограничение цены сверху.\n' +
        '(a) 1 балл: максимальная цена ниже равновесной означает, что величина спроса выше величины предложения, то есть возникает дефицит.\n' +
        '(a) 1 балл: диаграмма с подписанными элементами: спрос D и предложение S, равновесие E при Pe и Qe, максимальная цена Pmax ниже Pe, дефицит между величинами спроса и предложения при Pmax.\n' +
        '(a) 1 балл: объём сделок падает до величины предложения при Pmax, которая меньше равновесного объёма Qe.\n' +
        '(a) 1 балл: арендаторы, которым удалось снять квартиру, платят меньшую арендную плату, поэтому их излишек потребителя растёт, но не каждый арендатор может найти жильё.\n' +
        '(a) 1 балл: арендодатели получают более низкую цену, поэтому излишек производителя падает, и часть из них предлагает меньше квартир или уходит с рынка.\n' +
        '(a) 1 балл: дефицит приходится распределять через очереди, листы ожидания или другие критерии, поэтому цена больше не распределяет квартиры.\n' +
        '(a) 1 балл: потери общества (deadweight loss) возникают потому, что часть квартир, которые арендаторы оценивают выше издержек предложения, не сдаётся.\n' +
        '(a) 1 балл: рыночный механизм уже не уравновешивает рынок, поэтому распределение жилья неэффективно.\n' +
        '(a) 1 балл: связь с городом: более низкая аренда помогает части арендаторов сейчас, но предложение нового арендного жилья падает со временем, и дефицит усиливается.\n' +
        '(b) 1 балл: определение: регулирование цен (price controls) — вмешательство государства в цены: максимальная цена (ценовой потолок) или минимальная цена (ценовой пол).\n' +
        '(b) 1 балл: максимальная цена делает товары первой необходимости доступнее в краткосрочном периоде, что повышает справедливость для домохозяйств с низким доходом.\n' +
        '(b) 1 балл: в долгосрочном периоде дефицит, как правило, растёт, потому что поставщики сокращают предложение и ремонт, поэтому качество товара падает.\n' +
        '(b) 1 балл: если контролируемая цена ниже рыночной, может возникнуть чёрный рынок с нелегальными продажами по более высоким ценам.\n' +
        '(b) 1 балл: прямое предоставление жилья или субсидии, например социальное жильё или субсидия производителям, увеличивают предложение или снижают издержки, не искажая рыночную цену.\n' +
        '(b) 1 балл: денежные трансферты или поддержка доходов адресно помогают нуждающимся домохозяйствам и сохраняют рыночную цену, поэтому дефицит не возникает.\n' +
        '(b) 1 балл: размер дефицита зависит от эластичностей: при эластичных спросе и предложении заданный потолок создаёт больший дефицит.\n' +
        '(b) 1 балл: потери общества от дефицита — это потери благосостояния из-за сделок, которые не происходят, хотя покупатели оценивают товар выше издержек предложения.\n' +
        '(b) 1 балл: государство должно контролировать соблюдение ограничений; возникают издержки контроля и неэффективность.\n' +
        '(b) 1 балл: пример из реальной жизни конкретен и точен (например, ограничение арендной платы в городе или минимальная цена на сельскохозяйственный продукт) и используется для проверки аргумента.\n' +
        '(b) 1 балл, ограниченное обоснование (limited reasoning): сформулировано ясное суждение о том, следует ли отдавать предпочтение регулированию цен перед другими мерами.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): суждение подкреплено доводом о временном периоде: ограничения помогают сейчас, но дефицит и падение качества проявляются со временем.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): второй довод связан с заинтересованными сторонами: арендаторы, которые выигрывают, арендодатели, которые теряют, и государство, которое несёт издержки контроля.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): взвешены обе стороны: контроль цен защищает доступность, но создаёт дефицит, а денежные трансферты могут достичь цели с меньшими искажениями.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): суждение зависит от названных условий (эластичность предложения, наличие альтернативных мер, качество контроля) и приводит к обоснованному выводу.',
    },
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-08',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['income-and-cross-elasticity', 'price-elasticity-of-demand'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how income elasticity of demand (YED) and cross elasticity of demand (XED) show whether goods are normal, inferior, substitutes or complements. [10 marks]\n' +
        '(b) Using a real-world example, discuss how useful the price elasticity of demand (PED) and the income elasticity of demand (YED) are to a firm and to a government when they make decisions about prices and taxes. [15 marks]',
      ru: '(a) Объясните, как доходная эластичность спроса (income elasticity of demand, YED) и перекрёстная эластичность спроса (cross-price elasticity of demand, XED) показывают, являются ли товары нормальными, инфериорными, заменителями или взаимодополняющими. [10 баллов]\n' +
        '(b) Используя пример из реальной жизни, обсудите, насколько полезны ценовая эластичность спроса (PED) и доходная эластичность спроса (YED) фирме, которая назначает цены, и государству, которое принимает решения о налогах. [15 баллов]',
    },
    hints: [
      {
        en: 'Definitions: YED is the percentage change in quantity demanded divided by the percentage change in income; XED is the percentage change in quantity demanded of good A divided by the percentage change in the price of good B; a normal good has positive YED; an inferior good has negative YED; substitutes have positive XED; complements have negative XED.',
        ru: 'Определения: доходная эластичность спроса (income elasticity of demand, YED) — процентное изменение величины спроса, делённое на процентное изменение дохода; перекрёстная эластичность спроса (cross-price elasticity of demand, XED) — процентное изменение спроса на товар A, делённое на процентное изменение цены товара B; нормальное благо (normal good) имеет положительную YED; инфериорное благо (inferior good) — отрицательную YED; заменители (substitutes) — положительную XED; взаимодополняющие товары (complements) — отрицательную XED.',
      },
      {
        en: 'Diagram: for a normal good the demand curve shifts to the right when income rises, and for an inferior good it shifts to the left. For XED: when the price of a substitute rises, the demand curve for the good shifts to the right; when the price of a complement rises, it shifts to the left.',
        ru: 'Диаграмма: для нормального блага кривая спроса сдвигается вправо при росте дохода, а для инфериорного — влево. Для XED: при росте цены заменителя кривая спроса на товар сдвигается вправо; при росте цены взаимодополняющего товара — влево.',
      },
      {
        en: 'Real-world example: a bus service and the price of car fuel (substitutes), a branded product and an own-label product, or the demand for public transport as incomes change. Use the sign and size of the elasticity to classify the goods.',
        ru: 'Пример из реальной жизни: автобус и цена автомобильного топлива (заменители), фирменный товар и товар собственной марки, спрос на общественный транспорт при изменении доходов. Используйте знак и величину эластичности, чтобы классифицировать товары.',
      },
      {
        en: 'Evaluation: short run versus long run (demand for a luxury or a substitute may become more elastic over time as consumers find alternatives); stakeholders (firms, consumers, government, low-income households); assumptions (ceteris paribus, stable elasticities and accurate data); priorities (revenue, market share and income distribution); uses for firms (pricing, forecasting, product design) and for government (tax revenue, welfare policy).',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (спрос на предметы роскоши или на товар-заменитель может со временем стать более эластичным, так как потребители находят альтернативы); заинтересованные стороны (фирмы, потребители, государство, домохозяйства с низким доходом); допущения (при прочих равных, устойчивость эластичностей, точность данных); приоритеты (выручка, доля рынка и распределение доходов); применение для фирм (ценообразование, прогноз, дизайн продукта) и для государства (налоговые поступления, социальная политика).',
      },
    ],
    markscheme: {
      en: '(a) 1 mark: definition: YED is the percentage change in quantity demanded divided by the percentage change in income.\n' +
        '(a) 1 mark: a normal good has positive YED, so demand rises as income rises.\n' +
        '(a) 1 mark: an inferior good has negative YED, so demand falls as income rises.\n' +
        '(a) 1 mark: a necessity has YED between 0 and 1, and a luxury has YED greater than 1 (demand rises more than proportionally with income).\n' +
        '(a) 1 mark: definition: XED is the percentage change in quantity demanded of good A divided by the percentage change in the price of good B.\n' +
        '(a) 1 mark: substitutes have positive XED: when the price of B rises, demand for A rises as consumers switch to A.\n' +
        '(a) 1 mark: complements have negative XED: when the price of B rises, demand for A falls because the two goods are used together.\n' +
        '(a) 1 mark: the size of XED shows how closely related the goods are: a large positive value means close substitutes, and a value close to zero means weak links.\n' +
        '(a) 1 mark: diagram: the demand curve of a normal good shifts right when income rises; the curve of an inferior good shifts left.\n' +
        '(a) 1 mark: application: a clearly stated example (for instance a bus service and car fuel, or two brands) with a correct sign and reasoning.\n' +
        '(b) 1 mark: definition: PED is the responsiveness of quantity demanded to a change in the price of the good itself; YED is the responsiveness of quantity demanded to a change in income.\n' +
        '(b) 1 mark: for a firm, PED shows the effect of a price change on total revenue: when demand is inelastic, a price rise increases total revenue.\n' +
        '(b) 1 mark: a firm that knows its YED can forecast how economic growth will change demand for its product, which helps it plan production and investment.\n' +
        '(b) 1 mark: a firm that sells an inferior good may gain in a recession, but it may lose sales when incomes rise; the YED informs its product strategy.\n' +
        '(b) 1 mark: a firm can use the XED to judge the threat from rivals: a high positive XED means it must match the price of close substitutes.\n' +
        '(b) 1 mark: a government that taxes a good can estimate the revenue from PED: a tax on an inelastic good raises more revenue with a smaller fall in consumption.\n' +
        '(b) 1 mark: a government uses YED to predict how income changes affect demand for goods such as public transport or cheap food, which informs welfare policy.\n' +
        '(b) 1 mark: a tax on an inelastic necessity may have regressive effects, so PED and YED help to assess the distribution effect.\n' +
        '(b) 1 mark: limitations: elasticities are estimated from past data, they change over time, and the ceteris paribus condition rarely holds in practice.\n' +
        '(b) 1 mark: the real-world example is specific and accurate and is used to show how the elasticity information changes the decision.\n' +
        '(b) 1 mark, limited reasoning: a clear judgement is stated on how useful the elasticity information is for the firm and for the government.\n' +
        '(b) 1 mark, appropriate reasoning: the judgement is supported by a time-period reason: elasticities may change over time, so forecasts are less reliable in the long run.\n' +
        '(b) 1 mark, appropriate reasoning: a second reason is linked to stakeholders: firms seek revenue and market share, while the government seeks tax revenue and fairness.\n' +
        '(b) 1 mark, effective and balanced reasoning: both sides are weighed: information helps decisions, but estimates may be wrong, and a government tax may hurt low-income households.\n' +
        '(b) 1 mark, effective and balanced reasoning: the judgement depends on named conditions (the quality of data, the number of substitutes, the stability of incomes) and gives a reasoned conclusion.',
      ru: '(a) 1 балл: определение: доходная эластичность спроса (YED) — процентное изменение величины спроса, делённое на процентное изменение дохода.\n' +
        '(a) 1 балл: у нормального блага YED положительна: спрос растёт по мере роста дохода.\n' +
        '(a) 1 балл: у инфериорного блага YED отрицательна: спрос падает по мере роста дохода.\n' +
        '(a) 1 балл: у предмета первой необходимости YED находится между 0 и 1, а у предмета роскоши YED больше 1 (спрос растёт быстрее дохода).\n' +
        '(a) 1 балл: определение: перекрёстная эластичность спроса (XED) — процентное изменение величины спроса на товар A, делённое на процентное изменение цены товара B.\n' +
        '(a) 1 балл: у заменителей XED положительна: когда цена товара B растёт, спрос на A растёт, потому что потребители переходят на A.\n' +
        '(a) 1 балл: у взаимодополняющих товаров XED отрицательна: когда цена товара B растёт, спрос на A падает, так как товары потребляются вместе.\n' +
        '(a) 1 балл: величина XED показывает, насколько тесно связаны товары: большое положительное значение означает близких заменителей, а значение около нуля — слабую связь.\n' +
        '(a) 1 балл: диаграмма: кривая спроса на нормальное благо сдвигается вправо при росте дохода, а кривая инфериорного блага — влево.\n' +
        '(a) 1 балл: применение: ясно названный пример (например, автобус и топливо для автомобиля или два бренда) с верным знаком и обоснованием.\n' +
        '(b) 1 балл: определение: ценовая эластичность спроса (PED) показывает, насколько величина спроса реагирует на изменение цены самого товара; YED — на изменение дохода.\n' +
        '(b) 1 балл: для фирмы PED показывает, как изменение цены влияет на общую выручку: при неэластичном спросе рост цены увеличивает выручку.\n' +
        '(b) 1 балл: фирма использует YED, чтобы прогнозировать влияние экономического роста на спрос на её продукцию, что помогает планировать производство и инвестиции.\n' +
        '(b) 1 балл: фирма, продающая инфериорный товар, может выиграть в рецессию, но потерять продажи при росте доходов; YED помогает выбрать товарную стратегию.\n' +
        '(b) 1 балл: фирма использует XED, чтобы оценить угрозу со стороны конкурентов: высокая положительная XED означает, что нужно следовать за ценами близких заменителей.\n' +
        '(b) 1 балл: государство, облагающее товар налогом, оценивает доходы по PED: налог на неэластичный товар приносит больше доходов при меньшем падении потребления.\n' +
        '(b) 1 балл: государство использует YED, чтобы предсказать влияние изменения доходов на спрос на общественный транспорт или дешёвые продукты, что важно для социальной политики.\n' +
        '(b) 1 балл: налог на неэластичный предмет первой необходимости может иметь регрессивные последствия, поэтому PED и YED помогают оценить распределительный эффект.\n' +
        '(b) 1 балл: ограничения: эластичности оцениваются по прошлым данным, меняются со временем, а условие «при прочих равных» на практике редко выполняется.\n' +
        '(b) 1 балл: пример из реальной жизни конкретен и точен и показывает, как информация об эластичности меняет решение.\n' +
        '(b) 1 балл, ограниченное обоснование (limited reasoning): сформулировано ясное суждение о том, насколько полезна информация об эластичности фирме и государству.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): суждение подкреплено доводом о временном периоде: эластичности могут меняться, поэтому прогнозы в долгосрочном периоде менее надёжны.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): второй довод связан с заинтересованными сторонами: фирмы стремятся к выручке и доле рынка, государство — к налоговым поступлениям и справедливости.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): взвешены обе стороны: информация помогает принимать решения, но оценки могут быть ошибочными, а налог государства может ударить по домохозяйствам с низким доходом.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): суждение зависит от названных условий (качество данных, число заменителей, устойчивость доходов) и приводит к обоснованному выводу.',
    },
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-09',
    subject: 'econ',
    topicIds: ['measuring-economic-activity', 'ad-as-model-and-business-cycle'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain, using the aggregate demand and aggregate supply model, how a fall in consumer spending during a recession affects real GDP and the price level in the short run. [10 marks]\n' +
        '(b) Using a real-world example, discuss whether a rise in real GDP shows that the living standards of the people in a country have improved. [15 marks]',
      ru: '(a) Используя модель совокупного спроса и совокупного предложения (aggregate demand and aggregate supply, AD-AS), объясните, как падение потребительских расходов во время рецессии влияет на реальный ВВП (real GDP) и уровень цен в краткосрочном периоде. [10 баллов]\n' +
        '(b) Используя пример из реальной жизни, обсудите, показывает ли рост реального ВВП, что уровень жизни людей в стране улучшился. [15 баллов]',
    },
    hints: [
      {
        en: 'Definitions: real GDP (the value of final goods and services at constant prices); nominal GDP (the value at current prices); aggregate demand (AD = C + I + G + (X - M)); aggregate supply (the output firms are willing to supply at each price level); output gap (actual output minus potential output, as a percentage of potential output); business cycle (fluctuations of output around its trend).',
        ru: 'Определения: реальный ВВП (real GDP) — стоимость конечных товаров и услуг в постоянных ценах; номинальный ВВП (nominal GDP) — стоимость в текущих ценах; совокупный спрос (aggregate demand, AD) — C + I + G + (X - M); совокупное предложение (aggregate supply, AS) — объём выпуска, который фирмы готовы предложить при каждом уровне цен; разрыв выпуска (output gap) — фактический минус потенциальный выпуск в процентах от потенциального; деловой цикл (business cycle) — колебания выпуска вокруг тренда.',
      },
      {
        en: 'Diagram: AD shifts left after the fall in consumption (C); SRAS slopes upwards; the new short-run equilibrium has a lower real GDP and a lower price level; LRAS marks the potential output, so the output gap is negative (a deflationary gap).',
        ru: 'Диаграмма: AD сдвигается влево после падения потребления (C); SRAS наклонена вверх; новое краткосрочное равновесие имеет меньший реальный ВВП и более низкий уровень цен; LRAS отмечает потенциальный выпуск, поэтому разрыв выпуска отрицательный (дефляционный разрыв).',
      },
      {
        en: 'Real-world example: a recession after a financial crisis, such as the global financial crisis, or a fall in demand after a major shock. Describe the event in general terms and show how consumer spending fell.',
        ru: 'Пример из реальной жизни: рецессия после финансового кризиса, например глобального финансового кризиса, или падение спроса после крупного шока. Опишите событие в общих чертах и покажите, как упали потребительские расходы.',
      },
      {
        en: 'Evaluation: short run versus long run (the economy may recover as wages and prices adjust, but this can take years and cause unemployment); stakeholders (workers who lose jobs, households, firms, government); assumptions (prices and wages adjust slowly); GDP limitations (non-market activity, the informal economy, the environment, the distribution of income, quality of life); priorities (growth, employment, inflation, equity).',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (экономика может восстановиться по мере того, как зарплаты и цены приспосабливаются, но это может занять годы и вызвать безработицу); заинтересованные стороны (работники, потерявшие работу, домохозяйства, фирмы, государство); допущения (цены и зарплаты корректируются медленно); ограничения ВВП (неучтённая деятельность вне рынка, неформальная экономика, окружающая среда, распределение доходов, качество жизни); приоритеты (рост, занятость, инфляция, справедливость).',
      },
    ],
    markscheme: {
      en: '(a) 1 mark: definition: aggregate demand is total planned expenditure on final goods and services in the economy, AD = C + I + G + (X - M).\n' +
        '(a) 1 mark: a fall in consumer spending (C) shifts the AD curve to the left.\n' +
        '(a) 1 mark: labelled AD/AS diagram: price level on the vertical axis, real GDP on the horizontal axis, SRAS upward sloping, AD1 and AD2, and LRAS at potential output.\n' +
        '(a) 1 mark: in the short run the new equilibrium has a lower price level and a lower real GDP than before.\n' +
        '(a) 1 mark: real GDP falls below potential output, so the output gap is negative (a deflationary gap).\n' +
        '(a) 1 mark: lower output means lower incomes for firms and households, so firms cut investment and workers may lose their jobs.\n' +
        '(a) 1 mark: the lower price level results from falling demand: firms cut prices to sell unsold stock.\n' +
        '(a) 1 mark: real GDP falls because the quantity of output falls, not only because prices change, since real GDP is measured at constant prices.\n' +
        '(a) 1 mark: in the long run wages and costs fall, SRAS shifts right, and output returns to potential at a lower price level.\n' +
        '(a) 1 mark: link to the business cycle: the recession is the downward phase of the cycle, with lower output and higher unemployment.\n' +
        '(b) 1 mark: definition: real GDP is the value of output adjusted for inflation, so it measures the volume of production over time.\n' +
        '(b) 1 mark: a rise in real GDP means more goods and services are produced in total, but it does not show how the output is shared among people.\n' +
        '(b) 1 mark: GDP per capita adjusts for population growth and gives a better guide to average living standards than total GDP.\n' +
        '(b) 1 mark: GDP excludes non-market activity such as unpaid household work and voluntary work, so living standards may be understated.\n' +
        '(b) 1 mark: the informal economy is not fully measured, so real GDP may miss part of the activity in some countries.\n' +
        '(b) 1 mark: environmental damage is not subtracted from GDP, so GDP may rise while the quality of life falls because of pollution.\n' +
        '(b) 1 mark: the distribution of income matters: if growth benefits the richest households most, the average may rise while many households are no better off.\n' +
        '(b) 1 mark: over the business cycle a recovery raises real GDP by closing a negative output gap, which is not the same as a rise in potential output or living standards.\n' +
        '(b) 1 mark: if inflation outpaces wages, real incomes fall even when real GDP grows.\n' +
        '(b) 1 mark: the real-world example is specific and accurate (a named country, a period, GDP per capita or inequality data described in general terms) and is used to test the argument.\n' +
        '(b) 1 mark, limited reasoning: a clear judgement is stated on whether a rise in real GDP shows that living standards have improved.\n' +
        '(b) 1 mark, appropriate reasoning: the judgement is supported by a time-period reason: a recovery may only restore lost output, while living standards need sustained growth in potential output.\n' +
        '(b) 1 mark, appropriate reasoning: a second reason is linked to stakeholders, such as how the gains from growth are shared between households, firms and the government.\n' +
        '(b) 1 mark, effective and balanced reasoning: both sides are weighed: real GDP growth raises the resources available, but it may ignore inequality, the environment and unpaid work.\n' +
        '(b) 1 mark, effective and balanced reasoning: the judgement depends on named conditions (the use of GDP per capita, the distribution of income, the state of the output gap) and gives a reasoned conclusion.',
      ru: '(a) 1 балл: определение: совокупный спрос — это общие плановые расходы на конечные товары и услуги в экономике, AD = C + I + G + (X - M).\n' +
        '(a) 1 балл: падение потребительских расходов (C) сдвигает кривую AD влево.\n' +
        '(a) 1 балл: диаграмма AD/AS с подписанными осями: уровень цен по вертикали, реальный ВВП по горизонтали; SRAS наклонена вверх; AD1 и AD2; LRAS на уровне потенциального выпуска.\n' +
        '(a) 1 балл: в краткосрочном периоде новое равновесие имеет более низкий уровень цен и меньший реальный ВВП, чем раньше.\n' +
        '(a) 1 балл: реальный ВВП падает ниже потенциального выпуска, поэтому разрыв выпуска отрицательный (дефляционный разрыв).\n' +
        '(a) 1 балл: снижение выпуска означает меньшие доходы фирм и домохозяйств, поэтому фирмы сокращают инвестиции, а работники могут потерять работу.\n' +
        '(a) 1 балл: более низкий уровень цен вызван падением спроса: фирмы снижают цены, чтобы продать непроданные запасы.\n' +
        '(a) 1 балл: реальный ВВП падает, потому что снижается количество выпускаемых товаров, а не только цены, ведь реальный ВВП измеряется в постоянных ценах.\n' +
        '(a) 1 балл: в долгосрочном периоде зарплаты и издержки снижаются, SRAS сдвигается вправо, и выпуск возвращается к потенциальному уровню при более низком уровне цен.\n' +
        '(a) 1 балл: связь с деловым циклом: рецессия — это фаза спада цикла, с меньшим выпуском и более высокой безработицей.\n' +
        '(b) 1 балл: определение: реальный ВВП — стоимость выпуска, очищенная от инфляции, поэтому он измеряет объём производства во времени.\n' +
        '(b) 1 балл: рост реального ВВП означает, что в целом производится больше товаров и услуг, но не показывает, как этот выпуск распределяется между людьми.\n' +
        '(b) 1 балл: ВВП на душу населения учитывает рост населения и лучше отражает средний уровень жизни, чем общий ВВП.\n' +
        '(b) 1 балл: ВВП не учитывает деятельность вне рынка, например неоплачиваемую работу по дому и добровольный труд, поэтому уровень жизни может быть занижен.\n' +
        '(b) 1 балл: неформальная экономика учитывается не полностью, поэтому реальный ВВП в некоторых странах может не отражать часть деятельности.\n' +
        '(b) 1 балл: экологический ущерб не вычитается из ВВП, поэтому ВВП может расти, а качество жизни падать из-за загрязнения.\n' +
        '(b) 1 балл: важно распределение доходов: если рост выгоден в первую очередь самым богатым домохозяйствам, средний доход может расти, а многие домохозяйства не становятся богаче.\n' +
        '(b) 1 балл: в деловом цикле восстановление повышает реальный ВВП за счёт закрытия отрицательного разрыва выпуска; это не то же самое, что рост потенциального выпуска или уровня жизни.\n' +
        '(b) 1 балл: если инфляция опережает рост зарплат, реальные доходы домохозяйств падают, даже когда реальный ВВП растёт.\n' +
        '(b) 1 балл: пример из реальной жизни конкретен и точен (названная страна, период, ВВП на душу населения или данные о неравенстве, описанные в общих чертах) и используется для проверки аргумента.\n' +
        '(b) 1 балл, ограниченное обоснование (limited reasoning): сформулировано ясное суждение о том, показывает ли рост реального ВВП улучшение уровня жизни.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): суждение подкреплено доводом о временном периоде: восстановление может лишь вернуть утраченный выпуск, а уровень жизни требует устойчивого роста потенциального выпуска.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): второй довод связан с заинтересованными сторонами: как результаты роста делятся между домохозяйствами, фирмами и государством.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): взвешены обе стороны: рост реального ВВП увеличивает доступные ресурсы, но может не учитывать неравенство, экологию и неоплачиваемый труд.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): суждение зависит от названных условий (использование ВВП на душу населения, распределение доходов, состояние разрыва выпуска) и приводит к обоснованному выводу.',
    },
    origin: 'original',
    minutes: 25,
  },
  {
    id: 'p1-essay-10',
    subject: 'econ',
    topicIds: ['multiplier', 'fiscal-policy'],
    paper: 'P1',
    marks: 25,
    command: 'Explain / Discuss',
    prompt: {
      en: '(a) Explain how an increase in government spending on infrastructure can lead to a larger increase in national income, using the multiplier. [10 marks]\n' +
        '(b) Discuss whether expansionary fiscal policy is an effective way to reduce unemployment in an economy that is already close to full employment. Use a real-world example. [15 marks]',
      ru: '(a) Объясните, как рост государственных расходов на инфраструктуру может привести к более значительному росту национального дохода, используя мультипликатор (multiplier). [10 баллов]\n' +
        '(b) Обсудите, является ли экспансионистская фискальная политика (expansionary fiscal policy) эффективным способом сократить безработицу в экономике, которая уже близка к полной занятости. Используйте пример из реальной жизни. [15 баллов]',
    },
    hints: [
      {
        en: 'Definitions: the multiplier is the ratio of the change in national income to the initial change in an injection; marginal propensity to consume (MPC) is the share of extra income spent on consumption; leakages are savings, taxes and imports; injections are investment, government spending and exports; fiscal policy is government spending and taxation used to influence aggregate demand.',
        ru: 'Определения: мультипликатор (multiplier) — отношение изменения национального дохода к первоначальному изменению инъекции; предельная склонность к потреблению (marginal propensity to consume, MPC) — доля дополнительного дохода, которая тратится на потребление; утечки (leakages) — сбережения, налоги и импорт; инъекции (injections) — инвестиции, государственные расходы и экспорт; фискальная политика (fiscal policy) — государственные расходы и налоги, используемые для воздействия на совокупный спрос.',
      },
      {
        en: 'Diagram: a rise in government spending shifts AD to the right; in the Keynesian part of AS the rise in output is large; near full employment AS is steep, so most of the rise in AD raises the price level. Show the rounds of spending, with each round smaller than the one before because of leakages.',
        ru: 'Диаграмма: рост государственных расходов сдвигает AD вправо; в кейнсианской части AS рост выпуска значителен; вблизи полной занятости AS крутая, поэтому большая часть роста AD повышает уровень цен. Покажите раунды расходов: каждый следующий раунд меньше предыдущего из-за утечек.',
      },
      {
        en: 'Real-world example: an infrastructure programme in a city during a downturn, or a government stimulus after a recession. Describe the programme, the period and the effect on jobs and prices in general terms.',
        ru: 'Пример из реальной жизни: программа инфраструктурных инвестиций в городе во время спада или государственный стимул после рецессии. Опишите программу, период и влияние на занятость и цены в общих чертах.',
      },
      {
        en: 'Evaluation: short run versus long run (spending raises demand quickly, but projects take time, and the potential output may rise only in the long run); stakeholders (workers, taxpayers, firms, future generations); assumptions (the multiplier is stable and there is spare capacity); crowding out (higher government borrowing raises interest rates and reduces private investment); priorities (unemployment against inflation and the budget deficit).',
        ru: 'Оценка: краткосрочный и долгосрочный периоды (расходы быстро повышают спрос, но проекты требуют времени, а потенциальный выпуск может вырасти только в долгосрочном периоде); заинтересованные стороны (работники, налогоплательщики, фирмы, будущие поколения); допущения (мультипликатор стабилен и есть свободные мощности); эффект вытеснения (crowding out) — рост госзаимствований повышает процентные ставки и снижает частные инвестиции; приоритеты (безработица против инфляции и бюджетного дефицита).',
      },
    ],
    markscheme: {
      en: '(a) 1 mark: definition: the multiplier is the ratio of the change in national income to the initial change in an injection, such as government spending.\n' +
        '(a) 1 mark: definition: MPC is the proportion of an extra unit of income that households spend on consumption.\n' +
        '(a) 1 mark: the initial rise in government spending on infrastructure raises the incomes of construction firms and their workers.\n' +
        '(a) 1 mark: these firms and workers spend part of their extra income, which becomes income for other firms in the next round.\n' +
        '(a) 1 mark: savings, taxes and imports are leakages that take part of the income out of each round, so each round is smaller than the one before.\n' +
        '(a) 1 mark: the total change in national income equals the multiplier times the initial injection: change in Y = k times change in G.\n' +
        '(a) 1 mark: the multiplier formula is k = 1 / (MPS + MPT + MPM), so higher leakages give a smaller multiplier.\n' +
        '(a) 1 mark: labelled diagram: AD shifts right by more than the initial rise in government spending, because the rounds of extra spending add to demand.\n' +
        '(a) 1 mark: higher income raises consumption, so the rightward shift of AD is larger than the first round of spending.\n' +
        '(a) 1 mark: application: the infrastructure project creates jobs and orders for suppliers, so national income rises by a multiple of the spending.\n' +
        '(b) 1 mark: definition: expansionary fiscal policy raises government spending or cuts taxes to increase aggregate demand.\n' +
        '(b) 1 mark: near full employment there is little spare capacity, so the extra demand mostly raises the price level rather than output and jobs.\n' +
        '(b) 1 mark: the output gap is small, so the economy has little room to expand without inflation.\n' +
        '(b) 1 mark: a large multiplier raises income more, but high leakages (taxes and imports) reduce the multiplier and the effect on unemployment.\n' +
        '(b) 1 mark: crowding out: government borrowing raises interest rates, which reduces private investment and consumption, and offsets part of the rise in AD.\n' +
        '(b) 1 mark: a budget deficit increases national debt, which may raise future interest payments and future tax burdens.\n' +
        '(b) 1 mark: time lags: the decision, implementation and effect lags mean the spending may arrive when the economy has already recovered, which destabilises it.\n' +
        '(b) 1 mark: supply-side policies (education, training and infrastructure) raise potential output and reduce structural unemployment in the long run.\n' +
        '(b) 1 mark: distribution: spending on infrastructure creates jobs in construction, but tax cuts may benefit higher-income households more.\n' +
        '(b) 1 mark: the real-world example is specific and accurate and is used to show the effect on output, unemployment and the price level.\n' +
        '(b) 1 mark, limited reasoning: a clear judgement is stated on whether expansionary fiscal policy is effective when the economy is close to full employment.\n' +
        '(b) 1 mark, appropriate reasoning: the judgement is supported by a time-period reason: demand rises quickly, but time lags and inflation reduce the benefit in the short run, while infrastructure can raise potential output in the long run.\n' +
        '(b) 1 mark, appropriate reasoning: a second reason is linked to stakeholders: workers who gain jobs, taxpayers who fund the deficit and future generations who inherit the debt.\n' +
        '(b) 1 mark, effective and balanced reasoning: both sides are weighed: the policy can cut unemployment quickly, but near full employment it mainly raises inflation, and crowding out limits the gain.\n' +
        '(b) 1 mark, effective and balanced reasoning: the judgement depends on named conditions (the size of the output gap, the size of the multiplier, the way the spending is financed, business confidence) and gives a reasoned conclusion.',
      ru: '(a) 1 балл: определение: мультипликатор — отношение изменения национального дохода к первоначальному изменению инъекции, например государственных расходов.\n' +
        '(a) 1 балл: определение: MPC — доля дополнительного дохода домохозяйств, которую они тратят на потребление.\n' +
        '(a) 1 балл: первоначальный рост госрасходов на инфраструктуру повышает доходы строительных фирм и их работников.\n' +
        '(a) 1 балл: эти фирмы и работники тратят часть дополнительного дохода, который становится доходом других фирм в следующем раунде.\n' +
        '(a) 1 балл: сбережения, налоги и импорт — утечки, которые выводят часть дохода из каждого раунда, поэтому каждый раунд меньше предыдущего.\n' +
        '(a) 1 балл: общее изменение национального дохода равно мультипликатору, умноженному на первоначальную инъекцию: изменение Y = k, умноженное на изменение G.\n' +
        '(a) 1 балл: формула мультипликатора k = 1 / (MPS + MPT + MPM), поэтому чем выше утечки, тем меньше мультипликатор.\n' +
        '(a) 1 балл: диаграмма: AD сдвигается вправо больше, чем на первоначальный рост госрасходов, потому что раунды дополнительных расходов добавляют спрос.\n' +
        '(a) 1 балл: более высокий доход увеличивает потребление, поэтому сдвиг AD вправо больше первого раунда расходов.\n' +
        '(a) 1 балл: применение: инфраструктурный проект создаёт рабочие места и заказы поставщикам, поэтому национальный доход растёт кратно расходам.\n' +
        '(b) 1 балл: определение: экспансионистская фискальная политика — рост госрасходов или снижение налогов для повышения совокупного спроса.\n' +
        '(b) 1 балл: вблизи полной занятости свободных ресурсов мало, поэтому дополнительный спрос в основном повышает уровень цен, а не выпуск и рабочие места.\n' +
        '(b) 1 балл: разрыв выпуска невелик, поэтому у экономики мало возможностей расшириться без инфляции.\n' +
        '(b) 1 балл: высокий мультипликатор увеличивает доходы сильнее, но высокие утечки (налоги и импорт) снижают мультипликатор и эффект для занятости.\n' +
        '(b) 1 балл: эффект вытеснения (crowding out): госзаимствования повышают процентные ставки, что сокращает частные инвестиции и потребление и частично компенсирует рост AD.\n' +
        '(b) 1 балл: бюджетный дефицит увеличивает государственный долг, что может повысить будущие процентные платежи и налоговое бремя.\n' +
        '(b) 1 балл: временные лаги: задержки решения, реализации и действия означают, что расходы могут прийти тогда, когда экономика уже восстановилась, и это дестабилизирует её.\n' +
        '(b) 1 балл: политика предложения (образование, обучение, инфраструктура) повышает потенциальный выпуск и снижает структурную безработицу в долгосрочном периоде.\n' +
        '(b) 1 балл: распределение: расходы на инфраструктуру создают рабочие места в строительстве, но снижение налогов может в большей степени помочь домохозяйствам с высокими доходами.\n' +
        '(b) 1 балл: пример из реальной жизни конкретен и точен и используется для показа эффекта на выпуск, безработицу и уровень цен.\n' +
        '(b) 1 балл, ограниченное обоснование (limited reasoning): сформулировано ясное суждение о том, эффективна ли экспансионистская фискальная политика вблизи полной занятости.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): суждение подкреплено доводом о временном периоде: спрос растёт быстро, но временные лаги и инфляция снижают выгоду в краткосрочном периоде, а инфраструктура может повысить потенциальный выпуск в долгосрочном.\n' +
        '(b) 1 балл, уместное обоснование (appropriate reasoning): второй довод связан с заинтересованными сторонами: работники, получившие работу, налогоплательщики, которые финансируют дефицит, и будущие поколения, которые унаследуют долг.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): взвешены обе стороны: политика может быстро снизить безработицу, но вблизи полной занятости в основном повышает инфляцию, а эффект вытеснения ограничивает выигрыш.\n' +
        '(b) 1 балл, эффективное и взвешенное обоснование (effective and balanced reasoning): суждение зависит от названных условий (величина разрыва выпуска, размер мультипликатора, способ финансирования расходов, доверие бизнеса) и приводит к обоснованному выводу.',
    },
    origin: 'original',
    minutes: 25,
  },
];
