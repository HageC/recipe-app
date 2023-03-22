import React from "react";

import "../styles/SearchBar.css";
const SearchBar = () => {
  return (
    <div className="search-bar">
      <h1 className="search-bar-title">Search Food</h1>
      <input type="text" className="search-bar-search" />
    </div>
  );
};

export default SearchBar;
