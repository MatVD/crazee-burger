import { styled } from "styled-components";
import { Card } from "../../reusable-ui/Card";
import { theme } from "../../../assets/theme/index";

export const Main = () => {
  return (
    <MainStyled>
      <Card className='card1' name='card1' />
      <Card className='card2' name='card2' />
      <Card className='card3' name='card3' />
      <Card className='card4' name='card4' />
      <Card className='card5' name='card5' />
      <Card className='card6' name='card6' />
      <Card className='card7' name='card7' />
      <Card className='card8' name='card8' />
    </MainStyled>
  );
};

const MainStyled = styled.div`
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  background: ${theme.colors.white};
  padding: 50px 50px 150px;
  overflow: scroll;

  display: grid;
  grid-template-rows: repeat(2, 1fr);
  grid-template-columns: repeat(4, 1fr);
  grid-row-gap: 60px;
`;
