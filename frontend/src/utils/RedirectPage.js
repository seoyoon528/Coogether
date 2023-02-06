import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
// MUI 설정

import { useTheme, StyledEngineProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { login } from '../store/AuthSlice';
import { Background } from '../pages/User/SignIn/SigninStyle';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
};
function getStyles(name, personName, theme) {
  return {
    fontWeight:
      personName.indexOf(name) === -1
        ? theme.typography.fontWeightRegular
        : theme.typography.fontWeightMedium,
  };
}

function RedirectPage({ history }) {
  const dispatch = useDispatch();
  // 쿼리스트링을 백엔드에 송신
  const [isRegistered, setIsregisterd] = useState(true);
  const [userInfo, setUserInfo] = useState({
    id: '', // /user/login의 response로 넘어온 "user" : {"userId": "KAKAO_2309429382o348"}
    name: '', // /user/login의 response로 넘어온 "user" : {"userName": "박서윤"}
    email: '', // /user/login의 response로 넘어온 "user" : {"userEmail": "5120a@naver.com"}
    nickname: '',
    profileImg: 'imgUrl',
    userIntroduce: '안녕하세요 000입니다.',
    userCookCategory: '',
  });
  const [nickName, setNickName] = useState('');
  const [prefer, setPrefer] = useState([]);
  const preferCookArr = [
    ['한식', 'KOREAN'],
    ['중식', 'CHINESE'],
    ['양식', 'WESTERN'],
    ['일식', 'JAPANESE'],
    ['베이킹/디저트', 'DESSERT'],
    ['아시안', 'ASIAN'],
    ['분식', 'BUNSIK'],
    ['기타', 'ETC'],
    ['없음', 'NONE'],
  ];
  const nickNameHandler = e => {
    setNickName(e.target.value);
  };
  const preferHandler = e => {
    setPrefer(
      preferCookArr[preferCookArr.map((v, a) => v[0]).indexOf(e.target.value)]
    );
  };
  const submitRegister = async () => {
    const userFormPayload = {
      id: userInfo.data.user.userId, // /user/login의 response로 넘어온 "user" : {"userId": "KAKAO_2309429382o348"}
      name: userInfo.data.user.userName, // /user/login의 response로 넘어온 "user" : {"userName": "박서윤"}
      email: userInfo.data.user.userEmail, // /user/login의 response로 넘어온 "user" : {"userEmail": "5120a@naver.com"}
      nickname: nickName,
      profileImg: '',
      userIntroduce: `안녕하세요 ${userInfo.data.user.userName}입니다.`,
      userCookCategory: prefer[1],
    };
    const submitUserForm = await axios.post(
      // 'http://localhost:9000/signup',
      'http://i8b206.p.ssafy.io:9000/user/signup',
      userFormPayload
    );
    console.log(submitUserForm);
  };
  const theme = useTheme();

  const checkRegister = async () => {
    const code = new URL(window.location.href).searchParams.get('code');
    const res = await axios.get(
      // `http://localhost:9000/user/login?code=${code}`
      `http://i8b206.p.ssafy.io:9000/user/login?code=${code}`
    );
    console.log(res);
    // loginsuccess false이면
    if (!res.data.loginSuccess) {
      setIsregisterd(false);
      setUserInfo(res);
      // 이미 회원인 경우 추후수정
    } else {
      console.log(`회원가입 된 사람입니다`);
      dispatch(
        login({
          authenticated: true,
          userAccountStatus: res.data.user.userAccountStatus,
          userCookCategory: res.data.user.userCookCategory,
          userCreateDate: res.data.user.userCreateDate,
          userEmail: res.data.user.userEmail,
          userId: res.data.user.userId,
          userImg: res.data.user.userImg,
          userIntroduce: res.data.user.userIntroduce,
          userLastLoginDate: res.data.user.userLastLoginDate,
          userName: res.data.user.userName,
          userNickname: res.data.user.userNickname,
          userRoleType: res.data.user.userRoleType,
          userSnsType: res.data.user.userSnsType,
          userTemp: res.data.user.userTemp,
          accessToken: res.headers.authorization,
        })
      );
      console.log(res);
      history.push('/main');
    }
  };

  useEffect(() => {
    checkRegister();
  }, []);
  return (
    <>
      {/* 나중에 !isRegistered로 바꾸기 */}
      {isRegistered ? (
        <Background>
          <h1>쿠게더에게 더 알려주세요</h1>
          <div>소셜 로그인으로 쿠게더와 함께할 수 있습니다</div>
          <div>
            <input onChange={nickNameHandler} />
          </div>
          <StyledEngineProvider injectFirst>
            <FormControl sx={{ m: 1, width: 200 }}>
              <InputLabel id="select-label">
                선호 분야를 선택해주세요
              </InputLabel>
              <Select
                labelId="select-label"
                id="select"
                value={prefer[0]}
                label="선호 메뉴"
                onChange={preferHandler}
                MenuProps={MenuProps}
                displayEmpty
                inputProps={{ 'aria-label': 'Without label' }}
              >
                {preferCookArr.map((v, a) => {
                  return (
                    <MenuItem value={v[0]} style={getStyles(v, prefer, theme)}>
                      {v[0]}
                    </MenuItem>
                  );
                })}
              </Select>
            </FormControl>
          </StyledEngineProvider>
          <div>{nickName}</div>
          <div>{prefer}</div>

          <button onClick={submitRegister}>회원가입</button>
        </Background>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
export default RedirectPage;
