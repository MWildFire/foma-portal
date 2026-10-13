import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-9-01',
    subject: 'math',
    topicIds: ['5-9-derivative-rules'],
    paper: 'P1',
    marks: 4,
    command: 'Find',
    prompt: {
      en: 'Find the gradient of the curve $y = \\dfrac{e^{x}}{x+1}$ at the point where $x = 1$. Give your answer correct to 3 significant figures.',
      ru: 'Найдите угловой коэффициент кривой $y = \\dfrac{e^{x}}{x+1}$ в точке с $x = 1$. Ответ дайте с точностью до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: quotient rule with $u = e^{x}$ and $v = x + 1$. A1: $\\dfrac{dy}{dx} = \\dfrac{(x+1)e^{x} - e^{x}}{(x+1)^{2}} = \\dfrac{x e^{x}}{(x+1)^{2}}$. M1: substitute $x = 1$: $\\dfrac{e}{2^{2}}$. A1: 0.680 (3 significant figures).',
      ru: 'M1: правило частного с $u = e^{x}$ и $v = x + 1$. A1: $\\dfrac{dy}{dx} = \\dfrac{(x+1)e^{x} - e^{x}}{(x+1)^{2}} = \\dfrac{x e^{x}}{(x+1)^{2}}$. M1: подставляем $x = 1$: $\\dfrac{e}{2^{2}}$. A1: 0,680 (3 значащие цифры).',
    },
    answer: '0.680',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-5-9-02',
    subject: 'math',
    topicIds: ['5-9-derivative-rules'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'A circular ripple on a pond has radius $r$ cm and area $A = \\pi r^{2}$. Its radius increases at a constant rate of $0.5$ cm s$^{-1}$. Find the rate at which the area is increasing when $r = 4$. Give your answer in cm$^{2}$ s$^{-1}$, correct to 2 decimal places.',
      ru: 'Круговая рябь на пруду имеет радиус $r$ см и площадь $A = \\pi r^{2}$. Радиус растёт с постоянной скоростью $0{,}5$ см/с. Найдите скорость, с которой растёт площадь при $r = 4$. Ответ дайте в см$^{2}$/с с точностью до 2 знаков после запятой.',
    },
    markscheme: {
      en: 'M1: $\\dfrac{dA}{dr} = 2\\pi r$. M1: chain rule, $\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}$. A1: $\\dfrac{dA}{dt} = 2\\pi \\times 4 \\times 0.5 = 4\\pi = 12.57$ (2 decimal places).',
      ru: 'M1: $\\dfrac{dA}{dr} = 2\\pi r$. M1: правило цепочки, $\\dfrac{dA}{dt} = 2\\pi r\\dfrac{dr}{dt}$. A1: $\\dfrac{dA}{dt} = 2\\pi \\times 4 \\times 0{,}5 = 4\\pi = 12{,}57$ (2 знака после запятой).',
    },
    answer: '12.57',
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'q-5-9-03',
    subject: 'math',
    topicIds: ['5-9-derivative-rules'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A conical tank stands with its vertex at the bottom. The top of the tank is a circle of radius 4 m, and the tank is 10 m high. When the depth of water is $h$ metres, the water fills a cone of height $h$ and radius $r$. Water is added at a constant rate of 2 m$^{3}$ per minute.\n\n(a) Show that the volume of water when the depth is $h$ is $V = \\dfrac{4\\pi}{75}h^{3}$. [3]\n\n(b) Show that $\\dfrac{dV}{dt} = \\dfrac{4\\pi}{25}h^{2}\\dfrac{dh}{dt}$. [2]\n\n(c) Find $\\dfrac{dh}{dt}$ when $h = 5$. Give your answer correct to 3 decimal places. [3]\n\n(d) Find the rate at which the area of the water surface is increasing when $h = 5$. Give your answer to 3 significant figures. [3]\n\n(e) Comment on how $\\dfrac{dh}{dt}$ changes as $h$ increases. [3]',
      ru: 'В коническую ёмкость, стоящую вершиной вниз, наливают воду. Верхний круг ёмкости имеет радиус 4 м, высота ёмкости 10 м. Когда глубина воды равна $h$ метрам, вода занимает конус высотой $h$ и радиусом $r$. Воду доливают с постоянной скоростью 2 м$^{3}$ в минуту.\n\n(a) Покажите, что объём воды при глубине $h$ равен $V = \\dfrac{4\\pi}{75}h^{3}$. [3]\n\n(b) Покажите, что $\\dfrac{dV}{dt} = \\dfrac{4\\pi}{25}h^{2}\\dfrac{dh}{dt}$. [2]\n\n(c) Найдите $\\dfrac{dh}{dt}$ при $h = 5$. Ответ дайте с точностью до 3 знаков после запятой. [3]\n\n(d) Найдите скорость, с которой растёт площадь поверхности воды при $h = 5$. Ответ дайте с точностью до 3 значащих цифр. [3]\n\n(e) Прокомментируйте, как меняется $\\dfrac{dh}{dt}$ при увеличении $h$. [3]',
    },
    markscheme: {
      en: '(a) M1: similar triangles give $\\dfrac{r}{h} = \\dfrac{4}{10}$, so $r = 0.4h$. M1: $V = \\dfrac{1}{3}\\pi r^{2}h$ with this $r$. A1: $V = \\dfrac{1}{3}\\pi(0.16h^{2})h = \\dfrac{4\\pi}{75}h^{3}$ (AG).\n(b) M1: $\\dfrac{dV}{dh} = \\dfrac{12\\pi}{75}h^{2}$. A1: $\\dfrac{dV}{dt} = \\dfrac{dV}{dh}\\cdot\\dfrac{dh}{dt} = \\dfrac{4\\pi}{25}h^{2}\\dfrac{dh}{dt}$ (AG).\n(c) M1: $2 = \\dfrac{4\\pi}{25}(5)^{2}\\dfrac{dh}{dt}$, so $2 = 4\\pi\\dfrac{dh}{dt}$. M1: $\\dfrac{dh}{dt} = \\dfrac{1}{2\\pi}$. A1: 0.159 (3 decimal places).\n(d) M1: the surface area is $A = \\pi r^{2} = 0.16\\pi h^{2}$. M1: $\\dfrac{dA}{dt} = 0.32\\pi h\\dfrac{dh}{dt}$. A1: at $h = 5$, $0.32\\pi \\times 5 \\times \\dfrac{1}{2\\pi} = 0.800$ (3 significant figures).\n(e) R1: $\\dfrac{dh}{dt} = \\dfrac{25}{2\\pi h^{2}}$, which is inversely proportional to $h^{2}$. R1: as $h$ increases, $h^{2}$ increases, so $\\dfrac{dh}{dt}$ decreases: the surface widens and the level rises more slowly. A1: a valid comment with this reason.',
      ru: '(a) M1: подобные треугольники дают $\\dfrac{r}{h} = \\dfrac{4}{10}$, значит, $r = 0{,}4h$. M1: $V = \\dfrac{1}{3}\\pi r^{2}h$ с этим $r$. A1: $V = \\dfrac{1}{3}\\pi(0{,}16h^{2})h = \\dfrac{4\\pi}{75}h^{3}$ (AG).\n(b) M1: $\\dfrac{dV}{dh} = \\dfrac{12\\pi}{75}h^{2}$. A1: $\\dfrac{dV}{dt} = \\dfrac{dV}{dh}\\cdot\\dfrac{dh}{dt} = \\dfrac{4\\pi}{25}h^{2}\\dfrac{dh}{dt}$ (AG).\n(c) M1: $2 = \\dfrac{4\\pi}{25}(5)^{2}\\dfrac{dh}{dt}$, значит, $2 = 4\\pi\\dfrac{dh}{dt}$. M1: $\\dfrac{dh}{dt} = \\dfrac{1}{2\\pi}$. A1: 0,159 (с точностью до 3 знаков).\n(d) M1: площадь поверхности $A = \\pi r^{2} = 0{,}16\\pi h^{2}$. M1: $\\dfrac{dA}{dt} = 0{,}32\\pi h\\dfrac{dh}{dt}$. A1: при $h = 5$ $0{,}32\\pi \\times 5 \\times \\dfrac{1}{2\\pi} = 0{,}800$ (3 значащие цифры).\n(e) R1: $\\dfrac{dh}{dt} = \\dfrac{25}{2\\pi h^{2}}$, то есть обратно пропорционально $h^{2}$. R1: при увеличении $h$ величина $h^{2}$ растёт, значит, $\\dfrac{dh}{dt}$ уменьшается: поверхность расширяется, и уровень поднимается медленнее. A1: верный комментарий с этим обоснованием.',
    },
    answer: '0.159; 0.800',
    origin: 'original',
    minutes: 14,
  },
];
