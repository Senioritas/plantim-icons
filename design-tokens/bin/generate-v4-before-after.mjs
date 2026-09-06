// Generate reports/plantim-icons-v4-rework-before-after.html
//
// A focused before/after page for the decision-record rework pass. "Before" is
// the v4 geometry the user reviewed (git baseline BEFORE_REF); "after" is the
// current working tree. Only icons whose geometry actually changed are shown.
// Self-contained: SVGs are inlined; decisions autosave to localStorage and can
// be exported (.json / .md) to seed another improvement round.

import fs from "node:fs";
import path from "node:path";
import { execFileSync } from "node:child_process";

const root = path.resolve(import.meta.dirname, "../..");
const v4svg = path.join(root, "design-tokens/icons/v4/svg");
const BEFORE_REF = "d7593c0"; // decision-record catalog state (pre-rework)
const VARIANTS = ["outline", "solid", "duotone", "multicolor"];

const registry = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/v4/registry.v4.json"), "utf8"),
);

// Icons whose @24 outline changed since the baseline = the rework set.
const changed = execFileSync(
  "git",
  ["-C", root, "diff", "--name-only", `${BEFORE_REF}`, "HEAD", "--", "design-tokens/icons/v4/svg/outline/*@24.svg"],
  { encoding: "utf8" },
)
  .split("\n")
  .filter(Boolean)
  .map((p) => p.replace(/.*\/([^/]+)@24\.svg$/, "$1"))
  .sort();

// Also include any not-yet-committed changes in the working tree (in case the
// diff was computed before commit); dedupe.
const ids = [...new Set(changed)].filter((id) => registry.icons[id]);

// The user's decision-record notes (verbatim gist) for the reworked icons.
const NOTES = {
  "health.healthy": "Status must read by COLOUR — the user should understand their plant's health from the icon's colour (green/amber/red).",
  "health.attention": "Same colour-coded status system as health.healthy — amber = needs attention.",
  "health.critical": "Same colour-coded status system — red = critical.",
  "plant.add": "Looked like a cappuccino cup.",
  "plant.remove": "Do the same as plant.add — they are relational.",
  "plant.related": "Should read as two related plants/leaves.",
  "plant.seedling": "Clearer seedling emerging from a seed.",
  "plant.thriving": "Plant that is clearly thriving.",
  "plant.watering.can": "A watering can with water — no stray marks.",
  "plant.growth": "Work on your leaves.",
  "plant.sprout": "Leaves should read as leaves (midrib veins).",
  "stage.growing": "Clear mid-growth stage.",
  "stage.mature": "Was a lollipop — should read as a mature tree.",
  "garden.gloves": "Read clearly as gardening gloves.",
  "garden.hoe": "Read clearly as a hoe.",
  "garden.hose": "It looks like a key right now.",
  "garden.rake": "Read clearly as a rake.",
  "garden.spade": "Make the spade part a bit smaller than the handle.",
  "garden.sprinkler": "Add a water symbol as well.",
  "garden.trowel": "Read clearly as a trowel/scoop.",
  "genus.cactus": "So thin.",
  "genus.ficus": "Read clearly as a ficus.",
  "genus.orchid": "Read clearly as an orchid.",
  "genus.palm": "Read clearly as a palm.",
  "genus.succulent": "Read clearly as a succulent rosette.",
  "nav.today.leaf": "Leaf should look more like a leaf.",
  "nav.plant.leaf": "Clean leaf.",
  "nav.calendar.leaf": "The leaf seemed off.",
  "nav.chat.leaf": "The leaf seemed off.",
  "nav.chat.dots": "Dots should be better so we can animate them.",
  "nav.feed.cards": "The card in the front should have a BG so it isn't a transparent card.",
  "utility.brain": "Make sure it's vertical rather than horizontal.",
  "utility.hand": "Doesn't look like a hand — fingers are too small.",
  "utility.moon.star": "Better star.",
  "utility.move": "Make it read as a clear move control.",
  "family.apiaceae": "Hard to recognise on the solid version, especially below 32px.",
  "family.araceae": "Hard to recognise on the solid version, especially below 32px.",
  "family.begoniaceae": "Hard to recognise on the solid version, especially below 32px.",
  "family.bromeliaceae": "Hard to recognise on the solid version, especially below 32px.",
  "family.nephrolepidaceae": "Hard to recognise on the solid version, especially below 32px.",
  "family.piperaceae": "Hard to recognise on the solid version, especially below 32px.",
  "family.polypodiaceae": "Hard to recognise on the solid version, especially below 32px.",
};

function afterSvg(id, variant, size) {
  const p = path.join(v4svg, variant, `${id}@${size}.svg`);
  return fs.existsSync(p) ? fs.readFileSync(p, "utf8") : "";
}
function beforeSvg(id, variant, size) {
  const rel = `design-tokens/icons/v4/svg/${variant}/${id}@${size}.svg`;
  try {
    return execFileSync("git", ["-C", root, "show", `${BEFORE_REF}:${rel}`], { encoding: "utf8" });
  } catch {
    return ""; // not present at baseline
  }
}
// Strip width/height so CSS controls sizing; keep viewBox.
const sized = (svg) =>
  svg
    ? svg.replace(/<svg([^>]*?)\swidth="\d+"\sheight="\d+"/, "<svg$1").replace(/<svg /, '<svg class="ic" ')
    : '<span class="missing">—</span>';

const esc = (s) => s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;");

function variantCell(label, svg) {
  return `<figure class="vc"><div class="box">${sized(svg)}</div><figcaption>${label}</figcaption></figure>`;
}

function card(id) {
  const meta = registry.icons[id];
  const verdict = meta.verdict || "rework";
  const label = meta.label || id;
  const note = NOTES[id];
  const beforeRow = VARIANTS.map((v) => variantCell(v, beforeSvg(id, v, 24))).join("");
  const afterRow = VARIANTS.map((v) => variantCell(v, afterSvg(id, v, 24))).join("");
  // after size ramp (small-size legibility check)
  const ramp = [16, 20, 24, 32]
    .map((s) => `<div class="rp" style="width:${s}px;height:${s}px">${sized(afterSvg(id, "solid", s))}</div>`)
    .join("");
  return `<article class="card" data-id="${esc(id)}" data-cat="${esc(meta.category || "")}">
  <header class="ch">
    <div><code class="id">${esc(id)}</code> <span class="lb">${esc(label)}</span></div>
    <span class="vd vd-${esc(verdict)}">${esc(verdict)}</span>
  </header>
  ${note ? `<p class="note">“${esc(note)}”</p>` : ""}
  <div class="ba">
    <section class="side before"><h4>before <span>· you reviewed</span></h4><div class="row">${beforeRow}</div></section>
    <div class="arrow" aria-hidden="true">→</div>
    <section class="side after"><h4>after <span>· reworked</span></h4><div class="row">${afterRow}</div></section>
  </div>
  <div class="rampwrap"><span class="rl">solid 16 → 32</span><div class="ramp">${ramp}</div></div>
  <div class="review">
    <div class="pills">
      <button class="pill" data-s="approve">✓ approve</button>
      <button class="pill" data-s="improve">✎ improve</button>
      <button class="pill" data-s="redraw">⟳ redraw</button>
    </div>
    <textarea class="tn" placeholder="notes for the next round…"></textarea>
  </div>
</article>`;
}

const cards = ids.map(card).join("\n");

const html = `<!doctype html>
<html lang="en" data-theme="light">
<head>
<meta charset="utf-8"/>
<meta name="viewport" content="width=device-width, initial-scale=1"/>
<title>Plantim Icons v4 — rework · before / after</title>
<style>
  :root{
    --bg:#f4f6fb; --panel:#fff; --ink:#1f2937; --mut:#64748b; --line:#e5e9f2;
    --before:#94a3b8; --afterbg:#f0fdf4; --accent:#16a34a; --shadow:0 1px 3px rgba(15,23,42,.08);
  }
  html[data-theme="dark"]{
    --bg:#0b1220; --panel:#111a2e; --ink:#e7ecf5; --mut:#8aa0c0; --line:#1e293b;
    --before:#64748b; --afterbg:#0e2417; --accent:#4ade80; --shadow:0 1px 3px rgba(0,0,0,.4);
  }
  *{box-sizing:border-box}
  body{margin:0;background:var(--bg);color:var(--ink);font:15px/1.5 -apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,Helvetica,Arial,sans-serif}
  .wrap{max-width:1200px;margin:0 auto;padding:32px 24px 96px}
  h1{font-size:30px;margin:0 0 6px} h1 .v{color:var(--accent)}
  .sub{color:var(--mut);margin:0 0 20px;max-width:70ch}
  .bar{display:flex;gap:10px;flex-wrap:wrap;align-items:center;margin:18px 0 26px}
  .bar input,.bar select,.bar button{font:inherit;padding:9px 12px;border:1px solid var(--line);border-radius:10px;background:var(--panel);color:var(--ink)}
  .bar button{cursor:pointer}
  .bar .grow{flex:1;min-width:180px}
  .bar .exp{background:var(--accent);color:#fff;border-color:transparent;font-weight:600}
  .count{color:var(--mut);margin-left:auto}
  .card{background:var(--panel);border:1px solid var(--line);border-radius:16px;box-shadow:var(--shadow);padding:18px 18px 14px;margin-bottom:18px}
  .ch{display:flex;justify-content:space-between;align-items:center;gap:10px}
  .id{font-size:14px;background:var(--bg);padding:2px 7px;border-radius:6px}
  .lb{color:var(--mut);font-size:13px}
  .vd{font-size:11px;font-weight:700;text-transform:uppercase;letter-spacing:.04em;padding:3px 9px;border-radius:999px;border:1px solid var(--line)}
  .vd-redraw{color:#b91c1c;border-color:#fecaca;background:#fef2f2}
  .vd-refine{color:#1d4ed8;border-color:#bfdbfe;background:#eff6ff}
  .vd-keep{color:#166534;border-color:#bbf7d0;background:#f0fdf4}
  html[data-theme="dark"] .vd-redraw{background:#2a1414;border-color:#7f1d1d}
  html[data-theme="dark"] .vd-refine{background:#0e1e3a;border-color:#1e3a8a}
  html[data-theme="dark"] .vd-keep{background:#0e2417;border-color:#14532d}
  .note{margin:10px 0 4px;color:var(--ink);font-style:italic;border-left:3px solid var(--accent);padding:4px 0 4px 12px;background:linear-gradient(90deg,rgba(22,163,74,.06),transparent)}
  .ba{display:grid;grid-template-columns:1fr auto 1fr;gap:14px;align-items:stretch;margin-top:12px}
  .side{border:1px solid var(--line);border-radius:12px;padding:10px}
  .side.before{background:transparent}
  .side.after{background:var(--afterbg)}
  .side h4{margin:0 0 8px;font-size:11px;text-transform:uppercase;letter-spacing:.06em;color:var(--mut)}
  .side h4 span{font-weight:400;text-transform:none;letter-spacing:0}
  .row{display:grid;grid-template-columns:repeat(4,1fr);gap:8px}
  .vc{margin:0;text-align:center}
  .box{display:flex;align-items:center;justify-content:center;height:56px;background:var(--panel);border:1px solid var(--line);border-radius:9px}
  .side.before .box{background:transparent}
  .vc figcaption{font-size:10px;color:var(--mut);margin-top:4px}
  .ic{width:34px;height:34px}
  .side.before .ic{color:var(--before)}
  .arrow{display:flex;align-items:center;font-size:26px;color:var(--accent);font-weight:700}
  .missing{color:var(--mut)}
  .rampwrap{display:flex;align-items:center;gap:12px;margin:12px 2px 2px}
  .rl{font-size:11px;color:var(--mut);text-transform:uppercase;letter-spacing:.05em}
  .ramp{display:flex;align-items:flex-end;gap:12px}
  .rp{display:flex;align-items:center;justify-content:center;color:var(--ink)}
  .rp .ic{width:100%;height:100%}
  .review{display:flex;gap:12px;align-items:flex-start;margin-top:12px;flex-wrap:wrap}
  .pills{display:flex;gap:6px}
  .pill{cursor:pointer;font:inherit;font-size:12px;padding:6px 10px;border-radius:999px;border:1px solid var(--line);background:var(--panel);color:var(--ink)}
  .pill.on[data-s="approve"]{background:#16a34a;color:#fff;border-color:transparent}
  .pill.on[data-s="improve"]{background:#2563eb;color:#fff;border-color:transparent}
  .pill.on[data-s="redraw"]{background:#dc2626;color:#fff;border-color:transparent}
  .tn{flex:1;min-width:220px;min-height:38px;resize:vertical;font:inherit;font-size:13px;padding:8px 10px;border:1px solid var(--line);border-radius:10px;background:var(--bg);color:var(--ink)}
  .toggle{position:fixed;top:16px;right:16px;cursor:pointer;border:1px solid var(--line);background:var(--panel);color:var(--ink);border-radius:999px;padding:8px 12px}
  .hidden{display:none}
</style>
</head>
<body>
<button class="toggle" onclick="toggleTheme()">◐ theme</button>
<div class="wrap">
  <h1>Plantim Icons <span class="v">v4</span> — rework · before / after</h1>
  <p class="sub">Every icon changed from your decision-record review. <b>Before</b> is the version you saw and annotated; <b>after</b> is the reworked geometry. Your original note is quoted on each card. Set a decision and add notes for the next round, then export — the same workflow as the main catalog.</p>
  <div class="bar">
    <input class="grow" id="q" placeholder="Filter ${ids.length} reworked icons…"/>
    <select id="cat"><option value="">All categories</option></select>
    <select id="dec"><option value="">Any decision</option><option value="approve">approved</option><option value="improve">improve</option><option value="redraw">redraw</option><option value="none">undecided</option></select>
    <button class="exp" onclick="exportMD()">Export .md</button>
    <button class="exp" onclick="exportJSON()">Export .json</button>
    <button onclick="resetAll()">Reset</button>
    <span class="count" id="count"></span>
  </div>
  <div id="grid">
${cards}
  </div>
</div>
<script>
const KEY="plantim-v4-rework-ba-v1";
const store=JSON.parse(localStorage.getItem(KEY)||"{}");
const cards=[...document.querySelectorAll(".card")];
function save(){localStorage.setItem(KEY,JSON.stringify(store));updateCount();}
function updateCount(){
  const dec=Object.values(store).filter(x=>x&&x.status).length;
  document.getElementById("count").textContent=dec+" / "+cards.length+" decided";
}
// hydrate
const cats=new Set();
for(const c of cards){
  const id=c.dataset.id; cats.add(c.dataset.cat);
  const s=store[id]||{};
  if(s.status){const b=c.querySelector('.pill[data-s="'+s.status+'"]');if(b)b.classList.add("on");}
  if(s.note){c.querySelector(".tn").value=s.note;}
  c.querySelectorAll(".pill").forEach(p=>p.addEventListener("click",()=>{
    const cur=(store[id]||{}).status;
    const ns=p.dataset.s;
    c.querySelectorAll(".pill").forEach(x=>x.classList.remove("on"));
    if(cur===ns){store[id]={...(store[id]||{}),status:null};}
    else{store[id]={...(store[id]||{}),status:ns};p.classList.add("on");}
    save();
  }));
  c.querySelector(".tn").addEventListener("input",e=>{store[id]={...(store[id]||{}),note:e.target.value};save();});
}
const catSel=document.getElementById("cat");
[...cats].filter(Boolean).sort().forEach(c=>{const o=document.createElement("option");o.value=c;o.textContent=c;catSel.appendChild(o);});
function applyFilters(){
  const q=document.getElementById("q").value.toLowerCase();
  const cat=catSel.value, dec=document.getElementById("dec").value;
  for(const c of cards){
    const id=c.dataset.id; const s=store[id]||{};
    let ok=id.toLowerCase().includes(q);
    if(ok&&cat) ok=c.dataset.cat===cat;
    if(ok&&dec){ ok = dec==="none" ? !s.status : s.status===dec; }
    c.classList.toggle("hidden",!ok);
  }
}
["q","cat","dec"].forEach(i=>document.getElementById(i).addEventListener("input",applyFilters));
function toggleTheme(){const h=document.documentElement;h.dataset.theme=h.dataset.theme==="dark"?"light":"dark";}
function resetAll(){if(!confirm("Clear all decisions & notes on this page?"))return;for(const k in store)delete store[k];localStorage.removeItem(KEY);location.reload();}
function exportJSON(){
  const out={exported:new Date().toISOString(),page:"v4-rework-before-after",decisions:store};
  dl("plantim-v4-rework-decisions.json",JSON.stringify(out,null,2));
}
function exportMD(){
  let md="# Plantim Icons v4 — rework review\\n\\nExported: "+new Date().toISOString()+"\\n\\n";
  const groups={approve:[],improve:[],redraw:[],none:[]};
  for(const c of cards){const id=c.dataset.id;const s=store[id]||{};(groups[s.status||"none"]).push({id,note:s.note});}
  for(const g of ["redraw","improve","approve","none"]){
    if(!groups[g].length)continue;
    md+="## "+g+" ("+groups[g].length+")\\n\\n";
    for(const it of groups[g]){md+="- **"+it.id+"**"+(it.note?" — "+it.note:"")+"\\n";}
    md+="\\n";
  }
  dl("plantim-v4-rework-review.md",md);
}
function dl(name,text){const b=new Blob([text],{type:"text/plain"});const a=document.createElement("a");a.href=URL.createObjectURL(b);a.download=name;a.click();}
updateCount();
</script>
</body>
</html>
`;

const outPath = path.join(root, "reports/plantim-icons-v4-rework-before-after.html");
fs.writeFileSync(outPath, html);
const kb = (Buffer.byteLength(html) / 1024).toFixed(0);
console.log(`Generated ${path.relative(root, outPath)} (${kb} KB, ${ids.length} reworked icons, before=${BEFORE_REF}).`);
