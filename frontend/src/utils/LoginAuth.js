import React, { useState, useEffect } from 'react';
import googleImg from '../assets/icon/googleLogin.svg';
import kakaoImg from '../assets/icon/kakaoLogin.svg';
import naverImg from '../assets/icon/naverLogin.svg';

function LoginAuth() {
  // const socialArr = ['kakao', 'naver', 'google'];
  // const BACKEND_URL = `http://localhost:8080`;
  // const REDIRECT_URI = `http://localhost:3000/oauth/redirect`;

  // const getSocialLoginUrl = socialType => {
  //   return `${BACKEND_URL}/oauth2/authorization/${socialType}?redirect_uri=${REDIRECT_URI}`;
  // };

  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  const getSocialImage = socialType => {
    switch (socialType) {
      case 'google':
        return googleImg;
      case 'naver':
        return kakaoImg;
      case 'kakao':
        return naverImg;
      default:
        return null;
    }
  };

  return (
    <>
      <a href={KAKAO_AUTH_URL}>카카오 로그인</a>
      {/* {socialArr.map((value, idx) => {
        return (
          <>
            <a href={getSocialLoginUrl(value)} key={value}>
              <img src={getSocialImage(value)} alt="소셜로그인 이미지" />
            </a>
            <a href="/oauth/redirect?token=jwttoken">리다이렉트 테스트</a>
          </>
        );
      })} */}
    </>
  );
}
export default LoginAuth;
