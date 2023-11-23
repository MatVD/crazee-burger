import { useState } from "react";
import AdminButton from "../../../../reusable-ui/AdminButton";
import AdminToggleButton from "../../../../reusable-ui/AdminToggleButton";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";

const AdminTabs = ({ setPanelTitle, isOpen, setIsOpen }) => {
  const [isSelected, setIsSelected] = useState(true);

  const handleClick = (label) => {
    setPanelTitle(label);
    setIsSelected(!isSelected);
    isOpen == false && setIsOpen(!isOpen);
  };

  const buttons = [
    {
      label: "Ajouter un produit",
      icon: <AiOutlinePlus />,
      isSelected: isSelected
    },
    {
      label: "Modifier un produit",
      icon: <MdModeEditOutline />,
      isSelected: !isSelected
    },
  ];

  return (
    <AdminTabsStyled>
      <AdminToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {buttons.map((button, index) => {
        return (
          <AdminButton
            icon={button.icon}
            label={button.label}
            isSelected={button.isSelected}
            key={index}
            onClick={() => handleClick(button.label)}
          />
        );
      })}
    </AdminTabsStyled>
  );
};

const AdminTabsStyled = styled.div`
  margin-left: 70px;
  display: flex;
  gap: 1px;
`;

export default AdminTabs;
