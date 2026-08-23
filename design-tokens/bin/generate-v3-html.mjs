// Deliverable E — the comprehensive, self-contained, searchable HTML icon catalog.
// Shows every v3 icon in all 4 styles (outlined / solid / colored / multicolor) with
// filters (search, group, type, size), an animation previewer, and a light/dark toggle.
// No build step, no network — open reports/plantim-icons-v3-catalog.html in any browser.

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..", "..");
const v3Dir = path.join(root, "design-tokens/icons/v3");
const outPath = path.join(root, "reports/plantim-icons-v3-catalog.html");

const manifest = JSON.parse(fs.readFileSync(path.join(v3Dir, "index.v3.json"), "utf8"));
const animCss = fs.readFileSync(path.join(v3Dir, "animations.css"), "utf8");
const readSvg = (rel) => fs.readFileSync(path.join(v3Dir, rel), "utf8").trim();
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

const STYLES = [
  ["outlined", "Outlined"],
  ["solid", "Solid"],
  ["colored", "Colored"],
  ["multicolor", "Multicolor"],
];
const ANIMS = ["spin", "pulse", "beat", "bounce", "wiggle", "grow", "draw"];

const groups = [...new Set(manifest.icons.filter((i) => i.custom).map((i) => i.group))];
const categories = [...new Set(manifest.icons.filter((i) => !i.custom).map((i) => i.category))].sort();

function card(icon) {
  const filter = icon.custom ? icon.group : icon.category;
  const search = [icon.id, icon.id.replaceAll(".", " "), icon.label ?? "", icon.category, icon.group ?? "", ...(icon.keywords ?? [])]
    .join(" ").toLowerCase();
  const swatches = STYLES.map(([key, name]) =>
    `<div class="t" data-type="${key}"><span class="ic">${readSvg(icon.files[key])}</span><span class="tl">${name}</span></div>`,
  ).join("");
  return `<button class="card" data-filter="${esc(filter)}" data-new="${icon.custom ? 1 : 0}" data-s="${esc(search)}" data-id="${esc(icon.id)}" title="Click to copy id">
    <div class="types">${swatches}</div>
    <div class="id">${esc(icon.id)}</div>
    ${icon.label ? `<div class="lb">${esc(icon.label)}</div>` : ""}
  </button>`;
}

// Animation rules scoped to the grid (hover to preview; "play all" animates everything shown).
const animRules = ANIMS.map((a) => {
  const target = a === "draw"
    ? `.ic > svg :is(path,line,polyline,polygon,circle,rect,ellipse)`
    : `.ic > svg`;
  const props = {
    spin: "animation: pt-spin calc(var(--pt-anim-speed)*1.1) linear infinite;",
    pulse: "animation: pt-pulse calc(var(--pt-anim-speed)*1.3) ease-in-out infinite;",
    beat: "animation: pt-beat calc(var(--pt-anim-speed)*1.1) ease-in-out infinite;",
    bounce: "animation: pt-bounce var(--pt-anim-speed) ease-in-out infinite;",
    wiggle: "animation: pt-wiggle calc(var(--pt-anim-speed)*0.5) ease-in-out infinite;",
    grow: "animation: pt-grow calc(var(--pt-anim-speed)*0.6) ease both;",
    draw: "stroke-dasharray:120; stroke-dashoffset:120; animation: pt-draw calc(var(--pt-anim-speed)*1.4) ease forwards;",
  }[a];
  const extra = a === "draw" ? "" : " transform-box: fill-box; transform-origin: center;";
  return `.grid[data-anim="${a}"] .card:hover ${target}, .grid.play[data-anim="${a}"] ${target} { ${props}${extra} }`;
}).join("\n");

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Plantim Icons v3 — searchable catalog</title>
<style>
${animCss}
  :root { --sz: 30px; --bg: #f7f9fb; --panel: #fff; --ink: #1f2933; --muted: #7b8794; --line: #e9edf1; --icon: #1f2933; }
  body.dark { --bg: #12161b; --panel: #1b2128; --ink: #e6eaef; --muted: #8a97a6; --line: #2a323c; --icon: #e6eaef; }
  * { box-sizing: border-box; }
  body { margin: 0; font: 14px/1.5 -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: var(--ink); background: var(--bg); }
  header { position: sticky; top: 0; z-index: 10; background: color-mix(in srgb, var(--bg) 92%, transparent); backdrop-filter: blur(8px); border-bottom: 1px solid var(--line); padding: 14px 20px 12px; }
  h1 { margin: 0 0 2px; font-size: 20px; letter-spacing: -.3px; }
  .meta { color: var(--muted); font-size: 12.5px; margin-bottom: 12px; }
  .controls { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
  input[type=search] { flex: 1 1 280px; min-width: 200px; padding: 9px 12px; border: 1px solid var(--line); border-radius: 9px; font-size: 14px; background: var(--panel); color: var(--ink); }
  select, .seg button, .btn { padding: 8px 10px; border: 1px solid var(--line); border-radius: 9px; font-size: 13px; background: var(--panel); color: var(--ink); cursor: pointer; }
  .seg { display: inline-flex; gap: 4px; }
  .seg button.on { background: #2E7D32; color: #fff; border-color: #2E7D32; }
  label.chk { display: inline-flex; align-items: center; gap: 6px; font-size: 13px; color: var(--muted); cursor: pointer; }
  .count { color: var(--muted); font-size: 12.5px; margin-left: auto; }
  main { padding: 18px 20px 80px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(210px, 1fr)); gap: 10px; }
  .card { display: flex; flex-direction: column; align-items: center; gap: 8px; padding: 14px 8px 10px; background: var(--panel); border: 1px solid var(--line); border-radius: 12px; cursor: pointer; font: inherit; color: inherit; text-align: center; }
  .card:hover { border-color: #2E7D32; box-shadow: 0 2px 12px rgba(46,125,50,.14); }
  .types { display: flex; gap: 10px; justify-content: center; align-items: flex-end; }
  .t { display: flex; flex-direction: column; align-items: center; gap: 5px; }
  .ic { color: var(--icon); display: flex; align-items: center; justify-content: center; height: calc(var(--sz) + 8px); }
  .ic svg { width: var(--sz); height: var(--sz); }
  .tl { font-size: 9px; color: var(--muted); }
  /* Type focus: show a single style, larger */
  .grid:not([data-type="all"]) .t { display: none; }
  .grid[data-type="outlined"] .t[data-type="outlined"],
  .grid[data-type="solid"] .t[data-type="solid"],
  .grid[data-type="colored"] .t[data-type="colored"],
  .grid[data-type="multicolor"] .t[data-type="multicolor"] { display: flex; }
  .grid:not([data-type="all"]) .ic svg { width: calc(var(--sz) * 1.6); height: calc(var(--sz) * 1.6); }
  .grid:not([data-type="all"]) .tl { display: none; }
  .id { font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 10.5px; color: var(--muted); word-break: break-all; }
  .lb { font-size: 11.5px; color: var(--muted); }
  .empty { text-align: center; color: var(--muted); padding: 60px; }
  .toast { position: fixed; bottom: 22px; left: 50%; transform: translateX(-50%) translateY(20px); background: #1f2933; color: #fff; padding: 9px 16px; border-radius: 20px; font-size: 13px; opacity: 0; transition: all .2s; pointer-events: none; z-index: 20; }
  .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
${animRules}
</style></head>
<body>
  <header>
    <h1>Plantim Icons — v3</h1>
    <div class="meta">${manifest.count} icons · ${manifest.counts.custom} new for Plantim + ${manifest.counts.derived} library · 4 styles each · v${manifest.version} · click any icon to copy its id</div>
    <div class="controls">
      <input id="q" type="search" placeholder="Search — try &quot;water&quot;, &quot;today&quot;, &quot;monstera&quot;, &quot;calendar&quot;…" autocomplete="off">
      <select id="grp"><option value="">All groups</option><option value="__new">✦ New for Plantim</option>
        <optgroup label="New for Plantim">${groups.map((g) => `<option value="${esc(g)}">${esc(g)}</option>`).join("")}</optgroup>
        <optgroup label="Library (category)">${categories.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join("")}</optgroup>
      </select>
      <select id="type">
        <option value="all">All types</option>
        ${STYLES.map(([k, n]) => `<option value="${k}">${n}</option>`).join("")}
      </select>
      <span class="seg" id="sz">
        <button data-sz="24px">24</button><button data-sz="30px" class="on">30</button><button data-sz="48px">48</button><button data-sz="72px">72</button>
      </span>
      <select id="anim" title="Animation — hover an icon to preview, or tick Play all">
        <option value="">No animation</option>
        ${ANIMS.map((a) => `<option value="${a}">${a[0].toUpperCase() + a.slice(1)}</option>`).join("")}
      </select>
      <label class="chk"><input type="checkbox" id="play"> Play all</label>
      <button class="btn" id="theme">◐ Theme</button>
      <span class="count" id="count"></span>
    </div>
  </header>
  <main>
    <div class="grid" id="grid" data-type="all">
      ${manifest.icons.map(card).join("\n      ")}
    </div>
    <div class="empty" id="empty" hidden>No icons match your search.</div>
  </main>
  <div class="toast" id="toast"></div>
<script>
  const grid = document.getElementById('grid');
  const cards = [...grid.children];
  const q = document.getElementById('q'), grp = document.getElementById('grp'), type = document.getElementById('type');
  const anim = document.getElementById('anim'), play = document.getElementById('play');
  const count = document.getElementById('count'), empty = document.getElementById('empty'), toast = document.getElementById('toast');
  function apply() {
    const term = q.value.trim().toLowerCase(), g = grp.value;
    let n = 0;
    for (const c of cards) {
      const okText = !term || c.dataset.s.includes(term);
      const okGrp = !g || (g === '__new' ? c.dataset.new === '1' : c.dataset.filter === g);
      const show = okText && okGrp;
      c.hidden = !show; if (show) n++;
    }
    count.textContent = n + ' shown';
    empty.hidden = n > 0;
  }
  q.addEventListener('input', apply);
  grp.addEventListener('change', apply);
  type.addEventListener('change', () => grid.dataset.type = type.value);
  anim.addEventListener('change', () => { if (anim.value) grid.dataset.anim = anim.value; else grid.removeAttribute('data-anim'); });
  play.addEventListener('change', () => grid.classList.toggle('play', play.checked));
  document.getElementById('sz').addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    document.documentElement.style.setProperty('--sz', b.dataset.sz);
    [...e.currentTarget.children].forEach((x) => x.classList.toggle('on', x === b));
  });
  document.getElementById('theme').addEventListener('click', () => document.body.classList.toggle('dark'));
  let tt;
  grid.addEventListener('click', (e) => {
    const c = e.target.closest('.card'); if (!c) return;
    navigator.clipboard?.writeText(c.dataset.id).catch(() => {});
    toast.textContent = 'Copied: ' + c.dataset.id; toast.classList.add('show');
    clearTimeout(tt); tt = setTimeout(() => toast.classList.remove('show'), 1400);
  });
  apply();
</script>
</body></html>`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, html);
console.log(`Wrote ${path.relative(root, outPath)} (${(Buffer.byteLength(html) / 1024).toFixed(0)} KiB, ${manifest.count} icons × 4 styles, searchable + animated).`);
