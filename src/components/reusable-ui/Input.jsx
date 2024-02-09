import { styled } from "styled-components";
import { theme } from "../../assets/theme";

const Input = ({
  value,
  onChange,
  icon,
  className,
  placeholder,
  required = true,
  ...otherProps
}) => {
  return (
    <WrapperInput className={className}>
      {icon && icon}
      <input
        value={value}
        onChange={onChange}
        required={required}
        {...otherProps}
        placeholder={placeholder}
      />
    </WrapperInput>
  );
};

const WrapperInput = styled.div`
  display: inline-flex;
  align-items: center;
  gap: ${theme.spacing.sm};
  border-radius: ${theme.borderRadius.round};
  background: ${(props) => (props.bg ? props.bg : theme.colors.white)};

  input {
    width: 100%;
    font-family: Arial;
    font-size: ${theme.fonts.size.SM};
    font-style: normal;
    font-weight: ${theme.fonts.weights.regular};
    line-height: 17px; /* 113.333% */
    border: 0 solid transparent;
    &:focus {
      outline: none;
    }
  }
`;

export default Input;
