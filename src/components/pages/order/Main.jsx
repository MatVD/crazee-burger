import { styled } from "styled-components";

export const Main = () => {
  return <MainStyled></MainStyled>;
};

const MainStyled = styled.div`
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
`;
