import type { TopicMeta } from '../../../src/contract/types';

const topic: TopicMeta = {
  id: 'form-poetry',
  subject: 'eng',
  code: 'F.POE',
  title: { en: 'Poetry: sound, rhythm, form and voice', ru: 'Поэзия: звук, ритм, форма и голос' },
  papers: ['P1', 'P2'],
  order: 6,
  minutes: 50,
  priority: 1,
  inMockScope: 'yes',
  outcomes: [
    { en: 'I can name the rhyme scheme and the metre of a poem, and show both in one line', ru: 'Могу назвать схему рифмовки и метр стихотворения и показать их на одной строке' },
    { en: 'I can explain what an enjambment or a caesura does to the pace of a line', ru: 'Могу объяснить, что анжамбеман или цезура делают с темпом строки' },
    { en: 'I can tell a quatrain, a couplet, a stanza and a sonnet apart by length and rhyme', ru: 'Могу отличить четверостишие, двустишие, строфу и сонет по длине и рифме' },
    { en: 'I can say who speaks in a poem and how the voice changes the mood', ru: 'Могу сказать, кто говорит в стихотворении, и как голос меняет настроение' },
    { en: 'I can link a sound device to a meaning, not only name it', ru: 'Могу связать звуковой приём со смыслом, а не только назвать его' },
  ],
  termIds: ['alliteration', 'onomatopoeia', 'metre', 'iamb', 'enjambment', 'stanza', 'rhyme-scheme', 'quatrain', 'couplet', 'sonnet', 'volta', 'ballad', 'conceit', 'lyric-persona', 'ode', 'elegy', 'lyric', 'dramatic-monologue', 'sestet', 'free-verse', 'blank-verse', 'rhyme', 'slant-rhyme', 'internal-rhyme', 'refrain'],
  questionIds: ['p1-dickinson-fly', 'p1-keats-nightingale', 'p1-hardy-thrush', 'p1-owen-dulce', 'p1-hopkins-pied', 'chk-form-poetry-1', 'chk-form-poetry-2'],
  sources: [
    { kind: 'web', title: 'А. П. Квятковский, Поэтический словарь (1966): selected sound and caesura definitions', url: 'https://kslipl.pnu.edu.ua/wp-content/uploads/sites/108/2020/02/Квятковский-А.-Поэтический-словарь-1966.pdf', locator: 'Printed p.18 alliteration opening; pp.50 and 53 assonance definitions; p.331 caesura opening. Russian and English scope distinguished.' },
    { kind: 'web', title: 'Квятковский, «Внутренняя рифма» (1966), p.80', url: 'https://feb-web.ru/feb/kps/kps-abc/kps/kps-0801.htm?cmd=p&istext=1', locator: 'Internal words may rhyme with line endings or with each other' },
    { kind: 'web', title: 'БРЭ, «Кончетто», т.15 (2010), p.182', url: 'https://old.bigenc.ru/literature/text/2094508', locator: 'Unusual intellectual comparison; concise example means length is not a threshold' },
    { kind: 'web', title: 'И. Б. Роднянская, «Лирический герой», КЛЭ, т.4 (1967), pp.213–214', url: 'https://feb-web.ru/feb/kle/kle-abc/ke4/ke4-2131.htm?cmd=p&istext=1', locator: 'Constructed artistic self versus biographical identity; specific theoretical use distinguished from speaker' },
    { kind: 'web', title: 'Poetry Foundation, glossary: Conceit and Lyric', url: 'https://www.poetryfoundation.org/education/glossary/conceit', locator: 'Conceit definition and examples; Lyric separate entry is a common short-poem convention' },{ kind: 'web', title: 'Thomas Hardy, The Darkling Thrush, Poems of the Past and the Present, Macmillan1919, Gutenberg3168', url: 'https://www.gutenberg.org/cache/epub/3168/pg3168.txt', locator: 'All32lines; third stanza17–24 and finalcouldthink/Iwasunaware' }, { kind: 'web', title: 'Cambridge Dictionary, among and evensong, UK pronunciations', url: 'https://dictionary.cambridge.org/pronunciation/english/evensong', locator: 'among /əˈmʌŋ/; evensong /ˈiːvənˌsɒŋ/; accent-specific comparison' }, { kind: 'web', title: 'Poetry Foundation, Learning the Poetic Line', url: 'https://www.poetryfoundation.org/articles/70144/learning-the-poetic-line', locator: 'Enjambment/end-stopping, grammatical boundaries and varied effects' }, { kind: 'web', title: 'Г.Шенгели, Белый стих, Словарь литературных терминов, т.1 (1925)', url: 'https://feb-web.ru/feb/slt/abc/lt1/lt1-1011.htm?cmd=p&istext=1', locator: 'Стб.101–104; Russian term broader than English iambic-pentameter usage' }, { kind: 'web', title: 'Shakespeare, Hamlet3.1, Folger text', url: 'https://www.folger.edu/explore/shakespeares-works/hamlet/read/3/1/', locator: 'Line64 / through-line1762, additional unstressed ending of question; scansion is author analysis' }, { kind: 'own', title: 'Own examples and commentary' }],
};

export default topic;
