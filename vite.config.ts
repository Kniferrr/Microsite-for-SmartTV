import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    https: false,
  },
  build: {
    outDir: "docs",
  },
  plugins: [react()],
  base: "./",
});
