import React from "react";
import { useGlobalContext } from "../context/context";
import "../styles/Recipes.css";
import { Recipe } from "../components";
const Recipes = () => {
  const { recipes, isLoading, error } = useGlobalContext();

  if (isLoading) {
    return <div className="recipes-loading">Loading...</div>;
  }
  if (error.error) {
    return <div className="recipes-error">{error.msg}</div>;
  }
  if (recipes.length > 0) {
    return (
      <div className="recipes">
        <div className="recipes-container">
          <div className="recipes-results">Results: {recipes.length}</div>
          <div className="recipes-grid">
            {recipes.map((recipe) => {
              return <Recipe key={recipe.id} recipe={recipe} />;
            })}
          </div>
        </div>
      </div>
    );
  }
};

export default Recipes;
