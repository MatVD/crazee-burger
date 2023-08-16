import { styled } from "styled-components";

export const Card = ({ name }) => {
  return <CardStyled>{name}</CardStyled>;
};

const CardStyled = styled.div`
  width: 240px;
  height: 330px;
  margin: auto;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 15px;

  box-shadow: -8px 8px 20px 0 rgba(0, 0, 0, 0.2);
  padding: 50px 20px 10px 20px;

  background-color: red;
`;
