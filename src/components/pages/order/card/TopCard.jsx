import { css, styled } from "styled-components";
import { TiDelete } from "react-icons/ti";
import { theme } from "../../../../assets/theme";
import { useMenuContext } from "../../../../contexts/MenuContext";
import EMPTY_PRODUCT from "../../../../enums/product";

export default function TopCard({ image, title, id, isAdminMode, onEdit }) {
  const { menus, deleteMenu, selectedMenu, setSelectedMenu } = useMenuContext();

  const handleDelete = (e) => {
    e.stopPropagation();
    deleteMenu(menus, id);
    selectedMenu.id === id && setSelectedMenu(EMPTY_PRODUCT);
  };

  return (
    <TopCardStyled $onEdit={onEdit}>
      {isAdminMode && <TiDelete className="delete" onClick={handleDelete} />}
      <img
        src={image ? image : "/images/coming-soon.png"}
        alt={`Image du ${title}`}
      />
    </TopCardStyled>
  );
}

const TopCardStyled = styled.div`
  margin: 0 auto;
  padding: 10px;
  width: 200px;
  height: 145px;

  display: flex;
  justify-content: center;

  .delete {
    position: absolute;
    top: 20px;
    right: 20px;
    width: 20px;
    height: 20px;

    color: ${({ $onEdit }) =>
      $onEdit ? theme.colors.white : theme.colors.primary};

    &:hover {
      cursor: pointer;
      color: ${theme.colors.red};
    }
  }

  img {
    height: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius.round};
  }
`;
