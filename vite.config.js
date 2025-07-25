// vite.config.js
import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  base: "/ym-proj/", // 👈 이 줄 추가
  plugins: [vue()],
});
