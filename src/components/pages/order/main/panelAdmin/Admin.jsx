import styled from "styled-components";
import { useState } from "react";
import AdminTabs from "./AdminTabs/AdminTabs";
import { AdminPanel } from "./AdminPanel";
import AddProductForm from "./AddProductForm/AddProductForm";

const Admin = () => {
  const [isOpen, setIsOpen] = useState("true");
  const [panelContent, setPanelContent] = useState(<AddProductForm />);

  return (
    <AdminStyled>
      <AdminTabs
        setPanelContent={setPanelContent}
        isOpen={isOpen}
        setIsOpen={setIsOpen}
      />
      <AdminPanel content={panelContent} isOpen={isOpen} />
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
