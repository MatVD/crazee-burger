import { css, styled } from "styled-components";
import { theme } from "../../../../assets/theme";
import TopCard from "./TopCard";
import BottomCard from "./BottomCard";
import { useEffect } from "react";

export default function Card({
  id,
  imageSource,
  title,
  price,
  isAdminMode,
  onClick,
  cardState,
  setCardState,
}) {
  useEffect(() => {
    isAdminMode && setCardState("isEditable");
    !isAdminMode && setCardState("normal");
  }, [isAdminMode]);

  return (
    <CardStyled onClick={() => onClick(id)} $state={cardState}>
      <TopCard
        image={imageSource}
        title={title}
        id={id}
        isAdminMode={isAdminMode}
        state={cardState}
      />
      <BottomCard price={price} title={title} state={cardState} id={id} />
    </CardStyled>
  );
}

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

  ${({ $state }) => getState[$state]}
`;

const isEditable = css`
  &:hover {
    cursor: pointer;
    border: 1px solid ${theme.colors.primary};
    transform: scale(105%);
  }
`;

const onEdit = css`
  background-color: ${theme.colors.primary};

  &:hover {
    transform: scale(105%);
    cursor: pointer;
  }
`;

const getState = {
  isEditable,
  onEdit,
};
