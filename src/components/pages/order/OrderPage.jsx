import { Link, useLocation } from "react-router-dom"

const OrderPage = () => {
    const { state } = useLocation();

  return (
    <>
        <h1>Bonjour {state.username} </h1>
        <br />
        <Link to="/" >
            <button>Déconnexion</button>
        </Link>
    </>
  )
}

export default OrderPage;