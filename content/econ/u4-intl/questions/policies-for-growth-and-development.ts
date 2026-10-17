import type { Question } from '../../../../src/contract/types';

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-policies-for-growth-and-development-01',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['policies-for-growth-and-development'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain one advantage and one disadvantage of foreign aid for a low-income country.',
      ru: 'Объясните одно преимущество и один недостаток иностранной помощи для страны с низким доходом.',
    },
    markscheme: {
      en: '1 mark: an advantage is identified, such as finance for schools or clinics that the government cannot afford from its own revenue. 1 mark: the advantage is explained, for example as investment in human capital that raises productivity. 1 mark: a disadvantage is identified, such as dependence on donors or tied aid. 1 mark: the disadvantage is explained, for example as a weaker domestic tax effort or money spent on donor goods at a higher cost.',
      ru: '1 балл: названо преимущество, например финансирование школ или поликлиник, которые правительство не может оплатить из собственных доходов. 1 балл: преимущество объяснено, например как инвестиции в человеческий капитал, повышающие производительность. 1 балл: назван недостаток, например зависимость от доноров или связанная помощь. 1 балл: недостаток объяснён, например как ослабление собственных налоговых усилий или трата денег на товары донора по более высокой цене.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-policies-for-growth-and-development-02',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['policies-for-growth-and-development'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    prompt: {
      en: "Explain how access to microcredit could help a small business without conventional collateral, and why the loan may fail to increase the borrower’s disposable income. Use the hypothetical monthly figures: extra sales600, extra non-finance costs400 and loan-related cash payments250; assume all three refer to the same month. Write a connected 10-mark explanation: 2 minutes to plan, 15 to write and 3 to check.",
      ru: "Объясни, как доступ к микрокредиту может помочь малому бизнесу без обычного залога и почему кредит может не увеличить располагаемый денежный доход заёмщика. Используй условные месячные данные: дополнительная выручка600, дополнительные нефинансовые затраты400, платежи по кредиту250. Все суммы относятся к одному месяцу. Напиши связный ответ на 10 баллов: 2 минуты на план, 15 на текст и 3 на проверку.",
    },
    markscheme: {
      en: "Explain microcredit as small loans for borrowers with limited conventional access. Financing tools or working capital can allow productive activity and additional sales; group guarantees or other methods may address lack of conventional collateral but do not remove risk. Use the stated cash-flow example: extra operating surplus600−400=200 before loan payments; extra cash after the250 payment is−50. Repayment can include principal as well as interest, so this is cash flow, not a claim that all250 is an expense in profit accounting. A loan can be repaid without proving that poverty fell; demand, skills, terms, health and infrastructure affect outcomes. Explain why complementary services may matter. Do not claim all microloans raise income or all borrowers are women. Content: actual Tragakes printed627–628, access/uses/risks. Holistic levels, in our own words: 0 no relevant response; 1–2 very limited understanding; 3–4 relevant theory described; 5–6 partly developed explanation with some suitable terms; 7–8 clear explanation focused on the question with mostly accurate terms; 9–10 full, accurate connected explanation with appropriate terminology throughout. Use a diagram where it helps the explanation; this question does not require one. These are original Paper 1(a)-style exercises, not full papers. No real-world case or evaluative verdict is required. Level framework: actual M25 HL P1 TZ1 markscheme, p.3.",
      ru: "Определи микрокредит как небольшой заём для людей с ограниченным доступом к обычному кредитованию. Финансирование инструмента или оборотных средств может открыть возможность производить и получать дополнительную выручку; групповые гарантии или другие способы способны заменить обычный залог, но не устраняют риск. По данным дополнительный операционный остаток600−400=200 до кредитных платежей; денежный остаток после платежа250 равен−50. Платёж может включать основной долг и проценты, поэтому это денежный поток, а не утверждение, что все250 — расход при расчёте прибыли. Возврат кредита сам по себе не доказывает снижение бедности; результат зависит от спроса, навыков, условий займа, здоровья и инфраструктуры. Объясни роль дополняющих услуг. Нельзя утверждать, что любой микрокредит повышает доход или что все заёмщики — женщины. Содержание: фактически прочитанные Tragakes, печатные с.627–628, о доступе, применении и рисках. Уровни, своими словами: 0 — нет ответа по существу; 1–2 — понимание почти не проявлено; 3–4 — нужная теория описана; 5–6 — объяснение частично развито, есть уместные термины; 7–8 — ясное объяснение по вопросу с в основном точными терминами; 9–10 — полное, точное и связное объяснение с уместными терминами во всём ответе. Диаграмма допустима, если помогает, но здесь не обязательна. Это авторские упражнения в формате части (a) Paper 1, а не полные работы. Реальный кейс и оценочный вывод не требуются. Основа уровней — фактическая схема M25 HL P1 TZ1, с.3.",
    },
    origin: 'original',
    minutes: 20,
  },
  {
    id: 'econ-policies-for-growth-and-development-03',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['policies-for-growth-and-development'],
    paper: 'P3',
    marks: 10,
    command: 'Recommend',
    prompt: {
      en: 'A low-income country has high external debt, weak roads and ports, and low school enrolment. Its government can fund one new policy only. Recommend one policy, justify your choice, and identify one risk of your recommendation and a way to reduce it.',
      ru: 'В стране с низким доходом высокий внешний долг, слабые дороги и порты и низкий охват школьным образованием. Правительство может профинансировать только одну новую политику. Порекомендуйте одну политику, обоснуйте выбор, назовите один риск рекомендации и способ его снизить.',
    },
    markscheme: {
      en: '1 mark: recommends one specific policy, such as investment in roads and ports or in schooling. 1 mark: links the policy to a named barrier in the prompt, such as weak infrastructure raising the cost of trade. 1 mark: explains the expected effect on growth or development. 1 mark: compares the policy with at least one alternative, such as debt relief or microfinance, and explains why it is preferred. 1 mark: states the time lag of the policy, for example years for roads and schools. 1 mark: considers the cost and how it is financed, including the effect on external debt if it is borrowed. 1 mark: identifies one risk, such as corruption or poor project planning. 1 mark: proposes a way to reduce that risk, such as independent audits or phased investment. 1 mark: reasons about the stakeholders, for example who gains and who pays. 1 mark: states the conditions under which the recommendation would change.',
      ru: '1 балл: рекомендует одну конкретную политику, например инвестиции в дороги и порты или в школьное образование. 1 балл: связывает политику с названным барьером из условия, например слабая инфраструктура повышает издержки торговли. 1 балл: объясняет ожидаемый эффект для роста или развития. 1 балл: сравнивает политику хотя бы с одной альтернативой, например облегчением долга или микрофинансированием, и объясняет, почему её предпочитают. 1 балл: называет временной лаг политики, например годы на строительство дорог и школ. 1 балл: учитывает стоимость и источник финансирования, включая влияние на внешний долг, если проект финансируется займом. 1 балл: называет один риск, например коррупцию или плохое планирование проекта. 1 балл: предлагает способ снизить этот риск, например независимый аудит или поэтапные инвестиции. 1 балл: рассуждает о заинтересованных сторонах, например о том, кто выигрывает и кто платит. 1 балл: называет условия, при которых рекомендация изменилась бы.',
    },
    origin: 'original',
    minutes: 15,
  },
];
