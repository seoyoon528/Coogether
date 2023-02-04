// 구현 코드
import React, { useEffect, useState, useRef } from 'react';
import { useHistory } from 'react-router-dom';
import naverIcon from '../assets/icon/naverLogin.svg';

function NaverAuth() {
  const naverRef = useRef();
  const [user, setUser] = useState(null);
  // id=naverIdLogin_loginButton
  const naverIconHandler = () => {
    document.getElementById('naverIdLogin_loginButton').click();
  };

  // SDK 네이버 선언
  const { naver } = window;
  // 네이버 로그인 기능 및 버튼 구현
  const naverLogin = new naver.LoginWithNaverId({
    clientId: process.env.REACT_APP_NAVER_CLIENT_ID,
    // callbackurl을 main으로 하면 정보가 나오지 않음. 수정예정
    callbackUrl: 'http://localhost:3000/login',
    isPopup: false,
    loginButton: {
      color: 'green',
      type: 3,
      height: 50,
    },
  });
  const getUser = async () => {
    await naverLogin.getLoginStatus(status => {
      if (status) {
        // user 정보 백엔드에서 확인 후 DB 저장
        setUser({ ...naverLogin.user });
        console.log(naverLogin.user);
      }
    });
  };
  useEffect(() => {
    naverLogin.init();
    getUser();
  }, []);
  const history = useHistory();
  const naverLogout = () => {
    localStorage.removeItem('com.naver.nid.access_token');
    localStorage.removeItem('com.naver.nid.oauth.state_token');
    setUser(null);
    // getUser();
    history.replace('/');
  };

  return (
    <div>
      {user ? (
        <div>
          <h2>네이버 로그인 성공!</h2>
          <h3>사용자 이름</h3>
          <div>{user.name}</div>
          <h3>사용자 이메일</h3>
          <div>{user.email}</div>
          <h3>사용자 프로필사진</h3>
          <img src={user.profile_image} alt="프로필 사진" />
          <button onClick={naverLogout}>로그아웃</button>
        </div>
      ) : (
        // 네이버 로그인 버튼
        <div>
          <image src={naverIcon} alt="네이버 아이콘" />
          <button
            onClick={naverIconHandler}
            style={{
              width: '312px',
              height: '55px',
              backgroundImage: `url(${naverIcon})`,
              border: 'none',
              cursor: 'pointer',
            }}
          >
            <div id="naverIdLogin" style={{ display: 'none' }}>
              네이버 로그인
            </div>
          </button>
        </div>
      )}
    </div>
  );
}
export default NaverAuth;
