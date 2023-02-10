import { createContext, useReducer, useEffect } from "react";
import useFetch from "../hooks/useFetch";

export const RecipesContext = createContext();

const dataReducer = (state, action) => {
  switch (action.type) {
    case "UPDATE_DATA":
      return { ...state, data: action.payload };
    default:
      return state;
  }
};

export const DataProvider = ({ children }) => {
  const [state, dispatch] = useReducer(dataReducer, {
    data: {},
  });

  const { DbData: recipes, isPending } = useFetch();

  useEffect(() => {
    dispatch({ type: "UPDATE_DATA", payload: { recipes, isPending } });
  }, [recipes, isPending]);

  const fetchedData = (data) => {
    dispatch({ type: "UPDATE_DATA", payload: data });
  };

  return (
    <RecipesContext.Provider value={{ ...state, fetchedData }}>
      {children}
    </RecipesContext.Provider>
  );
};
