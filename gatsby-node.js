const path = require("path");

exports.createPages = async ({ actions }) => {
  const { createPage } = actions;
  const recipeTemplate = path.resolve(`./src/recipes/recipe.js`);

  const recipes = [
    {
      title: "Project #1",
      slug: "recipe-1"
    },
    {
      title: "Project #2",
      slug: "project-2"
    },
    {
      title: "Project #3",
      slug: "project-3"
    },
    {
      title: "Project #4",
      slug: "project-4"
    }
  ];

  const createProjectPage = (recipe, index) => {
    const next = recipes[index === recipes.length - 1 ? 0 : index + 1];
    createPage({
      path: `/recipes/${recipe.slug}`,
      component: recipeTemplate,
      context: {
        ...recipe,
        next
      }
    });
  };

  recipes.forEach(createProjectPage);
};