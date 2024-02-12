import React, { useState } from "react";
import styled from "styled-components";
import Message from "./Message";

export default function EditProductForm() {
  return (
    <EditProductFormStyled>
      <Message />
    </EditProductFormStyled>
  );
}

const EditProductFormStyled = styled.div`
  width: 850px;
  height: 190px;
  margin-left: 70px;
  border: 1px solid red;
  display: flex;
  align-items: center;
`;
