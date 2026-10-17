import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-4-01',
    subject: 'math',
    topicIds: ['1-4-financial-sequences'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'For this hypothetical problem, a bank in Dubai pays a fixed 4% per year, compounded annually, on a deposit of AED 15,000. Find the value of the deposit after 6 years, giving your answer to the nearest dirham.',
      ru: 'В этой условной задаче банк в Дубае начисляет постоянные 4% годовых с ежегодной капитализацией на вклад 15 000 AED. Найдите стоимость вклада через 6 лет, ответ округлите до ближайшего дирхама.',
    },
    markscheme: {
      en: 'M1: the common ratio is 1.04 and there are six periods. M1: value = 15000 × 1.04^6. A1: AED 18980 (to the nearest dirham).',
      ru: 'M1: знаменатель 1,04 и шесть периодов. M1: стоимость = 15000 × 1,04^6. A1: 18980 AED (до ближайшего дирхама).',
    },
    answer: '18980',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-1-4-02',
    subject: 'math',
    topicIds: ['1-4-financial-sequences'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'A machine is bought for AED 40,000. After 4 years its value is AED 25,000. The value falls by the same percentage each year on a reducing-balance basis. Find the annual percentage depreciation rate, giving your answer correct to 1 decimal place.',
      ru: 'Станок куплен за 40 000 AED. Через 4 года его стоимость составляет 25 000 AED. Стоимость каждый год уменьшается на один и тот же процент по методу остаточной стоимости. Найдите годовой процент амортизации, ответ запишите с точностью до 1 знака после запятой.',
    },
    markscheme: {
      en: 'M1: 25000 = 40000 × (1 − r/100)^4. M1: take the fourth root of 25000/40000 to get 1 − r/100. A1: a correct value for the fourth root, positive and less than 1. A1: r = 11.1 (correct to 1 decimal place).',
      ru: 'M1: 25000 = 40000 × (1 − r/100)^4. M1: извлечь корень четвёртой степени из 25000/40000, получив 1 − r/100. A1: верное значение корня, положительное и меньше 1. A1: r = 11,1 (с точностью до 1 знака после запятой).',
    },
    answer: '11.1',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-4-03',
    subject: 'math',
    topicIds: ['1-4-financial-sequences'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A delivery van is bought for AED 120,000. Its value depreciates by 15% per year on a reducing-balance basis. Instead of buying the van, the company could invest AED 120,000 in a hypothetical account at a fixed nominal annual rate of 4.5%, compounded monthly, with no fees.\n\n(a) Find the value of the van after 4 years, giving your answer to the nearest dirham. [2]\n\n(b) Find the least number of complete years after which the value of the van is less than AED 40,000. [3]\n\n(c) Find the value of the investment after 4 years, giving your answer to the nearest dirham. [3]\n\n(d) Show that the investment is worth more than twice the value of the van after 4 years. [3]\n\n(e) Comment on which option gives the company the greater value after 4 years. Give one reason why the company might still prefer to keep the van. [3]',
      ru: 'Грузовой фургон куплен за 120 000 AED. Его стоимость уменьшается на 15% в год по методу остаточной стоимости. Вместо покупки фургона компания могла бы вложить 120 000 AED на условный счёт с постоянной номинальной ставкой 4,5% годовых, ежемесячным начислением и без комиссий.\n\n(a) Найдите стоимость фургона через 4 года, ответ округлите до ближайшего дирхама. [2]\n\n(b) Найдите наименьшее число полных лет, после которого стоимость фургона станет меньше 40 000 AED. [3]\n\n(c) Найдите стоимость вклада через 4 года, ответ округлите до ближайшего дирхама. [3]\n\n(d) Покажите, что через 4 года стоимость вклада превышает удвоенную стоимость фургона. [3]\n\n(e) Прокомментируйте, какой вариант даёт компании большую стоимость через 4 года. Назовите одну причину, по которой компания всё же может предпочесть оставить фургон. [3]',
    },
    markscheme: {
      en: '(a) M1: value = 120000 × 0.85^4 (the van keeps 85% of its value each year). A1: AED 62641 (to the nearest dirham).\n(b) M1: a table of values for the value of the van, or 120000 × 0.85^n with the value below 40000. A1: n = 7. A1: 7 complete years, because the value is still above AED 40,000 after 6 years.\n(c) M1: rate per period 0.045/12 and 48 periods (12 a year for 4 years). M1: value = 120000 × (1 + 0.045/12)^48. A1: AED 143618 (to the nearest dirham).\n(d) M1: twice the value of the van is 2 × 62641 = 125282, from part (a).\nA1: the value of the investment from part (c), 143618, is larger than 125282.\nR1: so the investment is worth more than twice the value of the van (AG).\n(e) R1: the investment gives the greater value, AED 143618 against AED 62641. R1: a reason linked to the context, for example that the van can generate delivery revenue, omitted from this resale-value comparison. The investment’s interest is already included; operating revenues, costs and business needs are needed to compare overall returns. A1: a clear conclusion that weighs both options.',
      ru: '(a) M1: стоимость = 120000 × 0,85^4 (фургон сохраняет 85% стоимости каждый год). A1: 62641 AED (до ближайшего дирхама).\n(b) M1: таблица значений для стоимости фургона или 120000 × 0,85^n, где стоимость ниже 40000. A1: n = 7. A1: 7 полных лет, потому что после 6 лет стоимость всё ещё выше 40 000 AED.\n(c) M1: ставка за период 0,045/12 и 48 периодов (12 начислений в год за 4 года). M1: стоимость = 120000 × (1 + 0,045/12)^48. A1: 143618 AED (до ближайшего дирхама).\n(d) M1: двойная стоимость фургона равна 2 × 62641 = 125282 из части (a).\nA1: стоимость вклада из части (c), 143618, больше, чем 125282.\nR1: значит, стоимость вклада превышает удвоенную стоимость фургона (AG).\n(e) R1: вклад даёт большую стоимость, 143618 AED против 62641 AED. R1: причина, связанная с контекстом, например, фургон может приносить выручку от доставок, не включённую в сравнение остаточных стоимостей. Проценты вклада уже учтены; для сравнения общей отдачи нужны выручка, расходы и потребности бизнеса. A1: ясный вывод, учитывающий оба варианта.',
    },
    answer: '62641; 7; 143618',
    origin: 'original',
    minutes: 14,
  },
];
