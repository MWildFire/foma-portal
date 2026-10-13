import type { Question } from '../../../../src/contract/types';

// Topic A1.1 Computer hardware and operation (P1, section A). All scenarios and markschemes are original.
// Calculations are checked: 6 x 4 x 2 = 48 ns; 8 + 5 x 2 = 18 ns; 48 / 18 = 2.67.

export const questions: Question[] = [
  {
    id: 'a1-1-q01',
    subject: 'cs',
    topicIds: ['a1-1-hardware'],
    paper: 'P1',
    section: 'A',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'A classroom PC always runs a fixed set of start-up instructions before the operating system loads. These instructions are kept on a chip whose contents survive when the power is switched off. Outline the role of this chip during start-up.',
      ru: 'Школьный ПК всегда выполняет набор фиксированных инструкций запуска до загрузки операционной системы. Эти инструкции хранятся в микросхеме, содержимое которой сохраняется при выключении питания. Кратко опишите роль этой микросхемы при запуске.',
    },
    markscheme: {
      en: '[1] The chip is ROM, holding the BIOS or firmware that the CPU reads first to initialize the basic hardware. [1] ROM is non-volatile, so the instructions are still there at the next power-on. (Accept: the CPU then loads the operating system from secondary storage into RAM.)',
      ru: '[1] Это ROM: в ней хранятся BIOS или прошивка, которые ЦП читает первыми, чтобы инициализировать базовое оборудование. [1] ROM энергонезависима, поэтому инструкции сохраняются и доступны при следующем включении. (Допускается: затем ЦП загружает операционную систему из вторичной памяти в RAM.)',
    },
    origin: 'original',
  },
  {
    id: 'a1-1-q02',
    subject: 'cs',
    topicIds: ['a1-1-hardware'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Describe',
    prompt: {
      en: 'The program counter of a CPU holds the address 0x0A20. The instruction stored at that address is MUL R4, R5, R6. Describe the fetch phase for this instruction, naming the bus that carries the address and the signal that requests the instruction.',
      ru: 'Счётчик команд (PC) процессора хранит адрес 0x0A20. По этому адресу записана инструкция MUL R4, R5, R6. Опишите фазу выборки (fetch) для этой инструкции, назвав шину, которая передаёт адрес, и сигнал, который запрашивает инструкцию.',
    },
    markscheme: {
      en: '[1] The address 0x0A20 is copied from the PC into the MAR. [1] The address is sent to the memory controller on the address bus. [1] A read signal on the control bus requests the instruction, which comes back on the data bus into the MDR and is then placed in the IR.',
      ru: '[1] Адрес 0x0A20 копируется из PC в MAR. [1] Адрес передаётся контроллеру памяти по адресной шине. [1] Сигнал чтения (read) по шине управления запрашивает инструкцию; она возвращается по шине данных в MDR и затем помещается в IR.',
    },
    origin: 'original',
  },
  {
    id: 'a1-1-q03',
    subject: 'cs',
    topicIds: ['a1-1-hardware'],
    paper: 'P1',
    section: 'A',
    marks: 1,
    command: 'State',
    prompt: {
      en: 'A company rents virtual servers and storage over the internet from a provider. It installs its own operating system and accounting software on them and controls their configuration. State the cloud service model the company uses.',
      ru: 'Компания арендует виртуальные серверы и хранилище через интернет у провайдера. Она сама устанавливает на них свою операционную систему и бухгалтерскую программу и управляет их настройками. Укажите, какую модель облачных сервисов использует компания.',
    },
    markscheme: {
      en: '[1] Infrastructure as a service (IaaS).',
      ru: '[1] Инфраструктура как услуга (IaaS).',
    },
    origin: 'original',
  },
  {
    id: 'a1-1-q04',
    subject: 'cs',
    topicIds: ['a1-1-hardware'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'A bank trains a neural network to detect fraudulent card payments on a workstation with a CPU and a GPU. Most of the training time is spent on very large numbers of matrix multiplications. Explain why the GPU is well suited to this part of the training.',
      ru: 'Банк обучает нейронную сеть выявлять мошеннические платежи картами на рабочей станции с ЦП и GPU. Большая часть времени обучения уходит на огромное количество операций умножения матриц. Объясните, почему GPU хорошо подходит для этой части обучения.',
    },
    markscheme: {
      en: '[1] The GPU has thousands of smaller cores that can work at the same time (parallel processing). [1] Each matrix multiplication splits into many independent calculations, so the same operation can be applied to many values at once (SIMD). [1] High throughput and high-bandwidth memory let the GPU move large data sets to its cores quickly, which shortens the training time.',
      ru: '[1] У GPU тысячи более простых ядер, которые работают одновременно (параллельная обработка). [1] Умножение матриц распадается на множество независимых вычислений, и одна и та же операция применяется сразу ко многим значениям (SIMD). [1] Высокая пропускная способность и память с высокой полосой пропускания позволяют быстро передавать большие объёмы данных ядрам, что сокращает время обучения.',
    },
    origin: 'original',
  },
  {
    id: 'a1-1-q05',
    subject: 'cs',
    topicIds: ['a1-1-hardware'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Compare',
    prompt: {
      en: 'A school IT technician compares a CPU and a GPU for two jobs: running the operating system, and rendering a 3D animation. Compare the CPU and the GPU in terms of their design philosophy and the type of job each suits better. Refer to both processors in every point.',
      ru: 'Школьный IT-специалист сравнивает ЦП и GPU для двух задач: работа операционной системы и рендеринг 3D-анимации. Сравните ЦП и GPU по философии проектирования и по тому, для какой задачи каждый подходит лучше. В каждом пункте упоминайте оба процессора.',
    },
    markscheme: {
      en: '[1] Design philosophy: the CPU has fewer, more powerful cores and is built for flexibility and low latency; the GPU has many simpler cores and is built for high throughput. [1] Core speed: each CPU core is faster and more powerful on its own, while each GPU core is slower but thousands of them work in parallel. [1] Suitability: the CPU suits the operating system because it handles varied, sequential instructions; the GPU suits rendering because it applies the same operation to many pixels at once.',
      ru: '[1] Философия: у ЦП меньше, но мощнее ядер, он рассчитан на гибкость и низкую задержку; у GPU много более простых ядер, он рассчитан на высокую пропускную способность. [1] Скорость ядер: каждое ядро ЦП быстрее и мощнее по отдельности, а каждое ядро GPU медленнее, но тысячи таких ядер работают параллельно. [1] Пригодность: ЦП подходит для операционной системы, потому что обрабатывает разнообразные последовательные инструкции; GPU подходит для рендеринга, потому что применяет одну операцию ко многим пикселям сразу.',
    },
    origin: 'original',
  },
  {
    id: 'a1-1-q06',
    subject: 'cs',
    topicIds: ['a1-1-hardware'],
    paper: 'P1',
    section: 'A',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'A processor core uses a pipeline with four stages (fetch, decode, execute, write back). Each stage takes 2 ns. Six instructions are run one after another. Calculate the total time without pipelining, the total time with pipelining, and the speed-up of the pipelined version. Show your working.',
      ru: 'Ядро процессора использует конвейер из четырёх этапов (fetch, decode, execute, write back). Каждый этап занимает 2 нс. Шесть инструкций выполняются одна за другой. Рассчитайте общее время без конвейеризации, общее время с конвейеризацией и ускорение конвейерной версии. Покажите ход вычислений.',
    },
    markscheme: {
      en: '[1] Without pipelining: 6 × 4 × 2 ns = 48 ns. [1] With pipelining: the first instruction takes 4 × 2 = 8 ns, and each of the other 5 instructions finishes 2 ns after the one before it, so 8 + 5 × 2 = 18 ns. [1] Speed-up = 48 ÷ 18 ≈ 2.7 (accept 2.67).',
      ru: '[1] Без конвейеризации: 6 × 4 × 2 нс = 48 нс. [1] С конвейеризацией: первая инструкция занимает 4 × 2 = 8 нс, а каждая из остальных 5 инструкций завершается через 2 нс после предыдущей: 8 + 5 × 2 = 18 нс. [1] Ускорение = 48 ÷ 18 ≈ 2,7 (принимается 2,67).',
    },
    answer: '48 ns without pipelining; 18 ns with pipelining; speed-up about 2.67',
    origin: 'original',
  },
  {
    id: 'a1-1-q07',
    subject: 'cs',
    topicIds: ['a1-1-hardware'],
    paper: 'P1',
    section: 'A',
    marks: 5,
    command: 'Evaluate',
    prompt: {
      en: 'A small film studio must choose the storage for its editing workstation. Option A is a 2 TB SSD. Option B is an 8 TB HDD, which costs less per gigabyte. The workstation edits large video files for current projects, and older projects are kept on a separate archive. Evaluate both options for the workstation and justify which drive the studio should choose.',
      ru: 'Небольшая киностудия выбирает накопитель для своей монтажной станции. Вариант A — SSD на 2 ТБ. Вариант B — HDD на 8 ТБ, который дешевле за гигабайт. Станция монтирует большие видеофайлы текущих проектов, а старые проекты хранятся в отдельном архиве. Оцените оба варианта для станции и обоснуйте, какой накопитель стоит выбрать.',
    },
    markscheme: {
      en: '[1] SSD strength: much faster data access and transfer than an HDD, which suits editing large video files. [1] SSD limitation: more expensive per gigabyte, and flash cells have a limited number of write cycles (wear levelling reduces the risk). [1] HDD strength: large capacity at a lower cost per gigabyte, suitable for an archive. [1] HDD limitation: slower and noisier, and its moving mechanical parts make it less durable. [1] Justified conclusion, for example: choose the SSD for active editing, where speed matters most, and keep the archive on the HDD.',
      ru: '[1] Сильная сторона SSD: намного быстрее доступ к данным и передача, что важно для монтажа больших видеофайлов. [1] Слабая сторона SSD: дороже за гигабайт, а ячейки флеш-памяти выдерживают ограниченное число циклов записи (выравнивание износа снижает риск). [1] Сильная сторона HDD: большой объём при меньшей цене за гигабайт, подходит для архива. [1] Слабая сторона HDD: медленнее и шумнее, а движущиеся механические части делают его менее надёжным. [1] Обоснованный вывод, например: выбрать SSD для активного монтажа, где важнее всего скорость, а архив хранить на HDD.',
    },
    origin: 'original',
  },
  {
    id: 'a1-1-q08',
    subject: 'cs',
    topicIds: ['a1-1-hardware'],
    paper: 'P1',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'A scanner stores a black-and-white page as a long string of W (white) and B (black) characters, and most of the string is long runs of W. A different file contains random text such as ABCDEF. Explain why run-length encoding would be useful for the scanned page but would not help the random text.',
      ru: 'Сканер сохраняет чёрно-белую страницу как длинную строку символов W (белый) и B (чёрный), и в большей части строки стоят длинные серии W. Другой файл содержит случайный текст, например ABCDEF. Объясните, почему кодирование длин серий (RLE) полезно для страницы, но не помогает случайному тексту.',
    },
    markscheme: {
      en: '[1] RLE replaces each run of identical characters with a count and the character, so the long runs of W compress well. [1] Random text has few or no runs, so each character is replaced by a count and itself, and the file grows. [1] Example: ABCDEF (6 characters) becomes 1A1B1C1D1E1F (12 characters). [1] RLE is lossless, so the scanned page can be rebuilt exactly from the compressed version.',
      ru: '[1] RLE заменяет каждую серию одинаковых символов числом повторов и самим символом, поэтому длинные серии W хорошо сжимаются. [1] В случайном тексте почти нет серий, поэтому каждый символ заменяется парой «число + символ», и файл растёт. [1] Пример: ABCDEF (6 символов) превращается в 1A1B1C1D1E1F (12 символов). [1] RLE работает без потерь, поэтому страницу можно точно восстановить из сжатой версии.',
    },
    origin: 'original',
  },
];
