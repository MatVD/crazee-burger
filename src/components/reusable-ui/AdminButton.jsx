import styled from "styled-components";
import { theme } from "../../assets/theme";
import ThemeContext from "../../contexts/ThemeContext";
import { useContext } from "react";

const AdminButton = ({ icon, label = "", isSelected, onClick }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <AdminButtonStyled
      isSelected={isSelected}
      theme={themeContext}
      onClick={onClick}
    >
      {icon}
      {label}
    </AdminButtonStyled>
  );
};

const AdminButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.sm};

  min-width: 60px;
  height: 44px;
  padding: 0 22px 0 22px;

  border: 1px solid ${theme.colors.greyLight};
  border-radius: 5px 5px 0 0;
  box-shadow: ${theme.shadows.subtle};

  font-size: ${theme.fonts.size.P0};
  ${(props) => (props.isSelected ? props.theme.dark : props.theme.light)};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    border-bottom: 1px solid white;
  }
`;

export default AdminButton;
