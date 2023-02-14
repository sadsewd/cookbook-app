import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style";

const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${recipe.id}`);
  };

  return (
    <>
      <S.RecipeContainer>
        <S.RecipeName>{recipe.name}</S.RecipeName>
        <S.Time>{recipe.time} minutes to make.</S.Time>
        <S.RecipeMethod>{recipe.method}</S.RecipeMethod>
        <S.ViewRecipeButton onClick={handleClick}>Cook this</S.ViewRecipeButton>
      </S.RecipeContainer>
    </>
  );
};

export default RecipeItem;
