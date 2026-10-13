import type { Term } from '../../../../src/contract/types';

export const terms: Term[] = [
  {
    id: 'fiscal-policy',
    term: { en: 'fiscal policy', ru: 'фискальная политика (fiscal policy)' },
    def: {
      en: 'Changes in government spending and taxation, made to influence aggregate demand, output, employment and the price level.',
      ru: 'Изменения государственных расходов и налогов, которые проводятся для влияния на совокупный спрос, выпуск, занятость и уровень цен.',
    },
    example: {
      en: 'In a recession the government raises spending on roads by AED 200 million to increase demand and jobs.',
      ru: 'В рецессию правительство увеличивает расходы на дороги на 200 млн AED, чтобы повысить спрос и занятость.',
    },
    pitfall: {
      en: 'Fiscal policy is set by the government through its budget; monetary policy is set by the central bank through interest rates.',
      ru: 'Фискальную политику проводит правительство через бюджет; монетарную политику (monetary policy) проводит центральный банк через процентные ставки.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.6' },
  },
  {
    id: 'budget-deficit',
    term: { en: 'budget deficit', ru: 'бюджетный дефицит (budget deficit)' },
    def: {
      en: 'A negative budget balance: government spending is greater than tax revenue in a given year.',
      ru: 'Отрицательный бюджетный баланс: государственные расходы больше налоговых поступлений за данный год.',
    },
    example: {
      en: 'Tax revenue of AED 400 million and spending of AED 430 million give a deficit of AED 30 million.',
      ru: 'Налоговые поступления 400 млн AED и расходы 430 млн AED дают дефицит 30 млн AED.',
    },
    pitfall: {
      en: 'A deficit is a flow for one year; the national debt is the stock built up from all past deficits, net of surpluses.',
      ru: 'Дефицит — это поток за один год; государственный долг (national debt) — это запас, накопленный из всех прошлых дефицитов за вычетом профицитов.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.6' },
  },
  {
    id: 'budget-surplus',
    term: { en: 'budget surplus', ru: 'бюджетный профицит (budget surplus)' },
    def: {
      en: 'A positive budget balance: tax revenue is greater than government spending in a given year.',
      ru: 'Положительный бюджетный баланс: налоговые поступления больше государственных расходов за данный год.',
    },
    example: {
      en: 'Tax revenue of AED 800 million and spending of AED 750 million give a surplus of AED 50 million.',
      ru: 'Налоговые поступления 800 млн AED и расходы 750 млн AED дают профицит 50 млн AED.',
    },
    pitfall: {
      en: 'A surplus is not the same as a balanced budget, where tax revenue equals spending and the budget balance is zero.',
      ru: 'Профицит — это не то же самое, что сбалансированный бюджет, где налоговые поступления равны расходам и баланс равен нулю.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.6' },
  },
  {
    id: 'national-debt',
    term: { en: 'national debt', ru: 'государственный долг (national debt)' },
    def: {
      en: 'The total amount the government owes at a point in time, built up from past budget deficits minus past surpluses.',
      ru: 'Общая сумма, которую государство должно на определённый момент времени, накопленная из прошлых бюджетных дефицитов за вычетом профицитов.',
    },
    example: {
      en: 'Deficits of AED 30 million, AED 20 million and AED 10 million in three years raise the national debt by AED 60 million.',
      ru: 'Дефициты 30 млн AED, 20 млн AED и 10 млн AED за три года увеличивают государственный долг на 60 млн AED.',
    },
    pitfall: {
      en: 'Debt is a stock measured at a date, while the budget balance is a flow measured over a year.',
      ru: 'Долг — это запас на определённую дату, а бюджетный баланс — это поток за год.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.6' },
  },
  {
    id: 'discretionary-fiscal-policy',
    term: { en: 'discretionary fiscal policy', ru: 'дискреционная фискальная политика (discretionary fiscal policy)' },
    def: {
      en: 'Deliberate changes in government spending or taxation, decided by the government, to change aggregate demand.',
      ru: 'Целенаправленные изменения государственных расходов или налогов, принятые правительством, чтобы изменить совокупный спрос.',
    },
    example: {
      en: 'The government approves a AED 500 million road programme to raise demand during a slowdown.',
      ru: 'Правительство утверждает программу строительства дорог на 500 млн AED, чтобы поддержать спрос в период замедления.',
    },
    pitfall: {
      en: 'Discretionary policy needs a decision, so it has time lags; automatic stabilizers do not need one.',
      ru: 'Дискреционная политика требует решения, поэтому у неё есть временные лаги; автоматические стабилизаторы решения не требуют.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.6' },
  },
  {
    id: 'expansionary-fiscal-policy',
    term: { en: 'expansionary fiscal policy', ru: 'экспансионистская фискальная политика (expansionary fiscal policy)' },
    def: {
      en: 'Discretionary policy that raises aggregate demand by increasing government spending, cutting taxes or both, usually funded by borrowing.',
      ru: 'Дискреционная политика, которая повышает совокупный спрос за счёт роста государственных расходов, снижения налогов или того и другого, обычно финансируемая заимствованием.',
    },
    example: {
      en: 'A rise in government spending of AED 50 million in a recession raises aggregate demand and output by more than AED 50 million.',
      ru: 'Рост государственных расходов на 50 млн AED в рецессию повышает совокупный спрос и выпуск больше чем на 50 млн AED.',
    },
    pitfall: {
      en: 'A tax cut raises aggregate demand by less than an equal rise in government spending, because part of the extra income is saved.',
      ru: 'Снижение налогов повышает совокупный спрос меньше, чем такой же рост государственных расходов, потому что часть дополнительного дохода сберегается.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.6' },
  },
  {
    id: 'automatic-stabilizers',
    term: { en: 'automatic stabilizers', ru: 'автоматические стабилизаторы (automatic stabilizers)' },
    def: {
      en: 'Features of the budget, such as progressive taxes and benefits, that change automatically with income and reduce the size of economic fluctuations without a new decision.',
      ru: 'Элементы бюджета, например прогрессивные налоги и пособия, которые автоматически меняются вместе с доходом и уменьшают колебания экономики без нового решения.',
    },
    example: {
      en: 'In a recession, unemployment benefits rise and income tax revenue falls faster than income, cushioning the fall in demand.',
      ru: 'В рецессию пособия по безработице растут, а поступления от подоходного налога падают быстрее доходов, смягчая падение спроса.',
    },
    pitfall: {
      en: 'Automatic stabilizers reduce fluctuations but do not remove them; on their own they do not restore full employment.',
      ru: 'Автоматические стабилизаторы смягчают колебания, но не устраняют их; сами по себе они не возвращают полную занятость.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.6' },
  },
  {
    id: 'crowding-out',
    term: { en: 'crowding out', ru: 'вытеснение частных инвестиций (crowding out)' },
    def: {
      en: 'A fall in private investment caused by government borrowing that raises interest rates and makes private borrowing more expensive.',
      ru: 'Снижение частных инвестиций, вызванное государственными заимствованиями, которые повышают процентные ставки и делают частные кредиты дороже.',
    },
    example: {
      en: 'Government borrowing lifts the interest rate from 4% to 5%, so a firm cancels a AED 2 million factory expansion that is no longer profitable.',
      ru: 'Государственные заимствования поднимают процентную ставку с 4% до 5%, и фирма отменяет расширение завода на 2 млн AED, которое перестало быть выгодным.',
    },
    pitfall: {
      en: 'Crowding out is strongest when the economy is near full capacity; in a deep recession with spare capacity its effect is usually small.',
      ru: 'Вытеснение сильнее всего, когда экономика близка к полной загрузке мощностей; в глубокой рецессии, при наличии свободных мощностей, его эффект обычно невелик.',
    },
    syllabus: '3.6',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 3.6' },
  },
];
