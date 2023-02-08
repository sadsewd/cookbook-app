import styled from "styled-components";
import { Link } from "react-router-dom";

// === Variables === //

const borderRadius = "border-radius: 4px;";
const purple = "#4E208F";
const grayBg = "#dadada";
const grayText = "#757575";

// === End of Variables === //

// ===== Header CSS ===== //

export const Header = styled.header`
  background: ${purple};
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
  ${borderRadius};
`;

export const SearchBar = styled.input`
  font-size: 1vw;
  ${borderRadius};
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

// ===== End of header CSS ===== //

// ===== Home CSS ===== //

// ===== End of home CSS ===== //

// ===== Create CSS ===== //

export const CreateHeader = styled.h1`
  font-weight: bold;
  font-size: 1.5vw;
`;

export const CreateContainer = styled.div`
  margin-top: 4vw;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const CreateForm = styled.form`
  margin-top: 2vw;
  display: flex;
  width: 30%;
  flex-direction: column;
`;

export const Ingredients = styled.div`
  display flex;
  align-items: center;
`;

export const Label = styled.label`
  font-size: 1.1vw;
  color: ${grayText};
  margin: 1.5vw 0 0.5vw 0;
`;

export const IngredientsListHeader = styled.p`
  font-size: 0.8vw;
  color: ${grayText};
`;

export const Input = styled.input`
  background: white;
  height: 2vw;
  ${borderRadius};
`;

export const AddButton = styled.input`
  background: ${purple};
  color: white;
  padding: 0.5vw 0;
  width: 4vw;
  margin-left: .5vw;
  text-align center;
  ${borderRadius};
  :hover{
    cursor: pointer;
  }
`;

export const IngredientsInput = styled.input`
  background: white;
  height: 2vw;
  width: 85%;
  ${borderRadius};
`;

export const TextArea = styled.textarea`
  background: white;
  ${borderRadius};
  resize: vertical;
  height: 3vw;
`;

export const Submit = styled.input`
  margin-top: 1.5vw;
  align-self: center;
  background: ${purple};
  color: white;
  padding: 0.5vw 0;
  width: 30vw;
  text-align center;
  ${borderRadius};
  :hover{
    cursor: pointer;
  }
`;

// ===== End of create CSS ===== //
