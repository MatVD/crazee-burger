import styled from "styled-components";
import AdminTabs from "./AdminTabs/AdminTabs";
import { AdminPanel } from "./AdminPanel";
import { useAdminContext } from "../../../../../contexts/AdminContext";

const Admin = () => {
  const { panelContent, setPanelContent } = useAdminContext();
  const { isOpen, setIsOpen } = useAdminContext();

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
