// Shared loader for the v4.1 proposal catalog/report generators: registry,
// index, inline-SVG helpers and grouping. No output side effects.

import fs from "node:fs";
import path from "node:path";
import { pathToFileURL } from "node:url";

export const root = path.resolve(import.meta.dirname, "../../..");
export const propRoot = path.join(root, "design-tokens/icons/v4.1-proposal");
export const v4Root = path.join(root, "design-tokens/icons/v4");

export const registry = JSON.parse(fs.readFileSync(path.join(propRoot, "registry.proposal.json"), "utf8"));
export const index = JSON.parse(fs.readFileSync(path.join(propRoot, "index.proposal.json"), "utf8"));
export const v4Index = JSON.parse(fs.readFileSync(path.join(v4Root, "index.v4.json"), "utf8"));
export const locales = JSON.parse(fs.readFileSync(path.join(propRoot, "locales.proposal.json"), "utf8"));
// Shipped locales, for ids that reuse an existing key (e.g. status.loading.dots).
export const shippedLocales = Object.fromEntries(
  fs
    .readdirSync(path.join(root, "locales"))
    .filter((f) => f.endsWith(".json"))
    .map((f) => [f.replace(/\.json$/, ""), JSON.parse(fs.readFileSync(path.join(root, "locales", f), "utf8"))]),
);

const rationaleMod = await import(pathToFileURL(path.join(propRoot, "rationale.mjs")).href);
export const GROUPS = rationaleMod.GROUPS;
export const RATIONALE = rationaleMod.RATIONALE;
export const flagRationale = rationaleMod.flagRationale;
export const avatarRationale = rationaleMod.avatarRationale;

export const esc = (s) =>
  String(s).replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");

/** Inline a generated SVG at a display size (currentColor inherits CSS color). */
export function svgAt(dir, rel, size) {
  return fs
    .readFileSync(path.join(dir, rel), "utf8")
    .trim()
    .replace(/width="\d+"/, `width="${size}"`)
    .replace(/height="\d+"/, `height="${size}"`)
    .replace(/\n\s*/g, "");
}
export const svg = (rel, size) => svgAt(propRoot, rel, size);
export const v4svg = (id, variant, size) => {
  const f = v4Index.icons.find((i) => i.id === id)?.files?.[variant]?.[24];
  return f ? svgAt(v4Root, f, size) : "";
};

export const entries = index.icons.slice().sort((a, b) => a.category.localeCompare(b.category) || a.id.localeCompare(b.id));
export const iconEntries = entries.filter((e) => e.kind === "icon");
export const flagEntries = entries.filter((e) => e.kind === "flag");

export function groupOf(entry) {
  return GROUPS.find((g) => g.categories.includes(entry.category)) ?? GROUPS[1];
}
export function rationaleOf(entry) {
  if (entry.kind === "flag") return flagRationale(entry.id);
  if (entry.category === "avatar") return avatarRationale(entry.id);
  return RATIONALE[entry.id] ?? { why: "", surfaces: [] };
}
export function defOf(entry) {
  return entry.kind === "flag" ? registry.flags[entry.id] : registry.icons[entry.id];
}
export function byGroup() {
  return GROUPS.map((g) => ({ ...g, entries: entries.filter((e) => g.categories.includes(e.category)) }));
}
const readPath = (obj, key) => key.split(".").reduce((v, p) => v?.[p], obj);
export const labelIn = (lang, key) => readPath(locales[lang], key) ?? readPath(shippedLocales[lang], key) ?? "";
