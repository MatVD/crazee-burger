import { styled } from "styled-components";

const TopCard = ({ image, title }) => {
  return (
    <TopCardStyled>
      <img src={image} alt={`image du produit ${title}`} />
    </TopCardStyled>
  );
};

const TopCardStyled = styled.div`
  margin: 0 auto;
  width: 190px;
  height: 145px;

  display: flex;
  justify-content: center;

  img {
    height: 100%;
  }
`;

export default TopCard;
