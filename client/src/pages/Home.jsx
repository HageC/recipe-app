import React from "react";

import { Recipes, SearchBar } from "../components";
const Home = () => {
  return (
    <div>
      <SearchBar />
      <Recipes />
    </div>
  );
};

export default Home;
