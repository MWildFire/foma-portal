import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-p2-comparison-1',
    subject: 'eng',
    topicIds: ['p2-comparison'],
    paper: 'P2',
    marks: 3,
    command: 'Compare',
    prompt: {
      en: 'Two works are described by type only: a novel narrated in retrospect by an adult, and a short story narrated by a child who misreads events. Write one comparison sentence that uses a comparison word, names one technique in each work, and says what the difference does for the reader.',
      ru: 'Два произведения описаны только по типу: роман, который ведёт в ретроспективе взрослый рассказчик, и короткий рассказ (short story), который ведёт ребёнок, неверно понимающий события. Напишите одно предложение сравнения: оно должно использовать слово сравнения, назвать один приём в каждом произведении и сказать, что даёт это различие читателю.',
    },
    markscheme: {
      en: '1 mark: a comparison word that marks the contrast, such as "whereas", "while", "unlike" or "in contrast". 1 mark: one technique named in each work (the adult narrator who looks back; the child narrator who misreads events). 1 mark: a so what, stated as the effect of the difference on the reader.',
      ru: '1 балл: слово сравнения, которое отмечает контраст, например «whereas», «while», «unlike» или «in contrast». 1 балл: назван один приём в каждом произведении (взрослый рассказчик, который оглядывается назад; ребёнок-рассказчик, который неверно понимает события). 1 балл: «так что» — эффект различия для читателя, выраженный как следствие.',
    },
    model: {
      en: 'Whereas the novel\'s adult narrator looks back and explains the past, the short story\'s child narrator misreads events, so the reader must do the interpreting that the narrator cannot do.',
      ru: 'Тогда как взрослый рассказчик романа оглядывается назад и объясняет прошлое, ребёнок-рассказчик короткого рассказа неверно понимает события, поэтому читатель должен сам делать ту интерпретацию, которую рассказчик не может сделать.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-p2-comparison-2',
    subject: 'eng',
    topicIds: ['p2-comparison'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'A student writes: "Both works have a storm, and both storms are sad." Explain which parts of a comparison point are missing, using the three parts: a similarity or difference, one technique in each work, and the so what. Then rewrite the sentence for two works described by type only: a novel narrated by a farmer, and a play set on one stage for the whole action.',
      ru: 'Ученик пишет: «Both works have a storm, and both storms are sad» («В обоих произведениях есть буря, и обе бури грустные»). Объясните, каких частей пункта сравнения не хватает: сходства или различия, одного приёма в каждом произведении и «так что». Затем перепишите предложение для двух произведений, описанных только по типу: роман, который рассказывает фермер, и пьеса, которая идёт на одной сцене весь ход действия.',
    },
    markscheme: {
      en: '1 mark: the sentence names a similarity but no technique in either work, because "a storm" is a subject, not a technique used in a specific way. 1 mark: the sentence has no so what, so it does not link to any prompt. 1 mark: the rewrite uses a comparison word and names one technique in each work. 1 mark: the rewrite states a so what that a prompt could ask about.',
      ru: '1 балл: в предложении назван общий предмет, но не приём ни в одном произведении: «буря» — это предмет, а не приём, использованный определённым образом. 1 балл: нет «так что», поэтому предложение не связано ни с каким заданием. 1 балл: в переписанном предложении есть слово сравнения и назван один приём в каждом произведении. 1 балл: в переписанном предложении есть «так что», о котором мог бы спросить вопрос задания.',
    },
    model: {
      en: 'The sentence lacks a technique and a so what: "both" names a similarity, but not how either work uses the storm, nor why the difference matters. Rewrite: "Whereas the farmer narrator reads the storm as a judgement on the family, the single set keeps the storm offstage, so the audience feels only the characters\' fear; both works make weather a test of character, but the novel asks the reader to judge the narrator, while the play asks the audience to share the fear."',
      ru: 'В предложении нет приёма и «так что»: «both» называет сходство, но не говорит, как каждое произведение использует бурю и почему это важно. Замена: «Тогда как рассказчик-фермер читает бурю как суд над семьёй, единственная декорация держит бурю за сценой, поэтому зритель чувствует только страх персонажей; оба произведения делают погоду проверкой характера, но роман просит читателя судить рассказчика, а пьеса просит зрителя разделить страх.»',
    },
    origin: 'original',
    minutes: 6,
  },
];
