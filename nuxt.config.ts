// https://nuxt.com/docs/api/configuration/nuxt-config
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
  }
});
