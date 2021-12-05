import React from "react";

const Recipe = ({ pageContext: recipe }) => <div>{recipe.title}</div>;

export default Recipe;