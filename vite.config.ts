import { defineConfig } from "vite"
import vue from "@vitejs/plugin-vue"
import { viteSingleFile } from "vite-plugin-singlefile";
import compact_obfuscator_plugin from "./plugin/index";

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue(), compact_obfuscator_plugin, viteSingleFile()],
  build: {
    terserOptions: {
      format: {
        comments: false,
      },
    },
    modulePreload: false,
  },
  base: "./",
})
