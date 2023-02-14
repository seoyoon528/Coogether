import styled from 'styled-components';

import loginBg from '../assets/img/loginBackground.jpeg';

export const Background = styled.div`
  width: 100%;
  height: 100vh;
  /* text-align: center; */
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  position: absolute;
  top: 0px;
  left: 0px;
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
    font-size: 5vh;
    align-items: center;
    padding: 0 0 2vh 0;
  }

  & > img {
    display: block;
    padding: 1% 0 0 0;
    margin: auto;
    cursor: pointer;
  }
`;

export const Intro = styled.div`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 2vh;
  padding: 1vh 0 2vh 0;
`;
export const Name = styled.div`
  font-size: 3vh;
  padding-top: 2vh;

  width: 40vw;
  margin: 1.5vh auto;
  text-align: left;
  display: flex;
`;

export const TagName = styled.span`
  display: flex;
  width: 5vw;
  height: 3vh;
  margin-left: 1vw;
  background: #ff0000;
  border-radius: 9.5px;
  color: white;
  align-items: center;
  justify-content: center;
  font-size: 1.2vw;
`;
export const ConfirmBtn = styled.button`
  background: #ffdb8d;
  width: 7vw;
  height: 5vh;
  border-radius: 4px;
`;
export const ImgBox = styled.div`
  width: 25vw;
  height: 25vh;
  border: 1px solid #505050;
  border-radius: 4px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 3vh;
  & > img {
    width: 100%;
    height: 100%;
  }
`;
