import { css, styled } from "styled-components";
import { theme } from "../../../../assets/theme";
import TopCard from "./TopCard";
import BottomCard from "./BottomCard";

export default function Card({
  id,
  imageSource,
  title,
  price,
  isAdminMode,
  onClick,
  onHover,
  onEdit,
}) {
  return (
    <CardStyled onClick={() => onClick(id)} $onHover={onHover} $onEdit={onEdit}>
      <TopCard
        image={imageSource}
        title={title}
        id={id}
        isAdminMode={isAdminMode}
        onEdit={onEdit}
      />
      <BottomCard price={price} title={title} id={id} onEdit={onEdit}/>
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

  ${({ $onHover }) => $onHover && onHover}
  ${({ $onEdit }) => $onEdit && onEdit}
`;

const onHover = css`
  &:hover {
    transform: scale(105%);
    cursor: pointer;
    box-shadow: 0 0 10px 1px ${theme.colors.primary};
  }
`;

const onEdit = css`
  background: orange;
`;
