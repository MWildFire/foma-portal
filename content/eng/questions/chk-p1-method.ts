import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-p1-method-1',
    subject: 'eng',
    topicIds: ['p1-method'],
    paper: 'P1',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'Put these six steps of a guided analysis into the order you should follow in the exam: (a) write a one-sentence thesis; (b) read the guiding question and decide what it asks you to explain; (c) annotate the extract for techniques and shifts; (d) plan three or four paragraphs; (e) write each paragraph as point, quotation, technique, effect, link; (f) read the extract once for sense: who speaks, to whom, where.',
      ru: 'Расположите шесть шагов направленного анализа в том порядке, в котором их нужно выполнять на экзамене: (a) напишите тезис в одном предложении; (b) прочитайте направляющий вопрос и решите, что в нём нужно объяснить; (c) разметьте отрывок: приёмы и смены смысла; (d) составьте план из трёх–четырёх абзацев; (e) напишите каждый абзац как: мысль, цитата, приём, эффект, связь с вопросом; (f) прочитайте отрывок один раз ради смысла: кто говорит, кому, где.',
    },
    markscheme: {
      en: '1 mark: the guiding question is read first (b), then the extract is read for sense (f) and annotated (c). 1 mark: the thesis (a) comes before the plan (d), and the paragraphs (e) are written last. Full marks for the sequence b, f, c, a, d, e.',
      ru: '1 балл: сначала читается направляющий вопрос (b), затем отрывок — ради смысла (f) и размечается (c). 1 балл: тезис (a) пишется до плана (d), абзацы (e) — в последнюю очередь. Полный балл за порядок b, f, c, a, d, e.',
    },
    model: {
      en: 'b, f, c, a, d, e',
      ru: 'b, f, c, a, d, e: вопрос, смысл, разметка, тезис, план, абзацы',
    },
    origin: 'original',
    minutes: 3,
  },
  {
    id: 'chk-p1-method-2',
    subject: 'eng',
    topicIds: ['p1-method'],
    paper: 'P1',
    marks: 3,
    command: 'Suggest',
    prompt: {
      en: 'Write one thesis sentence that answers this guiding question about the Dickinson extract: "How does Dickinson use the sound of a fly and the image of stillness to present the experience of dying?" A good thesis takes a position on the effect of the poem, not only on its subject.',
      ru: 'Напишите одно предложение-тезис, отвечающее на направляющий вопрос об отрывке Дикинсон: «How does Dickinson use the sound of a fly and the image of stillness to present the experience of dying?» (Как Дикинсон использует звук мухи и образ тишины, чтобы передать опыт умирания?). Хороший тезис занимает позицию относительно эффекта стихотворения, а не только его темы.',
    },
    markscheme: {
      en: '1 mark: one sentence that answers the question directly. 1 mark: makes a claim about the effect (for example interruption, anticlimax, or the loss of control at the moment of death). 1 mark: grounded in the poem through a precise detail (the fly, the stillness, the storm, the dash), without retelling the poem.',
      ru: '1 балл: одно предложение, которое прямо отвечает на вопрос. 1 балл: утверждение об эффекте (например, прерывание, антиклимакс или потеря контроля в момент смерти). 1 балл: опора на текст через точную деталь (муха, тишина, буря, тире), без пересказа стихотворения.',
    },
    model: {
      en: 'Dickinson makes the moment of death anticlimactic: the stillness that should mark a solemn ending is broken by the buzz of a fly, so dying appears as an interruption of the speaker\'s last act of will rather than as the drama the room expects.',
      ru: 'Дикинсон делает момент смерти антиклимаксом: тишина, которая должна была бы отмечать торжественный конец, нарушается жужжанием мухи, и умирание предстаёт как прерывание последнего акта воли говорящего, а не как драма, которой ждёт комната.',
    },
    origin: 'original',
    minutes: 5,
  },
];
