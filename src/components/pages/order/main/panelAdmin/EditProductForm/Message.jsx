import styled from "styled-components";
import { theme } from "../../../../../../assets/theme";
import { HiCursorClick } from "react-icons/hi";

export default function Message() {
  return (
    <MessageStyled>
      <h2>Cliquer sur un produit du menu pour le modifier</h2>
      <HiCursorClick className="icon" />
    </MessageStyled>
  );
}

const MessageStyled = styled.div`
  display: flex;
  align-items: center;
  gap: 10px;

  h2 {
    text-transform: uppercase;
    font-family: Amatic SC;
    font-size: 24px;
    color: ${theme.colors.greyBlue};
  }

  .icon {
    color: ${theme.colors.greyBlue};
  }
`;
