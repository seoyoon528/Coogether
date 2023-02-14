import React, { useState } from 'react';
import * as S from './CarouselBtnStyle';

function CarouselBtn(props) {
  const [selectedOption, setSelectedOption] = useState('left');
  const { left, right, recipeIngredient, percent, index } = props;

  return (
    <S.Container percent={percent} idx={index}>
      <S.SwitchWrapper>
        <input
          id="monthly"
          type="radio"
          name="switch"
          checked={selectedOption === 'left'}
          readOnly
        />
        <input
          id="yearly"
          type="radio"
          name="switch"
          checked={selectedOption === 'right'}
          readOnly
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
