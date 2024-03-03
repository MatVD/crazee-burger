import styled, { css } from "styled-components";
import Message from "./Message";
import { useMenuContext } from "../../../../../../contexts/MenuContext";
import Image from "../../../../../reusable-ui/Image";
import EditForm from "./EditForm";
import EMPTY_PRODUCT from "../../../../../../enums/product";

export default function EditProductForm() {
  const { selectedMenu } = useMenuContext();

  return (
    <EditProductFormStyled $menu={selectedMenu !== EMPTY_PRODUCT}>
      {selectedMenu === EMPTY_PRODUCT ? (
        <Message />
      ) : (
        <>
          <Image src={selectedMenu?.imageSource} />
          <EditForm />
        </>
      )}
    </EditProductFormStyled>
  );
}

const EditProductFormStyled = styled.div`
  width: 850px;
  height: 190px;
  margin-left: 70px;

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
