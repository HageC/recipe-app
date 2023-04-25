import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
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
      console.log(error);
      setError({ msg: error.error, error: true });
    }
    setIsLoading(false);
  };

  useEffect(() => {
    fetchRecipe(id);
  }, []);
  return <div>Recipe</div>;
};

export default Recipe;
