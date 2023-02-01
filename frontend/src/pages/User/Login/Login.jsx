import React from 'react';
import GoogleAuth from '../../../utils/GoogleAuth';
import NaverAuth from '../../../utils/NaverAuth';
import KakaoAuth from '../../../utils/KakaoAuth';
import * as L from './LoginStyle';

function Login() {
  return (
    <L.loginBackground>
      <h1>로그인 또는 회원가입</h1>
      <div>소셜 로그인으로 쿠게더와 함께할 수 있습니다</div>
      <KakaoAuth />
      <NaverAuth />
      <GoogleAuth />
    </L.loginBackground>
  );
}

export default Login;
