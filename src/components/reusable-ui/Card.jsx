import { styled } from "styled-components";
import { theme } from "../../assets/theme";
import Button from "../reusable-ui/Button";
import { formatPrice } from "../../utils/maths";

export const Card = ({ imageSource, title, price }) => {
  return (
    <CardStyled>
      <div className='wrapperImage'>
        <img
          src={imageSource}
          alt={`image du produit ${title}`}
          width='200px'
          height='145px'
        />
      </div>
      <div className='wrapperInfos'>
        <h2>{title}</h2>
        <div className='priceAndButton'>
          <p>{formatPrice(price)}</p>
          <Button label='Ajouter' className='CTAbutton' />
        </div>
      </div>
    </CardStyled>
  );
};

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 15px;

  box-shadow: -8px 8px 20px 0 rgba(0, 0, 0, 0.2);
  padding: 50px 20px 10px 20px;
  border-radius: ${theme.borderRadius.extraRound};

  background: ${theme.colors.background_white};

  div.wrapperImage {
    margin: 0 auto;
    width: 200px;
    height: 145px;
  }

  h2 {
    color: #17161a;
    font-family: Amatic SC;
    font-size: 36px;
    font-style: normal;
    font-weight: 700;
  }

  div.priceAndButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    p {
      color: ${theme.colors.primary};
    }
  }

  .CTAbutton {
    width: 95px;
    height: 38px;
    padding: 12px 26.3px 12px 26.5px;
  }
`;
