import AdminButton from "../../../../reusable-ui/AdminButton";
import AdminToggleButton from "../../../../reusable-ui/AdminToggleButton";
import styled from "styled-components";
import { tabsConfig } from "./tabsConfig";
import { useState } from "react";

const AdminTabs = ({ setPanelTitle, isOpen, setIsOpen }) => {
  const [tabSelected, setTabSelected] = useState("add");

  const handleClick = (label, index) => {
    setPanelTitle(label);
    isOpen == false && setIsOpen(!isOpen);
    setTabSelected(index);
  };

  const buttons = tabsConfig(tabSelected);

  return (
    <AdminTabsStyled>
      <AdminToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {buttons.map((button) => {
        return (
          <AdminButton
            icon={button.icon}
            label={button.label}
            key={button.index}
            onClick={() => {
              handleClick(button.label, button.index);
            }}
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
