// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  // #region Router Rules.
  routeRules: {},
  // #endregion

  // #region Directories.
  imports: {
    dirs: [
      /*
      The `data` directory is the data persistence layer within the application

      These may range from the Local Storage API to a backend SQL database. The
      job of each module is to ensure that data are both persisted and in sync
      with the application.
       */
      "data",

      /*
      The `providers` directory is the data/state management layer.
       */
      "providers",

      /*
      The `rules` directory contains modules that determine if the current state
      allows the user to proceed with an action.
       */
      "rules",

      /* 
      The `services` directory encapsulates individual, well-defined features of
      the application not directly concerned with the View layer.
       */
      "services",
    ],
  },

  pinia: {
    storesDirs: ["./stores/**"],
  },

  dir: {
    pages: "routes",
  },
  // #endregion

  // #region
  devtools: { enabled: true },
  extends: ["../common", "../ui"],
  pages: true,
  // #endregion

  hooks: {
    // #region Router
    "pages:extend"(pages) {
      const routes: typeof pages = [];

      for (const page of pages) {
        if (!page.name) continue;

        /*
        The pattern that matches for any route groups. These do not appear in
        the URL itself, and primarily exist for semantic organization within the
        development environment.
         */
        if (/\(.*\)/.test(page.path)) {
          page.name = page.name
            .split("-")
            .filter((name) => !/\(.*\)/.test(name))
            .join("-");
          page.path = page.path
            .split("/")
            .filter((path) => !/\(.*\)/.test(path))
            .join("/");
        }

        /*
        The pattern that matches for any valid route.
         */
        if (/\+view$/.test(page.name)) {
          const rawName = page.name.split("-");
          rawName.pop();
          page.name = rawName.join("-");

          const rawPath = page.path.split("/");
          rawPath.pop();
          page.path = rawPath.join("/");

          routes.push(page);
        }
      }

      pages = routes;
    },
    // #endregion
  },
});
