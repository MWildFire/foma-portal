import type { Question } from '../../../../src/contract/types';

// Section C essays for Unit 2 (climate change). Original questions in IB command-term style.
// The markschemes are our band checklists in general words, not the official descriptors (check the guide).
// Figures in the model answers come from the case files for topics 2.1 to 2.3 or from the sources listed in the topic meta file.
export const questions: Question[] = [
  {
    id: 'core-essay-2-1',
    subject: 'geo',
    topicIds: ['core-essay-2'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'Evaluate',
    prompt: {
      en: `Evaluate the claim that mitigation should take priority over adaptation when responding to climate change. Use named places in your answer.`,
      ru: `Оцените утверждение, что при реагировании на изменение климата смягчение (mitigation) должно иметь приоритет над адаптацией (adaptation). Используйте названные места в ответе.`,
    },
    markscheme: {
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: names mitigation or adaptation, with little accuracy.
- Application: no named place.
- Analysis: describes measures without linking them to priority.
- Evaluation: no judgement, or an opinion with no support.

**Bands 3–4 (3–4 marks)**

- Knowledge: defines both responses, with some accuracy.
- Application: one named place, without a figure or year.
- Analysis: explains one reason for mitigation or for adaptation, such as rising emissions or a flood defence.
- Evaluation: a basic view on priority, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: accurate terms, such as mitigation, adaptation, vulnerability and exposure.
- Application: two named places, one with a figure and year, used to test the claim.
- Analysis: develops the chain from emissions to changing risk, and from exposure to losses.
- Evaluation: a judgement on priority, with at least one argument for each response.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise terms, correctly used; the time scale of each response is stated.
- Application: several named places with figures, years and sources, applied to the time frame and to exposure.
- Analysis: links emissions, long-run change, immediate risk and the cost of protection.
- Evaluation: a clear, sustained judgement on priority, with its conditions (time frame, place and capacity).

**Bands 9–10 (9–10 marks)**

- Knowledge: wide and precise; shows what each response can and cannot achieve.
- Application: contrasting places tested against the claim, each with figures, years and sources.
- Analysis: sophisticated explanation of trade-offs, such as the lock-in of emissions in infrastructure and the limits to adaptation.
- Evaluation: a balanced answer that says which response should come first, when and why, and what the evidence cannot show.`,
      ru: `**Уровни 1–2 (1–2 балла)**

- Знание: называет смягчение или адаптацию с низкой точностью.
- Применение: нет названного места.
- Анализ: описывает меры, не связывая их с приоритетом.
- Оценка: нет суждения или мнение без подтверждения.

**Уровни 3–4 (3–4 балла)**

- Знание: определяет оба ответа с некоторой точностью.
- Применение: одно названное место без цифры и года.
- Анализ: объясняет одну причину в пользу смягчения или адаптации, например рост выбросов или дамбу.
- Оценка: базовое мнение о приоритете с малой опорой.

**Уровни 5–6 (5–6 баллов)**

- Знание: точные термины: смягчение, адаптация, уязвимость и подверженность (exposure).
- Применение: два названных места, одно с цифрой и годом, которые проверяют утверждение.
- Анализ: развёрнутая цепочка от выбросов к изменению риска и от подверженности к потерям.
- Оценка: суждение о приоритете, с как минимум одним аргументом за каждый ответ.

**Уровни 7–8 (7–8 баллов)**

- Знание: точные термины, использованные правильно; назван временной масштаб каждого ответа.
- Применение: несколько названных мест с цифрами, годами и источниками, применённых к временному горизонту и подверженности.
- Анализ: связывает выбросы, долгосрочное изменение, немедленный риск и стоимость защиты.
- Оценка: ясное и устойчивое суждение о приоритете с его условиями (горизонт, место и возможности).

**Уровни 9–10 (9–10 баллов)**

- Знание: широкие и точные знания; показывает, что может и чего не может дать каждый ответ.
- Применение: контрастные места, проверяющие утверждение, каждое с цифрами, годами и источниками.
- Анализ: тонкое объяснение компромиссов, например инерции (lock-in) выбросов в инфраструктуре и пределов адаптации.
- Оценка: сбалансированный ответ, который говорит, какой ответ должен идти первым, когда и почему, и что данные не показывают.`,
    },
    model: {
      en: `**Plan**

1. Thesis: mitigation should lead the long-term response, but adaptation must come first where exposure is immediate; the priority depends on the time frame and the place.
2. Point 1 (mitigation): the Mauna Loa annual mean rose from 316.91 ppm in 1960 to 427.35 ppm in 2025 (NOAA GML), so adaptation faces a growing change while emissions continue.
3. Point 2 (mitigation): China's share of world fossil CO₂ emissions rose from 14.3% in 2000 to 31.8% in 2024 (Global Carbon Project, 2025); cuts must reach the high emitters.
4. Point 3 (adaptation): the Delta Works, built after the 1953 flood that drowned 1,836 people (Stichting Watersnoodmuseum), show that protection can work now; Pakistan's 2022 floods affected 33 million people, with losses above USD 30 billion (World Bank, 2022), while the country emitted about 0.49% of world CO₂ in 2023 (Our World in Data).
5. Judgement: mitigation leads the long run; adaptation leads where exposure is immediate. The time frame and the place decide which comes first.

**Model paragraph**

Mitigation should lead the long-term response, but adaptation must come first where exposure is immediate. Carbon dioxide at Mauna Loa rose from 316.91 ppm in 1960 to 427.35 ppm in 2025 (NOAA GML), so adaptation faces a growing change. Cuts must also reach the high emitters: China's share of world fossil CO₂ emissions rose from 14.3% in 2000 to 31.8% in 2024 (Global Carbon Project, 2025). Yet the Delta Works, built after the 1953 flood that drowned 1,836 people in the Netherlands (Stichting Watersnoodmuseum), show that protection works now. In Pakistan, the 2022 floods affected 33 million people and caused losses above USD 30 billion (World Bank, 2022), although the country emitted only about 0.49% of world CO₂ in 2023 (Our World in Data). The judgement is time-bound: mitigation leads the long run, adaptation leads where exposure is immediate.`,
      ru: `**План**

1. Тезис: смягчение должно вести долгосрочный ответ, но адаптация должна идти первой там, где подверженность немедленна; приоритет зависит от временного горизонта и места.
2. Пункт 1 (смягчение): среднегодовая концентрация CO₂ на Мауна-Лоа выросла с 316,91 ppm в 1960 году до 427,35 ppm в 2025 году (NOAA GML), поэтому адаптации приходится справляться со всё большим изменением.
3. Пункт 2 (смягчение): доля Китая в мировых выбросах CO₂ от ископаемого топлива выросла с 14,3% в 2000 году до 31,8% в 2024 году (Global Carbon Project, 2025); сокращения должны затронуть крупных эмитентов.
4. Пункт 3 (адаптация): Дельта-работы, построенные после наводнения 1953 года, которое унесло жизни 1 836 человек (Stichting Watersnoodmuseum), показывают, что защита работает уже сейчас; наводнения 2022 года в Пакистане затронули 33 млн человек, а потери превысили 30 млрд USD (Всемирный банк, 2022), при этом страна выбросила около 0,49% мирового объёма CO₂ в 2023 году (Our World in Data).
5. Суждение: смягчение ведёт длинный тренд; адаптация ведёт там, где подверженность немедленна. Временной горизонт и место определяют, что идёт первым.

**Образец абзаца**

Смягчение (mitigation) должно вести долгосрочный ответ, но адаптация (adaptation) должна идти первой там, где подверженность немедленна. Концентрация CO₂ на Мауна-Лоа выросла с 316,91 ppm в 1960 году до 427,35 ppm в 2025 году (NOAA GML), поэтому адаптации приходится справляться с растущим изменением. Сокращения нужны и от крупных эмитентов: доля Китая в мировых выбросах CO₂ от ископаемого топлива выросла с 14,3% в 2000 году до 31,8% в 2024 году (Global Carbon Project, 2025). Однако Дельта-работы в Нидерландах, построенные после наводнения 1953 года, унёсшего 1 836 жизней (Stichting Watersnoodmuseum), показывают, что защита работает уже сейчас. В Пакистане наводнения 2022 года затронули 33 млн человек, а ущерб и потери превысили 30 млрд USD (Всемирный банк, 2022), хотя в 2023 году страна выбросила около 0,49% мирового объёма CO₂ (Our World in Data). Суждение привязано ко времени: смягчение ведёт длинный тренд, адаптация — там, где подверженность немедленна.`,
    },
    origin: 'original',
    minutes: 20,
  },
  {
    id: 'core-essay-2-2',
    subject: 'geo',
    topicIds: ['core-essay-2'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'To what extent',
    prompt: {
      en: `To what extent have international agreements on climate change, from the UNFCCC (1992) to the Paris Agreement (2015), succeeded in limiting global warming?`,
      ru: `В какой степени международные соглашения по изменению климата, от Рамочной конвенции ООН об изменении климата (UNFCCC, 1992) до Парижского соглашения (Paris Agreement, 2015), смогли ограничить глобальное потепление?`,
    },
    markscheme: {
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: names one agreement, with little accuracy.
- Application: no agreement with its date, and no measured outcome.
- Analysis: describes the agreements without linking them to emissions.
- Evaluation: no judgement, or an opinion with no support.

**Bands 3–4 (3–4 marks)**

- Knowledge: describes the UNFCCC, Kyoto and Paris with some accuracy, including their dates.
- Application: one agreement and one measured outcome, without a figure, year and source.
- Analysis: explains one reason for success or limited success, such as the scope of the targets or the lack of binding pledges.
- Evaluation: a basic view of success, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: accurate aims and terms of the three agreements, such as stabilising concentrations and national pledges.
- Application: two agreements, and one measured outcome with a figure and year, such as a concentration or an emission total.
- Analysis: develops the link between targets, participation and emissions.
- Evaluation: a judgement on success, with at least one argument for and one against.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise and correctly used; separates targets, participation and outcomes.
- Application: the three agreements tested against named countries, each with figures, years and sources.
- Analysis: explains why emissions kept rising alongside the agreements, such as the scope of the targets and the growth of economies outside them.
- Evaluation: a clear, sustained judgement on how far the agreements succeeded, with the criteria used.

**Bands 9–10 (9–10 marks)**

- Knowledge: wide and precise; separates what the agreements achieved in governance from what they achieved in emissions.
- Application: contrasting evidence from several places, tested against the question.
- Analysis: sophisticated explanation of enforcement, finance and the gap between pledges and cuts.
- Evaluation: a balanced answer that states the criteria for success, reaches a supported conclusion and says what the evidence cannot show.`,
      ru: `**Уровни 1–2 (1–2 балла)**

- Знание: называет одно соглашение с низкой точностью.
- Применение: нет соглашения с датой и нет измеренного результата.
- Анализ: описывает соглашения, не связывая их с выбросами.
- Оценка: нет суждения или мнение без подтверждения.

**Уровни 3–4 (3–4 балла)**

- Знание: описывает Рамочную конвенцию (UNFCCC), Киотский протокол и Парижское соглашение с некоторой точностью, включая даты.
- Применение: одно соглашение и один измеренный результат, без цифры, года и источника.
- Анализ: объясняет одну причину успеха или ограниченного успеха, например охват целей или отсутствие обязательных обязательств.
- Оценка: базовое мнение об успехе с малой опорой.

**Уровни 5–6 (5–6 баллов)**

- Знание: точные цели и термины трёх соглашений, например стабилизация концентраций и национальные обязательства.
- Применение: два соглашения и один измеренный результат с цифрой и годом, например концентрация или итог выбросов.
- Анализ: развивает связь между целями, участием и выбросами.
- Оценка: суждение об успехе с как минимум одним аргументом за и одним против.

**Уровни 7–8 (7–8 баллов)**

- Знание: точные термины, использованные правильно; различает цели, участие и результаты.
- Применение: три соглашения проверены на названных странах, каждая с цифрами, годами и источниками.
- Анализ: объясняет, почему выбросы продолжали расти параллельно с соглашениями, например из-за охвата целей и роста экономик вне них.
- Оценка: ясное и устойчивое суждение о том, насколько соглашения преуспели, с указанными критериями.

**Уровни 9–10 (9–10 баллов)**

- Знание: широкие и точные знания; отделяет то, что соглашения дали в управлении, от того, что они дали в выбросах.
- Применение: контрастные доказательства из нескольких мест, проверенные на вопросе.
- Анализ: тонкое объяснение механизмов исполнения, финансирования и разрыва между обязательствами и сокращениями.
- Оценка: сбалансированный ответ, который называет критерии успеха, приходит к обоснованному выводу и говорит, чего данные не показывают.`,
    },
    model: {
      en: `**Plan**

1. Thesis: the agreements built a shared framework and near-universal participation, but they have not limited the rise in CO₂, so their success is partial.
2. Point 1 (framework): the UNFCCC (1992) aims to stabilise greenhouse gas concentrations at a level that prevents dangerous anthropogenic interference (UNFCCC).
3. Point 2 (Kyoto): targets for 37 industrialised countries, economies in transition and the European Union averaged a 5% cut below 1990 levels over 2008–2012 (UNFCCC); the Mauna Loa annual mean still rose from 363.88 ppm in 1997 to 427.35 ppm in 2025 (NOAA GML).
4. Point 3 (Paris): in force since 4 November 2016, with 194 Parties on 27 January 2026 (UNFCCC); its targets are national pledges, and China's emissions rose from 994 MtC in 2000 to 3,354 MtC in 2024 (Global Carbon Project, 2025), which shows the gap between pledges and outcomes.
5. Judgement: success in governance and participation, but not yet in emissions; the verdict depends on the criterion used.

**Model paragraph**

International agreements have built a shared framework and near-universal participation, but they have not yet limited the rise in CO₂. The UNFCCC (1992) aims to stabilise greenhouse gas concentrations at a level that prevents dangerous anthropogenic interference (UNFCCC). The Kyoto Protocol set targets for 37 industrialised countries, economies in transition and the European Union, averaging a 5% cut below 1990 levels over 2008–2012 (UNFCCC). Yet Mauna Loa's annual mean rose from 363.88 ppm in 1997 to 427.35 ppm in 2025 (NOAA GML), while China, outside those targets, raised fossil CO₂ emissions from 994 MtC in 2000 to 3,354 MtC in 2024 (Global Carbon Project, 2025). The Paris Agreement (in force since 4 November 2016) had 194 Parties on 27 January 2026 (UNFCCC), but its targets are national pledges. Success is therefore partial and depends on implementation.`,
      ru: `**План**

1. Тезис: соглашения создали общую рамку и почти всеобщее участие, но не ограничили рост CO₂, поэтому их успех частичный.
2. Пункт 1 (рамка): Рамочная конвенция ООН об изменении климата (UNFCCC, 1992) ставит цель стабилизировать концентрации парниковых газов на уровне, который предотвращает опасное антропогенное вмешательство (UNFCCC).
3. Пункт 2 (Киото): цели для 37 промышленно развитых стран, стран с переходной экономикой и Европейского союза в среднем означали сокращение на 5% ниже уровней 1990 года в 2008–2012 годах (UNFCCC); среднегодовое значение на Мауна-Лоа всё равно выросло с 363,88 ppm в 1997 году до 427,35 ppm в 2025 году (NOAA GML).
4. Пункт 3 (Париж): действует с 4 ноября 2016 года, 194 стороны на 27 января 2026 года (UNFCCC); цели — национальные обязательства, а выбросы Китая выросли с 994 МтC в 2000 году до 3 354 МтC в 2024 году (Global Carbon Project, 2025), что показывает разрыв между обязательствами и результатами.
5. Суждение: успех в управлении и участии, но пока не в выбросах; вывод зависит от выбранного критерия.

**Образец абзаца**

Международные соглашения создали общую рамку и почти всеобщее участие, но не ограничили рост CO₂. Рамочная конвенция ООН об изменении климата (UNFCCC, 1992) ставит цель стабилизировать концентрации парниковых газов на уровне, предотвращающем опасное антропогенное вмешательство (UNFCCC). Киотский протокол установил цели для 37 промышленно развитых стран, стран с переходной экономикой и Европейского союза: в среднем сокращение на 5% ниже уровней 1990 года в 2008–2012 годах (UNFCCC). Однако среднегодовое значение на Мауна-Лоа выросло с 363,88 ppm в 1997 году до 427,35 ppm в 2025 году (NOAA GML), а Китай, не связанный этими целями, увеличил выбросы CO₂ от ископаемого топлива с 994 МтC в 2000 году до 3 354 МтC в 2024 году (Global Carbon Project, 2025). Парижское соглашение (действует с 4 ноября 2016 года) насчитывало 194 стороны на 27 января 2026 года (UNFCCC), но его цели — национальные обязательства. Успех частичный и зависит от выполнения.`,
    },
    origin: 'original',
    minutes: 20,
  },
  {
    id: 'core-essay-2-3',
    subject: 'geo',
    topicIds: ['core-essay-2'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'Discuss',
    prompt: {
      en: `Discuss the view that the consequences of climate change are uneven, both between countries and within them. Refer to vulnerability and resilience in your answer.`,
      ru: `Обсудите утверждение, что последствия изменения климата распределены неравномерно, и между странами, и внутри них. Раскройте понятия уязвимости (vulnerability) и устойчивости (resilience) в ответе.`,
    },
    markscheme: {
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: names one hazard or one place, with little accuracy.
- Application: no named place.
- Analysis: describes damage without explaining why it is uneven.
- Evaluation: no judgement, or an opinion with no support.

**Bands 3–4 (3–4 marks)**

- Knowledge: defines exposure or vulnerability in a basic way.
- Application: one named place, without a figure or year, and no example from inside a country.
- Analysis: explains one reason for unevenness, such as low elevation or low income.
- Evaluation: a basic view on unevenness, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: accurate terms, such as vulnerability, resilience and adaptive capacity.
- Application: two named places, one with a figure and year, and one example of unevenness within a country.
- Analysis: develops the chain from exposure and sensitivity to losses, and from capacity to resilience.
- Evaluation: a judgement with at least one argument for and one against the view.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise, correctly used terms; distinguishes differences between countries and within them.
- Application: several named places with figures, years and sources, used to test the view.
- Analysis: links exposure, capacity, governance and finance, and explains why similar hazards cause different losses.
- Evaluation: a clear, sustained judgement on how uneven the consequences are, with its conditions.

**Bands 9–10 (9–10 marks)**

- Knowledge: wide and precise; uses vulnerability and resilience with care, and does not treat them as the same thing.
- Application: contrasting places at different scales, each with figures, years and sources.
- Analysis: sophisticated explanation of how capacity is built or lost over time, and of the limits of comparison.
- Evaluation: a balanced answer that says which factors matter most and why, and what the evidence cannot show.`,
      ru: `**Уровни 1–2 (1–2 балла)**

- Знание: называет одну опасность или одно место с низкой точностью.
- Применение: нет названного места.
- Анализ: описывает ущерб, не объясняя, почему он распределён неравномерно.
- Оценка: нет суждения или мнение без подтверждения.

**Уровни 3–4 (3–4 балла)**

- Знание: определяет подверженность (exposure) или уязвимость в базовом смысле.
- Применение: одно названное место без цифры и года и без примера внутри страны.
- Анализ: объясняет одну причину неравномерности, например низкую высоту или низкий доход.
- Оценка: базовое мнение о неравномерности с малой опорой.

**Уровни 5–6 (5–6 баллов)**

- Знание: точные термины: уязвимость, устойчивость (resilience) и адаптивная способность.
- Применение: два названных места, одно с цифрой и годом, и один пример неравномерности внутри страны.
- Анализ: развивает цепочку от подверженности и чувствительности к потерям и от способности к устойчивости.
- Оценка: суждение с как минимум одним аргументом за и одним против этого утверждения.

**Уровни 7–8 (7–8 баллов)**

- Знание: точные термины, использованные правильно; различает различия между странами и внутри них.
- Применение: несколько названных мест с цифрами, годами и источниками, которые проверяют утверждение.
- Анализ: связывает подверженность, возможности, управление и финансы и объясняет, почему похожие опасности дают разные потери.
- Оценка: ясное и устойчивое суждение о том, насколько неравномерны последствия, с его условиями.

**Уровни 9–10 (9–10 баллов)**

- Знание: широкие и точные знания; использует уязвимость и устойчивость внимательно и не отождествляет их.
- Применение: контрастные места разного масштаба, каждое с цифрами, годами и источниками.
- Анализ: тонкое объяснение того, как возможности создаются или теряются со временем, и пределов сравнения.
- Оценка: сбалансированный ответ, который говорит, какие факторы важнее всего и почему, и что данные не показывают.`,
    },
    model: {
      en: `**Plan**

1. Thesis: consequences are uneven because exposure, sensitivity and the capacity to adapt differ, both between countries and within them; resilience matters as much as the hazard.
2. Point 1 (between countries): Tuvalu's land area is 26 km² with an average elevation of 1.83 m (UNDP, 2016); Bangladesh loses about USD 1 billion a year to tropical cyclones (World Bank, 2022).
3. Point 2 (capacity): the Netherlands built the Delta Works after the 1953 flood, which killed 1,836 people (Stichting Watersnoodmuseum), showing that capacity can narrow the gap.
4. Point 3 (within countries): close to 70% of the damage and losses from Pakistan's 2022 floods, over USD 30 billion in total, fell in Sindh province (World Bank, 2022); Australia's 2019–2020 fires burnt over 24 million hectares (Royal Commission, 2020).
5. Judgement: the unevenness is real and comes from exposure and capacity together; income alone does not explain it, because Australia, a high-income country, also suffered heavy losses.

**Model paragraph**

Consequences are uneven because exposure, sensitivity and the capacity to adapt differ, both between countries and within them. Tuvalu has a land area of 26 km² and an average elevation of 1.83 m (UNDP, 2016), so sea-level rise is a direct threat to its land. Bangladesh loses about USD 1 billion a year on average to tropical cyclones, and 13 million people could become internal climate migrants by 2050 (World Bank, 2022). Capacity can narrow the gap: the Netherlands built the Delta Works after the 1953 flood, which killed 1,836 people (Stichting Watersnoodmuseum). Within countries, close to 70% of the over USD 30 billion in Pakistan's 2022 flood damage and losses fell in Sindh province (World Bank, 2022). Resilience therefore depends on governance and finance as well as on the hazard itself.`,
      ru: `**План**

1. Тезис: последствия распределены неравномерно, потому что подверженность, чувствительность и способность адаптироваться различаются, и между странами, и внутри них; устойчивость важна не меньше, чем сама опасность.
2. Пункт 1 (между странами): площадь суши Тувалу составляет 26 км², а средняя высота 1,83 м (UNDP, 2016); Бангладеш теряет около 1 млрд USD в год из-за тропических циклонов (Всемирный банк, 2022).
3. Пункт 2 (возможности): Нидерланды построили Дельта-работы после наводнения 1953 года, которое унесло жизни 1 836 человек (Stichting Watersnoodmuseum), что показывает: возможности могут сокращать разрыв.
4. Пункт 3 (внутри стран): около 70% ущерба и потерь от наводнений 2022 года в Пакистане, общий объём которых превысил 30 млрд USD, пришлось на провинцию Синд (Всемирный банк, 2022); пожары в Австралии в 2019–2020 годах сожгли более 24 млн гектаров (Королевская комиссия, 2020).
5. Суждение: неравномерность реальна и возникает из подверженности и возможностей вместе; один только доход её не объясняет, потому что Австралия, страна с высоким доходом, тоже понесла большие потери.

**Образец абзаца**

Последствия распределены неравномерно, потому что подверженность (exposure), чувствительность (sensitivity) и способность адаптироваться различаются — и между странами, и внутри них. Тувалу имеет площадь суши 26 км² и среднюю высоту 1,83 м (UNDP, 2016), поэтому подъём уровня моря — прямая угроза её земле. Бангладеш в среднем теряет около 1 млрд USD в год из-за тропических циклонов, а 13 млн человек могут стать внутренними климатическими мигрантами к 2050 году (Всемирный банк, 2022). Возможности способны сокращать разрыв: Нидерланды построили Дельта-работы после наводнения 1953 года, которое унесло жизни 1 836 человек (Stichting Watersnoodmuseum). Внутри стран около 70% из более чем 30 млрд USD ущерба и потерь от наводнений 2022 года в Пакистане пришлось на провинцию Синд (Всемирный банк, 2022). Устойчивость (resilience) поэтому зависит от управления и финансов так же, как и от самой опасности.`,
    },
    origin: 'original',
    minutes: 20,
  },
  {
    id: 'core-essay-2-4',
    subject: 'geo',
    topicIds: ['core-essay-2'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'Examine',
    prompt: {
      en: `Examine the causes of recent global warming, including the role of natural factors.`,
      ru: `Исследуйте причины недавнего глобального потепления, включая роль естественных факторов.`,
    },
    markscheme: {
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: names one cause of warming, with little accuracy.
- Application: no named place or source.
- Analysis: lists causes without explaining how they act.
- Evaluation: no judgement, or an opinion with no support.

**Bands 3–4 (3–4 marks)**

- Knowledge: describes the enhanced greenhouse effect and the rise in greenhouse gases in a basic way.
- Application: one named place or dataset, without a figure or year.
- Analysis: explains one mechanism, such as emissions from burning fossil fuels.
- Evaluation: a basic view on the role of natural factors, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: accurate terms, such as the enhanced greenhouse effect, feedback and natural drivers.
- Application: two named places or datasets, one with a figure and year.
- Analysis: develops a chain from emissions to concentrations to temperature, and explains one feedback.
- Evaluation: a judgement on the role of natural factors, with an argument for and one against.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise and correctly used terms; separates the timing of natural factors from the long-run trend.
- Application: several named places or datasets with figures, years and sources.
- Analysis: links human emissions, feedbacks and natural drivers, and explains why natural factors matter more for the short term than for the long-run trend.
- Evaluation: a clear, sustained judgement on the causes, with its conditions.

**Bands 9–10 (9–10 marks)**

- Knowledge: wide and precise; uses attribution evidence and states what it shows.
- Application: contrasting evidence tested against the question, each with figures, years and sources.
- Analysis: sophisticated explanation of how causes interact and how the evidence is built (measurement, models and attribution), with the limits of each.
- Evaluation: a balanced answer that states which cause dominates and why, and what the evidence cannot show.`,
      ru: `**Уровни 1–2 (1–2 балла)**

- Знание: называет одну причину потепления с низкой точностью.
- Применение: нет названного места или источника.
- Анализ: перечисляет причины, не объясняя, как они действуют.
- Оценка: нет суждения или мнение без подтверждения.

**Уровни 3–4 (3–4 балла)**

- Знание: описывает усиленный парниковый эффект и рост концентраций парниковых газов в базовом виде.
- Применение: одно названное место или набор данных без цифры и года.
- Анализ: объясняет один механизм, например выбросы при сжигании ископаемого топлива.
- Оценка: базовое мнение о роли естественных факторов с малой опорой.

**Уровни 5–6 (5–6 баллов)**

- Знание: точные термины: усиленный парниковый эффект, обратная связь (feedback) и естественные факторы (natural drivers).
- Применение: два названных места или набора данных, одно с цифрой и годом.
- Анализ: развивает цепочку от выбросов к концентрациям и к температуре и объясняет одну обратную связь.
- Оценка: суждение о роли естественных факторов, с аргументом за и одним против.

**Уровни 7–8 (7–8 баллов)**

- Знание: точные термины, использованные правильно; отделяет сроки действия естественных факторов от долгосрочного тренда.
- Применение: несколько названных мест или наборов данных с цифрами, годами и источниками.
- Анализ: связывает выбросы человека, обратные связи и естественные факторы и объясняет, почему естественные факторы важнее для краткосрочных колебаний, чем для долгосрочного тренда.
- Оценка: ясное и устойчивое суждение о причинах, с его условиями.

**Уровни 9–10 (9–10 баллов)**

- Знание: широкие и точные знания; использует данные атрибуции и говорит, что они показывают.
- Применение: контрастные доказательства, проверенные на вопросе, каждое с цифрами, годами и источниками.
- Анализ: тонкое объяснение того, как причины взаимодействуют и как строятся доказательства (измерения, модели и атрибуция), с пределами каждого.
- Оценка: сбалансированный ответ, который называет доминирующую причину и объясняет почему, и что данные не показывают.`,
    },
    model: {
      en: `**Plan**

1. Thesis: recent warming is mainly caused by the enhanced greenhouse effect from human emissions; natural factors modulate the trend, mainly in the short term.
2. Point 1 (greenhouse gases): the Mauna Loa annual mean rose from 316.91 ppm in 1960 to 427.35 ppm in 2025 (NOAA GML).
3. Point 2 (emission sources): China's fossil CO₂ emissions rose from 994 MtC in 2000 to 3,354 MtC in 2024, 3.4 times the 2000 value (Global Carbon Project, 2025).
4. Point 3 (feedback and natural drivers): Arctic September sea-ice extent fell by 32.6% between 1979 and 2025 (NSIDC Sea Ice Index, Version 4), amplifying warming through the ice–albedo feedback; IPCC AR6 (2021) finds that natural drivers have little effect on centennial warming.
5. Judgement: human emissions explain most of the recent warming; natural factors matter for timing and regional patterns, not for the long-run trend.

**Model paragraph**

Recent warming is mainly caused by the enhanced greenhouse effect from human emissions, while natural factors modulate the trend. Carbon dioxide at Mauna Loa rose from 316.91 ppm in 1960 to 427.35 ppm in 2025 (NOAA GML). Fossil emissions have grown too: China's rose from 994 MtC in 2000 to 3,354 MtC in 2024 (Global Carbon Project, 2025). Warming also feeds back on itself. Arctic September sea-ice extent fell from 7.05 million km² in 1979 to 4.75 million km² in 2025, a fall of 32.6% (NSIDC Sea Ice Index, Version 4), and darker open water absorbs more sunlight. Natural drivers such as solar and volcanic activity cause variation, but IPCC AR6 (2021) finds that they have little effect on centennial global warming, and that human-caused warming was 0.8°C to 1.3°C, best estimate 1.07°C, for 2010–2019 relative to 1850–1900.`,
      ru: `**План**

1. Тезис: недавнее потепление в основном вызвано усиленным парниковым эффектом (enhanced greenhouse effect) от выбросов человека; естественные факторы модулируют тренд, в основном в краткосрочной перспективе.
2. Пункт 1 (парниковые газы): среднегодовая концентрация CO₂ на Мауна-Лоа выросла с 316,91 ppm в 1960 году до 427,35 ppm в 2025 году (NOAA GML).
3. Пункт 2 (источники выбросов): выбросы CO₂ от ископаемого топлива в Китае выросли с 994 МтC в 2000 году до 3 354 МтC в 2024 году, то есть в 3,4 раза (Global Carbon Project, 2025).
4. Пункт 3 (обратная связь и естественные факторы): площадь арктического морского льда в сентябре сократилась на 32,6% между 1979 и 2025 годами (NSIDC Sea Ice Index, Version 4), что усиливает потепление через обратную связь «лёд — альбедо»; IPCC AR6 (2021) указывает, что естественные факторы мало влияют на потепление на столетнем масштабе.
5. Суждение: выбросы человека объясняют большую часть недавнего потепления; естественные факторы важны для сроков и региональных картин, но не для долгосрочного тренда.

**Образец абзаца**

Недавнее потепление в основном вызвано усиленным парниковым эффектом (enhanced greenhouse effect) от выбросов человека, а естественные факторы модулируют тренд. Концентрация CO₂ на Мауна-Лоа выросла с 316,91 ppm в 1960 году до 427,35 ppm в 2025 году (NOAA GML). В Китае выбросы от ископаемого топлива выросли с 994 МтC в 2000 году до 3 354 МтC в 2024 году (Global Carbon Project, 2025). Потепление усиливает себя: протяжённость арктического морского льда в сентябре сократилась с 7,05 млн км² в 1979 году до 4,75 млн км² в 2025 году, на 32,6% (NSIDC Sea Ice Index, Version 4), а тёмная открытая вода поглощает больше солнечного света. Естественные факторы, например солнечная и вулканическая активность, вызывают колебания, но IPCC AR6 (2021) указывает, что они мало влияют на потепление на столетнем масштабе; вызванное человеком потепление за 2010–2019 годы относительно 1850–1900 годов составило 0,8–1,3 °C, наилучшая оценка 1,07 °C.`,
    },
    origin: 'original',
    minutes: 20,
  },
];
