import styled from "styled-components";
import Image from "./Image";
import Form from "./Form";
import { useState } from "react";

export default function AddProductForm() {
  const [imageUrl, setImageUrl] = useState("");

  return (
    <AddProductFormStyled>
      <Image imageUrl={imageUrl} />
      <Form setImageUrl={setImageUrl} />
    </AddProductFormStyled>
  );
}

const AddProductFormStyled = styled.div`
  display: flex;
  gap: 20px;
  margin-left: 70px;
  width: 850px;
`;
