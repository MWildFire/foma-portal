import type { Question } from '../../../../src/contract/types';

// G.2 questions. All questions are original and written in IB style. Figures in stimuli are either invented for practice
// (Northbridge, Russian name Северград, is a fictional city) or taken from the G.2 case studies (Shenzhen).
export const questions: Question[] = [
  {
    id: 'g2-sq1',
    subject: 'geo',
    topicIds: ['g2-urban-change'],
    paper: 'P1',
    marks: 10,
    command: 'Describe',
    stimulus: {
      en: 'Northbridge is a fictional city used for practice. Between 1960 and 2010 the population of its inner city fell from 240,000 to 150,000, while the population of its suburbs rose from 160,000 to 480,000. Textile mills in the inner city closed in the 1970s, and many buildings there are now empty.',
      ru: 'Северград — вымышленный город для практики. С 1960 по 2010 год население его центра сократилось с 240 000 до 150 000 человек, а население пригородов выросло с 160 000 до 480 000 человек. Текстильные фабрики в центре закрылись в 1970-е годы, и многие здания там сейчас пустуют.',
    },
    prompt: {
      en: '(a) Describe the change in the population of the inner city and of the suburbs of Northbridge between 1960 and 2010. (2 marks)\n\n(b) Explain two reasons why the inner city of Northbridge has declined. (4 marks)\n\n(c) Suggest how the local government could encourage the regeneration of the empty textile mills. (4 marks)',
      ru: '(a) Опишите изменение населения центра и пригородов Северграда между 1960 и 2010 годами. (2 балла)\n\n(b) Объясните две причины, по которым центр Северграда пришёл в упадок. (4 балла)\n\n(c) Предложите, как местные власти могут стимулировать регенерацию пустующих текстильных фабрик. (4 балла)',
    },
    markscheme: {
      en: '(a) 1 mark for the inner city falling from 240,000 to 150,000 (a fall of 90,000, or 37.5%); 1 mark for the suburbs rising from 160,000 to 480,000 (a rise of 320,000, or 200%). Accept the figures or the percentages if the direction is correct. (2 marks in total)\n\n(b) Up to 2 reasons, each explained for 2 marks: 1 mark for the reason and 1 mark for linking it to people leaving. Accept: deindustrialisation (the mills closed in the 1970s, jobs were lost and people moved away to find work); a poor environment and empty, poor-quality housing (the area became less attractive, so families moved out); suburbanisation (better housing and car access in the suburbs drew residents outwards). (4 marks in total)\n\n(c) Up to 2 suggestions, each developed for 2 marks: 1 mark for the suggestion and 1 mark for how it would work. Accept: converting the mills into mixed-use housing and offices; a public-private partnership to attract investment; grants or tax reductions for developers who reuse brownfield sites; clean-up of contaminated land and retraining programmes to attract new employers. (4 marks in total)',
      ru: '(a) 1 балл за падение населения центра с 240 000 до 150 000 (снижение на 90 000, или 37,5%); 1 балл за рост населения пригородов с 160 000 до 480 000 (прирост на 320 000, или 200%). Засчитываются цифры или проценты при верном направлении изменения. (всего 2 балла)\n\n(b) До 2 причин, каждая объяснена на 2 балла: 1 балл за причину и 1 балл за связь с оттоком жителей. Засчитываются: деиндустриализация (фабрики закрылись в 1970-е, рабочие места потеряны, люди уехали в поисках работы); ухудшение среды и пустующее жильё низкого качества (район стал менее привлекательным, семьи переехали); субурбанизация (лучшее жильё и доступ на автомобиле в пригородах притянули жителей наружу). (всего 4 балла)\n\n(c) До 2 предложений, каждое раскрыто на 2 балла: 1 балл за предложение и 1 балл за то, как оно сработает. Засчитываются: перевод фабрик в смешанную застройку с жильём и офисами; партнёрство государства и частного бизнеса для привлечения инвестиций; субсидии или налоговые льготы застройщикам, которые повторно используют застроенные участки; очистка загрязнённой земли и программы переобучения для привлечения работодателей. (всего 4 балла)',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g2-sq2',
    subject: 'geo',
    topicIds: ['g2-urban-change'],
    paper: 'P1',
    marks: 10,
    command: 'Explain',
    stimulus: {
      en: 'A city has one central business district (CBD). Before a new tram line opened, the rent for office space was 300 units per square metre at the CBD and fell by 20 units for every kilometre from the CBD. After the tram opened, the rent at the CBD was unchanged, but the fall was only 10 units per kilometre.',
      ru: 'В городе один центральный деловой район (CBD). До открытия новой линии трамвая арендная плата за офисы составляла 300 условных единиц за квадратный метр в CBD и снижалась на 20 единиц на каждый километр от CBD. После открытия трамвая плата в CBD не изменилась, но снижение составило только 10 единиц на километр.',
    },
    prompt: {
      en: '(a) Describe how the office rent at 5 km from the CBD changed after the tram line opened. (2 marks)\n\n(b) Explain why the bid-rent curve for offices may have become flatter after the tram line opened. (4 marks)\n\n(c) Suggest one land-use change that might follow from this change in the bid-rent curve, and explain its effect on the CBD. (4 marks)',
      ru: '(a) Опишите, как изменилась арендная плата за офис на расстоянии 5 км от CBD после открытия линии трамвая. (2 балла)\n\n(b) Объясните, почему кривая ренты для офисов могла стать более пологой после открытия линии трамвая. (4 балла)\n\n(c) Предложите одно изменение землепользования, которое может последовать из этого изменения кривой ренты, и объясните его влияние на CBD. (4 балла)',
    },
    markscheme: {
      en: '(a) 1 mark: rent at 5 km before the tram = 300 - (20 x 5) = 200 units. 1 mark: rent after the tram = 300 - (10 x 5) = 250 units, a rise of 50 units (25%). (2 marks in total)\n\n(b) 1 mark each, up to 4 marks, for: the tram reduces the time or cost of travel from outer sites to the CBD; so accessibility depends less on distance; so rent falls more slowly with distance, which flattens the curve; and offices can now bid more for sites further from the centre. A point that only restates the question scores no marks. (4 marks in total)\n\n(c) 2 marks for a clear land-use change linked to the flatter curve (for example, offices or shops moving to a new business park beside the tram stop, or housing replacing old warehouses near the CBD). 2 marks for explaining its effect on the CBD (for example, lower demand and rents in the centre, some vacant offices, or the growth of a second business centre). (4 marks in total)',
      ru: '(a) 1 балл: арендная плата на 5 км до трамвая = 300 - (20 x 5) = 200 единиц. 1 балл: после открытия трамвая = 300 - (10 x 5) = 250 единиц, рост на 50 единиц (25%). (всего 2 балла)\n\n(b) По 1 баллу, до 4 баллов, за: трамвай снижает время или стоимость поездки от периферийных участков до CBD; поэтому доступность меньше зависит от расстояния; поэтому плата снижается с расстоянием медленнее, и кривая становится более пологой; офисы теперь могут предложить больше за участки дальше от центра. Утверждение, которое только пересказывает вопрос, баллов не приносит. (всего 4 балла)\n\n(c) 2 балла за ясное изменение землепользования, связанное с более пологой кривой (например, офисы или магазины переходят в новый деловой парк у остановки трамвая, или жильё заменяет старые склады вблизи CBD). 2 балла за объяснение влияния на CBD (например, снижение спроса и арендной платы в центре, пустующие офисы или рост второго делового центра). (всего 4 балла)',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g2-sq3',
    subject: 'geo',
    topicIds: ['g2-urban-change'],
    paper: 'P1',
    marks: 10,
    command: 'Examine',
    stimulus: {
      en: 'Shenzhen became a Special Economic Zone in 1980. Its resident population was 332,900 in 1980 and 17.56 million in 2020 (figures from the Shenzhen case study on this page).',
      ru: 'Шэньчжэнь стал особой экономической зоной в 1980 году. Численность его населения составляла 332 900 человек в 1980 году и 17,56 млн человек в 2020 году (цифры из кейса о Шэньчжэне на этой странице).',
    },
    prompt: {
      en: '(a) Describe the change in the population of Shenzhen between 1980 and 2020. (2 marks)\n\n(b) Explain two pull factors that attracted migrants to Shenzhen after 1980. (4 marks)\n\n(c) Examine the effects of this rapid urban growth on land use in Shenzhen. (4 marks)',
      ru: '(a) Опишите изменение численности населения Шэньчжэня между 1980 и 2020 годами. (2 балла)\n\n(b) Объясните два фактора притяжения, которые привлекали мигрантов в Шэньчжэнь после 1980 года. (4 балла)\n\n(c) Рассмотрите последствия этого быстрого городского роста для землепользования в Шэньчжэне. (4 балла)',
    },
    markscheme: {
      en: '(a) 1 mark for the change: an increase from 332,900 to 17.56 million, about 17.2 million more people. 1 mark for describing the scale or pace, for example about 53 times larger. (2 marks in total)\n\n(b) Up to 2 pull factors, each for 2 marks: 1 mark for the factor and 1 mark for explaining why it drew migrants. Accept: jobs in new factories and export industries; higher wages than in rural areas; growing service jobs in the new city; better access to education, housing and services than in rural villages. (4 marks in total)\n\n(c) Up to 2 land-use changes, each developed for 2 marks: 1 mark for the change and 1 mark for the reason or effect. Accept: farmland and villages converted to factory estates and high-rise housing; rising land values and denser building; roads and metro lines built to connect new districts, which pushes the built-up area outwards. (4 marks in total)',
      ru: '(a) 1 балл за изменение: рост с 332 900 до 17,56 млн человек, то есть примерно на 17,2 млн человек. 1 балл за описание масштаба или темпа, например почти в 53 раза больше. (всего 2 балла)\n\n(b) До 2 факторов притяжения, каждый на 2 балла: 1 балл за фактор и 1 балл за объяснение, почему он привлекал мигрантов. Засчитываются: рабочие места на новых фабриках и в экспортных отраслях; более высокие зарплаты, чем в сельской местности; рост рабочих мест в сфере услуг; доступ к образованию, жилью и услугам лучше, чем в деревнях. (всего 4 балла)\n\n(c) До 2 изменений землепользования, каждое раскрыто на 2 балла: 1 балл за изменение и 1 балл за причину или последствие. Засчитываются: сельхозугодия и деревни переводятся под промышленные территории и высотное жильё; растёт стоимость земли и плотность застройки; дороги и линии метро связывают новые районы, и застроенная территория расширяется наружу. (всего 4 балла)',
    },
    origin: 'original',
    minutes: 15,
  },
  {
    id: 'g2-eq1',
    subject: 'geo',
    topicIds: ['g2-urban-change'],
    paper: 'P1',
    marks: 10,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the view that urban regeneration always benefits the people who lived in an area before it was regenerated.',
      ru: 'Оцените мнение, что городская регенерация всегда приносит пользу тем, кто жил в районе до её начала.',
    },
    hints: [
      {
        en: 'Plan: define urban regeneration and gentrification; give at least two benefits and two costs for the people who lived there before.',
        ru: 'План: дайте определения городской регенерации и джентрификации; назовите не менее двух выгод и двух издержек для тех, кто жил в районе раньше.',
      },
      {
        en: 'Test the word "always": find at least one reason why the benefits are not shared, such as rising rents, displacement or who gets the new jobs.',
        ru: 'Проверьте слово «всегда»: найдите причину, по которой выгоды распределяются неравномерно, например рост аренды, вытеснение или то, кто получает новые рабочие места.',
      },
      {
        en: 'Use one named example with figures, for example London Docklands (1981–1998), to test the view.',
        ru: 'Проверьте мнение на одном конкретном примере с цифрами, например на Лондонских доках (1981–1998).',
      },
      {
        en: 'Markband: 1–3 marks for description only; 4–6 marks for benefits and costs explained; 7–8 marks for evaluation with an example; 9–10 marks for a supported judgement.',
        ru: 'Критерии: 1–3 балла — только описание; 4–6 баллов — объяснены выгоды и издержки; 7–8 баллов — оценка с примером; 9–10 баллов — обоснованное суждение.',
      },
      {
        en: 'Finish with a clear judgement, such as partly true, and state the condition under which the view holds.',
        ru: 'Завершите чётким суждением, например «отчасти верно», и укажите условие, при котором мнение справедливо.',
      },
    ],
    model: {
      en: "Urban regeneration can benefit people who already live in a run-down area. New housing, better public transport and the clean-up of derelict land can improve services and create jobs that local people can take. However, the view that it always benefits them is too strong. Regeneration often raises property values and rents, so poorer households may be forced out through gentrification. Critics of London's Docklands redevelopment argued that many long-standing residents gained far less than the new office workers and investors. Benefits are greatest when schemes include affordable housing and community involvement. The view is therefore only partly true: the outcome depends on who the scheme is designed for.",
      ru: 'Городская регенерация может принести пользу людям, которые уже живут в пришедшем в упадок районе. Новое жильё, лучший общественный транспорт и очистка заброшенных участков улучшают услуги и создают рабочие места, на которые могут претендовать местные жители. Однако утверждение, что регенерация всегда приносит им пользу, слишком сильно. Она часто повышает стоимость недвижимости и аренду, поэтому бедные семьи могут быть вынуждены уехать из-за джентрификации. Критики перестройки Лондонских доков утверждали, что многие давно живущие там жители выиграли гораздо меньше, чем новые офисные работники и инвесторы. Наибольшая польза достигается, когда проекты включают доступное жильё и участие местного сообщества. Поэтому утверждение лишь отчасти верно: результат зависит от того, для кого спроектирован проект.',
    },
    markscheme: {
      en: "Level 1 (1–3 marks): describes urban regeneration or gentrification without addressing the view.\n\nLevel 2 (4–6 marks): explains at least one benefit and one cost for existing residents, with some link to the word 'always'.\n\nLevel 3 (7–8 marks): evaluates the view with a named example, weighing benefits against costs.\n\nLevel 4 (9–10 marks): reaches a supported judgement on whether regeneration always benefits existing residents, showing who gains and who is displaced.\n\nCredit points: benefits (new housing, jobs, better services, cleaner environment); costs (higher rents and property values, displacement, loss of community); evaluation (the outcome depends on the scheme's design, affordable housing and resident participation).",
      ru: 'Уровень 1 (1–3 балла): описание городской регенерации или джентрификации без ответа на мнение.\n\nУровень 2 (4–6 баллов): объяснена хотя бы одна выгода и одна издержка для жителей с отсылкой к слову «всегда».\n\nУровень 3 (7–8 баллов): мнение оценено на конкретном примере, выгоды сопоставлены с издержками.\n\nУровень 4 (9–10 баллов): сделано обоснованное суждение о том, всегда ли регенерация приносит пользу прежним жителям; показано, кто выигрывает и кто вытесняется.\n\nЗасчитываемые пункты: выгоды (новое жильё, рабочие места, лучшие услуги, чистая среда); издержки (рост аренды и стоимости недвижимости, вытеснение, потеря сообщества); оценка (результат зависит от замысла проекта, доступного жилья и участия жителей).',
    },
    origin: 'original',
    minutes: 30,
  },
  {
    id: 'g2-eq2',
    subject: 'geo',
    topicIds: ['g2-urban-change'],
    paper: 'P1',
    marks: 10,
    command: 'To what extent',
    prompt: {
      en: 'To what extent have edge cities weakened the traditional central business district (CBD) of a large city?',
      ru: 'В какой степени периферийные деловые центры (edge cities) ослабили традиционный центральный деловой район (CBD) крупного города?',
    },
    hints: [
      {
        en: 'Plan: define edge city and CBD, then explain how edge cities compete with the CBD for offices, shops and jobs.',
        ru: 'План: дайте определения периферийного делового центра и CBD, затем объясните, как периферийные центры конкурируют с CBD за офисы, магазины и рабочие места.',
      },
      {
        en: 'Argue the case for weakening: demand for offices and shops falls in the CBD, and some buildings become vacant.',
        ru: 'Аргументы за ослабление: в CBD падает спрос на офисы и магазины, часть зданий пустует.',
      },
      {
        en: 'Argue the case against: the CBD keeps its headquarters, transport hubs, specialist services and historic role.',
        ru: 'Аргументы против: CBD сохраняет штаб-квартиры, транспортные узлы, специализированные услуги и историческую роль.',
      },
      {
        en: 'Use one named edge city and one named CBD, with figures from your own studies; bid-rent theory helps to explain why firms move.',
        ru: 'Используйте один конкретный периферийный центр и один CBD с цифрами из ваших материалов; теория ренты земли помогает объяснить, почему фирмы переезжают.',
      },
      {
        en: 'Markband: 4–6 marks for two effects explained; 7–8 marks for both sides assessed; 9–10 marks for a supported judgement of the extent.',
        ru: 'Критерии: 4–6 баллов — объяснены два эффекта; 7–8 баллов — оценены обе стороны; 9–10 баллов — обоснованное суждение о степени.',
      },
    ],
    model: {
      en: "Edge cities have weakened the traditional CBD to a significant extent, but not completely. Offices, shops and leisure facilities have moved to out-of-town sites beside motorways, where land is cheaper and parking is easier. This reduces demand for central offices and retail space, so some CBD buildings become vacant and rents fall. However, the CBD keeps advantages that edge cities struggle to match: central transport hubs, the headquarters of major firms, specialist services and a historic identity. Many firms still value central locations for face-to-face contact. The weakening is therefore greatest for everyday shops and older offices, and smallest for prestige functions. Overall, edge cities have taken much of the new growth rather than replacing the CBD's core roles.",
      ru: 'Периферийные деловые центры ослабили традиционный CBD в значительной степени, но не полностью. Офисы, магазины и досуговые объекты переехали на участки за городом у автомагистралей, где земля дешевле, а парковка проще. Это снижает спрос на офисы и торговые площади в центре, поэтому часть зданий в CBD пустует, а арендная плата падает. Однако у CBD есть преимущества, которые периферийным центрам трудно повторить: транспортные узлы в центре, штаб-квартиры крупных компаний, специализированные услуги и историческая роль. Многие фирмы по-прежнему ценят центральное расположение для личных контактов. Поэтому ослабление сильнее всего затронуло повседневную торговлю и старые офисы, а слабее всего — престижные функции. В целом периферийные центры забрали большую часть нового роста, но не заменили основные функции CBD.',
    },
    markscheme: {
      en: "Level 1 (1–3 marks): describes edge cities or the CBD with little link between them.\n\nLevel 2 (4–6 marks): explains at least two ways in which edge cities weaken the CBD (for example loss of offices and shoppers, falling rents or vacant buildings), supported by a named example.\n\nLevel 3 (7–8 marks): assesses the extent of the weakening, weighing the CBD's continuing advantages against the growth of edge cities.\n\nLevel 4 (9–10 marks): gives a sustained judgement of 'to what extent', supported by evidence, with a conclusion that follows from the argument.\n\nCredit points: decentralisation of offices and retail; car and motorway access; lower rents and vacancy in the CBD; CBD advantages (transport hubs, headquarters, specialist and face-to-face services, historic identity).",
      ru: 'Уровень 1 (1–3 балла): описание периферийных центров или CBD без связи между ними.\n\nУровень 2 (4–6 баллов): объяснены хотя бы два способа, которыми периферийные центры ослабляют CBD (например, потеря офисов и покупателей, падение аренды или пустующие здания), с опорой на конкретный пример.\n\nУровень 3 (7–8 баллов): оценена степень ослабления; сопоставлены сохраняющиеся преимущества CBD и рост периферийных центров.\n\nУровень 4 (9–10 баллов): выдержанное суждение «в какой степени», подкреплённое доказательствами, с выводом, который следует из аргументации.\n\nЗасчитываемые пункты: децентрализация офисов и торговли; доступ на автомобиле и по автомагистрали; падение аренды и пустующие помещения в CBD; преимущества CBD (транспортные узлы, штаб-квартиры, специализированные и очные услуги, историческая роль).',
    },
    origin: 'original',
    minutes: 30,
  },
];
