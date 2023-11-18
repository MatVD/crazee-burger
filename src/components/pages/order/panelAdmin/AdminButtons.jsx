import { useState } from "react";
import AdminButton from "../../../reusable-ui/AdminButton";
import AdminToggleButton from "../../../reusable-ui/AdminToggleButton";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";

const AdminButtons = ({ setPanelTitle, isOpen, setIsOpen }) => {
  const [isSelected, setIsSelected] = useState(false);

  const handleClick = (label) => {
    setPanelTitle(label);
    setIsSelected(!isSelected);
  };

  const buttons = [
    {
      label: "Ajouter un produit",
      icon: <AiOutlinePlus />,
      isSelected: !isSelected,
    },
    {
      label: "Modifier un produit",
      icon: <MdModeEditOutline />,
      isSelected: isSelected,
    },
  ];

  return (
    <AdminButtonsStyled>
      <AdminToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {buttons.map((element, index) => {
        return (
          <AdminButton
            icon={element.icon}
            label={element.label}
            isSelected={element.isSelected}
            key={index}
            onClick={() => handleClick(element.label)}
          />
        );
      })}
    </AdminButtonsStyled>
  );
};

const AdminButtonsStyled = styled.div`
  position: absolute;
  top: -44px;
  left: 70px;
  display: flex;
  height: 0;
`;

export default AdminButtons;
