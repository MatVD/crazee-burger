import Button from "../../../reusable-ui/Button";
import { formatPrice } from "../../../../utils/maths";
import { styled } from "styled-components";
import { theme } from "../../../../assets/theme";

const BottomCard = ({ price, title }) => {
  return (
    <BottomCardStyled>
      <h2>{title}</h2>
      <div className="priceAndButton">
        <p>{formatPrice(price)}</p>
        <Button label="Ajouter" className="CTAbutton" version="standard" />
      </div>
    </BottomCardStyled>
  );
};

const BottomCardStyled = styled.div`
  h2 {
    color: #17161a;
    font-family: Amatic SC;
    font-size: 36px;
    font-weight: 700;
    width: 250px;
    height: 55px;

    // Properties for ellipsis ...
    white-space: nowrap;
    text-overflow: ellipsis;
    overflow: hidden;
  }

  .priceAndButton {
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-top: 10px;

    p {
      color: ${theme.colors.primary};
    }

    .CTAbutton {
      padding: 12px 25px 12px 25px;
    }
  }
`;

export default BottomCard;
