import { useState } from "react";
import { Link } from "react-router-dom";

const LoginForm = () => {

    const [username, setUsername] = useState('');

    const handleChange = (event) => { 
        setUsername(event.target.value);
     };

    const handleSubmit = (event) => {
        event.preventDefault();
        try {
            setUsername('');
        } catch (error) {
            throw new Error(`${error} : Veuillez entrer un nom svp`)
        }
    };

  return (
    <>
        <h1>Bienvenue chez nous !</h1>
        <br />
        <h2>Connectez-vous</h2>

        <form onSubmit={handleSubmit}>
            <input 
                type="text"
                name="username" 
                placeholder="Entrez votre prénom..." 
                value={username}
                onChange={handleChange}
                required
            />

            <Link to='/order' state={{username}} >
                <button>Accéder à votre espace</button>
            </Link>
        </form>
    </>
  )
};

export default LoginForm;