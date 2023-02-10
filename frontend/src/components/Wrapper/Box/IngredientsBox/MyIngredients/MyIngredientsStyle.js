import styled from 'styled-components';

export const FridgeButton = styled.button`
  font-size: 14px;
  padding: 5px;
  border: 1px solid #febd2f;
  background-color: transparent;
  border-radius: 5px;
  color: #febd2f;
  font-weight: 200;
  width: 12rem;
  word-break: keep-all;
  opacity: 0.7;
  cursor: pointer;
  &:hover {
    background-color: #febd2f;
    color: #ffffff;
  }
`;

export const Button = styled.button`
  font-size: xx-small;
  float: left;
  width: 50%;
  width: 50px;
  z-index: 1;
  /* position: absolute; */
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

export const AppWrap = styled.div`
  text-align: right;
  margin: auto;
`;

export const Contents = styled.div`
  background: #fff8ea;
  height: 164px;
  margin-bottom: 20px;
  padding: 12px;
  /* margin-left: 16rem; */
  &::-webkit-scrollbar {
    width: 0.3rem;
  }
  &::-webkit-scrollbar-thumb {
    border-radius: 1.5px;
    background: #febd2f;
    background-clip: padding-box;
    border: 1px solid transparent;
  }

  &::-webkit-scrollbar-track {
    background-color: #febd2f;
    border-radius: 10px;
    box-shadow: inset 0px 0px 5px white;
  }

  @media screen and (max-width: 1024px) {
    overflow-x: auto;
  }
`;

export const Circle = styled.button`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background-color: #febd2f;
  font-size: smaller;
  text-align: center;
  line-height: 60px;
  /* margin-bottom: 1rem; */
  margin-left: 1rem;
  margin-right: 1rem;
  margin-top: 1rem;
  z-index: 1;
  position: relative;

  p {
    position: absolute;
    left: 11.1%;
    bottom: 30%;
    text-align: center;
  }
`;
