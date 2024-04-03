export default (
  /** @type {import('plop').NodePlopAPI} */
  plop,
) => {
  plop.setGenerator("component", {
    description: "Reusable UI component",
    prompts: [
      {
        default: "/",
        name: "subdirectory",
        type: "input",
        message:
          "Which subdirectory should your component be in? (optional, case sensitive)",
      },
      {
        name: "name",
        type: "input",
        message: "Name of your UI component.",
      },
    ],
    actions: [
      {
        type: "add",
        templateFile: "templates/component/index.vue.hbs",
        path: "components/{{subdirectory}}/{{pascalCase name}}/{{pascalCase name}}.vue",
      },
      {
        type: "add",
        templateFile: "templates/component/component.story.vue.hbs",
        path: "components/{{subdirectory}}/{{pascalCase name}}/{{pascalCase name}}.story.vue",
      },
      {
        type: "add",
        templateFile: "templates/component/component.spec.ts.hbs",
        path: "components/{{subdirectory}}/{{pascalCase name}}/{{pascalCase name}}.spec.ts",
      },
    ],
  });

  plop.setGenerator("provider", {
    description: "Subtree dependency injection.",
    prompts: [
      {
        name: "name",
        type: "input",
        message: "Role of your provider.",
      },
    ],
    actions: [
      {
        type: "add",
        templateFile: "templates/provider/provider.tsx.hbs",
        path: "components/{{pascalCase name}}Provider.tsx",
      },
    ],
  });

  plop.setGenerator("layout", {
    description: "UI layout.",
    prompts: [
      {
        default: "/",
        name: "subdirectory",
        type: "input",
        message:
          "Which subdirectory should your layout be in? (optional, case sensitive)",
      },
      {
        name: "name",
        type: "input",
        message: "Name of your layout.",
      },
    ],
    actions: [
      {
        type: "add",
        templateFile: "templates/layout/index.vue.hbs",
        path: "layouts/{{subdirectory}}/{{name}}/{{name}}.vue",
      },
      {
        type: "add",
        templateFile: "templates/layout/layout.story.vue.hbs",
        path: "layouts/{{subdirectory}}/{{name}}/{{name}}.story.vue",
      },
      {
        type: "add",
        templateFile: "templates/layout/layout.spec.ts.hbs",
        path: "layouts/{{subdirectory}}/{{name}}/{{name}}.spec.ts",
      },
    ],
  });

  plop.setGenerator("route", {
    description: "Application route.",
    prompts: [
      {
        default: "/",
        name: "route",
        type: "input",
      },
    ],
    actions: [
      {
        type: "add",
        templateFile: "templates/route/.route/error.vue",
        path: "routes/{{route}}/.route/error.vue",
      },
      {
        type: "add",
        templateFile: "templates/route/.route/loading.vue",
        path: "routes/{{route}}/.route/loading.vue",
      },
      {
        type: "add",
        templateFile: "templates/route/.route/view.vue",
        path: "routes/{{route}}/.route/view.vue",
      },
      {
        type: "add",
        templateFile: "templates/route/+error.vue",
        path: "routes/{{route}}/+error.vue",
      },
      {
        type: "add",
        templateFile: "templates/route/+loading.vue",
        path: "routes/{{route}}/+loading.vue",
      },
      {
        type: "add",
        templateFile: "templates/route/+view.vue",
        path: "routes/{{route}}/+view.vue",
      },
      {
        type: "add",
        templateFile: "templates/route/hooks.ts",
        path: "routes/{{route}}/hooks.ts",
      },
    ],
  });
};
