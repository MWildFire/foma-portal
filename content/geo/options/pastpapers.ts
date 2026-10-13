import type { PastPaperRef } from '../../../src/contract/types';

// Geography SL Paper 1, option G (Urban environments): past papers from May 2019 to November 2025, 13 sessions
// (there was no May 2020 session). Links go to the IB PDFs on ibdocs.re. Each entry covers option G: question 13
// (structured, 10 marks) and question 14a or 14b (extended, choose one, 10 marks each). The guides are our own words;
// the question, resource and markscheme text is not copied here. The validator times an option without its own
// row in data/exams.json as the whole paper (90 minutes, 40 marks), so every entry keeps those values.
export const pastPapers: PastPaperRef[] = [
  {
    id: 'geo-p1-m19-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'M19', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2019%20Examination%20Session/May%202019%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2019%20Examination%20Session/May%202019%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2019%20Examination%20Session/May%202019%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__HLSL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g1-urban-variety', 'g2-urban-change', 'g3-urban-stress'], command: 'State / Outline / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g4-sustainable-cities'], command: 'Examine', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g2-urban-change'], command: 'Examine', option: 'G', inMockScope: true },
    ],
  },
  {
    id: 'geo-p1-n19-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'N19', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2019%20Examination%20Session/November%202019%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2019%20Examination%20Session/November%202019%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2019%20Examination%20Session/November%202019%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__SL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g1-urban-variety', 'g2-urban-change'], command: 'Identify / Estimate / Suggest / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g3-urban-stress'], command: 'Examine', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g2-urban-change'], command: 'Examine', option: 'G', inMockScope: true },
    ],
  },
  {
    id: 'geo-p1-n20-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'N20', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2020%20Examination%20Session/November%202020%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2020%20Examination%20Session/November%202020%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2020%20Examination%20Session/November%202020%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__SL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g4-sustainable-cities'], command: 'Identify / Determine / Outline / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g2-urban-change', 'g4-sustainable-cities'], command: 'Examine', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g1-urban-variety', 'g3-urban-stress'], command: 'Examine', option: 'G', inMockScope: true },
    ],
  },
  {
    id: 'geo-p1-m21-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'M21', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/May%202021%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/May%202021%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/May%202021%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__HLSL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g2-urban-change', 'g3-urban-stress'], command: 'State / Outline / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g1-urban-variety'], command: 'Examine', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g2-urban-change', 'g4-sustainable-cities'], command: 'Examine', option: 'G', inMockScope: true },
    ],
  },
  {
    id: 'geo-p1-n21-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'N21', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/November%202021%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/November%202021%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2021%20Examination%20Session/November%202021%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__HLSL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g3-urban-stress'], command: 'State / Outline / Suggest', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g1-urban-variety'], command: 'Examine', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g4-sustainable-cities'], command: 'Evaluate', option: 'G', inMockScope: true },
    ],
  },
  {
    id: 'geo-p1-m22-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'M22', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/May%202022%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__SL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g1-urban-variety', 'g2-urban-change', 'g4-sustainable-cities'], command: 'Identify / State / Outline / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g3-urban-stress', 'g4-sustainable-cities'], command: 'Examine', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g3-urban-stress'], command: 'Examine', option: 'G', inMockScope: true },
    ],
    guide: { en: '**Structured question (13, 10 marks).**\n- (a)(i) Find the grid square and read the highway\'s name there.\n- (a)(ii) Give one physical reason behind the airport\'s site, not a human one.\n- (b) Name a reason and explain how it raises prices.\n- (c) Two different challenges in Queenstown, each explained with an example.\n- Watch for: human reasons in (a)(ii), reasons without a mechanism, and repeated challenges.\n\n**Extended question (14, 10 marks).**\nChoose in two minutes: (a) if you can weigh resilient design\'s pros and cons with examples; (b) if you can explain why deprivation arises at different stages of development. Then, for about 30 minutes:\n1. Open with a short definition in your own words.\n2. Build two or three developed points, each with a named place you have studied, a figure with its year, and a link to the verb examine.\n3. End with a judgement that answers the question directly.\n\n**Markband check.**\n- Top band, against middle: a balanced, evidenced verdict that weighs both sides, not just more facts.\n- Middle band, against bottom: named examples and a real argument, but the verdict is thin or missing.\n- Bottom band: brief outlines of ideas with little place-based evidence.\n\n**Common mistakes.**\n- Generic examples with no named place, figure or year.\n- Describing features when the command term asks for analysis and a judgement.\n- One-sided answers: (a) needs strengths and weaknesses.', ru: '**Структурированный вопрос (13, 10 баллов).**\n- (a)(i) «Identify» (указать): найдите нужную клетку сетки и прочитайте название государственной автотрассы в ней.\n- (a)(ii) «State» (назвать): один физический фактор размещения аэропорта, а не человеческий.\n- (b) «Outline» (кратко описать): назовите причину и объясните, как она повышает цены.\n- (c) «Explain» (объяснить): две разные проблемы в Queenstown, каждая с объяснением и примером.\n- Где легко ошибиться: человеческие причины в (a)(ii), причины без механизма и повтор одной и той же проблемы.\n\n**Расширенный вопрос (14, 10 баллов).**\nВыберите за две минуты: (a), если можете взвесить плюсы и минусы устойчивого городского дизайна на примерах; (b), если можете объяснить, почему депривация возникает на разных стадиях развития. Затем, примерно 30 минут:\n1. Начните с короткого определения своими словами.\n2. Постройте два-три развёрнутых аргумента; у каждого: название изученного вами места, цифра с годом и связь с заданием «Examine» (подробно рассмотреть).\n3. Завершите суждением, которое прямо отвечает на вопрос.\n\n**Проверка уровней оценки.**\n- Верхний уровень отличается от среднего сбалансированным суждением на основе доказательств, а не просто большим объёмом сведений.\n- Средний уровень отличается от нижнего именованными примерами и связным аргументом, но суждение слабое или отсутствует.\n- Нижний уровень: краткое перечисление идей с малым числом примеров, привязанных к месту.\n\n**Типичные ошибки.**\n- Общие примеры без названного места, цифры или года.\n- Описание признаков вместо анализа и суждения, которых требует задание.\n- Односторонний ответ: для (a) нужны и сильные, и слабые стороны.' },
  },
  {
    id: 'geo-p1-n22-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'N22', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/November%202022%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/November%202022%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2022%20Examination%20Session/November%202022%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__SL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g3-urban-stress', 'g4-sustainable-cities'], command: 'State / Outline / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g2-urban-change'], command: 'To what extent', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g4-sustainable-cities'], command: 'Examine', option: 'G', inMockScope: true },
    ],
    guide: { en: '**Structured question (13, 10 marks).**\n- (a)(i) Read the Wednesday line at the index value and give a time.\n- (a)(ii) Read the Friday and Saturday peaks carefully, then subtract.\n- (b) Name one cause of crime in deprived areas, then explain the link.\n- (c) One environmental and one social effect, each developed; the same effect cannot count twice.\n- Watch for: misreading the graph, reasons without a link, and one impact used twice.\n\n**Extended question (14, 10 marks).**\nChoose in two minutes: (a) if you can weigh deindustrialization\'s gains against losses; (b) if you can test whether footprint-cutting strategies work. Then plan for about 30 minutes:\n1. Open with a short definition in your own words.\n2. Build two or three developed points, each with a named place, a figure with its year and a link to the command term.\n3. End with a judgement that answers the command term directly.\n\n**Markband check.**\n- Top band, against middle: a clear verdict on how far, built on balanced evidence.\n- Middle band, against bottom: real examples and a structure, but the verdict is one-sided or missing.\n- Bottom band: a brief outline of ideas with little evidence and no weighing.\n\n**Common mistakes.**\n- Explaining why deindustrialization happened instead of judging its benefits.\n- Listing strategies without showing how far each one cuts the footprint.\n- Giving generic answers with no named place, figure or year.', ru: '**Структурированный вопрос (13, 10 баллов).**\n- (a)(i) «State» (назвать): прочитайте линию за среду на нужном значении индекса и назовите время.\n- (a)(ii) Прочитайте пики за пятницу и субботу, затем вычтите одно из другого.\n- (b) «Outline» (кратко описать): назовите одну причину преступности в неблагополучных районах, затем объясните связь.\n- (c) «Explain» (объяснить): одно экологическое и одно социальное последствие, каждое раскрыто; повторы не засчитываются.\n- Где легко ошибиться: неверное чтение графика, причины без связки и одно последствие, использованное дважды.\n\n**Расширенный вопрос (14, 10 баллов).**\nВыберите за две минуты: (a) «To what extent» (в какой степени), если можете сопоставить выгоды деиндустриализации и потери; (b) «Examine» (подробно рассмотреть), если можете проверить, работают ли стратегии сокращения экологического следа. Затем примерно 30 минут:\n1. Начните с короткого определения своими словами.\n2. Постройте два-три развёрнутых аргумента; у каждого: название места, цифра с годом и связь с глаголом задания.\n3. Завершите суждением, которое прямо отвечает на глагол задания.\n\n**Проверка уровней оценки.**\n- Верхний уровень, в сравнении со средним: чёткое суждение о том, в какой степени, опирающееся на сбалансированные доказательства.\n- Средний уровень, в сравнении с нижним: реальные примеры и структура, но суждение односторонне или отсутствует.\n- Нижний уровень: краткое перечисление идей с малым количеством доказательств и без взвешивания.\n\n**Типичные ошибки.**\n- Объяснение того, почему произошла деиндустриализация, вместо оценки её выгод.\n- Перечисление стратегий без показа того, насколько каждая из них сокращает экологический след.\n- Общие ответы без названного места, цифры или года.' },
  },
  {
    id: 'geo-p1-m23-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'M23', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/May%202023%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__HLSL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g2-urban-change', 'g3-urban-stress'], command: 'State / Identify / Outline / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g2-urban-change', 'g3-urban-stress'], command: 'Examine', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g2-urban-change'], command: 'To what extent', option: 'G', inMockScope: true },
    ],
    guide: { en: '**Structured question (13, 10 marks).**\n- (a)(i) Name the African city on the graph, not only its country.\n- (a)(ii) Read Shanghai\'s 2020 value carefully and give the number with its unit.\n- (b) Name one environmental problem, then link it to population growth.\n- (c) For each factor, name it and explain how it drives growth.\n- Watch for: a country instead of a city, and factors without a mechanism.\n\n**Extended question (14, 10 marks).**\nChoose in two minutes: (a) if you can weigh slum clearance impacts on a named area; (b) if you can explain outward movement\'s effects. Then plan for about 30 minutes:\n1. Open with a short definition in your own words.\n2. Build two or three developed points, each with a named place, a figure with its year and a link to the command term.\n3. End with a judgement that answers the command term directly.\n\n**Markband check.**\n- Top band, against middle: a judgement that weighs effects, backed by named places and figures.\n- Middle band, against bottom: clear examples and a structure, but a thin or missing judgement.\n- Bottom band: a brief list of impacts or movements with little place-based evidence.\n\n**Common mistakes.**\n- Writing about inward movement when the question asks about outward movement.\n- Describing slum clearance without naming a neighbourhood or its effects.\n- Giving generic answers with no figure and year.', ru: '**Структурированный вопрос (13, 10 баллов).**\n- (a)(i) «State» (назвать): назовите африканский город на графике, а не только страну.\n- (a)(ii) «Identify» (указать): прочитайте значение Шанхая за 2020 год внимательно и дайте число с единицей.\n- (b) «Outline» (кратко описать): назовите одну экологическую проблему, затем свяжите её с ростом населения.\n- (c) «Explain» (объяснить): для каждого фактора назовите его и объясните, как он ведёт к росту.\n- Где легко ошибиться: страна вместо города и факторы без механизма.\n\n**Расширенный вопрос (14, 10 баллов).**\nВыберите за две минуты: (a) «Examine» (подробно рассмотреть), если можете взвесить последствия сноса трущоб для района; (b) «To what extent» (в какой степени), если можете объяснить последствия движения из центра. Затем примерно 30 минут:\n1. Начните с короткого определения своими словами.\n2. Постройте два-три развёрнутых аргумента; у каждого: название места, цифра с годом и связь с глаголом задания.\n3. Завершите суждением, которое прямо отвечает на глагол задания.\n\n**Проверка уровней оценки.**\n- Верхний уровень, в сравнении со средним: суждение, которое взвешивает последствия и опирается на названные места и цифры.\n- Средний уровень, в сравнении с нижним: понятные примеры и структура, но суждение слабое или отсутствует.\n- Нижний уровень: краткий перечень последствий или перемещений с малым количеством опоры на конкретные места.\n\n**Типичные ошибки.**\n- Описание движения к центру, когда вопрос касается движения наружу.\n- Описание сноса трущоб без названия района или его последствий.\n- Общие ответы без цифры и года.' },
  },
  {
    id: 'geo-p1-n23-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'N23', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2023%20Examination%20Session/November%202023%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__HLSL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g4-sustainable-cities'], command: 'Estimate / State / Outline / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g3-urban-stress', 'g4-sustainable-cities'], command: 'Evaluate', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g2-urban-change'], command: 'To what extent', option: 'G', inMockScope: true },
    ],
    guide: { en: '**Structured question (13, 10 marks).**\n- (a)(i) Read New York\'s point against the vertical scale; include the unit.\n- (a)(ii) State the direction of the link, or say if the points show none.\n- (b) Name one cause, such as energy use, then explain how it adds emissions.\n- (c) Choose two different design strategies and explain each one\'s effect.\n- Watch for: the wrong axis, a link without direction, and repeated strategies.\n\n**Extended question (14, 10 marks).**\nChoose in two minutes: (a) if you can judge which air-pollution measures worked; (b) if you can weigh infrastructure gains against growth. Then plan for about 30 minutes:\n1. Open with a short definition in your own words.\n2. Build two or three developed points, each with a named place, a figure with its year and a link to the command term.\n3. End with a judgement that answers the command term directly.\n\n**Markband check.**\n- Top band, against middle: a judgement on success that compares places and their results.\n- Middle band, against bottom: clear strategies and examples, but the judgement is thin or missing.\n- Bottom band: general statements about pollution or infrastructure, with little evidence of results.\n\n**Common mistakes.**\n- Describing air pollution\'s causes instead of judging the strategies.\n- Listing infrastructure types without checking whether improvements kept up with growth.\n- Vague eco-city claims without saying how far a design cuts the footprint.', ru: '**Структурированный вопрос (13, 10 баллов).**\n- (a)(i) «Estimate» (оценить приблизительно): найдите точку Нью-Йорка по вертикальной шкале и укажите единицу измерения.\n- (a)(ii) «State» (назвать): назовите направление связи или ясно скажите, что точки её не показывают.\n- (b) «Outline» (кратко описать): назовите одну причину, например потребление энергии, затем объясните, как она увеличивает выбросы.\n- (c) «Explain» (объяснить): выберите две разные стратегии дизайна эко-города и объясните влияние каждой.\n- Где легко ошибиться: неверная ось, связь без направления и повторяющиеся стратегии.\n\n**Расширенный вопрос (14, 10 баллов).**\nВыберите за две минуты: (a) «Evaluate» (дать оценку), если можете оценить, какие меры против загрязнения воздуха сработали; (b) «To what extent» (в какой степени), если можете сопоставить выгоды инфраструктуры с ростом городов. Затем примерно 30 минут:\n1. Начните с короткого определения своими словами.\n2. Постройте два-три развёрнутых аргумента; у каждого: название места, цифра с годом и связь с глаголом задания.\n3. Завершите суждением, которое прямо отвечает на глагол задания.\n\n**Проверка уровней оценки.**\n- Верхний уровень, в сравнении со средним: суждение об успешности, которое сравнивает места и их результаты.\n- Средний уровень, в сравнении с нижним: понятные стратегии и примеры, но суждение слабое или отсутствует.\n- Нижний уровень: общие утверждения о загрязнении или инфраструктуре с малым количеством доказательств результатов.\n\n**Типичные ошибки.**\n- Описание причин загрязнения воздуха вместо оценки стратегий.\n- Перечисление видов инфраструктуры без проверки, успевали ли улучшения за ростом.\n- Расплывчатые заявления об эко-городах без указания, насколько проект сокращает экологический след.' },
  },
  {
    id: 'geo-p1-m24-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'M24', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/May%202024%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__SL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g2-urban-change'], command: 'State / Outline / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g4-sustainable-cities'], command: 'Examine', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g3-urban-stress', 'g4-sustainable-cities'], command: 'Examine', option: 'G', inMockScope: true },
    ],
    guide: { en: '**Structured question (13, 10 marks).**\n- (a)(i) State: compare percentage change, not which line ends highest.\n- (a)(ii) State: read the year the world line reaches 50%, precisely.\n- (b) Outline: one factor and how it slows growth; the development earns the second mark.\n- (c) Explain: two causes of deindustrialisation, each with a mechanism and an example.\n- Watch for: comparing end values in (a)(i), and undeveloped factors in (b).\n\n**Extended question (14, 10 marks).**\nSpend about 30 minutes. Choose quickly: smart cities (a) if you know data-driven services; deprivation (b) if you know the stakeholders.\n1. Open with a definition and your line of argument.\n2. Develop two or three points, each with a named place, a figure with its year and a link to Examine.\n3. Finish with a judgement that answers Examine directly.\n\n**Markband check.**\n- Top band: a structured argument with named evidence that weighs benefits and limits to reach a judgement.\n- Middle band: relevant content and some structure, but description or a thin conclusion.\n- Bottom band: a brief outline with little evidence.\n\n**Common mistakes.**\n- Generic examples with no named place or year earn little credit.\n- Repeating one point in different words earns no second credit.\n- Ending with a summary instead of a judgement.', ru: '**Структурированный вопрос (13, 10 баллов).**\n- (a)(i) «State» (назвать): сравнивайте процентное изменение, а не то, какая линия выше в конце.\n- (a)(ii) назовите точно год, когда мировая линия достигает 50%.\n- (b) «Outline» (описать кратко): один фактор и то, как он замедляет рост; раскрытие даёт второй балл.\n- (c) «Explain» (объяснить): две причины деиндустриализации, каждая с механизмом и примером.\n- Где легко ошибиться: сравнение конечных значений в (a)(i) и неразвитые факторы в (b).\n\n**Развёрнутый вопрос (14, 10 баллов).**\nОтведите около 30 минут. Выбирайте быстро: умные города (a), если знаете сервисы на основе данных; депривация (b), если знаете заинтересованные стороны.\n1. Начните с определения и с линии аргументации.\n2. Раскройте два–три пункта, каждый с названным местом, цифрой с годом и связью с «Examine» (рассмотреть подробно).\n3. Завершите суждением, которое прямо отвечает на задание «рассмотреть».\n\n**Проверка уровней оценивания.**\n- Верхний уровень: структурированный аргумент с названными примерами, который взвешивает пользу и ограничения и приходит к суждению.\n- Средний уровень: релевантное содержание и некоторая структура, но в основном описание или слабое заключение.\n- Нижний уровень: краткое перечисление идей с малым количеством доказательств.\n\n**Частые ошибки.**\n- Общие примеры без названного места или года почти не засчитываются.\n- Повторение одной мысли другими словами не даёт второго балла.\n- Завершение пересказом вместо суждения.' },
  },
  {
    id: 'geo-p1-n24-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'N24', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2024%20Examination%20Session/November%202024%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1__HLSL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g1-urban-variety', 'g3-urban-stress'], command: 'State / Estimate / Outline / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g3-urban-stress', 'g4-sustainable-cities'], command: 'Examine', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g1-urban-variety'], command: 'Examine', option: 'G', inMockScope: true },
    ],
    guide: { en: '**Structured question (13, 10 marks).**\n- (a)(i) State: use exactly six figures, reading the grid lines with care.\n- (a)(ii) Estimate: measure between the two marked buildings, then convert with the scale.\n- (b) Outline: one map factor for the empty land south of the lake, then its explanation.\n- (c) Explain: two human activities altering microclimate, each with a mechanism and effect.\n- Watch for: wrong figure count in (a)(i), and unexplained factors in (b).\n\n**Extended question (14, 10 marks).**\nSpend about 30 minutes. Choose quickly: traffic (a) if you can judge which schemes worked; land and relief (b) if you know how they shape activity.\n1. Open with a definition and your line of argument.\n2. Develop two or three points, each with a named place, a dated figure and a link to Examine.\n3. Finish with a judgement that answers Examine directly: how far, or how important.\n\n**Markband check.**\n- Top band: a structured argument with named places that weighs benefits against limits.\n- Middle band: relevant content, but mostly description or a thin conclusion.\n- Bottom band: a brief outline with little evidence.\n\n**Common mistakes.**\n- Copying map values into the answer instead of interpreting them.\n- Listing measures without judging whether they worked.\n- Naming a place without a figure and year, which weakens the evidence.', ru: '**Структурированный вопрос (13, 10 баллов).**\n- (a)(i) «State» (назвать): используйте ровно шесть цифр, внимательно читая линии координатной сетки.\n- (a)(ii) «Estimate» (оценить приблизительно): измерьте расстояние между двумя отмеченными зданиями и переведите его по масштабу.\n- (b) «Outline» (описать кратко): один фактор по карте для пустующей земли к югу от озера, затем его объяснение.\n- (c) «Explain» (объяснить): два вида деятельности человека, меняющие микроклимат, каждый с механизмом и эффектом.\n- Где легко ошибиться: неверное число цифр в (a)(i) и необъяснённые факторы в (b).\n\n**Развёрнутый вопрос (14, 10 баллов).**\nОтведите около 30 минут. Выбирайте быстро: транспорт (a), если умеете судить, какие меры сработали; земля и рельеф (b), если знаете, как они формируют деятельность.\n1. Начните с определения и с линии аргументации.\n2. Раскройте два–три пункта, каждый с названным местом, датированной цифрой и связью с «Examine» (рассмотреть подробно).\n3. Завершите суждением, которое прямо отвечает на задание «рассмотреть»: насколько или насколько важно.\n\n**Проверка уровней оценивания.**\n- Верхний уровень: структурированный аргумент с названными местами, который взвешивает пользу и ограничения.\n- Средний уровень: релевантное содержание, но в основном описание или слабое заключение.\n- Нижний уровень: краткое перечисление идей с малым количеством доказательств.\n\n**Частые ошибки.**\n- Перенос значений с карты в ответ вместо их интерпретации.\n- Перечисление мер без оценки того, сработали ли они.\n- Называние места без цифры и года, что ослабляет доказательство.' },
  },
  {
    id: 'geo-p1-m25-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'M25', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1_question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1_resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/May%202025%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1_SL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g1-urban-variety', 'g4-sustainable-cities'], command: 'Estimate / State / Outline / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g3-urban-stress', 'g4-sustainable-cities'], command: 'Examine', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g2-urban-change'], command: 'Examine', option: 'G', inMockScope: true },
    ],
    guide: { en: '**Structured question (13, 10 marks).**\n- (a)(i) Estimate: read the share in the longest travel-time band.\n- (a)(ii) State: average the six travel times listed for essential destinations.\n- (b) Outline: one way the 15-minute idea lowers ecological footprint, then its development.\n- (c) Explain: one physical and one human factor, each showing how it shapes housing patterns.\n- Watch for: averaging only some destinations, and factors not linked to housing.\n\n**Extended question (14, 10 marks).**\nSpend about 30 minutes. Choose quickly: pollution (a) if you can weigh named measures; gentrification (b) if you can explain inner-city change.\n1. Open with a definition and your line of argument.\n2. Develop two or three points, each with a named place, a dated figure and a link to Examine.\n3. Finish with a judgement that answers Examine directly: which strategies or processes matter most, and where.\n\n**Markband check.**\n- Top band: a structured argument with named evidence that weighs the case on both sides.\n- Middle band: relevant content, but mostly description or a thin conclusion.\n- Bottom band: a brief outline of measures or processes with little evidence.\n\n**Common mistakes.**\n- Describing measures for air pollution without their weaknesses or costs.\n- Describing gentrification without who moves out and who moves in.\n- Ending by restating the opening instead of testing the claim.', ru: '**Структурированный вопрос (13, 10 баллов).**\n- (a)(i) «Estimate» (оценить приблизительно): определите долю в самом длинном интервале времени.\n- (a)(ii) «State» (назвать): вычислите среднее из шести времён в пути, указанных для основных объектов.\n- (b) «Outline» (описать кратко): один способ, которым идея 15 минут снижает экологический след, затем его раскрытие.\n- (c) «Explain» (объяснить): один физический и один человеческий фактор, каждый с тем, как он влияет на жильё.\n- Где легко ошибиться: усреднение только части объектов и факторы, не связанные с жильём.\n\n**Развёрнутый вопрос (14, 10 баллов).**\nОтведите около 30 минут. Выбирайте быстро: загрязнение воздуха (a), если умеете взвесить названные меры; джентрификация (b), если умеете объяснить изменения во внутренних районах города.\n1. Начните с определения и с линии аргументации.\n2. Раскройте два–три пункта, каждый с названным местом, датированной цифрой и связью с «Examine» (рассмотреть подробно).\n3. Завершите суждением, которое прямо отвечает на задание «рассмотреть»: какие меры или процессы важнее всего и где.\n\n**Проверка уровней оценивания.**\n- Верхний уровень: структурированный аргумент с названными примерами, который взвешивает доводы обеих сторон.\n- Средний уровень: релевантное содержание, но в основном описание или слабое заключение.\n- Нижний уровень: краткое перечисление мер или процессов с малым количеством доказательств.\n\n**Частые ошибки.**\n- Описание мер против загрязнения воздуха без их слабых сторон и издержек.\n- Описание джентрификации без указания, кто переезжает, а кто уезжает.\n- Завершение пересказом вступления вместо проверки тезиса.' },
  },
  {
    id: 'geo-p1-n25-option-g',
    subject: 'geo', paper: 'P1', part: 'option-G',
    session: 'N25', level: 'SL', tz: 'TZ0',
    files: [
      { kind: 'questions', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1_question_booklet_SL.pdf' },
      { kind: 'resources', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1_resource_booklet_HLSL.pdf' },
      { kind: 'markscheme', url: 'https://ibdocs.re/p/IB%20PAST%20PAPERS%20-%20YEAR/2025%20Examination%20Session/November%202025%20Examination%20Session/Individuals%20and%20societies/Geography_paper_1_HLSL_markscheme.pdf' },
    ],
    minutes: 90, marks: 40,
    items: [
      { q: '13', marks: 10, topicIds: ['g2-urban-change', 'g3-urban-stress', 'g4-sustainable-cities'], command: 'Identify / State / Outline / Explain', option: 'G', inMockScope: true },
      { q: '14a', marks: 10, topicIds: ['g3-urban-stress', 'g4-sustainable-cities'], command: 'Evaluate', option: 'G', inMockScope: true },
      { q: '14b', marks: 10, topicIds: ['g1-urban-variety'], command: 'Examine', option: 'G', inMockScope: true },
    ],
    guide: { en: '**Structured question (13, 10 marks).**\n- (a)(i) Identify: count entries per country, not the largest population.\n- (a)(ii) State: the mode is the most frequent value, not a total or average.\n- (b) Outline: one economic pull or push, then how it drives informal building.\n- (c) Explain: two challenges to upgrading infrastructure, each developed.\n- Watch for: the largest population used instead of the largest number of areas; a challenge given without its development.\n\n**Extended question (14, 10 marks).**\nSpend about 30 minutes. Choose quickly: resilient design (a) if you know flood and heat measures; residential patterns (b) if you link relief to land values.\n1. Open with a definition and your line of argument.\n2. Develop two or three points, each with a named place, a dated figure and a link to Evaluate (a) or Examine (b).\n3. Finish with a judgement that answers that command term directly.\n\n**Markband check.**\n- Top band: a structured argument with named evidence and a reasoned conclusion.\n- Middle band: relevant content, but mostly description or a thin conclusion.\n- Bottom band: a brief outline of one measure or factor, with little evidence.\n\n**Common mistakes.**\n- Listing climate measures without judging how well they work in different cities.\n- Treating physical factors and land values as unrelated, instead of linking them.\n- Piling up examples without judging them.', ru: '**Структурированный вопрос (13, 10 баллов).**\n- (a)(i) «Identify» (определить): считайте записи по странам, а не наибольшее население.\n- (a)(ii) «State» (назвать): мода — самое частое значение, а не сумма или среднее.\n- (b) «Outline» (описать кратко): один экономический фактор притяжения или выталкивания, затем то, как он стимулирует неформальную застройку.\n- (c) «Explain» (объяснить): две трудности модернизации инфраструктуры, каждая раскрыта.\n- Где легко ошибиться: наибольшее население вместо наибольшего числа районов; трудность без её раскрытия.\n\n**Развёрнутый вопрос (14, 10 баллов).**\nОтведите около 30 минут. Выбирайте быстро: проектирование устойчивых городов (a), если знаете меры против наводнений и жары; жилые районы (b), если умеете связать рельеф со стоимостью земли.\n1. Начните с определения и с линии аргументации.\n2. Раскройте два–три пункта, каждый с названным местом, датированной цифрой и связью с командным словом: «Evaluate» (оценить) в (a) или «Examine» (рассмотреть подробно) в (b).\n3. Завершите суждением, которое прямо отвечает на соответствующее командное слово.\n\n**Проверка уровней оценивания.**\n- Верхний уровень: структурированный аргумент с названными примерами и обоснованным выводом.\n- Средний уровень: релевантное содержание, но в основном описание или слабое заключение.\n- Нижний уровень: краткий обзор одной меры или фактора с малым количеством доказательств.\n\n**Частые ошибки.**\n- Перечисление климатических мер без оценки того, насколько хорошо они работают в разных городах.\n- Рассмотрение физических факторов и стоимости земли по отдельности, без их связи.\n- Набор примеров без их оценки.' },
  },
];
