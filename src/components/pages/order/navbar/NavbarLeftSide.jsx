import { styled } from "styled-components";
import Logo from "../../../reusable-ui/Logo";

const NavbarLeftSide = () => {
  const refresh = () => window.location.reload(true);

  return (
    <NavbarLeftSideStyled onClick={refresh}>
      <Logo scale={1} />
    </NavbarLeftSideStyled>
  );
};

const NavbarLeftSideStyled = styled.div`
  cursor: pointer;
`;

export default NavbarLeftSide;
