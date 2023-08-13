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
  padding: 0px 70px 0px 20px;

  .wrapperLogo {
    cursor: pointer;
  }

  .wrapperUserIdentifier {
    display: flex;
    align-items: center;

    font-family: Open Sans;
    color: #747b91;

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
      font-size: 10px;
      font-style: normal;
      font-weight: 400;
      line-height: 14px; /* 140% */
      text-decoration: none;
      &:visited {
        color: #747b91;
      }
      &:hover {
        text-decoration: underline;
        text-underline-offset: 4px;
      }
    }

    .personCicleIcon {
      transform: scale(2);
      margin-left: 15px;
      color: ${theme.colors.greyDark};
    }
  }
`;
