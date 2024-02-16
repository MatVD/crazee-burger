// Admin Context //

import { createContext, useContext, useState } from "react";
import AddProductForm from "../components/pages/order/main/panelAdmin/AddProductForm/AddProductForm";

const AdminContext = createContext({
  isAdminMode: false,
  setAdminMode: () => {},
  tabSelected: false,
  setTabSelected: () => {},
  isOpen: false,
  setIsOpen: () => {},
  panelContent: null,
  setPanelContent: () => {},
});

export function useAdminContext() {
  const {
    isAdminMode,
    setAdminMode,
    tabSelected,
    setTabSelected,
    isOpen,
    setIsOpen,
    panelContent,
    setPanelContent,
  } = useContext(AdminContext);

  return {
    isAdminMode,
    setAdminMode,
    tabSelected,
    setTabSelected,
    isOpen,
    setIsOpen,
    panelContent,
    setPanelContent,
  };
}

export default AdminContext;

// export function AdminContextProvider({ children }) {
//   const [isAdminMode, setAdminMode] = useState(false);
//   const [tabSelected, setTabSelected] = useState("add");

//   <AdminContext.Provider
//     value={{ isAdminMode, setAdminMode, tabSelected, setTabSelected }}
//   >
//     {children}
//   </AdminContext.Provider>;
// }
