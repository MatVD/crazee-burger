import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";
import Burgerbackground from "../../../assets/burger-background.webp";

const LoginPage = () => {
  return (
    <ImageContainer >
      <Wrapper>
        <Logo scale={2.5} />
        <LoginForm />
      </Wrapper>
    </ImageContainer>
  );
};

const ImageContainer = styled.div`
  height: 100vh;
  background: url(${Burgerbackground}) no-repeat;
  background-size: cover;
  background-position: center;
`;

const Wrapper = styled.div`
  height: 100vh;
  background: rgba(0, 0, 0, 0.379) no-repeat;
  background-size: cover;
  background-position: center;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginPage;
