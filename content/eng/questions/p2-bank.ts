import type { Question } from '../../../src/contract/types';

// Twenty original comparative prompts. Guidance is author-created and checked against
// the school 25-mark descriptors and current official IB 2026 examiner instructions.
// Historical 2023–2025 papers retain their printed 30 marks in the archive.
// Work selection remains with the pupil; hypothetical planning routes are not source claims.
export const questions: Question[] = [
  {
    "id": "p2-q01",
    "subject": "eng",
    "topicIds": [
      "p2-question",
      "p2-planning"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Compare",
    "prompt": {
      "en": "Compare how two works use narrative voice and perspective to shape the reader's sympathy for a character who makes a difficult choice. To what extent does the narrator's distance from the events change what the reader trusts?",
      "ru": "Сравните, как два произведения используют повествовательный голос (narrative voice) и точку зрения (point of view), чтобы сформировать сочувствие читателя к персонажу, который делает трудный выбор. В какой степени дистанция рассказчика от событий меняет то, чему читатель доверяет?"
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Link narrative information and distance to sympathy and trust; distinguish the narrator from the focalising character.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Свяжите распределение информации и дистанцию с сочувствием и доверием; различайте рассказчика и персонажа, через которого показаны события."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. For the Compare instruction, first establish a supported similarity in how both works control information to shape sympathy. The second question about degree can then be refined by a contrast. A possible argument is that hindsight can invite sympathy by explaining an earlier decision, while restricted present-tense narration can leave the same kind of decision open to suspicion. Test this against precise moments in both chosen works: what information appears, when, and in whose words? Knowledge of a motive may also increase condemnation, so explain the evaluative language and context rather than assuming that understanding produces sympathy. Compare the effects across the essay; similar narrators can still differ in what they disclose.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Для команды Compare сначала обоснуйте сходство: как оба произведения дозируют сведения и через это формируют сочувствие. Во второй части вопроса суждение о степени можно уточнить различием. Возможный аргумент: взгляд из более позднего времени может вызвать сочувствие, объяснив прежнее решение, а ограниченное повествование из текущего момента — оставить сходный поступок подозрительным. Проверьте это на точных эпизодах двух выбранных произведений: какая информация появляется, когда и в чьих словах? Знание мотива может и усилить осуждение; объясняйте оценочную лексику и контекст, а не считайте понимание гарантией сочувствия. Сопоставляйте эффекты на протяжении эссе: даже похожие рассказчики могут по-разному раскрывать сведения."
    },
    "hints": [
      {
        "en": "Link narrative information and distance to sympathy and trust; distinguish the narrator from the focalising character.",
        "ru": "Свяжите распределение информации и дистанцию с сочувствием и доверием; различайте рассказчика и персонажа, через которого показаны события."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q02",
    "subject": "eng",
    "topicIds": [
      "p2-question",
      "p2-planning"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Discuss",
    "prompt": {
      "en": "Discuss how two works show the tension between a character's identity and the expectations of the community that surrounds them.",
      "ru": "Обсудите, как два произведения показывают напряжение между идентичностью (identity) персонажа и ожиданиями окружающего его сообщества."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Trace how identity relates to community expectations; consider resistance, acceptance or mixed responses supported by the works.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Проследите связь идентичности с ожиданиями сообщества; обоснуйте сопротивление, принятие или неоднозначную реакцию по произведениям."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. One line of argument could contrast a community’s public naming of a character with that character’s account of themselves. If a nickname is repeated by authority figures, its connotations and the character’s response can support an argument about imposed roles. Compare this with a second work’s dialogue, narration or performance: identity may emerge through acceptance or negotiation as well as refusal. A doorway becomes relevant only if the text gives it a pattern or context connected to belonging; its presence alone does not prove symbolism.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Один путь аргументации — сопоставить публичное именование персонажа с его самоописанием. Если прозвище повторяют люди с властью, его оттенки и реакция персонажа могут обосновать вывод о навязанной роли. Сравните с диалогом, повествованием или сценическим действием второго произведения: идентичность может проявиться и в принятии или согласовании роли, а не только в отказе. Порог уместен в анализе, если текст связывает его контекст или повторение с принадлежностью; одно наличие двери не доказывает символизма."
    },
    "hints": [
      {
        "en": "Trace how identity relates to community expectations; consider resistance, acceptance or mixed responses supported by the works.",
        "ru": "Проследите связь идентичности с ожиданиями сообщества; обоснуйте сопротивление, принятие или неоднозначную реакцию по произведениям."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q03",
    "subject": "eng",
    "topicIds": [
      "p2-question",
      "p2-planning"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Evaluate",
    "prompt": {
      "en": "To what extent do two works suggest that tradition protects a community, rather than confining the individuals who live within it?",
      "ru": "В какой степени два произведения показывают, что традиция (tradition) защищает сообщество, а не ограничивает людей, которые в нём живут?"
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Weigh protection and constraint in the traditions actually represented; the two may coexist or affect members differently.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Взвесьте защиту и ограничения в изображённых традициях; они могут сосуществовать или по-разному действовать на членов сообщества."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. A qualified argument might find that one tradition creates shared memory but distributes protection unequally. Use an actual ritual or inherited rule from each work: compare participation, exclusion, narrative viewpoint and consequences. A revised ceremony could support adaptation, while an unchanged ceremony could also remain meaningful; neither conclusion follows from change alone. Answer “to what extent” by weighing the particular members and situations each work represents, rather than asserting that all traditions protect or oppress.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Аргумент с оговоркой может показать, что традиция создаёт общую память, но защищает участников неравномерно. Возьмите реальный для каждого произведения обряд или унаследованное правило: сопоставьте участие, исключение, точку зрения и последствия. Изменённая церемония может говорить об адаптации, но и неизменная может сохранять смысл; один факт изменения не даёт готового вывода. Отвечайте «в какой степени» через конкретных участников и ситуации, а не через тезис обо всех традициях."
    },
    "hints": [
      {
        "en": "Weigh protection and constraint in the traditions actually represented; the two may coexist or affect members differently.",
        "ru": "Взвесьте защиту и ограничения в изображённых традициях; они могут сосуществовать или по-разному действовать на членов сообщества."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q04",
    "subject": "eng",
    "topicIds": [
      "p2-question",
      "p2-planning"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Evaluate",
    "prompt": {
      "en": "How far do two works use an unusual structure to deepen meaning, rather than simply drawing attention to the technique itself?",
      "ru": "В какой мере два произведения используют необычную структуру (structure), чтобы углубить смысл, а не просто привлекают внимание к самому приёму?"
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Explain what makes the structures unusual in context and assess their contribution to meaning; do not assume novelty is automatically effective.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Объясните, в каком контексте структуры необычны, и оцените их вклад в смысл; новизна сама по себе не гарантирует выразительности."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. A possible comparison would examine how rearranged chronology in one work and repeated scenes in another make the reader reassess an event. Identify exactly what each return adds or keeps stable. Contradictory letters may indicate limited knowledge, different interests or unreliable memory: establish which interpretation the details support. An unfinished entry can leave responsibility unresolved, but incompleteness alone does not prove guilt. Judge the structures’ contribution to this question; complexity and novelty are not automatic strengths.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Можно сопоставить, как переставленная хронология одного произведения и повторные сцены другого заставляют переоценить событие. Укажите, что именно каждое возвращение добавляет или сохраняет. Противоречащие письма могут указывать на ограниченность знания, разные интересы или ненадёжную память: выберите трактовку по деталям. Незаконченная запись может оставить ответственность неясной, но сама незавершённость не доказывает вины. Оценивайте вклад структуры в ответ на вопрос: сложность и новизна не являются достоинствами автоматически."
    },
    "hints": [
      {
        "en": "Explain what makes the structures unusual in context and assess their contribution to meaning; do not assume novelty is automatically effective.",
        "ru": "Объясните, в каком контексте структуры необычны, и оцените их вклад в смысл; новизна сама по себе не гарантирует выразительности."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q05",
    "subject": "eng",
    "topicIds": [
      "p2-question",
      "p2-planning"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Compare",
    "prompt": {
      "en": "Compare how two works use silence and withheld speech to show who holds power in a relationship.",
      "ru": "Сравните, как два произведения используют молчание (silence) и недосказанность (withheld speech), чтобы показать, кто в отношениях обладает властью."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Interpret specific silences and their relationship to power; distinguish imposed silence, chosen restraint and uncertain motives.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Истолкуйте конкретное молчание в отношениях власти; различайте навязанное молчание, добровольное сдерживание и неясные мотивы."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. For Compare, first establish a supported similarity in how withholding speech affects power in both works. You may then qualify that shared effect by contrasting a silence imposed by interruption with a refusal to answer that the silent person chooses. In a particular scene the first may enact domination while the second resists it; pauses can also signal hesitation or fear, so use surrounding speech and action to decide. Then compare how narration or staging gives the reader access to the silent person’s position. An empty stage or withheld final reply may leave a relationship unresolved rather than establish that it has ended.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Для команды Compare сначала обоснуйте сходство в том, как недосказанность влияет на власть в обоих произведениях. Затем можно уточнить общий эффект различием между молчанием из-за перебивания и сознательным отказом отвечать. В конкретной сцене первое может выражать подчинение, а второе — сопротивление; пауза может также означать нерешительность или страх, поэтому учитывайте соседние реплики и действия. Затем сравните, как повествование или постановка открывает позицию молчащего. Пустая сцена или отсутствие последнего ответа может оставить отношения неразрешёнными, а не доказать их конец."
    },
    "hints": [
      {
        "en": "Interpret specific silences and their relationship to power; distinguish imposed silence, chosen restraint and uncertain motives.",
        "ru": "Истолкуйте конкретное молчание в отношениях власти; различайте навязанное молчание, добровольное сдерживание и неясные мотивы."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q06",
    "subject": "eng",
    "topicIds": [
      "p2-choices",
      "p2-comparison"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Discuss",
    "prompt": {
      "en": "Discuss how two works present transformation and change, and whether the writers show these changes as sudden or gradual.",
      "ru": "Обсудите, как два произведения изображают преображение (transformation) и перемены, и показывают ли авторы эти перемены как внезапные или постепенные."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Compare how the pacing of change is constructed, including the difference between a sudden revelation and a sudden change.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Сравните, как выстроен темп перемен; различайте внезапное открытие уже произошедшей перемены и саму внезапную перемену."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Distinguish the duration of a character’s change from the speed at which it is revealed. A story may disclose a long-developing change in one sudden recognition, whereas a novel may use time gaps to leave parts of a process uncertain. Compare actual transitions and their placement in both works. Repeated objects can make a changed attitude visible, but the character need not consciously recognise the change for the reader to do so; neither sudden nor gradual change requires a universal moral explanation.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Различайте длительность перемены персонажа и скорость её раскрытия. Рассказ может одним внезапным открытием показать давно развивавшуюся перемену, а роман — пропусками времени оставить часть процесса неясной. Сопоставьте реальные переходы и их расположение. Повторный предмет может сделать новое отношение заметным, но персонаж не обязан осознать перемену, чтобы её увидел читатель; ни внезапность, ни постепенность не требуют универсального морального объяснения."
    },
    "hints": [
      {
        "en": "Compare how the pacing of change is constructed, including the difference between a sudden revelation and a sudden change.",
        "ru": "Сравните, как выстроен темп перемен; различайте внезапное открытие уже произошедшей перемены и саму внезапную перемену."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q07",
    "subject": "eng",
    "topicIds": [
      "p2-choices",
      "p2-comparison"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Evaluate",
    "prompt": {
      "en": "To what extent do two works present a marginalised group as individuals with inner lives, rather than as stock types?",
      "ru": "В какой степени два произведения изображают маргинализированную группу людей как личностей с внутренней жизнью, а не как шаблонные типажи (stock types)?"
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Assess individualisation and stock representation from actual details, not merely from whether a speaker belongs to the group.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Оцените индивидуализацию и шаблонность по деталям, а не только по принадлежности рассказчика к группе."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Compare how members of a group receive individual names, contrasting actions, speech or thought. An insider’s first-person account does not automatically grant access to neighbours’ private minds: distinguish what they tell the narrator, what the narrator infers and what the text leaves unknown. A collective chorus can express a complex shared position rather than a stereotype. Assess whose individuality is developed, whose is restricted and whether a biased character’s account is challenged by the work.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Сопоставьте, получают ли члены группы индивидуальные имена, разные поступки, речь или мысли. Рассказчик изнутри сообщества не получает автоматически доступа к чужому сознанию: различайте сообщённое ему, его догадки и неизвестное. Коллективный хор способен выражать сложную общую позицию, а не только стереотип. Оцените, чья индивидуальность раскрыта, чья ограничена и оспаривает ли произведение предвзятый взгляд персонажа."
    },
    "hints": [
      {
        "en": "Assess individualisation and stock representation from actual details, not merely from whether a speaker belongs to the group.",
        "ru": "Оцените индивидуализацию и шаблонность по деталям, а не только по принадлежности рассказчика к группе."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q08",
    "subject": "eng",
    "topicIds": [
      "p2-choices",
      "p2-comparison"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Compare",
    "prompt": {
      "en": "Compare how two works use a confined setting, such as a house, a village or a ship, to shape the characters' sense of freedom and constraint.",
      "ru": "Сравните, как два произведения используют замкнутое место действия (setting), например дом, деревню или корабль, чтобы сформировать у персонажей ощущение свободы и ограничения."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Connect the treatment of confined spaces to freedom and constraint; include psychological or social boundaries where supported.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Свяжите изображение замкнутого пространства со свободой и ограничениями; при наличии оснований учтите психологические и социальные границы."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Start with a significant shared function of enclosed settings supported by both works, as Compare requests. Differences may refine this argument but are not required by that command. A confined home and an isolated journey could provide a useful contrast, but two homes could also frame freedom differently. Compare a precise spatial detail and the action or perception attached to it in each work. A character who never crosses a doorway may face material danger, social prohibition or an internal barrier: establish the reason before treating it as a habit of mind. Open sea may intensify confinement for a passenger without a means of escape; context, not physical openness alone, establishes the effect.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Начните со значимой общей функции замкнутого пространства, подтверждённой в обоих произведениях, как просит Compare. Различия могут уточнить аргумент, но эта команда сама по себе их не требует. Замкнутый дом и изолированное путешествие могут дать полезный контраст, но и два дома способны по-разному представить свободу. Сопоставьте точную пространственную деталь и связанное с ней действие или восприятие. Персонажа, не переступающего порог, могут удерживать опасность, общественный запрет или внутренний барьер: установите причину, прежде чем объявлять это привычкой сознания. Открытое море может усиливать несвободу пассажира без возможности уйти; эффект определяет контекст, а не одна открытость пространства."
    },
    "hints": [
      {
        "en": "Connect the treatment of confined spaces to freedom and constraint; include psychological or social boundaries where supported.",
        "ru": "Свяжите изображение замкнутого пространства со свободой и ограничениями; при наличии оснований учтите психологические и социальные границы."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q09",
    "subject": "eng",
    "topicIds": [
      "p2-choices",
      "p2-comparison"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Discuss",
    "prompt": {
      "en": "Discuss how two works use dialogue to expose a conflict that the characters are unwilling to name directly.",
      "ru": "Обсудите, как два произведения используют диалог (dialogue), чтобы выявить конфликт, который персонажи не хотят называть прямо."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Show how dialogue makes an unspoken conflict legible; distinguish evidence of avoidance from a speculative motive for it.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Покажите, как диалог делает невысказанный конфликт различимым; отличайте признаки уклонения от предположения о его причине."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Compare an evasive exchange in each work: identify the stated subject, the avoided issue and the details that let the reader infer the gap. For example, a property discussion might also concern care for a relative if other textual evidence establishes that concern; a pause alone does not prove guilt. Analyse interruptions, repeated wording or changes of subject in their sequence. Use accurate references or remembered short wording; quotations are not compulsory. Explain how the conflict becomes legible while remaining unspoken.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Сопоставьте уклончивый разговор в каждом произведении: назовите явную тему, избегаемый вопрос и детали, позволяющие увидеть разрыв. Например, спор об имуществе может касаться ухода за родственником, если это подтверждают другие места текста; одна пауза не доказывает вины. Разберите последовательность перебиваний, повторов или смен темы. Подойдут точные отсылки или короткие запомнившиеся формулировки; цитаты необязательны. Объясните, как конфликт становится различимым, оставаясь невысказанным."
    },
    "hints": [
      {
        "en": "Show how dialogue makes an unspoken conflict legible; distinguish evidence of avoidance from a speculative motive for it.",
        "ru": "Покажите, как диалог делает невысказанный конфликт различимым; отличайте признаки уклонения от предположения о его причине."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q10",
    "subject": "eng",
    "topicIds": [
      "p2-choices",
      "p2-comparison"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Evaluate",
    "prompt": {
      "en": "How far do two works suggest that memory reshapes the past, rather than simply preserving it? Consider the role of time in the structure of each work.",
      "ru": "В какой мере два произведения показывают, что память (memory) перестраивает прошлое, а не просто сохраняет его? Учтите роль времени (time) в структуре каждого произведения."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Use the temporal structures to weigh preservation and reconstruction of the past; disagreement between memories does not alone establish which is true.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Опираясь на временную структуру, сопоставьте сохранение и воссоздание прошлого; расхождение воспоминаний само по себе не определяет истинную версию."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. A possible argument could contrast a memory that changes on revisiting a place with an account repeatedly corrected by another person. Compare the framing and wording of actual versions: a correction is a competing claim, not automatically the truth. A return to the present can expose selective recall, while stable details can also support preservation. Weigh how each work lets the reader test memory and what remains uncertain, instead of turning a character’s experience into a universal psychological law.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Можно сопоставить воспоминание, меняющееся при возвращении в знакомое место, с рассказом, который постоянно поправляет собеседник. Сравните рамку и слова реальных версий: поправка — конкурирующее утверждение, а не автоматически истина. Возвращение к настоящему может обнаружить избирательность памяти, а устойчивые детали — поддержать сохранение прошлого. Взвесьте, как произведения позволяют проверять память и что остаётся неизвестным, не превращая опыт персонажа во всеобщий психологический закон."
    },
    "hints": [
      {
        "en": "Use the temporal structures to weigh preservation and reconstruction of the past; disagreement between memories does not alone establish which is true.",
        "ru": "Опираясь на временную структуру, сопоставьте сохранение и воссоздание прошлого; расхождение воспоминаний само по себе не определяет истинную версию."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q11",
    "subject": "eng",
    "topicIds": [
      "p2-comparison",
      "p2-organisation"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Compare",
    "prompt": {
      "en": "Compare how two works use a first-person and a third-person perspective to limit or widen what the reader knows about a character.",
      "ru": "Сравните, как два произведения используют повествование от первого лица (first-person narration) и от третьего лица (third-person narration), чтобы ограничить или расширить то, что читатель знает о персонаже."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Compare first- and third-person narration through demonstrated access and restriction; grammatical person does not determine omniscience or reliability.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Сравните повествование от первого и третьего лица по показанному доступу к информации; грамматическое лицо не определяет всеведение или надёжность."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Compare the information actually disclosed by a first-person account with that of a close third-person account. Both can restrict access, and neither grammatical form guarantees reliability. A reader can understand an adult conflict better than a young narrator only if the text supplies clues for that inference. Close third person can reveal selected thoughts without giving complete access to every motive. Distinguish the speaker, the viewpoint and the reliability of the account, then connect their effects to this question.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Сопоставьте сведения, действительно раскрываемые повествованием от первого лица и близким повествованием от третьего. Оба могут ограничивать доступ; ни одно грамматическое лицо не гарантирует надёжности. Читатель поймёт конфликт взрослых лучше юного рассказчика, только если текст даёт основания для такого вывода. Близкое повествование от третьего лица может передавать отдельные мысли, не раскрывая всех мотивов. Различайте того, кто рассказывает, точку зрения и надёжность сообщения, затем свяжите эффекты с вопросом."
    },
    "hints": [
      {
        "en": "Compare first- and third-person narration through demonstrated access and restriction; grammatical person does not determine omniscience or reliability.",
        "ru": "Сравните повествование от первого и третьего лица по показанному доступу к информации; грамматическое лицо не определяет всеведение или надёжность."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q12",
    "subject": "eng",
    "topicIds": [
      "p2-comparison",
      "p2-organisation"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Discuss",
    "prompt": {
      "en": "Discuss how two works explore a character's attempt to belong to a place that has never fully accepted them.",
      "ru": "Обсудите, как два произведения исследуют попытку персонажа обрести чувство принадлежности (belonging) к месту, которое никогда полностью его не принимало."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Explain the attempt to belong and how the community responds; acceptance may be partial, changing or absent.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Объясните стремление принадлежать сообществу и его реакцию; принятие может быть частичным, изменчивым или отсутствовать."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Compare a character’s attempts to participate with the community’s responses in each work. Repeated formal greetings may suggest distance if context contrasts them with warmer treatment of others; politeness alone does not prove rejection. A nickname may mark exclusion, affection or both, depending on speaker and response. Follow any shifts or moments of partial acceptance and explain how narration, dialogue or setting frames them. The conclusion may distinguish social recognition from the character’s own sense of belonging.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Сопоставьте попытки персонажа участвовать в жизни сообщества с его ответной реакцией в каждом произведении. Неизменно официальное приветствие может указывать на дистанцию, если контекст противопоставляет его более тёплому отношению к другим; сама вежливость не доказывает отвержения. Прозвище может исключать, выражать близость или совмещать оба смысла — это зависит от говорящего и реакции. Проследите изменения и частичное принятие, объяснив роль повествования, диалога или пространства. В выводе можно различить общественное признание и собственное чувство принадлежности."
    },
    "hints": [
      {
        "en": "Explain the attempt to belong and how the community responds; acceptance may be partial, changing or absent.",
        "ru": "Объясните стремление принадлежать сообществу и его реакцию; принятие может быть частичным, изменчивым или отсутствовать."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q13",
    "subject": "eng",
    "topicIds": [
      "p2-comparison",
      "p2-organisation"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Evaluate",
    "prompt": {
      "en": "To what extent do two works suggest that rituals, such as weddings, funerals or festivals, give a community its sense of meaning, rather than binding its members to the past?",
      "ru": "В какой степени два произведения показывают, что ритуалы (rituals), например свадьбы, похороны или праздники, дают сообществу ощущение смысла, а не привязывают его членов к прошлому?"
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Weigh how rituals create meaning and bind participants to the past, using the works rather than a general judgement about real cultures.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Взвесьте, как ритуалы создают смысл и связывают участников с прошлым; выводите это из произведений, а не из общих суждений о реальных культурах."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Compare one actual ritual or pattern of rituals in each work, considering who participates and how it is described. A festival occurring annually in the story world is not necessarily repeated in the telling; distinguish the calendar from textual recurrence. An outsider’s detached description can create distance without proving the ritual is compulsory. A changed rite may support adaptation, while an unchanged one may preserve meaningful continuity. Weigh the works’ particular effects rather than requiring a conclusion that all communities must revise traditions.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Сопоставьте реальный для каждого произведения ритуал или их последовательность: кто участвует и как это описано? Ежегодность праздника в мире произведения не означает, что он повторно изображён в тексте; отличайте календарь от текстового повтора. Отстранённое описание постороннего создаёт дистанцию, но не доказывает принудительности обряда. Изменение может поддержать адаптацию, а неизменность — значимую преемственность. Взвесьте конкретные эффекты, не требуя вывода, будто все сообщества обязаны пересматривать традиции."
    },
    "hints": [
      {
        "en": "Weigh how rituals create meaning and bind participants to the past, using the works rather than a general judgement about real cultures.",
        "ru": "Взвесьте, как ритуалы создают смысл и связывают участников с прошлым; выводите это из произведений, а не из общих суждений о реальных культурах."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q14",
    "subject": "eng",
    "topicIds": [
      "p2-comparison",
      "p2-organisation"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Compare",
    "prompt": {
      "en": "Compare how two works use repetition, a motif or a recurring image to build meaning across the whole text.",
      "ru": "Сравните, как два произведения используют повтор (repetition), мотив (motif) или повторяющийся образ, чтобы создавать смысл на протяжении всего текста."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Compare repetitions in their changing or stable contexts and explain the cumulative effect; repetition can reinforce meaning without reversing it.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Сравните повторы в меняющемся или устойчивом контексте и объясните накопительный эффект; повтор может закреплять смысл, не переворачивая его."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Compare precise appearances of a recurring object, phrase or image, recording the surrounding situation and tone. If an object remains unchanged while its owner’s circumstances deteriorate, the contrast may make decline visible. If an image retains the same context, repetition may reinforce continuity rather than produce development. Compare what the final recurrence adds to earlier ones; there is no fixed minimum occurrence count and no requirement that a motif reverse its meaning to matter.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Сопоставьте точные появления предмета, фразы или образа, отметив ситуацию и тон. Если предмет остаётся прежним, а положение владельца ухудшается, контраст может сделать упадок заметным. Если контекст образа устойчив, повтор может закреплять непрерывность, а не развивать перемену. Сравните, что последнее появление добавляет к предыдущим; нет фиксированного минимума повторений или требования, чтобы мотив непременно переворачивал свой смысл."
    },
    "hints": [
      {
        "en": "Compare repetitions in their changing or stable contexts and explain the cumulative effect; repetition can reinforce meaning without reversing it.",
        "ru": "Сравните повторы в меняющемся или устойчивом контексте и объясните накопительный эффект; повтор может закреплять смысл, не переворачивая его."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q15",
    "subject": "eng",
    "topicIds": [
      "p2-comparison",
      "p2-organisation"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Discuss",
    "prompt": {
      "en": "Discuss how two works present a failure to communicate as a form of control, rather than as a simple misunderstanding.",
      "ru": "Обсудите, как два произведения изображают неудачу общения (failure to communicate) как форму контроля, а не как простое недоразумение."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Assess how communication failure enables control; benefit from a misunderstanding is not by itself proof of deliberate deception.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Оцените, как сбой общения позволяет контролировать других; выгода от недоразумения сама по себе не доказывает умышленного обмана."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Compare how information is withheld and what control this enables in each work. A letter that fails to arrive may be lost accidentally; to argue deliberate obstruction, locate evidence that someone intercepts or knowingly suppresses it. Riddling replies can keep another person dependent, but they can also be playful or uncertain: use context. A beneficiary of misunderstanding may exploit it without having caused it. Distinguish intention, action and effect, then weigh how the works invite or complicate a judgement about control.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Сопоставьте удерживание информации и контроль, который оно позволяет, в каждом произведении. Письмо может потеряться случайно; для вывода об умышленной помехе найдите признаки перехвата или сознательного сокрытия. Ответы загадками могут поддерживать зависимость, но бывают игрой или выражением неуверенности: нужен контекст. Тот, кому выгодно недоразумение, может использовать его, не создавая. Различайте намерение, действие и эффект; затем оцените, как произведения позволяют или осложняют вывод о контроле."
    },
    "hints": [
      {
        "en": "Assess how communication failure enables control; benefit from a misunderstanding is not by itself proof of deliberate deception.",
        "ru": "Оцените, как сбой общения позволяет контролировать других; выгода от недоразумения сама по себе не доказывает умышленного обмана."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q16",
    "subject": "eng",
    "topicIds": [
      "p2-language",
      "p2-organisation"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Evaluate",
    "prompt": {
      "en": "How far do two works suggest that a character's transformation is caused by their surroundings, rather than by a choice they make?",
      "ru": "В какой мере два произведения показывают, что преображение (transformation) персонажа вызвано обстоятельствами, а не выбором, который он делает?"
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Weigh circumstances and agency using the work’s causal framing; a character’s self-justification need not be the author’s conclusion.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Взвесьте обстоятельства и самостоятельность выбора по тому, как произведение выстраивает причины; самооправдание персонажа не равно выводу автора."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Build a causal sequence for the change in each work: a circumstance, a response and a consequence, where the text supplies them. Compare how narration or structure makes alternatives visible or closes them off. A clerk’s claim that a crisis forced a decision may be self-justification, but the claim may also be supported by the situation. Evaluate agency from the evidence instead of treating feeling trapped as itself a free choice. A supported conclusion can give different weights to circumstance and choice in the two works.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Выстройте причинную последовательность перемены в каждом произведении: обстоятельство, реакция и последствие, если они показаны. Сопоставьте, как повествование или структура открывает альтернативы либо исключает их. Утверждение служащего, что кризис вынудил его принять решение, может быть самооправданием, но может подтверждаться ситуацией. Оценивайте самостоятельность по доказательствам, а не объявляйте само ощущение ловушки свободным выбором. Обоснованный вывод может по-разному взвесить обстоятельства и выбор в двух произведениях."
    },
    "hints": [
      {
        "en": "Weigh circumstances and agency using the work’s causal framing; a character’s self-justification need not be the author’s conclusion.",
        "ru": "Взвесьте обстоятельства и самостоятельность выбора по тому, как произведение выстраивает причины; самооправдание персонажа не равно выводу автора."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q17",
    "subject": "eng",
    "topicIds": [
      "p2-language",
      "p2-organisation"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Compare",
    "prompt": {
      "en": "Compare how two works represent a group of people through an outsider's eyes, and what this viewpoint reveals about the observer.",
      "ru": "Сравните, как два произведения изображают группу людей глазами постороннего человека и что этот взгляд раскрывает о самом наблюдателе."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Analyse both the represented group and what the outsider’s selection or language reveals about the observer; distance alone does not prove bias.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Проанализируйте и изображённую группу, и то, что отбор деталей и язык постороннего раскрывают о нём самом; дистанция сама по себе не доказывает предвзятость."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Compare the outsider’s categories, selected details and tone in each work. A doctor’s detached vocabulary may reduce individuals to categories, but can also record differences carefully; identify what it actually does. Humour may reveal superiority if its targets and framing support that interpretation. Test the observer’s claims against other voices or details available to the reader. Do not invent an unseen private life to disprove an account, and do not assume that every outsider’s final comment is blind or biased.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Сопоставьте категории постороннего, отбор деталей и тон в двух произведениях. Отстранённая лексика врача может сводить людей к категориям, но может и точно фиксировать различия: покажите, что происходит в тексте. Юмор обнаруживает чувство превосходства, если это подтверждают его мишени и подача. Проверьте утверждения наблюдателя по другим голосам или доступным читателю деталям. Не выдумывайте невидимую частную жизнь для опровержения рассказа и не считайте всякий взгляд постороннего предвзятым."
    },
    "hints": [
      {
        "en": "Analyse both the represented group and what the outsider’s selection or language reveals about the observer; distance alone does not prove bias.",
        "ru": "Проанализируйте и изображённую группу, и то, что отбор деталей и язык постороннего раскрывают о нём самом; дистанция сама по себе не доказывает предвзятость."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q18",
    "subject": "eng",
    "topicIds": [
      "p2-language",
      "p2-organisation"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Discuss",
    "prompt": {
      "en": "Discuss how two works use a changing landscape or city to reflect the inner state of the characters who move through it.",
      "ru": "Обсудите, как два произведения используют меняющийся пейзаж (landscape) или город, чтобы отразить внутреннее состояние персонажей, которые там перемещаются."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Distinguish setting as reflection of feeling from setting as a cause or obstacle; test whether physical change or a changed perception is shown.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Различайте пейзаж как отражение чувства и как причину или препятствие; проверьте, меняется ли сама среда или её восприятие."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Compare a physical alteration or a changed description of place in each work. Rising water alongside a family crisis may create a parallel, but establish how diction, timing or focalisation connects them. Demolition may mirror loneliness while also materially displacing a character; reflection and causation can coexist. If the place stays physically stable but perception changes, explain that distinction. Judge the relationship the works construct, not a universal rule that landscapes must match emotions.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Сопоставьте физическое изменение места или изменение его описания в двух произведениях. Подъём воды рядом с семейным кризисом может создавать параллель, но покажите, как их связывают лексика, время или фокализация. Снос района может отражать одиночество и одновременно физически вытеснять персонажа: отражение и причинное действие могут сочетаться. Если место неизменно, а меняется восприятие, объясните это различие. Оцените связь в произведениях, а не универсальное правило совпадения пейзажа и чувств."
    },
    "hints": [
      {
        "en": "Distinguish setting as reflection of feeling from setting as a cause or obstacle; test whether physical change or a changed perception is shown.",
        "ru": "Различайте пейзаж как отражение чувства и как причину или препятствие; проверьте, меняется ли сама среда или её восприятие."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q19",
    "subject": "eng",
    "topicIds": [
      "p2-language",
      "p2-organisation"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Evaluate",
    "prompt": {
      "en": "To what extent do two works use dialogue, rather than action, to build a conflict that is never fully resolved?",
      "ru": "В какой степени два произведения используют диалог (dialogue), а не действие, чтобы выстроить конфликт, который так и не разрешается полностью?"
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Weigh dialogue against other forms of action in sustaining the conflict; speech can itself be an action.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Взвесьте вклад диалога и других действий в сохранение конфликта; речь сама может быть действием."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Compare what the exchanges accomplish and what remains unresolved. Repeated arguments can sustain a deadlock, but a promise, threat or refusal can itself change the situation: dialogue is not the absence of action. A letter can report another conversation; distinguish quoted dialogue, reported speech and the witness’s interpretation. Explain how withheld information or an interruption affects the conflict only where those features occur in the chosen works. The conclusion should weigh the question’s contrast without mechanically separating speech from all action.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Сопоставьте, что делают разговоры и что остаётся неразрешённым. Повтор спора может поддерживать тупик, но обещание, угроза или отказ сами меняют ситуацию: диалог не равен отсутствию действия. Письмо может передавать разговор; различайте прямые реплики, косвенную речь и трактовку свидетеля. Объясняйте роль сокрытия информации или перебивания, только если они есть в выбранных произведениях. В выводе взвесьте предложенное противопоставление, не отделяя речь механически от любого действия."
    },
    "hints": [
      {
        "en": "Weigh dialogue against other forms of action in sustaining the conflict; speech can itself be an action.",
        "ru": "Взвесьте вклад диалога и других действий в сохранение конфликта; речь сама может быть действием."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  },
  {
    "id": "p2-q20",
    "subject": "eng",
    "topicIds": [
      "p2-language",
      "p2-organisation"
    ],
    "paper": "P2",
    "marks": 25,
    "command": "Compare",
    "prompt": {
      "en": "Compare how two works use the passing of time, such as seasons, anniversaries or ageing, to show the lasting effects of a past event.",
      "ru": "Сравните, как два произведения используют течение времени (passing of time), например смену времён года, годовщины или старение, чтобы показать долгосрочные последствия прошлого события."
    },
    "markscheme": {
      "en": "Author-created self-review guidance, aligned with the school and current IB 2026 Paper 2 allocation: A, B1, B2, C and D are each 0–5 (25 total). This is not a substitute for the full descriptors or a checklist that awards an automatic score. Criterion A (0–5): accurate knowledge and interpretation of both chosen works in response to the question, supported by relevant references. Criterion B1 (0–5): analyse and evaluate how language, form, structure and other authorial choices shape meaning; plot selection and arrangement can count where their effects are analysed. Criterion B2 (0–5): develop a relevant comparison of similarities and/or differences, supporting it throughout the argument. Criterion C (0–5): sustain focus and organise ideas coherently and with balance; no single paragraph structure or fixed number of points is required. Criterion D (0–5): use clear, accurate, effective language and an appropriate register. Detailed accurate references can support the essay; memorised quotations and technical terms are not compulsory. Marks as in the school materials. Task focus: Trace how temporal markers construct lasting consequences; allow recovery, persistence or an ambiguous mixture where the works support it.",
      "ru": "Авторские ориентиры для самопроверки по школьному и текущему распределению IB 2026 Paper 2: A, B1, B2, C и D — по 0–5, всего 25. Они не заменяют полные дескрипторы и не позволяют автоматически начислять баллы по чек-листу. Критерий A (0–5): точное знание и интерпретация обоих выбранных произведений в ответ на вопрос, с уместными отсылками. Критерий B1 (0–5): анализ и оценка того, как язык, форма, структура и другие авторские решения создают смысл; отбор и расположение событий тоже уместны, если разобраны их эффекты. Критерий B2 (0–5): развёрнутое сопоставление сходств и/или различий с доказательствами на протяжении аргументации. Критерий C (0–5): устойчивый фокус, связное и сбалансированное развитие идей; единой структуры абзацев или фиксированного числа пунктов нет. Критерий D (0–5): ясный, точный, выразительный язык и уместный регистр. Подробные точные отсылки могут подтверждать эссе; заученные цитаты и специальные термины необязательны. Баллы как в материалах школы. Фокус задания: Проследите, как временные маркеры создают образ длительных последствий; допустимы исцеление, сохранение боли и неоднозначное сочетание при опоре на произведения."
    },
    "model": {
      "en": "Planning route, not a completed essay or a claim about unnamed real books. Apply it only to two works you have actually studied and check every reference. Compare how recurring dates or cumulative changes make a past event present in each work. An empty place at a memorial meal may represent a particular absence if the context establishes whom it marks. Physical ageing can make elapsed time visible without being identical to decline. Compare what changes and what persists in later scenes, allowing for healing as well as unresolved loss. A convincing judgement follows the works’ evidence; it need not choose the same outcome for both.",
      "ru": "Вариант планирования, а не готовое эссе и не сведения о неназванных реальных книгах. Применяйте его только к двум действительно изученным произведениям, проверяя каждую отсылку. Сопоставьте, как повторяющиеся даты или накопленные перемены делают прошлое событие ощутимым в настоящем. Пустое место за поминальным столом может обозначать конкретное отсутствие, если контекст показывает, чьё именно. Старение делает течение времени видимым, но не тождественно упадку. Сравните перемены и устойчивые детали поздних эпизодов, допуская и исцеление, и неразрешённую утрату. Убедительный вывод следует из произведений и не обязан приписывать им одинаковый исход."
    },
    "hints": [
      {
        "en": "Trace how temporal markers construct lasting consequences; allow recovery, persistence or an ambiguous mixture where the works support it.",
        "ru": "Проследите, как временные маркеры создают образ длительных последствий; допустимы исцеление, сохранение боли и неоднозначное сочетание при опоре на произведения."
      },
      {
        "en": "Build a comparison plan with a claim, a precise reference from each work, an explanation of the authorial choices and a link to the question. Adapt the order to your argument; this is a practice scaffold, not an IB quota.",
        "ru": "Составьте план сопоставления: тезис, точная отсылка к каждому произведению, объяснение авторских решений и связь с вопросом. Порядок подчините аргументу; это тренировочная опора, а не квота IB."
      },
      {
        "en": "After writing, check one strong comparison and one passage that mainly retells events. Explain what makes the comparison analytical, then revise the retelling to connect an authorial choice with meaning and the question.",
        "ru": "После письма найдите одно сильное сопоставление и один фрагмент преимущественного пересказа. Объясните, почему сопоставление аналитическое, затем переработайте пересказ: свяжите авторское решение со смыслом и вопросом."
      }
    ],
    "origin": "original",
    "minutes": 80,
    "stimulus": {
      "en": "Writing practice: 80 minutes to produce a comparative essay on two studied works. Keep planning and review as separate study time. This is a writing-phase exercise, not a complete 105-minute Paper 2 sitting. The routes below suggest possibilities; do not invent episodes to match them.",
      "ru": "Тренировка письма: за 80 минут напишите сравнительное эссе по двум изученным произведениям. Планирование и проверку учитывайте отдельно. Это упражнение на этап письма, а не полный экзамен Paper 2 на 105 минут. Варианты разбора предлагают возможности: не выдумывайте под них эпизоды."
    }
  }
];
