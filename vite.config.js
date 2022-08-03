import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";
import virtual from "./plugins/virtual-module";
import inspect from "vite-plugin-inspect";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [vue(), virtual(), inspect()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          vue: ["vue"],
          library: ["rty-ui-plus"],
        },
      },
    },
  },
});
