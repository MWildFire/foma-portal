import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-p2-language-1',
    subject: 'eng',
    topicIds: ['p2-language'],
    paper: 'P2',
    marks: 3,
    command: 'Suggest',
    prompt: {
      en: 'In this editing drill (not an IB word ban), rewrite this sentence, which has a vague verb, a vague intensifier and a quotation that stands outside the sentence: "The writer shows that the house is very quiet. Look: \'the chairs stand against the walls.\'" Suggest a precise version in which the quotation is built into one sentence, the verb names the way the meaning arrives, and the intensifier is removed. Keep the interpretation within what the quoted detail supports; you may question the original claim of quiet.',
      ru: 'В этой тренировке редактирования (не списке запрещённых IB слов) перепишите предложение, в котором есть расплывчатый глагол, лишнее усиление и цитата вне предложения: «The writer shows that the house is very quiet. Look: \'the chairs stand against the walls.\'» Предложите точную версию, в которой цитата встроена в одно предложение, глагол называет способ, которым приходит смысл, а усиление убрано. Ограничьте толкование тем, что подтверждает цитата; исходное утверждение о тишине можно поставить под сомнение.',
    },
    markscheme: {
      en: '1 mark: the vague verb "shows" is replaced by a precise verb that names how the meaning arrives, for example "suggests" or "implies". 1 mark: the quotation is built into one sentence grammatically, its words exact and in the author\'s order, and the separate "Look:" sentence is gone. 1 mark: the intensifier "very" is removed, and the rewrite stays in the present tense with an evidence-limited interpretation of the spatial detail; do not require quiet to be inferred.',
      ru: '1 балл: расплывчатый глагол «shows» заменён точным, который называет способ, каким приходит смысл, например «suggests» или «implies». 1 балл: цитата встроена в одно предложение грамматически, её слова точны и идут в порядке автора, отдельного предложения «Look:» нет. 1 балл: усиление «very» убрано, переписанный текст остаётся в настоящем времени и предлагает обоснованное толкование пространственной детали; вывод о тишине не обязателен.',
    },
    model: {
      en: 'By leaving the chairs standing "against the walls", the writer suggests an unused space, although the sentence alone establishes neither quiet nor who is absent or whether anyone will return.',
      ru: 'Возможный английский ответ: By leaving the chairs standing "against the walls", the writer suggests an unused space, although the sentence alone establishes neither quiet nor who is absent or whether anyone will return. Положение стульев допускает мысль о неиспользуемом пространстве, но не доказывает ни тишины, ни отсутствия конкретных людей, ни их будущего невозвращения.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-p2-language-2',
    subject: 'eng',
    topicIds: ['p2-language'],
    paper: 'P2',
    marks: 2,
    command: 'Identify',
    prompt: {
      en: 'Two students describe the same moment. One writes: "She murmured her apology." The other writes: "She mumbled her apology." Identify the difference in connotation between the two verbs, and say which verb better supports a claim that the character is ashamed but still controlled.',
      ru: 'Два ученика описывают один и тот же момент. Первый пишет: «She murmured her apology.» Второй: «She mumbled her apology.» Назовите разницу в коннотации (connotation) между двумя глаголами и скажите, какой глагол лучше поддержит утверждение, что персонаж пристыжен, но сохраняет контроль.',
    },
    markscheme: {
      en: '1 mark: "murmured" suggests a soft voice; "mumbled" suggests indistinct speech and may suggest embarrassment. Neither verb by itself proves intention or self-control. 1 mark: "murmured" is a plausible choice for the proposed reading because soft speech can be controlled. Accept another reasoned answer: context is needed to establish shame or loss of control.',
      ru: '1 балл: «murmured» передаёт тихую речь, «mumbled» — невнятную и, возможно, смущённую. Ни один глагол сам по себе не доказывает намерение или самообладание. 1 балл: «murmured» подходит к предложенному прочтению: тихая речь совместима с самообладанием. Принимайте иной обоснованный ответ: для вывода о стыде или потере контроля нужен контекст.',
    },
    model: {
      en: '"Murmured" suggests quiet speech, whereas "mumbled" emphasises indistinct articulation. I would choose "murmured" for the proposed reading because a quiet apology can be controlled. Neither word alone establishes shame or proves whether the quiet is deliberate.',
      ru: '«Murmured» указывает на тихую речь, а «mumbled» подчёркивает невнятность. Для предложенного прочтения я выбрал бы «murmured»: тихое извинение совместимо с самообладанием. Но ни одно слово само по себе не доказывает стыд или намеренно выбранную тихую манеру.',
    },
    origin: 'original',
    minutes: 3,
  },
];
