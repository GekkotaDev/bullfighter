# Bullfighter

***Work In Progress***

A client-side concerned comprehensive starter template for individuals building desktop and mobile\* apps.

\*not until Tauri 2.0

Provided as is, use with care.

## Features

Because no one size fits all, you should be first aware of what you'll be working with in this template to see if it fits your requirements. If this does not meet your requirements, please look for other templates on GitHub or make a fork.

- Total ownership. Because `bullfighter` is merely a template, you gain total control over every aspect that comes with it. This may not be ideal for some who would prefer a framework.
- Managed as a monorepo. This streamlines parallel development of independent though related features by co-locating them within the same repository.
- Comprehensive linter configuration. By default `bullfighter` uses an extensive set of ESLint rules available as a [local monorepo package](./packages/lints). Not every rule may be up to everyone's own tastes, and as such can be configured.

### Notable Frameworks/Libraries

This makes no attempt at listing all the libraries/frameworks used, and are instead hand picked samples that may be noteworthy to pay attention to.

- [Tauri](https://tauri.app/) — provides the ability for platform binaries to natively integrate themselves into the target OS itself, falls back to [`@vite-pwa/nuxt`](https://www.npmjs.com/package/@vite-pwa/nuxt).
- [Nuxt](https://nuxt.com) — the intuitive and agile framework for Vue 3.x applications.
- [`shadcn-vue`](https://www.shadcn-vue.com/) — "Beautifully designed components that you can copy and paste into your apps. Accessible. Customizable. Open Source."; further extended in this template.
- [Histoire](https://histoire.dev/) — preview and develop components in isolation using your existing Vite pipeline.
- [Vitest](https://vitest.dev/) — Jest compatible, Vite native testing framework.

## Usage

### Prerequisites

Your system must have at least [Node.js](https://github.com/coreybutler/nvm-windows) and [Rust](https://www.rust-lang.org/tools/install) installed. Optionally [pnpm](https://pnpm.io) may be installed.

### Using

```powershell
pnpm dlx giget@latest gh:gekkotadev/bullfighter <project directory>
cd <project directory>
pnpm i  # Installs dependencies
```

## License

This template is licensed under [Apache License 2.0](https://www.apache.org/licenses/LICENSE-2.0).
