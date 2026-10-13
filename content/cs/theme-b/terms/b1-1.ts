import type { Term } from '../../../../src/contract/types';

// Topic B1.1 Computational thinking (P2). Definitions are in our own words, based on the key term and the in-text
// definitions in the Oxford IB DP Computer Science Course Companion (2025), pp. 317-331.
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';

export const terms: Term[] = [
  {
    id: 'b1-1-computational-thinking',
    term: { en: 'Computational thinking', ru: 'компьютерное мышление (computational thinking)' },
    def: {
      en: 'A framework for thinking about problems so that their solutions can be expressed as computational steps. It rests on four key ideas: abstraction, algorithmic design, decomposition and pattern recognition.',
      ru: 'Способ мышления о задачах, при котором их решения можно выразить в виде вычислительных шагов. Он опирается на четыре ключевые идеи: абстракцию, алгоритмическое проектирование, декомпозицию и распознавание закономерностей.',
    },
    syllabus: 'B1.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B1.1, p. 317' },
    example: {
      en: 'A delivery company plans driver routes by splitting the city into zones, ignoring the colour of its vans, and reusing a route that worked well last week.',
      ru: 'Компания доставки планирует маршруты водителей: делит город на зоны, не учитывает цвет фургонов и повторно использует маршрут, который хорошо сработал на прошлой неделе.',
    },
    pitfall: {
      en: 'Computational thinking is a way of thinking, not only programming. A solution can be designed as a list of steps or a flowchart before any code exists.',
      ru: 'Компьютерное мышление — это способ мышления, а не только программирование. Решение можно спроектировать в виде списка шагов или блок-схемы ещё до того, как появится код.',
    },
  },
  {
    id: 'b1-1-problem-specification',
    term: { en: 'Problem specification', ru: 'спецификация задачи (problem specification)' },
    def: {
      en: 'A written description of a problem, prepared before any solution is designed. It has six parts: a statement of the problem, the constraints and limitations, the objectives and goals, the input specifications, the output specifications and the evaluation criteria.',
      ru: 'Письменное описание задачи, которое готовят до проектирования решения. Оно состоит из шести частей: формулировки задачи, ограничений, целей и конкретных показателей, спецификаций входных данных, спецификаций выходных данных и критериев оценки.',
    },
    syllabus: 'B1.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B1.1, p. 317' },
    example: {
      en: 'A school library wants a study-room booking system. Its specification states the problem, the budget limit, the goal of stopping double bookings, the booking data that goes in, the booking list that comes out, and how success will be judged.',
      ru: 'Школьная библиотека хочет систему бронирования комнат для занятий. Её спецификация описывает задачу, лимит бюджета, цель — прекратить двойные бронирования, данные о бронях на входе, список броней на выходе и то, как будет оцениваться успех.',
    },
    pitfall: {
      en: 'A problem specification says what the solution must do and how success is measured. It does not yet choose a programming language or an algorithm.',
      ru: 'Спецификация задачи описывает, что должно делать решение и как измеряется успех. Она ещё не выбирает язык программирования и не определяет алгоритм.',
    },
  },
  {
    id: 'b1-1-objectives-and-goals',
    term: { en: 'Objectives and goals', ru: 'задачи и цели (objectives and goals)' },
    def: {
      en: 'High-level objectives are the broad, directional results a solution should achieve. Specific goals are measurable, usually time-limited targets that act as milestones towards an objective, and each one must be linked to an objective.',
      ru: 'Задачи (objectives) — широкие результаты, которые задают направление и которых должно достичь решение. Цели (goals) — измеримые, обычно ограниченные по времени значения, которые служат вехами на пути к задаче; каждая цель связана с одной из задач.',
    },
    syllabus: 'B1.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B1.1, p. 318' },
    example: {
      en: 'Objective: make the support line faster for callers. Goal: average waiting time under 5 minutes within three months. The goal is measurable and time-limited, and it shows progress on the objective.',
      ru: 'Цель: сделать линию поддержки быстрее для звонящих. Конкретный показатель: среднее время ожидания меньше 5 минут в течение трёх месяцев. Показатель измеримый, ограничен по времени и показывает прогресс в достижении цели.',
    },
    pitfall: {
      en: 'A goal such as “improve customer happiness” cannot be checked. A goal needs a number and a deadline, otherwise nobody can tell whether it was met.',
      ru: 'Показатель вроде «повысить довольство клиентов» нельзя проверить. Нужны число и срок, иначе никто не скажет, достигнут ли он.',
    },
  },
  {
    id: 'b1-1-input-specification',
    term: { en: 'Input specification', ru: 'спецификация входных данных (input specification)' },
    def: {
      en: 'A description of the format, data type and expected characteristics of the data a solution receives, so that the data can be processed correctly and the solution stays compatible with it.',
      ru: 'Описание формата, типа данных и ожидаемых характеристик данных, которые получает решение, чтобы эти данные обрабатывались правильно и решение оставалось с ними совместимым.',
    },
    syllabus: 'B1.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B1.1, p. 319' },
    example: {
      en: 'For a school canteen app, each order is a student ID of 8 digits, a dish code from a fixed list and a time stamp. An order with a 7-digit ID is rejected.',
      ru: 'Для школьного приложения столовой каждый заказ — это идентификатор ученика из 8 цифр, код блюда из фиксированного списка и отметка времени. Заказ с 7-значным идентификатором отклоняется.',
    },
    pitfall: {
      en: 'Writing “the user types some data” is too vague. Name the format, the data type and the valid range or length.',
      ru: 'Фраза «пользователь вводит какие-то данные» слишком расплывчата. Укажите формат, тип данных и допустимый диапазон или длину.',
    },
  },
  {
    id: 'b1-1-output-specification',
    term: { en: 'Output specification', ru: 'спецификация выходных данных (output specification)' },
    def: {
      en: 'A description of the layout, contents and display of the results that a solution produces, showing how the solution will deliver the intended outcome.',
      ru: 'Описание формата, содержания и представления результатов, которые выдаёт решение, и того, как оно обеспечит нужный итог.',
    },
    syllabus: 'B1.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B1.1, p. 320' },
    example: {
      en: 'For the canteen app, the kitchen gets a daily table of portions per dish on a screen, with a red warning when a dish is almost sold out before lunch.',
      ru: 'Для приложения столовой кухня получает ежедневную таблицу порций по блюдам на экране, а красное предупреждение появляется, когда блюдо почти закончилось до обеда.',
    },
    pitfall: {
      en: 'An output specification names what the user sees and in which format. Writing “the system gives a report” is not enough.',
      ru: 'Спецификация выходных данных называет, что видит пользователь и в каком формате. Фразы «система выдаёт отчёт» недостаточно.',
    },
  },
  {
    id: 'b1-1-decomposition',
    term: { en: 'Decomposition', ru: 'декомпозиция (decomposition)' },
    def: {
      en: 'Breaking a complex problem down into smaller, manageable components, so that each part can be understood, solved and tested on its own. Ideally each component has one clear task.',
      ru: 'Разбиение сложной задачи на более мелкие, легко управляемые части, чтобы каждую часть можно было понять, решить и проверить отдельно. Желательно, чтобы у каждой части была одна чёткая задача.',
    },
    syllabus: 'B1.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B1.1, p. 324' },
    example: {
      en: 'A timetable generator can be split into four parts: reading the classes, rules for rooms and teachers, the search for a valid timetable, and the display of the result.',
      ru: 'Генератор расписания можно разбить на четыре части: чтение списка занятий, правила для кабинетов и учителей, поиск допустимого расписания и показ результата.',
    },
    pitfall: {
      en: 'Decomposition is not the same as listing every detail. Keep splitting until each part is simple enough to solve, and stop there.',
      ru: 'Декомпозиция — это не перечисление всех мелочей. Делите задачу, пока каждая часть не станет достаточно простой для решения, и на этом остановитесь.',
    },
  },
  {
    id: 'b1-1-pattern-recognition',
    term: { en: 'Pattern recognition', ru: 'распознавание закономерностей (pattern recognition)' },
    def: {
      en: 'Identifying recurring similarities, trends or regularities in data, problems or solutions, so that a solution found for one case can be reused or adapted for similar cases.',
      ru: 'Выявление повторяющихся сходств, тенденций или закономерностей в данных, задачах и решениях, чтобы решение одного случая можно было использовать или адаптировать для похожих случаев.',
    },
    syllabus: 'B1.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B1.1, p. 325' },
    example: {
      en: 'A shop notices that its sales rise every Friday and before each public holiday, so it plans extra stock for those days instead of guessing each time.',
      ru: 'Магазин замечает, что продажи растут по пятницам и перед каждым праздником, и заранее планирует запас на эти дни, а не угадывает каждый раз.',
    },
    pitfall: {
      en: 'A pattern in past data is not a guarantee. Check that it still holds for new data before relying on it.',
      ru: 'Закономерность в прошлых данных — не гарантия. Прежде чем на неё опираться, проверьте, что она сохраняется на новых данных.',
    },
  },
  {
    id: 'b1-1-abstraction',
    term: { en: 'Abstraction', ru: 'абстракция (abstraction)' },
    def: {
      en: 'Filtering out unnecessary detail so that only the core features of a problem remain, captured in a simplified model. The model can then support general solutions for many similar problems.',
      ru: 'Отбрасывание ненужных деталей, чтобы сохранить только существенные элементы или свойства задачи в упрощённой модели. Такая модель позволяет строить общие решения для многих похожих задач.',
    },
    syllabus: 'B1.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B1.1, p. 326' },
    example: {
      en: 'A metro map shows stations and the lines that join them, and leaves out the exact street layout, which is all a passenger needs to plan a journey.',
      ru: 'Схема метро показывает станции и соединяющие их линии и не показывает точную планировку улиц — пассажиру для планирования поездки этого достаточно.',
    },
    pitfall: {
      en: 'Abstraction removes detail on purpose, so the model can be wrong if the removed detail matters. Leaving out the weather can make a delivery-route model useless in winter.',
      ru: 'Абстракция намеренно убирает детали, поэтому модель может ошибаться, если убранная деталь важна. Если не учитывать погоду, модель маршрута доставки зимой может оказаться бесполезной.',
    },
  },
  {
    id: 'b1-1-algorithmic-design',
    term: { en: 'Algorithmic design', ru: 'алгоритмическое проектирование (algorithmic design)' },
    def: {
      en: 'Designing a step-by-step procedure that solves a problem, with steps that are clear, precise and efficient. The design can be written as code, as pseudocode or as a flowchart.',
      ru: 'Проектирование пошаговой процедуры, которая решает задачу, с шагами, которые ясны, точны и эффективны. Проект можно записать как код, как псевдокод или как блок-схему.',
    },
    syllabus: 'B1.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B1.1, p. 328' },
    example: {
      en: 'Before writing code for the canteen app, the developer lists the steps: read the order, check the stock, reduce the count, and show a warning if the stock is empty.',
      ru: 'Перед тем как писать код для приложения столовой, разработчик перечисляет шаги: прочитать заказ, проверить остаток, уменьшить количество и показать предупреждение, если остаток пуст.',
    },
    pitfall: {
      en: 'An algorithm must be unambiguous. “Sort the list nicely” is not an algorithm, but “compare neighbouring items, swap them if they are out of order, and repeat until no swap is needed” is.',
      ru: 'Алгоритм должен быть однозначным. «Аккуратно отсортируй список» — это не алгоритм, а «сравнивай соседние элементы, меняй их местами, если порядок неверный, и повторяй, пока обмены не понадобятся» — уже алгоритм.',
    },
  },
  {
    id: 'b1-1-flowchart',
    term: { en: 'Flowchart', ru: 'блок-схема (flowchart)' },
    def: {
      en: 'A diagram that logically and unambiguously represents the process, or flow, of a program or system, using standard symbols such as start and end, process, input and output, decision and flowline.',
      ru: 'Диаграмма, которая логически и однозначно представляет процесс, или ход выполнения, программы или системы, с помощью стандартных символов: начало и конец, процесс, ввод и вывод, решение и линия потока.',
    },
    syllabus: 'B1.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B1.1, p. 328' },
    example: {
      en: 'A locker code check: Start, then input the code, then a decision “is the code correct?”. Yes leads to output “Open” and End. No leads to output “Try again” and back to the input.',
      ru: 'Проверка кода шкафчика: начало, затем ввод кода, затем решение «код верный?». Да ведёт к выводу «Открыто» и к концу. Нет ведёт к выводу «Попробуйте снова» и возврату к вводу.',
    },
    pitfall: {
      en: 'A decision symbol has exactly two outcomes and a yes/no or true/false question inside. A question with three possible answers needs two decisions.',
      ru: 'Символ решения имеет ровно два исхода и вопрос внутри с ответом «да/нет» или «истина/ложь». Вопрос с тремя возможными ответами требует двух решений.',
    },
  },
];
