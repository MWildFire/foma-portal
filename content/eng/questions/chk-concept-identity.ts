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
      en: '1 mark: identity is named as the concept: the self, and the roles that other people impose. 1 mark: a technique that shows identity from inside, such as interior monologue or first-person narration. 1 mark: explains how the proposed technique could reveal her response to the imposed name. Acceptance, resistance or ambivalence are possible; the prompt does not establish a private rejection. Other techniques are valid when the explanation shows how they could reveal her perspective.',
      ru: '1 балл: идентичность (identity) названо как понятие: «я» и роли, которые навязывают другие. 1 балл: приём, который показывает идентичность изнутри, например внутренний монолог (interior monologue) или повествование от первого лица. 1 балл: объяснено, как предложенный приём мог бы раскрыть её отношение к навязанному имени. Возможны принятие, сопротивление или двойственное чувство; задание не устанавливает тайного отказа. Другие приёмы допустимы, если объяснено, как они передают её перспективу.',
    },
    model: {
      en: 'The concept is identity: the prompt asks how a name given from outside shapes a person\'s sense of self. Interior monologue could reveal whether she accepts, resists or feels divided about the new name; the prompt does not tell us which response she has.',
      ru: 'Понятие — идентичность: задание спрашивает, как имя, данное извне, формирует ощущение себя. Внутренний монолог мог бы показать, принимает ли она новое имя, сопротивляется ему или испытывает двойственное чувство; её отношение в задании не раскрыто.',
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
      ru: 'Мужчина хранит одно и то же пальто тридцать лет, хотя оно ему уже не впору. Соседи называют его «профессором», хотя он нигде не преподавал. Он откликается на это имя и молчит.',
    },
    prompt: {
      en: 'Explain how the name the neighbours use for the man, and the coat he keeps, show the pressure on his identity. Identify one technique a writer could use to show the gap between the name and the man\'s own sense of self.',
      ru: 'Объясните, как имя, которое соседи дают мужчине, и пальто, которое он хранит, показывают давление на его идентичность. Назовите один приём, которым писатель мог бы показать разрыв между именем и собственным ощущением себя у этого мужчины.',
    },
    markscheme: {
      en: '1 mark: the name "the professor" is given by others, while the passage leaves its basis unexplained. Never having taught does not prove that the title is false or unwanted. 1 mark: a supported symbolic reading, such as an outdated role suggested by the ill-fitting coat, qualified as an interpretation rather than a proved private belief. Accept other grounded readings. 1 mark: a technique that lets the reader hear his private view, such as free indirect discourse or interior monologue, which shows the gap between the public name and his own sense of self.',
      ru: '1 балл: имя «профессор» дают соседи, а его основание не объяснено. Отсутствие преподавательского опыта не доказывает, что имя ложное или нежеланное. 1 балл: обоснованное символическое прочтение, например устаревшая роль, на которую намекает неподходящее пальто; это интерпретация, а не доказанное личное убеждение. Принимайте другие прочтения с опорой на текст. 1 балл: приём, который позволяет читателю услышать его собственный взгляд, например несобственно-прямая речь (free indirect discourse) или внутренний монолог, и показывает разрыв между публичным именем и его ощущением себя.',
    },
    model: {
      en: 'The public name has an unexplained basis: never teaching does not establish that the man lacks academic qualifications. Keeping the ill-fitting coat could suggest attachment to an earlier self, but neither wearing it nor that motive is stated. His silence leaves his response to the name uncertain. Free indirect discourse could explore a possible gap between public role and private self; embarrassment would be one invented possibility, not a fact from this stimulus.',
      ru: 'Основание публичного имени не объяснено: отсутствие преподавательского опыта не доказывает отсутствия научных заслуг. Сохранённое пальто может намекать на привязанность к прежнему «я», но ни ношение пальто, ни этот мотив не установлены. Молчание оставляет отношение к имени неясным. Несобственно-прямая речь могла бы раскрыть возможный разрыв между общественной ролью и внутренним самоощущением; смущение было бы придуманным вариантом, а не фактом данного стимула.',
    },
    origin: 'original',
    minutes: 5,
  },
];
