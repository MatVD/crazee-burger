import styled from "styled-components";
import { theme } from "../../../../../assets/theme";

export const AdminPanel = ({ panelTitle, isOpen }) => {
  return (
    <AdminPanelStyled isOpen={isOpen}>
      <div className="panel">
        <h2>{panelTitle}</h2>
      </div>
    </AdminPanelStyled>
  );
};

const AdminPanelStyled = styled.div`
  display: ${(props) => (props.isOpen ? "flex" : "none")};
  height: 250px;
  background-color: ${theme.colors.white};
  border-radius: 0 0 15px 0;
  box-shadow: ${theme.shadows.subtle};

  h2 {
    font-size: ${theme.fonts.size.P0};
    margin-top: 17px;
    margin-left: 22px;
  }
`;
