import styled from 'styled-components';

export const Contents = styled.div`
  background: #fff8ea;
  height: 164px;
  margin-bottom: 20px;
  margin-top: 20px;
  padding: 12px;
  padding-top: 0;
  overflow-y: auto;
  overflow-x: auto;
  /* margin-left: 16rem; */
  margin-right: 0rem;
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
  /* z-index: 1; */
  position: relative;

  & > div {
    width: 100%;
    height: 20%;
    text-align: center;
  }

  img {
    width: 80%;
    height: 80%;
  }
`;

export const Button = styled.button`
  font-size: xx-small;
  width: 50%;
  width: 50px;
  z-index: 1;

  &:hover {
    color: #febd2f;
  }
`;

export const Wrapper = styled.div`
  position: relative;
`;

export const Div = styled.div`
  position: relative;
  opacity: 0.5;
`;

export const Text = styled.p`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  color: white;
`;

export const Name = styled.p`
  text-align: left;
  font-size: 14px;
`;

export const Container = styled.div`
  margin-top: 1vh;
  display: grid;
  grid-template-columns: repeat(5, 1fr);
  grid-gap: 2px;
  overflow-x: 0;
  overflow-y: 0;

  @media screen and (max-width: 920px) {
    margin-top: 1vh;
    display: grid;
    grid-template-columns: repeat(3, 1fr);
    grid-gap: 1px;
    overflow-x: 0;
    overflow-y: 0;
  }
`;

export const Span = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  flex-direction: column;
  align-items: center;
`;
