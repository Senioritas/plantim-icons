import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  root: "gallery/web",
  plugins: [vue()],
  build: {
    outDir: "../../dist/gallery",
    emptyOutDir: true,
  },
});
