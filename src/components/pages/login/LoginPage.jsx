import Logo from "../../logo/Logo";
import LoginForm from "./LoginForm";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <Wrapper>
      <Logo width='250px' height='150px' />
      <LoginForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url("assets/F03 burger-background.webp") no-repeat center;
  background-size: 100%;

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default LoginPage;
