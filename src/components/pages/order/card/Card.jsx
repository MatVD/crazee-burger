import { css, styled } from "styled-components";
import { theme } from "../../../../assets/theme";
import TopCard from "./TopCard";
import BottomCard from "./BottomCard";
import CardStateContext from "../../../../contexts/CardStateContext";
import { useEffect, useState } from "react";
import { getMenu, useMenuContext } from "../../../../contexts/MenuContext";
import { useAdminContext } from "../../../../contexts/AdminContext";
import EditProductForm from "../main/panelAdmin/EditProductForm/EditProductForm";

export default function Card({ id, imageSource, title, price, isAdminMode }) {
  const { menus, setMenuToEdit } = useMenuContext();
  const [cardState, setCardState] = useState("normal");
  const { setTabSelected, setIsOpen, setPanelContent } = useAdminContext();

  useEffect(() => {
    isAdminMode && setCardState("isEditable");
    !isAdminMode && setCardState("normal");
  }, [isAdminMode]);

  const handleClick = () => {
    setMenuToEdit(getMenu(menus, id));
    isAdminMode && setCardState("onEdit");
    setTabSelected("edit");
    setIsOpen(true);
    setPanelContent(<EditProductForm />);
  };

  return (
    <CardStateContext.Provider value={{ cardState, setCardState }}>
      <CardStyled onClick={handleClick} $state={cardState}>
        <TopCard
          image={imageSource}
          title={title}
          id={id}
          isAdminMode={isAdminMode}
          state={cardState}
        />
        <BottomCard price={price} title={title} state={cardState} id={id} />
      </CardStyled>
    </CardStateContext.Provider>
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
  }
`;

const getState = {
  isEditable,
  onEdit,
};
