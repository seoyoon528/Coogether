import styled from 'styled-components';

export const Button = styled.button`
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

export const AppWrap = styled.div`
  text-align: right;
  margin: auto;
`;

export const Contents = styled.div`
  background: #fff8ea;
  height: 164px;
  margin-bottom: 20px;
  padding: 20px;
  /* margin-left: 16rem; */

  @media screen and (max-width: 1024px) {
    overflow-x: auto;
  }
`;
