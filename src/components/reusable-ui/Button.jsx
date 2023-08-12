import { styled } from "styled-components";
import { theme } from "../../assets/theme";

const Button = ({ label, icon }) => {
  return (
    <StyledButton>
      {label} {icon && icon}
    </StyledButton>
  );
};

const StyledButton = styled.button`
  width: 400px;
  height: 53px;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;
  gap: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.primary};
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-family: Arial;
  font-style: normal;
  font-weight: ${theme.fonts.weights.bold};
  line-height: 15px; /* 100% */
  padding: 18px 106.203px;
  margin-top: 18px;
  &:hover {
    border: 1px solid ${theme.colors.primary};
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    cursor: pointer;
  }
`;

export default Button;
