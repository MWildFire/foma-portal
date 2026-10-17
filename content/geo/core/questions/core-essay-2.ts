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
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Compare emissions reduction with reducing exposure and vulnerability, including their different timescales and distribution. Use named places as requested and justify priorities under stated conditions rather than assuming the responses are mutually exclusive.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Сравни сокращение выбросов со снижением подверженности и уязвимости, учитывая разные сроки и распределение выгод. Используй названные места по условию и обоснуй приоритеты при заданных обстоятельствах, не делая меры взаимоисключающими.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      en: `**Plan**

1. Thesis: mitigation should lead the long-term response, but adaptation must come first where exposure is immediate; the priority depends on the time frame and the place.
2. Point 1 (mitigation): the Mauna Loa annual mean rose from 316.91 ppm in 1960 to 427.35 ppm in 2025 (NOAA GML), so adaptation faces a growing change while emissions continue.
3. Point 2 (mitigation): China's share of world fossil CO₂ emissions rose from 14.3% in 2000 to 31.8% in 2024 (Global Carbon Project, 2025); cuts must reach the high emitters.
4. Point 3 (adaptation): the Delta Works, built after the 1953 flood that drowned 1,836 people (Stichting Watersnoodmuseum), show that protection can work now; Pakistan's 2022 floods affected 33 million people, with combined damages and economic losses above USD 30 billion (World Bank, 2022), while the country emitted about 0.49% of world CO₂ in 2023 (Our World in Data).
5. Judgement: mitigation leads the long run; adaptation leads where exposure is immediate. The time frame and the place decide which comes first.

**Model paragraph**

Mitigation should lead the long-term response, but adaptation must come first where exposure is immediate. Carbon dioxide at Mauna Loa rose from 316.91 ppm in 1960 to 427.35 ppm in 2025 (NOAA GML), so adaptation faces a growing change. Cuts must also reach the high emitters: China's share of world fossil CO₂ emissions rose from 14.3% in 2000 to 31.8% in 2024 (Global Carbon Project, 2025). Yet the Delta Works, built after the 1953 flood that drowned 1,836 people in the Netherlands (Stichting Watersnoodmuseum), show that protection works now. In Pakistan, the 2022 floods affected 33 million people and caused combined damages and economic losses above USD 30 billion (World Bank, 2022), although the country emitted only about 0.49% of world CO₂ in 2023 (Our World in Data). The judgement is time-bound: mitigation leads the long run, adaptation leads where exposure is immediate.`,
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
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Distinguish an agreement’s targets, participation and implementation from measured emissions and warming outcomes. Compare dates, coverage and baselines; rising emissions alone do not measure the no-agreement counterfactual.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Отличай цели соглашения, участие и реализацию от измеренных выбросов и потепления. Сравни даты, охват и базовые уровни: один рост выбросов не измеряет сценарий без соглашения.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      en: `**Plan**

1. Thesis: the agreements built a shared framework and near-universal participation, but global CO₂ concentration has not been stabilised, so their success is partial.
2. Point 1 (framework): the UNFCCC (1992) aims to stabilise greenhouse gas concentrations at a level that prevents dangerous anthropogenic interference (UNFCCC).
3. Point 2 (Kyoto): targets for 37 industrialised countries, economies in transition and the European Union averaged a 5% cut below 1990 levels over 2008–2012 (UNFCCC); the Mauna Loa annual mean still rose from 363.88 ppm in 1997 to 427.35 ppm in 2025 (NOAA GML).
4. Point 3 (Paris): in force since 4 November 2016, with 194 Parties on 27 January 2026 (UNFCCC); its targets are national pledges, and China's emissions rose from 994 MtC in 2000 to 3,354 MtC in 2024 (Global Carbon Project, 2025), which illustrates rising emissions over a period spanning several policy regimes, not a direct test of a Paris pledge. Test a pledge against its own baseline, scope and target year.
5. Judgement: success in governance and participation, but not yet in emissions; the verdict depends on the criterion used.

**Model paragraph**

International agreements have built a shared framework and near-universal participation, but global CO₂ concentration has not yet been stabilised. The UNFCCC (1992) aims to stabilise greenhouse gas concentrations at a level that prevents dangerous anthropogenic interference (UNFCCC). The Kyoto Protocol set targets for 37 industrialised countries, economies in transition and the European Union, averaging a 5% cut below 1990 levels over 2008–2012 (UNFCCC). Yet Mauna Loa's annual mean rose from 363.88 ppm in 1997 to 427.35 ppm in 2025 (NOAA GML), while China, outside those targets, raised fossil CO₂ emissions from 994 MtC in 2000 to 3,354 MtC in 2024 (Global Carbon Project, 2025). The Paris Agreement (in force since 4 November 2016) had 194 Parties on 27 January 2026 (UNFCCC), but its targets are national pledges. These observations show that stabilisation is still unachieved; they do not show that agreements had zero effect. Assess avoided emissions against a credible no-policy counterfactual, alongside target delivery and implementation.`,
      ru: `**План**

1. Тезис: соглашения создали общую рамку и почти всеобщее участие, но глобальная концентрация CO₂ не стабилизировалась, поэтому их успех частичный.
2. Пункт 1 (рамка): Рамочная конвенция ООН об изменении климата (UNFCCC, 1992) ставит цель стабилизировать концентрации парниковых газов на уровне, который предотвращает опасное антропогенное вмешательство (UNFCCC).
3. Пункт 2 (Киото): цели для 37 промышленно развитых стран, стран с переходной экономикой и Европейского союза в среднем означали сокращение на 5% ниже уровней 1990 года в 2008–2012 годах (UNFCCC); среднегодовое значение на Мауна-Лоа всё равно выросло с 363,88 ppm в 1997 году до 427,35 ppm в 2025 году (NOAA GML).
4. Пункт 3 (Париж): действует с 4 ноября 2016 года, 194 стороны на 27 января 2026 года (UNFCCC); цели — национальные обязательства, а выбросы Китая выросли с 994 МтC в 2000 году до 3 354 МтC в 2024 году (Global Carbon Project, 2025), что показывает рост за период нескольких режимов политики, а не прямую проверку парижского обязательства. Его нужно сопоставлять с собственной базой, охватом и целевым годом.
5. Суждение: успех в управлении и участии, но пока не в выбросах; вывод зависит от выбранного критерия.

**Образец абзаца**

Международные соглашения создали общую рамку и почти всеобщее участие, но глобальная концентрация CO₂ не стабилизировалась. Рамочная конвенция ООН об изменении климата (UNFCCC, 1992) ставит цель стабилизировать концентрации парниковых газов на уровне, предотвращающем опасное антропогенное вмешательство (UNFCCC). Киотский протокол установил цели для 37 промышленно развитых стран, стран с переходной экономикой и Европейского союза: в среднем сокращение на 5% ниже уровней 1990 года в 2008–2012 годах (UNFCCC). Однако среднегодовое значение на Мауна-Лоа выросло с 363,88 ppm в 1997 году до 427,35 ppm в 2025 году (NOAA GML), а Китай, не связанный этими целями, увеличил выбросы CO₂ от ископаемого топлива с 994 МтC в 2000 году до 3 354 МтC в 2024 году (Global Carbon Project, 2025). Парижское соглашение (действует с 4 ноября 2016 года) насчитывало 194 стороны на 27 января 2026 года (UNFCCC), но его цели — национальные обязательства. Эти наблюдения показывают, что стабилизация ещё не достигнута, но не доказывают нулевого эффекта соглашений. Помимо выполнения целей оценивайте предотвращённые выбросы относительно обоснованного сценария без политики.`,
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
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Explain exposure, vulnerability and resilience across countries and within a country. Connect hazards to differentiated impacts using evidence about income, location, infrastructure and capacity, avoiding a claim that everyone in one income group has the same risk.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Объясни подверженность, уязвимость и устойчивость между странами и внутри страны. Свяжи опасные явления с неодинаковыми последствиями через доход, место, инфраструктуру и возможности, не приписывая всем в одной доходной группе одинаковый риск.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      en: `**Plan**

1. Thesis: consequences are uneven because exposure, sensitivity and the capacity to adapt differ, both between countries and within them; resilience matters as much as the hazard.
2. Point 1 (between countries): Tuvalu's land area is 26 km² with an average elevation of 1.83 m (GCF, 2015); Bangladesh loses about USD 1 billion a year to tropical cyclones (World Bank, 2022).
3. Point 2 (capacity): the Netherlands built the Delta Works after the 1953 flood, which killed 1,836 people (Stichting Watersnoodmuseum), showing that capacity can narrow the gap.
4. Point 3 (within countries): close to 70% of the damage and losses from Pakistan's 2022 floods, over USD 30 billion in total, fell in Sindh province (World Bank, 2022); Australia's 2019–2020 fires burnt over 24 million hectares (Royal Commission, 2020).
5. Judgement: the unevenness is real and comes from exposure and capacity together; income alone does not explain it, because Australia, a high-income country, also suffered heavy losses.

**Model paragraph**

Consequences are uneven because exposure, sensitivity and the capacity to adapt differ, both between countries and within them. Tuvalu has a land area of 26 km² and an average elevation of 1.83 m (GCF, 2015), so sea-level rise is a direct threat to its land. Bangladesh loses about USD 1 billion a year on average to tropical cyclones, and 13 million people could become internal climate migrants by 2050 (World Bank, 2022). Capacity can narrow the gap: the Netherlands built the Delta Works after the 1953 flood, which killed 1,836 people (Stichting Watersnoodmuseum). Within countries, close to 70% of the over USD 30 billion in Pakistan's 2022 flood damage and losses fell in Sindh province (World Bank, 2022). Resilience therefore depends on governance and finance as well as on the hazard itself.`,
      ru: `**План**

1. Тезис: последствия распределены неравномерно, потому что подверженность, чувствительность и способность адаптироваться различаются, и между странами, и внутри них; устойчивость важна не меньше, чем сама опасность.
2. Пункт 1 (между странами): площадь суши Тувалу составляет 26 км², а средняя высота 1,83 м (GCF, 2015); Бангладеш теряет около 1 млрд USD в год из-за тропических циклонов (Всемирный банк, 2022).
3. Пункт 2 (возможности): Нидерланды построили Дельта-работы после наводнения 1953 года, которое унесло жизни 1 836 человек (Stichting Watersnoodmuseum), что показывает: возможности могут сокращать разрыв.
4. Пункт 3 (внутри стран): около 70% ущерба и потерь от наводнений 2022 года в Пакистане, общий объём которых превысил 30 млрд USD, пришлось на провинцию Синд (Всемирный банк, 2022); пожары в Австралии в 2019–2020 годах сожгли более 24 млн гектаров (Королевская комиссия, 2020).
5. Суждение: неравномерность реальна и возникает из подверженности и возможностей вместе; один только доход её не объясняет, потому что Австралия, страна с высоким доходом, тоже понесла большие потери.

**Образец абзаца**

Последствия распределены неравномерно, потому что подверженность (exposure), чувствительность (sensitivity) и способность адаптироваться различаются — и между странами, и внутри них. Тувалу имеет площадь суши 26 км² и среднюю высоту 1,83 м (GCF, 2015), поэтому подъём уровня моря — прямая угроза её земле. Бангладеш в среднем теряет около 1 млрд USD в год из-за тропических циклонов, а 13 млн человек могут стать внутренними климатическими мигрантами к 2050 году (Всемирный банк, 2022). Возможности способны сокращать разрыв: Нидерланды построили Дельта-работы после наводнения 1953 года, которое унесло жизни 1 836 человек (Stichting Watersnoodmuseum). Внутри стран около 70% из более чем 30 млрд USD ущерба и потерь от наводнений 2022 года в Пакистане пришлось на провинцию Синд (Всемирный банк, 2022). Устойчивость (resilience) поэтому зависит от управления и финансов так же, как и от самой опасности.`,
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
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Explain the enhanced greenhouse effect and evaluate evidence for human and natural contributions over a stated recent period. Distinguish forcing, feedback and short-term variability; do not assume that listing natural influences makes their contribution equal to human forcing.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Объясни усиленный парниковый эффект и оцени данные о вкладе человека и естественных факторов за заданный недавний период. Различай воздействие, обратную связь и краткосрочную изменчивость; перечисление естественных факторов не доказывает их равный вклад.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      en: `**Plan**

1. Thesis: recent warming is mainly caused by the enhanced greenhouse effect from human emissions; natural factors modulate the trend, mainly in the short term.
2. Point 1 (greenhouse gases): the Mauna Loa annual mean rose from 316.91 ppm in 1960 to 427.35 ppm in 2025 (NOAA GML).
3. Point 2 (emission sources): China's fossil CO₂ emissions rose from 994 MtC in 2000 to 3,354 MtC in 2024, 3.4 times the 2000 value (Global Carbon Project, 2025).
4. Point 3 (feedback and natural drivers): Arctic September sea-ice extent fell by 32.6% between 1979 and 2025 (NSIDC Sea Ice Index, Version 4), amplifying warming through the ice–albedo feedback; IPCC AR6 (2021) finds that natural drivers have little effect on centennial warming.
5. Judgement: human emissions explain most of the recent warming; natural factors affect timing and regional patterns but do not explain the dominant observed global warming since the nineteenth century. This does not deny their importance over other periods, such as glacial cycles.

**Model paragraph**

Recent warming is mainly caused by the enhanced greenhouse effect from human emissions, while natural factors modulate the trend. Carbon dioxide at Mauna Loa rose from 316.91 ppm in 1960 to 427.35 ppm in 2025 (NOAA GML). Fossil emissions have grown too: China's rose from 994 MtC in 2000 to 3,354 MtC in 2024 (Global Carbon Project, 2025). Warming also feeds back on itself. Arctic September sea-ice extent fell from 7.05 million km² in 1979 to 4.75 million km² in 2025, a fall of 32.6% (NSIDC Sea Ice Index, Version 4), and darker open water absorbs more sunlight. Natural drivers such as solar and volcanic activity cause variation, but IPCC AR6 (2021) finds that they have little effect on centennial global warming, and that human-caused warming was 0.8°C to 1.3°C, best estimate 1.07°C, for 2010–2019 relative to 1850–1900.`,
      ru: `**План**

1. Тезис: недавнее потепление в основном вызвано усиленным парниковым эффектом (enhanced greenhouse effect) от выбросов человека; естественные факторы модулируют тренд, в основном в краткосрочной перспективе.
2. Пункт 1 (парниковые газы): среднегодовая концентрация CO₂ на Мауна-Лоа выросла с 316,91 ppm в 1960 году до 427,35 ppm в 2025 году (NOAA GML).
3. Пункт 2 (источники выбросов): выбросы CO₂ от ископаемого топлива в Китае выросли с 994 МтC в 2000 году до 3 354 МтC в 2024 году, то есть в 3,4 раза (Global Carbon Project, 2025).
4. Пункт 3 (обратная связь и естественные факторы): площадь арктического морского льда в сентябре сократилась на 32,6% между 1979 и 2025 годами (NSIDC Sea Ice Index, Version 4), что усиливает потепление через обратную связь «лёд — альбедо»; IPCC AR6 (2021) указывает, что естественные факторы мало влияют на потепление на столетнем масштабе.
5. Суждение: выбросы человека объясняют большую часть недавнего потепления; естественные факторы влияют на сроки и региональные различия, но не объясняют основную часть наблюдаемого глобального потепления с XIX века. На других масштабах, например в ледниковых циклах, их роль может быть велика.

**Образец абзаца**

Недавнее потепление в основном вызвано усиленным парниковым эффектом (enhanced greenhouse effect) от выбросов человека, а естественные факторы модулируют тренд. Концентрация CO₂ на Мауна-Лоа выросла с 316,91 ppm в 1960 году до 427,35 ppm в 2025 году (NOAA GML). В Китае выбросы от ископаемого топлива выросли с 994 МтC в 2000 году до 3 354 МтC в 2024 году (Global Carbon Project, 2025). Потепление усиливает себя: протяжённость арктического морского льда в сентябре сократилась с 7,05 млн км² в 1979 году до 4,75 млн км² в 2025 году, на 32,6% (NSIDC Sea Ice Index, Version 4), а тёмная открытая вода поглощает больше солнечного света. Естественные факторы, например солнечная и вулканическая активность, вызывают колебания, но IPCC AR6 (2021) указывает, что они мало влияют на потепление на столетнем масштабе; вызванное человеком потепление за 2010–2019 годы относительно 1850–1900 годов составило 0,8–1,3 °C, наилучшая оценка 1,07 °C.`,
    },
    origin: 'original',
    minutes: 20,
  },
];
