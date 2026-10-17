import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'linear-transform-mean-variance',
    tex: 'E(aX+b)=aE(X)+b,\\quad \\operatorname{Var}(aX+b)=a^{2}\\operatorname{Var}(X)',
    name: { en: 'Mean and variance of aX + b', ru: 'Среднее и дисперсия величины aX + b (Mean and variance of aX + b)' },
    meaning: {
      en: 'The mean of $aX + b$ is $a$ times the mean of $X$, plus $b$. Its variance is $a^{2}$ times the variance of $X$; the constant $b$ does not change the variance.',
      ru: 'Среднее $aX + b$ равно $a$, умноженному на среднее $X$, плюс $b$. Дисперсия равна $a^{2}$, умноженному на дисперсию $X$; константа $b$ дисперсию не меняет.',
    },
    when: {
      en: 'Changing units (for example minutes to hours) or adding a fixed amount to every value of a random variable.',
      ru: 'Смена единиц (например, минут в часы) или прибавление фиксированной суммы к каждому значению случайной величины.',
    },
    syllabus: '4.14',
    inBooklet: true,
    example: {
      en: 'If E(T) = 35.5 and Var(T) = 49 for a time in minutes, and H = T/60, then E(H) = 35.5/60 = 0.592 and Var(H) = 49/3600 = 0.0136.',
      ru: 'Если E(T) = 35,5 и Var(T) = 49 для времени в минутах и H = T/60, то E(H) = 35,5/60 = 0,592 и Var(H) = 49/3600 = 0,0136.',
    },
  },
  {
    id: 'linear-combination-mean',
    tex: 'E\\left(a_{1}X_{1}+\\cdots+a_{n}X_{n}\\right)=a_{1}E(X_{1})+\\cdots+a_{n}E(X_{n})',
    name: { en: 'Mean of a linear combination', ru: 'Среднее линейной комбинации (Mean of a linear combination)' },
    meaning: {
      en: 'The mean of a weighted sum is the same weighted sum of the means.',
      ru: 'Среднее взвешенной суммы равно такой же взвешенной сумме средних.',
    },
    when: {
      en: 'For finite expectations: any linear combination of random variables, whether or not they are independent.',
      ru: 'При конечных математических ожиданиях: любая линейная комбинация случайных величин, независимо от того, независимы ли они.',
    },
    syllabus: '4.14',
    inBooklet: true,
    example: {
      en: 'E(2X - 3Y) = 2(5.4) - 3(2.1) = 4.5 when E(X) = 5.4 and E(Y) = 2.1.',
      ru: 'E(2X - 3Y) = 2(5,4) - 3(2,1) = 4,5 при E(X) = 5,4 и E(Y) = 2,1.',
    },
  },
  {
    id: 'linear-combination-variance',
    tex: '\\operatorname{Var}\\left(a_{1}X_{1}+\\cdots+a_{n}X_{n}\\right)=a_{1}^{2}\\operatorname{Var}(X_{1})+\\cdots+a_{n}^{2}\\operatorname{Var}(X_{n})',
    name: { en: 'Variance of a linear combination of independent variables', ru: 'Дисперсия линейной комбинации независимых величин (Variance of a linear combination of independent variables)' },
    meaning: {
      en: 'Each variance is multiplied by the square of its coefficient, and the results are added.',
      ru: 'Каждая дисперсия умножается на квадрат своего коэффициента, после чего результаты складываются.',
    },
    when: {
      en: 'Valid for pairwise uncorrelated variables; independence is sufficient, not necessary. Otherwise covariance terms are needed.',
      ru: 'Верно для попарно некоррелированных величин; независимость достаточна, но не обязательна. Иначе нужны слагаемые с ковариациями.',
    },
    syllabus: '4.14',
    inBooklet: true,
    example: {
      en: 'For independent X and Y with variances 0.36 and 0.49: Var(2X - 3Y) = 4(0.36) + 9(0.49) = 5.85.',
      ru: 'Для независимых X и Y с дисперсиями 0,36 и 0,49: Var(2X - 3Y) = 4(0,36) + 9(0,49) = 5,85.',
    },
  },
  {
    id: 'sample-variance-n-minus-1',
    tex: 's_{n-1}^{2}=\\dfrac{\\sum_{i=1}^{n}\\left(x_{i}-\\bar{x}\\right)^{2}}{n-1},\\qquad E\\left(s_{n-1}^{2}\\right)=\\sigma^{2}',
    name: { en: 'Sample variance with divisor n - 1', ru: 'Выборочная дисперсия с делителем n − 1 (Sample variance with divisor n - 1)' },
    meaning: {
      en: 'The sum of squared deviations from the sample mean, divided by $n - 1$. Its expected value is the population variance $\\sigma^{2}$.',
      ru: 'Сумма квадратов отклонений от выборочного среднего, делённая на $n - 1$. Её математическое ожидание равно дисперсии генеральной совокупности $\\sigma^{2}$.',
    },
    when: {
      en: 'For independent identically distributed observations with finite variance and n>1, estimating the population variance when the population mean is also estimated by the sample mean.',
      ru: 'Для независимых одинаково распределённых наблюдений с конечной дисперсией и n>1: оценка дисперсии совокупности по выборке, когда среднее совокупности также оценивается выборочным средним.',
    },
    syllabus: '4.14',
    inBooklet: true,
    example: {
      en: 'For the sample 499, 503, 500, 498: the sample mean is 500 and s(n-1)^2 = 14/3 = 4.67.',
      ru: 'Для выборки 499, 503, 500, 498: выборочное среднее равно 500, а s(n-1)^2 = 14/3 = 4,67.',
    },
  },
];
