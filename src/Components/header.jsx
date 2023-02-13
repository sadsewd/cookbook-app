import { useData } from "../Hooks/useData.jsx";
import * as S from "./style.js";
export default function Header() {
  const { updateSearchInput } = useData();
  return (
    <S.Header>
      <S.NavBar>
        <S.LogoText to="/">Cook Book</S.LogoText>
        <S.SearchBar
          type="text"
          id="Search"
          onChange={(e) => updateSearchInput(e.target.value)}
        />
        <S.SearchText>Search:</S.SearchText>
        <S.CreateButton to="/create">create recipe</S.CreateButton>
      </S.NavBar>
    </S.Header>
  );
}
