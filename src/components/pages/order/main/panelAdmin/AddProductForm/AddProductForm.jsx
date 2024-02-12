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
  width: 850px;
  height: 190px;
  margin-left: 70px;
  display: grid;
  grid-template-columns: 1fr 3fr;
  grid-template-rows: repeat(4, 1fr);
  grid-gap: 15px;
`;
