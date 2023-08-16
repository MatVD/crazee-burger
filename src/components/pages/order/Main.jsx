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
      <Card className='car6d' name='card6' />
      <Card className='ca7rd' name='card7' />
      <Card className='c8ard' name='card8' />
    </MainStyled>
  );
};

const MainStyled = styled.div`
  flex: 1;
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0px 0px 15px 15px;
  background: ${theme.colors.white};
  padding: 50px 50px 150px;

  display: grid;
  grid-template-rows: 50% 50%;
  grid-template-columns: repeat(4, 25%);
  grid-row-gap: 60px;

`;
