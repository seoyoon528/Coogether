import styled from 'styled-components';

export const Window = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  /* position: relative; */
  width: 100vw;
  height: 100vh;
  background-color: #fff8ea;
`;

export const All = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-around; */

  .title {
    display: flex;
    /* position: absolute;
    left: 38.8%;
    top: 42%; */
  }
  .logoBtn {
    padding-top: 5rem;
    display: flex;
    align-items: center;
  }
  .logo {
    display: inline;
    align-items: center;
    height: 10rem;
    justify-content: center;
    /* margin-top: 5rem; */
    /* align-items: center; */
    /* position: absolute;
    left: 45%;
    top: 50%; */
  }
`;

export const Header = styled.div`
  display: flex;
  .first {
    display: flex;
    align-items: center;
    font-size: 13rem;
    /* position: absolute;
    left: 40%;
    top: 20%; */
  }
  .second {
    display: flex;
    align-items: center;
    font-size: 13rem;
    /* position: absolute;
    left: 57%;
    top: 20%; */
  }
  .food {
    height: 30rem;
    /* position: absolute;
    left: 43%;
    top: 10%; */
  }
`;
