// Build reports/plantim-icons-v4-catalog.html — the self-contained v4 showcase.
// Inline SVGs only, no network, no build step. Presents: hero with live tab-bar
// story (P0 selection animations in CSS), v3 -> v4 before/after strips, and the
// full filterable catalog (search / category / tier / verdict, light/dark).

import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const v4Root = path.join(root, "design-tokens/icons/v4");
const v3Root = path.join(root, "design-tokens/icons/v3");
const outPath = path.join(root, "reports/plantim-icons-v4-catalog.html");

const registry = JSON.parse(fs.readFileSync(path.join(v4Root, "registry.v4.json"), "utf8"));
const index = JSON.parse(fs.readFileSync(path.join(v4Root, "index.v4.json"), "utf8"));
const v3Index = JSON.parse(fs.readFileSync(path.join(v3Root, "index.v3.json"), "utf8"));
const v3ById = new Map(v3Index.icons.map((i) => [i.id, i]));

const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

function svg(rel, size, cls = "") {
  const raw = fs.readFileSync(path.join(v4Root, rel), "utf8").trim();
  return raw
    .replace(/width="\d+"/, `width="${size}"${cls ? ` class="${cls}"` : ""}`)
    .replace(/height="\d+"/, `height="${size}"`)
    .replace(/\n\s*/g, "");
}
function v3svg(id, style, size) {
  const entry = v3ById.get(id);
  if (!entry) return "";
  const rel = entry.files?.[style];
  if (!rel) return "";
  const raw = fs.readFileSync(path.join(v3Root, rel), "utf8").trim();
  return raw
    .replace(/width="\d+"/, `width="${size}"`)
    .replace(/height="\d+"/, `height="${size}"`)
    .replace(/\n\s*/g, "");
}

const icons = index.icons.slice().sort((a, b) => a.category.localeCompare(b.category) || a.id.localeCompare(b.id));
const categories = [...new Set(icons.map((i) => i.category))].sort();
const counts = registry.counts;
const verdictCounts = { keep: 0, refine: 0, redraw: 0, new: 0 };
for (const i of icons) verdictCounts[i.verdict] = (verdictCounts[i.verdict] ?? 0) + 1;

// ---- P0 tab-bar hero ----
const P0_TABS = [
  { id: "navigation.home", label: "Today" },
  { id: "plant.growth", label: "Garden" },
  { id: "plant.sprout", label: "Plants" },
  { id: "calendar.date", label: "Rhythm" },
  { id: "utility.activity", label: "Feed" },
  { id: "utility.message.circle", label: "Chat" },
  { id: "account.user", label: "Profile" },
].filter((t) => registry.icons[t.id]);

function tabButton(t, i) {
  const icon = registry.icons[t.id];
  const anim = icon.animation ?? "";
  const files = index.icons.find((x) => x.id === t.id).files;
  return `<button class="tab${i === 1 ? " active" : ""}" data-anim="${anim}" onclick="selectTab(this)">
    <span class="tab-outline">${svg(files.outline[24], 26)}</span>
    <span class="tab-solid">${svg(files.solid[24], 26)}</span>
    <span class="tab-label">${esc(t.label)}</span>
  </button>`;
}

// ---- catalog cards ----
function card(icon) {
  const reg = registry.icons[icon.id];
  const f = icon.files;
  const before =
    icon.verdict !== "keep" && v3ById.has(reg.provenance?.v3 ?? icon.id)
      ? `<div class="before" title="v3 (before)">
           <span>${v3svg(reg.provenance?.v3 ?? icon.id, "outlined", 22)}</span>
           <span>${v3svg(reg.provenance?.v3 ?? icon.id, "solid", 22)}</span>
           <span class="before-tag">v3</span>
         </div>`
      : "";
  const ramp = [16, 24, 48].map((s) => svg(f.outline[s], s)).join("");
  return `<article class="card" data-id="${icon.id}" data-cat="${icon.category}" data-tier="${icon.tier}" data-verdict="${icon.verdict}" data-search="${esc(icon.id + " " + (reg.keywords ?? []).join(" ") + " " + reg.label)}">
    <div class="variants">
      <figure>${svg(f.outline[24], 40)}<figcaption>outline</figcaption></figure>
      <figure>${svg(f.solid[24], 40)}<figcaption>solid</figcaption></figure>
      <figure>${svg(f.duotone[24], 40)}<figcaption>duotone</figcaption></figure>
      <figure>${svg(f.multicolor[24], 40)}<figcaption>multicolor</figcaption></figure>
    </div>
    <div class="ramp">${ramp}</div>
    ${before}
    <footer>
      <code onclick="copyId(this)" title="Click to copy id">${icon.id}</code>
      <div class="badges"><span class="badge tier-${icon.tier}">${icon.tier}</span><span class="badge v-${icon.verdict}">${icon.verdict}</span></div>
    </footer>
  </article>`;
}

const sections = categories
  .map((cat) => {
    const catIcons = icons.filter((i) => i.category === cat);
    return `<section class="cat" data-cat="${cat}"><h2>${cat} <small>${catIcons.length}</small></h2><div class="grid">${catIcons.map(card).join("\n")}</div></section>`;
  })
  .join("\n");

// before/after showcase strip: the most dramatic redraws
const REWORK_FEATURE = icons.filter((i) => i.verdict === "redraw").slice(0, 12);
const rework = REWORK_FEATURE.map((icon) => {
  const reg = registry.icons[icon.id];
  const v3id = reg.provenance?.v3 ?? icon.id;
  if (!v3ById.has(v3id)) return "";
  return `<div class="ba">
    <div class="ba-side ba-before">${v3svg(v3id, "outlined", 44)}${v3svg(v3id, "solid", 44)}</div>
    <span class="ba-arrow">→</span>
    <div class="ba-side ba-after">${svg(icon.files.outline[24], 44)}${svg(icon.files.solid[24], 44)}</div>
    <code>${icon.id}</code>
  </div>`;
}).join("\n");

const css = `
:root{--bg:#F4F6F9;--panel:#fff;--ink:#1E2833;--muted:#68788B;--line:#E3E8EF;--brand:#2E7D32;--brand-soft:#E4F2E5;--card-shadow:0 1px 2px rgba(16,24,40,.05);}
[data-theme=dark]{--bg:#0E1420;--panel:#171F2E;--ink:#E8EDF4;--muted:#93A1B5;--line:#26334A;--brand:#66BB6A;--brand-soft:#1E3524;--card-shadow:0 1px 2px rgba(0,0,0,.4);}
*{margin:0;padding:0;box-sizing:border-box}
body{font:15px/1.5 -apple-system,'SF Pro Text',Segoe UI,sans-serif;background:var(--bg);color:var(--ink);transition:background .25s}
.wrap{max-width:1200px;margin:0 auto;padding:0 24px 80px}
header.hero{padding:56px 0 28px}
.hero h1{font-size:34px;letter-spacing:-.5px}
.hero h1 b{color:var(--brand)}
.hero p.sub{color:var(--muted);margin-top:6px;max-width:640px}
.stats{display:flex;gap:14px;margin-top:20px;flex-wrap:wrap}
.stat{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:10px 16px;box-shadow:var(--card-shadow)}
.stat b{font-size:20px;display:block}
.stat span{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.4px}
.toggle{position:fixed;top:18px;right:22px;z-index:9;background:var(--panel);border:1px solid var(--line);border-radius:20px;padding:7px 14px;cursor:pointer;color:var(--ink);box-shadow:var(--card-shadow)}
.tabdemo{background:var(--panel);border:1px solid var(--line);border-radius:20px;padding:26px;margin:26px 0 8px;box-shadow:var(--card-shadow)}
.tabdemo h3{font-size:14px;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:16px}
.tabbar{display:flex;justify-content:space-around;background:var(--bg);border:1px solid var(--line);border-radius:18px;padding:10px 6px;max-width:560px}
.tab{position:relative;display:flex;flex-direction:column;align-items:center;gap:3px;background:none;border:0;cursor:pointer;color:var(--muted);font-size:11px;padding:6px 10px;border-radius:12px}
.tab .tab-label{font:inherit;color:inherit}
.tab .tab-solid{display:none}
.tab.active{color:var(--brand)}
.tab.active .tab-outline{display:none}
.tab.active .tab-solid{display:inline}
.tab.active .tab-solid svg{animation:var(--anim,none)}
@keyframes sproutGrow{0%{transform:scale(.85) translateY(1.5px)}60%{transform:scale(1.06)}100%{transform:scale(1)}}
@keyframes gardenSway{0%{transform:rotate(-3deg)}55%{transform:rotate(2deg)}100%{transform:rotate(0)}}
@keyframes datePop{0%{transform:scale(.8)}55%{transform:scale(1.12)}100%{transform:scale(1)}}
@keyframes chatPop{0%{transform:scale(.9)}55%{transform:scale(1.07)}100%{transform:scale(1)}}
@keyframes pulseBeat{0%{transform:scaleX(.65);opacity:.4}100%{transform:scaleX(1);opacity:1}}
@keyframes profileNod{0%{transform:translateY(1.6px)}60%{transform:translateY(-.6px)}100%{transform:translateY(0)}}
@keyframes homeSettle{0%{transform:translateY(-1.8px)}62%{transform:translateY(.5px)}100%{transform:translateY(0)}}
@keyframes addSpin{0%{transform:rotate(-90deg)}100%{transform:rotate(0)}}
@keyframes ctaBloom{0%{transform:scale(.85) rotate(-90deg)}100%{transform:scale(1) rotate(0)}}
@media (prefers-reduced-motion: reduce){.tab.active .tab-solid svg{animation:none!important}}
.rework{margin:34px 0}
.rework h3{font-size:14px;color:var(--muted);text-transform:uppercase;letter-spacing:.6px;margin-bottom:14px}
.rework-row{display:grid;grid-template-columns:repeat(auto-fill,minmax(300px,1fr));gap:12px}
.ba{display:flex;align-items:center;gap:12px;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:12px 16px;box-shadow:var(--card-shadow)}
.ba-side{display:flex;gap:10px;align-items:center}
.ba-before{opacity:.45;filter:saturate(.4)}
.ba-arrow{color:var(--brand);font-size:18px}
.ba code{margin-left:auto;font-size:11px;color:var(--muted)}
.controls{position:sticky;top:0;z-index:8;background:var(--bg);padding:14px 0;display:flex;gap:10px;flex-wrap:wrap;border-bottom:1px solid var(--line)}
.controls input,.controls select{background:var(--panel);border:1px solid var(--line);color:var(--ink);border-radius:10px;padding:8px 12px;font:inherit}
.controls input{flex:1;min-width:220px}
section.cat{margin-top:34px}
section.cat h2{font-size:19px;margin-bottom:14px}
section.cat h2 small{color:var(--muted);font-weight:400;font-size:13px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(250px,1fr));gap:12px}
.card{background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:14px;box-shadow:var(--card-shadow);transition:transform .15s, box-shadow .15s;position:relative}
.card:hover{transform:translateY(-2px);box-shadow:0 6px 18px rgba(16,24,40,.1)}
.variants{display:flex;justify-content:space-between}
.variants figure{display:flex;flex-direction:column;align-items:center;gap:4px}
.variants figcaption{font-size:9.5px;color:var(--muted)}
.ramp{display:flex;align-items:flex-end;gap:10px;margin-top:12px;padding-top:10px;border-top:1px dashed var(--line)}
.before{position:absolute;top:10px;right:10px;display:none;align-items:center;gap:6px;background:var(--bg);border:1px solid var(--line);border-radius:8px;padding:4px 6px;opacity:.55;filter:saturate(.4)}
.card:hover .before{display:flex}
.before-tag{font-size:9px;color:var(--muted)}
.card footer{display:flex;align-items:center;justify-content:space-between;margin-top:12px}
.card footer code{font-size:11.5px;color:var(--muted);cursor:pointer}
.card footer code:hover{color:var(--brand)}
.badges{display:flex;gap:4px}
.badge{font-size:9.5px;padding:2px 7px;border-radius:8px;border:1px solid var(--line);color:var(--muted)}
.badge.tier-P0{background:var(--brand-soft);color:var(--brand);border-color:transparent}
.badge.v-redraw{color:#C2410C;border-color:#FDBA74}
[data-theme=dark] .badge.v-redraw{color:#FDBA74;border-color:#7C2D12}
.badge.v-refine{color:#0369A1;border-color:#7DD3FC}
[data-theme=dark] .badge.v-refine{color:#7DD3FC;border-color:#0C4A6E}
.hidden{display:none!important}
.copied::after{content:"copied";position:absolute;bottom:12px;left:50%;transform:translateX(-50%);background:var(--ink);color:var(--bg);font-size:10px;border-radius:6px;padding:2px 8px}
`;

const js = `
function selectTab(btn){
  for(const t of btn.parentElement.children) t.classList.remove('active');
  btn.classList.add('active');
  const anim=btn.dataset.anim;
  const svg=btn.querySelector('.tab-solid svg');
  if(svg&&anim){svg.style.setProperty('--anim','none');void svg.offsetWidth;svg.style.setProperty('--anim',anim+' .25s cubic-bezier(.2,0,.2,1)');}
}
function copyId(el){navigator.clipboard&&navigator.clipboard.writeText(el.textContent);const c=el.closest('.card');c.classList.add('copied');setTimeout(()=>c.classList.remove('copied'),900);}
function applyFilters(){
  const q=document.getElementById('q').value.toLowerCase();
  const cat=document.getElementById('fcat').value;
  const tier=document.getElementById('ftier').value;
  const verdict=document.getElementById('fverdict').value;
  for(const card of document.querySelectorAll('.card')){
    const ok=(!q||card.dataset.search.toLowerCase().includes(q))&&(!cat||card.dataset.cat===cat)&&(!tier||card.dataset.tier===tier)&&(!verdict||card.dataset.verdict===verdict);
    card.classList.toggle('hidden',!ok);
  }
  for(const sec of document.querySelectorAll('section.cat')){
    sec.classList.toggle('hidden',!sec.querySelector('.card:not(.hidden)'));
  }
}
function toggleTheme(){const b=document.body;b.dataset.theme=b.dataset.theme==='dark'?'':'dark';}
`;

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Plantim Icons v4 — showcase</title>
<style>${css}</style></head>
<body>
<button class="toggle" onclick="toggleTheme()">☾ / ☀</button>
<div class="wrap">
<header class="hero">
  <h1>Plantim Icons <b>v4</b></h1>
  <p class="sub">The designer-grade rework: ${counts.total} semantic icons × 4 variants × 6 optical sizes,
  hand-authored layers with semantic color roles, verified by raster gates and human eyes.</p>
  <div class="stats">
    <div class="stat"><b>${counts.total}</b><span>icons</span></div>
    <div class="stat"><b>${counts.total * 24}</b><span>SVGs</span></div>
    <div class="stat"><b>${counts.P0}</b><span>P0 · animated</span></div>
    <div class="stat"><b>${verdictCounts.redraw}</b><span>redrawn</span></div>
    <div class="stat"><b>${verdictCounts.refine}</b><span>refined</span></div>
    <div class="stat"><b>${verdictCounts.keep}</b><span>kept & regraded</span></div>
  </div>
  <div class="tabdemo">
    <h3>The tab bar, alive — click a tab (active = solid + motion, inactive = outline)</h3>
    <div class="tabbar">${P0_TABS.map(tabButton).join("\n")}</div>
  </div>
  <div class="rework">
    <h3>Before → after (v3 vs v4)</h3>
    <div class="rework-row">${rework}</div>
  </div>
</header>
<div class="controls">
  <input id="q" placeholder="Search ${counts.total} icons…" oninput="applyFilters()">
  <select id="fcat" onchange="applyFilters()"><option value="">All categories</option>${categories.map((c) => `<option>${c}</option>`).join("")}</select>
  <select id="ftier" onchange="applyFilters()"><option value="">All tiers</option><option>P0</option><option>P1</option><option>P2</option></select>
  <select id="fverdict" onchange="applyFilters()"><option value="">All verdicts</option><option>keep</option><option>refine</option><option>redraw</option><option>new</option></select>
</div>
${sections}
</div>
<script>${js}</script>
</body></html>`;

fs.writeFileSync(outPath, html);
console.log(
  `Generated ${path.relative(root, outPath)} (${(html.length / 1024 / 1024).toFixed(2)} MB, ${icons.length} icons).`,
);
