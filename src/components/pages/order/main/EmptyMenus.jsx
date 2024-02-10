import styled from "styled-components";
import Button from "../../../reusable-ui/Button";
import { theme } from "../../../../assets/theme";

export default function Empty({ admin }) {
  return (
    <EmptyStyled>
      {admin ? (
        <>
          <h2>Le menu est vide ?</h2>
          <h3>Cliquez ci-dessous pour le réinitialiser</h3>
          <Button className="btn" label="Ajouter de nouveaux produits " />
        </>
      ) : (
        <>
          <h2>Victime de notre succès ! :D</h2>
          <h3>De nouvelles recettes sont en cours de préparation.</h3>
          <h3>A très vite !</h3>
        </>
      )}
    </EmptyStyled>
  );
}

const EmptyStyled = styled.div`
  width: 100%;
  height: 100%;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 15px;

  h2,
  h3 {
    text-transform: uppercase;
    font-family: Amatic SC;
    font-size: 36px;
    color: ${theme.colors.greyBlue};
  }

  h3 {
    font-weight: 400;
  }

  .btn {
    width: 300px;
    margin-top: 5px;
    padding: 15px 25px;
  }
`;
