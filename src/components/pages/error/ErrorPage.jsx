import { Link } from "react-router-dom"

const ErrorPage = () => {

  return (
    <>
        <h1>ErrorPage</h1>
        <br />
        <Link to='/' >
            <button>Retourner à la page d&apos;accueil</button>
        </Link>
    </>
  )
}

export default ErrorPage