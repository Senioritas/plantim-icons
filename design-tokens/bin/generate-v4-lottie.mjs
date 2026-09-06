#!/usr/bin/env node
/**
 * Compile Plantim Icons v4 P0 motion specs into Lottie JSON.
 *
 * Reads  design-tokens/icons/v4/registry.v4.json (geometry, 24×24 grid) and
 *        design-tokens/icons/v4/src/animations.mjs (hand-written motion specs),
 * emits  design-tokens/icons/v4/animations/<icon-id>.json — one Lottie doc per
 *        animated P0 icon (v 5.7.0, fr 60, 24×24, shape layers only).
 *
 * Constraints (DESIGN.md §7): transform/opacity/trim-path subset only, easing
 * cubic-bezier(.2,0,.2,1) → keyframe bezier o:{x:.2,y:0} i:{x:.8,y:1}, no
 * expressions, no images, deterministic output (fixed construction order, no
 * timestamps).
 */

import { mkdirSync, readFileSync, writeFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath, pathToFileURL } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const V4_DIR = join(HERE, '..', 'icons', 'v4');
const OUT_DIR = join(V4_DIR, 'animations');

const STROKE_COLOR = [0.15, 0.2, 0.22, 1];
const STROKE_WIDTH = 2;
const GRID = 24;

/** Round to 4 decimals to keep output tidy and stable. */
const r4 = (v) => {
  const r = Math.round(v * 1e4) / 1e4;
  return Object.is(r, -0) ? 0 : r;
};

/* ------------------------------------------------------------------ */
/* SVG path → Lottie bezier                                           */
/* ------------------------------------------------------------------ */

function tokenizePath(d) {
  const tokens = d.match(/[MLHVCSQTAZmlhvcsqtaz]|-?(?:\d*\.\d+|\d+\.?)(?:e[+-]?\d+)?/g);
  if (!tokens) throw new Error(`unparseable path data: ${d}`);
  return tokens;
}

/**
 * Approximate one elliptical arc (SVG A command, endpoint form) with cubic
 * segments (≤90° each). Returns [{c1, c2, p}] — control points + endpoint.
 */
function arcToCubics(x1, y1, rx, ry, xRotDeg, largeArc, sweep, x2, y2) {
  rx = Math.abs(rx);
  ry = Math.abs(ry);
  if (rx === 0 || ry === 0 || (x1 === x2 && y1 === y2)) {
    return [{ c1: [x1, y1], c2: [x2, y2], p: [x2, y2] }];
  }
  const phi = (xRotDeg * Math.PI) / 180;
  const cosP = Math.cos(phi);
  const sinP = Math.sin(phi);

  // SVG spec F.6.5: endpoint → centre parameterization.
  const dx = (x1 - x2) / 2;
  const dy = (y1 - y2) / 2;
  const x1p = cosP * dx + sinP * dy;
  const y1p = -sinP * dx + cosP * dy;

  const lambda = (x1p * x1p) / (rx * rx) + (y1p * y1p) / (ry * ry);
  if (lambda > 1) {
    const s = Math.sqrt(lambda);
    rx *= s;
    ry *= s;
  }

  const num = rx * rx * ry * ry - rx * rx * y1p * y1p - ry * ry * x1p * x1p;
  const den = rx * rx * y1p * y1p + ry * ry * x1p * x1p;
  const coef = (largeArc === sweep ? -1 : 1) * Math.sqrt(Math.max(0, num / den));
  const cxp = (coef * rx * y1p) / ry;
  const cyp = (-coef * ry * x1p) / rx;
  const cx = cosP * cxp - sinP * cyp + (x1 + x2) / 2;
  const cy = sinP * cxp + cosP * cyp + (y1 + y2) / 2;

  const angle = (ux, uy, vx, vy) => {
    const dot = ux * vx + uy * vy;
    const len = Math.hypot(ux, uy) * Math.hypot(vx, vy);
    let a = Math.acos(Math.min(1, Math.max(-1, dot / len)));
    if (ux * vy - uy * vx < 0) a = -a;
    return a;
  };
  const theta1 = angle(1, 0, (x1p - cxp) / rx, (y1p - cyp) / ry);
  let dTheta = angle((x1p - cxp) / rx, (y1p - cyp) / ry, (-x1p - cxp) / rx, (-y1p - cyp) / ry);
  if (!sweep && dTheta > 0) dTheta -= 2 * Math.PI;
  if (sweep && dTheta < 0) dTheta += 2 * Math.PI;

  const segments = Math.max(1, Math.ceil(Math.abs(dTheta) / (Math.PI / 2)));
  const delta = dTheta / segments;
  const alpha = (4 / 3) * Math.tan(delta / 4);

  const point = (t) => [
    cx + cosP * rx * Math.cos(t) - sinP * ry * Math.sin(t),
    cy + sinP * rx * Math.cos(t) + cosP * ry * Math.sin(t),
  ];
  const derivative = (t) => [
    -cosP * rx * Math.sin(t) - sinP * ry * Math.cos(t),
    -sinP * rx * Math.sin(t) + cosP * ry * Math.cos(t),
  ];

  const cubics = [];
  for (let s = 0; s < segments; s += 1) {
    const t0 = theta1 + s * delta;
    const t1 = t0 + delta;
    const p0 = point(t0);
    const p1 = point(t1);
    const d0 = derivative(t0);
    const d1 = derivative(t1);
    cubics.push({
      c1: [p0[0] + alpha * d0[0], p0[1] + alpha * d0[1]],
      c2: [p1[0] - alpha * d1[0], p1[1] - alpha * d1[1]],
      p: p1,
    });
  }
  return cubics;
}

/**
 * Convert an SVG path `d` (M/L/H/V/C/A/Z, absolute or relative) into Lottie
 * bezier shapes: [{ v, i, o, c }] — one entry per subpath. `i`/`o` tangents
 * are relative to their vertex, per the Lottie shape format.
 */
export function pathToBezier(d) {
  const tokens = tokenizePath(d);
  const shapes = [];
  let verts = []; // absolute vertices
  let cubics = []; // cubic between verts[k] and verts[k+1]: {c1, c2} absolute
  let closed = false;
  let cur = [0, 0];
  let start = [0, 0];
  let idx = 0;
  let cmd = null;

  const num = () => {
    const t = tokens[idx];
    idx += 1;
    const n = Number(t);
    if (!Number.isFinite(n)) throw new Error(`expected number, got "${t}" in: ${d}`);
    return n;
  };

  const flush = () => {
    if (verts.length === 0) return;
    const n = verts.length;
    const inT = verts.map(() => [0, 0]);
    const outT = verts.map(() => [0, 0]);
    for (let k = 0; k < cubics.length; k += 1) {
      const c = cubics[k];
      const a = k;
      const b = (k + 1) % n;
      outT[a] = [c.c1[0] - verts[a][0], c.c1[1] - verts[a][1]];
      inT[b] = [c.c2[0] - verts[b][0], c.c2[1] - verts[b][1]];
    }
    shapes.push({
      v: verts.map((p) => [r4(p[0]), r4(p[1])]),
      i: inT.map((p) => [r4(p[0]), r4(p[1])]),
      o: outT.map((p) => [r4(p[0]), r4(p[1])]),
      c: closed,
    });
    verts = [];
    cubics = [];
    closed = false;
  };

  const lineTo = (x, y) => {
    verts.push([x, y]);
    cubics.push({ c1: [cur[0], cur[1]], c2: [x, y] }); // zero-length handles
    cur = [x, y];
  };

  while (idx < tokens.length) {
    const t = tokens[idx];
    if (/^[A-Za-z]$/.test(t)) {
      cmd = t;
      idx += 1;
    } else if (cmd === 'M') {
      cmd = 'L'; // implicit lineto after moveto
    } else if (cmd === 'm') {
      cmd = 'l';
    }
    const rel = cmd === cmd.toLowerCase();
    switch (cmd.toUpperCase()) {
      case 'M': {
        flush();
        let x = num();
        let y = num();
        if (rel) {
          x += cur[0];
          y += cur[1];
        }
        cur = [x, y];
        start = [x, y];
        verts.push([x, y]);
        break;
      }
      case 'L': {
        let x = num();
        let y = num();
        if (rel) {
          x += cur[0];
          y += cur[1];
        }
        lineTo(x, y);
        break;
      }
      case 'H': {
        let x = num();
        if (rel) x += cur[0];
        lineTo(x, cur[1]);
        break;
      }
      case 'V': {
        let y = num();
        if (rel) y += cur[1];
        lineTo(cur[0], y);
        break;
      }
      case 'C': {
        let x1 = num();
        let y1 = num();
        let x2 = num();
        let y2 = num();
        let x = num();
        let y = num();
        if (rel) {
          x1 += cur[0];
          y1 += cur[1];
          x2 += cur[0];
          y2 += cur[1];
          x += cur[0];
          y += cur[1];
        }
        verts.push([x, y]);
        cubics.push({ c1: [x1, y1], c2: [x2, y2] });
        cur = [x, y];
        break;
      }
      case 'A': {
        const rx = num();
        const ry = num();
        const rot = num();
        const large = num() !== 0;
        const sweep = num() !== 0;
        let x = num();
        let y = num();
        if (rel) {
          x += cur[0];
          y += cur[1];
        }
        for (const seg of arcToCubics(cur[0], cur[1], rx, ry, rot, large, sweep, x, y)) {
          verts.push(seg.p);
          cubics.push({ c1: seg.c1, c2: seg.c2 });
        }
        cur = [x, y];
        break;
      }
      case 'Z': {
        closed = true;
        const first = verts[0];
        const last = verts[verts.length - 1];
        if (
          verts.length > 1 &&
          Math.abs(last[0] - first[0]) < 1e-6 &&
          Math.abs(last[1] - first[1]) < 1e-6
        ) {
          // Merge duplicate closing vertex: its incoming cubic becomes the
          // closing segment onto the first vertex.
          verts.pop();
        }
        cur = [start[0], start[1]];
        break;
      }
      default:
        throw new Error(`unsupported path command "${cmd}" in: ${d}`);
    }
  }
  flush();
  return shapes;
}

/* ------------------------------------------------------------------ */
/* Lottie property builders                                           */
/* ------------------------------------------------------------------ */

const EASINGS = {
  std: { o: { x: 0.2, y: 0 }, i: { x: 0.8, y: 1 } },
};

const stat = (k) => ({ a: 0, k });

/**
 * Compile spec keyframes [{t, v, easing}] into an animated Lottie property.
 * `toS` maps a spec value to the keyframe `s` array. Segment easing is taken
 * from the destination keyframe's `easing` (default "std").
 */
function animated(kfs, toS, offset = 0) {
  const k = kfs.map((kf, n) => {
    const entry = { t: kf.t + offset, s: toS(kf.v).map(r4) };
    if (n < kfs.length - 1) {
      const next = kfs[n + 1];
      const ease = EASINGS[next.easing ?? 'std'];
      const dims = entry.s.length;
      entry.o = { x: Array(dims).fill(ease.o.x), y: Array(dims).fill(ease.o.y) };
      entry.i = { x: Array(dims).fill(ease.i.x), y: Array(dims).fill(ease.i.y) };
    }
    return entry;
  });
  return { a: 1, k };
}

/** Build a layer transform (`ks`) from the tracks affecting this layer. */
function buildTransform(tracks, offset = 0) {
  let anchor = [12, 12];
  let scale = null;
  let position = null;
  let rotation = null;
  let opacity = null;
  for (const track of tracks) {
    if (track.anchor) anchor = track.anchor;
    const kf = track.keyframes;
    if (kf.scale) scale = kf.scale;
    if (kf.position) position = kf.position;
    if (kf.rotation) rotation = kf.rotation;
    if (kf.opacity) opacity = kf.opacity;
  }
  return {
    o: opacity ? animated(opacity, (v) => [v], offset) : stat(100),
    r: rotation ? animated(rotation, (v) => [v], offset) : stat(0),
    p: position
      ? animated(position, (v) => [anchor[0] + v[0], anchor[1] + v[1], 0], offset)
      : stat([anchor[0], anchor[1], 0]),
    a: stat([anchor[0], anchor[1], 0]),
    s: scale ? animated(scale, (v) => [v, v, 100], offset) : stat([100, 100, 100]),
  };
}

/* ------------------------------------------------------------------ */
/* Shape items                                                        */
/* ------------------------------------------------------------------ */

const identityGroupTransform = () => ({
  ty: 'tr',
  p: stat([0, 0]),
  a: stat([0, 0]),
  s: stat([100, 100]),
  r: stat(0),
  o: stat(100),
});

const strokeItem = () => ({
  ty: 'st',
  c: stat(STROKE_COLOR),
  o: stat(100),
  w: stat(STROKE_WIDTH),
  lc: 2, // round cap
  lj: 2, // round join
  bm: 0,
  nm: 'stroke',
});

const fillItem = () => ({
  ty: 'fl',
  c: stat(STROKE_COLOR),
  o: stat(100),
  r: 1,
  bm: 0,
  nm: 'fill',
});

/** Convert one registry node into Lottie geometry shape items. */
function nodeGeometry(node) {
  const a = node.attrs;
  const n = (key) => Number(a[key]);
  switch (node.type) {
    case 'path':
      return pathToBezier(a.d).map((bez) => ({ ty: 'sh', ks: stat(bez), nm: 'path' }));
    case 'circle':
      return [
        {
          ty: 'el',
          p: stat([n('cx'), n('cy')]),
          s: stat([r4(n('r') * 2), r4(n('r') * 2)]),
          d: 1,
          nm: 'ellipse',
        },
      ];
    case 'rect': {
      const w = n('width');
      const h = n('height');
      return [
        {
          ty: 'rc',
          p: stat([r4(n('x') + w / 2), r4(n('y') + h / 2)]),
          s: stat([w, h]),
          r: stat(Number(a.rx ?? 0)),
          d: 1,
          nm: 'rect',
        },
      ];
    }
    case 'line':
      return [
        {
          ty: 'sh',
          ks: stat({
            v: [
              [n('x1'), n('y1')],
              [n('x2'), n('y2')],
            ],
            i: [
              [0, 0],
              [0, 0],
            ],
            o: [
              [0, 0],
              [0, 0],
            ],
            c: false,
          }),
          nm: 'path',
        },
      ];
    default:
      throw new Error(`unsupported node type "${node.type}"`);
  }
}

/** One "gr" group per node: geometry + optional trim + paint + transform. */
function nodeGroup(node, nodeIndex, trimTrack, offset = 0) {
  const items = nodeGeometry(node);
  if (trimTrack) {
    items.push({
      ty: 'tm',
      s: stat(0),
      e: animated(trimTrack.keyframes.trimEnd, (v) => [r4(v * 100)], offset),
      o: stat(0),
      m: 1,
      nm: 'trim',
    });
  }
  items.push(node.filled ? fillItem() : strokeItem());
  items.push(identityGroupTransform());
  return { ty: 'gr', it: items, nm: `node-${nodeIndex}`, bm: 0 };
}

/* ------------------------------------------------------------------ */
/* Compiler                                                           */
/* ------------------------------------------------------------------ */

function tracksFor(spec, layerName) {
  return spec.tracks.filter(
    (t) => t.layersAffected === 'all' || t.layersAffected.includes(layerName),
  );
}

function buildLottie(icon, spec) {
  const registryLayers = icon.grades.base.layers;
  const op = spec.duration;
  const lottieLayers = [];

  // Registry order is SVG paint order (first = bottom); Lottie index 0 renders
  // on top, so walk the registry layers in reverse.
  for (const layer of [...registryLayers].reverse()) {
    const affecting = tracksFor(spec, layer.name);
    const transformTracks = affecting.filter((t) => !t.keyframes.trimEnd && !t.splitNodes);
    const trimTrack = affecting.find((t) => t.keyframes.trimEnd) ?? null;
    const splitTrack = affecting.find((t) => t.splitNodes) ?? null;

    if (splitTrack) {
      // Each node becomes its own layer (same nm) with staggered keyframes.
      layer.nodes.forEach((node, nodeIndex) => {
        const offset = (splitTrack.staggerFrames ?? 0) * nodeIndex;
        const ks = buildTransform([...transformTracks, splitTrack], 0);
        // Only the split track's own properties get the stagger offset.
        const own = buildTransform([splitTrack], offset);
        for (const prop of ['o', 'r', 'p', 's']) {
          if (own[prop].a === 1) ks[prop] = own[prop];
        }
        lottieLayers.push({
          ddd: 0,
          ind: lottieLayers.length + 1,
          ty: 4,
          nm: layer.name,
          sr: 1,
          ks,
          ao: 0,
          shapes: [nodeGroup(node, nodeIndex, null)],
          ip: 0,
          op,
          st: 0,
          bm: 0,
        });
      });
      continue;
    }

    lottieLayers.push({
      ddd: 0,
      ind: lottieLayers.length + 1,
      ty: 4,
      nm: layer.name,
      sr: 1,
      ks: buildTransform(transformTracks),
      ao: 0,
      shapes: layer.nodes.map((node, nodeIndex) => nodeGroup(node, nodeIndex, trimTrack)),
      ip: 0,
      op,
      st: 0,
      bm: 0,
    });
  }

  return {
    v: '5.7.0',
    fr: 60,
    ip: 0,
    op,
    w: GRID,
    h: GRID,
    nm: `${icon.id} — ${icon.animation}`,
    ddd: 0,
    assets: [],
    layers: lottieLayers,
  };
}

export async function generate() {
  const registry = JSON.parse(readFileSync(join(V4_DIR, 'registry.v4.json'), 'utf8'));
  const { animations } = await import(pathToFileURL(join(V4_DIR, 'src', 'animations.mjs')).href);

  const animatedIcons = Object.values(registry.icons)
    .filter((icon) => icon.animation)
    .sort((a, b) => a.id.localeCompare(b.id));

  mkdirSync(OUT_DIR, { recursive: true });
  const written = [];
  for (const icon of animatedIcons) {
    const spec = animations[icon.animation];
    if (!spec) throw new Error(`no motion spec for animation "${icon.animation}" (${icon.id})`);
    for (const track of spec.tracks) {
      if (track.layersAffected === 'all') continue;
      const known = new Set(icon.grades.base.layers.map((l) => l.name));
      for (const name of track.layersAffected) {
        if (!known.has(name)) {
          throw new Error(`spec ${icon.animation} targets unknown layer "${name}" of ${icon.id}`);
        }
      }
    }
    const doc = buildLottie(icon, spec);
    const file = join(OUT_DIR, `${icon.id}.json`);
    writeFileSync(file, `${JSON.stringify(doc)}\n`);
    written.push(`${icon.id}.json`);
  }
  return written;
}

const invokedDirectly =
  process.argv[1] && import.meta.url === pathToFileURL(process.argv[1]).href;

if (invokedDirectly) {
  generate()
    .then((written) => {
      console.log(`v4 lottie: wrote ${written.length} animations → ${OUT_DIR}`);
      for (const f of written) console.log(`  ${f}`);
    })
    .catch((err) => {
      console.error(`v4 lottie generation failed: ${err.message}`);
      process.exit(1);
    });
}
