import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'a4-4-ethics',
  subject: 'cs',
  code: 'A4.4',
  title: { en: 'Ethical considerations', ru: 'Этические аспекты' },
  papers: ['P1'],
  order: 16,
  minutes: 30,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can discuss the ethical implications of machine learning in real-world scenarios such as hiring, lending or medicine', ru: 'Умею обсуждать этические последствия машинного обучения в реальных ситуациях, например при найме, кредитовании или в медицине' },
    { en: 'I can explain accountability and say who is responsible when an AI system makes a mistake', ru: 'Умею объяснять подотчётность и называть, кто отвечает, когда ИИ-система ошибается' },
    { en: 'I can explain how bias in training data leads to unfair outcomes and name ways to reduce it', ru: 'Умею объяснять, как предвзятость в обучающих данных ведёт к несправедливым результатам, и называть способы её снизить' },
    { en: 'I can distinguish misinformation from disinformation and explain the risks of deepfakes', ru: 'Умею различать ошибочную информацию и дезинформацию и объяснять риски дипфейков' },
    { en: 'I can discuss privacy, consent and transparency in pervasive AI, such as smart devices, AR and VR', ru: 'Умею обсуждать приватность, согласие и прозрачность повсеместного ИИ, например в умных устройствах, AR и VR' },
    { en: 'I can suggest mitigating measures such as regulation, transparency and public education', ru: 'Умею предлагать меры снижения риска, например регулирование, прозрачность и просвещение общества' },
  ],
  termIds: [
    'a4-4-ethical-implication',
    'a4-4-accountability',
    'a4-4-bias',
    'a4-4-misinformation',
    'a4-4-disinformation',
    'a4-4-deepfake',
    'a4-4-pervasive-ai',
    'a4-4-mitigating-risk',
  ],
  questionIds: [
    'port-a4-4-q1b',
    'port-a4-4-q2',
    'port-a4-4-q3a',
    'port-a4-4-q3c',
    'port-a4-4-q4a',
    'port-a4-4-q4b',
    'a4-4-q01',
    'a4-4-q02',
  ],
  sources: [
    { kind: 'textbook', title: 'Oxford IB DP Computer Science Course Companion (2025)', locator: 'ch. A4.4, pp. 307–313' },
    { kind: 'own', title: 'FomaCS lesson: A4.4 Ethical considerations (Russian page, ideas only)' },
  ],
};

export default topic;
