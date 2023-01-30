import React, { useRef } from 'react';
import ReactDOM from 'react-dom';

import { Button } from '@mui/material';

import { BackdropStyle, ModalOverlayStyle } from './RecipeRegisterModalStyle';

import exampleImg from '../../../assets/img/한번에 넣기 이미지.png';

function Backdrop({ onClose }) {
  return <BackdropStyle onClick={onClose} />;
}

function ModalOveray({ onClose, onConfirm }) {
  const ingredientInputRef = useRef();

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
          <img src={exampleImg} alt="example-img" width="80%" />
        </div>
        <p>
          각 식재료는 쉼표(,)로 구분하고 재료 및 양념, 소스 등을 구분할 경우
          대괄호([]) 사용해주세요.
        </p>
        <div>
          <label htmlFor="ingredients-input" />
          <textarea
            id="ingredients-input"
            rows="10"
            cols="80"
            ref={ingredientInputRef}
          />
        </div>
        <div>
          <Button
            variant="contained"
            id="confirm"
            onClick={() => {
              onConfirm(ingredientInputRef.current.value);
              onClose();
            }}
          >
            <p>확인</p>
          </Button>
          <Button
            variant="contained"
            id="cancel"
            onClick={onClose}
            color="error"
          >
            <p>취소</p>
          </Button>
        </div>
      </form>
    </ModalOverlayStyle>
  );
}

function RecipeRegisterModal({ onClose, onConfirm }) {
  return (
    <>
      {ReactDOM.createPortal(
        <Backdrop onClose={onClose} />,
        document.querySelector('#backdrop-root1')
      )}
      {ReactDOM.createPortal(
        <ModalOveray onClose={onClose} onConfirm={onConfirm} />,
        document.querySelector('#modal-root1')
      )}
    </>
  );
}

export default RecipeRegisterModal;
