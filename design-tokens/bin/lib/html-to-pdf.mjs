// Render an HTML string to a PDF file. Prefers the `playwright` package when it is
// installed (e.g. in CI after `npm ci`); otherwise drives an already-present Chromium /
// Chrome binary via `--headless --print-to-pdf`. Keeps the v3 tooling dependency-free
// for local use while still working inside the Playwright-based CI.

import fs from "node:fs";
import os from "node:os";
import path from "node:path";
import { spawnSync } from "node:child_process";
import { pathToFileURL } from "node:url";

function candidatePaths() {
  const list = [];
  if (process.env.PLANTIM_CHROMIUM) list.push(process.env.PLANTIM_CHROMIUM);
  if (process.env.CHROME_BIN) list.push(process.env.CHROME_BIN);

  // Playwright's cached browser downloads.
  const cache = process.env.PLAYWRIGHT_BROWSERS_PATH
    ? process.env.PLAYWRIGHT_BROWSERS_PATH
    : path.join(os.homedir(), "Library/Caches/ms-playwright");
  try {
    for (const dir of fs.readdirSync(cache)) {
      if (!/^chromium(_headless_shell)?-/.test(dir)) continue;
      const base = path.join(cache, dir);
      for (const rel of [
        "chrome-mac-arm64/Chromium.app/Contents/MacOS/Chromium",
        "chrome-mac/Chromium.app/Contents/MacOS/Chromium",
        "chrome-mac-arm64/chrome-headless-shell",
        "chrome-linux/chrome",
        "chrome-linux/headless_shell",
        "chrome-win/chrome.exe",
      ]) {
        list.push(path.join(base, rel));
      }
    }
  } catch {
    /* no cache dir — fall through to system browsers */
  }

  // System browsers.
  list.push(
    "/Applications/Google Chrome.app/Contents/MacOS/Google Chrome",
    "/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge",
    "/Applications/Brave Browser.app/Contents/MacOS/Brave Browser",
    "/usr/bin/google-chrome",
    "/usr/bin/chromium",
    "/usr/bin/chromium-browser",
  );
  return list;
}

function findChromium() {
  for (const p of candidatePaths()) {
    try {
      if (p && fs.existsSync(p)) return p;
    } catch {
      /* ignore */
    }
  }
  return null;
}

/**
 * @param {string} html   Full HTML document.
 * @param {string} outPath Absolute path of the .pdf to write.
 * @returns {Promise<string>} how it was rendered (for logging).
 */
export async function htmlToPdf(html, outPath) {
  fs.mkdirSync(path.dirname(outPath), { recursive: true });

  // Preferred path: the playwright package (matches how CI already renders galleries).
  try {
    const { chromium } = await import("playwright");
    const browser = await chromium.launch();
    const page = await browser.newPage();
    await page.setContent(html, { waitUntil: "networkidle" });
    await page.pdf({ path: outPath, printBackground: true, preferCSSPageSize: true });
    await browser.close();
    return "playwright";
  } catch (err) {
    const missing =
      err?.code === "ERR_MODULE_NOT_FOUND" || /Cannot find package/.test(String(err?.message ?? err));
    if (!missing) throw err; // playwright is present but genuinely failed
  }

  // Fallback: drive a cached/system Chromium directly.
  const bin = findChromium();
  if (!bin) {
    throw new Error(
      "No Chromium/Chrome found. Set PLANTIM_CHROMIUM=/path/to/chrome, or run `npm ci && npx playwright install chromium`.",
    );
  }
  const tmpHtml = path.join(os.tmpdir(), `plantim-v3-${path.basename(outPath, ".pdf")}.html`);
  fs.writeFileSync(tmpHtml, html);
  const res = spawnSync(
    bin,
    [
      "--headless=new",
      "--disable-gpu",
      "--no-sandbox",
      "--no-pdf-header-footer",
      `--print-to-pdf=${outPath}`,
      pathToFileURL(tmpHtml).href,
    ],
    { stdio: ["ignore", "ignore", "pipe"] },
  );
  fs.rmSync(tmpHtml, { force: true });
  if (res.status !== 0 || !fs.existsSync(outPath)) {
    throw new Error(
      `Chromium print-to-pdf failed (exit ${res.status}): ${res.stderr?.toString().slice(-500) ?? ""}`,
    );
  }
  return `chromium-cli:${bin}`;
}
