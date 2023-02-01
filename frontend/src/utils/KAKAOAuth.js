import { useEffect, useState } from 'react';
import axios from 'axios';
import qs from 'qs';
import { useLocation } from 'react-router-dom';
import kakaoLogin from '../assets/icon/kakaoLogin.svg';

function KakaoAuth() {
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;
  const CLIENT_SECRET = process.env.REACT_APP_KAKAO_CLIENT_SECRET_KEY;
  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get('code');
  const location = useLocation();
  const getToken = async () => {
    if (location.pathname !== '/login') {
      const payload = qs.stringify({
        grant_type: 'authorization_code',
        client_id: REST_API_KEY,
        redirect_uri: REDIRECT_URI,
        code,
        client_secret: CLIENT_SECRET,
      });

      try {
        // access token 가져오기
        const res = await axios.post(
          'https://kauth.kakao.com/oauth/token',
          payload
        );
        // console.log(res.data.access_token);
        // console.log(res.data.refresh_token);
        // Kakao Javascript SDK 초기화
        window.Kakao.init(REST_API_KEY);
        // access token 설정
        window.Kakao.Auth.setAccessToken(res.data.access_token);
        const data = await window.Kakao.API.request({
          url: '/v2/user/me',
        });
        // 여기서의 data를 백엔드에 post로 보내서 회원 여부를 확인
        console.log(data);
        // history.replace('/');
      } catch (err) {
        console.log(err);
      }
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  return (
    <a href={KAKAO_AUTH_URL}>
      <img src={kakaoLogin} alt="카카오 로그인" />
    </a>
  );
}
export default KakaoAuth;
