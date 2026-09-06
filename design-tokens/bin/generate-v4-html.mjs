// Build reports/plantim-icons-v4-catalog.html — the self-contained v4 showcase
// AND decision-record tool. Inline SVGs only, no network, no build step, works
// from file://. Presents: hero with live tab-bar story, v3->v4 before/after,
// the full filterable catalog, and per-icon decision controls (status + notes)
// with a focused one-by-one review drawer, localStorage autosave, and JSON +
// Markdown export/import so decisions can be handed back for another pass.

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

function svg(rel, size) {
  const raw = fs.readFileSync(path.join(v4Root, rel), "utf8").trim();
  return raw
    .replace(/width="\d+"/, `width="${size}"`)
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

const DEC = [
  ["approve", "✓", "Approve"],
  ["improve", "✎", "Improve"],
  ["redraw", "⟳", "Redraw"],
  ["reject", "✕", "Reject"],
];

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
  const pills = DEC.map(
    ([s, g, label]) =>
      `<button class="pill-dec pill-${s}" data-s="${s}" title="${label}" onclick="setStatus('${icon.id}','${s}')">${g}</button>`,
  ).join("");
  return `<article class="card" data-id="${icon.id}" data-cat="${icon.category}" data-tier="${icon.tier}" data-verdict="${icon.verdict}" data-status="" data-search="${esc(icon.id + " " + (reg.keywords ?? []).join(" ") + " " + reg.label)}">
    <div class="variants" onclick="openReview('${icon.id}')" title="Click to review">
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
    <div class="decide" onclick="event.stopPropagation()">
      <div class="pills">${pills}<button class="pill-clear" title="Clear" onclick="setStatus('${icon.id}','')">↺</button>
        <button class="pill-review" title="Review this icon" onclick="openReview('${icon.id}')">⤢</button></div>
      <textarea class="note" rows="2" placeholder="notes · ask for improvement…" oninput="setNote('${icon.id}', this.value)"></textarea>
    </div>
  </article>`;
}

const sections = categories
  .map((cat) => {
    const catIcons = icons.filter((i) => i.category === cat);
    return `<section class="cat" data-cat="${cat}"><h2>${cat} <small>${catIcons.length}</small></h2><div class="grid">${catIcons.map(card).join("\n")}</div></section>`;
  })
  .join("\n");

const REWORK_FEATURE = icons.filter((i) => i.verdict === "redraw").slice(0, 12);
const rework = REWORK_FEATURE.map((icon) => {
  const reg = registry.icons[icon.id];
  const v3id = reg.provenance?.v3 ?? icon.id;
  if (!v3ById.has(v3id)) return "";
  return `<div class="ba" onclick="openReview('${icon.id}')">
    <div class="ba-side ba-before">${v3svg(v3id, "outlined", 44)}${v3svg(v3id, "solid", 44)}</div>
    <span class="ba-arrow">→</span>
    <div class="ba-side ba-after">${svg(icon.files.outline[24], 44)}${svg(icon.files.solid[24], 44)}</div>
    <code>${icon.id}</code>
  </div>`;
}).join("\n");

const css = `
:root{--bg:#F4F6F9;--panel:#fff;--ink:#1E2833;--muted:#68788B;--line:#E3E8EF;--brand:#2E7D32;--brand-soft:#E4F2E5;--card-shadow:0 1px 2px rgba(16,24,40,.05);--approve:#2E7D32;--improve:#F9A825;--redraw:#1E88E5;--reject:#E53935;}
[data-theme=dark]{--bg:#0E1420;--panel:#171F2E;--ink:#E8EDF4;--muted:#93A1B5;--line:#26334A;--brand:#66BB6A;--brand-soft:#1E3524;--card-shadow:0 1px 2px rgba(0,0,0,.4);}
*{margin:0;padding:0;box-sizing:border-box}
body{font:15px/1.5 -apple-system,'SF Pro Text',Segoe UI,sans-serif;background:var(--bg);color:var(--ink);transition:background .25s}
.wrap{max-width:1200px;margin:0 auto;padding:0 24px 120px}
header.hero{padding:56px 0 20px}
.hero h1{font-size:34px;letter-spacing:-.5px}
.hero h1 b{color:var(--brand)}
.hero p.sub{color:var(--muted);margin-top:6px;max-width:680px}
.stats{display:flex;gap:14px;margin-top:20px;flex-wrap:wrap}
.stat{background:var(--panel);border:1px solid var(--line);border-radius:12px;padding:10px 16px;box-shadow:var(--card-shadow)}
.stat b{font-size:20px;display:block}
.stat span{color:var(--muted);font-size:12px;text-transform:uppercase;letter-spacing:.4px}
.toggle{position:fixed;top:18px;right:22px;z-index:20;background:var(--panel);border:1px solid var(--line);border-radius:20px;padding:7px 14px;cursor:pointer;color:var(--ink);box-shadow:var(--card-shadow)}
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
.ba{display:flex;align-items:center;gap:12px;background:var(--panel);border:1px solid var(--line);border-radius:14px;padding:12px 16px;box-shadow:var(--card-shadow);cursor:pointer}
.ba-side{display:flex;gap:10px;align-items:center}
.ba-before{opacity:.45;filter:saturate(.4)}
.ba-arrow{color:var(--brand);font-size:18px}
.ba code{margin-left:auto;font-size:11px;color:var(--muted)}
.controls{position:sticky;top:0;z-index:15;background:var(--bg);padding:14px 0;display:flex;gap:10px;flex-wrap:wrap;align-items:center;border-bottom:1px solid var(--line)}
.controls input[type=search],.controls select{background:var(--panel);border:1px solid var(--line);color:var(--ink);border-radius:10px;padding:8px 12px;font:inherit}
.controls input[type=search]{flex:1;min-width:180px}
.controls .btn{background:var(--panel);border:1px solid var(--line);color:var(--ink);border-radius:10px;padding:8px 12px;font:inherit;cursor:pointer}
.controls .btn.primary{background:var(--brand);color:#fff;border-color:transparent}
.controls .prog{font-size:12px;color:var(--muted);margin-left:auto;white-space:nowrap}
section.cat{margin-top:34px}
section.cat h2{font-size:19px;margin-bottom:14px}
section.cat h2 small{color:var(--muted);font-weight:400;font-size:13px}
.grid{display:grid;grid-template-columns:repeat(auto-fill,minmax(260px,1fr));gap:12px}
.card{background:var(--panel);border:1px solid var(--line);border-left:4px solid var(--line);border-radius:14px;padding:14px;box-shadow:var(--card-shadow);transition:transform .15s, box-shadow .15s, border-color .15s;position:relative}
.card:hover{transform:translateY(-2px);box-shadow:0 6px 18px rgba(16,24,40,.1)}
.card[data-status=approve]{border-left-color:var(--approve)}
.card[data-status=improve]{border-left-color:var(--improve)}
.card[data-status=redraw]{border-left-color:var(--redraw)}
.card[data-status=reject]{border-left-color:var(--reject)}
.variants{display:flex;justify-content:space-between;cursor:pointer}
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
.decide{margin-top:10px;padding-top:10px;border-top:1px solid var(--line)}
.pills{display:flex;gap:5px;margin-bottom:8px}
.pill-dec,.pill-clear,.pill-review{width:26px;height:26px;border:1px solid var(--line);background:var(--panel);color:var(--muted);border-radius:8px;cursor:pointer;font-size:13px;line-height:1;display:flex;align-items:center;justify-content:center}
.pill-review{margin-left:auto}
.pill-dec.pill-approve.on{background:var(--approve);color:#fff;border-color:transparent}
.pill-dec.pill-improve.on{background:var(--improve);color:#1E2833;border-color:transparent}
.pill-dec.pill-redraw.on{background:var(--redraw);color:#fff;border-color:transparent}
.pill-dec.pill-reject.on{background:var(--reject);color:#fff;border-color:transparent}
.note{width:100%;background:var(--bg);border:1px solid var(--line);color:var(--ink);border-radius:8px;padding:7px 9px;font:13px/1.4 inherit;resize:vertical}
.card.has-note .note{border-color:var(--improve)}
.hidden{display:none!important}
.copied::after{content:"copied";position:absolute;bottom:12px;left:50%;transform:translateX(-50%);background:var(--ink);color:var(--bg);font-size:10px;border-radius:6px;padding:2px 8px}
/* review drawer */
.drawer-bg{position:fixed;inset:0;background:rgba(10,15,25,.5);z-index:25;display:none}
.drawer-bg.open{display:block}
.drawer{position:fixed;top:0;right:0;height:100%;width:min(560px,94vw);background:var(--panel);border-left:1px solid var(--line);z-index:26;transform:translateX(100%);transition:transform .22s cubic-bezier(.2,0,.2,1);display:flex;flex-direction:column}
.drawer.open{transform:translateX(0)}
.dw-head{padding:18px 22px;border-bottom:1px solid var(--line);display:flex;align-items:flex-start;gap:10px}
.dw-title{font-size:18px;font-family:ui-monospace,monospace}
.dw-meta{font-size:12px;color:var(--muted);margin-top:3px}
.dw-close{margin-left:auto;background:none;border:0;color:var(--muted);font-size:22px;cursor:pointer;line-height:1}
.dw-body{padding:20px 22px;overflow:auto;flex:1}
.dw-preview{display:flex;flex-direction:column;gap:16px;margin-bottom:20px}
.dw-block{border:1px solid var(--line);border-radius:12px;padding:14px}
.dw-block h4{font-size:11px;text-transform:uppercase;letter-spacing:.5px;color:var(--muted);margin-bottom:10px}
.dw-row{display:flex;gap:18px;align-items:flex-end;flex-wrap:wrap}
.dw-row.dark{background:#0F172A;border-radius:10px;padding:12px;color:#ECEFF1}
.dw-cell{display:flex;flex-direction:column;align-items:center;gap:4px;font-size:10px;color:var(--muted)}
.dw-cell.on-dark{color:#8FA0B4}
.dw-pills{display:flex;gap:8px;margin:6px 0 12px}
.dw-pill{flex:1;padding:9px;border:1px solid var(--line);background:var(--panel);color:var(--ink);border-radius:10px;cursor:pointer;font-size:13px;display:flex;align-items:center;justify-content:center;gap:6px}
.dw-pill[data-s=approve].on{background:var(--approve);color:#fff;border-color:transparent}
.dw-pill[data-s=improve].on{background:var(--improve);color:#1E2833;border-color:transparent}
.dw-pill[data-s=redraw].on{background:var(--redraw);color:#fff;border-color:transparent}
.dw-pill[data-s=reject].on{background:var(--reject);color:#fff;border-color:transparent}
.dw-note{width:100%;min-height:120px;background:var(--bg);border:1px solid var(--line);color:var(--ink);border-radius:10px;padding:10px 12px;font:14px/1.5 inherit;resize:vertical}
.dw-foot{padding:14px 22px;border-top:1px solid var(--line);display:flex;gap:10px;align-items:center}
.dw-foot .btn{flex:1;background:var(--panel);border:1px solid var(--line);color:var(--ink);border-radius:10px;padding:10px;font:inherit;cursor:pointer}
.dw-foot .hint{font-size:11px;color:var(--muted)}
`;

const js = `
var KEY="plantim-v4-decisions-v1";
var decisions={};
try{decisions=JSON.parse(localStorage.getItem(KEY))||{};}catch(e){decisions={};}
function save(){try{localStorage.setItem(KEY,JSON.stringify(decisions));}catch(e){}}
function rec(id){return decisions[id]||(decisions[id]={status:"",note:""});}
function cardFor(id){return document.querySelector('.card[data-id="'+(window.CSS&&CSS.escape?CSS.escape(id):id)+'"]');}

function markPills(card,status){var p=card.querySelectorAll(".pill-dec");for(var i=0;i<p.length;i++){p[i].classList.toggle("on",p[i].dataset.s===status);}}
function applyStored(){
  var cards=document.querySelectorAll(".card");
  for(var i=0;i<cards.length;i++){var c=cards[i],id=c.dataset.id,r=decisions[id];
    if(r){c.dataset.status=r.status||"";var ta=c.querySelector(".note");if(ta)ta.value=r.note||"";
      markPills(c,r.status||"");c.classList.toggle("has-note",!!(r.note&&r.note.trim()));}}
  updateProgress();
}
function setStatus(id,status){var r=rec(id);r.status=(r.status===status?"":status);save();
  var c=cardFor(id);if(c){c.dataset.status=r.status;markPills(c,r.status);}
  if(drawerId===id)syncDrawerPills();updateProgress();applyFilters();}
function setNote(id,val){var r=rec(id);r.note=val;save();
  var c=cardFor(id);if(c)c.classList.toggle("has-note",!!(val&&val.trim()));
  if(drawerId===id){var dn=document.querySelector(".dw-note");if(dn&&dn.value!==val)dn.value=val;}
  updateProgress();}
function updateProgress(){var total=document.querySelectorAll(".card").length,dec=0,notes=0;
  for(var k in decisions){if(decisions[k].status)dec++;if(decisions[k].note&&decisions[k].note.trim())notes++;}
  var el=document.getElementById("prog");if(el)el.textContent=dec+" / "+total+" decided · "+notes+" notes";}

function applyFilters(){
  var q=(document.getElementById("q").value||"").toLowerCase();
  var cat=document.getElementById("fcat").value,tier=document.getElementById("ftier").value;
  var verdict=document.getElementById("fverdict").value,dec=document.getElementById("fdec").value;
  var cards=document.querySelectorAll(".card");
  for(var i=0;i<cards.length;i++){var c=cards[i];
    var st=c.dataset.status||"";
    var decOk=(dec===""||(dec==="undecided"?st==="":st===dec));
    var ok=(!q||c.dataset.search.toLowerCase().indexOf(q)>=0)&&(!cat||c.dataset.cat===cat)&&(!tier||c.dataset.tier===tier)&&(!verdict||c.dataset.verdict===verdict)&&decOk;
    c.classList.toggle("hidden",!ok);}
  var secs=document.querySelectorAll("section.cat");
  for(var j=0;j<secs.length;j++){secs[j].classList.toggle("hidden",!secs[j].querySelector(".card:not(.hidden)"));}
}
function toggleTheme(){var b=document.body;b.dataset.theme=b.dataset.theme==="dark"?"":"dark";}
function copyId(el){if(navigator.clipboard)navigator.clipboard.writeText(el.textContent);var c=el.closest(".card");c.classList.add("copied");setTimeout(function(){c.classList.remove("copied");},900);}

/* ---- export / import ---- */
function download(name,text,type){var b=new Blob([text],{type:type});var a=document.createElement("a");
  a.href=URL.createObjectURL(b);a.download=name;document.body.appendChild(a);a.click();
  setTimeout(function(){URL.revokeObjectURL(a.href);a.remove();},120);}
function exportJSON(){
  var out={project:"plantim-icons v4",exported:new Date().toISOString(),decisions:{}};
  var cards=document.querySelectorAll(".card");
  for(var i=0;i<cards.length;i++){var c=cards[i],id=c.dataset.id,r=decisions[id];
    if(r&&(r.status||(r.note&&r.note.trim())))out.decisions[id]={category:c.dataset.cat,tier:c.dataset.tier,verdict:c.dataset.verdict,status:r.status||"",note:r.note||""};}
  download("plantim-v4-decisions.json",JSON.stringify(out,null,2),"application/json");
}
function exportMD(){
  var cards=document.querySelectorAll(".card");var byId={},total=cards.length;
  for(var i=0;i<cards.length;i++)byId[cards[i].dataset.id]=cards[i];
  var g={improve:[],redraw:[],reject:[],approve:[]},dec=0;
  for(var id in decisions){var r=decisions[id];if(r.status&&g[r.status]){g[r.status].push(id);dec++;}}
  var L=["# Plantim Icons v4 — decision record","","Exported: "+new Date().toISOString(),"Decided: "+dec+" / "+total,"",
    "> Hand this file back to continue: each Improve/Redraw/Reject entry below its note is an instruction for the next pass.",""];
  function block(status,title){var ids=(g[status]||[]).slice().sort();if(!ids.length)return;
    L.push("## "+title+" ("+ids.length+")","");
    for(var j=0;j<ids.length;j++){var id=ids[j],c=byId[id],r=decisions[id];
      L.push("### "+id+"  ("+(c?c.dataset.tier:"")+" · was "+(c?c.dataset.verdict:"")+" · "+(c?c.dataset.cat:"")+")");
      L.push((r.note&&r.note.trim())?r.note.trim():"_(no note)_","");}}
  block("improve","Improve");block("redraw","Redraw");block("reject","Reject");
  var ap=(g.approve||[]).slice().sort();
  if(ap.length){L.push("## Approve ("+ap.length+")","");for(var k=0;k<ap.length;k++){var n=decisions[ap[k]].note;L.push("- "+ap[k]+(n&&n.trim()?(" — "+n.trim()):""));}L.push("");}
  var un=[];for(var id2 in decisions){var r2=decisions[id2];if(!r2.status&&r2.note&&r2.note.trim())un.push(id2);}
  if(un.length){un.sort();L.push("## Notes on undecided ("+un.length+")","");for(var m=0;m<un.length;m++)L.push("- "+un[m]+" — "+decisions[un[m]].note.trim());L.push("");}
  download("plantim-v4-decisions.md",L.join("\\n"),"text/markdown");
}
function importJSON(ev){var f=ev.target.files[0];if(!f)return;var rd=new FileReader();
  rd.onload=function(){try{var data=JSON.parse(rd.result);var d=data.decisions||data;var n=0;
    for(var id in d){decisions[id]={status:d[id].status||"",note:d[id].note||""};n++;}
    save();applyStored();applyFilters();alert("Imported "+n+" icon decisions.");}catch(e){alert("Import failed: "+e.message);}};
  rd.readAsText(f);ev.target.value="";}
function resetAll(){if(confirm("Clear ALL decisions and notes from this browser?")){decisions={};save();applyStored();applyFilters();}}

/* ---- review drawer ---- */
var reviewList=[],reviewIdx=-1,drawerId=null;
function openReview(id){reviewList=[];var cards=document.querySelectorAll(".card:not(.hidden)");
  for(var i=0;i<cards.length;i++)reviewList.push(cards[i].dataset.id);
  reviewIdx=reviewList.indexOf(id);if(reviewIdx<0){reviewList=[id];reviewIdx=0;}
  renderReview();document.getElementById("drawerbg").classList.add("open");document.getElementById("drawer").classList.add("open");}
function reviewUndecided(){var cards=document.querySelectorAll(".card:not(.hidden)");
  for(var i=0;i<cards.length;i++){var id=cards[i].dataset.id;var r=decisions[id];if(!r||!r.status){openReview(id);return;}}
  if(cards.length)openReview(cards[0].dataset.id);else alert("No icons match the current filter.");}
function closeReview(){document.getElementById("drawerbg").classList.remove("open");document.getElementById("drawer").classList.remove("open");drawerId=null;}
function reviewStep(d){reviewIdx=Math.max(0,Math.min(reviewList.length-1,reviewIdx+d));renderReview();}
function syncDrawerPills(){var r=rec(drawerId);var p=document.querySelectorAll(".dw-pill");for(var i=0;i<p.length;i++)p[i].classList.toggle("on",p[i].dataset.s===(r.status||""));}
function renderReview(){var id=reviewList[reviewIdx];if(!id)return;drawerId=id;
  var card=cardFor(id);var d=document.getElementById("drawer");
  d.querySelector(".dw-title").textContent=id;
  d.querySelector(".dw-meta").textContent=(reviewIdx+1)+" of "+reviewList.length+"  ·  "+card.dataset.tier+" · was "+card.dataset.verdict+" · "+card.dataset.cat;
  var pv=d.querySelector(".dw-preview");pv.innerHTML="";
  var mk=function(title,node){var b=document.createElement("div");b.className="dw-block";var h=document.createElement("h4");h.textContent=title;b.appendChild(h);b.appendChild(node);pv.appendChild(b);};
  var v=card.querySelector(".variants");if(v){var vc=v.cloneNode(true);vc.removeAttribute("onclick");vc.style.cursor="default";mk("Variants (24px)",vc);}
  var ramp=card.querySelector(".ramp");if(ramp)mk("Optical sizes 16 → 48",ramp.cloneNode(true));
  var before=card.querySelector(".before");if(before){var bc=before.cloneNode(true);bc.className="dw-row";bc.style.opacity="1";bc.style.filter="none";mk("v3 (before)",bc);}
  syncDrawerPills();
  d.querySelector(".dw-note").value=rec(id).note||"";
}

document.addEventListener("keydown",function(e){
  if(!document.getElementById("drawer").classList.contains("open"))return;
  var t=e.target.tagName;if(t==="TEXTAREA"||t==="INPUT"){if(e.key==="Escape")e.target.blur();return;}
  if(e.key==="Escape")closeReview();
  else if(e.key==="ArrowRight")reviewStep(1);
  else if(e.key==="ArrowLeft")reviewStep(-1);
  else if(e.key==="1")setStatus(drawerId,"approve");
  else if(e.key==="2")setStatus(drawerId,"improve");
  else if(e.key==="3")setStatus(drawerId,"redraw");
  else if(e.key==="4")setStatus(drawerId,"reject");
  else if(e.key==="0")setStatus(drawerId,"");
});
window.addEventListener("DOMContentLoaded",function(){applyStored();applyFilters();});
`;

const drawer = `
<div class="drawer-bg" id="drawerbg" onclick="closeReview()"></div>
<aside class="drawer" id="drawer">
  <div class="dw-head">
    <div><div class="dw-title">—</div><div class="dw-meta"></div></div>
    <button class="dw-close" onclick="closeReview()" title="Close (Esc)">×</button>
  </div>
  <div class="dw-body">
    <div class="dw-preview"></div>
    <div class="dw-pills">
      ${DEC.map(([s, g, label]) => `<button class="dw-pill" data-s="${s}" onclick="setStatus(drawerId,'${s}')">${g} ${label}</button>`).join("")}
    </div>
    <textarea class="dw-note" placeholder="What should change? These notes export as instructions for the next pass…" oninput="setNote(drawerId,this.value)"></textarea>
  </div>
  <div class="dw-foot">
    <button class="btn" onclick="reviewStep(-1)">← Prev</button>
    <span class="hint">←/→ move · 1–4 decide · 0 clear · Esc close</span>
    <button class="btn" onclick="reviewStep(1)">Next →</button>
  </div>
</aside>`;

const html = `<!doctype html><html lang="en"><head><meta charset="utf-8">
<meta name="viewport" content="width=device-width,initial-scale=1">
<title>Plantim Icons v4 — decision record</title>
<style>${css}</style></head>
<body>
<button class="toggle" onclick="toggleTheme()">☾ / ☀</button>
<div class="wrap">
<header class="hero">
  <h1>Plantim Icons <b>v4</b> — decision record</h1>
  <p class="sub">Review every icon one by one: set a decision, add improvement notes, then export.
  Progress autosaves in this browser. Click any icon (or ⤢) to open the focused review panel.
  ${counts.total} icons · 4 variants · optical sizes 16–72.</p>
  <div class="stats">
    <div class="stat"><b>${counts.total}</b><span>icons</span></div>
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
    <h3>Before → after (v3 vs v4) — click to review</h3>
    <div class="rework-row">${rework}</div>
  </div>
</header>
<div class="controls">
  <input id="q" type="search" placeholder="Search ${counts.total} icons…" oninput="applyFilters()">
  <select id="fcat" onchange="applyFilters()"><option value="">All categories</option>${categories.map((c) => `<option>${c}</option>`).join("")}</select>
  <select id="ftier" onchange="applyFilters()"><option value="">All tiers</option><option>P0</option><option>P1</option><option>P2</option></select>
  <select id="fverdict" onchange="applyFilters()"><option value="">All verdicts</option><option>keep</option><option>refine</option><option>redraw</option></select>
  <select id="fdec" onchange="applyFilters()"><option value="">Any decision</option><option value="undecided">Undecided</option><option value="approve">Approve</option><option value="improve">Improve</option><option value="redraw">Redraw</option><option value="reject">Reject</option></select>
  <button class="btn primary" onclick="reviewUndecided()">Review undecided ▶</button>
  <button class="btn" onclick="exportMD()">Export .md</button>
  <button class="btn" onclick="exportJSON()">Export .json</button>
  <label class="btn" style="cursor:pointer">Import<input type="file" accept="application/json" onchange="importJSON(event)" style="display:none"></label>
  <button class="btn" onclick="resetAll()" title="Clear all">Reset</button>
  <span class="prog" id="prog">0 / ${counts.total} decided</span>
</div>
${sections}
</div>
${drawer}
<script>${js}</script>
</body></html>`;

fs.writeFileSync(outPath, html);
console.log(
  `Generated ${path.relative(root, outPath)} (${(html.length / 1024 / 1024).toFixed(2)} MB, ${icons.length} icons, decision-record mode).`,
);
