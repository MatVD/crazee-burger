import styled from "styled-components";
import { useState } from "react";
import AdminTabs from "./AdminTabs";
import { AdminPanel } from "./AdminPanel";

const Admin = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [panelTitle, setPanelTitle] = useState("Ajouter un produit");

  return (
    <AdminStyled>
      <AdminTabs
        setPanelTitle={setPanelTitle}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <AdminPanel panelTitle={panelTitle} isOpen={isOpen} />
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
