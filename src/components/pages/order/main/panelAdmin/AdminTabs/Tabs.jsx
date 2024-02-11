import styled from "styled-components";
import { theme } from "../../../../../../assets/theme";
import ThemeContext from "../../../../../../contexts/ThemeContext";
import { useContext } from "react";

const Tabs = ({ icon, label = "", onClick, className }) => {
  const themeContext = useContext(ThemeContext);

  return (
    <TabsStyled theme={themeContext} onClick={onClick} className={className}>
      {icon}
      {label}
    </TabsStyled>
  );
};

const TabsStyled = styled.button`
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
  ${(props) =>
    props.className === "isActive" ? props.theme.dark : props.theme.light};

  &:hover {
    text-decoration: underline;
    cursor: pointer;
    border-bottom: 1px solid white;
  }
`;

export default Tabs;
