import { defineConfig } from "vite";
import reactRefresh from "@vitejs/plugin-react-refresh";
const path = require("path");

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    lib: {
      entry: path.resolve(__dirname, "lib/main.js"),
      name: "Vega",
    },
    rollupOptions: {
      external: ["react", "react-dom"],
    },
  },
  plugins: [reactRefresh()],
});
