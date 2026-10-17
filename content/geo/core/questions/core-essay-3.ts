import type { Question } from '../../../../src/contract/types';

// Section C essays for Unit 3 (resource consumption). Original questions in IB command-term style.
// The markschemes are our band checklists in general words, not the official descriptors (check the guide).
// Figures in the model answers come from the sources listed in the topic meta file (USGS Mineral Commodity
// Summaries 2026, Bureau of Reclamation, FAO SOFI 2025, National Footprint and Biocapacity Accounts 2026 edition)
// and from the case files for topics 3.1 and 3.2. No case file exists yet for topic 3.3.
export const questions: Question[] = [
  {
    id: 'core-essay-3-1',
    subject: 'geo',
    topicIds: ['core-essay-3'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'To what extent',
    prompt: {
      en: `To what extent does rising consumption threaten global resource security in food, water and energy?`,
      ru: `В какой степени растущее потребление угрожает глобальной ресурсной безопасности (resource security) в области продовольствия, воды и энергии?`,
    },
    markscheme: {
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Assess food, water and energy together while distinguishing physical availability from access and affordability. Explain demand, technology, distribution and environmental limits; justify how far rising consumption threatens security under the selected conditions.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Рассмотри продовольствие, воду и энергию, отличая физическое наличие от доступа и доступности по цене. Объясни спрос, технологии, распределение и экологические пределы; обоснуй степень угрозы растущего потребления при выбранных условиях.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      "en": "**Plan**\n\n1. Thesis: rising consumption can threaten food, water and energy security, but the extent depends on local access, infrastructure, substitution and supply governance; a single global indicator cannot rank all three.\n2. Energy: DRC cobalt concentration and export quotas can disrupt battery-material supply. Link this to energy storage and transport electrification, while distinguishing a material bottleneck from a measured interruption to electricity supply.\n3. Food: FAO SOFI 2025 reports hunger falling from 8.5% in 2023 to 8.2% in 2024, but 2.6 billion people unable to afford a healthy diet. Explain how demand and input costs can affect price and access; the aggregate improvement does not prove every region is secure.\n4. Water: Reclamation reported Colorado system storage around 36% of capacity in April 2026; its basin overview assigns about 70% of river water to agriculture. Explain competition between irrigation, cities and energy, without attributing the storage figure to demand alone: drought and supply matter too.\n5. Judgement: quantify each case on its own terms. Distinguish snapshots from trends and mechanisms from measured causal effects; evaluate conservation, substitution and access policies.\n\n**Model paragraph**\n\nThe threat is conditional rather than uniform. For energy, the USGS 2026 cobalt summary describes the DRC as supplying about 73% of world mined cobalt in 2025 and records export quotas for 2026–2027. Because lithium-ion batteries are cobalt’s leading global use, concentrated supply can expose parts of the energy transition to price and availability shocks. This is not evidence of a particular electricity outage, and cobalt-free substitutes can change demand. Food security concerns access as well as output: FAO SOFI 2025 reports 8.2% of people facing hunger in 2024, down from 8.5% in 2023, while 2.6 billion could not afford a healthy diet. A global improvement does not remove local price and distribution risks. In water, Colorado system storage was around 36% of capacity in April 2026, while agriculture accounts for about 70% of river water in the basin overview. Growing demand can intensify competition, but drought and allocation rules also shape the outcome. Rising consumption therefore poses a substantial risk where supply and access cannot adjust; these different indicators cannot by themselves establish a universal ranking or measure consumption’s causal contribution.",
      "ru": "**План**\n\n1. Тезис: рост потребления может угрожать продовольственной, водной и энергетической безопасности, но степень зависит от доступа, инфраструктуры, замещения и управления поставками. Один мировой показатель не даёт рейтинга всех трёх сфер.\n2. Энергия: концентрация добычи кобальта в ДРК и экспортные квоты могут затруднять поставки материалов для батарей. Свяжите это с накоплением энергии и электрификацией транспорта, отличая дефицит материала от измеренного перебоя электроснабжения.\n3. Продовольствие: FAO SOFI 2025 сообщает о снижении доли голодающих с 8,5% в 2023 до 8,2% в 2024, но 2,6 млрд человек не могли позволить себе здоровое питание. Объясните влияние спроса и затрат на цены и доступ; мировое улучшение не доказывает безопасности каждого региона.\n4. Вода: Бюро мелиорации США сообщило о запасах системы Колорадо около 36% ёмкости в апреле 2026; обзор бассейна относит около 70% воды к сельскому хозяйству. Объясните конкуренцию орошения, городов и энергетики, не приписывая весь показатель запасов спросу: важны и засуха, и предложение.\n5. Суждение: оценивайте каждый кейс в его собственных единицах. Различайте срез и тенденцию, механизм и измеренный причинный эффект; взвесьте экономию, замещение и меры доступа.\n\n**Образец абзаца**\n\nУгроза зависит от условий. Для энергии сводка USGS 2026 описывает долю ДРК примерно в 73% мировой добычи кобальта за 2025 год и приводит экспортные квоты на 2026–2027 годы. Поскольку литий-ионные батареи — главное мировое применение кобальта, концентрация поставок может создавать ценовые риски и ограничения для части энергоперехода. Это не свидетельство конкретного отключения электричества; заменители без кобальта могут менять спрос. В продовольствии важен доступ, а не только выпуск: по FAO SOFI 2025 в 2024 году голодали 8,2% людей против 8,5% в 2023, а 2,6 млрд не могли позволить себе здоровое питание. Мировое улучшение не устраняет местных проблем цен и распределения. Для воды запасы системы Колорадо составляли около 36% ёмкости в апреле 2026, тогда как обзор бассейна относит около 70% воды к сельскому хозяйству. Рост спроса может обострять конкуренцию, но результат зависит и от засухи, и от правил распределения. Поэтому рост потребления создаёт значительный риск там, где предложение и доступ не успевают меняться; разные показатели сами по себе не дают универсального рейтинга и не измеряют причинный вклад потребления."
    },
    origin: 'original',
    minutes: 20,
  },
  {
    id: 'core-essay-3-2',
    subject: 'geo',
    topicIds: ['core-essay-3'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'Evaluate',
    prompt: {
      en: `Evaluate the effectiveness of resource stewardship methods, such as quotas, certification, recycling and governance, in a named case.`,
      ru: `Оцените эффективность методов бережного управления ресурсами (resource stewardship), таких как квоты, сертификация, переработка и управление (governance), на примере одного названного случая.`,
    },
    markscheme: {
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Develop the named case requested: link each selected stewardship method to its objective and implementation, then test outcomes, enforcement, distribution and unintended effects. One well-developed named case can meet this prompt; extra country names are not a substitute for evaluation.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Подробно разбери названный случай из условия: свяжи выбранные методы с целями и реализацией, затем проверь результат, исполнение, распределение и побочные эффекты. Этому вопросу может отвечать один глубоко разобранный случай; дополнительные названия стран не заменяют оценку.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      en: `**Plan**

1. Thesis: stewardship methods work only when the cap matches the resource that exists and the rules can change in time; quotas and allocation control use more reliably than they conserve the resource itself.
2. Point 1 (allocation, Colorado River): agriculture uses 70% of the river's water, and 35 to 40 million people rely on it for some or all of their municipal needs. System storage fell to about 36% of capacity in April 2026, so the water on paper and the water in the system have diverged (Bureau of Reclamation).
3. Point 2 (governance and timing): the 2007 decision covered determinations through 2025 for operations through 2026 (printed p.4); the 2027–2028 guidelines were issued on 21 August 2026 (Reclamation announcement). These dates show a transition between operating periods, not a seven-month gap without rules or proof that the new rules caused earlier storage losses.
4. Point 3 (quotas and substitution, counter-evidence): the Democratic Republic of the Congo's export ban of February 2025, later replaced by quotas, was meant to address oversupply and low prices; the quotas include 9,600 tonnes for national strategic reserves (USGS, 2026). Cobalt-free substitutes held a significant market share in China.
5. Judgement: quotas and governance manage markets and allocations. For renewable resources, conservation depends on withdrawals consistent with replenishment, ecological needs and enforcement. Cobalt does not renew on human timescales: export quotas alone do not prove reduced extraction or depletion; assess material efficiency, recycling and substitution separately. Recycling and certification need evidence that this case does not give, so they are judged as unproven here.
6. Conclusion: stewardship is partly effective; judge water allocation against hydrological conditions and mineral quotas against their stated market objective and observed extraction, rather than treating either as automatic conservation.

**Model paragraph**

Stewardship methods work only when the cap matches the resource that exists and the rules can change in time. The Colorado River shows the limits of allocation: agriculture uses 70% of its water, and 35 to 40 million people rely on it for some or all municipal needs (US Bureau of Reclamation). Storage was about 36% of capacity in April 2026. The 2007 decision provided for operations through 2026, and the guidelines for operating years 2027–2028 were issued on 21 August 2026 (US Bureau of Reclamation, 2007 decision p.4 and 2026 announcement). Publication timing alone proves neither an operational gap nor the cause of low storage. The Democratic Republic of the Congo shows a market tool: its February 2025 export ban, replaced by quotas, was meant to address oversupply and low prices (USGS, 2026). Recycling can reduce demand, but the evidence cited here gives no recycling rate. These cases distinguish market management from conservation: the export quota’s price objective does not measure its effect on geological reserves. Effective stewardship needs evidence on actual extraction, replenishment where applicable, ecosystem impacts and compliance.`,
      ru: `**План**

1. Тезис: методы бережного управления работают только тогда, когда предел соответствует существующему ресурсу и правила могут меняться вовремя; квоты и распределение надёжнее регулируют использование, чем сохраняют сам ресурс.
2. Пункт 1 (распределение, река Колорадо): сельское хозяйство использует 70% воды реки, а от 35 до 40 млн человек зависят от неё для части или всех муниципальных нужд. Запасы системы снизились примерно до 36% ёмкости в апреле 2026 года, поэтому объёмы на бумаге и вода в системе разошлись (Бюро мелиорации США).
3. Пункт 2 (управление и сроки): решение 2007 года охватывало принятие решений до конца 2025 года об эксплуатации в 2026 году (печатная стр.4); правила на 2027–2028 годы опубликованы 21 августа 2026 года (сообщение Бюро мелиорации США). Это переход между эксплуатационными периодами, а не доказательство семимесячного отсутствия правил или причины прежнего снижения запасов.
4. Пункт 3 (квоты и замещение, контрпример): экспортный запрет Демократической Республики Конго на кобальт (февраль 2025 года), позже заменённый квотами, был направлен на борьбу с перепроизводством и низкими ценами; квоты включают 9 600 тонн для национальных стратегических резервов (USGS, 2026). Заменители без кобальта имели значительную долю рынка в Китае.
5. Суждение: квоты и управление регулируют рынок и распределение. Для возобновляемых ресурсов важны изъятие с учётом пополнения, потребностей экосистем и контроль исполнения. Кобальт не возобновляется в человеческом масштабе времени: экспортная квота сама по себе не доказывает сокращения добычи и истощения; эффективность использования, переработку и замещение оценивай отдельно. Переработка и сертификация требуют данных, которых в этом случае нет, поэтому здесь они остаются недоказанными.
6. Вывод: бережное управление частично эффективно; распределение воды нужно оценивать с учётом гидрологии, а минеральные квоты — по рыночной цели и фактической добыче, не считая ни один инструмент автоматическим сохранением ресурса.

**Образец абзаца**

Методы бережного управления работают только тогда, когда предел соответствует существующему ресурсу и правила могут меняться вовремя. Река Колорадо показывает ограничения распределения: сельское хозяйство использует 70% её воды, а от 35 до 40 млн человек зависят от неё для части или всех муниципальных нужд (Бюро мелиорации США). Запасы составляли примерно 36% ёмкости в апреле 2026 года. Решение 2007 года предусматривало эксплуатацию в течение 2026 года, а правила на 2027–2028 годы опубликованы 21 августа 2026 года (Бюро мелиорации США, решение 2007 года, стр.4, и сообщение 2026 года). Даты публикации сами по себе не доказывают ни отсутствия правил эксплуатации, ни причины низких запасов. Демократическая Республика Конго показывает рыночный инструмент: её экспортный запрет на кобальт в феврале 2025 года, заменённый квотами, должен был бороться с перепроизводством и низкими ценами (USGS, 2026). Переработка может снизить спрос, но приведённые здесь данные не содержат доли переработки. Эти примеры различают регулирование рынка и сохранение ресурса: ценовая цель экспортной квоты не измеряет её влияние на геологические запасы. Для оценки нужны данные о фактической добыче, пополнении там, где оно возможно, воздействии на экосистемы и соблюдении правил.`,
    },
    origin: 'original',
    minutes: 20,
  },
  {
    id: 'core-essay-3-3',
    subject: 'geo',
    topicIds: ['core-essay-3'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'Discuss',
    prompt: {
      en: `Discuss whether high-income countries bear responsibility for the impacts of resource use, considering consumption as well as production.`,
      ru: `Обсудите, несут ли страны с высоким уровнем дохода ответственность за последствия использования ресурсов, учитывая как потребление (consumption), так и производство (production).`,
    },
    markscheme: {
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Compare production-based and consumption-based accounting, trade-related displacement and differences within income groups. Justify responsibility using an explicit principle, distinguish evidence from a fairness judgement and consider capacity to respond.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Сравни учёт по производству и потреблению, перенос воздействия через торговлю и различия внутри доходных групп. Обоснуй ответственность явным принципом, отличай данные от суждения о справедливости и учитывай возможности действовать.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      en: `**Plan**

1. Thesis: high-income countries bear a large but shared responsibility; the answer depends on whether impacts are counted where goods are made or where they are used.
2. Point 1 (production accounts): the footprint of production in the United States was 7.09 global hectares per person in 2023, against a world figure of 2.56 (National Footprint and Biocapacity Accounts, 2026 edition).
3. Point 2 (consumption accounts): demand drives extraction elsewhere. USGS names China as the world's leading consumer of cobalt, mostly for lithium-ion batteries, while the Democratic Republic of the Congo produced about 73% of world output in 2025 (USGS, 2026). Qatar's footprint was 11.70 on production and 12.06 on consumption per person in 2023, so the two accounts differ.
4. Point 3 (counter-evidence): local communities bear harm near production sites. At Nisisioken Ogale in Nigeria, benzene in well water exceeded the WHO guideline more than 900 times (UNEP, 2012); producing states and companies carry the duty to clean up and regulate.
5. Judgement: responsibility is shared. High-income buyers answer for demand and their own footprint, while producers and governments have direct operational and regulatory responsibilities. Buyers may also bear responsibility through supply chains; the cited local contamination does not quantify each actor’s share.
6. Conclusion: high-income countries bear a large share of responsibility for demand, but not sole responsibility for every impact.

**Model paragraph**

High-income countries bear a large but shared responsibility, and the answer depends on the accounting. A production-based account places impacts where goods are made: in 2023 the United States' footprint of production was 7.09 global hectares per person, against a world figure of 2.56 (National Footprint and Biocapacity Accounts, 2026 edition). A consumption-based account allocates embodied demand to consumption after adjusting for imports and exports, and Qatar's 2023 figures show the two can differ: 11.70 on production and 12.06 on consumption (same source). USGS names China the world's leading consumer of cobalt, mostly for lithium-ion batteries, while the Democratic Republic of the Congo produced about 73% of world output in 2025 (USGS, 2026). Local communities bear the harm near production sites: benzene in well water at Nisisioken Ogale in Nigeria exceeded the WHO guideline more than 900 times (UNEP, 2012). Responsibility is therefore shared.`,
      ru: `**План**

1. Тезис: страны с высоким уровнем дохода несут большую, но общую ответственность; ответ зависит от того, учитываются ли последствия там, где товары производятся, или там, где они используются.
2. Пункт 1 (учёт по производству): след производства в Соединённых Штатах составил 7,09 глобального гектара (gha) на человека в 2023 году при мировом показателе 2,56 (National Footprint and Biocapacity Accounts, издание 2026 года).
3. Пункт 2 (учёт по потреблению): спрос движет добычей в других странах. USGS называет Китай ведущим мировым потребителем кобальта, главным образом для литий-ионных батарей, тогда как Демократическая Республика Конго дала около 73% мирового объёма в 2025 году (USGS, 2026). След производства Катара составил 11,70, а след потребления — 12,06 gha на человека в 2023 году, поэтому учёты различаются.
4. Пункт 3 (контрпример): местный ущерб несут сообщества у мест производства. В Нисисиокен-Огале в Нигерии бензол в колодезной воде превышал рекомендацию ВОЗ более чем в 900 раз (UNEP, 2012); обязанность очищать и регулировать лежит на производящих государствах и компаниях.
5. Суждение: ответственность общая. Покупатели из стран с высоким доходом отвечают за спрос и свой собственный след, а производители и государства непосредственно отвечают за производственные решения и регулирование. Покупатели тоже могут нести ответственность через цепочки поставок; данные о местном загрязнении не измеряют долю каждого участника.
6. Вывод: страны с высоким доходом несут большую долю ответственности за спрос, но не единоличную ответственность за каждое последствие.

**Образец абзаца**

Страны с высоким уровнем дохода несут большую, но общую ответственность, и ответ зависит от учёта. Учёт по производству относит последствия к месту, где товары изготовлены: в 2023 году след производства в Соединённых Штатах составил 7,09 глобального гектара (gha) на человека при мировом показателе 2,56 (National Footprint and Biocapacity Accounts, издание 2026 года). Учёт по потреблению относит воплощённую потребность к потреблению после поправок на импорт и экспорт, и данные по Катару за 2023 год показывают, что величины могут различаться: 11,70 по производству и 12,06 по потреблению (там же). USGS называет Китай ведущим мировым потребителем кобальта, главным образом для литий-ионных батарей, тогда как Демократическая Республика Конго дала около 73% мирового объёма в 2025 году (USGS, 2026). Местный ущерб несут сообщества у мест производства: бензол в колодезной воде в Нисисиокен-Огале в Нигерии превышал рекомендацию ВОЗ более чем в 900 раз (UNEP, 2012). Поэтому ответственность общая.`,
    },
    origin: 'original',
    minutes: 20,
  },
  {
    id: 'core-essay-3-4',
    subject: 'geo',
    topicIds: ['core-essay-3'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'Examine',
    prompt: {
      en: `Examine the water–food–energy nexus and the trade-offs between economic growth and resource conservation, using named examples.`,
      ru: `Исследуйте связку «вода — продовольствие — энергия» (water–food–energy nexus) и компромиссы между экономическим ростом и сохранением ресурсов, используя названные примеры.`,
    },
    markscheme: {
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Explain two-way links among water, food and energy in named examples. Identify the mechanism, affected stakeholders and opportunity cost of a decision, then assess alternatives and conditions under which growth and conservation reinforce or conflict with each other.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Объясни двусторонние связи воды, продовольствия и энергии на названных примерах. Укажи механизм, затронутые группы и альтернативные издержки решения, затем оцени варианты и условия согласования либо конфликта роста и сохранения ресурсов.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      en: `**Plan**

1. Thesis: growth in one part of the nexus usually raises pressure on the others, so the trade-offs are real, but they can be managed where flows are measured and rules are enforced.
2. Point 1 (water and food, Aral Sea): river inflow fell from 42 km³ in 1960 to 4.5 km³ in 2010, and the sea's area fell by 79% over the same period (Springer, Applied Water Science, 2012; own calculation). Irrigation raised farm output at the expense of the sea.
3. Point 2 (managed system, Colorado River): agriculture uses 70% of the river's water, and storage fell to about 36% of capacity in April 2026 (Bureau of Reclamation). The trade-off is visible, but allocation cannot create water.
4. Point 3 (monitoring and energy, Brazil): the PRODES estimate of clearing fell 11.08% to 5,796 km² in the year from August 2024 to July 2025, while clearing in Mato Grosso rose by 25.06% (INPE, 2025). Energy links too: carbon made up about 60% of the world footprint in 2023 (National Footprint and Biocapacity Accounts, 2026 edition), and battery demand shifts pressure toward mining regions such as the Democratic Republic of the Congo and Indonesia (USGS, 2026).
5. Judgement: where rivers are overcommitted, growth is not sustainable; monitoring can reveal pressures, but does not by itself resolve a trade-off; actual outcomes depend on enforceable limits, resource conditions and choices about access.
6. Conclusion: growth and conservation can coexist when resource use and damage are kept within relevant limits; monitoring and enforceable rules can help, but the cited changes do not prove that monitoring alone caused improvement.

**Model paragraph**

Growth in one part of the water–food–energy nexus usually raises pressure on the others, so trade-offs are real but manageable. The Aral Sea shows the cost of unmanaged diversion: river inflow fell from 42 km³ in 1960 to 4.5 km³ in 2010, and the sea's area fell by 79% (Springer, Applied Water Science, 2012; own calculation). Managed systems show the same tension: on the Colorado River, agriculture uses 70% of the water (US Bureau of Reclamation). Energy adds another link: carbon made up about 60% of the world footprint in 2023 (National Footprint and Biocapacity Accounts, 2026 edition). Monitoring keeps trade-offs visible: Brazil's PRODES estimate of clearing fell 11.08% to 5,796 km² in the year to July 2025 (INPE, 2025), although Mato Grosso's clearing rose by 25.06%. Monitoring can inform decisions, but these observations do not prove that it alone caused the reduction or removed water–food–energy trade-offs.`,
      ru: `**План**

1. Тезис: рост в одной части связки обычно усиливает нагрузку на остальные, поэтому компромиссы реальны, но ими можно управлять там, где потоки измеряются и правила соблюдаются.
2. Пункт 1 (вода и продовольствие, Аральское море): приток рек сократился с 42 км³ в 1960 году до 4,5 км³ в 2010 году, а площадь моря сократилась на 79% за тот же период (Springer, Applied Water Science, 2012; собственный расчёт). Орошение повысило выпуск сельскохозяйственной продукции за счёт моря.
3. Пункт 2 (управляемая система, река Колорадо): сельское хозяйство использует 70% воды реки, а запасы снизились примерно до 36% ёмкости в апреле 2026 года (Бюро мелиорации США). Компромисс виден, но распределение не может создать воду.
4. Пункт 3 (мониторинг и энергия, Бразилия): оценка PRODES показала снижение вырубки на 11,08% до 5 796 км² за период с августа 2024 по июль 2025 года, тогда как в Мату-Гросу вырубка выросла на 25,06% (INPE, 2025). Энергия тоже связывает систему: углерод составлял около 60% мирового следа в 2023 году (National Footprint and Biocapacity Accounts, издание 2026 года), а спрос на литий-ионные батареи переносит нагрузку на районы добычи, такие как Демократическая Республика Конго и Индонезия (USGS, 2026).
5. Суждение: там, где реки перегружены, рост не устойчив; мониторинг помогает выявить нагрузку, но сам по себе не разрешает противоречие; результат зависит от соблюдаемых ограничений, состояния ресурсов и решений о доступе.
6. Вывод: рост и сохранение могут сочетаться, если использование ресурсов и ущерб остаются в допустимых пределах; мониторинг и соблюдение правил могут помочь, но приведённые изменения не доказывают, что улучшение вызвано одним мониторингом.

**Образец абзаца**

Рост в одной части связки «вода — продовольствие — энергия» обычно усиливает нагрузку на остальные, поэтому компромиссы реальны, но ими можно управлять. Аральское море показывает цену неконтролируемой переброски рек: приток сократился с 42 км³ в 1960 году до 4,5 км³ в 2010 году, а площадь моря уменьшилась на 79% (Springer, Applied Water Science, 2012; собственный расчёт). Управляемые системы показывают то же напряжение: на реке Колорадо сельское хозяйство использует 70% воды (Бюро мелиорации США). Энергия добавляет ещё одну связь: углерод составлял около 60% мирового следа в 2023 году (National Footprint and Biocapacity Accounts, издание 2026 года). Мониторинг делает компромиссы видимыми: бразильская система PRODES показала вырубку 5 796 км² с августа 2024 по июль 2025 года, на 11,08% меньше, чем в 2024 году (INPE, 2025), хотя вырубка в Мату-Гросу выросла на 25,06%. Мониторинг помогает принимать решения, но эти наблюдения не доказывают, что он один вызвал снижение вырубки или устранил противоречия между водой, продовольствием и энергией.`,
    },
    origin: 'original',
    minutes: 20,
  },
];
