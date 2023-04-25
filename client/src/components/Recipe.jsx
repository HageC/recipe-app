import React from "react";
import { Link } from "react-router-dom";
const Recipe = ({ recipe }) => {
  return (
    <Link
      style={{ color: "inherit", textDecoration: "inherit" }}
      to={`/${recipe.id}`}
      className="link-outline"
    >
      <div className="recipe">
        <img className="recipe-img" src={recipe.image} alt="" />
        <div className="recipe-info">
          <div className="recipe-title">{recipe.title}</div>
          <p className="recipe-sub">Click to view more</p>
        </div>
      </div>
    </Link>
  );
};

export default Recipe;
