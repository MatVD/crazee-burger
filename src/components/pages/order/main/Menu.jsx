import { styled } from "styled-components";
import { Card } from "../card/Card";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";
import { useState } from "react";

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
  padding: 50px 50px 150px;

  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: repeat(2, 1fr);
  gap: 85px;
`;

export default Menu;
