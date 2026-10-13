import type { Question } from '../../../../src/contract/types';

export const questions: Question[] = [
  {
    id: 'econ-economic-models-01',
    subject: 'econ',
    topicIds: ['economic-models'],
    paper: 'P1',
    marks: 3,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between a positive statement and a normative statement. Give one example of each about a 1 AED per litre tax on petrol.',
      ru: 'Различите позитивное и нормативное утверждения. Приведите по одному примеру каждого о налоге 1 AED за литр на бензин.',
    },
    markscheme: {
      en: '1 mark: a positive statement describes what is or what would happen and can be tested against evidence. 1 mark: a normative statement is a value judgement about what should happen and cannot be settled by evidence alone. 1 mark: correct examples, for example "the tax cuts petrol sales by 5%" (positive) and "the tax is unfair to drivers" (normative).',
      ru: '1 балл: позитивное утверждение описывает то, что есть или что произойдёт, и его можно проверить данными. 1 балл: нормативное утверждение — это оценочное суждение о том, что должно произойти, и его нельзя решить одними данными. 1 балл: верные примеры, например «налог сократит продажи бензина на 5%» (позитивное) и «налог несправедлив к водителям» (нормативное).',
    },
    origin: 'original',
    minutes: 4,
  },
  {
    id: 'econ-economic-models-02',
    subject: 'econ',
    topicIds: ['economic-models'],
    paper: 'P1',
    marks: 4,
    command: 'Explain',
    prompt: {
      en: 'Explain why economists use simplified models with assumptions, and why a model can still be useful even when some of its assumptions are not fully realistic.',
      ru: 'Объясните, почему экономисты используют упрощённые модели с допущениями и почему модель может оставаться полезной, даже если некоторые её допущения не полностью реалистичны.',
    },
    markscheme: {
      en: '1 mark: a model simplifies reality so that the key cause and effect can be seen. 1 mark: assumptions make the model manageable, for example by treating all buyers as identical. 1 mark: ceteris paribus isolates the effect of one change by holding other factors constant. 1 mark: a model is judged by how well its predictions match evidence on the question studied, so unrealistic assumptions do not make it useless.',
      ru: '1 балл: модель упрощает реальность, чтобы были видны ключевая причина и следствие. 1 балл: допущения делают модель выполнимой, например если считать всех покупателей одинаковыми. 1 балл: условие «при прочих равных» выделяет эффект одного изменения, удерживая остальные факторы постоянными. 1 балл: модель оценивают по тому, насколько её прогнозы совпадают с данными по изучаемому вопросу, поэтому нереалистичные допущения не делают её бесполезной.',
    },
    origin: 'original',
    minutes: 5,
  },
  {
    id: 'econ-economic-models-03',
    subject: 'econ',
    topicIds: ['economic-models'],
    paper: 'P2',
    marks: 4,
    command: 'Distinguish',
    prompt: {
      en: 'Distinguish between microeconomics and macroeconomics. Give one example of a microeconomic question and one example of a macroeconomic question.',
      ru: 'Различите микроэкономику и макроэкономику. Приведите один пример микроэкономического вопроса и один пример макроэкономического вопроса.',
    },
    markscheme: {
      en: '1 mark: microeconomics studies individual economic agents and specific markets. 1 mark: macroeconomics studies the economy as a whole, using aggregates such as GDP, inflation and unemployment. 1 mark: a valid microeconomic example, for example how a 10% rise in taxi fares changes the number of taxi trips. 1 mark: a valid macroeconomic example, for example how a rise in government spending changes national income and unemployment.',
      ru: '1 балл: микроэкономика изучает отдельных экономических агентов и конкретные рынки. 1 балл: макроэкономика изучает экономику в целом с помощью агрегированных показателей, таких как ВВП, инфляция и безработица. 1 балл: верный микроэкономический пример, например как рост тарифов на такси на 10% меняет число поездок. 1 балл: верный макроэкономический пример, например как рост государственных расходов меняет национальный доход и безработицу.',
    },
    origin: 'original',
    minutes: 5,
  },
];
