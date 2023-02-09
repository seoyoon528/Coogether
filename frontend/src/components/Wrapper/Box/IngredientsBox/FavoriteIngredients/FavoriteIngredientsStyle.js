import styled from 'styled-components';

export const Contents = styled.div`
  background: #fff8ea;
  height: 164px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 12px;
  /* margin-left: 16rem; */
  margin-right: 0rem;
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

export const Circle = styled.div`
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
