import styled from "styled-components";
import AdminTabs from "./AdminTabs/AdminTabs";
import { AdminPanel } from "./AdminPanel";

const Admin = () => {
  return (
    <AdminStyled>
      <AdminTabs />
      <AdminPanel />
    </AdminStyled>
  );
};

const AdminStyled = styled.div`
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
`;

export default Admin;
