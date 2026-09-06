#!/usr/bin/env node
/**
 * Gate for the compiled v4 Lottie animations (design-tokens/icons/v4/animations).
 *
 * Enforces, per animated P0 icon:
 *   - a JSON file exists and parses;
 *   - fr == 60, w == h == 24, ip == 0, 0.2 s <= (op-ip)/fr <= 0.3 s;
 *   - shape layers only; every layer nm matches a registry layer name (or "icon");
 *   - shape item types within {gr, sh, el, rc, st, fl, tr, tm};
 *   - no unsupported features: no expressions, no images/assets.
 *
 * Exits 1 on any violation.
 */

import { existsSync, readFileSync } from 'node:fs';
import { dirname, join } from 'node:path';
import { fileURLToPath } from 'node:url';

const HERE = dirname(fileURLToPath(import.meta.url));
const V4_DIR = join(HERE, '..', 'icons', 'v4');
const ANIM_DIR = join(V4_DIR, 'animations');

const ALLOWED_SHAPE_TYPES = new Set(['gr', 'sh', 'el', 'rc', 'st', 'fl', 'tr', 'tm']);
const MIN_SECONDS = 0.2;
const MAX_SECONDS = 0.3;

const violations = [];
const flag = (id, message) => violations.push(`${id}: ${message}`);

function checkShapeItems(id, items, where) {
  if (!Array.isArray(items)) {
    flag(id, `${where}: shapes is not an array`);
    return;
  }
  items.forEach((item, n) => {
    const spot = `${where}[${n}]`;
    if (!item || typeof item !== 'object') {
      flag(id, `${spot}: not an object`);
      return;
    }
    if (!ALLOWED_SHAPE_TYPES.has(item.ty)) {
      flag(id, `${spot}: shape type "${item.ty}" outside {gr,sh,el,rc,st,fl,tr,tm}`);
    }
    if (item.ty === 'gr') checkShapeItems(id, item.it, `${spot}.it`);
  });
}

/** Recursively reject expressions: any "x" property holding a string. */
function checkNoExpressions(id, value, path) {
  if (Array.isArray(value)) {
    value.forEach((v, n) => checkNoExpressions(id, v, `${path}[${n}]`));
    return;
  }
  if (!value || typeof value !== 'object') return;
  for (const [key, v] of Object.entries(value)) {
    if (key === 'x' && typeof v === 'string') {
      flag(id, `${path}.x: expression found ("${v.slice(0, 40)}")`);
    }
    checkNoExpressions(id, v, `${path}.${key}`);
  }
}

const registry = JSON.parse(readFileSync(join(V4_DIR, 'registry.v4.json'), 'utf8'));
const animatedIcons = Object.values(registry.icons)
  .filter((icon) => icon.animation)
  .sort((a, b) => a.id.localeCompare(b.id));

if (animatedIcons.length === 0) {
  console.error('check-v4-lottie: registry declares no animated icons');
  process.exit(1);
}

for (const icon of animatedIcons) {
  const id = icon.id;
  const file = join(ANIM_DIR, `${id}.json`);
  if (!existsSync(file)) {
    flag(id, `missing ${file}`);
    continue;
  }
  let doc;
  try {
    doc = JSON.parse(readFileSync(file, 'utf8'));
  } catch (err) {
    flag(id, `invalid JSON: ${err.message}`);
    continue;
  }

  if (doc.fr !== 60) flag(id, `fr ${doc.fr} != 60`);
  if (doc.w !== 24 || doc.h !== 24) flag(id, `size ${doc.w}x${doc.h} != 24x24`);
  if (doc.ip !== 0) flag(id, `ip ${doc.ip} != 0`);
  const seconds = (doc.op - doc.ip) / doc.fr;
  if (!(seconds >= MIN_SECONDS && seconds <= MAX_SECONDS)) {
    flag(id, `duration ${seconds.toFixed(4)}s outside [${MIN_SECONDS}, ${MAX_SECONDS}]s`);
  }

  if (!Array.isArray(doc.assets) || doc.assets.length !== 0) {
    flag(id, 'assets must be an empty array (no images/precomps)');
  }

  const layerNames = new Set(icon.grades.base.layers.map((l) => l.name));
  layerNames.add('icon');
  if (!Array.isArray(doc.layers) || doc.layers.length === 0) {
    flag(id, 'layers missing or empty');
    continue;
  }
  doc.layers.forEach((layer, n) => {
    if (layer.ty !== 4) flag(id, `layers[${n}] ty ${layer.ty} != 4 (shape layers only)`);
    if (!layerNames.has(layer.nm)) {
      flag(id, `layers[${n}] nm "${layer.nm}" matches no registry layer of ${id}`);
    }
    checkShapeItems(id, layer.shapes, `layers[${n}].shapes`);
  });

  checkNoExpressions(id, doc, id);
}

if (violations.length > 0) {
  console.error(`check-v4-lottie: ${violations.length} violation(s)`);
  for (const v of violations) console.error(`  ${v}`);
  process.exit(1);
}
console.log(`check-v4-lottie: ${animatedIcons.length} animations OK (fr 60, 24x24, 0.2–0.3s, shape subset, no expressions/images)`);
