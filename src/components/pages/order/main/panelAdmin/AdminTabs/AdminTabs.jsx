import Tabs from "./Tabs";
import AdminToggleTabs from "../AdminTabs/AdminToggleTabs";
import styled from "styled-components";
import { getTabsConfig } from "./tabsConfig";
import { useAdminContext } from "../../../../../../contexts/AdminContext";

const AdminTabs = ({ setPanelContent, isOpen, setIsOpen }) => {
  const { tabSelected, setTabSelected } = useAdminContext();

  const handleClick = (content, index) => {
    setPanelContent(content);
    isOpen == false && setIsOpen(!isOpen);
    setTabSelected(index);
  };

  const tabs = getTabsConfig(tabSelected);

  return (
    <AdminTabsStyled>
      <AdminToggleTabs isOpen={isOpen} setIsOpen={setIsOpen} />
      {tabs.map((tab) => {
        return (
          <Tabs
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
