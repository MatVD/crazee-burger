import { styled } from "styled-components";
import { theme } from "../../assets/theme";
import logo from "../../assets/logo-orange.png";

const Logo = ({ scale }) => {
  return (
    <LogoWrapper scale={scale}>
      <h1>CRAZEE</h1>
      <img
        src={logo}
        alt='Image représentant un hamburger'
      />
      <h1>BURGER</h1>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  transform: scale(
    ${(props) => props.scale}
  ); // la valeur de scale est passer par une props

  h1 {
    display: inline;
    text-align: center;
    color: ${theme.colors.primary};
    font-size: ${theme.fonts.size.P4};
    line-height: 1em;
    font-weight: ${theme.fonts.weights.bold};
    text-transform: uppercase;
    letter-spacing: 1.5px;
    font-family: "Amatic SC", cursive;
  }

  img {
    object-fit: contain;
    object-position: center;
    height: 60px;
    width: 80px; // for Safari and Firefox
    margin: 0 ${theme.gridUnit / 2}px;
  }
`;

export default Logo;
