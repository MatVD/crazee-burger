import styled from "styled-components";
import AdminButton from "../../../reusable-ui/AdminButton";
import AdminToggleButton from "../../../reusable-ui/AdminToggleButton";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";
import { theme } from "../../../../assets/theme";

export default function PanelAdmin() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <PanelAdminStyled isOpen={isOpen}>
      <div className="buttons">
        <AdminToggleButton isChecked={isOpen} setIsChecked={setIsOpen} />
        <AdminButton icon={<AiOutlinePlus />} label="Ajouter un produit" />
        <AdminButton icon={<MdModeEditOutline />} label="Modifier un produit" />
      </div>
      <div className="panel">PanelAdmin</div>
    </PanelAdminStyled>
  );
}

const PanelAdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: ${theme.shadows.subtle};
  

  .buttons {
    position: absolute;
    top: -44px;
    left: 70px;
    display: flex;
    height: 0;
  }

  div.panel {
    position: relative;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    height: 250px;
    background-color: #fff;
    border-radius: 0 0 15px 15px;
  }
`;
