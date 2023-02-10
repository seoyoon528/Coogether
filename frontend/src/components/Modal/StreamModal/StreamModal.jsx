import React from 'react';
import { Overlay, ModalWrap } from './StreamModalStyle';
import NextBtn from '../../Btn/NextBtn/NextBtn';

function StreamModal({ onClose, roomSubmitHandler }) {
  const handleClose = () => {
    onClose?.();
  };

  return (
    <Overlay onClick={handleClose}>
      <ModalWrap onClick={e => e.stopPropagation()}>
        <p>함께 요리를 시작하시겠습니까?</p>
        <div>
          <NextBtn
            className="closeBtn"
            onClick={handleClose}
            name="취소"
            color="gray"
            size="small"
          />

          <NextBtn
            className="completeBtn"
            name="완료"
            color="yellow"
            size="small"
            onClick={roomSubmitHandler}
          />
        </div>
      </ModalWrap>
    </Overlay>
  );
}
export default StreamModal;
