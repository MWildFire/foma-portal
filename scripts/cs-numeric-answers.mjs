// Calculations for answer-bearing questions that contain no executable Python block.
// Read the inputs from the actual English prompt; fail if its supported wording changes.
// Qualitative conclusions remain an editorial check; they are not numerical proof.
const words = { one:1, two:2, three:3, four:4, five:5, six:6, seven:7, eight:8, nine:9, ten:10 };
const number = value => words[value.toLowerCase()] ?? Number(value);
function inputs(q, pattern, text = q.prompt.en) {
  const match = text.match(pattern);
  if (!match) throw new Error(`${q.id}: Input wording changed; review the numerical checker`);
  return match.slice(1).map(number);
}
const fixed = n => n.toFixed(2);
const calculators = {
  'p1-case-q16': q => {
    const [steps, seconds, images] = inputs(q, /uses (\d+) denoising steps[\s\S]*takes ([\d.]+) seconds[\s\S]*generate (\d+) images/);
    return String(steps * seconds * images / 60);
  },
  'a1-1-q06': q => {
    const [stages, ns, count] = inputs(q, /pipeline with (\w+) stages[\s\S]*Each stage takes (\d+) ns\. (\w+) instructions/);
    const serial = stages * ns * count;
    const pipeline = (stages + count - 1) * ns;
    return `${serial} ns without pipelining; ${pipeline} ns with pipelining; speed-up about ${fixed(serial / pipeline)}`;
  },
  'a1-2-q02': q => {
    const [w,h,bits] = inputs(q, /uncompressed bitmap[\s\S]*is (\d+) × (\d+) pixels with (\d+)-bit colour and has no file header/);
    return String(w * h * bits / 8);
  },
  'a1-2-q03': q => {
    const [seconds, khz, bits] = inputs(q, /A (\d+)-second mono[\s\S]*rate of ([\d.]+) kHz with a bit depth of (\d+) bits/);
    return String(seconds * khz * 1000 * bits / 8);
  },
  'a1-2-q04': q => {
    const match = q.prompt.en.match(/8-bit pattern ([01]{8})/);
    if (!match) throw new Error(`${q.id}: Input wording changed`);
    const n = parseInt(match[1], 2);
    return `${n.toString(16).toUpperCase()} = ${n}`;
  },
  'a1-3-q04': q => {
    const bursts = inputs(q, /burst times are (\d+) ms, (\d+) ms and (\d+) ms/);
    if (!q.prompt.en.includes('at time 0') || !q.prompt.en.includes('first-come, first-served scheduling without pre-emption')) throw new Error(`${q.id}: Input wording changed`);
    let elapsed = 0, waiting = 0;
    for (const burst of bursts) { waiting += elapsed; elapsed += burst; }
    return `${fixed(waiting / bursts.length)} ms (${waiting}/${bursts.length})`;
  },
  'a2-1-q02': q => {
    const [a,b,c,d,m1,m2,m3,m4] = inputs(q, /IP address (\d+)\.(\d+)\.(\d+)\.(\d+) and the subnet mask (\d+)\.(\d+)\.(\d+)\.(\d+)/);
    const address=[a,b,c,d], mask=[m1,m2,m3,m4];
    const net=address.map((v,i)=>v & mask[i]);
    const host=address.reduce((acc,v,i)=>acc*256+(v & (255^mask[i])),0);
    const broadcast=net.map((v,i)=>v | (255^mask[i]));
    return `(a) ${net.join('.')}; (b) ${host}; (c) ${broadcast.join('.')}`;
  },
  'a4-2-q01': q => {
    const values=inputs(q, /applicants: (\d+), (\d+), (\d+), (\d+) and (\d+)/);
    const [x]=inputs(q, /applicant with income (\d+)/);
    if (!q.prompt.en.includes('population standard deviation')) throw new Error(`${q.id}: Input wording changed`);
    const mean=values.reduce((a,b)=>a+b,0)/values.length;
    const sd=Math.sqrt(values.reduce((a,b)=>a+(b-mean)**2,0)/values.length);
    return `${fixed((x-Math.min(...values))/(Math.max(...values)-Math.min(...values)))} (min-max); ${fixed((x-mean)/sd)} (z-score)`;
  },
  'a4-3-q01': q => {
    const [flagged,tp,fn]=inputs(q,/flags (\d+) transactions as fraud, and (\d+) of them really are fraud[\s\S]*misses (\d+) transactions/);
    const precision=tp/flagged, recall=tp/(tp+fn);
    return `(a) precision = ${fixed(precision)}; (b) recall = ${fixed(recall)}; (c) F1 score = ${fixed(2*precision*recall/(precision+recall))}; (d) recall`;
  },
  'a4-3-q02': q => {
    const [total,bread,milk,both]=inputs(q,/records (\w+) customer baskets\. Bread is in (\d+) baskets, milk is in (\d+) baskets, and bread and milk are together in (\d+) baskets/);
    const support=both/total, confidence=both/bread, lift=confidence/(milk/total);
    if (!(lift > 1)) throw new Error(`${q.id}: Input wording changed; review the qualitative conclusion`);
    return `(a) support = ${fixed(support)}; (b) confidence = ${fixed(confidence)}; (c) lift = ${fixed(lift)}; (d) positive association: bread and milk are bought together more often than if they were independent`;
  },
  'b1-1-q07': q => {
    const [startTotal,startN,limit,increment]=inputs(q,/Set TOTAL to (\d+) and N to (\d+)[\s\S]*N greater than (\d+)[\s\S]*TOTAL to TOTAL \+ N, then set N to N \+ (\d+)/,q.stimulus.en);
    if (increment<=0) throw new Error(`${q.id}: non-terminating flowchart`);
    let total=startTotal;
    for(let n=startN;n<=limit;n+=increment)total+=n;
    return String(total);
  },
  'b4-1-q10': q => {
    const [buckets,entries]=inputs(q,/has (\d+) buckets and stores (\d+) key–value pairs/);
    return String(entries/buckets);
  },
};
export function numericAnswer(question) {
  const calculate=calculators[question.id];
  if(!calculate) throw new Error(`${question.id}: No numeric checker for answer-bearing question`);
  return calculate(question);
}
