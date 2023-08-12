import { styled } from "styled-components";

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
  margin-bottom: 30px;

  h1 {
    color: #ffa01b;
    text-align: center;
    font-family: Amatic SC;
    font-size: 110px;
    font-style: normal;
    font-weight: 700;
    line-height: 115px; /* 104.545% */
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin: 0 20px;
  }

  img {
    width: 250px;
    height: 150px;
  }
`;


export default Logo;
