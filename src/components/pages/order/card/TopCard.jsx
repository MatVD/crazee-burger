import { styled } from "styled-components";

const TopCard = ({ image, title }) => {
  return (
    <TopCardStyled>
      <img
        src={image}
        alt={`image du produit ${title}`}
        width='200px'
        height='145px'
      />
    </TopCardStyled>
  );
};

const TopCardStyled = styled.div`
  margin: 0 auto;
  width: 200px;
  height: 145px;
`;

export default TopCard;
