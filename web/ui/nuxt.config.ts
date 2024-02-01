import url from "node:url";

// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  devtools: { enabled: true },
  modules: ['@nuxtjs/tailwindcss'],
  imports: {
    autoImport: true,
    presets: [
      {
        from: "class-variance-authority",
        imports: ["cva"],
      },
      {
        from: "clsx",
        imports: ["clsx"],
      },
      {
        from: "tailwind-merge",
        imports: ["twMerge"],
      },
    ],
  },
  alias: {
    "@ui": url.fileURLToPath(new URL("./components/ui", import.meta.url)),
    "@utils": url.fileURLToPath(new URL("./utils", import.meta.url)),
  },
  // components: {
  //   dirs: [
  //     "~/components"
  //   ]
  // }
  // postcss: {
  //   plugins: {
  //     tailwindcss: {},
  //     autoprefixer: {}
  //   }
  // }
})
