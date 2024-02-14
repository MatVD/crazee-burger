import Button from "../../../reusable-ui/Button";
import { formatPrice } from "../../../../utils/maths";
import { css, styled } from "styled-components";
import { theme } from "../../../../assets/theme";

export default function BottomCard({ price, title, state }) {
  return (
    <BottomCardStyled state={state}>
      <h2>{title}</h2>
      <div className="priceAndButton">
        <p>{formatPrice(price)}</p>
        <Button label="Ajouter" className="CTAbutton" version="standard" />
      </div>
    </BottomCardStyled>
  );
}

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
      // Si l'état est à "onEdit" alors text color white sinon primary
      color: ${({ state }) =>
        state == "onEdit" ? theme.colors.white : theme.colors.primary};
    }

    .CTAbutton {
      padding: 12px 25px 12px 25px;

      // Si l'état est à "onEdit" alors text color primary sinon white
      color: ${({ state }) =>
        state == "onEdit" ? theme.colors.primary : theme.colors.white};

      // Si l'état est à "onEdit" alors bg-color white sinon primary
      background-color: ${({ state }) =>
        state == "onEdit" ? theme.colors.white : theme.colors.primary};
    }
  }
`;
