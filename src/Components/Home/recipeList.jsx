import React from "react";
import RecipeItem from "./recipeItem";
import * as S from "../style";

const RecipeList = ({ recipes, isPending }) => {
  return (
    <>
      {recipes && (
        <S.MainRecipeContainer>
          {recipes.map((recipe) => {
            return (
              <div key={recipe._id}>
                <RecipeItem recipe={recipe} />
              </div>
            );
          })}
        </S.MainRecipeContainer>
      )}
    </>
  );
};

export default RecipeList;
