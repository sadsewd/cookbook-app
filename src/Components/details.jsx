import { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import * as S from "./style";

export default function Details() {
  const id = useParams();
  const { data } = useSelector((state) => state.dataState);
  const recipes = data.recipes;
  const isPending = data.isPending;
  let filteredObject = undefined;
  if (isPending === false) {
    filteredObject = recipes.filter((obj) => {
      return obj._id === id.id;
    });
    console.log(filteredObject);
  }

  return (
    <S.DetailsContainer>
      {isPending || !filteredObject ? (
        <S.HomeSearch>Fetching data...</S.HomeSearch>
      ) : (
        <>
          <S.DetailsHeading>{filteredObject[0].name}</S.DetailsHeading>
          <S.DetailsTime>
            {filteredObject[0].time && (
              <>Takes {filteredObject[0].time} minutes to cook</>
            )}
          </S.DetailsTime>
          <S.DetailsIngredients>
            {filteredObject[0].ingredients.join(",")}
          </S.DetailsIngredients>
          <S.DetailsMethod>{filteredObject[0].method}</S.DetailsMethod>
        </>
      )}
    </S.DetailsContainer>
  );
}
