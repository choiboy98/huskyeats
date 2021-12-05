
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---cache-dev-404-page-js": preferDefault(require("/Users/danielchoi/Desktop/work/huskyeats/.cache/dev-404-page.js")),
  "component---src-pages-404-js": preferDefault(require("/Users/danielchoi/Desktop/work/huskyeats/src/pages/404.js")),
  "component---src-pages-about-js": preferDefault(require("/Users/danielchoi/Desktop/work/huskyeats/src/pages/about.js")),
  "component---src-pages-index-js": preferDefault(require("/Users/danielchoi/Desktop/work/huskyeats/src/pages/index.js")),
  "component---src-recipes-recipe-js": preferDefault(require("/Users/danielchoi/Desktop/work/huskyeats/src/recipes/recipe.js"))
}

