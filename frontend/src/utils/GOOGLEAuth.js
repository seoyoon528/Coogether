import React from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/AuthSlice';

function GoogleLogIn() {
  const dispatch = useDispatch();
  const isLogin = useSelector(state => state.user.authenticated);
  return (
    <>
      <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
        <GoogleLogin
          buttonText="google login"
          onSuccess={credentialResponse => {
            dispatch(login({ authenticated: true }));
            console.log(credentialResponse);
          }}
          onError={() => {
            console.log('Login Failed');
          }}
        />
      </GoogleOAuthProvider>
      {isLogin ? <div>맞아요</div> : <div>틀려요</div>}
    </>
  );
}

export default GoogleLogIn;
