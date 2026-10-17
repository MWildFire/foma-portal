import type { Question } from '../../../../src/contract/types';

// Syllabus core 2.1. Original questions in IB Geography SL Paper 2 style. Figures checked against the sources in the cases and the topic meta.
const topicIds = ['core-2-1-causes-climate-change'];

export const questions: Question[] = [
  {
    id: 'core-2-1-a2',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 3,
    command: 'Explain',
    prompt: {
      en: 'Explain why changes in Earth’s orbit cannot account for the warming of 1.09 °C recorded in 2011–2020 compared with 1850–1900.',
      ru: 'Объясните, почему изменения орбиты Земли не могут объяснить потепление на 1,09 °C, зафиксированное в 2011–2020 годах по сравнению с 1850–1900 годами.',
    },
    markscheme: {
      en: '1 mark: orbital cycles act over tens of thousands of years (eccentricity about 90,000 to 100,000 years; axial tilt about 40,000 years), so they change incoming solar energy very slowly; 1 mark: a rise of 1.09 °C since 1850 is far too fast for changes that act over such long cycles; 1 mark: AR6 attributes only −0.1 °C to +0.1 °C of the warming to natural drivers between 1850–1900 and 2010–2019, while well-mixed greenhouse gases contributed 1.0 °C to 2.0 °C (IPCC AR6, WG1, A.1.3).',
      ru: '1 балл: орбитальные циклы действуют на протяжении десятков тысяч лет (эксцентриситет примерно 90 000–100 000 лет, наклон оси примерно 40 000 лет), поэтому они очень медленно меняют поступающую солнечную энергию; 1 балл: рост на 1,09 °C с 1850 года слишком быстр для изменений, которые действуют на таких длинных циклах; 1 балл: по оценке AR6, естественные факторы изменили глобальную температуру лишь на −0,1 °C…+0,1 °C между 1850–1900 и 2010–2019 годами, а хорошо перемешанные парниковые газы дали 1,0–2,0 °C (IPCC AR6, WG1, A.1.3).',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'core-2-1-a3',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how the ice–albedo feedback creates a positive feedback loop in the Arctic.',
      ru: 'Объясните, как обратная связь «лёд – альбедо» создаёт положительную обратную связь в Арктике.',
    },
    markscheme: {
      en: '1 mark: initial warming melts snow or sea ice; 1 mark: the exposed darker surface has lower albedo and reflects a smaller share of incoming sunlight; 1 mark: more solar energy is absorbed, warming the surface further; 1 mark: this extra warming causes further melting, closing a loop that amplifies the initial change. No dated statistic is required by this original question.',
      ru: '1 балл: исходное потепление топит снег или морской лёд; 1 балл: открывшаяся тёмная поверхность имеет меньшее альбедо и отражает меньшую долю солнечного излучения; 1 балл: поглощается больше солнечной энергии, поверхность дополнительно нагревается; 1 балл: добавочное потепление вызывает дальнейшее таяние — замыкается петля, усиливающая исходное изменение. Датированная статистика в этом авторском вопросе не требуется.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'core-2-1-a4',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Calculate',
    prompt: {
      en: 'China’s fossil CO₂ emissions were 994 million tonnes of carbon (MtC) in 2000 and 3,354 MtC in 2024. World emissions were 6,963 MtC in 2000 and 10,535 MtC in 2024 (Global Carbon Project, Global Carbon Budget 2025).\n\n(a) Calculate the increase in China’s emissions between 2000 and 2024, in MtC, and the percentage increase. Show your working. [2]\n\n(b) Calculate China’s share of world emissions in 2024. Show your working. [2]',
      ru: 'Выбросы CO₂ от ископаемого топлива в Китае составляли 994 миллиона тонн углерода (МтC) в 2000 году и 3 354 МтC в 2024 году. Мировые выбросы составляли 6 963 МтC в 2000 году и 10 535 МтC в 2024 году (Global Carbon Project, Global Carbon Budget 2025).\n\n(a) Рассчитайте увеличение выбросов Китая между 2000 и 2024 годами в МтC и процентное увеличение. Покажите ход решения. [2]\n\n(b) Рассчитайте долю Китая в мировых выбросах в 2024 году. Покажите ход решения. [2]',
    },
    markscheme: {
      en: '(a) 1 mark: increase = 3,354 − 994 = 2,360 MtC; 1 mark: percentage increase = 2,360 ÷ 994 × 100 = 237.4% (accept 237%). (b) 1 mark: share = 3,354 ÷ 10,535 × 100; 1 mark: share = 31.8% (accept 31.7% to 31.8% if the working is correct).',
      ru: '(a) 1 балл: увеличение = 3 354 − 994 = 2 360 МтC; 1 балл: процентное увеличение = 2 360 ÷ 994 × 100 = 237,4% (засчитывается 237%). (b) 1 балл: доля = 3 354 ÷ 10 535 × 100; 1 балл: доля = 31,8% (засчитывается 31,7–31,8%, если ход решения верный).',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'core-2-1-a5',
    subject: 'geo',
    topicIds,
    paper: 'P2',
    section: 'A',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain how ice cores provide evidence for the enhanced greenhouse effect.',
      ru: 'Объясните, как ледяные керны дают доказательства усиленного парникового эффекта.',
    },
    markscheme: {
      en: '1 mark: air bubbles trapped in ice record the composition of past atmospheres; 1 mark: NOAA’s Antarctic CO₂ composite gives values from 173.71 ppm (about 667,000 years ago) to 298.60 ppm (about 335,000 years ago) for the period from 1,000 to 800,000 years ago; 1 mark: the same record gives 277.60 ppm around 1750, before the enhanced effect; 1 mark: Mauna Loa measured 427.35 ppm in 2025 (NOAA), above that ice-core range. Higher CO2 strengthens infrared absorption; the concentration comparison alone does not establish the source of the added carbon, which needs separate emissions/isotope evidence.',
      ru: '1 балл: пузырьки воздуха, заключённые во льду, сохраняют состав прошлой атмосферы; 1 балл: составной ряд NOAA по Антарктиде даёт значения от 173,71 ppm (около 667 000 лет назад) до 298,60 ppm (около 335 000 лет назад) для периода от 1 000 до 800 000 лет назад; 1 балл: тот же ряд даёт 277,60 ppm около 1750 года, то есть до усиления эффекта; 1 балл: Мауна-Лоа измерила 427,35 ppm в 2025 году (NOAA), что выше этого диапазона ледяных кернов. Более высокая концентрация CO2 усиливает поглощение инфракрасного излучения; одно сравнение концентраций не устанавливает источник добавленного углерода — нужны отдельные данные о выбросах или изотопном составе.',
    },
    origin: 'original',
    minutes: 5,
  },
];
