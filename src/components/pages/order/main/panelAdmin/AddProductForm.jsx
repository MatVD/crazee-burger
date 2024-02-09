import styled from "styled-components";
import Input from "../../../../reusable-ui/Input";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { theme } from "../../../../../assets/theme";
import { useForm } from "react-hook-form";

export default function AddProductForm() {
  const { register, handleSubmit } = useForm();

  const onSubmit = (data) => console.log(data);

  return (
    <AddProductFormStyled>
      <div className="image">{"Aucune image"}</div>
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
        <div className="wrapper-input">
          <FaHamburger className="icon" />
          <input
            {...register("name", { required: false })}
            placeholder="Nom du produit (ex. Super Burger)"
            type="text"
          />
        </div>
        <div className="wrapper-input">
          <BsFillCameraFill className="icon" />
          <input
            {...register("url", { required: false })}
            placeholder="Lien URL de l'image (ex. https://photo-produit.png)"
            type="url"
          />
        </div>
        <div className="wrapper-input">
          <MdOutlineEuro className="icon" />
          <input
            {...register("price", { required: false })}
            placeholder="Prix"
            type="text"
          />
        </div>
        <button className="addProductBtn" type="submit">
          Ajouter un nouveau produit au menu
        </button>
      </form>
    </AddProductFormStyled>
  );
}

const AddProductFormStyled = styled.div`
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

    .wrapper-input {
      flex: 1;
      padding: 4px 20px;
      background-color: ${theme.colors.greyLight};
      border-radius: ${theme.borderRadius.round};

      display: flex;
      align-items: center;
      gap: 20px;

      .icon {
        color: ${theme.colors.greyBlue};
      }

      input {
        background-color: ${theme.colors.greyLight};
        border: none;
        width: 100%;
        padding: 5px;

        &:focus {
          outline: none;
        }
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
