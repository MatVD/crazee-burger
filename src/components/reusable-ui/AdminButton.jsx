import styled from "styled-components";
import { theme } from "../../assets/theme";

const AdminButton = ({ icon, label = "", isSelected, onClick }) => {

  const theme = {
    dark : {
      background: "black",
      color: "white",
      border: "black"
    },
    light : {
      background: "white",
      color: "black",
      border: "1px solid #E4E5E9"
    }
  }

  return (
    <AdminButtonStyled isSelected={isSelected} theme={theme} onClick={onClick}>
      {icon}
      {label}
    </AdminButtonStyled>
  );
}

const AdminButtonStyled = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 12px;
  min-width: 60px;
  height: 44px;
  padding: 0 22px 0 22px;
  border: none;
  border-radius: 5px 5px 0 0;
  margin-left: 1px;
  // border: 1px solid #E4E5E9;
  box-shadow: ${theme.shadows.subtle};
  

  ${(props) => props.isSelected ? props.theme.dark : props.theme.light };

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    border-bottom: 1px solid white;
  }
`;

export default AdminButton;