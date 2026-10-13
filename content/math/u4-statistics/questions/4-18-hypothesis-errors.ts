import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-18-01',
    subject: 'math',
    topicIds: ['4-18-hypothesis-errors'],
    paper: 'P1',
    marks: 5,
    command: 'Find, State',
    prompt: {
      en: 'The drying time of a paint is claimed to have a mean of 6.0 hours. A random sample of 16 tins has a mean drying time of 6.4 hours and a standard deviation of 0.8 hours. Assume that drying times are normally distributed. Test at the 5% significance level whether the mean drying time differs from 6.0 hours. Find the t-statistic, correct to 2 decimal places, and the two-tailed p-value, correct to 3 decimal places. State your conclusion.',
      ru: 'Заявлено, что среднее время высыхания краски равно 6,0 часа. Случайная выборка из 16 банок показала среднее время высыхания 6,4 часа и стандартное отклонение 0,8 часа. Считайте, что время высыхания распределено нормально. Проверьте на уровне значимости 5%, отличается ли среднее время высыхания от 6,0 часа. Найдите t-статистику с точностью до 2 знаков после запятой и двустороннее p-значение с точностью до 3 знаков после запятой. Сформулируйте вывод.',
    },
    markscheme: {
      en: 'M1: t = (6.4 - 6.0) / (0.8 / √16), with 15 degrees of freedom. A1: t = 2.00. M1: two-tailed p-value = 2P(T > 2.00) for T ~ t(15). A1: p = 0.064. R1: 0.064 > 0.05, so do not reject H0: there is not enough evidence that the mean drying time differs from 6.0 hours.',
      ru: 'M1: t = (6,4 − 6,0) / (0,8 / √16), число степеней свободы 15. A1: t = 2,00. M1: двустороннее p-значение = 2P(T > 2,00) для T ~ t(15). A1: p = 0,064. R1: 0,064 > 0,05, поэтому H0 не отвергается: недостаточно данных, чтобы утверждать, что среднее время высыхания отличается от 6,0 часа.',
    },
    answer: '2.00; 0.064',
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'q-4-18-02',
    subject: 'math',
    topicIds: ['4-18-hypothesis-errors'],
    paper: 'P1',
    marks: 5,
    command: 'Find, State',
    prompt: {
      en: 'A researcher measures two quantities on 12 people and assumes that the pairs come from a bivariate normal population. The sample correlation coefficient is r = 0.62. Test H0: rho = 0 against H1: rho > 0 at the 5% significance level. Find the t-statistic, correct to 3 significant figures, and the one-tailed p-value, correct to 3 decimal places. State your conclusion.',
      ru: 'Исследователь измерил две величины у 12 человек и предполагает, что пары взяты из двумерной нормальной совокупности. Выборочный коэффициент корреляции равен r = 0,62. Проверьте на уровне значимости 5% гипотезу H0: ρ = 0 против H1: ρ > 0. Найдите t-статистику с точностью до 3 значащих цифр и одностороннее p-значение с точностью до 3 знаков после запятой. Сформулируйте вывод.',
    },
    markscheme: {
      en: 'M1: t = r√(n − 2) / √(1 − r²) = 0.62√10 / √(1 − 0.62²). A1: t = 2.50 (3 s.f.). M1: one-tailed p-value = P(T > 2.50) for T ~ t(10). A1: p = 0.016. R1: 0.016 < 0.05, so reject H0: there is evidence of positive correlation in the population.',
      ru: 'M1: t = r√(n − 2) / √(1 − r²) = 0,62√10 / √(1 − 0,62²). A1: t = 2,50 (3 значащие цифры). M1: одностороннее p-значение = P(T > 2,50) для T ~ t(10). A1: p = 0,016. R1: 0,016 < 0,05, поэтому H0 отвергается: в совокупности есть свидетельство положительной корреляции.',
    },
    answer: '2.50; 0.016',
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'q-4-18-03',
    subject: 'math',
    topicIds: ['4-18-hypothesis-errors'],
    paper: 'P2',
    marks: 14,
    command: 'Write down, State',
    prompt: {
      en: 'A welding robot in a factory produces faults at random. Under the standard settings the mean number of faults per shift is 10. After a new maintenance routine, the manager wants to test whether the mean has decreased. Assume that the number of faults per shift is Poisson distributed, that shifts are independent and that the rate is constant. Let T be the total number of faults over three shifts.\n\n(a) Write down H0 and H1 for the mean number of faults per shift, m, and state the distribution of T under H0. [3]\n\n(b) Find the critical region for T at the 5% significance level, and the actual significance level of this test. [4]\n\n(c) Find the probability of a Type II error when the true mean is 7 faults per shift. [4]\n\n(d) Explain, in context, what a Type II error would mean for the manager. [3]',
      ru: 'Сварочный робот на заводе выпускает дефекты случайным образом. При стандартных настройках среднее число дефектов за смену равно 10. После новой процедуры обслуживания менеджер хочет проверить, снизилось ли это среднее. Считайте, что число дефектов за смену распределено по Пуассону, смены независимы и частота постоянна. Пусть T — общее число дефектов за три смены.\n\n(a) Запишите H0 и H1 для среднего числа дефектов за смену m и укажите распределение T при H0. [3]\n\n(b) Найдите критическую область для T на уровне значимости 5% и фактический уровень значимости этого теста. [4]\n\n(c) Найдите вероятность ошибки II рода, если истинное среднее равно 7 дефектам за смену. [4]\n\n(d) Объясните в контексте, что означала бы ошибка II рода для менеджера. [3]',
    },
    markscheme: {
      en: '(a) A1: H0: m = 10 and H1: m < 10. R1: the three counts are independent Poisson variables, so their total is Poisson. A1: T ~ Po(30) under H0.\n(b) M1: cumulative probabilities for Po(30): P(T ≤ 20) = 0.035 and P(T ≤ 21) = 0.054. A1: the largest c with P(T ≤ c) ≤ 0.05 is c = 20, so the critical region is T ≤ 20. A1: actual significance level 0.035. R1: 0.035 is less than 0.05 because the Poisson distribution is discrete.\n(c) M1: if m = 7, then T ~ Po(21). M1: β = P(T ≥ 21) = 1 − P(T ≤ 20). A1: β = 0.529. R1: a Type II error occurs when the test keeps H0 although the true mean has fallen to 7.\n(d) R1: a Type II error would mean failing to detect that the faults have fallen to 7 per shift. R1: the manager would conclude that the routine has not worked, when it has. R1: so a useful change could be stopped, or the improvement missed.',
      ru: '(a) A1: H0: m = 10 и H1: m < 10. R1: три подсчёта независимы и имеют распределение Пуассона, поэтому их сумма тоже пуассоновская. A1: T ~ Po(30) при H0.\n(b) M1: накопленные вероятности для Po(30): P(T ≤ 20) = 0,035 и P(T ≤ 21) = 0,054. A1: наибольшее c, для которого P(T ≤ c) ≤ 0,05, равно 20, поэтому критическая область T ≤ 20. A1: фактический уровень значимости 0,035. R1: 0,035 меньше 0,05, потому что распределение Пуассона дискретно.\n(c) M1: если m = 7, то T ~ Po(21). M1: β = P(T ≥ 21) = 1 − P(T ≤ 20). A1: β = 0,529. R1: ошибка II рода — это случай, когда тест сохраняет H0, хотя истинное среднее упало до 7.\n(d) R1: ошибка II рода означала бы, что не удалось обнаружить снижение до 7 дефектов за смену. R1: менеджер решил бы, что процедура не сработала, хотя это не так. R1: поэтому полезное изменение могли бы отменить или улучшение не заметить.',
    },
    answer: '20; 0.035; 0.529',
    origin: 'original',
    minutes: 14,
  },
];
