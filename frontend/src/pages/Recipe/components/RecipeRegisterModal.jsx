import React from 'react';
import ReactDOM from 'react-dom';

import styled from 'styled-components';
import RecipeRegisterModalStyle from './RecipeRegisterModalStyle';

const BackdropStyle = styled.div`
  z-index: 1;
  width: 100vw;
  height: 100vh;
  background-color: black;
`;

function Backdrop() {
  return (
    <BackdropStyle>
      <h1>활성화됨</h1>
    </BackdropStyle>
  );
}

function ModalOveray() {
  return (
    <div className="modal">
      <header>
        <h1>여기는 모달 자리</h1>
      </header>
      <div>여기가 콘텐츠 구역</div>
      <footer>
        <button type="button">누르면 종료</button>
      </footer>
    </div>
  );
}

function RecipeRegisterModal() {
  return (
    <RecipeRegisterModalStyle>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.querySelector('#backdrop-root1')
      )}
      {/* {ReactDOM.createPortal(
        <ModalOveray />,
        document.querySelector('#modal-root1')
      )} */}
    </RecipeRegisterModalStyle>
  );
}

export default RecipeRegisterModal;
