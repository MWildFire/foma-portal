import type { Question } from '../../../../src/contract/types';

// Original IB-style questions for G.4. Marks are in brackets; each markscheme adds up to the marks of its question.
export const questions: Question[] = [
  {
    id: 'g4-sq1',
    subject: 'geo',
    topicIds: ['g4-sustainable-cities'],
    paper: 'P1',
    marks: 10,
    command: 'Describe',
    prompt: {
      en: 'The bus rapid transit (BRT) system in Curitiba opened in 1974 with its first 20 km and carried about 54,000 passengers a day in its first year. By 2014 it carried almost 2.5 million passengers a day. In 2020 daily ridership fell to a little over 710,000.\n\n(a) Describe two features of a BRT system that allow it to move passengers faster than an ordinary bus route. [3]\n(b) Describe how a BRT system can lower carbon emissions per passenger-kilometre compared with travel by private car. [3]\n(c) Describe one action a city could take to win back riders after a fall in ridership such as the one in 2020. [4]',
      ru: 'Система скоростного автобусного транзита (BRT) в Куритибе открылась в 1974 году первыми 20 км и в первый год перевозила около 54 000 пассажиров в день. К 2014 году она перевозила почти 2,5 млн пассажиров в день. В 2020 году дневной спрос упал до чуть более 710 000.\n\n(a) Опишите два признака системы BRT, которые позволяют ей двигаться быстрее обычного автобусного маршрута. [3]\n(b) Опишите, как система BRT может снизить выбросы углерода на пассажиро-километр по сравнению с поездкой на личном автомобиле. [3]\n(c) Опишите одно действие, которое город мог бы предпринять, чтобы вернуть пассажиров после такого падения спроса, как в 2020 году. [4]',
    },
    markscheme: {
      en: '(a) [3] 1 mark: dedicated or segregated lanes keep buses out of general traffic queues. 1 mark: fast, level boarding with pre-paid fares shortens the stop at each station. 1 mark: a development, such as frequent services that cut waiting time. Other valid features, such as high-capacity articulated buses, earn the same credit.\n(b) [3] 1 mark: a bus carries many passengers, so its emissions are shared among them. 1 mark: a car usually carries one or two people, so it emits more per passenger-kilometre. 1 mark: a development: each trip moved from car to BRT lowers total emissions.\n(c) [4] 1 mark: a valid action, such as more frequent services, better safety, cleaner vehicles or lower fares. 1 mark: a development of how the action brings riders back. 1 mark: a second action, or a cause of the fall such as pandemic restrictions or remote working. 1 mark: a link to the case evidence, such as the 2014 peak showing that the system can attract millions of riders.',
      ru: '(a) [3] 1 балл: выделенные или отделённые полосы выводят автобусы из общих пробок. 1 балл: быстрая посадка на уровне платформы и оплата до посадки сокращают стоянку на каждой станции. 1 балл: развитие мысли, например частые рейсы сокращают время ожидания. Другие верные признаки, например сочленённые автобусы большой вместимости, получают тот же зачёт.\n(b) [3] 1 балл: автобус перевозит много пассажиров, поэтому выбросы делятся между ними. 1 балл: в автомобиле обычно один-два человека, поэтому он выбрасывает больше на пассажиро-километр. 1 балл: развитие: каждая поездка, переведённая с автомобиля на BRT, снижает общие выбросы.\n(c) [4] 1 балл: верное действие, например более частые рейсы, безопасность, более чистые автобусы или низкие тарифы. 1 балл: развитие: как это действие возвращает пассажиров. 1 балл: второе действие или причина падения, например ограничения пандемии или удалённая работа. 1 балл: связь с данными кейса, например пик 2014 года показывает, что система может привлекать миллионы пассажиров.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g4-sq2',
    subject: 'geo',
    topicIds: ['g4-sustainable-cities'],
    paper: 'P1',
    marks: 10,
    command: 'Suggest',
    prompt: {
      en: 'The municipal cycling report for Copenhagen gives the share of trips to work or study in the city made by bicycle: 42% (2020), 34% (2021), 43% (2022) and 45% (2023). The target is 50% by 2025.\n\n(a) Calculate the change in this share between 2021 and 2023, in percentage points. [2]\n(b) Explain why the share of trips to work or study by bicycle could fall in a year when many people work from home. [4]\n(c) Suggest one measure that could help Copenhagen reach its 50% target by 2025. [4]',
      ru: 'Муниципальный отчёт о велосипедном движении в Копенгагене даёт долю поездок на работу или учёбу в городе, совершённых на велосипеде: 42% (2020), 34% (2021), 43% (2022) и 45% (2023). Цель — 50% к 2025 году.\n\n(a) Рассчитайте изменение этой доли между 2021 и 2023 годами в процентных пунктах. [2]\n(b) Объясните, почему доля поездок на работу или учёбу на велосипеде может снизиться в год, когда многие люди работают из дома. [4]\n(c) Предложите одну меру, которая помогла бы Копенгагену достичь цели 50% к 2025 году. [4]',
    },
    markscheme: {
      en: '(a) [2] 1 mark: 45 − 34 = 11. 1 mark: the answer is given in percentage points (11 percentage points). A percentage change of about 32% answers a different question and earns no mark.\n(b) [4] 1 mark: fewer commuting trips means fewer trips to work or study, which is the group the share measures. 1 mark: development: cycling is used mostly for regular journeys, so fewer of them lowers the share. 1 mark: a second reason, such as fewer school or university journeys, or people choosing to stay close to home. 1 mark: a link to the evidence, such as the fall from 42% to 34% between 2020 and 2021.\n(c) [4] 1 mark: a valid measure, such as extending the cycle superhighway network or adding secure bike parking near stations. 1 mark: development of how it changes behaviour, for example by making the commute faster and safer. 1 mark: a link to work and study trips, the group the target measures. 1 mark: a qualification, such as cost, limited road space, or uncertainty in the survey data for a single year.',
      ru: '(a) [2] 1 балл: 45 − 34 = 11. 1 балл: ответ дан в процентных пунктах (11 процентных пунктов). Изменение в процентах (около 32%) отвечает на другой вопрос и балла не получает.\n(b) [4] 1 балл: меньше поездок на работу означает меньше поездок, которые учитывает эта доля. 1 балл: развитие: велосипед используется в основном для регулярных поездок, поэтому их уменьшение снижает долю. 1 балл: вторая причина, например меньше поездок в школу или вуз или выбор оставаться ближе к дому. 1 балл: связь с данными: падение с 42% до 34% в 2020–2021 годах.\n(c) [4] 1 балл: допустимая мера, например расширение сети супермагистралей или безопасные велопарковки у станций. 1 балл: развитие: как мера меняет поведение, например делает поездку на работу быстрее и безопаснее. 1 балл: связь с поездками на работу или учёбу, которые измеряет цель. 1 балл: оговорка, например стоимость, нехватка дорожного пространства или неопределённость данных опроса за один год.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g4-sq3',
    subject: 'geo',
    topicIds: ['g4-sustainable-cities'],
    paper: 'P1',
    marks: 10,
    command: 'Examine',
    prompt: {
      en: 'Masdar City in Abu Dhabi was planned in 2006 for 45,000 to 50,000 residents and 1,500 businesses. By 2023 about 5,000 residents lived there, and about 15,000 people lived and worked there in total.\n\n(a) Calculate the percentage of the lower planned population (45,000 residents) that the 2023 resident count (5,000) represents. [3]\n(b) Suggest two reasons why a planned eco-city may grow more slowly than its plan. [3]\n(c) Examine whether building a new eco-city is a good use of public money compared with improving an existing city. [4]',
      ru: 'Масдар-Сити в Абу-Даби был запланирован в 2006 году на 45 000–50 000 жителей и 1 500 предприятий. К 2023 году там жили около 5 000 жителей, а всего жили и работали около 15 000 человек.\n\n(a) Рассчитайте, какую долю нижней планируемой численности (45 000 жителей) составляют 5 000 жителей 2023 года. [3]\n(b) Предложите две причины, по которым плановый эко-город может расти медленнее, чем задумано. [3]\n(c) Рассмотрите подробно, оправданы ли государственные расходы на строительство нового эко-города по сравнению с модернизацией существующего города. [4]',
    },
    markscheme: {
      en: '(a) [3] 1 mark: 5,000 ÷ 45,000 = 0.111. 1 mark: about 11% (10% is accepted if the upper figure of 50,000 is used, with a note). 1 mark: a valid interpretation, such as the city has reached only about a tenth of its planned residents.\n(b) [3] 1 mark: a first valid reason, such as high construction and running costs that slow investment. 1 mark: a second valid reason, such as too few jobs or businesses to attract residents, since people tend to follow work. 1 mark: a development showing how one reason slows population growth.\n(c) [4] 1 mark: an argument for, such as designing energy, water and transport together from the start, which avoids costly retrofits. 1 mark: development of that argument with an example. 1 mark: an argument against, such as high cost and slow uptake, while existing districts already house many people. 1 mark: a judgement that depends on whether the lessons transfer to other cities.',
      ru: '(a) [3] 1 балл: 5 000 ÷ 45 000 = 0,111. 1 балл: около 11% (принимается 10%, если взята верхняя цифра 50 000, с пометкой). 1 балл: верный вывод, например город достиг лишь примерно десятой части запланированного числа жителей.\n(b) [3] 1 балл: первая причина, например высокие расходы на строительство и содержание, которые замедляют инвестиции. 1 балл: вторая причина, например недостаток рабочих мест и предприятий, которые привлекали бы жителей, ведь люди обычно едут за работой. 1 балл: развитие, показывающее, как одна из причин замедляет рост населения.\n(c) [4] 1 балл: аргумент за, например одновременное проектирование энергетики, воды и транспорта с самого начала, что позволяет избежать дорогостоящей модернизации. 1 балл: развитие аргумента на примере. 1 балл: аргумент против, например высокая стоимость и медленное заселение, при том что существующие районы уже вмещают много людей. 1 балл: вывод, который зависит от того, применимы ли уроки к другим городам.',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g4-eq1',
    subject: 'geo',
    topicIds: ['g4-sustainable-cities'],
    paper: 'P1',
    marks: 10,
    command: 'Discuss',
    prompt: {
      en: 'Discuss the view that bus rapid transit is a more sustainable solution than car-based growth for large cities. Use evidence from Curitiba or another case study.',
      ru: 'Обсудите утверждение, что скоростной автобусный транзит — более устойчивое решение для крупных городов, чем рост, основанный на автомобилях. Используйте данные из Куритибы или другого кейса.',
    },
    hints: [
      {
        en: 'Plan: give a qualified thesis, for example that BRT is more sustainable only if it attracts car users and is well run.',
        ru: 'План: сформулируйте оговорённый тезис, например: BRT устойчив только тогда, когда привлекает автомобилистов и хорошо управляется.',
      },
      {
        en: 'For: a BRT bus carries many passengers, so emissions per passenger-kilometre are lower than for cars; Curitiba carried almost 2.5 million passengers a day in 2014.',
        ru: 'За: автобус BRT перевозит много пассажиров, поэтому выбросы на пассажиро-километр ниже, чем у автомобиля; в 2014 году Куритиба перевозила почти 2,5 млн пассажиров в день.',
      },
      {
        en: 'Against: buses still burn fuel, capacity can be overwhelmed, and ridership can fall sharply, as in 2020 when it dropped to a little over 710,000 a day; drivers keep cars when roads and parking stay easy to use.',
        ru: 'Против: автобусы тоже расходуют топливо, пропускная способность может быть исчерпана, а спрос может резко упасть, как в 2020 году, когда он снизился до чуть более 710 000 в день; водители остаются на машинах, если дороги и парковки удобны.',
      },
      {
        en: 'Evaluate: weigh the evidence against the conditions it needs (dedicated lanes, fares, frequency, land use) and say what would change your conclusion.',
        ru: 'Оцените: сопоставьте доказательства с условиями, которые им нужны (выделенные полосы, тарифы, частота рейсов, планировка), и назовите, что изменило бы ваш вывод.',
      },
      {
        en: 'Judgement: finish with a supported conclusion for the type of city you have in mind; the top band needs a judgement, not a list.',
        ru: 'Вывод: завершите ответ обоснованным заключением для типа города, о котором идёт речь; верхний уровень требует вывода, а не списка.',
      },
    ],
    model: {
      en: 'Bus rapid transit is a more sustainable solution than car-based growth for most large cities, but only when it is well designed and well used. Curitiba shows the potential. In 2014 its system carried almost 2.5 million passengers a day, so each bus replaces many car journeys, and its emissions per passenger-kilometre are far lower than those of a single-occupancy car. Dedicated lanes keep it competitive with driving. The case also shows the limits: daily ridership fell to just over 710,000 in 2020, so frequency, safety and fares must be protected. Building more car lanes, by contrast, tends to attract more driving and more emissions. On balance, BRT is stronger, provided it sits within a wider plan that also restricts car use where appropriate.',
      ru: 'Скоростной автобусный транзит — более устойчивое решение, чем рост, основанный на автомобилях, для большинства крупных городов, но только при хорошем проектировании и реальном использовании. Куритиба показывает потенциал: в 2014 году система перевозила почти 2,5 млн пассажиров в день, поэтому один автобус заменяет множество поездок на машинах, а выбросы на пассажиро-километр намного ниже, чем у автомобиля с одним человеком. Выделенные полосы делают систему достаточно быстрой, чтобы конкурировать с вождением. Кейс показывает и ограничения: в 2020 году дневной спрос упал до чуть более 710 000 пассажиров, поэтому частоту рейсов, безопасность и тарифы нужно защищать. Строительство новых автомобильных полос, напротив, обычно привлекает больше поездок на машинах и увеличивает выбросы. В целом BRT — более сильный вариант, если он входит в более широкий план, который там, где это уместно, ограничивает автомобильное движение.',
    },
    markscheme: {
      en: 'Level 4 (8–10 marks): a clear thesis; balanced analysis of arguments for and against with specific evidence (place, year and figure); evaluation of the conditions and trade-offs; a supported judgement.\nLevel 3 (5–7 marks): relevant arguments on both sides with some evidence; partial evaluation; a judgement that is only partly supported.\nLevel 2 (3–4 marks): description of BRT or of car use with a limited link to sustainability; little or no evidence.\nLevel 1 (1–2 marks): basic statements without relevant reasoning.\nLevel 0 (0 marks): no relevant content.',
      ru: 'Уровень 4 (8–10 баллов): ясный тезис; сбалансированный анализ аргументов за и против с конкретными данными (место, год, цифра); оценка условий и компромиссов; обоснованный вывод.\nУровень 3 (5–7 баллов): релевантные аргументы с обеих сторон и некоторые данные; частичная оценка; вывод, подкреплённый лишь частично.\nУровень 2 (3–4 балла): описание BRT или автомобильного движения с ограниченной связью с устойчивостью; мало данных или их нет.\nУровень 1 (1–2 балла): базовые утверждения без содержательных рассуждений.\nУровень 0 (0 баллов): нет содержательного ответа.',
    },
    origin: 'original',
    minutes: 30,
  },
  {
    id: 'g4-eq2',
    subject: 'geo',
    topicIds: ['g4-sustainable-cities'],
    paper: 'P1',
    marks: 10,
    command: 'To what extent',
    prompt: {
      en: 'To what extent can eco-cities such as Masdar City provide a model for sustainable urban development in other cities?',
      ru: 'В какой степени эко-города, такие как Масдар-Сити, могут служить моделью устойчивого городского развития для других городов?',
    },
    hints: [
      {
        en: 'Plan: define an eco-city and state a qualified thesis, for example that the design principles transfer well, but the scale, cost and context often do not.',
        ru: 'План: определите эко-город и сформулируйте оговорённый тезис, например: принципы проектирования переносятся хорошо, а масштаб, стоимость и контекст часто — нет.',
      },
      {
        en: 'For: Masdar was designed around low-carbon energy, water recycling and a compact layout, and it hosts the headquarters of IRENA, which gives its ideas wide exposure.',
        ru: 'За: Масдар проектировался вокруг низкоуглеродной энергетики, переработки воды и компактной планировки, а в городе находится штаб-квартира IRENA, что даёт его идеям широкую известность.',
      },
      {
        en: 'Against: about 5,000 residents lived there in 2023 against 45,000 to 50,000 planned, so the model is hard to fill and expensive to copy.',
        ru: 'Против: в 2023 году там жили около 5 000 жителей при запланированных 45 000–50 000, значит модель трудно заполнить и дорого повторить.',
      },
      {
        en: 'Evaluate: compare building an eco-city with retrofitting an existing district such as Vauban, and decide which scale is realistic for most cities.',
        ru: 'Оцените: сравните строительство эко-города с модернизацией существующего района, например Вобана, и решите, какой масштаб реалистичен для большинства городов.',
      },
      {
        en: 'Judgement: give a clear answer, such as to a moderate extent, and support it with the evidence.',
        ru: 'Вывод: дайте ясный ответ, например «в умеренной степени», и подкрепите его доказательствами.',
      },
    ],
    model: {
      en: 'Eco-cities such as Masdar City offer a model for some principles, but not for the whole city. Masdar was designed around low-carbon energy, water recycling and a compact layout, and it hosts the headquarters of IRENA, which gives its ideas wide exposure. However, its planned 45,000 to 50,000 residents have not been reached: by 2023 about 5,000 of them were residents. This shows that building a new city from scratch is expensive and hard to fill. Most cities cannot start again, so retrofitting existing districts, such as the car-free streets of Vauban, may offer a more realistic model. The extent of influence is therefore moderate: the principles transfer well, while scale, cost and context usually do not.',
      ru: 'Эко-города, такие как Масдар-Сити, дают модель для отдельных принципов, но не для всего города. Масдар проектировался вокруг низкоуглеродной энергетики, переработки воды и компактной планировки, а в городе находится штаб-квартира IRENA, что даёт его идеям широкую известность. Однако запланированные 45–50 тыс. жителей не достигнуты: в 2023 году жителей было около 5 тыс. Это показывает, что строить новый город с нуля дорого и трудно заполнить. Большинство городов не может начать заново, поэтому модернизация существующих районов, например улиц Вобана без автомобилей, может оказаться более реалистичной моделью. Степень влияния поэтому умеренная: принципы переносятся хорошо, а масштаб, стоимость и контекст обычно — нет.',
    },
    markscheme: {
      en: 'Level 4 (8–10 marks): a clear definition of an eco-city; a balanced evaluation of transferable principles against limits of scale, cost and context, using Masdar data (2023 residents against the 45,000–50,000 plan) and an alternative such as retrofitting (Vauban); a supported judgement on the extent.\nLevel 3 (5–7 marks): relevant arguments on both sides with some evidence; partial evaluation; a judgement that is only partly supported.\nLevel 2 (3–4 marks): description of eco-city features with a limited link to the question; little or no evidence.\nLevel 1 (1–2 marks): basic statements without relevant reasoning.\nLevel 0 (0 marks): no relevant content.',
      ru: 'Уровень 4 (8–10 баллов): ясное определение эко-города; взвешенная оценка принципов, которые переносятся, против ограничений по масштабу, стоимости и контексту, с данными Масдар-Сити (жители 2023 года против плана 45 000–50 000) и альтернативой в виде модернизации (Вобан); обоснованный вывод о степени.\nУровень 3 (5–7 баллов): релевантные аргументы с обеих сторон и некоторые данные; частичная оценка; вывод, подкреплённый лишь частично.\nУровень 2 (3–4 балла): описание признаков эко-города с ограниченной связью с вопросом; мало данных или их нет.\nУровень 1 (1–2 балла): базовые утверждения без содержательных рассуждений.\nУровень 0 (0 баллов): нет содержательного ответа.',
    },
    origin: 'original',
    minutes: 30,
  },
];
