import { styled } from "styled-components";
import { Card } from "../card/Card";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";
import { theme } from "../../../../assets/theme";

const Menu = () => {
  const [products, setProducts] = useState(fakeMenu2);

  return (
    <MenuStyled>
      {products.map((product) => (
        <Card
          key={product.id}
          imageSource={product.imageSource}
          title={product.title}
          price={product.price}
        />
      ))}
    </MenuStyled>
  );
};

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;

  overflow-y: scroll;
`;

export default Menu;
