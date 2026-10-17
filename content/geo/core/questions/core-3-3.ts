import type { Question } from '../../../../src/contract/types';

const infographicUrl = new URL('../topics/assets/core-3-3-infographic.svg?no-inline', import.meta.url).href;
const infographicRuUrl = new URL('../topics/assets/core-3-3-infographic.ru.svg?no-inline', import.meta.url).href;

// Syllabus core 3.3. Original questions in IB Geography SL Paper 2 style.
// Figures: FAO Fisheries Circular No. 920 (1997) for the Peruvian anchoveta; Eurostat cei_wm011 (updated 30 March 2026) for the Section B data.
// The arithmetic in the markschemes was checked by a script (scratch check, 13 October 2026).
const topicIds = ['core-3-3-resource-stewardship'];

export const questions: Question[] = [
  {
    id: 'core-3-3-a2',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 3,
    command: 'Calculate',
    prompt: {
      en: 'The Southeast Pacific catch of the species Peruvian anchoveta was 13.1 million tonnes in 1970 and 1.7 million tonnes in 1973 (FAO, 1997). Calculate the percentage fall in the catch between 1970 and 1973. Show your working.',
      ru: 'Улов вида «перуанская анчоуста» (Peruvian anchoveta) в юго-восточной части Тихого океана составлял 13,1 млн тонн в 1970 году и 1,7 млн тонн в 1973 году (FAO, 1997). Рассчитайте процентное снижение улова между 1970 и 1973 годами. Покажите ход решения.',
    },
    markscheme: {
      en: '1 mark: fall in tonnes = 13.1 − 1.7 = 11.4 million tonnes; 1 mark: percentage fall = 11.4 ÷ 13.1 × 100 (divided by the 1970 value); 1 mark: answer 87.0% with units (accept 87%). Dividing by the 1973 value (1.7) gives 670.6% and is incorrect, so it earns no method mark.',
      ru: '1 балл: снижение в тоннах = 13,1 − 1,7 = 11,4 млн тонн; 1 балл: процентное снижение = 11,4 ÷ 13,1 × 100 (деление на значение 1970 года); 1 балл: ответ 87,0% с единицами измерения (засчитывается 87%). Деление на значение 1973 года (1,7) даёт 670,6% и неверно, поэтому балла за метод не даёт.',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'core-3-3-a3',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why a total allowable catch set above the sustainable yield can lead to the collapse of a fishery. Use the Southeast Pacific Peruvian anchoveta fishery in the early 1970s as an example.',
      ru: 'Объясните, почему общий допустимый улов, установленный выше устойчивого объёма изъятия, может привести к краху промысла. Используйте в качестве примера промысел вида «перуанская анчоуста» в юго-восточной части Тихого океана в начале 1970-х годов.',
    },
    markscheme: {
      en: '1 mark: the recommended ceiling was 8 to 9 million tonnes a year, and catches of 13.1 million tonnes in 1970 and 11.2 million tonnes in 1971 exceeded it; 1 mark: removing more fish than the stock can replace reduces the breeding stock and can weaken future recruitment; recruitment also depends on environmental conditions; 1 mark: the 1972–73 El Niño reduced recruitment, so an already weakened stock could not recover; 1 mark: link to the outcome: the catch fell to 1.7 million tonnes in 1973 and to 94,000 tonnes in 1984 (FAO, 1997).',
      ru: '1 балл: рекомендованный предел составлял 8–9 млн тонн в год, а уловы 13,1 млн тонн в 1970 году и 11,2 млн тонн в 1971 году его превышали; 1 балл: изъятие большего количества рыбы, чем запас способен восполнить, сокращает нерестовый запас и может ослаблять будущее пополнение; на него влияют и природные условия; 1 балл: Эль-Ниньо 1972–1973 годов снизило пополнение, поэтому уже ослабленный запас не смог восстановиться; 1 балл: связь с результатом: улов упал до 1,7 млн тонн в 1973 году и до 94 000 тонн в 1984 году (FAO, 1997).',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'core-3-3-a5',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 6,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the use of certification schemes, such as the Marine Stewardship Council (MSC) and the Forest Stewardship Council (FSC), as a method of resource stewardship.',
      ru: 'Оцените использование схем сертификации, например Морского попечительского совета (Marine Stewardship Council, MSC) и Совета лесного попечительства (Forest Stewardship Council, FSC), как метода бережного управления ресурсами.',
    },
    markscheme: {
      en: '1 mark: knowledge: certification is an independent audit against a standard, shown by a label; 1 mark: a strength, such as market incentives and traceability for buyers, and possible price premiums; 1 mark: a weakness, such as the cost of audits for small producers; 1 mark: a weakness, certification is voluntary, so many fisheries and forests are not covered; 1 mark: a limit, certification cannot by itself stop illegal fishing or logging; 1 mark: a reasoned judgement weighing both sides, for example that it helps most when the certified share of supply grows and standards are strict and independently audited. Maximum 6.',
      ru: '1 балл: знание: сертификация — независимая проверка по стандарту, подтверждаемая маркировкой; 1 балл: сильная сторона, например рыночные стимулы и прослеживаемость для покупателей, а также возможная надбавка к цене; 1 балл: слабость, например стоимость проверок для мелких производителей; 1 балл: слабость: сертификация добровольна, поэтому многие промыслы и леса не охвачены; 1 балл: ограничение: сама по себе сертификация не остановит незаконный промысел или вырубку; 1 балл: обоснованный вывод, взвешивающий обе стороны, например, что сертификация помогает больше всего, когда растёт доля сертифицированной продукции, а стандарты строгие и независимо проверяются. Максимум 6.',
    },
    origin: 'original',
    minutes: 8,
  },
  {
    id: 'core-3-3-b1',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'B',
    marks: 10,
    command: 'Using the infographic',
    stimulus: {
      en: 'Figure 1 (infographic) shows the recycling rate of municipal waste, the percentage of municipal waste that is recycled, for Germany, the Netherlands and Romania in 2014, 2020 and 2023. Source: Eurostat, dataset cei_wm011, Recycling rate of municipal waste (data updated 30 March 2026).' + ' [Open infographic](' + infographicUrl + ')',
      ru: 'Рисунок 1 (инфографика) показывает уровень переработки муниципальных отходов, то есть долю муниципальных отходов, которая перерабатывается, для Германии, Нидерландов и Румынии в 2014, 2020 и 2023 годах. Источник: Eurostat, набор данных cei_wm011, Recycling rate of municipal waste (данные обновлены 30 марта 2026 года).' + ' [Открыть инфографику](' + infographicRuUrl + ')',
    },
    prompt: {
      en: '(a) Using the infographic, describe the trend in the recycling rate for each country between 2014 and 2023. [3]\n\n(b) Calculate the percentage increase in the recycling rate in the Netherlands from 2014 to 2023. Show your working. [3]\n\n(c) Evaluate the use of pay-as-you-throw charges, under which households pay according to the amount of residual waste they produce, as a way to raise recycling rates in a country such as Romania. [4]',
      ru: '(a) Используя инфографику, опишите динамику уровня переработки в каждой стране с 2014 по 2023 год. [3]\n\n(b) Рассчитайте процентный рост уровня переработки в Нидерландах с 2014 по 2023 год. Покажите ход решения. [3]\n\n(c) Оцените использование тарифов «плати за то, что выбрасываешь» (pay-as-you-throw), при которых домохозяйства платят в зависимости от объёма остаточных отходов, как способ повысить уровень переработки в такой стране, как Румыния. [4]',
    },
    markscheme: {
      en: '(a) 1 mark each, maximum 3: (1) Germany rose from 65.6% (2014) to 70.3% (2020), then fell to 68.7% (2023); (2) the Netherlands increased across the three observations from 50.9% (2014) to 57.0% (2020) and 57.9% (2023), with little change after 2020; (3) Romania stayed low and nearly flat, between 12.2% and 13.1%, falling from 13.1% (2014) to 12.4% (2023). Values must be quoted with their years. (b) 1 mark: difference = 57.9 − 50.9 = 7.0 percentage points; 1 mark: percentage increase = 7.0 ÷ 50.9 × 100; 1 mark: answer 13.8% with the years 2014 and 2023 named (accept 13.75% at two decimal places). (c) 1 mark each, maximum 4: (1) the charge makes residual waste costly, giving households an incentive to separate recyclables and prevent waste; the response is not guaranteed; (2) link to the infographic: Romania’s rate has stayed at about 12–13% since 2014, so a charge alone may not be enough without collection of recyclables; (3) trade-offs: illegal dumping or burning of waste when charges rise, an unfair burden on low-income households, and the cost of billing and collection; (4) evaluation: a reasoned judgement, for example that the method is more effective when combined with accessible collection, sorting and enforcement.',
      ru: '(a) По 1 баллу за каждый пункт, максимум 3: (1) в Германии уровень вырос с 65,6% (2014) до 70,3% (2020), затем снизился до 68,7% (2023); (2) в Нидерландах он увеличивался между тремя приведёнными наблюдениями: с 50,9% (2014) до 57,0% (2020) и 57,9% (2023), почти не меняясь после 2020 года; (3) в Румынии уровень оставался низким и почти неизменным, от 12,2% до 13,1%, снизившись с 13,1% (2014) до 12,4% (2023). Значения нужно называть с годами. (b) 1 балл: разность = 57,9 − 50,9 = 7,0 процентного пункта; 1 балл: процентный рост = 7,0 ÷ 50,9 × 100; 1 балл: ответ 13,8% с указанием лет 2014 и 2023 (засчитывается 13,75% при округлении до сотых). (c) По 1 баллу за каждый пункт, максимум 4: (1) тариф делает остаточные отходы дорогими, что даёт домохозяйствам стимул отделять вторсырьё и предотвращать отходы; реакция не гарантирована; (2) связь с инфографикой: уровень в Румынии держится на уровне около 12–13% с 2014 года, поэтому одного тарифа может быть недостаточно без сбора вторсырья; (3) компромиссы: незаконный вывоз и сжигание отходов при росте тарифов, несправедливая нагрузка на домохозяйства с низким доходом, стоимость выставления счетов и сбора; (4) оценка: обоснованный вывод, например, что метод эффективнее в сочетании с доступным сбором, сортировкой и контролем.',
    },
    origin: 'original',
    minutes: 12,
  },
{
  "id": "core-3-3-a6",
  "subject": "geo",
  "topicIds": [
    "core-3-3-resource-stewardship"
  ],
  "paper": "P2",
  "section": "A",
  "marks": 4,
  "command": "Calculate",
  "prompt": {
    "en": "UN 2025 reporting gives safely managed drinking-water coverage of68% in2015 and74% in 2024;2.1billion people still lacked the service in 2024. Calculate the change in percentage points and relative percent,and explain one reason this does not prove SDG6.1 has been achieved or water abstraction is sustainable.",
    "ru": "Отчётность ООН2025 даёт охват безопасно организованным питьевым водоснабжением68% в2015 и74% в 2024 году;2,1млрд человек в 2024 году услуги ещё не имели. Рассчитай изменение в процентных пунктах и в относительных процентах. Объясни,почему это не доказывает достижения задачи ЦУР 6.1 или устойчивости водозабора."
  },
  "markscheme": {
    "en": "1:74−68=6percentagepoints.1:(6/68)×100≈8.8% relative increase.1:coverage remains below universal access and2.1billion remain unserved;inequality/affordability/reliability matter.1:indicator 6.1.1 measures a service,not the water-stress ratio6.4.2;source protection/environmental flows need separate evidence. This original exercise uses the same2025 reporting vintage for both dates,not mixed revisions.",
    "ru": "1:74−68=6процентных пунктов.1:(6/68)×100≈8,8% относительного роста.1:охват не всеобщий,2,1млрд человек ещё без услуги;важны неравенство,цена и надёжность.1:6.1.1 измеряет услугу,а не нагрузку6.4.2;защиту источника и экологический сток нужно проверять отдельно. В авторском задании обе даты взяты из одной версии отчётности2025,а не разных пересмотров."
  },
  "origin": "original",
  "minutes": 6
},
];
