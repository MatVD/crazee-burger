import { styled } from "styled-components";

const Input = ({ value, onChange, icon, ...otherProps }) => {
  return (
    <WrapperInput>
      {icon && icon}
      <input value={value} onChange={onChange} required {...otherProps} />
    </WrapperInput>
  );
};

const WrapperInput = styled.div`
  display: inline-flex;
  padding: 18px 24px;
  align-items: center;
  gap: 12.797px;
  border-radius: 5px;
  background: #fff;

  input {
    font-family: Arial;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px; /* 113.333% */
    border: 0 solid transparent;
    &:focus {
      outline: none;
    }
    font-family: Arial;
    font-size: 15px;
    font-style: normal;
    font-weight: 400;
    line-height: 17px; /* 113.333% */
  }
`;

export default Input;
