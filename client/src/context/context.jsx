import React, { useState } from "react";
import { useContext } from "react";
import useFetch from "../hooks/useFetch";

const AppContext = React.createContext();

const AppProvider = ({ children }) => {
  const [query, setQuery] = useState("");
  const { isLoading, error, recipes } = useFetch(query);
  return (
    <AppContext.Provider value={{ setQuery, isLoading, error, recipes, query }}>
      {children}
    </AppContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(AppContext);
};

export default AppProvider;
