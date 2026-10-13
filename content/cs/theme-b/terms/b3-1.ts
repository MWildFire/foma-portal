import type { Term } from '../../../../src/contract/types';

// Topic B3.1 Fundamentals of OOP for a single class (P2). Definitions are in our own words, based on the key terms
// and definitions of the Oxford IB DP Computer Science Course Companion (2025), pp. 417-472.
const BOOK = 'Oxford IB DP Computer Science Course Companion (2025)';

export const terms: Term[] = [
  {
    id: 'b3-1-class',
    term: { en: 'Class', ru: 'класс (class)' },
    def: {
      en: 'A blueprint for objects. It lists the attributes (variables that store data) and the methods (actions) that every object made from it will have.',
      ru: 'План, или чертёж, объектов. Он задаёт атрибуты (переменные, которые хранят данные) и методы (действия), которые будут у каждого объекта, созданного по нему.',
    },
    syllabus: 'B3.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.1, p. 417' },
    example: {
      en: 'Song is a class with the attributes title and length and the method `play()`.',
      ru: 'Song — это класс с атрибутами title и length и методом `play()`.',
    },
    pitfall: {
      en: 'A class is not an object. It does not hold the values of any particular item until objects are created from it.',
      ru: 'Класс — это не объект. Он не хранит значения конкретного предмета, пока из него не созданы объекты.',
    },
  },
  {
    id: 'b3-1-object',
    term: { en: 'Object', ru: 'объект (object)' },
    def: {
      en: 'An instance of a class whose attributes have been given values. It exists in memory, so the program can use it.',
      ru: 'Экземпляр класса, атрибутам которого присвоены значения. Он существует в памяти, поэтому программа может с ним работать.',
    },
    syllabus: 'B3.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.1, p. 417' },
    example: {
      en: 'first_track is an object of the class Song, with its own title and length.',
      ru: 'first_track — объект класса Song со своими значениями title и length.',
    },
  },
  {
    id: 'b3-1-attribute',
    term: { en: 'Attribute (instance variable)', ru: 'атрибут (attribute)' },
    def: {
      en: 'A variable inside a class that stores one piece of data about each object, such as a name or an age. Every object keeps its own value.',
      ru: 'Переменная внутри класса, которая хранит один элемент данных о каждом объекте, например имя или возраст. Каждый объект хранит собственное значение (переменная экземпляра, instance variable).',
    },
    syllabus: 'B3.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.1, p. 418' },
    example: { en: 'In a Student class, the line `self.name = name` creates an attribute: every Student object keeps its own name.', ru: 'В классе Student строка `self.name = name` создаёт атрибут: каждый объект Student хранит своё имя.' },
    pitfall: {
      en: 'An attribute belongs to one object. A value shared by all objects is a static variable, not an ordinary attribute.',
      ru: 'Атрибут принадлежит одному объекту. Значение, общее для всех объектов, — это статическая переменная, а не обычный атрибут.',
    },
  },
  {
    id: 'b3-1-method',
    term: { en: 'Method (behaviour)', ru: 'метод (method)' },
    def: {
      en: 'A named block of code inside a class that describes what an object can do, or that reads or changes its data. Other code calls it by name.',
      ru: 'Именованный фрагмент кода внутри класса, который описывает действие объекта или читает и меняет его данные. Другой код вызывает его по имени.',
    },
    syllabus: 'B3.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.1, p. 418' },
    example: {
      en: '`get_title()` returns the title stored in a Film object.',
      ru: '`get_title()` возвращает название, которое хранится в объекте Film.',
    },
  },
  {
    id: 'b3-1-constructor',
    term: { en: 'Constructor', ru: 'конструктор (constructor)' },
    def: {
      en: 'A special method that runs when an object is created. It receives the starting values and sets up the attributes of the new object.',
      ru: 'Особый метод, который выполняется при создании объекта. Он получает начальные значения и задаёт атрибуты нового объекта.',
    },
    syllabus: 'B3.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.1, p. 420' },
    example: { en: 'The method `def __init__(self, name): self.name = name` runs when `Student("Ada")` creates an object, so each new Student starts with a name.', ru: 'Метод `def __init__(self, name): self.name = name` выполняется, когда `Student("Ada")` создаёт объект, поэтому каждый новый объект Student получает имя.' },
    pitfall: {
      en: 'In Python the constructor is named __init__, and its first parameter is always self.',
      ru: 'В Python конструктор называется __init__, а его первый параметр всегда self.',
    },
  },
  {
    id: 'b3-1-instantiation',
    term: { en: 'Instantiation', ru: 'создание экземпляра (instantiation)' },
    def: {
      en: 'Creating an object from a class by calling its constructor and giving starting values to its instance variables. The object then occupies a place in memory.',
      ru: 'Создание объекта на основе класса: вызывается конструктор, а переменным экземпляра передаются начальные значения. После этого объект занимает место в памяти.',
    },
    syllabus: 'B3.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.1, p. 420' },
    example: {
      en: '`Film("Heat", 170)` instantiates a Film object whose title is Heat.',
      ru: 'Вызов `Film("Heat", 170)` создаёт объект Film с названием Heat.',
    },
  },
  {
    id: 'b3-1-uml-class-diagram',
    term: { en: 'UML class diagram', ru: 'UML-диаграмма классов (UML class diagram)' },
    def: {
      en: 'A standard diagram of a class in three compartments: the class name, the attributes and the methods. Each attribute and method shows its visibility sign, its name and its types.',
      ru: 'Стандартная диаграмма класса из трёх разделов: имени класса, атрибутов и методов. У каждого атрибута и метода указаны знак видимости, имя и типы данных.',
    },
    syllabus: 'B3.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.1, p. 423' },
    example: {
      en: '- title: String in a UML class diagram means that title is a private attribute of type String.',
      ru: '- title: String на UML-диаграмме означает, что title — приватный атрибут типа String.',
    },
    pitfall: {
      en: 'The diagram is a design picture, not code. It must still match the code exactly, including the visibility signs.',
      ru: 'Диаграмма — это изображение проекта, а не код. Она всё равно должна точно совпадать с кодом, включая знаки видимости.',
    },
  },
  {
    id: 'b3-1-static',
    term: { en: 'Static variable or method', ru: 'статическая переменная или метод (static variable or method)' },
    def: {
      en: 'A variable or method attached to the class itself, not to any one object. There is one shared copy, used through the class name.',
      ru: 'Переменная или метод, которые относятся к самому классу, а не к отдельному объекту. Существует одна общая копия, к ней обращаются через имя класса.',
    },
    syllabus: 'B3.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.1, p. 425' },
    example: {
      en: 'Member.total_members counts how many Member objects have been created.',
      ru: 'Member.total_members показывает, сколько объектов Member создано.',
    },
    pitfall: {
      en: 'A static value is not copied into each object. Changing it through the class name changes it for every object.',
      ru: 'Статическое значение не копируется в каждый объект. Если изменить его через имя класса, изменится оно для всех объектов.',
    },
  },
  {
    id: 'b3-1-encapsulation',
    term: { en: 'Encapsulation', ru: 'инкапсуляция (encapsulation)' },
    def: {
      en: 'Hiding the data of a class inside the class itself, so that other code can reach it only through public methods. This supports code reuse and easier maintenance.',
      ru: 'Скрытие данных внутри класса: внешний код получает к ним доступ только через публичные методы класса. Это облегчает повторное использование кода и его сопровождение.',
    },
    syllabus: 'B3.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.1, p. 435' },
    example: { en: 'A class keeps its balance in the private attribute `self.__balance`, so outside code changes it only through the method `deposit()`, where the checks run.', ru: 'Класс хранит баланс в закрытом атрибуте `self.__balance`, поэтому внешний код меняет его только через метод `deposit()`, где выполняются проверки.' },
    pitfall: {
      en: 'Putting attributes and methods in one class is not enough. The attributes must also be hidden, for example by making them private.',
      ru: 'Одного объединения атрибутов и методов в одном классе недостаточно. Атрибуты также нужно скрыть, например сделать приватными.',
    },
  },
  {
    id: 'b3-1-access-modifier',
    term: { en: 'Access modifier', ru: 'модификатор доступа (access modifier)' },
    def: {
      en: 'A keyword that sets where a variable or method can be used: private (only inside its own class), protected (its class and related classes, such as subclasses) or public (any class).',
      ru: 'Ключевое слово, которое задаёт, где можно использовать переменную или метод: private (только внутри своего класса), protected (свой класс и связанные с ним классы, например подклассы) или public (любой класс).',
    },
    syllabus: 'B3.1',
    papers: ['P2'],
    src: { kind: 'textbook', title: BOOK, locator: 'ch. B3.1, p. 436' },
    example: {
      en: 'In Python, `self.__balance` is private, while `self.balance` is public.',
      ru: 'В Python self.__balance — приватный атрибут, а self.balance — публичный.',
    },
    pitfall: {
      en: 'In Python the double underscore only renames the attribute, so privacy is a rule the programmer keeps rather than a hard lock.',
      ru: 'В Python двойное подчёркивание только переименовывает атрибут, поэтому приватность — это правило, которое соблюдает программист, а не жёсткая блокировка.',
    },
  },
];
