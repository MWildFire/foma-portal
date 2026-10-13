import type { TopicMeta } from '../../../../src/contract/types';

const topic: TopicMeta = {
  id: 'externalities',
  subject: 'econ',
  code: '2.8',
  title: { en: 'Externalities', ru: 'Экстерналии (externalities)' },
  papers: ['P1', 'P2', 'P3'],
  order: 18,
  minutes: 55,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can define an external cost and an external benefit and give one example of each', ru: 'Могу дать определение внешним издержкам и внешней выгоде и привести по одному примеру каждой' },
    { en: 'I can tell private from social cost and benefit and use the symbols MPC, MSC, MPB and MSB', ru: 'Могу отличить частные издержки и выгоды от общественных и использовать обозначения MPC, MSC, MPB и MSB' },
    { en: 'I can draw a negative or positive externality and show the market and the socially optimal quantities', ru: 'Могу нарисовать негативный или позитивный внешний эффект и показать рыночный и оптимальный для общества объём' },
    { en: 'I can calculate the socially optimal quantity, the welfare loss and the tax revenue of a Pigouvian tax', ru: 'Могу рассчитать оптимальный для общества объём, потери благосостояния и налоговые поступления от налога Пигу' },
    { en: 'I can evaluate taxes, subsidies, regulation, tradable permits and property rights, including their limits', ru: 'Могу оценить налоги, субсидии, регулирование, торгуемые разрешения и права собственности, включая их ограничения' },
  ],
  termIds: [
    'externality', 'external-cost', 'external-benefit', 'marginal-private-cost', 'marginal-social-cost',
    'marginal-private-benefit', 'marginal-social-benefit', 'pigouvian-tax', 'tradable-permits', 'property-rights',
    'deadweight-loss',
  ],
  sims: [
    'econ.externality-negative-production', 'econ.externality-positive-consumption',
    'econ.externality-negative-consumption', 'econ.externality-positive-production',
  ],
  questionIds: [
    'econ-externalities-01', 'econ-externalities-02', 'econ-externalities-03', 'econ-externalities-04',
    'econ-externalities-05', 'econ-externalities-06', 'econ-externalities-07',
  ],
  caseIds: [
    'case-dubai-salik', 'case-eu-ets', 'case-uk-soft-drinks-levy',
    'case-singapore-erp', 'case-london-congestion-charge', 'case-uk-air-passenger-duty',
  ],
  sources: [{ kind: 'ib-guide', title: 'IB DP Economics subject guide (2020)', locator: 'section 2.8' }],
};

export default topic;
