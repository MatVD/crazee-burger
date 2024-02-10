import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import AddProductForm from "./AddProductForm/AddProductForm";
import EditProductForm from "./EditProductForm/EditProductForm";

export const getTabsConfig = (tabSelected) => [
  {
    index: "add",
    label: "Ajouter un produit",
    icon: <AiOutlinePlus />,
    className: tabSelected === "add" ? "isActive" : "",
    content: <AddProductForm />,
  },
  {
    index: "edit",
    label: "Modifier un produit",
    icon: <MdModeEditOutline />,
    className: tabSelected === "edit" ? "isActive" : "",
    content: <EditProductForm />,
  },
];
