import { styled } from "styled-components";
import { Card } from "../../reusable-ui/Card";
import { theme } from "../../../assets/theme/index";
import { fakeMenu2 } from "../../../fakeData/fakeMenu";

export const Main = () => {

  return (
    <MainStyled>
      {fakeMenu2.map((menu) => (
        <Card
          key={menu.id}
          imageSource={menu.imageSource}
          title={menu.title}
          price={menu.price}
        />
      ))}
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
