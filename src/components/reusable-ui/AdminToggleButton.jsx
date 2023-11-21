import styled from "styled-components";
import { FiChevronDown, FiChevronUp } from "react-icons/fi";
import { theme } from "../../assets/theme";
import { useContext } from "react";
import ThemeContext from "../../contexts/themeContext";

const AdminToggleButton = ({ isOpen, setIsOpen }) => {
  const themeContext = useContext(ThemeContext);

  const handleClick = () => {
    setIsOpen(!isOpen);
  };

  return (
    <AdminButtonStyled
      isOpen={isOpen}
      theme={themeContext}
      onClick={handleClick}
    >
      {isOpen ? <FiChevronDown /> : <FiChevronUp />}
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
  border: none;
  border-radius: 5px 5px 0 0;
  box-shadow: ${theme.shadows.subtle};

  ${(props) => (props.isOpen ? props.theme.light : props.theme.dark)};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    border-bottom: 1px solid white;
  }
`;

export default AdminToggleButton;
