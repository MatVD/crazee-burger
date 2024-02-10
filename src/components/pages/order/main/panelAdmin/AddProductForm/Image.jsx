import styled from "styled-components";
import { theme } from "../../../../../../assets/theme";

export default function Image({ imageUrl }) {
  return (
    <ImageStyled className="image">
      {imageUrl !== "" ? (
        <img src={imageUrl} alt="Image du produit" width={209} />
      ) : (
        <span>Aucune image</span>
      )}
    </ImageStyled>
  );
}

const ImageStyled = styled.div`
  flex: 1;
  border: 1px solid ${theme.colors.greyLight};
  border-radius: ${theme.borderRadius.round};
  width: 210px;
  height: 120px;

  display: flex;
  justify-content: center;
  align-items: center;

  color: ${theme.colors.greyBlue};

  img {
    border-radius: ${theme.borderRadius.round};
  }
`;
