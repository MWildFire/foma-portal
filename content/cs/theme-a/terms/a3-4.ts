import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'a3-4-nosql',
    term: { en: 'NoSQL database', ru: 'нереляционная база данных (NoSQL database)' },
    def: {
      en: 'A database that stores each record as a document with a flexible schema, instead of spreading it across related tables. It is designed to scale well, so it suits very large volumes of data and high numbers of users.',
      ru: 'База данных, которая хранит каждую запись как документ с гибкой схемой, а не разносит её по связанным таблицам. Она рассчитана на хорошее масштабирование, поэтому подходит для очень больших объёмов данных и большого числа пользователей.',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 215' },
    example: {
      en: 'A product page reads one document that holds all of a product’s attributes, so it needs no joins between tables.',
      ru: 'Страница товара читает один документ, в котором хранятся все атрибуты товара, поэтому соединять таблицы не нужно.',
    },
    pitfall: {
      en: 'NoSQL is not automatically better than a relational database. It suits large volumes and high user loads, while related tables suit data with many links between records.',
      ru: 'NoSQL не лучше реляционной базы автоматически. Он подходит для больших объёмов и высокой нагрузки, а связанные таблицы лучше там, где записи во многом связаны между собой.',
    },
  },
  {
    id: 'a3-4-cloud-database',
    term: { en: 'Cloud-based database (PaaS model)', ru: 'облачная база данных (cloud-based database, модель PaaS)' },
    def: {
      en: 'A database with a conventional structure that runs on a remote computing platform, so it can be reached from anywhere and scaled up or down on demand. Network distance adds latency, which can slow access.',
      ru: 'База данных с привычной структурой, которая работает на удалённой вычислительной платформе, поэтому к ней можно обратиться откуда угодно и масштабировать её по требованию. Расстояние по сети добавляет задержку, которая может замедлить доступ.',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 215' },
    example: {
      en: 'A retailer hosts its orders database with a cloud provider, adds capacity before the holiday season and reduces it afterwards.',
      ru: 'Розничная сеть размещает базу заказов у облачного провайдера, добавляет мощности перед праздниками и уменьшает их после.',
    },
    pitfall: {
      en: 'Cloud hosting does not remove latency. A server far away still adds delay to every request.',
      ru: 'Облако не убирает задержку: удалённый сервер всё равно добавляет время к каждому запросу.',
    },
  },
  {
    id: 'a3-4-spatial-database',
    term: { en: 'Spatial database', ru: 'пространственная база данных (spatial database)' },
    def: {
      en: 'A database designed to hold map-type data, such as points, lines and polygons, and to answer questions about how these shapes relate to each other. It often forms the data layer of a geographic information system (GIS).',
      ru: 'База данных, созданная для хранения картографических данных, таких как точки, линии и полигоны, и для ответов на вопросы о том, как эти объекты связаны между собой. Часто она служит уровнем данных географической информационной системы (ГИС).',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 216' },
    example: {
      en: 'A city council stores bus stops as points and district borders as polygons, then queries which stops fall inside one district.',
      ru: 'Городской совет хранит остановки как точки, а границы районов как полигоны, и запрашивает, какие остановки попадают внутрь одного района.',
    },
    pitfall: {
      en: 'A spatial database is not an ordinary database with a map picture attached. It stores the geometry and answers geometric queries such as distance or overlap.',
      ru: 'Пространственная база — это не обычная база с картинкой карты: она хранит геометрию и отвечает на геометрические запросы, например о расстоянии или пересечении.',
    },
  },
  {
    id: 'a3-4-in-memory-database',
    term: { en: 'In-memory database', ru: 'база данных в оперативной памяти (in-memory database)' },
    def: {
      en: 'A database that keeps all of its stored data in RAM instead of on backing storage. It is very fast for real-time work, but a crash can wipe out the data unless extra protection, such as NVRAM, is used.',
      ru: 'База данных, которая хранит все свои данные в оперативной памяти (RAM), а не на накопителе. Она очень быстра при работе в реальном времени, но сбой может стереть данные, если не применена дополнительная защита, например энергонезависимая память NVRAM.',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 216' },
    example: {
      en: 'A device that reacts to sensor readings within milliseconds keeps its working data in an in-memory database.',
      ru: 'Устройство, которое реагирует на показания датчиков за миллисекунды, хранит рабочие данные в базе в оперативной памяти.',
    },
    pitfall: {
      en: 'Speed does not mean safety. RAM loses its contents when power is lost, so a crash can destroy the whole database.',
      ru: 'Скорость не означает безопасность: оперативная память теряет содержимое без питания, поэтому сбой может уничтожить всю базу.',
    },
  },
  {
    id: 'a3-4-data-warehouse',
    term: { en: 'Data warehouse', ru: 'хранилище данных (data warehouse)' },
    def: {
      en: 'An append-only repository of historical data, collected from many sources and used to analyse trends and support business decisions rather than to process individual transactions.',
      ru: 'Хранилище, в которое данные только добавляются (append-only): в нём накапливаются исторические данные из многих источников, которые используют для анализа трендов и бизнес-решений, а не для обработки отдельных операций.',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 217' },
    example: {
      en: 'A chain of shops loads each night’s sales from every till into one warehouse. Old sales are never edited, so managers can compare this year with earlier years.',
      ru: 'Сеть магазинов каждую ночь загружает продажи со всех касс в одно хранилище. Старые продажи никогда не редактируются, поэтому руководство может сравнивать этот год с предыдущими.',
    },
    pitfall: {
      en: 'A data warehouse is not a transactional database. It is not used to process individual orders or payments.',
      ru: 'Хранилище данных — не транзакционная база: в нём не обрабатывают отдельные заказы или платежи.',
    },
  },
  {
    id: 'a3-4-etl',
    term: { en: 'Extract, transform and load (ETL)', ru: 'извлечение, преобразование и загрузка (extract, transform and load, ETL)' },
    def: {
      en: 'The three-stage process that moves data into a data warehouse. Data is extracted from many sources, transformed by cleaning and reformatting it, and then loaded into the warehouse.',
      ru: 'Трёхэтапный процесс переноса данных в хранилище: данные извлекают из многих источников, преобразуют, очищая и приводя к нужному формату, и затем загружают в хранилище.',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 219' },
    example: {
      en: 'A coffee chain extracts order records from each branch, removes duplicate receipts and converts all prices to one currency, then loads the result into its warehouse.',
      ru: 'Сеть кофеен извлекает записи о заказах из каждого филиала, удаляет дубликаты чеков и переводит все цены в одну валюту, затем загружает результат в хранилище.',
    },
    pitfall: {
      en: 'Transform is more than formatting. It includes cleaning, such as correcting errors, filtering unwanted records and checking data against the warehouse rules.',
      ru: 'Преобразование — это не только форматирование: оно включает очистку, например исправление ошибок, фильтрацию лишних записей и проверку данных по правилам хранилища.',
    },
  },
  {
    id: 'a3-4-olap',
    term: { en: 'Online analytical processing (OLAP)', ru: 'онлайн-аналитическая обработка (online analytical processing, OLAP)' },
    def: {
      en: 'A way of analysing databases that lets users query and examine summarised data, usually from several viewpoints at once.',
      ru: 'Способ анализа баз данных, который позволяет запрашивать и изучать обобщённые данные, обычно сразу с нескольких точек зрения.',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 220' },
    example: {
      en: 'A manager compares sales by region, product and quarter in one view, then drills down into one region to see which month caused a dip.',
      ru: 'Руководитель сравнивает продажи по регионам, товарам и кварталам в одном представлении, затем детализирует один регион, чтобы увидеть месяц со спадом.',
    },
    pitfall: {
      en: 'OLAP works on data that has already been organised into cubes, while data mining works on raw data. They are different tools.',
      ru: 'OLAP работает с данными, которые уже организованы в кубы, а интеллектуальный анализ — с сырыми данными. Это разные инструменты.',
    },
  },
  {
    id: 'a3-4-olap-cube',
    term: { en: 'OLAP cube', ru: 'OLAP-куб (OLAP cube)' },
    def: {
      en: 'A multi-dimensional table in which data is organised along several axes, with each axis showing one dimension such as customer, product or time, so that the data can be viewed from many angles.',
      ru: 'Многомерная таблица, в которой данные организованы по нескольким осям. Каждая ось задаёт одно измерение, например клиента, товар или время, поэтому данные можно рассматривать с разных сторон.',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 221' },
    example: {
      en: 'A cube with axes for product, branch and month lets an analyst view the sales of one product in one branch during one month.',
      ru: 'Куб с осями «товар», «филиал» и «месяц» позволяет увидеть продажи одного товара в одном филиале за один месяц.',
    },
    pitfall: {
      en: 'A cube is a pre-processed view built from cleaned warehouse data, not a separate set of raw records.',
      ru: 'Куб — это заранее обработанное представление очищенных данных хранилища, а не отдельный набор сырых записей.',
    },
  },
  {
    id: 'a3-4-data-mining',
    term: { en: 'Data mining', ru: 'интеллектуальный анализ данных (data mining)' },
    def: {
      en: 'The use of raw, unprepared data from a data warehouse to find patterns, trends and relationships that can be turned into useful information, for example through classification, clustering or association rule discovery.',
      ru: 'Использование исходных, неподготовленных данных из хранилища для поиска закономерностей, тенденций и связей, которые можно превратить в полезную информацию, например с помощью классификации, кластеризации или поиска ассоциативных правил.',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 223' },
    example: {
      en: 'A shop finds that customers who buy coffee beans often also buy paper filters, and then offers the two as a bundle.',
      ru: 'Магазин выясняет, что покупатели зёрен кофе часто берут и бумажные фильтры, и предлагает эти товары в наборе.',
    },
    pitfall: {
      en: 'Patterns found by data mining are not automatically true. Bias in the data, such as selection bias or overfitting, can create links that do not exist.',
      ru: 'Закономерности, найденные интеллектуальным анализом, не обязательно верны: смещение в данных, например выборочное смещение или переобучение, может создать связи, которых нет.',
    },
  },
  {
    id: 'a3-4-distributed-database',
    term: { en: 'Distributed database', ru: 'распределённая база данных (distributed database)' },
    def: {
      en: 'A single logical database whose segments are housed in different locations, such as several computers, sites or cloud servers, but which must look and behave like one database to its users.',
      ru: 'Одна логическая база данных, части которой хранятся в разных местах, например на нескольких компьютерах, площадках или облачных серверах, но для пользователей она должна выглядеть и работать как единая база.',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 228' },
    example: {
      en: 'A bank keeps the accounts of each country on local servers, while the head office can query all of them as one database.',
      ru: 'Банк хранит счета каждой страны на локальных серверах, а головной офис может запрашивать их все как одну базу.',
    },
    pitfall: {
      en: 'Distributed does not mean copied. A distributed database may split data into fragments, copy it through replication, or do both.',
      ru: 'Распределённая не значит «скопированная»: данные могут быть разбиты на фрагменты, скопированы репликацией или и то и другое.',
    },
  },
  {
    id: 'a3-4-fragmentation',
    term: { en: 'Fragmentation', ru: 'фрагментация (fragmentation)' },
    def: {
      en: 'Splitting a distributed database into smaller parts, called fragments, and storing each fragment at a different site. The fragments can be combined to rebuild the whole database.',
      ru: 'Разделение распределённой базы на меньшие части, которые называют фрагментами; каждый фрагмент хранится на своей площадке. Фрагменты можно объединить и восстановить всю базу.',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 229' },
    example: {
      en: 'A hotel chain stores the bookings of each hotel as one fragment on that hotel’s own server.',
      ru: 'Сеть отелей хранит бронирования каждого отеля как один фрагмент на сервере этого отеля.',
    },
    pitfall: {
      en: 'Fragmentation gives no backup. Each fragment exists at one site only, so a failed site can make its data unavailable.',
      ru: 'Фрагментация не даёт резервной копии: каждый фрагмент существует только на одной площадке, поэтому отказ площадки делает её данные недоступными.',
    },
  },
  {
    id: 'a3-4-replication',
    term: { en: 'Replication', ru: 'репликация (replication)' },
    def: {
      en: 'Storing copies of the same data at more than one site, so that the data stays available if one site has a problem. The copies must be kept consistent, which adds processing overhead.',
      ru: 'Хранение копий одних и тех же данных на нескольких площадках, чтобы данные оставались доступными при проблеме на одной из них. Копии нужно держать согласованными, и это добавляет нагрузку на обработку.',
    },
    syllabus: 'A3.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A3.4, p. 232' },
    example: {
      en: 'A payments company keeps a full copy of its account data in two data centres, so a fault in one centre does not stop payments.',
      ru: 'Платёжная компания хранит полную копию данных о счетах в двух дата-центрах, поэтому сбой в одном из них не останавливает платежи.',
    },
    pitfall: {
      en: 'Replication is not fragmentation. Replication copies the same data to several sites, while fragmentation splits the data so that each part lives at one site.',
      ru: 'Репликация — это не фрагментация: репликация копирует одни и те же данные на несколько площадок, а фрагментация делит данные так, что каждая часть живёт на одной площадке.',
    },
  },
];
