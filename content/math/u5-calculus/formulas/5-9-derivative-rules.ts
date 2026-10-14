import type { Formula } from '../../../../src/contract/types';

export const formulas: Formula[] = [
  {
    id: 'derivative-power-rule',
    tex: '\\dfrac{d}{dx}\\left(x^{n}\\right)=n\\,x^{n-1},\\quad n\\in\\mathbb{Q}',
    name: { en: 'Power rule', ru: 'Правило степени (Power rule)' },
    meaning: {
      en: 'The derivative of x to a rational power n.',
      ru: 'Производная x в рациональной степени n.',
    },
    when: {
      en: 'Differentiating any power of x, including fractional and negative powers.',
      ru: 'Дифференцирование любой степени x, в том числе дробной и отрицательной.',
    },
    syllabus: '5.9',
    inBooklet: true,
    example: {
      en: 'For x to the power -1: d/dx (x^(-1)) = -x^(-2); at x = 2 this gives -0.25.',
      ru: 'Для x в степени -1: d/dx (x^(-1)) = -x^(-2); при x = 2 это равно -0,25.',
    },
  },
  {
    id: 'derivative-standard-functions',
    tex: '\\begin{aligned}\\frac{d}{dx}\\sin x&=\\cos x\\\\\\frac{d}{dx}\\cos x&=-\\sin x\\\\\\frac{d}{dx}\\tan x&=\\sec^{2}x=\\frac{1}{\\cos^{2}x}\\\\\\frac{d}{dx}e^{x}&=e^{x}\\\\\\frac{d}{dx}\\ln x&=\\frac{1}{x}\\end{aligned}',
    name: { en: 'Derivatives of standard functions', ru: 'Производные стандартных функций (Derivatives of standard functions)' },
    meaning: {
      en: 'Gradients of sin x, cos x, tan x, e^x and ln x (angles in radians).',
      ru: 'Производные sin x, cos x, tan x, e^x и ln x (углы в радианах).',
    },
    when: {
      en: 'Differentiating these functions on their own, or inside a chain rule.',
      ru: 'Дифференцирование этих функций отдельно или внутри правила цепочки.',
    },
    syllabus: '5.9',
    inBooklet: true,
  },
  {
    id: 'chain-rule-formula',
    tex: '\\frac{dy}{dx}=\\frac{dy}{du}\\cdot\\frac{du}{dx}',
    name: { en: 'Chain rule', ru: 'Правило цепочки (Chain rule)' },
    meaning: {
      en: 'For y as a function of u, and u as a function of x, dy/dx is the product of the two rates of change.',
      ru: 'Если y зависит от u, а u от x, то dy/dx равна произведению двух скоростей изменения.',
    },
    when: {
      en: 'Differentiating a composite function, and related rates when every quantity depends on time.',
      ru: 'Дифференцирование сложной функции и связанных скоростей, когда все величины зависят от времени.',
    },
    syllabus: '5.9',
    inBooklet: true,
    example: {
      en: 'For y = (2x + 1)^5, the derivative at x = 1 is 810.',
      ru: 'Для y = (2x + 1)^5 производная при x = 1 равна 810.',
    },
  },
  {
    id: 'product-quotient-formulas',
    tex: '\\frac{d}{dx}(uv)=u\\frac{dv}{dx}+v\\frac{du}{dx},\\qquad\\frac{d}{dx}\\left(\\frac{u}{v}\\right)=\\frac{v\\frac{du}{dx}-u\\frac{dv}{dx}}{v^{2}}',
    name: { en: 'Product and quotient rules', ru: 'Правила произведения и частного (Product and quotient rules)' },
    meaning: {
      en: 'Derivatives of a product uv and of a quotient u/v of two functions of x.',
      ru: 'Производные произведения uv и частного u/v двух функций от x.',
    },
    when: {
      en: 'Differentiating a product or a quotient of functions, for example x^2 ln x.',
      ru: 'Дифференцирование произведения или частного функций, например x^2 ln x.',
    },
    syllabus: '5.9',
    inBooklet: true,
    example: {
      en: 'For y = x^2 ln x, dy/dx = 2x ln x + x; at x = 2 this is 4.77 (to 2 decimal places).',
      ru: 'Для y = x^2 ln x имеем dy/dx = 2x ln x + x; при x = 2 это 4,77 (с точностью до 2 знаков).',
    },
  },
];
