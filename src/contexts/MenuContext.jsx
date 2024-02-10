// Menu Context //

import { createContext, useContext } from "react";

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

export function deleteMenu(array, id) {
  return array.filter((menu) => menu.id != id);
}

export function addMenu(array, newMenu) {
  return [
    ...array,
    {
      id: array.length + 1,
      imageSource: newMenu.url,
      title: newMenu.name,
      price: newMenu.price,
      quantity: 1,
      isAvailable: true,
      isAdvertised: false,
    },
  ];
}
