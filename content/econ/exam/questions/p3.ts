import type { Question } from '../../../../src/contract/types';

// EX-3 practice: P3 policy sets 01 to 04 (40 marks, 60 minutes each; longer than the school mock in p3-mock.ts).
// Tasks (a) to (d) are worth 30 marks and task (e) is worth 10 marks; the markscheme has one line per mark.
// All numbers are invented and labelled as illustrative data. The places (Ardmoor, Lorania, Tarnovia, Halvary) are fictional.
// The data are written as bullet lists because the portal renders no tables.
// Each calculation has an entry in scripts/econ-checks/exam-p3.json (expect_in: markscheme.en and markscheme.ru).

export const questions: Question[] = [
  {
    id: 'p3-set-01',
    subject: 'econ',
    topicIds: ['externalities', 'government-taxes-subsidies-price-controls'],
    paper: 'P3',
    marks: 40,
    command: 'Recommend',
    stimulus: {
      en: 'Ardmoor is a city of 2 million people (illustrative data). Traffic in the city centre is heavy at the morning peak. Each extra car trip slows other drivers, uses extra fuel and adds air pollution. These costs fall on other people, so drivers do not pay them.\n\n' +
        'The city council is considering a congestion charge of AED 10 per trip for private cars that enter the centre in the peak hour. Three options are being discussed:\n' +
        '- Option A: the charge of AED 10 per trip, with the revenue spent on road maintenance.\n' +
        '- Option B: a charge of AED 5 per trip, with the revenue spent on extra bus services.\n' +
        '- Option C: no charge, but a new road tunnel that costs AED 500 million, takes five years to build and may attract new traffic.\n\n' +
        'The transport department has produced the data below for the peak hour (illustrative data). Quantities are in thousand trips per hour; values are in AED per trip.\n' +
        '- 10 thousand trips: MPB 60, MPC 10, MEC 10, MSC 20\n' +
        '- 20 thousand trips: MPB 50, MPC 20, MEC 10, MSC 30\n' +
        '- 30 thousand trips: MPB 40, MPC 30, MEC 10, MSC 40\n' +
        '- 35 thousand trips: MPB 35, MPC 35, MEC 10, MSC 45\n' +
        '- 40 thousand trips: MPB 30, MPC 40, MEC 10, MSC 50\n' +
        '- 50 thousand trips: MPB 20, MPC 50, MEC 10, MSC 60\n\n' +
        'MPB is the marginal private benefit to drivers, MPC is the marginal private cost, MEC is the marginal external cost and MSC is the marginal social cost, where MSC = MPC + MEC. Assume that MPB is also the marginal social benefit (MSB).',
      ru: 'Ардмур — город с 2 миллионами жителей (иллюстративные данные). Утром, в час пик, в центре города много машин. Каждая дополнительная поездка на машине замедляет движение других водителей, тратит лишнее топливо и добавляет загрязнение воздуха. Эти издержки ложатся на других людей, поэтому водители за них не платят.\n\n' +
        'Городской совет рассматривает плату за въезд (congestion charge) в размере AED 10 за поездку для легковых машин, которые въезжают в центр в час пик. Обсуждаются три варианта:\n' +
        '- Вариант A: плата AED 10 за поездку; выручка идёт на ремонт дорог.\n' +
        '- Вариант B: плата AED 5 за поездку; выручка идёт на дополнительные автобусные маршруты.\n' +
        '- Вариант C: без платы, но строится новый тоннель стоимостью AED 500 млн. Строительство займёт пять лет, а тоннель может привлечь новый транспорт.\n\n' +
        'Данные транспортного департамента для часа пик (иллюстративные данные). Количество дано в тысячах поездок в час, значения — в AED за поездку:\n' +
        '- 10 тыс. поездок: MPB 60, MPC 10, MEC 10, MSC 20\n' +
        '- 20 тыс. поездок: MPB 50, MPC 20, MEC 10, MSC 30\n' +
        '- 30 тыс. поездок: MPB 40, MPC 30, MEC 10, MSC 40\n' +
        '- 35 тыс. поездок: MPB 35, MPC 35, MEC 10, MSC 45\n' +
        '- 40 тыс. поездок: MPB 30, MPC 40, MEC 10, MSC 50\n' +
        '- 50 тыс. поездок: MPB 20, MPC 50, MEC 10, MSC 60\n\n' +
        'MPB — предельная частная выгода водителей (marginal private benefit); MPC — предельные частные издержки (marginal private cost); MEC — предельные внешние издержки (marginal external cost); MSC — предельные общественные издержки (marginal social cost), причём MSC = MPC + MEC. Считайте, что MPB также является предельной общественной выгодой (marginal social benefit, MSB).',
    },
    prompt: {
      en: '(a) Calculate the following, using the data above. [6 marks]\n' +
        '(i) The total external cost of peak-hour trips at the market equilibrium quantity (the quantity where MPB equals MPC). [2 marks]\n' +
        '(ii) The revenue the council would raise per hour with the charge of AED 10 per trip, if 30 thousand trips remain. [2 marks]\n' +
        '(iii) The percentage change in peak-hour trips when they fall from 35 thousand to 30 thousand. [2 marks]\n' +
        '(b) Explain why the market equilibrium is not the socially optimal outcome. Refer to private and external costs in your answer. [6 marks]\n' +
        '(c) Draw a diagram of the market for peak-hour trips. Show MPB (equal to MSB), MPC, MSC, the market equilibrium, the socially optimal quantity and the welfare loss. Then explain how the charge of AED 10 per trip changes the market outcome. [6 marks]\n' +
        '(d) Evaluate the congestion charge as a policy for Ardmoor. Consider whether it reaches the socially optimal quantity, its effect on low-income commuters and on businesses in the centre, the use of the revenue, the likely response of drivers, and the alternatives in Options B and C. [12 marks]\n' +
        '(e) Recommend one of the three options (A, B or C) for Ardmoor. Justify your recommendation with the data, discuss the trade-offs and the stakeholders, consider the timing and reach a judgement. [10 marks]',
      ru: '(a) Рассчитайте следующее, используя данные выше. [6 баллов]\n' +
        '(i) Общие внешние издержки поездок в час пик при равновесном количестве на рынке (количество, при котором MPB равно MPC). [2 балла]\n' +
        '(ii) Выручку совета за час при плате AED 10 за поездку, если останется 30 тыс. поездок. [2 балла]\n' +
        '(iii) Процентное изменение числа поездок в час пик, если их число снизится с 35 тыс. до 30 тыс. [2 балла]\n' +
        '(b) Объясните, почему рыночное равновесие не является социально оптимальным результатом. В ответе опирайтесь на частные и внешние издержки. [6 баллов]\n' +
        '(c) Нарисуйте диаграмму рынка поездок в час пик. Покажите MPB (равное MSB), MPC, MSC, рыночное равновесие, социально оптимальное количество и чистые потери общества (deadweight loss). Затем объясните, как плата AED 10 за поездку меняет результат на рынке. [6 баллов]\n' +
        '(d) Оцените плату за въезд как политику для Ардмура. Рассмотрите, достигает ли она социально оптимального количества, её влияние на водителей с низкими доходами и на предприятия в центре, использование выручки, вероятную реакцию водителей и альтернативы из вариантов B и C. [12 баллов]\n' +
        '(e) Рекомендуйте один из трёх вариантов (A, B или C) для Ардмура. Обоснуйте рекомендацию данными, обсудите компромиссы и заинтересованные стороны, учтите сроки и сформулируйте итоговое суждение. [10 баллов]',
    },
    markscheme: {
      en: '(a)(i) 1 mark: the market equilibrium is 35 thousand trips, where MPB = MPC.\n' +
        '(a)(i) 1 mark: total external cost = 35 × 10 = AED 350 thousand per hour.\n' +
        '(a)(ii) 1 mark: revenue = charge × trips = 10 × 30.\n' +
        '(a)(ii) 1 mark: revenue = AED 300 thousand per hour.\n' +
        '(a)(iii) 1 mark: % change = (30 - 35) / 35 × 100.\n' +
        '(a)(iii) 1 mark: % change = -14.3%, so peak-hour trips fall by about 14.3%.\n' +
        '(b) 1 mark: at 35 thousand trips drivers equate MPB and MPC (AED 35) and ignore the external cost.\n' +
        '(b) 1 mark: the external cost of AED 10 per trip falls on other road users and society, so MSC (AED 45 at 35 thousand trips) is above MPB (AED 35).\n' +
        '(b) 1 mark: the last trips cost society more than they are worth to society.\n' +
        '(b) 1 mark: the socially optimal quantity is where MSB = MSC: 30 thousand trips at AED 40.\n' +
        '(b) 1 mark: the market produces too many trips (35 instead of 30 thousand), so resources are over-allocated to peak-hour driving.\n' +
        '(b) 1 mark: a welfare loss (deadweight loss) arises because society gives up more value than it gains from the extra trips.\n' +
        '(c) 1 mark: labelled diagram with price (AED per trip) on the vertical axis and quantity (thousand trips per hour) on the horizontal axis.\n' +
        '(c) 1 mark: MPB (= MSB) is downward sloping and MPC is upward sloping; MSC lies above MPC by the external cost of AED 10.\n' +
        '(c) 1 mark: market equilibrium at 35 thousand trips where MPB = MPC; socially optimal quantity at 30 thousand trips where MSB = MSC.\n' +
        '(c) 1 mark: the welfare loss triangle is shaded between 30 and 35 thousand trips, between MSB and MSC.\n' +
        '(c) 1 mark: the charge of AED 10 shifts the supply curve (MPC) up by AED 10, so that it coincides with MSC.\n' +
        '(c) 1 mark: the new equilibrium is at 30 thousand trips, where MPB = MSC, so the welfare loss is removed; the revenue is a transfer to the council, not a loss to society.\n' +
        '(d) 1 mark: effectiveness: the charge cuts peak trips by about 14.3% (from 35 to 30 thousand), which is the socially optimal quantity.\n' +
        '(d) 1 mark: efficiency: the charge equals the external cost, so it corrects the market failure and removes the welfare loss.\n' +
        '(d) 1 mark: equity: a flat charge of AED 10 takes a larger share of income from low-income commuters, so it is regressive.\n' +
        '(d) 1 mark: the use of revenue (for example, bus services or support for low-income drivers) can offset the unfair effects.\n' +
        '(d) 1 mark: if commuters have no alternative (inelastic demand), trips fall by less than planned, but the revenue is higher.\n' +
        '(d) 1 mark: businesses in the centre may lose customers who avoid the charge, which can reduce sales and local jobs.\n' +
        '(d) 1 mark: drivers may move trips to off-peak hours or to other roads, so the peak-hour goal is met but total traffic may fall less.\n' +
        '(d) 1 mark: administrative costs (cameras, enforcement and collection) reduce the net revenue.\n' +
        '(d) 1 mark: Option B gives drivers an alternative, but a charge of AED 5 is below the external cost of AED 10, so the problem is only partly solved.\n' +
        '(d) 1 mark: the external cost estimates may be inaccurate; if the true external cost is lower, the charge of AED 10 is too high.\n' +
        '(d) 1 mark: in the long run the charge can change where people live and work, while a new tunnel (Option C) may attract new traffic and reduce its benefits.\n' +
        '(d) 1 mark: judgement: the charge is efficient and can be fair if the revenue offsets its unfair effects; the verdict depends on its design and the use of the revenue.\n' +
        '(e) 1 mark: a clear recommendation of one option (A, B or C) with the reason in one sentence.\n' +
        '(e) 1 mark: the recommended option is specified in detail (for example, the charge level, the zone and hours, or how the revenue is used).\n' +
        '(e) 1 mark: justification with the data: uses at least two figures from the data or the stimulus, for example 35 and 30 thousand trips or the external cost of AED 10.\n' +
        '(e) 1 mark: explains why the option corrects the externality better than the alternatives (for example, Option B charges AED 5, which is below the AED 10 external cost).\n' +
        '(e) 1 mark: explains the trade-off between efficiency and equity (the charge is regressive).\n' +
        '(e) 1 mark: explains a second trade-off or risk, for example the cost and delay of the tunnel, or the effect on businesses in the centre.\n' +
        '(e) 1 mark: stakeholders: at least two groups and their likely responses (drivers, commuters, businesses, bus users, the council).\n' +
        '(e) 1 mark: timing: when the effects appear (drivers respond quickly, while buses and tunnels take years), and a date for review.\n' +
        '(e) 1 mark: a supporting measure that reduces the unfair effects, for example discounts for low-income households.\n' +
        '(e) 1 mark: judgement: states the conditions under which the recommendation holds and gives a clear final evaluation.',
      ru: '(a)(i) 1 балл: рыночное равновесие — 35 тыс. поездок, где MPB = MPC.\n' +
        '(a)(i) 1 балл: общие внешние издержки = 35 × 10 = AED 350 тыс. в час.\n' +
        '(a)(ii) 1 балл: выручка = плата × число поездок = 10 × 30.\n' +
        '(a)(ii) 1 балл: выручка = AED 300 тыс. в час.\n' +
        '(a)(iii) 1 балл: процентное изменение = (30 − 35) / 35 × 100.\n' +
        '(a)(iii) 1 балл: процентное изменение = −14,3%, то есть число поездок в час пик снижается примерно на 14,3%.\n' +
        '(b) 1 балл: при 35 тыс. поездок водители сравнивают MPB и MPC (AED 35) и не учитывают внешние издержки.\n' +
        '(b) 1 балл: внешние издержки AED 10 за поездку ложатся на других участников движения и на общество, поэтому MSC (AED 45 при 35 тыс. поездок) выше MPB (AED 35).\n' +
        '(b) 1 балл: последние поездки обходятся обществу дороже, чем приносят ему пользы.\n' +
        '(b) 1 балл: социально оптимальное количество — там, где MSB = MSC: 30 тыс. поездок при AED 40.\n' +
        '(b) 1 балл: рынок производит слишком много поездок (35 тыс. вместо 30 тыс.), поэтому ресурсы чрезмерно направляются на поездки в час пик.\n' +
        '(b) 1 балл: возникают чистые потери общества (deadweight loss), потому что общество теряет больше, чем получает от дополнительных поездок.\n' +
        '(c) 1 балл: диаграмма с подписанными осями: цена (AED за поездку) по вертикали, количество (тыс. поездок в час) по горизонтали.\n' +
        '(c) 1 балл: MPB (= MSB) убывает, MPC возрастает; MSC лежит выше MPC на величину внешних издержек AED 10.\n' +
        '(c) 1 балл: рыночное равновесие при 35 тыс. поездок (MPB = MPC); социально оптимальное количество при 30 тыс. поездок (MSB = MSC).\n' +
        '(c) 1 балл: треугольник чистых потерь общества заштрихован между 30 и 35 тыс. поездок, между кривыми MSB и MSC.\n' +
        '(c) 1 балл: плата AED 10 сдвигает кривую предложения (MPC) вверх на AED 10, и она совпадает с MSC.\n' +
        '(c) 1 балл: новое равновесие — 30 тыс. поездок (MPB = MSC), чистые потери устраняются; выручка от платы — это перераспределение совету, а не потеря для общества.\n' +
        '(d) 1 балл: результативность: плата сокращает поездки примерно на 14,3% (с 35 до 30 тыс.), то есть до социально оптимального количества.\n' +
        '(d) 1 балл: эффективность: плата равна внешним издержкам, поэтому она исправляет провал рынка и устраняет чистые потери общества.\n' +
        '(d) 1 балл: справедливость: единая плата AED 10 забирает большую долю дохода у водителей с низкими доходами, поэтому она регрессивна.\n' +
        '(d) 1 балл: использование выручки (например, на автобусы или поддержку водителей с низкими доходами) может смягчить несправедливое влияние платы.\n' +
        '(d) 1 балл: если у людей нет альтернатив (неэластичный спрос), поездки сокращаются меньше, чем планировалось, но выручка выше.\n' +
        '(d) 1 балл: предприятия в центре могут потерять клиентов, которые стали избегать платы, — это снизит продажи и локальную занятость.\n' +
        '(d) 1 балл: водители могут перенести поездки на непиковое время или на другие дороги, поэтому пиковая цель достигается, а общий трафик снижается меньше.\n' +
        '(d) 1 балл: административные издержки (камеры, контроль и сбор платы) снижают чистую выручку.\n' +
        '(d) 1 балл: вариант B даёт водителям альтернативу, но плата AED 5 ниже внешних издержек AED 10, поэтому проблема решается лишь частично.\n' +
        '(d) 1 балл: оценки внешних издержек могут быть неточными; если реальные издержки ниже, плата AED 10 окажется слишком высокой.\n' +
        '(d) 1 балл: в долгосрочном периоде плата может менять место работы и жилья, а новый тоннель (вариант C) может привлечь новый транспорт и снизить выгоду.\n' +
        '(d) 1 балл: итоговое суждение: плата эффективна и может быть справедливой, если выручка компенсирует её несправедливое влияние; вывод зависит от её конструкции и использования выручки.\n' +
        '(e) 1 балл: ясная рекомендация одного варианта (A, B или C) и причина в одном предложении.\n' +
        '(e) 1 балл: рекомендация конкретна (например, размер платы, зона и часы действия или направление выручки).\n' +
        '(e) 1 балл: обоснование данными: используются не менее двух цифр из данных или текста, например 35 и 30 тыс. поездок или внешние издержки AED 10.\n' +
        '(e) 1 балл: объяснено, почему выбранный вариант лучше исправляет внешний эффект, чем альтернативы (например, вариант B берёт AED 5, что ниже внешних издержек AED 10).\n' +
        '(e) 1 балл: компромисс между эффективностью и справедливостью (плата регрессивна).\n' +
        '(e) 1 балл: второй компромисс или риск, например стоимость и сроки строительства тоннеля или влияние на предприятия в центре.\n' +
        '(e) 1 балл: заинтересованные стороны: не менее двух групп и их вероятная реакция (водители, жители, предприятия, пользователи автобусов, совет).\n' +
        '(e) 1 балл: сроки: когда появится эффект (водители реагируют быстро, а автобусы и тоннели строятся годами) и когда решение нужно пересмотреть.\n' +
        '(e) 1 балл: поддерживающая мера, которая смягчает несправедливое влияние, например скидки для домохозяйств с низкими доходами.\n' +
        '(e) 1 балл: итоговое суждение: условия, при которых рекомендация верна, и ясная окончательная оценка.',
    },
    minutes: 60,
    origin: 'original',
  },
  {
    id: 'p3-set-02',
    subject: 'econ',
    topicIds: ['trade-protection', 'arguments-for-and-against-trade-control'],
    paper: 'P3',
    marks: 40,
    command: 'Recommend',
    stimulus: {
      en: 'Lorania is a small open economy (illustrative data). Its steel producers employ 12 thousand workers and say that cheap imports threaten their jobs. The government is considering a tariff of USD 100 per tonne on imported steel. The world price of steel is USD 400 per tonne. Lorania cannot change the world price, so the world supply is perfectly elastic at that price.\n\n' +
        'Construction firms, which buy most of the steel in Lorania, say that steel is a large share of their costs. An earlier investigation found that some foreign producers sold steel below their cost of production, which is called dumping.\n\n' +
        'The domestic market for steel is shown below (illustrative data; quantities are in million tonnes per year):\n' +
        '- USD 300 per tonne: domestic demand 0.7, domestic supply 0.0\n' +
        '- USD 400 per tonne: domestic demand 0.6, domestic supply 0.1\n' +
        '- USD 500 per tonne: domestic demand 0.5, domestic supply 0.2\n' +
        '- USD 600 per tonne: domestic demand 0.4, domestic supply 0.3',
      ru: 'Лорания — малая открытая экономика (иллюстративные данные). На её сталелитейных предприятиях работают 12 тыс. человек, и производители говорят, что дешёвый импорт угрожает их рабочим местам. Правительство рассматривает тариф (tariff) в размере USD 100 за тонну на импортную сталь. Мировая цена стали — USD 400 за тонну. Лорания не может влиять на мировую цену, поэтому мировое предложение при этой цене абсолютно эластично.\n\n' +
        'Строительные компании, которые покупают в Лорании большую часть стали, говорят, что сталь составляет значительную долю их издержек. Предыдущее расследование показало, что некоторые иностранные производители продавали сталь ниже себестоимости, то есть практиковали демпинг (dumping).\n\n' +
        'Внутренний рынок стали показан ниже (иллюстративные данные; объёмы — в млн тонн в год):\n' +
        '- USD 300 за тонну: спрос 0,7, предложение 0,0\n' +
        '- USD 400 за тонну: спрос 0,6, предложение 0,1\n' +
        '- USD 500 за тонну: спрос 0,5, предложение 0,2\n' +
        '- USD 600 за тонну: спрос 0,4, предложение 0,3',
    },
    prompt: {
      en: '(a) Calculate the following. [6 marks]\n' +
        '(i) The tariff revenue for the government if the tariff is USD 100 per tonne and imports fall to 0.3 million tonnes. [2 marks]\n' +
        '(ii) The percentage fall in imports when they fall from 0.5 million tonnes to 0.3 million tonnes. [2 marks]\n' +
        '(iii) The percentage increase in the domestic price when it rises from USD 400 to USD 500 per tonne. [2 marks]\n' +
        '(b) Explain how the tariff changes the domestic price, domestic production and domestic consumption of steel. [6 marks]\n' +
        '(c) Draw a diagram of the market for imported steel. Show the world price, the domestic price with the tariff, the quantities of imports before and after the tariff, and the tariff revenue. Then explain why the tariff creates a deadweight loss. [6 marks]\n' +
        '(d) Evaluate the tariff as a policy for Lorania. Consider the protection of jobs, the infant industry and national defence arguments, the effects on consumers and construction firms, the deadweight loss, the risk of retaliation by other countries, and alternatives such as anti-dumping duties, a quota, or support for the modernisation of steel plants. [12 marks]\n' +
        '(e) Recommend one of these options for Lorania: (A) the tariff of USD 100 per tonne; (B) an anti-dumping duty only on exporters that sold below cost, with no general tariff; (C) no tariff, but a fund to retrain steel workers and modernise plants. Justify your recommendation with the data, discuss the trade-offs and the stakeholders, consider the timing and reach a judgement. [10 marks]',
      ru: '(a) Рассчитайте следующее. [6 баллов]\n' +
        '(i) Налоговые поступления государства от тарифа (tariff revenue), если тариф составляет USD 100 за тонну, а импорт сокращается до 0,3 млн тонн. [2 балла]\n' +
        '(ii) Процентное сокращение импорта, если он падает с 0,5 млн тонн до 0,3 млн тонн. [2 балла]\n' +
        '(iii) Процентный рост внутренней цены, если она растёт с USD 400 до USD 500 за тонну. [2 балла]\n' +
        '(b) Объясните, как тариф меняет внутреннюю цену, внутреннее производство и внутреннее потребление стали. [6 баллов]\n' +
        '(c) Нарисуйте диаграмму рынка импортной стали. Покажите мировую цену, внутреннюю цену с тарифом, объёмы импорта до и после тарифа и налоговые поступления от тарифа. Затем объясните, почему тариф создаёт чистые потери общества (deadweight loss). [6 баллов]\n' +
        '(d) Оцените тариф как политику для Лорании. Рассмотрите защиту рабочих мест, аргументы в пользу молодой отрасли (infant industry) и национальной безопасности, влияние на потребителей и строительные компании, чистые потери, риск ответных мер других стран, а также альтернативы: антидемпинговые пошлины, квоты или поддержку модернизации сталелитейных заводов. [12 баллов]\n' +
        '(e) Рекомендуйте один из вариантов для Лорании: (A) тариф USD 100 за тонну; (B) антидемпинговую пошлину только для экспортёров, продававших сталь ниже себестоимости, без общего тарифа; (C) отказ от тарифа и фонд для переобучения сталеваров и модернизации заводов. Обоснуйте рекомендацию данными, обсудите компромиссы и заинтересованные стороны, учтите сроки и сформулируйте итоговое суждение. [10 баллов]',
    },
    markscheme: {
      en: '(a)(i) 1 mark: tariff revenue = tariff × imports after the tariff = 100 × 0.3.\n' +
        '(a)(i) 1 mark: revenue = USD 30 million per year.\n' +
        '(a)(ii) 1 mark: % change in imports = (0.3 - 0.5) / 0.5 × 100.\n' +
        '(a)(ii) 1 mark: % change = -40%, so imports fall by 40%.\n' +
        '(a)(iii) 1 mark: % change in price = (500 - 400) / 400 × 100.\n' +
        '(a)(iii) 1 mark: % change = 25%, so the domestic price rises by 25%.\n' +
        '(b) 1 mark: the domestic price rises from USD 400 to USD 500 per tonne, which is the world price plus the tariff.\n' +
        '(b) 1 mark: domestic demand falls from 0.6 to 0.5 million tonnes, because consumers buy less at the higher price.\n' +
        '(b) 1 mark: domestic supply rises from 0.1 to 0.2 million tonnes, because local producers can sell at the higher price.\n' +
        '(b) 1 mark: imports fall from 0.5 to 0.3 million tonnes, which is the gap between domestic demand and domestic supply at USD 500.\n' +
        '(b) 1 mark: consumer surplus falls; part of it is transferred to domestic producers (producer surplus) and to the government (tariff revenue).\n' +
        '(b) 1 mark: the government gains USD 30 million a year, but consumers pay more, so part of the gains from trade is lost (deadweight loss).\n' +
        '(c) 1 mark: labelled diagram with price (USD per tonne) on the vertical axis and quantity (million tonnes per year) on the horizontal axis.\n' +
        '(c) 1 mark: domestic demand is downward sloping and domestic supply is upward sloping; world supply is a horizontal line at USD 400.\n' +
        '(c) 1 mark: the tariff raises the price of imports by USD 100 to USD 500, which becomes the new domestic price.\n' +
        '(c) 1 mark: imports fall from the free-trade level (at USD 400) to the tariff level (at USD 500), shown as the horizontal gap between domestic demand and domestic supply.\n' +
        '(c) 1 mark: tariff revenue is a shaded rectangle equal to the tariff times the imports after the tariff, labelled.\n' +
        '(c) 1 mark: deadweight loss: two triangles, one for lost consumption and one for inefficient domestic production, show resources used inefficiently.\n' +
        '(d) 1 mark: jobs: the tariff protects some jobs in steel production, which supports employment in the region.\n' +
        '(d) 1 mark: the job argument is weaker if jobs are lost in construction and manufacturing because their costs rise.\n' +
        '(d) 1 mark: national defence: a domestic steel industry can supply defence and critical infrastructure in a crisis; the argument applies to a small part of the industry.\n' +
        '(d) 1 mark: infant industry: weak for a mature steel industry; protection can remove the incentive to become more efficient.\n' +
        '(d) 1 mark: consumers and construction firms pay a higher price, so consumer surplus falls and the cost is spread over many people.\n' +
        '(d) 1 mark: efficiency: the deadweight loss is a cost to society, and producers gain less than consumers lose.\n' +
        '(d) 1 mark: revenue: the tariff raises USD 30 million a year, which can fund other policies.\n' +
        '(d) 1 mark: retaliation: other countries may put tariffs on the exports of Lorania, which may cost jobs in export industries.\n' +
        '(d) 1 mark: dumping: anti-dumping duties target exporters that sell below cost, so they are a more precise response than a general tariff.\n' +
        '(d) 1 mark: a quota gives the rent to importers instead of the government, which may be worse for Lorania.\n' +
        '(d) 1 mark: support for modernisation or retraining can improve competitiveness in the long run without raising prices for all consumers.\n' +
        '(d) 1 mark: judgement: a tariff is a short-run measure; its value depends on how long it lasts and whether the industry becomes more competitive.\n' +
        '(e) 1 mark: a clear recommendation of one option (A, B or C) with the reason in one sentence.\n' +
        '(e) 1 mark: the recommended option is specified, for example which exporters the duty targets, or the size and length of the support fund.\n' +
        '(e) 1 mark: justification with the data: uses at least two figures from the stimulus, for example the price rise from USD 400 to USD 500 or imports of 0.5 million tonnes.\n' +
        '(e) 1 mark: explains why the option tackles the problem better than the alternatives (for example, option B targets dumping directly).\n' +
        '(e) 1 mark: trade-off between protecting jobs and the cost to consumers and construction firms.\n' +
        '(e) 1 mark: a second trade-off or risk, for example the deadweight loss against the job gains, or retaliation by trading partners.\n' +
        '(e) 1 mark: stakeholders: at least two groups and their likely responses (steel workers, steel firms, construction firms, consumers, trading partners).\n' +
        '(e) 1 mark: timing: the effect of each option over time, for example a temporary measure with a review date, or a phased end of support.\n' +
        '(e) 1 mark: a supporting measure that reduces the cost, for example compensation for construction firms, or retraining for workers.\n' +
        '(e) 1 mark: judgement: the conditions under which the recommendation holds, and a clear final evaluation.',
      ru: '(a)(i) 1 балл: налоговые поступления = тариф × импорт после тарифа = 100 × 0,3.\n' +
        '(a)(i) 1 балл: поступления = USD 30 млн в год.\n' +
        '(a)(ii) 1 балл: процентное изменение импорта = (0,3 − 0,5) / 0,5 × 100.\n' +
        '(a)(ii) 1 балл: процентное изменение = −40%, то есть импорт сокращается на 40%.\n' +
        '(a)(iii) 1 балл: процентное изменение цены = (500 − 400) / 400 × 100.\n' +
        '(a)(iii) 1 балл: процентное изменение = 25%, то есть внутренняя цена растёт на 25%.\n' +
        '(b) 1 балл: внутренняя цена растёт с USD 400 до USD 500 за тонну — это мировая цена плюс тариф.\n' +
        '(b) 1 балл: внутренний спрос падает с 0,6 до 0,5 млн тонн, потому что потребители покупают меньше при более высокой цене.\n' +
        '(b) 1 балл: внутреннее предложение растёт с 0,1 до 0,2 млн тонн, потому что местные производители могут продавать по более высокой цене.\n' +
        '(b) 1 балл: импорт падает с 0,5 до 0,3 млн тонн — это разрыв между внутренним спросом и внутренним предложением при USD 500.\n' +
        '(b) 1 балл: излишек потребителя (consumer surplus) сокращается; часть его переходит внутренним производителям (producer surplus) и государству (налоговые поступления).\n' +
        '(b) 1 балл: государство получает USD 30 млн в год, но потребители платят больше, поэтому часть выигрыша от торговли теряется (deadweight loss).\n' +
        '(c) 1 балл: диаграмма с подписанными осями: цена (USD за тонну) по вертикали, количество (млн тонн в год) по горизонтали.\n' +
        '(c) 1 балл: внутренний спрос убывает, внутреннее предложение возрастает; мировое предложение — горизонтальная линия при USD 400.\n' +
        '(c) 1 балл: тариф поднимает цену импорта на USD 100 до USD 500 — это новая внутренняя цена.\n' +
        '(c) 1 балл: импорт сокращается с объёма при свободной торговле (цена USD 400) до объёма при тарифе (цена USD 500); разрыв между внутренним спросом и предложением показан на горизонтальной оси.\n' +
        '(c) 1 балл: налоговые поступления — прямоугольник, равный тарифу, умноженному на импорт после тарифа; он заштрихован и подписан.\n' +
        '(c) 1 балл: чистые потери общества — два треугольника: потерянное потребление и неэффективное внутреннее производство; они показывают неэффективное использование ресурсов.\n' +
        '(d) 1 балл: рабочие места: тариф защищает часть рабочих мест в сталелитейной отрасли, что поддерживает занятость в регионе.\n' +
        '(d) 1 балл: аргумент о рабочих местах слабее, если в строительстве и обрабатывающей промышленности теряются рабочие места из-за роста издержек.\n' +
        '(d) 1 балл: национальная безопасность: внутреннее производство стали важно для оборонных и критических объектов в кризис; аргумент относится к небольшой части отрасли.\n' +
        '(d) 1 балл: аргумент о молодой отрасли слаб для зрелой сталелитейной отрасли; защита может снизить стимулы к повышению эффективности.\n' +
        '(d) 1 балл: потребители и строительные компании платят более высокую цену, поэтому излишек потребителя падает, а издержки ложатся на многих людей.\n' +
        '(d) 1 балл: эффективность: чистые потери общества — издержки для общества, а выигрыш производителей меньше, чем потери потребителей.\n' +
        '(d) 1 балл: доход: тариф приносит USD 30 млн в год, которые можно направить на другие программы.\n' +
        '(d) 1 балл: ответные меры: другие страны могут ввести пошлины на экспорт Лорании, что сократит рабочие места в экспортных отраслях.\n' +
        '(d) 1 балл: демпинг: антидемпинговые пошлины направлены на экспортёров, продающих ниже себестоимости, и точнее общего тарифа.\n' +
        '(d) 1 балл: квота передаёт ренту (rent) импортёрам, а не государству, что может быть хуже для Лорании.\n' +
        '(d) 1 балл: поддержка модернизации или переобучения может повысить конкурентоспособность в долгосрочном периоде без роста цен для всех потребителей.\n' +
        '(d) 1 балл: итоговое суждение: тариф — краткосрочная мера; его ценность зависит от срока действия и того, станет ли отрасль конкурентоспособнее.\n' +
        '(e) 1 балл: ясная рекомендация одного варианта (A, B или C) и причина в одном предложении.\n' +
        '(e) 1 балл: рекомендация конкретна: например, какие экспортёры попадают под пошлину или каковы размер и срок фонда поддержки.\n' +
        '(e) 1 балл: обоснование данными: используются не менее двух цифр из текста, например рост цены с USD 400 до USD 500 или импорт 0,5 млн тонн.\n' +
        '(e) 1 балл: объяснено, почему выбранный вариант лучше решает проблему, чем альтернативы (например, вариант B напрямую бьёт по демпингу).\n' +
        '(e) 1 балл: компромисс между защитой рабочих мест и издержками для потребителей и строительных компаний.\n' +
        '(e) 1 балл: второй компромисс или риск, например чистые потери общества против выигрыша в рабочих местах или ответные меры торговых партнёров.\n' +
        '(e) 1 балл: заинтересованные стороны: не менее двух групп и их вероятная реакция (сталевары, сталелитейные компании, строительные компании, потребители, торговые партнёры).\n' +
        '(e) 1 балл: сроки: эффект каждого варианта во времени, например временная мера с датой пересмотра или поэтапное сокращение поддержки.\n' +
        '(e) 1 балл: поддерживающая мера, которая снижает издержки, например компенсация строительным компаниям или переобучение работников.\n' +
        '(e) 1 балл: итоговое суждение: условия, при которых рекомендация верна, и ясная окончательная оценка.',
    },
    minutes: 60,
    origin: 'original',
  },
  {
    id: 'p3-set-03',
    subject: 'econ',
    topicIds: ['fiscal-policy', 'multiplier'],
    paper: 'P3',
    marks: 40,
    command: 'Recommend',
    stimulus: {
      en: 'Tarnovia is an open economy in recession (illustrative data). Real GDP is USD 9700 million, while potential GDP (the output at full employment) is USD 10000 million. Unemployment is 8% and inflation is 1.0% against a target of 2%. The central bank has already cut its policy rate to 0.5%, so it has little room for further cuts.\n\n' +
        'The government is considering an infrastructure programme of USD 120 million of extra spending on rail and road repairs, spent over one year. Building takes 18 months, so the spending starts after six months. The economists estimate the leakages from each extra unit of income:\n' +
        '- marginal propensity to save (MPS): 0.2\n' +
        '- marginal propensity to tax (MPT): 0.1\n' +
        '- marginal propensity to import (MPM): 0.1\n\n' +
        'The government budget is already in deficit by USD 150 million a year. Crowding out is thought to be small, because banks have spare funds.\n\n' +
        'Three options are being discussed:\n' +
        '- Option A: the infrastructure programme of USD 120 million.\n' +
        '- Option B: a cut in income tax that costs the government the same USD 120 million.\n' +
        '- Option C: no fiscal action; the central bank keeps its rate at 0.5% and waits for the market to recover.',
      ru: 'Тарновия — открытая экономика в рецессии (иллюстративные данные). Реальный ВВП (real GDP) составляет USD 9700 млн, а потенциальный ВВП (potential GDP, выпуск при полной занятости) — USD 10000 млн. Безработица составляет 8%, инфляция — 1,0% при целевом уровне 2%. Центральный банк уже снизил ключевую ставку до 0,5%, поэтому у него мало возможностей для дальнейшего снижения.\n\n' +
        'Правительство рассматривает программу инфраструктуры: дополнительные расходы USD 120 млн на ремонт железных и автомобильных дорог, которые будут потрачены в течение одного года. Строительство занимает 18 месяцев, поэтому расходы начинаются через полгода. Экономисты оценивают утечки из каждой дополнительной единицы дохода:\n' +
        '- предельная склонность к сбережению (MPS): 0,2\n' +
        '- предельная склонность к налогам (MPT): 0,1\n' +
        '- предельная склонность к импорту (MPM): 0,1\n\n' +
        'Бюджет уже в дефиците на USD 150 млн в год. Эффект вытеснения (crowding out), по оценкам, невелик, потому что у банков есть свободные средства.\n\n' +
        'Обсуждаются три варианта:\n' +
        '- Вариант A: программа инфраструктуры на USD 120 млн.\n' +
        '- Вариант B: снижение подоходного налога, которое стоит бюджету те же USD 120 млн.\n' +
        '- Вариант C: без фискальных действий; центральный банк сохраняет ставку 0,5% и ждёт восстановления рынка.',
    },
    prompt: {
      en: '(a) Calculate the following. [6 marks]\n' +
        '(i) The multiplier for the infrastructure programme, using MPS 0.2, MPT 0.1 and MPM 0.1. [2 marks]\n' +
        '(ii) The change in real GDP from the programme of USD 120 million, assuming a multiplier of 2.5. [2 marks]\n' +
        '(iii) The output gap as a percentage, using real GDP of USD 9700 million and potential GDP of USD 10000 million. [2 marks]\n' +
        '(b) Explain how the infrastructure programme would change aggregate demand and real GDP in Tarnovia. Use the multiplier in your explanation. [6 marks]\n' +
        '(c) Draw an AD/AS diagram for Tarnovia showing the recessionary output gap, the effect of the programme on aggregate demand, and the new equilibrium output and price level. Then explain why the price level may rise by less than the output increase. [6 marks]\n' +
        '(d) Evaluate the infrastructure programme as a way to close the output gap in Tarnovia. Consider the size of the multiplier, time lags, the effect on the budget deficit and the national debt, crowding out, the supply-side benefits of better infrastructure, the risk of inflation if the economy moves towards full employment, and whether monetary policy is a better alternative. [12 marks]\n' +
        '(e) Recommend one of the three options (A, B or C) for Tarnovia. Justify your recommendation with the data, discuss the trade-offs and the stakeholders, consider the timing and reach a judgement. [10 marks]',
      ru: '(a) Рассчитайте следующее. [6 баллов]\n' +
        '(i) Мультипликатор (multiplier) для программы инфраструктуры при MPS 0,2, MPT 0,1 и MPM 0,1. [2 балла]\n' +
        '(ii) Изменение реального ВВП от программы на USD 120 млн, если мультипликатор равен 2,5. [2 балла]\n' +
        '(iii) Разрыв выпуска (output gap) в процентах, если реальный ВВП составляет USD 9700 млн, а потенциальный ВВП — USD 10000 млн. [2 балла]\n' +
        '(b) Объясните, как программа инфраструктуры изменит совокупный спрос (aggregate demand) и реальный ВВП Тарновии. В объяснении используйте мультипликатор. [6 баллов]\n' +
        '(c) Нарисуйте диаграмму AD/AS для Тарновии: рецессионный разрыв выпуска, сдвиг совокупного спроса под действием программы и новое равновесие по выпуску и уровню цен. Затем объясните, почему уровень цен может вырасти меньше, чем выпуск. [6 баллов]\n' +
        '(d) Оцените программу инфраструктуры как способ закрыть разрыв выпуска в Тарновии. Рассмотрите размер мультипликатора, временные лаги, влияние на дефицит бюджета и государственный долг, вытеснение, пользу от лучшей инфраструктуры для предложения, риск инфляции при приближении к полной занятости, а также то, является ли денежная политика лучшей альтернативой. [12 баллов]\n' +
        '(e) Рекомендуйте один из трёх вариантов (A, B или C) для Тарновии. Обоснуйте рекомендацию данными, обсудите компромиссы и заинтересованные стороны, учтите сроки и сформулируйте итоговое суждение. [10 баллов]',
    },
    markscheme: {
      en: '(a)(i) 1 mark: multiplier k = 1 / (MPS + MPT + MPM).\n' +
        '(a)(i) 1 mark: k = 1 / (0.2 + 0.1 + 0.1) = 1 / 0.4 = 2.5.\n' +
        '(a)(ii) 1 mark: change in real GDP = multiplier × change in government spending = 2.5 × 120.\n' +
        '(a)(ii) 1 mark: change in real GDP = USD 300 million.\n' +
        '(a)(iii) 1 mark: output gap = (9700 - 10000) / 10000 × 100.\n' +
        '(a)(iii) 1 mark: output gap = -3%, a recessionary gap of 3% of potential GDP.\n' +
        '(b) 1 mark: government spending rises by USD 120 million, an injection that raises aggregate demand (AD shifts right).\n' +
        '(b) 1 mark: the spending becomes income for firms and workers, who spend part of it again: this is the multiplier process.\n' +
        '(b) 1 mark: leakages (saving 0.2, tax 0.1 and imports 0.1 of each extra unit of income) reduce each round, so the multiplier is 2.5 and not larger.\n' +
        '(b) 1 mark: the total rise in real GDP is 2.5 × 120 = USD 300 million, about the size of the gap between potential and actual real GDP.\n' +
        '(b) 1 mark: the rise in income also raises tax revenue and imports, so the budget effect is smaller than the spending itself.\n' +
        '(b) 1 mark: the effect comes with a delay: construction takes 18 months, so the rise in output lags behind the start of spending.\n' +
        '(c) 1 mark: labelled AD/AS diagram with price level on the vertical axis and real GDP on the horizontal axis.\n' +
        '(c) 1 mark: the initial equilibrium is below potential output (full employment), which is the recessionary output gap.\n' +
        '(c) 1 mark: AD shifts right by the multiplied effect of the spending (multiplier times USD 120 million), not by the initial spending alone.\n' +
        '(c) 1 mark: the new equilibrium has higher real GDP, closer to potential output, and a higher price level.\n' +
        '(c) 1 mark: short-run AS is upward sloping; spare capacity and unemployment absorb extra demand, so prices rise little.\n' +
        '(c) 1 mark: the price level rises by less than output because there is spare capacity; inflation risk grows only as output approaches potential.\n' +
        '(d) 1 mark: size of the multiplier: at 2.5, the programme of USD 120 million closes the gap if the leakages are stable.\n' +
        '(d) 1 mark: the multiplier may be smaller in practice if imports or taxes are higher than estimated, so the estimate may be too optimistic.\n' +
        '(d) 1 mark: time lags: construction takes 18 months and spending starts after six months, so the effect may arrive after recovery has begun.\n' +
        '(d) 1 mark: the budget deficit of USD 150 million a year would grow; financing by borrowing raises national debt and interest payments.\n' +
        '(d) 1 mark: crowding out is small now because banks have spare funds, but it rises as the economy nears full employment.\n' +
        '(d) 1 mark: supply-side benefit: better rail and roads lower transport costs and raise productivity and potential output in the long run.\n' +
        '(d) 1 mark: inflation risk: inflation of 1.0% is below the 2% target, so the risk is low now but could rise as demand recovers.\n' +
        '(d) 1 mark: monetary policy alternative: the rate is already 0.5%, so there is little room for cuts; fiscal policy is the stronger tool here.\n' +
        '(d) 1 mark: equity: construction jobs help workers, but the benefit may be concentrated in some regions and firms.\n' +
        '(d) 1 mark: confidence: a credible programme may raise business confidence and investment, but the effect depends on timing and planning.\n' +
        '(d) 1 mark: automatic stabilisers: the tax and benefit system already supports demand in a recession; the programme is an additional discretionary measure.\n' +
        '(d) 1 mark: judgement: the programme is effective if well planned and timed, but its time lags and debt cost mean it should be combined with other measures.\n' +
        '(e) 1 mark: a clear recommendation of one option (A, B or C) with the reason in one sentence.\n' +
        '(e) 1 mark: the recommended option is specified (for example, the timing and size of the programme, the size of a tax cut, or the conditions for the central bank).\n' +
        '(e) 1 mark: justification with the data: uses at least two figures from the stimulus, for example the output gap of -3% or the multiplier of 2.5.\n' +
        '(e) 1 mark: explains why the option tackles the problem better than the alternatives (for example, the central bank rate is already 0.5%).\n' +
        '(e) 1 mark: trade-off between short-run support and the rise in national debt.\n' +
        '(e) 1 mark: a second trade-off or risk, for example the delay caused by construction or inflation as the economy recovers.\n' +
        '(e) 1 mark: stakeholders: at least two groups and their likely responses (unemployed workers, construction firms, taxpayers, banks, the government).\n' +
        '(e) 1 mark: timing: when the effect of each option appears and when the decision should be reviewed.\n' +
        '(e) 1 mark: a supporting measure that reduces the cost, for example cost control on the project or open reporting on its progress.\n' +
        '(e) 1 mark: judgement: the conditions under which the recommendation holds, and a clear final evaluation.',
      ru: '(a)(i) 1 балл: мультипликатор k = 1 / (MPS + MPT + MPM).\n' +
        '(a)(i) 1 балл: k = 1 / (0,2 + 0,1 + 0,1) = 1 / 0,4 = 2,5.\n' +
        '(a)(ii) 1 балл: изменение реального ВВП = мультипликатор × изменение государственных расходов = 2,5 × 120.\n' +
        '(a)(ii) 1 балл: изменение реального ВВП = USD 300 млн.\n' +
        '(a)(iii) 1 балл: разрыв выпуска = (9700 − 10000) / 10000 × 100.\n' +
        '(a)(iii) 1 балл: разрыв выпуска = −3%, то есть рецессионный разрыв составляет 3% потенциального ВВП.\n' +
        '(b) 1 балл: государство тратит на USD 120 млн больше; это инъекция, которая повышает совокупный спрос (AD сдвигается вправо).\n' +
        '(b) 1 балл: расходы становятся доходом фирм и работников, которые снова тратят часть его: так работает процесс мультипликатора.\n' +
        '(b) 1 балл: утечки (сбережения 0,2, налоги 0,1 и импорт 0,1 от каждой дополнительной единицы дохода) уменьшают каждый раунд, поэтому мультипликатор равен 2,5, а не больше.\n' +
        '(b) 1 балл: общий рост реального ВВП составляет 2,5 × 120 = USD 300 млн, что примерно равно разрыву между потенциальным и реальным ВВП.\n' +
        '(b) 1 балл: рост доходов увеличивает также налоговые поступления и импорт, поэтому бюджетный эффект меньше самих расходов.\n' +
        '(b) 1 балл: эффект приходит с задержкой: строительство занимает 18 месяцев, поэтому рост выпуска отстаёт от начала расходов.\n' +
        '(c) 1 балл: диаграмма AD/AS с подписанными осями: уровень цен по вертикали, реальный ВВП по горизонтали.\n' +
        '(c) 1 балл: начальное равновесие ниже потенциального выпуска (уровня полной занятости) — это рецессионный разрыв выпуска.\n' +
        '(c) 1 балл: AD сдвигается вправо на величину мультипликативного эффекта расходов (мультипликатор × USD 120 млн), а не только на сами расходы.\n' +
        '(c) 1 балл: новое равновесие имеет более высокий реальный ВВП, ближе к потенциальному, и более высокий уровень цен.\n' +
        '(c) 1 балл: краткосрочная кривая AS восходящая; свободные мощности и безработица поглощают дополнительный спрос, поэтому цены растут мало.\n' +
        '(c) 1 балл: уровень цен растёт медленнее выпуска, потому что есть свободные мощности; риск инфляции растёт только при приближении выпуска к потенциальному.\n' +
        '(d) 1 балл: размер мультипликатора: при 2,5 программа на USD 120 млн закроет разрыв, если утечки стабильны.\n' +
        '(d) 1 балл: на практике мультипликатор может быть меньше, если импорт или налоги выше оценок, поэтому оценка может быть слишком оптимистичной.\n' +
        '(d) 1 балл: временные лаги: строительство занимает 18 месяцев, а расходы начинаются через полгода, поэтому эффект может прийти, когда восстановление уже началось.\n' +
        '(d) 1 балл: дефицит бюджета в USD 150 млн в год вырастет; финансирование займами увеличит государственный долг и процентные платежи.\n' +
        '(d) 1 балл: вытеснение сейчас невелико, потому что у банков есть свободные средства, но оно возрастает по мере приближения к полной занятости.\n' +
        '(d) 1 балл: выгода для предложения: лучшие железные и автомобильные дороги снижают транспортные издержки и повышают производительность и потенциальный выпуск в долгосрочном периоде.\n' +
        '(d) 1 балл: риск инфляции: инфляция 1,0% ниже целевых 2%, поэтому риск сейчас низкий, но он может вырасти по мере восстановления спроса.\n' +
        '(d) 1 балл: альтернатива — денежная политика: ставка уже 0,5%, поэтому места для снижения мало; в этом случае фискальная политика — более сильный инструмент.\n' +
        '(d) 1 балл: справедливость: строительные рабочие места помогают работникам, но выгода может сосредоточиться в отдельных регионах и фирмах.\n' +
        '(d) 1 балл: доверие: надёжная программа может повысить уверенность бизнеса и инвестиции, но эффект зависит от сроков и качества планирования.\n' +
        '(d) 1 балл: автоматические стабилизаторы: налоговая и социальная системы уже поддерживают спрос в рецессии; программа — это дополнительная дискреционная мера.\n' +
        '(d) 1 балл: итоговое суждение: программа эффективна при хорошем планировании и правильных сроках, но из-за лагов и долговой нагрузки её стоит сочетать с другими мерами.\n' +
        '(e) 1 балл: ясная рекомендация одного варианта (A, B или C) и причина в одном предложении.\n' +
        '(e) 1 балл: рекомендация конкретна (например, сроки и объём программы, размер снижения налога или условия для центрального банка).\n' +
        '(e) 1 балл: обоснование данными: используются не менее двух цифр из текста, например разрыв −3% или мультипликатор 2,5.\n' +
        '(e) 1 балл: объяснено, почему выбранный вариант лучше решает проблему, чем альтернативы (например, ставка центрального банка уже 0,5%).\n' +
        '(e) 1 балл: компромисс между краткосрочной поддержкой и ростом госдолга.\n' +
        '(e) 1 балл: второй компромисс или риск, например задержка эффекта из-за строительства или возможная инфляция при восстановлении.\n' +
        '(e) 1 балл: заинтересованные стороны: не менее двух групп и их вероятная реакция (безработные, строительные фирмы, налогоплательщики, банки, правительство).\n' +
        '(e) 1 балл: сроки: когда появится эффект каждого варианта и когда стоит пересмотреть решение.\n' +
        '(e) 1 балл: поддерживающая мера, которая смягчает издержки, например контроль за расходами или прозрачная отчётность о ходе проекта.\n' +
        '(e) 1 балл: итоговое суждение: условия, при которых рекомендация верна, и ясная окончательная оценка.',
    },
    minutes: 60,
    origin: 'original',
  },
  {
    id: 'p3-set-04',
    subject: 'econ',
    topicIds: ['supply-side-policies', 'sustainable-development'],
    paper: 'P3',
    marks: 40,
    command: 'Recommend',
    stimulus: {
      en: 'Halvary is a country that generates most of its electricity from gas, and it imports much of the gas it uses (illustrative data). The government wants to cut carbon emissions and reduce gas imports. Solar power is one option. Each GWh of solar electricity replaces about 0.5 thousand tonnes of CO2 that would otherwise come from gas-fired power.\n\n' +
        'Solar producers supply the following amounts at each price they receive per kWh (illustrative data):\n' +
        '- AED 0.30 per kWh: 300 GWh per year\n' +
        '- AED 0.36 per kWh: 400 GWh per year\n' +
        '- AED 0.42 per kWh: 500 GWh per year\n' +
        '- AED 0.48 per kWh: 600 GWh per year\n\n' +
        'The government is considering three options:\n' +
        '- Option A: a subsidy of AED 0.06 per kWh paid to solar producers on every kWh they supply.\n' +
        '- Option B: a carbon tax of AED 0.02 per kWh on electricity made from gas, with the revenue used to reduce household bills.\n' +
        '- Option C: deregulation, which means removing licensing rules for small solar producers and offering loan guarantees for solar projects.\n\n' +
        'A large solar farm takes about two years to build. Supporters say that solar will create jobs and improve energy security. Critics say that the subsidy will be a cost to taxpayers and may not be needed if solar technology becomes cheaper.',
      ru: 'Халвари — страна, где большая часть электричества производится на газе, а сам газ во многом импортируется (иллюстративные данные). Правительство хочет сократить выбросы углерода и уменьшить импорт газа. Одна из возможностей — солнечная энергетика. Каждый ГВт·ч (GWh) солнечной электроэнергии заменяет примерно 0,5 тыс. тонн CO2, которые иначе выделила бы газовая генерация.\n\n' +
        'Солнечные производители поставляют следующие объёмы при каждой цене, которую они получают за кВт·ч (иллюстративные данные):\n' +
        '- AED 0,30 за кВт·ч: 300 GWh в год\n' +
        '- AED 0,36 за кВт·ч: 400 GWh в год\n' +
        '- AED 0,42 за кВт·ч: 500 GWh в год\n' +
        '- AED 0,48 за кВт·ч: 600 GWh в год\n\n' +
        'Правительство рассматривает три варианта:\n' +
        '- Вариант A: субсидия AED 0,06 за кВт·ч, которую получают солнечные производители за каждый поставленный кВт·ч.\n' +
        '- Вариант B: углеродный налог (carbon tax) AED 0,02 за кВт·ч на электричество, произведённое из газа; выручка идёт на снижение счетов домохозяйств.\n' +
        '- Вариант C: дерегулирование, то есть отмена лицензионных требований для мелких солнечных производителей и гарантии по кредитам для солнечных проектов.\n\n' +
        'Крупная солнечная станция строится около двух лет. Сторонники говорят, что солнечная энергетика создаст рабочие места и повысит энергетическую безопасность. Критики считают, что субсидия станет расходом для налогоплательщиков и может оказаться ненужной, если солнечные технологии подешевеют.',
    },
    prompt: {
      en: '(a) Calculate the following. [6 marks]\n' +
        '(i) The price elasticity of supply (PES) of solar electricity when the price received by producers rises from AED 0.36 to AED 0.42 per kWh and supply rises from 400 to 500 GWh per year. Give your answer to one decimal place. [2 marks]\n' +
        '(ii) The annual cost of a subsidy of AED 0.06 per kWh paid on 500 GWh of solar electricity. [2 marks]\n' +
        '(iii) The CO2 emissions saved each year by 500 GWh of solar electricity. [2 marks]\n' +
        '(b) Explain how a subsidy for solar producers would change the supply of solar electricity, the price paid by consumers and the emissions of Halvary. [6 marks]\n' +
        '(c) Draw a diagram of the market for solar electricity. Show the effect of the subsidy on the supply curve, and label the quantity supplied before and after the subsidy. Then explain why the subsidy is a shift of the supply curve, not a movement along it. [6 marks]\n' +
        '(d) Evaluate the subsidy (Option A) as a policy for Halvary. Consider its effectiveness in cutting emissions, its cost to taxpayers, its efficiency compared with a carbon tax (Option B), the effects of solar power on energy security and jobs, the long-run learning effects, and the economic, social and environmental dimensions of sustainable development. [12 marks]\n' +
        '(e) Recommend one of the three options (A, B or C) for Halvary. Justify your recommendation with the data, discuss the trade-offs and the stakeholders, consider the timing and reach a judgement. [10 marks]',
      ru: '(a) Рассчитайте следующее. [6 баллов]\n' +
        '(i) Ценовую эластичность предложения (price elasticity of supply, PES) солнечной электроэнергии, если цена, которую получают производители, растёт с AED 0,36 до AED 0,42 за кВт·ч, а предложение — с 400 до 500 GWh в год. Ответ дайте с одним знаком после запятой. [2 балла]\n' +
        '(ii) Годовые расходы на субсидию AED 0,06 за кВт·ч, выплачиваемую по 500 GWh солнечной электроэнергии. [2 балла]\n' +
        '(iii) Объём сокращённых выбросов CO2 за год, если солнечная электроэнергия составляет 500 GWh. [2 балла]\n' +
        '(b) Объясните, как субсидия для солнечных производителей изменит предложение солнечной электроэнергии, цену для потребителей и выбросы Халвари. [6 баллов]\n' +
        '(c) Нарисуйте диаграмму рынка солнечной электроэнергии. Покажите, как субсидия меняет кривую предложения, и подпишите объём предложения до и после субсидии. Затем объясните, почему субсидия — это сдвиг кривой предложения, а не движение вдоль неё. [6 баллов]\n' +
        '(d) Оцените субсидию (вариант A) как политику для Халвари. Рассмотрите её результативность в сокращении выбросов, расходы налогоплательщиков, эффективность по сравнению с углеродным налогом (вариант B), влияние солнечной энергии на энергетическую безопасность и занятость, долгосрочные эффекты обучения (learning effects), а также экономическое, социальное и экологическое измерения устойчивого развития. [12 баллов]\n' +
        '(e) Рекомендуйте один из трёх вариантов (A, B или C) для Халвари. Обоснуйте рекомендацию данными, обсудите компромиссы и заинтересованные стороны, учтите сроки и сформулируйте итоговое суждение. [10 баллов]',
    },
    markscheme: {
      en: '(a)(i) 1 mark: % change in quantity supplied = (500 - 400) / 400 × 100 = 25%.\n' +
        '(a)(i) 1 mark: % change in price received = (0.42 - 0.36) / 0.36 × 100 = 16.67%; PES = 25 / 16.67 = 1.5 (elastic supply).\n' +
        '(a)(ii) 1 mark: cost = subsidy per kWh × GWh supplied = 0.06 × 500.\n' +
        '(a)(ii) 1 mark: annual cost = AED 30 million (AED per kWh × GWh gives AED million).\n' +
        '(a)(iii) 1 mark: CO2 saved = 0.5 thousand tonnes per GWh × 500 GWh = 250 thousand tonnes.\n' +
        '(a)(iii) 1 mark: CO2 saved = 250 thousand tonnes a year.\n' +
        '(b) 1 mark: the subsidy raises the price producers receive per kWh, so they supply more at each price: the supply curve shifts right (down by the subsidy).\n' +
        '(b) 1 mark: at AED 0.36 producers supply 400 GWh; with the subsidy they receive AED 0.42 and supply 500 GWh per year.\n' +
        '(b) 1 mark: the extra solar supply lowers the price paid by consumers and raises the quantity supplied, as in a standard subsidy diagram.\n' +
        '(b) 1 mark: the extra solar output replaces gas-fired power, so emissions fall and Halvary imports less gas.\n' +
        '(b) 1 mark: taxpayers or bill payers fund the subsidy, which costs AED 30 million a year (see (a)(ii)); this is a transfer, not a gain.\n' +
        '(b) 1 mark: the effect on consumer prices may be small if the subsidy is a small share of the bill; the net effect depends on how it is financed.\n' +
        '(c) 1 mark: labelled diagram with price (AED per kWh) on the vertical axis and quantity (GWh per year) on the horizontal axis.\n' +
        '(c) 1 mark: the supply curve of solar electricity is upward sloping and the demand curve for it is downward sloping.\n' +
        '(c) 1 mark: the subsidy shifts the supply curve to the right (down by the amount of the subsidy): at each quantity, producers accept a lower price paid by consumers.\n' +
        '(c) 1 mark: new equilibrium: a larger quantity and a lower price paid by consumers; the price received by producers rises by the subsidy.\n' +
        '(c) 1 mark: the cost of the subsidy is shown as a rectangle: subsidy per unit times the quantity supplied after the subsidy.\n' +
        '(c) 1 mark: a shift is caused by a non-price factor (the subsidy), while a movement along the curve is caused by a change in the price of solar electricity itself.\n' +
        '(d) 1 mark: effectiveness: the subsidy raises supply from 400 to 500 GWh (PES of 1.5), so it is effective in increasing solar output.\n' +
        '(d) 1 mark: emissions: extra solar output cuts emissions, which supports the environmental dimension of sustainable development.\n' +
        '(d) 1 mark: cost: the subsidy costs AED 30 million a year, paid by taxpayers or bill payers; the cost rises as output grows.\n' +
        '(d) 1 mark: efficiency: a subsidy does not charge polluters for their emissions; a carbon tax (Option B) corrects the external cost directly.\n' +
        '(d) 1 mark: Option B may be more efficient, but a carbon tax raises the price of gas-fired power, which hurts households and industry.\n' +
        '(d) 1 mark: energy security: solar reduces gas imports, so Halvary is less exposed to shocks in world gas prices.\n' +
        '(d) 1 mark: long-run effects: subsidies can support learning and lower costs over time, but the subsidy may become a permanent cost if it is not reduced.\n' +
        '(d) 1 mark: intermittency: solar output depends on the weather, so storage and grid investment are needed, which add costs.\n' +
        '(d) 1 mark: equity: if the subsidy is paid through bills, low-income households pay a larger share of their income.\n' +
        '(d) 1 mark: social dimension: solar installation jobs may help some regions, but jobs in gas power may be lost.\n' +
        '(d) 1 mark: Option C (deregulation) may bring new producers and lower costs, but it does not reduce the external cost of gas power.\n' +
        '(d) 1 mark: judgement: the subsidy is effective in raising solar output, but it is an expensive and indirect way to cut emissions; its value depends on its design and the alternatives.\n' +
        '(e) 1 mark: a clear recommendation of one option (A, B or C) with the reason in one sentence.\n' +
        '(e) 1 mark: the recommended option is specified (for example, the size of the subsidy or carbon tax, the use of the revenue, or the conditions for small producers).\n' +
        '(e) 1 mark: justification with the data: uses at least two figures from the stimulus, for example the PES of 1.5 or the cost of AED 30 million.\n' +
        '(e) 1 mark: explains why the option tackles the problem better than the alternatives (for example, a carbon tax corrects the external cost directly).\n' +
        '(e) 1 mark: trade-off between the environmental gain and the cost to taxpayers or households.\n' +
        '(e) 1 mark: a second trade-off or risk, for example intermittent output or a rise in the price of gas-fired electricity.\n' +
        '(e) 1 mark: stakeholders: at least two groups and their likely responses (solar producers, gas companies, households, taxpayers, workers in the industry).\n' +
        '(e) 1 mark: timing: building a solar farm takes about two years, while a tax or deregulation may act faster; a date for review is needed.\n' +
        '(e) 1 mark: a supporting measure that reduces inequality or risk, for example protection for low-income households or investment in storage.\n' +
        '(e) 1 mark: judgement: the conditions under which the recommendation holds, and a clear final evaluation.',
      ru: '(a)(i) 1 балл: изменение объёма предложения = (500 − 400) / 400 × 100 = 25%.\n' +
        '(a)(i) 1 балл: изменение цены = (0,42 − 0,36) / 0,36 × 100 = 16,67%; PES = 25 / 16,67 = 1,5 (эластичное предложение).\n' +
        '(a)(ii) 1 балл: расходы = субсидия за кВт·ч × GWh = 0,06 × 500.\n' +
        '(a)(ii) 1 балл: годовые расходы = AED 30 млн (AED за кВт·ч × GWh дают AED млн).\n' +
        '(a)(iii) 1 балл: сокращённые выбросы = 0,5 тыс. тонн на GWh × 500 GWh = 250 тыс. тонн CO2.\n' +
        '(a)(iii) 1 балл: сокращение выбросов = 250 тыс. тонн CO2 в год.\n' +
        '(b) 1 балл: субсидия повышает цену, которую производители получают за кВт·ч, поэтому при каждой цене они поставляют больше: кривая предложения сдвигается вправо (вниз на величину субсидии).\n' +
        '(b) 1 балл: при цене AED 0,36 производители поставляют 400 GWh; с субсидией они получают AED 0,42 и поставляют 500 GWh в год.\n' +
        '(b) 1 балл: дополнительное солнечное предложение снижает цену для потребителей и увеличивает объём, как на стандартной диаграмме субсидии.\n' +
        '(b) 1 балл: дополнительная солнечная энергия замещает газовую генерацию, поэтому выбросы снижаются, а импорт газа сокращается.\n' +
        '(b) 1 балл: субсидию оплачивают налогоплательщики или плательщики по счетам; она стоит AED 30 млн в год (см. (a)(ii)), и это перераспределение, а не выигрыш.\n' +
        '(b) 1 балл: эффект для цены потребителей может быть небольшим, если субсидия — малая часть счёта; итоговый эффект зависит от того, как она финансируется.\n' +
        '(c) 1 балл: диаграмма с подписанными осями: цена (AED за кВт·ч) по вертикали, объём (GWh в год) по горизонтали.\n' +
        '(c) 1 балл: кривая предложения солнечной электроэнергии восходящая, кривая спроса на неё нисходящая.\n' +
        '(c) 1 балл: субсидия сдвигает кривую предложения вправо (вниз на величину субсидии): при каждом объёме производители принимают более низкую цену, которую платят потребители.\n' +
        '(c) 1 балл: новое равновесие: больший объём и меньшая цена, которую платят потребители; цена, которую получают производители, растёт на величину субсидии.\n' +
        '(c) 1 балл: расходы на субсидию показаны прямоугольником: субсидия на единицу, умноженная на объём предложения после субсидии.\n' +
        '(c) 1 балл: сдвиг вызван неценовым фактором (субсидией), а движение вдоль кривой — изменением самой цены солнечной электроэнергии.\n' +
        '(d) 1 балл: результативность: субсидия повышает предложение с 400 до 500 GWh (PES 1,5), то есть эффективно увеличивает выпуск солнечной энергии.\n' +
        '(d) 1 балл: выбросы: дополнительный выпуск сокращает выбросы, что соответствует экологическому измерению устойчивого развития.\n' +
        '(d) 1 балл: расходы: субсидия стоит AED 30 млн в год, которые платят налогоплательщики или плательщики по счетам; расходы растут вместе с объёмом.\n' +
        '(d) 1 балл: эффективность: субсидия не возлагает на загрязнителей плату за выбросы; углеродный налог (вариант B) напрямую корректирует внешние издержки.\n' +
        '(d) 1 балл: вариант B может быть эффективнее, но углеродный налог повышает цену электричества из газа, что бьёт по домохозяйствам и промышленности.\n' +
        '(d) 1 балл: энергетическая безопасность: солнечная энергия сокращает импорт газа, поэтому Халвари меньше зависит от шоков мировых цен на газ.\n' +
        '(d) 1 балл: долгосрочные эффекты: субсидии могут поддерживать обучение и снижение издержек со временем, но субсидия может стать постоянным расходом, если её не сокращать.\n' +
        '(d) 1 балл: прерывистость: выработка солнечной энергии зависит от погоды, поэтому нужны накопители и инвестиции в сеть, что добавляет издержки.\n' +
        '(d) 1 балл: справедливость: если субсидия оплачивается через счета, домохозяйства с низкими доходами платят большую долю своего дохода.\n' +
        '(d) 1 балл: социальное измерение: рабочие места в установке солнечных панелей помогают отдельным регионам, но рабочие места в газовой генерации могут исчезнуть.\n' +
        '(d) 1 балл: вариант C (дерегулирование) может привлечь новых производителей и снизить издержки, но не сокращает внешние издержки газовой генерации.\n' +
        '(d) 1 балл: итоговое суждение: субсидия эффективно повышает выпуск солнечной энергии, но это дорогой и непрямой способ сократить выбросы; её ценность зависит от конструкции и альтернатив.\n' +
        '(e) 1 балл: ясная рекомендация одного варианта (A, B или C) и причина в одном предложении.\n' +
        '(e) 1 балл: рекомендация конкретна (например, размер субсидии или углеродного налога, направление выручки или условия для мелких производителей).\n' +
        '(e) 1 балл: обоснование данными: используются не менее двух цифр из текста, например PES 1,5 или расходы AED 30 млн.\n' +
        '(e) 1 балл: объяснено, почему выбранный вариант лучше решает проблему, чем альтернативы (например, углеродный налог напрямую корректирует внешние издержки).\n' +
        '(e) 1 балл: компромисс между экологическим эффектом и стоимостью для налогоплательщиков или домохозяйств.\n' +
        '(e) 1 балл: второй компромисс или риск, например прерывистость выработки или рост цен на электричество из газа.\n' +
        '(e) 1 балл: заинтересованные стороны: не менее двух групп и их вероятная реакция (солнечные производители, газовые компании, домохозяйства, налогоплательщики, работники отрасли).\n' +
        '(e) 1 балл: сроки: строительство занимает около двух лет, а эффект налога или дерегулирования может прийти быстрее; нужна дата пересмотра.\n' +
        '(e) 1 балл: поддерживающая мера, которая снижает неравенство или риски, например защита домохозяйств с низкими доходами или инвестиции в накопители.\n' +
        '(e) 1 балл: итоговое суждение: условия, при которых рекомендация верна, и ясная окончательная оценка.',
    },
    minutes: 60,
    origin: 'original',
  },
];
