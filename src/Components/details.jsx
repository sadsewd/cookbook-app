import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useData } from "../Hooks/useData";
import * as S from "./style";

export default function Details(id) {
  const { data } = useData();
  const recipes = data.recipes;
  const isPending = data.isPending;

  return (
    <S.DetailsContainer>
      {isPending || !recipes ? (
        <S.HomeSearch>Fetching data...</S.HomeSearch>
      ) : (
        <>
          <S.DetailsHeading>{recipes[id.id].name}</S.DetailsHeading>
          <S.DetailsTime>
            Takes {recipes[id.id].time} minutes to cook
          </S.DetailsTime>
          <S.DetailsIngredients>
            {recipes[id.id].ingredients.join(",")}
          </S.DetailsIngredients>
          <S.DetailsMethod>{recipes[id.id].method}</S.DetailsMethod>
        </>
      )}
    </S.DetailsContainer>
  );
}
