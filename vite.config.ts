import { defineConfig } from "vite";
import { VitePWA } from "vite-plugin-pwa";
import solid from "vite-plugin-solid";

const AppName = "mojicounter";

export default defineConfig({
  plugins: [
    solid(),
    VitePWA({
      registerType: "autoUpdate",
      // devOptions: {
      //   enabled: true,
      // },
      manifest: {
        name: AppName,
        short_name: AppName,
        description: "シンプルな文字数カウンター",

        icons: [
          {
            src: "./public/favicon.svg",
            type: "image/svg+xml",
            sizes: "192x192",
          },
          {
            src: "./public/favicon.svg",
            sizes: "512x512",
            type: "image/svg+xml",
          },
          {
            src: "./public/favicon.svg",
            sizes: "512x512",
            type: "image/svg+xml",
            purpose: "any maskable",
          },
        ],
        start_url: "index.html",
        display: "standalone",
        background_color: "#ffffff",
        theme_color: "#000000",
        lang: "ja",
      },
    }),
  ],
});
