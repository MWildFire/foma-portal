import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-1-01',
    subject: 'math',
    topicIds: ['1-1-standard-form'],
    paper: 'P1',
    marks: 3,
    command: 'Express',
    prompt: {
      en: 'A virus has a diameter of 0.000 000 12 metres. Express this diameter in standard form a × 10^k, where 1 ≤ a < 10.',
      ru: 'Диаметр вируса составляет 0,000 000 12 м. Запишите этот диаметр в стандартном виде a × 10^k, где 1 ≤ a < 10.',
    },
    markscheme: {
      en: 'M1: moves the decimal point 7 places to the right, so 0.000 000 12 = 1.2 × 10^k. A1: a = 1.2. A1: k = -7, so the diameter is 1.2 × 10^(-7) m.',
      ru: 'M1: сдвиг десятичной запятой на 7 знаков вправо, поэтому 0,000 000 12 = 1,2 × 10^k. A1: a = 1,2. A1: k = -7, то есть диаметр равен 1,2 × 10^(-7) м.',
    },
    answer: '1.2; -7',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-1-1-02',
    subject: 'math',
    topicIds: ['1-1-standard-form'],
    paper: 'P1',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'The mass of the Earth is 5.97 × 10^24 kg and the mass of the Moon is 7.35 × 10^22 kg. Calculate the ratio mass of the Earth : mass of the Moon. Give your answer in standard form, correct to 3 significant figures.',
      ru: 'Масса Земли равна 5,97 × 10^24 кг, а масса Луны равна 7,35 × 10^22 кг. Вычислите отношение массы Земли к массе Луны. Запишите ответ в стандартном виде с точностью до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: ratio = 5.97 × 10^24 ÷ (7.35 × 10^22) = 81.22 (unrounded 81.2245). A1: a = 8.12. A1: k = 1, so the ratio is 8.12 × 10^1, about 81 to 1.',
      ru: 'M1: отношение = 5,97 × 10^24 ÷ (7,35 × 10^22) = 81,22 (без округления 81,2245). A1: a = 8,12. A1: k = 1, то есть отношение равно 8,12 × 10^1, примерно 81 к 1.',
    },
    answer: '8.12; 1',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-1-03',
    subject: 'math',
    topicIds: ['1-1-standard-form'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'The distance from the Sun to the Earth is about 1.496 × 10^11 m. Light travels at 3.00 × 10^8 m/s.\n\n(a) Find the time, in seconds, that light takes to travel from the Sun to the Earth. Give your answer in standard form, correct to 3 significant figures. [3]\n\n(b) A spacecraft travels at a constant speed of 1.2 × 10^4 m/s. Find the time, in days, that the spacecraft takes to travel the same distance. Give your answer correct to 1 decimal place. [4]\n\n(c) Find how many times longer the spacecraft\'s journey takes than the journey of the light. Give your answer in standard form, correct to 3 significant figures. [4]\n\n(d) The distance from the Sun to the Earth changes slightly during the year, because the Earth\'s orbit is not a circle. Explain why the time in part (a) is a model value rather than an exact time. [3]',
      ru: 'Расстояние от Солнца до Земли составляет примерно 1,496 × 10^11 м. Свет распространяется со скоростью 3,00 × 10^8 м/с.\n\n(a) Найдите время в секундах, за которое свет проходит путь от Солнца до Земли. Ответ запишите в стандартном виде с точностью до 3 значащих цифр. [3]\n\n(b) Космический аппарат движется с постоянной скоростью 1,2 × 10^4 м/с. Найдите время в сутках, за которое он пройдёт то же расстояние. Ответ дайте с точностью до 1 знака после запятой. [4]\n\n(c) Найдите, во сколько раз путешествие аппарата длится дольше, чем путешествие света. Ответ запишите в стандартном виде с точностью до 3 значащих цифр. [4]\n\n(d) Расстояние от Солнца до Земли немного меняется в течение года, потому что орбита Земли не является окружностью. Объясните, почему время в части (a) является модельным значением, а не точным временем. [3]',
    },
    markscheme: {
      en: '(a) M1: time = distance ÷ speed = 1.496 × 10^11 ÷ (3.00 × 10^8). A1: 498.67 s. A1: 4.99 × 10^2 s (3 significant figures).\n(b) M1: time = 1.496 × 10^11 ÷ (1.2 × 10^4). A1: 1.2467 × 10^7 s. M1: divides by 86 400 to convert seconds to days. A1: 144.3 days.\n(c) M1: ratio = spacecraft time ÷ light time = 1.2467 × 10^7 ÷ 498.67. A1: 25 000. A1: 2.50 × 10^4 (3 significant figures). R1: the spacecraft journey takes about 2.50 × 10^4 times as long as the light journey.\n(d) R1: the distance from the Sun to the Earth varies during the year (from about 1.471 × 10^11 m to 1.521 × 10^11 m), so the light time also varies. R1: 1.496 × 10^11 m is a mean distance used as a model. A1: a valid comment that the answer to (a) is an estimate, not an exact time.',
      ru: '(a) M1: время = расстояние ÷ скорость = 1,496 × 10^11 ÷ (3,00 × 10^8). A1: 498,67 с. A1: 4,99 × 10^2 с (3 значащие цифры).\n(b) M1: время = 1,496 × 10^11 ÷ (1,2 × 10^4). A1: 1,2467 × 10^7 с. M1: деление на 86 400 для перевода секунд в сутки. A1: 144,3 суток.\n(c) M1: отношение = время аппарата ÷ время света = 1,2467 × 10^7 ÷ 498,67. A1: 25 000. A1: 2,50 × 10^4 (3 значащие цифры). R1: путь аппарата занимает примерно в 2,50 × 10^4 раза больше времени, чем путь света.\n(d) R1: расстояние от Солнца до Земли меняется в течение года (примерно от 1,471 × 10^11 м до 1,521 × 10^11 м), поэтому меняется и время света. R1: 1,496 × 10^11 м — среднее расстояние, которое используется как модель. A1: верный вывод, что ответ в части (a) является оценкой, а не точным временем.',
    },
    answer: '4.99; 2; 144.3; 2.50; 4',
    origin: 'original',
    minutes: 14,
  },
];
