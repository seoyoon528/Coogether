import styled from 'styled-components';

export const Window = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;

  width: 100vw;
  height: 100vh;
  background-color: #fff8ea;
`;

export const All = styled.div`
  display: flex;
  flex-direction: column;

  .title {
    display: flex;
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
  }
`;

export const Header = styled.div`
  display: flex;
  .first {
    display: flex;
    align-items: center;
    font-size: 13rem;
  }
  .second {
    display: flex;
    align-items: center;
    font-size: 13rem;
  }
  .food {
    height: 30rem;
  }
`;
