import { createContext, useContext } from "react";
import createDeepClone from "../utils/createDeepClone.js";

const MenuContext = createContext({
  menus: [],
  setMenus: () => {},
  menu: {},
  setMenu: () => {},
});

export function useMenuContext() {
  const { menus, setMenus, menu, setMenu } = useContext(MenuContext);

  // ----------- CRUD ------------ //
  function getMenu(array, id) {
    // Methode pour faire un deep clone de l'array
    const arrayCopy = JSON.parse(JSON.stringify(array));

    setMenu(arrayCopy.filter((menu) => menu.id === id)[0]);
  }

  function deleteMenu(array, id) {
    const arrayCopy = createDeepClone(array);

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

  function editMenu(menu, title, imageSource, price) {
    // Methode pour faire un deep clone du menu
    const menuCopy = createDeepClone(menu);

    const menuEdited = {
      ...menuCopy,
      title: title,
      imageSource: imageSource,
      price: price,
    };

    setMenu(menuEdited);
  }

  return {
    menus,
    setMenus,
    menu,
    setMenu,
    getMenu,
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
