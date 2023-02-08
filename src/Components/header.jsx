import * as S from "./style.js";
export default function Header() {
  return (
    <S.Header>
      <S.NavBar>
        <S.LogoText to="/">Cook Book</S.LogoText>
        <S.SearchBar type="text" name="" id="" />
        <S.SearchText>Search:</S.SearchText>
        <S.CreateButton to="/create">create recipe</S.CreateButton>
      </S.NavBar>
    </S.Header>
  );
}
