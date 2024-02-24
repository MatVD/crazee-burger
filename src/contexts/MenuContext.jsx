// Menu Context //
import { createContext, useContext } from "react";

const MenuContext = createContext({
  menus: [],
  setMenus: () => {},
  menu: {},
  setMenu: () => {},
});

export function useMenuContext() {
  const { menus, setMenus, menu, setMenu } = useContext(MenuContext);

  return { menus, setMenus, menu, setMenu };
}

export default MenuContext;

// export const MenuContextProvider = ({ Children }) => {
//   const [menus, setMenus] = useState(fakeMenu2);
//   const [menu, setMenu] = useState(PRODUCT);

//   <MenuContext.Provider value={{ menus, setMenus, menu, setMenu }}>
//     {Children}
//   </MenuContext.Provider>;
// };

function deleteMenu(array, id) {
  return array.filter((menu) => menu.id != id);
}

function addMenu(array, newMenu) {
  return [
    {
      id: array.length + 1,
      imageSource: newMenu.url,
      title: newMenu.name,
      price: newMenu.price,
      quantity: 1,
      isAvailable: true,
      isAdvertised: false,
    },
    ...array,
  ];
}

function getMenu(array, id) {
  return array.filter((menu) => menu.id === id)[0];
}

function editMenu(menu, title, imageSource, price) {
  return {
    ...menu,
    title: title,
    imageSource: imageSource,
    price: price,
  };
}

export { deleteMenu, addMenu, getMenu, editMenu };
