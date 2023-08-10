import LoginForm from "./LoginForm";
import styled from "styled-components";

const LoginPage = () => {
  return (
    <Wrapper>
      <LoginForm />
    </Wrapper>
  );
};

const Wrapper = styled.div`
  width: 100%;
  height: 100vh;
  background: url("assets/F03 burger-background.webp") no-repeat center;
  background-size: 100%;
`;

export default LoginPage;
