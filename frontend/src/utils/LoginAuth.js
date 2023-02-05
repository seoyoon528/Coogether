import React, { useState, useEffect } from 'react';

function LoginAuth() {
  const REDIRECT_URI = 'http://localhost:3000/login/oauth2/code/kakao';
  const REST_API_KEY = process.env.REACT_APP_KAKAO_REST_API_KEY;
  const KAKAO_AUTH_URL = `https://kauth.kakao.com/oauth/authorize?client_id=${REST_API_KEY}&redirect_uri=${REDIRECT_URI}&response_type=code`;

  return (
    <>
      <a href={KAKAO_AUTH_URL}>카카오 로그인</a>
    </>
  );
}
export default LoginAuth;
