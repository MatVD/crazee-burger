import styled from "styled-components";
import Button from "../../../../reusable-ui/AdminButton";
import Input from "../../../../reusable-ui/Input";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../assets/theme";

export default function AddProductForm() {
  return (
    <AddProductFormStyled>
      <div className="image">{"Aucune image"}</div>
      <div className="form">
        <Input
          icon={<FaHamburger className="icon" />}
          className="input"
          bg={theme.colors.greyLight}
          placeholder={"Nom du produit (ex. Super Burger)"}
        />
        <Input
          icon={<BsFillCameraFill className="icon" />}
          className="input"
          bg={theme.colors.greyLight}
          placeholder={"Lien URL de l'image (ex. https://photo-produit.png)"}
        />
        <Input
          icon={<MdOutlineEuro className="icon" />}
          className="input"
          bg={theme.colors.greyLight}
          placeholder={"Prix"}
        />
        <button className="addProductBtn" type="submit">
          Ajouter un nouveau produit au menu
        </button>
      </div>
    </AddProductFormStyled>
  );
}

const AddProductFormStyled = styled.form`
  display: flex;
  gap: 20px;
  margin-left: 70px;
  width: 850px;

  .image {
    flex: 1;
    border: 1px solid ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};
    width: 210px;
    height: 120px;

    display: flex;
    justify-content: center;
    align-items: center;

    color: ${theme.colors.greyBlue};
  }

  .form {
    flex: 3;
    width: 210px;

    display: flex;
    flex-direction: column;
    gap: 10px;

    .input {
      flex: 1;
      padding: 8px 16px 8px 24px;
      background-color: ${theme.colors.greyLight};

      .icon {
        color: ${theme.colors.greyBlue};
      }

      input {
        background-color: ${theme.colors.greyLight};
      }
    }

    .addProductBtn {
      width: 310px;
      height: 35px;
      border: none;
      border-radius: ${theme.borderRadius.round};
      background-color: ${theme.colors.success};
      color: ${theme.colors.white};

      &:hover {
        cursor: pointer;
      }
    }
  }
`;
