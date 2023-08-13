import Logo from "../../reusable-ui/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <ImageContainer>
      <Wrapper>
        <Logo />
        <LoginForm />
      </Wrapper>
    </ImageContainer>
  );
};


const ImageContainer = styled.div`
  height: 100vh;
  background: url("src/assets/F03 burger-background.webp") no-repeat;
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
