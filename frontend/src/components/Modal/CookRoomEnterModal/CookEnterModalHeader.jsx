import React from 'react';

export default function CookEnterModalHeader() {
  return (
    <header>
      <h1 className="modal__title">요리방에 참여하시겠습니까?</h1>
      <p className="modal__title-description">
        재료를 클릭하시면 구매 페이지로 이동합니다.
      </p>
    </header>
  );
}
