import { styled } from "styled-components";
import { theme } from "../../assets/theme";

const Logo = () => {
  return (
    <LogoWrapper>
      <h1>CRAZEE</h1>
      <img
        src='src/assets/F03 logo-orange.png'
        alt='Image représentant un hamburger'
      />
      <h1>BURGER</h1>
    </LogoWrapper>
  );
};

const LogoWrapper = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 40px;
  transform: scale(2.5);

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
