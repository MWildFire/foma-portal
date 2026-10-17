import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'half-life-formula',
    tex: 'T=\\dfrac{\\ln 2}{k}',
    name: { en: 'Half-life of exponential decay', ru: 'Период полураспада при экспоненциальном убывании (Half-life of exponential decay)' },
    meaning: {
      en: 'For $N=N_0e^{-kt}$ with $N_0>0$ and $k>0$, the time $T$ for the amount to halve.',
      ru: 'Для $N=N_0e^{-kt}$ при $N_0>0$ и $k>0$ — время $T$, за которое величина уменьшается вдвое.',
    },
    when: {
      en: 'Radioactive decay or drug clearance at a constant proportional rate $k$.',
      ru: 'Радиоактивный распад или выведение препарата в непрерывной модели с постоянной относительной скоростью $k$.',
    },
    syllabus: '2.9',
    inBooklet: false,
    example: {
      en: 'With k = 0.14 per day, T = ln 2 / 0.14 = 4.95 days.',
      ru: 'При k = 0,14 в сутки T = ln 2 / 0,14 = 4,95 суток.',
    },
  },
  {
    id: 'logistic-formula',
    tex: 'y=\\dfrac{L}{1+Ce^{-kx}}',
    name: { en: 'Logistic model', ru: 'Логистическая модель (Logistic model)' },
    meaning: {
      en: '$L$ is the upper limit, the starting value is $\\dfrac{L}{1+C}$, and $k$ sets the steepness of the S-shape.',
      ru: '$L$ — верхний предел, начальное значение равно $\\dfrac{L}{1+C}$, а $k$ задаёт крутизну S-образной кривой.',
    },
    when: {
      en: 'For $L>0$, $C>0$ and $k>0$, the full curve accelerates until y=L/2 and then slows towards L. If the context starts at x=0 with C≤1, it begins at or beyond that point and does not first accelerate.',
      ru: 'При $L>0$, $C>0$ и $k>0$ полная кривая ускоряется до y=L/2, затем рост замедляется при приближении к L. Если отсчёт начинается при x=0 и C≤1, начало уже совпадает с этой точкой или лежит после неё: начального ускорения нет.',
    },
    syllabus: '2.9',
    inBooklet: true,
    example: {
      en: 'With L = 100, C = 4 and k = 0.5: y(0) = 100 / (1 + 4) = 20.',
      ru: 'При L = 100, C = 4 и k = 0,5: y(0) = 100 / (1 + 4) = 20.',
    },
  },
  {
    id: 'logistic-key-features',
    tex: 'x=\\dfrac{\\ln C}{k},\\quad y=\\dfrac{L}{2},\\quad \\text{greatest growth rate}=\\dfrac{kL}{4}',
    name: { en: 'Inflection point and greatest growth rate of the logistic model', ru: 'Точка перегиба и наибольшая скорость роста логистической модели (Inflection point and greatest growth rate of the logistic model)' },
    meaning: {
      en: 'The inflection point is where growth changes from speeding up to slowing down. There the value is $L/2$ and the growth rate is greatest.',
      ru: 'Точка перегиба — где рост переходит от ускорения к замедлению. Там $y=L/2$, а скорость роста наибольшая.',
    },
    when: {
      en: 'For $L>0$, $C>0$ and $k>0$, locating the steepest part of the full S-curve. For a restricted input interval, check whether ln(C)/k lies inside it; otherwise compare allowed boundary values.',
      ru: 'При $L>0$, $C>0$ и $k>0$ — поиск самой крутой части полной S-кривой. При ограниченной области проверьте принадлежность ln(C)/k; иначе сравните допустимые граничные значения.',
    },
    syllabus: '2.9',
    inBooklet: false,
    example: {
      en: 'With L = 100, C = 4 and k = 0.5: x = ln 4 / 0.5 = 2.77, y = 50, and the greatest growth rate is 12.5.',
      ru: 'При L = 100, C = 4 и k = 0,5: x = ln 4 / 0,5 = 2,77, y = 50, наибольшая скорость роста 12,5.',
    },
  },
  {
    id: 'sinusoid-period',
    tex: 'P=\\dfrac{2\\pi}{|b|}',
    name: { en: 'Period of a sinusoidal model', ru: 'Период синусоидальной модели (Period of a sinusoidal model)' },
    meaning: {
      en: 'For $y=a\\sin(b(x-c))+d$ with $a\\ne0$ and $b\\ne0$, the period is $2\\pi/|b|$, the amplitude is $|a|$ and the principal axis is $y=d$.',
      ru: 'Для $y=a\\sin(b(x-c))+d$ при $a\\ne0$ и $b\\ne0$ период равен $2\\pi/|b|$, амплитуда равна $|a|$, а ось колебаний — $y=d$.',
    },
    when: {
      en: 'For radian arguments; if x is measured in hours, b has units radians per hour. With degree arguments use P=360°/|b| instead. A sinusoid may model seasonal data within stated limits.',
      ru: 'Для аргумента в радианах; если x измеряют в часах, единицы b — радианы в час. Для градусного аргумента используй P=360°/|b|. Синусоида может моделировать сезонные данные в указанных пределах.',
    },
    syllabus: '2.9',
    inBooklet: false,
    example: {
      en: 'With b = 0.5 radians per hour the period is 2π / 0.5 = 4π hours.',
      ru: 'При b = 0,5 радиана в час период равен 2π / 0,5 = 4π часа.',
    },
  },
];
