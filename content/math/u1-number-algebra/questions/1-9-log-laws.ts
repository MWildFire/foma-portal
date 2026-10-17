import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'q-1-9-01',
    subject: 'math',
    topicIds: ['1-9-log-laws'],
    paper: 'P1',
    marks: 3,
    command: 'Find',
    prompt: {
      en: 'Given that $\\log_2 x = 3.4$ and $\\log_2 y = 1.2$, find the value of $\\log_2\\left(\\dfrac{x^2 y}{8}\\right)$.',
      ru: 'Известно, что $\\log_2 x = 3{,}4$ и $\\log_2 y = 1{,}2$. Найдите значение $\\log_2\\left(\\dfrac{x^2 y}{8}\\right)$.',
    },
    markscheme: {
      en: 'M1: quotient and product laws: $\\log_2\\left(\\dfrac{x^2 y}{8}\\right)=\\log_2\\left(x^{2}\\right)+\\log_2 y-\\log_2 8$. M1: power law, and $\\log_2 8=3$: $=2\\log_2 x+\\log_2 y-3$. A1: $=2(3.4)+1.2-3=5$.',
      ru: 'M1: правила частного и произведения: $\\log_2\\left(\\dfrac{x^2 y}{8}\\right)=\\log_2\\left(x^{2}\\right)+\\log_2 y-\\log_2 8$. M1: правило степени и $\\log_2 8=3$: $=2\\log_2 x+\\log_2 y-3$. A1: $=2(3{,}4)+1{,}2-3=5$.',
    },
    answer: '5',
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'q-1-9-02',
    subject: 'math',
    topicIds: ['1-9-log-laws'],
    paper: 'P1',
    marks: 4,
    command: 'Determine',
    prompt: {
      en: 'Determine the value of $x>0$ for which $\\log_2 x+\\log_2(x+6)=4$.',
      ru: 'Определите значение $x>0$, при котором $\\log_2 x+\\log_2(x+6)=4$.',
    },
    markscheme: {
      en: 'M1: product law: $\\log_2\\big(x(x+6)\\big)=4$. M1: index form: $x(x+6)=2^{4}=16$, so $x^{2}+6x-16=0$. A1: $(x-2)(x+8)=0$, so $x=2$ or $x=-8$. R1: $x=-8$ is rejected, because $\\log_2 x$ requires $x>0$. Answer: $x=2$.',
      ru: 'M1: правило произведения: $\\log_2\\big(x(x+6)\\big)=4$. M1: запись в виде степени: $x(x+6)=2^{4}=16$, откуда $x^{2}+6x-16=0$. A1: $(x-2)(x+8)=0$, откуда $x=2$ или $x=-8$. R1: $x=-8$ отбрасывается, так как для $\\log_2 x$ требуется $x>0$. Ответ: $x=2$.',
    },
    answer: '2',
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'q-1-9-03',
    subject: 'math',
    topicIds: ['1-9-log-laws'],
    paper: 'P2',
    marks: 14,
    command: 'Show that',
    prompt: {
      en: 'The sound level $L$, in decibels (dB), of a sound of intensity $I$ watts per square metre is $L=10\\log_{10}\\left(\\dfrac{I}{I_0}\\right)$, where $I_0=1.0\\times 10^{-12}$ W m$^{-2}$ is the reference intensity. For this model, assume the intensities of independent sources add at the observation point.\n\n(a) Show that the sound level of two identical, independent sources playing together, each of intensity $I$, is $L+10\\log_{10}2$. [3]\n\n(b) Hence find the increase in sound level, in dB, when two identical sources play together. Give your answer correct to 2 decimal places. [2]\n\n(c) A machine produces a sound of intensity $2.0\\times 10^{-5}$ W m$^{-2}$. Find its sound level in dB, correct to 1 decimal place. [3]\n\n(d) Sound A has a level of 80 dB and sound B has a level of 70 dB. Find the ratio $\\dfrac{I_A}{I_B}$. [3]\n\n(e) Ten identical sources play together. Find the increase in sound level in dB, and explain why this increase is not ten times the increase found in part (b). [3]',
      ru: 'Уровень звука $L$ в децибелах (дБ) для звука интенсивностью $I$ Вт на квадратный метр равен $L=10\\log_{10}\\left(\\dfrac{I}{I_0}\\right)$, где $I_0=1{,}0\\times 10^{-12}$ Вт м$^{-2}$ — опорная интенсивность. В этой модели считайте, что интенсивности независимых источников в точке наблюдения складываются.\n\n(a) Покажите, что уровень звука двух одинаковых независимых источников, звучащих вместе, каждый интенсивностью $I$, равен $L+10\\log_{10}2$. [3]\n\n(b) Используя результат (a), найдите увеличение уровня звука в дБ при одновременной работе двух одинаковых источников. Ответ дайте с точностью до 2 знаков после запятой. [2]\n\n(c) Машина издаёт звук интенсивностью $2{,}0\\times 10^{-5}$ Вт м$^{-2}$. Найдите её уровень звука в дБ с точностью до 1 знака после запятой. [3]\n\n(d) Звук A имеет уровень 80 дБ, а звук B — 70 дБ. Найдите отношение $\\dfrac{I_A}{I_B}$. [3]\n\n(e) Десять одинаковых источников звучат вместе. Найдите увеличение уровня звука в дБ и объясните, почему оно не в десять раз больше увеличения из части (b). [3]',
    },
    markscheme: {
      en: '(a) M1: the total intensity is $2I$, so the level is $10\\log_{10}\\left(\\dfrac{2I}{I_0}\\right)$. M1: product law: $=10\\log_{10}2+10\\log_{10}\\left(\\dfrac{I}{I_0}\\right)$. A1 (AG): $=10\\log_{10}2+L$.\n(b) M1: increase $=10\\log_{10}2$. A1: $3.01$ dB (2 decimal places).\n(c) M1: $\\dfrac{I}{I_0}=\\dfrac{2.0\\times 10^{-5}}{1.0\\times 10^{-12}}=2.0\\times 10^{7}$. M1: $L=10\\log_{10}(2.0\\times 10^{7})=10(\\log_{10}2+7)$. A1: $L=73.0$ dB (1 decimal place).\n(d) M1: difference of levels: $80-70=10\\log_{10}\\dfrac{I_A}{I_B}$. M1: $\\log_{10}\\dfrac{I_A}{I_B}=1$. A1: $\\dfrac{I_A}{I_B}=10$.\n(e) M1: ten sources give intensity $10I$, so the increase is $10\\log_{10}10=10$ dB. A1: $10$ dB. R1: the decibel scale is logarithmic, so the increase is $10\\log_{10}N$ for $N$ sources and is not proportional to $N$; ten times the increase in (b) would be about 30 dB, which is wrong.',
      ru: '(a) M1: полная интенсивность равна $2I$, поэтому уровень равен $10\\log_{10}\\left(\\dfrac{2I}{I_0}\\right)$. M1: правило произведения: $=10\\log_{10}2+10\\log_{10}\\left(\\dfrac{I}{I_0}\\right)$. A1 (AG): $=10\\log_{10}2+L$.\n(b) M1: увеличение $=10\\log_{10}2$. A1: $3{,}01$ дБ (2 знака после запятой).\n(c) M1: $\\dfrac{I}{I_0}=\\dfrac{2{,}0\\times 10^{-5}}{1{,}0\\times 10^{-12}}=2{,}0\\times 10^{7}$. M1: $L=10\\log_{10}(2{,}0\\times 10^{7})=10(\\log_{10}2+7)$. A1: $L=73{,}0$ дБ (1 знак после запятой).\n(d) M1: разность уровней: $80-70=10\\log_{10}\\dfrac{I_A}{I_B}$. M1: $\\log_{10}\\dfrac{I_A}{I_B}=1$. A1: $\\dfrac{I_A}{I_B}=10$.\n(e) M1: десять источников дают интенсивность $10I$, поэтому увеличение равно $10\\log_{10}10=10$ дБ. A1: $10$ дБ. R1: шкала децибел логарифмическая, поэтому увеличение равно $10\\log_{10}N$ для $N$ источников и не пропорционально $N$; десятикратное увеличение из (b) составило бы около 30 дБ, что неверно.',
    },
    answer: '3.01; 73.0; 10; 10',
    origin: 'original',
    minutes: 14,
  },
];
