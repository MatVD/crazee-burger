import { useParams } from "react-router-dom";
import { Navbar } from "./Navbar";
import { styled } from "styled-components";
import { theme } from "../../../assets/theme";

const OrderPage = () => {
  const { username } = useParams();

  return (
    <Background>
      <MainContainer>
        <Navbar username={username} />
        <main>C&apos;est la partie main</main>
      </MainContainer>
    </Background>
  );
};

const Background = styled.div`
  height: 100vh;
  background: ${theme.colors.primary};

  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainContainer = styled.div`
  width: 1100px;
  height: 600px;
  background: ${theme.colors.background_white};
  border-radius: ${theme.borderRadius.extraRound};

  main {
    height: 80%;
    box-shadow: 0px 8px 20px 8px rgba(0, 0, 0, 0.2) inset;
    border-radius: 0px 0px 15px 15px;
  }
`;

export default OrderPage;
