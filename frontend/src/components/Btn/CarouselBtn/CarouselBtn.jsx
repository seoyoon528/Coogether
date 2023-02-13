import React, { useState } from 'react';
import * as S from './CarouselBtnStyle';

function CarouselBtn(props) {
  const [selectedOption, setSelectedOption] = useState('left');
  const { left, right, recipeIngredient, percent } = props;

  return (
    <S.Container percent={percent}>
      <S.SwitchWrapper>
        <input
          id="monthly"
          type="radio"
          name="switch"
          checked={selectedOption === 'left'}
        />
        <input
          id="yearly"
          type="radio"
          name="switch"
          checked={selectedOption === 'right'}
        />
        <S.Label
          htmlFor="monthly"
          onClick={() => {
            setSelectedOption('left');
            recipeIngredient('left');
          }}
        >
          {left}
        </S.Label>
        <S.Label
          htmlFor="yearly"
          onClick={() => {
            setSelectedOption('right');
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
