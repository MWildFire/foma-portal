import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-12-01',
    subject: 'math',
    topicIds: ['4-12-survey-design'],
    paper: 'P1',
    marks: 2,
    command: 'Write down',
    prompt: {
      en: 'A chi-squared goodness-of-fit test is carried out on data that have been grouped into 7 classes. A normal distribution is fitted to the data, with both its mean and its standard deviation estimated from the sample. Write down the number of degrees of freedom of the test.',
      ru: 'Тест согласия χ² проводят для данных, разбитых на 7 классов. К данным подбирают нормальное распределение, у которого и среднее, и стандартное отклонение оценены по выборке. Запишите число степеней свободы теста.',
    },
    markscheme: {
      en: 'M1: degrees of freedom = k − 1 − p, with k = 7 classes and p = 2 estimated parameters. A1: 4.',
      ru: 'M1: степени свободы = k − 1 − p при k = 7 классах и p = 2 оценённых параметрах. A1: 4.',
    },
    answer: '4',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-12-02',
    subject: 'math',
    topicIds: ['4-12-survey-design'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A questionnaire with a yes or no question is given to 60 students on two occasions, one week apart. Of the students, 30 answered yes both times, 20 answered no both times, 4 answered yes first and no second, and 6 answered no first and yes second. Assume that the two sets of answers are independent. Find the expected number of students who answered yes on both occasions, and the value of the chi-squared test statistic for this table. Give both answers to 3 significant figures.',
      ru: 'Анкету с вопросом «да или нет» дали 60 ученикам дважды, с интервалом в неделю. Из них 30 ответили «да» оба раза, 20 — «нет» оба раза, 4 ответили «да» в первый раз и «нет» во второй, а 6 — «нет» в первый раз и «да» во второй. Считайте, что два набора ответов независимы. Найдите ожидаемое число учеников, ответивших «да» в оба раза, и значение статистики χ² для этой таблицы. Оба ответа дайте с 3 значащими цифрами.',
    },
    markscheme: {
      en: 'M1: row total 34 and column total 36, so the expected number is 34 × 36 / 60 = 20.4. M1: sum of (O − E)² / E over the four cells. A1: 20.4. A1: 26.1.',
      ru: 'M1: сумма строки 34 и сумма столбца 36, значит ожидаемое число равно 34 × 36 / 60 = 20,4. M1: сумма (O − E)² / E по четырём ячейкам. A1: 20,4. A1: 26,1.',
    },
    answer: '20.4; 26.1',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-4-12-03',
    subject: 'math',
    topicIds: ['4-12-survey-design'],
    paper: 'P2',
    marks: 14,
    command: 'Determine',
    prompt: {
      en: 'A school counts the students who arrive late to their first lesson on each of 80 school days. The counts are: no late arrivals on 20 days, 1 late arrival on 26 days, 2 on 18 days, 3 on 10 days and 4 on 6 days. The school wants to know whether a Poisson distribution is a suitable model for the number of late arrivals per day.\n\n(a) Give one reason why counting the late arrivals on every school day is a more valid data-collection method than asking students to estimate how often they are late. [2]\n\n(b) Estimate the mean number of late arrivals per day. [2]\n\n(c) Using the Poisson model with the mean from part (b), find the expected number of days with exactly 4 late arrivals. Give your answer to 2 decimal places. Explain why the categories for 3 and 4 late arrivals should be combined before the test. [4]\n\n(d) Combine the categories 3 and 4 into "3 or more". Using the categories 0, 1, 2 and "3 or more", find the value of the chi-squared test statistic. Give your answer to 3 significant figures. [4]\n\n(e) Write down the number of degrees of freedom of the test. State, with a reason, whether the Poisson model should be rejected at the 5% significance level. [2]',
      ru: 'В школе считают учеников, которые опоздали на первый урок, за каждый из 80 учебных дней. Результаты: в 20 дней опозданий не было, в 26 днях — 1 опоздание, в 18 днях — 2, в 10 днях — 3 и в 6 днях — 4. Школа хочет понять, подходит ли распределение Пуассона как модель числа опозданий за день.\n\n(a) Приведите одну причину, почему подсчёт опоздавших в каждый учебный день — более валидный способ сбора данных, чем просьба к ученикам оценить, как часто они опаздывают. [2]\n\n(b) Оцените среднее число опоздавших за день. [2]\n\n(c) Используя модель Пуассона со средним из части (b), найдите ожидаемое число дней ровно с 4 опоздавшими. Ответ дайте с 2 знаками после запятой. Объясните, почему категории для 3 и 4 опоздавших нужно объединить перед тестом. [4]\n\n(d) Объедините категории 3 и 4 в «3 или больше». Используя категории 0, 1, 2 и «3 или больше», найдите значение статистики χ². Ответ дайте с 3 значащими цифрами. [4]\n\n(e) Запишите число степеней свободы теста. Укажите с обоснованием, следует ли отклонить модель Пуассона на уровне значимости 5%. [2]',
    },
    markscheme: {
      en: '(a) R1: the counts are recorded directly, which avoids the recall bias and the self-report bias of estimates. R1: the count measures the actual number of late arrivals, the variable of interest, so the method is valid.\n(b) M1: mean = (0 × 20 + 1 × 26 + 2 × 18 + 3 × 10 + 4 × 6) / 80 = 116 / 80. A1: 1.45.\n(c) M1: P(X = 4) = e^(-1.45) × 1.45^4 / 4!. A1: expected number 80 × P(X = 4) = 3.46 (2 decimal places). R1: the expected frequency 3.46 is below 5. R1: so 3 and 4 late arrivals are combined; the test needs every expected frequency to be at least 5.\n(d) M1: expected frequencies for the four categories: 18.8 (0), 27.2 (1), 19.7 (2) and 14.3 (3 or more); the observed count for 3 or more is 16 = 10 + 6. M1: sum of (O − E)² / E over the four categories. A1: correct cell contributions. A1: 0.489.\n(e) A1: degrees of freedom 4 − 1 − 1 = 2, since one parameter (the mean) is estimated. R1: 0.489 < 5.991 (p = 0.783 > 0.05), so do not reject H0; the Poisson model is consistent with the data at the 5% level.',
      ru: '(a) R1: подсчёты записываются напрямую, что исключает ошибку памяти и самооценки. R1: подсчёт измеряет фактическое число опозданий — именно ту величину, которая нас интересует, поэтому метод валиден.\n(b) M1: среднее = (0 × 20 + 1 × 26 + 2 × 18 + 3 × 10 + 4 × 6) / 80 = 116 / 80. A1: 1,45.\n(c) M1: P(X = 4) = e^(-1,45) × 1,45^4 / 4!. A1: ожидаемое число 80 × P(X = 4) = 3,46 (с 2 знаками после запятой). R1: ожидаемая частота 3,46 меньше 5. R1: поэтому 3 и 4 опоздавших объединяют; тест требует, чтобы все ожидаемые частоты были не меньше 5.\n(d) M1: ожидаемые частоты для четырёх категорий: 18,8 (0), 27,2 (1), 19,7 (2) и 14,3 (3 или больше); наблюдаемое число для «3 или больше» равно 16 = 10 + 6. M1: сумма (O − E)² / E по четырём категориям. A1: верные вклады категорий. A1: 0,489.\n(e) A1: степени свободы 4 − 1 − 1 = 2, так как один параметр (среднее) оценён по данным. R1: 0,489 < 5,991 (p = 0,783 > 0,05), поэтому H0 не отклоняем: модель Пуассона согласуется с данными на уровне 5%.',
    },
    answer: '1.45; 3.46; 0.489; 2',
    origin: 'original',
    minutes: 14,
  },
];
