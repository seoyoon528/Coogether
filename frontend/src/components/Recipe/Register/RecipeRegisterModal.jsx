import React, { useRef } from 'react';

import { Button, Dialog, IconButton } from '@mui/material';
import CancelPresentationIcon from '@mui/icons-material/CancelPresentation';

import { ModalOverlayStyle } from './RecipeRegisterModalStyle';

import exampleImg from '../../../assets/img/한번에 넣기 이미지.png';

function ModalOveray({ onClose, onConfirm, open }) {
  const ingredientInputRef = useRef();

  return (
    <Dialog open={open} onClose={onClose}>
      <ModalOverlayStyle>
        <div className="modal-button__top">
          <IconButton onClick={onClose}>
            <CancelPresentationIcon fontSize="large" />
          </IconButton>
        </div>
        <header>
          <h2>한번에 넣기</h2>
          <p>
            요리에 들어갈 재료, 양념을 작성 또는 이미 작성된 것을 복사/붙여넣기
            해주세요.
          </p>
        </header>
        <section>
          <div className="modal-form__img">
            <img src={exampleImg} alt="example-img" />
          </div>
          <p className="modal-form__info">
            각 식재료는 쉼표(,)로 구분하고 재료 및 양념, 소스 등을 구분할 경우
            대괄호([]) 사용해주세요.
          </p>
          <textarea
            id="ingredients-input"
            ref={ingredientInputRef}
            placeholder="대파 2개, 고춧가루 1숟가락, 식초 3숟가락"
          />
        </section>
        <div className="modal-button__bottom">
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
      </ModalOverlayStyle>
    </Dialog>
  );
}

function RecipeRegisterModal({ onClose, onConfirm, open }) {
  return (
    <div>
      <ModalOveray onClose={onClose} onConfirm={onConfirm} open={open} />
    </div>
  );
}

export default RecipeRegisterModal;
