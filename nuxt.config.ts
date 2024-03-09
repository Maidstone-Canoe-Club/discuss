// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },

  srcDir: "src/",

  modules: [
    "@nuxtjs/tailwindcss",
    "nuxt-headlessui",
    "@nuxt/fonts"
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
