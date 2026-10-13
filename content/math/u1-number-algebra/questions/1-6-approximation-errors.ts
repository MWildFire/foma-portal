import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-6-01',
    subject: 'math',
    topicIds: ['1-6-approximation-errors'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'The mass of a parcel is recorded as 2.4 kg, correct to 1 decimal place. Find the lower and upper bounds of the mass of one parcel, and the lower and upper bounds of the total mass of six such parcels. Give each answer to 2 decimal places.',
      ru: 'Масса посылки записана как 2,4 кг с точностью до 1 знака после запятой. Найдите нижнюю и верхнюю границы массы одной посылки, а также нижнюю и верхнюю границы общей массы шести таких посылок. Каждый ответ запишите с 2 знаками после запятой.',
    },
    markscheme: {
      en: 'M1: one parcel: 2.4 − 0.05 = 2.35 and 2.4 + 0.05 = 2.45. M1: six parcels: 6 × 2.35 and 6 × 2.45. A1: 2.35 and 2.45. A1: 14.10 and 14.70 (lower and upper bounds, 2 decimal places).',
      ru: 'M1: одна посылка: 2,4 − 0,05 = 2,35 и 2,4 + 0,05 = 2,45. M1: шесть посылок: 6 × 2,35 и 6 × 2,45. A1: 2,35 и 2,45. A1: 14,10 и 14,70 (нижняя и верхняя границы, 2 знака после запятой).',
    },
    answer: '2.35; 2.45; 14.10; 14.70',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-6-02',
    subject: 'math',
    topicIds: ['1-6-approximation-errors'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'A shelf is labelled as 1.20 m wide, but its actual width is 1.15 m. Calculate the percentage error in the label. Give your answer correct to 2 decimal places.',
      ru: 'На полке написано, что её ширина 1,20 м, но фактическая ширина составляет 1,15 м. Вычислите процентную погрешность этой надписи. Ответ запишите с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: the difference between the label and the actual width, as a positive number, |1.20 − 1.15|. M1: divide by the exact value 1.15 and multiply by 100. A1: 4.35 (correct to 2 decimal places).',
      ru: 'M1: модуль разности надписи и фактической ширины, |1,20 − 1,15|. M1: разделить на точное значение 1,15 и умножить на 100. A1: 4,35 (с точностью до 2 знаков после запятой).',
    },
    answer: '4.35',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-1-6-03',
    subject: 'math',
    topicIds: ['1-6-approximation-errors'],
    paper: 'P2',
    marks: 14,
    command: 'Write down',
    prompt: {
      en: 'A rectangular garden plot is measured as 12.4 m long and 8.6 m wide, each correct to 1 decimal place. Its area is calculated as 12.4 × 8.6 = 106.64 m².\n\n(a) Write down the lower and upper bounds of the length and of the width. [2]\n\n(b) Find the lower and upper bounds of the area, giving each answer to 2 decimal places. [3]\n\n(c) Estimate the area by rounding each measurement to 1 significant figure. Hence find the percentage error of this estimate compared with the calculated area of 106.64 m², giving the percentage error to 2 decimal places. [4]\n\n(d) Comment on whether the area can be given as 107 m² correct to 3 significant figures, using your bounds from part (b). [3]\n\n(e) Suggest one way of reducing the uncertainty in the calculated area. [2]',
      ru: 'Прямоугольный участок сада измерен: длина 12,4 м и ширина 8,6 м, каждая величина указана с точностью до 1 знака после запятой. Его площадь вычислена как 12,4 × 8,6 = 106,64 м².\n\n(a) Запишите нижнюю и верхнюю границы длины и ширины. [2]\n\n(b) Найдите нижнюю и верхнюю границы площади; каждый ответ запишите с 2 знаками после запятой. [3]\n\n(c) Оцените площадь, округлив каждое измерение до одной значащей цифры. Затем найдите процентную погрешность этой оценки по сравнению с вычисленной площадью 106,64 м², ответ запишите с 2 знаками после запятой. [4]\n\n(d) Прокомментируйте, можно ли записать площадь как 107 м² с точностью до 3 значащих цифр, используя границы из части (b). [3]\n\n(e) Предложите один способ уменьшить неопределённость вычисленной площади. [2]',
    },
    markscheme: {
      en: '(a) A1: length 12.35 and 12.45. A1: width 8.55 and 8.65 (lower and upper bounds).\n(b) M1: lower bound 12.35 × 8.55 and upper bound 12.45 × 8.65. A1: lower bound 105.59. A1: upper bound 107.69.\n(c) M1: the estimate is the product of the two measurements rounded to 1 significant figure. A1: estimate 90. M1: percentage error = |90 − 106.64| / 106.64 × 100. A1: 15.60 (correct to 2 decimal places).\n(d) R1: the bounds from part (b) round to different values at 3 significant figures, so the third significant figure is not certain. R1: therefore 107 m² cannot be guaranteed. A1: a clear conclusion that uses the bounds.\n(e) R1: measuring each side more precisely, for example to the nearest centimetre, narrows the bounds. A1: a valid suggestion.',
      ru: '(a) A1: длина 12,35 и 12,45. A1: ширина 8,55 и 8,65 (нижняя и верхняя границы).\n(b) M1: нижняя граница 12,35 × 8,55 и верхняя граница 12,45 × 8,65. A1: нижняя граница 105,59. A1: верхняя граница 107,69.\n(c) M1: оценка — произведение двух измерений, округлённых до одной значащей цифры. A1: оценка 90. M1: процентная погрешность = |90 − 106,64| / 106,64 × 100. A1: 15,60 (с точностью до 2 знаков после запятой).\n(d) R1: границы из части (b) при округлении до 3 значащих цифр дают разные значения, поэтому третья значащая цифра не определена. R1: значит, 107 м² нельзя гарантировать. A1: ясный вывод с опорой на границы.\n(e) R1: более точное измерение каждой стороны, например до сантиметра, сужает границы. A1: верное предложение.',
    },
    answer: '12.35; 12.45; 8.55; 8.65; 105.59; 107.69; 90; 15.60',
    origin: 'original',
    minutes: 14,
  },
];
