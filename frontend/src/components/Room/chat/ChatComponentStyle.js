import styled from 'styled-components';

export const WaitContainer = styled.div`
  display: absolute;
  top: 0px;
  left: 0px;
  height: 96vh;
  width: 98vw;
  background: rgba(254, 189, 47, 0.1);
  border-radius: 45px;
  margin: 2vh 1vw;
  padding: 1vh 0;
`;

export const WaitDivideBox = styled.div`
  width: 49vw;
  height: 80vh;
  float: left;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;
export const WaitTitle = styled.h1`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 3vw;
  line-height: 43px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  margin: 4vh 0;
`;

export const ThisUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 45px;
`;
export const WrapUserInfo = styled.span`
  margin: 0 0.7vw 0 0;
  font-size: 15px;
  & > div {
    font-size: 1.2vw;
  }
`;
export const WrapUserList = styled.div`
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const ContentWrap = styled.div`
  border-radius: 3px;
  display: flex;
  width: 80%;
  height: 70vh;
`;

export const ExitBox = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 90%;
  height: 14vh;
  padding: 5vh 5vw;
  & > a {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 9vw;
    height: 6vh;
    font-size: 1.5vw;
    background: #dee2e6;
    border-radius: 3px;
  }
`;
export const RecipeWrap = styled.div`
  width: 100%;
  height: 55vh;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 3%;
  position: relative;
  text-align: center;
  margin-top: 20px;
  border-radius: 3px;
  border: 1px solid #505050;
  background: #ffffff;
  padding-top: 10%;
  overflow: overlay;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  & > h1 {
    display: block;
    font-family: Pretendard Variable;
    font-style: normal;
    font-weight: 700;
    font-size: 1.4vw;
    line-height: 29px;
  }
`;
export const StepTitle = styled.div`
  text-align: left;
  margin-bottom: 1.3vh;
  font-size: 1.7vw;
  & div {
    margin-top: 0.5vh;
    font-size: 1.2vw;
  }
`;
export const StepIngTitle = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  margin-bottom: 1.3vh;
  font-size: 1.7vw;
  & div {
    margin-top: 0.5vh;
    font-size: 1.2vw;
  }
`;
export const IngWrap = styled.div`
  width: 100%;
  height: 55vh;
  padding-left: 5%;
  padding-right: 5%;
  padding-bottom: 3%;
  position: relative;
  text-align: center;
  margin-top: 20px;
  border-radius: 3px;
  border: 1px solid #505050;
  background: #ffffff;
  padding-top: 10%;
  overflow: overlay;
  -ms-overflow-style: none;
  ::-webkit-scrollbar {
    display: none;
  }
  & > h1 {
    font-family: Pretendard Variable;
    font-style: normal;
    font-weight: 700;
    font-size: 1.4vw;
    line-height: 29px;
  }
`;

export const ChatComponent = styled.div`
  border-radius: 3px;
  width: 100%;
  height: 100%;

  background-color: transparent;
`;
export const DivBox = styled.div`
  width: 100%;
  height: 3vh;
  display: block;
`;

export const ChatTitle = styled.div`
  right: 25%;
  transform: translate(50%, -70%);
  width: 10vw;
  height: 5vh;
  z-index: 9999;
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 30px;
  background-color: #febd2f;

  text-align: center;
  color: #ffffff;
  & > span {
    font-weight: bold;
    font-size: 2vh;
  }
`;
export const ChatBox = styled.div`
  display: flex;
  width: 100%;
  height: 90%;
  border: 0.5px solid black;
  background-color: #ffffff;
  flex-direction: column;
  border-radius: 4px;
  padding: 1vh 1vw;
  margin-top: 1vh;
`;
