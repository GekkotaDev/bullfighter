// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: [
    "@nuxt/content",
    "@nuxtjs/color-mode",
    "@nuxtjs/device",
    "@nuxtjs/eslint-module",
    "@nuxtjs/i18n",
    "@pinia/nuxt",
    "@vue-macros/nuxt",
    "@vueuse/nuxt",
    "nuxt-icon",
  ],
  nitro: {
    preset: "static",
  },
  ssr: false,
  macros: {
    betterDefine: false,
    definePropsRefs: true,
    reactivityTransform: true,
  },
  imports: {
    presets: [
      {
        from: "motion",
        imports: ["animate", "glide", "spring", "stagger", "timeline"],
      },
      {
        from: "ts-pattern",
        imports: ["match", "P"],
      },
      {
        from: "solivue",
        imports: [
          "createEffect",
          "createRenderEffect",
          "createMemo",
          "onMount",
          "onCleanup",
          "createContext",
          "createSignal",
          "createStore",
          "useContext",
        ],
      },
    ],
  },
});
