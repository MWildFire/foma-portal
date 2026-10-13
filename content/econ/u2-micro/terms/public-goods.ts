import type { SourceRef, Term } from '../../../../src/contract/types';

// Public goods (IB DP Economics section 2.9). Definitions are in our own words; the source is the subject guide.
const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.9' };

export const terms: Term[] = [
  {
    id: 'public-good',
    term: { en: 'public good', ru: 'общественное благо (public good)' },
    def: {
      en: "A good that is non-rivalrous and non-excludable, so one person's use does not reduce the amount for others and people cannot be kept from using it.",
      ru: 'Благо, которое неконкурентно в потреблении и неисключаемо: его использование одним человеком не уменьшает объём для других, а тех, кто не платит, нельзя легко исключить.',
    },
    example: {
      en: "Street lighting costs AED 6 per unit of light, and one resident's use does not reduce the light available to others.",
      ru: 'Уличное освещение стоит 6 AED за единицу света, и использование его одним жителем не уменьшает свет для других.',
    },
    pitfall: {
      en: 'A public good is defined by non-rivalry and non-excludability, not by who supplies it; the government is not always the supplier.',
      ru: 'Общественное благо определяют неконкурентность и неисключаемость, а не поставщик: государство не всегда является поставщиком.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src,
    sim: 'econ.public-goods',
  },
  {
    id: 'non-rivalry',
    term: { en: 'non-rivalry', ru: 'неконкурентность в потреблении (non-rivalry)' },
    def: {
      en: "The feature of a good that one person's consumption does not reduce the amount available to others, so many people can use the same unit.",
      ru: 'Свойство блага, при котором потребление одним человеком не уменьшает объём, доступный другим, поэтому одну единицу могут использовать многие.',
    },
    example: {
      en: 'One streetlight serves 40 households at the same time, so each household gets full light without reducing the light of any other.',
      ru: 'Один фонарь одновременно освещает 40 домохозяйств, и каждое получает полный свет, не уменьшая света у других.',
    },
    pitfall: {
      en: 'Non-rivalry does not mean free: a public good can be costly to provide, and the question is who pays for it.',
      ru: 'Неконкурентность не означает бесплатность: благо может быть дорогим в производстве, и вопрос в том, кто за него платит.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'free-rider',
    term: { en: 'free rider', ru: 'безбилетник (free rider)' },
    def: {
      en: 'A person who enjoys the benefit of a good without paying for it, because it is impossible or too costly to exclude them from using it.',
      ru: 'Человек, который получает выгоду от блага, не платя за него, потому что исключить его из использования невозможно или слишком дорого.',
    },
    example: {
      en: 'Household B enjoys the 4 units of street lighting that household A pays for, without paying anything.',
      ru: 'Домохозяйство B пользуется 4 единицами уличного освещения, за которые платит A, и ничего не платит.',
    },
    pitfall: {
      en: 'Free riding comes from non-excludability, not only from dishonesty: the price system cannot force people to pay.',
      ru: 'Безбилетничество возникает из неисключаемости, а не только из нечестности: рыночная цена не может заставить платить.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'free-rider-problem',
    term: { en: 'free-rider problem', ru: 'проблема безбилетника (free-rider problem)' },
    def: {
      en: 'The market failure in which people who cannot be excluded do not pay, so private firms under-provide the good or do not provide it at all.',
      ru: 'Провал рынка, при котором люди, которых нельзя исключить, не платят, поэтому частные фирмы предоставляют благо в недостаточном объёме или не предоставляют его вовсе.',
    },
    example: {
      en: 'In the worked example the market provides 4 units of lighting against an optimum of 6 units, so 2 units are missing.',
      ru: 'В разобранном примере рынок даёт 4 единицы освещения при оптимуме 6, поэтому не хватает 2 единиц.',
    },
    pitfall: {
      en: 'Under-provision is the result and free riding is the cause; do not write free riding as the outcome.',
      ru: 'Недостаточное предоставление — это результат, а безбилетничество — причина; не путайте их.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'vertical-summation',
    term: { en: 'vertical summation', ru: 'вертикальное суммирование (vertical summation)' },
    def: {
      en: 'Adding individual marginal benefit curves at each quantity to get the market demand for a public good, because everyone consumes the same unit.',
      ru: 'Сложение индивидуальных кривых предельной выгоды при каждом объёме, чтобы получить рыночный спрос на общественное благо, так как все потребляют одну единицу.',
    },
    example: {
      en: 'At 6 units, household A values the lighting at AED 4 and household B at AED 2, so the market value is AED 6 per unit.',
      ru: 'При 6 единицах A оценивает освещение в 4 AED, а B — в 2 AED, поэтому рыночная ценность составляет 6 AED за единицу.',
    },
    pitfall: {
      en: 'Do not add quantities horizontally, as for private goods: for a public good, add the marginal benefits at each quantity.',
      ru: 'Не складывайте объёмы по горизонтали, как для частных благ: для общественного блага складывайте предельные выгоды при каждом объёме.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src,
    sim: 'econ.public-goods',
  },
  {
    id: 'optimal-public-good-quantity',
    term: { en: 'optimal quantity of a public good', ru: 'оптимальный объём общественного блага (optimal quantity)' },
    def: {
      en: 'The quantity of a public good at which the total marginal benefit of all users equals the marginal cost of providing it.',
      ru: 'Объём общественного блага, при котором суммарная предельная выгода всех пользователей равна предельным издержкам его предоставления.',
    },
    example: {
      en: 'With a marginal cost of AED 6 per unit and a total marginal benefit of 18 - 2Q, the optimal quantity is 6 units.',
      ru: 'При предельных издержках 6 AED за единицу и суммарной предельной выгоде 18 - 2Q оптимальный объём составляет 6 единиц.',
    },
    pitfall: {
      en: "The optimum is not where one household's marginal benefit equals the cost; the marginal benefits of all households must be added.",
      ru: 'Оптимум — не точка, где предельная выгода одного домохозяйства равна издержкам: нужно сложить предельные выгоды всех домохозяйств.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'quasi-public-good',
    term: { en: 'quasi-public good', ru: 'квазиобщественное благо (quasi-public good)' },
    def: {
      en: 'A good that is partly non-rival or partly non-excludable, so it can be provided privately with some free riding or congestion, such as a toll road or a park.',
      ru: 'Благо, которое частично неконкурентно или частично неисключаемо, поэтому его можно предоставлять частным образом, но с некоторым безбилетничеством или перегрузкой, например платная дорога или парк.',
    },
    example: {
      en: 'A toll road charging AED 5 per trip can exclude non-payers, but it becomes congested at peak times and is then partly rival.',
      ru: 'Платная дорога с оплатой 5 AED за поездку может не пускать тех, кто не платит, но в часы пик становится перегруженной и отчасти соперничающей.',
    },
    pitfall: {
      en: 'A quasi-public good is not a pure public good: check whether exclusion is possible and whether one user reduces the benefit of others.',
      ru: 'Квазиобщественное благо — не чистое общественное: проверьте, возможно ли исключение и уменьшает ли одно использование выгоду других.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'public-provision',
    term: { en: 'public provision', ru: 'государственное предоставление (public provision)' },
    def: {
      en: 'The supply of a good by the government, usually financed by taxes and free at the point of use, which avoids free riding but needs information on willingness to pay.',
      ru: 'Предоставление блага государством, обычно за счёт налогов и бесплатно в месте использования; оно устраняет безбилетничество, но требует знать, сколько люди готовы платить.',
    },
    example: {
      en: 'The government raises AED 1200 a month in taxes to pay for street lighting, so every household uses it without a separate charge.',
      ru: 'Государство собирает 1200 AED в месяц налогами на уличное освещение, и каждое домохозяйство пользуется им без отдельной платы.',
    },
    pitfall: {
      en: 'Public provision is not automatically efficient: the government may misjudge willingness to pay and provide too much or too little.',
      ru: 'Государственное предоставление не всегда эффективно: государство может неверно оценить готовность платить и дать слишком много или слишком мало.',
    },
    syllabus: '2.9',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
];
