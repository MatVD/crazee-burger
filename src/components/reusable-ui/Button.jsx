import { css, styled } from "styled-components";
import { theme } from "../../assets/theme";

export default function Button({
  label,
  icon,
  className,
  version = "standard",
  type,
}) {
  return (
    <StyledButton className={className} version={version} type={type}>
      {label} {icon && icon}
    </StyledButton>
  );
}

const StyledButton = styled.button`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: ${theme.spacing.xs};
  border-radius: ${theme.borderRadius.round};
  border: 1px solid ${theme.colors.primary};
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  font-family: Arial;
  font-weight: ${theme.fonts.weights.bold};

  &:hover {
    border: 1px solid ${theme.colors.primary};
    background: ${theme.colors.white};
    color: ${theme.colors.primary};
    cursor: pointer;
  }

  ${({ version }) => extraStyle[version]}
`;

const success = css`
  background-color: ${theme.colors.success};
  border: none;

  &:hover {
    border: none;
    background: ${theme.colors.success};
    color: ${theme.colors.white};
    cursor: pointer;
  }
`;

const extraStyle = {
  success,
};
