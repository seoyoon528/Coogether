import styled from 'styled-components';

export const CookRoomItemWrapper = styled.div`
  position: relative;
  /* display: flex; */
  /* flex-direction: column; */
  /* justify-content: space-between; */
  margin-top: 25px;
  height: 25.5rem;
  /* width: 21.6rem; */
  /* background-color: rgba(255, 248, 234, 0.5); */
  /* background-color: #fff8ea; */
`;

export const CookRoomItemImg = styled.img`
  position: relative;
  height: 60%;
  width: 100%;
`;

export const KingWrapper = styled.div`
  display: flex;
  position: absolute;
  top: 195px;
  height: 14px;

  & p {
    text-align: left;
    vertical-align: top;
    font-size: 12px;
    line-height: auto;
    color: #4f4f4f;
  }
  .chefhat {
    margin-left: 10px;
    width: 10px;
    height: 10px;
  }
`;

export const roomTitle = styled.h4`
  position: absolute;
  top: 165px;
  text-align: left;
  vertical-align: top;
  line-height: auto;
  color: #000000;
`;

export const StartUserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StartTimeWrapper = styled.div`
  position: absolute;
  top: 134px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  height: 20px;
  /* width: 68px; */
  width: max-content;
  min-width: 5rem;
  background-color: rgba(0, 0, 0, 0.5);

  & p {
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    line-height: auto;
    color: #ffffff;
  }
`;

export const JoinUserWrapper = styled.div`
  position: absolute;
  top: 134px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  /* width: 8rem; */
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.5);
  width: max-content;
  min-width: 5rem;
  & p {
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    line-height: auto;
    color: #ffffff;
  }
`;

export const TagWrapper = styled.div`
  position: absolute;
  top: 215px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.95rem;
  height: 19px;
  width: max-content;
  min-width: 5rem;
  background-color: #febd2f;

  & span {
    font-family: 'Pretendard ExtraLight';
    text-align: center;
    vertical-align: middle;
    line-height: auto;
    color: #ffffff;
  }
`;
