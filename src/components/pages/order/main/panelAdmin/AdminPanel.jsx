import styled from "styled-components";
import { theme } from "../../../../../assets/theme";
import { useAdminContext } from "../../../../../contexts/AdminContext";

export const AdminPanel = () => {
  const { panelContent, isOpen } = useAdminContext();

  return <AdminPanelStyled $isOpen={isOpen}>{panelContent}</AdminPanelStyled>;
};

const AdminPanelStyled = styled.div`
  display: ${(props) => (props.$isOpen ? "flex" : "none")};
  align-items: center;
  height: 250px;
  background-color: ${theme.colors.white};
  border-radius: 0 0 15px 0;
  box-shadow: ${theme.shadows.subtle};
`;
