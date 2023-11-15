import { styled } from "styled-components";
import { theme } from "../../../../assets/theme/index";
import Basket from "./Basket";
import Menu from "./Menu";

export const Main = () => {
  return (
    <MainStyled>
      {/* <Basket /> */}
      <Menu />
    </MainStyled>
  );
};

const MainStyled = styled.div`
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  background: ${theme.colors.white};
  border-radius: 0 0 15px 15px;

  display: grid;
  grid-template-columns: 0% 1fr;

  overflow: auto;

  // --- Cache la scrollbar --- //

  &::-webkit-scrollbar {
    opacity: 0;
  }

`;
