import AdminButton from "../../../../reusable-ui/AdminButton";
import AdminToggleButton from "../../../../reusable-ui/AdminToggleButton";
import styled from "styled-components";
import { getTabsConfig } from "./tabsConfig";
import { useContext } from "react";
import AdminContext from "../../../../../contexts/AdminContext";

const AdminTabs = ({ setPanelContent, isOpen, setIsOpen }) => {
  const { tabSelected, setTabSelected } = useContext(AdminContext);

  const handleClick = (content, index) => {
    setPanelContent(content);
    isOpen == false && setIsOpen(!isOpen);
    setTabSelected(index);
  };

  const tabs = getTabsConfig(tabSelected);

  return (
    <AdminTabsStyled>
      <AdminToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
      {tabs.map((tab) => {
        return (
          <AdminButton
            icon={tab.icon}
            label={tab.label}
            key={tab.index}
            onClick={() => {
              handleClick(tab.content, tab.index);
            }}
            className={tab.className}
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
