import { useState } from "react";
import { useNavigate } from "react-router-dom";

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState("");

  const handleChange = (event) => {
    setUsername(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    try {
      setUsername("");
      navigate(`/order/${username}`);
    } catch (error) {
      throw new Error(`${error} : Veuillez entrer un nom svp`);
    }
  };

  return (
    <>
      <h1>Bienvenue chez nous !</h1>
      <br />
      <h2>Connectez-vous</h2>

      <form onSubmit={handleSubmit}>
        <input
          type='text'
          name='username'
          placeholder='Entrez votre prénom...'
          value={username}
          onChange={handleChange}
          required
        />

        <button>Accéder à votre espace</button>
      </form>
    </>
  );
};

export default LoginForm;
