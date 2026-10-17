import type { Question } from '../../../../src/contract/types';

// Section C essays for Unit 1 (changing population). Original questions in IB command-term style.
// The markschemes are our band checklists in general words, not the official descriptors (check the guide).
// Model claims have separate bounded source/proof dispositions; a source list alone is not verification.
export const questions: Question[] = [
  {
    id: 'core-essay-1-1',
    subject: 'geo',
    topicIds: ['core-essay-1'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'Discuss',
    prompt: {
      en: `Discuss the usefulness of the demographic transition model in explaining population change in different countries.`,
      ru: `Обсудите полезность модели демографического перехода (demographic transition model) для объяснения изменения населения в разных странах.`,
    },
    markscheme: {
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Explain the model’s birth/death-rate sequence and compare its descriptive value with limits in timing, migration, policy and prediction. Test the model against relevant country evidence rather than assigning a stage from TFR alone.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Объясни последовательность изменения рождаемости и смертности; сравни описательную пользу модели с ограничениями по срокам, миграции, политике и прогнозу. Проверяй модель данными стран, а не определяй стадию по одному СКР.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      en: `**Plan**

1. Thesis: the model is a useful description of the general pattern of change, but it explains the speed, the causes and the role of migration poorly.
2. Point 1: Japan shows the later stages. Its crude birth rate was 6.0 and its crude death rate 12.3 per 1000 in 2023, so deaths exceed births and there is natural decrease (UN WPP 2024); migration is separate.
3. Point 2: speed. Imported medicine cut death rates quickly in many low-income countries, compressing the stages.
4. Point 3: migration. Japan's population fell by 550,000 in the year to 1 October 2024 (Statistics Bureau of Japan), but that total mixes natural decrease with migration, which the model ignores.
5. Judgement: useful for broad trends, weak for individual countries without migration and policy.

**Model paragraph**

The demographic transition model describes a useful general pattern: death rates fall first, then birth rates follow, so growth rises and then slows. England and Wales shows the later stages, with a total fertility rate of 1.39 children per woman in 2025, far below the replacement level of about 2.1 in a low-mortality population, and live births fell to 585,396 (ONS). However, the model explains less about speed and causes. Many low-income countries cut death rates within decades using imported medicine, so their transitions were compressed compared with Europe. The model also ignores migration: Japan's population fell by 550,000 to 123.8 million between 1 October 2023 and 1 October 2024 (Statistics Bureau of Japan), a total that mixes natural decrease with migration. The model is therefore a useful description of trends, but not a full explanation of any one country.`,
      ru: `**План**

1. Тезис: модель — полезное описание общей закономерности изменений, но она плохо объясняет скорость, причины и роль миграции.
2. Пункт 1: Япония показывает поздние стадии. В 2023 году общий коэффициент рождаемости составлял 6,0, а смертности — 12,3 на 1000 человек, поэтому население убывает естественным путём (UN WPP 2024).
3. Пункт 2: скорость. Импортированная медицина быстро снизила смертность во многих странах с низкими доходами и сжала стадии.
4. Пункт 3: миграция. Население Японии сократилось на 550 000 за год до 1 октября 2024 года (Statistics Bureau of Japan), но эта разница объединяет естественную убыль и миграцию, которую модель не учитывает.
5. Суждение: полезна для общих тенденций, слаба для отдельных стран без учёта миграции и политики.

**Образец абзаца**

Модель демографического перехода (demographic transition model) описывает полезную общую закономерность: сначала снижается смертность, затем за ней следует рождаемость, поэтому рост сначала ускоряется, а потом замедляется. Англия и Уэльс показывают поздние стадии: суммарный коэффициент рождаемости (total fertility rate) составил 1,39 ребёнка на женщину в 2025 году, что намного ниже уровня замещения около 2,1 при низкой смертности, а число живорождений снизилось до 585 396 (ONS). Однако модель меньше объясняет скорость и причины. Многие страны с низкими доходами сократили смертность за десятилетия с помощью импортированной медицины, поэтому их переход был сжат по сравнению с Европой. Модель также не учитывает миграцию: население Японии сократилось на 550 000 и составило 123,8 млн человек с 1 октября 2023 по 1 октября 2024 года (Statistics Bureau of Japan), а эта разница объединяет естественную убыль и миграцию. Поэтому модель — полезное описание тенденций, но не полное объяснение какой-либо отдельной страны.`,
    },
    origin: 'original',
    minutes: 20,
  },
  {
    id: 'core-essay-1-2',
    subject: 'geo',
    topicIds: ['core-essay-1'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'Evaluate',
    prompt: {
      en: `Evaluate the relative importance of push factors and pull factors in rural–urban migration, using named examples of the places people move to.`,
      ru: `Оцените относительную важность факторов выталкивания (push factors) и факторов притяжения (pull factors) в миграции из сельской местности в города (rural–urban migration), используя названные примеры мест, куда переезжают люди.`,
    },
    markscheme: {
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Compare reasons for leaving with reasons for choosing a destination. Explain their interaction and test motives with suitable evidence; urban population growth alone also includes natural change and boundary effects.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Сравни причины отъезда с причинами выбора места назначения. Объясни их взаимодействие и проверяй мотивы подходящими данными: рост городского населения включает также естественное движение и изменения границ.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      en: `**Plan**

1. Thesis: push factors explain why people leave rural areas, but pull factors largely decide where they go, so the balance depends on the stage of the economy.
2. Point 1 (push): land shortage and low farm incomes. Scale: the UN projects that Nigeria will add 189 million urban dwellers between 2018 and 2050 (UN DESA, 2018 Revision of World Urbanization Prospects).
3. Point 2 (pull): jobs attract migrants. Shenzhen, a special economic zone, had 17.56 million residents at the 2020 census (Shenzhen government).
4. Point 3 (counter-evidence): natural increase adds people to existing cities, so migration is not the only cause of urban growth.
5. Judgement: push factors matter more for leaving in poorer economies; pull factors matter more for the destination where urban jobs grow fast.

**Model paragraph**

Push factors explain why many people leave rural areas, but pull factors largely decide where they go. The UN projects that Nigeria will add 189 million urban dwellers between 2018 and 2050 (UN DESA). This dated projection describes the scale of urban growth; it does not isolate rural–urban migration, natural increase or boundary changes and cannot prove that land shortage or low farm incomes caused migration. Pull factors shape the destination. Shenzhen, a special economic zone, had 17.56 million residents at the 2020 census, with a large floating population in the linked census case. The census identifies residence and registration, not each migrant’s motive; job attraction is a mechanism to test using interviews or labour-market evidence. Migration is not the only source of city growth, because natural increase adds people to existing cities. On balance, push factors matter more for the decision to leave in poorer economies, while pull factors decide the destination where urban jobs grow fast.`,
      ru: `**План**

1. Тезис: факторы выталкивания объясняют, почему люди уезжают из сельской местности, но факторы притяжения в основном определяют, куда они едут, поэтому баланс зависит от стадии развития экономики.
2. Пункт 1 (выталкивание): нехватка земли и низкие доходы от сельского хозяйства. Масштаб: ООН прогнозирует, что Нигерия добавит 189 млн городских жителей в 2018–2050 годах (UN DESA, 2018 Revision of World Urbanization Prospects).
3. Пункт 2 (притяжение): работа привлекает мигрантов. Шэньчжэнь, особая экономическая зона, по переписи 2020 года его население составило 17,56 млн жителей (правительство Шэньчжэня).
4. Пункт 3 (контрпример): естественный прирост добавляет людей в уже существующие города, поэтому миграция — не единственная причина роста городов.
5. Суждение: факторы выталкивания важнее для решения уехать в более бедных экономиках; факторы притяжения важнее для выбора места там, где городская работа быстро растёт.

**Образец абзаца**

Факторы выталкивания (push factors) объясняют, почему многие люди уезжают из сельской местности, но факторы притяжения (pull factors) в основном определяют, куда они едут. ООН прогнозирует, что Нигерия добавит 189 млн городских жителей в 2018–2050 годах (UN DESA). Этот датированный прогноз описывает масштаб роста городов, но не отделяет миграцию из села от естественного прироста и изменения границ. Он не доказывает, что причиной миграции были нехватка земли или низкие доходы от сельского хозяйства. Факторы притяжения определяют место назначения. Население Шэньчжэня, особой экономической зоны, по переписи 2020 года составило 17,56 млн человек, при большой доле «плавающего населения» в связанном кейсе переписи. Перепись устанавливает место проживания и регистрации, а не мотив каждого мигранта; притяжение рабочих мест нужно проверять интервью или данными рынка труда. Миграция — не единственный источник роста городов, ведь естественный прирост добавляет людей в уже существующие города. В итоге факторы выталкивания важнее для решения уехать в более бедных экономиках, а факторы притяжения определяют место назначения там, где городская работа быстро растёт.`,
    },
    origin: 'original',
    minutes: 20,
  },
  {
    id: 'core-essay-1-3',
    subject: 'geo',
    topicIds: ['core-essay-1'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'To what extent',
    prompt: {
      en: `To what extent does an ageing population create more challenges than opportunities for the countries where it is occurring?`,
      ru: `В какой степени стареющее население создаёт для стран, в которых оно наблюдается, больше проблем, чем возможностей?`,
    },
    markscheme: {
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Weigh pension, care and labour-market pressures against older workers, productivity and new services. Distinguish age-based ratios from employment and actual financial dependency; explain how policy and resources change the balance.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Взвесь нагрузку на пенсии, уход и рынок труда против занятости пожилых, производительности и новых услуг. Отличай возрастные коэффициенты от занятости и финансовой зависимости; объясни влияние политики и ресурсов на итоговый баланс.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      en: `**Plan**

1. Thesis: an ageing population creates more challenges than opportunities for countries that have not prepared, but well-designed policy can turn part of the change into opportunity.
2. Point 1 (challenge, economic): Japan's 65-and-over share was 29.3% on 1 October 2024, about 36.24 million people, which can raise pension and care pressures if employment, contributions and productivity do not offset the age shift (Statistics Bureau of Japan).
3. Point 2 (challenge, social): care needs fall on families and the state, which adds cost and strains household budgets.
4. Point 3 (opportunity): older workers, productivity gains from technology, and a silver economy of health and leisure services.
5. Judgement: the balance depends on wealth, pensions and labour policy; challenges dominate for poorer countries that age early.

**Model paragraph**

An ageing population creates more challenges than opportunities for countries that have not prepared, although the balance depends on policy. Japan shows the scale: 29.3% of its residents were aged 65 or over on 1 October 2024, about 36.24 million people (Statistics Bureau of Japan; the UN WPP 2024 projection for mid-2024 is 29.8%, because it uses a different date and method). A higher older-age share can increase pension and care pressures, but an age group is not a count of employed contributors or financial dependants. Employment at older ages, contribution rates, saving, productivity and the funding system affect the actual burden; families and the state may face additional care costs. However, older workers bring experience, and technology can raise productivity to offset labour shortages. A silver economy of health and leisure services can create jobs. These gains need investment and reform, and countries that age before they become rich have fewer resources to respond. On balance, challenges outweigh opportunities for unprepared economies, while well-prepared ones can manage the transition.`,
      ru: `**План**

1. Тезис: стареющее население создаёт для не подготовившихся стран больше проблем, чем возможностей, но хорошо продуманная политика может превратить часть этих перемен в возможности.
2. Пункт 1 (проблема, экономика): доля жителей в возрасте 65 лет и старше в Японии составляла 29,3% на 1 октября 2024 года, около 36,24 млн человек, что может усилить нагрузку на пенсии и уход, если занятость, взносы и производительность не компенсируют возрастной сдвиг (Statistics Bureau of Japan).
3. Пункт 2 (проблема, социальная сфера): потребность в уходе ложится на семьи и государство, что добавляет расходов и нагружает семейный бюджет.
4. Пункт 3 (возможность): пожилые работники, рост производительности благодаря технологиям и «серебряная экономика» услуг здравоохранения и досуга.
5. Суждение: баланс зависит от богатства, пенсионной системы и политики занятости; проблемы преобладают у более бедных стран, которые стареют рано.

**Образец абзаца**

Стареющее население создаёт для не подготовившихся стран больше проблем, чем возможностей, хотя баланс зависит от политики. Япония показывает масштаб: 29,3% её жителей были в возрасте 65 лет и старше на 1 октября 2024 года, то есть около 36,24 млн человек (Statistics Bureau of Japan; проекция UN WPP 2024 на середину 2024 года — 29,8%, поскольку использует другую дату и метод). Рост доли пожилых может усилить нагрузку на пенсии и уход, но возрастная группа не равна числу занятых плательщиков или финансовых иждивенцев. Фактическая нагрузка зависит от занятости в старших возрастах, взносов, сбережений, производительности и системы финансирования; семьи и государство могут нести дополнительные затраты на уход. Однако пожилые работники привносят опыт, а технологии могут повысить производительность и компенсировать нехватку рабочей силы. «Серебряная экономика» (silver economy) услуг здравоохранения и досуга может создавать рабочие места. Эти выгоды требуют инвестиций и реформ, а страны, которые стареют раньше, чем становятся богатыми, имеют меньше ресурсов для ответа. В итоге проблемы перевешивают возможности для неподготовленных экономик, тогда как хорошо подготовленные могут справиться с переходом.`,
    },
    origin: 'original',
    minutes: 20,
  },
  {
    id: 'core-essay-1-4',
    subject: 'geo',
    topicIds: ['core-essay-1'],
    paper: 'P2',
    section: 'C',
    marks: 10,
    command: 'Discuss',
    prompt: {
      en: `Discuss the effectiveness of government policies that aim to change a country's birth rate or population growth.`,
      ru: `Обсудите эффективность государственной политики, направленной на изменение рождаемости или темпов роста населения страны.`,
    },
    markscheme: {
      en: `**Review checklist for this original 10-mark essay**

Judge the whole response using the school’s Section C markbands. These topic-specific checks are our guidance, not fixed marks per bullet or a quota of countries, statistics or citations.

- Answer the exact topic and command, using accurate geographical concepts.
- Integrate relevant, accurate examples or data and explain how they support the argument; distinguish dates, units and estimates from projections.
- Develop mechanisms and comparisons, rather than listing facts.
- Evaluate evidence, exceptions and perspectives, then justify a conclusion appropriate to the question.
- Organise a coherent argument; use a diagram or map where it helps and explain it.

**Question-specific focus:** Identify a policy’s aim, mechanism, date and measured outcome. Distinguish TFR, birth counts and population growth; separate birth timing from completed family size, and assess alternative causes and the missing counterfactual.

Basis for the broad assessment approach: Geography May 2019 Paper 2 markscheme, printed pp.3–4, Section C; wording here is ours. Follow the school’s current instructions for the mock.`,
      ru: `**Самопроверка этого авторского эссе на 10 баллов**

Оценивай ответ целиком по школьным уровням Section C. Эти предметные ориентиры — наша помощь, а не фиксированные баллы за пункты или квота стран, чисел и ссылок.

- Ответь на точную тему и команду, правильно используя географические понятия.
- Встрой уместные и точные примеры или данные и объясни их связь с аргументом; различай даты, единицы, оценки и проекции.
- Развивай механизмы и сравнения вместо перечня фактов.
- Оцени доказательства, исключения и разные позиции, затем обоснуй вывод по вопросу.
- Построй связное рассуждение; используй и объясни карту или диаграмму там, где она помогает.

**Для этого вопроса:** Укажи цель, механизм, дату и измеренный результат меры. Различай СКР, число рождений и рост населения; отделяй сроки рождения от итогового числа детей и оцени другие причины и отсутствие сценария без меры.

Общая основа подхода: схема оценивания Geography Paper 2, май 2019, печатные стр.3–4, Section C; здесь изложено своими словами. Для мока следуй действующим указаниям школы.`,
    },
    model: {
      en: `**Plan**

1. Thesis: policies can raise birth rates modestly and temporarily, but they rarely reverse long-term decline on their own; their effect depends on the causes of low fertility and on how the policy is designed.
2. Point 1 (incentives): South Korea's total fertility rate rose from 0.75 in 2024 to 0.80 in 2025, the first return to the 0.8 range since 2021 (Ministry of Data and Statistics, preliminary 2025 release, 2015–2025p table; the UN WPP 2024 projection for 2024 is 0.73).
3. Point 2 (limits): the official release reports higher age-specific fertility rates across all age groups. More women in their thirties can raise birth counts, but does not mechanically raise TFR if age-specific rates are unchanged; the policy effect still needs a counterfactual.
4. Point 3 (restrictive policy): China relaxed birth restrictions, adopting a three-child decision in 2021, yet official 2025 births were 7.92 million. This shows that removing a limit does not guarantee rising births; the count also depends on the number and age of potential mothers, not only fertility preferences.
5. Judgement: assess policies against the actual barriers (housing, childcare, unequal care responsibilities), comparing costs, timing and a counterfactual rather than assuming services always outperform cash.

**Model paragraph**

Government policies can raise birth rates, but usually modestly and temporarily. South Korea offers mixed evidence. Its total fertility rate rose from 0.75 in 2024 to 0.80 in 2025, the first return to the 0.8 range since 2021 (Ministry of Data and Statistics, preliminary 2025 release, 2015–2025p table; the UN WPP 2024 projection for 2024 is 0.73). The official release reports increases in age-specific fertility rates in every age group. A larger cohort of potential mothers can raise the number of births, but does not mechanically raise period TFR when age-specific rates are unchanged. The observed rise therefore does not identify an incentive effect without a credible comparison. The rate is still less than half the replacement level of about 2.1, so the rebound has not restored replacement fertility; being below replacement alone does not show whether a recent trend has reversed. China supplies a contrasting policy sequence: the three-child decision was adopted in 2021, but the statistical office reported only 7.92 million births in 2025. These figures do not estimate a policy effect: births also depend on the number and ages of potential mothers, and the relevant comparison is with a credible no-policy counterfactual. A defensible policy argument is to address identified barriers such as housing, childcare and unequal care responsibilities, while testing effects and costs. Birth timing can respond relatively quickly; evidence about completed family size requires following cohorts longer. These cases do not prove a universal ranking of cash and services.`,
      ru: `**План**

1. Тезис: политика может умеренно и временно повысить рождаемость, но редко сама по себе переламывает долгосрочный спад; её эффект зависит от причин низкой рождаемости и от устройства политики.
2. Пункт 1 (стимулы): суммарный коэффициент рождаемости в Южной Корее вырос с 0,75 в 2024 году до 0,80 в 2025 году, впервые с 2021 года вернувшись в диапазон 0,8 (Ministry of Data and Statistics, предварительные данные за 2025 год, таблица 1; проекция UN WPP 2024 за 2024 год — 0,73).
3. Пункт 2 (пределы): официальная публикация сообщает о росте возрастных коэффициентов рождаемости во всех возрастных группах. Большее число женщин за тридцать может увеличить число рождений, но не повышает СКР механически при неизменных возрастных коэффициентах; для эффекта политики всё равно нужен сценарий без неё.
4. Пункт 3 (ограничительная политика): Китай ослабил ограничения, приняв решение о трёх детях в 2021 году, однако официальное число рождений за 2025 год составило 7,92 млн. Отмена лимита не гарантирует роста рождений: их число зависит также от количества и возраста потенциальных матерей, а не только от предпочтений.
5. Суждение: политику нужно оценивать по реальным барьерам (жильё, уход за детьми, неравные обязанности по уходу), сравнивая издержки, сроки и сценарий без меры, а не заранее объявляя услуги лучше выплат.

**Образец абзаца**

Государственная политика может повысить рождаемость, но обычно умеренно и временно. Эффект для Южной Кореи неоднозначен. Суммарный коэффициент рождаемости вырос с 0,75 в 2024 году до 0,80 в 2025 году, впервые с 2021 года вернувшись в диапазон 0,8 (Ministry of Data and Statistics, предварительные данные за 2025 год, таблица 1; проекция UN WPP 2024 за 2024 год — 0,73). Официальная публикация сообщает о росте возрастных коэффициентов рождаемости во всех возрастных группах. Большая когорта потенциальных матерей может увеличить число рождений, но при неизменных возрастных коэффициентах сама по себе не увеличивает СКР за период. Поэтому наблюдаемый рост не выделяет эффект стимулов без обоснованного сравнения. Показатель всё ещё меньше половины уровня замещения около 2,1, поэтому восстановление ещё не вернуло рождаемость к замещению; само отставание от уровня замещения не определяет, переломилась ли недавняя тенденция. Китай даёт другой пример последовательности политики: решение о трёх детях принято в 2021 году, но статистическое ведомство сообщило о 7,92 млн рождений в 2025 году. Эти числа не измеряют эффект политики: рождения зависят также от числа и возраста потенциальных матерей, а для оценки нужен правдоподобный сценарий без меры. Обоснованный подход — устранять выявленные барьеры, например стоимость жилья, нехватку ухода за детьми и неравные обязанности по уходу, проверяя эффекты и издержки. Сроки рождений могут реагировать сравнительно быстро; для оценки итогового числа детей нужно дольше наблюдать когорты. Эти примеры не доказывают универсального превосходства услуг над денежными выплатами.`,
    },
    origin: 'original',
    minutes: 20,
  },
];
