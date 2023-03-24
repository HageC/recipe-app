import React, { useEffect, useState } from "react";
import axios from "axios";
const useFetch = (query) => {
  const [isLoading, setisLoading] = useState(false);
  const [error, setError] = useState({ msg: "", error: false });
  const [recipes, setRecipes] = useState([]);

  const getRecipesHelper = async (data) => {
    setError({ msg: "", error: false });

    try {
      const params = data.map((recipe) => recipe.id).join(",");

      const response = await axios.get(
        `/api/recipes/informationBulk?includeNutrition=false&ids=${params}`
      );

      setRecipes(response.data);
    } catch (error) {
      console.log(error);
      setError({ msg: error.error, error: true });
    }
  };

  const getRecipes = async (query) => {
    if (query && !isLoading) {
      setisLoading(true);
      try {
        const response = await axios.get(
          `/api/recipes/autocomplete?number=10&query=${query}`
        );
        const data = response.data;
        if (data.length == 0) {
          setRecipes([]);
          setisLoading(false);
          setError({ msg: "Recipe not found, please try again.", error: true });
          return;
        } else {
          await getRecipesHelper(data);
        }
      } catch (error) {
        setRecipes([]);
        setError({ msg: error.error, error: true });
      }
      setisLoading(false);
    }
  };

  useEffect(() => {
    getRecipes(query);
  }, [query]);

  return { isLoading, error, recipes };
};

export default useFetch;
