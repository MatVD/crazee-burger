import { styled } from "styled-components";
import { theme } from "../../../../assets/theme/index";
import Basket from "./Basket";
import Menu from "./Menu";
import { useContext, useState } from "react";
import Admin from "./panelAdmin/Admin";
import ThemeContext from "../../../../contexts/themeContext";
import { useAdminContext } from "../../../../contexts/AdminContext";
import MenuContext from "../../../../contexts/MenuContext";
import { fakeMenu2 } from "../../../../fakeData/fakeMenu";

export const Main = () => {
  const themeContext = useContext(ThemeContext);
  const { isAdminMode } = useAdminContext();
  const [menus, setMenus] = useState(fakeMenu2);

  return (
    <MainStyled>
      {/* <Basket /> */}
      <div className="menu-and-admin">
        <MenuContext.Provider value={{ menus, setMenus }}>
          <Menu />
          <ThemeContext.Provider value={themeContext}>
            {isAdminMode && <Admin />}
          </ThemeContext.Provider>
        </MenuContext.Provider>
      </div>
    </MainStyled>
  );
};

const MainStyled = styled.div`
  flex: 1;
  height: calc(95vh - 10vh);
  background: ${theme.colors.background_white};
  box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
  border-radius: 0 0 15px 15px;

  display: grid;
  grid-template-columns: 1fr;

  .menu-and-admin {
    position: relative;
    overflow-y: hidden;
    display: grid;
    border-radius: 0 0 15px 15px;
  }
`;
