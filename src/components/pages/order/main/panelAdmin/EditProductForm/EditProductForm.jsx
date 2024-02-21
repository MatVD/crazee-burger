import styled, { css } from "styled-components";
import Message from "./Message";
import { useMenuContext } from "../../../../../../contexts/MenuContext";
import { useState } from "react";
import Image from "../../../../../reusable-ui/Image";
import EditForm from "./EditForm";

export default function EditProductForm() {
  const { menuToEdit } = useMenuContext();

  return (
    <EditProductFormStyled $menuToEdit={menuToEdit}>
      {menuToEdit ? (
        <>
          <Image />
          <EditForm />
        </>
      ) : (
        <Message />
      )}
    </EditProductFormStyled>
  );
}

const EditProductFormStyled = styled.div`
  width: 850px;
  height: 190px;
  margin-left: 70px;

  ${({ $menuToEdit }) => ($menuToEdit ? styleMenuToEdit : styleMessage)};
`;

const styleMenuToEdit = css`
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 15px;
`;

const styleMessage = css`
  display: flex;
  align-items: center;
`;
