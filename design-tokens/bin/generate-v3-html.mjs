// Deliverable E — a self-contained, searchable HTML icon catalog. Inlines every v3
// multicolor SVG plus metadata and a small client-side filter (search + group + size).
// No build step, no network: open reports/plantim-icons-v3-catalog.html in any browser.

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "..", "..");
const v3Dir = path.join(root, "design-tokens/icons/v3");
const outPath = path.join(root, "reports/plantim-icons-v3-catalog.html");

const manifest = JSON.parse(fs.readFileSync(path.join(v3Dir, "index.v3.json"), "utf8"));
const readSvg = (rel) => fs.readFileSync(path.join(v3Dir, rel), "utf8").trim();
const esc = (s) => String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

// Build filter options: "New" groups first, then library categories.
const groups = [...new Set(manifest.icons.filter((i) => i.custom).map((i) => i.group))];
const categories = [...new Set(manifest.icons.filter((i) => !i.custom).map((i) => i.category))].sort();

function card(icon) {
  const filter = icon.custom ? icon.group : icon.category;
  const search = [
    icon.id,
    icon.id.replaceAll(".", " "),
    icon.label ?? "",
    icon.category,
    icon.group ?? "",
    ...(icon.keywords ?? []),
  ].join(" ").toLowerCase();
  return `<button class="card" data-filter="${esc(filter)}" data-new="${icon.custom ? 1 : 0}" data-s="${esc(search)}" data-id="${esc(icon.id)}" title="Click to copy id">
    <span class="ic">${readSvg(icon.files.multicolor)}</span>
    <span class="id">${esc(icon.id)}</span>
    ${icon.label ? `<span class="lb">${esc(icon.label)}</span>` : ""}
  </button>`;
}

const optionGroups = `
  <optgroup label="New for Plantim">
    ${groups.map((g) => `<option value="${esc(g)}">${esc(g)}</option>`).join("")}
  </optgroup>
  <optgroup label="Library (by category)">
    ${categories.map((c) => `<option value="${esc(c)}">${esc(c)}</option>`).join("")}
  </optgroup>`;

const html = `<!doctype html>
<html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1">
<title>Plantim Icons v3 — searchable catalog</title>
<style>
  :root { --sz: 32px; --bg: #f7f9fb; }
  * { box-sizing: border-box; }
  body { margin: 0; font: 14px/1.5 -apple-system, "Segoe UI", Roboto, Helvetica, Arial, sans-serif; color: #1f2933; background: var(--bg); }
  header { position: sticky; top: 0; z-index: 10; background: rgba(247,249,251,.95); backdrop-filter: blur(6px); border-bottom: 1px solid #e4e7eb; padding: 16px 20px 12px; }
  h1 { margin: 0 0 2px; font-size: 20px; letter-spacing: -.3px; }
  .meta { color: #616e7c; font-size: 12.5px; margin-bottom: 12px; }
  .controls { display: flex; flex-wrap: wrap; gap: 10px; align-items: center; }
  input[type=search] { flex: 1 1 320px; min-width: 220px; padding: 9px 12px; border: 1px solid #cbd2d9; border-radius: 9px; font-size: 14px; background: #fff; }
  select, .seg button { padding: 8px 10px; border: 1px solid #cbd2d9; border-radius: 9px; font-size: 13px; background: #fff; color: #1f2933; cursor: pointer; }
  .seg { display: inline-flex; gap: 4px; }
  .seg button.on { background: #2E7D32; color: #fff; border-color: #2E7D32; }
  .count { color: #616e7c; font-size: 12.5px; margin-left: auto; }
  main { padding: 18px 20px 60px; }
  .grid { display: grid; grid-template-columns: repeat(auto-fill, minmax(150px, 1fr)); gap: 10px; }
  .card { display: flex; flex-direction: column; align-items: center; gap: 6px; padding: 16px 8px 10px; background: #fff; border: 1px solid #e9edf1; border-radius: 12px; cursor: pointer; font: inherit; color: inherit; text-align: center; transition: border-color .12s, box-shadow .12s; }
  .card:hover { border-color: #2E7D32; box-shadow: 0 2px 10px rgba(46,125,50,.12); }
  .ic { height: 76px; display: flex; align-items: center; justify-content: center; }
  .ic svg { width: var(--sz); height: var(--sz); }
  .id { font-family: "SF Mono", Menlo, Consolas, monospace; font-size: 11px; color: #3e4c59; word-break: break-all; }
  .lb { font-size: 11.5px; color: #7b8794; }
  .empty { text-align: center; color: #9aa5b1; padding: 60px; }
  .toast { position: fixed; bottom: 22px; left: 50%; transform: translateX(-50%) translateY(20px); background: #1f2933; color: #fff; padding: 9px 16px; border-radius: 20px; font-size: 13px; opacity: 0; transition: all .2s; pointer-events: none; }
  .toast.show { opacity: 1; transform: translateX(-50%) translateY(0); }
</style></head>
<body>
  <header>
    <h1>Plantim Icons — v3</h1>
    <div class="meta">${manifest.count} icons · ${manifest.counts.custom} new for Plantim + ${manifest.counts.derived} library · multi-color · sizes 24/48/72 · v${manifest.version}</div>
    <div class="controls">
      <input id="q" type="search" placeholder="Search icons — try &quot;water&quot;, &quot;today&quot;, &quot;monstera&quot;, &quot;calendar&quot;…" autocomplete="off">
      <select id="grp"><option value="">All groups</option><option value="__new">✦ New for Plantim</option>${optionGroups}</select>
      <span class="seg" id="sz">
        <button data-sz="24px">24</button><button data-sz="32px" class="on">32</button><button data-sz="48px">48</button><button data-sz="72px">72</button>
      </span>
      <span class="count" id="count"></span>
    </div>
  </header>
  <main>
    <div class="grid" id="grid">
      ${manifest.icons.map(card).join("\n      ")}
    </div>
    <div class="empty" id="empty" hidden>No icons match your search.</div>
  </main>
  <div class="toast" id="toast"></div>
<script>
  const grid = document.getElementById('grid');
  const cards = [...grid.children];
  const q = document.getElementById('q');
  const grp = document.getElementById('grp');
  const count = document.getElementById('count');
  const empty = document.getElementById('empty');
  const toast = document.getElementById('toast');
  function apply() {
    const term = q.value.trim().toLowerCase();
    const g = grp.value;
    let n = 0;
    for (const c of cards) {
      const okText = !term || c.dataset.s.includes(term);
      const okGrp = !g || (g === '__new' ? c.dataset.new === '1' : c.dataset.filter === g);
      const show = okText && okGrp;
      c.hidden = !show;
      if (show) n++;
    }
    count.textContent = n + ' shown';
    empty.hidden = n > 0;
  }
  q.addEventListener('input', apply);
  grp.addEventListener('change', apply);
  document.getElementById('sz').addEventListener('click', (e) => {
    const b = e.target.closest('button'); if (!b) return;
    document.documentElement.style.setProperty('--sz', b.dataset.sz);
    [...e.currentTarget.children].forEach((x) => x.classList.toggle('on', x === b));
  });
  let toastT;
  grid.addEventListener('click', (e) => {
    const c = e.target.closest('.card'); if (!c) return;
    const id = c.dataset.id;
    navigator.clipboard?.writeText(id).catch(() => {});
    toast.textContent = 'Copied: ' + id;
    toast.classList.add('show');
    clearTimeout(toastT); toastT = setTimeout(() => toast.classList.remove('show'), 1400);
  });
  apply();
</script>
</body></html>`;

fs.mkdirSync(path.dirname(outPath), { recursive: true });
fs.writeFileSync(outPath, html);
console.log(`Wrote ${path.relative(root, outPath)} (${(Buffer.byteLength(html) / 1024).toFixed(0)} KiB, ${manifest.count} icons, searchable).`);
