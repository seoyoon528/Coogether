import styled from 'styled-components';
import loginBg from '../../../assets/img/loginBackground.jpeg';

export const loginBackground = styled.div`
  width: 100%;
  height: 100vh;
  text-align: center;
  position: relative;
  background-size: cover;
  background-image: linear-gradient(
      rgba(255, 255, 255, 0.9),
      rgba(255, 255, 255, 0.9)
    ),
    url(${loginBg});

  & > h1 {
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 800;
    font-size: 32px;
    line-height: 38px;
    align-items: center;
    padding: 10% 0 2% 0;
  }

  & > div {
    font-family: 'Pretendard Variable';
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 19px;
    align-items: center;
    text-align: center;
    padding: 0 0 4% 0;
  }
  & > img {
    display: block;
    padding: 1% 0 0 0;
    margin: auto;
    cursor: pointer;
  }
`;
