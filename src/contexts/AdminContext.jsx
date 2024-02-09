// Admin Context //

import { createContext, useContext, useState } from "react";

const AdminContext = createContext({
  isAdminMode: false,
  setAdminMode: () => {},
  tabSelected: false,
  setTabSelected: () => {},
});

export function useAdminContext() {
  const { isAdminMode, setAdminMode, tabSelected, setTabSelected } =
    useContext(AdminContext);

  return {
    isAdminMode,
    setAdminMode,
    tabSelected,
    setTabSelected,
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
