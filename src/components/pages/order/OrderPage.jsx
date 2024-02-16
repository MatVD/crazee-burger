import { Navbar } from "./navbar/Navbar";
import { Main } from "./main/Main";
import { styled } from "styled-components";
import { theme } from "../../../assets/theme";
import AdminContext from "../../../contexts/AdminContext";
import { useState } from "react";
import AddProductForm from "./main/panelAdmin/AddProductForm/AddProductForm";

const OrderPage = () => {
  const [isAdminMode, setAdminMode] = useState(false);
  const [tabSelected, setTabSelected] = useState("add");
  const [isOpen, setIsOpen] = useState("true");
  const [panelContent, setPanelContent] = useState(<AddProductForm />);

  return (
    <OrderPageStyled>
      <div className="container">
        <AdminContext.Provider
          value={{
            isAdminMode,
            setAdminMode,
            isOpen,
            setIsOpen,
            tabSelected,
            setTabSelected,
            panelContent,
            setPanelContent,
          }}
        >
          <Navbar />
          <Main />
        </AdminContext.Provider>
      </div>
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
