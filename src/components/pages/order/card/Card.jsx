import { css, styled } from "styled-components";
import { theme } from "../../../../assets/theme";
import TopCard from "./TopCard";
import BottomCard from "./BottomCard";

export const Card = ({
  id,
  imageSource,
  title,
  price,
  onClick,
  version = "standard",
}) => {
  return (
    <CardStyled onClick={onClick} version={version}>
      <TopCard image={imageSource} title={title} id={id} />
      <BottomCard price={price} title={title} />
    </CardStyled>
  );
};

const CardStyled = styled.div`
  position: relative; // For delete button
  width: 250px;
  height: 330px;
  margin: auto;

  display: flex;
  flex-direction: column;
  gap: 15px;

  box-shadow: -8px 8px 20px 0 rgba(0, 0, 0, 0.2);
  padding: 50px 20px 10px 20px;
  border-radius: ${theme.borderRadius.extraRound};

  ${({ version }) => getVersion[version]}
`;

const adminMode = css`
  &:hover {
    cursor: pointer;
    border: 1px solid ${theme.colors.primary};
    transform: scale(105%);
  }
`;

const getVersion = {
  adminMode,
};
