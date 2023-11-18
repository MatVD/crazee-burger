import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../assets/theme";

const AdminToggleButton = ({ isOpen, setIsOpen }) => {
  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  const theme = {
    dark: {
      background: "black",
      color: "white",
      border: "black",
    },
    light: {
      background: "white",
      color: "black",
      border: "1px solid #E4E5E9",
    },
  };

  return (
    <AdminButtonStyled isOpen={isOpen} theme={theme} onClick={handleClick}>
      {isOpen ? <FiChevronDown /> : <FiChevronUp />}
    </AdminButtonStyled>
  );
};

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

  ${(props) => (props.isOpen ? props.theme.light : props.theme.dark)};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    border-bottom: 1px solid white;
  }
`;

export default AdminToggleButton;
