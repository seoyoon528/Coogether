import React from 'react';
import CancelOutlinedIcon from '@mui/icons-material/CancelOutlined';
import {
  Overlay,
  ModalWrap,
  CloseButton,
  Contents,
  Fridge,
  Door,
  Bottom,
  Shelves,
  Button,
} from './AllMyIngredientsModalStyle';

function AllMyIngredientsModal({ onClose }) {
  const handleClose = () => {
    onClose?.();
  };
  return (
    <Overlay>
      <ModalWrap>
        <CloseButton onClick={handleClose}>
          <CancelOutlinedIcon />
        </CloseButton>
        <Contents>
          <h2>랜선 냉장고</h2>
          <Fridge>
            <Door>
              <Bottom />
            </Door>
            <Shelves />
          </Fridge>
        </Contents>
        <Button>확인</Button>
      </ModalWrap>
    </Overlay>
  );
}

export default AllMyIngredientsModal;
