import { resolve } from "node:path";
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  root: "gallery/web",
  plugins: [vue()],
  build: {
    outDir: "../../dist/gallery",
    emptyOutDir: true,
    rollupOptions: {
      // v2 gallery (index.html, snapshot-tested at "/") + additive v4 gallery page
      input: {
        index: resolve(import.meta.dirname, "index.html"),
        v4: resolve(import.meta.dirname, "v4.html"),
      },
    },
  },
});
