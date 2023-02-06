import React from 'react';
import BannerIMG from '../../assets/img/BannerIMG.jpg';
import * as S from './BannerStyle';

function Banner() {
  return (
    <S.BannerContainer>
      <S.BannerIMGContainer src={BannerIMG} alt="배너이미지" />
      <S.TextContainer>
        <S.Title>못해도 괜찮아요 같이하는 즐거운 요리 </S.Title>
        <S.Subtitle>qweqwe</S.Subtitle>
      </S.TextContainer>
    </S.BannerContainer>
  );
}

export default Banner;
