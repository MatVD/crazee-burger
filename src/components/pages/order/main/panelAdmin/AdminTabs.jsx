import AdminButton from "../../../../reusable-ui/AdminButton";
import AdminToggleButton from "../../../../reusable-ui/AdminToggleButton";
import styled from "styled-components";
import { getTabsConfig } from "./tabsConfig";
import { useContext } from "react";
import AdminContext from "../../../../../contexts/AdminContext";

const AdminTabs = ({ setPanelTitle, isopen, setIsOpen }) => {
  const { tabSelected, setTabSelected } = useContext(AdminContext);

  const handleClick = (label, index) => {
    setPanelTitle(label);
    isopen == "false" && setIsOpen(!isopen);
    setTabSelected(index);
  };

  const tabs = getTabsConfig(tabSelected);

  return (
    <AdminTabsStyled>
      <AdminToggleButton isopen={isopen} setIsOpen={setIsOpen} />
      {tabs.map((button) => {
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
