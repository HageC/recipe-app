import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { Loading } from "../components";
import "../styles/RecipePage.css";
const Recipe = () => {
  const { id } = useParams();
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState({ msg: "", error: false });
  const [recipe, setRecipe] = useState([]);

  const fetchRecipe = async (id) => {
    setIsLoading(true);
    try {
      const response = await axios.get(
        `/api/recipes/${id}/information?includeNutrition=false`
      );
      setRecipe(response.data);
    } catch (error) {
      setError({ msg: error.error, error: true });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipe(id);
  }, []);

  if (isLoading) {
    return <Loading />;
  }

  if (error.error) {
    return <div className="recipes-error">{error.msg}</div>;
  }
  return (
    <div
      className="recipe-info"
      dangerouslySetInnerHTML={{ __html: recipe.summary }}
    ></div>
  );
};

export default Recipe;
