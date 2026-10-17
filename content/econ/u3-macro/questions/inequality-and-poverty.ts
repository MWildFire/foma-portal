import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-inequality-and-poverty-01',
    subject: 'econ',
    topicIds: ['inequality-and-poverty'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'On a Lorenz curve both axes run from 0 to 100. Area A, between the line of equality and the Lorenz curve, is 2000. Area B, under the Lorenz curve, is 3000. Calculate the Gini coefficient. Give your answer to two decimal places.',
      ru: 'На кривой Лоренца обе оси идут от 0 до 100. Площадь A между линией равенства и кривой Лоренца равна 2000, а площадь B под кривой Лоренца равна 3000. Рассчитайте коэффициент Джини (Gini coefficient). Ответ дайте с двумя знаками после запятой.',
    },
    markscheme: {
      en: '1 mark: G = A / (A + B) = 2000 / (2000 + 3000). 1 mark: G = 2000 / 5000 = 0.40.',
      ru: '1 балл: G = A / (A + B) = 2000 / (2000 + 3000). 1 балл: G = 2000 / 5000 = 0,40.',
    },
    answer: '0.40',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-inequality-and-poverty-02',
    subject: 'econ',
    topicIds: ['inequality-and-poverty'],
    paper: 'P2',
    marks: 2,
    command: 'Calculate',
    prompt: {
      en: 'A tax and transfer policy changes the Lorenz curve. Before the policy, area A is 2000 and area B is 3000. After the policy, area A is 1500 and area B is 3500, on the same axes from 0 to 100. Calculate the Gini coefficient after the policy. Give your answer to two decimal places.',
      ru: 'Налогово-трансфертная политика меняет кривую Лоренца. До политики площадь A равна 2000, а площадь B равна 3000. После политики площадь A равна 1500, а площадь B равна 3500 (оси от 0 до 100). Рассчитайте коэффициент Джини после политики. Ответ дайте с двумя знаками после запятой.',
    },
    markscheme: {
      en: '1 mark: G = A / (A + B) = 1500 / (1500 + 3500) = 1500 / 5000. 1 mark: G = 0.30, down from 0.40 before the policy, so inequality falls.',
      ru: '1 балл: G = A / (A + B) = 1500 / (1500 + 3500) = 1500 / 5000. 1 балл: G = 0,30, что ниже 0,40 до политики, то есть неравенство снизилось.',
    },
    answer: '0.30',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-inequality-and-poverty-03',
    subject: 'econ',
    topicIds: ['inequality-and-poverty'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how the Lorenz curve and the Gini coefficient show the distribution of income in a country.',
      ru: 'Объясните, как кривая Лоренца и коэффициент Джини показывают распределение доходов в стране.',
    },
    markscheme: {
      en: '1 mark: the Lorenz curve plots the cumulative percentage of income against the cumulative percentage of the population, ranked from poorest to richest. 1 mark: the equality line shows perfect equality; when one Lorenz curve lies below another throughout, it represents a more unequal distribution. Crossing curves cannot be ranked this way. 1 mark: the Gini coefficient is A / (A + B), the area between the line and the curve divided by the total area under the line of equality. 1 mark: for nonnegative incomes with a positive total, Gini is 0 at equality and approaches 1 at ideal concentration; a higher value indicates more inequality. In an uncorrected finite sample of N equal-weighted households, one receiving everything gives (N−1)/N, not 1.',
      ru: '1 балл: кривая Лоренца показывает накопленную долю дохода против накопленной доли населения, ранжированного от самых бедных к самым богатым. 1 балл: линия равенства означает полное равенство; если одна кривая Лоренца лежит ниже другой на всём протяжении, она показывает более неравномерное распределение. Пересекающиеся кривые так ранжировать нельзя. 1 балл: коэффициент Джини равен A / (A + B): площадь между линией и кривой, делённая на общую площадь под линией равенства. 1 балл: при неотрицательных доходах с положительной общей суммой Джини равен 0 при равенстве и приближается к 1 при идеальной концентрации; большее значение означает большее неравенство. Для неисправленного коэффициента в конечной выборке из N равновзвешенных домохозяйств весь доход у одного даёт (N−1)/N, а не 1.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-inequality-and-poverty-04',
    subject: 'econ',
    topicIds: ['inequality-and-poverty'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    prompt: {
      en: 'Explain, using the following illustrative data and a Lorenz diagram, how a progressive income tax and a targeted transfer can reduce disposable-income inequality. Two equally weighted households have monthly pre-tax incomes of AED 10000 and AED 5000. The higher-income household pays AED 3000 tax; the lower-income household pays no tax and receives AED 1000 as a transfer. Hold all other incomes fixed. Calculate their disposable incomes and the lower-income household’s share before and after the policy, then explain the mechanisms. This is a hypothetical example, not country data. Write a connected 10-mark explanation: 2 minutes to plan, 15 to write and 3 to check.',
      ru: 'Объясни с помощью условных данных и диаграммы Лоренца, как прогрессивный подоходный налог и адресная выплата могут уменьшить неравенство располагаемых доходов. Два домохозяйства с одинаковыми весами имеют месячный доход до налогов 10000 и 5000 AED. Первое платит налог 3000 AED; второе не платит налог и получает трансферт 1000 AED. Остальные доходы считай неизменными. Рассчитай располагаемые доходы и долю второго домохозяйства в их суммарном доходе до и после мер, затем объясни механизмы. Пример вымышленный, не данные страны. Напиши связный ответ на 10 баллов: 2 минуты на план, 15 на текст и 3 на проверку.',
    },
    markscheme: {
      en: 'Original Paper 1(a)-style explanation; assess by levels, not ten one-mark facts. Indicative content: a progressive tax has a higher average rate at higher income; here the average rates are 30% and 0%. A transfer is not payment for current output. Disposable incomes become 10000 − 3000 = AED 7000 and 5000 + 1000 = AED 6000 per month. The lower-income share rises from 5000/15000 = 33.33% to 6000/13000 = 46.15%; total disposable income is not still 15000 because taxes exceed transfers by 2000. Plot cumulative household share on the horizontal axis and cumulative disposable-income share on the vertical axis, rank poorest first, and connect (0,0), (50,33.33), (100,100) before and (0,0), (50,46.15), (100,100) after. The new curve is closer to equality throughout this particular two-household example. Explain how the higher-income household loses a greater income share through tax and the targeted payment raises the lower-income household’s resources. Do not infer that every pension/transfer targets the poorest, that real behaviour is fixed, or that any lower Gini always proves Lorenz dominance. Holistic levels: 0 no relevant response; 1–2 little relevant understanding; 3–4 relevant theory described and some terms; 5–6 partly explained mechanisms/application with some appropriate terms and a relevant diagram; 7–8 the question is addressed with explained theory, mostly appropriate terms and an explained diagram; 9–10 full, accurate explanation applying the data, appropriate terms throughout and a fully explained diagram. Correct arithmetic alone is not a full explanation. No evaluation of the best policy or real-world case is required for this part(a) task. Level structure: actual M25 HL P1 TZ1 markscheme p.3; policy mechanisms: Tragakes ch.12 printed378–380.',
      ru: 'Авторское объяснение в формате части (a) Paper 1; оценивай по уровням, а не как десять фактов по баллу. Содержание: при прогрессивном налоге средняя ставка выше у получателя большего дохода; здесь ставки 30% и 0%. Трансферт не является оплатой текущего выпуска. Располагаемые доходы составят 10000 − 3000 = 7000 AED и 5000 + 1000 = 6000 AED в месяц. Доля второго домохозяйства растёт с 5000/15000 = 33,33% до 6000/13000 = 46,15%. Общая сумма уже не 15000: налоги превышают выплату на 2000. На горизонтальной оси — накопленная доля домохозяйств, на вертикальной — накопленная доля располагаемого дохода; сначала расположи более бедное домохозяйство. До мер соедини (0;0), (50;33,33), (100;100); после — (0;0), (50;46,15), (100;100). В этом конкретном примере новая кривая на всём протяжении ближе к равенству. Объясни оба механизма: более обеспеченное домохозяйство отдаёт большую долю дохода в виде налога, а адресная выплата повышает ресурсы менее обеспеченного. Не делай выводов, что любая пенсия или выплата направлена беднейшим, что реальное поведение неизменно или что меньший Джини всегда доказывает доминирование по Лоренцу. Уровни: 0 — нет ответа по вопросу; 1–2 — понимание почти не проявлено; 3–4 — нужная теория описана, есть отдельные термины; 5–6 — механизмы и применение объяснены частично, есть уместные термины и диаграмма; 7–8 — вопрос раскрыт, теория и диаграмма объяснены, термины в основном точны; 9–10 — полное и точное объяснение с использованием данных, точными терминами во всём ответе и полностью объяснённой диаграммой. Одних правильных расчётов для полного объяснения недостаточно. Оценивать лучшую политику или приводить реальный кейс для этой части (a) не требуется. Структура уровней — фактическая схема M25 HL P1 TZ1, с.3; механизмы — Tragakes, гл.12, печатные с.378–380.',
    },
    origin: 'original',
    minutes: 20,
  },
];
