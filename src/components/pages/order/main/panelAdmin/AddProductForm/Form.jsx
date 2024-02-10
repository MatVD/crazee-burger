import styled from "styled-components";
import { theme } from "../../../../../../assets/theme";
import {
  addMenu,
  useMenuContext,
} from "../../../../../../contexts/MenuContext";
import { useForm } from "react-hook-form";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { useEffect, useState } from "react";

export default function Form({ setImageUrl }) {
  const [submited, setSubmited] = useState(false);
  const { menus, setMenus } = useMenuContext();
  const { register, handleSubmit, reset, watch } = useForm({
    defaultValues: {
      name: "",
      url: "",
      price: "",
    },
  });

  // Utilisation useEffect car setImageUrl(watch("url")) lève une erreur
  // Cf. https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
  useEffect(() => {
    setImageUrl(watch("url"));
  }, [watch("url")]);

  const onSubmit = (data) => {
    setSubmited(!submited);
    const newMenus = addMenu(menus, data);
    setMenus(newMenus);

    setTimeout(() => {
      setSubmited(false);
      reset();
    }, 2000);
  };
  return (
    <FormStyled className="form" onSubmit={handleSubmit(onSubmit)}>
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
      <div className="wrapperBtn">
        <button
          className={submited ? "addProductBtn submited" : "addProductBtn"}
          type="submit"
        >
          Ajouter un nouveau produit au menu
        </button>
        {submited ? (
          <div className="text-info">
            <FiCheck className="checkIcon" /> <span>Ajouté avec succès !</span>
          </div>
        ) : null}
      </div>
    </FormStyled>
  );
}

const FormStyled = styled.form`
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

  .wrapperBtn {
    display: flex;
    align-items: center;
    gap: 10px;
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

    .submited {
      background-color: ${theme.colors.white};
      color: ${theme.colors.success};
      border: 1px solid ${theme.colors.success};
    }

    .text-info {
      color: ${theme.colors.success};
      display: flex;
      align-items: center;
      gap: 5px;

      .checkIcon {
        border: 1px solid ${theme.colors.success};
        border-radius: ${theme.borderRadius.circle};
      }
    }
  }
`;
