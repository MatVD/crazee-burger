// Admin Context //

import { createContext } from "react";

export default createContext({
  isAdminMode: false,
  setAdminMode: () => {},
  tabSelected: false,
  setTabSelected: () => {},
})