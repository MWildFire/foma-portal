import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'log-power-linear',
    tex: '\\log y=\\log a+b\\log x',
    name: { en: 'Linearised power model', ru: 'Линеаризованная степенная модель (Linearised power model)' },
    meaning: {
      en: 'For $a>0$, $x>0$ and $y>0$, if $y=ax^{b}$, then $\\log y$ is a linear function of $\\log x$ with gradient $b$ and intercept $\\log a$.',
      ru: 'При $a>0$, $x>0$ и $y>0$, если $y=ax^{b}$, то $\\log y$ — линейная функция от $\\log x$ с угловым коэффициентом $b$ и отрезком $\\log a$.',
    },
    when: {
      en: 'Data that may follow a power law: a log-log graph of $\\log y$ against $\\log x$ is approximately straight if the model is appropriate and observational errors are modest.',
      ru: 'Данные, которые могут следовать степенному закону: график $\\log y$ от $\\log x$ будет приблизительно прямым при подходящей модели и небольших ошибках наблюдений.',
    },
    syllabus: '2.10',
    inBooklet: false,
    example: {
      en: 'Using base-10 logarithms, if y = 3x^2 then log y = 2 log x + log 3: gradient 2 and intercept 0.477.',
      ru: 'Для логарифмов по основанию 10: если y = 3x^2, то log y = 2 log x + log 3: угловой коэффициент 2, отрезок 0,477.',
    },
  },
  {
    id: 'log-exponential-linear',
    tex: '\\ln y=\\ln a+x\\ln b',
    name: { en: 'Linearised exponential model', ru: 'Линеаризованная показательная модель (Linearised exponential model)' },
    meaning: {
      en: 'For $a>0$, $b>0$ and $y>0$, if $y=ab^{x}$, then $\\ln y$ is a linear function of $x$ with gradient $\\ln b$ and intercept $\\ln a$.',
      ru: 'При $a>0$, $b>0$ и $y>0$, если $y=ab^{x}$, то $\\ln y$ — линейная функция от $x$ с угловым коэффициентом $\\ln b$ и отрезком $\\ln a$.',
    },
    when: {
      en: 'Data that may grow or decay exponentially: a semi-log graph of $\\ln y$ against $x$ is approximately straight if the model is appropriate and observational errors are modest.',
      ru: 'Данные, которые могут расти или убывать по показательному закону: график $\\ln y$ от $x$ будет приблизительно прямым при подходящей модели и небольших ошибках наблюдений.',
    },
    syllabus: '2.10',
    inBooklet: false,
    example: {
      en: 'If y = 20 × 1.4^t, then ln y = ln 20 + t ln 1.4: gradient 0.336 and intercept 2.996.',
      ru: 'Если y = 20 × 1,4^t, то ln y = ln 20 + t ln 1,4: угловой коэффициент 0,336, отрезок 2,996.',
    },
  },
  {
    id: 'log-laws-linearisation',
    tex: '\\log(xy)=\\log x+\\log y,\\qquad \\log\\left(x^{m}\\right)=m\\log x',
    name: { en: 'Laws of logarithms used in linearisation', ru: 'Законы логарифмов при линеаризации (Laws of logarithms used in linearisation)' },
    meaning: {
      en: 'For positive arguments and a valid logarithm base, a logarithm turns a product into a sum and a power into a multiple, which is why power and exponential models become straight lines.',
      ru: 'При положительных аргументах и допустимом основании логарифм превращает произведение в сумму, а степень в множитель, поэтому степенные и показательные модели становятся прямыми.',
    },
    when: {
      en: 'Whenever you take logarithms of both sides of a model before fitting a line.',
      ru: 'Каждый раз, когда вы логарифмируете обе части модели перед проведением прямой.',
    },
    syllabus: '2.10',
    inBooklet: true,
    example: {
      en: 'For example, log(x^2 y) = 2 log x + log y.',
      ru: 'Например, log(x^2 y) = 2 log x + log y.',
    },
  },
];
