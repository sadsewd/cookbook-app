import * as S from "../style";
import { useData } from "../../Hooks/useData";
import RecipeList from "./recipeList";
import { useEffect } from "react";
import { useState } from "react";

export default function Home(searchInput) {
  const { data } = useData();
  const recipes = data.recipes;
  const isPending = data.isPending;
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    if (isPending === false) {
      if (searchInput) {
        const filteredRecipes1 = recipes.filter((recipe) => {
          if (
            recipe.name
              .toUpperCase()
              .includes(searchInput.searchInput.toUpperCase())
          ) {
            return recipe;
          }
        });
        setFilteredRecipes(filteredRecipes1);
      }
    }
  }, [searchInput]);

  return (
    <>
      <RecipeList
        recipes={
          searchInput.searchInput.length === 0 ? recipes : filteredRecipes
        }
        isPending={isPending}
      />
    </>
  );
}
