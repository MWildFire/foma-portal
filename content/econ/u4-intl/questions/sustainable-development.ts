import type { Question } from '../../../../src/contract/types';

export const questions: (Question & { inMockScope?: 'yes' | 'no' })[] = [
  {
    id: 'econ-sustainable-development-01',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['sustainable-development'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain the three dimensions of sustainable development.',
      ru: 'Объясните три измерения устойчивого развития.',
    },
    markscheme: {
      en: '1 mark: economic dimension: stable growth, efficient use of resources and jobs that can last. 1 mark: social dimension: equity, access to health and education, and reducing poverty. 1 mark: environmental dimension: conserving natural capital, controlling pollution, and protecting the climate and biodiversity. 1 mark: the dimensions interact, so a policy must be judged on all three and its trade-offs stated.',
      ru: '1 балл: экономическое измерение: стабильный рост, эффективное использование ресурсов и рабочие места, которые можно сохранить. 1 балл: социальное измерение: справедливость, доступ к здравоохранению и образованию, снижение бедности. 1 балл: экологическое измерение: сохранение природного капитала, контроль загрязнения, защита климата и биоразнообразия. 1 балл: измерения взаимосвязаны, поэтому политику оценивают по всем трём и называют компромиссы.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'econ-sustainable-development-02',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['sustainable-development'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why carbon emissions are a market failure, and how a carbon tax could correct it.',
      ru: 'Объясните, почему выбросы углерода являются провалом рынка и как углеродный налог может это исправить.',
    },
    markscheme: {
      en: '1 mark: emissions impose costs on people who are not part of the transaction, so this is a negative externality. 1 mark: the firm does not pay this external cost, so its private cost is below the social cost and the market over-produces. 1 mark: a carbon tax adds a charge per unit of emissions, raising the private cost to the social cost. 1 mark: output falls to the socially optimal level, and firms have an incentive to cut emissions or switch to cleaner methods.',
      ru: '1 балл: выбросы создают издержки для людей, не участвующих в сделке, то есть это негативный внешний эффект. 1 балл: фирма не платит эти внешние издержки, поэтому её частные издержки ниже общественных, и рынок производит слишком много. 1 балл: углеродный налог добавляет плату за единицу выбросов и поднимает частные издержки до общественных. 1 балл: выпуск снижается до социально оптимального уровня, а у фирм появляется стимул сокращать выбросы или переходить на более чистые методы.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'econ-sustainable-development-03',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['sustainable-development'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    prompt: {
      en: "Explain how a carbon tax and a tradable-permit scheme create incentives to reduce emissions. Distinguish the policy variable each fixes in a simplified model, assuming effective monitoring and enforcement. Write a connected 10-mark explanation: 2 minutes to plan, 15 to write and 3 to check.",
      ru: "Объясни, как углеродный налог и торговля разрешениями создают стимулы сокращать выбросы. Укажи, какой параметр задаёт каждая политика в упрощённой модели при действенном учёте и контроле. Напиши связный ответ на 10 баллов: 2 минуты на план, 15 на текст и 3 на проверку.",
    },
    markscheme: {
      en: "Explain the negative externality: emissions impose costs outside the transaction, so private incentives can produce excessive emissions. A fixed tax per tonne makes each avoided tonne save the tax; the resulting quantity depends on abatement costs and responses. A fixed, binding total permit cap limits covered emissions, assuming compliance and no banking/offset complication; permits can trade and their price depends on demand. A firm with marginal abatement cost below the tax or permit price has an incentive to abate. Illustrative one-tonne choice: cost40 versus tax60 or permit price60 makes abatement save net20. At abatement cost80 versus charge60, paying the charge/using a permit is cheaper by20. Neither instrument automatically equals the true marginal external damage; a cap above baseline or weak enforcement may fail to reduce emissions. Do not infer certainty about economy-wide emissions from a cap covering only selected sources. Content: actual Tragakes printed154, permits and incentives. Holistic levels, in our own words: 0 no relevant response; 1–2 very limited understanding; 3–4 relevant theory described; 5–6 partly developed explanation with some suitable terms; 7–8 clear explanation focused on the question with mostly accurate terms; 9–10 full, accurate connected explanation with appropriate terminology throughout. Use a diagram where it helps the explanation; this question does not require one. These are original Paper 1(a)-style exercises, not full papers. No real-world case or evaluative verdict is required. Level framework: actual M25 HL P1 TZ1 markscheme, p.3.",
      ru: "Раскрой отрицательный внешний эффект: издержки выбросов несут и участники вне сделки, поэтому частные стимулы могут вести к чрезмерным выбросам. Фиксированный налог за тонну делает каждую предотвращённую тонну экономией налога; итоговый объём зависит от затрат сокращения и реакции фирм. Фиксированный ограничивающий суммарный объём разрешений сдерживает охваченные выбросы при соблюдении правил и без усложнений переноса квот и компенсаций; разрешения торгуются, цена зависит от спроса. Если предельные затраты сокращения ниже налога или цены разрешения, сокращать выгодно. Условный выбор для тонны: затраты40 при налоге60 или цене разрешения60 дают чистую экономию20. При затратах80 и плате60 заплатить или использовать разрешение дешевле на20. Ни один инструмент автоматически не равен истинному предельному внешнему ущербу; слишком высокий лимит или слабый контроль могут не сократить выбросы. Лимит для части источников не гарантирует общий национальный объём. Содержание: фактически прочитанные Tragakes, печатная с.154. Уровни, своими словами: 0 — нет ответа по существу; 1–2 — понимание почти не проявлено; 3–4 — нужная теория описана; 5–6 — объяснение частично развито, есть уместные термины; 7–8 — ясное объяснение по вопросу с в основном точными терминами; 9–10 — полное, точное и связное объяснение с уместными терминами во всём ответе. Диаграмма допустима, если помогает, но здесь не обязательна. Это авторские упражнения в формате части (a) Paper 1, а не полные работы. Реальный кейс и оценочный вывод не требуются. Основа уровней — фактическая схема M25 HL P1 TZ1, с.3.",
    },
    origin: 'original',
    minutes: 20,
  },
  {
    id: 'econ-sustainable-development-04',
    inMockScope: 'no',
    subject: 'econ',
    topicIds: ['sustainable-development'],
    paper: 'P3',
    marks: 6,
    command: 'Recommend',
    prompt: {
      en: 'A government wants to cut emissions from its power sector without sharply raising electricity prices for low-income households. Recommend one policy and justify your recommendation.',
      ru: 'Правительство хочет сократить выбросы энергетического сектора, не резко повышая цены на электроэнергию для домохозяйств с низкими доходами. Порекомендуйте одну политику и обоснуйте рекомендацию.',
    },
    markscheme: {
      en: '1 mark: a clear recommendation, for example a carbon tax with the revenue returned to low-income households as a lump-sum rebate. 1 mark: explains how the policy reduces emissions: a higher cost of fossil-fuel power encourages efficiency and switching to renewables. 1 mark: explains how it protects low-income households: the rebate offsets higher bills, so their income is kept. 1 mark: evaluates the cost to government and the time lags before emissions fall. 1 mark: evaluates the risk of carbon leakage and the effect on energy-intensive firms. 1 mark: a justified conclusion that states the key condition for success, such as a well-targeted rebate.',
      ru: '1 балл: ясная рекомендация, например углеродный налог с возвратом поступлений домохозяйствам с низкими доходами в виде единовременной компенсации. 1 балл: объясняет, как политика сокращает выбросы: более высокая цена электроэнергии из ископаемого топлива стимулирует экономию и переход на возобновляемые источники. 1 балл: объясняет, как она защищает домохозяйства с низкими доходами: компенсация покрывает более высокие счета, поэтому их доход сохраняется. 1 балл: оценивает стоимость для государства и временные лаги до снижения выбросов. 1 балл: оценивает риск утечки углерода и влияние на энергоёмкие фирмы. 1 балл: обоснованный вывод, в котором указано ключевое условие успеха, например хорошо адресная компенсация.',
    },
    origin: 'original',
    minutes: 12,
  },
];
