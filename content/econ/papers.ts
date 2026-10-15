import type { PaperGuide } from '../../src/contract/types';

// School mock formats: Student Guide to October 2026 Mocks, received 15 October.
export const papers: PaperGuide[] = [
  {
    "subject": "econ",
    "paper": "P1",
    "title": {
      "en": "Economics HL Paper 1: extended response",
      "ru": "Экономика HL, работа 1: развёрнутый ответ"
    },
    "minutes": 75,
    "marks": 25,
    "structure": {
      "en": "October school mock: two questions, both from Unit 3 (macroeconomics); answer one. Part (a): Explain, 10 marks, about 30 minutes. Part (b): Discuss or Evaluate, 15 marks, about 45 minutes. Writing time: 75 minutes; reading time: 5 minutes. Weight: 2/8. Type your answer.",
      "ru": "Октябрьский школьный мок: два вопроса, оба из Unit 3 (макроэкономика); ответь на один. Часть (a): Explain, 10 баллов, около 30 минут. Часть (b): Discuss или Evaluate, 15 баллов, около 45 минут. На ответ 75 минут, на чтение 5 минут. Вес: 2/8. Печатай ответ."
    },
    "strategy": {
      "en": "Use reading time to compare the two macro questions. Choose the one for which you can explain the mechanism and evaluate with an example. Within 75 minutes, allocate about 30 to (a) and 45 to (b), including brief planning and checking. Define terms, label the diagram, explain each causal link and finish (b) with a conditional judgement.",
      "ru": "За время чтения сравни два макро-вопроса. Выбери тот, для которого можешь объяснить механизм и дать оценку с примером. Из 75 минут выдели примерно 30 на (a) и 45 на (b), включая короткий план и проверку. Определи термины, подпиши диаграмму, объясни каждое причинное звено и заверши (b) обоснованным выводом с условиями."
    },
    "criteria": {
      "en": "Knowledge and understanding: accurate definitions and a labelled diagram. Application: a real-world example with figures and a named place. Analysis: chains of reasoning (if ... then ... so ...). Evaluation: short-run and long-run effects, stakeholders, assumptions and a justified judgement.",
      "ru": "Знание и понимание: точные определения и подписанная диаграмма. Применение: пример из реальной жизни с цифрами и названием места. Анализ: цепочки рассуждений (если ... то ... значит ...). Оценка: краткосрочные и долгосрочные эффекты, заинтересованные стороны, допущения и обоснованное суждение."
    },
    "commandTerms": [
      "Explain",
      "Discuss",
      "Evaluate"
    ],
    "asked": {
      "en": "School mock scope: Unit 3 only (3.1–3.7). Practise AD/AS and gaps, unemployment/inflation/growth, inequality, monetary, fiscal and supply-side policies. Explain mechanisms in (a); discuss or evaluate in (b). Microeconomics and Unit 4 essays are outside this mock. See the [mock checklist](#/s/econ/t/mock-checklist).",
      "ru": "Объём школьного мока: только Unit 3 (3.1–3.7). Тренируй AD/AS и разрывы, безработицу/инфляцию/рост, неравенство, денежно-кредитную, фискальную политику и политику предложения. В (a) объясняй механизм; в (b) обсуждай или оценивай. Эссе по микроэкономике и Unit 4 вне мока. См. [чек-лист мока](#/s/econ/t/mock-checklist)."
    },
    "timedSets": [
      {
        "id": "p1-one-essay",
        "title": {
          "en": "Mock P1: choose one of two macro essays",
          "ru": "Мок P1: выбери одно из двух макро-эссе"
        },
        "questionIds": [
          "p1-essay-10",
          "p1-essay-11"
        ],
        "minutes": 75
      },
      {
        "id": "p1-essay-plan",
        "title": {
          "en": "Plan one macro essay (25 minutes)",
          "ru": "План одного макро-эссе (25 минут)"
        },
        "questionIds": [
          "p1-essay-09",
          "p1-essay-12"
        ],
        "minutes": 25
      }
    ]
  },
  {
    "subject": "econ",
    "paper": "P2",
    "title": {
      "en": "Economics HL Paper 2: data response",
      "ru": "Экономика HL, работа 2: анализ данных"
    },
    "minutes": 105,
    "marks": 40,
    "structure": {
      "en": "October school mock: one compulsory data-response question, 40 marks in 105 minutes. No separate reading period and no choice of question. Parts (a)–(f) use Define, Calculate, Draw, Show and Explain: two definitions, calculations and diagrams. Part (g): Discuss, 15 marks, with balanced evaluation. Weight: 3/8. Type your answer.",
      "ru": "Октябрьский школьный мок: один обязательный вопрос по данным, 40 баллов за 105 минут. Отдельного чтения и выбора вопроса нет. В частях (a)–(f): Define, Calculate, Draw, Show и Explain — два определения, расчёты и диаграммы. Часть (g): Discuss, 15 баллов, со взвешенной оценкой. Вес: 3/8. Печатай ответ."
    },
    "strategy": {
      "en": "Read the data within the 105-minute writing time. Give precise definitions, show calculation steps and units, and label diagrams. Use the extracts throughout the explanation and the 15-mark discussion; weigh stakeholders, timing and assumptions before your judgement.",
      "ru": "Прочитай данные в пределах 105 минут работы. Дай точные определения, покажи шаги расчёта и единицы, подпиши диаграммы. Используй материалы в объяснениях и обсуждении на 15 баллов; перед выводом взвесь интересы участников, сроки и допущения."
    },
    "criteria": {
      "en": "Definitions and calculations are accurate, with units and signs; diagrams are correct and labelled; explanations are chains of reasoning that use the data; the part (g) discussion is balanced, evaluative and ends with a justified judgement.",
      "ru": "Определения и расчёты точные, с единицами и знаками; диаграммы верные и подписанные; объяснения — цепочки рассуждений с опорой на данные; обсуждение в части (g) сбалансированное, оценочное и завершается обоснованным суждением."
    },
    "commandTerms": [
      "Define",
      "Calculate",
      "Draw",
      "Show",
      "Explain",
      "Discuss"
    ],
    "asked": {
      "en": "The school checklist covers Units 1–3 through 3.7. Unit 4, market power (2.11), XED and business objectives are excluded. Practise demand/supply, elasticities, intervention, externalities, public goods, information and macro policy using the [mock checklist](#/s/econ/t/mock-checklist).",
      "ru": "Школьный чек-лист охватывает Units 1–3 до 3.7. Исключены Unit 4, рыночная власть (2.11), XED и цели фирм. Тренируй спрос/предложение, эластичности, вмешательство, внешние эффекты, общественные блага, информацию и макрополитику по [чек-листу мока](#/s/econ/t/mock-checklist)."
    },
    "timedSets": [
      {
        "id": "p2-full-set",
        "title": {
          "en": "One compulsory data response (105 minutes)",
          "ru": "Один обязательный анализ данных (105 минут)"
        },
        "questionIds": [
          "p2-set-01"
        ],
        "minutes": 105
      },
      {
        "id": "p2-set-practice",
        "title": {
          "en": "One compulsory macro data response (105 minutes)",
          "ru": "Один обязательный макро-анализ данных (105 минут)"
        },
        "questionIds": [
          "p2-set-03"
        ],
        "minutes": 105
      },
      {
        "id": "p2-externalities",
        "title": {
          "en": "One compulsory externalities data response (105 minutes)",
          "ru": "Один обязательный анализ внешних эффектов (105 минут)"
        },
        "questionIds": [
          "p2-set-02"
        ],
        "minutes": 105
      }
    ]
  },
  {
    "subject": "econ",
    "paper": "P3",
    "title": {
      "en": "Economics HL Paper 3: policy paper",
      "ru": "Экономика HL, работа 3: анализ политики"
    },
    "minutes": 60,
    "marks": 32,
    "structure": {
      "en": "October school mock: one compulsory policy question, 32 marks in 60 minutes. Mostly calculations, with written parts; finish by recommending a policy. Reserve about 20–25 minutes for the recommendation. Weight: 3/8. Type your answer. The practice set below is original, not the school paper.",
      "ru": "Октябрьский школьный мок: один обязательный вопрос по политике, 32 балла за 60 минут. Преимущественно расчёты, есть текстовые части; в конце рекомендуй политику. Оставь примерно 20–25 минут на рекомендацию. Вес: 3/8. Печатай ответ. Набор ниже авторский, это не школьная работа."
    },
    "strategy": {
      "en": "Allow roughly 35–40 minutes for the earlier parts and 20–25 for the final recommendation. Show formulas, substitution, units, signs and rounding. Recommend a specific policy using the data; explain how it works, assess trade-offs and stakeholders, and state the conditions under which it is preferable.",
      "ru": "Выдели примерно 35–40 минут на начальные части и 20–25 на итоговую рекомендацию. Покажи формулы, подстановку, единицы, знаки и округление. Рекомендуй конкретную политику по данным; объясни механизм, оцени компромиссы и интересы участников, укажи условия, при которых выбор предпочтителен."
    },
    "criteria": {
      "en": "Calculations are correct, with units; explanations are chains of reasoning; diagrams are labelled and accurate; evaluation weighs arguments with data, short and long run, stakeholders and assumptions; the recommendation is clear and justified by data, with trade-offs, stakeholders, timing and a judgement.",
      "ru": "Расчёты верные, с единицами; объяснения — цепочки рассуждений; диаграммы подписаны и верны; оценка взвешивает аргументы с данными, краткосрочный и долгосрочный периоды, заинтересованные стороны и допущения; рекомендация ясна и обоснована данными, с компромиссами, заинтересованными сторонами, сроками и суждением."
    },
    "commandTerms": [
      "Calculate",
      "Outline",
      "Explain",
      "Comment on",
      "Draw",
      "Recommend"
    ],
    "asked": {
      "en": "Required calculations: PED/YED/PES; consumer/producer surplus; ceilings, floors, taxes and subsidies; welfare loss in all four externality cases; GDP deflator and real GDP; unemployment rate using the labour force; price basket index; real GDP growth; Lorenz curve from quintiles; indirect tax, total tax, average and marginal rates; Keynesian multiplier and the GDP effect of injections. No exchange-rate, terms-of-trade, tariff/quota or balance-of-payments calculations. See the [mock checklist](#/s/econ/t/mock-checklist).",
      "ru": "Нужные расчёты: PED/YED/PES; излишки потребителя/производителя; потолки/минимумы цен, налоги и субсидии; потери во всех четырёх случаях внешних эффектов; дефлятор и реальный ВВП; безработица через рабочую силу; индекс корзины цен; рост реального ВВП; кривая Лоренца по квинтилям; косвенный налог, общая сумма, средняя и предельная ставки; кейнсианский мультипликатор и влияние инъекций на ВВП. Расчётов курсов, условий торговли, тарифов/квот и платёжного баланса нет. См. [чек-лист мока](#/s/econ/t/mock-checklist)."
    },
    "timedSets": [
      {
        "id": "p3-mock",
        "title": {
          "en": "Mock policy paper: 32 marks, 60 minutes",
          "ru": "Мок по политике: 32 балла, 60 минут"
        },
        "questionIds": [
          "p3-mock-01"
        ],
        "minutes": 60
      }
    ]
  }
];
