import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-p2-planning-1',
    subject: 'eng',
    topicIds: ['p2-planning'],
    paper: 'P2',
    marks: 3,
    command: 'Suggest',
    prompt: {
      en: 'Read this original prompt: "Discuss how two works use an object that a character keeps after a loss. To what extent does the object change what the reader understands about the loss?" Suggest one sentence that could serve as the thesis for an answer to this prompt. For this local exercise, invent details for two hypothetical works and make a specific comparative claim; their types alone do not prove an effect.',
      ru: 'Прочитайте оригинальное задание: «Discuss how two works use an object that a character keeps after a loss. To what extent does the object change what the reader understands about the loss?» Предложите одно предложение, которое могло бы стать тезисом ответа на это задание. В этом локальном упражнении придумайте детали двух условных произведений и сформулируйте конкретное сравнительное утверждение: из одного типа произведения нельзя вывести эффект.',
    },
    markscheme: {
      en: '1 mark: one sentence that answers the prompt directly and takes a position on the extent (for example "only in part" or "to a large extent"). 1 mark: a claim about effect on the reader, not a statement about the topic. 1 mark: names both works by type and a point of comparison (a similar or different use of the object), without retelling the plot.',
      ru: '1 балл: одно предложение, которое прямо отвечает на задание и занимает позицию о степени (например, «лишь отчасти» или «в значительной степени»). 1 балл: утверждение об эффекте на читателя, а не утверждение о теме. 1 балл: оба произведения названы по типу, указан пункт сравнения (сходное или различное использование предмета), без пересказа сюжета.',
    },
    model: {
      en: 'Both works use the object to reveal the loss in stages, but the retrospective novel explains its meaning, while the story told by a child leaves the reader to work it out, so the object changes what the reader understands only in part.',
      ru: 'Оба произведения показывают потерю постепенно: ретроспективный роман объясняет смысл предмета, а рассказ, который ведёт ребёнок, оставляет читателю работу по его расшифровке, поэтому предмет меняет понимание потери лишь отчасти.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-p2-planning-2',
    subject: 'eng',
    topicIds: ['p2-planning'],
    paper: 'P2',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'Put these five planning steps into the order suggested by this practice method (you may revise or overlap them in the exam): (a) choose the structure and keep time; (b) write one thesis sentence; (c) decode the prompt and its command term; (d) choose two eligible works that support the question; (e) choose supporting comparison points (three for this exercise).',
      ru: 'Расположите пять шагов в порядке, предложенном этим методом тренировки (на экзамене шаги могут пересекаться и пересматриваться): (a) выберите структуру и следите за временем; (b) напишите один тезис; (c) разберите задание и командное слово; (d) выберите два допустимых произведения, помогающих ответить на вопрос; (e) подберите сравнительные пункты (три для этой тренировки).',
    },
    markscheme: {
      en: '1 mark: the prompt is decoded first (c) and the pair is chosen second (d). 1 mark: the thesis (b) comes before the three comparison points (e), and the structure (a) is decided last. Full marks for the order c, d, b, e, a.',
      ru: '1 балл: сначала разбирается задание (c), затем выбирается пара (d). 1 балл: тезис (b) идёт до трёх пунктов сравнения (e), а структура (a) выбирается в последнюю очередь. Полный балл за порядок c, d, b, e, a.',
    },
    model: {
      en: 'c, d, b, e, a',
      ru: 'c, d, b, e, a: задание, пара, тезис, пункты, структура',
    },
    origin: 'original',
    minutes: 3,
  },
];
