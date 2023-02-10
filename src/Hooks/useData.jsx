import { useContext } from "react";
import { RecipesContext } from "../Context/RecipesContext";

export const useData = () => {
  const context = useContext(RecipesContext);

  if (context === undefined) {
    throw Error("useData() must be used inside DataProvider");
  }

  return context;
};
