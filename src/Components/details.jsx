import { useLocation } from "react-router-dom";
import * as S from "./style";

export default function Details() {
  const location = useLocation();
  const recipe = location.state;
  return (
    <S.DetailsContainer>
      <S.DetailsHeading>{recipe.name}</S.DetailsHeading>
      <S.DetailsTime>Takes {recipe.time} minutes to cook</S.DetailsTime>
      <S.DetailsIngredients>{recipe.ingredients}</S.DetailsIngredients>
      <S.DetailsMethod>{recipe.method}</S.DetailsMethod>
    </S.DetailsContainer>
  );
}
