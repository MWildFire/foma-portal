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
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: names one or two resources, with little accuracy.
- Application: no named place or figure.
- Analysis: describes rising consumption without linking it to security.
- Evaluation: no judgement, or an unsupported opinion.

**Bands 3–4 (3–4 marks)**

- Knowledge: describes food, water or energy security with some accuracy.
- Application: one named place, without a figure or year.
- Analysis: explains one link between consumption and pressure on a resource, in a simple chain.
- Evaluation: a basic view of how serious the threat is, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: accurate terms, such as resource security, ecological footprint and biocapacity.
- Application: two named places, one with a figure, year and source.
- Analysis: develops at least one chain of cause and effect, such as demand growth, concentrated supply and a policy shock.
- Evaluation: a judgement on the extent of the threat, with one argument for and one against.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise terms used correctly, with food, water and energy security kept distinct.
- Application: several named places with figures, years and sources, covering at least two of the three resources.
- Analysis: links demand, supply concentration and policy, and explains why the threat differs between resources.
- Evaluation: a clear judgement on the extent, with the conditions under which the threat grows or falls.

**Bands 9–10 (9–10 marks)**

- Knowledge: precise and wide, showing how the choice of account (production or consumption) changes the picture.
- Application: a fluent test of the claim against contrasting evidence on food, water and energy, each with figures, years and sources.
- Analysis: sophisticated explanation of interactions, such as energy and land use, and of the limits of the data.
- Evaluation: a balanced answer that states which resource is at greatest risk and why, and what the evidence cannot show.`,
      ru: `**Уровни 1–2 (1–2 балла)**

- Знание: называет один-два ресурса с низкой точностью.
- Применение: нет названного места и цифры.
- Анализ: описывает рост потребления, не связывая его с безопасностью.
- Оценка: нет суждения или мнение без подтверждения.

**Уровни 3–4 (3–4 балла)**

- Знание: описывает продовольственную, водную или энергетическую безопасность с некоторой точностью.
- Применение: одно названное место без цифры и года.
- Анализ: объясняет одну связь между потреблением и нагрузкой на ресурс простой цепочкой.
- Оценка: базовое мнение о серьёзности угрозы с малой опорой.

**Уровни 5–6 (5–6 баллов)**

- Знание: точные термины, например ресурсная безопасность (resource security), экологический след (ecological footprint) и биоёмкость (biocapacity).
- Применение: два названных места, одно с цифрой, годом и источником.
- Анализ: раскрывает как минимум одну цепочку «причина — следствие», например рост спроса, концентрацию поставок и шок, вызванный политикой.
- Оценка: суждение о масштабе угрозы, с одним аргументом за и одним против.

**Уровни 7–8 (7–8 баллов)**

- Знание: точные термины, использованные правильно; продовольственная, водная и энергетическая безопасность разведены.
- Применение: несколько названных мест с цифрами, годами и источниками, охватывающих как минимум два из трёх ресурсов.
- Анализ: связывает спрос, концентрацию поставок и политику и объясняет, почему угроза различается между ресурсами.
- Оценка: ясное суждение о масштабе с условиями, при которых угроза растёт или снижается.

**Уровни 9–10 (9–10 баллов)**

- Знание: точное и широкое; показывает, как выбор учёта (производство или потребление) меняет картину.
- Применение: последовательная проверка тезиса на контрастных данных о продовольствии, воде и энергии, каждое с цифрами, годами и источниками.
- Анализ: тонкое объяснение взаимодействий, например энергии и землепользования, и пределов данных.
- Оценка: сбалансированный ответ, который называет ресурс с наибольшим риском и причину и говорит, чего данные не показывают.`,
    },
    model: {
      en: `**Plan**

1. Thesis: rising consumption threatens resource security to a large extent, mainly through concentrated supply and policy shocks, and less through total volume alone.
2. Point 1 (demand): the footprint of production was 2.56 global hectares per person in 2023, against a biocapacity of 1.50, and carbon made up about 60% of the footprint (National Footprint and Biocapacity Accounts, 2026 edition).
3. Point 2 (minerals): the Democratic Republic of the Congo produced about 73% of world cobalt mine output in 2025, and its export quotas allow up to 96,600 tonnes a year in 2026 and 2027 (USGS, 2026).
4. Point 3 (food, counter-evidence): the share of people facing hunger fell from 8.5% in 2023 to 8.2% in 2024, but 2.6 billion people could not afford a healthy diet (FAO, SOFI 2025).
5. Judgement: the threat is large for minerals and supply shocks and moderate for food and water, where access and price matter as much as output. Colorado River storage was about 36% of capacity in April 2026 (US Bureau of Reclamation).
6. Conclusion: consumption threatens security to a large extent through concentration and governance.

**Model paragraph**

Rising consumption threatens resource security to a large extent, but mainly through concentrated supply and policy shocks. In 2023 the world footprint of production was 2.56 global hectares per person against a biocapacity of 1.50 (National Footprint and Biocapacity Accounts, 2026 edition). The Democratic Republic of the Congo produced about 73% of world cobalt mine output in 2025, and its export quotas allow up to 96,600 tonnes a year in 2026 and 2027 (USGS, 2026). Food is less exposed: the share of people facing hunger fell from 8.5% in 2023 to 8.2% in 2024 (FAO, SOFI 2025), yet 2.6 billion people could not afford a healthy diet. Water is tested by drought: Colorado River storage was about 36% of capacity in April 2026 (US Bureau of Reclamation). On balance, the threat is large for minerals, moderate for food and water.`,
      ru: `**План**

1. Тезис: растущее потребление угрожает ресурсной безопасности в значительной степени, в основном через концентрацию поставок и шоки, вызванные политикой, и в меньшей степени через общий объём спроса.
2. Пункт 1 (спрос): след производства составил 2,56 глобального гектара (gha) на человека в 2023 году при биоёмкости 1,50; углерод давал около 60% следа (National Footprint and Biocapacity Accounts, издание 2026 года).
3. Пункт 2 (минералы): Демократическая Республика Конго добывала около 73% мирового объёма кобальта в 2025 году, а её экспортные квоты допускают до 96 600 тонн в год в 2026 и 2027 годах (USGS, 2026).
4. Пункт 3 (продовольствие, контрпример): доля людей, испытывающих голод, снизилась с 8,5% в 2023 году до 8,2% в 2024 году, но 2,6 млрд человек не могли позволить себе здоровое питание (FAO, SOFI 2025).
5. Суждение: угроза велика для минералов и шоков поставок и умеренна для продовольствия и воды, где доступ и цена важны не меньше объёма. Запасы системы реки Колорадо составляли около 36% ёмкости в апреле 2026 года (Бюро мелиорации США).
6. Вывод: потребление угрожает безопасности в значительной степени через концентрацию и управление.

**Образец абзаца**

Растущее потребление угрожает ресурсной безопасности (resource security) в значительной степени, но в основном через концентрацию поставок и шоки, вызванные политикой. В 2023 году мировой след производства составил 2,56 глобального гектара (gha) на человека при биоёмкости 1,50 gha (National Footprint and Biocapacity Accounts, издание 2026 года). Демократическая Республика Конго добывала около 73% мирового объёма кобальта в 2025 году, а её экспортные квоты допускают до 96 600 тонн в год в 2026 и 2027 годах (USGS, 2026). Продовольствие меньше подвержено риску: доля людей, испытывающих голод, снизилась с 8,5% в 2023 году до 8,2% в 2024 году (FAO, SOFI 2025), однако 2,6 млрд человек не могли позволить себе здоровое питание. Вода проверяется засухой: запасы реки Колорадо составляли около 36% ёмкости в апреле 2026 года (Бюро мелиорации США). В итоге угроза велика для минералов и умеренна для продовольствия и воды.`,
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
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: names one stewardship method, with little accuracy.
- Application: no named case.
- Analysis: describes quotas or governance without explaining how they could work.
- Evaluation: no judgement, or an unsupported opinion.

**Bands 3–4 (3–4 marks)**

- Knowledge: describes one or two methods, such as a quota or a certification scheme, with some accuracy.
- Application: one named case, without a figure or year.
- Analysis: explains one way the method could conserve the resource, in a simple chain.
- Evaluation: states whether the method worked, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: accurate methods and terms, such as quota, allocation, governance and reserves.
- Application: a named case with a figure and year, and a second example or source.
- Analysis: explains why the method works or fails, for example a cap set above the water available.
- Evaluation: a judgement on effectiveness, with one argument for and one against.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise terms used correctly; the difference between managing supply and conserving a resource is clear.
- Application: several named places or examples with figures, years and sources, compared with the aim of each method.
- Analysis: explains the timing, enforcement and market effects of the method, and why results differ between cases.
- Evaluation: a clear judgement on effectiveness, with the conditions under which the method works best.

**Bands 9–10 (9–10 marks)**

- Knowledge: precise and wide, covering intended and unintended effects.
- Application: contrasting methods or cases, each with figures, years and sources, tested against the question.
- Analysis: sophisticated explanation of why effects differ, including cost, timing, enforcement and substitution.
- Evaluation: a balanced, well-supported judgement on which methods work best, under what conditions, and what the evidence cannot show.`,
      ru: `**Уровни 1–2 (1–2 балла)**

- Знание: называет один метод бережного управления с низкой точностью.
- Применение: нет названного случая.
- Анализ: описывает квоты или управление, не объясняя, как они могут работать.
- Оценка: нет суждения или мнение без подтверждения.

**Уровни 3–4 (3–4 балла)**

- Знание: описывает один-два метода, например квоту или схему сертификации, с некоторой точностью.
- Применение: один названный случай без цифры и года.
- Анализ: объясняет один способ, которым метод мог бы сохранить ресурс, простой цепочкой.
- Оценка: указывает, сработал ли метод, с малой опорой.

**Уровни 5–6 (5–6 баллов)**

- Знание: точные методы и термины, например квота (quota), распределение (allocation), управление (governance) и запасы (reserves).
- Применение: названный случай с цифрой и годом и второй пример или источник.
- Анализ: объясняет, почему метод работает или не работает, например когда предел установлен выше доступной воды.
- Оценка: суждение об эффективности с одним аргументом за и одним против.

**Уровни 7–8 (7–8 баллов)**

- Знание: точные термины, использованные правильно; разница между управлением поставками и сохранением ресурса ясна.
- Применение: несколько названных мест или примеров с цифрами, годами и источниками, сопоставленных с целью каждого метода.
- Анализ: объясняет сроки, контроль исполнения и рыночные эффекты метода и причины различий результатов между случаями.
- Оценка: ясное суждение об эффективности с условиями, при которых метод работает лучше всего.

**Уровни 9–10 (9–10 баллов)**

- Знание: точное и широкое; охватывает ожидаемые и непредвиденные эффекты.
- Применение: контрастные методы или случаи, каждый с цифрами, годами и источниками, проверенные на соответствие вопросу.
- Анализ: тонкое объяснение того, почему эффекты различаются, включая стоимость, сроки, контроль исполнения и замещение.
- Оценка: сбалансированное и хорошо обоснованное суждение о том, какие методы работают лучше всего, при каких условиях и что данные показать не могут.`,
    },
    model: {
      en: `**Plan**

1. Thesis: stewardship methods work only when the cap matches the resource that exists and the rules can change in time; quotas and allocation control use more reliably than they conserve the resource itself.
2. Point 1 (allocation, Colorado River): agriculture uses 70% of the river's water, and 35 to 40 million people rely on it for some or all of their municipal needs. System storage fell to about 36% of capacity in April 2026, so the water on paper and the water in the system have diverged (Bureau of Reclamation).
3. Point 2 (governance and timing): the 2007 Interim Guidelines applied from 2008 through 31 December 2025, and new operating guidelines for 2027 and 2028 were issued on 21 August 2026, more than seven months later (Bureau of Reclamation, 2027–2028 Operating Guidelines, released 21 August 2026; own calculation).
4. Point 3 (quotas and substitution, counter-evidence): the Democratic Republic of the Congo's export ban of February 2025, later replaced by quotas, was meant to address oversupply and low prices; the quotas include 9,600 tonnes for national strategic reserves (USGS, 2026). Cobalt-free substitutes held a significant market share in China.
5. Judgement: quotas and governance manage markets and allocations. Their conservation effect depends on caps below renewal, fast adaptation and enforcement. Recycling and certification need evidence that this case does not give, so they are judged as unproven here.
6. Conclusion: stewardship is partly effective; the Colorado River shows that rules are necessary but slow.

**Model paragraph**

Stewardship methods work only when the cap matches the resource that exists and the rules can change in time. The Colorado River shows the limits of allocation: agriculture uses 70% of its water, and 35 to 40 million people rely on it for some or all municipal needs (US Bureau of Reclamation). Storage fell to about 36% of capacity in April 2026, and new guidelines came only on 21 August 2026, after the 2007 Interim Guidelines ended on 31 December 2025 (US Bureau of Reclamation). The Democratic Republic of the Congo shows a market tool: its February 2025 export ban, replaced by quotas, was meant to address oversupply and low prices (USGS, 2026). Recycling can reduce demand, but the evidence cited here gives no recycling rate. Governance is necessary but slow; quotas manage markets more than they conserve reserves.`,
      ru: `**План**

1. Тезис: методы бережного управления работают только тогда, когда предел соответствует существующему ресурсу и правила могут меняться вовремя; квоты и распределение надёжнее регулируют использование, чем сохраняют сам ресурс.
2. Пункт 1 (распределение, река Колорадо): сельское хозяйство использует 70% воды реки, а от 35 до 40 млн человек зависят от неё для части или всех муниципальных нужд. Запасы системы снизились примерно до 36% ёмкости в апреле 2026 года, поэтому объёмы на бумаге и вода в системе разошлись (Бюро мелиорации США).
3. Пункт 2 (управление и сроки): Временные правила 2007 года (2007 Interim Guidelines) действовали с 2008 года по 31 декабря 2025 года, а новые правила эксплуатации на 2027 и 2028 годы были выпущены 21 августа 2026 года, то есть более чем через семь месяцев (Бюро мелиорации США, правила эксплуатации на 2027–2028 годы, выпущены 21 августа 2026 года; собственный расчёт).
4. Пункт 3 (квоты и замещение, контрпример): экспортный запрет Демократической Республики Конго на кобальт (февраль 2025 года), позже заменённый квотами, был направлен на борьбу с перепроизводством и низкими ценами; квоты включают 9 600 тонн для национальных стратегических резервов (USGS, 2026). Заменители без кобальта имели значительную долю рынка в Китае.
5. Суждение: квоты и управление регулируют рынок и распределение. Их эффект для сохранения зависит от пределов ниже возобновления, быстрой адаптации и контроля исполнения. Переработка и сертификация требуют данных, которых в этом случае нет, поэтому здесь они остаются недоказанными.
6. Вывод: бережное управление частично эффективно; река Колорадо показывает, что правила необходимы, но медлительны.

**Образец абзаца**

Методы бережного управления работают только тогда, когда предел соответствует существующему ресурсу и правила могут меняться вовремя. Река Колорадо показывает ограничения распределения: сельское хозяйство использует 70% её воды, а от 35 до 40 млн человек зависят от неё для части или всех муниципальных нужд (Бюро мелиорации США). Запасы снизились примерно до 36% ёмкости в апреле 2026 года, а новые правила эксплуатации появились только 21 августа 2026 года, после того как Временные правила 2007 года (2007 Interim Guidelines) завершились 31 декабря 2025 года (Бюро мелиорации США). Демократическая Республика Конго показывает рыночный инструмент: её экспортный запрет на кобальт в феврале 2025 года, заменённый квотами, должен был бороться с перепроизводством и низкими ценами (USGS, 2026). Переработка может снизить спрос, но приведённые здесь данные не содержат доли переработки. Управление необходимо, но медленно; квоты регулируют рынок больше, чем сохраняют запасы.`,
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
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: names responsibility or resource use in general terms.
- Application: no named place.
- Analysis: describes consumption or production without explaining the link to impacts.
- Evaluation: no judgement, or an unsupported opinion.

**Bands 3–4 (3–4 marks)**

- Knowledge: describes production and consumption, with some accuracy.
- Application: one named place, without a figure or year.
- Analysis: explains one link between buyers and impacts, in a simple chain.
- Evaluation: a basic view on who is responsible, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: accurate terms, such as production footprint, consumption footprint and ecological overshoot.
- Application: two named places, one with a figure and year, linked to production or consumption.
- Analysis: explains how demand in one country affects impacts in another, or why impacts stay where production happens.
- Evaluation: a judgement on responsibility, with one argument for and one against.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise terms used correctly, with the two accounts kept distinct.
- Application: several named places with figures, years and sources, at different levels of income.
- Analysis: links demand, trade and local harm, and explains why the answer depends on the account used.
- Evaluation: a clear judgement on the extent of responsibility, with the conditions under which it is high or low.

**Bands 9–10 (9–10 marks)**

- Knowledge: precise and wide, covering intended and unintended effects of trade and regulation.
- Application: contrasting cases, each with figures, years and sources, tested against the question.
- Analysis: sophisticated explanation of how responsibility is shared between buyers, producers and governments, and of the limits of each account.
- Evaluation: a balanced, well-supported answer that states where responsibility lies and what the evidence cannot show.`,
      ru: `**Уровни 1–2 (1–2 балла)**

- Знание: называет ответственность или использование ресурсов общими словами.
- Применение: нет названного места.
- Анализ: описывает потребление или производство, не объясняя связи с последствиями.
- Оценка: нет суждения или мнение без подтверждения.

**Уровни 3–4 (3–4 балла)**

- Знание: описывает производство и потребление с некоторой точностью.
- Применение: одно названное место без цифры и года.
- Анализ: объясняет одну связь между покупателями и последствиями простой цепочкой.
- Оценка: базовое мнение о том, кто несёт ответственность, с малой опорой.

**Уровни 5–6 (5–6 баллов)**

- Знание: точные термины, например след производства (production footprint), след потребления (consumption footprint) и экологический перерасход (ecological overshoot).
- Применение: два названных места, одно с цифрой и годом, связанные с производством или потреблением.
- Анализ: объясняет, как спрос в одной стране влияет на последствия в другой, или почему последствия остаются там, где идёт производство.
- Оценка: суждение об ответственности, с одним аргументом за и одним против.

**Уровни 7–8 (7–8 баллов)**

- Знание: точные термины, использованные правильно; два учёта разведены.
- Применение: несколько названных мест с цифрами, годами и источниками, относящихся к разным уровням дохода.
- Анализ: связывает спрос, торговлю и местный ущерб и объясняет, почему ответ зависит от используемого учёта.
- Оценка: ясное суждение о масштабе ответственности с условиями, при которых она высока или низка.

**Уровни 9–10 (9–10 баллов)**

- Знание: точное и широкое; охватывает ожидаемые и непредвиденные эффекты торговли и регулирования.
- Применение: контрастные случаи, каждый с цифрами, годами и источниками, проверенные на соответствие вопросу.
- Анализ: тонкое объяснение того, как ответственность распределяется между покупателями, производителями и государствами, и пределов каждого учёта.
- Оценка: сбалансированный и хорошо обоснованный ответ, который называет, где лежит ответственность, и говорит, чего данные не показывают.`,
    },
    model: {
      en: `**Plan**

1. Thesis: high-income countries bear a large but shared responsibility; the answer depends on whether impacts are counted where goods are made or where they are used.
2. Point 1 (production accounts): the footprint of production in the United States was 7.09 global hectares per person in 2023, against a world figure of 2.56 (National Footprint and Biocapacity Accounts, 2026 edition).
3. Point 2 (consumption accounts): demand drives extraction elsewhere. USGS names China as the world's leading consumer of cobalt, mostly for lithium-ion batteries, while the Democratic Republic of the Congo produced about 73% of world output in 2025 (USGS, 2026). Qatar's footprint was 11.70 on production and 12.06 on consumption per person in 2023, so the two accounts differ.
4. Point 3 (counter-evidence): local harm falls on producers. At Nisisioken Ogale in Nigeria, benzene in well water exceeded the WHO guideline more than 900 times (UNEP, 2012); producing states and companies carry the duty to clean up and regulate.
5. Judgement: responsibility is shared. High-income buyers answer for demand and their own footprint, but local damage from extraction is the responsibility of producers and their governments, so the high-income share depends on the account and the case.
6. Conclusion: high-income countries bear a large share of responsibility for demand, but not sole responsibility for every impact.

**Model paragraph**

High-income countries bear a large but shared responsibility, and the answer depends on the accounting. A production-based account places impacts where goods are made: in 2023 the United States' footprint of production was 7.09 global hectares per person, against a world figure of 2.56 (National Footprint and Biocapacity Accounts, 2026 edition). A consumption-based account assigns the same land to buyers, and Qatar's 2023 figures show the two can differ: 11.70 on production and 12.06 on consumption (same source). USGS names China the world's leading consumer of cobalt, mostly for lithium-ion batteries, while the Democratic Republic of the Congo produced about 73% of world output in 2025 (USGS, 2026). Local harm falls on producers: benzene in well water at Nisisioken Ogale in Nigeria exceeded the WHO guideline more than 900 times (UNEP, 2012). Responsibility is therefore shared.`,
      ru: `**План**

1. Тезис: страны с высоким уровнем дохода несут большую, но общую ответственность; ответ зависит от того, учитываются ли последствия там, где товары производятся, или там, где они используются.
2. Пункт 1 (учёт по производству): след производства в Соединённых Штатах составил 7,09 глобального гектара (gha) на человека в 2023 году при мировом показателе 2,56 (National Footprint and Biocapacity Accounts, издание 2026 года).
3. Пункт 2 (учёт по потреблению): спрос движет добычей в других странах. USGS называет Китай ведущим мировым потребителем кобальта, главным образом для литий-ионных батарей, тогда как Демократическая Республика Конго дала около 73% мирового объёма в 2025 году (USGS, 2026). След производства Катара составил 11,70, а след потребления — 12,06 gha на человека в 2023 году, поэтому учёты различаются.
4. Пункт 3 (контрпример): местный ущерб ложится на производителей. В Нисисиокен-Огале в Нигерии бензол в колодезной воде превышал рекомендацию ВОЗ более чем в 900 раз (UNEP, 2012); обязанность очищать и регулировать лежит на производящих государствах и компаниях.
5. Суждение: ответственность общая. Покупатели из стран с высоким доходом отвечают за спрос и свой собственный след, но местный ущерб от добычи лежит на производителях и их правительствах, поэтому доля высокодоходных стран зависит от учёта и от случая.
6. Вывод: страны с высоким доходом несут большую долю ответственности за спрос, но не единоличную ответственность за каждое последствие.

**Образец абзаца**

Страны с высоким уровнем дохода несут большую, но общую ответственность, и ответ зависит от учёта. Учёт по производству относит последствия к месту, где товары изготовлены: в 2023 году след производства в Соединённых Штатах составил 7,09 глобального гектара (gha) на человека при мировом показателе 2,56 (National Footprint and Biocapacity Accounts, издание 2026 года). Учёт по потреблению относит ту же площадь к покупателям, и данные по Катару за 2023 год показывают, что величины могут различаться: 11,70 по производству и 12,06 по потреблению (там же). USGS называет Китай ведущим мировым потребителем кобальта, главным образом для литий-ионных батарей, тогда как Демократическая Республика Конго дала около 73% мирового объёма в 2025 году (USGS, 2026). Местный ущерб ложится на производителей: бензол в колодезной воде в Нисисиокен-Огале в Нигерии превышал рекомендацию ВОЗ более чем в 900 раз (UNEP, 2012). Поэтому ответственность общая.`,
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
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: names one part of the water–food–energy nexus, with little accuracy.
- Application: no named place.
- Analysis: lists links between resources without explaining them.
- Evaluation: no judgement, or an unsupported opinion.

**Bands 3–4 (3–4 marks)**

- Knowledge: describes the nexus and one trade-off, with some accuracy.
- Application: one named place, without a figure or year.
- Analysis: explains one link in a simple chain, such as diverting water for irrigation and shrinking a lake or sea.
- Evaluation: a basic view on whether growth or conservation should come first, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: accurate terms, such as water–food–energy nexus, trade-off and overshoot.
- Application: two named places, one with a figure and year.
- Analysis: explains at least one trade-off as a cause-and-effect chain, and shows how growth in one sector affects another.
- Evaluation: a judgement on whether the trade-off can be managed, with one argument for and one against.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise terms used correctly, with the three parts of the nexus distinguished.
- Application: several named places with figures, years and sources, covering both growth and conservation.
- Analysis: explains feedback between water, food and energy, and why the balance differs between places.
- Evaluation: a clear judgement on which trade-offs can be managed and under what conditions.

**Bands 9–10 (9–10 marks)**

- Knowledge: precise and wide, including the energy transition and its demand for minerals.
- Application: contrasting cases at different scales, each with figures, years and sources.
- Analysis: sophisticated explanation of feedbacks, time lags and thresholds, and of the limits of the data.
- Evaluation: a balanced, well-supported answer that says when growth should give way to conservation, and what the evidence cannot show.`,
      ru: `**Уровни 1–2 (1–2 балла)**

- Знание: называет одну часть связки «вода — продовольствие — энергия» с низкой точностью.
- Применение: нет названного места.
- Анализ: перечисляет связи между ресурсами, не объясняя их.
- Оценка: нет суждения или мнение без подтверждения.

**Уровни 3–4 (3–4 балла)**

- Знание: описывает связку и один компромисс с некоторой точностью.
- Применение: одно названное место без цифры и года.
- Анализ: объясняет одну связь простой цепочкой, например отвод воды на орошение и сокращение озера или моря.
- Оценка: базовое мнение о том, что важнее, рост или сохранение, с малой опорой.

**Уровни 5–6 (5–6 баллов)**

- Знание: точные термины, например связка «вода — продовольствие — энергия» (water–food–energy nexus), компромисс (trade-off) и перерасход (overshoot).
- Применение: два названных места, одно с цифрой и годом.
- Анализ: объясняет как минимум один компромисс как цепочку «причина — следствие» и показывает, как рост в одном секторе влияет на другой.
- Оценка: суждение о том, можно ли управлять компромиссом, с одним аргументом за и одним против.

**Уровни 7–8 (7–8 баллов)**

- Знание: точные термины, использованные правильно; три части связки различены.
- Применение: несколько названных мест с цифрами, годами и источниками, охватывающих и рост, и сохранение.
- Анализ: объясняет обратные связи между водой, продовольствием и энергией и причины различий баланса между местами.
- Оценка: ясное суждение о том, какими компромиссами можно управлять и при каких условиях.

**Уровни 9–10 (9–10 баллов)**

- Знание: точное и широкое; включает энергетический переход и его спрос на минералы.
- Применение: контрастные случаи на разных масштабах, каждый с цифрами, годами и источниками.
- Анализ: тонкое объяснение обратных связей, временных задержек и пороговых значений и пределов данных.
- Оценка: сбалансированный и хорошо обоснованный ответ о том, когда рост должен уступить сохранению, и что данные показать не могут.`,
    },
    model: {
      en: `**Plan**

1. Thesis: growth in one part of the nexus usually raises pressure on the others, so the trade-offs are real, but they can be managed where flows are measured and rules are enforced.
2. Point 1 (water and food, Aral Sea): river inflow fell from 42 km³ in 1960 to 4.5 km³ in 2010, and the sea's area fell by 79% over the same period (Springer, Applied Water Science, 2012; own calculation). Irrigation raised farm output at the expense of the sea.
3. Point 2 (managed system, Colorado River): agriculture uses 70% of the river's water, and storage fell to about 36% of capacity in April 2026 (Bureau of Reclamation). The trade-off is visible, but allocation cannot create water.
4. Point 3 (monitoring and energy, Brazil): the PRODES estimate of clearing fell 11.08% to 5,796 km² in the year from August 2024 to July 2025, while clearing in Mato Grosso rose by 25.06% (INPE, 2025). Energy links too: carbon made up about 60% of the world footprint in 2023 (National Footprint and Biocapacity Accounts, 2026 edition), and battery demand shifts pressure toward mining regions such as the Democratic Republic of the Congo and Indonesia (USGS, 2026).
5. Judgement: where rivers are overcommitted, growth is not sustainable; where monitoring shows the trade-off, it can be managed, but the differences between regions are large.
6. Conclusion: growth and conservation can coexist only where the links are measured and enforced.

**Model paragraph**

Growth in one part of the water–food–energy nexus usually raises pressure on the others, so trade-offs are real but manageable. The Aral Sea shows the cost of unmanaged diversion: river inflow fell from 42 km³ in 1960 to 4.5 km³ in 2010, and the sea's area fell by 79% (Springer, Applied Water Science, 2012; own calculation). Managed systems show the same tension: on the Colorado River, agriculture uses 70% of the water (US Bureau of Reclamation). Energy adds another link: carbon made up about 60% of the world footprint in 2023 (National Footprint and Biocapacity Accounts, 2026 edition). Monitoring keeps trade-offs visible: Brazil's PRODES estimate of clearing fell 11.08% to 5,796 km² in the year to July 2025 (INPE, 2025), although Mato Grosso's clearing rose by 25.06%. Growth and conservation can coexist only where these links are measured and enforced.`,
      ru: `**План**

1. Тезис: рост в одной части связки обычно усиливает нагрузку на остальные, поэтому компромиссы реальны, но ими можно управлять там, где потоки измеряются и правила соблюдаются.
2. Пункт 1 (вода и продовольствие, Аральское море): приток рек сократился с 42 км³ в 1960 году до 4,5 км³ в 2010 году, а площадь моря сократилась на 79% за тот же период (Springer, Applied Water Science, 2012; собственный расчёт). Орошение повысило выпуск сельскохозяйственной продукции за счёт моря.
3. Пункт 2 (управляемая система, река Колорадо): сельское хозяйство использует 70% воды реки, а запасы снизились примерно до 36% ёмкости в апреле 2026 года (Бюро мелиорации США). Компромисс виден, но распределение не может создать воду.
4. Пункт 3 (мониторинг и энергия, Бразилия): оценка PRODES показала снижение вырубки на 11,08% до 5 796 км² за период с августа 2024 по июль 2025 года, тогда как в Мату-Гросу вырубка выросла на 25,06% (INPE, 2025). Энергия тоже связывает систему: углерод составлял около 60% мирового следа в 2023 году (National Footprint and Biocapacity Accounts, издание 2026 года), а спрос на литий-ионные батареи переносит нагрузку на районы добычи, такие как Демократическая Республика Конго и Индонезия (USGS, 2026).
5. Суждение: там, где реки перегружены, рост не устойчив; там, где мониторинг показывает компромисс, им можно управлять, но различия между регионами велики.
6. Вывод: рост и сохранение могут совмещаться только там, где эти связи измеряются и соблюдаются.

**Образец абзаца**

Рост в одной части связки «вода — продовольствие — энергия» обычно усиливает нагрузку на остальные, поэтому компромиссы реальны, но ими можно управлять. Аральское море показывает цену неконтролируемой переброски рек: приток сократился с 42 км³ в 1960 году до 4,5 км³ в 2010 году, а площадь моря уменьшилась на 79% (Springer, Applied Water Science, 2012; собственный расчёт). Управляемые системы показывают то же напряжение: на реке Колорадо сельское хозяйство использует 70% воды (Бюро мелиорации США). Энергия добавляет ещё одну связь: углерод составлял около 60% мирового следа в 2023 году (National Footprint and Biocapacity Accounts, издание 2026 года). Мониторинг делает компромиссы видимыми: бразильская система PRODES показала вырубку 5 796 км² с августа 2024 по июль 2025 года, на 11,08% меньше, чем в 2024 году (INPE, 2025), хотя вырубка в Мату-Гросу выросла на 25,06%. Рост и сохранение могут совмещаться только там, где эти связи измеряются и соблюдаются.`,
    },
    origin: 'original',
    minutes: 20,
  },
];
