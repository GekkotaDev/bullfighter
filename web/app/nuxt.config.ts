// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  extends: ["../common", "../ui"],
  pinia: {
    storesDirs: ["./stores/**"],
  },
})
