import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-4-4-01',
    subject: 'math',
    topicIds: ['4-4-correlation-regression'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'The table gives the floor area x (m²) and the annual rent y (thousand AED) of eight apartments in a Dubai neighbourhood.\n\nFloor area x (m²): 45, 60, 70, 80, 95, 110, 120, 135\nAnnual rent y (thousand AED): 58, 79, 84, 101, 110, 128, 131, 150\n\nFind the equation of the regression line of y on x in the form y = ax + b. Give a and b correct to 2 decimal places.',
      ru: 'В таблице указаны площадь x (м²) и годовая аренда y (тыс. AED) восьми квартир в одном из районов Дубая.\n\nПлощадь x (м²): 45, 60, 70, 80, 95, 110, 120, 135\nГодовая аренда y (тыс. AED): 58, 79, 84, 101, 110, 128, 131, 150\n\nНайдите уравнение линии регрессии y на x в виде y = ax + b. Дайте a и b с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: linear regression on the GDC with x in one list and y in the other. A1: a = 0.98. A1: b = 17.42, so y = 0.98x + 17.42.',
      ru: 'M1: линейная регрессия на калькуляторе: x в одном списке, y в другом. A1: a = 0,98. A1: b = 17,42, то есть y = 0,98x + 17,42.',
    },
    answer: '0.98; 17.42',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-4-02',
    subject: 'math',
    topicIds: ['4-4-correlation-regression'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'Seven students recorded their attendance rate x (%) and their final grade y (%) in a course.\n\nAttendance x (%): 72, 80, 85, 88, 93, 96, 100\nFinal grade y (%): 55, 63, 62, 70, 72, 78, 84\n\n(a) Calculate Pearson\'s product-moment correlation coefficient r, correct to 3 decimal places. [2]\n\n(b) Describe the correlation between attendance and final grade. [1]',
      ru: 'Семь учеников записали свою посещаемость x (%) и итоговую оценку y (%) по курсу.\n\nПосещаемость x (%): 72, 80, 85, 88, 93, 96, 100\nИтоговая оценка y (%): 55, 63, 62, 70, 72, 78, 84\n\n(a) Вычислите коэффициент корреляции Пирсона r с точностью до 3 знаков после запятой. [2]\n\n(b) Опишите корреляцию между посещаемостью и итоговой оценкой. [1]',
    },
    markscheme: {
      en: '(a) M1: both lists entered as two-variable data on the GDC. A1: r = 0.968.\n(b) R1: strong positive correlation: students with higher attendance tend to have higher grades.',
      ru: '(a) M1: оба списка введены как двумерные данные на калькуляторе. A1: r = 0,968.\n(b) R1: сильная положительная корреляция: у учеников с большей посещаемостью, как правило, выше итоговая оценка.',
    },
    answer: '0.968',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-4-4-03',
    subject: 'math',
    topicIds: ['4-4-correlation-regression'],
    paper: 'P2',
    marks: 14,
    command: 'Calculate, Comment',
    prompt: {
      en: 'A café in Dubai records the maximum temperature x (°C) and the number of iced coffees sold y on seven days.\n\nMaximum temperature x (°C): 31, 33, 35, 36, 38, 40, 42\nIced coffees sold y: 54, 63, 66, 68, 77, 79, 84\n\nAssume that a linear model is suitable.\n\n(a) Calculate Pearson\'s product-moment correlation coefficient r. Comment on what it shows. [3]\n\n(b) Find the equation of the regression line of y on x, giving a and b correct to 2 decimal places. [3]\n\n(c) Interpret the value of a in this context. [2]\n\n(d) Estimate the number of iced coffees sold on a day when the maximum temperature is 38 °C. Give your answer correct to 1 decimal place. [3]\n\n(e) The café manager uses your regression line to predict the sales on a day when the maximum temperature is 50 °C. Comment on the reliability of this prediction. [3]',
      ru: 'Кафе в Дубае записывает максимальную температуру x (°C) и количество проданных холодных кофе y за семь дней.\n\nМаксимальная температура x (°C): 31, 33, 35, 36, 38, 40, 42\nПроданные холодные кофе y: 54, 63, 66, 68, 77, 79, 84\n\nСчитайте, что линейная модель подходит.\n\n(a) Вычислите коэффициент корреляции Пирсона r. Прокомментируйте, что он показывает. [3]\n\n(b) Найдите уравнение линии регрессии y на x, дав a и b с точностью до 2 знаков после запятой. [3]\n\n(c) Истолкуйте значение a в этом контексте. [2]\n\n(d) Оцените количество холодных кофе, проданных в день, когда максимальная температура 38 °C. Ответ дайте с точностью до 1 знака после запятой. [3]\n\n(e) Менеджер кафе использует линию регрессии, чтобы предсказать продажи в день, когда максимальная температура 50 °C. Прокомментируйте надёжность этого прогноза. [3]',
    },
    markscheme: {
      en: '(a) M1: GDC two-variable statistics with both lists. A1: r = 0.987. R1: strong positive linear correlation: hotter days go with more iced coffee sales.\n(b) M1: linear regression on the GDC. A1: a = 2.66. A1: b = −26.73, so y = 2.66x − 26.73.\n(c) R1: each extra 1 °C of maximum temperature goes with about 2.66 more iced coffees sold. R1: this is an average trend, not an exact prediction for each day.\n(d) M1: use the unrounded line y = 2.6592x - 26.7293 (or the GDC stored values).\nM1: substitute x = 38.\nA1: y = 74.3 (1 decimal place).\n(e) R1: 50 °C is outside the data range (31 to 42 °C), so this is an extrapolation. R1: the linear pattern may not continue at such high temperatures. R1: the prediction is not reliable without more data.',
      ru: '(a) M1: статистика двух переменных на калькуляторе для обоих списков. A1: r = 0,987. R1: сильная положительная линейная корреляция: более жаркие дни связаны с большими продажами холодных кофе.\n(b) M1: линейная регрессия на калькуляторе. A1: a = 2,66. A1: b = −26,73, то есть y = 2,66x − 26,73.\n(c) R1: каждый дополнительный 1 °C максимальной температуры связан примерно с 2,66 дополнительно проданными холодными кофе. R1: это средняя тенденция, а не точный прогноз для каждого дня.\n(d) M1: использовать неокруглённую прямую y = 2,6592x - 26,7293 (или значения, сохранённые в GDC).\nM1: подстановка x = 38.\nA1: y = 74,3 (с точностью до 1 знака).\n(e) R1: 50 °C лежит вне диапазона данных (от 31 до 42 °C), поэтому это экстраполяция. R1: линейная закономерность может не сохраняться при такой жаре. R1: прогноз ненадёжен без дополнительных данных.',
    },
    answer: '0.987; 2.66; -26.73; 74.3',
    origin: 'original',
    minutes: 14,
  },
];
