import React from "react";
import { useGlobalContext } from "../context/context";
import "../styles/SearchBar.css";
import { useRef } from "react";
const SearchBar = () => {
  const queryRef = useRef(null);
  const { setQuery } = useGlobalContext();
  return (
    <div className="search-bar">
      <h1 className="search-bar-title">Search Recipes</h1>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          setQuery(queryRef.current.value);
        }}
      >
        <input type="text" className="search-bar-search" ref={queryRef} />
        <button type="submit" className="search-bar-submit">
          Enter
        </button>
      </form>
    </div>
  );
};

export default SearchBar;
