import styled from 'styled-components';

export const Contents = styled.div`
  background: #fff8ea;
  height: 172px;
  padding: 20px;
  overflow-y: auto;
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 2px;
    background: #febd2f;
  }
  @media screen and (max-width: 1024px) {
    overflow-x: auto;
  }
`;
export const Icon = styled.div`
  font-size: smaller;
  text-align: center;
  margin: 0;
  width: 20px;
  height: 20px;
`;

export const Circle = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #ffffff;
  font-size: smaller;
  text-align: center;
  line-height: 60px;
  /* white-space: normal;
  word-break: break-all; */
  /* margin-bottom: 1rem; */
  margin: 1.5rem;
  z-index: 1;
`;

export const Button = styled.button`
  font-size: xx-small;
  float: left;
  width: 50%;
  width: 50px;
  z-index: 2;
  position: absolute;
  /* height: 14px; */
  /* justify-content: center;
  text-align: center; */
  margin: 0;
  padding: 0;
  margin-left: 0;
  /* position: relative; */

  &:hover {
    color: #febd2f;
    /* background-color: rgb(0, 0, 0, 0.5); */
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;
