import type { Question } from '../../../../src/contract/types';

// Original questions for topic B2.1 Programming fundamentals (P2). The programs are Python 3 and were run with
// python3 to confirm the answers. Code in stimulus is identical in EN and RU except for the comments.
export const questions: Question[] = [
  {
    id: 'b2-1-q01',
    subject: 'cs',
    topicIds: ['b2-1-programming-fundamentals'],
    paper: 'P2',
    marks: 3,
    command: 'Identify',
    prompt: {
      en: 'A school database stores three values for each student: (a) the student’s ID code, which can start with a zero, such as 0457; (b) the average of the student’s term grades, such as 6.5; (c) whether the student has paid for the trip, as yes or no. Identify the most suitable Python data type for each value: int, float, str or bool.',
      ru: 'Школьная база данных хранит три значения для каждого ученика: (а) идентификационный код ученика, который может начинаться с нуля, например 0457; (б) средний балл за четверть, например 6,5; (в) оплатил ли ученик поездку: да или нет. Укажите наиболее подходящий тип данных Python для каждого значения: int, float, str или bool.',
    },
    markscheme: {
      en: '[1] (a) str: the code must keep its leading zero, which a number would lose. [1] (b) float: the average has a decimal part. [1] (c) bool: the answer can only be True or False.',
      ru: '[1] (а) str: код должен сохранить ведущий ноль, который у числа теряется. [1] (б) float: у среднего балла есть десятичная часть. [1] (в) bool: ответ может быть только True или False.',
    },
    origin: 'original',
  },
  {
    id: 'b2-1-q02',
    subject: 'cs',
    topicIds: ['b2-1-programming-fundamentals'],
    paper: 'P2',
    marks: 2,
    command: 'Justify',
    prompt: {
      en: 'A student writes grade = int(6.5) to store an average grade, and then prints grade. Justify why this is a poor choice of data type, and name the data type that should be used instead.',
      ru: 'Ученик пишет grade = int(6.5), чтобы сохранить средний балл, а затем выводит grade. Обоснуйте, почему такой выбор типа данных неудачен, и назовите тип, который стоит использовать.',
    },
    markscheme: {
      en: '[1] An integer holds only whole numbers, so int(6.5) gives 6 and the half point is lost. [1] A float (decimal) type should be used, because it stores numbers that contain a decimal point.',
      ru: '[1] Целое число хранит только целые значения, поэтому int(6.5) даёт 6, и половина балла теряется. [1] Нужно использовать float (вещественный тип), потому что он хранит числа с десятичной точкой.',
    },
    origin: 'original',
  },
  {
    id: 'b2-1-q03',
    subject: 'cs',
    topicIds: ['b2-1-programming-fundamentals'],
    paper: 'P2',
    marks: 3,
    command: 'Trace',
    prompt: {
      en: 'Trace the program. State both lines of output, and explain why the function does not change the second line.',
      ru: 'Проследите программу. Укажите обе строки вывода и объясните, почему функция не меняет вторую строку.',
    },
    stimulus: {
      en: `Trace the program below.

\`\`\`python
total = 10                      # global variable

def add_bonus(points):
    total = points + 5          # a new local variable with the same name
    return total

print(add_bonus(3))
print(total)
\`\`\``,
      ru: `Проследите программу ниже.

\`\`\`python
total = 10                      # глобальная переменная

def add_bonus(points):
    total = points + 5          # новая локальная переменная с тем же именем
    return total

print(add_bonus(3))
print(total)
\`\`\``,
    },
    markscheme: {
      en: '[1] First line: 8, because points is 3 and the function returns 3 + 5. [1] Second line: 10, because the global total is not changed. [1] Explanation: total is assigned inside the function, so Python creates a new local variable with that name, which exists only while the function runs.',
      ru: '[1] Первая строка: 8, потому что points равно 3, а функция возвращает 3 + 5. [1] Вторая строка: 10, потому что глобальная переменная total не меняется. [1] Объяснение: total присваивается внутри функции, поэтому Python создаёт новую локальную переменную с тем же именем, которая существует только во время работы функции.',
    },
    answer: '8\n10',
    origin: 'original',
  },
  {
    id: 'b2-1-q04',
    subject: 'cs',
    topicIds: ['b2-1-programming-fundamentals'],
    paper: 'P2',
    marks: 2,
    command: 'State',
    prompt: {
      en: 'State the output of the program. Then state what would happen if the line global score were removed from the function.',
      ru: 'Укажите вывод программы. Затем укажите, что произойдёт, если убрать из функции строку global score.',
    },
    stimulus: {
      en: `State the output of this program.

\`\`\`python
score = 0

def award(points):
    global score
    score = score + points

award(4)
award(3)
print(score)
\`\`\``,
      ru: `Укажите вывод этой программы.

\`\`\`python
score = 0

def award(points):
    global score
    score = score + points

award(4)
award(3)
print(score)
\`\`\``,
    },
    markscheme: {
      en: '[1] Output: 7. [1] Without the global line, the assignment makes score a local variable, and reading it before it is assigned raises an error, so the program stops with an error message instead of printing 7.',
      ru: '[1] Вывод: 7. [1] Без строки global присваивание делает score локальной переменной; чтение до присваивания вызывает ошибку, и программа завершается с сообщением об ошибке вместо вывода 7.',
    },
    answer: '7',
    origin: 'original',
  },
  {
    id: 'b2-1-q05',
    subject: 'cs',
    topicIds: ['b2-1-programming-fundamentals'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: 'Trace the program and state the output of each of the four print statements, in order.',
      ru: 'Проследите программу и укажите вывод каждого из четырёх операторов print по порядку.',
    },
    stimulus: {
      en: `Trace the program below.

\`\`\`python
code = "ABCD-2026-DXB"
print(code[0:4])
print(code.find("-"))
print(code.rfind("-"))
print(code[5:9] + "!")
\`\`\``,
      ru: `Проследите программу ниже.

\`\`\`python
code = "ABCD-2026-DXB"
print(code[0:4])
print(code.find("-"))
print(code.rfind("-"))
print(code[5:9] + "!")
\`\`\``,
    },
    markscheme: {
      en: '[1] Line 1: ABCD (the first four characters). [1] Line 2: 4 (position of the first dash, counting from 0). [1] Line 3: 9 (position of the last dash). [1] Line 4: 2026! (characters 5 to 8, followed by an exclamation mark).',
      ru: '[1] Строка 1: ABCD (первые четыре символа). [1] Строка 2: 4 (позиция первого дефиса, отсчёт с 0). [1] Строка 3: 9 (позиция последнего дефиса). [1] Строка 4: 2026! (символы с 5 по 8 и восклицательный знак).',
    },
    answer: 'ABCD\n4\n9\n2026!',
    origin: 'original',
  },
  {
    id: 'b2-1-q06',
    subject: 'cs',
    topicIds: ['b2-1-programming-fundamentals'],
    paper: 'P2',
    marks: 4,
    command: 'Construct',
    prompt: {
      en: 'A school makes a library code from a student’s surname. Construct a Python function library_code(full_name) that takes a name written as “first last”, such as “Anna Petrova”, and returns the first two letters of the surname in capitals, followed by “#2026”. For “Anna Petrova” the function returns “PE#2026”. The function must return the value, not print it.',
      ru: 'Школа создаёт библиотечный код из фамилии ученика. Постройте функцию Python library_code(full_name), которая принимает имя в виде «имя фамилия», например «Анна Петрова», и возвращает первые две буквы фамилии заглавными буквами, затем «#2026». Для «Анна Петрова» функция возвращает «ПЕ#2026». Функция должна возвращать значение, а не печатать его.',
    },
    markscheme: {
      en: '[1] Defines the function library_code with one parameter, full_name. [1] Takes the surname as the last word of the name, for example with split() and the index [-1]. [1] Takes the first two letters of the surname and changes them to capitals, for example with slicing [0:2] and upper(). [1] Joins the result with “#2026” using + (or an f-string) and returns it.',
      ru: '[1] Определяет функцию library_code с одним параметром full_name. [1] Берёт фамилию как последнее слово имени, например с помощью split() и индекса [-1]. [1] Берёт первые две буквы фамилии и переводит их в заглавные, например с помощью среза [0:2] и upper(). [1] Соединяет результат с «#2026» через + (или f-строку) и возвращает его.',
    },
    origin: 'original',
  },
  {
    id: 'b2-1-q07',
    subject: 'cs',
    topicIds: ['b2-1-programming-fundamentals'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: 'Trace the program. State the five lines of output, and explain why the entry “x7” does not change total, even though the finally block still runs for it.',
      ru: 'Проследите программу. Укажите пять строк вывода и объясните, почему запись «x7» не меняет total, хотя блок finally для неё всё равно выполняется.',
    },
    stimulus: {
      en: `Trace the program below.

\`\`\`python
entries = ["12", "x7", "30"]
total = 0
for entry in entries:
    try:
        total = total + int(entry)
    except ValueError:
        print("Skipped:", entry)
    finally:
        print("Checked", entry)
print("Total", total)
\`\`\``,
      ru: `Проследите программу ниже.

\`\`\`python
entries = ["12", "x7", "30"]
total = 0
for entry in entries:
    try:
        total = total + int(entry)
    except ValueError:
        print("Skipped:", entry)
    finally:
        print("Checked", entry)
print("Total", total)
\`\`\``,
    },
    markscheme: {
      en: '[1] The first three lines, in order: Checked 12; Skipped: x7; Checked x7. [1] The last two lines: Checked 30 and Total 42. [1] The conversion int(“x7”) raises a ValueError before the addition, so total keeps its value of 12. [1] The finally block runs after the except block whether or not an exception occurred, so Checked x7 is printed.',
      ru: '[1] Первые три строки по порядку: Checked 12; Skipped: x7; Checked x7. [1] Последние две строки: Checked 30 и Total 42. [1] Преобразование int(«x7») вызывает ValueError до сложения, поэтому total остаётся равным 12. [1] Блок finally выполняется после блока except независимо от того, возникло ли исключение, поэтому печатается Checked x7.',
    },
    answer: 'Checked 12\nSkipped: x7\nChecked x7\nChecked 30\nTotal 42',
    origin: 'original',
  },
  {
    id: 'b2-1-q08',
    subject: 'cs',
    topicIds: ['b2-1-programming-fundamentals'],
    paper: 'P2',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'The programmer intended the program to add all four values. State the output of the program, explain the logic error that causes this output, and state how the loop should be changed to fix it.',
      ru: 'Программист хотел, чтобы программа складывала все четыре значения. Укажите вывод программы, объясните логическую ошибку, из-за которой получился такой вывод, и укажите, как нужно изменить цикл, чтобы её исправить.',
    },
    stimulus: {
      en: `The programmer ran this program.

\`\`\`python
values = [4, 9, 2, 7]
total = 0
for i in range(1, len(values)):
    total = total + values[i]
print(total)
\`\`\``,
      ru: `Программист запустил эту программу.

\`\`\`python
values = [4, 9, 2, 7]
total = 0
for i in range(1, len(values)):
    total = total + values[i]
print(total)
\`\`\``,
    },
    markscheme: {
      en: '[1] Output: 18 (9 + 2 + 7). [1] The loop range starts at 1, so the first value, 4, is never added; index 0 is skipped. [1] Fix: start the range at 0, for example for i in range(len(values)), or loop over the values directly with for value in values.',
      ru: '[1] Вывод: 18 (9 + 2 + 7). [1] Диапазон цикла начинается с 1, поэтому первое значение, 4, никогда не складывается: индекс 0 пропускается. [1] Исправление: начать диапазон с 0, например for i in range(len(values)), или перебирать значения напрямую: for value in values.',
    },
    answer: '18',
    origin: 'original',
  },
  {
    id: 'b2-1-q09',
    subject: 'cs',
    topicIds: ['b2-1-programming-fundamentals'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: 'Trace the program. Complete a trace table with one row for the start and one row for each pass through the loop, with the columns pass, x and count. Start from x = 14 and count = 0. Then state the output.',
      ru: 'Проследите программу. Заполните таблицу трассировки: строка для начала и по одной строке на каждый проход цикла, столбцы: проход, x и count. Начните с x = 14 и count = 0. Затем укажите вывод.',
    },
    stimulus: {
      en: `Trace the program below.

\`\`\`python
x = 14
count = 0
while x > 1:
    if x % 2 == 0:
        x = x // 2
    else:
        x = x - 1
    count = count + 1
print(count, x)
\`\`\``,
      ru: `Проследите программу ниже.

\`\`\`python
x = 14
count = 0
while x > 1:
    if x % 2 == 0:
        x = x // 2
    else:
        x = x - 1
    count = count + 1
print(count, x)
\`\`\``,
    },
    markscheme: {
      en: '[1] Pass 1: x = 7, count = 1 (14 is even, so x is halved). [1] Pass 2: x = 6, count = 2 (7 is odd, so 1 is subtracted); pass 3: x = 3, count = 3 (6 is even, so x is halved). [1] Pass 4: x = 2, count = 4 (3 is odd); pass 5: x = 1, count = 5 (2 is even, so x is halved). [1] The loop stops because x is no longer greater than 1; output: 5 1.',
      ru: '[1] Проход 1: x = 7, count = 1 (14 чётное, поэтому x делится на 2). [1] Проход 2: x = 6, count = 2 (7 нечётное, поэтому вычитается 1); проход 3: x = 3, count = 3 (6 чётное, поэтому x делится на 2). [1] Проход 4: x = 2, count = 4 (3 нечётное); проход 5: x = 1, count = 5 (2 чётное, поэтому x делится на 2). [1] Цикл заканчивается, потому что x уже не больше 1; вывод: 5 1.',
    },
    answer: '5 1',
    origin: 'original',
  },
  {
    id: 'b2-1-q10',
    subject: 'cs',
    topicIds: ['b2-1-programming-fundamentals'],
    paper: 'P2',
    marks: 2,
    command: 'Suggest',
    prompt: {
      en: 'A program is being developed. It keeps skipping a section of code, and the developer cannot see which condition is false. Suggest one debugging technique the developer could use to find out why the section is skipped, and explain why it fits this problem.',
      ru: 'Программа находится в разработке. Она постоянно пропускает один участок кода, и разработчик не видит, какое условие ложно. Предложите один приём отладки, который поможет выяснить, почему этот участок пропускается, и объясните, почему он подходит к этой проблеме.',
    },
    markscheme: {
      en: '[1] A suitable technique, for example a breakpoint before the section, print statements that show the values used in the condition, or a trace table for the variables in the condition. [1] An explanation that the technique shows the variable values at the point where the decision is made, so the false condition can be found.',
      ru: '[1] Подходящий приём, например точка останова перед участком, операторы print, которые выводят значения, используемые в условии, или таблица трассировки переменных условия. [1] Объяснение: приём показывает значения переменных в момент принятия решения, поэтому можно найти ложное условие.',
    },
    origin: 'original',
  },
];
