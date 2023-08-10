import styles from "styled-components";

const Logo = ({ width, height }) => {
  return (
    <Wrapper>
      <Text>CRAZEE</Text>
      <img
        src='public/assets/F03 logo-orange.png'
        alt='Image représentant un hamburger'
        width={width}
        height={height}
      />
      <Text>BURGER</Text>
    </Wrapper>
  );
};

const Wrapper = styles.div`
    display: flex;
    align-items: center;
`;

const Text = styles.p`
    color: #FFA01B;
    text-align: center;
    font-family: Amatic SC;
    font-size: 110px;
    font-style: normal;
    font-weight: 700;
    line-height: 115px; /* 104.545% */
    letter-spacing: 1.5px;
    text-transform: uppercase;
    margin : 0 20px;
`;

export default Logo;
