import * as S from "../style";
import { useData } from "../../Hooks/useData";
import RecipeList from "./recipeList";

export default function Home() {
  const { data } = useData();
  const recipes = data.recipes;
  const isPending = data.isPending;

  return (
    <>
      <RecipeList recipes={recipes} isPending={isPending} />
    </>
  );
}
