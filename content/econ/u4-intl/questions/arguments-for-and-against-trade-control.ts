import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-arguments-for-and-against-trade-control-01',
    subject: 'econ',
    topicIds: ['arguments-for-and-against-trade-control'],
    paper: 'P2',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain the infant industry argument for trade protection.',
      ru: 'Объясните аргумент о молодой отрасли в пользу торговой защиты.',
    },
    markscheme: {
      en: '1 mark: a new industry has higher costs than established foreign firms because it has little experience and few economies of scale. 1 mark: a temporary tariff or quota keeps out cheaper imports while the industry grows. 1 mark: as output rises, the firm gains economies of scale and experience and can become cost-competitive. 1 mark: the protection must be temporary and the industry must have a realistic route to competitiveness; otherwise the protection becomes permanent and inefficient.',
      ru: '1 балл: у новой отрасли издержки выше, чем у давно работающих иностранных фирм, потому что у неё мало опыта и мало эффекта масштаба. 1 балл: временный тариф или квота сдерживают более дешёвый импорт, пока отрасль растёт. 1 балл: по мере роста выпуска фирма получает эффект масштаба и опыт и может стать конкурентоспособной по издержкам. 1 балл: защита должна быть временной, а у отрасли должен быть реальный путь к конкурентоспособности; иначе защита становится постоянной и неэффективной.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-arguments-for-and-against-trade-control-02',
    subject: 'econ',
    topicIds: ['arguments-for-and-against-trade-control'],
    paper: 'P1',
    marks: 6,
    command: 'Evaluate',
    prompt: {
      en: 'Evaluate the use of a tariff to protect jobs in a declining industry.',
      ru: 'Оцените использование тарифа для защиты рабочих мест в отрасли в упадке.',
    },
    markscheme: {
      en: '1 mark: jobs in the protected industry are saved, which benefits the workers and the local community. 1 mark: consumers pay higher prices, and firms that buy the good as an input face higher costs. 1 mark: the tariff may cause retaliation that reduces exports and jobs in other industries. 1 mark: protection delays structural change, so the industry may never become competitive and resources stay in a declining sector. 1 mark: evaluation: the net effect depends on the jobs saved compared with the jobs lost elsewhere, on the time period, and on whether a cheaper policy such as retraining or a targeted subsidy would reach the aim. 1 mark: a justified judgement, for example, a permanent tariff is hard to justify, but a temporary one may give workers time to retrain.',
      ru: '1 балл: рабочие места в защищённой отрасли сохраняются, что выгодно работникам и местному сообществу. 1 балл: потребители платят более высокие цены, а фирмы, которые покупают товар как ресурс, несут более высокие издержки. 1 балл: пошлина может вызвать ответные меры, которые сократят экспорт и рабочие места в других отраслях. 1 балл: защита откладывает структурные изменения: отрасль может так и не стать конкурентоспособной, а ресурсы остаются в отрасли в упадке. 1 балл: оценка: итоговый эффект зависит от соотношения сохранённых и потерянных в других местах рабочих мест, от временного периода и от того, достигнет ли цели более дешёвая мера, например переобучение или целевая субсидия. 1 балл: обоснованный вывод, например: постоянный тариф трудно оправдать, но временный может дать работникам время на переобучение.',
    },
    origin: 'original',
    minutes: 6,
  },
  {
    id: 'econ-arguments-for-and-against-trade-control-03',
    subject: 'econ',
    topicIds: ['arguments-for-and-against-trade-control'],
    paper: 'P1',
    marks: 6,
    command: 'Discuss',
    prompt: {
      en: 'Using the case study on US tariffs on steel imports, discuss whether trade protection is an effective way to protect a strategic industry.',
      ru: 'Используя кейс о пошлинах США на импорт стали, обсудите, является ли торговая защита эффективным способом защиты стратегической отрасли.',
    },
    markscheme: {
      en: '1 mark: an argument for: the industry is strategic, so supply is secure in a crisis and domestic jobs are kept. 1 mark: the case supports this argument, because the tariff was justified on national security grounds. 1 mark: an argument against: buyers of steel (downstream industries) face higher costs, which can reduce jobs in those industries. 1 mark: an argument against: trading partners may retaliate, which reduces exports from the protecting country. 1 mark: evaluation: effectiveness depends on whether the security risk is real and whether cheaper alternatives, such as stockpiles or more varied suppliers, would do the same job. 1 mark: a justified judgement with the condition under which it holds, for example a targeted measure with a clear end date.',
      ru: '1 балл: довод за: отрасль стратегическая, поэтому поставки обеспечены в кризис, а рабочие места внутри страны сохраняются. 1 балл: кейс подтверждает этот довод, потому что пошлина была обоснована соображениями национальной безопасности. 1 балл: довод против: покупатели стали, то есть отрасли-потребители, платят больше, что может сократить рабочие места в этих отраслях. 1 балл: довод против: торговые партнёры могут ответить, и экспорт защищающей страны сократится. 1 балл: оценка: эффективность зависит от того, реален ли риск для безопасности, и есть ли более дешёвые альтернативы, например запасы или более разнообразные поставщики. 1 балл: обоснованный вывод с условием, при котором он верен, например целевая мера с чётким сроком действия.',
    },
    origin: 'original',
    minutes: 6,
  },
];
