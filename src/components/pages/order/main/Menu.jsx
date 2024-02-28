import { styled } from "styled-components";
import Card from "../card/Card";
import { theme } from "../../../../assets/theme";
import { useMenuContext } from "../../../../contexts/MenuContext";
import Empty from "./EmptyMenus";
import { useAdminContext } from "../../../../contexts/AdminContext";
import EditProductForm from "../main/panelAdmin/EditProductForm/EditProductForm";

export default function Menu() {
  const { isAdminMode } = useAdminContext();
  const { menus, getMenu, selectedMenu, setSelectedMenu } = useMenuContext();
  const { setTabSelected, setIsOpen, setPanelContent } = useAdminContext();

  const handleClick = (id) => {
    if (isAdminMode) {
      setSelectedMenu(getMenu(menus, id));
      setTabSelected("edit");
      setIsOpen(true);
      setPanelContent(<EditProductForm />);
    }
  };

  return (
    <MenuStyled>
      {menus.length < 1 ? (
        <Empty admin={isAdminMode} />
      ) : (
        menus.map((card) => (
          <Card
            key={card.id}
            id={card.id}
            imageSource={card.imageSource}
            title={card.title}
            price={card.price}
            isAdminMode={isAdminMode}
            onClick={handleClick}
            onHover={isAdminMode}
            onEdit={isAdminMode && card.id === selectedMenu?.id}
          />
        ))
      )}
    </MenuStyled>
  );
}

const MenuStyled = styled.div`
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  padding: 50px 50px 150px;

  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  grid-row-gap: 60px;

  overflow-y: scroll;
`;
