import { createContext, useReducer, useEffect, useState } from "react";
import useFetch from "../hooks/useFetch";

export const RecipesContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, data: action.payload };
    case "UPDATE_INPUT":
      return { ...state, searchInput: action.payload };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    data: {},
    searchInput: "",
  });

  const refetchData = (data) => {
    dispatch({ type: "UPDATE_DATA", payload: data });
  };

  const updateSearchInput = (data) => {
    dispatch({ type: "UPDATE_INPUT", payload: data });
  };

  return (
    <RecipesContext.Provider
      value={{ ...state, refetchData, updateSearchInput }}
    >
      {children}
    </RecipesContext.Provider>
  );
};
