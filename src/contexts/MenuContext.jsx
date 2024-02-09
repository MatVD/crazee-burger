// Menu Context //

import { createContext, useContext, useEffect, useState } from "react";
import { fakeMenu2 } from "../fakeData/fakeMenu";

const MenuContext = createContext([
  {
    id: 0,
    imageSource: "",
    title: "",
    price: 0,
    quantity: 0,
    isAvailable: true,
    isAdvertised: false,
  },
]);

export function useAdminContext() {
  const { id, imageSource, title, price, quantity, isAvailable, isAdvertised } =
    useContext(MenuContext);

  return {
    id,
    imageSource,
    title,
    price,
    quantity,
    isAvailable,
    isAdvertised,
  };
}

export default MenuContext;

export function AdminContextProvider({ children }) {
  const [menu, setMenu] = useState();

  useEffect(() => {
    setMenu(fakeMenu2);
  }, []);

  <MenuContext.Provider value={menu}>{children}</MenuContext.Provider>;
}
