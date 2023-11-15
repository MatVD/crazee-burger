import styled from "styled-components";

export default function AdminButton({ icon, label = "" }) {
  return (
    <AdminButtonStyled>
      {icon}
      {label}
    </AdminButtonStyled>
  );
}

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
  border: 1px solid #E4E5E9;
  background-color: #fff;

  &:hover {
    text-decoration: underline;
    cursor: pointer;
  }
`;
