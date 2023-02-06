import React from 'react';
import BannerIMG from '../../assets/img/BannerIMG.jpg';
import * as S from './BannerStyle';

function Banner() {
  return (
    <S.BannerContainer>
      <h1 className="mainTitle">못해도 괜찮아요</h1>
      <h1 className="subTitle">같이하는 즐거운 요리</h1>
      <p>내가 가진 재료로 함께 요리하는 라이브 쿠킹</p>
      <img src={BannerIMG} alt="" />
    </S.BannerContainer>
  );
}

export default Banner;
