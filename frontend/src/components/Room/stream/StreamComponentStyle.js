import styled from 'styled-components';

export const StreamBox = styled.div`
  display: flex;
  flex-direction: column;
  width: 50%;
  height: ${props => `${100 / Math.ceil(props.subscribeNum / 2)}%`};
`;

export const NickName = styled.span`
  width: 100%;
  height: 10%;
  display: block;
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
