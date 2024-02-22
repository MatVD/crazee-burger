import styled from "styled-components";
import { theme } from "../../../../../../assets/theme";
import { set, useForm } from "react-hook-form";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import {
  editMenu,
  useMenuContext,
} from "../../../../../../contexts/MenuContext";
import { useEffect } from "react";

export default function Form({ setImageUrl }) {
  const { menu, setMenu } = useMenuContext();
  const { register, setFocus, setValue, watch } = useForm();

  useEffect(() => {
    setFocus("name");
  }, []);

  useEffect(() => {
    setImageUrl(menu.imageSource);
    setValue("name", menu.title);
    setValue("url", menu.imageSource);
    setValue("price", menu.price);
  }, [menu]);

  useEffect(() => {
    const menuAfterEditing = editMenu(
      menu,
      watch("name"),
      watch("url"),
      watch("price")
    );

    setMenu(menuAfterEditing);
  }, [watch("name"), watch("url"), watch("price")]);

  return (
    <FormStyled className="form">
      <div className="wrapper-input wrapper-input-1">
        <FaHamburger className="icon" />
        <input
          {...register("name", { required: false })}
          placeholder="Nom du produit (ex. Super Burger)"
          type="text"
        />
      </div>
      <div className="wrapper-input wrapper-input-2">
        <BsFillCameraFill className="icon" />
        <input
          {...register("url", { required: false })}
          placeholder="Lien URL de l'image (ex. https://photo-produit.png)"
          type="url"
        />
      </div>
      <div className="wrapper-input wrapper-input-3">
        <MdOutlineEuro className="icon" />
        <input
          {...register("price", { required: false })}
          placeholder="Prix"
          type="text"
        />
      </div>
      <div className="wrapperP">
        <p>Cliquer sur un produit du menu pour le modifier en temps réel</p>
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
  grid-area: 1/2/5/3;

  display: grid;
  grid-template-columns: repeat(3, 1fr);
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 10px;

  .wrapper-input {
    padding: 4px 20px;
    background-color: ${theme.colors.greyLight};
    border-radius: ${theme.borderRadius.round};

    display: flex;
    align-items: center;
    gap: 15px;

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

  .wrapper-input-1 {
    grid-area: 1/1/2/4;
  }
  .wrapper-input-2 {
    grid-area: 2/1/3/4;
  }
  .wrapper-input-3 {
    grid-area: 3/1/4/4;
  }

  .wrapperP {
    grid-area: 4/1/5/4;

    p {
      color: ${theme.colors.primary};
    }
  }
`;
