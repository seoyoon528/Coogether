import React from 'react';
import * as S from './CarouselBtnStyle';

function CarouselBtn(props) {
  const { left, right } = props;
  return (
    <S.Container>
      <S.SwitchWrapper>
        <input id="monthly" type="radio" name="switch" checked />
        <input id="yearly" type="radio" name="switch" />
        <S.Label htmlFor="monthly">{left}</S.Label>
        <S.Label htmlFor="yearly">{right}</S.Label>
        <S.Highlighter />
      </S.SwitchWrapper>
    </S.Container>
  );
}

export default CarouselBtn;
