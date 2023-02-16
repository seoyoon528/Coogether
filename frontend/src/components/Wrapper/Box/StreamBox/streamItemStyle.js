import styled from 'styled-components';

export const CookRoomItemWrapper = styled.div`
  position: relative;
  margin-top: 25px;
  height: 25.5rem;
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
  align-items: flex-end;

  & p {
    text-align: left;
    vertical-align: top;
    font-size: 12px;
    line-height: auto;
    color: #4f4f4f;
    font-family: Pretendard Variable;
    font-weight: 500;
  }
  .chefhat {
    margin-right: 5px;
    width: 15px;
    height: 15px;
  }
`;

export const roomTitle = styled.h4`
  font-family: 'Pretendard ExtraBold';
  position: absolute;
  top: 165px;
  text-align: left;
  vertical-align: top;
  line-height: auto;
  color: #000000;
  width: 130px;
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
`;

export const StartUserWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StartTimeWrapper = styled.div`
  position: absolute;
  top: 133px;
  right: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 0.2rem;
  height: 20px;
  width: max-content;
  min-width: 5rem;
  background-color: rgba(0, 0, 0, 0.5);
  padding: 0 5px;

  & p {
    font-family: 'Pretendard Variable';
    font-weight: 600;
    text-align: center;
    vertical-align: middle;
    font-size: 14px;
    line-height: auto;
    color: #ffffff;
  }
`;

export const JoinUserWrapper = styled.div`
  position: absolute;
  top: 133px;
  left: 0px;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 2rem;
  border-radius: 0.2rem;
  background-color: rgba(0, 0, 0, 0.5);
  width: max-content;
  min-width: 5rem;
  padding: 0 5px;
  & p {
    font-family: 'Pretendard Variable';
    font-weight: 600;
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
  min-height: 2.1rem;
  background-color: #febd2f;
  font-family: 'Pretendard ExtraLight';
  text-align: center;
  vertical-align: middle;
  line-height: auto;
  color: black;
  width: max-content;
  padding: 0 10px;
  font-weight: 600;
`;
