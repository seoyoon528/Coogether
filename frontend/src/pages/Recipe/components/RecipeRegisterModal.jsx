import React from 'react';
import ReactDOM from 'react-dom';

import { BackdropStyle, ModalOverlayStyle } from './RecipeRegisterModalStyle';

function Backdrop() {
  return <BackdropStyle />;
}

function ModalOveray() {
  return (
    <ModalOverlayStyle>
      <header>
        <h1>한번에 넣기</h1>
        <p>
          요리에 들어갈 재료, 양념을 작성 또는 이미 작성된 것을 복사/붙여넣기
          해주세요.
        </p>
      </header>
      <form>
        <div>
          <label htmlFor="ingredients-input" />
          <input type="text" id="ingredients-input" />
        </div>
        <div>
          <button>확인</button>
          <button>취소</button>
        </div>
      </form>
      <footer>
        <button type="button">누르면 종료</button>
      </footer>
    </ModalOverlayStyle>
  );
}

function RecipeRegisterModal() {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop />,
        document.querySelector('#backdrop-root1')
      )}
      {ReactDOM.createPortal(
        <ModalOveray />,
        document.querySelector('#modal-root1')
      )}
    </>
  );
}

export default RecipeRegisterModal;
