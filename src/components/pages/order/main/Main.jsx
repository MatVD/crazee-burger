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
  border-radius: 0px 0px 15px 15px;
  background: ${theme.colors.white};

  display: grid;
  grid-template-columns: 0% 1fr;

  overflow: scroll;
`;
