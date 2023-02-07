import styled from 'styled-components';

export const CookRoomItemWrapper = styled.div`
  height: 25.5rem;
  width: 21.6rem;
  /* background-color: rgba(255, 248, 234, 0.5); */
  background-color: #fff8ea;
`;

export const CookRoomItemImg = styled.img`
  height: 60%;
  width: 100%;
`;

export const KingWrapper = styled.div`
  height: 14px;

  & p {
    text-align: left;
    vertical-align: top;
    font-size: 12px;
    line-height: auto;
    color: #4f4f4f;
  }
  & img {
  }
`;

export const roomTitle = styled.h4`
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
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  width: 3rem;
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.5);

  & p {
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    line-height: auto;
    color: #ffffff;
  }
`;

export const TagWrapper = styled.div`
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
