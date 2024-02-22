import styled from "styled-components";
import AddForm from "./AddForm";
import { useEffect, useState } from "react";
import Image from "../../../../../reusable-ui/Image";
import { useMenuContext } from "../../../../../../contexts/MenuContext";

export default function AddProductForm() {
  const { menu } = useMenuContext();
  const [imageUrl, setImageUrl] = useState("");

  return (
    <AddProductFormStyled>
      <Image src={imageUrl} />
      <AddForm setImageUrl={setImageUrl} />
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
