import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-p2-form-pairs-1',
    subject: 'eng',
    topicIds: ['p2-form-pairs'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'An invented prompt asks how two works show a child\'s sense of place, and you must compare a novel with a poem. Name two comparison axes that the two forms give you, and explain for each why it helps to answer the prompt. Use the difference between how a novel handles time and how a poem handles it.',
      ru: 'Условное задание спрашивает, как два произведения показывают чувство места у ребёнка, и вам нужно сравнить роман и стихотворение. Назовите две оси сравнения, которые дают эти две формы, и объясните для каждой, почему она помогает ответить на задание. Используйте различие в том, как роман и стихотворение работают со временем.',
    },
    markscheme: {
      en: '1 mark: a first axis that the forms give, for example time (a novel can follow a child across years, a poem can hold one moment). 1 mark: why it helps: the sense of place can grow or stay fixed in time, and the axis shows which work lets the reader see it change. 1 mark: a second axis, for example voice (a narrator who explains the place, or a lyric voice who addresses it). 1 mark: why it helps: the second axis shows who is allowed to name the place, which is part of how the child\'s sense of it is shown.',
      ru: '1 балл: первая ось, которую дают формы, например время (роман может проследить ребёнка через годы, стихотворение удерживает одно мгновение). 1 балл: почему это помогает: чувство места может расти или оставаться неизменным во времени, а ось показывает, в каком произведении читатель видит перемену. 1 балл: вторая ось, например голос (рассказчик, который объясняет место, или лирический голос, который к нему обращается). 1 балл: почему это помогает: вторая ось показывает, кому позволено назвать место, а это часть того, как показано чувство ребёнка.',
    },
    model: {
      en: 'Axis 1: time. The novel can follow the child across years, so the place can change as the child grows; the poem holds one moment, so the place is fixed in a single image. Axis 2: voice. A narrator can explain what the child feels about the place; a lyric voice shows the feeling without explaining it. Both axes answer the prompt, because they show how the child\'s sense of place reaches the reader.',
      ru: 'Ось 1: время. Роман может проследить ребёнка через годы, поэтому место может меняться вместе с ребёнком; стихотворение удерживает одно мгновение, поэтому место закреплено в одном образе. Ось 2: голос. Рассказчик может объяснить, что ребёнок чувствует к месту; лирический голос показывает это чувство, не объясняя его. Обе оси отвечают на задание, потому что показывают, как чувство ребёнка к месту доходит до читателя.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'chk-p2-form-pairs-2',
    subject: 'eng',
    topicIds: ['p2-form-pairs'],
    paper: 'P2',
    marks: 3,
    command: 'Write',
    prompt: {
      en: 'Write a thesis sentence for a pair of a play and a short story on the prompt "Compare how two works show a parent\'s silence. To what extent does the child\'s point of view decide the reader\'s sympathy?" The sentence must name both works, use a comparison word and state an effect on the reader. It must not retell the plot.',
      ru: 'Напишите тезис для пары «пьеса и рассказ» к заданию «Compare how two works show a parent\'s silence. To what extent does the child\'s point of view decide the reader\'s sympathy?» Предложение должно назвать оба произведения, использовать слово сравнения и назвать эффект для читателя. Пересказывать сюжет нельзя.',
    },
    markscheme: {
      en: '1 mark: both works are named and a comparison word is used. 1 mark: the sentence names an effect on the reader\'s sympathy, linked to the child\'s point of view. 1 mark: the sentence states a degree (for example "largely" or "partly") and does not retell the plot.',
      ru: '1 балл: названы оба произведения и использовано слово сравнения. 1 балл: предложение называет эффект для сочувствия читателя, связанный с точкой зрения ребёнка. 1 балл: предложение задаёт степень (например, «в основном» или «отчасти») и не пересказывает сюжет.',
    },
    model: {
      en: 'In the play and in the story, a parent\'s silence is felt through the child\'s eyes, but whereas the story lets the child\'s view decide what we feel, the play lets the audience see more than the child, so sympathy is partly shaped by the child and partly by what the audience knows.',
      ru: 'В пьесе и в рассказе молчание родителя ощущается глазами ребёнка, но тогда как рассказ позволяет взгляду ребёнка решать, что мы чувствуем, пьеса позволяет зрителю видеть больше ребёнка, поэтому сочувствие отчасти формируется ребёнком, а отчасти тем, что знает зритель.',
    },
    origin: 'original',
    minutes: 5,
  },
];
