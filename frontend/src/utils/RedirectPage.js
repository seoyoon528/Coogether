import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
// MUI 설정
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import { useTheme, StyledEngineProvider } from '@mui/material/styles';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import Select from '@mui/material/Select';
import { login } from '../store/AuthSlice';
import { Background } from '../pages/User/SignIn/SigninStyle';
import RedirectImg from './RedirectImg';

function RedirectPage() {
  const history = useHistory();

  const dispatch = useDispatch();
  // 쿼리스트링을 백엔드에 송신
  const [isRegistered, setIsregisterd] = useState(true);
  const [userInfo, setUserInfo] = useState({
    id: '', // /user/login의 response로 넘어온 "user" : {"userId": "KAKAO_2309429382o348"}
    name: '', // /user/login의 response로 넘어온 "user" : {"userName": "박서윤"}
    email: '', // /user/login의 response로 넘어온 "user" : {"userEmail": "5120a@naver.com"}
    nickname: '',
    profileImg: '',
    userIntroduce: '안녕하세요 000입니다.',
    userCookCategory: '',
  });
  const [userImg, setUserImg] = useState('');
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
  const userImgHandler = event => {
    setUserImg(event);
  };
  const nickNameHandler = e => {
    setNickName(e.target.value);
    console.log(userImg);
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
    console.log(userFormPayload);
    // 이석훈 - 로컬 작업으로만 진행하기 때문에 merge때 배포 주소로 바꿀것
    // formdata에 전송할 데이터 담기
    const formData = new FormData();
    formData.append(
      'requestDto',
      new Blob([JSON.stringify(userFormPayload)], { type: 'application/json' })
    );
    // 파일
    formData.append('file', userImg);

    const requestInfo = {
      url: `http://i8b206.p.ssafy.io:9000/user/signup`,
      method: 'POST',
      headers: {
        'Content-Type': 'multipart/form-data',
      },
      data: formData,
    };
    try {
      const submitUserForm = await axios(requestInfo);
      console.log(submitUserForm);

      history.push('/main');
    } catch (err) {
      console.log(err);
    }
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
          userSeq: res.data.user.userSeq,
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
      {!isRegistered ? (
        <Background>
          <h1>쿠게더에게 더 알려주세요</h1>
          <div style={{ paddingBottom: '10px' }}>
            소셜 로그인으로 쿠게더와 함께할 수 있습니다
          </div>
          <div
            style={{
              fontSize: '2vw',
              paddingBottom: '0px',
              width: '40vw',
              margin: 'auto',
              textAlign: 'left',
            }}
          >
            닉네임
            <span
              style={{
                display: 'inline-block',
                width: '4vw',
                height: '3vh',

                background: '#FF0000',
                borderRadius: '9.5px',
                color: 'white',
                textAlign: 'center',
              }}
            >
              <div style={{ fontSize: '0.5vw', paddingBottom: '10px' }}>
                필수
              </div>
            </span>
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <Box
              component="form"
              style={{
                fontSize: '2vh',
                backgroundColor: 'white',
                textAlign: 'left',
                borderRadius: '4px',
                alignItems: 'center',
              }}
            >
              <TextField
                InputLabelProps={{ shrink: false }}
                id="outlined-basic"
                label={nickName === '' ? '닉네임을 작성해주세요' : ''}
                variant="outlined"
                style={{ fontSize: '2vh', width: '40vw' }}
                onChange={nickNameHandler}
              />
            </Box>
          </div>
          <div
            style={{
              fontSize: '2vw',
              paddingBottom: '0px',
              width: '40vw',
              margin: 'auto',
              textAlign: 'left',
            }}
          >
            선호 분야
          </div>
          <FormControl style={{ border: 'transparent' }}>
            <Select
              style={{
                fontSize: '2vh',
                backgroundColor: 'white',
                textAlign: 'left',
                borderRadius: '4px',
                width: '40vw',
              }}
              value={prefer[0]}
              onChange={preferHandler}
              displayEmpty
              inputProps={{ 'aria-label': 'Without label' }}
              renderValue={selected => {
                console.log(selected);
                if (selected === undefined) {
                  return <em>선호 분야를 선택해주세요</em>;
                }

                return selected;
              }}
            >
              {preferCookArr.map((v, a) => {
                return (
                  <MenuItem style={{ fontSize: '2vh' }} value={v[0]}>
                    {v[0]}
                  </MenuItem>
                );
              })}
            </Select>
          </FormControl>
          <RedirectImg userImgHandler={userImgHandler} />
          <div>
            <button
              onClick={submitRegister}
              style={{ background: '#FFDB8D', borderRadius: '4px' }}
            >
              확인
            </button>
          </div>
        </Background>
      ) : (
        <div>Loading...</div>
      )}
    </>
  );
}
export default RedirectPage;
