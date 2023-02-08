import styled from "styled-components";
import { Link } from "react-router-dom";

const headerBG = "#4E208F";
const bg = "#DADADA";

export const Header = styled.header`
  background: ${headerBG};
  padding: 1vw 0;
  width: 100vw;
`;

export const LogoText = styled(Link)`
  color: white;
  font-weight: bold;
  font-size: 1.5vw;
  float: left;
  order: 1;
  margin: 0 45vw 0 10vw;
  :hover {
    cursor: pointer;
  }
`;

export const CreateButton = styled(Link)`
  color: white;
  order: 4;
  font-size: 1vw;
  padding: 0.4vw;
  margin-left: 2vw;
  border: solid white 1px;
  border-radius: 4px;
`;

export const SearchBar = styled.input`
  font-size: 1vw;
  border-radius: 4px;
  height: 2vw;
  background: white;
  order: 3;
  width: 12vw;
  padding: 0.5vw;
  :focus {
    outline: solid #0f53c2 1px;
    outline-offset: -2px;
  }
`;

export const SearchText = styled.p`
  color: white;
  order: 2;
  font-size: 1vw;
  margin-right: 0.8vw;
`;

export const NavBar = styled.nav`
  display: flex;
  width: 100%;
  align-items: center;
`;
