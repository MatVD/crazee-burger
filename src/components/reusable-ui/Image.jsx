import styled from "styled-components";
import { theme } from "../../assets/theme";
import { useMenuContext } from "../../contexts/MenuContext";

export default function Image() {
  const { menuToEdit } = useMenuContext();
  return (
    <ImageStyled>
      {menuToEdit?.imageSource != "" ? (
        <img src={menuToEdit?.imageSource} alt="Image du produit" width={210} />
      ) : (
        <span>Aucune image</span>
      )}
    </ImageStyled>
  );
}

const ImageStyled = styled.div`
  grid-area: 1/1/4/2;

  border: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};
  color: ${theme.colors.greyBlue};

  display: flex;
  justify-content: center;
  align-items: center;

  img {
    border-radius: ${theme.borderRadius.round};
  }
`;
