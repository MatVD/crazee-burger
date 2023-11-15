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
  position: relative;
  border-top: 2px solid #E4E5E9;;

  .buttons {
    position: absolute;
    top: -45px;
    left: 70px;
    display: flex;
    height: 0;
    box-shadow: 0px -6px 8px -2px rgba(0, 0, 0, 0.10);

  }

  div.panel {
    display: flex;
    height: 250px;
    background-color: #fff;
  }
`;
