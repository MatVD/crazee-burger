import { styled } from "styled-components";
import NavbarRigthSide from "./NavbarRigthSide";
import NavbarLeftSide from "./NavbarLeftSide";

export const Navbar = ({ username }) => {

  return (
    <NavbarStyled>
      <NavbarLeftSide />
      <NavbarRigthSide username={username}/>
    </NavbarStyled>
  );
};

const NavbarStyled = styled.nav`
  width: "1OO%";
  height: 10vh;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px 0 20px;
`;
