import React from "react";
import { useNavigate } from "react-router-dom";
import * as S from "../style";

const RecipeItem = ({ recipe }) => {
  const navigate = useNavigate();

  const handleClick = () => {
    navigate(`/details/${recipe._id}`);
  };

  return (
    <>
      <S.RecipeContainer>
        <S.RecipeName>
          {recipe.name ? <>{recipe.name}</> : <>Recipe name not given</>}
        </S.RecipeName>
        <S.Time>
          {recipe.time ? (
            <>{recipe.time} minutes to make</>
          ) : (
            <>Time to cook is not given</>
          )}
        </S.Time>
        <S.RecipeMethod>
          {recipe.method ? <>{recipe.method}</> : <>No description given</>}
        </S.RecipeMethod>
        <S.ViewRecipeButton onClick={handleClick}>Cook this</S.ViewRecipeButton>
      </S.RecipeContainer>
    </>
  );
};

export default RecipeItem;
