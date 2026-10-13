import type { Question } from '../../../../src/contract/types';

// Section C essays for Unit 1 (changing population). Original questions in IB command-term style.
// The markschemes are our band checklists in general words, not the official descriptors (check the guide).
// Figures in the model answers are verified against the sources listed in the topic meta file.
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
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: names one or two stages, with little accuracy.
- Application: no named country.
- Analysis: describes the stages without causes.
- Evaluation: no judgement, or an opinion with no support.

**Bands 3–4 (3–4 marks)**

- Knowledge: describes the stages and the main changes in birth and death rates, with some accuracy.
- Application: one named country, without a figure or year.
- Analysis: explains one cause of change, such as medicine lowering death rates.
- Evaluation: a basic view of the model's usefulness, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: accurate stages and terms, such as crude birth rate, total fertility rate and natural increase.
- Application: at least two named countries, one with a figure and year, each placed in the stage it fits.
- Analysis: develops causes of the speed or shape of change, with clear cause-and-effect chains.
- Evaluation: a judgement on usefulness, with at least one argument for and one against.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise, well-selected and correctly used terms.
- Application: several named countries with figures, years and sources, used to test the model.
- Analysis: links death rates, birth rates, migration and policy, and explains why countries differ.
- Evaluation: a clear, sustained judgement on how far the model explains change, with the conditions under which it holds.

**Bands 9–10 (9–10 marks)**

- Knowledge: precise and wide; shows that the model describes trends better than it explains causes.
- Application: a fluent test of the model against contrasting countries, each with figures, years and sources.
- Analysis: sophisticated explanation of differences (timing of medicine, policy, migration, economy) and of the limits of prediction.
- Evaluation: a balanced answer that states which factor matters most and why, and what the evidence cannot show.`,
      ru: `**Уровни 1–2 (1–2 балла)**

- Знание: называет одну или две стадии, с низкой точностью.
- Применение: нет названной страны.
- Анализ: описывает стадии без причин.
- Оценка: нет суждения или мнение без подтверждения.

**Уровни 3–4 (3–4 балла)**

- Знание: описывает стадии и основные изменения рождаемости и смертности, с некоторой точностью.
- Применение: одна названная страна без цифры и года.
- Анализ: объясняет одну причину изменений, например снижение смертности благодаря медицине.
- Оценка: базовое мнение о полезности модели с небольшой опорой.

**Уровни 5–6 (5–6 баллов)**

- Знание: точные стадии и термины: общий коэффициент рождаемости (crude birth rate), суммарный коэффициент рождаемости (total fertility rate), естественный прирост (natural increase).
- Применение: как минимум две названные страны, одна с цифрой и годом, каждая отнесена к своей стадии.
- Анализ: раскрывает причины скорости или формы изменений, с понятными цепочками «причина — следствие».
- Оценка: суждение о полезности модели, с как минимум одним аргументом за и одним против.

**Уровни 7–8 (7–8 баллов)**

- Знание: точные и хорошо подобранные термины, использованные правильно.
- Применение: несколько названных стран с цифрами, годами и источниками, на которых проверяется модель.
- Анализ: связывает смертность, рождаемость, миграцию и политику и объясняет, почему страны различаются.
- Оценка: ясное и устойчивое суждение о том, насколько модель объясняет изменения, с условиями, при которых она верна.

**Уровни 9–10 (9–10 баллов)**

- Знание: точное и широкое; показывает, что модель лучше описывает тенденции, чем объясняет причины.
- Применение: последовательная проверка модели на контрастных странах, каждая с цифрами, годами и источниками.
- Анализ: тонкое объяснение различий (время появления медицины, политика, миграция, экономика) и пределов прогноза.
- Оценка: сбалансированный ответ, который называет наиболее важный фактор и причину и говорит, чего данные не показывают.`,
    },
    model: {
      en: `**Plan**

1. Thesis: the model is a useful description of the general pattern of change, but it explains the speed, the causes and the role of migration poorly.
2. Point 1: England and Wales shows the later stages. Its total fertility rate was 1.39 children per woman in 2025, below the replacement level, and live births fell to 585,396 (ONS).
3. Point 2: speed. Imported medicine cut death rates quickly in many low-income countries, compressing the stages.
4. Point 3: migration. Japan's population fell by 550,000 in the year to 1 October 2024 (Statistics Bureau of Japan), but that total mixes natural decrease with migration, which the model ignores.
5. Judgement: useful for broad trends, weak for individual countries without migration and policy.

**Model paragraph**

The demographic transition model describes a useful general pattern: death rates fall first, then birth rates follow, so growth rises and then slows. England and Wales shows the later stages, with a total fertility rate of 1.39 children per woman in 2025, far below the replacement level of about 2.1, and live births fell to 585,396 (ONS). However, the model explains less about speed and causes. Many low-income countries cut death rates within decades using imported medicine, so their transitions were compressed compared with Europe. The model also ignores migration: Japan's population fell by 550,000 to 123.8 million between October 2023 and October 2024, a total that mixes natural decrease with migration. The model is therefore a useful description of trends, but not a full explanation of any one country.`,
      ru: `**План**

1. Тезис: модель — полезное описание общей закономерности изменений, но она плохо объясняет скорость, причины и роль миграции.
2. Пункт 1: Англия и Уэльс показывают поздние стадии. Суммарный коэффициент рождаемости составил 1,39 ребёнка на женщину в 2025 году, ниже уровня замещения, а число живорождений снизилось до 585 396 (ONS).
3. Пункт 2: скорость. Импортированная медицина быстро снизила смертность во многих странах с низкими доходами и сжала стадии.
4. Пункт 3: миграция. Население Японии сократилось на 550 000 за год до 1 октября 2024 года (Statistics Bureau of Japan), но эта разница объединяет естественную убыль и миграцию, которую модель не учитывает.
5. Суждение: полезна для общих тенденций, слаба для отдельных стран без учёта миграции и политики.

**Образец абзаца**

Модель демографического перехода (demographic transition model) описывает полезную общую закономерность: сначала снижается смертность, затем за ней следует рождаемость, поэтому рост сначала ускоряется, а потом замедляется. Англия и Уэльс показывают поздние стадии: суммарный коэффициент рождаемости (total fertility rate) составил 1,39 ребёнка на женщину в 2025 году, что намного ниже уровня замещения около 2,1, а число живорождений снизилось до 585 396 (ONS). Однако модель меньше объясняет скорость и причины. Многие страны с низкими доходами сократили смертность за десятилетия с помощью импортированной медицины, поэтому их переход был сжат по сравнению с Европой. Модель также не учитывает миграцию: население Японии сократилось на 550 000 и составило 123,8 млн человек с октября 2023 по октябрь 2024 года, а эта разница объединяет естественную убыль и миграцию. Поэтому модель — полезное описание тенденций, но не полное объяснение какой-либо отдельной страны.`,
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
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: names one or two factors, with little accuracy.
- Application: no named place.
- Analysis: lists push or pull factors without explaining them.
- Evaluation: no judgement, or an unsupported opinion.

**Bands 3–4 (3–4 marks)**

- Knowledge: describes push and pull factors with some accuracy.
- Application: one named destination, without a figure or year.
- Analysis: explains one push or one pull factor in a simple chain.
- Evaluation: a basic view of which factor matters more, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: accurate push and pull factors, with correct terms (rural–urban migration, natural increase).
- Application: two named places, one with a figure and year, linked to the question.
- Analysis: explains at least one push and one pull factor as chains of cause and effect.
- Evaluation: a judgement on relative importance, with one argument for each side.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise and well-selected; terms used correctly throughout.
- Application: several named places with figures, years and sources, used to test the view.
- Analysis: shows how push and pull factors interact, for example rural pressure supplying migrants that cities absorb only when jobs grow.
- Evaluation: a clear judgement on relative importance, with the conditions under which it holds.

**Bands 9–10 (9–10 marks)**

- Knowledge: precise and wide, showing how the balance varies between economies.
- Application: contrasting destinations, each with figures, years and sources, such as UN projections and census counts.
- Analysis: explains why the balance changes with the stage of development, and how measurement affects the answer (for example, natural increase, or changes in what counts as urban).
- Evaluation: a sustained, balanced judgement that separates the factors for leaving from the factors for choosing a destination, and states the limits of the evidence.`,
      ru: `**Уровень 1–2 (1–2 балла)**

- Знание: называет один-два фактора с низкой точностью.
- Применение: нет названного места.
- Анализ: перечисляет факторы выталкивания или притяжения без объяснения.
- Оценка: нет суждения или мнение без подтверждения.

**Уровень 3–4 (3–4 балла)**

- Знание: описывает факторы выталкивания и притяжения с некоторой точностью.
- Применение: одно названное место назначения без цифры и года.
- Анализ: объясняет один фактор простой цепочкой «причина — следствие».
- Оценка: базовое мнение о том, какой фактор важнее, с малой опорой.

**Уровень 5–6 (5–6 баллов)**

- Знание: точные факторы выталкивания и притяжения, правильные термины (миграция из сельской местности в города, естественный прирост).
- Применение: два названных места, одно с цифрой и годом, связанные с вопросом.
- Анализ: объясняет как минимум один фактор выталкивания и один фактор притяжения как цепочки «причина — следствие».
- Оценка: суждение об относительной важности, с одним аргументом за каждую сторону.

**Уровень 7–8 (7–8 баллов)**

- Знание: точное и хорошо подобранное; термины используются правильно на протяжении всего текста.
- Применение: несколько названных мест с цифрами, годами и источниками, на которых проверяется позиция.
- Анализ: показывает взаимодействие факторов, например давление села поставляет мигрантов, которых города принимают только тогда, когда растут рабочие места.
- Оценка: ясное суждение об относительной важности, с условиями, при которых оно верно.

**Уровень 9–10 (9–10 баллов)**

- Знание: точное и широкое; показывает, как баланс факторов меняется между экономиками.
- Применение: контрастные места назначения, каждое с цифрами, годами и источниками, например прогнозы ООН и данные переписи.
- Анализ: объясняет, почему баланс меняется со стадией развития и как способ измерения влияет на ответ (например, естественный прирост или изменение того, что считается городом).
- Оценка: устойчивое сбалансированное суждение, которое отделяет факторы отъезда от факторов выбора места назначения и называет пределы данных.`,
    },
    model: {
      en: `**Plan**

1. Thesis: push factors explain why people leave rural areas, but pull factors largely decide where they go, so the balance depends on the stage of the economy.
2. Point 1 (push): land shortage and low farm incomes. Scale: the UN projects that Nigeria’s cities and towns will grow from 165 million people in 2018 to 307 million in 2050, an increase of about 142 million (UN DESA, World Cities in 2025, WUP 2025 data).
3. Point 2 (pull): jobs attract migrants. Shenzhen, a special economic zone, had 17.56 million residents at the 2020 census (Shenzhen government).
4. Point 3 (counter-evidence): natural increase adds people to existing cities, so migration is not the only cause of urban growth.
5. Judgement: push factors matter more for leaving in poorer economies; pull factors matter more for the destination where urban jobs grow fast.

**Model paragraph**

Push factors explain why many people leave rural areas, but pull factors largely decide where they go. The UN projects that Nigeria will add 189 million urban dwellers between 2018 and 2050 (UN DESA). That scale shows the shift to towns, which is driven partly by rural pressures such as land shortage and low farm incomes. Pull factors shape the destination. Shenzhen, a special economic zone, had 17.56 million residents at the 2020 census, many of them migrants drawn by factory and service jobs. Migration is not the only source of city growth, because natural increase adds people to existing cities. On balance, push factors matter more for the decision to leave in poorer economies, while pull factors decide the destination where urban jobs grow fast.`,
      ru: `**План**

1. Тезис: факторы выталкивания объясняют, почему люди уезжают из сельской местности, но факторы притяжения в основном определяют, куда они едут, поэтому баланс зависит от стадии развития экономики.
2. Пункт 1 (выталкивание): нехватка земли и низкие доходы от сельского хозяйства. Масштаб: ООН прогнозирует, что города и малые города Нигерии вырастут с 165 млн человек в 2018 году до 307 млн в 2050 году, то есть примерно на 142 млн (UN DESA, World Cities in 2025, данные WUP 2025).
3. Пункт 2 (притяжение): работа привлекает мигрантов. Шэньчжэнь, особая экономическая зона, по переписи 2020 года его население составило 17,56 млн жителей (правительство Шэньчжэня).
4. Пункт 3 (контрпример): естественный прирост добавляет людей в уже существующие города, поэтому миграция — не единственная причина роста городов.
5. Суждение: факторы выталкивания важнее для решения уехать в более бедных экономиках; факторы притяжения важнее для выбора места там, где городская работа быстро растёт.

**Образец абзаца**

Факторы выталкивания (push factors) объясняют, почему многие люди уезжают из сельской местности, но факторы притяжения (pull factors) в основном определяют, куда они едут. ООН прогнозирует, что Нигерия добавит 189 млн городских жителей в 2018–2050 годах (UN DESA). Этот масштаб показывает переход к городам, который отчасти вызван сельским давлением, таким как нехватка земли и низкие доходы от сельского хозяйства. Факторы притяжения определяют место назначения. Население Шэньчжэня, особой экономической зоны, по переписи 2020 года составило 17,56 млн человек, и многие из них — мигранты, привлечённые работой на фабриках и в сфере услуг. Миграция — не единственный источник роста городов, ведь естественный прирост добавляет людей в уже существующие города. В итоге факторы выталкивания важнее для решения уехать в более бедных экономиках, а факторы притяжения определяют место назначения там, где городская работа быстро растёт.`,
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
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: describes an ageing population in general terms.
- Application: no named country.
- Analysis: lists effects without explaining them.
- Evaluation: no judgement, or an unsupported opinion.

**Bands 3–4 (3–4 marks)**

- Knowledge: names one challenge (for example, pensions) and one opportunity, with some accuracy.
- Application: one named country, without a figure or year.
- Analysis: explains one challenge as a simple chain, such as fewer workers supporting more pensioners.
- Evaluation: a basic view of the balance, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: accurate terms, such as old-age dependency and working-age population.
- Application: one named country with a figure and year, linked to two or three effects.
- Analysis: explains economic and social challenges as cause-and-effect chains, and considers at least one opportunity.
- Evaluation: a judgement on the balance, with one argument for each side.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise, with terms used correctly.
- Application: named evidence on both challenges and opportunities, such as older workers, technology and the health and leisure economy.
- Analysis: explains why the balance depends on the country's wealth when it ages, and on policy.
- Evaluation: a clear judgement on the extent, with the conditions under which opportunities outweigh challenges.

**Bands 9–10 (9–10 marks)**

- Knowledge: precise and wide, with the timing of effects explained.
- Application: several named countries at different levels of wealth, each with figures, years and sources.
- Analysis: sophisticated links between economic, social and fiscal effects, and between policy design and outcomes.
- Evaluation: a sustained, balanced judgement that states the conditions for each outcome and the limits of the evidence.`,
      ru: `**Уровень 1–2 (1–2 балла)**

- Знание: описывает стареющее население общими словами.
- Применение: нет названной страны.
- Анализ: перечисляет последствия без объяснения.
- Оценка: нет суждения или мнение без подтверждения.

**Уровень 3–4 (3–4 балла)**

- Знание: называет одну проблему (например, пенсии) и одну возможность с некоторой точностью.
- Применение: одна названная страна без цифры и года.
- Анализ: объясняет одну проблему простой цепочкой, например: меньше работников содержат больше пенсионеров.
- Оценка: базовое мнение о балансе с малой опорой.

**Уровень 5–6 (5–6 баллов)**

- Знание: точные термины, например коэффициент демографической нагрузки (old-age dependency) и население трудоспособного возраста (working-age population).
- Применение: одна названная страна с цифрой и годом, связанная с двумя-тремя последствиями.
- Анализ: объясняет экономические и социальные проблемы как цепочки «причина — следствие» и рассматривает как минимум одну возможность.
- Оценка: суждение о балансе с одним аргументом за каждую сторону.

**Уровень 7–8 (7–8 баллов)**

- Знание: точное, с правильным употреблением терминов.
- Применение: названные данные как о проблемах, так и о возможностях, например о пожилых работниках, технологиях и экономике здравоохранения и досуга.
- Анализ: объясняет, почему баланс зависит от богатства страны на момент старения и от политики.
- Оценка: ясное суждение о степени проблемы, с условиями, при которых возможности перевешивают проблемы.

**Уровень 9–10 (9–10 баллов)**

- Знание: точное и широкое, с объяснением сроков проявления эффектов.
- Применение: несколько названных стран на разных уровнях богатства, каждая с цифрами, годами и источниками.
- Анализ: тонкие связи между экономическими, социальными и бюджетными последствиями и между устройством политики и результатами.
- Оценка: устойчивое сбалансированное суждение, которое называет условия каждого исхода и пределы данных.`,
    },
    model: {
      en: `**Plan**

1. Thesis: an ageing population creates more challenges than opportunities for countries that have not prepared, but well-designed policy can turn part of the change into opportunity.
2. Point 1 (challenge, economic): Japan's 65-and-over share was 29.3% on 1 October 2024, about 36.24 million people, so fewer workers fund more pensions and healthcare (Statistics Bureau of Japan).
3. Point 2 (challenge, social): care needs fall on families and the state, which adds cost and strains household budgets.
4. Point 3 (opportunity): older workers, productivity gains from technology, and a silver economy of health and leisure services.
5. Judgement: the balance depends on wealth, pensions and labour policy; challenges dominate for poorer countries that age early.

**Model paragraph**

An ageing population creates more challenges than opportunities for countries that have not prepared, although the balance depends on policy. Japan shows the scale: 29.3% of its residents were aged 65 or over on 1 October 2024, about 36.24 million people (Statistics Bureau of Japan). A shrinking working-age population must fund a growing number of pensions and healthcare, which raises costs and can slow growth, while care needs fall on families and the state. However, older workers bring experience, and technology can raise productivity to offset labour shortages. A silver economy of health and leisure services can create jobs. These gains need investment and reform, and countries that age before they become rich have fewer resources to respond. On balance, challenges outweigh opportunities for unprepared economies, while well-prepared ones can manage the transition.`,
      ru: `**План**

1. Тезис: стареющее население создаёт для не подготовившихся стран больше проблем, чем возможностей, но хорошо продуманная политика может превратить часть этих перемен в возможности.
2. Пункт 1 (проблема, экономика): доля жителей в возрасте 65 лет и старше в Японии составляла 29,3% на 1 октября 2024 года, около 36,24 млн человек, поэтому меньше работников финансируют больше пенсий и медицинских услуг (Statistics Bureau of Japan).
3. Пункт 2 (проблема, социальная сфера): потребность в уходе ложится на семьи и государство, что добавляет расходов и нагружает семейный бюджет.
4. Пункт 3 (возможность): пожилые работники, рост производительности благодаря технологиям и «серебряная экономика» услуг здравоохранения и досуга.
5. Суждение: баланс зависит от богатства, пенсионной системы и политики занятости; проблемы преобладают у более бедных стран, которые стареют рано.

**Образец абзаца**

Стареющее население создаёт для не подготовившихся стран больше проблем, чем возможностей, хотя баланс зависит от политики. Япония показывает масштаб: 29,3% её жителей были в возрасте 65 лет и старше на 1 октября 2024 года, то есть около 36,24 млн человек (Statistics Bureau of Japan). Сокращающаяся доля населения трудоспособного возраста должна финансировать растущее число пенсий и медицинских услуг, что повышает расходы и может замедлить рост, а уход за пожилыми ложится на семьи и государство. Однако пожилые работники привносят опыт, а технологии могут повысить производительность и компенсировать нехватку рабочей силы. «Серебряная экономика» (silver economy) услуг здравоохранения и досуга может создавать рабочие места. Эти выгоды требуют инвестиций и реформ, а страны, которые стареют раньше, чем становятся богатыми, имеют меньше ресурсов для ответа. В итоге проблемы перевешивают возможности для неподготовленных экономик, тогда как хорошо подготовленные могут справиться с переходом.`,
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
      en: `**Bands 1–2 (1–2 marks)**

- Knowledge: names a policy in general terms.
- Application: no named place.
- Analysis: describes a policy without explaining how it could work.
- Evaluation: no judgement, or an unsupported opinion.

**Bands 3–4 (3–4 marks)**

- Knowledge: describes one type of policy, such as cash payments or restrictions, with some accuracy.
- Application: one named place, without a figure or year.
- Analysis: explains one way the policy could change births, in a simple chain.
- Evaluation: states whether the policy worked, with little support.

**Bands 5–6 (5–6 marks)**

- Knowledge: two types of policy (pro-natalist incentives and restrictive policies), described accurately.
- Application: named places, one with a figure and year, linked to the aim of the policy.
- Analysis: explains why the outcome may differ from the aim, such as timing or other causes.
- Evaluation: a judgement on effectiveness, with one argument for and one against.

**Bands 7–8 (7–8 marks)**

- Knowledge: precise, with terms used correctly (total fertility rate, replacement level).
- Application: named evidence with figures, years and sources, comparing the aim of a policy with its outcome.
- Analysis: explains why effects are modest or temporary, such as the number of women of childbearing age, or economic conditions.
- Evaluation: a clear judgement on effectiveness, with the conditions under which policy works best.

**Bands 9–10 (9–10 marks)**

- Knowledge: precise and wide, covering intended and unintended effects.
- Application: contrasting examples, each with figures, years and sources.
- Analysis: sophisticated explanation of why effects differ between places, including cost, timing and side effects.
- Evaluation: a balanced, well-supported conclusion on which kinds of policy work best, under what conditions, and what the evidence cannot show.`,
      ru: `**Уровень 1–2 (1–2 балла)**

- Знание: называет политику общими словами.
- Применение: нет названного места.
- Анализ: описывает политику без объяснения, как она может работать.
- Оценка: нет суждения или мнение без подтверждения.

**Уровень 3–4 (3–4 балла)**

- Знание: описывает один тип политики, например денежные выплаты или ограничения, с некоторой точностью.
- Применение: одно названное место без цифры и года.
- Анализ: объясняет один способ, которым политика могла повлиять на рождаемость, простой цепочкой.
- Оценка: указывает, сработала ли политика, с малой опорой.

**Уровень 5–6 (5–6 баллов)**

- Знание: два типа политики (стимулирующая рождаемость и ограничительная) описаны точно.
- Применение: названные места, одно с цифрой и годом, связаны с целью политики.
- Анализ: объясняет, почему результат может отличаться от цели, например из-за сроков или других причин.
- Оценка: суждение об эффективности с одним аргументом за и одним против.

**Уровень 7–8 (7–8 баллов)**

- Знание: точное, с правильным употреблением терминов (суммарный коэффициент рождаемости, уровень замещения).
- Применение: названные данные с цифрами, годами и источниками, сравнивающие цель политики с её результатом.
- Анализ: объясняет, почему эффекты скромные или временные, например из-за числа женщин детородного возраста или экономических условий.
- Оценка: ясное суждение об эффективности с условиями, при которых политика работает лучше всего.

**Уровень 9–10 (9–10 баллов)**

- Знание: точное и широкое, охватывает ожидаемые и непредвиденные эффекты.
- Применение: контрастные примеры, каждый с цифрами, годами и источниками.
- Анализ: тонкое объяснение того, почему эффекты различаются между местами, включая стоимость, сроки и побочные эффекты.
- Оценка: сбалансированный и хорошо обоснованный вывод о том, какие виды политики работают лучше всего, при каких условиях и что данные показать не могут.`,
    },
    model: {
      en: `**Plan**

1. Thesis: policies can raise birth rates modestly and temporarily, but they rarely reverse long-term decline on their own; their effect depends on the causes of low fertility and on how the policy is designed.
2. Point 1 (incentives): South Korea's total fertility rate rose from 0.75 in 2024 to 0.80 in 2025, the first return to the 0.8 range since 2021 (Korean national statistics office).
3. Point 2 (limits): the rise is commonly linked to marriage recovery and a larger group of women in their early thirties, so the policy's share of the change is hard to isolate.
4. Point 3 (restrictive policy): China's earlier one-child policy reduced births but caused a skewed sex ratio and faster ageing.
5. Judgement: policies that remove barriers (housing, childcare, gender equality) work better than cash alone, and their effects are slow and small against the replacement level of about 2.1.

**Model paragraph**

Government policies can raise birth rates, but usually modestly and temporarily. South Korea offers mixed evidence. Its total fertility rate rose from 0.75 in 2024 to 0.80 in 2025, the first return to the 0.8 range since 2021 (Korean national statistics office). The rise is commonly linked to post-pandemic marriage recovery and a larger group of women in their early thirties, so the effect of incentives is hard to isolate. The rate is still less than half the replacement level of about 2.1, so the trend has not been reversed. China's earlier one-child policy shows the other side: it reduced births but caused a skewed sex ratio and faster ageing. Policy works best when it removes barriers such as housing costs, childcare and gender inequality, and it needs decades to show results.`,
      ru: `**План**

1. Тезис: политика может умеренно и временно повысить рождаемость, но редко сама по себе переламывает долгосрочный спад; её эффект зависит от причин низкой рождаемости и от устройства политики.
2. Пункт 1 (стимулы): суммарный коэффициент рождаемости в Южной Корее вырос с 0,75 в 2024 году до 0,80 в 2025 году, впервые с 2021 года вернувшись в диапазон 0,8 (национальное статистическое ведомство Кореи).
3. Пункт 2 (пределы): рост обычно связывают с восстановлением браков и с большой группой женщин в начале тридцатых, поэтому долю политики в изменении трудно выделить.
4. Пункт 3 (ограничительная политика): прежняя политика одного ребёнка в Китае снизила рождаемость, но породила перекос полового соотношения и более быстрое старение.
5. Суждение: политика, которая убирает барьеры (жильё, уход за детьми, гендерное равенство), работает лучше, чем одни денежные выплаты; её эффекты медленные и небольшие по сравнению с уровнем замещения около 2,1.

**Образец абзаца**

Государственная политика может повысить рождаемость, но обычно умеренно и временно. Эффект для Южной Кореи неоднозначен. Суммарный коэффициент рождаемости вырос с 0,75 в 2024 году до 0,80 в 2025 году, впервые с 2021 года вернувшись в диапазон 0,8 (национальное статистическое ведомство Кореи). Рост обычно связывают с восстановлением браков после пандемии и с большой группой женщин в начале тридцатых, поэтому эффект стимулов трудно выделить. Показатель всё ещё меньше половины уровня замещения около 2,1, поэтому тенденция не переломлена. Прежняя политика одного ребёнка в Китае показывает другую сторону: она снизила рождаемость, но породила перекос полового соотношения и более быстрое старение. Политика работает лучше всего, когда убирает барьеры, такие как стоимость жилья, уход за детьми и гендерное неравенство, и ей нужны десятилетия, чтобы дать результат.`,
    },
    origin: 'original',
    minutes: 20,
  },
];
