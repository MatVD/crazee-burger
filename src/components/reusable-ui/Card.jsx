import { styled } from "styled-components";

export const Card = () => {
  return <CardStyled>Card</CardStyled>;
};

const CardStyled = styled.div`
  width: 240px;
  height: 330px;

  display: flex;
  flex-direction: column;
  justify-content: flex-end;
  align-items: flex-start;
  gap: 15px;
  padding: 50px 20px 10px 20px;



  background-color: red;
`;
