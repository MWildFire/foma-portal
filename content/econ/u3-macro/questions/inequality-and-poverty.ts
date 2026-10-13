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
      en: '1 mark: the Lorenz curve plots the cumulative percentage of income against the cumulative percentage of the population, ranked from poorest to richest. 1 mark: the line of equality shows perfect equality, and the further the curve sags below it, the more unequal the income distribution. 1 mark: the Gini coefficient is A / (A + B), the area between the line and the curve divided by the total area under the line of equality. 1 mark: the Gini ranges from 0 (perfect equality) to 1 (one household has all the income), so a higher value means more inequality.',
      ru: '1 балл: кривая Лоренца показывает накопленную долю дохода против накопленной доли населения, ранжированного от самых бедных к самым богатым. 1 балл: линия равенства означает полное равенство, и чем сильнее кривая прогибается под ней, тем неравномернее распределён доход. 1 балл: коэффициент Джини равен A / (A + B): площадь между линией и кривой, делённая на общую площадь под линией равенства. 1 балл: коэффициент меняется от 0 (полное равенство) до 1 (весь доход у одного домохозяйства), поэтому большее значение означает большее неравенство.',
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
    command: 'Discuss',
    prompt: {
      en: 'Discuss whether progressive taxes and transfer payments are the best way for a government to reduce income inequality.',
      ru: 'Обсудите, являются ли прогрессивные налоги и трансфертные платежи лучшим способом, которым правительство может снизить неравенство доходов.',
    },
    markscheme: {
      en: '1 mark: defines a progressive tax (its average rate rises with income) and transfer payments (payments to households without a good or service in return). 1 mark: explains how progressive taxes reduce the gap between incomes after tax. 1 mark: explains how transfers raise the incomes of the poorest and reduce relative poverty. 1 mark: explains that these policies shift the Lorenz curve towards the line of equality, so the Gini coefficient falls. 1 mark: explains a cost: high progressive tax rates can reduce incentives to work, save and invest, which lowers efficiency. 1 mark: explains that transfers withdrawn quickly as income rises can discourage people from taking more work. 1 mark: explains other policies, such as education and health spending that raise human capital, and a minimum wage. 1 mark: evaluates the trade-off between equity and efficiency, and the time lags before education spending reduces inequality. 1 mark: considers the causes of inequality, such as discrimination, market power or inheritance, which may need competition policy or anti-discrimination laws. 1 mark: a justified judgement, for example that a mix of taxes, transfers and education spending is needed, weighing the costs to efficiency.',
      ru: '1 балл: определение прогрессивного налога (его средняя ставка растёт с доходом) и трансфертных платежей (выплат домохозяйствам без встречного товара или услуги). 1 балл: прогрессивные налоги сокращают разрыв между доходами после налогов. 1 балл: трансферты повышают доходы беднейших и снижают относительную бедность. 1 балл: эти меры сдвигают кривую Лоренца к линии равенства, поэтому коэффициент Джини снижается. 1 балл: издержка: высокие прогрессивные ставки могут снизить стимулы работать, сберегать и инвестировать, что ухудшает эффективность. 1 балл: трансферты, которые быстро отменяются по мере роста дохода, могут отбивать желание работать больше. 1 балл: другие меры, например расходы на образование и здравоохранение, которые повышают человеческий капитал, и минимальная зарплата. 1 балл: оценка компромисса между справедливостью и эффективностью, а также времени, которое нужно, чтобы расходы на образование снизили неравенство. 1 балл: причины неравенства, такие как дискриминация, рыночная власть или наследование, могут требовать политики конкуренции или законов против дискриминации. 1 балл: обоснованное суждение, например, что нужна комбинация налогов, трансфертов и расходов на образование с учётом издержек для эффективности.',
    },
    origin: 'original',
    minutes: 12,
  },
];
