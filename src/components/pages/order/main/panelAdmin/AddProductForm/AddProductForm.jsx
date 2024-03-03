import { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { FiCheck } from "react-icons/fi";
import { theme } from "../../../../../../assets/theme";
import Button from "../../../../../reusable-ui/Button";
import styled from "styled-components";
import Image from "../../../../../reusable-ui/Image";
import { useMenuContext } from "../../../../../../contexts/MenuContext";

export default function AddProductForm() {
  const [imageUrl, setImageUrl] = useState("");
  const [submited, setSubmited] = useState(false);
  const { menus, addMenu } = useMenuContext();
  const { register, handleSubmit, reset, watch } = useForm();

  // Utilisation useEffect car setImageUrl(watch("url")) lève une erreur
  // Cf. https://stackoverflow.com/questions/62336340/cannot-update-a-component-while-rendering-a-different-component-warning
  useEffect(() => {
    setImageUrl(watch("url"));
  }, [watch("url")]);

  const onSubmit = (data) => {
    setSubmited(!submited);
    addMenu(menus, data);

    setTimeout(() => {
      setSubmited(false);
      reset();
    }, 2000);
  };

  return (
    <AddProductFormStyled>
      <Image src={imageUrl} />
      <form className="form" onSubmit={handleSubmit(onSubmit)}>
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
            type="text"
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
        <div className="wrapperBtn">
          <Button
            className={submited ? "addProductBtn submited" : "addProductBtn"}
            type="submit"
            icon={""}
            label={"Ajouter un nouveau produit au menu"}
            version="success"
          />
          {submited ? (
            <div className="text-info">
              <FiCheck className="checkIcon" />{" "}
              <span>Ajouté avec succès !</span>
            </div>
          ) : null}
        </div>
      </form>
    </AddProductFormStyled>
  );
}

const AddProductFormStyled = styled.div`
  width: 850px;
  height: 190px;
  margin-left: 70px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 15px;

  form {
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

    .wrapperBtn {
      grid-area: 4/1/5/4;

      display: flex;
      align-items: center;
      gap: 10px;

      .addProductBtn {
        padding: 12px 20px;
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
  }
`;
