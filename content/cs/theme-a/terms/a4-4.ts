import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'a4-4-ethical-implication',
    term: { en: 'Ethical implication', ru: 'этическое последствие (ethical implication)' },
    def: {
      en: 'A possible positive or negative result of a decision or action, judged by its effect on people, for example on their rights, fairness or well-being.',
      ru: 'Возможный положительный или отрицательный результат решения или действия, который оценивают по его влиянию на людей: на их права, справедливость или благополучие.',
    },
    syllabus: 'A4.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.4, p. 307' },
    example: {
      en: 'An AI screening tool that rejects one group more often has an ethical implication for those applicants, even if the code runs correctly.',
      ru: 'ИИ-фильтр, который чаще отклоняет одну группу, имеет этическое последствие для этих кандидатов, даже если код работает правильно.',
    },
    pitfall: {
      en: 'Treating an implication as a technical fault only. Harm to rights, fairness or well-being counts even when the system works as designed.',
      ru: 'Считать последствие только технической ошибкой. Вред для прав, справедливости или благополучия остаётся, даже когда система работает как задумано.',
    },
  },
  {
    id: 'a4-4-accountability',
    term: { en: 'Accountability', ru: 'подотчётность (accountability)' },
    def: {
      en: 'The question of who is responsible for an outcome when an AI system makes a mistake: the developer, the user, the organization that deployed it, or someone else. Lines of responsibility should be set in advance.',
      ru: 'Вопрос о том, кто отвечает за результат, когда ИИ-система ошибается: разработчик, пользователь, организация, которая её внедрила, или кто-то другой. Линии ответственности нужно определить заранее.',
    },
    syllabus: 'A4.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.4, p. 307' },
    example: {
      en: 'A school uses an AI tool to flag cheating. Accountability asks whether the vendor, the school or the teacher answers for a wrong flag.',
      ru: 'Школа использует ИИ, чтобы находить списывание. Подотчётность определяет, кто отвечает за ошибочное обвинение: поставщик, школа или учитель.',
    },
    pitfall: {
      en: 'Blaming the AI itself. The people and organizations behind a system must answer for its outcomes.',
      ru: 'Винить сам ИИ. За результаты отвечают люди и организации, которые создали и внедрили систему.',
    },
  },
  {
    id: 'a4-4-bias',
    term: { en: 'Bias (in training data)', ru: 'предвзятость (bias) в обучающих данных' },
    def: {
      en: 'A systematic tilt in a model or its training data that favours or disadvantages one person or group, usually in an unfair way.',
      ru: 'Систематический перекос в модели или в её обучающих данных, который ставит одного человека или группу в более выгодное или невыгодное положение, обычно несправедливо.',
    },
    syllabus: 'A4.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.4, p. 308' },
    example: {
      en: 'A hiring model trained on past decisions can learn to rank applicants from one group lower.',
      ru: 'Модель найма, обученная на прошлых решениях, может научиться ставить кандидатов из одной группы ниже.',
    },
    pitfall: {
      en: 'Assuming a model is neutral because it works with numbers. The bias usually comes from the data it learns from.',
      ru: 'Считать модель нейтральной, потому что она работает с числами. Предвзятость обычно приходит из данных, на которых модель училась.',
    },
  },
  {
    id: 'a4-4-misinformation',
    term: { en: 'Misinformation', ru: 'ошибочная информация (misinformation)' },
    def: {
      en: 'Inaccurate or false content that is shared without any intention to deceive, for example by someone who sincerely believes it.',
      ru: 'Неточный или ложный контент, которым делятся без намерения обмануть, например человек, который искренне в него верит.',
    },
    syllabus: 'A4.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.4, p. 309' },
    example: {
      en: 'A parent forwards a health tip that a friend got wrong, without checking it first.',
      ru: 'Родитель пересылает совет о здоровье, в котором друг ошибся, и не проверяет его.',
    },
    pitfall: {
      en: 'Assuming that every false post is deliberate. Intent is what separates misinformation from disinformation.',
      ru: 'Считать, что любая ложная публикация намеренна. Именно намерение отличает ошибочную информацию от дезинформации.',
    },
  },
  {
    id: 'a4-4-disinformation',
    term: { en: 'Disinformation', ru: 'дезинформация (disinformation)' },
    def: {
      en: 'False information that is created and shared on purpose to deceive or mislead people, often to shape opinion or damage a reputation.',
      ru: 'Ложная информация, которую создают и распространяют намеренно, чтобы обмануть или ввести людей в заблуждение, часто чтобы повлиять на мнение или навредить репутации.',
    },
    syllabus: 'A4.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.4, p. 309' },
    example: {
      en: 'A network of fake accounts posts invented quotes from a candidate shortly before an election.',
      ru: 'Сеть фейковых аккаунтов публикует выдуманные цитаты кандидата незадолго до выборов.',
    },
    pitfall: {
      en: 'Assuming that only the content matters. Disinformation is defined by the deliberate intent to mislead.',
      ru: 'Думать, что важно только содержание. Дезинформацию определяет умысел ввести в заблуждение.',
    },
  },
  {
    id: 'a4-4-deepfake',
    term: { en: 'Deepfake', ru: 'дипфейк (deepfake)' },
    def: {
      en: 'Synthetic audio, images or video, made with machine learning, that show a real person saying or doing something they never did.',
      ru: 'Синтетические аудио, изображения или видео, созданные с помощью машинного обучения, на которых реальный человек говорит или делает то, чего не делал.',
    },
    syllabus: 'A4.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.4, p. 309' },
    example: {
      en: 'A fake video shows a politician announcing a policy that they never supported.',
      ru: 'Поддельное видео, на котором политик объявляет о политике, которую он никогда не поддерживал.',
    },
    pitfall: {
      en: 'Trusting a video because it looks convincing. Deepfakes are built to look real, so check the source.',
      ru: 'Доверять видео только потому, что оно выглядит убедительно. Дипфейки создают так, чтобы они выглядели настоящими, поэтому проверяй источник.',
    },
  },
  {
    id: 'a4-4-pervasive-ai',
    term: { en: 'Pervasive AI', ru: 'повсеместный ИИ (pervasive AI)' },
    def: {
      en: 'AI built into many everyday platforms, devices and places, working in the background and shaping ordinary life and business.',
      ru: 'ИИ, встроенный во множество повседневных платформ, устройств и мест. Он работает в фоновом режиме и влияет на обычную жизнь и бизнес.',
    },
    syllabus: 'A4.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.4, p. 312' },
    example: {
      en: 'A smart thermostat learns when people are at home and adjusts the heating without any direct command.',
      ru: 'Умный термостат узнаёт, когда люди дома, и меняет отопление без прямой команды.',
    },
    pitfall: {
      en: 'Thinking pervasive AI only means a visible robot. Most of it is hidden in everyday platforms and devices.',
      ru: 'Думать, что повсеместный ИИ — это видимый робот. Чаще всего он спрятан в повседневных платформах и устройствах.',
    },
  },
  {
    id: 'a4-4-mitigating-risk',
    term: { en: 'Mitigating risk', ru: 'снижение риска (mitigating risk)' },
    def: {
      en: 'Finding the possible risks in a situation and putting measures in place that reduce how likely they are and how serious they would be.',
      ru: 'Выявление возможных рисков в конкретной ситуации и принятие мер, которые снижают их вероятность и тяжесть последствий.',
    },
    syllabus: 'A4.4',
    papers: ['P1'],
    src: { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.4, p. 313' },
    example: {
      en: 'Testing an AI hiring tool on a varied sample of applicants before launch lowers the chance that it treats one group unfairly.',
      ru: 'Проверка ИИ-инструмента найма на разнообразной выборке кандидатов до запуска снижает риск несправедливого отношения к одной из групп.',
    },
    pitfall: {
      en: 'Assuming that a risk is removed once it is identified. Mitigation means reducing likelihood and impact over time.',
      ru: 'Считать, что риск устранён, как только его заметили. Снижение риска — это постоянная работа по уменьшению вероятности и последствий.',
    },
  },
];
