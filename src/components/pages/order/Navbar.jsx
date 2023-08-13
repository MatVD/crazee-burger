import { Link } from "react-router-dom";
import Logo from "../../reusable-ui/Logo";
import { styled } from "styled-components";
import { BsPersonCircle } from "react-icons/bs";
import { theme } from "../../../assets/theme";

export const Navbar = ({ username }) => {
  const refresh = () => window.location.reload(true);

  return (
    <StyledNav>
      <div onClick={refresh} className='wrapperLogo'>
        <Logo scale={1} />
      </div>
      <div className='wrapperUserIdentifier'>
        <div>
          <p>
            Hey, <span>{username}</span>
          </p>
          <Link to='/'>Se déconnecter</Link>
        </div>
        <BsPersonCircle className='personCicleIcon' />
      </div>
    </StyledNav>
  );
};

const StyledNav = styled.nav`
  width: "1OO%";
  height: 98px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 70px 0 20px;

  .wrapperLogo {
    cursor: pointer;
  }

  .wrapperUserIdentifier {
    display: flex;
    align-items: center;

    font-family: Open Sans;
    color: ${theme.colors.greyBlue};

    div {
      display: flex;
      flex-direction: column;
      align-items: end;
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

    .personCicleIcon {
      transform: scale(2);
      margin-left: ${theme.spacing.sm};
      color: ${theme.colors.greyDark};
    }
  }
`;
