import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-11-01',
    subject: 'math',
    topicIds: ['1-11-infinite-geometric'],
    paper: 'P1',
    marks: 3,
    command: 'Show that, Find',
    prompt: {
      en: 'A geometric sequence has first term 12 and common ratio $-0.25$. Show that the sum to infinity exists, and find its value.',
      ru: 'Геометрическая прогрессия имеет первый член 12 и знаменатель $-0{,}25$. Покажите, что сумма бесконечной прогрессии существует, и найдите её значение.',
    },
    markscheme: {
      en: 'R1: $|r|=0.25<1$, so the sum to infinity exists. M1: $S_{\\infty}=\\dfrac{u_{1}}{1-r}$ with $u_{1}=12$ and $r=-0.25$. A1: $S_{\\infty}=\\dfrac{12}{1.25}=9.6$.',
      ru: 'R1: $|r|=0{,}25<1$, поэтому сумма бесконечной прогрессии существует. M1: $S_{\\infty}=\\dfrac{u_{1}}{1-r}$ при $u_{1}=12$ и $r=-0{,}25$. A1: $S_{\\infty}=\\dfrac{12}{1{,}25}=9{,}6$.',
    },
    answer: '9.6',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-1-11-02',
    subject: 'math',
    topicIds: ['1-11-infinite-geometric'],
    paper: 'P1',
    marks: 4,
    command: 'Determine, State',
    prompt: {
      en: 'A geometric sequence has first term 10 and sum to infinity 40. Determine the common ratio $r$, and state the condition on $r$ that makes this sum valid.',
      ru: 'Геометрическая прогрессия имеет первый член 10, а сумма бесконечной прогрессии равна 40. Найдите знаменатель $r$ и укажите условие на $r$, при котором эта сумма существует.',
    },
    markscheme: {
      en: 'M1: $40=\\dfrac{10}{1-r}$, using $S_{\\infty}=\\dfrac{u_{1}}{1-r}$. M1: $1-r=\\dfrac{10}{40}=\\dfrac{1}{4}$. A1: $r=0.75$. R1: the condition is $|r|<1$; since $0.75<1$, the value is valid.',
      ru: 'M1: $40=\\dfrac{10}{1-r}$, по формуле $S_{\\infty}=\\dfrac{u_{1}}{1-r}$. M1: $1-r=\\dfrac{10}{40}=\\dfrac{1}{4}$. A1: $r=0{,}75$. R1: условие $|r|<1$; так как $0{,}75<1$, значение верно.',
    },
    answer: '0.75',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-11-03',
    subject: 'math',
    topicIds: ['1-11-infinite-geometric'],
    paper: 'P2',
    marks: 14,
    command: 'Find',
    prompt: {
      en: 'A ball is dropped from a height of 2 metres onto a hard horizontal floor. After each bounce it rises to 60% of the height from which it last fell. Model the motion as vertical only, so the ball falls and rises along the same line.\n\n(a) Find the height the ball reaches after its 3rd bounce. [2]\n\n(b) Show that the total distance travelled by the ball, counting every fall and every rise, is 8 metres. [4]\n\n(c) State the common ratio of the sequence of rebound heights, and explain why the total distance is finite. [2]\n\n(d) The total distance travelled after the $n$th bounce, including its rise and fall, is less than 0.01 metres short of the total in part (b). Find the least value of $n$. [4]\n\n(e) A second ball is dropped from 2 metres, and each bounce returns it to 90% of the previous height. Find the total distance travelled by the second ball. [2]',
      ru: 'Мяч роняют с высоты 2 метра на твёрдый горизонтальный пол. После каждого отскока он поднимается до 60% высоты, с которой упал последний раз. Считайте движение только вертикальным, так что мяч падает и поднимается по одной прямой.\n\n(a) Найдите высоту, на которую мяч поднимается после своего 3-го отскока. [2]\n\n(b) Покажите, что полный путь мяча, учитывающий каждое падение и каждый подъём, равен 8 метрам. [4]\n\n(c) Укажите знаменатель последовательности высот отскоков и объясните, почему полный путь конечен. [2]\n\n(d) Путь, пройденный мячом после $n$-го отскока (включая его подъём и падение), отстаёт от полного пути из части (b) меньше чем на 0,01 метра. Найдите наименьшее значение $n$. [4]\n\n(e) Второй мяч роняют с высоты 2 метра, и каждый отскок возвращает его к 90% предыдущей высоты. Найдите полный путь, пройденный вторым мячом. [2]',
    },
    markscheme: {
      en: '(a) M1: the height after the 3rd bounce is $2\\times 0.6^{3}$. A1: $0.432$ m.\n(b) M1: the rebound heights $1.2,\\ 0.72,\\ \\dots$ form a geometric sequence with $r=0.6$, and $|r|<1$, so the rises form a convergent series. M1: total of the rises $=\\dfrac{1.2}{1-0.6}=3$ m. M1: each rise is matched by a fall, and the first fall is 2 m, so the total is $2+2\\times 3$. A1 (AG): $=8$ m.\n(c) A1: common ratio $r=0.6$. R1: $|r|=0.6<1$, so the sum to infinity exists and the total distance is finite.\n(d) M1: the distance still to be covered after the $n$th bounce is $8-D_{n}=\\dfrac{4\\times 0.6^{n+1}}{1-0.6}=10\\times 0.6^{n+1}$, where $D_{n}$ is the total distance after the $n$th bounce. M1: $10\\times 0.6^{n+1}<0.01$, so $0.6^{n+1}<0.001$. M1: take logs: $(n+1)\\log_{10}0.6<\\log_{10}0.001$; since $\\log_{10}0.6<0$, $n+1>13.52$. (A GDC table also works: $n=12$ gives $0.0131$ and $n=13$ gives $0.00784$.) A1: $n=13$.\n(e) M1: total of the rises $=\\dfrac{1.8}{1-0.9}=18$ m, since $|r|=0.9<1$. A1: total distance $=2+2\\times 18=38$ m.',
      ru: '(a) M1: высота после 3-го отскока равна $2\\times 0{,}6^{3}$. A1: $0{,}432$ м.\n(b) M1: высоты отскоков $1{,}2;\\ 0{,}72;\\ \\dots$ образуют геометрическую прогрессию со знаменателем $r=0{,}6$, и $|r|<1$, поэтому сумма подъёмов сходится. M1: сумма подъёмов $=\\dfrac{1{,}2}{1-0{,}6}=3$ м. M1: каждый подъём сопровождается падением, а первое падение — 2 м, поэтому полный путь $=2+2\\times 3$. A1 (AG): $=8$ м.\n(c) A1: знаменатель $r=0{,}6$. R1: $|r|=0{,}6<1$, поэтому сумма бесконечной прогрессии существует и полный путь конечен.\n(d) M1: путь, оставшийся после $n$-го отскока, равен $8-D_{n}=\\dfrac{4\\times 0{,}6^{n+1}}{1-0{,}6}=10\\times 0{,}6^{n+1}$, где $D_{n}$ — полный путь после $n$-го отскока. M1: $10\\times 0{,}6^{n+1}<0{,}01$, поэтому $0{,}6^{n+1}<0{,}001$. M1: логарифмируем: $(n+1)\\log_{10}0{,}6<\\log_{10}0{,}001$; так как $\\log_{10}0{,}6<0$, получаем $n+1>13{,}52$. (Таблица значений тоже подходит: при $n=12$ величина равна $0{,}0131$, при $n=13$ равна $0{,}00784$.) A1: $n=13$.\n(e) M1: сумма подъёмов $=\\dfrac{1{,}8}{1-0{,}9}=18$ м, так как $|r|=0{,}9<1$. A1: полный путь $=2+2\\times 18=38$ м.',
    },
    answer: '0.432; 13; 38',
    origin: 'original',
    minutes: 14,
  },
];
