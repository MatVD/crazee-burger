import { styled } from "styled-components";
import { Card } from "../card/Card";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

const Menu = () => {
  return (
    <MenuStyled>
      {fakeMenu2.map((menu) => (
        <Card
          key={menu.id}
          imageSource={menu.imageSource}
          title={menu.title}
          price={menu.price}
        />
      ))}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  padding: 50px 50px 150px;
  
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 85px;
`;

export default Menu;
