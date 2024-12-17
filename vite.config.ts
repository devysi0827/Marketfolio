import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginSvgr from "vite-plugin-svgr";
import tsconfigPaths from "vite-tsconfig-paths";
import compression from "vite-plugin-compression2";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginSvgr(),
    tsconfigPaths(),
    compression({
      threshold: 1024 * 10, // 10KB 이상 파일 압축
    }),
  ],
  base: "/MarketFolio/",
  assetsInclude: ["**/*.gltf", "**/*.svg?react", "**/*.png"],
  server: {},
});
