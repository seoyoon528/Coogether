import React from 'react';
import GoogleLogIn from '../../../utils/GOOGLEAuth';
import NaverLogin from '../../../utils/NAVERAuth';
import KAKAOAuth from '../../../utils/KAKAOAuth';

function Login() {
  return (
    <>
      <KAKAOAuth />
      <NaverLogin />
      <GoogleLogIn />
    </>
  );
}

export default Login;
