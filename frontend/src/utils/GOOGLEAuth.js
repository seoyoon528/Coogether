import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/AuthSlice';

function parseJwt(token) {
  const base64Url = token.split('.')[1];
  const base64 = base64Url.replace(/-/g, '+').replace(/_/g, '/');
  const jsonPayload = decodeURIComponent(
    window
      .atob(base64)
      .split('')
      .map(target => {
        const fir = '%';
        const sec = '00';
        const thr = target.charCodeAt(0).toString(16);
        const four = (sec + thr).slice(-2);
        return fir + four;
      })
      .join('')
  );
  // google 계정
  console.log(JSON.parse(jsonPayload));
  return JSON.parse(jsonPayload);
}

function GoogleLogIn() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.authenticated);
  return (
    <div style={{ opacity: '0' }}>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          buttonText="google login"
          onSuccess={credentialResponse => {
            dispatch(login({ authenticated: true }));
            console.log(credentialResponse);
            parseJwt(credentialResponse.credential);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
      {isLogin ? <div>맞아요</div> : <div>틀려요</div>}
    </div>
  );
}

export default GoogleLogIn;
