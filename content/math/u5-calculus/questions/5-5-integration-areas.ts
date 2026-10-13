import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-5-01',
    subject: 'math',
    topicIds: ['5-5-integration-areas'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A curve has gradient function dy/dx = 3x^2 - 4x + 1. The curve passes through the point (2, 5). Find the y-coordinate of the point on the curve where x = 3.',
      ru: 'Кривая имеет функцию градиента dy/dx = 3x^2 - 4x + 1. Кривая проходит через точку (2, 5). Найдите y-координату точки кривой при x = 3.',
    },
    markscheme: {
      en: 'M1: integrate term by term: y = x^3 - 2x^2 + x + C. M1: substitute (2, 5): 8 - 8 + 2 + C = 5, so C = 3. A1: y = x^3 - 2x^2 + x + 3. A1: at x = 3, y = 27 - 18 + 3 + 3 = 15.',
      ru: 'M1: интегрируем почленно: y = x^3 - 2x^2 + x + C. M1: подставляем (2, 5): 8 - 8 + 2 + C = 5, значит C = 3. A1: y = x^3 - 2x^2 + x + 3. A1: при x = 3 имеем y = 27 - 18 + 3 + 3 = 15.',
    },
    answer: '15',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-5-5-02',
    subject: 'math',
    topicIds: ['5-5-integration-areas'],
    paper: 'P1',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'The region R is enclosed by the curve y = 9 - x^2, the x-axis, the y-axis and the line x = 2. Calculate the area of R. Give your answer correct to 3 significant figures.',
      ru: 'Область R ограничена кривой y = 9 - x^2, осью x, осью y и прямой x = 2. Вычислите площадь области R. Ответ дайте с точностью до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: area = integral from 0 to 2 of (9 - x^2) dx. A1: antiderivative 9x - x^3/3. M1: substitute the limits: (18 - 8/3) - 0. A1: area = 15.3 (3 s.f.).',
      ru: 'M1: площадь = интеграл от 0 до 2 от (9 - x^2) dx. A1: первообразная 9x - x^3/3. M1: подставляем пределы: (18 - 8/3) - 0. A1: площадь = 15,3 (3 значащие цифры).',
    },
    answer: '15.3',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-5-5-03',
    subject: 'math',
    topicIds: ['5-5-integration-areas'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'Water flows into a tank at a rate of R(t) = 0.6t^2 - 3t + 12 litres per minute, for 0 ≤ t ≤ 10, where t is the time in minutes. At t = 0 the tank contains 50 litres.\n\n(a) Find the volume of water that flows into the tank in the first 10 minutes. [3]\n\n(b) Find the volume of water in the tank after 4 minutes. [4]\n\n(c) Find the time, in minutes, when the tank contains 100 litres. Give your answer correct to 3 significant figures. [3]\n\n(d) Explain what the area under the graph of R between t = 0 and t = 10 represents. [2]\n\n(e) State one reason why this model of the inflow rate may not be reliable over a longer period. [2]',
      ru: 'В резервуар поступает вода со скоростью R(t) = 0,6t^2 - 3t + 12 литров в минуту при 0 ≤ t ≤ 10, где t — время в минутах. В момент t = 0 в резервуаре 50 литров.\n\n(a) Найдите объём воды, поступившей в резервуар за первые 10 минут. [3]\n\n(b) Найдите объём воды в резервуаре через 4 минуты. [4]\n\n(c) Найдите время в минутах, когда в резервуаре будет 100 литров. Ответ дайте с точностью до 3 значащих цифр. [3]\n\n(d) Объясните, что представляет собой площадь под графиком R между t = 0 и t = 10. [2]\n\n(e) Назовите одну причину, по которой эта модель скорости притока может быть ненадёжной на более длительном промежутке времени. [2]',
    },
    markscheme: {
      en: '(a) M1: volume = integral from 0 to 10 of R(t) dt. A1: = [0.2t^3 - 1.5t^2 + 12t] from 0 to 10. A1: = 200 - 150 + 120 = 170 litres.\n(b) M1: V(t) = 0.2t^3 - 1.5t^2 + 12t + C. A1: V(0) = 50 gives C = 50. M1: V(4) = 0.2(4)^3 - 1.5(4)^2 + 12(4) + 50. A1: V(4) = 86.8 litres.\n(c) M1: solve 0.2t^3 - 1.5t^2 + 12t + 50 = 100. A1: t = 5.2030... from a numerical solver; this is the only solution for 0 ≤ t ≤ 10 because R(t) > 0. A1: t = 5.20 minutes (3 s.f.).\n(d) R1: the area is the total volume of water (in litres) that flows in from t = 0 to t = 10, because R(t) is a rate in litres per minute. R1: the area is positive because R(t) > 0 for all t.\n(e) R1: the inflow rate may change in reality, for example if the supply is switched off or the pressure varies. R1: a valid reason linked to the context.',
      ru: '(a) M1: объём = интеграл от 0 до 10 от R(t) dt. A1: = [0,2t^3 - 1,5t^2 + 12t] от 0 до 10. A1: = 200 - 150 + 120 = 170 литров.\n(b) M1: V(t) = 0,2t^3 - 1,5t^2 + 12t + C. A1: V(0) = 50 даёт C = 50. M1: V(4) = 0,2(4)^3 - 1,5(4)^2 + 12(4) + 50. A1: V(4) = 86,8 литра.\n(c) M1: решаем 0,2t^3 - 1,5t^2 + 12t + 50 = 100. A1: t = 5,2030... с помощью численного решения; это единственное решение при 0 ≤ t ≤ 10, так как R(t) > 0. A1: t = 5,20 минуты (3 значащие цифры).\n(d) R1: площадь — это полный объём воды (в литрах), поступивший от t = 0 до t = 10, так как R(t) — скорость в литрах в минуту. R1: площадь положительна, потому что R(t) > 0 при всех t.\n(e) R1: скорость притока в действительности может меняться, например если подачу отключат или давление изменится. R1: верная причина, связанная с контекстом.',
    },
    answer: '170; 86.8; 5.20',
    origin: 'original',
    minutes: 14,
  },
];
