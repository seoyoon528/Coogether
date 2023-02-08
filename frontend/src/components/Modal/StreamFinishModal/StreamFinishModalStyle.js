import styled from 'styled-components';

export const FinishWrap = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

export const FinishTitle = styled.div`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 600;
  font-size: 2vw;
  line-height: 29px;
  text-align: center;
  color: #000000;
  margin-bottom: 3vh;
`;

export const SubTitle = styled.div`
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 400;
  font-size: 1vw;
  line-height: 17px;
  text-align: center;
  color: #000000;
  margin-bottom: 4vh;
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
export const ImgUploadBtn = styled.button`
  width: 10vw;
  height: 5vh;

  text-align: center;
  background: #febd2f;
  border-radius: 25px;
  font-family: 'Pretendard Variable';
  font-style: normal;
  font-weight: 500;
  font-size: 16px;
  line-height: 22px;
  /* or 138% */
`;

export const NextBeforWrap = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;
export const NexBeBten = styled.button`
  width: 7vw;
  height: 5vh;
  background: #ffdb8d;
  border-radius: 4px;
`;
