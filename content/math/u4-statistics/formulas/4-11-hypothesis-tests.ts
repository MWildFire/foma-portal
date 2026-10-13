import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'chi-squared-statistic',
    tex: '\\chi^{2}=\\sum\\dfrac{(O-E)^{2}}{E}',
    name: { en: 'Chi-squared test statistic', ru: 'Статистика χ² (chi-squared statistic)' },
    meaning: {
      en: 'Sum over all cells of (observed − expected) squared, divided by the expected frequency. Large values show that the data differ from what H0 predicts.',
      ru: 'Сумма по всем ячейкам величины (наблюдаемое − ожидаемое)², делённой на ожидаемую частоту. Большие значения означают, что данные расходятся с предсказанием H0.',
    },
    when: {
      en: 'After the expected frequencies have been found, for a test of independence or of goodness of fit.',
      ru: 'После нахождения ожидаемых частот, для проверки независимости или согласия.',
    },
    syllabus: '4.11',
    inBooklet: false,
    example: {
      en: 'For the cell with O = 28 and E = 25: (28 − 25)² / 25 = 0.36.',
      ru: 'Для ячейки с O = 28 и E = 25: (28 − 25)² / 25 = 0,36.',
    },
  },
  {
    id: 'expected-frequency-independence',
    tex: 'E_{ij}=\\dfrac{R_i\\,C_j}{N}',
    name: { en: 'Expected frequency under independence', ru: 'Ожидаемая частота при независимости' },
    meaning: {
      en: 'Expected count in row i and column j if the two classifications are independent: row total times column total, divided by the grand total N.',
      ru: 'Ожидаемое число в строке i и столбце j, если классификации независимы: сумма строки умножить на сумму столбца и разделить на общий итог N.',
    },
    when: {
      en: 'For each cell of a contingency table, before the chi-squared statistic is calculated.',
      ru: 'Для каждой ячейки таблицы сопряжённости, до вычисления статистики χ².',
    },
    syllabus: '4.11',
    inBooklet: false,
    example: {
      en: 'IB1 and bus: E = 60 × 50 / 120 = 25.',
      ru: 'IB1 и автобус: E = 60 × 50 / 120 = 25.',
    },
  },
  {
    id: 'df-contingency-table',
    tex: '\\nu=(r-1)(c-1)',
    name: { en: 'Degrees of freedom for a contingency table', ru: 'Степени свободы таблицы сопряжённости' },
    meaning: {
      en: 'For a table with r rows and c columns. The row and column totals fix the remaining cell values.',
      ru: 'Для таблицы из r строк и c столбцов. Итоги по строкам и столбцам фиксируют значения остальных ячеек.',
    },
    when: {
      en: 'Chi-squared test of independence, to find the critical value or the p-value.',
      ru: 'Проверка независимости по χ², для нахождения критического значения или p-значения.',
    },
    syllabus: '4.11',
    inBooklet: false,
    example: {
      en: 'A table with 2 rows and 3 columns has (2 − 1)(3 − 1) = 2 degrees of freedom.',
      ru: 'Таблица из 2 строк и 3 столбцов имеет (2 − 1)(3 − 1) = 2 степени свободы.',
    },
  },
  {
    id: 't-statistic-one-sample',
    tex: 't=\\dfrac{\\bar{x}-\\mu_{0}}{s/\\sqrt{n}},\\quad \\nu=n-1',
    name: { en: 'One-sample t statistic', ru: 'Статистика t для одной выборки' },
    meaning: {
      en: 'Distance of the sample mean from the hypothesised mean μ0, measured in estimated standard errors, when the population standard deviation is unknown.',
      ru: 'Расстояние выборочного среднего от гипотетического среднего μ0 в оценённых стандартных ошибках, когда стандартное отклонение генеральной совокупности неизвестно.',
    },
    when: {
      en: 'Testing a claim about a population mean from a sample of size n. The t-distribution with n − 1 degrees of freedom is used.',
      ru: 'Проверка утверждения о среднем генеральной совокупности по выборке объёма n. Используется t-распределение с n − 1 степенями свободы.',
    },
    syllabus: '4.11',
    inBooklet: false,
    example: {
      en: 'With sample mean 52, s = 6, n = 15 and μ0 = 50: t = (52 − 50) / (6 / √15) = 1.29 to 3 significant figures.',
      ru: 'При выборочном среднем 52, s = 6, n = 15 и μ0 = 50: t = (52 − 50) / (6 / √15) = 1,29 (с 3 значащими цифрами).',
    },
  },
];
