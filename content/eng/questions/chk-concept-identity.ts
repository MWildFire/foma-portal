import type { Question } from '../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'chk-concept-identity-1',
    subject: 'eng',
    topicIds: ['concept-identity'],
    paper: 'P2',
    marks: 3,
    command: 'Suggest',
    prompt: {
      en: 'Read this original prompt: "A girl is renamed by the people who raise her, and she spends the whole story answering to the new name. To what extent does a name decide who a person is?" Name the concept the prompt asks you to discuss, and suggest one technique that would best show the girl\'s identity from inside her own mind.',
      ru: 'Прочитайте оригинальное задание: «A girl is renamed by the people who raise her, and she spends the whole story answering to the new name. To what extent does a name decide who a person is?» Назовите понятие, которое задание просит обсудить, и предложите один приём, который лучше всего покажет идентичность девочки изнутри её собственного сознания.',
    },
    markscheme: {
      en: '1 mark: identity is named as the concept: the self, and the roles that other people impose. 1 mark: a technique that shows identity from inside, such as interior monologue or first-person narration. 1 mark: a reason the technique fits this prompt: only a voice inside the character can show the gap between the name she answers to and the self she keeps.',
      ru: '1 балл: идентичность (identity) названо как понятие: «я» и роли, которые навязывают другие. 1 балл: приём, который показывает идентичность изнутри, например внутренний монолог (interior monologue) или повествование от первого лица. 1 балл: причина, почему приём подходит: только голос внутри персонажа показывает разрыв между именем, на которое она отзывается, и «я», которое она сохраняет.',
    },
    model: {
      en: 'The concept is identity: the prompt asks how a name given from outside shapes a person\'s sense of self. Interior monologue would best show the girl\'s identity from inside, because the reader can hear how she answers to the new name while privately keeping her own.',
      ru: 'Понятие — идентичность: задание спрашивает, как имя, данное извне, формирует ощущение себя. Внутренний монолог лучше всего покажет идентичность девочки изнутри, потому что читатель слышит, как она отзывается на новое имя, и при этом втайне сохраняет своё.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'chk-concept-identity-2',
    subject: 'eng',
    topicIds: ['concept-identity'],
    paper: 'P2',
    marks: 3,
    command: 'Explain',
    stimulus: {
      en: 'A man keeps the same coat for thirty years, although it no longer fits him. His neighbours call him "the professor", although he has never taught anywhere. He answers to the name and says nothing.',
      ru: 'Мужчина носит одно и то же пальто тридцать лет, хотя оно ему уже не впору. Соседи называют его «профессором», хотя он нигде не преподавал. Он откликается на это имя и молчит.',
    },
    prompt: {
      en: 'Explain how the name the neighbours use for the man, and the coat he keeps, show the pressure on his identity. Identify one technique a writer could use to show the gap between the name and the man\'s own sense of self.',
      ru: 'Объясните, как имя, которое соседи дают мужчине, и пальто, которое он хранит, показывают давление на его идентичность. Назовите один приём, которым писатель мог бы показать разрыв между именем и собственным ощущением себя у этого мужчины.',
    },
    markscheme: {
      en: '1 mark: the name "the professor" is given from outside and does not match his past, so it shows a role imposed by others. 1 mark: the coat that no longer fits symbolises an identity he has outgrown, so the gap between self and role becomes visible. 1 mark: a technique that lets the reader hear his private view, such as free indirect discourse or interior monologue, which shows the gap between the public name and his own sense of self.',
      ru: '1 балл: имя «профессор» дано извне и не соответствует его прошлому, поэтому оно показывает роль, навязанную другими. 1 балл: пальто, которое уже не впору, — символ идентичности, которую он перерос, поэтому разрыв между «я» и ролью становится видимым. 1 балл: приём, который позволяет читателю услышать его собственный взгляд, например несобственно-прямая речь (free indirect discourse) или внутренний монолог, и показывает разрыв между публичным именем и его ощущением себя.',
    },
    model: {
      en: 'The neighbours\' name, "the professor", turns the man into a role he never earned, and his silence suggests that he accepts it. The coat that no longer fits symbolises an earlier self that he has outgrown but still wears. A writer could show the gap through free indirect discourse, so that the reader hears his private embarrassment while the narration repeats the public name.',
      ru: 'Имя, которое дали соседи, — «профессор», — превращает мужчину в роль, которой он не заслужил, а его молчание намекает, что он с этим смиряется. Пальто, которое уже не впору, символизирует прежнее «я», которое он перерос, но всё ещё носит. Писатель мог бы показать разрыв через несобственно-прямую речь (free indirect discourse), чтобы читатель слышал его личное смущение, а повествование повторяло публичное имя.',
    },
    origin: 'original',
    minutes: 5,
  },
];
