import { defineConfig } from "@playwright/test";

export default defineConfig({
  testDir: "gallery/web",
  snapshotPathTemplate: "{testDir}/__snapshots__/{arg}{-projectName}{ext}",
  use: {
    baseURL: "http://127.0.0.1:4173",
  },
  webServer: {
    command: "npm run gallery:dev -- --host 127.0.0.1 --port 4173",
    url: "http://127.0.0.1:4173",
    reuseExistingServer: !process.env.CI,
  },
});
