import type { SourceRef, Term } from '../../../../src/contract/types';

// Common pool resources (IB DP Economics section 2.8). Definitions are in our own words; the source is the subject guide.
const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.8' };

export const terms: Term[] = [
  {
    id: 'common-pool-resource',
    term: { en: 'common pool resource', ru: 'общий ресурс (common pool resource)' },
    def: {
      en: 'A resource that is rivalrous and non-excludable, so each user can take from it freely and reduces the amount left for others.',
      ru: 'Ресурс, которым один пользователь уменьшает запас для других, и доступ к которому трудно ограничить; каждый может брать его, не платя.',
    },
    example: {
      en: 'The sustainable catch of a shared bay is 1200 tonnes a year, and any boat can fish there without a licence.',
      ru: 'Устойчивый улов общей бухты — 1200 тонн в год, и любая лодка может ловить там без лицензии.',
    },
    pitfall: {
      en: "A common pool resource is not a public good: it is rivalrous, so one user's catch reduces what is left for others.",
      ru: 'Общий ресурс — это не общественное благо: он уменьшается при использовании, поэтому улов одного сокращает то, что остаётся другим.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src,
    sim: 'econ.cpr',
  },
  {
    id: 'rivalry',
    term: { en: 'rivalry in consumption', ru: 'соперничество в потреблении (rivalry in consumption)' },
    def: {
      en: "A good is rivalrous when one person's use reduces the amount available for others, so the good is used up or congested.",
      ru: 'Благо является соперничающим, если использование одним человеком уменьшает объём, доступный другим; такое благо расходуется или перегружается.',
    },
    example: {
      en: 'If one boat catches 30 tonnes, there are 30 tonnes fewer for the other boats in the bay.',
      ru: 'Если одна лодка поймает 30 тонн, другим лодкам в бухте останется на 30 тонн меньше.',
    },
    pitfall: {
      en: 'Rivalry is about whether one user reduces what is left for others, not about whether the good is expensive.',
      ru: 'Соперничество — это уменьшение того, что остаётся другим, а не высокая цена блага.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'non-excludability',
    term: { en: 'non-excludability', ru: 'неисключаемость (non-excludability)' },
    def: {
      en: 'The characteristic of a good for which it is impossible, or very costly, to prevent people who do not pay from using it.',
      ru: 'Свойство блага, при котором невозможно или очень дорого не допустить к его использованию тех, кто за него не платит.',
    },
    example: {
      en: 'Anyone with a boat can fish in the open bay, and policing the whole bay would cost AED 200000 a year.',
      ru: 'Любой владелец лодки может ловить в открытой бухте, а охрана всей акватории стоила бы 200000 AED в год.',
    },
    pitfall: {
      en: 'Non-excludability means exclusion is impossible or too costly; it does not mean the good is free or has no owner.',
      ru: 'Неисключаемость означает, что исключить трудно или дорого; это не значит, что благо бесплатное или ничьё.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'tragedy-of-the-commons',
    term: { en: 'tragedy of the commons', ru: 'трагедия общин (tragedy of the commons)' },
    def: {
      en: 'The overuse and depletion of a common pool resource because each user takes more than is socially optimal, since the cost of depletion is shared by all users.',
      ru: 'Чрезмерное использование и истощение общего ресурса: каждый берёт больше оптимального, потому что издержки истощения делятся между всеми пользователями.',
    },
    example: {
      en: 'A boat that adds 1 tonne of catch earns AED 12 for itself, while the loss of future catches is shared by all boats.',
      ru: 'Лодка, которая добавляет 1 тонну улова, получает 12 AED, а потеря будущих уловов делится между всеми лодками.',
    },
    pitfall: {
      en: 'The tragedy is not caused by greedy people; it follows from open access, because each user bears only a small share of the cost.',
      ru: 'Трагедия вызвана не жадностью людей, а открытым доступом: каждый пользователь несёт лишь малую долю издержек.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'open-access-equilibrium',
    term: { en: 'open-access equilibrium', ru: 'равновесие при открытом доступе (open-access equilibrium)' },
    def: {
      en: 'The level of use reached when new users enter until total revenue equals total cost, so economic profit is zero and the resource is overused.',
      ru: 'Уровень использования, при котором новые пользователи входят, пока совокупный доход не станет равен совокупным издержкам; экономическая прибыль нулевая, ресурс перегружен.',
    },
    example: {
      en: 'At 60 boats the bay catches 1500 tonnes; total revenue of AED 900000 equals total cost of AED 900000, so new boats stop entering.',
      ru: 'При 60 лодках бухта ловит 1500 тонн: совокупный доход 900000 AED равен совокупным издержкам 900000 AED, и новые лодки перестают входить.',
    },
    pitfall: {
      en: 'Open-access equilibrium is not the profit-maximizing level: there economic profit is zero, while less effort gives more profit.',
      ru: 'Равновесие при открытом доступе не максимизирует прибыль: там экономическая прибыль нулевая, а меньшее усилие даёт больше прибыли.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src,
    sim: 'econ.cpr',
  },
  {
    id: 'socially-optimal-use',
    term: { en: 'socially optimal use', ru: 'общественно оптимальное использование (socially optimal use)' },
    def: {
      en: 'The level of use at which the gap between total revenue and total cost is largest, so marginal revenue equals marginal cost and economic profit is maximized.',
      ru: 'Уровень использования, при котором разрыв между совокупным доходом и совокупными издержками наибольший: предельный доход равен предельным издержкам, а экономическая прибыль максимальна.',
    },
    example: {
      en: 'A fleet of 40 boats earns AED 120000 of economic profit, while 60 boats earn zero.',
      ru: 'Флот из 40 лодок приносит 120000 AED экономической прибыли, а 60 лодок — ноль.',
    },
    pitfall: {
      en: 'The socially optimal use is not the largest catch; the target is a smaller catch with higher profit and a sustainable stock.',
      ru: 'Общественно оптимальное использование — не самый большой улов; цель — меньший улов с большей прибылью и устойчивым запасом.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src,
    sim: 'econ.cpr',
  },
  {
    id: 'harvest-quota',
    term: { en: 'harvest quota', ru: 'квота на вылов (harvest quota)' },
    def: {
      en: 'A limit on the quantity of a resource that may be taken in a period, often shared out as individual allocations to users.',
      ru: 'Ограничение на объём ресурса, который можно добыть за период; обычно его делят между пользователями в виде индивидуальных долей.',
    },
    example: {
      en: 'A total quota of 1200 tonnes shared among 40 boats gives each boat 30 tonnes a year.',
      ru: 'Общая квота 1200 тонн, разделённая между 40 лодками, даёт каждой лодке 30 тонн в год.',
    },
    pitfall: {
      en: 'A quota caps the total catch, but if shares are not fixed or tradable, boats may race to catch their share first.',
      ru: 'Квота ограничивает общий улов, но если доли не закреплены и не передаются, лодки могут гнаться за уловом и ловить его первыми.',
    },
    syllabus: '2.8',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
];
