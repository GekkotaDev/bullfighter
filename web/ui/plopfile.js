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
};
