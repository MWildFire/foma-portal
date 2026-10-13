import type { Question } from '../../../../src/contract/types';

// New questions for topic A3.1 Database fundamentals. The ported set (port-a3-1-*) has no question on
// insert, deletion and update anomalies and none on the benefits of a relational database, so these two
// fill those gaps. Scenarios are original (a bike-hire shop and a cinema), not taken from the textbook.
export const questions: Question[] = [
  {
    id: 'a3-1-q01',
    subject: 'cs',
    topicIds: ['a3-1-fundamentals'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Describe',
    prompt: {
      en: 'A bike-hire shop keeps every hire in the flat-file table HIRE shown in the stimulus. Describe two anomalies that the shop could face when it changes a customer’s phone number, or when it deletes the only hire record of a bike. Refer to the rows in your answer.',
      ru: 'В магазине проката велосипедов каждый прокат хранится в плоской таблице HIRE из условия. Опишите две аномалии, с которыми магазин может столкнуться, если изменит телефон клиента или удалит единственную запись о прокате велосипеда. В ответе сошлитесь на строки таблицы.',
    },
    stimulus: {
      en: 'Table HIRE (flat file). Row 1: Hire_ID 1, Customer_Name Ana Lopez, Customer_Phone 555-0101, Bike_ID B7, Bike_Model City bike, Daily_Price 30. Row 2: Hire_ID 2, Customer_Name Ana Lopez, Customer_Phone 555-0101, Bike_ID B9, Bike_Model Mountain bike, Daily_Price 45. Row 3: Hire_ID 3, Customer_Name Omar Haddad, Customer_Phone 555-0303, Bike_ID B7, Bike_Model City bike, Daily_Price 30.',
      ru: 'Таблица HIRE (плоский файл). Строка 1: Hire_ID 1, Customer_Name Анна Лопес, Customer_Phone 555-0101, Bike_ID B7, Bike_Model городской велосипед, Daily_Price 30. Строка 2: Hire_ID 2, Customer_Name Анна Лопес, Customer_Phone 555-0101, Bike_ID B9, Bike_Model горный велосипед, Daily_Price 45. Строка 3: Hire_ID 3, Customer_Name Омар Хаддад, Customer_Phone 555-0303, Bike_ID B7, Bike_Model городской велосипед, Daily_Price 30.',
    },
    markscheme: {
      en: '[1] Update anomaly: Ana Lopez’s phone number is stored in rows 1 and 2, so changing it in only one row leaves two different numbers for the same customer. [1] Consequence: the data becomes inconsistent and it is unclear which number is correct. [1] Deletion anomaly: deleting row 2, the only hire of bike B9, also deletes the model Mountain bike and the price 45 of that bike. [1] Consequence: information about bike B9 is lost, although the bike still exists and can be hired again.',
      ru: '[1] Аномалия обновления: телефон Анны Лопес хранится в строках 1 и 2, поэтому, если изменить его только в одной строке, у одного клиента окажутся два разных номера. [1] Последствие: данные становятся несогласованными, и непонятно, какой номер верный. [1] Аномалия удаления: при удалении строки 2, единственного проката велосипеда B9, пропадают модель «горный велосипед» и цена 45 этого велосипеда. [1] Последствие: теряются сведения о велосипеде B9, хотя сам велосипед существует и его можно снова взять в прокат.',
    },
    origin: 'original',
  },
  {
    id: 'a3-1-q02',
    subject: 'cs',
    topicIds: ['a3-1-fundamentals'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Describe',
    prompt: {
      en: 'A small independent cinema keeps its ticket bookings in one spreadsheet, which is a flat file. The owner plans to move the data into a relational database with linked tables. Describe two benefits of this change for the cinema.',
      ru: 'Небольшой независимый кинотеатр хранит бронирования билетов в одной таблице, то есть в плоском файле. Владелец хочет перенести данные в реляционную базу данных со связанными таблицами. Опишите два преимущества этой смены для кинотеатра.',
    },
    markscheme: {
      en: '[1] First benefit named, for example reduced data duplication, data consistency, data integrity, easy retrieval with SQL, concurrency control or security. [1] Explanation for the cinema: each customer’s details are stored once in their own table and linked to bookings by a foreign key, so there are fewer copies to keep up to date. [1] Second benefit named, for example data integrity, concurrency control or security. [1] Explanation for the cinema: a booking cannot refer to a screening that does not exist, and several staff can take bookings at the same time without errors. Accept any two benefits from the topic, each linked correctly to the cinema.',
      ru: '[1] Первое преимущество названо, например: меньше дублирования данных, согласованность данных, целостность данных, удобный поиск с помощью SQL, контроль одновременного доступа или безопасность. [1] Объяснение для кинотеатра: данные о каждом клиенте хранятся один раз в своей таблице и связаны с бронированиями внешним ключом, поэтому копий меньше и обновлять их проще. [1] Второе преимущество названо, например: целостность данных, контроль одновременного доступа или безопасность. [1] Объяснение для кинотеатра: бронирование не может ссылаться на несуществующий сеанс, а несколько сотрудников могут одновременно оформлять бронирования без ошибок. Засчитываются любые два преимущества из темы, если они правильно связаны с кинотеатром.',
    },
    origin: 'original',
  },
];
