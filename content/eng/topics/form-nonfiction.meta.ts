import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'form-nonfiction',
  subject: 'eng',
  code: 'F.NFI',
  title: { en: 'Non-fiction and speeches: argument and rhetoric', ru: 'Нон-фикшн и речи: аргументация и риторика' },
  papers: ['P1', 'P2'],
  order: 9,
  minutes: 40,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the three appeals (ethos, pathos, logos) and find each one in a speech', ru: 'Могу назвать три апелляции (этос, пафос, логос) и найти каждую в речи' },
    { en: 'I can say who the audience is and what the speaker wants that audience to do or feel', ru: 'Могу назвать аудиторию и то, что оратор хочет, чтобы она сделала или почувствовала' },
    { en: 'I can explain what a rhetorical question, anaphora or antithesis does to the listener', ru: 'Могу объяснить, что риторический вопрос, анафора или антитеза делают со слушателем' },
    { en: 'I can trace how an argument is built and point to the place where it turns', ru: 'Могу проследить, как построен аргумент, и указать место, где он меняет направление' },
  ],
  termIds: ['ethos', 'pathos', 'logos', 'rhetorical-question', 'anaphora', 'antithesis', 'tricolon', 'direct-address', 'audience', 'purpose', 'rhetoric', 'argument', 'epistrophe', 'polysyndeton', 'asyndeton', 'chiasmus', 'satire', 'anecdote'],
  questionIds: ['p1-douglass-fourth', 'p1-wollstonecraft-rights', 'chk-form-nonfiction-1', 'chk-form-nonfiction-2'],
  sources: [{ kind: 'web', title: 'Frederick Douglass, 1852 pamphlet, printed pp.14–15', url: 'https://en.wikisource.org/wiki/What_to_the_Slave_Is_the_Fourth_of_July%3F', locator: 'Conditional gratitude paragraph and But such is not the state of the case; printed p.15 / scan17' }, { kind: 'web', title: 'Aristotle, Rhetoric, Book I, part 2; Rhys Roberts translation', url: 'https://classics.mit.edu/Aristotle/rhetoric.1.i.html', locator: 'Three modes of persuasion; proof or apparent proof' }, { kind: 'web', title: 'М.Л.Гаспаров, Антитеза, Большая российская энциклопедия, т.2 (2005), с.58', url: 'https://old.bigenc.ru/literature/text/696897' }, { kind: 'web', title: 'King James Bible, Isaiah35:6', url: 'https://en.wikisource.org/wiki/Bible_(King_James)/Isaiah#Chapter_35', locator: '35:6: lame person leaping and mute tongue singing; Douglass allusion' }, { kind: 'own', title: 'Own examples and commentary' }],
};

export default topic;
