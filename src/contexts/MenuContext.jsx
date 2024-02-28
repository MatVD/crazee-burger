import { createContext, useContext } from "react";
import createDeepClone from "../utils/createDeepClone.js";

const MenuContext = createContext({
  menus: [],
  setMenus: () => {},
  selectedMenu: {},
  setSelectedMenu: () => {},
});

export function useMenuContext() {
  const { menus, setMenus, selectedMenu, setSelectedMenu } =
    useContext(MenuContext);

  // ----------- CRUD ------------ //
  function getMenu(array, id) {
    // Methode pour faire un deep clone de l'array
    const arrayCopy = createDeepClone(array);

    return arrayCopy.filter((menu) => menu.id === id)[0];
  }

  function deleteMenu(array, id) {
    const arrayCopy = createDeepClone(array);

    setSelectedMenu(null);

    setMenus(arrayCopy.filter((menu) => menu.id != id));
  }

  function addMenu(array, newMenu) {
    const arrayCopy = createDeepClone(array);

    const newMenus = [
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

    setMenus(newMenus);
  }

  function editMenu(menuToEdit, title, imageSource, price) {
    // Methode pour faire un deep clone du menu
    const menusCopy = createDeepClone(menus);

    const indexOfMenuToEdit = menus.findIndex(
      (menu) => menu.id === menuToEdit.id
    );

    menusCopy[indexOfMenuToEdit] = {
      ...menuToEdit,
      title: title,
      imageSource: imageSource,
      price: price,
    };

    setMenus(menusCopy);
  }

  return {
    menus,
    setMenus,
    getMenu,
    selectedMenu,
    setSelectedMenu,
    deleteMenu,
    addMenu,
    editMenu,
  };
}

// export const MenuContextProvider = ({ Children }) => {
//   const [menus, setMenus] = useState(fakeMenu2);
//   const [menu, setMenu] = useState(PRODUCT);

//   <MenuContext.Provider value={{ menus, setMenus, menu, setMenu }}>
//     {Children}
//   </MenuContext.Provider>;
// };

export default MenuContext;
