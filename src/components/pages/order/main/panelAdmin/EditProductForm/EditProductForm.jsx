import styled, { css } from "styled-components";
import Message from "./Message";
import Image from "../../../../../reusable-ui/Image";
import EMPTY_PRODUCT from "../../../../../../enums/product";
import { theme } from "../../../../../../assets/theme";
import { useForm } from "react-hook-form";
import { FaHamburger } from "react-icons/fa";
import { BsFillCameraFill } from "react-icons/bs";
import { MdOutlineEuro } from "react-icons/md";
import { useMenuContext } from "../../../../../../contexts/MenuContext";
import { useEffect } from "react";

export default function EditProductForm() {
  const { selectedMenu, setSelectedMenu, editMenu } = useMenuContext();
  const { register, setFocus, setValue, watch } = useForm();

  useEffect(() => {
    setValue("name", selectedMenu.title);
    setValue("url", selectedMenu.imageSource);
    setValue("price", selectedMenu.price);
  }, [selectedMenu]);

  const handleChange = () => {
    const name = watch("name");
    const url = watch("url");
    const price = watch("price");

    editMenu(selectedMenu, name, url, price);
    setSelectedMenu({ ...selectedMenu, imageSource: url });
  };

  return (
    <EditProductFormStyled $menu={selectedMenu !== EMPTY_PRODUCT}>
      {selectedMenu === EMPTY_PRODUCT ? (
        <Message />
      ) : (
        <>
          <Image src={selectedMenu?.imageSource} />
          <form className="form" onLoad={setFocus("name")}>
            <div className="wrapper-input wrapper-input-1">
              <FaHamburger className="icon" />
              <input
                {...register("name", {
                  required: false,
                  onChange: handleChange,
                })}
                placeholder="Nom du produit (ex. Super Burger)"
                type="text"
              />
            </div>
            <div className="wrapper-input wrapper-input-2">
              <BsFillCameraFill className="icon" />
              <input
                {...register("url", {
                  required: false,
                  onChange: handleChange,
                })}
                placeholder="Lien URL de l'image (ex. https://photo-produit.png)"
                type="url"
              />
            </div>
            <div className="wrapper-input wrapper-input-3">
              <MdOutlineEuro className="icon" />
              <input
                {...register("price", {
                  required: false,
                  onChange: handleChange,
                })}
                placeholder="Prix"
                type="text"
              />
            </div>
            <div className="wrapperP">
              <p>
                Cliquer sur un produit du menu pour le modifier en temps réel
              </p>
            </div>
          </form>
        </>
      )}
    </EditProductFormStyled>
  );
}

const EditProductFormStyled = styled.div`
  width: 850px;
  height: 190px;
  margin-left: 70px;

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

  .wrapperP {
    grid-area: 4/1/5/4;

    p {
      color: ${theme.colors.primary};
    }
  }
  }

  ${({ $menu }) => ($menu ? styleMenu : styleMessage)};
`;

const styleMenu = css`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 15px;
`;

const styleMessage = css`
  display: flex;
  align-items: center;
`;
