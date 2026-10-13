import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-14-01',
    subject: 'math',
    topicIds: ['4-14-linear-transformations'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The time T, in minutes, that a student spends on a homework task has E(T) = 35.5 and Var(T) = 49. The time is converted to hours using H = T/60. Find E(H) and the standard deviation of H. Give both answers correct to 3 decimal places.',
      ru: 'Время T (в минутах), которое ученик тратит на домашнее задание, имеет E(T) = 35,5 и Var(T) = 49. Время переводится в часы по формуле H = T/60. Найдите E(H) и стандартное отклонение H. Оба ответа дайте с точностью до 3 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: E(H) = E(T)/60 = 35.5/60. A1: E(H) = 0.592. M1: Var(H) = Var(T)/60² = 49/3600, so the standard deviation is √(49/3600). A1: standard deviation = 0.117.',
      ru: 'M1: E(H) = E(T)/60 = 35,5/60. A1: E(H) = 0,592. M1: Var(H) = Var(T)/60² = 49/3600, поэтому стандартное отклонение равно √(49/3600). A1: стандартное отклонение = 0,117.',
    },
    answer: '0.592; 0.117',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-14-02',
    subject: 'math',
    topicIds: ['4-14-linear-transformations'],
    paper: 'P1',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'The independent random variables X and Y have E(X) = 5.4, Var(X) = 0.36, E(Y) = 2.1 and Var(Y) = 0.49. Calculate E(2X − 3Y) and Var(2X − 3Y). Give both answers correct to 2 decimal places.',
      ru: 'Независимые случайные величины X и Y имеют E(X) = 5,4, Var(X) = 0,36, E(Y) = 2,1 и Var(Y) = 0,49. Вычислите E(2X − 3Y) и Var(2X − 3Y). Оба ответа дайте с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: E(2X − 3Y) = 2E(X) − 3E(Y). A1: E(2X − 3Y) = 2(5.4) − 3(2.1) = 4.50. M1: Var(2X − 3Y) = 2²Var(X) + (−3)²Var(Y), using independence. A1: Var(2X − 3Y) = 4(0.36) + 9(0.49) = 5.85.',
      ru: 'M1: E(2X − 3Y) = 2E(X) − 3E(Y). A1: E(2X − 3Y) = 2(5,4) − 3(2,1) = 4,50. M1: Var(2X − 3Y) = 2²Var(X) + (−3)²Var(Y), так как величины независимы. A1: Var(2X − 3Y) = 4(0,36) + 9(0,49) = 5,85.',
    },
    answer: '4.50; 5.85',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-14-03',
    subject: 'math',
    topicIds: ['4-14-linear-transformations'],
    paper: 'P2',
    marks: 14,
    command: 'Show that, Estimate',
    prompt: {
      en: 'A bakery makes loaves whose masses, in grams, are independent random variables with the same mean μ and the same variance σ². A random sample of n = 5 loaves has masses 512, 498, 505, 530 and 489 grams.\n\n(a) Show that the sample mean X̄ = (1/n)(X1 + X2 + ... + Xn) is an unbiased estimate of μ. [3]\n\n(b) Find the sample mean x̄ and the value of s²(n−1) for this sample. [4]\n\n(c) Use your answers to part (b) to estimate the mean and the variance of the total mass T = X1 + X2 + X3 of three loaves chosen at random. [4]\n\n(d) Explain why the divisor n − 1 is used in s²(n−1) rather than n when estimating σ². [3]',
      ru: 'Пекарня выпекает булки, массы которых в граммах — независимые случайные величины с одинаковым средним μ и одинаковой дисперсией σ². Случайная выборка из n = 5 булок имеет массы 512, 498, 505, 530 и 489 граммов.\n\n(a) Покажите, что выборочное среднее X̄ = (1/n)(X1 + X2 + ... + Xn) является несмещённой оценкой μ. [3]\n\n(b) Найдите выборочное среднее x̄ и значение s²(n−1) для этой выборки. [4]\n\n(c) Используя ответы к пункту (b), оцените среднее и дисперсию общей массы T = X1 + X2 + X3 трёх случайно выбранных булок. [4]\n\n(d) Объясните, почему при оценке σ² используется делитель n − 1 в s²(n−1), а не n. [3]',
    },
    markscheme: {
      en: '(a) M1: E(X̄) = (1/n)(E(X1) + ... + E(Xn)). M1: = (1/n)(μ + ... + μ) = (1/n) × nμ. A1 AG: E(X̄) = μ, so X̄ is an unbiased estimate of μ.\n(b) M1: x̄ = (512 + 498 + 505 + 530 + 489)/5 = 2534/5. A1: x̄ = 506.8. M1: sum of (x − x̄)² = 962.8. A1: s²(n−1) = 962.8/4 = 240.7.\n(c) M1: E(T) = 3μ, so the estimate of the mean is 3x̄ = 3 × 506.8. A1: 1520.4. M1: Var(T) = 3σ² because the loaves are independent, so the estimate is 3s²(n−1) = 3 × 240.7. A1: 722.1.\n(d) R1: the divisor n gives an expected value below σ², so it is a biased estimate. R1: the sum of squared deviations from x̄ is smaller on average than the sum from μ, so dividing by n underestimates σ²; x̄ uses up one degree of freedom. R1: E(s²(n−1)) = σ².',
      ru: '(a) M1: E(X̄) = (1/n)(E(X1) + ... + E(Xn)). M1: = (1/n)(μ + ... + μ) = (1/n) × nμ. A1 AG: E(X̄) = μ, поэтому X̄ — несмещённая оценка μ.\n(b) M1: x̄ = (512 + 498 + 505 + 530 + 489)/5 = 2534/5. A1: x̄ = 506,8. M1: сумма (x − x̄)² = 962,8. A1: s²(n−1) = 962,8/4 = 240,7.\n(c) M1: E(T) = 3μ, поэтому оценка среднего равна 3x̄ = 3 × 506,8. A1: 1520,4. M1: Var(T) = 3σ², так как булки независимы, поэтому оценка равна 3s²(n−1) = 3 × 240,7. A1: 722,1.\n(d) R1: делитель n даёт математическое ожидание меньше σ², то есть смещённую оценку. R1: сумма квадратов отклонений от x̄ в среднем меньше суммы от μ, поэтому деление на n занижает оценку; x̄ использует одну степень свободы. R1: E(s²(n−1)) = σ².',
    },
    answer: '506.8; 240.7; 1520.4; 722.1',
    origin: 'original',
    minutes: 14,
  },
];
