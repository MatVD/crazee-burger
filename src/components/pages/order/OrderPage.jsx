import { useParams } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Main } from "./main/Main";
import { styled } from "styled-components";
import { theme } from "../../../assets/theme";
import PanelAdmin from "./panelAdmin/PanelAdmin";
import AdminContext from "../../../stores/AdminContext";
import ThemeContext from "../../../stores/themeContext";
import { useContext, useState } from "react";

const OrderPage = () => {
  const { username } = useParams();
  const [isAdminMode, setAdminMode] = useState(false);

  const themeContext = useContext(ThemeContext);

  return (
    <OrderPageStyled>
      <AdminContext.Provider value={{ isAdminMode, setAdminMode }}>
        <div className="container">
          <Navbar username={username} />
          <Main />
          <ThemeContext.Provider value={themeContext}>
            <PanelAdmin />
          </ThemeContext.Provider>
        </div>
      </AdminContext.Provider>
    </OrderPageStyled>
  );
};

const OrderPageStyled = styled.div`
  height: 100vh;
  background: ${theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;

  .container {
    position: relative; // Nécessaire pour <PanelAdmin /> en absolute
    width: 1400px;
    height: 95vh;

    display: flex; // Nécessaire pour <Main /> avec flex 1
    flex-direction: column;
    background: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

export default OrderPage;
