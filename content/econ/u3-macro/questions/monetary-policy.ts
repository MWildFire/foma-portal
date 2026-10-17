import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-monetary-policy-01',
    subject: 'econ',
    topicIds: ['monetary-policy'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'A central bank cuts its policy interest rate from 5.0% to 4.5%. Calculate the percentage change in the policy interest rate. Give your answer to one decimal place.',
      ru: 'Центральный банк снижает ключевую ставку (policy interest rate) с 5,0% до 4,5%. Рассчитайте процентное изменение ключевой ставки. Ответ дайте с одним знаком после запятой.',
    },
    markscheme: {
      en: '1 mark: change in the rate = 4.5 - 5.0 = -0.5 percentage points. 1 mark: percentage change = -0.5 / 5.0 x 100 = -10.0%, so the rate falls by 10% in relative terms (not by 10 percentage points).',
      ru: '1 балл: изменение ставки = 4,5 - 5,0 = -0,5 процентного пункта. 1 балл: процентное изменение = -0,5 / 5,0 x 100 = -10,0%, то есть ставка снизилась на 10% в относительном выражении (а не на 10 процентных пунктов).',
    },
    answer: '-10.0',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-monetary-policy-02',
    subject: 'econ',
    topicIds: ['monetary-policy'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how a cut in the policy interest rate can lead to an increase in real GDP.',
      ru: 'Объясните, как снижение ключевой ставки может привести к росту реального ВВП.',
    },
    markscheme: {
      en: '1 mark: a lower policy rate can pass through to lower bank lending and deposit rates, depending on funding and risk. 1 mark: cheaper borrowing can stimulate interest-sensitive investment and consumption if firms and households are willing and able to spend. 1 mark: if spending responds, AD shifts right and real GDP can rise in the short run when there is spare capacity. 1 mark: an additional channel, such as a weaker floating currency that may support net exports subject to elasticities/lags, or asset-price/wealth effects that may support spending.',
      ru: '1 балл: снижение ключевой ставки может передаться на банковские ставки по кредитам и вкладам; реакция зависит от фондирования и риска. 1 балл: более дешёвый кредит может поддержать чувствительные к ставке инвестиции и потребление, если фирмы и семьи готовы и способны тратить. 1 балл: если расходы реагируют, AD сдвигается вправо и при свободных мощностях краткосрочный реальный ВВП может увеличиться. 1 балл: дополнительный канал, например ослабление плавающей валюты, которое может поддержать чистый экспорт с учётом эластичностей и лагов, или влияние цен активов и богатства на расходы.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-monetary-policy-03',
    subject: 'econ',
    topicIds: ['monetary-policy'],
    paper: 'P2',
    marks: 3,
    command: 'Draw',
    prompt: {
      en: 'Draw a money market diagram with the interest rate on the vertical axis and the quantity of money on the horizontal axis. Use the simplified model with unchanged downward-sloping money demand. Show an increase in money supply, and label the old and new equilibrium interest rates.',
      ru: 'Нарисуйте диаграмму денежного рынка: процентная ставка на вертикальной оси, количество денег на горизонтальной. При неизменном убывающем спросе на деньги в упрощённой модели покажите увеличение денежной массы и отметьте старую и новую равновесные процентные ставки.',
    },
    markscheme: {
      en: '1 mark: both axes are labelled, money demand is downward sloping and money supply is vertical. 1 mark: the money supply curve shifts to the right. 1 mark: the equilibrium interest rate falls, with the old and new equilibria labelled (for example i1 and i2).',
      ru: '1 балл: оси подписаны, спрос на деньги имеет отрицательный наклон, предложение денег вертикально. 1 балл: кривая предложения денег сдвигается вправо. 1 балл: равновесная процентная ставка снижается; старое и новое равновесие отмечены (например, i1 и i2).',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-monetary-policy-04',
    subject: 'econ',
    topicIds: ['monetary-policy'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    prompt: {
      en: 'Explain why a cut in the policy interest rate may have a weak effect on real output during a deep recession when rates are already close to zero. Use an AD/AS diagram and explain the transmission mechanism and two distinct constraints. Write a connected 10-mark explanation: 2 minutes to plan, 15 to write and 3 to check.',
      ru: 'Объясни, почему снижение ключевой ставки может слабо влиять на реальный выпуск во время глубокой рецессии, если ставки уже близки к нулю. Используй диаграмму AD/AS, раскрой механизм передачи и два разных ограничения. Напиши связный ответ на 10 баллов: 2 минуты на план, 15 на текст и 3 на проверку.',
    },
    markscheme: {
      en: 'Original Paper 1(a)-style explanation, assessed by levels rather than ten separate one-mark points. Explain the intended chain: a policy-rate cut can reduce bank borrowing rates, stimulate interest-sensitive consumption and investment, shift AD right and raise real output when there is spare capacity. Then explain at least two distinct constraints: limited room for further conventional rate cuts near the effective lower bound; pessimistic firms/households unwilling to borrow and spend; or banks restricting credit because of perceived default risk. Near-zero rates alone do not prove a liquidity trap, and a cut is not automatically ineffective. Use price level and real GDP axes, AD and relevant AS; connect a small/absent AD shift to a small/absent output response. QE can operate through other channels, but is not needed to answer this question. Holistic levels: 0 no relevant response; 1–2 little relevant understanding; 3–4 relevant theory described; 5–6 partly explained chain/constraints with some appropriate terms and a relevant diagram; 7–8 clear explanation addressing the question, mostly appropriate terminology and an explained diagram; 9–10 full, accurate explanation of the transmission and distinct constraints, appropriate terms throughout and a fully explained relevant diagram. No evaluation or real-world case is required for part(a). Level structure: actual M25 HL P1 TZ1 markscheme p.3; indicative monetary content: Tragakes ch.13 printed396–397.',
      ru: 'Авторское объяснение в формате части (a) Paper 1: ответ оценивается по уровням, а не как десять фактов по баллу. Раскрой ожидаемую цепочку: снижение ключевой ставки может удешевить банковские кредиты, поддержать чувствительные к ставке потребление и инвестиции, сдвинуть AD вправо и увеличить реальный выпуск при незагруженных мощностях. Затем объясни хотя бы два разных препятствия: близость эффективной нижней границы ограничивает дальнейшее обычное снижение ставок; пессимистичные фирмы и семьи не хотят занимать и тратить; банки ограничивают кредит из-за риска невозврата. Ставки около нуля сами по себе ещё не доказывают ловушку ликвидности и не делают каждое снижение бесполезным. На диаграмме нужны уровень цен, реальный ВВП, AD и подходящая AS; свяжи слабый или отсутствующий сдвиг AD со слабой или отсутствующей реакцией выпуска. QE действует и по другим каналам, но не обязательно для ответа. Уровни: 0 — нет относящегося к вопросу ответа; 1–2 — понимание почти не проявлено; 3–4 — нужная теория описана; 5–6 — передача и ограничения объяснены частично, есть уместные термины и диаграмма; 7–8 — ясное объяснение по вопросу с в основном точными терминами и объяснённой диаграммой; 9–10 — полное и точное раскрытие передачи и разных ограничений, точные термины во всём ответе и полностью объяснённая диаграмма. Для части (a) не требуются оценочное суждение или реальный кейс. Структура уровней — фактическая схема M25 HL P1 TZ1, с.3; экономический механизм — Tragakes, гл.13, печатные с.396–397.',
    },
    origin: 'original',
    minutes: 20,
  },
];
