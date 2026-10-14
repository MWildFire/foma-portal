import type { SourceRef, Term } from '../../../../src/contract/types';

const book = 'Tragakes, Economics for the IB Diploma: Coursebook (Cambridge University Press, 3rd ed.)';
const src: SourceRef = { kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 4.9' };

export const terms: Term[] = [
  {
    id: 'vicious-circle-of-poverty',
    term: { en: 'vicious circle of poverty', ru: 'порочный круг бедности (vicious circle of poverty)' },
    def: {
      en: 'A self-reinforcing cycle in which low income leads to low saving, low investment in physical, human or natural capital, and so low productivity, which in turn keeps income low.',
      ru: 'Самоподдерживающийся цикл: низкий доход ведёт к низким сбережениям, низким инвестициям в физический, человеческий или природный капитал и низкой производительности, что, в свою очередь, удерживает доход на низком уровне. Также называется ловушкой бедности (poverty trap).',
    },
    example: {
      en: 'A household that earns AED 1000 a month saves nothing, cannot pay for school fees, and its children later earn low wages.',
      ru: 'Семья, которая зарабатывает 1000 AED в месяц, ничего не откладывает, не может оплатить школу, и её дети позже получают низкую зарплату.',
    },
    pitfall: {
      en: 'The circle is a risk, not a law: countries can break it through saving, investment in people and institutions, or outside help.',
      ru: 'Круг — это риск, а не закон: страны могут его разорвать через сбережения, инвестиции в людей и институты или внешнюю помощь.',
    },
    syllabus: '4.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 19.1, p. 564' },
  },
  {
    id: 'economic-institutions',
    term: { en: 'economic institutions', ru: 'экономические институты (economic institutions)' },
    def: {
      en: 'The formal and informal rules and organisations, including social norms, that shape economic activity by helping people coordinate their actions, such as property rights, contract enforcement, courts, regulation and the integrity of public administration.',
      ru: 'Формальные и неформальные правила и организации, включая социальные нормы, которые формируют экономическую деятельность, помогая людям согласовывать свои действия: права собственности, исполнение контрактов, суды, регулирование и честность госуправления.',
    },
    example: {
      en: 'A firm that cannot enforce a AED 2 million supply contract through the courts may refuse to invest in a new plant.',
      ru: 'Фирма, которая не может добиться исполнения договора поставки на 2 млн AED через суд, может отказаться от инвестиций в новый завод.',
    },
    pitfall: {
      en: 'Institutions are rules and habits, not buildings: a country can have a parliament and still have weak property rights.',
      ru: 'Институты — это правила и практики, а не здания: в стране может быть парламент, но слабые права собственности.',
    },
    syllabus: '4.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 19, p. 582' },
  },
  {
    id: 'corruption',
    term: { en: 'corruption', ru: 'коррупция (corruption)' },
    def: {
      en: 'The abuse of public or private power for personal gain, such as bribery, embezzlement or favouritism in awarding contracts.',
      ru: 'Злоупотребление государственной или частной властью ради личной выгоды: взятки, растрата или фаворитизм (favouritism) при выдаче контрактов.',
    },
    example: {
      en: 'A bribe of AED 50000 paid to win a road contract raises the cost of the road and keeps honest firms from bidding.',
      ru: 'Взятка в 50000 AED за выигранный тендер на строительство дороги повышает её стоимость и отпугивает честные фирмы от торгов.',
    },
    pitfall: {
      en: 'Corruption is not the same as high taxes or strict rules: it is the illegal or unfair use of power for private gain.',
      ru: 'Коррупция — это не высокие налоги и не строгие правила, а незаконное или несправедливое использование власти ради личной выгоды.',
    },
    syllabus: '4.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 19, p. 591' },
  },
  {
    id: 'primary-commodities',
    term: { en: 'primary commodities', ru: 'первичные товары (primary commodities)' },
    def: {
      en: 'Products that come straight from natural resources or land, such as agricultural, fishing and forestry products, oil, minerals, metals or coffee, extracted or grown with little processing and traded on world markets.',
      ru: 'Продукция, которая получается непосредственно из природных ресурсов или земли, например сельскохозяйственная, рыбная и лесная продукция, нефть, полезные ископаемые, металлы или кофе, которые добываются или выращиваются с малой переработкой и торгуются на мировых рынках.',
    },
    example: {
      en: 'A country that earns 80% of its export revenue from oil depends on one commodity, so a fall in the oil price cuts its foreign currency income sharply.',
      ru: 'Страна, которая получает 80% экспортной выручки от нефти, зависит от одного товара, поэтому падение цены нефти резко сокращает валютные поступления.',
    },
    pitfall: {
      en: 'Commodity exporters are not poor because of the commodities themselves; the problems are dependence, volatile prices and little value added.',
      ru: 'Экспортёры сырья не бедны из-за самого сырья; проблемы — в зависимости, колеблющихся ценах и малой добавленной стоимости.',
    },
    syllabus: '4.9',
    papers: ['P1', 'P2', 'P3'],
    src: { kind: 'textbook', title: book, locator: 'ch. 3, p. 96' },
  },
  {
    id: 'external-debt',
    term: { en: 'external debt', ru: 'внешний долг (external debt)' },
    def: {
      en: 'Debt owed by the government, firms and households of a country to non-residents, usually in foreign currency, and repaid with interest.',
      ru: 'Долг правительства, фирм и домохозяйств страны перед нерезидентами, обычно в иностранной валюте, который выплачивается с процентами.',
    },
    example: {
      en: 'Interest on AED 10 billion of external debt at 6% is AED 600 million a year, before any repayment of the loan itself.',
      ru: 'Проценты по внешнему долгу в 10 млрд AED под 6% составляют 600 млн AED в год, не считая погашения самого кредита.',
    },
    pitfall: {
      en: 'External debt is measured in foreign currency, so a depreciation of the domestic currency raises its cost in domestic money.',
      ru: 'Внешний долг выражен в иностранной валюте, поэтому обесценение национальной валюты повышает его стоимость в местных деньгах.',
    },
    syllabus: '4.9',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'debt-overhang',
    term: { en: 'debt overhang', ru: 'долговой навес (debt overhang)' },
    def: {
      en: 'A situation in which the expected repayment of existing debt is so large that it discourages new investment, because most of any gains would go to creditors.',
      ru: 'Ситуация, когда ожидаемые выплаты по действующему долгу так велики, что отбивают охоту к новым инвестициям: большая часть отдачи уйдёт кредиторам.',
    },
    example: {
      en: 'A country that expects 60% of its future tax revenue to go to creditors has little reason to invest in reforms.',
      ru: 'Страна, которая ожидает, что 60% будущих налоговых поступлений уйдёт кредиторам, имеет мало стимулов инвестировать в реформы.',
    },
    pitfall: {
      en: 'Debt overhang is about how repayments limit the return to new investment, not simply about a high level of debt.',
      ru: 'Долговой навес касается того, как выплаты ограничивают отдачу от новых инвестиций, а не просто высокого уровня долга.',
    },
    syllabus: '4.9',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'technology-transfer',
    term: { en: 'technology transfer', ru: 'передача технологий (technology transfer)' },
    def: {
      en: 'The movement of technical knowledge, machinery and management practices from one country to another, often through foreign investment, trade or licensing.',
      ru: 'Перемещение технических знаний, оборудования и управленческих практик из одной страны в другую, часто через иностранные инвестиции, торговлю или лицензирование.',
    },
    example: {
      en: 'A foreign carmaker that builds a AED 300 million plant and trains 200 local engineers transfers process know-how to the host country.',
      ru: 'Иностранный автопроизводитель, который строит завод за 300 млн AED и обучает 200 местных инженеров, передаёт принимающей стране производственный опыт.',
    },
    pitfall: {
      en: 'Importing a foreign machine is not enough: local workers must learn to use, maintain and improve it.',
      ru: 'Одного импорта иностранной машины недостаточно: местные работники должны научиться её использовать, обслуживать и улучшать.',
    },
    syllabus: '4.9',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
  {
    id: 'conflict-trap',
    term: { en: 'conflict trap', ru: 'ловушка конфликта (conflict trap)' },
    def: {
      en: 'A self-reinforcing cycle in which conflict destroys capital, institutions and income, which makes further conflict more likely.',
      ru: 'Самоподдерживающийся цикл, в котором конфликт разрушает капитал, институты и доходы, что делает новый конфликт более вероятным.',
    },
    example: {
      en: 'A war that destroys a port handling AED 500 million of exports a year cuts export earnings and tax revenue, which leaves less money for schools, roads and security.',
      ru: 'Война, которая разрушает порт с экспортом на 500 млн AED в год, сокращает экспортные доходы и налоговые поступления, поэтому на школы, дороги и безопасность остаётся меньше денег.',
    },
    pitfall: {
      en: 'Poverty can also feed conflict: weak institutions and low incomes raise the risk of violence, so the link runs in both directions.',
      ru: 'Бедность тоже может питать конфликт: слабые институты и низкие доходы повышают риск насилия, поэтому связь работает в обе стороны.',
    },
    syllabus: '4.9',
    papers: ['P1', 'P2', 'P3'],
    src,
  },
];
