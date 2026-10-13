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
      en: '(a) 2 marks: 1 mark for the method, 500 ÷ 10; 1 mark for 50 years. Follow through an error in the division if the method is right. Credit a candidate who states that the estimate ignores changes in inflow.\n\n(b) 4 marks: up to 2 marks for each effect (1 mark to identify it, 1 mark to develop it). Accept, for example: less sediment reaches the delta or floodplain, so the coast can erode and the floodplain is not renewed; the seasonal flood pattern is reduced, which affects farming and fish breeding; water released from the dam is clearer and colder, which changes the river ecosystem; less flow in the dry season harms users further downstream.\n\n(c) 4 marks: up to 2 marks for the social cost (identify and explain, for example the loss of 1,200 homes, farmland and community ties); up to 2 marks for the benefit (identify and explain, for example reliable irrigation water for farmers, or electricity for local homes).',
      ru: '(a) 2 балла: 1 балл за метод, 500 ÷ 10; 1 балл за 50 лет. Ошибка в делении засчитывается дальше, если метод верен. Засчитывается указание, что оценка не учитывает изменение притока.\n\n(b) 4 балла: до 2 баллов за каждое последствие (1 балл — назвать, 1 балл — развить). Засчитываются, например: меньше наносов доходит до дельты или поймы, поэтому берег может размываться, а пойма не обновляется; сокращается сезонное половодье, что вредит земледелию и нересту рыбы; вода из плотины становится прозрачнее и холоднее, что меняет речную экосистему; меньший сток в сухой сезон вредит пользователям ещё ниже по течению.\n\n(c) 4 балла: до 2 баллов за социальную издержку (назвать и объяснить, например, потерю 1 200 домов, земли и связей в общине); до 2 баллов за выгоду (назвать и объяснить, например, надёжную воду для орошения фермеров или электроэнергию для местных домов).',
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
        en: 'Plan: define desalination in one sentence and give the evidence that the UAE relies on it (non-conventional sources supply 53% of its water, UAE Ministry of Energy and Infrastructure, 2025).',
        ru: 'План: в одном предложении определите опреснение и приведите данные о том, что ОАЭ во многом на него опираются (нетрадиционные источники дают 53% водоснабжения, Министерство энергетики и инфраструктуры ОАЭ, 2025).',
      },
      {
        en: 'Strengths: the water does not depend on rain or rivers, the UAE has a long coastline, and capacity can be increased by adding plants.',
        ru: 'Сильные стороны: вода не зависит от дождей и рек, у ОАЭ длинное побережье, а мощность можно увеличить, добавляя заводы.',
      },
      {
        en: 'Weaknesses: high energy use (roughly 3 to 4 kWh per cubic metre for seawater reverse osmosis), brine disposal, costs that follow energy prices, and dependence on a few large plants.',
        ru: 'Слабые стороны: высокий расход энергии (примерно 3–4 кВт·ч на кубометр при обратном осмосе морской воды), сброс рассола, издержки, которые зависят от цен на энергию, и зависимость от нескольких крупных заводов.',
      },
      {
        en: 'Judgement (top band): say whether desalination is the most effective response by comparing it with demand management (the UAE target is a 21% cut in total demand) and with reuse (a 95% target for treated wastewater by 2036), and state the conditions under which it is the best long-term choice.',
        ru: 'Вывод (высший уровень): скажите, является ли опреснение самым эффективным ответом, сравнив его с управлением спросом (цель ОАЭ — снижение общего спроса на 21%) и повторным использованием (цель — 95% очищенных сточных вод к 2036 году), и укажите условия, при которых это лучший долгосрочный выбор.',
      },
    ],
    model: {
      en: 'Desalination is an important long-term response in arid coastal states, but on its own it is not the most effective one. In the UAE, non-conventional sources (desalinated seawater and treated wastewater) provide 53% of the water supply (Ministry of Energy and Infrastructure, 2025), which shows how far the country depends on them. Desalinated water does not depend on rain or on aquifers that can be exhausted, and capacity can be added by building more plants. However, desalination is energy-intensive, so its cost follows fuel and electricity prices, and its brine can harm marine life if it is poorly dispersed. The UAE’s own strategy shows that supply alone is not enough: it targets a 21% cut in total demand and the reuse of 95% of treated wastewater by 2036. Desalination works best as one part of a mix with demand cuts and reuse; on its own it is a costly way to meet a demand that could be reduced.',
      ru: 'Опреснение — важный долгосрочный ответ для засушливых прибрежных государств, но само по себе оно не самый эффективный ответ. В ОАЭ нетрадиционные источники (опреснённая морская вода и очищенные сточные воды) дают 53% водоснабжения (Министерство энергетики и инфраструктуры ОАЭ, 2025), что показывает, насколько страна от них зависит. Опреснённая вода не зависит от дождей и от подземных вод, которые могут истощиться, а мощность можно наращивать, строя новые заводы. Однако опреснение энергоёмко, поэтому его стоимость зависит от цен на топливо и электроэнергию, а рассол может вредить морской жизни, если его плохо рассеивать. Собственная стратегия ОАЭ показывает, что одного предложения недостаточно: она ставит цель снизить общий спрос на 21% и повторно использовать 95% очищенных сточных вод к 2036 году. Опреснение работает лучше всего как часть набора вместе со снижением спроса и повторным использованием; само по себе оно — дорогой способ покрыть спрос, который можно было бы сократить.',
    },
    markscheme: {
      en: 'Level 1 (1–3 marks): describes desalination or lists water supply options, with no evaluation.\n\nLevel 2 (4–6 marks): explains at least one strength and one weakness of desalination, with limited evidence.\n\nLevel 3 (7–8 marks): evaluates desalination against at least one alternative (for example demand management or reuse), using at least one dated figure and source (for example the UAE figure of 53% from 2025).\n\nLevel 4 (9–10 marks): sustained evaluation that weighs energy use, brine, cost and demand, and reaches a supported judgement on when desalination is the most effective long-term response.',
      ru: 'Уровень 1 (1–3 балла): описывает опреснение или перечисляет варианты водоснабжения, без оценки.\n\nУровень 2 (4–6 баллов): объясняет минимум одну сильную и одну слабую сторону опреснения, с ограниченным количеством данных.\n\nУровень 3 (7–8 баллов): оценивает опреснение в сравнении минимум с одной альтернативой (например, управлением спросом или повторным использованием), используя минимум одну цифру с годом и источником (например, 53% за 2025 год для ОАЭ).\n\nУровень 4 (9–10 баллов): последовательная оценка, которая взвешивает энергию, рассол, стоимость и спрос, и приходит к обоснованному выводу о том, когда опреснение — самый эффективный долгосрочный ответ.',
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
        en: 'Plan: define demand management and supply augmentation, and name two tools of each (for example pricing and leakage control; desalination and inter-basin transfer).',
        ru: 'План: определите управление спросом и увеличение предложения и назовите по два инструмента каждого (например, тарифы и контроль утечек; опреснение и межбассейновую переброску).',
      },
      {
        en: 'For demand management: it usually costs less per cubic metre saved than new supply, it needs no new river or aquifer, and metering, leakage control, tariffs and reuse can start quickly. Singapore treats reuse (NEWater) as one of its four national taps.',
        ru: 'За управление спросом: оно обычно стоит меньше в пересчёте на кубометр сэкономленной воды, чем новое предложение, не требует новой реки или водоносного горизонта, а учёт, контроль утечек, тарифы и повторное использование можно начать быстро. Сингапур рассматривает повторное использование (NEWater) как один из четырёх национальных источников воды.',
      },
      {
        en: 'Against: savings are limited. Singapore’s PUB projects that total demand could almost double by 2065, so new sources are needed even after leaks are fixed. Price-based measures also fall hardest on poorer households.',
        ru: 'Против: возможности экономии ограничены. PUB прогнозирует, что общий спрос в Сингапуре может почти удвоиться к 2065 году, поэтому новые источники нужны и после устранения утечек. Меры, основанные на цене, сильнее всего бьют по бедным домохозяйствам.',
      },
      {
        en: 'Judgement (top band): weigh the speed of population growth against the time needed to build new supply, and conclude whether demand management can close the gap alone or only part of it.',
        ru: 'Вывод (высший уровень): сопоставьте темп роста населения со временем, которое нужно на строительство нового предложения, и сделайте вывод, может ли управление спросом закрыть разрыв в одиночку или только частично.',
      },
    ],
    model: {
      en: 'Demand management can solve much of a shortage, but rarely all of it in a fast-growing city. Its strengths are that it usually costs less per cubic metre saved than new supply, needs no new river or aquifer, and can start quickly through metering, leakage control, tariffs and reuse; Singapore’s NEWater shows how reuse can become a national tap. Its limit is that savings are finite. Singapore expects total demand to almost double by 2065, so a growing city needs new sources even after every leak has been repaired. Demand cuts also fall hardest on poor households when they work through price, so they must be paired with protection for basic use. Overall, demand management can cover a large part of a shortage and buys time, but in a rapidly growing city it works best when combined with new supply such as reuse, desalination or storage.',
      ru: 'Управление спросом может решить большую часть проблемы нехватки воды, но редко решает её целиком в быстро растущем городе. Его сильные стороны в том, что оно обычно стоит меньше в пересчёте на кубометр сэкономленной воды, чем новое предложение, не требует новой реки или водоносного горизонта и может быстро начаться с учёта, контроля утечек, тарифов и повторного использования; NEWater в Сингапуре показывает, как повторное использование может стать национальным источником. Его предел в том, что экономия ограничена. Сингапур ожидает, что общий спрос почти удвоится к 2065 году, поэтому растущему городу нужны новые источники даже после устранения всех утечек. Снижение спроса через цену также сильнее всего бьёт по бедным домохозяйствам, поэтому его нужно сочетать с защитой базового потребления. В целом управление спросом покрывает большую часть нехватки и даёт время, но в быстро растущем городе работает лучше всего в сочетании с новым предложением: повторным использованием, опреснением или хранилищами.',
    },
    markscheme: {
      en: 'Level 1 (1–3 marks): describes demand management or supply options without linking them to population growth, with no judgement.\n\nLevel 2 (4–6 marks): explains at least one strength and one limit of demand management, with limited evidence.\n\nLevel 3 (7–8 marks): compares demand management with new supply for a fast-growing city, using at least one dated figure and source (for example the PUB projection that Singapore’s demand could almost double by 2065).\n\nLevel 4 (9–10 marks): sustained judgement on how far demand management can meet the shortage alone, weighing the rate of growth, the time needed to build supply, costs and the effects on poorer households, and reaching a supported conditional conclusion.',
      ru: 'Уровень 1 (1–3 балла): описывает управление спросом или варианты предложения без связи с ростом населения, без вывода.\n\nУровень 2 (4–6 баллов): объясняет минимум одну сильную сторону и один предел управления спросом, с ограниченным количеством данных.\n\nУровень 3 (7–8 баллов): сравнивает управление спросом с новым предложением для быстро растущего города, используя минимум одну цифру с годом и источником (например, прогноз PUB о почти двукратном росте спроса в Сингапуре к 2065 году).\n\nУровень 4 (9–10 баллов): последовательный вывод о том, может ли управление спросом решить проблему нехватки воды в одиночку, с учётом темпов роста, времени на строительство предложения, издержек и последствий для бедных домохозяйств, и обоснованный условный вывод.',
    },
    origin: 'original',
    minutes: 30,
  },
];
