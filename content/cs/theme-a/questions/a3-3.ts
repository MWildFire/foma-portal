import type { Question } from '../../../../src/contract/types';

// Original questions for topic A3.3 Database programming. Scenarios are invented for this portal.
export const questions: Question[] = [
  {
    id: 'a3-3-q01',
    subject: 'cs',
    topicIds: ['a3-3-sql'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Construct',
    prompt: {
      en: 'A school tuck shop keeps its items in the table SNACK (SnackID, SnackName, Category, Price). Construct one SQL statement that shows, for each Category, the number of items and the highest Price in that category.',
      ru: 'Школьный буфет хранит товары в таблице SNACK (SnackID, SnackName, Category, Price). Постройте один оператор SQL, который для каждой категории (Category) показывает количество товаров и самую высокую цену (Price) в этой категории.',
    },
    markscheme: {
      en: '[1] SELECT Category together with a count of the items, such as COUNT(SnackID) or COUNT(*). [1] MAX(Price) for the highest price in each category. [1] FROM SNACK with GROUP BY Category, so that the aggregates are calculated for each group.',
      ru: '[1] SELECT Category вместе с количеством товаров, например COUNT(SnackID) или COUNT(*). [1] MAX(Price) для самой высокой цены в каждой категории. [1] FROM SNACK с GROUP BY Category, чтобы агрегатные функции считались для каждой группы.',
    },
    origin: 'original',
  },
  {
    id: 'a3-3-q02',
    subject: 'cs',
    topicIds: ['a3-3-sql'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'A school attendance database has a table ATTENDANCE with about two million rows. An index is added on the StudentID column. Explain why this index makes a query for one student’s records faster, and why the index makes it slower to add new attendance records.',
      ru: 'В базе посещаемости школы есть таблица ATTENDANCE примерно из двух миллионов строк. По столбцу StudentID добавили индекс. Объясните, почему этот индекс ускоряет запрос записей одного ученика и почему он замедляет добавление новых записей о посещаемости.',
    },
    markscheme: {
      en: '[1] The index is a lookup structure that points to the rows for each StudentID, so the DBMS does not have to check every row. [1] A query for one student therefore reads far fewer rows and returns quickly, even in a very large table. [1] Each new record must also be added to the index, which takes extra time on every insert.',
      ru: '[1] Индекс — это структура поиска, которая указывает на строки по каждому StudentID, поэтому СУБД не нужно проверять каждую строку. [1] Запрос по одному ученику читает намного меньше строк и возвращает ответ быстро, даже в очень большой таблице. [1] Каждую новую запись нужно добавить и в индекс, а это требует дополнительного времени при каждой вставке.',
    },
    origin: 'original',
  },
];
