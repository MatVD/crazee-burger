import { Navbar } from "./navbar/Navbar";
import { Main } from "./main/Main";
import { styled } from "styled-components";
import { theme } from "../../../assets/theme";
import AdminContext from "../../../contexts/AdminContext";
import { useState } from "react";

const OrderPage = () => {
  const [isAdminMode, setAdminMode] = useState(false);

  return (
    <OrderPageStyled>
      <AdminContext.Provider value={{ isAdminMode, setAdminMode }}>
        <div className="container">
          <Navbar />
          <Main />
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
    width: 1400px;
    height: 95vh;

    display: flex; // Nécessaire pour <Main /> avec flex 1
    flex-direction: column;
    background: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

export default OrderPage;
