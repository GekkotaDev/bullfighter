import Macros from "unplugin-macros/vite";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["../common", "../ui"],
  modules: ["@vite-pwa/nuxt"],
});
