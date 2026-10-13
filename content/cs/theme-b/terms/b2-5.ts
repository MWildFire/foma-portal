import type { Term } from '../../../../src/contract/types';

// Topic B2.5 File processing (P2). Definitions are our own words, based on the key ideas in the Oxford IB DP
// Computer Science Course Companion (2025), pp. 407-411. The text file term is not defined in the textbook, so its
// source is marked as own wording.
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';
const OWN_TEXT = 'Own wording';

export const terms: Term[] = [
  {
    id: 'b2-5-file-processing-operation',
    term: { en: 'File-processing operation', ru: 'файловая операция (file-processing operation)' },
    def: {
      en: 'An action a program carries out on a file: opening it, reading data from it, writing or appending data to it, and closing it.',
      ru: 'Действие программы над файлом: открытие, чтение данных из него, запись или добавление данных и закрытие.',
    },
    syllabus: 'B2.5',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.5, p. 407' },
    example: {
      en: 'Opening a file, writing one line to it and closing it are three file-processing operations, done in that order.',
      ru: 'Открытие файла, запись одной строки в него и закрытие — это три файловые операции, выполненные в таком порядке.',
    },
    pitfall: {
      en: 'A program cannot write to a file it has not opened yet, and the file should be closed when the work is finished.',
      ru: 'Программа не может писать в файл, который ещё не открыла, а закончив работу, файл нужно закрыть.',
    },
  },
  {
    id: 'b2-5-text-file',
    term: { en: 'Text file', ru: 'текстовый файл (text file)' },
    def: {
      en: 'A file that stores data as plain characters, such as letters, digits and spaces, arranged in lines that end with a line break.',
      ru: 'Файл, в котором данные хранятся как обычные символы, например буквы, цифры и пробелы, расположенные строками, которые заканчиваются переводом строки.',
    },
    syllabus: 'B2.5',
    papers: ['P2'],
    src: { kind: 'own', title: OWN_TEXT },
    example: {
      en: 'A file holding the lines Ana,12 and Cate,9 is a text file. A program reads each line as a string of characters.',
      ru: 'Файл со строками Ana,12 и Cate,9 — это текстовый файл. Программа читает каждую строку как строку символов.',
    },
    pitfall: {
      en: 'Numbers in a text file are stored as characters, so the 12 in Ana,12 is still text until int() converts it.',
      ru: 'Числа в текстовом файле хранятся как символы, поэтому 12 в строке Ana,12 остаётся текстом, пока его не преобразует int().',
    },
  },
  {
    id: 'b2-5-sequential-file',
    term: { en: 'Sequential file', ru: 'последовательный файл (sequential file)' },
    def: {
      en: 'A file in which records are stored one after another, so the file can only be accessed in a straight line, from its first record to its last.',
      ru: 'Файл, в котором записи хранятся одна за другой, поэтому доступ к ним возможен только по прямой: от первой записи к последней.',
    },
    syllabus: 'B2.5',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.5, p. 407' },
    example: {
      en: 'A system log file that adds each new event at the end is a sequential file. Its events stay in the order they happened.',
      ru: 'Системный журнал, который добавляет каждое новое событие в конец, — это последовательный файл. События в нём остаются в том порядке, в котором произошли.',
    },
    pitfall: {
      en: 'A sequential file is not necessarily a sorted file. Its order is simply the order in which the records were written.',
      ru: 'Последовательный файл не обязательно отсортирован. Его порядок — это порядок, в котором записи были записаны.',
    },
  },
  {
    id: 'b2-5-sequential-access',
    term: { en: 'Sequential access', ru: 'последовательный доступ (sequential access)' },
    def: {
      en: 'Reading records in the order they are stored, from the beginning of the file, because each earlier record must be passed before a later one can be reached.',
      ru: 'Чтение записей в том порядке, в котором они хранятся, с начала файла, потому что до более поздней записи можно добраться, только пройдя все предыдущие.',
    },
    syllabus: 'B2.5',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.5, p. 407' },
    example: {
      en: 'To reach the fifth record of a sequential file, a program reads records one to four first and does nothing with them.',
      ru: 'Чтобы дойти до пятой записи последовательного файла, программа сначала читает записи с первой по четвёртую и ничего с ними не делает.',
    },
    pitfall: {
      en: 'A sequential file cannot skip a record, so it is a poor choice when one record must be found quickly.',
      ru: 'В последовательном файле нельзя пропустить запись, поэтому он плохо подходит, когда нужно быстро найти одну запись.',
    },
  },
  {
    id: 'b2-5-record',
    term: { en: 'Record', ru: 'запись (record)' },
    def: {
      en: 'A group of related data items, such as a name and a score, stored together as one unit in a file.',
      ru: 'Группа связанных данных, например имя и результат, которые хранятся в файле вместе как одна единица.',
    },
    syllabus: 'B2.5',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.5, p. 407' },
    example: {
      en: 'The line Ana,12 holds one record with two items: a name and a score.',
      ru: 'Строка Ana,12 содержит одну запись из двух элементов: имени и результата.',
    },
    pitfall: {
      en: 'In a text file a line usually holds one record, but the program must split the line into its items before it can use them.',
      ru: 'В текстовом файле строка обычно содержит одну запись, но программа должна разбить строку на элементы, прежде чем их использовать.',
    },
  },
  {
    id: 'b2-5-end-of-file',
    term: { en: 'End of file (EOF)', ru: 'конец файла (end of file, EOF)' },
    def: {
      en: 'The point just after the last record in a file. A read at this point returns no data, which tells the program there is nothing left to process.',
      ru: 'Место сразу после последней записи в файле. Чтение в этой точке не возвращает данных, и программа понимает, что обрабатывать больше нечего.',
    },
    syllabus: 'B2.5',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.5, p. 407' },
    example: {
      en: 'In Python, `readline()` returns an empty string at the end of the file, so a loop that stops on an empty string stops in the right place.',
      ru: 'В Python метод `readline()` в конце файла возвращает пустую строку, поэтому цикл, который останавливается на пустой строке, останавливается в нужном месте.',
    },
    pitfall: {
      en: 'The textbook Java loop tests for null (p. 410). Python does not return null here, so test for an empty string or use a for loop.',
      ru: 'Цикл на Java в учебнике проверяет null (стр. 410). В Python здесь возвращается не null, поэтому проверяйте пустую строку или используйте цикл for.',
    },
  },
  {
    id: 'b2-5-write-mode',
    term: { en: 'Write mode ("w")', ru: 'режим записи (write mode, «w»)' },
    def: {
      en: 'The file mode that opens a file for writing and erases its previous contents, so the data written replaces what was there before.',
      ru: 'Режим открытия файла для записи, который стирает прежнее содержимое, так что записанные данные заменяют то, что было раньше.',
    },
    syllabus: 'B2.5',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.5, p. 411' },
    example: {
      en: 'Opening a log file in write mode erases it at once, even if the program writes nothing afterwards.',
      ru: 'Открытие журнала в режиме записи стирает его сразу, даже если программа потом ничего не запишет.',
    },
    pitfall: {
      en: 'Write mode erases the file when it is opened, not when the first write happens. Use append mode if the old lines must stay.',
      ru: 'Режим записи стирает файл в момент открытия, а не при первой записи. Если старые строки нужно сохранить, используйте режим добавления.',
    },
  },
  {
    id: 'b2-5-append-mode',
    term: { en: 'Append mode ("a")', ru: 'режим добавления (append mode, «a»)' },
    def: {
      en: 'The file mode that opens a file so that new data is added after its existing contents, which are kept.',
      ru: 'Режим открытия файла, при котором новые данные добавляются после существующего содержимого, а само содержимое сохраняется.',
    },
    syllabus: 'B2.5',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.5, p. 411' },
    example: {
      en: 'A log that keeps every earlier line and adds one new line at the end is written in append mode.',
      ru: 'Журнал, который сохраняет все прежние строки и добавляет одну новую в конец, ведётся в режиме добавления.',
    },
    pitfall: {
      en: 'Append mode always adds at the end of the file. It does not change text in the middle of the file.',
      ru: 'Режим добавления всегда пишет в конец файла и не меняет текст в середине файла.',
    },
  },
  {
    id: 'b2-5-read-mode',
    term: { en: 'Read mode ("r")', ru: 'режим чтения (read mode, «r»)' },
    def: {
      en: 'The file mode for reading data from a file without erasing it. Plain "r" only reads; the textbook example uses "r+", which also allows writing.',
      ru: 'Режим открытия файла для чтения данных без стирания. Обычный режим «r» только читает; в примере учебника используется «r+», который также позволяет писать.',
    },
    syllabus: 'B2.5',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.5, p. 411' },
    example: {
      en: 'If a file is opened with "r" and the program then tries to write to it, Python raises an error, so the file is not changed by mistake.',
      ru: 'Если файл открыт в режиме «r», а программа затем пытается в него писать, Python выдаёт ошибку, и файл не меняется по ошибке.',
    },
    pitfall: {
      en: 'The textbook labels "r+" as a read mode. In Python it also allows writing, and writing starts at the beginning of the file, so use "r" when the program only needs to read.',
      ru: 'Учебник называет «r+» режимом чтения. В Python он также позволяет писать, причём запись начинается с начала файла, поэтому, если программе нужно только читать, используйте «r».',
    },
  },
  {
    id: 'b2-5-close-file',
    term: { en: 'Closing a file', ru: 'закрытие файла (closing a file)' },
    def: {
      en: 'Ending the use of a file with close(), which writes out any data still held in memory and releases the file.',
      ru: 'Завершение работы с файлом вызовом close(): данные, которые ещё хранятся в памяти, записываются в файл, а файл освобождается.',
    },
    syllabus: 'B2.5',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B2.5, p. 407' },
    example: {
      en: 'Calling `close()` after the last write saves the data still held by the program and frees the file for other programs.',
      ru: 'Вызов `close()` после последней записи сохраняет данные, которые ещё держит программа, и освобождает файл для других программ.',
    },
    pitfall: {
      en: 'A with block closes the file when it ends, even after an error, so calling close() inside it is not needed.',
      ru: 'Блок with закрывает файл по окончании, даже после ошибки, поэтому вызывать close() внутри него не нужно.',
    },
  },
];
