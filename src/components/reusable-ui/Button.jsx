import { styled } from "styled-components";

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
  gap: 9px;
  border-radius: 5px;
  border: 1px solid #ff9f1b;
  background: #ff9f1b;
  color: white;
  font-family: Arial;
  font-style: normal;
  font-weight: 700;
  line-height: 15px; /* 100% */
  padding: 18px 106.203px;
  margin-top: 18px;
  &:hover {
    border: 1px solid #ff9f1b;
    background: #fff;
    color: #ff9f1b;
    cursor: pointer;
  }
`;

export default Button;
