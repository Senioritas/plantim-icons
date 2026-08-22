import fs from "node:fs";
import path from "node:path";

const root = path.resolve(import.meta.dirname, "../..");
const dist = path.join(root, "packages/plantim-icons/dist");

// dist is generated exclusively by the icon package TypeScript build.
fs.rmSync(dist, { recursive: true, force: true });
