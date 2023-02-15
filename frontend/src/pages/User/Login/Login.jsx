import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import * as L from './LoginStyle';

import KakaoLogin from '../../../assets/icon/kakaoLogin.svg';

function Login({ onChangeShow }) {
  const history = useHistory();
  const isLogin = useSelector(state => state.user.authenticated);
  const REDIRECT_URI = 'https://i8b206.p.ssafy.io/login/oauth2/code/kakao';
  const REST_API_KEY = 'b674e8f9c243d9c4425264edb0f647a9';
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  useEffect(() => {
    onChangeShow();
  }, []);
  if (isLogin) {
    history.push('/Main');
    onChangeShow();
  }

  return (
    <L.loginBackground>
      <h1>로그인 또는 회원가입</h1>
      <div>소셜 로그인으로 쿠게더와 함께할 수 있습니다</div>
      <a href={KAKAO_AUTH_URL}>
        <img src={KakaoLogin} alt="카카오아이콘" />
      </a>
    </L.loginBackground>
  );
}

export default Login;
