import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { BsPersonCircle } from "react-icons/bs";
import { MdOutlineKeyboardArrowRight } from "react-icons/md";
import styled from "styled-components";
import Input from "../../reusable-ui/Input";
import Button from "../../reusable-ui/Button";

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
          placeholder='Entrez votre prénom'
          type='text'
        />

        <Button
          label='Accéder à mon espace'
          icon={<MdOutlineKeyboardArrowRight />}
        />
      </form>
    </WrapperForm>
  );
};

const WrapperForm = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 35px;

  hr {
    border: "1px solid #F56A2C",
    background: "#F56A2C",
    height: "3px",
  }

  form {
    display: flex;
    flex-direction: column;
  }

  h1, h2 {
    color: #fff;
    text-align: center;
    font-family: Amatic SC;
    font-size: 48px;
    font-style: normal;
    font-weight: 700;
    line-height: 61px; /* 127.083% */
    margin: 10px 0 30px 0;
  }

  h2 {
    font-size: 36px;
    line-height: 46px; /* 127.778% */
    margin: 20px 0;
  }
`;

export default LoginForm;
