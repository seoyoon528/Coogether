import styled from 'styled-components';

export const all = styled.div`
  position: relative;
  width: 100vw;
  height: 100vh;
  background-color: #fff8ea;

  .food {
    position: absolute;
    height: 30rem;
    left: 43%;
    top: 10%;
  }

  & h1 {
    position: absolute;
    left: 38.8%;
    top: 42%;
  }

  .first {
    font-size: 128px;
    position: absolute;
    left: 40%;
    top: 20%;
  }
  .second {
    font-size: 128px;
    position: absolute;
    left: 57%;
    top: 20%;
  }

  .logo {
    position: absolute;
    height: 10rem;
    left: 45%;
    top: 50%;
  }
`;

export const Img = styled.img`
  position: absolute;
  height: 30rem;
  left: 53%;
  top: 20%;
`;
