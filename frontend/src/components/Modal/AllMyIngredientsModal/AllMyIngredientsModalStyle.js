import styled from 'styled-components';

export const Overlay = styled.div`
  position: fixed;
  width: 100%;
  height: 100%;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background: rgba(0, 0, 0, 0.2);
  z-index: 9999;
`;

export const ModalWrap = styled.div`
  width: 600px;
  height: fit-content;
  border-radius: 15px;
  background-color: #ffffff;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const CloseButton = styled.div`
  float: right;
  width: 40px;
  height: 40px;
  margin: 10px;
  cursor: pointer;
  i {
    color: #5d5d5d;
    font-size: 30px;
  }
`;

export const Contents = styled.div`
  text-align: center;
  margin: 50px;
  h2 {
    font-size: 30px;
    font-weight: 600;
    text-align: center;
    margin: auto;
  }
`;

export const Button = styled.button`
  font-size: 14px;
  padding: 10px 20px;
  text-align: center;
  border: none;
  background-color: #febd2f;
  border-radius: 10px;
  color: white;
  font-weight: 200;
  cursor: pointer;
  &:hover {
    background-color: #898989;
  }
`;

export const Fridge = styled.div`
  position: absolute;
  left: 50%;
  top: 50%;
  width: 200px;
  height: 350px;
  border: 5px solid #febd2f;
  border-radius: 10px;
  @include cross-browser(transform, translate(-50%, -50%));
  background-color: #febd2f;
`;

export const Shelves = styled.div`
  border-bottom: 2px solid #ffffff;
  position: relative;
  height: 80%;

  *::before,
  *::after {
    content: '';
    width: 100%;
    position: absolute;
    border-bottom: 2px solid #ffffff;
  }

  &:before {
    top: 65%;
  }

  &::after {
    top: 35%;
  }
`;

export const Door = styled.div`
  width: 100%;
  background-color: #febd2f;
  position: absolute;
  right: 0;
  transition: 0.3s;
  z-index: 99;

  *::before {
    content: '';
    position: absolute;
    height: 75%;
    width: 10px;
    background-color: #ffffff;
    border-radius: 10px;
    left: 10px;
    top: 10px;
  }
`;

export const Bottom = styled.div`
  height: 335px;
  bottom: 0;
  cursor: pointer;

  &:active {
    transform: rotateY(120deg);
    transform-origin: right;
    transition: 0.6s;
    transform-style: preserve-3d;
  }
  *::before {
    display: none;
  }
`;
