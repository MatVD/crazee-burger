import { Navbar } from "./navbar/Navbar";
import { Main } from "./main/Main";
import { styled } from "styled-components";
import { theme } from "../../../assets/theme";
import AdminContextProvider, {
  useAdminContext,
} from "../../../contexts/AdminContext";

const OrderPage = () => {
  const { isAdminMode, setAdminMode, tabSelected, setTabSelected } =
    useAdminContext();

  return (
    <OrderPageStyled>
      <AdminContextProvider
        value={{ isAdminMode, setAdminMode, tabSelected, setTabSelected }}
      >
        <div className="container">
          <Navbar />
          <Main />
        </div>
      </AdminContextProvider>
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
