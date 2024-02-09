// Menu Context //

import { createContext, useContext, useEffect, useState } from "react";


const MenuContext = createContext({
  menus: [],
  setMenus: () => {},
});

export function useMenuContext() {
  const { menus, setMenus } = useContext(MenuContext);

  return { menus, setMenus };
}

export default MenuContext;

// export default function MenuContextProvider({ children }) {
//   const [menus, setMenus] = useState(fakeMenu2);

//   useEffect(() => {
//     setMenus(fakeMenu2);
//   }, [menus]);

//   <MenuContext.Provider value={{ menus, setMenus }}>
//     {children}
//   </MenuContext.Provider>;
// }
