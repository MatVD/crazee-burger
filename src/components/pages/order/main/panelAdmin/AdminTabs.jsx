import { useState } from "react";
import AdminButton from "../../../../reusable-ui/AdminButton";
import AdminToggleButton from "../../../../reusable-ui/AdminToggleButton";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import styled from "styled-components";

const AdminTabs = ({ setPanelTitle, isOpen, setIsOpen }) => {
  const [tabSelected, setTabSelected] = useState("add");

  const handleClick = (label, index) => {
    setPanelTitle(label);
    isOpen == false && setIsOpen(!isOpen);
    setTabSelected(index);
  };

  const buttons = [
    {
      index: "add",
      label: "Ajouter un produit",
      icon: <AiOutlinePlus />,
      className: tabSelected === "add" ? "isActive" : "",
    },
    {
      index: "edit",
      label: "Modifier un produit",
      icon: <MdModeEditOutline />,
      className: tabSelected === "edit" ? "isActive" : "",
    },
  ];

  return (
    <AdminTabsStyled>
      <AdminToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {buttons.map((button) => {
        return (
          <AdminButton
            icon={button.icon}
            label={button.label}
            key={button.index}
            onClick={() => {handleClick(button.label, button.index)}}
            className={button.className}
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
