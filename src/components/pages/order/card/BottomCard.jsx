import Button from "../../../reusable-ui/Button";
import { formatPrice } from "../../../../utils/maths";
import { css, styled } from "styled-components";
import { theme } from "../../../../assets/theme";
import { useMenuContext } from "../../../../contexts/MenuContext";

export default function BottomCard({ price, title, id, onEdit }) {
  const { menu } = useMenuContext();

  const handleClick = (e) => {
    e.stopPropagation();
  };

  return (
    <BottomCardStyled $onEdit={onEdit}>
      <h2>{menu?.id == id ? menu.title : title}</h2>
      <div className="priceAndButton">
        <p>{menu?.id == id ? formatPrice(menu.price) : formatPrice(price)}</p>
        <Button
          label="Ajouter"
          className="CTAbutton"
          version="standard"
          onClick={handleClick}
        />
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
      color: ${({ $onEdit }) =>
        $onEdit ? theme.colors.white : theme.colors.primary};
    }

    .CTAbutton {
      padding: 12px 25px 12px 25px;

      color: ${({ $onEdit }) =>
        $onEdit ? theme.colors.primary : theme.colors.white};

      background-color: ${({ $onEdit }) =>
        $onEdit ? theme.colors.white : theme.colors.primary};
    }
  }
`;
