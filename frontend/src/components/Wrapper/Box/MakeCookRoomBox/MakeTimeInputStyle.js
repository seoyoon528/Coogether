import styled from 'styled-components';

export const StreamContents = styled.div`
  /* display: flex; */
  text-align: center;
  /* margin-bottom: 4rem; */
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
  /* input {
    width: 100%;
    height: 40px;
    color: inherit;
    margin-bottom: 1rem;
    border: 1px solid;
  }
  input[type='time'] {
    position: relative;
  }

  input[type='time']::-webkit-calendar-picker-indicator {
    display: block;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background: transparent;
  } */
`;

export const StreamContentsInput = styled.div`
  width: 100%;
  height: 40px;
  color: inherit;
  margin-bottom: 1rem;
  border: 1px solid;

  input {
    width: 100%;
    height: 40px;
    color: inherit;
    margin-bottom: 1rem;
    border: 1px solid;
  }
  input[type='time'] {
    position: relative;
  }

  input[type='time']::-webkit-calendar-picker-indicator {
    display: block;
    top: 0;
    right: 0;
    height: 100%;
    width: 100%;
    position: absolute;
    background: transparent;
  }
`;
