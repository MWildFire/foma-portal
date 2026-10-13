import type { Question } from '../../../../src/contract/types';

// Topic B3.1 Fundamentals of OOP for a single class (P2). All scenarios, code and markschemes are original.
// Code answers were produced by running the stimulus code with python3 (exact printed lines, joined with \n).

export const questions: Question[] = [
  {
    id: 'b3-1-q01',
    subject: 'cs',
    topicIds: ['b3-1-oop-single-class'],
    paper: 'P2',
    marks: 3,
    command: 'Distinguish',
    prompt: {
      en: 'A music app contains the class Song, which has the attributes title and length and the method play(). The app then creates the object first_track from this class. Distinguish between the class Song and the object first_track. Use an example from this scenario in your answer.',
      ru: 'В музыкальном приложении есть класс Song с атрибутами title и length и методом play(). Затем приложение создаёт объект first_track на основе этого класса. Проведите различие между классом Song и объектом first_track. Используйте пример из этой ситуации.',
    },
    markscheme: {
      en: '[1] A class is a blueprint: it defines the attributes (title, length) and the method play() for every Song. [1] An object is an instance made from the class: first_track has its own values and exists in memory. [1] A clear contrast with an example from the scenario, such as Song being the general template while first_track holds the values of one particular track; one class can create many objects.',
      ru: '[1] Класс — это чертёж: он задаёт атрибуты (title, length) и метод play() для каждой песни. [1] Объект — экземпляр, созданный на основе класса: у first_track собственные значения, и он существует в памяти. [1] Ясное противопоставление с примером из ситуации: Song — общий шаблон, а first_track хранит значения одного конкретного трека; из одного класса можно создать много объектов.',
    },
    origin: 'original',
  },
  {
    id: 'b3-1-q02',
    subject: 'cs',
    topicIds: ['b3-1-oop-single-class'],
    paper: 'P2',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: 'A class Thermostat stores the target temperature in the attribute target_temperature, which is declared private. Identify two consequences of declaring target_temperature as private.',
      ru: 'Класс Thermostat хранит целевую температуру в атрибуте target_temperature, который объявлен приватным. Укажите два последствия того, что target_temperature объявлен приватным.',
    },
    markscheme: {
      en: '[1] Other classes cannot read or change target_temperature directly; they must use a public method, such as a getter or a setter. [1] The class can check a new value before it is stored, so invalid temperatures are refused and the data stays valid (accept: the internal storage can be changed later without breaking code that uses the public methods).',
      ru: '[1] Другие классы не могут напрямую читать или менять target_temperature; они обращаются к нему через публичный метод, например геттер или сеттер. [1] Класс может проверить новое значение до сохранения, поэтому недопустимые температуры отклоняются и данные остаются корректными (принимается: внутреннее хранение можно позже изменить, не ломая код, который использует публичные методы).',
    },
    origin: 'original',
  },
  {
    id: 'b3-1-q03',
    subject: 'cs',
    topicIds: ['b3-1-oop-single-class'],
    paper: 'P2',
    marks: 4,
    command: 'Construct',
    prompt: {
      en: 'A library app needs a class Library. A Library stores its name and the Book objects it holds. Other classes must not change the name directly, but they must be able to add a book and to ask how many books the library holds. A Book can exist without a Library, while a Library needs its books to be useful. Construct a UML class diagram for Library, written in words. Describe the three compartments, the visibility sign and type of each attribute, the visibility, parameters and return type of each method, and the type of relationship between Library and Book.',
      ru: 'Приложению библиотеки нужен класс Library. Библиотека хранит своё название и объекты Book, которые ей принадлежат. Другие классы не должны менять название напрямую, но должны уметь добавить книгу и узнать, сколько книг есть в библиотеке. Книга (Book) может существовать без библиотеки, а библиотека без книг не имеет смысла. Составьте UML-диаграмму классов для Library в виде текста. Опишите три раздела, знак видимости и тип каждого атрибута, видимость, параметры и тип возвращаемого значения каждого метода, а также тип связи между Library и Book.',
    },
    markscheme: {
      en: '[1] Three compartments in order: the class name Library, then the attributes, then the methods. [1] Attributes: the name is private (-name: String), and the Book objects are kept in a private list (-books: list of Book, or an equivalent collection). [1] Methods: add_book(book: Book) is public (+) and returns nothing (void); count_books() is public (+) and returns an integer. [1] Relationship: aggregation, shown with a hollow (transparent) diamond, because a Book can exist without the Library while the Library needs its books.',
      ru: '[1] Три раздела по порядку: имя класса Library, затем атрибуты, затем методы. [1] Атрибуты: название приватное (-name: String), а объекты Book хранятся в приватном списке (-books: list of Book или эквивалентная коллекция). [1] Методы: add_book(book: Book) публичный (+) и ничего не возвращает (void); count_books() публичный (+) и возвращает целое число. [1] Связь: агрегация, обозначается незакрашенным (прозрачным) ромбом, потому что Book может существовать без Library, а библиотеке нужны её книги.',
    },
    origin: 'original',
  },
  {
    id: 'b3-1-q04',
    subject: 'cs',
    topicIds: ['b3-1-oop-single-class'],
    paper: 'P2',
    marks: 4,
    command: 'Evaluate',
    prompt: {
      en: 'A teacher asks for a 25-line Python script that converts a list of temperatures from degrees Celsius to degrees Fahrenheit and prints each result. Evaluate the suitability of object-oriented programming for this task. Give at least one advantage and one disadvantage, then reach a conclusion.',
      ru: 'Учитель просит написать скрипт на Python из 25 строк, который переводит список температур из градусов Цельсия в градусы Фаренгейта и выводит каждый результат. Оцените, насколько объектно-ориентированное программирование подходит для этой задачи. Приведите минимум одно преимущество и один недостаток, а затем сделайте вывод.',
    },
    markscheme: {
      en: '[1] An advantage of OOP that applies here, such as encapsulation or reuse: the conversion could be placed in a class and reused in other scripts. [1] A disadvantage for this task: the overhead of classes and objects makes a short script longer and harder to follow. [1] A judgement based on the scenario: for a 25-line script that runs once, OOP is not worth the overhead. [1] A condition that would change the judgement, such as needing to store and reuse many conversion results or to add more units later.',
      ru: '[1] Преимущество ООП, которое здесь применимо, например инкапсуляция или повторное использование: преобразование можно поместить в класс и использовать в других скриптах. [1] Недостаток для этой задачи: накладные расходы на классы и объекты делают короткий скрипт длиннее и труднее для чтения. [1] Вывод по ситуации: для скрипта из 25 строк, который запускается один раз, ООП не стоит своих накладных расходов. [1] Условие, которое изменило бы вывод, например необходимость хранить и повторно использовать много результатов или добавлять новые единицы измерения.',
    },
    origin: 'original',
  },
  {
    id: 'b3-1-q05',
    subject: 'cs',
    topicIds: ['b3-1-oop-single-class'],
    paper: 'P2',
    marks: 4,
    command: 'Trace',
    prompt: {
      en: 'The program below creates three Member objects and calls their methods. Trace the program and state the four lines it prints.',
      ru: 'Программа ниже создаёт три объекта Member и вызывает их методы. Проследите выполнение программы и укажите четыре строки, которые она выводит.',
    },
    stimulus: {
      en: `\`\`\`python
class Member:
    # Class variable: one shared value for all Member objects
    total_members = 0

    def __init__(self, name, age):
        self.__name = name
        self.__age = age
        Member.total_members = Member.total_members + 1

    def get_name(self):
        return self.__name

    def is_adult(self):
        return self.__age >= 18


ana = Member("Ana", 17)
ben = Member("Ben", 30)
cy = Member("Cy", 45)

print(Member.total_members)
print(ben.get_name(), ben.is_adult())
print(ana.is_adult(), Member.total_members)
print(cy.is_adult(), Member.total_members)
\`\`\``,
      ru: `\`\`\`python
class Member:
    # Переменная класса: одно общее значение для всех объектов Member
    total_members = 0

    def __init__(self, name, age):
        self.__name = name
        self.__age = age
        Member.total_members = Member.total_members + 1

    def get_name(self):
        return self.__name

    def is_adult(self):
        return self.__age >= 18


ana = Member("Ana", 17)
ben = Member("Ben", 30)
cy = Member("Cy", 45)

print(Member.total_members)
print(ben.get_name(), ben.is_adult())
print(ana.is_adult(), Member.total_members)
print(cy.is_adult(), Member.total_members)
\`\`\``,
    },
    markscheme: {
      en: '[1] 3: the class variable total_members has been increased once by each of the three constructor calls. [1] Ben True: Ben is 30, so is_adult returns True. [1] False 3: Ana is 17, so is_adult returns False, and the shared counter is still 3. [1] True 3: Cy is 45, so is_adult returns True, and the shared counter is still 3.',
      ru: '[1] 3: классовая переменная total_members увеличена на единицу каждым из трёх вызовов конструктора. [1] Ben True: Ben 30 лет, поэтому is_adult возвращает True. [1] False 3: Ana 17 лет, поэтому is_adult возвращает False, а общий счётчик по-прежнему 3. [1] True 3: Cy 45 лет, поэтому is_adult возвращает True, а общий счётчик по-прежнему 3.',
    },
    answer: '3\nBen True\nFalse 3\nTrue 3',
    origin: 'original',
  },
  {
    id: 'b3-1-q06',
    subject: 'cs',
    topicIds: ['b3-1-oop-single-class'],
    paper: 'P2',
    marks: 3,
    command: 'Construct',
    prompt: {
      en: 'The class Phone below stores the battery level in the private attribute __battery_level. Construct the method charge(self, amount) for this class. It must increase the battery level by amount, but the level must never go above 100. Write the method in Python.',
      ru: 'Класс Phone ниже хранит уровень заряда в приватном атрибуте __battery_level. Составьте метод charge(self, amount) для этого класса. Он должен увеличивать уровень заряда на amount, но уровень никогда не должен превышать 100. Запишите метод на Python.',
    },
    stimulus: {
      en: `\`\`\`python
class Phone:
    def __init__(self, battery_level):
        # Private attribute: a whole number from 0 to 100
        self.__battery_level = battery_level

    def get_battery(self):
        return self.__battery_level


my_phone = Phone(40)
print(my_phone.get_battery())
\`\`\``,
      ru: `\`\`\`python
class Phone:
    def __init__(self, battery_level):
        # Приватный атрибут: целое число от 0 до 100
        self.__battery_level = battery_level

    def get_battery(self):
        return self.__battery_level


my_phone = Phone(40)
print(my_phone.get_battery())
\`\`\``,
    },
    markscheme: {
      en: '[1] Correct method header: def charge(self, amount). [1] Adds amount to the private attribute, for example self.__battery_level = self.__battery_level + amount. [1] Limits the result to 100, for example with an if statement or with min(100, self.__battery_level + amount).',
      ru: '[1] Правильный заголовок метода: def charge(self, amount). [1] Прибавляет amount к приватному атрибуту, например self.__battery_level = self.__battery_level + amount. [1] Ограничивает результат значением 100, например оператором if или выражением min(100, self.__battery_level + amount).',
    },
    origin: 'original',
  },
  {
    id: 'b3-1-q07',
    subject: 'cs',
    topicIds: ['b3-1-oop-single-class'],
    paper: 'P2',
    marks: 2,
    command: 'Trace',
    prompt: {
      en: 'Trace the program below and state the two lines it prints.',
      ru: 'Проследите выполнение программы ниже и укажите две строки, которые она выводит.',
    },
    stimulus: {
      en: `\`\`\`python
class Account:
    def __init__(self, balance):
        # Store the starting balance
        self.__balance = balance

    def get_balance(self):
        return self.__balance


acc = Account(100)
acc.__balance = 500
print(acc.get_balance())
print(acc.__balance)
\`\`\``,
      ru: `\`\`\`python
class Account:
    def __init__(self, balance):
        # Сохраняем начальный баланс
        self.__balance = balance

    def get_balance(self):
        return self.__balance


acc = Account(100)
acc.__balance = 500
print(acc.get_balance())
print(acc.__balance)
\`\`\``,
    },
    markscheme: {
      en: '[1] 100: the private attribute keeps its starting value, because get_balance returns the value stored inside the class. [1] 500: the assignment outside the class creates a separate attribute called __balance, so the private value is not changed and the second line shows the new attribute.',
      ru: '[1] 100: приватный атрибут сохраняет начальное значение, потому что get_balance возвращает значение, которое хранится внутри класса. [1] 500: присваивание вне класса создаёт отдельный атрибут с именем __balance, поэтому приватное значение не меняется, а вторая строка выводит новый атрибут.',
    },
    answer: '100\n500',
    origin: 'original',
  },
  {
    id: 'b3-1-q08',
    subject: 'cs',
    topicIds: ['b3-1-oop-single-class'],
    paper: 'P2',
    marks: 4,
    command: 'Construct',
    prompt: {
      en: 'Construct the Python class Movie. Its constructor receives a title and a number of minutes, and it stores both as private attributes. Add the public getter methods get_title() and get_minutes(). The commented code in the stimulus shows how the finished class will be used.',
      ru: 'Составьте класс Movie на Python. Его конструктор получает название и количество минут и сохраняет оба значения в приватных атрибутах. Добавьте публичные методы-геттеры get_title() и get_minutes(). Закомментированный код в условии показывает, как будет использоваться готовый класс.',
    },
    stimulus: {
      en: `\`\`\`python
class Movie:
    # Write the constructor and the two getter methods inside this class.
    pass


# The finished class must make this code print two lines: Heat and 170.
# film = Movie("Heat", 170)
# print(film.get_title())
# print(film.get_minutes())
print("Movie class ready")
\`\`\``,
      ru: `\`\`\`python
class Movie:
    # Напишите конструктор и два метода-геттера внутри этого класса.
    pass


# Готовый класс должен вывести две строки: Heat и 170.
# film = Movie("Heat", 170)
# print(film.get_title())
# print(film.get_minutes())
print("Movie class ready")
\`\`\``,
    },
    markscheme: {
      en: '[1] Constructor header def __init__(self, title, minutes): with self as the first parameter. [1] Both values are stored in private attributes, for example self.__title = title and self.__minutes = minutes. [1] get_title(self) is a public method that returns self.__title. [1] get_minutes(self) is a public method that returns self.__minutes.',
      ru: '[1] Заголовок конструктора def __init__(self, title, minutes): с self в качестве первого параметра. [1] Оба значения сохранены в приватных атрибутах, например self.__title = title и self.__minutes = minutes. [1] get_title(self) — публичный метод, который возвращает self.__title. [1] get_minutes(self) — публичный метод, который возвращает self.__minutes.',
    },
    origin: 'original',
  },
  {
    id: 'b3-1-q09',
    subject: 'cs',
    topicIds: ['b3-1-oop-single-class'],
    paper: 'P2',
    marks: 3,
    command: 'Distinguish',
    prompt: {
      en: 'The program below uses a static (class) variable and non-static attributes. Distinguish between the variable screens_open and the attribute __seats. Refer to how each one is stored and how it is accessed in the program.',
      ru: 'Программа ниже использует статическую (классовую) переменную и нестатические атрибуты. Проведите различие между переменной screens_open и атрибутом __seats. Укажите, где хранится каждый из них и как к нему обращаются в программе.',
    },
    stimulus: {
      en: `\`\`\`python
class Cinema:
    # Static (class) variable shared by all Cinema objects
    screens_open = 0

    def __init__(self, name, seats):
        # Non-static (instance) attributes: each Cinema has its own values
        self.__name = name
        self.__seats = seats
        Cinema.screens_open = Cinema.screens_open + 1

    def get_seats(self):
        return self.__seats


odeon = Cinema("Odeon", 120)
lux = Cinema("Lux", 80)
print(odeon.get_seats(), lux.get_seats())
print(Cinema.screens_open)
\`\`\``,
      ru: `\`\`\`python
class Cinema:
    # Статическая (классовая) переменная, общая для всех объектов Cinema
    screens_open = 0

    def __init__(self, name, seats):
        # Нестатические (объектные) атрибуты: у каждого Cinema свои значения
        self.__name = name
        self.__seats = seats
        Cinema.screens_open = Cinema.screens_open + 1

    def get_seats(self):
        return self.__seats


odeon = Cinema("Odeon", 120)
lux = Cinema("Lux", 80)
print(odeon.get_seats(), lux.get_seats())
print(Cinema.screens_open)
\`\`\``,
    },
    markscheme: {
      en: '[1] screens_open is static: it belongs to the class, there is one shared copy, and it is accessed through the class name, Cinema.screens_open. [1] __seats is non-static: each object has its own value, which is set through self in the constructor. [1] Output evidence: the program prints 2 for screens_open after both objects are created, but each object prints its own seat count, 120 and 80.',
      ru: '[1] screens_open статическая: она принадлежит классу, копия одна, к ней обращаются через имя класса Cinema.screens_open. [1] __seats нестатический: у каждого объекта своё значение, которое задаётся через self в конструкторе. [1] Подтверждение из вывода: программа печатает 2 для screens_open после создания обоих объектов, а каждый объект выводит своё число мест, 120 и 80.',
    },
    origin: 'original',
  },
  {
    id: 'b3-1-q10',
    subject: 'cs',
    topicIds: ['b3-1-oop-single-class'],
    paper: 'P2',
    marks: 5,
    command: 'Trace',
    prompt: {
      en: 'Trace the program below and state the five lines it prints.',
      ru: 'Проследите выполнение программы ниже и укажите пять строк, которые она выводит.',
    },
    stimulus: {
      en: `\`\`\`python
class Stock:
    def __init__(self, item, quantity):
        self.__item = item
        self.__quantity = quantity

    def sell(self, amount):
        # Only sell when enough items are in stock
        if amount <= self.__quantity:
            self.__quantity = self.__quantity - amount
            return True
        return False

    def get_quantity(self):
        return self.__quantity


apples = Stock("apples", 10)
pears = Stock("pears", 4)

print(apples.sell(6))
print(pears.sell(6))
print(apples.get_quantity())
print(pears.get_quantity())
apples.sell(3)
print(apples.get_quantity())
\`\`\``,
      ru: `\`\`\`python
class Stock:
    def __init__(self, item, quantity):
        self.__item = item
        self.__quantity = quantity

    def sell(self, amount):
        # Продаём, только если товара хватает
        if amount <= self.__quantity:
            self.__quantity = self.__quantity - amount
            return True
        return False

    def get_quantity(self):
        return self.__quantity


apples = Stock("apples", 10)
pears = Stock("pears", 4)

print(apples.sell(6))
print(pears.sell(6))
print(apples.get_quantity())
print(pears.get_quantity())
apples.sell(3)
print(apples.get_quantity())
\`\`\``,
    },
    markscheme: {
      en: '[1] True: 6 is not more than the 10 apples in stock, so the sale succeeds. [1] False: only 4 pears are in stock, so the sale of 6 is refused. [1] 4: 10 minus the sale of 6 leaves 4 apples. [1] 4: the refused sale leaves 4 pears. [1] 1: the later sale of 3 takes the 4 apples down to 1.',
      ru: '[1] True: 6 не больше 10 яблок на складе, поэтому продажа проходит. [1] False: груш всего 4, поэтому продажа 6 штук отклоняется. [1] 4: после продажи 6 из 10 яблок остаётся 4. [1] 4: отклонённая продажа не меняет количество груш, их остаётся 4. [1] 1: последняя продажа 3 яблок уменьшает остаток с 4 до 1.',
    },
    answer: 'True\nFalse\n4\n4\n1',
    origin: 'original',
  },
];
