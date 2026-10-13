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
      en: 'Rewrite this sentence, which has a vague verb, a vague intensifier and a quotation that stands outside the sentence: "The writer shows that the house is very quiet. Look: \'the chairs stand against the walls.\'" Suggest a precise version in which the quotation is built into one sentence, the verb names the way the meaning arrives, and the intensifier is removed.',
      ru: 'Перепишите это предложение, в котором есть расплывчатый глагол, лишнее усиление и цитата вне предложения: «The writer shows that the house is very quiet. Look: \'the chairs stand against the walls.\'» Предложите точную версию, в которой цитата встроена в одно предложение, глагол называет способ, которым приходит смысл, а усиление убрано.',
    },
    markscheme: {
      en: '1 mark: the vague verb "shows" is replaced by a precise verb that names how the meaning arrives, for example "suggests" or "implies". 1 mark: the quotation is built into one sentence grammatically, its words exact and in the author\'s order, and the separate "Look:" sentence is gone. 1 mark: the intensifier "very" is removed, and the rewrite stays in the present tense with a precise description of the quiet.',
      ru: '1 балл: расплывчатый глагол «shows» заменён точным, который называет способ, каким приходит смысл, например «suggests» или «implies». 1 балл: цитата встроена в одно предложение грамматически, её слова точны и идут в порядке автора, отдельного предложения «Look:» нет. 1 балл: усиление «very» убрано, переписанный текст остаётся в настоящем времени и точно описывает тишину.',
    },
    model: {
      en: 'The writer\'s stillness suggests a house kept ready for absence, where the chairs "stand against the walls" as if they are waiting for guests who will not come.',
      ru: 'Неподвижность в тексте намекает на дом, который держат наготове для отсутствия, где стулья «stand against the walls», будто ждут гостей, которые не придут.',
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
      en: '1 mark: "murmured" connotes a soft, deliberate voice; "mumbled" connotes unclear, careless or embarrassed speech. 1 mark: "murmured" better supports the claim, because it suggests that the quiet is chosen, while "mumbled" suggests that the speaker has lost control of the words.',
      ru: '1 балл: «murmured» несёт коннотацию мягкой и обдуманной речи, «mumbled» — неясной, небрежной или смущённой речи. 1 балл: «murmured» лучше поддерживает утверждение, потому что показывает, что тишина выбрана, а «mumbled» показывает, что говорящий потерял контроль над словами.',
    },
    model: {
      en: '"Murmured" has the connotation of a soft, deliberate voice, while "mumbled" suggests careless or embarrassed speech. "Murmured" is the better choice for a claim that the character is ashamed but controlled, because the quiet is chosen; "mumbled" would suggest that the control is lost.',
      ru: '«Murmured» несёт коннотацию мягкого и обдуманного голоса, а «mumbled» намекает на небрежную или смущённую речь. «Murmured» лучше подходит для утверждения, что персонаж пристыжен, но владеет собой, потому что тишина выбрана; «mumbled» показал бы, что контроль утрачен.',
    },
    origin: 'original',
    minutes: 3,
  },
];
