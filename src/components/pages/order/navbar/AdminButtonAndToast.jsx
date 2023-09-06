import { styled } from "styled-components";
import ToggleButton from "./ToggleButton";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { useState } from "react";
import { theme } from "../../../../assets/theme";

export const AdminButtonAndToast = () => {
  const [isChecked, setIsChecked] = useState(false);

  const onToggle = () => {
    if (!isChecked) {
      toast.info("Mode admin activé", {
        // icon: <FaUserSecret size={30} />,
        theme: "dark",
        position: "bottom-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
        progress: undefined,
      });
    }
    setIsChecked(!isChecked);
  };

  return (
    <AdminButtonAndToastStyled>
      <ToggleButton onToggle={onToggle} checked={isChecked} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </AdminButtonAndToastStyled>
  )
}

const AdminButtonAndToastStyled = styled.div`
  .toaster {
      max-width: 300px;
    }

    .Toastify__toast.Toastify__toast-theme--dark.Toastify__toast--info {
      background: ${theme.colors.background_dark};
    }

    .body-toast {
      .Toastify__toast-icon.Toastify--animate-icon.Toastify__zoom-enter {
        margin-right: 20px;
        margin-left: 5px;
      }
      div {
        line-height: 1.3em;
      }
    }
`;
