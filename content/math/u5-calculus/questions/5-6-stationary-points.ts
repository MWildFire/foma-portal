import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-5-6-01',
    subject: 'math',
    topicIds: ['5-6-stationary-points'],
    paper: 'P1',
    marks: 5,
    command: 'Find',
    prompt: {
      en: 'The function $f$ is defined by $f(x)=x^{3}-4x+1$ for all real $x$. The graph of $f$ has a local maximum point. Find the coordinates of this point, giving each coordinate correct to 3 significant figures.',
      ru: 'Функция $f$ задана формулой $f(x)=x^{3}-4x+1$ для всех действительных $x$. График $f$ имеет точку локального максимума. Найдите координаты этой точки, каждую координату запишите с точностью до 3 значащих цифр.',
    },
    markscheme: {
      en: 'M1: $f\'(x)=3x^{2}-4$. M1: solves $3x^{2}-4=0$, so $x=\\pm\\dfrac{2}{\\sqrt{3}}$, that is $x=\\pm 1.1547\\ldots$. R1: $f\'(x)>0$ for $x<-\\dfrac{2}{\\sqrt{3}}$ and $f\'(x)<0$ just to the right of $-\\dfrac{2}{\\sqrt{3}}$, so the gradient changes from positive to negative and this point is a maximum. A1: $x=-1.15$. A1: $f(-1.15)=4.08$, so the point is $(-1.15,\\ 4.08)$.',
      ru: 'M1: $f\'(x)=3x^{2}-4$. M1: решает $3x^{2}-4=0$, откуда $x=\\pm\\dfrac{2}{\\sqrt{3}}$, то есть $x=\\pm 1{,}1547\\ldots$. R1: $f\'(x)>0$ при $x<-\\dfrac{2}{\\sqrt{3}}$ и $f\'(x)<0$ сразу правее $-\\dfrac{2}{\\sqrt{3}}$, значит градиент меняется с плюса на минус и точка является максимумом. A1: $x=-1{,}15$. A1: $f(-1{,}15)=4{,}08$, поэтому точка имеет координаты $(-1{,}15;\\ 4{,}08)$.',
    },
    answer: '-1.15; 4.08',
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'q-5-6-02',
    subject: 'math',
    topicIds: ['5-6-stationary-points'],
    paper: 'P1',
    marks: 5,
    command: 'Find',
    prompt: {
      en: 'The concentration of a pollutant in a lake, $C$ milligrams per litre, is modelled by $C(t)=0.02t^{3}-0.6t^{2}+4.5t+3$ for $0\\le t\\le 12$, where $t$ is the number of months after monitoring began. Find the time at which the concentration has a local maximum, and the concentration at that time.',
      ru: 'Концентрация загрязняющего вещества в озере $C$ (миллиграммов на литр) описывается моделью $C(t)=0{,}02t^{3}-0{,}6t^{2}+4{,}5t+3$ при $0\\le t\\le 12$, где $t$ — число месяцев с начала наблюдений. Найдите момент времени, в который концентрация имеет локальный максимум, и значение концентрации в этот момент.',
    },
    markscheme: {
      en: 'M1: $C\'(t)=0.06t^{2}-1.2t+4.5$. M1: solves $C\'(t)=0$, giving $t^{2}-20t+75=0$, so $(t-5)(t-15)=0$ and $t=5$ or $t=15$. R1: $t=15$ is outside $0\\le t\\le 12$, and $C\'(t)$ changes from positive to negative at $t=5$, so $t=5$ is the local maximum in the interval. A1: $t=5$. A1: $C(5)=13$.',
      ru: 'M1: $C\'(t)=0{,}06t^{2}-1{,}2t+4{,}5$. M1: решает $C\'(t)=0$: $t^{2}-20t+75=0$, $(t-5)(t-15)=0$, откуда $t=5$ или $t=15$. R1: $t=15$ не входит в промежуток $0\\le t\\le 12$, а производная меняет знак с плюса на минус при $t=5$, значит это локальный максимум на промежутке. A1: $t=5$. A1: $C(5)=13$.',
    },
    answer: '5; 13',
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'q-5-6-03',
    subject: 'math',
    topicIds: ['5-6-stationary-points'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'The number of fish, $P$ thousand, in a reservoir $t$ years after 2020 is modelled by $P(t)=t^{3}-12t^{2}+45t+40$ for $0\\le t\\le 8$.\n\n(a) Show that $P\'(t)=3(t-3)(t-5)$. [2]\n\n(b) Find the values of $t$ for which $P\'(t)=0$. [2]\n\n(c) Justify whether each of these values gives a local maximum or a local minimum of $P$. [3]\n\n(d) Find the number of fish at each local maximum point and at each local minimum point. [3]\n\n(e) Find the greatest number of fish for $0\\le t\\le 8$, and the value of $t$ at which it occurs. [4]',
      ru: 'Количество рыбы $P$ (тысяч) в водохранилище через $t$ лет после 2020 года описывается моделью $P(t)=t^{3}-12t^{2}+45t+40$ при $0\\le t\\le 8$.\n\n(a) Покажите, что $P\'(t)=3(t-3)(t-5)$. [2]\n\n(b) Найдите значения $t$, при которых $P\'(t)=0$. [2]\n\n(c) Обоснуйте, даёт ли каждое из этих значений локальный максимум или локальный минимум функции $P$. [3]\n\n(d) Найдите количество рыбы в каждой точке локального максимума и в каждой точке локального минимума. [3]\n\n(e) Найдите наибольшее количество рыбы при $0\\le t\\le 8$ и значение $t$, при котором оно достигается. [4]',
    },
    markscheme: {
      en: '(a) M1: $P\'(t)=3t^{2}-24t+45$. A1: $3(t^{2}-8t+15)=3(t-3)(t-5)$, AG.\n(b) M1: solves $3(t-3)(t-5)=0$. A1: $t=3$ and $t=5$.\n(c) R1: $P\'(t)>0$ for $t<3$ and $P\'(t)<0$ for $3<t<5$, so the gradient changes from positive to negative at $t=3$: a local maximum. R1: the gradient changes from negative to positive at $t=5$ (it is positive for $t>5$), so $t=5$ is a local minimum. R1: both conclusions follow from the sign of $P\'(t)$ on each interval.\n(d) M1: substitutes $t=3$ and $t=5$ into $P(t)$. A1: $P(3)=94$, a local maximum. A1: $P(5)=90$, a local minimum.\n(e) M1: compares $P(0)$, $P(3)$, $P(5)$ and $P(8)$. A1: $P(8)=144$. R1: $144$ is larger than the local maximum $94$, so the greatest value occurs at the endpoint $t=8$, not at a turning point. A1: $t=8$.',
      ru: '(a) M1: $P\'(t)=3t^{2}-24t+45$. A1: $3(t^{2}-8t+15)=3(t-3)(t-5)$, AG.\n(b) M1: решает $3(t-3)(t-5)=0$. A1: $t=3$ и $t=5$.\n(c) R1: $P\'(t)>0$ при $t<3$ и $P\'(t)<0$ при $3<t<5$, значит градиент меняется с плюса на минус при $t=3$: локальный максимум. R1: при $t=5$ градиент меняется с минуса на плюс (он положителен при $t>5$), значит это локальный минимум. R1: оба вывода следуют из знака $P\'(t)$ на каждом промежутке.\n(d) M1: подставляет $t=3$ и $t=5$ в $P(t)$. A1: $P(3)=94$, локальный максимум. A1: $P(5)=90$, локальный минимум.\n(e) M1: сравнивает $P(0)$, $P(3)$, $P(5)$ и $P(8)$. A1: $P(8)=144$. R1: $144$ больше локального максимума $94$, поэтому наибольшее значение достигается на конце промежутка $t=8$, а не в точке поворота. A1: $t=8$.',
    },
    answer: '3; 5; 94; 90; 144; 8',
    origin: 'original',
    minutes: 14,
  },
];
