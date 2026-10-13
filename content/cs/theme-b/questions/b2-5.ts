import type { Question } from '../../../../src/contract/types';

// Original questions for topic B2.5 File processing (P2). Questions 1 to 4 need no code. Questions 5 to 10 use Python
// code that works on io.StringIO objects, which stand in for files, so no real file is opened or created. The printed
// answers were confirmed by running the code with python3. Code in stimulus is identical in EN and RU.
export const questions: Question[] = [
  {
    id: 'b2-5-q01',
    subject: 'cs',
    topicIds: ['b2-5-file-processing'],
    paper: 'P2',
    marks: 2,
    command: 'Describe',
    prompt: {
      en: `A school keeps the name and test score of each student as one record in a sequential file. Describe how a program would find the record for a named student.`,
      ru: `Школа хранит имя и результат теста каждого ученика как одну запись в последовательном файле. Опишите, как программа найдёт запись нужного ученика по имени.`,
    },
    markscheme: {
      en: `[1] The program starts at the first record and reads the records in turn, comparing each name with the name it wants (sequential access). [1] It cannot jump to a record or skip records, so it stops when it finds the name or reaches the end of the file.`,
      ru: `[1] Программа начинает с первой записи и по очереди читает записи, сравнивая каждое имя с искомым (последовательный доступ). [1] Перейти сразу к нужной записи или пропустить записи нельзя, поэтому программа останавливается, когда находит имя или доходит до конца файла.`,
    },
    origin: 'original',
  },
  {
    id: 'b2-5-q02',
    subject: 'cs',
    topicIds: ['b2-5-file-processing'],
    paper: 'P2',
    marks: 2,
    command: 'Distinguish',
    prompt: {
      en: `A program opens a text file in write mode ("w") in one version and in append mode ("a") in another version. Distinguish between the two modes.`,
      ru: `В одной версии программы текстовый файл открывается в режиме записи («w»), а в другой версии — в режиме добавления («a»). Проведите различие между этими режимами.`,
    },
    markscheme: {
      en: `[1] Write mode erases the existing contents of the file, so only the newly written data remains. [1] Append mode keeps the existing contents and adds the new data after them.`,
      ru: `[1] Режим записи стирает прежнее содержимое файла, поэтому остаются только новые данные. [1] Режим добавления сохраняет прежнее содержимое и дописывает новые данные после него.`,
    },
    origin: 'original',
  },
  {
    id: 'b2-5-q03',
    subject: 'cs',
    topicIds: ['b2-5-file-processing'],
    paper: 'P2',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: `A bank stores the transactions of each day in a sequential file and processes them as one batch overnight. Explain why a sequential file is still a suitable choice for this batch processing, even though finding a single record in it is slow.`,
      ru: `Банк хранит операции за каждый день в последовательном файле и обрабатывает их одним пакетом за ночь. Объясните, почему последовательный файл всё же подходит для такой пакетной обработки, хотя поиск одной записи в нём медленный.`,
    },
    markscheme: {
      en: `[1] A batch job reads every record in turn, in one pass from start to end, so the program never has to find one record quickly. [1] A sequential file has low overhead, needing little extra structure or storage, which suits large volumes of records. [1] New transactions are added at the end, so the file keeps them in the order they happened, and the job needs that order.`,
      ru: `[1] Пакетное задание читает все записи подряд, за один проход от начала до конца, поэтому программе не нужно быстро находить одну запись. [1] У последовательного файла низкие накладные расходы: ему нужно мало дополнительной структуры и памяти, что удобно для больших объёмов записей. [1] Новые операции дописываются в конец, поэтому файл сохраняет их в порядке совершения, а это нужно заданию.`,
    },
    origin: 'original',
  },
  {
    id: 'b2-5-q04',
    subject: 'cs',
    topicIds: ['b2-5-file-processing'],
    paper: 'P2',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: `Outline why a program should close a file when it has finished reading from it or writing to it.`,
      ru: `Кратко опишите, почему программа должна закрыть файл, когда закончит чтение из него или запись в него.`,
    },
    markscheme: {
      en: `[1] Closing writes out any data still held in memory and releases the file for other programs. [1] A file left open can lose data or cause errors, and closing prevents these problems.`,
      ru: `[1] При закрытии данные, которые ещё хранятся в памяти, записываются в файл, а файл освобождается для других программ. [1] Файл, оставленный открытым, может привести к потере данных или ошибкам; закрытие этому препятствует.`,
    },
    origin: 'original',
  },
  {
    id: 'b2-5-q05',
    subject: 'cs',
    topicIds: ['b2-5-file-processing'],
    paper: 'P2',
    marks: 3,
    command: 'Trace',
    prompt: {
      en: `The program in the stimulus reads a file of records line by line. Trace the program and state the two lines it prints. Then explain how the loop knows when to stop.`,
      ru: `Программа из условия читает файл с записями построчно. Проследите работу программы и укажите две строки, которые она выведет. Затем объясните, как цикл понимает, что пора остановиться.`,
    },
    stimulus: {
      en: `Study the program below. The file is simulated with io.StringIO.

\`\`\`python
import io

# The file holds one record per line, in the form name,score.
file1 = io.StringIO("Ana,12\\nCate,9\\nJamie,15\\nLisa,7\\n")
count = 0
total = 0
line = file1.readline()
while line != "":
    name, score = line.strip().split(",")
    count = count + 1
    total = total + int(score)
    line = file1.readline()
file1.close()
print("records:", count)
print("total:", total)
\`\`\``,
      ru: `Изучите программу ниже. Файл имитируется объектом io.StringIO.

\`\`\`python
import io

# The file holds one record per line, in the form name,score.
file1 = io.StringIO("Ana,12\\nCate,9\\nJamie,15\\nLisa,7\\n")
count = 0
total = 0
line = file1.readline()
while line != "":
    name, score = line.strip().split(",")
    count = count + 1
    total = total + int(score)
    line = file1.readline()
file1.close()
print("records:", count)
print("total:", total)
\`\`\``,
    },
    markscheme: {
      en: `[1] First line: records: 4 (four lines are read before readline() returns an empty string). [1] Second line: total: 43 (12 + 9 + 15 + 7). [1] The loop stops when readline() returns an empty string, which happens at the end of the file.`,
      ru: `[1] Первая строка: records: 4 (четыре строки прочитаны, прежде чем readline() вернул пустую строку). [1] Вторая строка: total: 43 (12 + 9 + 15 + 7). [1] Цикл останавливается, когда readline() возвращает пустую строку, а это происходит в конце файла.`,
    },
    answer: 'records: 4\ntotal: 43',
    origin: 'original',
  },
  {
    id: 'b2-5-q06',
    subject: 'cs',
    topicIds: ['b2-5-file-processing'],
    paper: 'P2',
    marks: 3,
    command: 'Trace',
    prompt: {
      en: `The program in the stimulus writes three words, a line break and the line yellow to a StringIO, then reads the text back. Trace the program. State the two lines it prints, and explain why the list in the first line has only two items.`,
      ru: `Программа из условия записывает три слова, перевод строки и строку yellow в StringIO, а затем читает текст обратно. Проследите работу программы. Укажите две строки, которые она выведет, и объясните, почему список в первой строке содержит только два элемента.`,
    },
    stimulus: {
      en: `Study the program below.

\`\`\`python
import io

out = io.StringIO()
out.writelines(["red", "green", "blue"])
out.write("\\n")
out.write("yellow\\n")
out.seek(0)
text = out.read()
print(text.splitlines())
print(len(text))
\`\`\``,
      ru: `Изучите программу ниже.

\`\`\`python
import io

out = io.StringIO()
out.writelines(["red", "green", "blue"])
out.write("\\n")
out.write("yellow\\n")
out.seek(0)
text = out.read()
print(text.splitlines())
print(len(text))
\`\`\``,
    },
    markscheme: {
      en: `[1] First line: ['redgreenblue', 'yellow'] (writelines() writes the three words together). [1] Second line: 20 (12 characters, then a line break, then 7 more characters). [1] writelines() adds no line breaks, so red, green and blue join into one string, which is one list item.`,
      ru: `[1] Первая строка: ['redgreenblue', 'yellow'] (writelines() записывает три слова подряд). [1] Вторая строка: 20 (12 символов, затем перевод строки и ещё 7 символов). [1] writelines() не добавляет переводов строк, поэтому red, green и blue слились в одну строку, а значит, в один элемент списка.`,
    },
    answer: "['redgreenblue', 'yellow']\n20",
    origin: 'original',
  },
  {
    id: 'b2-5-q07',
    subject: 'cs',
    topicIds: ['b2-5-file-processing'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: `The program in the stimulus should add the name Jamie at the end of the file, but it does not. Trace the program and state the two lines it prints. Explain why the output is wrong, and state the one line that must be added before the write so that the name goes at the end.`,
      ru: `Программа из условия должна добавить имя Jamie в конец файла, но делает это неправильно. Проследите программу и укажите две строки, которые она выведет. Объясните, почему вывод неверный, и назовите одну строку, которую нужно добавить перед записью, чтобы имя попало в конец.`,
    },
    stimulus: {
      en: `Study the program below.

\`\`\`python
import io

# The file already holds two names, one per line.
names = io.StringIO("Ana\\nCate\\n")
# The program means to add a third name at the end of the file.
names.write("Jamie\\n")
names.seek(0)
for line in names:
    print(line.rstrip("\\n"))
\`\`\``,
      ru: `Изучите программу ниже.

\`\`\`python
import io

# The file already holds two names, one per line.
names = io.StringIO("Ana\\nCate\\n")
# The program means to add a third name at the end of the file.
names.write("Jamie\\n")
names.seek(0)
for line in names:
    print(line.rstrip("\\n"))
\`\`\``,
    },
    markscheme: {
      en: `[1] First line: Jamie. [1] Second line: te. [1] The write starts at the current position, which is the start of the file, so it overwrites the first characters instead of adding after them. [1] names.seek(0, io.SEEK_END) before the write moves the position to the end (in a real Python program the file would be opened in append mode, "a").`,
      ru: `[1] Первая строка: Jamie. [1] Вторая строка: te. [1] Запись начинается с текущей позиции, то есть с начала файла, поэтому она перезаписывает первые символы, а не добавляет их в конец. [1] names.seek(0, io.SEEK_END) перед записью переводит позицию в конец (в настоящей программе на Python файл открывают в режиме добавления «a»).`,
    },
    answer: 'Jamie\nte',
    origin: 'original',
  },
  {
    id: 'b2-5-q08',
    subject: 'cs',
    topicIds: ['b2-5-file-processing'],
    paper: 'P2',
    marks: 3,
    command: 'Trace',
    prompt: {
      en: `Trace the program in the stimulus and state every line it prints.`,
      ru: `Проследите программу из условия и укажите каждую строку, которую она выведет.`,
    },
    stimulus: {
      en: `Study the program below.

\`\`\`python
import io

scores = io.StringIO("Ana,12\\nCate,9\\nJamie,15\\nLisa,7\\n")
passed = io.StringIO()
for line in scores:
    name, score = line.strip().split(",")
    if int(score) >= 10:
        passed.write(name + "\\n")
print(passed.getvalue(), end="")
print("lines written:", len(passed.getvalue().splitlines()))
\`\`\``,
      ru: `Изучите программу ниже.

\`\`\`python
import io

scores = io.StringIO("Ana,12\\nCate,9\\nJamie,15\\nLisa,7\\n")
passed = io.StringIO()
for line in scores:
    name, score = line.strip().split(",")
    if int(score) >= 10:
        passed.write(name + "\\n")
print(passed.getvalue(), end="")
print("lines written:", len(passed.getvalue().splitlines()))
\`\`\``,
    },
    markscheme: {
      en: `[1] Ana and Jamie are printed, one per line, because their scores (12 and 15) are 10 or more. [1] Cate (9) and Lisa (7) are not written to the new StringIO. [1] The last line is lines written: 2.`,
      ru: `[1] Выведены Ana и Jamie, каждое имя на отдельной строке, потому что их результаты (12 и 15) не меньше 10. [1] Cate (9) и Lisa (7) не записываются в новый StringIO. [1] Последняя строка: lines written: 2.`,
    },
    answer: 'Ana\nJamie\nlines written: 2',
    origin: 'original',
  },
  {
    id: 'b2-5-q09',
    subject: 'cs',
    topicIds: ['b2-5-file-processing'],
    paper: 'P2',
    marks: 4,
    command: 'Construct',
    prompt: {
      en: `The records in the stimulus are held in a file, one record per line. Construct code that reads every record line by line, finds the name with the highest score, and writes one line in the form best: NAME, where NAME is that name, to a new StringIO. Then print the contents of the new StringIO.`,
      ru: `Записи из условия хранятся в файле, по одной записи в строке. Напишите код, который читает каждую запись построчно, находит имя с наибольшим результатом и записывает в новый StringIO одну строку вида best: ИМЯ, где ИМЯ — это имя с наибольшим результатом. Затем выведите содержимое нового StringIO.`,
    },
    stimulus: {
      en: `Use the file set up below.

\`\`\`python
import io

# The file of records: one record per line, in the form name,score.
records = io.StringIO("Ana,12\\nCate,9\\nJamie,15\\nLisa,7\\n")
\`\`\``,
      ru: `Используйте файл, созданный ниже.

\`\`\`python
import io

# The file of records: one record per line, in the form name,score.
records = io.StringIO("Ana,12\\nCate,9\\nJamie,15\\nLisa,7\\n")
\`\`\``,
    },
    markscheme: {
      en: `[1] A loop reads the file line by line and stops at the end of the file (readline() returns an empty string, or a for loop is used). [1] Each line is split into the name and the score, and the score is converted with int(). [1] The highest score and its name are kept, starting from a value that any score beats, such as -1. [1] The line best: NAME is written to the new StringIO and its contents are printed; for the data in the stimulus this prints best: Jamie.`,
      ru: `[1] Цикл читает файл построчно и останавливается в конце файла (readline() возвращает пустую строку или используется цикл for). [1] Каждая строка делится на имя и результат, результат переводится в число функцией int(). [1] Сохраняются наибольший результат и его имя; начальное значение меньше любого результата, например -1. [1] Строка best: ИМЯ записывается в новый StringIO, и её содержимое выводится; для данных из условия выводится best: Jamie.`,
    },
    origin: 'original',
  },
  {
    id: 'b2-5-q10',
    subject: 'cs',
    topicIds: ['b2-5-file-processing'],
    paper: 'P2',
    marks: 5,
    command: 'Construct',
    prompt: {
      en: `The file in the stimulus already holds two records. Construct code that (1) adds the record Jamie,15 at the end of the file without erasing the existing records, (2) reads the whole file back line by line, and (3) prints the number of records and their average score, with the average shown to one decimal place.`,
      ru: `В файле из условия уже две записи. Напишите код, который (1) добавляет запись Jamie,15 в конец файла, не стирая прежние записи, (2) читает весь файл обратно построчно и (3) выводит количество записей и средний результат с одним знаком после десятичной точки.`,
    },
    stimulus: {
      en: `Use the file set up below.

\`\`\`python
import io

# The existing file: one record per line, in the form name,score.
records = io.StringIO("Ana,12\\nCate,9\\n")
\`\`\``,
      ru: `Используйте файл, созданный ниже.

\`\`\`python
import io

# The existing file: one record per line, in the form name,score.
records = io.StringIO("Ana,12\\nCate,9\\n")
\`\`\``,
    },
    markscheme: {
      en: `[1] The write position is moved to the end before the new record is written, for example with records.seek(0, io.SEEK_END); in a real program the file would be opened in append mode, "a". [1] The new record is written with a line break at its end. [1] The file is read back from the start, for example after records.seek(0), with a loop that stops at the end of the file. [1] Each score is converted with int(), added to a total, and the records are counted. [1] The program prints records: 3 and average: 12.0 for this data.`,
      ru: `[1] Перед записью новой строки позиция переводится в конец, например командой records.seek(0, io.SEEK_END); в настоящей программе файл открывают в режиме добавления «a». [1] Новая запись записывается с переводом строки в конце. [1] Файл читается обратно с начала, например после records.seek(0), циклом, который останавливается в конце файла. [1] Каждый результат переводится функцией int(), прибавляется к сумме, а записи подсчитываются. [1] Программа выводит records: 3 и average: 12.0 для этих данных.`,
    },
    origin: 'original',
  },
];
