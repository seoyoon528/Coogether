import styled from 'styled-components';

export const CookContainer = styled.div`
  display: absolute;
  top: 0px;
  left: 0px;
  height: 96vh;
  width: 98vw;
  margin: 2vh 1vw;
  padding: 2vh 0;
`;

export const CookDivideBox = styled.div`
  width: 49vw;
  height: 80vh;
  float: left;
  display: flex;
  align-content: space-around;
  justify-content: space-around;
  flex-flow: row wrap;
`;
export const CookTitle = styled.h1`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 700;
  font-size: 3vw;
  line-height: 43px;
  display: flex;
  align-items: center;
  text-align: center;
  color: #000000;
  margin: 2% 0;
`;

export const CookThisUserImg = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 45px;
`;
export const WrapCookUserInfo = styled.span`
  margin: 0 4px 0 0;
  font-size: 15px;
`;
export const WrapCookUserList = styled.div`
  display: flex;
  height: 50px;
  flex-direction: row;
  align-items: center;
  margin-bottom: 10px;
`;

export const CookContentWrap = styled.div`
  background: #ffffff;
  border: 1px solid #505050;
  border-radius: 3px;
  width: 80%;
  height: 60vh;
`;

export const CookExitBox = styled.div`
  display: inline-block;
  width: 90%;
  height: 14vh;
`;
