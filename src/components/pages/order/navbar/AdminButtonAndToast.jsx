import { styled } from "styled-components";
import ToggleButton from "../../../reusable-ui/ToggleButton";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { theme } from "../../../../assets/theme";
import { useAdminContext } from "../../../../contexts/AdminContext";

export const AdminButtonAndToast = () => {
  const { isAdminMode, setAdminMode } = useAdminContext();

  const onToggle = () => {
    if (!isAdminMode) {
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
    setAdminMode(!isAdminMode);
  };

  return (
    <AdminButtonAndToastStyled>
      <ToggleButton
        onToggle={onToggle}
        checked={isAdminMode}
        labelIfChecked={"Désactiver le mode admin"}
        labelIfUnchecked={"Activer le mode admin"}
      />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
    </AdminButtonAndToastStyled>
  );
};

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
