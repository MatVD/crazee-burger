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

// export const MenuContextProvider = ({ Children }) => {
//   const [menus, setMenus] = useState(fakeMenu2);
//   const [menu, setMenu] = useState(PRODUCT);

//   <MenuContext.Provider value={{ menus, setMenus, menu, setMenu }}>
//     {Children}
//   </MenuContext.Provider>;
// };

// --------- CRUD ---------- //

function getMenu(array, id) {
  // Methode pour faire un deep clone de l'array
  const arrayCopy = JSON.parse(JSON.stringify(array));

  return arrayCopy.filter((menu) => menu.id === id)[0];
}

function deleteMenu(array, id) {
  // Methode pour faire un deep clone de l'array
  const arrayCopy = JSON.parse(JSON.stringify(array));

  return arrayCopy.filter((menu) => menu.id != id);
}

function addMenu(array, newMenu) {
  // Methode pour faire un deep clone de l'array
  const arrayCopy = JSON.parse(JSON.stringify(array));

  return [
    {
      id: arrayCopy.length + 1,
      imageSource: newMenu.url,
      title: newMenu.name,
      price: newMenu.price,
      quantity: 1,
      isAvailable: true,
      isAdvertised: false,
    },
    ...arrayCopy,
  ];
}

function editMenu(menu, title, imageSource, price) {
  // Methode pour faire un deep clone du menu
  const menuCopy = JSON.parse(JSON.stringify(menu));

  return {
    ...menuCopy,
    title: title,
    imageSource: imageSource,
    price: price,
  };
}

export { deleteMenu, addMenu, getMenu, editMenu };
export default MenuContext;
