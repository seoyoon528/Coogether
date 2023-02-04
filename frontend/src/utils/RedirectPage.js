import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation, useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { login } from '../store/AuthSlice';
import Signin from '../pages/User/SignIn/Signin';

function RedirectPage() {
  // 쿼리스트링을 백엔드에 송신
  const [isRegistered, setIsregisterd] = useState(true);
  const [userInfo, setUserInfo] = useState({});
  const checkRegister = async () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const res = await axios.get(
      `http://localhost:9000/user/login/kakao?code=${code}`
    );
    // loginsuccess false이면
    if (!res.loginSuccess) {
      setIsregisterd(false);
      setUserInfo(res);
      // 이미 회원인 경우 추후수정
    } else {
      console.log(`회원가입 된 사람입니다`);
      console.log(res);
    }
  };

  useEffect(() => {
    checkRegister();
  }, []);
  return <>{!isRegistered ? <Signin regUserInfo={userInfo} /> : ''}</>;
}
export default RedirectPage;
