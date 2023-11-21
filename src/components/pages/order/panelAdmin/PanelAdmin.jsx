import styled from "styled-components";
import { useState } from "react";
import { theme } from "../../../../assets/theme";
import { useContext } from "react";
import AdminContext from "../../../../contexts/AdminContext";
import AdminButtons from "./AdminButtons";

const PanelAdmin = () => {
  const { isAdminMode } = useContext(AdminContext);
  const [isOpen, setIsOpen] = useState(false);
  const [panelTitle, setPanelTitle] = useState("Ajouter un produit");

  return (
    <PanelAdminStyled isOpen={isOpen} isAdminMode={isAdminMode}>
      <AdminButtons
        setPanelTitle={setPanelTitle}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      {
        isOpen && (
          <div className="panel">
            <h2>{panelTitle}</h2>
          </div>
      )}
    </PanelAdminStyled>
  );
};

const PanelAdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: ${theme.shadows.subtle};

  .panel {
    display: flex;
    height: 250px;
    background-color: ${theme.colors.white};
    border-radius: 0 0 15px 0;

    h2 {
      font-size: ${theme.fonts.size.P0};
      margin-top: 17px;
      margin-left: 22px;
    }
  }
`;

export default PanelAdmin;
