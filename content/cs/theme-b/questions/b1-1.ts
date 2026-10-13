import type { Question } from '../../../../src/contract/types';

// Original questions for topic B1.1 Computational thinking (P2). Scenarios are invented for this portal.
// Command terms follow the textbook's list (pp. 602-603). The [1] points in each markscheme add up to the stored value.
export const questions: Question[] = [
  {
    id: 'b1-1-q01',
    subject: 'cs',
    topicIds: ['b1-1-computational-thinking'],
    paper: 'P2',
    marks: 3,
    command: 'List',
    prompt: {
      en: 'A school library is planning a new system for booking study rooms. Before any design work starts, the team writes a problem specification. List three of the six components that a problem specification must contain.',
      ru: 'Школьная библиотека планирует новую систему бронирования комнат для занятий. Прежде чем начать проектирование, команда пишет спецификацию задачи. Перечислите три из шести компонентов, которые должна содержать спецификация задачи.',
    },
    markscheme: {
      en: '[1] One correct component from the six: the statement of the problem; the constraints; the objectives and goals; the input specifications; the output specifications; the evaluation criteria. [1] A second, different component from the same list. [1] A third, different component from the same list. No explanation is needed.',
      ru: '[1] Один верный компонент из списка: формулировка задачи; ограничения; цели и конкретные показатели; спецификации входных данных; спецификации выходных данных; критерии оценки. [1] Второй, другой компонент из того же списка. [1] Третий, другой компонент из того же списка. Объяснение не требуется.',
    },
    origin: 'original',
  },
  {
    id: 'b1-1-q02',
    subject: 'cs',
    topicIds: ['b1-1-computational-thinking'],
    paper: 'P2',
    marks: 2,
    command: 'Define',
    prompt: {
      en: 'Define the following two terms used in computational thinking: (a) decomposition; (b) abstraction.',
      ru: 'Дайте определения двум терминам компьютерного мышления: (а) декомпозиция; (б) абстракция.',
    },
    markscheme: {
      en: '[1] (a) Decomposition: breaking a complex problem into smaller, manageable components. [1] (b) Abstraction: filtering out unnecessary detail to keep the essential elements of a problem in a simplified model.',
      ru: '[1] (а) Декомпозиция: разбиение сложной задачи на более мелкие, легко управляемые части. [1] (б) Абстракция: отбрасывание ненужных деталей, чтобы сохранить существенные элементы задачи в упрощённой модели.',
    },
    origin: 'original',
  },
  {
    id: 'b1-1-q03',
    subject: 'cs',
    topicIds: ['b1-1-computational-thinking'],
    paper: 'P2',
    marks: 3,
    command: 'Describe',
    prompt: {
      en: 'A bus company records the number of passengers on Route 7 every weekday morning. The data shows that Route 7 is always the busiest on Mondays and on the working day before each public holiday. Describe how pattern recognition could help the company plan extra buses for these days.',
      ru: 'Автобусная компания каждое утро в будни записывает число пассажиров на маршруте 7. Данные показывают, что маршрут 7 всегда самый загруженный по понедельникам и в рабочий день перед каждым праздником. Опишите, как распознавание закономерностей может помочь компании запланировать дополнительные автобусы на эти дни.',
    },
    markscheme: {
      en: '[1] Pattern recognition identifies the recurring trend in the data: the route is busiest on Mondays and before public holidays. [1] The trend is used to predict demand on similar days in the future. [1] A solution that works for one busy day, such as adding buses at a set time, can be reused or adapted for the other busy days.',
      ru: '[1] Распознавание закономерностей выявляет повторяющуюся тенденцию в данных: маршрут самый загруженный по понедельникам и перед праздниками. [1] Эта тенденция используется, чтобы прогнозировать спрос в похожие дни в будущем. [1] Решение, которое работает для одного загруженного дня, например добавление автобусов в определённое время, можно использовать или адаптировать для других загруженных дней.',
    },
    origin: 'original',
  },
  {
    id: 'b1-1-q04',
    subject: 'cs',
    topicIds: ['b1-1-computational-thinking'],
    paper: 'P2',
    marks: 4,
    command: 'Construct',
    prompt: {
      en: 'A bakery wants an app that predicts how many loaves to bake each morning, so that fewer loaves are thrown away. Construct one high-level objective and two specific goals linked to it. Each goal must be measurable and time-constrained.',
      ru: 'Пекарня хочет приложение, которое прогнозирует, сколько буханок печь каждое утро, чтобы выбрасывать меньше хлеба. Постройте одну высокоуровневую цель и две конкретные цели, связанные с ней. Каждая конкретная цель должна быть измеримой и ограниченной по времени.',
    },
    markscheme: {
      en: '[1] A high-level objective that is broad and directional, for example: reduce the bread the bakery throws away each day. [1] A first specific goal with a number and a deadline, for example: cut daily waste by at least 20% within three months. [1] A second specific goal that is also measurable and time-limited, for example: the daily bake plan is within 5 loaves of actual sales on at least 90% of days within six months. [1] Both goals are clearly linked to the objective, because each one measures progress towards it.',
      ru: '[1] Высокоуровневая цель широкая и задаёт направление, например: сократить хлеб, который пекарня выбрасывает каждый день. [1] Первая конкретная цель с числом и сроком, например: сократить ежедневные потери не меньше чем на 20% в течение трёх месяцев. [1] Вторая конкретная цель тоже измеримая и ограниченная по времени, например: план выпечки отличается от реальных продаж не больше чем на 5 буханок в 90% дней в течение шести месяцев. [1] Обе цели явно связаны с высокоуровневой целью, потому что каждая показывает прогресс к ней.',
    },
    origin: 'original',
  },
  {
    id: 'b1-1-q05',
    subject: 'cs',
    topicIds: ['b1-1-computational-thinking'],
    paper: 'P2',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'A school plans a gate system that records when students arrive, using their ID cards. Outline one input specification and one output specification for this system.',
      ru: 'Школа планирует систему на входе, которая фиксирует время прихода учеников по их идентификационным карточкам. Кратко опишите одну спецификацию входных данных и одну спецификацию выходных данных для этой системы.',
    },
    markscheme: {
      en: '[1] Input specification, for example: the card number as an 8-digit code read from the card, recorded together with the time of the scan. [1] Output specification, for example: a list for each class with names and arrival times, shown on a screen for the duty staff and exported as a spreadsheet each day.',
      ru: '[1] Спецификация входных данных, например: номер карты как 8-значный код, считанный с карты, вместе со временем считывания. [1] Спецификация выходных данных, например: список по каждому классу с именами и временем прихода, показанный на экране у дежурного и ежедневно экспортируемый в таблицу.',
    },
    origin: 'original',
  },
  {
    id: 'b1-1-q06',
    subject: 'cs',
    topicIds: ['b1-1-computational-thinking'],
    paper: 'P2',
    marks: 3,
    command: 'Discuss',
    prompt: {
      en: 'Discuss why a team should write evaluation criteria before it builds a solution.',
      ru: 'Обсудите, почему команда должна записать критерии оценки до того, как начнёт создавать решение.',
    },
    markscheme: {
      en: '[1] Criteria give measurable benchmarks, so the team knows what success means before it starts. [1] Criteria such as effectiveness, efficiency, accuracy, usability and maintainability cover several aspects, so the solution is judged on more than one factor. [1] Writing criteria first prevents the target from being moved to fit the finished product; a limitation is that criteria may need revising when the problem changes, which is acceptable if the change is recorded.',
      ru: '[1] Критерии задают измеримые ориентиры, поэтому команда заранее знает, что считать успехом. [1] Критерии вроде результативности, эффективности, точности, удобства и сопровождаемости охватывают несколько сторон, поэтому решение оценивается не по одному фактору. [1] Если записать критерии заранее, нельзя подогнать цель под готовый продукт; ограничение в том, что критерии иногда нужно пересматривать при изменении задачи, и это допустимо, если изменение записано.',
    },
    origin: 'original',
  },
  {
    id: 'b1-1-q07',
    subject: 'cs',
    topicIds: ['b1-1-computational-thinking'],
    paper: 'P2',
    marks: 3,
    command: 'Trace',
    prompt: {
      en: 'Trace the flowchart. Record the values of N and TOTAL after each pass through the loop in a trace table, and state the output.',
      ru: 'Проследите блок-схему. Запишите значения N и TOTAL после каждого прохода цикла в таблицу трассировки и укажите вывод.',
    },
    stimulus: {
      en: 'The flowchart is described step by step below.\n1. Start.\n2. Set TOTAL to 0 and N to 1.\n3. Decision: is N greater than 5? If yes, go to step 5. If no, go to step 4.\n4. Set TOTAL to TOTAL + N, then set N to N + 2. Return to step 3.\n5. Output TOTAL. End.',
      ru: 'Блок-схема описана по шагам ниже.\n1. Начало.\n2. Задать TOTAL равным 0, а N равным 1.\n3. Решение: больше ли N, чем 5? Если да, перейти к шагу 5. Если нет, перейти к шагу 4.\n4. Задать TOTAL равным TOTAL + N, затем задать N равным N + 2. Вернуться к шагу 3.\n5. Вывести TOTAL. Конец.',
    },
    markscheme: {
      en: '[1] Trace table with the values after each pass: pass 1: N = 3, TOTAL = 1; pass 2: N = 5, TOTAL = 4; pass 3: N = 7, TOTAL = 9. [1] The decision “N greater than 5” is false for N = 1, 3 and 5, and true for N = 7, so the loop ends after pass 3. [1] Output: 9.',
      ru: '[1] Таблица трассировки со значениями после каждого прохода: проход 1: N = 3, TOTAL = 1; проход 2: N = 5, TOTAL = 4; проход 3: N = 7, TOTAL = 9. [1] Условие «N больше 5» ложно при N = 1, 3 и 5 и истинно при N = 7, поэтому цикл заканчивается после прохода 3. [1] Вывод: 9.',
    },
    answer: '9',
    origin: 'original',
  },
  {
    id: 'b1-1-q08',
    subject: 'cs',
    topicIds: ['b1-1-computational-thinking'],
    paper: 'P2',
    marks: 4,
    command: 'Sketch',
    prompt: {
      en: 'Sketch a flowchart for an algorithm that reads a student’s test score as a whole number from 0 to 100 and outputs “PASS” if the score is 50 or more, otherwise “FAIL”. Label each symbol and flowline. If you cannot draw it, describe the same symbols in order with labelled flowlines.',
      ru: 'Набросайте блок-схему алгоритма, который считывает балл ученика за контрольную, целое число от 0 до 100, и выводит «ЗАЧЁТ», если балл 50 или больше, иначе «НЕЗАЧЁТ». Подпишите каждый символ и каждую линию потока. Если нарисовать не получается, опишите те же символы по порядку с подписанными линиями потока.',
    },
    markscheme: {
      en: '[1] Start and End (terminal) symbols. [1] Input symbol for reading the score, and output symbol for printing PASS or FAIL. [1] Decision symbol with a yes/no question, for example: is the score 50 or more? [1] Two labelled flowlines from the decision, one for yes leading to PASS and one for no leading to FAIL, with both paths reaching End.',
      ru: '[1] Символы «начало» и «конец». [1] Символ ввода для считывания балла и символ вывода для печати ЗАЧЁТ или НЕЗАЧЁТ. [1] Символ решения с вопросом «да/нет», например: балл 50 или больше? [1] Две подписанные линии потока от решения: «да» ведёт к ЗАЧЁТ, «нет» ведёт к НЕЗАЧЁТ, и обе ветви приходят к символу «конец».',
    },
    origin: 'original',
  },
  {
    id: 'b1-1-q09',
    subject: 'cs',
    topicIds: ['b1-1-computational-thinking'],
    paper: 'P2',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: 'Identify the flowchart symbol that should be used for each of the following: (a) a question with only two possible answers; (b) the point where a program receives a value from the user.',
      ru: 'Укажите символ блок-схемы, который нужно использовать в каждом из следующих случаев: (а) вопрос, у которого есть только два возможных ответа; (б) место, где программа получает значение от пользователя.',
    },
    markscheme: {
      en: '[1] (a) Decision symbol (a diamond, containing a yes/no or true/false question). [1] (b) Input/output symbol (a parallelogram).',
      ru: '[1] (а) Символ решения (ромб, внутри которого вопрос «да/нет» или «истина/ложь»). [1] (б) Символ ввода/вывода (параллелограмм).',
    },
    origin: 'original',
  },
  {
    id: 'b1-1-q10',
    subject: 'cs',
    topicIds: ['b1-1-computational-thinking'],
    paper: 'P2',
    marks: 4,
    command: 'To what extent',
    prompt: {
      en: 'To what extent is computational thinking enough on its own to solve a real-world problem, such as planning a city’s public bus network?',
      ru: 'В какой степени одного компьютерного мышления достаточно, чтобы решить реальную задачу, например спланировать городскую сеть автобусных маршрутов?',
    },
    markscheme: {
      en: '[1] A strength: the four key ideas turn a vague problem into a structured specification and then into steps a computer can follow. [1] A strength: decomposition and abstraction make a large network manageable, for example by treating stops as points and routes as links. [1] A limitation: computational thinking does not settle ethical or social trade-offs, such as which districts lose service when routes change. [1] A supported judgement on the extent, for example: enough to structure and test the problem, but not enough to decide what the city should value.',
      ru: '[1] Сильная сторона: четыре ключевые идеи превращают расплывчатую задачу в структурированную спецификацию, а затем в шаги, которые может выполнить компьютер. [1] Сильная сторона: декомпозиция и абстракция делают большую сеть управляемой, например если остановки считать точками, а маршруты связями. [1] Ограничение: компьютерное мышление не решает этических и социальных компромиссов, например какие районы потеряют сообщение при изменении маршрутов. [1] Обоснованный вывод о степени: достаточно, чтобы структурировать и проверить задачу, но недостаточно, чтобы решить, что важно для города.',
    },
    origin: 'original',
  },
];
