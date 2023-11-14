import { useParams } from "react-router-dom";
import { Navbar } from "./navbar/Navbar";
import { Main } from "./main/Main";
import { styled } from "styled-components";
import { theme } from "../../../assets/theme";
import PanelAdmin from "./panelAdmin/PanelAdmin";

const OrderPage = () => {
  const { username } = useParams();

  return (
    <OrderPageStyled>
      <div className='container'>
        <Navbar username={username} />
        <Main />
        <PanelAdmin />
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

    display: flex; // Why display flex , See second child <Main /> with flex 1
    flex-direction: column; 
    background: ${theme.colors.background_white};
    border-radius: ${theme.borderRadius.extraRound};
  }
`;

export default OrderPage;
