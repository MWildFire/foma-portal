import ReadableDiagram from '../readable-diagram';
import { useState } from 'react';
import type { CSSProperties } from 'react';
import type { Lang } from '../../contract/types';

// Water, food and energy nexus: a teaching diagram of dependencies, not a quantitative model.
// Verified figures, each with the year of its value and its source:
// 1. Agriculture share of global freshwater withdrawals: 71% in 2022. FAO AQUASTAT, series ER.H2O.FWAG.ZS
//    (values read from the World Bank API; shown to whole percent, as the series is).
// 2. Hydropower share of global electricity production: 15.2% in 2025. IEA Energy Statistics, series EG.ELC.HYRO.ZS
//    (values read from the World Bank API; shown to one decimal, as the series is).
// 3. Agrifood systems: about 30% of global energy consumption (IRENA and FAO, 2021, PDF p. 15). In developed countries
//    about a quarter of agrifood energy is used in production, 45% in processing and distribution and 30% in retail,
//    preparation and cooking (IRENA and FAO, 2021, PDF p. 9). The global 70% after the farm gate is not in the source.

type Bilingual = { en: string; ru: string };
type Tone = 'water' | 'food' | 'energy';
type LinkId = 'irrigation' | 'runoff' | 'hydro' | 'pumping' | 'processing' | 'competition';
type ShockId = 'drought' | 'energy' | 'biofuel' | 'heatwave';

type NexusLink = {
  id: LinkId;
  x1: number;
  y1: number;
  x2: number;
  y2: number;
  bothWays?: boolean;
  dashed?: boolean;
  lx: number;
  ly: number;
  anchor: 'start' | 'middle' | 'end';
  label: { en: string[]; ru: string[] };
  sentence: Bilingual;
};

type Shock = { id: ShockId; label: Bilingual; links: LinkId[]; effect: Bilingual };

type Badge = { key: string; x: number; y: number; w: number; h: number; tone: Tone; en: string[]; ru: string[] };

const TONE: Record<Tone, { fill: string; stroke: string }> = {
  water: { fill: '#e9f1f8', stroke: '#3b6e95' },
  food: { fill: '#eef6ea', stroke: '#5b8c3a' },
  energy: { fill: '#fdf0e6', stroke: '#c2410c' },
};

const NODES: { key: Tone; x: number; y: number; w: number; h: number; title: Bilingual; sub: Bilingual }[] = [
  { key: 'water', x: 235, y: 20, w: 170, h: 64, title: { en: 'Water', ru: 'Вода' }, sub: { en: 'freshwater', ru: 'пресная вода' } },
  {
    key: 'food',
    x: 20,
    y: 400,
    w: 170,
    h: 64,
    title: { en: 'Food', ru: 'Продовольствие' },
    sub: { en: 'farming and food chains', ru: 'ферма и пищевая цепочка' },
  },
  {
    key: 'energy',
    x: 450,
    y: 400,
    w: 170,
    h: 64,
    title: { en: 'Energy', ru: 'Энергия' },
    sub: { en: 'electricity and fuels', ru: 'электричество и топливо' },
  },
];

// Arrows start at the resource that supplies or affects the other, and end at the one that needs it or is affected.
const LINKS: NexusLink[] = [
  {
    id: 'irrigation',
    x1: 262,
    y1: 84,
    x2: 150,
    y2: 400,
    lx: 210,
    ly: 200,
    anchor: 'end',
    label: { en: ['irrigation, livestock'], ru: ['орошение, скот'] },
    sentence: {
      en: 'Water to food: irrigation and livestock use water.',
      ru: 'Вода → продовольствие: орошение и животноводство используют воду.',
    },
  },
  {
    id: 'runoff',
    x1: 176,
    y1: 400,
    x2: 300,
    y2: 84,
    lx: 225,
    ly: 300,
    anchor: 'start',
    label: { en: ['farm run-off'], ru: ['стоки с ферм'] },
    sentence: {
      en: 'Food to water: run-off of fertiliser, pesticides and farm waste pollutes rivers and groundwater.',
      ru: 'Продовольствие → вода: стоки удобрений, пестицидов и отходов ферм загрязняют реки и грунтовые воды.',
    },
  },
  {
    id: 'hydro',
    x1: 378,
    y1: 84,
    x2: 490,
    y2: 400,
    lx: 429,
    ly: 200,
    anchor: 'start',
    label: { en: ['hydropower, cooling'], ru: ['гидроэнергия, охлаждение'] },
    sentence: {
      en: 'Water to energy: hydropower needs river flow, and thermal and nuclear plants need cooling water.',
      ru: 'Вода → энергия: гидроэнергетике нужен речной сток, а тепловым и атомным станциям нужна охлаждающая вода.',
    },
  },
  {
    id: 'pumping',
    x1: 464,
    y1: 400,
    x2: 340,
    y2: 84,
    lx: 399,
    ly: 260,
    anchor: 'end',
    label: { en: ['pumping, desalination'], ru: ['перекачка, опреснение'] },
    sentence: {
      en: 'Energy to water: pumping, water treatment and desalination use energy.',
      ru: 'Энергия → вода: перекачка, очистка воды и опреснение используют энергию.',
    },
  },
  {
    id: 'processing',
    x1: 450,
    y1: 420,
    x2: 190,
    y2: 420,
    lx: 320,
    ly: 412,
    anchor: 'middle',
    label: { en: ['fertiliser, processing, transport'], ru: ['удобрения, переработка, транспорт'] },
    sentence: {
      en: 'Energy to food: fertiliser production, irrigation pumping, machinery, processing and transport use energy.',
      ru: 'Энергия → продовольствие: производство удобрений, перекачка для орошения, техника, переработка и транспорт используют энергию.',
    },
  },
  {
    id: 'competition',
    x1: 190,
    y1: 446,
    x2: 450,
    y2: 446,
    bothWays: true,
    dashed: true,
    lx: 320,
    ly: 462,
    anchor: 'middle',
    label: {
      en: ['biofuel crops compete', 'with food for land and water'],
      ru: ['биотопливо и продовольствие', 'конкурируют за землю и воду'],
    },
    sentence: {
      en: 'Food and energy compete: biofuel crops take land and water that could grow food.',
      ru: 'Продовольствие и энергия конкурируют: топливные культуры занимают землю и воду, которые могли бы идти на продукты.',
    },
  },
];

const SHOCKS: Shock[] = [
  {
    id: 'drought',
    label: { en: 'Drought in a grain-exporting region', ru: 'Засуха в регионе-экспортёре зерна' },
    links: ['irrigation', 'hydro'],
    effect: {
      en: 'Less irrigation water lowers harvests and grain exports, which can push up food prices elsewhere, and low river flows can cut hydropower output in the same basins.',
      ru: 'Меньше воды для орошения означает меньше урожая и экспорта зерна, что может поднять цены на продукты в других странах, а низкий сток рек может снизить выработку ГЭС в тех же бассейнах.',
    },
  },
  {
    id: 'energy',
    label: { en: 'Energy-price spike', ru: 'Резкий рост цен на энергию' },
    links: ['processing', 'pumping'],
    effect: {
      en: 'Dearer fuel and power raise the cost of fertiliser, transport and processing, so food prices can rise, and pumping and desalination also get dearer, which can lead farmers to irrigate less.',
      ru: 'Более дорогие топливо и электричество повышают стоимость удобрений, перевозок и переработки, поэтому цены на продукты могут расти, а перекачка и опреснение тоже дорожают, и фермеры могут меньше орошать поля.',
    },
  },
  {
    id: 'biofuel',
    label: { en: 'Biofuel mandate', ru: 'Обязательная доля биотоплива' },
    links: ['competition', 'irrigation'],
    effect: {
      en: 'Land and water that could grow food go to fuel crops, so food prices can rise, and irrigating those crops adds to the pressure on river water.',
      ru: 'Земля и вода, которые могли бы идти на продукты, уходят на топливные культуры, поэтому цены на продовольствие могут вырасти, а орошение этих культур добавляет нагрузку на речную воду.',
    },
  },
  {
    id: 'heatwave',
    label: { en: 'Heatwave cuts power plant cooling', ru: 'Жара мешает охлаждению электростанций' },
    links: ['hydro', 'pumping', 'processing'],
    effect: {
      en: 'Hot river water can force thermal and nuclear plants to cut output, so less power is available for pumping irrigation water and for cold storage and processing of food.',
      ru: 'Горячая речная вода может заставить тепловые и атомные станции снизить выработку, поэтому электроэнергии становится меньше для перекачки воды на орошение, холодильного хранения и переработки продуктов.',
    },
  },
];

// Figure badges. The first line is the headline, the last line is the source and year.
const BADGES: Badge[] = [
  {
    key: 'agriculture-water',
    x: 10,
    y: 14,
    w: 218,
    h: 66,
    tone: 'water',
    en: ['71% of freshwater withdrawals', 'go to agriculture', 'FAO AQUASTAT, 2022'],
    ru: ['71% забора пресной воды', 'идёт на сельское хозяйство', 'FAO AQUASTAT, 2022'],
  },
  {
    key: 'hydro-electricity',
    x: 412,
    y: 14,
    w: 218,
    h: 66,
    tone: 'energy',
    en: ['15.2% of world electricity', 'comes from hydropower', 'IEA energy statistics, 2025'],
    ru: ['15,2% мировой электроэнергии', 'приходится на ГЭС', 'статистика IEA, 2025'],
  },
  {
    key: 'agrifood-energy',
    x: 10,
    y: 482,
    w: 218,
    h: 70,
    tone: 'food',
    en: ['Agrifood systems', 'use about 30% of', 'global energy', 'IRENA and FAO, 2021'],
    ru: ['Агропищевые системы', 'потребляют около 30%', 'мировой энергии', 'IRENA и FAO, 2021'],
  },
  {
    key: 'after-farm-gate',
    x: 412,
    y: 482,
    w: 218,
    h: 70,
    tone: 'energy',
    en: ['Developed countries:', 'about a quarter in production;', 'the rest after the farm gate', 'IRENA and FAO, 2021'],
    ru: ['Развитые страны:', 'около четверти — в производстве;', 'остальное — после фермы', 'IRENA и FAO, 2021'],
  },
];

const buttonStyle = (on: boolean): CSSProperties => ({
  padding: '6px 12px',
  borderRadius: 6,
  border: '1px solid #6b7280',
  background: on ? '#1d1d1d' : 'transparent',
  color: on ? '#ffffff' : 'inherit',
  cursor: 'pointer',
  fontSize: 14,
});

export default function WaterFoodEnergy({ lang }: { lang: Lang }) {
  const ru = lang === 'ru';
  const [shock, setShock] = useState<ShockId | null>(null);
  const t = (en: string, rus: string) => (ru ? rus : en);
  const active = SHOCKS.find((s) => s.id === shock) ?? null;
  const linkName = (id: LinkId) => {
    const link = LINKS.find((l) => l.id === id);
    return link ? (ru ? link.label.ru : link.label.en).join(' ') : id;
  };
  const title = t(
    'Water, food and energy nexus: links between the three resources',
    'Связь воды, продовольствия и энергии: связи между тремя ресурсами',
  );

  return (
    <div>
      <p style={{ fontSize: 14, marginTop: 0 }}>
        {t(
          'Each of the three resources is linked to the other two. Arrows show the links, labels name the uses, and the figures are world values with their years.',
          'Каждый из трёх ресурсов связан с двумя другими. Стрелки показывают связи, подписи называют способы использования, а цифры — мировые значения с указанием года.',
        )}
      </p>
      <div style={{ display: 'flex', flexWrap: 'wrap', gap: 8, marginBottom: 12 }}>
        <button type="button" aria-pressed={shock === null} onClick={() => setShock(null)} style={buttonStyle(shock === null)}>
          {t('No shock (normal conditions)', 'Без потрясения (обычные условия)')}
        </button>
        {SHOCKS.map((s) => (
          <button
            key={s.id}
            type="button"
            aria-pressed={shock === s.id}
            onClick={() => setShock(s.id)}
            style={buttonStyle(shock === s.id)}
          >
            {ru ? s.label.ru : s.label.en}
          </button>
        ))}
      </div>
      <p style={{ fontSize: 14, minHeight: 64, marginTop: 0 }} aria-live="polite">
        {active ? (
          <>
            <strong>{t('Highlighted links: ', 'Выделенные связи: ')}</strong>
            {active.links.map(linkName).join('; ')}
            {'. '}
            {ru ? active.effect.ru : active.effect.en}
          </>
        ) : (
          t(
            'Choose a shock to see which links it affects and how.',
            'Выберите потрясение, чтобы увидеть, какие связи оно затрагивает и как.',
          )
        )}
      </p>

      {/* on a phone the diagram scrolls sideways instead of shrinking its labels below readable size */}
      <div style={{ overflowX: 'auto' }}>
      <ReadableDiagram lang={lang}><svg role="img" aria-label={title} viewBox="0 0 640 560" width="100%" style={{ maxWidth: 640, minWidth: 560, display: 'block' }}>
        <defs>
          <marker
            id="wfe-arrow"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="9"
            markerHeight="9"
            markerUnits="userSpaceOnUse"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#4b5563" />
          </marker>
          <marker
            id="wfe-arrow-hot"
            viewBox="0 0 10 10"
            refX="9"
            refY="5"
            markerWidth="9"
            markerHeight="9"
            markerUnits="userSpaceOnUse"
            orient="auto-start-reverse"
          >
            <path d="M0,0 L10,5 L0,10 z" fill="#c2410c" />
          </marker>
        </defs>

        {NODES.map((n) => (
          <g key={n.key}>
            <rect x={n.x} y={n.y} width={n.w} height={n.h} rx={10} fill={TONE[n.key].fill} stroke={TONE[n.key].stroke} strokeWidth={1.5} />
            <text x={n.x + n.w / 2} y={n.y + 28} textAnchor="middle" fontSize={16} fontWeight="bold" fill="#1d1d1d">
              {ru ? n.title.ru : n.title.en}
            </text>
            <text x={n.x + n.w / 2} y={n.y + 46} textAnchor="middle" fontSize={11} fill="#374151">
              {ru ? n.sub.ru : n.sub.en}
            </text>
          </g>
        ))}

        {BADGES.map((b) => {
          const lines = ru ? b.ru : b.en;
          return (
            <g key={b.key}>
              <rect x={b.x} y={b.y} width={b.w} height={b.h} rx={8} fill={TONE[b.tone].fill} stroke={TONE[b.tone].stroke} strokeWidth={1.2} />
              {lines.map((line, i) => {
                const last = i === lines.length - 1;
                return (
                  <text
                    key={i}
                    x={b.x + 10}
                    y={b.y + 18 + i * 15}
                    fontSize={i === 0 ? 12 : last ? 10 : 11}
                    fontWeight={i === 0 ? 'bold' : 'normal'}
                    fill={last ? '#4b5563' : '#1d1d1d'}
                  >
                    {line}
                  </text>
                );
              })}
            </g>
          );
        })}

        {LINKS.map((l) => {
          const hot = active !== null && active.links.includes(l.id);
          const dim = active !== null && !hot;
          const marker = hot ? 'wfe-arrow-hot' : 'wfe-arrow';
          const lines = ru ? l.label.ru : l.label.en;
          return (
            <g key={l.id} opacity={dim ? 0.25 : 1}>
              <line
                x1={l.x1}
                y1={l.y1}
                x2={l.x2}
                y2={l.y2}
                stroke={hot ? '#c2410c' : '#4b5563'}
                strokeWidth={hot ? 3.2 : 1.8}
                strokeDasharray={l.dashed ? '6 4' : undefined}
                markerEnd={`url(#${marker})`}
                markerStart={l.bothWays ? `url(#${marker})` : undefined}
              />
              {lines.map((line, i) => (
                <text
                  key={i}
                  x={l.lx}
                  y={l.ly + i * 14}
                  textAnchor={l.anchor}
                  fontSize={12}
                  fontWeight={hot ? 'bold' : 'normal'}
                  fill={hot ? '#b4480c' : 'currentColor'}
                >
                  {line}
                </text>
              ))}
            </g>
          );
        })}
      </svg></ReadableDiagram>
      </div>

      <p style={{ marginTop: 12, fontSize: 14 }}>
        {t(
          'How to read the arrows: each starts at the resource that supplies or affects the other and points to the resource that needs it or is affected by it. The dashed arrow shows competition, not a flow.',
          'Как читать стрелки: каждая начинается у ресурса, который снабжает другой или влияет на него, и указывает на ресурс, которому он нужен или на который он влияет. Пунктирная стрелка показывает конкуренцию, а не поток.',
        )}
      </p>
      <ul style={{ marginTop: 6, paddingLeft: 18, fontSize: 14 }}>
        {LINKS.map((l) => (
          <li key={l.id}>{ru ? l.sentence.ru : l.sentence.en}</li>
        ))}
      </ul>

      <p style={{ marginTop: 10, fontSize: 13, opacity: 0.8 }}>
        {t(
          'Sources: agriculture share of freshwater withdrawals, 71% in 2022, FAO AQUASTAT (World Bank series ER.H2O.FWAG.ZS). Hydropower share of electricity production, 15.2% in 2025, IEA Energy Statistics (World Bank series EG.ELC.HYRO.ZS). Agrifood systems use about 30% of global energy consumption (IRENA and FAO, 2021, PDF p. 15). In developed countries about a quarter of agrifood energy is used in production and the rest after the farm gate (IRENA and FAO, 2021, PDF p. 9). Values are rounded as the sources show them.',
          'Источники: доля сельского хозяйства в заборе пресной воды, 71% в 2022 г., FAO AQUASTAT (ряд Всемирного банка ER.H2O.FWAG.ZS). Доля гидроэнергетики в производстве электроэнергии, 15,2% в 2025 г., IEA Energy Statistics (ряд Всемирного банка EG.ELC.HYRO.ZS). Агропищевые системы потребляют около 30% мировой энергии (IRENA и FAO, 2021, PDF стр. 15). В развитых странах около четверти энергии агропищевых систем расходуется в производстве, остальное — после фермы (IRENA и FAO, 2021, PDF стр. 9). Значения округлены так же, как в источниках.',
        )}
      </p>

      <p style={{ marginTop: 12 }}>
        <strong>{t('What the diagram does not show', 'Чего не показывает схема')}</strong>
      </p>
      <ul style={{ marginTop: 6, paddingLeft: 18, fontSize: 14 }}>
        <li>
          {t(
            'Local differences. The same link can be strong in one place and weak in another: hydropower is a large share of electricity in some countries and almost none in others, and irrigation needs depend on climate, soil and crops.',
            'Местные различия. Одна и та же связь может быть сильной в одном месте и слабой в другом: в одних странах гидроэнергетика даёт большую долю электричества, в других почти никакой, а потребность в орошении зависит от климата, почв и культур.',
          )}
        </li>
        <li>
          {t(
            'Trade-offs and synergies. Some links compete, such as biofuels and food, while others can help: wind and solar PV need very little water (IEA, Water-Energy Nexus, WEO-2016 special report). Shocks rarely act alone, since a drought or heatwave can hit water, food and energy at the same time.',
            'Компромиссы и синергия. Одни связи конкурируют, например биотопливо и продовольствие, а другие могут помогать: ветровой и солнечной энергетике почти не нужна вода (IEA, Water-Energy Nexus, специальный доклад WEO-2016). Потрясения редко действуют поодиночке: засуха или жара могут одновременно ударить по воде, продовольствию и энергии.',
          )}
        </li>
        <li>
          {t(
            'A framework, not a measurement. The arrows show which resource depends on which. They do not show flows in cubic metres or kilowatt-hours, and the figures measure different things (a share of withdrawals, a share of electricity, a share of energy), so they cannot be added together.',
            'Основа для анализа, а не измерение. Стрелки показывают, какой ресурс от какого зависит. Они не показывают объёмы в кубометрах или киловатт-часах, а цифры измеряют разное (долю забора воды, долю электроэнергии, долю энергии), поэтому их нельзя складывать.',
          )}
        </li>
      </ul>
    </div>
  );
}
