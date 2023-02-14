import { useDispatch } from "react-redux";
import { UPDATE_INPUT } from "../Redux-toolkit/Recipes.jsx";
import * as S from "./style.js";
export default function Header() {
  const dispatch = useDispatch();
  return (
    <S.Header>
      <S.NavBar>
        <S.LogoText to="/">Cook Book</S.LogoText>
        <S.SearchBar
          type="text"
          id="Search"
          onChange={(e) => dispatch(UPDATE_INPUT(e.target.value))}
        />
        <S.SearchText>Search:</S.SearchText>
        <S.CreateButton to="/create">create recipe</S.CreateButton>
      </S.NavBar>
    </S.Header>
  );
}
