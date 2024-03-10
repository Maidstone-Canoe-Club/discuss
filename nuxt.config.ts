import process from "node:process";

// https://nuxt.com/docs/api/configuration/nuxt-config

const sw = process.env.SW === "true";

export default defineNuxtConfig({
  devtools: { enabled: true },

  appConfig: {
    umami: {
      host: "https://analytics.maidstonecanoeclub.net",
      id: "3f6c7199-7571-46e3-a571-d9d0a94d1c33",
      ignoreLocalhost: true,
      version: 2
    }
  },

  srcDir: "src/",

  modules: [
    "@vite-pwa/nuxt",
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@nuxt/fonts"
  ],

  extends: [
    "nuxt-umami"
  ],

  components: [
    {
      path: "~/components",
      pathPrefix: false
    }
  ],

  headlessui: {
    prefix: ""
  },

  nitro: {
    preset: "cloudflare-pages"
  },

  pwa: {
    strategies: sw ? "injectManifest" : "generateSW",
    srcDir: sw ? "service-worker" : undefined,
    filename: sw ? "sw.ts" : undefined,
    registerType: "autoUpdate",
    manifest: {
      name: "MCC Discuss",
      short_name: "MCC Discuss",
      theme_color: "#cdeeff",
      display: "minimal-ui",
      icons: [
        {
          src: "pwa-192x192.png",
          sizes: "192x192",
          type: "image/png"
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png"
        },
        {
          src: "pwa-512x512.png",
          sizes: "512x512",
          type: "image/png",
          purpose: "any maskable"
        }
      ]
    },
    workbox: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"]
    },
    injectManifest: {
      globPatterns: ["**/*.{js,css,html,png,svg,ico}"]
    },
    client: {
      installPrompt: true
    },
    devOptions: {
      enabled: true,
      suppressWarnings: true,
      navigateFallback: "/",
      navigateFallbackAllowlist: [/^\/$/],
      type: "module"
    }
  }
});
