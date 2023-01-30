import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import axios from 'axios';
import qs from 'qs';

function Auth() {
  const REST_API_KEY = process.env.REACT_APP_REST_API_KEY;
  const REDIRECT_URI = 'http://localhost:3000/oauth/kakao/callback';
  const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET_KEY;
  // calllback으로 받은 인가코드
  const code = new URL(window.location.href).searchParams.get('code');
  console.log(code);
  const getToken = async () => {
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
      console.log(res.data.access_token);
      console.log(res.data.refresh_token);
      // Kakao Javascript SDK 초기화
      window.Kakao.init(REST_API_KEY);
      // access token 설정
      window.Kakao.Auth.setAccessToken(res.data.access_token);
      // history.replace('/');
      const data = await window.Kakao.API.request({
        url: '/v2/user/me',
      });
      console.log(data);
      // 여기서의 data를 백엔드에 post로 보내서 회원 여부를 확인
    } catch (err) {
      console.log(err);
    }
  };

  useEffect(() => {
    getToken();
  }, []);
  return null;
}
export default Auth;
