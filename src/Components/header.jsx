import * as S from "./style.js";
export default function Header({ searchInput, handleSearchInput }) {
  return (
    <S.Header>
      <S.NavBar>
        <S.LogoText to="/">Cook Book</S.LogoText>
        <S.SearchBar
          type="text"
          id="Search"
          value={searchInput}
          onChange={handleSearchInput}
        />
        <S.SearchText>Search:</S.SearchText>
        <S.CreateButton to="/create">create recipe</S.CreateButton>
      </S.NavBar>
    </S.Header>
  );
}
