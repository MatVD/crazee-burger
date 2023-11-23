import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";

export const tabsConfig = (tabSelected) => [
  {
    index: "add",
    label: "Ajouter un produit",
    icon: <AiOutlinePlus />,
    className: tabSelected === "add" ? "isActive" : "",
  },
  {
    index: "edit",
    label: "Modifier un produit",
    icon: <MdModeEditOutline />,
    className: tabSelected === "edit" ? "isActive" : "",
  },
];
