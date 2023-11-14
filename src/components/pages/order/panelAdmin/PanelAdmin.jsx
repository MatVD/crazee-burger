import styled from "styled-components";
import AdminButton from "../../../reusable-ui/AdminButton";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";

export default function PanelAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PanelAdminStyled>
      <div className="buttons">
        <AdminButton icon={isOpen ? <FiChevronUp /> : <FiChevronDown />} />
        <AdminButton icon={<AiOutlinePlus />} label="Ajouter un produit" />
        <AdminButton icon={<MdModeEditOutline />} label="Modifier un produit" />
      </div>
      <div className="panel">PanelAdmin</div>
    </PanelAdminStyled>
  );
}

const PanelAdminStyled = styled.div`
  background-color: rgba(255, 255, 255, 0);

  div.buttons {
    background-color: gray;
    display: flex;
    height: 44px;
    margin-left: 71px;
  }

  div.panel {
    background-color: red;
    display: flex;
    height: 250px;
  }
`;
