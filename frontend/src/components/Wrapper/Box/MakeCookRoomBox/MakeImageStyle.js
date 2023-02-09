import styled from 'styled-components';

export const StreamContents = styled.div`
  display: flex;
  /* flex-direction: row; */
  text-align: center;
  /* margin-bottom: 4rem; */
  margin-bottom: 1rem;
  align-items: center;
  p {
    text-align: left;
    font-weight: 600;
  }

  & div {
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 10px;
    border-radius: 0.95rem;
    height: 21px;
    width: 38px;
    background-color: #ff0000;
    font-family: 'Pretendard ExtraLight';
    color: #ffffff;
    font-size: medium;
  }
`;
export const Area = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 16rem;
  margin: 0;

  border: 0.5px solid #505050;
  border-radius: 4px;

  background-color: transparent;

  img {
    width: 100%;
    height: 100%;
  }
`;
