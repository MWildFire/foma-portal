import type { Question } from '../../../../src/contract/types';

// Option A, A.4: original questions in the style of Paper 1. Structured questions carry 10 marks in total,
// extended questions 10 marks each with a plan, a markband and a model answer. Numbers in the stimuli are illustrative
// data; the answers are computed in the scratchpad (see the working in each model).
export const questions: Question[] = [
  {
    id: 'a4-sq1',
    subject: 'geo',
    topicIds: ['a4-water-management'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    stimulus: {
      en: 'Illustrative data for a city: the water supply network receives 40,000 cubic metres of water a day. 25% of the water entering the network is lost through leaks before it reaches customers. Households pay a flat charge that does not depend on how much water they use.',
      ru: 'Условные данные (illustrative data) для города: в сеть водоснабжения поступает 40 000 м³ воды в сутки. 25% воды, поступающей в сеть, теряется из-за утечек до того, как доходит до потребителей. Домохозяйства платят фиксированную плату, которая не зависит от того, сколько воды они используют.',
    },
    prompt: {
      en: '(a) Calculate the volume of water lost through leakage in one year, using the data. Show your working. (2 marks)\n\n(b) Explain how volumetric charges (charges based on metered volume) could reduce household water demand. (4 marks)\n\n(c) Suggest one reason why higher water prices may not reduce demand as much as expected among low-income households, and one measure that could protect them. (4 marks)',
      ru: '(a) Рассчитайте объём воды, потерянной из-за утечек за один год, используя данные. Покажите ход расчёта. (2 балла)\n\n(b) Объясните, как тарифы, зависящие от объёма (по счётчикам), могли бы снизить спрос домохозяйств на воду. (4 балла)\n\n(c) Предложите одну причину, по которой более высокие цены на воду могут снизить спрос у домохозяйств с низким доходом не так сильно, как ожидается, и одну меру, которая могла бы их защитить. (4 балла)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for a correct method, for example 40,000 × 25% = 10,000 m³ a day, then × 365 days; 1 mark for 3,650,000 m³ a year. Units are accepted, and an error in the daily figure is followed through if the rest of the working is correct.\n\n(b) 4 marks: up to 2 marks for each developed point (1 mark to identify it, 1 mark to develop it). Points: a higher price per cubic metre makes wasteful use and leaks inside the home more costly, so households cut use; metering shows households how much water they use, so they can find waste; tiered tariffs raise the price for heavy use only.\n\n(c) 4 marks: 1 mark for a reason (for example, water for drinking and washing is a necessity, so demand falls little when the price rises, and bills take a larger share of a low income); 1 mark for developing the reason; 1 mark for a protective measure (for example, a free basic allowance per person, or a subsidy for the first block of use); 1 mark for linking the measure to low-income households.',
      ru: '(a) 2 балла: 1 балл за верный метод, например 40 000 × 25% = 10 000 м³ в сутки, затем × 365 дней; 1 балл за 3 650 000 м³ в год. Единицы засчитываются; ошибка в суточной цифре засчитывается дальше, если остальной расчёт верен.\n\n(b) 4 балла: до 2 баллов за каждый развитый пункт (1 балл — назвать, 1 балл — развить). Пункты: более высокая цена за кубометр делает расточительство и утечки в доме дороже, поэтому домохозяйства сокращают потребление; учёт по счётчикам показывает, сколько воды используется, и помогает найти потери; ступенчатые тарифы повышают цену только для большого расхода.\n\n(c) 4 балла: 1 балл за причину (например, вода для питья и гигиены — необходимость, поэтому спрос падает мало, а счета занимают большую долю низкого дохода); 1 балл за развитие причины; 1 балл за защитную меру (например, бесплатный базовый объём на человека или субсидия на первый блок потребления); 1 балл за связь меры с домохозяйствами с низким доходом.',
    },
    model: {
      en: '(a) Daily loss: 40,000 × 0.25 = 10,000 m³. Annual loss: 10,000 × 365 = 3,650,000 m³ a year.\n\n(b) A flat charge gives no reason to save water, because the next litre costs the same as the first. Volumetric charges make each extra cubic metre cost money, so households that waste water, for example through a dripping tap or a leaking cistern, pay more and have a reason to fix it. Metering also shows households their use, so they can see where the water goes. Tiered tariffs can charge more only for heavy use and keep the basic allowance cheap.\n\n(c) Low-income households spend a larger share of their income on water, but they cannot easily cut drinking and washing, so a price rise falls mostly on essential use and reduces demand less than expected. A free basic allowance per person, with higher prices above it, would protect essential use and still discourage waste.',
      ru: '(a) Потери в сутки: 40 000 × 0,25 = 10 000 м³. Потери в год: 10 000 × 365 = 3 650 000 м³.\n\n(b) Фиксированная плата не даёт причины экономить воду, потому что следующий литр стоит столько же, сколько первый. Тарифы, зависящие от объёма, делают каждый лишний кубометр платным, поэтому домохозяйства, которые расходуют воду впустую, например из-за текущего крана или протечки бачка, платят больше и имеют повод это исправить. Учёт по счётчикам также показывает, сколько воды используется и куда она уходит. Ступенчатые тарифы могут повышать цену только для большого расхода, оставляя базовый объём дешёвым.\n\n(c) Домохозяйства с низким доходом тратят на воду большую часть бюджета, но не могут легко сократить питьё и гигиену, поэтому рост цены ударит в основном по необходимому потреблению и снизит спрос меньше, чем ожидается. Бесплатный базовый объём на каждого человека с более высокой ценой сверх него защитил бы необходимое потребление и при этом ограничивал бы расточительство.',
    },
    answer: '3650000',
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a4-sq2',
    subject: 'geo',
    topicIds: ['a4-water-management'],
    paper: 'P1',
    marks: 10,
    command: 'Describe',
    stimulus: {
      en: 'Illustrative data for a proposed dam: reservoir capacity 500 million cubic metres. The river carries 10 million cubic metres of sediment into the reservoir every year. The dam would supply water for irrigation and generate hydroelectricity. About 1,200 people living in the reservoir area would have to move.',
      ru: 'Условные данные (illustrative data) для проектируемой плотины: ёмкость водохранилища 500 млн м³. Река ежегодно приносит в водохранилище 10 млн м³ наносов. Плотина будет подавать воду для орошения и вырабатывать гидроэлектроэнергию. Около 1 200 человек, живущих в зоне водохранилища, придётся переселить.',
    },
    prompt: {
      en: '(a) Calculate how many years the reservoir would take to fill with sediment, assuming that the sediment inflow stays constant and all of the sediment settles in the reservoir. Show your working. (2 marks)\n\n(b) Describe two effects that the dam would have on the river downstream. (4 marks)\n\n(c) Explain one social cost and one benefit of the dam for the people who live near the reservoir. (4 marks)',
      ru: '(a) Рассчитайте, за сколько лет водохранилище заполнилось бы наносами, если приток наносов остаётся постоянным и все наносы оседают в водохранилище. Покажите ход расчёта. (2 балла)\n\n(b) Опишите два последствия плотины для реки ниже по течению. (4 балла)\n\n(c) Объясните одну социальную издержку и одну выгоду плотины для людей, живущих рядом с водохранилищем. (4 балла)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for the method, 500 ÷ 10; 1 mark for 50 years. Follow through an error in the division if the method is right. Credit a candidate who states that the estimate ignores changes in inflow.\n\n(b) 4 marks: up to 2 marks for each effect (1 mark to identify it, 1 mark to develop it). Accept, for example: less sediment reaches the delta or floodplain, so the coast can erode and the floodplain is not renewed; the seasonal flood pattern is reduced, which affects farming and fish breeding; water released from the dam is clearer and colder, which changes the river ecosystem; less flow in the dry season harms users further downstream.\n\n(c) 4 marks: up to 2 marks for the social cost (identify and explain, for example displacement of 1,200 people, with loss of access to homes, farmland and community ties (the number of homes is not supplied)); up to 2 marks for the benefit (identify and explain, for example reliable irrigation water for farmers, or electricity for local homes).',
      ru: '(a) 2 балла: 1 балл за метод, 500 ÷ 10; 1 балл за 50 лет. Ошибка в делении засчитывается дальше, если метод верен. Засчитывается указание, что оценка не учитывает изменение притока.\n\n(b) 4 балла: до 2 баллов за каждое последствие (1 балл — назвать, 1 балл — развить). Засчитываются, например: меньше наносов доходит до дельты или поймы, поэтому берег может размываться, а пойма не обновляется; сокращается сезонное половодье, что вредит земледелию и нересту рыбы; вода из плотины становится прозрачнее и холоднее, что меняет речную экосистему; меньший сток в сухой сезон вредит пользователям ещё ниже по течению.\n\n(c) 4 балла: до 2 баллов за социальную издержку (назвать и объяснить, например, переселение 1 200 человек с потерей доступа к жилью, земле и связям в общине (число домов не указано)); до 2 баллов за выгоду (назвать и объяснить, например, надёжную воду для орошения фермеров или электроэнергию для местных домов).',
    },
    model: {
      en: '(a) 500 ÷ 10 = 50 years, assuming that all the sediment settles and that the inflow stays the same.\n\n(b) The river below the dam would carry less sediment, so the floodplain and delta would receive less new soil and could erode. Regulated releases also remove the seasonal floods that once spread water and nutrients over farmland and that many fish species use for breeding.\n\n(c) The 1,200 people would lose their homes and farmland and would have to rebuild their community somewhere else, which is a serious social cost. The benefit is that the reservoir gives farmers reliable irrigation water, and the hydroelectric power can supply homes and businesses.',
      ru: '(a) 500 ÷ 10 = 50 лет, при условии что все наносы оседают и приток постоянен.\n\n(b) Река ниже плотины несёт меньше наносов, поэтому пойма и дельта получают меньше новой почвы и могут размываться. Регулируемые попуски убирают сезонные паводки, которые раньше разносили воду и питательные вещества по полям и которые многие виды рыб используют для нереста.\n\n(c) 1 200 человек теряют дома и землю и должны заново создать свою общину в другом месте, что является серьёзной социальной издержкой. Выгода в том, что водохранилище даёт фермерам надёжную воду для орошения, а гидроэлектроэнергия может снабжать дома и предприятия.',
    },
    answer: '50',
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a4-sq3',
    subject: 'geo',
    topicIds: ['a4-water-management'],
    paper: 'P1',
    marks: 10,
    command: 'Suggest',
    stimulus: {
      en: 'Illustrative data for an imaginary river: the Kessa River rises in Country A, flows through Country B and enters Country C. Country A plans a dam upstream. The dam would reduce the flow reaching Country C in the dry season by 30% (illustrative data). About 80% of the irrigation water used by farmers in Country C comes from the Kessa River (illustrative data).',
      ru: 'Условные данные (illustrative data) для вымышленной реки: река Кесса берёт начало в стране A, течёт через страну B и впадает в страну C. Страна A планирует плотину выше по течению. Плотина сократит сток, поступающий в страну C в сухой сезон, на 30% (illustrative data). Около 80% воды для орошения у фермеров страны C поступает из реки Кесса (illustrative data).',
    },
    prompt: {
      en: '(a) Define the term transboundary river. (2 marks)\n\n(b) Describe two ways in which the dam upstream could affect farmers in Country C. (3 marks)\n\n(c) Suggest two strategies that could reduce the risk of conflict over the Kessa River, and justify one of them. (5 marks)',
      ru: '(a) Дайте определение термину «трансграничная река» (transboundary river). (2 балла)\n\n(b) Опишите два способа, которыми плотина выше по течению может повлиять на фермеров в стране C. (3 балла)\n\n(c) Предложите две стратегии, которые могли бы снизить риск конфликта из-за реки Кесса, и обоснуйте одну из них. (5 баллов)',
    },
    markscheme: {
      en: '(a) 2 marks: 1 mark for a river that crosses or forms an international boundary; 1 mark for the fact that two or more states share its water.\n\n(b) 3 marks: 1 mark for each named effect (for example, less water for irrigation in the dry season; a changed timing of flows that disrupts planting; less sediment or nutrients reaching the fields); 1 mark for developing one of them with a link to the farmers in Country C.\n\n(c) 5 marks: up to 2 marks for each strategy (1 mark to identify it, 1 mark to explain how it reduces conflict, for example a joint monitoring station, a shared data system, a binding agreement on minimum releases, a phased timetable for the dam, a joint river commission, or water-saving irrigation in Country C); 1 mark for a justification that refers to cost, speed, trust or enforcement.',
      ru: '(a) 2 балла: 1 балл за реку, которая пересекает или образует международную границу; 1 балл за то, что её воду делят два и более государства.\n\n(b) 3 балла: 1 балл за каждое названное последствие (например, меньше воды для орошения в сухой сезон; изменённые сроки стока, которые нарушают сроки посева; меньше наносов или питательных веществ на полях); 1 балл за развитие одного из последствий со связью с фермерами страны C.\n\n(c) 5 баллов: до 2 баллов за каждую стратегию (1 балл — назвать, 1 балл — объяснить, как она снижает конфликт, например совместная станция мониторинга, общая система данных, обязательное соглашение о минимальных попусках, поэтапный график строительства плотины, совместная комиссия по реке или водосберегающее орошение в стране C); 1 балл за обоснование, которое ссылается на стоимость, скорость, доверие или исполнение.',
    },
    model: {
      en: '(a) A transboundary river crosses, or forms, an international border, so two or more states share its water.\n\n(b) First, a 30% cut in dry-season flow would leave less water for irrigation in Country C, so crops could fail in the dry season and farm incomes would fall. Second, a change in the timing of flows, such as storing water in the wet season and releasing it later, could disrupt planting dates and reduce the water and sediment that reach the fields.\n\n(c) A joint monitoring station and shared data system would let all three countries see the same flows, which reduces suspicion and makes disputes easier to settle. A binding agreement on minimum releases in the dry season is more reliable than a promise, because it sets a legal limit that the dam operator must meet and that protects farmers in Country C; it still needs an enforcement mechanism to work. Water-saving irrigation in Country C could reduce its needs, but it does not replace an agreement with the state upstream.',
      ru: '(a) Трансграничная река пересекает или образует международную границу, поэтому два и более государства делят её воду.\n\n(b) Во-первых, сокращение стока в сухой сезон на 30% оставит стране C меньше воды для орошения, поэтому урожай может погибнуть, а доходы фермеров упадут. Во-вторых, изменение сроков стока, например накопление воды в сезон дождей и её выпуск позже, может нарушить сроки посева и уменьшить количество воды и наносов, поступающих на поля.\n\n(c) Совместная станция мониторинга и общая система данных позволили бы всем трём странам видеть одни и те же расходы воды, что снижает подозрительность и облегчает урегулирование споров. Обязательное соглашение о минимальных попусках в сухой сезон надёжнее обещания, потому что устанавливает юридический предел, который должен соблюдать оператор плотины и который защищает фермеров страны C; для работы ему всё равно нужен механизм исполнения. Водосберегающее орошение в стране C может снизить потребность в воде, но не заменяет соглашения с государством выше по течению.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'a4-eq1',
    subject: 'geo',
    topicIds: ['a4-water-management'],
    paper: 'P1',
    marks: 10,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the view that desalination is the most effective long-term response to water scarcity in arid countries such as the UAE.',
      ru: 'Оцените мнение, что опреснение — самый эффективный долгосрочный ответ на дефицит воды в засушливых странах, таких как ОАЭ.',
    },
    hints: [
  {
    "en": "State the effectiveness criterion and the coastal, arid context.",
    "ru": "Укажи критерий эффективности и условия засушливого побережья."
  },
  {
    "en": "The UAE’s 53% combines desalination and treated wastewater; do not call it desalination’s individual share.",
    "ru": "Показатель ОАЭ 53% объединяет опреснение и очищенные стоки; это не отдельная доля опреснения."
  },
  {
    "en": "Explain reliability, energy and brine trade-offs; costs depend on technology and the local system.",
    "ru": "Объясни компромиссы надёжности, энергии и рассола; затраты зависят от технологии и местной системы."
  },
  {
    "en": "Compare the remaining supply gap with feasible conservation and reuse. The 2036 percentages are targets.",
    "ru": "Сравни остаточный дефицит с достижимой экономией и повторным использованием. Проценты до 2036 года — цели."
  }
],
    model: {
  "en": "Desalination can provide a substantial, rainfall-independent water source for an arid coastal country, but “most effective” needs an objective: reliable usable water at acceptable financial, energy and environmental cost. It must also be compared with the amount of demand that can realistically be avoided.\n\nThe UAE Ministry of Energy and Infrastructure reported in March 2025 that desalinated seawater and treated wastewater together supplied 53% of water. This demonstrates the importance of non-conventional sources, but does not identify desalination’s separate share. Coastal access enables seawater treatment; reliable operation still requires energy, functioning intakes, treatment and distribution. Increasing installed capacity does not by itself guarantee affordable delivery during every disruption.\n\nEnergy use and brine disposal are important constraints. Their magnitude depends on the process, feed-water conditions, power supply and discharge design. An energy-intensive plant can diversify freshwater supply, while creating another dependence on reliable energy. Comparing lifetime cost per usable cubic metre is more informative than assuming that every desalination process has the same cost.\n\nThe UAE’s 2036 strategy targets a 21% reduction in total water demand and 95% reuse of treated water. These are objectives, not achievements or proof that a particular mix is already optimal. Conservation can avoid some production, and suitably treated wastewater can substitute for freshwater in appropriate uses. Neither removes the need to meet a remaining reliable supply requirement.\n\nFor a water-scarce coastal state, desalination can consequently be a central long-term component. Whether it is the most effective marginal investment depends on the remaining shortage, feasible savings, alternatives and environmental controls. The evidence supports comparing a diversified portfolio, rather than declaring desalination universally best or inherently ineffective on its own.",
  "ru": "Опреснение может дать засушливой прибрежной стране значительный источник воды, не зависящий напрямую от дождей. Но «самая эффективная мера» требует критерия: надёжно доставленная пригодная вода при приемлемых финансовых, энергетических и экологических затратах. Нужно сравнить и объём спроса, которого реально можно избежать.\n\nВ марте 2025 года Министерство энергетики и инфраструктуры ОАЭ сообщило, что опреснённая морская вода и очищенные сточные воды вместе обеспечивают 53% водоснабжения. Это показывает значение нетрадиционных источников, но не отдельную долю опреснения. Побережье даёт доступ к морской воде; стабильная работа требует энергии, исправного водозабора, очистки и распределения. Само увеличение установленной мощности не гарантирует доступную доставку при любых перебоях.\n\nВажные ограничения — энергозатраты и сброс рассола. Их величина зависит от технологии, исходной воды, энергоснабжения и устройства выпуска. Энергоёмкая установка диверсифицирует водоснабжение, одновременно создавая зависимость от надёжности энергии. Сравнение затрат за весь срок службы на пригодный кубометр полезнее предположения об одинаковой стоимости любого опреснения.\n\nСтратегия ОАЭ до 2036 года ставит цели снизить общий спрос на 21% и повторно использовать 95% очищенной воды. Это цели, а не достижения и не доказательство оптимальности выбранного сочетания. Экономия позволяет избежать части производства, а очищенные стоки — заменить пресную воду там, где это допустимо. Остающийся спрос всё равно требует надёжного покрытия.\n\nИтак, для засушливой прибрежной страны опреснение может быть центральным долгосрочным компонентом. Лучшее ли это следующее вложение, зависит от остаточного дефицита, достижимой экономии, альтернатив и экологических мер. Пример поддерживает сравнение набора источников, а не объявляет опреснение всегда лучшим или заведомо бесполезным само по себе."
},
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Judge effectiveness against a stated long-term objective: reliability, access, cost, energy and environmental effects. Compare desalination with demand measures and other supplies in an arid context.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Оцени эффективность по явной долгосрочной цели: надёжности, доступу, затратам, энергии и экологическим последствиям. Сравни опреснение с управлением спросом и другими источниками в засушливых условиях.",
    },
    origin: 'original',
    minutes: 30,
  },
  {
    id: 'a4-eq2',
    subject: 'geo',
    topicIds: ['a4-water-management'],
    paper: 'P1',
    marks: 10,
    command: 'To what extent',
    prompt: {
      en: 'To what extent can demand management, rather than new supply, solve water shortages in a city with rapid population growth?',
      ru: 'В какой степени управление спросом, а не новое предложение, может решить проблему нехватки воды в городе с быстрым ростом населения?',
    },
    hints: [
  {
    "en": "Separate total demand, per-person use, non-domestic use and actual leakage.",
    "ru": "Раздели общий спрос, расход на человека, небытовое использование и реальные утечки."
  },
  {
    "en": "Test the hypothetical 25% population increase and 20% per-person reduction. Explain what is held constant.",
    "ru": "Проверь условные рост населения на 25% и снижение расхода на человека на 20%. Назови неизменные условия."
  },
  {
    "en": "Use PUB’s 2065 projection as a forecast. NEWater is reusable supply, not proof of reduced end-user demand.",
    "ru": "Используй прогноз PUB до 2065 года именно как прогноз. NEWater — повторно используемое предложение, а не доказательство падения спроса потребителей."
  },
  {
    "en": "Compare achievable savings with the gap, costs, lead times and basic access. Avoid an automatic ranking of demand and supply measures.",
    "ru": "Сравни достижимую экономию с дефицитом, затратами, сроками и базовым доступом. Не задавай автоматического превосходства мер спроса или предложения."
  }
],
    model: {
  "en": "Demand management can close a water shortage if achievable reductions and loss control cover the gap while protecting essential use. Rapid population growth makes that test harder, but does not establish the answer without quantities. Total use depends on population, use per person, businesses and system losses.\n\nMetering helps identify use and losses; efficient appliances or industrial processes can reduce the water required for a given service. Repairing real leaks makes more of the supplied water available. The cost and speed of these measures depend on the existing network and the next repair or upgrade, so they cannot all be assumed cheaper or faster than every supply project. Charging for use can influence avoidable consumption, but households already below an adequate basic supply have little safe room to cut. Affordability protection and the design of charges matter.\n\nSingapore provides an integrated example. PUB’s Water Loop page, updated in April 2026, projects that total demand could almost double by 2065 and expects NEWater and desalination to meet most of that future demand. This is a planning projection, not evidence that every leak has already been repaired or that population growth alone causes the increase. NEWater expands usable supply through treatment and reuse; it should not simply be counted as a fall in end-user demand.\n\nIn an illustrative city where population rises 25%, a 20% fall in use per person exactly offsets the household increase: 1.25 × 0.80 = 1.00, before other uses and losses change. This counterexample shows why growth does not automatically require higher household supply. If feasible savings are smaller than the actual gap, additional reliable supply is needed. The defensible conclusion is therefore conditional on a water balance, implementation costs and equitable access, rather than a universal claim that demand management solves most or rarely all shortages.",
  "ru": "Управление спросом может устранить дефицит, если достижимое сокращение расхода и реальных потерь покрывает разрыв без ущерба для необходимых потребностей. Быстрый рост населения усложняет задачу, но сам по себе не даёт ответа без расчётов. Общий расход зависит от численности, потребления на человека, предприятий и потерь сети.\n\nУчёт помогает выявлять расход и потери; эффективные приборы и производственные процессы могут уменьшить объём воды для той же услуги. Ремонт настоящих утечек делает больше поданной воды доступной потребителям. Цена и сроки зависят от состояния сети и конкретной следующей работы, поэтому нельзя объявить все эти меры дешевле или быстрее любого нового источника. Плата за расход способна влиять на необязательное потребление, но у семей с уже недостаточным базовым обеспечением мало безопасных возможностей сокращения. Важны защита доступности и устройство тарифа.\n\nСингапур даёт пример комплексного подхода. Страница PUB Water Loop, обновлённая в апреле 2026 года, допускает почти удвоение общего спроса к 2065 году и предполагает, что NEWater и опреснение покроют его большую часть. Это плановый прогноз, а не доказательство устранения всех утечек или влияния одного роста населения. NEWater увеличивает пригодное предложение через очистку и повторное использование; его нельзя просто засчитать как снижение спроса конечных потребителей.\n\nВ условном городе рост населения на 25% точно компенсируется сокращением расхода на человека на 20%: 1,25 × 0,80 = 1,00, пока остальные виды использования и потери неизменны. Контрпример показывает, почему рост населения не требует автоматически увеличения бытового водоснабжения. Если достижимая экономия меньше реального разрыва, нужен дополнительный надёжный источник. Поэтому вывод зависит от водного баланса, затрат реализации и справедливого доступа, а не от универсального обещания решить большую часть или почти никогда не решить весь дефицит."
},
    markscheme: {
      en: "**Review this original 10-mark answer as a whole.**\n\nThe Geography guide’s common Paper 1 optional/Paper 2 extended-response bands are 1–2, 3–4, 5–6, 7–8 and 9–10 (printed pp. 56–58). Our checklist paraphrases that approach; it is not fixed marks per bullet or a quota of countries, numbers or citations.\n\nCheck focus on the exact command, accurate geographical concepts, relevant evidence integrated into explanations, evaluation of perspectives and limitations, and a justified conclusion where appropriate. Use maps or diagrams when relevant and explain them. A 7–8 response can lack balance; the top band requires developed evaluation and a focused, balanced argument.\n\n**For this question:** Separate per-person use from total demand as population changes. Evaluate conservation, distribution losses, access and the remaining supply gap; avoid assuming price rises always reduce every household’s use.",
      ru: "**Оценивай этот авторский ответ на 10 баллов целиком.**\n\nОбщие уровни Geography guide для развёрнутых заданий Paper 1 по опциям и Paper 2: 1–2, 3–4, 5–6, 7–8 и 9–10 (печатные с. 56–58). Наш список передаёт этот подход своими словами; это не фиксированные баллы за пункты и не квота стран, чисел или ссылок.\n\nПроверь ответ на точную команду, верность понятий, связь доказательств с объяснением, оценку позиций и ограничений и обоснованный вывод там, где он нужен. Карты и диаграммы должны быть уместны и объяснены. Ответу на 7–8 может недоставать баланса; верхний уровень требует развитой оценки и сосредоточенного сбалансированного аргумента.\n\n**Для этого вопроса:** Разделяй расход на человека и общий спрос при изменении населения. Оцени экономию, потери сети, доступ и остаточный дефицит; не считай, что рост цены обязательно снижает расход каждой семьи.",
    },
    origin: 'original',
    minutes: 30,
  },
];
