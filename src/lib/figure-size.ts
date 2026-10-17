// SVGs are static authored assets. Preserve their coordinate width and at least 11px explicit labels.
export function figureDisplayWidth(svg: string): number {
 const view = svg.match(/viewBox=["']\s*[-\d.]+\s+[-\d.]+\s+([\d.]+)\s+[\d.]+\s*["']/i);
 const width = Number(view?.[1] ?? svg.match(/<svg[^>]*\bwidth=["']([\d.]+)/i)?.[1] ?? 560);
 const fonts = [...svg.matchAll(/font-size\s*(?:=\s*["']|:\s*)([\d.]+)/gi)].map(m=>Number(m[1])).filter(n=>n>0);
 const minFont = fonts.length ? Math.min(...fonts) : 11;
 return Math.ceil(Math.max(560, width * Math.max(1,11/minFont)));
}
