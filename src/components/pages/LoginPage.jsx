import { useState } from "react"

const LoginPage = () => {

    const [username, setUsername] = useState('');

    const handleChange = (event) => {
        setUsername(event.target.value);
    };

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Bonjour ${username}`);
        setUsername('');
    };

    return (
    <>
        <h1>Bienvenue chez nous !</h1>
        <h2>Connectez-vous</h2>

        <form onSubmit={handleSubmit}>
            <input 
                name="username" 
                placeholder="Entrez votre prénom..." 
                value={username}
                onChange={handleChange}
                required/>
            <button>Accéder à votre espace</button>
        </form>
    </>
  )
}

export default LoginPage