import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import Input from "../../reusable-ui/Input";
import Button from "../../reusable-ui/Button";
import { theme } from "../../../assets/theme";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    setUsername("");
    navigate(`/order/${username}`);
  };

  return (
    <WrapperForm>
      <h1>Bienvenue chez nous !</h1>
      <hr />
      <h2>Connectez-vous</h2>

      <form onSubmit={handleSubmit}>
        <Input
          onChange={(event) => setUsername(event.target.value)}
          value={username}
          icon={<BsPersonCircle />}
          placeholder="Entrez votre prénom"
          type="text"
          className={"input"}
        />

        <Button
          label="Accéder à mon espace"
          icon={<MdOutlineKeyboardArrowRight />}
          className="CTAbutton"
          version="large"
        />
      </form>
    </WrapperForm>
  );
};

const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  margin: 40px 0 35px 0;

  hr {
    border: "1px solid ${theme.colors.primary}";
    background: "${theme.colors.primary}";
    height: "3px";
    width: 100%;
  }

  form {
    display: flex;
    flex-direction: column;

    .input {
      padding: 18px 24px;
    }
  }

  h1,
  h2 {
    color: ${theme.colors.white};
    text-align: center;
    font-family: Amatic SC;
    font-size: ${theme.fonts.size.P5};
    font-style: normal;
    font-weight: ${theme.fonts.weights.bold};
    line-height: 61px; /* 127.083% */
    margin: 10px 0 30px 0;
  }

  h2 {
    font-size: ${theme.fonts.size.P4};
    line-height: 46px; /* 127.778% */
    margin: 20px 0;
  }

  .CTAbutton {
    margin-top: 18px;
    padding: 18px 106px;
  }
`;

export default LoginForm;
