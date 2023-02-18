import * as S from "../style";
import RecipeList from "./recipeList";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";

export default function Home() {
  const { data, searchInput } = useSelector((state) => state.dataState);
  const recipes = data.recipes;
  const isPending = data.isPending;
  const [filteredRecipes, setFilteredRecipes] = useState([]);

  useEffect(() => {
    if (isPending === false) {
      if (searchInput) {
        const filteredRecipes1 = recipes.filter((recipe) => {
          if (recipe.name.toUpperCase().includes(searchInput.toUpperCase())) {
            return recipe;
          }
        });
        setFilteredRecipes(filteredRecipes1);
      }
    }
  }, [searchInput]);

  return (
    <>
      {isPending && (
        <>
          <S.HomeSearch>Fetching data...</S.HomeSearch>
        </>
      )}
      {searchInput.length > 0 && (
        <S.HomeSearch>Recipes including {searchInput}</S.HomeSearch>
      )}
      <RecipeList
        recipes={searchInput.length === 0 ? recipes : filteredRecipes}
        isPending={isPending}
      />
    </>
  );
}
