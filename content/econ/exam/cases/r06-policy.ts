import type { CaseStudy, L } from '../../../../src/contract/types';
export const policyBrief: L = {
 en: 'UK, 23 March 2023: the Bank of England raised Bank Rate by 0.25 percentage points to 4.25%. February CPI inflation was 10.4%;unemployment was 3.7% in the three months to January. Bank staff provisionally estimated Spring Budget support would raise the GDP level by about 0.3% over coming years relative to the previous forecast. Source:March 2023 MPC minutes,paragraphs 40–42 and 49. The 0.3% is a forecast revision, not a measured causal effect; low unemployment alone does not prove full employment. [Primary source](https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2023/march-2023).',
 ru: 'Великобритания, 23 марта 2023: Банк Англии повысил ставку на 0,25 процентного пункта до 4,25%. Инфляция CPI за февраль 10,4%;безработица за три месяца по январь 3,7%. Предварительная оценка бюджетной поддержки: уровень ВВП примерно на 0,3% выше прежнего прогноза в следующие годы. Источник:протокол MPC за март 2023,пункты 40–42, 49. Это пересмотр прогноза, не измеренный причинный эффект; низкая безработица сама не доказывает полную занятость. [Первоисточник](https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2023/march-2023).'
};
export const cases: CaseStudy[] = [{
 id:'r06-uk-2023-policy',subject:'econ',title:{en:'UK March 2023:budget support and monetary tightening',ru:'Великобритания,март 2023:бюджетная поддержка и повышение ставки'},place:'United Kingdom',scale:'national',years:'2023',facts:policyBrief,
 usedFor:['fiscal-policy','monetary-policy'],
 src:[{kind:'web',title:'Bank of England, Monetary Policy Summary and Minutes, 23 March 2023',locator:'Minutes 40–42 and 49; contemporaneous estimates, not ex-post causal proof',url:'https://www.bankofengland.co.uk/monetary-policy-summary-and-minutes/2023/march-2023'}]
}];
