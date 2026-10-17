import type { PaperGuide } from '../../src/contract/types';

// Paper guides for Maths AI HL (IB Diploma). Minutes match data/exams.json.
// Marks totals of the timed sets were computed from scripts/math-export.ts.

export const papers: PaperGuide[] = [
  {
    subject: 'math',
    paper: 'P1',
    title: {
      en: 'Paper 1: 120 minutes, 110 marks, short-answer questions on all topics, GDC allowed',
      ru: 'Работа 1 (Paper 1): 120 минут, 110 баллов, короткие вопросы по всем темам, GDC разрешён',
    },
    minutes: 120,
    marks: 110,
    structure: {
      en: 'Short questions worth 2 to 5 marks each, and over half of them are worth 3 marks. For this school mock, practise number and algebra, functions, geometry and trigonometry, and statistics and probability. Oxford chapters 1–8, 13 and 14 are in scope; calculus, matrices, Markov chains and graph theory are outside this mock.',
      ru: 'Короткие вопросы по 2–5 баллов каждый, и больше половины из них стоят 3 балла. На школьном моке тренируйте числа и алгебру, функции, геометрию и тригонометрию, статистику и вероятность. В объём входят главы Oxford 1–8, 13 и 14; исчисление, матрицы, цепи Маркова и теория графов в этот мок не входят.',
    },
    strategy: {
      en: 'Show the method, because method marks are given even when the final answer is wrong. Budget about one minute per mark and use the GDC for the numeric steps. Give answers to 3 significant figures unless the question asks for another accuracy.',
      ru: 'Показывайте ход решения: баллы за метод начисляются, даже если итоговый ответ неверен. Закладывайте около минуты на балл и используйте графический калькулятор (GDC) для численных шагов. Записывайте ответы с тремя значащими цифрами, если в задании не указана другая точность.',
    },
    criteria: {
      en: 'M marks are for a correct method, A marks for an accurate answer that follows from that method, R marks for a reason or an interpretation in words, and AG marks when you reach an answer the question gives. A wrong value carried forward can still earn later marks (follow-through).',
      ru: 'Баллы M — за верный метод, A — за точный ответ, который следует из метода, R — за обоснование или интерпретацию словами, AG — когда вы получаете ответ, указанный в задании. Если ошибка перенесена дальше по решению, последующие баллы всё равно могут быть получены (follow-through).',
    },
    commandTerms: ['Find', 'Calculate', 'Determine', 'Estimate', 'Show that', 'Write down', 'Express'],
    asked: {
      en: 'School mock: Oxford chapters 1–8, 13, 14 only. The following full-syllabus IB history is not the mock scope. Across the 16 Paper 1 papers (M21–N25, all time zones) the marks are spread widely; no topic gets more than about 4%. The most frequent: functions and modelling with standard functions (2.5), derivatives and rates of change (5.9), hypothesis tests (4.11), triangles with the sine and cosine rules (3.2), amortisation and annuities (1.7), complex numbers in polar and exponential form (1.13), the binomial distribution (4.8) and areas and volumes of revolution (5.12). Shares are from our own classification of the papers by marks, not an official statistic.',
      ru: 'Школьный мок: только главы Oxford 1–8, 13, 14. Далее — история полного курса IB, а не объём мока. В 16 работах Paper 1 (M21–N25, все часовые пояса) баллы распределены широко: ни одна тема не даёт больше примерно 4%. Чаще всего встречаются: функции и моделирование стандартными функциями (2.5), производные и скорости изменения (5.9), проверки гипотез (4.11), треугольники с теоремами синусов и косинусов (3.2), амортизация и аннуитеты (1.7), комплексные числа в полярной и показательной форме (1.13), биномиальное распределение (4.8) и площади и объёмы тел вращения (5.12). Доли посчитаны по нашей разметке пейперов по баллам, это не официальная статистика.',
    },
    timedSets: [
      {
        id: 'p1-full',
        title: { en: 'Full paper: 36 questions, 110 marks', ru: 'Полная работа: 36 вопросов, 110 баллов' },
        questionIds: [
          'q-1-1-01', 'q-1-1-02', 'q-1-2-01', 'q-1-3-02', 'q-1-4-01', 'q-1-5-01', 'q-1-5-02',
          'q-2-1-01', 'q-2-1-02', 'q-2-2-01', 'q-2-3-01', 'q-2-4-02', 'q-2-6-01', 'q-2-8-02',
          'q-3-1-01', 'q-3-2-01', 'q-3-2-02', 'q-3-3-01', 'q-3-4-01', 'q-3-6-01', 'q-3-6-02',
          'q-4-1-01', 'q-4-1-02', 'q-4-2-01', 'q-4-2-02', 'q-4-3-01', 'q-4-3-02', 'q-4-4-01', 'q-4-12-01',
          'q-4-8-01', 'q-4-9-01', 'q-4-10-01', 'q-4-11-02', 'q-4-17-01', 'q-2-10-01', 'q-3-11-01',
        ],
        minutes: 120,
      },
      {
        id: 'p1-half',
        title: { en: 'Half paper: 18 questions, 55 marks', ru: 'Половина работы: 18 вопросов, 55 баллов' },
        questionIds: [
          'q-1-1-01', 'q-1-1-02', 'q-1-2-01',
          'q-2-1-01', 'q-2-2-01', 'q-2-3-01', 'q-2-4-02',
          'q-3-1-01', 'q-3-2-01', 'q-3-2-02',
          'q-4-1-01', 'q-4-1-02', 'q-4-2-01', 'q-4-2-02',
          'q-4-8-01', 'q-4-9-01', 'q-4-10-01', 'q-4-11-02',
        ],
        minutes: 60,
      },
      {
        id: 'diagnostic',
        title: { en: 'Diagnostic: 15 questions, 45 marks (45 minutes)', ru: 'Диагностика: 15 вопросов, 45 баллов (45 минут)' },
        questionIds: [
          'diag-01', 'diag-02', 'diag-03', 'diag-04', 'diag-05', 'diag-06', 'diag-07', 'diag-08',
          'diag-09', 'diag-10', 'diag-11', 'diag-12', 'q-1-12-01', 'q-2-10-01', 'q-3-11-02',
        ],
        minutes: 45,
      },
    ],
  },
  {
    subject: 'math',
    paper: 'P2',
    title: {
      en: 'Paper 2: 120 minutes, 110 marks, extended-response questions, GDC allowed',
      ru: 'Работа 2 (Paper 2): 120 минут, 110 баллов, развёрнутые задачи, GDC разрешён',
    },
    minutes: 120,
    marks: 110,
    structure: {
      en: 'Extended-response questions of 14 to 16 marks each, with several lettered parts. Some parts need a GDC step, and others ask you to interpret a result in context. Each question is built around one topic in depth.',
      ru: 'Развёрнутые задачи по 14–16 баллов каждая, с несколькими частями, обозначенными буквами. Некоторые части требуют расчёта на GDC, а в других нужно истолковать результат в контексте задачи. Каждая задача построена вокруг одной темы в глубину.',
    },
    strategy: {
      en: 'Read the whole question first and note which parts build on earlier answers. Budget about one minute per mark, and if a part stalls, move on and return to it later. Label each answer with its part letter and state results in context, with units where the question gives them.',
      ru: 'Сначала прочитайте весь вопрос и отметьте части, которые опираются на предыдущие ответы. Закладывайте около минуты на балл; если часть застряла, переходите дальше и вернитесь к ней, когда останется время. Подписывайте каждый ответ буквой части и формулируйте результат в контексте, указывая единицы измерения, если они есть в условии.',
    },
    criteria: {
      en: 'M marks are for a correct method, A marks for accurate answers, R marks for reasoning and interpretation in context, and AG marks for an answer given in the question. Follow-through means a wrong value from an earlier part can still earn later marks.',
      ru: 'Баллы M — за верный метод, A — за точные ответы, R — за обоснование и интерпретацию в контексте, AG — за ответ, указанный в задании. Перенос ошибки (follow-through) означает, что неверное значение из предыдущей части может дать последующие баллы.',
    },
    asked: {
      en: 'School mock: Oxford chapters 1–8, 13, 14 only. The following full-syllabus IB history is not the mock scope. Across the 16 Paper 2 papers the largest single topic is eigenvalues and eigenvectors of 2 × 2 matrices (1.15), about 6% of marks, followed by graph algorithms (3.16), triangles (3.2), the binomial distribution (4.8), phase portraits of coupled linear systems (5.17), Markov chains (4.19), 3D distance, volume and surface area (3.1) and key features of graphs (2.4). Each question centres on one topic in depth. Shares are from our own classification, not an official statistic.',
      ru: 'Школьный мок: только главы Oxford 1–8, 13, 14. Далее — история полного курса IB, а не объём мока. В 16 работах Paper 2 крупнее всех одна тема: собственные значения и собственные векторы матриц 2 × 2 (1.15), около 6% баллов. Дальше идут алгоритмы на графах (3.16), треугольники (3.2), биномиальное распределение (4.8), фазовые портреты связанных линейных систем (5.17), цепи Маркова (4.19), трёхмерная геометрия: расстояние, объём и площадь поверхности (3.1) и ключевые свойства графиков (2.4). Каждая задача раскрывает одну тему глубоко. Доли — по нашей разметке, это не официальная статистика.',
    },
    commandTerms: ['Find', 'Show that', 'Write down', 'State', 'Estimate', 'Explain', 'Calculate', 'Comment', 'Interpret', 'Express', 'Justify'],
    timedSets: [
      {
        id: 'p2-full',
        title: { en: 'Set of 8 questions, 112 marks (the exam has 110)', ru: 'Набор из 8 вопросов, 112 баллов (в экзамене 110)' },
        questionIds: [
          'q-1-6-03', 'q-1-11-03', 'q-2-4-03', 'q-3-5-03', 'q-3-10-03', 'q-4-7-03', 'q-4-15-03', 'q-4-17-03',
        ],
        minutes: 120,
      },
    ],
  },
  {
    subject: 'math',
    paper: 'P3',
    title: {
      en: 'Paper 3: 75 minutes, 55 marks, investigation tasks, GDC and formula booklet allowed',
      ru: 'Работа 3 (Paper 3): 75 минут, 55 баллов, исследовательские задания, GDC и сборник формул разрешены',
    },
    minutes: 75,
    marks: 55,
    structure: {
      en: 'One or two investigation tasks of 25 to 28 marks each, set in a real-world context. Each task has several parts that build towards a conclusion stated in context.',
      ru: 'Одно или два исследовательских задания по 25–28 баллов каждое, построенных на реальном контексте. Каждое задание состоит из нескольких частей, которые ведут к выводу, сформулированному в контексте.',
    },
    strategy: {
      en: 'Read the whole task first, because later parts often use data or a model from an earlier part. Use the formula booklet for standard formulas, the GDC for data and numeric work, and state any assumption you make. End with a short conclusion in context.',
      ru: 'Сначала прочитайте задание целиком: последующие части часто используют данные или модель из предыдущих. Стандартные формулы берите из сборника формул, данные и числовые расчёты делайте на GDC, а все допущения явно указывайте. Завершайте коротким выводом в контексте задачи.',
    },
    criteria: {
      en: 'M, A and R marks work as in Papers 1 and 2, and a conclusion in context usually earns R marks for a reasoned judgement. Clear communication matters: label each part, show each method, and explain what your result means.',
      ru: 'Баллы M, A и R начисляются так же, как в работах 1 и 2, а вывод в контексте обычно даёт баллы R за обоснованное суждение. Важна ясная запись: подписывайте части, показывайте каждый метод и объясняйте, что означает результат.',
    },
    asked: {
      en: 'School mock: Oxford chapters 1–8, 13, 14 only. The following full-syllabus IB history is not the mock scope. Across the 16 Paper 3 papers the most common topics are hypothesis tests for means and correlation (4.18) and chi-squared and t-tests (4.11), together about 15% of marks. Then come differential equations in modelling (5.14), graph algorithms (3.16), correlation and linear regression (4.4), the modelling process (2.6), Euler\'s method for first-order equations (5.16) and extended models (2.9). Shares are from our own classification, not an official statistic.',
      ru: 'Школьный мок: только главы Oxford 1–8, 13, 14. Далее — история полного курса IB, а не объём мока. В 16 работах Paper 3 чаще всего встречаются проверки гипотез о средних и корреляции (4.18) и тесты хи-квадрат и t-тест (4.11): вместе около 15% баллов. Затем идут дифференциальные уравнения в моделировании (5.14), алгоритмы на графах (3.16), корреляция и линейная регрессия (4.4), процесс моделирования (2.6), метод Эйлера для уравнений первого порядка (5.16) и расширенные модели (2.9). Доли — по нашей разметке, это не официальная статистика.',
    },
    commandTerms: ['Find', 'Show that', 'Interpret', 'Write down', 'State', 'Justify'],
    timedSets: [
      {
        id: 'p3-task',
        title: { en: 'One task, 28 marks', ru: 'Одно задание, 28 баллов' },
        questionIds: ['q-p3-08'],
        minutes: 39,
      },
      {
        id: 'p3-full',
        title: { en: 'Set of two tasks, 54 marks (the exam has 55)', ru: 'Набор из двух заданий, 54 балла (в экзамене 55)' },
        questionIds: ['q-p3-08', 'q-p3-01'],
        minutes: 75,
      },
      {
        id: 'p3-set-2',
        title: { en: 'Set of two tasks, 55 marks: power model and tests', ru: 'Набор из двух заданий, 55 баллов: степенная модель и тесты' },
        questionIds: ['q-p3-07', 'q-p3-08'],
        minutes: 75,
      },
      {
        id: 'p3-set-3',
        title: { en: 'Set of two tasks, 55 marks: logistic model and canopy', ru: 'Набор из двух заданий, 55 баллов: логистическая модель и навес' },
        questionIds: ['q-p3-09', 'q-p3-10'],
        minutes: 75,
      },
    ],
  },
];
