import type { Question } from '../../../../src/contract/types';

// EX-3 school mock: one policy question of 32 marks for the one-hour mock.
// Part (a) is 22 marks (calculations, an explanation and a diagram); part (b) is 10 marks (a recommendation).
// This original practice adapts the school mock total; all numbers are invented and labelled as illustrative data.
// The city (Maravel) is fictional. Rent is in AED thousand per month and quantities in thousand flats per month, so
// total rent is in AED million per month. The numbers are written without thousands separators, so the verifier reads them.
// Each calculation has an entry in scripts/econ-checks/exam-p3.json (expect_in: markscheme.en and markscheme.ru).

export const questions: Question[] = [
  {
    id: 'p3-mock-01',
    subject: 'econ',
    topicIds: ['government-taxes-subsidies-price-controls'],
    paper: 'P3',
    marks: 32,
    command: 'Recommend',
    stimulus: {
      en: 'Maravel is a city of 1.5 million people (illustrative data). Rents for one-bedroom flats in the city centre have risen sharply, and many low-income households cannot afford them. The city council is considering three options:\n' +
        '- Option A: a legal maximum rent of AED 2.5 thousand per month for all flats in the centre (a rent ceiling).\n' +
        '- Option B: a housing allowance of AED 0.5 thousand per month for 6 thousand low-income tenant households, paid from the city budget. The cost is AED 3 million per month.\n' +
        '- Option C: a programme to build 4 thousand new flats in the centre over three years, at a cost of AED 450 thousand per flat, so the total cost is AED 1800 million. Once built, the new flats add 4 thousand flats to the quantity supplied at every rent level.\n\n' +
        'The housing department has produced the data below for one-bedroom flats in the centre (illustrative data). Rent is in AED thousand per month and quantities are in thousand flats per month:\n' +
        '- Rent 2.0: quantity demanded 18, quantity supplied 10\n' +
        '- Rent 2.5: quantity demanded 16, quantity supplied 12\n' +
        '- Rent 3.0: quantity demanded 14, quantity supplied 14\n' +
        '- Rent 3.5: quantity demanded 12, quantity supplied 16\n' +
        '- Rent 4.0: quantity demanded 10, quantity supplied 18',
      ru: 'Маравел — город с 1,5 миллиона жителей (иллюстративные данные). Аренда однокомнатных квартир в центре города резко выросла, и многие домохозяйства с низкими доходами не могут её оплатить. Городской совет рассматривает три варианта:\n' +
        '- Вариант A: законодательно установленная максимальная аренда AED 2,5 тыс. в месяц для всех квартир в центре (потолок арендной платы, rent ceiling).\n' +
        '- Вариант B: жилищное пособие AED 0,5 тыс. в месяц для 6 тысяч домохозяйств-арендаторов с низкими доходами, выплачиваемое из городского бюджета. Стоимость — AED 3 млн в месяц.\n' +
        '- Вариант C: программа строительства 4 тысяч новых квартир в центре за три года; стоимость — AED 450 тыс. за квартиру, то есть AED 1800 млн в целом. После постройки новые квартиры увеличивают величину предложения на 4 тысячи квартир при каждом уровне аренды.\n\n' +
        'Данные жилищного департамента по однокомнатным квартирам в центре (иллюстративные данные). Аренда — в AED тыс. в месяц, величины — в тысячах квартир в месяц:\n' +
        '- Аренда 2,0: величина спроса 18, величина предложения 10\n' +
        '- Аренда 2,5: величина спроса 16, величина предложения 12\n' +
        '- Аренда 3,0: величина спроса 14, величина предложения 14\n' +
        '- Аренда 3,5: величина спроса 12, величина предложения 16\n' +
        '- Аренда 4,0: величина спроса 10, величина предложения 18',
    },
    prompt: {
      en: '(a) Answer parts (i) to (vii) using the data. [22 marks]\n' +
        '(i) Identify the equilibrium rent and the equilibrium quantity of flats. [2 marks]\n' +
        '(ii) Calculate the shortage of flats at the rent ceiling of AED 2.5 thousand per month. [2 marks]\n' +
        '(iii) Calculate the percentage change in the quantity of flats supplied when the rent falls from AED 3.0 thousand to AED 2.5 thousand per month. [2 marks]\n' +
        '(iv) Calculate the change in the total monthly rent received by landlords when the ceiling is introduced. Count only the flats that are actually rented, and give your answer in AED million. [2 marks]\n' +
        '(v) Explain why a rent ceiling below the equilibrium rent can reduce the supply and the quality of flats over time. [4 marks]\n' +
        '(vi) Draw a diagram of the market for flats with the rent ceiling of AED 2.5 thousand per month. Label the equilibrium, the quantities demanded and supplied at the ceiling, the shortage and the quantity of flats rented. Then explain why fewer flats are rented than at equilibrium. [8 marks]\n' +
        '(vii) Calculate PES when rent rises from AED 3.0 thousand to AED 3.5 thousand and quantity supplied rises from 14 to 16 thousand flats. [2 marks]\n' +
        '(b) Recommend one of the three options (A, B or C) for Maravel. Justify your recommendation with the data, discuss the trade-offs and the stakeholders, consider the timing and reach a judgement. [10 marks]',
      ru: '(a) Ответьте на части (i)–(vii), используя данные. [22 балла]\n' +
        '(i) Определите равновесную арендную плату и равновесное количество квартир. [2 балла]\n' +
        '(ii) Рассчитайте дефицит квартир при потолке арендной платы AED 2,5 тыс. в месяц. [2 балла]\n' +
        '(iii) Рассчитайте процентное изменение величины предложения квартир, если аренда снизится с AED 3,0 тыс. до AED 2,5 тыс. в месяц. [2 балла]\n' +
        '(iv) Рассчитайте изменение общей месячной арендной платы, которую получают арендодатели, при введении потолка. Учитывайте только фактически арендованные квартиры; ответ дайте в AED млн. [2 балла]\n' +
        '(v) Объясните, почему потолок арендной платы ниже равновесной может со временем снизить предложение и качество квартир. [4 балла]\n' +
        '(vi) Нарисуйте диаграмму рынка квартир с потолком арендной платы AED 2,5 тыс. в месяц. Подпишите равновесие, величины спроса и предложения при потолке, дефицит и количество арендованных квартир. Затем объясните, почему арендуется меньше квартир, чем при равновесии. [8 баллов]\n' +
        '(vii) Рассчитайте PES при росте аренды с 3,0 до 3,5 тыс. AED и величины предложения с 14 до 16 тысяч квартир. [2 балла]\n' +
        '(b) Рекомендуйте один из трёх вариантов (A, B или C) для Маравела. Обоснуйте рекомендацию данными, обсудите компромиссы и заинтересованные стороны, учтите сроки и сформулируйте итоговое суждение. [10 баллов]',
    },
    markscheme: {
      en: '(a)(i) 1 mark: equilibrium where quantity demanded equals quantity supplied: rent of AED 3.0 thousand per month (14 and 14 thousand flats).\n' +
        '(a)(i) 1 mark: equilibrium quantity of 14 thousand flats per month.\n' +
        '(a)(ii) 1 mark: at AED 2.5 thousand, quantity demanded is 16 thousand and quantity supplied is 12 thousand.\n' +
        '(a)(ii) 1 mark: shortage = 16 - 12 = 4 thousand flats per month.\n' +
        '(a)(iii) 1 mark: % change = (12 - 14) / 14 × 100.\n' +
        '(a)(iii) 1 mark: % change = -14.3%, so the quantity supplied falls by about 14.3%.\n' +
        '(a)(iv) 1 mark: before the ceiling, rent received = 3.0 × 14 = AED 42 million per month; with the ceiling only 12 thousand flats are rented, so rent received = 2.5 × 12 = AED 30 million per month.\n' +
        '(a)(iv) 1 mark: change in total rent = 30 - 42 = -12, so landlords receive AED 12 million per month less.\n' +
        '(a)(v) 1 mark: the ceiling is below equilibrium, so quantity demanded (16 thousand) exceeds quantity supplied (12 thousand): a shortage appears.\n' +
        '(a)(v) 1 mark: a lower rent reduces landlords\' return, so they supply fewer flats over time and may sell or convert them.\n' +
        '(a)(v) 1 mark: at the legal rent, landlords cannot afford to maintain or improve flats, so the quality of the flats falls.\n' +
        '(a)(v) 1 mark: with a shortage, landlords choose tenants (queues, discrimination or side payments), so non-price rationing replaces the price.\n' +
        '(a)(vi) 1 mark: labelled diagram with rent (AED thousand per month) on the vertical axis and quantity (thousand flats per month) on the horizontal axis.\n' +
        '(a)(vi) 1 mark: downward-sloping demand and upward-sloping supply, with the equilibrium at AED 3.0 thousand and 14 thousand flats.\n' +
        '(a)(vi) 1 mark: a horizontal rent ceiling at AED 2.5 thousand, below the equilibrium rent.\n' +
        '(a)(vi) 1 mark: quantity demanded (16 thousand) and quantity supplied (12 thousand) at the ceiling, with the shortage of 4 thousand flats marked between them.\n' +
        '(a)(vi) 1 mark: the quantity of flats rented is the smaller of the two, 12 thousand, which is fewer than the 14 thousand at equilibrium.\n' +
        '(a)(vi) 1 mark: tenants who get a flat pay less (AED 2.5 thousand instead of AED 3.0 thousand), but landlords lose rent.\n' +
        '(a)(vi) 1 mark: the trades that do not happen at the ceiling are a deadweight loss, shown as a triangle between the two curves from 12 to 14 thousand flats.\n' +
        '(a)(vi) 1 mark: at the ceiling landlords offer only 12 thousand flats, so only 12 thousand can be rented, although 16 thousand tenants want one.\n' +
        '(a)(vii) 1 mark: PES = ((16 - 14) / 14) / ((3.5 - 3.0) / 3.0). 1 mark: 0.86 (inelastic).\n' +
        '(b) 1 mark: a clear recommendation of one option (A, B or C) in one sentence.\n' +
        '(b) 1 mark: the recommended option is specified, for example Option C: 4 thousand flats built over three years at a total cost of AED 1800 million.\n' +
        '(b) 1 mark: Option C raises the quantity supplied at AED 2.5 thousand from 12 to 16 thousand, which matches the 16 thousand flats demanded, so the shortage disappears; Option A leaves a shortage of 4 thousand flats.\n' +
        '(b) 1 mark: Option A cuts the rent received by landlords by AED 12 million per month, which discourages supply, so the shortage may grow over time.\n' +
        '(b) 1 mark: Option B costs AED 3 million per month (AED 36 million a year) and adds no flats; with inelastic supply (PES = 0.86 at the equilibrium), part of the allowance is passed on to landlords as higher rents.\n' +
        '(b) 1 mark: uses at least two figures from the data, for example 14 and 16 thousand flats, or the AED 1800 million cost.\n' +
        '(b) 1 mark: trade-off: Option C costs AED 1800 million and takes three years, so it does not help tenants now.\n' +
        '(b) 1 mark: stakeholders: tenants (lower rents or a direct allowance), landlords (A lowers income, C adds competition), the city budget (B is a recurring cost, C a one-off cost).\n' +
        '(b) 1 mark: timing: A works at once, B pays out at once, and C takes three years, so a short-term measure may be needed while the flats are built.\n' +
        '(b) 1 mark: judgement: states the conditions under which the recommendation holds (for example, the budget can fund C and the flats are built on time) and gives a clear final evaluation.',
      ru: '(a)(i) 1 балл: равновесие там, где величина спроса равна величине предложения: аренда AED 3,0 тыс. в месяц (14 и 14 тысяч квартир).\n' +
        '(a)(i) 1 балл: равновесное количество — 14 тысяч квартир в месяц.\n' +
        '(a)(ii) 1 балл: при AED 2,5 тыс. величина спроса составляет 16 тысяч, а величина предложения — 12 тысяч.\n' +
        '(a)(ii) 1 балл: дефицит = 16 - 12 = 4 тысячи квартир в месяц.\n' +
        '(a)(iii) 1 балл: процентное изменение = (12 - 14) / 14 × 100.\n' +
        '(a)(iii) 1 балл: процентное изменение = -14,3%, то есть величина предложения снижается примерно на 14,3%.\n' +
        '(a)(iv) 1 балл: до потолка получено 3,0 × 14 = AED 42 млн в месяц; при потолке арендуется только 12 тысяч квартир, поэтому получено 2,5 × 12 = AED 30 млн в месяц.\n' +
        '(a)(iv) 1 балл: изменение общей арендной платы = 30 - 42 = -12, то есть арендодатели получают на AED 12 млн в месяц меньше.\n' +
        '(a)(v) 1 балл: потолок ниже равновесия, поэтому величина спроса (16 тысяч) превышает величину предложения (12 тысяч): возникает дефицит.\n' +
        '(a)(v) 1 балл: более низкая аренда снижает доход арендодателей, поэтому со временем они предлагают меньше квартир и могут продавать или переоборудовать их.\n' +
        '(a)(v) 1 балл: при законной аренде арендодатели не могут оплачивать ремонт и улучшение квартир, поэтому их качество падает.\n' +
        '(a)(v) 1 балл: при дефиците арендодатели выбирают арендаторов (очереди, дискриминация или неофициальные платежи), поэтому неценовое распределение заменяет цену.\n' +
        '(a)(vi) 1 балл: диаграмма с подписанными осями: аренда (AED тыс. в месяц) по вертикали, количество (тыс. квартир в месяц) по горизонтали.\n' +
        '(a)(vi) 1 балл: убывающий спрос и возрастающее предложение, равновесие при AED 3,0 тыс. и 14 тысячах квартир.\n' +
        '(a)(vi) 1 балл: горизонтальный потолок аренды на уровне AED 2,5 тыс., ниже равновесной аренды.\n' +
        '(a)(vi) 1 балл: при потолке подписаны величина спроса (16 тысяч) и величина предложения (12 тысяч), дефицит 4 тысячи квартир отмечен между ними.\n' +
        '(a)(vi) 1 балл: количество арендованных квартир — меньшее из двух, 12 тысяч, то есть меньше 14 тысяч при равновесии.\n' +
        '(a)(vi) 1 балл: арендаторы, которые получили квартиру, платят меньше (AED 2,5 тыс. вместо AED 3,0 тыс.), но арендодатели теряют доход.\n' +
        '(a)(vi) 1 балл: сделки, которые не состоялись при потолке, — это чистые потери общества (deadweight loss), треугольник между кривыми от 12 до 14 тысяч квартир.\n' +
        '(a)(vi) 1 балл: при потолке арендодатели предлагают только 12 тысяч квартир, поэтому сдать можно только 12 тысяч, хотя 16 тысяч арендаторов хотят её снять.\n' +
        '(a)(vii) 1 балл: PES = ((16 - 14) / 14) / ((3.5 - 3.0) / 3.0). 1 балл: 0,86 (неэластично).\n' +
        '(b) 1 балл: ясная рекомендация одного варианта (A, B или C) в одном предложении.\n' +
        '(b) 1 балл: рекомендация конкретна, например вариант C: 4 тысячи квартир за три года на AED 1800 млн.\n' +
        '(b) 1 балл: вариант C поднимает величину предложения при AED 2,5 тыс. с 12 до 16 тысяч, что совпадает с величиной спроса, поэтому дефицит исчезает; вариант A оставляет дефицит 4 тысячи квартир.\n' +
        '(b) 1 балл: вариант A снижает доход арендодателей на AED 12 млн в месяц, что сдерживает предложение, поэтому дефицит может расти со временем.\n' +
        '(b) 1 балл: вариант B стоит AED 3 млн в месяц (AED 36 млн в год) и не добавляет квартир; при неэластичном предложении (PES = 0,86 в равновесии) часть пособия достаётся арендодателям в виде более высокой аренды.\n' +
        '(b) 1 балл: используются не менее двух цифр из данных, например 14 и 16 тысяч квартир или стоимость AED 1800 млн.\n' +
        '(b) 1 балл: компромисс: вариант C стоит AED 1800 млн и занимает три года, поэтому не помогает арендаторам сейчас.\n' +
        '(b) 1 балл: заинтересованные стороны: арендаторы (ниже аренда или прямая помощь), арендодатели (A снижает доход, C добавляет конкуренцию), городской бюджет (B — регулярные расходы, C — разовые).\n' +
        '(b) 1 балл: сроки: A действует сразу, B выплачивается сразу, а C занимает три года, поэтому на время строительства может понадобиться краткосрочная мера.\n' +
        '(b) 1 балл: суждение: условия, при которых рекомендация верна (например, бюджет покрывает C и квартиры построены в срок), и ясная итоговая оценка.',
    },
    origin: 'original',
    minutes: 60,
  },
];
