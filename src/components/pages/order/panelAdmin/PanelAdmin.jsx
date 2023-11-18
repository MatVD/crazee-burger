import styled from "styled-components";
import AdminButton from "../../../reusable-ui/AdminButton";
import AdminToggleButton from "../../../reusable-ui/AdminToggleButton";
import { AiOutlinePlus } from "react-icons/ai";
import { MdModeEditOutline } from "react-icons/md";
import { useState } from "react";
import { theme } from "../../../../assets/theme";
import { useContext } from "react";
import AdminContext from "../../../../stores/AdminContext";

export default function PanelAdmin() {
  const { isAdminMode } = useContext(AdminContext);
  const [isOpen, setIsOpen] = useState(false);
  const [isChecked, setIsChecked] = useState(false);
  const [panelTitle, setPanelTitle] = useState("Ajouter un produit");

  const labels = [
    {
      label: "Ajouter un produit",
      icon: <AiOutlinePlus />,
      isSelected: !isChecked,
    },
    {
      label: "Modifier un produit",
      icon: <MdModeEditOutline />,
      isSelected: isChecked,
    },
  ];

  const handleClick = (label) => {
    setIsChecked(!isChecked);
    setPanelTitle(label);
  };

  return (
    <PanelAdminStyled isOpen={isOpen} isAdminMode={isAdminMode}>
      <div className="buttons">
        <AdminToggleButton isOpen={isOpen} setIsOpen={setIsOpen} />
        {
        labels.map((element, index) => {
          return (
            <AdminButton
              icon={element.icon}
              label={element.label}
              isSelected={element.isSelected}
              key={index}
              onClick={() => handleClick(element.label)}
            />
          ); 
        })}
      </div>
      <div className="panel">
        <h2>{panelTitle}</h2>
      </div>
    </PanelAdminStyled>
  );
}

const PanelAdminStyled = styled.div`
  display: ${(props) => (props.isAdminMode ? "block" : "none")};
  position: absolute;
  left: 0;
  right: 0;
  bottom: 0;
  box-shadow: ${theme.shadows.subtle};

  .buttons {
    position: absolute;
    top: -44px;
    left: 70px;
    display: flex;
    height: 0;
  }

  .panel {
    position: relative;
    display: ${(props) => (props.isOpen ? "flex" : "none")};
    height: 250px;
    background-color: #fff;
    border-radius: 0 0 15px 15px;

    h2 {
      font-size: 16px;
      margin-top: 17px;
      margin-left: 22px;
    }
  }
`;
