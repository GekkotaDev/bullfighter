# `web/ui`

The `web/ui` directory contains UI components shared across your Nuxt applications and websites.

Components here are developed using stories which enables developers to develop their components in isolation, render them as a specified variant, and create documentation for those UI components out of the box; Histoire additionally documents your Tailwind CSS styles, providing an additional reference for both developers and designers.

In parallel these components are tested against your **spec**ification files with Vitest in making sure that your components are up to code in how they should behave as you would expect, and with reduced boilerplate as Nuxt's existing Vite pipeline is automatically used.

To automatically generate a component, or a complimentary utility or composable, run `pnpm g`. This will bring up a `plop` CLI.
