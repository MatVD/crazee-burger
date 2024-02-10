import { styled } from "styled-components";
import { TiDelete } from "react-icons/ti";
import { theme } from "../../../../assets/theme";
import { useAdminContext } from "../../../../contexts/AdminContext";
import { deleteMenu, useMenuContext } from "../../../../contexts/MenuContext";

const TopCard = ({ image, title, id }) => {
  const { isAdminMode } = useAdminContext();
  const { menus, setMenus } = useMenuContext();

  const handleClick = (id) => {
    const newMenus = deleteMenu(menus, id);
    setMenus(newMenus);
  };

  return (
    <TopCardStyled>
      {isAdminMode && (
        <TiDelete className="delete" onClick={() => handleClick(id)} />
      )}
      {image ? (
        <img src={image} alt={`image du produit ${title}`} />
      ) : (
        <img src="/images/coming-soon.png" alt={`image du produit ${title}`} />
      )}
    </TopCardStyled>
  );
};

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
    color: ${theme.colors.primary};
  }

  .delete:hover {
    cursor: pointer;
    color: ${theme.colors.red};
  }

  img {
    height: 100%;
    height: 100%;
    border-radius: ${theme.borderRadius.round};
  }
`;

export default TopCard;
