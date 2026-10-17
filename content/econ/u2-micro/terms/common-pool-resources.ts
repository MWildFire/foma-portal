import type { SourceRef, Term } from '../../../../src/contract/types';

// Common pool resources: original paraphrases and applications of the textbook model, with locators.
const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';
const src: SourceRef = { kind: 'textbook', title: book, locator: 'ch. 5.2, pp. 151–152, Fig. 5.3; our application of the marginal model' };

export const terms: Term[] = [
  {
    id: 'common-pool-resource',
    term: { en: 'common pool resource', ru: 'общий ресурс (common pool resource)' },
    def: {
      en: 'A resource that is not owned by anyone, has no price and is available to anyone without payment or restriction; it is rivalrous and non-excludable, so each user reduces the amount left for others.',
      ru: 'Ресурс, которым никто не владеет, который не имеет цены и доступен каждому без платы и ограничений; он является соперничающим и неисключаемым, поэтому каждый пользователь уменьшает запас, оставшийся другим.',
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
    src: { kind: 'textbook', title: book, locator: 'ch. 5.1, p. 144' },
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
    src: { kind: 'textbook', title: book, locator: 'ch. 5.1, p. 144' },
  },
  {
    id: 'non-excludability',
    term: { en: 'non-excludability', ru: 'неисключаемость (non-excludability)' },
    def: {
      en: 'The characteristic of a good for which it is impossible, or very costly, to prevent people who do not pay from using it, so it can be used without restriction and may be overused and depleted.',
      ru: 'Свойство блага, при котором невозможно или очень дорого не допустить к его использованию тех, кто за него не платит; поэтому им можно пользоваться без ограничений, и ресурс может перегружаться и истощаться.',
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
    src: { kind: 'textbook', title: book, locator: 'ch. 5.1, p. 144' },
  },
  {
    id: 'tragedy-of-the-commons',
    term: { en: 'tragedy of the commons', ru: 'трагедия общин (tragedy of the commons)' },
    def: {
      en: 'The overuse and depletion of a common pool resource where its use is unrestricted, because each user takes more than is socially optimal, since the cost of depletion is shared by all users.',
      ru: 'Чрезмерное использование и истощение общего ресурса при неограниченном доступе к нему: каждый берёт больше оптимального, потому что издержки истощения делятся между всеми пользователями.',
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
    src: { kind: 'textbook', title: book, locator: 'ch. 5.1, p. 145' },
  },
  {
    id: 'open-access-equilibrium',
    term: { en: 'open-access equilibrium', ru: 'равновесие при открытом доступе (open-access equilibrium)' },
    def: {
      en: 'The market outcome when access to a shared resource is unrestricted and users respond to their own benefits and costs, leaving depletion costs imposed on others out of their decisions.',
      ru: 'Рыночный результат при свободном доступе к общему ресурсу: пользователи сопоставляют собственные выгоды и издержки, не учитывая ущерб от истощения, который несут другие.',
    },
    example: {
      en: 'In the main simulation, private demand meets private supply at Qm = 12, beyond Qopt = 9 because MSC exceeds MPC.',
      ru: 'В основной симуляции частный спрос пересекается с частным предложением при Qm = 12, выше Qopt = 9, поскольку MSC превышают MPC.',
    },
    pitfall: {
      en: 'Zero profit at TR = TC belongs to the separate fishing-effort extension, not the axes of the main MSC/MPC diagram.',
      ru: 'Нулевая прибыль при TR = TC относится к отдельной модели промыслового усилия, а не к осям основного рисунка MSC/MPC.',
    },
    syllabus: '2.8', papers: ['P2', 'P3'], src, sim: 'econ.cpr',
  },
  {
    id: 'socially-optimal-use',
    term: { en: 'socially optimal use', ru: 'общественно оптимальное использование (socially optimal use)' },
    def: {
      en: 'Resource use that maximises net benefit to society, including effects on third parties; in the marginal model, marginal social benefit (MSB) equals marginal social cost (MSC).',
      ru: 'Использование ресурса, дающее наибольшую чистую выгоду обществу с учётом последствий для третьих лиц; в предельной модели MSB равна MSC.',
    },
    example: {
      en: 'In the main simulation, MSB = 12 − 0.5Q and MSC = 0.5Q + 3 meet at Q = 9; welfare loss at market output 12 is 4.5.',
      ru: 'В основной симуляции MSB = 12 − 0,5Q и MSC = 0,5Q + 3 пересекаются при Q = 9; потери при рыночном выпуске 12 равны 4,5.',
    },
    pitfall: {
      en: 'Maximising a private profit or the physical catch need not maximise social welfare: external costs must be included.',
      ru: 'Максимум частной прибыли или физического улова не обязательно даёт максимум общественного благосостояния: нужны внешние издержки.',
    },
    syllabus: '2.8', papers: ['P2', 'P3'], src, sim: 'econ.cpr',
  },
  {
    id: 'harvest-quota',
    term: { en: 'harvest quota', ru: 'квота на вылов (harvest quota)' },
    def: {
      en: 'A limit on the quantity of a resource that may be taken in a period.',
      ru: 'Ограничение на объём ресурса, который можно добыть за период.',
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
    src: { kind: 'textbook', title: book, locator: 'ch. 5.3, p. 158' },
  },
];
