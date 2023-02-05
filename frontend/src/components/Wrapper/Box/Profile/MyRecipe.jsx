import React from 'react';

export default function MyRecipe() {
  return (
    <>
      <h4>등록한 레시피</h4>
      <div className="card">
        <div className="card__image">
          <img src="ss" alt="레시피 사진" />
        </div>
        <h4 className="card__title">요리명</h4>
        <div className="card__content">정보</div>
      </div>
    </>
  );
}
