import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-p2-organisation-1',
    subject: 'eng',
    topicIds: ['p2-organisation'],
    paper: 'P2',
    marks: 3,
    command: 'Suggest',
    prompt: {
      en: 'A student ends an essay with this conclusion: "In conclusion, both narrators hide information from the reader, and the reader trusts them less at the end. Both works use silence in different ways." The essay answers this prompt: "Compare how two works present a narrator who withholds information from the reader. To what extent does the withholding change the reader\'s trust?" Suggest a rewritten conclusion that answers the prompt in new words, makes one judgement about the effect, and synthesises the findings rather than merely repeating sentences. You may invent relevant details, clearly marked as hypothetical.',
      ru: 'Ученик заканчивает эссе таким выводом: «In conclusion, both narrators hide information from the reader, and the reader trusts them less at the end. Both works use silence in different ways.» Эссе отвечает на задание: «Compare how two works present a narrator who withholds information from the reader. To what extent does the withholding change the reader\'s trust?» Предложите переписанный вывод, который отвечает на задание новыми словами, делает одно суждение о действии сокрытия и обобщает результаты, а не просто повторяет предложения. Можно явно обозначить придуманные для примера детали.',
    },
    markscheme: {
      en: '1 mark: the conclusion answers the prompt directly with a judgement, for example that later disclosure and the apparent motive together affect trust; do not require a universal motive-only claim. 1 mark: it synthesises a relevant comparison; a wholly new point is not required. 1 mark: it gives a coherent, supported judgement about the question. "In conclusion" is allowed; assess substance rather than a banned phrase.',
      ru: '1 балл: вывод прямо отвечает на задание суждением, например: позднейшее раскрытие и предполагаемый мотив вместе влияют на доверие; универсальный тезис «только через мотив» не требуется. 1 балл: вывод обобщает значимое сравнение; совершенно новая мысль не требуется. 1 балл: вывод даёт связное обоснованное суждение по вопросу. «In conclusion» допустимо; оценивайте содержание, а не запрет на фразу.',
    },
    model: {
      en: 'Hypothetical conclusion: Withholding substantially affects trust in both works, but through different patterns of disclosure: an acknowledged harmful choice can invite qualified trust, whereas an unexplained contradiction can make later claims doubtful. Motive matters, but so do consistency and what the work eventually reveals.',
      ru: 'Условный вывод: сокрытие существенно влияет на доверие в обоих произведениях, но через разные способы раскрытия: признание вреда может вызвать осторожное доверие, а необъяснённое противоречие — сомнение в последующих словах. Важны мотив, последовательность рассказа и то, что произведение в итоге раскрывает.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-p2-organisation-2',
    subject: 'eng',
    topicIds: ['p2-organisation'],
    paper: 'P2',
    marks: 2,
    command: 'Outline',
    prompt: {
      en: 'A student plans a Paper 2 essay in four parts: (a) a conclusion that answers the prompt in new words; (b) an introduction that names both works and states one thesis; (c) body paragraph 1, the first comparison; (d) body paragraph 2, the strongest comparison. Suggest a coherent order and justify it. A strongest comparison may come first or last if the connections support that order.',
      ru: 'Ученик планирует эссе Paper 2 из четырёх частей: (a) вывод, который отвечает на задание новыми словами; (b) введение, которое называет оба произведения и формулирует один тезис; (c) абзац 1, первое сравнение; (d) абзац 2, самое сильное сравнение. Предложите связный порядок и обоснуйте его. Самое сильное сравнение может идти первым или последним, если связи между мыслями это поддерживают.',
    },
    markscheme: {
      en: '1 mark: a coherent order, for example b, c, d, a or b, d, c, a: introduction, first comparison, strongest comparison, conclusion. 1 mark: a reason, for example that the strongest comparison comes last so that the essay builds to its point and the conclusion can answer the prompt from it.',
      ru: '1 балл: связный порядок, например b, c, d, a или b, d, c, a: введение, первое сравнение, самое сильное сравнение, вывод. 1 балл: причина, например: самое сильное сравнение стоит последним, чтобы эссе вело к своей точке, а вывод мог опереться на неё.',
    },
    model: {
      en: 'b, c, d, a. The strongest comparison comes last among the body paragraphs, so the argument builds to its most important point, and the conclusion can answer the prompt from that point.',
      ru: 'b, c, d, a. Самое сильное сравнение стоит последним среди абзацев, поэтому аргумент строится к главной мысли, а вывод отвечает на задание, опираясь на неё.',
    },
    origin: 'original',
    minutes: 3,
  },
];
