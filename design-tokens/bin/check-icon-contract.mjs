import fs from "node:fs";
import path from "node:path";
import crypto from "node:crypto";
import Ajv from "ajv";

const root = path.resolve(import.meta.dirname, "../..");
const registry = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/registry.json"), "utf8"),
);
const errors = [];
const schema = JSON.parse(
  fs.readFileSync(path.join(root, "design-tokens/icons/registry.schema.json"), "utf8"),
);
const validateSchema = new Ajv({ allErrors: true }).compile(schema);
if (!validateSchema(registry))
  errors.push(
    ...validateSchema.errors.map(
      (error) => `registry schema: ${error.instancePath || "/"} ${error.message}`,
    ),
  );
const { registryHash, ...registryPayload } = registry;
const expectedHash = crypto
  .createHash("sha256")
  .update(JSON.stringify(registryPayload))
  .digest("hex");
if (registryHash !== expectedHash) errors.push("registryHash does not match registry contents");
const npmPackage = JSON.parse(
  fs.readFileSync(path.join(root, "packages/plantim-icons/package.json"), "utf8"),
);
const clientPackagePath = path.join(root, "client/package.json");
const clientPackage = fs.existsSync(clientPackagePath)
  ? JSON.parse(fs.readFileSync(clientPackagePath, "utf8"))
  : {};
const tokenPackage = JSON.parse(fs.readFileSync(path.join(root, "design-tokens/package.json"), "utf8"));
const workspacePackage = JSON.parse(fs.readFileSync(path.join(root, "package.json"), "utf8"));
if (clientPackage.dependencies?.["lucide-vue-next"] || clientPackage.devDependencies?.["lucide-vue-next"])
  errors.push("client must not depend on lucide-vue-next; only the generator may use Lucide source");
const hasLucideGenerator = Boolean(
  tokenPackage.devDependencies?.["lucide-vue-next"] ||
    tokenPackage.devDependencies?.["@lucide/vue"] ||
    workspacePackage.devDependencies?.["lucide-vue-next"] ||
    workspacePackage.devDependencies?.["@lucide/vue"],
);
if (!hasLucideGenerator)
  errors.push("the workspace must declare an official Lucide package for generation only");
if (npmPackage.version !== registry.version)
  errors.push(
    `npm package version ${npmPackage.version} does not match registry ${registry.version}`,
  );
for (const generated of [
  path.join(root, "packages/plantim-icons/src/index.ts"),
  path.join(root, "packages/plantim-icons/dist/index.js"),
  path.join(root, "packages/plantim-icons/dist/index.d.ts"),
  path.join(root, "packages/PlantimIcons/Sources/PlantimIcons/PlantimIcon.swift"),
  ...(process.env.PLANTIM_IOS_OUTPUT
    ? [path.resolve(root, process.env.PLANTIM_IOS_OUTPUT)]
    : []),
]) {
  const source = fs.readFileSync(generated, "utf8");
  if (!source.includes(registryHash))
    errors.push(`generated adapter is stale: ${path.relative(root, generated)}`);
  if (!source.includes(registry.version))
    errors.push(`generated adapter version is stale: ${path.relative(root, generated)}`);
}
const ids = new Set();
const aliases = new Set();
for (const [exportName, icon] of Object.entries(registry.icons)) {
  if (ids.has(icon.id)) errors.push(`duplicate semantic ID: ${icon.id}`);
  ids.add(icon.id);
  if (!icon.id || !/^([a-z][a-z0-9]*\.)*[a-z][a-z0-9]*$/.test(icon.id))
    errors.push(`invalid ID: ${exportName}`);
  if (icon.viewBox !== "0 0 24 24") errors.push(`invalid viewBox: ${icon.id}`);
  if (!Array.isArray(icon.nodes) || !icon.nodes.length) errors.push(`missing geometry: ${icon.id}`);
  if (icon.id.startsWith("lucide."))
    errors.push(`Lucide-branded public ID is forbidden: ${icon.id}`);
  if (icon.category !== icon.id.split(".")[0])
    errors.push(`category must match semantic namespace: ${icon.id}`);
  if (icon.accessibility === "status" && !icon.accessibilityLabelKey)
    errors.push(`status icon requires an accessibility label key: ${icon.id}`);
  for (const alias of icon.aliases ?? []) {
    if (alias === icon.id) errors.push(`alias cannot equal its canonical ID: ${icon.id}`);
    if (aliases.has(alias)) errors.push(`duplicate icon alias: ${alias}`);
    aliases.add(alias);
  }
}
for (const alias of aliases) {
  if (ids.has(alias)) errors.push(`alias collides with canonical ID: ${alias}`);
}
const forbidden = [];
const unregistered = [];
for (const dir of [path.join(root, "client/src"), path.join(root, "ios/Plantim")].filter(fs.existsSync)) {
  const stack = [dir];
  while (stack.length) {
    const current = stack.pop();
    for (const entry of fs.readdirSync(current, { withFileTypes: true })) {
      const full = path.join(current, entry.name);
      if (entry.isDirectory()) stack.push(full);
      else if (/\.(vue|ts|swift)$/.test(entry.name)) {
        const source = fs.readFileSync(full, "utf8");
        if (dir.endsWith("client/src")) {
          for (const match of source.matchAll(
            /(?:<PlantimIcon\s+[^>]*\bname\s*=\s*|\bicon\s*:\s*)["']((?:account|action|calendar|content|location|navigation|plant|status|utility|weather)\.[a-z0-9.]+)["']/g,
          )) {
            if (!ids.has(match[1])) unregistered.push(`${path.relative(root, full)}: ${match[1]}`);
          }
        }
        if (
          /lucide-vue-next|(?:Image|UIImage)\s*\(\s*systemName\s*:|Label\s*\([^)]*systemImage\s*:/.test(
            source,
          )
        )
          forbidden.push(path.relative(root, full));
        if (/\blucide\./.test(source))
          forbidden.push(`${path.relative(root, full)} (legacy Lucide semantic ID)`);
      }
    }
  }
}
if (forbidden.length)
  errors.push(`forbidden direct icon usage:\n${forbidden.map((file) => `  ${file}`).join("\n")}`);
if (unregistered.length)
  errors.push(`unregistered semantic icon IDs:\n${unregistered.map((entry) => `  ${entry}`).join("\n")}`);
if (errors.length) {
  console.error(errors.join("\n"));
  process.exit(1);
}
console.log(`Icon contract valid: ${ids.size} icons.`);
