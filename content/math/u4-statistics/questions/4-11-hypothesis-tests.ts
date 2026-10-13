import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-11-01',
    subject: 'math',
    topicIds: ['4-11-hypothesis-tests'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A fair six-sided die is rolled 120 times. The observed frequencies for the faces 1, 2, 3, 4, 5 and 6 are 18, 24, 15, 21, 19 and 23. A chi-squared goodness-of-fit test is used to test whether the die is fair. Find the value of the test statistic and the number of degrees of freedom. Give the test statistic to 3 significant figures.',
      ru: 'Игральный кубик с шестью гранями бросили 120 раз. Наблюдаемые частоты для граней 1, 2, 3, 4, 5 и 6 равны 18, 24, 15, 21, 19 и 23. Для проверки, честный ли кубик, используется тест согласия χ². Найдите значение статистики теста и число степеней свободы. Статистику дайте с 3 значащими цифрами.',
    },
    markscheme: {
      en: 'M1: expected frequency for each face under H0 is 120 / 6 = 20. M1: sum of (O − E)² / E over the six faces. A1: 2.80. A1: degrees of freedom 6 − 1 = 5.',
      ru: 'M1: ожидаемая частота для каждой грани при H0 равна 120 / 6 = 20. M1: сумма (O − E)² / E по шести граням. A1: 2,80. A1: степени свободы 6 − 1 = 5.',
    },
    answer: '2.80; 5',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-4-11-02',
    subject: 'math',
    topicIds: ['4-11-hypothesis-tests'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A school claims that its students sleep 8 hours on an average school night. A random sample of 15 students is taken, and a one-sample t-test is carried out for H0: μ = 8 against H1: μ ≠ 8. The test statistic is t = 2.31. Find the two-tailed p-value of the test, giving your answer to 3 significant figures.',
      ru: 'Школа утверждает, что её ученики спят в среднем 8 часов в учебную ночь. Взята случайная выборка из 15 учеников, и проводится одновыборочный t-тест для H0: μ = 8 против H1: μ ≠ 8. Статистика теста равна t = 2,31. Найдите двустороннее p-значение теста и ответ дайте с 3 значащими цифрами.',
    },
    markscheme: {
      en: 'M1: t-distribution with 15 − 1 = 14 degrees of freedom. M1: two-tailed p-value = 2 × P(T > 2.31). A1: 0.0366.',
      ru: 'M1: t-распределение с 15 − 1 = 14 степенями свободы. M1: двустороннее p-значение = 2 × P(T > 2,31). A1: 0,0366.',
    },
    answer: '0.0366',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-4-11-03',
    subject: 'math',
    topicIds: ['4-11-hypothesis-tests'],
    paper: 'P2',
    marks: 14,
    command: 'Determine',
    prompt: {
      en: 'A survey of 150 students at a school in Dubai asked each student where they usually study alone (library, home or café) and whether their main subjects are sciences or humanities. The results are:\n\nSciences: library 34, home 21, café 15 (total 70).\nHumanities: library 18, home 33, café 29 (total 80).\n\nA chi-squared test of independence is carried out at the 5% significance level.\n\n(a) State the null and alternative hypotheses for this test. [2]\n\n(b) Find the expected frequency of sciences students who study alone in the library. Give your answer to 3 significant figures. [2]\n\n(c) Find the value of the chi-squared test statistic. Give your answer to 2 decimal places. [4]\n\n(d) Write down the number of degrees of freedom, and find the p-value of the test. Give the p-value to 3 significant figures. [3]\n\n(e) Using the p-value, state with a reason whether the null hypothesis should be rejected at the 5% level. [3]',
      ru: 'Опрос 150 учеников школы в Дубае спросил, где они обычно занимаются в одиночку (библиотека, дом или кафе), и выяснил, являются ли их основные предметы естественно-научными или гуманитарными. Результаты:\n\nЕстественные науки: библиотека 34, дом 21, кафе 15 (всего 70).\nГуманитарные науки: библиотека 18, дом 33, кафе 29 (всего 80).\n\nПроводится χ²-тест независимости на уровне значимости 5%.\n\n(a) Запишите нулевую и альтернативную гипотезы для этого теста. [2]\n\n(b) Найдите ожидаемую частоту учеников естественных наук, которые занимаются в библиотеке. Ответ дайте с 3 значащими цифрами. [2]\n\n(c) Найдите значение статистики χ²-теста. Ответ дайте с 2 знаками после запятой. [4]\n\n(d) Запишите число степеней свободы и найдите p-значение теста. p-значение дайте с 3 значащими цифрами. [3]\n\n(e) Используя p-значение, укажите с обоснованием, отклоняем ли нулевую гипотезу на уровне 5%. [3]',
    },
    markscheme: {
      en: '(a) R1: H0: the place of study and the subject group are independent. R1: H1: the place of study and the subject group are not independent (they are associated).\n(b) M1: E = 70 × 52 / 150. A1: 24.3.\n(c) M1: expected frequencies for all six cells, for example 70 × 54 / 150 = 25.2 for sciences and home. M1: sum of (O − E)² / E over all six cells. A1: correct cell contributions. A1: 11.43.\n(d) A1: degrees of freedom (2 − 1)(3 − 1) = 2. M1: p-value = P(χ² > 11.43) for 2 degrees of freedom. A1: 0.00330.\n(e) R1: reject H0 at the 5% level. R1: p = 0.00330 < 0.05, equivalently 11.43 > 5.991. R1: conclusion in context: there is evidence that the place of study depends on the subject group; science students use the library more than expected, and humanities students use home and café more.',
      ru: '(a) R1: H0: место занятий и группа предметов независимы. R1: H1: место занятий и группа предметов не независимы (связаны).\n(b) M1: E = 70 × 52 / 150. A1: 24,3.\n(c) M1: ожидаемые частоты для всех шести ячеек, например 70 × 54 / 150 = 25,2 для естественных наук и дома. M1: сумма (O − E)² / E по всем шести ячейкам. A1: верные вклады ячеек. A1: 11,43.\n(d) A1: степени свободы (2 − 1)(3 − 1) = 2. M1: p-значение = P(χ² > 11,43) при 2 степенях свободы. A1: 0,00330.\n(e) R1: на уровне 5% H0 отклоняем. R1: p = 0,00330 < 0,05, то есть 11,43 > 5,991. R1: вывод в контексте: есть свидетельства, что место занятий зависит от группы предметов; ученики естественных наук занимаются в библиотеке чаще ожидаемого, а гуманитарии чаще дома и в кафе.',
    },
    answer: '24.3; 11.43; 2; 0.00330',
    origin: 'original',
    minutes: 14,
  },
];
