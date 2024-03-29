import { styled } from "styled-components";
import { Card } from "../card/Card";
import { theme } from "../../../../assets/theme";
import { useMenuContext } from "../../../../contexts/MenuContext";
import Empty from "./EmptyMenus";
import { useAdminContext } from "../../../../contexts/AdminContext";

const Menu = () => {
  const { menus } = useMenuContext();
  const { isAdminMode } = useAdminContext();

  return (
    <MenuStyled>
      {menus.length < 1 ? (
        <Empty admin={isAdminMode} />
      ) : (
        menus.map((menu) => (
          <Card
            key={menu.id}
            id={menu.id}
            imageSource={menu.imageSource}
            title={menu.title}
            price={menu.price}
          />
        ))
      )}
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
