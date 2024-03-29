import { BsPersonCircle } from "react-icons/bs";
import { Link, useParams } from "react-router-dom";
import { styled } from "styled-components";
import { theme } from "../../../../assets/theme";
import { AdminButtonAndToast } from "./AdminButtonAndToast";

const NavbarRigthSide = () => {
  const { username } = useParams();

  return (
    <NavbarRigthSideStyled>
      <AdminButtonAndToast />
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
