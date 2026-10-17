import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-2-6-01',
    subject: 'math',
    topicIds: ['2-6-modelling-process'],
    paper: 'P1',
    marks: 3,
    command: 'Find, Predict',
    prompt: {
      en: 'For an illustrative dataset, a hypothetical café in Dubai Marina records its monthly sales S, in thousands of AED, for the first six months of a year, where t = 1 is January. The data are t = 1, 2, 3, 4, 5, 6 and S = 41.2, 43.5, 44.1, 47.0, 48.6, 50.4. Use technology to find the least-squares line S = mt + c. Give m and c to 2 decimal places. Then predict the sales for t = 9 (September), giving your answer to 2 decimal places. Use unrounded values in your working.',
      ru: 'В учебном наборе данных условное кафе в районе Дубай-Марина ведёт учёт месячных продаж S в тысячах AED за первые шесть месяцев года, где t = 1 соответствует январю. Данные: t = 1, 2, 3, 4, 5, 6 и S = 41,2; 43,5; 44,1; 47,0; 48,6; 50,4. С помощью калькулятора найдите прямую наименьших квадратов S = mt + c. Значения m и c дайте с точностью до 2 знаков после запятой. Затем предскажите продажи при t = 9 (сентябрь) с точностью до 2 знаков после запятой. В вычислениях используйте неокруглённые значения.',
    },
    markscheme: {
      en: 'M1: a linear regression of S on t with technology.\nA1: m = 1.83 and c = 39.38, so S = 1.83t + 39.38.\nA1: S(9) = 55.89, from unrounded values.',
      ru: 'M1: линейная регрессия S по t с помощью калькулятора.\nA1: m = 1,83 и c = 39,38, то есть S = 1,83t + 39,38.\nA1: S(9) = 55,89, по неокруглённым значениям.',
    },
    answer: '1.83; 39.38; 55.89',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-2-6-02',
    subject: 'math',
    topicIds: ['2-6-modelling-process'],
    paper: 'P1',
    marks: 5,
    command: 'Find',
    prompt: {
      en: 'An illustrative linear model for the average speed v, in km/h, on a Dubai highway during the morning peak is v = 110 - 1.8n, where n is the number of vehicles per hour, in thousands, for 10 ≤ n ≤ 40. (a) At n = 30 the observed average speed is 57.3 km/h. Find the residual, observed minus predicted, to 1 decimal place. (b) For the algebraic extension beyond the stated domain, find n at which v=0, giving your answer to 2 decimal places. (c) Comment on whether the model is reasonable for values of n above 61.',
      ru: 'Учебная линейная модель средней скорости v (км/ч) на шоссе в Дубае в утренний час пик: v = 110 - 1,8n, где n — число автомобилей в час в тысячах, при 10 ≤ n ≤ 40. (a) При n = 30 наблюдаемая средняя скорость равна 57,3 км/ч. Найдите остаток (наблюдаемое минус предсказанное) с точностью до 1 знака после запятой. (b) Для алгебраического продолжения за пределы указанной области найдите n, при котором v=0; ответ дайте с точностью до 2 знаков после запятой. (c) Прокомментируйте, разумна ли модель при значениях n выше 61.',
    },
    markscheme: {
      en: '(a) M1: predicted speed v = 110 - 1.8 × 30 = 56.0 km/h. A1: residual = 57.3 - 56.0 = 1.3 km/h.\n(b) M1: solve 110 - 1.8n = 0. A1: n = 61.11.\n(c) R1: n = 61.11 is far outside the stated domain 10 ≤ n ≤ 40, so using the line there is an extrapolation. For n>550/9 (approximately 61.111...) the line would predict negative speeds, which is not reasonable.',
      ru: '(a) M1: предсказанная скорость v = 110 - 1,8 × 30 = 56,0 км/ч. A1: остаток = 57,3 - 56,0 = 1,3 км/ч.\n(b) M1: решить 110 - 1,8n = 0. A1: n = 61,11.\n(c) R1: n = 61,11 далеко за пределами указанной области 10 ≤ n ≤ 40, поэтому использовать прямую там — экстраполяция. При n>550/9 (приближённо 61,111...) прямая давала бы отрицательные скорости, что неразумно.',
    },
    answer: '1.3; 61.11',
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'q-2-6-03',
    subject: 'math',
    topicIds: ['2-6-modelling-process'],
    paper: 'P2',
    marks: 14,
    command: 'Calculate, Comment',
    prompt: {
      en: 'An illustrative dataset gives the population P, in thousands, of a hypothetical residential district in Dubai each year, with t = 0 for 2020: P = 118, 127, 137, 148 and 160 for t = 0, 1, 2, 3 and 4. Use an exponential model $P=k\\times a^t$. Retain unrounded regression parameters in all later calculations.\n\n(a) Calculate the ratios P(1)/P(0) and P(4)/P(3), each to 3 decimal places. Comment on whether an exponential model is appropriate. [3]\n\n(b) Use exponential regression to find k, giving it to 4 significant figures, and a, giving it to 3 decimal places. [3]\n\n(c) Use the model to predict the population in 2030 (t = 10), to the nearest thousand. [2]\n\n(d) Find the least integer value of t for which the model predicts a population greater than 300 thousand. [3]\n\n(e) The planning limit for the district is 300 thousand. Comment on whether it is reasonable to use this model for the whole period from 2030 onwards. [3]',
      ru: 'Учебный набор данных задаёт численность P (в тысячах) условного жилого района в Дубае по годам, при t = 0 для 2020 года: P = 118, 127, 137, 148 и 160 при t = 0, 1, 2, 3 и 4. Используйте показательную модель $P=k\\times a^t$. В дальнейших вычислениях сохраняйте неокруглённые параметры регрессии.\n\n(a) Вычислите отношения P(1)/P(0) и P(4)/P(3) с точностью до 3 знаков после запятой. Прокомментируйте, подходит ли экспоненциальная модель. [3]\n\n(b) С помощью экспоненциальной регрессии найдите k с точностью до 4 значащих цифр и a с точностью до 3 знаков после запятой. [3]\n\n(c) Используйте модель, чтобы предсказать численность населения в 2030 году (t = 10), с точностью до тысячи. [2]\n\n(d) Найдите наименьшее целое значение t, при котором модель предсказывает численность больше 300 тысяч. [3]\n\n(e) Предельная численность района по плану — 300 тысяч. Прокомментируйте, разумно ли использовать эту модель для всего периода начиная с 2030 года. [3]',
    },
    markscheme: {
      en: '(a) M1: divide successive values, for example 127/118 and 160/148. A1: 1.076 and 1.081. R1: the ratios are almost equal (about 1.08), which supports considering a constant-growth-factor model for these supplied data; it does not validate indefinite extrapolation.\n(b) M1: exponential regression of P on t with technology. A1: k = 117.8 (4 significant figures). A1: a = 1.079 (3 decimal places).\n(c) M1: using k≈117.8069221507 and a≈1.0791787734, P(10)≈252.408953. A1: P = 252 thousand, so the 2030 prediction is 252 thousand.\n(d) M1: use unrounded k,a to solve k a^t>300, giving t>ln(300/k)/ln(a)≈12.266812. A1: check P(12)<300<P(13). A1: the least integer value is 13.\n(e) R1: the model is fitted to only five years of data, so it says little about the next decade. R1: a growth rate of about 8% a year cannot continue indefinitely, because land and infrastructure limit growth. R1: the model reaches the 300 thousand limit inside the forecast period, so it must be checked and revised before it is used for planning.',
      ru: '(a) M1: деление последовательных значений, например 127/118 и 160/148. A1: 1,076 и 1,081. R1: отношения почти равны (около 1,08), что поддерживает рассмотрение постоянного множителя роста на этих исходных данных, но не подтверждает неограниченную экстраполяцию.\n(b) M1: экспоненциальная регрессия P по t с помощью калькулятора. A1: k = 117,8 (4 значащие цифры). A1: a = 1,079 (3 знака после запятой).\n(c) M1: при k≈117,8069221507 и a≈1,0791787734 получаем P(10)≈252,408953. A1: P = 252 тысячи, то есть прогноз на 2030 год — 252 тысячи.\n(d) M1: по неокруглённым k,a решить k a^t>300: t>ln(300/k)/ln(a)≈12,266812. A1: проверить P(12)<300<P(13). A1: наименьшее целое значение — 13.\n(e) R1: модель подогнана только по пяти годам данных, поэтому она мало говорит о следующем десятилетии. R1: рост примерно на 8% в год не может продолжаться бесконечно, потому что земля и инфраструктура ограничивают рост. R1: модель достигает предела 300 тысяч внутри прогнозного периода, поэтому перед использованием для планирования её нужно проверить и пересмотреть.',
    },
    answer: '1.076; 1.081; 117.8; 1.079; 252; 13',
    origin: 'original',
    minutes: 14,
  },
];
