import { BsPersonCircle } from "react-icons/bs";
import { Link } from "react-router-dom";
import "react-toastify/dist/ReactToastify.css";
import { ToastContainer, toast } from "react-toastify";
import { styled } from "styled-components";
import { theme } from "../../../../assets/theme";
import ToggleButton from "./ToggleButton";
import { useState } from "react";

const NavbarRigthSide = ({ username }) => {
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
    <NavbarRigthSideStyled>
      <ToggleButton onToggle={onToggle} checked={isChecked} />
      <ToastContainer className="toaster" bodyClassName="body-toast" />
      <div className="userIdentifier">
        <p>
          Hey, <span>{username}</span>
        </p>
        <Link to="/">Se déconnecter</Link>
      </div>
      <BsPersonCircle className="personCicleIcon" />
    </NavbarRigthSideStyled>
  );
};

const NavbarRigthSideStyled = styled.div`
  display: flex;
  align-items: center;
  color: ${theme.colors.greyBlue};

  div.userIdentifier {
    display: flex;
    flex-direction: column;
    align-items: end;
    margin-left: 50px;

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

    span {
      color: ${theme.colors.primary};
      font-weight: ${theme.fonts.weights.bold};
    }

    a {
      font-size: ${theme.fonts.size.XXS};
      font-style: normal;
      font-weight: ${theme.fonts.weights.regular};
      line-height: 14px; /* 140% */
      text-decoration: none;
      &:visited {
        color: ${theme.colors.greyBlue};
      }
      &:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    }
  }

  .personCicleIcon {
    transform: scale(2);
    margin-left: ${theme.spacing.md};
    color: ${theme.colors.greyDark};
  }
`;

export default NavbarRigthSide;
