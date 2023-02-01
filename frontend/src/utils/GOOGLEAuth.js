import React, { useEffect } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/AuthSlice';
import googleLogin from '../assets/icon/googleLogin.svg';

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

function GoogleAuth() {
  // id = container
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.authenticated);

  const googleIconHandler = () => {
    console.log(document.getElementsByTagName('iframe')[0]);
    // document.getElementsByTagName('iframe')[0].click();
  };

  return (
    <div>
      <div>
        <button
          onClick={googleIconHandler}
          style={{
            width: '312px',
            height: '55px',
            backgroundImage: `url(${googleLogin})`,
            border: 'none',
            cursor: 'pointer',
            padding: '0px',
          }}
        >
          <div style={{ opacity: '0' }}>
            <GoogleOAuthProvider
              style={{ margin: '0px' }}
              clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}
            >
              <GoogleLogin
                buttonText="google login"
                style={{ margin: '0px' }}
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
          </div>
        </button>
      </div>
    </div>
  );
}

export default GoogleAuth;
