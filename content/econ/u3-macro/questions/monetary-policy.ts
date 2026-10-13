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
      en: '1 mark: a lower policy rate reduces the interest rates that banks charge on loans and pay on deposits. 1 mark: cheaper borrowing raises investment by firms and consumer spending on credit, cars and housing. 1 mark: aggregate demand shifts to the right, so real GDP rises in the short run. 1 mark: an additional channel, such as a weaker currency that raises net exports, or higher asset prices that raise household wealth and spending.',
      ru: '1 балл: более низкая ключевая ставка снижает проценты, которые банки берут по кредитам и платят по вкладам. 1 балл: более дешёвые заимствования повышают инвестиции фирм и потребительские расходы на кредит, автомобили и жильё. 1 балл: совокупный спрос сдвигается вправо, поэтому реальный ВВП растёт в краткосрочном периоде. 1 балл: дополнительный канал, например ослабление валюты, которое повышает чистый экспорт, или рост цен активов, который увеличивает богатство домохозяйств и их расходы.',
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
      en: 'Draw a money market diagram with the interest rate on the vertical axis and the quantity of money on the horizontal axis. Show a central bank increase in the money supply, and label the old and new equilibrium interest rates.',
      ru: 'Нарисуйте диаграмму денежного рынка: процентная ставка на вертикальной оси, количество денег на горизонтальной. Покажите увеличение денежной массы центральным банком и отметьте старую и новую равновесные процентные ставки.',
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
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the effectiveness of monetary policy in reducing a recession when the policy interest rate is already close to zero.',
      ru: 'Оцените эффективность монетарной политики в борьбе с рецессией, когда ключевая ставка уже близка к нулю.',
    },
    markscheme: {
      en: '1 mark: explains that a cut in the policy rate is expansionary: it lowers borrowing costs, raises investment and consumer spending, and shifts AD to the right. 1 mark: explains the liquidity trap: with rates near zero, people and banks hold cash rather than spend or lend, so further cuts have little effect. 1 mark: explains quantitative easing: it can lower long-term rates and support asset prices, but its effect on lending and output is uncertain. 1 mark: explains time lags: monetary policy takes months to affect output and prices, so it may come too late in a deep recession. 1 mark: explains low confidence: firms may not invest even when borrowing is cheap, because they expect weak demand. 1 mark: explains high household or corporate debt: lower rates may be used to repay loans rather than to spend. 1 mark: explains fiscal policy as an alternative or complement, such as higher government spending, which acts directly on aggregate demand. 1 mark: explains other channels, such as the exchange rate and asset prices, which may still transmit some effect, though their size is uncertain. 1 mark: evaluates the context: the answer depends on the depth of the recession, the credibility of the central bank and the size of the output gap. 1 mark: a justified judgement, for example that monetary policy is limited near zero rates and works best combined with fiscal policy and measures that restore confidence.',
      ru: '1 балл: снижение ключевой ставки — экспансионистская мера: оно снижает стоимость заимствований, повышает инвестиции и потребительские расходы и сдвигает AD вправо. 1 балл: ловушка ликвидности: при ставках, близких к нулю, люди и банки держат деньги вместо расходов и кредитования, поэтому дальнейшее снижение почти не работает. 1 балл: количественное смягчение может снизить долгосрочные ставки и поддержать цены активов, но его влияние на кредитование и выпуск неопределённо. 1 балл: лаги: монетарной политике нужны месяцы, чтобы повлиять на выпуск и цены, поэтому она может прийти слишком поздно в глубокую рецессию. 1 балл: низкое доверие: фирмы могут не инвестировать даже при дешёвых кредитах, поскольку ожидают слабый спрос. 1 балл: высокий долг домохозяйств или фирм: более низкие ставки могут идти на погашение кредитов, а не на расходы. 1 балл: альтернатива или дополнение — фискальная политика, например рост государственных расходов, которая напрямую действует на совокупный спрос. 1 балл: другие каналы, такие как обменный курс и цены активов, могут передавать часть эффекта, хотя его размер неясен. 1 балл: оценка контекста: ответ зависит от глубины рецессии, доверия к центральному банку и размера разрыва выпуска. 1 балл: обоснованное суждение, например, что монетарная политика ограничена при ставках около нуля и лучше работает в сочетании с фискальной политикой и мерами по восстановлению доверия.',
    },
    origin: 'original',
    minutes: 12,
  },
];
