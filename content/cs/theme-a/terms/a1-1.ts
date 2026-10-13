import type { Term } from '../../../../src/contract/types';

// Topic A1.1 Computer hardware and operation (P1). Definitions are in our own words, based on the key terms
// and definitions of the Oxford IB DP Computer Science Course Companion (2025), pp. 3-37.
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';

export const terms: Term[] = [
  {
    id: 'a1-1-alu',
    term: { en: 'Arithmetic logic unit (ALU)', ru: 'арифметико-логическое устройство (arithmetic logic unit, ALU)' },
    def: {
      en: 'The part of the CPU that carries out arithmetic operations, such as addition and subtraction, and logical operations, such as AND, OR and NOT.',
      ru: 'Часть ЦП, которая выполняет арифметические операции (например, сложение и вычитание) и логические операции (например, И, ИЛИ и НЕ).',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 4' },
    example: {
      en: 'For an addition instruction, the ALU receives the values from two registers and returns their sum.',
      ru: 'Для инструкции сложения ALU получает значения из двух регистров и возвращает их сумму.',
    },
    pitfall: {
      en: 'The ALU does not fetch or decode instructions; the control unit does that.',
      ru: 'ALU не извлекает и не декодирует инструкции: это делает устройство управления.',
    },
  },
  {
    id: 'a1-1-cu',
    term: { en: 'Control unit (CU)', ru: 'устройство управления (control unit, CU)' },
    def: {
      en: 'The CPU component that orchestrates the fetch–decode–execute cycle: it interprets each instruction and sends control signals to the other parts of the CPU.',
      ru: 'Компонент ЦП, который управляет циклом fetch–decode–execute: он расшифровывает каждую инструкцию и посылает управляющие сигналы остальным частям процессора.',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 4' },
    example: {
      en: 'For an addition instruction, the CU sends the signals that make the ALU add the two operands.',
      ru: 'Для инструкции сложения CU посылает сигналы, которые заставляют ALU сложить два операнда.',
    },
    pitfall: {
      en: 'The CU does not do the calculation itself; it tells the other units what to do.',
      ru: 'CU сама не выполняет вычислений; она указывает другим устройствам, что делать.',
    },
  },
  {
    id: 'a1-1-gpu',
    term: { en: 'Graphics processing unit (GPU)', ru: 'графический процессор (graphics processing unit, GPU)' },
    def: {
      en: 'An electronic circuit built around many processing cores, designed to handle large blocks of data in parallel; it was originally developed to speed up the creation of images.',
      ru: 'Электронная схема с большим числом вычислительных ядер, предназначенная для параллельной обработки больших блоков данных; изначально её создали для ускорения построения изображений.',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 6' },
    example: {
      en: 'A GPU applies the same colour adjustment to thousands of pixels at the same time.',
      ru: 'GPU применяет одну и ту же коррекцию цвета к тысячам пикселей одновременно.',
    },
    pitfall: {
      en: 'A GPU does not replace the CPU; it is a co-processor that takes over parallel work.',
      ru: 'GPU не заменяет ЦП: это сопроцессор, который берёт на себя параллельную работу.',
    },
  },
  {
    id: 'a1-1-volatile-memory',
    term: { en: 'Volatile memory', ru: 'энергозависимая память (volatile memory)' },
    def: {
      en: 'Memory that needs a continuous power supply to keep its data, so the stored data is lost when the power is switched off. RAM is an example.',
      ru: 'Память, которая для сохранения данных требует непрерывного питания: при выключении питания хранимые данные теряются. Примером служит RAM (оперативная память).',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 12' },
    example: {
      en: 'Unsaved work held in RAM disappears when a laptop battery runs flat.',
      ru: 'Несохранённая работа в RAM пропадает, когда батарея ноутбука полностью разряжается.',
    },
    pitfall: {
      en: 'Volatile does not mean unreliable; it means the data depends on power, which is why work is saved to storage.',
      ru: 'Энергозависимая не значит ненадёжная: данные зависят от питания, поэтому работу сохраняют в накопитель.',
    },
  },
  {
    id: 'a1-1-rom',
    term: { en: 'Read-only memory (ROM)', ru: 'постоянная память (read-only memory, ROM)' },
    def: {
      en: 'Non-volatile memory that holds the start-up instructions a computer needs, such as the BIOS or firmware; its contents normally cannot be changed during ordinary use.',
      ru: 'Энергонезависимая память, в которой хранятся инструкции, необходимые компьютеру для запуска (например, BIOS или прошивка); в обычной работе её содержимое нельзя свободно изменить.',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 13' },
    example: {
      en: 'When a PC is switched on, the CPU reads its firmware from ROM before the operating system is loaded from storage into RAM.',
      ru: 'Когда ПК включается, ЦП сначала читает прошивку из ROM, и только потом операционная система загружается из накопителя в RAM.',
    },
    pitfall: {
      en: 'ROM is not part of the everyday register, cache and RAM path; it is used mainly at start-up.',
      ru: 'ROM не входит в повседневный путь «регистры — кэш — RAM»; её используют в основном при запуске.',
    },
  },
  {
    id: 'a1-1-fde-cycle',
    term: {
      en: 'Fetch–decode–execute cycle',
      ru: 'цикл выборки, декодирования и исполнения (fetch–decode–execute cycle)',
    },
    def: {
      en: 'The repeated process in which the CPU retrieves an instruction from memory, interprets it and carries it out; it is also called the instruction cycle.',
      ru: 'Повторяющийся процесс, в ходе которого ЦП извлекает инструкцию из памяти, интерпретирует её и выполняет; также его называют циклом команд (instruction cycle).',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 16' },
    example: {
      en: 'The instruction stored at the address in the PC is fetched into the IR, decoded by the CU and executed by the ALU.',
      ru: 'Инструкция по адресу из PC попадает в IR, декодируется CU и выполняется ALU.',
    },
    pitfall: {
      en: 'The cycle repeats for every instruction, not once for each program.',
      ru: 'Цикл повторяется для каждой инструкции, а не один раз на всю программу.',
    },
  },
  {
    id: 'a1-1-pipelining',
    term: { en: 'Pipelining', ru: 'конвейеризация (pipelining)' },
    def: {
      en: 'A technique that speeds up processing by splitting the execution of a task into stages, so that several stages operate at the same time on different items.',
      ru: 'Метод повышения производительности, при котором выполнение задачи делится на этапы, и несколько этапов работают одновременно с разными элементами.',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 21' },
    example: {
      en: 'In a laundry pipeline, one load dries while the next is washed; after the first load, a finished load appears every 30 minutes instead of every 90.',
      ru: 'В «конвейере стирки» одна партия сушится, пока следующая стирается; после первой партии готовая партия появляется каждые 30 минут вместо каждых 90.',
    },
    pitfall: {
      en: 'Pipelining does not make one instruction finish sooner; it increases how many instructions finish in a given time.',
      ru: 'Конвейеризация не ускоряет завершение одной инструкции; она увеличивает число инструкций, завершаемых за заданное время.',
    },
  },
  {
    id: 'a1-1-multi-core',
    term: { en: 'Multi-core architecture', ru: 'многоядерная архитектура (multi-core architecture)' },
    def: {
      en: 'A design in which one physical processor contains several integrated cores, each able to execute instructions on its own.',
      ru: 'Архитектура, в которой один физический процессор содержит несколько интегрированных ядер, и каждое из них может выполнять инструкции самостоятельно.',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 22' },
    example: {
      en: 'A quad-core processor can run four separate threads at once, one on each core.',
      ru: 'Четырёхъядерный процессор может одновременно выполнять четыре отдельных потока, по одному на каждое ядро.',
    },
    pitfall: {
      en: 'More cores do not make a program faster automatically; the task must be divisible into parts that can run in parallel.',
      ru: 'Больше ядер сами по себе не ускоряют программу: задачу нужно делить на части, которые можно выполнять параллельно.',
    },
  },
  {
    id: 'a1-1-secondary-storage',
    term: { en: 'Secondary memory storage', ru: 'вторичная память (secondary memory storage)' },
    def: {
      en: 'Storage that the CPU cannot access directly and that keeps data for the long term, such as an HDD, an SSD or a flash drive.',
      ru: 'Накопители, к которым ЦП не обращается напрямую и которые предназначены для долговременного хранения данных, например HDD, SSD или флеш-накопитель.',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 25' },
    example: {
      en: 'Photos stored on an SSD remain there after the laptop is switched off; the CPU loads them into RAM when they are opened.',
      ru: 'Фотографии на SSD остаются после выключения ноутбука; когда их открывают, ЦП загружает их в RAM.',
    },
    pitfall: {
      en: 'Secondary storage is much slower than RAM and does not replace the registers or the cache.',
      ru: 'Вторичная память намного медленнее RAM и не заменяет регистры или кэш.',
    },
  },
  {
    id: 'a1-1-ssd',
    term: { en: 'Solid-state drive (SSD)', ru: 'твердотельный накопитель (solid-state drive, SSD)' },
    def: {
      en: 'A storage device with no moving parts that keeps data permanently in integrated circuits, typically in flash memory.',
      ru: 'Накопитель без движущихся частей, который постоянно хранит данные в интегральных схемах, как правило во флеш-памяти.',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 25' },
    example: {
      en: 'The book quotes SSD transfer rates of 2,500–7,000 MB/s, while a hard disk sustains 100–200 MB/s.',
      ru: 'В примерах учебника SSD достигает 2 500–7 000 МБ/с, а жёсткий диск выдерживает 100–200 МБ/с.',
    },
    pitfall: {
      en: 'Flash cells tolerate only a limited number of write and erase cycles, so SSDs use wear levelling to spread the wear.',
      ru: 'Ячейки флеш-памяти выдерживают ограниченное число циклов записи и стирания, поэтому SSD используют выравнивание износа (wear levelling).',
    },
  },
  {
    id: 'a1-1-rle',
    term: { en: 'Run-length encoding (RLE)', ru: 'кодирование длин серий (run-length encoding, RLE)' },
    def: {
      en: 'A simple lossless compression method that replaces each run of identical consecutive characters with a count followed by the character, so the original can be rebuilt exactly.',
      ru: 'Простой метод сжатия без потерь: каждая серия одинаковых символов, идущих подряд, заменяется числом повторов и самим символом, поэтому исходные данные восстанавливаются точно.',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 30' },
    example: {
      en: 'KKKKMM is stored as 4K2M: six characters become four.',
      ru: 'KKKKMM записывается как 4K2M: шесть символов становятся четырьмя.',
    },
    pitfall: {
      en: 'RLE needs repeated characters: ABCD becomes 1A1B1C1D, which is longer than the original.',
      ru: 'RLE нужны повторы символов: ABCD превращается в 1A1B1C1D, и это длиннее исходного.',
    },
  },
  {
    id: 'a1-1-cloud-computing',
    term: { en: 'Cloud computing', ru: 'облачные вычисления (cloud computing)' },
    def: {
      en: 'A model in which an organization uses servers, storage, databases and software over the internet and pays only for the resources it actually uses.',
      ru: 'Модель, в которой организация использует серверы, хранилища, базы данных и программы через интернет и платит только за реально используемые ресурсы.',
    },
    syllabus: 'A1.1',
    papers: ['P1'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. A1.1, p. 31' },
    example: {
      en: 'A school that rents email and file storage from a provider does not have to buy and maintain its own servers.',
      ru: 'Школа, которая арендует почту и файловое хранилище у провайдера, не покупает и не обслуживает собственные серверы.',
    },
    pitfall: {
      en: 'The cloud is not one physical place; it is a network of remote servers in data centers.',
      ru: 'Облако — не одно физическое место, а сеть удалённых серверов в дата-центрах.',
    },
  },
];
