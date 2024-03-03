import styled from "styled-components";
import { theme } from "../../assets/theme";

export default function Image({ src }) {
  return (
    <ImageStyled>
      {src ? (
        <img
          src={src}
          alt="Image du produit"
        />
      ) : (
        <span>Aucune image</span>
      )}
    </ImageStyled>
  );
}

const ImageStyled = styled.div`
  grid-area: 1/1/4/2;

  display: flex;
  justify-content: center;
  align-items: center;

  span {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    color: ${theme.colors.greyBlue};
  }

  img {
    border-radius: ${theme.borderRadius.round};
    height: 100%;
  }
`;
