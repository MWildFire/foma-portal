import type { Question } from '../../../../src/contract/types';

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-barriers-to-growth-and-development-01',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['barriers-to-growth-and-development'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how low saving can lead to a vicious circle of poverty in a low-income country.',
      ru: 'Объясните, как низкие сбережения могут привести к порочному кругу бедности в стране с низким доходом.',
    },
    markscheme: {
      en: '1 mark: low income leaves little money for saving. 1 mark: low saving means banks and the economy have few funds to lend, so investment is low. 1 mark: low investment means little capital per worker and low productivity. 1 mark: low productivity keeps incomes low, so saving stays low, which completes the circle.',
      ru: '1 балл: низкий доход оставляет мало денег для сбережений. 1 балл: низкие сбережения означают мало средств для кредитования, поэтому инвестиции низкие. 1 балл: низкие инвестиции означают мало капитала на одного работника и низкую производительность. 1 балл: низкая производительность удерживает доходы на низком уровне, поэтому сбережения остаются низкими, и круг замыкается.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-barriers-to-growth-and-development-02',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['barriers-to-growth-and-development'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how dependence on primary commodities can slow economic development in a country that exports mainly oil.',
      ru: 'Объясните, как зависимость от первичных товаров может замедлить экономическое развитие страны, которая экспортирует в основном нефть.',
    },
    markscheme: {
      en: '1 mark: export earnings depend on one commodity whose price is volatile, so investment plans are hard to finance. 1 mark: a fall in the oil price cuts foreign currency and government revenue, which reduces spending on education and infrastructure. 1 mark: little processing means little value added and few jobs in more productive sectors. 1 mark: when export prices fall relative to import prices, the country can buy fewer imports for each unit it exports, which lowers its real income.',
      ru: '1 балл: экспортная выручка зависит от одного товара с нестабильной ценой, поэтому инвестиционные планы трудно финансировать. 1 балл: падение цены нефти сокращает валютные поступления и доходы государства, а значит, и расходы на образование и инфраструктуру. 1 балл: малая переработка означает малую добавленную стоимость и мало рабочих мест в более производительных секторах. 1 балл: когда экспортные цены падают относительно импортных, страна может купить меньше импорта на каждую единицу экспорта, что снижает её реальный доход.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-barriers-to-growth-and-development-03',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['barriers-to-growth-and-development'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    prompt: {
      en: "Explain how insecure property rights and low human capital can each reduce investment and productivity in a low-income economy. Show how the two barriers can reinforce each other. Write a connected 10-mark explanation: 2 minutes to plan, 15 to write and 3 to check.",
      ru: "Объясни, как незащищённые права собственности и низкий человеческий капитал могут снижать инвестиции и производительность в экономике с низкими доходами. Покажи, как эти барьеры способны усиливать друг друга. Напиши связный ответ на 10 баллов: 2 минуты на план, 15 на текст и 3 на проверку.",
    },
    markscheme: {
      en: "Explain property rights as enforceable rights of ownership/use/transfer. Uncertain ownership or weak enforcement increases the risk that an investor cannot retain returns, discouraging long-lived improvements; unclear title may also reduce usable collateral and access to finance. Human capital includes skills, knowledge and health: limited skills or illness can reduce productive use of equipment and the expected return to new investment. Connect the barriers: a hypothetical unstaffed training centre does not deliver skills, and uncertainty over a workshop site can discourage a trained owner from buying equipment. These are illustrative mechanisms, not claims about a named country or inevitable outcomes. External finance and institutional reforms can change the constraints. Do not confuse low real resources/saving with a universal rule that banks can only lend previously saved deposits. Content: actual Tragakes printed585 property-rights/investment/credit passage; original linked human-capital mechanism. Holistic levels, in our own words: 0 no relevant response; 1–2 very limited understanding; 3–4 relevant theory described; 5–6 partly developed explanation with some suitable terms; 7–8 clear explanation focused on the question with mostly accurate terms; 9–10 full, accurate connected explanation with appropriate terminology throughout. Use a diagram where it helps the explanation; this question does not require one. These are original Paper 1(a)-style exercises, not full papers. No real-world case or evaluative verdict is required. Level framework: actual M25 HL P1 TZ1 markscheme, p.3.",
      ru: "Объясни права собственности как обеспеченные правила владения, использования и передачи. Неопределённость владения или слабое исполнение повышают риск не получить отдачу от вложений и могут сдерживать долгосрочные улучшения; неясный титул также способен ограничивать залог и доступ к финансированию. Человеческий капитал включает навыки, знания и здоровье: недостаток подготовки или болезни могут мешать продуктивно использовать оборудование и снижать ожидаемую отдачу новых вложений. Свяжи барьеры: условный учебный центр без преподавателей не создаёт навыков, а неопределённость прав на мастерскую может удержать подготовленного владельца от покупки станка. Это иллюстрации механизмов, а не сведения о конкретной стране или неизбежные результаты. Внешнее финансирование и институциональные изменения могут менять ограничения. Недостаток реальных ресурсов и сбережений не означает универсального правила, будто банки кредитуют только из ранее накопленных вкладов. Содержание: фактически прочитанный Tragakes, печатная с.585, о собственности, инвестициях и кредите; авторская связка с механизмом человеческого капитала. Уровни, своими словами: 0 — нет ответа по существу; 1–2 — понимание почти не проявлено; 3–4 — нужная теория описана; 5–6 — объяснение частично развито, есть уместные термины; 7–8 — ясное объяснение по вопросу с в основном точными терминами; 9–10 — полное, точное и связное объяснение с уместными терминами во всём ответе. Диаграмма допустима, если помогает, но здесь не обязательна. Это авторские упражнения в формате части (a) Paper 1, а не полные работы. Реальный кейс и оценочный вывод не требуются. Основа уровней — фактическая схема M25 HL P1 TZ1, с.3.",
    },
    origin: 'original',
    minutes: 20,
  },
];
