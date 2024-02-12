// Theme Context //

import { createContext } from "react";

export default createContext({
  dark: {
    background: "black",
    color: "white",
    border: "black",
  },
  light: {
    background: "white",
    color: "black",
    border: "1px solid #E4E5E9",
  },
});



