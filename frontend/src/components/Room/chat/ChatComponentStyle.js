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
  height: 60vh;
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
  height: 100%;
  padding-left: 5%;
  padding-right: 5%;
  position: relative;
  text-align: center;
  margin-top: 20px;
  border-radius: 3px;
  border: 1px solid #505050;
  background: #ffffff;
  padding-top: 10%;
  overflow-y: scroll;
  & > h1 {
    font-family: Pretendard Variable;
    font-style: normal;
    font-weight: 700;
    font-size: 1.4vw;
    line-height: 29px;
  }
  & div {
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
