import React, { useEffect } from 'react';
import { GoogleLogin, GoogleOAuthProvider } from '@react-oauth/google';

function GoogleLogIn() {
  return (
    <GoogleOAuthProvider clientId={process.env.REACT_APP_GOOGLE_CLIENT_ID}>
      <GoogleLogin
        buttonText="google login"
        onSuccess={credentialResponse => {
          console.log(credentialResponse);
        }}
        onError={() => {
          console.log('Login Failed');
        }}
      />
    </GoogleOAuthProvider>
  );
}

export default GoogleLogIn;
