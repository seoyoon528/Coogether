import React from 'react';
import * as S from './CarouselBtnStyle';

function CarouselBtn(props) {
  const { left, right, recipeIngredient } = props;
  return (
    <S.Container>
      <S.SwitchWrapper>
        <input id="monthly" type="radio" name="switch" checked />
        <input id="yearly" type="radio" name="switch" />
        <S.Label
          htmlFor="monthly"
          onClick={() => {
            recipeIngredient('left');
          }}
        >
          {left}
        </S.Label>
        <S.Label
          htmlFor="yearly"
          onClick={() => {
            recipeIngredient('right');
          }}
        >
          {right}
        </S.Label>
        <S.Highlighter />
      </S.SwitchWrapper>
    </S.Container>
  );
}

export default CarouselBtn;
